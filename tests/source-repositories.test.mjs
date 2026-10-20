import test from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';

const receiptsRoot = new URL('../game-repos/', import.meta.url);

test('source-repository receipts retain provenance and support historical and current schemas', () => {
  const receiptUrls = readdirSync(receiptsRoot, { withFileTypes: true })
    .filter(entry => entry.isDirectory())
    .flatMap(entry => {
      const directoryUrl = new URL(`${entry.name}/`, receiptsRoot);
      return readdirSync(directoryUrl, { withFileTypes: true })
        .filter(file => file.isFile() && /^source-repositories(?:-[a-z0-9-]+)?\.json$/.test(file.name))
        .map(file => new URL(file.name, directoryUrl));
    })
    .filter(url => existsSync(url));

  assert(receiptUrls.length > 0, 'at least one source-repository receipt exists');
  for (const receiptUrl of receiptUrls) {
    const receipt = JSON.parse(readFileSync(receiptUrl, 'utf8'));
    assert([1, 2].includes(receipt.schema_version), receiptUrl.pathname);
    assert(Array.isArray(receipt.records) && receipt.records.length > 0, receiptUrl.pathname);

    const repositories = new Set();
    for (const record of receipt.records) {
      assert.match(record.repository_url, /^https:\/\/[^/]+\//, `${record.title}: repository URL`);
      assert(!repositories.has(record.repository_url), `${record.title}: duplicate repository receipt`);
      repositories.add(record.repository_url);
      if (receipt.schema_version === 1) {
        assert(['eligible', 'published', 'held', 'excluded', 'duplicate'].includes(record.disposition), `${record.title}: historical disposition`);
        assert(record.repository_observed_at_utc || receipt.observed_at_utc, `${record.title}: observed time`);
      } else {
        assert(Array.isArray(record.candidate_ids) && record.candidate_ids.length > 0, 'candidate IDs required');
        assert.equal(new Set(record.candidate_ids).size, record.candidate_ids.length, 'unique candidate IDs');
        assert(record.candidate_ids.every(id => typeof id === 'string' && id.length > 0), 'nonempty candidate IDs');
        assert(Array.isArray(record.discovery_sources) && record.discovery_sources.length > 0, 'repository discovery provenance required');
        for (const source of record.discovery_sources) {
          assert.match(source.url, /^https:\/\/[^/]+/);
          assert(Number.isFinite(Date.parse(source.observed_at_utc)), 'valid observation time');
        }
      }
      if (record.tag) assert(record.tag_commit_sha || record.commit_sha, `${record.title}: immutable tag commit`);
      for (const asset of record.release_assets ?? []) {
        assert.match(asset.sha256, /^[0-9a-f]{64}$/, `${record.title}/${asset.name}: SHA-256`);
        assert.match(asset.url, /^https:\/\/[^/]+\//, `${record.title}/${asset.name}: asset URL`);
      }
    }
  }
});
