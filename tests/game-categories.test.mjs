import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { allListedGames, matchesGame, newGames } from '../lib/games.ts';
import { browseGames, browseTabs } from '../lib/browse.ts';
import { gameCategories, gameTags, gameModeLabels, reviewedCategories, multiplayerModes } from '../lib/game-categories.ts';

test('the complete reviewed roster is preserved and every accepted decision reaches browse', () => {
  const audit = new URL('../docs/category-audit/2026-10-11/', import.meta.url);
  const roster = JSON.parse(readFileSync(new URL('roster.json', audit), 'utf8'));
  const decisions = JSON.parse(readFileSync(new URL('decisions.json', audit), 'utf8'));
  assert.equal(roster.length, 167);
  assert.equal(allListedGames.length, roster.length);
  assert.deepEqual(new Set(allListedGames.map(game => game.slug)), new Set(roster.map(game => game.slug)));
  assert.deepEqual(new Set(decisions.map(game => game.slug)), new Set(roster.map(game => game.slug)));
  for (const decision of decisions) {
    const game = allListedGames.find(game => game.slug === decision.slug);
    assert.equal(game.title, decision.title);
    assert.equal('externalUrl' in game ? game.externalUrl : game.gameUrl, decision.url, game.slug);
    assert.deepEqual(gameTags(game), decision.categories, game.slug);
  }
});

test('every listed game has one to three unique categories exposed by browse', () => {
  for (const game of allListedGames) {
    const tags = gameTags(game);
    assert(tags.length >= 1 && tags.length <= 3, game.slug);
    assert.equal(new Set(tags).size, tags.length, game.slug);
    for (const tag of tags) {
      assert(gameCategories.includes(tag), `${game.slug}: ${tag}`);
      assert(browseTabs.includes(tag));
      assert(browseGames(allListedGames, tag).includes(game));
    }
  }
});

test('reviewed categories and modes belong to existing listed games', () => {
  const slugs = new Set(allListedGames.map(game => game.slug));
  for (const [slug, categories] of Object.entries(reviewedCategories)) {
    assert(slugs.has(slug), slug);
    assert(categories.length >= 1 && categories.length <= 3, slug);
    assert.equal(new Set(categories).size, categories.length, slug);
    const game = allListedGames.find(game => game.slug === slug);
    assert.equal(game.category === 'Simulation' ? 'Simulators' : game.category, categories[0], slug);
    if (categories.includes('Multiplayer')) assert(multiplayerModes[slug], slug);
  }
  for (const slug of Object.keys(multiplayerModes)) {
    assert(slugs.has(slug), slug);
    const game = allListedGames.find(game => game.slug === slug);
    assert(gameTags(game).includes('Multiplayer'), slug);
    assert.equal(gameModeLabels(game).length, 1, slug);
  }
});

test('browse includes direct-play games while preserving their external links', () => {
  assert.deepEqual(browseGames(allListedGames, 'All'), allListedGames);
  const direct = allListedGames.filter(game => 'externalUrl' in game);
  assert(direct.length > 0);
  for (const game of direct) {
    for (const category of gameTags(game)) assert(browseGames(allListedGames, category).includes(game), game.slug);
    assert(newGames.includes(game), game.slug);
    assert(game.externalUrl.startsWith('https://'));
  }
});

test('search includes every assigned category and human multiplayer mode', () => {
  for (const game of allListedGames) {
    for (const label of [...gameTags(game), ...gameModeLabels(game)]) assert(matchesGame(game, label), `${game.slug}: ${label}`);
  }
});
