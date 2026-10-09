# AI Game Scout: eighth publication batch

Checked October 9, 2026 in a real browser and in a cross-origin iframe with `sandbox="allow-scripts allow-pointer-lock"` and `referrerpolicy="no-referrer"`. Each game below started and responded to input in that restricted frame. No upstream repository was downloaded or executed. These entries link to external playable pages; the website does not host their source code.

| Game | Playable URL | In-game proof | Source post |
| --- | --- | --- | --- |
| Señor Inteligente | https://inteligente.lol/ | Started the side-scrolling game and used Lasso; the score rose from 0 to 100 and sign count from 0/8 to 1/8. | https://x.com/wirelyss/status/2108258757201527289 |
| Snowboard Supreme | https://snowboard-supreme.vercel.app/ | Started Endless Descent, used Space and held A to carve. Speed rose from 32 to 84 km/h, distance reached 249 m, and score rose to 664. | https://x.com/kidkenney/status/2106452611415097460 |
| Trip_Ibadan | https://trip-ibadan.vercel.app/ | Selected Toyota Sienna and Ojota to Berger, boarded six passengers, departed, and held W; speed rose from 0 to 13 km/h while the road moved. | https://x.com/drix_man/status/2105907796738712036 |
| Project Nova | https://project-nova-v0001.grok.me/ | Started the lane runner and held A to move the ship from center to left while automatic fire advanced score to 2,100 and wave to 2. | https://x.com/TheExaltedOne/status/2106344331426648450 |
| Dili Cart | https://dili-cart.pages.dev/ | Played as a guest, entered Dili Circuit, held Up to accelerate, advanced from 8th to 6th, and scored 150. | https://x.com/00xmado/status/2103621728719319320 |

Señor Inteligente is a satire containing anti-AI signs and an AI logo. Trip_Ibadan displays real car and delivery brands. Dili Cart offers optional account creation, but guest racing worked without an account. No matching upstream GitHub repository was confirmed for these five, so no `game-repos` metadata folder was added. Their external hosts can change after this check.

The five games are added to New Games and the alphabetical All Games index. They are excluded from Featured and home category collections.

## Screening findings

- Dlicom Dojo started and ran, but repeated left and right punch input did not raise its score before game over, so gameplay was not confirmed.
- Phaser Coin's page loaded in the restricted iframe, but its game area stayed on “Loading the coin drop.”
- Harbor Chef and Mothlight displayed Playgama wrappers with blank nested game frames in the restricted iframe. Direct portal pages are unsuitable for this site unless they later pass the same test.
- Galaxy Glider needed a service worker in the restricted iframe; Dustlight refused the iframe. Both were held from the previous discovery run.

Grok Bot supplied the X source links and AI creation descriptions. X returned a 403 response to this session, so those posts were not independently read here. The play checks above are direct browser observations.
