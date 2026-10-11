// Category order is primary genre first. Human multiplayer is a category;
// its online/local mode is displayed separately and does not consume a slot.
export const gameCategories = ['Action', 'Simulators', 'Survival', 'Strategy', 'Multiplayer', 'Puzzle', 'Arcade', 'Adventure', 'Racing', 'Sports', 'Tower Defense', 'Casual', 'Platformer', 'Shooter', 'Rhythm', 'Educational'] as const;
export type GameCategory = typeof gameCategories[number];
export type CategoryList = readonly [GameCategory] | readonly [GameCategory, GameCategory] | readonly [GameCategory, GameCategory, GameCategory];
export type MultiplayerMode = 'Online multiplayer' | 'Local 2-player' | 'Local multiplayer';

// Evidence and unresolved cases live in docs/category-audit/2026-10-11/.
export const reviewedCategories: Record<string, CategoryList> = {
  "3d-car-simulator": [
    "Simulators"
  ],
  "99-youth-echecs": [
    "Strategy",
    "Multiplayer"
  ],
  "aether-break": [
    "Arcade"
  ],
  "ash-line": [
    "Tower Defense",
    "Strategy",
    "Survival"
  ],
  "ashen-vow": [
    "Action",
    "Adventure"
  ],
  "atomic-war-2d": [
    "Strategy"
  ],
  "axiom": [
    "Puzzle"
  ],
  "bad-idea": [
    "Puzzle"
  ],
  "battle-peaks": [
    "Strategy",
    "Multiplayer"
  ],
  "black-ops-2": [
    "Action"
  ],
  "bo1-zombies": [
    "Action",
    "Survival",
    "Shooter"
  ],
  "brian-boru-golf": [
    "Sports"
  ],
  "bruce-lee-the-dragon-returns": [
    "Action",
    "Adventure",
    "Platformer"
  ],
  "canal-shark": [
    "Survival",
    "Arcade",
    "Action"
  ],
  "church-life": [
    "Adventure"
  ],
  "cinder-ring": [
    "Action",
    "Multiplayer"
  ],
  "clunk-smash": [
    "Action",
    "Arcade"
  ],
  "coin-collector-3d": [
    "Action",
    "Multiplayer"
  ],
  "color-war": [
    "Strategy",
    "Multiplayer"
  ],
  "comet-cup": [
    "Racing",
    "Multiplayer"
  ],
  "cowduction": [
    "Action",
    "Arcade",
    "Shooter"
  ],
  "cows-with-buns": [
    "Action",
    "Shooter"
  ],
  "crew-run": [
    "Adventure"
  ],
  "cs-surf": [
    "Racing"
  ],
  "diablo": [
    "Action",
    "Adventure"
  ],
  "dili-cart": [
    "Racing",
    "Multiplayer"
  ],
  "dino-souls": [
    "Action",
    "Multiplayer"
  ],
  "dirtline": [
    "Racing"
  ],
  "disco-dino-lost-worlds": [
    "Adventure"
  ],
  "dliclips-rush": [
    "Arcade"
  ],
  "dlicom-attack": [
    "Strategy"
  ],
  "doge-rally": [
    "Sports",
    "Arcade",
    "Multiplayer"
  ],
  "dracula-0": [
    "Action",
    "Adventure"
  ],
  "drawdown": [
    "Puzzle"
  ],
  "duel-in-the-great-hall": [
    "Action"
  ],
  "dust-and-lead": [
    "Platformer",
    "Action",
    "Shooter"
  ],
  "earth-defender": [
    "Action",
    "Shooter"
  ],
  "falling-bubbles": [
    "Arcade",
    "Multiplayer",
    "Shooter"
  ],
  "faux-ami": [
    "Puzzle",
    "Educational"
  ],
  "flagfield": [
    "Puzzle",
    "Multiplayer"
  ],
  "flap-nyc": [
    "Arcade"
  ],
  "fleet-horizon": [
    "Action",
    "Shooter"
  ],
  "fluffy-chase": [
    "Action",
    "Adventure",
    "Multiplayer"
  ],
  "fly-pieter": [
    "Simulators",
    "Multiplayer"
  ],
  "flycard": [
    "Strategy"
  ],
  "footballmon": [
    "Sports",
    "Strategy",
    "Simulators"
  ],
  "foundry": [
    "Puzzle"
  ],
  "freesbee": [
    "Sports",
    "Arcade"
  ],
  "gigacity": [
    "Simulators"
  ],
  "go-for-launch": [
    "Arcade"
  ],
  "golden-tide": [
    "Casual"
  ],
  "gta-5": [
    "Simulators"
  ],
  "gta-vice-city": [
    "Action",
    "Adventure"
  ],
  "halberd-flight-range": [
    "Simulators"
  ],
  "half-life": [
    "Action",
    "Shooter"
  ],
  "half-life-cs-16": [
    "Action",
    "Shooter"
  ],
  "halo-ce": [
    "Action",
    "Shooter",
    "Multiplayer"
  ],
  "halo-ce-mobile": [
    "Action",
    "Multiplayer",
    "Shooter"
  ],
  "heritage-walk-ethiopia": [
    "Adventure"
  ],
  "heroes-journey": [
    "Action",
    "Adventure",
    "Platformer"
  ],
  "hidamari-pond": [
    "Simulators"
  ],
  "hungry-seal": [
    "Arcade",
    "Survival"
  ],
  "ink-dash": [
    "Action",
    "Arcade",
    "Shooter"
  ],
  "island-survivor": [
    "Survival"
  ],
  "jamo-jump": [
    "Puzzle"
  ],
  "k-dudu-ironfang": [
    "Platformer",
    "Action"
  ],
  "kettu-vellam": [
    "Racing"
  ],
  "kindlekeep-td": [
    "Strategy",
    "Tower Defense"
  ],
  "kreuz-adler": [
    "Strategy"
  ],
  "lantern-isle": [
    "Adventure",
    "Platformer"
  ],
  "lantern-walk": [
    "Puzzle",
    "Casual"
  ],
  "lava-lasso": [
    "Action",
    "Platformer",
    "Survival"
  ],
  "lets-kart": [
    "Racing",
    "Multiplayer"
  ],
  "little-lake": [
    "Simulators"
  ],
  "llama-roguelike": [
    "Strategy"
  ],
  "mars-gt": [
    "Simulators"
  ],
  "math-quest": [
    "Puzzle",
    "Adventure",
    "Educational"
  ],
  "mayoi-koji": [
    "Puzzle"
  ],
  "mikage-quest": [
    "Adventure",
    "Strategy"
  ],
  "moon-mars-mission-studio": [
    "Simulators"
  ],
  "moonlit-spellcaster": [
    "Arcade"
  ],
  "must-kill-the-king": [
    "Strategy"
  ],
  "mutual-fun": [
    "Arcade"
  ],
  "naval-warfare": [
    "Action",
    "Shooter"
  ],
  "neon-nightfall": [
    "Action",
    "Survival",
    "Shooter"
  ],
  "neon-palms-port-solana": [
    "Simulators",
    "Adventure"
  ],
  "neon-stack": [
    "Puzzle"
  ],
  "night-cruise": [
    "Simulators"
  ],
  "night-shift": [
    "Puzzle"
  ],
  "nushi-fishing": [
    "Simulators"
  ],
  "operation-nightwood": [
    "Action"
  ],
  "opus-2k": [
    "Sports"
  ],
  "orbit-forge": [
    "Simulators",
    "Strategy"
  ],
  "overburn": [
    "Action",
    "Arcade",
    "Shooter"
  ],
  "ovz-global-flashpoint": [
    "Action",
    "Multiplayer",
    "Shooter"
  ],
  "pantry-dash": [
    "Arcade"
  ],
  "pelican-ride": [
    "Sports",
    "Arcade"
  ],
  "pes-6": [
    "Sports",
    "Multiplayer"
  ],
  "pip-the-plant": [
    "Simulators"
  ],
  "pit-tactics": [
    "Strategy"
  ],
  "plaid-circuit": [
    "Racing",
    "Arcade"
  ],
  "planeteer": [
    "Simulators",
    "Adventure",
    "Multiplayer"
  ],
  "pocket-gridiron": [
    "Sports",
    "Strategy",
    "Simulators"
  ],
  "project-nova": [
    "Arcade",
    "Action"
  ],
  "pulse": [
    "Arcade"
  ],
  "pumpkin-catch": [
    "Arcade"
  ],
  "pumpwise": [
    "Simulators"
  ],
  "puni-jump": [
    "Arcade",
    "Platformer",
    "Action"
  ],
  "quake-1": [
    "Action",
    "Multiplayer",
    "Shooter"
  ],
  "quake-2": [
    "Action",
    "Shooter",
    "Multiplayer"
  ],
  "quake-3": [
    "Action",
    "Multiplayer",
    "Shooter"
  ],
  "quiet-rooms": [
    "Adventure"
  ],
  "rage": [
    "Action"
  ],
  "rajyam": [
    "Action"
  ],
  "rally-director": [
    "Racing",
    "Strategy",
    "Rhythm"
  ],
  "return-to-castle-wolfenstein": [
    "Action",
    "Multiplayer",
    "Shooter"
  ],
  "ripple-pool": [
    "Puzzle"
  ],
  "rise-and-raid": [
    "Strategy"
  ],
  "robobeats-mooncake-chop": [
    "Arcade"
  ],
  "roll-for-agi": [
    "Strategy"
  ],
  "rx-78-2-reentry": [
    "Simulators",
    "Action"
  ],
  "sadie-and-luna": [
    "Puzzle",
    "Adventure",
    "Platformer"
  ],
  "salmon-survival": [
    "Survival"
  ],
  "senor-inteligente": [
    "Arcade",
    "Action"
  ],
  "sharespark": [
    "Simulators",
    "Strategy",
    "Multiplayer"
  ],
  "simpsons-hit-and-run": [
    "Adventure"
  ],
  "skate-3": [
    "Sports"
  ],
  "ski-jumping": [
    "Sports",
    "Multiplayer"
  ],
  "ski-simulator-360-vail": [
    "Sports",
    "Simulators",
    "Multiplayer"
  ],
  "skyrunner": [
    "Arcade"
  ],
  "small-worlds": [
    "Survival",
    "Adventure"
  ],
  "snowboard-supreme": [
    "Sports",
    "Arcade"
  ],
  "soccar": [
    "Sports"
  ],
  "somnolith-alpha": [
    "Adventure"
  ],
  "spark": [
    "Simulators",
    "Strategy"
  ],
  "spire": [
    "Arcade"
  ],
  "stardust-isles": [
    "Adventure"
  ],
  "starfall-the-last-beacon": [
    "Action",
    "Arcade",
    "Shooter"
  ],
  "super-detective": [
    "Puzzle"
  ],
  "sykes-picot": [
    "Strategy"
  ],
  "terra-incognita": [
    "Adventure",
    "Educational"
  ],
  "the-street-game": [
    "Casual"
  ],
  "thermopylae": [
    "Action"
  ],
  "third-mainland-biker": [
    "Racing"
  ],
  "tidebreak": [
    "Strategy"
  ],
  "tiger-rider-chess": [
    "Strategy",
    "Multiplayer"
  ],
  "till-dark": [
    "Adventure"
  ],
  "time-echo": [
    "Adventure",
    "Puzzle"
  ],
  "timeline-tactics": [
    "Strategy",
    "Multiplayer"
  ],
  "toadstool-crossing": [
    "Arcade"
  ],
  "toybox-push": [
    "Puzzle"
  ],
  "trip-ibadan": [
    "Simulators"
  ],
  "ttak-stop": [
    "Arcade"
  ],
  "turbo-kart-gp": [
    "Racing"
  ],
  "unburied-blackwald-bunker": [
    "Shooter",
    "Survival",
    "Multiplayer"
  ],
  "vector-anti-gravity-racing": [
    "Racing",
    "Arcade",
    "Multiplayer"
  ],
  "void-clash": [
    "Strategy",
    "Multiplayer"
  ],
  "void-explorer": [
    "Simulators"
  ],
  "vortex-rash": [
    "Racing",
    "Action"
  ],
  "warpstrike": [
    "Action",
    "Shooter",
    "Arcade"
  ],
  "what-maya-knew": [
    "Adventure",
    "Puzzle"
  ],
  "wild-fields-1648": [
    "Strategy"
  ],
  "word-ladder-duel": [
    "Puzzle",
    "Multiplayer"
  ],
  "wording-well": [
    "Puzzle"
  ],
  "ww2-dogfight": [
    "Simulators",
    "Action",
    "Multiplayer"
  ],
  "yugisnap": [
    "Strategy"
  ],
  "zero-facility": [
    "Adventure"
  ]
};

