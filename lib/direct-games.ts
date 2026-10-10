// Direct-play catalog: verified Scout pilot plus the original RadiantOpti collection.
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

const source: [string, string, string, string, string, string?][] = [
  ["fluffy-chase", "Fluffy Chase", "Action", "Explore the city and fluff up a yellow taxi", "https://the-file-fluffy-chase.morning-rice-8034.workers.dev/", "/games/scout-fluffy-chase.webp"],
  ["cowduction", "Cowduction", "Action", "Pilot a cow-powered UFO through alien skies", "https://cowduction.guibsonv.chatgpt.site/", "/games/scout-cowduction.webp"],
  ["rx-78-2-reentry", "RX-78-2 Re-entry", "Simulation", "Pilot a mecha through atmospheric re-entry", "https://rx78-2-reentry.vercel.app/", "/games/scout-rx-78-2-reentry.webp"],
  ["lets-kart", "Let's Kart!", "Racing", "Race pets in karts and rolling bathtubs", "https://fish.ryantsai.com/kart/", "/games/scout-lets-kart.webp"],
  ["planeteer", "Planeteer", "Simulation", "Explore worlds on foot, by sea and by air", "https://planeteer.vercel.app/", "/games/scout-planeteer.webp"],
  ["opus-2k", "Opus 5.5 NBA 2K", "Sports", "Shoot, dribble and dunk in a 3D arena", "https://genex.games/opus-2k", "/games/scout-opus-2k.webp"],
  ["flycard", "FlyCard", "Strategy", "Slide cards into a tabletop duel", "https://takedaiori.github.io/flycardgame/", "/games/scout-flycard.webp"],
  ["mikage-quest", "Mikage Quest", "Adventure", "Explore a Japanese pixel-art RPG demo", "https://kazuyoshi1118.itch.io/mikage-quest", "/games/scout-mikage-quest.webp"],
  ["llama-roguelike", "Llama Roguelike", "Strategy", "Arrange your pack and battle across the Andes", "https://aovks23.itch.io/llama-roguelike-work-in-progress", "/games/scout-llama-roguelike.webp"],
  ["cows-with-buns", "Cows With Buns", "Action", "Free the herd with a bun blaster", "https://cowswithbuns.stevenrouk.com/", "/games/scout-cows-with-buns.webp"],
  ["roll-for-agi", "Roll for AGI", "Strategy", "Roll dice and build an AI lab", "https://rollforagi.com", "/games/scout-roll-for-agi.webp"],
  ["footballmon", "Footballmon", "Sports", "Draft a team and simulate a football season", "https://footballmon.satinyhero4.chatgpt.site/", "/games/scout-footballmon.webp"],
  ["wording-well", "Wording Well", "Puzzle", "Drop lettered stones and spell in a dungeon", "https://exedexes1.itch.io/wording-well", "/games/scout-wording-well.webp"],
  ["pumpkin-catch", "RoboBeats: Pumpkin Catch", "Casual", "Catch falling treats on Halloween night", "https://pumpkin-catch.netlify.app", "/games/scout-pumpkin-catch.webp"],
  ["mayoi-koji", "Mayoi Koji", "Puzzle", "Reveal a seasonal picture as you walk the maze", "https://cloud-tulip-beam-fire.grok.me", "/games/scout-mayoi-koji.webp"],
  ["hidamari-pond", "Hidamari Pond", "Simulation", "Cast and reel beside an autumn pond", "https://seicolor.github.io/hidamari-numa-site/play/?place=numa", "/games/scout-hidamari-pond.webp"],
  ["puni-jump", "Puni Jump", "Action", "Jump, dodge and stomp spiky enemies", "https://puni-jump.web.app/", "/games/scout-puni-jump.webp"],
  ["void-clash", "Void Clash TCG", "Strategy", "Play cards and battle through a neon gauntlet", "https://void-clash-tcg.grok.me", "/games/scout-void-clash.webp"],
  ["sharespark", "ShareSpark", "Simulation", "Invent pretend companies in a family market game", "https://share-spark.vercel.app", "/games/scout-sharespark.webp"],
  ["void-explorer", "Void Explorer", "Simulation", "Pilot a ship through a neon universe", "https://void-explorer.openai.chatgpt.site/", "/games/scout-void-explorer.webp"],
  ["spark", "Spark", "Simulation", "Train a model and grow a tiny AI lab", "https://geoffstearns.com/spark/", "/games/scout-spark.webp"],
  ["ttak-stop", "Ttak! Stop", "Casual", "Stop the moving marker inside the target zone", "https://ttak-stop.web.app/", "/games/scout-ttak-stop.webp"],

  ['bo1-zombies', 'BO1 Zombies', 'Action', 'Survive a browser zombie map', 'https://vel.gg/bo1z'],
  ['bo3-cheese-cube', 'BO3 Cheese Cube', 'Action', 'Fight through a cube-shaped zombie map', 'https://cheese-cube.pages.dev/'],
  ['black-ops-2', 'Black Ops 2', 'Action', 'Open a browser action port', 'https://vibeslops.luckeysystems.com/'],
  ['modern-warfare-2', 'Modern Warfare 2', 'Action', 'Open a browser combat port', 'https://ovz-game-production.up.railway.app/'],
  ['skate-3', 'Skate 3', 'Sports', 'Skate in a browser world', 'https://skate.aaddpp.lol/'],
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
  ['half-life', 'Half Life', 'Action', 'Play a browser Half-Life port', 'https://pixelsuft.github.io/hl/'],
  ['half-life-cs-16', 'Half Life / CS 1.6', 'Action', 'Launch a WebXash shooter port', 'https://x8bitrain.github.io/webXash/'],
  ['diablo', 'Diablo', 'Adventure', 'Explore a browser dungeon port', 'https://johnimril.github.io/diablo_web/'],
];

export const directGames: DirectGame[] = source.map(([slug, title, category, shortDescription, externalUrl, imageUrl]) => ({
  slug, title, category, shortDescription,
  description: `${shortDescription}. Opens on the game's own site and may need time to load.`,
  imageUrl: imageUrl ?? `/games/direct-${slug}.svg`, externalUrl,
}));
