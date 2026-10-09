import { games, type Game } from './catalog';

export type PlayableGame = Game & { shortDescription: string; embedUrl: string };

// Only browser-verified games are shipped. Finalized in verification/GAME-REPORT.md.
export const verifiedEmbeds: Record<string, string> = {
  'fly-pieter': 'https://fly.pieter.com',
  '3d-car-simulator': 'https://3d-car-driving-simulation.vercel.app',
  'island-survivor': 'https://ja.sperdeboer.nl/island/',
  'falling-bubbles': 'https://falling-bubbles.vercel.app/',
  'ww2-dogfight': 'https://fly.zullo.fun/',
};

const descriptions: Record<string, string> = {
  'fly-pieter': 'Take to the skies together',
  'combat-mission': 'Plan your next tactical mission',
  'platform-party': 'Build, share, and play your levels',
  'cybertruck-rocket': 'Rocket powered trucks meet soccer',
  '3d-car-simulator': 'Get behind the wheel in 3D',
  '2d-gta': 'Explore a procedurally generated city',
  'island-survivor': 'Build a life after crash landing',
  'aoe-rts': 'Build your own blocky empire',
  'falling-bubbles': 'Pop your way through falling bubbles',
  'vibesail': 'Catch the wind and set sail',
  'ww2-dogfight': 'Take on thrilling aerial battles',
};

export const playableGames: PlayableGame[] = games
  .filter(game => Boolean(verifiedEmbeds[game.slug]))
  .map(game => ({ ...game, shortDescription: descriptions[game.slug], embedUrl: verifiedEmbeds[game.slug] }));

export const alphabeticalGames = [...playableGames].sort((a, b) =>
  a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }),
);

export function orderedGames(slugs: string[]) {
  return slugs.flatMap(slug => {
    const game = playableGames.find(game => game.slug === slug);
    return game ? [game] : [];
  });
}

export const featuredGames = orderedGames([
  'fly-pieter', 'cybertruck-rocket', 'island-survivor', '3d-car-simulator',
  '2d-gta', 'platform-party', 'aoe-rts', 'vibesail', 'combat-mission', 'falling-bubbles', 'ww2-dogfight',
]);

// Reverse source order is stable; it implies no publication dates.
export const newGames = [...playableGames].reverse();
export const simulatorGames = playableGames.filter(game => game.category === 'Simulation');
export const survivalGames = playableGames.filter(game => ['Survival', 'Strategy'].includes(game.category));

export function matchesGame(game: PlayableGame, query: string) {
  const text = `${game.title} ${game.description} ${game.category} ${game.author}`.toLocaleLowerCase('en');
  return text.includes(query.trim().toLocaleLowerCase('en'));
}