export const multiplayerModes: Record<string, MultiplayerMode> = {
  "99-youth-echecs": "Local 2-player",
  "battle-peaks": "Local 2-player",
  "cinder-ring": "Online multiplayer",
  "coin-collector-3d": "Online multiplayer",
  "color-war": "Local 2-player",
  "comet-cup": "Local 2-player",
  "dili-cart": "Online multiplayer",
  "dino-souls": "Online multiplayer",
  "doge-rally": "Local 2-player",
  "falling-bubbles": "Local 2-player",
  "flagfield": "Online multiplayer",
  "fluffy-chase": "Online multiplayer",
  "fly-pieter": "Online multiplayer",
  "halo-ce": "Online multiplayer",
  "halo-ce-mobile": "Online multiplayer",
  "lets-kart": "Online multiplayer",
  "ovz-global-flashpoint": "Online multiplayer",
  "pes-6": "Online multiplayer",
  "planeteer": "Online multiplayer",
  "quake-1": "Online multiplayer",
  "quake-2": "Online multiplayer",
  "quake-3": "Online multiplayer",
  "return-to-castle-wolfenstein": "Online multiplayer",
  "sharespark": "Local multiplayer",
  "ski-jumping": "Online multiplayer",
  "ski-simulator-360-vail": "Online multiplayer",
  "tiger-rider-chess": "Local 2-player",
  "timeline-tactics": "Online multiplayer",
  "unburied-blackwald-bunker": "Online multiplayer",
  "vector-anti-gravity-racing": "Online multiplayer",
  "void-clash": "Online multiplayer",
  "word-ladder-duel": "Local 2-player",
  "ww2-dogfight": "Online multiplayer"
};

// Retain existing evidence-backed secondary categories for unresolved reviews.
const existingSecondaryCategories: Record<string, GameCategory[]> = {
  'kindlekeep-td': ['Tower Defense'],
  'ash-line': ['Tower Defense'],
  'plaid-circuit': ['Racing', 'Arcade'],
  'dili-cart': ['Racing'],
  'third-mainland-biker': ['Racing'],
  'dracula-0': ['Adventure'],
  'ashen-vow': ['Adventure'],
  'neon-nightfall': ['Survival'],
  'ink-dash': ['Survival'],
};

export function gameTags(game: { category: string; slug: string }): string[] {
  const reviewed = reviewedCategories[game.slug];
  if (reviewed) return [...reviewed];
  const primary = game.category === 'Simulation' ? 'Simulators' : game.category;
  return [...new Set([primary, ...(existingSecondaryCategories[game.slug] ?? []), ...(multiplayerModes[game.slug] ? ['Multiplayer'] : [])])].slice(0, 3);
}

export function gameModeLabels(game: { slug: string }): string[] {
  const mode = multiplayerModes[game.slug];
  return mode ? [mode] : [];
}
