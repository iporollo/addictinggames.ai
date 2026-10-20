# On-site game campaign — batch 7

VOID, Downhill Dreamer, Timberbound, Mastermind, and Nine Holes have game-specific AI creation evidence and direct guest plus restricted-iframe input/response receipts. Exact commits, player URLs, actions, responses and creator screenshot sources are in [batch7.json](batch7.json); detailed gameplay is in the local `wave8-d-source.json` report. Mastermind’s current file retains all 42 named functions identified in the AI-attributed original and its author metadata; the other candidates have game-specific Claude-authored creation or substantial update commits.

The site frames the creator’s independent `gptgames.dev` game pages with `sandbox="allow-scripts allow-pointer-lock"` and `referrerPolicy="no-referrer"`. No Crayon destination, link, game source or executable file is imported. Covers are unaltered 260px square WebP creator screenshots.

All five slugs and destinations were absent from current main `393b8d765aa355c4654a7d1fae117e71fe181e3c` and the production routes returned 404 before release. Nine Holes was checked from its unseeded base URL in the restricted player. No Tesla Roadster title or human multiplayer mode is in this batch. Interactive Buddy remains pending: independent Grok review found that its saved iframe screenshot did not show an unambiguous hit response. It requires a focused retest before a later release. Independent final review, local checks, CI, deployment and live verification are separate release gates.

Independent Grok 4.7 High first-pass review cleared these five; final review approved all five at evidence revision 2 with no missing work or contradictions. Node 22 lint, 44 tests, build, and typecheck passed. The generated routes contain the exact creator URLs, restricted sandbox, no-referrer, and no Crayon text. CI, merged source, deployment, and live checks remain separate receipts.

Current-main preflight was refreshed after an unrelated mods release merged; the five game slugs and URLs remained absent, and their live routes were still 404.
