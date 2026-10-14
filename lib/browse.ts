import { gameTags, gameCategories } from './game-categories.ts';
export { gameTags, gameModeLabels, multiplayerModes } from './game-categories.ts';

export const browseTabs = ['All', 'Action', 'Update', ...gameCategories.filter(category => category !== 'Action')] as const;
export type BrowseTab = typeof browseTabs[number];

// Add an entry only after a game update (not its discovery) is verified.
// Dates are UTC ISO timestamps; evidence identifies the report or release checked.
export const verifiedUpdates: Record<string, { updatedAt: string; evidence: string }> = {};

export function browseGames<T extends { category: string; slug: string }>(games: T[], tab: BrowseTab, now = Date.now()): T[] {
  if (tab === 'All') return games;
  if (tab === 'Update') return games.filter(game => {
    const update = verifiedUpdates[game.slug];
    if (!update?.evidence.trim()) return false;
    const age = now - Date.parse(update.updatedAt);
    return age >= 0 && age <= 30 * 24 * 60 * 60 * 1000;
  }).sort((a, b) => Date.parse(verifiedUpdates[b.slug].updatedAt) - Date.parse(verifiedUpdates[a.slug].updatedAt));
  return games.filter(game => gameTags(game).includes(tab));
}

export function gameRows<T>(games: T[], rowCount = 3): T[][] {
  const size = Math.ceil(games.length / rowCount);
  return Array.from({ length: rowCount }, (_, row) => games.slice(row * size, (row + 1) * size));
}
