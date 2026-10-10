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
  ["the-street-game", "The Street Game", "Casual", "Shoot marbles against an AI opponent on a 3D street-game board", "https://street-game.centro-datos-crudo.workers.dev/", "/games/campaign1-the-street-game.webp"],
  ["pumpwise", "Pumpwise", "Simulation", "Set petrol prices and manage a working station simulation", "https://pumpwise-chi.vercel.app/", "/games/campaign1-pumpwise.webp"],
  ["till-dark", "Till Dark", "Adventure", "Escape a foggy forest before night falls", "https://till-dark.vercel.app/", "/games/campaign1-till-dark.webp"],
  ["coin-collector-3d", "Coin Collector 3D", "Action", "Move through a 3D arena and collect coins", "https://notef.dreamcore.gg/coin-collector-3d/", "/games/campaign1-coin-collector-3d.webp"],
  ["rage", "Rage", "Action", "Navigate a red-lit corridor and swing a blade", "https://darths-rage.netlify.app/", "/games/campaign1-rage.webp"],
  ["bruce-lee-the-dragon-returns", "Bruce Lee: The Dragon Returns", "Action", "Move Bruce through a pixel-art fortress courtyard", "https://axchapman.freedev.app/brucelee.php", "/games/campaign1-bruce-lee-the-dragon-returns.webp"],
  ["moon-mars-mission-studio", "Moon & Mars Mission Studio", "Simulation", "Plan trajectories and launch Apollo and Mars scenarios", "https://sanghyunpark.pages.dev/apps/mission-studio/", "/games/campaign1-moon-mars-mission-studio.webp"],
  ["somnolith-alpha", "SOMNOLITH alpha", "Adventure", "Explore a dark forest and pond through shifting viewpoints", "https://claude.ai/artifact/RbtCujA2J6CpzJnxSEsYJ6", "/games/campaign1-somnolith-alpha.webp"],
  ["golden-tide", "Golden Tide", "Casual", "Tap a pirate coin-pusher and follow a treasure-map goal", "https://sundyme.github.io/golden-tide-play", "/games/campaign1-golden-tide.webp"],
  ["vector-anti-gravity-racing", "VECTOR: Anti-Gravity Racing", "Racing", "Race anti-gravity craft on futuristic tracks", "https://wavedash.com/games/vector-anti-gravity-racing", "/games/campaign1-vector-anti-gravity-racing.webp"],
  ["aether-break", "Aether Break", "Action", "Launch a ball into a brick field and move the paddle", "https://cactus-eagle-finch-branch.grok.me/", "/games/campaign1-aether-break.webp"],
  ["fleet-horizon", "Fleet Horizon", "Action", "Defend a coastal position with a twin naval cannon", "https://defense.aizoo.one/", "/games/campaign1-fleet-horizon.webp"],
  ["small-worlds", "Small Worlds", "Simulation", "Tilt a small world and change its weather", "https://crane-cosmic-kind-rose.grok.me/", "/games/campaign1-small-worlds.webp"],
  ["math-quest", "Math Quest", "Puzzle", "Solve arithmetic questions in a score-based battle", "https://mathquest-play.mareku011.chatgpt.site/", "/games/campaign1-math-quest.webp"],
  ["overburn", "OverBurn", "Action", "Play a vertical space shooter with selectable upgrades", "https://overburn.whitebeardapps.com/", "/games/campaign1-overburn.webp"],
  ["naval-warfare", "Naval Warfare", "Action", "Sail and fire in a single-player naval battle", "https://gunwake.aizoo.one/", "/games/campaign1-naval-warfare.webp"],
  ["zero-facility", "Zero Facility", "Adventure", "Attempt a stealth escape in Zero Facility", "https://suyancc.github.io/zero-facility", "/games/campaign1-zero-facility.webp"],
  ["dino-souls", "Dino Souls", "Action", "Jump through a pixel-art dinosaur runner", "https://updateddino.xyz/", "/games/campaign1-dino-souls.webp"],
  ["crew-run", "Crew Run", "Adventure", "Explore a 3D festival venue with a small crew", "https://claude.ai/artifact/WSVMA7xecUuBPL5wKkx62p", "/games/campaign1-crew-run.webp"],
  ["earth-defender", "EARTH DEFENDER", "Action", "Aim a turret and defend Earth against incoming threats", "https://apex-slate-spring-otter.grok.me/", "/games/campaign1-earth-defender.webp"],
  ["jamo-jump", "Jamo Jump", "Puzzle", "Guide a horse across a Hangul word puzzle", "https://jamojump.app/", "/games/campaign1-jamo-jump.webp"],
  ["canal-shark", "CANAL SHARK", "Action", "Steer a shark through a pixel-art canal", "https://bukangshark.restart4k.workers.dev/", "/games/campaign1-canal-shark.webp"],
  ["spire", "SPIRE", "Puzzle", "Stack aligned blocks with well-timed taps", "https://juniper-fern-giant-zephyr.grok.me/", "/games/campaign1-spire.webp"],
  ["axiom", "Axiom", "Puzzle", "Play logic puzzles including a 5×5 Lamps board", "https://horizon-plum-forest-zest.grok.me/", "/games/campaign1-axiom.webp"],
  ["pelican-ride", "Pelican Ride", "Racing", "Ride and jump as a pelican on a bicycle by the coast", "https://yuhan9988.github.io/pelican-ride/", "/games/campaign1-pelican-ride.webp"],
  ["unburied-blackwald-bunker", "UNBURIED: Blackwald Bunker", "Action", "Survive a winter bunker battle in a first-person shooter", "https://unburied.inkwave.workers.dev/", "/games/campaign1-unburied-blackwald-bunker.webp"],
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

  ['bo1-zombies', 'BO1 Zombies', 'Action', 'Survive a browser zombie map', 'https://vel.gg/bo1z', '/games/custom-bo1-zombies.webp'],
  ['black-ops-2', 'Black Ops 2', 'Action', 'Open a browser action port', 'https://vibeslops.luckeysystems.com/', '/games/custom-black-ops-2.webp'],
  ['ovz-global-flashpoint', 'OVZ: Global Flashpoint', 'Action', 'Open the OVZ browser game', 'https://ovz-game-production.up.railway.app/'],
  ['skate-3', 'Skate 3', 'Sports', 'Skate in a browser world', 'https://skate.aaddpp.lol/', '/games/custom-skate-3.webp'],
  ['cs-surf', 'CS Surf', 'Sports', 'Surf a map with desktop mouse controls', 'https://surfd.net/', '/games/custom-cs-surf.webp'],
  ['halo-ce', 'Halo CE', 'Action', 'Open a browser sci-fi shooter', 'https://mitchellhynes.com/halo'],
  ['halo-ce-mobile', 'Halo CE mobile', 'Action', 'Try a mobile browser version', 'https://hcemobile.com/'],
  ['pes-6', 'PES 6', 'Sports', 'Play a browser football port', 'https://pes6.optijuegos.net/', '/games/custom-pes-6.webp'],
  ['gta-5', 'GTA 5', 'Simulation', 'Explore an archived browser port', 'https://web.archive.org/web/20261006055917/https://playgta5.com/', '/games/custom-gta-5.webp'],
  ['gta-vice-city', 'GTA Vice City', 'Simulation', 'Explore a WebAssembly city port', 'https://joncodeofficial.github.io/gta-vice-city-wasm', '/games/custom-gta-vice-city.webp'],
  ['simpsons-hit-and-run', 'The Simpsons: Hit & Run', 'Racing', 'Drive around Springfield in a browser port', 'https://shar-wasm.cjoseph.workers.dev/?skipmovie', '/games/custom-simpsons-hit-and-run.webp'],
  ['quake-1', 'Quake 1', 'Action', 'Enter a browser Quake arena', 'https://q1.pieter.com/', '/games/custom-quake-1.webp'],
  ['quake-2', 'Quake 2', 'Action', 'Open a browser Quake II port', 'https://q2.pieter.com/', '/games/custom-quake-2.webp'],
  ['quake-3', 'Quake 3', 'Action', 'Open a browser Quake III arena', 'https://q3.pieter.com/', '/games/custom-quake-3.webp'],
  ['return-to-castle-wolfenstein', 'Return to Castle Wolfenstein', 'Action', 'Open a browser shooter port', 'https://rtcw.pieter.com/', '/games/custom-return-to-castle-wolfenstein.webp'],
  ['half-life', 'Half Life', 'Action', 'Play a browser Half-Life port', 'https://pixelsuft.github.io/hl/', '/games/custom-half-life.webp'],
  ['half-life-cs-16', 'Half Life / CS 1.6', 'Action', 'Launch a WebXash shooter port', 'https://x8bitrain.github.io/webXash/', '/games/custom-half-life-cs-16.webp'],
  ['diablo', 'Diablo', 'Adventure', 'Explore a browser dungeon port', 'https://johnimril.github.io/diablo_web/', '/games/custom-diablo.webp'],
];

export const directGames: DirectGame[] = source.map(([slug, title, category, shortDescription, externalUrl, imageUrl]) => ({
  slug, title, category, shortDescription,
  description: `${shortDescription}. Opens on the game's own site and may need time to load.`,
  imageUrl: imageUrl ?? `/games/direct-${slug}.svg`, externalUrl,
}));
