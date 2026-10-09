// Games from https://x.com/RadiantOpti/status/2108068632991256995.
// These open at their original sites:
// a direct browser session is required for some large downloads and mouse capture.
// Their inclusion does not imply that the restricted iframe was gameplay-verified.
export type DirectGame = {
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  description: string;
  imageUrl: string;
  externalUrl: string;
};

const source: [string, string, string, string, string][] = [
  ['bo1-zombies', 'BO1 Zombies', 'Action', 'Survive a browser zombie map', 'https://vel.gg/bo1z'],
  ['moon-zombies', 'Moon', 'Action', 'Explore a lunar zombie map', 'https://moon-zombies.pages.dev/'],
  ['kino-der-toten', 'Kino der Toten', 'Action', 'Play a classic zombie map', 'https://kino-der-toten.pages.dev/'],
  ['bo3-cheese-cube', 'BO3 Cheese Cube', 'Action', 'Fight through a cube-shaped zombie map', 'https://cheese-cube.pages.dev/'],
  ['black-ops-2', 'Black Ops 2', 'Action', 'Open a browser action port', 'https://vibeslops.luckeysystems.com/'],
  ['modern-warfare-2', 'Modern Warfare 2', 'Action', 'Open a browser combat port', 'https://ovz-game-production.up.railway.app/'],
  ['skate-3', 'Skate 3', 'Sports', 'Skate in a browser world', 'https://skate.aaddpp.lol/'],
  ['skate-rust', 'Skate Rust', 'Sports', 'Try a browser skating game', 'https://global-terror.net/'],
  ['cs-surf', 'CS Surf', 'Sports', 'Surf a map with desktop mouse controls', 'https://surfd.net/'],
  ['halo-ce', 'Halo CE', 'Action', 'Open a browser sci-fi shooter', 'https://mitchellhynes.com/halo'],
  ['halo-ce-mobile', 'Halo CE mobile', 'Action', 'Try a mobile browser version', 'https://hcemobile.com/'],
  ['pes-6', 'PES 6', 'Sports', 'Play a browser football port', 'https://pes6.optijuegos.net/'],
  ['gta-5', 'GTA 5', 'Simulation', 'Explore an archived browser port', 'https://web.archive.org/web/20261006055917/https://playgta5.com/'],
  ['gta-vice-city', 'GTA Vice City', 'Simulation', 'Explore a WebAssembly city port', 'https://joncodeofficial.github.io/gta-vice-city-wasm'],
  ['simpsons-hit-and-run', 'The Simpsons: Hit & Run', 'Racing', 'Drive around Springfield in a browser port', 'https://shar-wasm.cjoseph.workers.dev/?skipmovie'],
  ['quake-1', 'Quake 1', 'Action', 'Enter a browser Quake arena', 'https://q1.pieter.com/'],
  ['quake-2', 'Quake 2', 'Action', 'Open a browser Quake II port', 'https://q2.pieter.com/'],
  ['quake-3', 'Quake 3', 'Action', 'Open a browser Quake III arena', 'https://q3.pieter.com/'],
  ['return-to-castle-wolfenstein', 'Return to Castle Wolfenstein', 'Action', 'Open a browser shooter port', 'https://rtcw.pieter.com/'],
  ['unreal-tournament', 'Unreal Tournament', 'Action', 'Enter a browser arena shooter', 'https://ut.pieter.com/'],
  ['half-life', 'Half Life', 'Action', 'Play a browser Half-Life port', 'https://pixelsuft.github.io/hl/'],
  ['half-life-cs-16', 'Half Life / CS 1.6', 'Action', 'Launch a WebXash shooter port', 'https://x8bitrain.github.io/webXash/'],
  ['diablo', 'Diablo', 'Adventure', 'Explore a browser dungeon port', 'https://johnimril.github.io/diablo_web/'],
  ['hedgewars', 'Hedgewars', 'Strategy', 'Certificate error observed; check before opening', 'https://webwars.link/'],
];

export const directGames: DirectGame[] = source.map(([slug, title, category, shortDescription, externalUrl]) => ({
  slug, title, category, shortDescription,
  description: `${shortDescription}. Opens on the game's own site and may need time to load.`,
  imageUrl: `/games/direct-${slug}.svg`, externalUrl,
}));
