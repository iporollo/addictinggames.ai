# Campaign ledger and validation

Read before running a full campaign. This contract supplements the [main skill](../SKILL.md), not historical reports. The validator is a local, read-only structural check; it neither launches workers nor publishes. The supervisor must actually run it at checkpoints, before each release and before declaring completion. It does not guarantee honest evidence, comprehensive discovery, or browser availability. Those require observed receipts and independent review.

## Files and states

Use one schema-v2 `game-discovery-bot/runs/<run-id>/run.json` as the authoritative candidate/assignment ledger. Worker reports remain separate, referenced from that ledger. The parent alone reconciles ledger writes; workers write disjoint report files. Snapshot the ledger before changes. Keep historical receipts unchanged. To resume a legacy run, make a new v2 ledger referencing original evidence and explicitly reconcile candidate identities, aliases and current owner policy. Never mechanically map old held to 0, or overwrite old receipts to make validation pass.

`status`: `discovering`, `draining`, `interrupted`, `complete`. Only a full-pipeline request uses this completion contract. Narrow phase requests retain phase-specific receipts and do not claim full-campaign completion. Owner cancellation is an interrupted campaign with `discovery.owner_cancel_refs` pointing to the explicit instruction; an evidenced early stop is allowed only for that interrupted checkpoint, never full completion; do not use cancellation to silently produce candidate denials.

When new evidence supersedes a gate assessment, replace its active assessment coherently and preserve the old assessment in history. Do not change only `status` to pass while leaving an earlier failure rationale as the current conclusion. Preserve the underlying attempts and increment the evidence revision before re-adjudication.

`decision.publish`: null during work; final 1/0 after Grok adjudication. `publication.status`: `not_started`, `releasing`, `failed`, `live_verified`. A deployment failure changes publication only. Infrastructure outages preserve pending decisions with an owner and next action; they never exhaust a candidate into 0.

## Required shape

All evidence references are nonempty strings: repository-relative receipt paths (optional `#locator`) or exact HTTPS source URLs. Local files must exist. Use actual saved observations for gameplay, artifact assessment, CLI model preflight, Grok output and live verification; a destination URL alone is not a receipt. Raw private statements stay local; public reports contain only the minimum permitted acceptance summary. The validator checks reference presence/existence, not their semantic truth.

Top-level fields:

| Field | Value |
|---|---|
| `schema_version`, `scope`, `run_id` | `2`, `full_pipeline`, stable run identifier |
| `status`, `interruption` | State above; if interrupted, `{reason, next_action}` |
| `discovery` | For `mode: "timed"`, `{duration_minutes, started_at_utc, deadline_utc, start_ack_refs, stopped_at_utc, stop_ack_refs}`; stop fields null/empty until acknowledged; deadline is exactly start + duration. For `mode: "closed_list"`, use `{scope_refs}` to the exact owner-supplied scope and omit Scout clock/ack fields; never launch Scout. For an explicit owner target instead of a duration, use `mode: "target_count"` with `{target_eligible, scope_refs, started_at_utc, stopped_at_utc, stop_ack_refs}` and no inferred deadline; discovery can stop only after that many games are approved, and completion requires that many live-verified publications. |
| `adjudicator` | `{family: "Grok 4.7 High", provider: "cursor", model_id, preflight_refs}`; actual model ID discovered through local CLI, not guessed |
| `ordered_candidate_ids` | All candidate IDs exactly once, in assignment order |
| `supplied_leads` | `[{url, candidate_id}]`, covering every supplied bookmark/lead; empty if none; multiple aliases may map to one candidate |
| `candidates` | Records below, including duplicates and out-of-scope leads |
| `tesla` | `{existing_catalog_ids, inventory_refs, finalized}`; existing IDs are the pre-campaign published baseline, refreshed for outside additions before release, excluding this campaign's entries so they are counted only once |
| `source_receipt_paths` | Repository-relative public source receipt paths, empty until prepared |
| `counts` | Output of `campaignCounts(candidates)` exported by the validator; never hand-maintained |

