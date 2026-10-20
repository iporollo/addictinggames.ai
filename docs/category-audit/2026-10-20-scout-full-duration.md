# Category audit — 2026-10-20 full-duration Scout run

Run: `2026-10-20T153255Z`

| Game | Categories | Multiplayer mode | Evidence |
| --- | --- | --- | --- |
| [Lost Marbles](https://meticulai.com/games/lost-marbles/) | Racing, Multiplayer, Arcade | Online multiplayer | Quick Play entered a 1/50 lobby that filled with bots, then began a 50-marble race. A steering input changed the rendered race state while the player rank moved from 49th to 48th. The simultaneous-human path was not tested, but the first-party lobby explicitly supports up to 50 participants and identifies bot-filled slots. |
| [Roadster Rush](https://roadster-rush.ai.studio/) | Racing, Arcade | — | Starting and accelerating changed the live score and distance before a normal collision outcome. No human multiplayer mode was observed. |
| [BirdieSwing Island Run](https://www.birdieswing.com/play) | Sports, Arcade | — | Started Island Run, reached the tee, and advanced the swing prompt into its target/impact timing cues. Sharing a daily challenge is not treated as live multiplayer. |
| [3D Jelly Shooter Arcade](https://argonfruitshooter.netlify.app/) | Shooter, Arcade | — | Guest play and responsive shooting were verified in the creator-hosted 3D arcade. |
| [魔物の森サバイバル](https://tuyotanjp.github.io/vampire-like-shooter/) | Survival, Action | — | Guest run entered Wave 1, rendered enemies/projectiles, responded to movement input, and reached a normal game-over state. Rankings are not live multiplayer. |
| [フリック脳汁タイピング](https://dopa-typing.vercel.app/) | Arcade, Educational | — | Guest typing round accepted flick-style input and changed the live game state. |
| [Keep Knight](https://viggle.ai/games/keep-knight/) | Tower Defense, Strategy | — | Guest tower-defense interaction changed the active defense state. No human multiplayer mode was observed. |
| [Final Stretch 直線一気](https://jutsushi-tamaki.itch.io/chokusen-ikki) | Strategy, Racing | — | A solo race against seven CPU horses accepted a movement card and destination, advanced to Round 2, and updated positions/stamina. Advertised online rooms were not tested, so Multiplayer is withheld. |
| [Gulliver's Travels](https://gulliver.defiabell.com/) | Adventure | — | Guest play entered the beach scene and Space visibly changed the active scene after in-game volume was set to zero. |
| [STARWEAVE 星织](https://secondmax.github.io/STARWEAVE/) | Puzzle | — | Guest constellation interaction produced responsive puzzle-state changes. No human multiplayer mode was observed. |
| [Space Mission](https://space-game-deploy.vercel.app/) | Arcade, Action | — | Responsive single-player rocket play passed. Advertised co-op was not tested, so Multiplayer is withheld. |
| [ポンポコキャッチ](https://ponpoko-catch.netlify.app/) | Arcade | — | Guest catch-game input produced responsive state changes. No human multiplayer mode was observed. |
| [Castleforged](https://castleforged.itch.io/castleforged) | Strategy, Action | — | Guest play against AI responded to tactical input. AI opposition is not human multiplayer. |

These classifications describe the observed mechanics only. Gameplay acceptance, AI-authorship evidence, source-repository evidence, and publication status remain separate gates.
