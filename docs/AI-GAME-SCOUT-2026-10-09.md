# AI Game Scout: first publication batch

Checked October 9, 2026, in a real browser and in a cross-origin iframe with `sandbox="allow-scripts allow-pointer-lock"` and `referrerpolicy="no-referrer"`. All five URLs returned HTTP 200 without redirecting to another origin. The games started, showed live play, and responded to the listed input. No login, download, or browser permission prompt appeared during these checks.

| Game | Playable URL | In-game proof | Source post | Upstream metadata |
| --- | --- | --- | --- | --- |
| Soccar | https://soccar-one.vercel.app/ | Entered a match through Play and Start Match; the timer ran and the camera control responded. | https://x.com/BlendiByl/status/2104800823620632641 | None confirmed |
| Salmon Survival | https://salmon-survival.vercel.app/ | Started swimming and toggled the map with `M`; the HUD changed. | https://x.com/yearemias/status/2103151040774435315 | `game-repos/salmon-survival/` |
| Flap NYC | https://flapnyc.kumodeck.app/ | Clicked Play, tapped to flap, and saw the bird rise and Brooklyn Bridge stage begin. | https://x.com/sara_kumodeck/status/2108367760984338575 | None confirmed |
| Hungry Seal | https://hungry-seal.horly.dev/ | Started with Return, held Right, and watched the coin count rise and the area change. | https://x.com/horlesq/status/2104461965133324628 | `game-repos/hungry-seal/` |
| Neon Nightfall | https://mdhasibul35.github.io/neon-nightfall/ | Started wave 1, paused and resumed with Escape, then moved with `W`; the scene changed. | https://x.com/hasibdreamer35/status/2106031575859351576 | `game-repos/neon-nightfall/` |

The live site build renders exactly these five in the New Games home section. They remain discoverable in All Games and through search, but are absent from Featured and the home category collections. The local production build, lint, type check, existing form tests, and a real browser check of the site route passed. Production dependency audit reported zero known vulnerabilities; five high-severity advisories in existing development-only lint dependencies remain outside this change.

## Held and rejected finds

- Scrapyard played on its own page, but its host sends `X-Frame-Options: DENY`; it cannot use this site's player.
- The Last Fruit: Cupocalypse and TOUCH GRASS played in an iframe only when scripts and same-origin access were allowed together. They stay out of this batch because the five published games work under the stricter sandbox.
- HEATSINK and Honeycomb Turn Battle have playable links in the discovery inbox but have not completed browser verification.

Grok Bot supplied the X source links. X itself returned a 403 response to this session, so those post descriptions are attributed to Grok Bot and were not independently read here. The playable pages and three matched GitHub repositories were checked directly. External game hosts may change after publication; repeat the interaction check when monitoring reports a failure.
