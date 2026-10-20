# On-site game campaign — batch 6

Alphabet Typing Speed, Peel & Seek, Death by AI, Under the Lamp, Tumbler, Pong, Simon Says, Boogie Woogie, Margins, and Departures have game-specific AI creation evidence. Peel & Seek and Under the Lamp have creator statements for their original AI creation; the remaining games have substantive Claude-assisted remakes of their current versions. Exact commits, guest actions, and restricted-player responses are recorded in [batch6.json](batch6.json) and the local `wave6-c.json` and `wave6-e.json` gameplay reports.

The site frames the creator's game pages at `gptgames.dev` with `sandbox="allow-scripts allow-pointer-lock"` and `referrerPolicy="no-referrer"`. No Crayon destination, link, game source, or executable file is imported. The covers are unaltered 260px square WebP screenshots from the creator's `data/games.json`; exact source URLs are in `batch6.json`. Living RPS was removed from this release after independent review found that a later 3D replacement had superseded the cited AI-assisted version; current-version AI evidence remains unresolved.

For Tumbler, the restricted iframe advanced from its menu to the active safe puzzle after a submitted guess, with nudge controls and a changed canvas. The test did not separately isolate a specific high or low hint. This distinction is retained for independent review.

All ten slugs and exact destinations were absent from current main `08be446969df1ee6dc7d0b7d23473416f8fefb34`; their public routes returned 404 before release. No Tesla Roadster title or human multiplayer mode is in this batch. Independent Grok 4.7 High first-pass reviews found no missing work for these ten and final review approved all ten at evidence revision 2. Local Node 22 lint, 44 tests, build, and typecheck passed; generated routes include exact creator URLs, the restricted sandbox, no-referrer, and no Crayon text. CI, merged source, production deployment, and live checks are recorded separately.

This batch is part of the owner-directed 100-game target, not campaign completion.
