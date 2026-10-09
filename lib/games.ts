import { games, type Game } from './catalog';
import { directGames, type DirectGame } from './direct-games';

export type PlayableGame = Game & { shortDescription: string; embedUrl: string; sandbox?: string };
export type ListedGame = PlayableGame | DirectGame;

export const newGameSlugs = [
  'color-war', 'night-shift', 'pit-tactics', 'comet-cup', 'pip-the-plant',
  'toadstool-crossing', 'doge-rally', 'toybox-push', 'lantern-isle', 'foundry',
  'turbo-kart-gp', 'gigacity', 'terra-incognita', 'rajyam', 'pulse',
  'k-dudu-ironfang', 'sadie-and-luna', 'ash-line', 'heroes-journey', 'plaid-circuit',
  'dili-cart', 'project-nova', 'trip-ibadan', 'snowboard-supreme', 'senor-inteligente',
  'sykes-picot', 'ripple-pool', 'church-life', 'time-echo', 'nushi-fishing',
  'ashen-vow', 'little-lake', 'dliclips-rush', 'dlicom-attack', 'ski-jumping',
  'skyrunner', 'stardust-isles', 'battle-peaks', 'lava-lasso', 'mutual-fun',
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
  'color-war': 'https://solider10.github.io/colorwar/',
  'night-shift': 'https://games.jimmychandra.com/games/night_shift/',
  'pit-tactics': 'https://www.scenario.com/explorations/pit-tactics/',
  'comet-cup': 'https://legendary-faloodeh-080537.netlify.app/games/comet-cup/index.html',
  'pip-the-plant': 'https://legendary-faloodeh-080537.netlify.app/games/pip-the-plant/index.html',
  'toadstool-crossing': 'https://toadstoolcrossing.grok.me/',
  'doge-rally': 'https://slate-juniper-arch-drum.grok.me/',
  'toybox-push': 'https://games.jimmychandra.com/games/toybox_push/',
  'lantern-isle': 'https://games.jimmychandra.com/games/lantern_isle/',
  'foundry': 'https://games.jimmychandra.com/games/foundry/',
  'turbo-kart-gp': 'https://turbo-kart-gp-6e9.pages.dev/',
  'gigacity': 'https://sael.net/gigacity',
  'terra-incognita': 'https://mts.now/mathofthewild',
  'rajyam': 'https://playrajyam.com/',
  'pulse': 'https://orbix.grok.me/',
  'k-dudu-ironfang': 'https://oasis-winter-blade-thunder.grok.me/',
  'plaid-circuit': 'https://roadster.grok.me/',
  'heroes-journey': 'https://heroezjourney.com/',
  'ash-line': 'https://cedar-crisp-sky-orbit.grok.me/ash-line.html',
  'sadie-and-luna': 'https://sadieandluna-thegame.grok.me/',
  'senor-inteligente': 'https://inteligente.lol/',
  'snowboard-supreme': 'https://snowboard-supreme.vercel.app/',
  'trip-ibadan': 'https://trip-ibadan.vercel.app/',
  'project-nova': 'https://project-nova-v0001.grok.me/',
  'dili-cart': 'https://dili-cart.pages.dev/',
  'nushi-fishing': 'https://nushizuri02.netlify.app/',
  'time-echo': 'https://time-echo-play.vercel.app/',
  'church-life': 'https://churchlife.netlify.app/',
  'ripple-pool': 'https://ripplepool.app/',
  'sykes-picot': 'https://sykespicot.io/',
  'ski-jumping': 'https://skijumping.io/',
  'dlicom-attack': 'https://dlicom-attack.vercel.app/',
  'dliclips-rush': 'https://dliclips-rush.netlify.app/',
  'little-lake': 'https://fishing-supdlicomcom.vercel.app/',
  'ashen-vow': 'https://pearl-spark-hazel-bold.grok.me/',
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
  'mutual-fun': 'https://mutual-self.vercel.app/',
  'lava-lasso': 'https://sloptopia.gooooooooor.chatgpt.site/games/lava-lasso.html?from=sloptopia',
  'battle-peaks': 'https://battle-peaks1.vercel.app/',
  'stardust-isles': 'https://game.danzechen.world/',
  'skyrunner': 'https://games.johnslagboom.com/skyrunner/',
};

