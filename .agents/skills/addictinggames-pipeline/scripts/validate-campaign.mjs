import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const kinds = ['game', 'mod', 'other'];
const statuses = ['discovering', 'draining', 'interrupted', 'complete'];
const text = x => typeof x === 'string' && x.trim().length > 0;
const refs = x => Array.isArray(x) && x.length > 0 && x.every(text);
const utc = x => typeof x === 'string' && x.endsWith('Z') && Number.isFinite(Date.parse(x));
const reasons = {
  duplicate: 'dedup', owner_excluded: 'owner', out_of_scope: 'scope',
  ai_unverified: 'ai', identity_unresolved: 'identity', no_public_release: 'release',
  guest_access_required: 'guest', observed_game_failure: 'gameplay',
  security_blocker: 'security', security_coverage_insufficient: 'security',
  tesla_limit: 'tesla', tesla_metrics_unavailable: 'metrics',
};
const minimumAttempts = { ai_unverified: 2, identity_unresolved: 2, no_public_release: 2,
  observed_game_failure: 3, security_coverage_insufficient: 2, tesla_metrics_unavailable: 2 };

export function campaignCounts(candidates) {
  const count = fn => candidates.filter(fn).length;
  return {
    discovered: candidates.length,
    game: count(c => c.kind === 'game'), mod: count(c => c.kind === 'mod'), other: count(c => c.kind === 'other'),
    pending: count(c => c.decision?.publish === null), approved: count(c => c.decision?.publish === 1),
    denied: count(c => c.decision?.publish === 0), published: count(c => c.publication?.status === 'live_verified'),
    tested: count(c => c.attempts?.some(a => a.gate === 'gameplay' && a.result !== 'tool_failure')),
    ai_verified: count(c => c.gates?.ai?.status === 'pass'),
    security_reviewed: count(c => c.attempts?.some(a => a.gate === 'security' && a.result !== 'tool_failure')),
  };
}

