# AI Game Scout: seventh publication batch

Checked October 9, 2026 in a real browser and in a cross-origin iframe with `sandbox="allow-scripts allow-pointer-lock"` and `referrerpolicy="no-referrer"`. Each game below started and responded to input in that restricted frame. No login, download, or browser permission prompt was required. The site links to external game hosts; no upstream game source was downloaded or executed.

| Game | Playable URL | In-game proof | Source post |
| --- | --- | --- | --- |
| Nushi Fishing | https://nushizuri02.netlify.app/ | Started in English, cast a line, saw the rain counter fall from 3 to 2, watched the float move, and reached the “It got away” retry prompt. | https://x.com/takaakiftw/status/2104114871063425147 |
| Time Echo | https://time-echo-play.vercel.app/ | Entered the 3D room, moved toward the door with W, clicked the wall symbol, and advanced from cycle 01 to 02 while memories rose from 0/1 to 1/1. | https://x.com/MaxSM117/status/2102758961623580838 |
| Church Life | https://churchlife.netlify.app/ | Created a character, advanced a branching conversation with Mum, entered Saturday Week 1 on Grace Avenue, and opened the Home rest choices. | https://x.com/LesediChingwena/status/2108315328065265854 |
| Ripple Pool | https://ripplepool.app/ | Focused the playable pool and launched a purple drop with Space; the next drop turned blue and the game reported one merge. | https://x.com/michaelirizarry/status/2107950053323378957 |
| Proposed Frontiers (reported as Sykes-Picot) | https://sykespicot.io/ | Began the historical map game, painted seven hexes, assigned them to Turkey, and saw the unpainted count fall from 763 to 756 with Turkey added to the ledger. | https://x.com/Ned_Donovan/status/2106117192555065719 |

Church Life was tested through character creation and its story and rest controls. Nushi Fishing has an optional face upload feature; it was not used, and the catalog does not grant camera access. Ripple Pool's optional mobile app and purchase descriptions are outside the embedded demo. No matching GitHub repository was confirmed for these five games, so no upstream metadata folder was added.

The five games are added to New Games and the alphabetical All Games index. They are excluded from Featured and home category collections.

## Screening findings

- Rajyam loaded and entered Level 1 with animated enemies, but multiple fire gestures did not change launcher ammo or score in the restricted iframe. Its gameplay remains unverified, so it was held.
- Señor Inteligente started and responded to Lasso, increasing its score from 0 to 100 and SI count from 0/8 to 1/8. It remains in the verified queue for a later batch; its Share Score link was not opened.
- ONE BEAM required sign-in on `/play`. Its demo rendered in the iframe but did not respond to the Click to Play overlay or movement input.
- Closing Time, Tower & Rock, and several other candidates refused the restricted iframe. Starclash and Tiny Island rendered but failed their frame-dependent game initialization. SWARM displayed deceptive permission-like UI after a missed bot, and Austar Bond used another author's fictional setting; those two were rejected.

Grok Bot supplied the X source links. X returned a 403 response to this session, so post descriptions are attributed to Grok Bot and were not independently read here. Its Netlify and dedicated-domain searches found playable games; several `grok.me` games need extra screening for service-worker and permission-like UI. External game hosts may change after publication; repeat interaction checks when monitoring reports a failure.
