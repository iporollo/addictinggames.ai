# Worker 2 category review

Reviewed all 34 assigned games against the existing catalog categories. `gameplay_verified` means a current live interaction produced an observed in-game response. `documented_only` means the current test did not reach verified play, so the recommendation is grounded in the accessible game description, current mode/UI, first-party documentation, or dated prior gameplay receipts identified per record. `unresolved` means the linked host is inaccessible and the available evidence does not establish the linked port's mechanics.

Coverage: **14 gameplay-verified**, **19 documented-only**, **1 unresolved**. Every record has an accessIssue/accessIssueType pair; ordinary short test limits are not counted as access failures.

## New category proposals

- **Shooter** — Half Life / CS 1.6. The existing list has no category for this core mechanic; see the per-game rationale before adoption.
- **Platformer** — K-DUDU: Ironfang. The existing list has no category for this core mechanic; see the per-game rationale before adoption.

## End-of-run game and access table

| Game | Current → recommended categories | Evidence | Access issue |
|---|---|---|---|
| 3rd Mainland Biker (`third-mainland-biker`) | Arcade → Racing | gameplay_verified (high) | None observed |
| Ashen Vow (`ashen-vow`) | Action → Action, Adventure | documented_only (medium) | None observed |
| Black Ops 2 (`black-ops-2`) | Action → Action | unresolved (low) | dns: The linked host returned DNS_PROBE_FINISHED_NXDOMAIN on two attempts; no game content loaded. |
| Church Life (`church-life`) | Adventure → Adventure | documented_only (medium) | None observed |
| Comet Cup (`comet-cup`) | Sports → Racing, Multiplayer | gameplay_verified (high) | None observed |
| Diablo (`diablo`) | Adventure → Action, Adventure | documented_only (medium) | None observed |
| DliClips Rush (`dliclips-rush`) | Arcade → Arcade | documented_only (medium) | public-leaderboard: Continuing as guest would publish a nickname/avatar and best scores publicly; the audit stopped before supplying identity or score data. |
| Duel in the Great Hall (`duel-in-the-great-hall`) | Action → Action | documented_only (medium) | 404: The assigned Claude artifact URL returns Page not found. |
| Flagfield (`flagfield`) | Puzzle → Puzzle, Multiplayer | documented_only (medium) | sign-in: Sign-in is required to choose a lobby username and join a human match; the AI setup is accessible without signing in. |
| FlyCard (`flycard`) | Strategy → Strategy | gameplay_verified (high) | None observed |
| Golden Tide (`golden-tide`) | Casual → Casual | gameplay_verified (high) | None observed |
| Half Life / CS 1.6 (`half-life-cs-16`) | Action → Action, Shooter | documented_only (medium) | game-copy-required: The current WebXash page did not include the Counter-Strike game data; it asks the player to provide a game folder or ZIP before a game can run. |
| Hidamari Pond (`hidamari-pond`) | Simulation → Simulators | gameplay_verified (high) | None observed |
| K-DUDU: Ironfang (`k-dudu-ironfang`) | Action → Platformer, Action | gameplay_verified (high) | None observed |
| Lantern Walk (`lantern-walk`) | Casual → Puzzle, Casual | documented_only (medium) | None observed |
| Mars GT (`mars-gt`) | Simulation → Simulators | gameplay_verified (high) | None observed |
| Moonlit Spellcaster (`moonlit-spellcaster`) | Arcade → Arcade | gameplay_verified (high) | None observed |
| NEON STACK (`neon-stack`) | Puzzle → Puzzle | gameplay_verified (high) | None observed |
| Opus 5.5 NBA 2K (`opus-2k`) | Sports → Sports | documented_only (medium) | None observed |
| Pelican Ride (`pelican-ride`) | Racing → Sports, Arcade | gameplay_verified (high) | None observed |
| Planeteer (`planeteer`) | Simulation → Simulators, Adventure, Multiplayer | documented_only (medium) | pointer-capture: The current headless browser remains at the 'Click to look around' pointer-capture prompt; a prior native-browser receipt successfully moved and explored the world. |
| Pumpwise (`pumpwise`) | Simulation → Simulators | documented_only (medium) | None observed |
| Quiet Rooms (`quiet-rooms`) | Adventure → Adventure | gameplay_verified (high) | None observed |
| Ripple Pool (`ripple-pool`) | Puzzle → Puzzle | gameplay_verified (high) | None observed |
| RX-78-2 Re-entry (`rx-78-2-reentry`) | Simulation → Simulators, Action | documented_only (medium) | None observed |
| Skate 3 (`skate-3`) | Sports → Sports | documented_only (medium) | game-copy-required: The linked site contains only the engine; a legally owned Skate 3 copy converted by the user is required to play. |
| Snowboard Supreme (`snowboard-supreme`) | Sports → Sports, Arcade | gameplay_verified (high) | None observed |
| Stardust Isles (`stardust-isles`) | Adventure → Adventure | documented_only (medium) | None observed |
| The Simpsons: Hit & Run (`simpsons-hit-and-run`) | Racing → Adventure | documented_only (medium) | None observed |
| Till Dark (`till-dark`) | Adventure → Adventure | documented_only (medium) | pointer-capture: Headless browser pointer capture did not clear the Click again to enter overlay; previous native-browser gameplay did enter and move. |
| Trip_Ibadan (`trip-ibadan`) | Simulation → Simulators | documented_only (medium) | None observed |
| Void Clash TCG (`void-clash`) | Strategy → Strategy, Multiplayer | documented_only (medium) | None observed |
| Wild Fields 1648 (`wild-fields-1648`) | Strategy → Strategy | documented_only (medium) | 404: The assigned Claude artifact URL returns Page not found. |
| Zero Facility (`zero-facility`) | Adventure → Adventure | gameplay_verified (high) | None observed |

## Notes

- The free Diablo shareware route eventually reached the actual Diablo Shareware menu after the longer wait. This confirms a playable demo path is available without a purchase or MPQ file; the campaign itself was not entered, so the record remains documented-only.
- Opus 2K eventually loaded its embedded 3D court and exposed basketball controls after an extended WebGPU wait. Current input did not work through the frame wrapper; the earlier shot-clock result is cited as prior gameplay, so the current record remains documented-only.
- Ashen Vow and Church Life reached their opening scenes, but the captured controls did not establish a distinct combat response or story advancement. Pumpwise time acceleration and RX-78 telemetry progression were not attributed to a current gameplay control; their mechanics are supported with dated receipts where available.
- Black Ops 2 remains unresolved: the linked host returned NXDOMAIN, and the original publisher manual cannot establish what the dead browser host serves. The existing Action label is retained without adding Shooter.
- Multiplayer is assigned where a human-player mode is explicitly offered: Comet Cup local split screen; Flagfield online-random players; Planeteer online play; and Void Clash PVP. The latter three modes were not entered during this audit. AI-only opposition and public leaderboards do not count as multiplayer.
- `Simulation` appears as the current category in roster data; the recommended existing browse-category spelling is `Simulators`.
- Screenshots and the detailed observed actions/outcomes are in `evidence/`; first-party, current-page, and prior-receipt sources are listed per record in `review.json`.
