# Game categories

`lib/game-categories.ts` owns the categories used by cards, search, Browse Games, All Games, and embedded game pages. Each reviewed game has one primary category followed by at most two meaningful secondary categories. Category order is intentional. The runtime never assigns more than three categories.

| Category | Core mechanic |
| --- | --- |
| Action | Real-time combat or demanding action |
| Shooter | Aiming and firing weapons as a central mechanic |
| Rhythm | Timing inputs to music or an explicit beat |
| Educational | Learning or practicing knowledge as a central goal |
| Simulators | Simulation of an activity or system; free driving does not establish a race |
| Survival | Enduring threats or resource pressure as the main loop |
| Strategy | Planning, tactical choices, or resource decisions |
| Multiplayer | Supported play by multiple humans, locally or online |
| Puzzle | Logic or manipulation to solve a problem |
| Arcade | Short, replayable score, timing, or reflex loop |
| Adventure | Exploration, narrative, or progression |
| Racing | Competing on a course, against rivals or time |
| Sports | A sport's rules or activity |
| Tower Defense | Deploying defenses to stop waves |
| Platformer | Jumping, climbing, and navigating platforms as a central mechanic |
| Casual | Low-pressure, simple interaction, without a better supported genre |

`Simulation` in the original catalogs is normalized to the existing `Simulators` label. Casual already exists in the direct-play catalog and now has a browse filter. All and Update are navigation filters, not categories.

Human multiplayer counts toward the three categories. `multiplayerModes` records the separate online/local label. Computer opponents, several cars on a track, and leaderboards do not establish human multiplayer. An online-mode label describes supported functionality; it does not claim that this review ran simultaneous remote clients.

Browse uses the entire already-listed collection, including games that open their own sites. Category metadata cannot publish a candidate or bypass an owner exclusion. Game URLs, artwork, order, iframe permissions, and publication gates are independent of classification.

## Adding or correcting a classification

1. Play the exact listed URL and record a meaningful action and its observed result. Support mechanics and modes with first-party instructions or source where useful.
2. Choose existing categories first. Add another category only when the core mechanic cannot be described accurately with the existing set.
3. Record dated findings and source links under `docs/category-audit/`. Distinguish current gameplay, first-party documentation, prior gameplay evidence, and unresolved cases. Preserve historical receipts.
4. Update `reviewedCategories` and the catalog's primary category together. Add `multiplayerModes` only with evidence of human play.
5. Run category tests, typecheck, lint, and build. Check every browse filter and search on desktop/mobile against the catalog before release.

Unresolved reviews retain their existing assignments and are listed in the audit report. Raw screenshots and browser captures remain in the local audit directory; compact findings and source links are committed. No review status or artwork provenance label is added to player-facing cards.
