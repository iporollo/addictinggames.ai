import { games, type Game } from './catalog';

export type PlayableGame = Game & { shortDescription: string; embedUrl: string; sandbox?: string };

export const newGameSlugs = [
  'faux-ami', 'dust-and-lead', 'go-for-launch', 'mars-gt', 'pantry-dash',
  'kindlekeep-td', 'quiet-rooms', 'ink-dash', 'third-mainland-biker', 'dirtline',
  'orbit-forge', 'freesbee', 'moonlit-spellcaster', 'dracula-0', 'thermopylae',
  'neon-nightfall', 'hungry-seal', 'flap-nyc', 'salmon-survival', 'soccar',
];

// New external games get scripts and pointer lock only. In particular, do not
// grant allow-same-origin together with allow-scripts to untrusted game pages.
const newGameSandbox = 'allow-scripts allow-pointer-lock';

// Only browser-verified games are shipped. Finalized in verification/GAME-REPORT.md.
export const verifiedEmbeds: Record<string, string> = {
  'fly-pieter': 'https://fly.pieter.com',
  '3d-car-simulator': 'https://3d-car-driving-simulation.vercel.app',
  'island-survivor': 'https://ja.sperdeboer.nl/island/',
  'falling-bubbles': 'https://falling-bubbles.vercel.app/',
  'ww2-dogfight': 'https://fly.zullo.fun/',
  'soccar': 'https://soccar-one.vercel.app/',
  'salmon-survival': 'https://salmon-survival.vercel.app/',
  'hungry-seal': 'https://hungry-seal.horly.dev/',
  'neon-nightfall': 'https://mdhasibul35.github.io/neon-nightfall/',
  'flap-nyc': 'https://flapnyc.kumodeck.app/',
  'thermopylae': 'https://thermopylae-v2.vercel.app/',
  'dracula-0': 'https://dracula-0.vercel.app/',
  'moonlit-spellcaster': 'https://clubhouse1661.github.io/moonlit-spellcaster/',
  'freesbee': 'https://okidoki9903.github.io/Freesbee/',
  'orbit-forge': 'https://vishalbhoir18.github.io/rocket_orbit_forge/',
  'dirtline': 'https://dirtline.pages.dev/?v=2',
  'third-mainland-biker': 'https://3rdmainland.start.ng/',
  'ink-dash': 'https://rajpurohitkushal92.github.io/khnix-game-12/',
  'quiet-rooms': 'https://53616d616e746861.github.io/quiet-rooms/',
  'kindlekeep-td': 'https://kindlekeep.vercel.app/',
  'pantry-dash': 'https://mdhasibul35.github.io/pantry-dash/',
  'mars-gt': 'https://mars-gt.vercel.app/',
  'go-for-launch': 'https://go4launch.grok.me/',
  'dust-and-lead': 'https://inkstaid.github.io/dust-and-lead/',
  'faux-ami': 'https://faux-ami-french-game.vercel.app/',
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
  'soccar': 'Drive, boost, score',
  'salmon-survival': 'Swim against the current',
  'hungry-seal': 'Swim, snack, and grow',
  'neon-nightfall': 'Survive the glowing horde',
  'flap-nyc': 'Cross a neon Manhattan',
  'thermopylae': 'Enter a Spartan saga',
  'dracula-0': 'Battle beneath a blood moon',
  'moonlit-spellcaster': 'Charge and cast moonlit magic',
  'freesbee': 'Chase the disc across a sunny field',
  'orbit-forge': 'Build a rocket and reach for orbit',
  'dirtline': 'Ride a rugged trail at full speed',
  'third-mainland-biker': 'Race across the Lagos bridge',
  'ink-dash': 'Dash through a neon rogue arena',
  'quiet-rooms': 'Wander through rooms beneath strange skies',
  'kindlekeep-td': 'Defend the vale from goblin waves',
  'pantry-dash': 'Collect cheese and dodge kitchen cats',
  'mars-gt': 'Drive a winding canyon on two worlds',
  'go-for-launch': 'Steer and vent on a night run',
  'dust-and-lead': 'Ride across the pixel Wild West',
  'faux-ami': 'Spot the French false friends',
};

export const playableGames: PlayableGame[] = games
  .filter(game => Boolean(verifiedEmbeds[game.slug]))
  .map(game => ({ ...game, shortDescription: descriptions[game.slug], embedUrl: verifiedEmbeds[game.slug], sandbox: newGameSlugs.includes(game.slug) ? newGameSandbox : undefined }));

export const legacyPlayableGames = playableGames.filter(game => !newGameSlugs.includes(game.slug));

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

export const newGames = orderedGames(newGameSlugs);
export const simulatorGames = legacyPlayableGames.filter(game => game.category === 'Simulation');
export const survivalGames = legacyPlayableGames.filter(game => ['Survival', 'Strategy'].includes(game.category));

export function matchesGame(game: PlayableGame, query: string) {
  const text = `${game.title} ${game.description} ${game.category} ${game.author}`.toLocaleLowerCase('en');
  return text.includes(query.trim().toLocaleLowerCase('en'));
}