A candidate includes:

- `id`, `title`, `kind` (`game`, `mod`, `other` only), `canonical_url`, `discovery_refs`, `evidence_revision` (positive integer). Store subtype separately. Increment evidence_revision whenever decision-relevant evidence, identity, applicable owner policy, or Tesla selection changes. Re-adjudicate; do not silently keep an old review.
- `tesla_roadster` boolean, `warnings` array, `source_repositories` array. Each repository has `{url, discovery_source_url, observed_at_utc, status, commit_sha, tag, license}`; unresolved commit/tag/license remain null with explanation in status. Multiple exposed URLs must be preserved.
- `assignment: {owner, next_action}` for every pending candidate, including queued or interrupted work. The supervisor owns items not yet dispatched. For final decisions use null; publication recovery is tracked separately.
- `attempts: [{id, gate, worker, observed_at_utc, result, evidence_refs}]`; result is `pass`, `fail`, or `tool_failure`. Add exact browser/lane, input/response, symptoms and limits in the referenced report. Attempt IDs are unique. Never erase an earlier tool failure after a successful retry.
- `gates`: map of gate names to `{status, evidence_refs, ...details}`. Status is `pending`, `pass`, `fail` or `not_applicable`. `identity`, `ai`, `dedup` (pass means no duplicate), `owner` (pass means no explicit exclusion) are required for approval. `scope` records out-of-scope findings. Gate evidence must be current for the canonical URL/artifact.
- `gates.ai`: exact `quote`, `source_url` and identity-linked evidence. No field requires a named AI tool.
- Games: `gates.guest` and `gates.gameplay`. Gameplay has `url` matching canonical_url and either `{basis: "agent_verified", model: "gpt-6-luna", reasoning: "max", input, response}` with a passing attempt, or `{basis: "owner_confirmed", owner_statement_refs}`. Record the actual guest path/access conditions; don't assume an owner used guest mode if the statement doesn't support it.
- Mods: `gates.release`, `artifact: {url, version, sha256}`, and `gates.security: {status, evidence_refs, workflow: "Codex Security", artifact_sha256, artifact_assessed, blocking_findings, coverage, runtime_limits}`. Artifact hash must match review. `artifact_assessed: true` means adequate coverage of those exact bytes, not just a ZIP listing/source scan. Even a passing review states runtime limits.
- `decision: {publish, reason, evidence_refs, review}`. For pending use `{publish: null, reason: null, evidence_refs: [], review: null}`. Final review is `{model_id, evidence_revision, evidence_refs}` pointing to saved independent output. `reason` is null for approval and one of the denial codes below for 0. Unresolved work requests stay in assignment, not final decisions.
- `publication: {status, ...}`; live verification requires `merge_sha`, identical `deployment_sha`, `ci_refs`, `deployment_refs`, `live_refs`. Record PR URL, artwork and detailed per-entry verification in receipts. Do not mark live from CI success alone.
- Before releasing a selected candidate: `release_preflight_refs` proving current-main/live duplicate check and current Tesla occupancy, plus `artwork_refs` for retained or selected approved artwork. Previously live-verified candidates cannot be submitted again.

## Final denial codes

Every 0 needs independent adjudication, a failed gate and evidence. Never choose a code just to fit validation.