const descriptions: Record<string, string> = {
  'color-war': 'Capture the board one tile at a time',
  'night-shift': 'Push crates through a 3D factory',
  'pit-tactics': 'Lead a squad through a mining-pit battle',
  'comet-cup': 'Race a colorful three-lap kart circuit',
  'pip-the-plant': 'Water a tiny plant and help it grow',
  'toadstool-crossing': 'Hop across traffic and fill every lily home',
  'doge-rally': 'Rally a coin against the computer',
  'toybox-push': 'Push toy blocks onto gold stars',
  'lantern-isle': 'Explore an island and restore its lighthouse',
  'foundry': 'Push factory crates through puzzle shifts',
  'turbo-kart-gp': 'Race a four-track cup with seven rivals',
  'gigacity': 'Fly through a generated vertical city',
  'terra-incognita': 'Explore an island of math puzzles',
  'rajyam': 'Aim and fire to defend your castle',
  'pulse': 'Switch sides and keep the pulse alive',
  'k-dudu-ironfang': 'Fight through a pixel-art action stage',
  'plaid-circuit': 'Choose a car and race an arcade circuit',
  'heroes-journey': 'Battle knights on a colorful forest road',
  'ash-line': 'Defend a route from waves of zombies',
  'sadie-and-luna': 'Guide two dogs through playful challenges',
  'senor-inteligente': 'Lasso the signs in a playful satire',
  'snowboard-supreme': 'Carve a line down an endless mountain',
  'trip-ibadan': 'Pick up passengers and drive the city route',
  'project-nova': 'Dodge and fire across neon space lanes',
  'dili-cart': 'Race the Dili Circuit as a guest',
  'nushi-fishing': 'Cast a line in the rain and reel in a catch',
  'time-echo': 'Find a memory inside a repeating 3D world',
  'church-life': 'Meet the neighbors on Grace Avenue',
  'ripple-pool': 'Merge matching drops in a calming pool',
  'sykes-picot': 'Draw a proposed historical map',
  'ski-jumping': 'Leap from the ski jump and gather speed',
  'dlicom-attack': 'Battle bots across a digital network',
  'dliclips-rush': 'Tap through a fast clip challenge',
  'little-lake': 'Cast a line in a quiet fishing game',
  'ashen-vow': 'Explore and fight through a dark fantasy world',
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
  'mutual-fun': 'Sprint for a seat in the boardroom',
  'lava-lasso': 'Swing above the rising lava',
  'battle-peaks': 'Aim, launch, and outplay a friend',
  'stardust-isles': 'Explore a bright island village',
  'skyrunner': 'Boost through the neon canyon',
};

export const playableGames: PlayableGame[] = games
  .filter(game => Boolean(verifiedEmbeds[game.slug]))
  .map(game => ({ ...game, shortDescription: descriptions[game.slug], embedUrl: verifiedEmbeds[game.slug], sandbox: newGameSlugs.includes(game.slug) ? newGameSandbox : undefined }));

export const legacyPlayableGames = playableGames.filter(game => !newGameSlugs.includes(game.slug));

export const alphabeticalGames = [...playableGames].sort((a, b) =>
  a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }),
);
export const allListedGames: ListedGame[] = [...playableGames, ...directGames].sort((a, b) =>
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

export const newGames: ListedGame[] = [...directGames, ...orderedGames(newGameSlugs)];
export const simulatorGames = legacyPlayableGames.filter(game => game.category === 'Simulation');
export const survivalGames = legacyPlayableGames.filter(game => ['Survival', 'Strategy'].includes(game.category));

export function matchesGame(game: ListedGame, query: string) {
  const text = `${game.title} ${game.description} ${game.category} ${'author' in game ? game.author : ''}`.toLocaleLowerCase('en');
  return text.includes(query.trim().toLocaleLowerCase('en'));
}
