# AI Game Scout campaign — Window 4

Prepared a 15-game direct-play batch; the parent selected STARFALL artwork option B. The current-main catalog has **87** direct entries; the 15 approved URLs are absent from current main, the Window 1–3 release/candidate records, and the fetched live `/games` page. Exact URL matching found no duplicates. Window 3’s similarly titled “Kreuz & Adler Codex” is an excluded flipbook on a different URL; the Window 4 game is Cross & Eagle. The Window 3 Scout transcript includes a later appended Window 4 result, so it was not treated as a prior candidate record.

## Release scope

Fifteen games have parent-verified direct input responses and explicit game-specific AI authorship evidence. The manifest preserves the creator’s exact quote and public source URL, the observed game destination, a short input/response note, and selected artwork provenance. ID 16 links to the observed game at `/golf-game?v=4`, not its event landing page. ID 17 uses the parent-selected generated concept B; the retained gameplay report has no screenshot, so that concept is identified as genre-based rather than as a screenshot or verified art match.

All selected image files are 1200×845 WebP for the existing 1.42 card slot. No CSS or layout changes were made, and no iframe verification flags were added.

## Held candidates

| ID | Candidate | Hold code | Reason |
|---:|---|---|---|
| 8 | Pac-Matic | `hold_ai_authorship_unverified` | The source does not explicitly attribute this specific game to AI; platform/brand context is insufficient. |
| 9 | Copperwind Arcade | `hold_exact_game_url_unverified` | The URL is an arcade collection hub; the candidate is not a single exact playable game. |
| 10 | Third Person Boxer 3D | `hold_controls_unverified` | The parent test did not establish a visible response to actual game controls. |
| 13 | CatWalk | `hold_controls_unverified` | The parent test did not establish a visible response to actual game controls. |
| 14 | Rose & Blade | `hold_pointer_input_unverified` | Pointer-lock/input behavior did not produce a verified player response. |
| 15 | ODYSSEUS: LOST WORLDS | `hold_navigation_unverified` | The test did not reach a verified playable game state after navigation. |
| 18 | Tumble | `hold_objective_unverified` | The experience appeared to be an open sandbox; a concrete game objective was not established. |
| 21 | CELESTE: Faction HQ | `hold_ai_authorship_and_game_identity` | The source describes an AI-built hub for a card game, but does not establish that the linked hub itself is the AI-built game. |
| 22 | Captain Barbarossa | `hold_login_gate` | A login gate prevented a safe direct gameplay test. |
| 25 | INKBOUND | `hold_controls_unverified` | The parent test did not establish a visible response to actual game controls. |

## Validation

Repository checks are recorded in the separate local release-preparation receipt. This report is a preparation record and makes no claim about GitHub or production status. The local campaign source/gameplay/art evidence is outside this repository; `manifest.json` contains the public evidence needed for release review.
