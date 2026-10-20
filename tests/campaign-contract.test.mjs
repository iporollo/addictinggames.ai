import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { campaignCounts, validateCampaign } from '../.agents/skills/addictinggames-pipeline/scripts/validate-campaign.mjs';

const ref = ['reports/observation.json'];
const gate = (extra = {}) => ({ status: 'pass', evidence_refs: ref, ...extra });
const attempt = (name, result = 'pass', worker = 'luna-1', id = 'attempt-1') => ({ id, gate: name, result, worker, observed_at_utc: '2026-10-20T16:00:00Z', evidence_refs: ref });
function candidate(id = 'A-01') {
  return {
    id, title: 'Fixture game', kind: 'game', canonical_url: `https://example.test/${id}`,
    evidence_revision: 1, discovery_refs: ref, tesla_roadster: false, warnings: [], source_repositories: [],
    assignment: null, attempts: [attempt('gameplay')],
    gates: { identity: gate(), ai: gate({ quote: 'AI-assisted code and artwork were used during development.', source_url: 'https://example.test/README' }), dedup: gate(), owner: gate(), guest: gate(),
      gameplay: gate({ basis: 'agent_verified', url: `https://example.test/${id}`, model: 'gpt-6-luna', reasoning: 'max', input: 'ArrowRight', response: 'Player moved right.' }) },
    decision: { publish: 1, reason: null, evidence_refs: ref, review: { model_id: 'grok-4.7-high', evidence_revision: 1, evidence_refs: ref } },
    publication: { status: 'not_started' }, release_preflight_refs: ref, artwork_refs: ref,
  };
}
function campaign(candidates = [candidate()]) {
  return {
    schema_version: 2, scope: 'full_pipeline', run_id: 'fixture', status: 'draining',
    discovery: { mode: 'timed', duration_minutes: 120, started_at_utc: '2026-10-20T15:45:00Z', deadline_utc: '2026-10-20T17:45:00Z', start_ack_refs: ref, stopped_at_utc: '2026-10-20T17:45:00Z', stop_ack_refs: ref },
    adjudicator: { family: 'Grok 4.7 High', provider: 'cursor', model_id: 'grok-4.7-high', preflight_refs: ref },
    ordered_candidate_ids: candidates.map(c => c.id), supplied_leads: [], candidates,
    tesla: { existing_catalog_ids: [], inventory_refs: ref, finalized: false }, source_receipt_paths: [], counts: campaignCounts(candidates),
  };
}
function pending(c) {
  c.decision = { publish: null, reason: null, review: null, evidence_refs: [] };
  c.assignment = { owner: 'supervisor', next_action: 'Assign functioning gameplay lane' };
  c.gates.gameplay = { status: 'pending' }; c.attempts = [];
  return c;
}
function deny(c, reason, name, attempts = []) {
  c.decision.publish = 0; c.decision.reason = reason;
  c.gates[name] = { status: 'fail', evidence_refs: ref }; c.attempts = attempts;
  return c;
}
function live(c) {
  c.publication = { status: 'live_verified', merge_sha: 'a'.repeat(40), deployment_sha: 'a'.repeat(40), ci_refs: ref, deployment_refs: ref, live_refs: ref };
  return c;
}
const errors = (r, options = {}) => validateCampaign(r, options).join('\n');

test('Keyboard Island style disclosure passes without named model; warnings do not deny', () => {
  const c = candidate(); c.warnings = ['fan character', 'simple repetitive mechanics', 'no source license'];
  assert.deepEqual(validateCampaign(campaign([c]), { releaseIds: [c.id] }), []);
});

test('TT Kart awaiting a real input is pending, cannot release or complete', () => {
  const c = pending(candidate('A-75')); const r = campaign([c]);
  assert.deepEqual(validateCampaign(r), []);
  assert.match(errors(r, { complete: true }), /pending candidate prevents completion/);
  assert.match(errors(r, { releaseIds: [c.id] }), /only approved/);
  c.assignment = null;
  assert.match(errors(r), /needs owner and next action/);
});

test('vanished tabs, mute and worker outages cannot be terminal denials or game failures', () => {
  for (const reason of ['browser_unavailable', 'mute_missing', 'worker_unavailable']) {
    const c = deny(candidate(), reason, 'gameplay', [attempt('gameplay', 'tool_failure')]);
    assert.match(errors(campaign([c])), /unsupported denial reason/);
  }
  const c = deny(candidate(), 'observed_game_failure', 'gameplay', [1, 2, 3].map(i => attempt('gameplay', 'tool_failure', `worker-${i}`, String(i))));
  assert.match(errors(campaign([c])), /completed resolution attempts missing/);
  const r = campaign([pending(candidate())]); r.status = 'interrupted'; r.interruption = { reason: 'browser unavailable', next_action: 'repair control and reassign' };
  assert.deepEqual(validateCampaign(r), []);
});