// Structural guard, not a substitute for inspecting the referenced observations.
export function validateCampaign(run, { complete = false, releaseIds = [], checkRef = () => true, sourceReceipts = [] } = {}) {
  const errors = [];
  const require = (ok, message) => { if (!ok) errors.push(message); };
  const evidence = (value, label) => {
    require(refs(value), `${label}: evidence references required`);
    for (const ref of Array.isArray(value) ? value : []) require(text(ref) && checkRef(ref), `${label}: missing evidence ${ref}`);
  };
  if (!run || run.schema_version !== 2 || !Array.isArray(run.candidates)) return ['schema-v2 candidate ledger required; legacy receipts must be explicitly reconciled'];
  const final = complete || run.status === 'complete';
  require(statuses.includes(run.status), 'invalid campaign status');
  require(text(run.run_id), 'run_id required');
  require(run.scope === 'full_pipeline', 'validator requires a full_pipeline campaign; do not expand a narrower authorization');
  const discovery = run.discovery ?? {};
  require(['timed', 'closed_list', 'target_count'].includes(discovery.mode), 'discovery mode must be timed, closed_list, or target_count');
  if (discovery.mode === 'timed') {
    require(Number.isFinite(discovery.duration_minutes) && discovery.duration_minutes > 0, 'positive requested discovery duration required');
    require(utc(discovery.started_at_utc) && utc(discovery.deadline_utc), 'one UTC start and deadline required');
    require(Date.parse(discovery.deadline_utc) - Date.parse(discovery.started_at_utc) === discovery.duration_minutes * 60000, 'deadline must equal acknowledged start plus requested duration');
    evidence(discovery.start_ack_refs, 'Scout start acknowledgement');
    if (discovery.stopped_at_utc != null) {
      require(utc(discovery.stopped_at_utc), 'invalid discovery stop time');
      if (Date.parse(discovery.stopped_at_utc) < Date.parse(discovery.deadline_utc)) {
        evidence(discovery.owner_cancel_refs, 'early stop requires explicit owner cancellation');
        require(run.status === 'interrupted' && !final, 'cancelled campaign cannot be complete');
      }
      evidence(discovery.stop_ack_refs, 'Scout stop acknowledgement');
    }
    if (final) require(utc(discovery.stopped_at_utc), 'complete campaign requires confirmed discovery stop');
  } else if (discovery.mode === 'closed_list') {
    evidence(discovery.scope_refs, 'closed list owner scope');
    require(discovery.started_at_utc == null && discovery.deadline_utc == null, 'closed list must not launch Scout');
  } else if (discovery.mode === 'target_count') {
    require(Number.isSafeInteger(discovery.target_eligible) && discovery.target_eligible > 0, 'positive owner-requested eligible target required');
    evidence(discovery.scope_refs, 'target-count owner scope');
    require(utc(discovery.started_at_utc), 'target-count discovery start required');
    require(discovery.deadline_utc == null, 'target-count discovery has no inferred deadline');
    if (discovery.stopped_at_utc != null) {
      require(utc(discovery.stopped_at_utc), 'invalid target-count stop time');
      evidence(discovery.stop_ack_refs, 'target-count stop receipt');
      require(run.candidates.filter(c => c.decision?.publish === 1).length >= discovery.target_eligible, 'target-count discovery stopped before enough eligible games were approved');
    }
    if (final) {
      require(utc(discovery.stopped_at_utc), 'complete target-count campaign requires discovery stop');
      require(run.candidates.filter(c => c.publication?.status === 'live_verified').length >= discovery.target_eligible, 'complete target-count campaign requires target live verified');
    }
  }
  const discoveryClosed = discovery.mode === 'closed_list' || utc(discovery.stopped_at_utc);
  if (run.status === 'interrupted') require(text(run.interruption?.reason) && text(run.interruption?.next_action), 'interruption requires fault and recovery action');
  require(run.adjudicator?.family === 'Grok 4.7 High' && run.adjudicator?.provider === 'cursor' && text(run.adjudicator?.model_id), 'Grok 4.7 High through Cursor required');
  evidence(run.adjudicator?.preflight_refs, 'adjudicator model preflight');
  const ids = run.candidates.map(c => c.id);
  require(ids.every(text) && new Set(ids).size === ids.length, 'candidate IDs must be stable and unique');
  require(Array.isArray(run.ordered_candidate_ids) && run.ordered_candidate_ids.length === ids.length && new Set(run.ordered_candidate_ids).size === ids.length && ids.every(id => run.ordered_candidate_ids.includes(id)), 'ordered queue must cover every candidate exactly once');
  for (const id of releaseIds) require(ids.includes(id), `unknown release ID ${id}`);
  require(new Set(releaseIds).size === releaseIds.length, 'release IDs must be unique');
  require(Array.isArray(run.supplied_leads), 'supplied_leads array required, even when empty');
  for (const lead of run.supplied_leads ?? []) require(text(lead.url) && ids.includes(lead.candidate_id), 'every supplied lead must map to a candidate');
  const counts = campaignCounts(run.candidates);
  for (const [key, count] of Object.entries(counts)) require(run.counts?.[key] === count, `count mismatch: ${key}, expected ${count}`);

  const tesla = run.tesla ?? {};
  const existing = tesla.existing_catalog_ids;
  require(Array.isArray(existing) && existing.every(text) && new Set(existing).size === existing.length, 'unique Tesla catalog inventory required');
  evidence(tesla.inventory_refs, 'Tesla catalog inventory');
  const slots = Math.max(0, 5 - (existing?.length ?? 0));
  const selected = run.candidates.filter(c => c.tesla_roadster && c.decision?.publish === 1);
  require(selected.length <= slots, 'Tesla catalog-wide limit exceeded');
  const selectedDestinations = new Set();
  for (const c of run.candidates) {
    const label = c.id || 'missing ID';
    const needReceipts = final || releaseIds.includes(c.id) || c.publication?.status === 'live_verified';
    require(kinds.includes(c.kind), `${label}: normalized kind required`);
    require(text(c.title) && text(c.canonical_url), `${label}: title and exact identity URL required`);
    require(Number.isInteger(c.evidence_revision) && c.evidence_revision > 0, `${label}: evidence revision required`);
    evidence(c.discovery_refs, `${label} discovery`);
    require(typeof c.tesla_roadster === 'boolean', `${label}: Tesla classification required`);
    require(Array.isArray(c.warnings), `${label}: separate warnings array required`);
    require(Array.isArray(c.attempts), `${label}: attempts array required`);
    for (const a of c.attempts ?? []) {
      require(text(a.id) && text(a.gate) && text(a.worker) && utc(a.observed_at_utc) && ['pass', 'fail', 'tool_failure'].includes(a.result), `${label}: malformed attempt`);
      evidence(a.evidence_refs, `${label} attempt ${a.id}`);
    }
    require(new Set((c.attempts ?? []).map(a => a.id)).size === (c.attempts ?? []).length, `${label}: attempt IDs must be unique`);
    require(Array.isArray(c.source_repositories), `${label}: source_repositories array required`);
    for (const repo of c.source_repositories ?? []) {
      require(text(repo.url) && text(repo.discovery_source_url) && utc(repo.observed_at_utc) && text(repo.status), `${label}: repository provenance required`);
      if (needReceipts) require(sourceReceipts.some(r => r.repository_url === repo.url && r.candidate_ids?.includes(c.id) && r.discovery_sources?.some(s => s.url === repo.discovery_source_url && s.observed_at_utc === repo.observed_at_utc)), `${label}: missing public repository receipt for ${repo.url}`);
    }
    const gates = c.gates ?? {};
    for (const [name, gate] of Object.entries(gates)) {
      require(['pending', 'pass', 'fail', 'not_applicable'].includes(gate.status), `${label}: invalid ${name} gate`);
      if (['pass', 'fail'].includes(gate.status)) evidence(gate.evidence_refs, `${label} ${name}`);
    }
    const d = c.decision ?? {};
    require([null, 0, 1].includes(d.publish), `${label}: decision must be pending/null or binary`);
    const p = c.publication ?? {};
    require(['not_started', 'releasing', 'failed', 'live_verified'].includes(p.status), `${label}: invalid publication status`);
    if (d.publish === null) {
      require(text(c.assignment?.owner) && text(c.assignment?.next_action), `${label}: pending candidate needs owner and next action`);
      require(!final, `${label}: pending candidate prevents completion`);
    } else if ([0, 1].includes(d.publish)) {
      require(d.review?.model_id === run.adjudicator?.model_id && d.review?.evidence_revision === c.evidence_revision, `${label}: current independent adjudication required`);
      evidence(d.review?.evidence_refs, `${label} adjudication`);
      evidence(d.evidence_refs, `${label} decision`);
      require(!c.assignment || c.assignment.next_action == null, `${label}: final decision has unfinished evidence work`);
    }
    const pass = name => gates[name]?.status === 'pass';
    if (d.publish === 1) {
      require(['game', 'mod'].includes(c.kind), `${label}: only games/mods can publish`);
      require(['identity', 'ai', 'dedup', 'owner'].every(pass), `${label}: approval missing identity/AI/dedup/owner acceptance`);
      require(text(gates.ai?.quote) && text(gates.ai?.source_url), `${label}: exact AI creation quote/source required`);
      require(!selectedDestinations.has(c.canonical_url), `${label}: duplicate approved destination`);
      selectedDestinations.add(c.canonical_url);
      if (c.kind === 'game') {
        const g = gates.gameplay ?? {};
        require(pass('guest') && pass('gameplay'), `${label}: responsive guest gameplay required`);
        require(g.url === c.canonical_url, `${label}: gameplay URL does not match identity`);
        if (g.basis === 'agent_verified') {
          require(g.model === 'gpt-6-luna' && g.reasoning === 'max' && text(g.input) && text(g.response), `${label}: Luna Max input/response required`);
          require(c.attempts?.some(a => a.gate === 'gameplay' && a.result === 'pass'), `${label}: missing observed gameplay attempt`);
        } else {
          require(g.basis === 'owner_confirmed', `${label}: invalid gameplay basis`);
          evidence(g.owner_statement_refs, `${label} owner confirmation`);
        }
      }
      if (c.kind === 'mod') {
        const a = c.artifact ?? {}; const s = gates.security ?? {};
        require(pass('release') && pass('security'), `${label}: released artifact and security acceptance required`);
        require(text(a.url) && text(a.version) && /^[a-f0-9]{64}$/.test(a.sha256 ?? ''), `${label}: exact artifact identity/SHA-256 required`);
        require(s.workflow === 'Codex Security' && s.artifact_sha256 === a.sha256 && s.artifact_assessed === true && s.blocking_findings === 0 && text(s.coverage) && text(s.runtime_limits), `${label}: adequate matching artifact review required`);
      }
      if (c.tesla_roadster) require(tesla.finalized === true && discoveryClosed, `${label}: Tesla selection requires closed discovery and resolved ranking`);
    }
    if (d.publish === 0) {
      const gateName = reasons[d.reason];
      require(Boolean(gateName), `${label}: unsupported denial reason (tool failures and warnings cannot deny)`);
      if (['no_public_release', 'security_blocker', 'security_coverage_insufficient'].includes(d.reason)) require(c.kind === 'mod', `${label}: artifact review/release denial applies only to mods`);
      if (['observed_game_failure', 'guest_access_required'].includes(d.reason)) require(c.kind === 'game', `${label}: browser gameplay/access denial applies only to games`);
      require(gates[gateName]?.status === 'fail', `${label}: denial must identify a failed requirement`);
      if (d.reason === 'duplicate') require(text(gates.dedup?.match), `${label}: duplicate needs published identity or canonical candidate match`);
      if (d.reason === 'owner_excluded') evidence(gates.owner?.owner_statement_refs, `${label} owner exclusion`);
      if (d.reason === 'guest_access_required') evidence(gates.guest?.owner_rule_refs, `${label} access rule`);
      const attempts = (c.attempts ?? []).filter(a => a.gate === gateName && a.result === 'fail');
      if (minimumAttempts[d.reason]) require(attempts.length >= minimumAttempts[d.reason] && new Set(attempts.map(a => a.id)).size === attempts.length, `${label}: required completed resolution attempts missing`);
      if (d.reason === 'observed_game_failure') require(new Set(attempts.map(a => a.worker)).size >= 2, `${label}: gameplay failure requires a second worker`);
      if (['guest_access_required', 'security_blocker', 'out_of_scope'].includes(d.reason)) require(attempts.length > 0, `${label}: actual failed check required`);
      if (d.reason === 'security_coverage_insufficient') require(text(c.artifact?.url) && /^[a-f0-9]{64}$/.test(c.artifact?.sha256 ?? ''), `${label}: coverage denial requires an obtained exact artifact, not a tool outage`);
      if (d.reason === 'tesla_limit') require(c.tesla_roadster && (slots === 0 || tesla.finalized === true), `${label}: Tesla denial requires full inventory or final ranking`);
      if (d.reason === 'tesla_metrics_unavailable') require(c.tesla_roadster, `${label}: metrics cannot deny an ordinary game`);
    }
    if (releaseIds.includes(c.id)) {
      require(d.publish === 1, `${label}: only approved candidates can release`);
      require(p.status !== 'live_verified', `${label}: already published; do not republish`);
      evidence(c.release_preflight_refs, `${label} current main/live dedup and Tesla occupancy preflight`);
      evidence(c.artwork_refs, `${label} selected artwork`);
    }
    if (p.status !== 'not_started') require(d.publish === 1, `${label}: unapproved publication`);
    if (p.status === 'live_verified') {
      require(/^[a-f0-9]{40}$/.test(p.merge_sha ?? '') && p.deployment_sha === p.merge_sha, `${label}: live deployment must match merge`);
      for (const stage of ['ci_refs', 'deployment_refs', 'live_refs']) evidence(p[stage], `${label} ${stage}`);
    }
    if (final && d.publish === 1) require(p.status === 'live_verified', `${label}: approved publication unfinished`);
  }
  if (tesla.finalized === true && slots > 0) {
    const pool = run.candidates.filter(c => c.tesla_roadster && (c.decision?.publish === 1 || c.decision?.reason === 'tesla_limit'));
    require(!run.candidates.some(c => c.tesla_roadster && c.decision?.publish === null), 'Tesla competitors still unresolved');
    for (const c of pool) {
      const m = c.tesla_metrics ?? {};
      require(['views', 'likes', 'reposts', 'replies', 'quotes'].every(k => Number.isSafeInteger(m[k]) && m[k] >= 0) && /^\d+$/.test(m.post_id ?? '') && utc(m.observed_at_utc) && text(m.source_url), `${c.id}: complete Tesla popularity snapshot required`);
      evidence(m.evidence_refs, `${c.id} Tesla metrics`);
      require(['identity', 'ai', 'guest', 'gameplay', 'dedup', 'owner'].every(k => c.gates?.[k]?.status === 'pass'), `${c.id}: ranked Tesla must qualify`);
    }
    if (!errors.some(e => /Tesla popularity/.test(e))) {
      const interactions = c => ['likes', 'reposts', 'replies', 'quotes'].reduce((n, k) => n + c.tesla_metrics[k], 0);
      pool.sort((a, b) => b.tesla_metrics.views - a.tesla_metrics.views || interactions(b) - interactions(a) || (BigInt(a.tesla_metrics.post_id) < BigInt(b.tesla_metrics.post_id) ? -1 : BigInt(a.tesla_metrics.post_id) > BigInt(b.tesla_metrics.post_id) ? 1 : a.id.localeCompare(b.id)));
      require(pool.slice(0, slots).every(c => c.decision.publish === 1) && pool.slice(slots).every(c => c.decision.publish === 0), 'Tesla selection does not match popularity ranking');
    }
  }
  return errors;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2); const file = args.shift();
    if (!file || args.some((a, i) => a !== '--complete' && a !== '--release' && args[i - 1] !== '--release')) throw new Error('Usage: node validate-campaign.mjs <run.json> [--complete] [--release ID,ID]');
    let root = dirname(resolve(file));
    while (!existsSync(resolve(root, 'package.json'))) {
      const parent = dirname(root); if (parent === root) throw new Error('run must reside under the repository root'); root = parent;
    }
    const run = JSON.parse(readFileSync(file, 'utf8'));
    const checkRef = ref => typeof ref === 'string' && (ref.startsWith('https://') || existsSync(resolve(root, ref.split('#')[0])));
    const sourceReceipts = (run.source_receipt_paths ?? []).flatMap(p => JSON.parse(readFileSync(resolve(root, p), 'utf8')).records ?? []);
    const releaseAt = args.indexOf('--release');
    if (releaseAt >= 0 && (!args[releaseAt + 1] || args[releaseAt + 1].startsWith('--'))) throw new Error('--release requires comma-separated candidate IDs');
    const errors = validateCampaign(run, { complete: args.includes('--complete'), releaseIds: releaseAt < 0 ? [] : args[releaseAt + 1].split(','), checkRef, sourceReceipts });
    if (errors.length) { process.stderr.write(errors.join('\n') + '\n'); process.exitCode = 1; }
    else process.stdout.write(JSON.stringify({ valid: true, counts: campaignCounts(run.candidates) }, null, 2) + '\n');
  } catch (error) { process.stderr.write(error.message + '\n'); process.exitCode = 1; }
}
