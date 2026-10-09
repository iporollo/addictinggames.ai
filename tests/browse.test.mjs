import test from 'node:test';
import assert from 'node:assert/strict';
import { browseGames, gameRows, gameTags, verifiedUpdates } from '../lib/browse.ts';

test('three rows preserve every entry in order, including uneven and empty lists', () => {
  for (const count of [0, 1, 2, 5, 45, 46, 100]) {
    const games = Array.from({ length: count }, (_, id) => ({ slug: `game-${id}` }));
    const rows = gameRows(games);
    assert.equal(rows.length, 3);
    assert.deepEqual(rows.flat(), games);
    assert.equal(new Set(rows.flat().map(game => game.slug)).size, count);
  }
});

test('a verified game can belong to multiple supported categories', () => {
  const battle = { slug: 'battle-peaks', category: 'Strategy' };
  const tower = { slug: 'kindlekeep-td', category: 'Strategy' };
  const flight = { slug: 'fly-pieter', category: 'Simulation' };
  assert.deepEqual(gameTags(battle), ['Strategy', 'Multiplayer', 'Local 2-player']);
  assert.deepEqual(browseGames([battle, tower, flight], 'Multiplayer'), [battle, flight]);
  assert.deepEqual(browseGames([battle, tower, flight], 'Tower Defense'), [tower]);
  assert.deepEqual(browseGames([battle, tower, flight], 'Simulators'), [flight]);
  assert.deepEqual(browseGames([battle, tower, flight], 'Puzzle'), []);
});

test('secondary metadata never adds games outside the verified input', () => {
  assert.deepEqual(browseGames([], 'Multiplayer'), []);
  assert.deepEqual(browseGames([], 'Tower Defense'), []);
});

test('Update requires dated evidence, excludes future/stale updates, sorts latest first', () => {
  const now = Date.parse('2026-10-09T12:00:00Z');
  const entries = {
    old: { updatedAt: '2026-08-01T00:00:00Z', evidence: 'report' },
    future: { updatedAt: '2026-10-10T00:00:00Z', evidence: 'report' },
    missing: { updatedAt: '2026-10-09T00:00:00Z', evidence: '' },
    invalid: { updatedAt: 'invalid', evidence: 'report' },
    recent: { updatedAt: '2026-10-08T00:00:00Z', evidence: 'report' },
    latest: { updatedAt: '2026-10-09T00:00:00Z', evidence: 'report' },
  };
  const games = [...Object.keys(entries), 'new-discovery'].map(slug => ({ slug, category: 'Action' }));
  Object.assign(verifiedUpdates, entries);
  try {
    assert.deepEqual(browseGames(games, 'Update', now).map(game => game.slug), ['latest', 'recent']);
  } finally {
    for (const slug of Object.keys(entries)) delete verifiedUpdates[slug];
  }
});


test('multiplayer distinguishes human play modes from computer opponents', () => {
  const flight = { slug: 'fly-pieter', category: 'Simulation' };
  const dogfight = { slug: 'ww2-dogfight', category: 'Action' };
  const local = { slug: 'battle-peaks', category: 'Strategy' };
  const solo = [
    { slug: 'turbo-kart-gp', category: 'Sports' },
    { slug: 'doge-rally', category: 'Sports' },
    { slug: 'soccar', category: 'Sports' },
  ];
  assert.deepEqual(browseGames([flight, dogfight, local, ...solo], 'Multiplayer'), [flight, dogfight, local]);
  assert(gameTags(flight).includes('Online multiplayer'));
  assert(gameTags(dogfight).includes('Online multiplayer'));
  assert(gameTags(local).includes('Local 2-player'));
  for (const game of solo) assert(!gameTags(game).includes('Multiplayer'));
});