test('observed game failure requires three actual attempts and two workers', () => {
  const c = deny(candidate(), 'observed_game_failure', 'gameplay', [1, 2, 3].map(i => attempt('gameplay', 'fail', 'same-worker', String(i))));
  assert.match(errors(campaign([c])), /second worker/);
  c.attempts[2].worker = 'second-worker';
  assert.deepEqual(validateCampaign(campaign([c])), []);
});

test('owner confirmation replaces only gameplay, never AI authorship', () => {
  const c = candidate(); c.attempts = []; c.gates.gameplay = gate({ basis: 'owner_confirmed', url: c.canonical_url, owner_statement_refs: ref });
  assert.deepEqual(validateCampaign(campaign([c])), []);
  c.gates.ai.status = 'pending';
  assert.match(errors(campaign([c])), /approval missing/);
});

test('unreleased mod can be denied after actual official checks; opaque artifact cannot pass source-only review', () => {
  const c = deny(candidate(), 'no_public_release', 'release', [attempt('release', 'fail', 'reviewer', 'r1'), attempt('release', 'fail', 'reviewer', 'r2')]); c.kind = 'mod';
  assert.deepEqual(validateCampaign(campaign([c])), []);
  c.attempts[1].result = 'tool_failure';
  assert.match(errors(campaign([c])), /resolution attempts missing/);
  c.decision.publish = 1; c.decision.reason = null; c.gates.release = gate();
  c.artifact = { url: 'https://example.test/mod.zip', version: '1.0', sha256: 'b'.repeat(64) };
  c.gates.security = gate({ workflow: 'Codex Security', artifact_sha256: c.artifact.sha256, artifact_assessed: false, blocking_findings: 0, coverage: 'source only', runtime_limits: 'not installed' });
  assert.match(errors(campaign([c])), /adequate matching artifact review/);
  c.gates.security.artifact_assessed = true; c.gates.security.coverage = 'exact artifact assessed';
  assert.deepEqual(validateCampaign(campaign([c])), []);
  c.gates.security.artifact_sha256 = 'c'.repeat(64);
  assert.match(errors(campaign([c])), /matching artifact/);
});

test('deployment failure preserves approval but prevents complete; live identity must match', () => {
  const c = candidate(); c.publication.status = 'failed'; const r = campaign([c]);
  assert.deepEqual(validateCampaign(r), []);
  assert.equal(c.decision.publish, 1);
  assert.match(errors(r, { complete: true }), /publication unfinished/);
  live(c); r.counts = campaignCounts(r.candidates);
  assert.deepEqual(validateCampaign(r, { complete: true }), []);
  assert.match(errors(r, { releaseIds: [c.id] }), /already published/);
  c.publication.deployment_sha = 'b'.repeat(40);
  assert.match(errors(r), /deployment must match/);
});

test('all candidate IDs, normalized kinds, counts and supplied leads must reconcile', () => {
  const r = campaign([candidate(), candidate('A-02')]); r.ordered_candidate_ids.pop();
  assert.match(errors(r), /queue must cover/);
  r.ordered_candidate_ids.push('A-02'); r.candidates[0].kind = 'game (daily timed trivia)';
  assert.match(errors(r), /normalized kind/);
  r.supplied_leads.push({ url: 'https://example.test/bookmark', candidate_id: 'missing' });
  assert.match(errors(r), /supplied lead/);
});

test('clock cannot silently shorten 120-minute discovery and final stop must be confirmed', () => {
  const r = campaign([live(candidate())]); r.discovery.deadline_utc = '2026-10-20T17:44:30Z';
  assert.match(errors(r), /deadline must equal/);
  r.discovery.deadline_utc = '2026-10-20T17:45:00Z'; r.discovery.stop_ack_refs = [];
  assert.match(errors(r, { complete: true }), /stop acknowledgement/);
});

test('old Grok verdict cannot survive changed evidence; missing files fail validation', () => {
  const r = campaign(); r.candidates[0].evidence_revision++;
  assert.match(errors(r), /current independent adjudication/);
  assert.match(errors(campaign(), { checkRef: () => false }), /missing evidence/);
});

test('source receipts cover denied and duplicate candidates as well as approved ones', () => {
  const c = deny(candidate(), 'duplicate', 'dedup'); c.gates.dedup.match = 'published-slug';
  c.source_repositories.push({ url: 'https://gitlab.com/creator/game', discovery_source_url: 'https://example.test/post', observed_at_utc: '2026-10-20T16:00:00Z', status: 'exposed' });
  const r = campaign([c]);
  assert.match(errors(r, { complete: true }), /missing public repository receipt/);
  const sourceReceipts = [{ repository_url: c.source_repositories[0].url, candidate_ids: [c.id], discovery_sources: [{ url: 'https://example.test/post', observed_at_utc: '2026-10-20T16:00:00Z' }] }];
  assert.deepEqual(validateCampaign(r, { complete: true, sourceReceipts }), []);
});

