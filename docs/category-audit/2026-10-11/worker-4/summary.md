# Worker 4 category review

Reviewed 33 assigned games. Current-play results: 12 gameplay-verified; 21 documented-only; 0 unresolved.

Categories are ordered primary-first and use the site’s canonical names. “Simulation” in the current catalog is represented as “Simulators” in recommendations. Documented-only means this pass did not observe a current gameplay-state response; prior receipts and first-party sources are listed separately in `review.json`.

| Game | Current category | Reviewed categories | Status | Access issue |
|---|---|---|---|---|
| A71 // GO FOR LAUNCH | Arcade | Arcade | gameplay_verified | — |
| Axiom | Puzzle | Puzzle | gameplay_verified | — |
| Brian Boru Golf | Sports | Sports | documented_only | Start led to a public player-name prompt before the first golf shot; the review did not submit a name. |
| Clunk Smash | Action | Action, Arcade | documented_only | — |
| Cows With Buns | Action | Action | documented_only | — |
| Dino Souls | Action | Action, Multiplayer | documented_only | — |
| Doge Rally | Sports | Sports, Arcade, Multiplayer | documented_only | — |
| EARTH DEFENDER | Action | Action | gameplay_verified | — |
| Fleet Horizon | Action | Action | documented_only | — |
| FOUNDRY | Puzzle | Puzzle | gameplay_verified | — |
| GTA Vice City | Simulation | Action, Adventure | documented_only | The port requires the player’s own game.tar.gz before Start; no game files were supplied. The current port page says the data is not included. |
| Halo CE mobile | Action | Action, Multiplayer | documented_only | Requires the player’s own Halo CE Xbox disc image before play. Online additionally requires an account, which was not created or used. |
| Ink Dash | Action | Action, Arcade | gameplay_verified | — |
| Kindlekeep TD | Strategy | Strategy, Tower Defense | documented_only | — |
| Let's Kart! | Racing | Racing, Multiplayer | documented_only | — |
| Mayoi Koji | Puzzle | Puzzle | gameplay_verified | — |
| Naval Warfare | Action | Action | gameplay_verified | — |
| Night Shift | Puzzle | Puzzle | gameplay_verified | — |
| OverBurn | Action | Action, Arcade | documented_only | — |
| Pip the Plant | Simulation | Simulators | documented_only | — |
| Project Nova | Arcade | Arcade, Action | gameplay_verified | — |
| Quake 1 | Action | Action, Multiplayer | documented_only | The public /play endpoint returned HTTP 403 Forbidden during this review. |
| Rajyam | Strategy | Action | documented_only | — |
| RoboBeats: Mooncake Chop | Arcade | Arcade | documented_only | — |
| Salmon Survival | Survival | Survival | gameplay_verified | — |
| Ski Simulator 360 (Vail) | Sports | Sports, Simulators, Multiplayer | documented_only | — |
| SOMNOLITH alpha | Adventure | Adventure | documented_only | The assigned Claude artifact URL currently returns Page not found. |
| Super Detective | Puzzle | Puzzle | documented_only | — |
| Thermopylae | Action | Action | documented_only | — |
| Timeline Tactics | Strategy | Strategy, Multiplayer | gameplay_verified | — |
| Turbo Kart GP | Sports | Racing | documented_only | — |
| VORTEX RASH | Racing | Racing, Action | gameplay_verified | — |
| Wording Well | Puzzle | Puzzle | documented_only | — |

Access barriers observed:

- Brian Boru Golf: Start led to a public leaderboard name prompt before a shot; no name was submitted.
- GTA Vice City: the port requires the player’s own `game.tar.gz`; no file was supplied. Rockstar’s official game page and controls guide support Action + Adventure despite the current Simulation tag.
- Halo CE mobile: play requires the player’s own Xbox disc image; online additionally requires an account. First-party page documents human ranked matchmaking and Custom Games host/join, supporting Multiplayer with Action.
- Quake 1: the public `/play` endpoint returned HTTP 403.
- SOMNOLITH alpha: assigned Claude artifact URL returned Page not found (404).

Wording Well initially returned HTTP 429, then its itch.io page and embedded game frame loaded on retry; no current access barrier is recorded. No new categories are proposed.