| Reason | Failed gate | Required basis |
|---|---|---|
| `duplicate` | `dedup` | `match` references exact published identity or canonical candidate; repeated source leads must not cause the canonical candidate to be denied |
| `owner_excluded` | `owner` | `owner_statement_refs` to explicit owner exclusion |
| `out_of_scope` | `scope` | Actual check shows not an in-scope browser game/mod |
| `ai_unverified` | `ai` | Two completed focused checks; says evidence unresolved, not proven non-AI |
| `identity_unresolved` | `identity` | Two completed focused checks |
| `no_public_release` | `release` | Two completed checks of official release locations; an inaccessible tool is not an absent release |
| `guest_access_required` | `guest` | Observed mandatory gate plus `owner_rule_refs`; unknown identity/permission preferences require clarification |
| `observed_game_failure` | `gameplay` | Three functioning-tool failed observations, at least two workers; no tool-failure attempt counts |
| `security_blocker` | `security` | Completed review with a material evidence-backed finding |
| `security_coverage_insufficient` | `security` | Exact obtained artifact/hash, initial review and targeted follow-up; inability to adequately assess that artifact, not unavailable tools |
| `owner_declined_review_access` | `artifact_access` | Mod only: observed official download authentication barrier, explicit owner refusal of the required manual assistance and request for a binary decision. Record `owner_statement_refs`, `official_release_url`, `observed_barrier: "authentication_required"`, `required_owner_action_declined: true`, and `owner_requires_binary_without_manual_download: true`, plus an actual failed access check. Means not publishable without the required review; never claims unsafe, unreleased, or broken. |
| `tesla_limit` | `tesla` | Full catalog inventory or completed eligibility/popularity ranking |
| `tesla_metrics_unavailable` | `metrics` | Two completed retrieval checks establish unavailable metrics; unavailable tools remain pending |

Warnings, missing assignment, discovery deadline, missing mute control and unavailable browsers/models are not denial codes. A failed requirement can independently justify 0 without performing unrelated checks (e.g. an explicit owner exclusion needs no gameplay). Preserve any infrastructure failure separately; it must not be the sole basis for denial.

## Tesla ranking

For eligible Tesla candidates that compete for remaining slots, record `tesla_metrics: {post_id, source_url, observed_at_utc, views, likes, reposts, replies, quotes, evidence_refs}` from the strongest game-linked post. Counts must be complete nonnegative integers. Views first, interaction sum second, numeric post ID ascending for ties; candidate ID only breaks an otherwise identical record tie. Save all source snapshots in evidence; the supervisor/Grok verifies that the strongest post was chosen. No arbitrary date window applies here; Hot Right Now retains its own 30-day rule.

Finalize after discovery stops and every potential competitor has either an evidenced independent exclusion or complete ranking evidence. Verify guest gameplay for the highest-ranked candidates until all remaining slots have qualified winners. A lower-ranked candidate can then receive `tesla_limit` without completing gameplay: its measured position cannot displace a verified winner. Retain its gameplay as pending/unverified; the capacity decision does not assert playability. Do not omit a competitor with unknown identity, classification or metrics, or deny one because its browser failed. If the catalog is full, no gameplay/metric collection is necessary solely to justify capacity denial. If overfull, preserve existing entries and report it; no new admissions.

## Source receipts and commands

Public `source-repositories*.json` receipts for new campaigns use `schema_version: 2` and `records`, each with `repository_url`, `candidate_ids`, `discovery_sources: [{url, observed_at_utc}]`, and known commit/tag/license/artifact metadata. Coalesce a shared repository into one record per receipt with all candidate IDs and provenance. Decisions come from the ledger; don't reintroduce legacy held dispositions. Preserve old schema-v1 receipts as historical evidence. Record all exposed repositories even for 0/duplicate candidates. At release the selected candidates' records must exist; at completion every candidate's records must exist, including metadata-only completion after a zero-publication campaign.

From the verified repository root:

```sh
node .agents/skills/addictinggames-pipeline/scripts/validate-campaign.mjs game-discovery-bot/runs/RUN_ID/run.json
node .agents/skills/addictinggames-pipeline/scripts/validate-campaign.mjs game-discovery-bot/runs/RUN_ID/run.json --release A-01,A-02
node .agents/skills/addictinggames-pipeline/scripts/validate-campaign.mjs game-discovery-bot/runs/RUN_ID/run.json --complete
```

Exit 1 means stop that decision/release/completion transition and repair the evidence or ledger; never delete unfinished candidates to make it pass. A checkpoint may legitimately pass with pending candidates. `--release` checks selected approvals while other work continues. `--complete` rejects every pending decision and unfinished approved publication. Repository CI runs the behavioral validator tests; ignored raw run files are checked locally by the supervisor. A passing CI build alone does not validate an actual campaign.
