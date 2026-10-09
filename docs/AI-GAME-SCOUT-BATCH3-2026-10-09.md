# AI Game Scout: third publication batch

Checked October 9, 2026, in a real browser and in a cross-origin iframe with `sandbox="allow-scripts allow-pointer-lock"` and `referrerpolicy="no-referrer"`. Each game below started and responded to input in that restricted frame. No login, download, or browser permission prompt was needed. The site links to external game hosts; no game code is copied into this repository.

| Game | Playable URL | In-game proof | Source post | Upstream metadata |
| --- | --- | --- | --- | --- |
| DIRTLINE | https://dirtline.pages.dev/?v=2 | Clicked Ride and held `W`; speed rose from 0 to 44 km/h and the bike crossed the track. | https://x.com/AlexStLouis10/status/2107615338829599160 | None confirmed |
| 3rd Mainland Biker | https://3rdmainland.start.ng/ | Entered synthetic name `ScoutTest`, started a ride, and held Up; distance and speed advanced. | https://x.com/markessien/status/2108179663193587995 | None confirmed |
| Ink Dash | https://rajpurohitkushal92.github.io/khnix-game-12/ | Clicked Start and held `D`; the player moved across level 1 and the score rose from 0 to 26. | https://x.com/iamkushalFx/status/2107497318346051902 | `game-repos/ink-dash/` |
| Quiet Rooms | https://53616d616e746861.github.io/quiet-rooms/ | Entered the Sky Room and held `W`; the room geometry and central figure drew closer. | https://x.com/slimer48484/status/2101202536673706246 | `game-repos/quiet-rooms/` |
| Kindlekeep TD | https://kindlekeep.vercel.app/ | Opened Campaign and Hearthwood Vale, started wave 1, and watched enemies cross the map, health fall, and wave 2 begin. | https://x.com/k1zcodes/status/2108217657174737286 | None confirmed |

3rd Mainland Biker explicitly asks for a display name before play and shows a high-score panel. The test used a synthetic name and no personal data. Players should understand that names and scores may be handled by the external game host; this website does not collect them. The new games appear in New Games and in the alphabetical All Games index, and are excluded from Featured and home category collections.

## Screening findings

- Dili Delivery's title screen rendered, but Start Delivery and Enter did not start play in the restricted frame. Its service worker access raised a sandbox `SecurityError`.
- Dragon Forge's control panel rendered, but the canvas stayed blank and Fold had no effect. Its local storage access raised a sandbox `SecurityError`.
- Planet Defender's standalone start screen rendered, but the restricted iframe showed only unstyled HUD text on a black background, without its canvas or start control.

Grok Bot supplied the X source links. X itself returned a 403 response to this session, so post descriptions are attributed to Grok Bot and were not independently read here. Matched GitHub Pages origins were confirmed through the GitHub Pages API. External hosts may change after publication; repeat the interaction check when monitoring reports a failure.
