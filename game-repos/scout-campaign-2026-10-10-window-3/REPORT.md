# AI Game Scout campaign — third window

Prepared for parent review from the current production repository main baseline. This checkout adds ten direct links to the exact playable sites selected by the parent. The 25-candidate manifest records creator-specific AI evidence, source URLs, direct gameplay inputs and visible responses, limits, and terminal decisions. The AddictingGames iframe path was not tested, and no iframe-verification flag or layout change was added.

Terminal review: 10 eligible, 13 held, and 2 excluded out of 25 candidates. The release set is candidate IDs 2, 4, 6, 7, 8, 9, 10, 14, 17, 20.

## Prepared release entries

| ID | Game | Exact playable URL | Direct response observed | Art |
|---:|---|---|---|---|
| 2 | Drawdown | https://drawdown-game.vercel.app/ | Direct game interaction verified. A two-shaft weaving puzzle lets the player thread warp, tie treadles, and weave rows; inputs changed both the woven cloth and the matching-cell/treadle counters. | creator/page cover |
| 4 | Night Cruise | https://nightcruisegame.com/ | The direct game loaded and keyboard inputs changed the visible speed and scene. The car spawned in a parking area facing a barrier; I did not reach the expressway or verify turning, so route-driving behavior remains untested. | creator/page cover |
| 6 | DiscoDino: Lost Worlds | https://discodino.netlify.app/ | Loaded to the DiscoDino: Lost Worlds title screen and entered Level 1, Jehol Biota. The HUD showed 0/13 photos and the prompt 'Spot a creature, then use the camera.' The bottom help bar listed WASD movement, C/right-click camera, Space/click snap, and E use. Clicking the canvas and holding W for 1.5 seconds moved the character north and scrolled the scene. Pressing Space left the photo count at 0/13; no creature photograph was confirmed. | creator/page cover |
| 7 | Heritage Walk: Ethiopia | https://heritage-walk-zeamekonnen-gmailcoms-projects.vercel.app/ | The landing page offered Just visit and Play the game. Chose Play the game, selected Rock-Hewn Churches, Lalibela, kept the default Elder traveller, and entered the fictional name 'Test Walker'. The playable 3D scene showed 0 of 3 landmarks found. Holding W for 1.5 seconds moved the avatar forward and discovered 'A New Jerusalem'; the visible HUD changed to 1 of 3 found and showed an explanatory card about Lalibela's layout and Yordanos stream. | creator/page cover |
| 8 | Rise & Raid | https://riseandraid.anemoncreative.com/ | The direct page loaded to a medieval village title screen. Chose Play as guest, then PLAY, entered the fictional village name 'Testhold', saved the guest village, and selected Let's go. Tutorial step 1/15 asked for a Gold Mine. Opened Build > Economy, selected Gold Mine (68), and clicked the visible placement ghost beside the Town Hall. The mine appeared and the tutorial advanced to step 2/15 ('Now build a Crystal Pump'); a 'Gold Mine built!' notice appeared and crystal changed from 1,000 to 932. | selected generated B |
| 9 | RoboBeats: Mooncake Chop | https://robobeats-mooncake-mobile.netlify.app/ | The page loaded to a menu for Mooncake Chop, with four selectable mooncake stages, six chopper choices, and Slow/Fast speed. Sound on was unchecked (value 0). Selected Play; after the 3-count start, tapped the visible mooncake at approximately [885, 508]. The mooncake split into two yolk halves and 'Perfect!' appeared, confirming the chop/timing response. | creator/page cover |
| 10 | Cinder Ring | https://cinderring.tech/ | Read How to Play. Started Single Player with the default Free-for-all, three rivals, Adept skill, and five rounds; entered round 1 and toggled the in-game sound control from Sound on to Sound off. The HUD showed round 1 of 5, player health 100/100, and Fireball on Q. Right-clicked toward an opponent at approximately [630, 158] and pressed Q. The player appeared at a new position and the Fireball icon showed a 5-second cooldown; the screenshot did not establish a hit or opponent damage. | creator/page cover |
| 14 | YugiSnap | https://yugisnap.kw-15.workers.dev/ | Direct browser page opened to a deck-ready home screen. Started Solo Duel > Single game. At turn 2 with 2 energy, dragged Blade Knight (cost 2, power 3) from the hand to lane 1; UI reported Planned Blade Knight and energy fell 2 to 0. Resolved Battle Phase; Blade Knight appeared as Set on our side of lane 1 and hand size decreased from 5 to 4. This verifies one card-placement action and response, not a complete duel. | creator/page cover |
| 17 | Word Ladder Duel | https://world-ladder-duel.grok.me/ | Page loaded to a match setup with no account requirement. Started a bot match (single-player vs computer; no multiplayer claim). The opening word was SANG. Selecting S→R produced “RANG · Valid”; submitting it changed Player 1 from 0 to 1 and passed the turn to the computer. The bot then played RANK, changed Computer from 0 to 1, and returned the turn to Player 1. One unsubmitted exploratory letter choice showed “QANG · Not in this match dictionary”; it did not enter the word history. | selected generated B |
| 20 | Neon Palms — Port Solana | https://dubovskylabs.com/benchmarks/gta/apps/claude-opus-5-5/index.html | In the 3D city scene, a one-second W input moved the avatar/camera forward toward the street. Pressing M opened the full Port Solana city map, showing named districts and a legend for police, shops, safehouses, races, roads, and turf; pressing M closed the map. The scene showed an avatar, pedestrians, traffic, storefronts, a minimap, an in-game clock, and $500 starting cash. A “CLICK TO PLAY” label remained visible while the movement and map controls responded; missions and vehicle entry were not tested. | creator/page cover |