test('Tesla counts existing catalog, waits for competitors and enforces ranking', () => {
  const a = candidate('A'); const b = candidate('B');
  for (const [i, c] of [a, b].entries()) {
    c.tesla_roadster = true;
    c.tesla_metrics = { post_id: String(i + 100), source_url: 'https://x.com/creator/status/100', observed_at_utc: '2026-10-20T17:46:00Z', views: 10 + i, likes: 1, reposts: 0, replies: 0, quotes: 0, evidence_refs: ref };
  }
  const r = campaign([a, b]); r.tesla.existing_catalog_ids = ['old1', 'old2', 'old3', 'old4']; r.tesla.finalized = true;
  assert.match(errors(r), /catalog-wide limit/);
  deny(b, 'tesla_limit', 'tesla'); r.counts = campaignCounts(r.candidates);
  assert.match(errors(r), /does not match popularity ranking/);
  b.tesla_metrics.views = 9;
  assert.deepEqual(validateCampaign(r), []);
  pending(b); r.counts = campaignCounts(r.candidates);
  assert.match(errors(r), /competitors still unresolved/);
});

test('full Tesla catalog permits capacity denial without gameplay; ordinary missing metrics never deny', () => {
  const c = deny(pending(candidate()), 'tesla_limit', 'tesla'); c.assignment = null; c.decision.review = { model_id: 'grok-4.7-high', evidence_revision: 1, evidence_refs: ref }; c.decision.evidence_refs = ref; c.tesla_roadster = true;
  const r = campaign([c]); r.tesla.existing_catalog_ids = ['1', '2', '3', '4', '5'];
  assert.deepEqual(validateCampaign(r), []);
  c.tesla_roadster = false; c.decision.reason = 'tesla_metrics_unavailable'; c.gates.metrics = { status: 'fail', evidence_refs: ref };
  assert.match(errors(r), /metrics cannot deny an ordinary/);
});

test('historical campaign without normalized ledger cannot masquerade as complete', () => {
  assert.match(validateCampaign({ status: 'complete_live_verified', ordered_candidate_ids: ['A-01', 'A-02'], discovered_total: 205 }).join('\n'), /schema-v2/);
});

test('CLI validates actual receipt paths and exits nonzero for missing evidence', () => {
  const root = mkdtempSync(join(tmpdir(), 'campaign-contract-'));
  try {
    writeFileSync(join(root, 'package.json'), '{}');
    const r = campaign([live(candidate())]);
    // Replace fixture references with an actual saved local receipt.
    const content = JSON.stringify(r).replaceAll('reports/observation.json', 'observation.json');
    writeFileSync(join(root, 'run.json'), content); writeFileSync(join(root, 'observation.json'), '{}');
    const script = fileURLToPath(new URL('../.agents/skills/addictinggames-pipeline/scripts/validate-campaign.mjs', import.meta.url));
    const good = spawnSync(process.execPath, [script, join(root, 'run.json'), '--complete'], { encoding: 'utf8' });
    assert.equal(good.status, 0, good.stderr); assert.equal(JSON.parse(good.stdout).counts.published, 1);
    rmSync(join(root, 'observation.json'));
    const bad = spawnSync(process.execPath, [script, join(root, 'run.json'), '--complete'], { encoding: 'utf8' });
    assert.equal(bad.status, 1); assert.match(bad.stderr, /missing evidence/);
  } finally { rmSync(root, { recursive: true, force: true }); }
});

test('closed supplied lists can complete without authorizing Scout discovery', () => {
  const r = campaign([live(candidate())]); r.discovery = { mode: 'closed_list', scope_refs: ref };
  assert.deepEqual(validateCampaign(r, { complete: true }), []);
  r.discovery.started_at_utc = '2026-10-20T15:45:00Z';
  assert.match(errors(r), /must not launch Scout/);
});

test('explicit cancellation allows truthful interrupted early stop, not completion', () => {
  const r = campaign([pending(candidate())]); r.status = 'interrupted';
  r.interruption = { reason: 'owner cancelled', next_action: 'await explicit resume' };
  r.discovery.stopped_at_utc = '2026-10-20T16:00:00Z';
  assert.match(errors(r), /early stop requires explicit owner cancellation/);
  r.discovery.owner_cancel_refs = ref;
  assert.deepEqual(validateCampaign(r), []);
  assert.match(errors(r, { complete: true }), /cancelled campaign cannot be complete/);
});

test('browser games cannot be denied under mod artifact requirements', () => {
  const c = deny(candidate(), 'no_public_release', 'release', [attempt('release', 'fail', 'worker', '1'), attempt('release', 'fail', 'worker', '2')]);
  assert.match(errors(campaign([c])), /applies only to mods/);
});
