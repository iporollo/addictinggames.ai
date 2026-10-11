# Worker 1 category review

Scope: 34 assigned games. Categories below use existing site categories except where a new Platformer category is explicitly proposed. `gameplay_verified` denotes a current action/outcome observed in this pass; `documented_only` uses current first-party mechanics text and/or clearly labeled prior receipts without a confirmed current gameplay action; `unresolved` has no sufficient current evidence.

| Game | Recommended categories | Evidence status | Access issue |
|---|---|---|---|
| 3D Car Driving Simulator (`3d-car-simulator`) | Simulators | gameplay_verified | —: — |
| ASH LINE (`ash-line`) | Tower Defense, Strategy, Survival | gameplay_verified | —: — |
| Battle Peaks (`battle-peaks`) | Strategy, Multiplayer | gameplay_verified | —: — |
| CANAL SHARK (`canal-shark`) | Survival, Arcade, Action | gameplay_verified | —: — |
| Color War (`color-war`) | Strategy, Multiplayer | documented_only | —: — |
| CS Surf (`cs-surf`) | Racing | documented_only | loading: The selected Boreas course remained at “Loading Boreas… / Loading map…” through the short retry. |
| DiscoDino: Lost Worlds (`disco-dino-lost-worlds`) | Adventure | documented_only | loading: Two clicks on the visible Play control left the game on its title screen in this browser session. |
| Drawdown (`drawdown`) | Puzzle | gameplay_verified | —: — |
| Faux Ami (`faux-ami`) | Puzzle | gameplay_verified | —: — |
| fly.pieter.com (`fly-pieter`) | Simulators, Multiplayer | documented_only | other: Joining requires entering a display name and completing a Cloudflare human-verification challenge; neither was used. |
| Gigacity (`gigacity`) | Simulators | documented_only | —: — |
| Half Life (`half-life`) | Action | documented_only | loading: The Emscripten port remained on an incomplete Memory size settings screen after the loading allowance. |
| Heroes Journey (`heroes-journey`) | Action, Adventure | documented_only | —: — |
| Jamo Jump (`jamo-jump`) | Puzzle | documented_only | —: — |
| Lantern Isle (`lantern-isle`) | Adventure | documented_only | —: — |
| Llama Roguelike (`llama-roguelike`) | Strategy | documented_only | —: — |
| Moon & Mars Mission Studio (`moon-mars-mission-studio`) | Simulators | gameplay_verified | —: — |
| Neon Palms — Port Solana (`neon-palms-port-solana`) | Simulators, Adventure | documented_only | loading: The title screen remained after two clicks on CLICK TO PLAY; no in-game scene appeared. |
| Operation Nightwood (`operation-nightwood`) | Action | unresolved | 404: The supplied artifact URL displays “Page not found.” |
| Pantry Dash (`pantry-dash`) | Arcade | gameplay_verified | —: — |
| Plaid Circuit (`plaid-circuit`) | Racing, Arcade | documented_only | —: — |
| PULSE (`pulse`) | Arcade | documented_only | —: — |
| Quake 3 (`quake-3`) | Action, Multiplayer | documented_only | other: Clicking Play returned 403 Forbidden (nginx/1.30.4). |
| Return to Castle Wolfenstein (`return-to-castle-wolfenstein`) | Action, Multiplayer | documented_only | other: Clicking Play returned 403 Forbidden (nginx/1.30.4) before the advertised large game-data download. |
| Roll for AGI (`roll-for-agi`) | Strategy | gameplay_verified | —: — |
| ShareSpark (`sharespark`) | Simulators, Strategy, Multiplayer | documented_only | —: — |
| Small Worlds (`small-worlds`) | Survival, Adventure | gameplay_verified | —: — |
| SPIRE (`spire`) | Arcade | gameplay_verified | —: — |
| The Mutual Fun (`mutual-fun`) | Arcade | documented_only | —: — |
| Tiger Rider Chess: Der Kompass (`tiger-rider-chess`) | Strategy, Multiplayer | gameplay_verified | —: — |
| Toybox Push (`toybox-push`) | Puzzle | documented_only | —: — |
| VECTOR: Anti-Gravity Racing (`vector-anti-gravity-racing`) | Racing, Arcade, Multiplayer | documented_only | other: The public game page exposed an account panel and no playable client/Play control in this session; sign-in was not attempted. |
| What Maya Knew (`what-maya-knew`) | Adventure, Puzzle | documented_only | —: — |
| YugiSnap (`yugisnap`) | Strategy | unresolved | dns: The supplied host yugisnap.kw-15.workers.dev returned DNS_PROBE_FINISHED_NXDOMAIN on two visits. |

Evidence counts: 12 gameplay verified, 20 documented only, 2 unresolved.

Review boundaries:

- No site source, game metadata, artwork, or live production content was changed. This directory contains only this worker's audit artifacts and helper scripts.
- No login, sign-up, account creation, Cloudflare challenge, public posting, payment, chat, or persistent shared profile was used.
- First-party descriptions and prior dated receipts are distinguished in `review.json`; a title screen or unresponsive input was not upgraded to current gameplay verification.
- The only new-category proposal is Platformer for Heroes Journey and Lantern Isle, where side-view jumping/climbing is a substantial traversal mechanic that the existing category set does not name.

Evidence files: `inspection.json`, `play-evidence.json`, `followup-evidence.json`, `followup-retry-evidence.json`, `followup-final-evidence.json`, screenshots under `screenshots/`, and local contact sheets. Each review record contains screenshot paths and accessIssue/accessIssueType fields.
