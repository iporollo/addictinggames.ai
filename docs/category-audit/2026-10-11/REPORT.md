# Live catalog category review — October 11, 2026

Reviewed all 167 games from production source `a4b007f` using exactly five `gpt-6-luna` agents configured with Max reasoning. 91 games have corrected or expanded category assignments. Every game has at most three categories. Online/local human mode labels are separate.

Current gameplay: 79. Documentation/prior evidence: 84. Unresolved: 4. Access barriers recorded: 31.

Original categories are preserved in `roster.json` and the source-derived `original-tags.json`; per-game observations and source references are in the five worker review files. `decisions.json` records supervisor acceptance or retention of the existing tags. Raw screenshots remain local; `screenshot-hashes.json` identifies captures cited by those reviews. Access barriers describe this review environment, not a claim that a game fails for every user. These issues do not remove games from the catalog.

## Games with access barriers

| Game | Issue type | Observed barrier | Classification basis |
| --- | --- | --- | --- |
| [Black Ops 2](https://vibeslops.luckeysystems.com/) | dns | The linked host returned DNS_PROBE_FINISHED_NXDOMAIN on two attempts; no game content loaded. | Unresolved |
| [Brian Boru Golf](https://brian-boru-golf-2026.griffin147.chatgpt.site/golf-game?v=4) | public-leaderboard | Start led to a public player-name prompt before the first golf shot; the review did not submit a name. | Documentation / prior evidence |
| [Crew Run](https://claude.ai/artifact/WSVMA7xecUuBPL5wKkx62p) | 404 | Current Claude artifact URL displays Page not found. | Documentation / prior evidence |
| [CS Surf](https://surfd.net/) | loading | The selected Boreas course remained at “Loading Boreas… / Loading map…” through the short retry. | Documentation / prior evidence |
| [DiscoDino: Lost Worlds](https://discodino.netlify.app/) | loading | Two clicks on the visible Play control left the game on its title screen in this browser session. | Documentation / prior evidence |
| [DliClips Rush](https://dliclips-rush.netlify.app/) | public-leaderboard | Continuing as guest would publish a nickname/avatar and best scores publicly; the audit stopped before supplying identity or score data. | Documentation / prior evidence |
| [Duel in the Great Hall](https://claude.ai/artifact/PBxLGdivoetPfPiukZjJHu) | 404 | The assigned Claude artifact URL returns Page not found. | Documentation / prior evidence |
| [Flagfield](https://flag-field.grok.me/) | sign-in | Sign-in is required to choose a lobby username and join a human match; the AI setup is accessible without signing in. | Documentation / prior evidence |
| [fly.pieter.com](https://fly.pieter.com) | other | Joining requires entering a display name and completing a Cloudflare human-verification challenge; neither was used. | Documentation / prior evidence |
| [Freesbee](https://okidoki9903.github.io/Freesbee/) | other | The scene rendered at launch, but after input the capture became a solid green canvas, preventing visual confirmation of live play. | Documentation / prior evidence |
| [GTA 5](https://web.archive.org/web/20261006055917/https://playgta5.com/) | loading | The archived shell loaded, but its black game canvas stalled at 6% after 52 seconds and displayed a no-progress / possible out-of-memory warning. | Unresolved |
| [GTA Vice City](https://joncodeofficial.github.io/gta-vice-city-wasm) | game-copy-required | The port requires the player’s own game.tar.gz before Start; no game files were supplied. The current port page says the data is not included. | Documentation / prior evidence |
| [HALBERD FLIGHT RANGE](https://claude.ai/artifact/KsDAsLriC91Yc3SiSSNUU4) | 404 | Current Claude artifact URL returned Page not found on initial navigation and retry. | Documentation / prior evidence |
| [Half Life](https://pixelsuft.github.io/hl/) | loading | The Emscripten port remained on an incomplete Memory size settings screen after the loading allowance. | Documentation / prior evidence |
| [Half Life / CS 1.6](https://x8bitrain.github.io/webXash/) | game-copy-required | The current WebXash page did not include the Counter-Strike game data; it asks the player to provide a game folder or ZIP before a game can run. | Documentation / prior evidence |
| [Halo CE](https://mitchellhynes.com/halo) | game-copy-required | The first-party site states it does not provide Halo game data and requires the player to choose an XISO made from their own Xbox copy; no playable game scene was available without that file. | Documentation / prior evidence |
| [Halo CE mobile](https://hcemobile.com/) | game-copy-required | Requires the player’s own Halo CE Xbox disc image before play. Online additionally requires an account, which was not created or used. | Documentation / prior evidence |
| [Lava Lasso](https://sloptopia.gooooooooor.chatgpt.site/games/lava-lasso.html?from=sloptopia) | pointer-capture | The game page loaded, but pointer-lock capture reported “The root document of this element is not valid for pointer lock.” W advanced the tutorial once, while Space did not advance the jump step, so full control was not verified in this headless session. | Current gameplay |
| [Neon Palms — Port Solana](https://dubovskylabs.com/benchmarks/gta/apps/claude-opus-5-5/index.html) | loading | The title screen remained after two clicks on CLICK TO PLAY; no in-game scene appeared. | Documentation / prior evidence |
| [Operation Nightwood](https://claude.ai/artifact/CdXyZVrixg9iZDA1k5eH6G) | 404 | The supplied artifact URL displays “Page not found.” | Unresolved |
| [Planeteer](https://planeteer.vercel.app/) | pointer-capture | The current headless browser remains at the 'Click to look around' pointer-capture prompt; a prior native-browser receipt successfully moved and explored the world. | Documentation / prior evidence |
| [Quake 1](https://q1.pieter.com/) | other | The public /play endpoint returned HTTP 403 Forbidden during this review. | Documentation / prior evidence |
| [Quake 3](https://q3.pieter.com/) | other | Clicking Play returned 403 Forbidden (nginx/1.30.4). | Documentation / prior evidence |
| [Return to Castle Wolfenstein](https://rtcw.pieter.com/) | other | Clicking Play returned 403 Forbidden (nginx/1.30.4) before the advertised large game-data download. | Documentation / prior evidence |
| [Rise & Raid](https://riseandraid.anemoncreative.com/) | other | The first response showed a 403 browser-check interstitial; it cleared to the guest landing screen after a short wait. | Documentation / prior evidence |
| [Skate 3](https://skate.aaddpp.lol/) | game-copy-required | The linked site contains only the engine; a legally owned Skate 3 copy converted by the user is required to play. | Documentation / prior evidence |
| [SOMNOLITH alpha](https://claude.ai/artifact/RbtCujA2J6CpzJnxSEsYJ6) | 404 | The assigned Claude artifact URL currently returns Page not found. | Documentation / prior evidence |
| [Till Dark](https://till-dark.vercel.app/) | pointer-capture | Headless browser pointer capture did not clear the Click again to enter overlay; previous native-browser gameplay did enter and move. | Documentation / prior evidence |
| [VECTOR: Anti-Gravity Racing](https://wavedash.com/games/vector-anti-gravity-racing) | other | The public game page exposed an account panel and no playable client/Play control in this session; sign-in was not attempted. | Documentation / prior evidence |
| [Wild Fields 1648](https://claude.ai/artifact/WKFVS2VNcV8eKBd4kQs4mH) | 404 | The assigned Claude artifact URL returns Page not found. | Documentation / prior evidence |
| [YugiSnap](https://yugisnap.kw-15.workers.dev/) | dns | The supplied host yugisnap.kw-15.workers.dev returned DNS_PROBE_FINISHED_NXDOMAIN on two visits. | Unresolved |

## Complete catalog

| Game | Final categories | Human mode | Verification | Access issue | Tag decision |
| --- | --- | --- | --- | --- | --- |
| [3D Car Driving Simulator](https://3d-car-driving-simulation.vercel.app) | Simulators | — | Current gameplay | — | Retained |
| [3rd Mainland Biker](https://3rdmainland.start.ng/) | Racing | — | Current gameplay | — | Corrected |
| [99% YOUTH Échecs](https://flora-acorn-cloud-rapid.grok.me/) | Strategy · Multiplayer | Local 2-player | Current gameplay | — | Corrected |
| [A71 // GO FOR LAUNCH](https://go4launch.grok.me/) | Arcade | — | Current gameplay | — | Retained |
| [Aether Break](https://cactus-eagle-finch-branch.grok.me/) | Arcade | — | Current gameplay | — | Corrected |
| [ASH LINE](https://cedar-crisp-sky-orbit.grok.me/ash-line.html) | Tower Defense · Strategy · Survival | — | Current gameplay | — | Corrected |
| [Ashen Vow](https://pearl-spark-hazel-bold.grok.me/) | Action · Adventure | — | Documentation / prior evidence | — | Retained |
| [Atomic War 2D](https://atomic.sonnylab.com/) | Strategy | — | Current gameplay | — | Retained |
| [Axiom](https://horizon-plum-forest-zest.grok.me/) | Puzzle | — | Current gameplay | — | Retained |
| [Bad Idea](https://claude-codex.anshkapuriya.in/) | Puzzle | — | Current gameplay | — | Retained |
| [Battle Peaks](https://battle-peaks1.vercel.app/) | Strategy · Multiplayer | Local 2-player | Current gameplay | — | Retained |
| [Black Ops 2](https://vibeslops.luckeysystems.com/) | Action | — | Unresolved | The linked host returned DNS_PROBE_FINISHED_NXDOMAIN on two attempts; no game content loaded. | Retained |
| [BO1 Zombies](https://vel.gg/bo1z) | Action · Survival · Shooter | — | Documentation / prior evidence | — | Corrected |
| [Brian Boru Golf](https://brian-boru-golf-2026.griffin147.chatgpt.site/golf-game?v=4) | Sports | — | Documentation / prior evidence | Start led to a public player-name prompt before the first golf shot; the review did not submit a name. | Retained |
| [Bruce Lee: The Dragon Returns](https://axchapman.freedev.app/brucelee.php) | Action · Adventure · Platformer | — | Current gameplay | — | Corrected |
| [CANAL SHARK](https://bukangshark.restart4k.workers.dev/) | Survival · Arcade · Action | — | Documentation / prior evidence | — | Corrected |
| [Church Life](https://churchlife.netlify.app/) | Adventure | — | Documentation / prior evidence | — | Retained |
| [Cinder Ring](https://cinderring.tech/) | Action · Multiplayer | Online multiplayer | Current gameplay | — | Corrected |
| [Clunk Smash](https://clunk.games/en/smash) | Action · Arcade | — | Documentation / prior evidence | — | Corrected |
| [Coin Collector 3D](https://notef.dreamcore.gg/coin-collector-3d/) | Action · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [Color War](https://solider10.github.io/colorwar/) | Strategy · Multiplayer | Local 2-player | Documentation / prior evidence | — | Corrected |
| [Comet Cup](https://legendary-faloodeh-080537.netlify.app/games/comet-cup/index.html) | Racing · Multiplayer | Local 2-player | Current gameplay | — | Corrected |
| [Cowduction](https://cowduction.guibsonv.chatgpt.site/) | Action · Arcade · Shooter | — | Current gameplay | — | Corrected |
| [Cows With Buns](https://cowswithbuns.stevenrouk.com/) | Action · Shooter | — | Documentation / prior evidence | — | Corrected |
| [Crew Run](https://claude.ai/artifact/WSVMA7xecUuBPL5wKkx62p) | Adventure | — | Documentation / prior evidence | Current Claude artifact URL displays Page not found. | Retained |
| [CS Surf](https://surfd.net/) | Racing | — | Documentation / prior evidence | The selected Boreas course remained at “Loading Boreas… / Loading map…” through the short retry. | Corrected |
| [Diablo](https://johnimril.github.io/diablo_web/) | Action · Adventure | — | Documentation / prior evidence | — | Corrected |
| [Dili Cart](https://dili-cart.pages.dev/) | Racing · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [Dino Souls](https://updateddino.xyz/) | Action · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [DIRTLINE](https://dirtline.pages.dev/?v=2) | Racing | — | Current gameplay | — | Corrected |
| [DiscoDino: Lost Worlds](https://discodino.netlify.app/) | Adventure | — | Documentation / prior evidence | Two clicks on the visible Play control left the game on its title screen in this browser session. | Retained |
| [DliClips Rush](https://dliclips-rush.netlify.app/) | Arcade | — | Documentation / prior evidence | Continuing as guest would publish a nickname/avatar and best scores publicly; the audit stopped before supplying identity or score data. | Retained |
| [Dlicom Attack](https://dlicom-attack.vercel.app/) | Strategy | — | Current gameplay | — | Retained |
| [Doge Rally](https://slate-juniper-arch-drum.grok.me/) | Sports · Arcade · Multiplayer | Local 2-player | Documentation / prior evidence | — | Corrected |
| [Dracula 0](https://dracula-0.vercel.app/) | Action · Adventure | — | Current gameplay | — | Retained |
| [Drawdown](https://drawdown-game.vercel.app/) | Puzzle | — | Current gameplay | — | Retained |
| [Duel in the Great Hall](https://claude.ai/artifact/PBxLGdivoetPfPiukZjJHu) | Action | — | Documentation / prior evidence | The assigned Claude artifact URL returns Page not found. | Retained |
| [Dust & Lead](https://inkstaid.github.io/dust-and-lead/) | Platformer · Action · Shooter | — | Current gameplay | — | Corrected |
| [EARTH DEFENDER](https://apex-slate-spring-otter.grok.me/) | Action · Shooter | — | Current gameplay | — | Corrected |
| [Falling Bubbles](https://falling-bubbles.vercel.app/) | Arcade · Multiplayer · Shooter | Local 2-player | Current gameplay | — | Corrected |
| [Faux Ami](https://faux-ami-french-game.vercel.app/) | Puzzle · Educational | — | Current gameplay | — | Corrected |
| [Flagfield](https://flag-field.grok.me/) | Puzzle · Multiplayer | Online multiplayer | Documentation / prior evidence | Sign-in is required to choose a lobby username and join a human match; the AI setup is accessible without signing in. | Corrected |
| [Flap NYC](https://flapnyc.kumodeck.app/) | Arcade | — | Current gameplay | — | Retained |
| [Fleet Horizon](https://defense.aizoo.one/) | Action · Shooter | — | Documentation / prior evidence | — | Corrected |
| [Fluffy Chase](https://the-file-fluffy-chase.morning-rice-8034.workers.dev/) | Action · Adventure · Multiplayer | Online multiplayer | Current gameplay | — | Corrected |
| [fly.pieter.com](https://fly.pieter.com) | Simulators · Multiplayer | Online multiplayer | Documentation / prior evidence | Joining requires entering a display name and completing a Cloudflare human-verification challenge; neither was used. | Retained |
| [FlyCard](https://takedaiori.github.io/flycardgame/) | Strategy | — | Current gameplay | — | Retained |
| [Footballmon](https://footballmon.satinyhero4.chatgpt.site/) | Sports · Strategy · Simulators | — | Current gameplay | — | Corrected |
| [FOUNDRY](https://games.jimmychandra.com/games/foundry/) | Puzzle | — | Current gameplay | — | Retained |
| [Freesbee](https://okidoki9903.github.io/Freesbee/) | Sports · Arcade | — | Documentation / prior evidence | The scene rendered at launch, but after input the capture became a solid green canvas, preventing visual confirmation of live play. | Corrected |
| [Gigacity](https://sael.net/gigacity) | Simulators | — | Documentation / prior evidence | — | Retained |
| [Golden Tide](https://sundyme.github.io/golden-tide-play) | Casual | — | Current gameplay | — | Retained |
| [GTA 5](https://web.archive.org/web/20261006055917/https://playgta5.com/) | Simulators | — | Unresolved | The archived shell loaded, but its black game canvas stalled at 6% after 52 seconds and displayed a no-progress / possible out-of-memory warning. | Retained |
| [GTA Vice City](https://joncodeofficial.github.io/gta-vice-city-wasm) | Action · Adventure | — | Documentation / prior evidence | The port requires the player’s own game.tar.gz before Start; no game files were supplied. The current port page says the data is not included. | Corrected |
| [HALBERD FLIGHT RANGE](https://claude.ai/artifact/KsDAsLriC91Yc3SiSSNUU4) | Simulators | — | Documentation / prior evidence | Current Claude artifact URL returned Page not found on initial navigation and retry. | Retained |
| [Half Life](https://pixelsuft.github.io/hl/) | Action · Shooter | — | Documentation / prior evidence | The Emscripten port remained on an incomplete Memory size settings screen after the loading allowance. | Corrected |
| [Half Life / CS 1.6](https://x8bitrain.github.io/webXash/) | Action · Shooter | — | Documentation / prior evidence | The current WebXash page did not include the Counter-Strike game data; it asks the player to provide a game folder or ZIP before a game can run. | Corrected |
| [Halo CE](https://mitchellhynes.com/halo) | Action · Shooter · Multiplayer | Online multiplayer | Documentation / prior evidence | The first-party site states it does not provide Halo game data and requires the player to choose an XISO made from their own Xbox copy; no playable game scene was available without that file. | Corrected |
| [Halo CE mobile](https://hcemobile.com/) | Action · Multiplayer · Shooter | Online multiplayer | Documentation / prior evidence | Requires the player’s own Halo CE Xbox disc image before play. Online additionally requires an account, which was not created or used. | Corrected |
| [Heritage Walk: Ethiopia](https://heritage-walk-zeamekonnen-gmailcoms-projects.vercel.app/) | Adventure | — | Current gameplay | — | Retained |
| [Heroes Journey](https://heroezjourney.com/) | Action · Adventure · Platformer | — | Documentation / prior evidence | — | Corrected |
| [Hidamari Pond](https://seicolor.github.io/hidamari-numa-site/play/?place=numa) | Simulators | — | Current gameplay | — | Retained |
| [Hungry Seal](https://hungry-seal.horly.dev/) | Arcade · Survival | — | Current gameplay | — | Corrected |
| [Ink Dash](https://rajpurohitkushal92.github.io/khnix-game-12/) | Action · Arcade · Shooter | — | Current gameplay | — | Corrected |
| [Island Survivor](https://ja.sperdeboer.nl/island/) | Survival | — | Documentation / prior evidence | — | Retained |
| [Jamo Jump](https://jamojump.app/) | Puzzle | — | Documentation / prior evidence | — | Retained |
| [K-DUDU: Ironfang](https://oasis-winter-blade-thunder.grok.me/) | Platformer · Action | — | Current gameplay | — | Corrected |
| [Kettu-Vellam](https://kettuvellam.com/) | Racing | — | Current gameplay | — | Retained |
| [Kindlekeep TD](https://kindlekeep.vercel.app/) | Strategy · Tower Defense | — | Documentation / prior evidence | — | Retained |
| [Kreuz & Adler](https://kreuzundadlerspiel.grok.me/en) | Strategy | — | Current gameplay | — | Retained |
| [Lantern Isle](https://games.jimmychandra.com/games/lantern_isle/) | Adventure · Platformer | — | Documentation / prior evidence | — | Corrected |
| [Lantern Walk](https://sail-giant-wave-tiger.grok.me/) | Puzzle · Casual | — | Documentation / prior evidence | — | Corrected |
| [Lava Lasso](https://sloptopia.gooooooooor.chatgpt.site/games/lava-lasso.html?from=sloptopia) | Action · Platformer · Survival | — | Current gameplay | The game page loaded, but pointer-lock capture reported “The root document of this element is not valid for pointer lock.” W advanced the tutorial once, while Space did not advance the jump step, so full control was not verified in this headless session. | Corrected |
| [Let's Kart!](https://fish.ryantsai.com/kart/) | Racing · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [Little Lake (Gone Fishin')](https://fishing-supdlicomcom.vercel.app/) | Simulators | — | Current gameplay | — | Retained |
| [Llama Roguelike](https://aovks23.itch.io/llama-roguelike-work-in-progress) | Strategy | — | Documentation / prior evidence | — | Retained |
| [Mars GT](https://mars-gt.vercel.app/) | Simulators | — | Current gameplay | — | Retained |
| [Math Quest](https://mathquest-play.mareku011.chatgpt.site/) | Puzzle · Adventure · Educational | — | Current gameplay | — | Corrected |
| [Mayoi Koji](https://cloud-tulip-beam-fire.grok.me) | Puzzle | — | Current gameplay | — | Retained |
| [Mikage Quest](https://kazuyoshi1118.itch.io/mikage-quest) | Adventure · Strategy | — | Current gameplay | — | Corrected |
| [Moon & Mars Mission Studio](https://sanghyunpark.pages.dev/apps/mission-studio/) | Simulators | — | Current gameplay | — | Retained |
| [Moonlit Spellcaster](https://clubhouse1661.github.io/moonlit-spellcaster/) | Arcade | — | Current gameplay | — | Retained |
| [MUST KILL THE KING](https://forest-brook-zenith-iris.grok.me/) | Strategy | — | Current gameplay | — | Retained |
| [Naval Warfare](https://gunwake.aizoo.one/) | Action · Shooter | — | Current gameplay | — | Corrected |
| [Neon Nightfall](https://mdhasibul35.github.io/neon-nightfall/) | Action · Survival · Shooter | — | Current gameplay | — | Corrected |
| [Neon Palms — Port Solana](https://dubovskylabs.com/benchmarks/gta/apps/claude-opus-5-5/index.html) | Simulators · Adventure | — | Documentation / prior evidence | The title screen remained after two clicks on CLICK TO PLAY; no in-game scene appeared. | Corrected |
| [NEON STACK](https://neon-stack.grok.me/) | Puzzle | — | Current gameplay | — | Retained |
| [Night Cruise](https://nightcruisegame.com/) | Simulators | — | Current gameplay | — | Corrected |
| [Night Shift](https://games.jimmychandra.com/games/night_shift/) | Puzzle | — | Current gameplay | — | Retained |
| [Nushi Fishing](https://nushizuri02.netlify.app/) | Simulators | — | Current gameplay | — | Retained |
| [Operation Nightwood](https://claude.ai/artifact/CdXyZVrixg9iZDA1k5eH6G) | Action | — | Unresolved | The supplied artifact URL displays “Page not found.” | Retained |
| [Opus 5.5 NBA 2K](https://genex.games/opus-2k) | Sports | — | Documentation / prior evidence | — | Retained |
| [Orbit Forge](https://vishalbhoir18.github.io/rocket_orbit_forge/) | Simulators · Strategy | — | Current gameplay | — | Corrected |
| [OverBurn](https://overburn.whitebeardapps.com/) | Action · Arcade · Shooter | — | Documentation / prior evidence | — | Corrected |
| [OVZ: Global Flashpoint](https://ovz-game-production.up.railway.app/) | Action · Multiplayer · Shooter | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [Pantry Dash](https://mdhasibul35.github.io/pantry-dash/) | Arcade | — | Current gameplay | — | Retained |
| [Pelican Ride](https://yuhan9988.github.io/pelican-ride/) | Sports · Arcade | — | Current gameplay | — | Corrected |
| [PES 6](https://pes6.optijuegos.net/) | Sports · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [Pip the Plant](https://legendary-faloodeh-080537.netlify.app/games/pip-the-plant/index.html) | Simulators | — | Documentation / prior evidence | — | Retained |
| [Pit Tactics](https://www.scenario.com/explorations/pit-tactics/) | Strategy | — | Documentation / prior evidence | — | Retained |
| [Plaid Circuit](https://roadster.grok.me/) | Racing · Arcade | — | Documentation / prior evidence | — | Corrected |
| [Planeteer](https://planeteer.vercel.app/) | Simulators · Adventure · Multiplayer | Online multiplayer | Documentation / prior evidence | The current headless browser remains at the 'Click to look around' pointer-capture prompt; a prior native-browser receipt successfully moved and explored the world. | Corrected |
| [Pocket Gridiron](https://cellis212.github.io/pocket-gridiron/) | Sports · Strategy · Simulators | — | Current gameplay | — | Corrected |
| [Project Nova](https://project-nova-v0001.grok.me/) | Arcade · Action | — | Current gameplay | — | Corrected |
| [Proposed Frontiers](https://sykespicot.io/) | Strategy | — | Current gameplay | — | Retained |
| [PULSE](https://orbix.grok.me/) | Arcade | — | Documentation / prior evidence | — | Retained |
| [Pumpwise](https://pumpwise-chi.vercel.app/) | Simulators | — | Documentation / prior evidence | — | Retained |
| [Puni Jump](https://puni-jump.web.app/) | Arcade · Platformer · Action | — | Documentation / prior evidence | — | Corrected |
| [Quake 1](https://q1.pieter.com/) | Action · Multiplayer · Shooter | Online multiplayer | Documentation / prior evidence | The public /play endpoint returned HTTP 403 Forbidden during this review. | Corrected |
| [Quake 2](https://q2.pieter.com/) | Action · Shooter · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [Quake 3](https://q3.pieter.com/) | Action · Multiplayer · Shooter | Online multiplayer | Documentation / prior evidence | Clicking Play returned 403 Forbidden (nginx/1.30.4). | Corrected |
| [Quiet Rooms](https://53616d616e746861.github.io/quiet-rooms/) | Adventure | — | Current gameplay | — | Retained |
| [Rage](https://darths-rage.netlify.app/) | Action | — | Documentation / prior evidence | — | Retained |
| [Rajyam](https://playrajyam.com/) | Action | — | Documentation / prior evidence | — | Corrected |
| [Rally Director](https://j001net.itch.io/rally-director) | Racing · Strategy · Rhythm | — | Documentation / prior evidence | — | Corrected |
| [Return to Castle Wolfenstein](https://rtcw.pieter.com/) | Action · Multiplayer · Shooter | Online multiplayer | Documentation / prior evidence | Clicking Play returned 403 Forbidden (nginx/1.30.4) before the advertised large game-data download. | Corrected |
| [Ripple Pool](https://ripplepool.app/) | Puzzle | — | Current gameplay | — | Retained |
| [Rise & Raid](https://riseandraid.anemoncreative.com/) | Strategy | — | Documentation / prior evidence | The first response showed a 403 browser-check interstitial; it cleared to the guest landing screen after a short wait. | Retained |
| [RoboBeats: Mooncake Chop](https://robobeats-mooncake-mobile.netlify.app/) | Arcade | — | Documentation / prior evidence | — | Retained |
| [RoboBeats: Pumpkin Catch](https://pumpkin-catch.netlify.app) | Arcade | — | Current gameplay | — | Corrected |
| [Roll for AGI](https://rollforagi.com) | Strategy | — | Current gameplay | — | Retained |
| [RX-78-2 Re-entry](https://rx78-2-reentry.vercel.app/) | Simulators · Action | — | Documentation / prior evidence | — | Corrected |
| [Sadie & Luna](https://sadieandluna-thegame.grok.me/) | Puzzle · Adventure · Platformer | — | Documentation / prior evidence | — | Corrected |
| [Salmon Survival](https://salmon-survival.vercel.app/) | Survival | — | Current gameplay | — | Retained |
| [Señor Inteligente](https://inteligente.lol/) | Arcade · Action | — | Current gameplay | — | Corrected |
| [ShareSpark](https://share-spark.vercel.app) | Simulators · Strategy · Multiplayer | Local multiplayer | Documentation / prior evidence | — | Corrected |
| [Skate 3](https://skate.aaddpp.lol/) | Sports | — | Documentation / prior evidence | The linked site contains only the engine; a legally owned Skate 3 copy converted by the user is required to play. | Retained |
| [Ski Jumping](https://skijumping.io/) | Sports · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [Ski Simulator 360 (Vail)](https://ski-simulator-360.pages.dev/?world=vail) | Sports · Simulators · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [Sky Runner](https://games.johnslagboom.com/skyrunner/) | Arcade | — | Current gameplay | — | Retained |
| [Small Worlds](https://crane-cosmic-kind-rose.grok.me/) | Survival · Adventure | — | Current gameplay | — | Corrected |
| [Snowboard Supreme](https://snowboard-supreme.vercel.app/) | Sports · Arcade | — | Current gameplay | — | Corrected |
| [Soccar](https://soccar-one.vercel.app/) | Sports | — | Current gameplay | — | Retained |
| [SOMNOLITH alpha](https://claude.ai/artifact/RbtCujA2J6CpzJnxSEsYJ6) | Adventure | — | Documentation / prior evidence | The assigned Claude artifact URL currently returns Page not found. | Retained |
| [Spark](https://geoffstearns.com/spark/) | Simulators · Strategy | — | Current gameplay | — | Corrected |
| [SPIRE](https://juniper-fern-giant-zephyr.grok.me/) | Arcade | — | Current gameplay | — | Corrected |
| [Stardust Isles](https://game.danzechen.world/) | Adventure | — | Documentation / prior evidence | — | Retained |
| [STARFALL: The Last Beacon](https://starfall-pocket-arcade.shang637.chatgpt.site/) | Action · Arcade · Shooter | — | Current gameplay | — | Corrected |
| [Super Detective](https://superdetectivegame.com/) | Puzzle | — | Documentation / prior evidence | — | Retained |
| [Terra Incognita](https://mts.now/mathofthewild) | Adventure · Educational | — | Documentation / prior evidence | — | Corrected |
| [The Mutual Fun](https://mutual-self.vercel.app/) | Arcade | — | Documentation / prior evidence | — | Retained |
| [The Simpsons: Hit & Run](https://shar-wasm.cjoseph.workers.dev/?skipmovie) | Adventure | — | Documentation / prior evidence | — | Corrected |
| [The Street Game](https://street-game.centro-datos-crudo.workers.dev/) | Casual | — | Documentation / prior evidence | — | Retained |
| [Thermopylae](https://thermopylae-v2.vercel.app/) | Action | — | Documentation / prior evidence | — | Retained |
| [Tidebreak](https://tidebreak.freesoul.games/) | Strategy | — | Documentation / prior evidence | — | Retained |
| [Tiger Rider Chess: Der Kompass](https://tigerriderchess.grok.me/) | Strategy · Multiplayer | Local 2-player | Current gameplay | — | Corrected |
| [Till Dark](https://till-dark.vercel.app/) | Adventure | — | Documentation / prior evidence | Headless browser pointer capture did not clear the Click again to enter overlay; previous native-browser gameplay did enter and move. | Retained |
| [Time Echo](https://time-echo-play.vercel.app/) | Adventure · Puzzle | — | Current gameplay | — | Corrected |
| [Timeline Tactics](https://tactics.parasol.network/play?v=7) | Strategy · Multiplayer | Online multiplayer | Current gameplay | — | Corrected |
| [Toadstool Crossing](https://toadstoolcrossing.grok.me/) | Arcade | — | Current gameplay | — | Retained |
| [Toybox Push](https://games.jimmychandra.com/games/toybox_push/) | Puzzle | — | Documentation / prior evidence | — | Retained |
| [Trip_Ibadan](https://trip-ibadan.vercel.app/) | Simulators | — | Documentation / prior evidence | — | Retained |
| [Ttak! Stop](https://ttak-stop.web.app/) | Arcade | — | Current gameplay | — | Corrected |
| [Turbo Kart GP](https://turbo-kart-gp-6e9.pages.dev/) | Racing | — | Documentation / prior evidence | — | Corrected |
| [UNBURIED: Blackwald Bunker](https://unburied.inkwave.workers.dev/) | Shooter · Survival · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [VECTOR: Anti-Gravity Racing](https://wavedash.com/games/vector-anti-gravity-racing) | Racing · Arcade · Multiplayer | Online multiplayer | Documentation / prior evidence | The public game page exposed an account panel and no playable client/Play control in this session; sign-in was not attempted. | Corrected |
| [Void Clash TCG](https://void-clash-tcg.grok.me) | Strategy · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [Void Explorer](https://void-explorer.openai.chatgpt.site/) | Simulators | — | Current gameplay | — | Retained |
| [VORTEX RASH](https://amber-arch-blue-reef.grok.me/) | Racing · Action | — | Current gameplay | — | Corrected |
| [Warpstrike](https://games.agora-agency.com/g/warpstrike-5c3b17) | Action · Shooter · Arcade | — | Current gameplay | — | Corrected |
| [What Maya Knew](https://yenfus.itch.io/what-maya-knew) | Adventure · Puzzle | — | Documentation / prior evidence | — | Corrected |
| [Wild Fields 1648](https://claude.ai/artifact/WKFVS2VNcV8eKBd4kQs4mH) | Strategy | — | Documentation / prior evidence | The assigned Claude artifact URL returns Page not found. | Retained |
| [Word Ladder Duel](https://world-ladder-duel.grok.me/) | Puzzle · Multiplayer | Local 2-player | Current gameplay | — | Corrected |
| [Wording Well](https://exedexes1.itch.io/wording-well) | Puzzle | — | Documentation / prior evidence | — | Retained |
| [WW2 Dog Fight Arena](https://fly.zullo.fun/) | Simulators · Action · Multiplayer | Online multiplayer | Documentation / prior evidence | — | Corrected |
| [YugiSnap](https://yugisnap.kw-15.workers.dev/) | Strategy | — | Unresolved | The supplied host yugisnap.kw-15.workers.dev returned DNS_PROBE_FINISHED_NXDOMAIN on two visits. | Retained |
| [Zero Facility](https://suyancc.github.io/zero-facility) | Adventure | — | Current gameplay | — | Retained |