## Held and excluded candidates

| ID | Candidate | Decision | Reason |
|---:|---|---|---|
| 1 | KosiGhost | hold_controls_unverified | No observable jump or duck response could be attributed to inputs during the short run. |
| 3 | Agege Life | hold_age_gate | Site required an 18+ assertion before gameplay; no age assertion or account submission was made. |
| 5 | Doodle Battles | hold_controls_unverified | Active enemy damage confounded movement and jump inputs; observed score/kills are not attributed to a control. |
| 11 | Cyber Dragons | hold_ai_authorship_unverified | Gameplay moved, but the source only says vibe coded and does not explicitly identify AI as making this game. |
| 12 | Kimuko: Counterforce | hold_controls_unverified | Lane-runner progression was observed, but no attributable arrow or drag response was established; explicit AI gate is also not met. |
| 13 | Neon Ronin: Road to Dawn | hold_ai_authorship_unverified | Creator praises GPT-6.1 Sol but does not explicitly state it made this game; combat also confounded controls. |
| 15 | My Aquarium | hold_ai_authorship_unverified | Creator says vibe-coded but does not explicitly identify AI or a tool as making the game; water-change response alone does not clear authorship. |
| 16 | Gatebreaker | hold_auth_gate | The title page required sign-in or registration; no account was entered or created. |
| 18 | Magic Cade Ball | hold_ai_authorship_and_game_classification | Creator does not explicitly identify AI authorship; one advice button responded, but no game objective or progression was shown. |
| 19 | The Adventures of Cyrax | hold_ai_authorship_unverified | A short rhythm-game sequence loaded, but creator only says vibe coded; no explicit game-specific AI authoring statement was found. No separate rights gate applied. |
| 21 | Neon Skies (霓虹天际) | hold_game_classification | Parent direct check found a responsive procedural city generator with seed/building/room-count changes but no game goal. |
| 22 | Sven Stroll | hold_controls_unverified | Parent direct check found that K, focus+K, and a pistol click did not change ammo; timer advanced without a verified gameplay response. |
| 23 | Kreuz & Adler Codex | excluded_reference_book | Parent direct check found a 19-page flipbook; its PLAY link points to a separately tracked game and is not itself a standalone game. |
| 24 | Awoken Way | excluded_non_game | Parent direct check found a numerology calculator/reflection/practice/membership site, with no game presented. |
| 25 | Let there be light | hold_game_classification | Parent direct check found a timed particle/early-universe educational experience with epochs and counters but no game goal. |

## Art and validation

Eight accepted entries use inspected creator or game-page covers. Rise & Raid and Word Ladder Duel use the selected B concepts shown in the campaign chat; their prompts and source images are referenced in the manifest. All ten final WebP files are 1200×845, preserving the existing 1.42 card slot. The generated concept paths retain the existing concept-art badge behavior.

No catalog entry was removed. All source URLs were checked against the current main catalog and the saved prior/live URL snapshots. The baseline had 77 direct-game records; the prepared list has 87 unique URLs, with all previous 77 entries preserved. The ten release URLs had no exact match in the current main catalog, 243 saved prior URLs, or 447 extracted live-page URLs.

Validation passed: npm run lint; npm test (13 tests); npm run build; npm run typecheck; git diff --check; 10 unique release URLs, all 10 images present at 1200×845, and image SHA-256 values matched the manifest. npm ci completed and reported five high-severity dependency audit findings in the existing lockfile; no dependency changes were made.

Prepared only. No commit, push, merge, or deployment has occurred.
