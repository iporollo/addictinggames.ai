# Worker 3 category review

This worker package contains 17 reviewed games from assignment 3. Recommendations use the existing site categories where those fit, with no more than three categories per game. Each decision, its evidence provenance, and screenshots are recorded in `review.json` and `screenshots/`. The remaining assignment titles are covered by the other reviewers; this file does not claim coverage beyond the 17 rows below.

| Game | Recommended categories | Status and observed evidence | Access issue |
|---|---|---|---|
| 99% YOUTH Échecs | Strategy, Multiplayer | Gameplay verified: legal move and AI reply observed; explicit same-screen alternating two-player mode documented in the UI | None |
| Atomic War 2D | Strategy | Gameplay verified: bought a hero, observed coin/roster change, and reached a bot-battle victory | None |
| BO1 Zombies | Action, Survival, Shooter* | Gameplay verified: entered Kino first-person map; run ended after one round with 500 points and zero kills | None; one non-blocking 404 resource was logged |
| Cinder Ring | Action, Multiplayer | Gameplay verified: entered bot arena; Q Fireball showed cooldown, health, and ring countdown; friend rooms use invite codes | None |
| Cowduction | Action, Arcade, Shooter* | Gameplay verified: guest mission; ArrowUp moved the UFO and Space reduced an alien's resistance to 72% | None; an initial test context closed at low hull, then a fresh session confirmed controls |
| Dili Cart | Racing, Multiplayer | Gameplay verified: entered a guest kart race; hub offers friend rooms by code | None |
| Dlicom Attack | Strategy | Gameplay verified: AUTO BATTLE resolved, awarded 20 Bits, and offered a run-skill choice | None; ancillary 404s did not block play |
| Dust & Lead | Platformer*, Action, Shooter* | Gameplay verified: ArrowRight scrolled the level; J consumed one revolver round | None |
| Flap NYC | Arcade | Gameplay verified: entered the tap-to-flap course; first-party result showed 0 blocks and Brooklyn Bridge waypoint | None; ancillary 404 did not block the game |
| Footballmon | Sports, Strategy, Simulators | Gameplay verified: drafted Ponyta into QB; roster changed 0/22 to 1/22; season button remained disabled until roster completion | None |
| GTA 5 | Simulation (provisional) | Unresolved: archived shell and menus loaded, but no playable scene or port mechanics were reached | Loading: black canvas stalled at 6% with a no-progress / possible memory warning |
| Halo CE | Action, Shooter*, Multiplayer | Documented only: first-party interface describes first-person weapon controls and online invite/room/join features; no gameplay launched | Game-copy required: site requires an XISO made from the visitor's own Xbox copy |
| Hungry Seal | Arcade, Survival | Gameplay verified: ArrowLeft moved the seal and hunger fell; ArrowUp yielded score 190, x3 combo, one coin, and “Too big!” near a pufferfish | None |
| Kettu-Vellam | Racing | Gameplay verified: selected Chundan, Kuttanad, and racer rivals; ArrowUp started the three-lap race and advanced speed/time | None |
| Lava Lasso | Action, Platformer*, Survival | Gameplay verified with limitations: W advanced the tutorial from Move to Jump and the HUD showed one heart lost; jump was not confirmed | Pointer capture: browser reported the root document was invalid for pointer lock; later controls were not verified |
| Math Quest | Puzzle, Adventure, Educational* | Gameplay verified: correct answer 98 + 78 = 176 advanced to question 2, raised score to 80, solved count to 1, and showed a monster attack | None |
| MUST KILL THE KING | Strategy | Gameplay verified: a chick lancer moved a2→a3; the Raven Court replied with a capture and the Coral loss appeared | None |

* Propose the new categories `Shooter`, `Platformer`, and `Educational`. `Shooter` names the first-person or weapon-based shooting loops more precisely than existing browse categories. `Platformer` identifies the jump-and-gap traversal central to Dust & Lead and Lava Lasso. `Educational` captures Math Quest's explicit elementary-grade arithmetic-learning purpose. These are proposals for parent consolidation, not published taxonomy changes.

Multiplayer labels are evidence-based. Échecs exposes an explicit same-screen alternating two-player mode; Cinder Ring and Dili Cart expose friend rooms; Halo CE documents invite/link/create/join rooms. Atomic War 2D's “Play Online” button alone did not establish human opponents, and MUST KILL THE KING showed an automated reply without a human-multiplayer option, so those games are not tagged Multiplayer. Math Quest's Story mode is a first-party-described 42-stage adventure with prior first-party map notes; its current test covered only one Challenge question. The GTA 5 port's original Rockstar genre was not used to infer unobserved mechanics. Short-test limits and non-blocking 404s are documented separately from access barriers in the JSON.
