import type { PlayableGame } from './games';

export const browseTabs = ['All', 'Action', 'Update', 'Simulators', 'Survival', 'Strategy', 'Multiplayer', 'Puzzle', 'Arcade', 'Adventure', 'Racing', 'Sports', 'Tower Defense'] as const;
export type BrowseTab = typeof browseTabs[number];

// Secondary genres supported by catalog descriptions and the dated scout reports.
// This is presentation metadata only: the verified playable list remains the gate.
const secondaryTags: Record<string, string[]> = {
  'fly-pieter': ['Multiplayer'],
  'battle-peaks': ['Multiplayer'], // Batch 5: a local two-player match was played.
  'kindlekeep-td': ['Tower Defense'],
  'ash-line': ['Tower Defense'], // Batch 9: placed a tower and started a wave.
  'plaid-circuit': ['Racing', 'Arcade'],
  'dili-cart': ['Racing'],
  'third-mainland-biker': ['Racing'],
  'dracula-0': ['Adventure'],
  'ashen-vow': ['Adventure'],
  'neon-nightfall': ['Survival'],
  'ink-dash': ['Survival'],
};

// Add an entry only after a game update (not its discovery) is verified.
// Dates are UTC ISO timestamps; evidence identifies the report or release checked.
export const verifiedUpdates: Record<string, { updatedAt: string; evidence: string }> = {};

export function gameTags(game: { category: string; slug: string }): string[] {
  return [...new Set([game.category === 'Simulation' ? 'Simulators' : game.category, ...(secondaryTags[game.slug] ?? [])])];
}

export function browseGames(games: PlayableGame[], tab: BrowseTab, now = Date.now()) {
  if (tab === 'All') return games;
  if (tab === 'Update') return games.filter(game => {
    const update = verifiedUpdates[game.slug];
    if (!update?.evidence.trim()) return false;
    const age = now - Date.parse(update.updatedAt);
    return age >= 0 && age <= 30 * 24 * 60 * 60 * 1000;
  }).sort((a, b) => Date.parse(verifiedUpdates[b.slug].updatedAt) - Date.parse(verifiedUpdates[a.slug].updatedAt));
  return games.filter(game => gameTags(game).includes(tab));
}

export function gameRows<T>(games: T[]): T[][] {
  const size = Math.ceil(games.length / 3);
  return Array.from({ length: 3 }, (_, row) => games.slice(row * size, (row + 1) * size));
}
