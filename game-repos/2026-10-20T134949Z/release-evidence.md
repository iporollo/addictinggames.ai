# AI Game Scout release evidence — 2026-10-20

Run: `2026-10-20T134949Z`

## Outcome

- Scout stopped at the configured acceptance cap with 25 candidates: 22 browser games and 3 mods. It reported 59 held candidates, 7 duplicate rejections, and no overflow candidates.
- All 22 browser games passed game-specific AI-authorship review, direct guest access, and a bounded meaningful-input check with an observable game-state response.
- All 3 mods are held. Their exact public artifacts were hash-checked, but none cleared the full independent-working and static-security requirements. No mod artifact was executed.
- The 21 items supplied from the `AI-Games` bookmark folder were added to the Scout request. None became a new accepted item: five mapped to existing catalog identities and the rest lacked a qualifying released browser game/mod, game-specific creator AI evidence, or the required mod evidence.
- Final catalog duplicate check: 441 direct games have unique normalized slugs, titles, and destinations. Each of the 22 slugs in this batch occurs exactly once.

## Browser games

| ID | Game and playable destination | Creator AI-authorship evidence | Gameplay acceptance |
| --- | --- | --- | --- |
| G-01 | [Wind Path](https://lowkyfooldev.github.io/wind-path/) | [“Built with Claude Code + Unity + Blender.”](https://x.com/Cognitive_Forge/status/2111393049767247923) | Began the Unity game and moved the avatar forward along the shrine path. |
| G-02 | [Kestrel Nights](https://hasib-kestrel-nights.netlify.app/) | [“Meet KESTREL NIGHTS. Built with Claude”](https://x.com/hasibdreamer35/status/2110421049544491500) | Took flight; movement changed the live stance, energy, and distance HUD. |
| G-03 | [Frost Train](https://frosttrain.freesoul.games/) | [“a browser survival game I built with Claude Opus 5.5.”](https://x.com/Alex_Vainshtein/status/2111189651474239733) | Started a new run and deployed the mech into the live train-survival HUD. |
| G-04 | [Idle Cheeky Cat](https://idlecatgunner.com/) | [“A GPT Astra vibe-coded cat shooter, made with care.”](https://x.com/catsickcat/status/2112241484531376156) | Fired at targets; object count, wreck score, and weapon progression changed. |
| G-05 | [WINDOW SEAT](https://roadrunnerplayground.vercel.app/) | [“Actually vibe coded with Gemini Argo … as a playable version”](https://x.com/onlynavv10/status/2110423761967276312) | Clicked during a run; the runner visibly jumped and flipped. |
| G-06 | [ROAD★STAR](https://blitastxyz.itch.io/road-star) | [“I built this over one weekend with Claude Code (Opus 5.5)…Claude wrote the code”](https://x.com/blitast_studio/status/2111774576921530415) | Started a run and used thrust; the game advanced to a responsive crash outcome. |
| G-07 | [Backyard Rascals](https://backyard-rascals.vercel.app/) | [“I built a fully MULTIPLAYER capture-the-flag 3D game…using Cursor.”](https://x.com/chongdashu/status/2110367201786314935) | Entered 3v3 warm-up as a guest, moved, and jumped with a live avatar and HUD. |
| G-08 | [The Empty Throne](https://muselabs.co/empty-throne) | [“Claudeがコード、Codexが絵”](https://x.com/muselabs_co/status/2112004897277460580) | Selected Warrior, entered Dewmorrow Forest, and moved into NPC interaction range. |
| G-09 | [Dead Tide — Last Ferry](https://dead-tide-last-ferry-02.deepokapi32.chatgpt.site/) | [“Model: Chatgpt 6.1 Sol Play it here”](https://x.com/thecuongpham/status/2112102538283811279) | Fired at an infected; infected-down, ammunition, and health state changed. |
| G-10 | [NEON VEIL](https://unityroom.com/games/neon-veil) | [“Codex勉強がてらやってみた。…企画からAIです。”](https://x.com/nkc_matsu0223/status/2111098271481663907) | Entered the stealth grid and moved the player marker right. |
| G-11 | [Cog & Ember](https://mocchi111.itch.io/cog-and-ember) | [“コードは一行も書かず、スマホからGrok Botに日本語で頼んだだけ。”](https://x.com/Mochi_AGI/status/2110227674635616588) | Advanced into the village and moved the protagonist toward the clock-house. |
| G-12 | [REBOUND — Pocket Pinball](https://gatuwo.itch.io/rebound-pocket-pinball) | [“Codexでピンボール風ゲームを作ってみました。”](https://x.com/gatuwo_jp/status/2111474426672034262) | Played a second ball; the paddle responded and score advanced to 105. |
| G-13 | [四倉の海](https://matsumatsu0506.itch.io/yotsukura-no-umi) | [“Claude CodeがGodotで作ったゲーム「四倉の海」”](https://x.com/tonari_issho/status/2112458821608284471) | Entered the 3D beach and moved the player capsule toward the lighthouse. |
| G-14 | [綴りの洞窟](https://lifehackerschannel.site/games/typing-rpg/latest/) | [“タイピングRPGを、ChatGPTと作りました！”](https://x.com/chocononno/status/2111792533361865074) | Pressed Enter in the game and advanced the opening dialogue. |
| G-15 | [Extermination Tower Defense](https://c05inecreations.dearcarp13.chatgpt.site/games/extermination/) | [“Insane that I just made a game using chatgpt...”](https://x.com/C05INE/status/2110920735250354671) | Deployed a Fly Swatter; Chitin fell from 200 to 80 and the tower appeared. |
| G-16 | [ドキドキリプライ](https://konoharu-c-asobo.site/dokidoki-reply/) | [“Claude Codeで作りました。ワイはコードを書いてません。”](https://x.com/kosansansun/status/2112488790132670523) | Chose a Stage 1 reply; the chat advanced and mood rose from 50 to 60. |
| G-17 | [鼓楼 Gulou](https://wang-jiahao.github.io/gulou/) | [“Built in just 11 days with GPT-6 Astra.”](https://x.com/wjh929/status/2110591102403412343) | Entered the rendered campus and switched the HUD into driving mode. |
| G-18 | [Ricochet](https://ricochet-wasg.onrender.com/) | [“Over 20 hours of work, even with Claude Code.”](https://x.com/TheAIHero/status/2112538605923324350) | Started a bot match, moved, and fired in the live best-of-five arena. |
| G-19 | [무경 — 야간 근무](https://webgame-personal.vercel.app/) | [“Claudeを使ってブラウザゲームを作ってみました！”](https://x.com/nanariiinn__/status/2112379024282620262) | Used a local-only Guest name and advanced the messenger story. |
| G-20 | [CORTEX Pinball](https://cortexpinball.grok.me/) | [“I built this with Grok — try it out” in the game-specific post](https://x.com/CryoLife2032/status/2112211945093009748) | Charged and released a ball; score reached 140 and sparks fell from 3 to 2. |
| G-21 | [1v1 Deathmatch](https://zrnge.com/1vs1/) | [“opus 5.5 Made a browser 1v1 shooter: no install, no server”](https://x.com/zrng0/status/2111005886600654965) | Set volume to 0% and entered the rendered bot-practice arena. |
| G-22 | [Ninfa Europea](https://ninfaeuropea.com/) | [“Seguimos mejorando nuestro juego de pesca con mosca con ayuda de Opus y Three.js”](https://x.com/carminefernando/status/2110695097297989955) | Entered as a guest, muted sound, and cast; the tutorial advanced to the upstream drift. |

All gameplay checks were direct creator-destination checks. They do not claim AddictingGames restricted-iframe compatibility unless separately stated.

## Artwork

- Creator-supplied artwork retained: G-03, G-04, G-06, G-07, G-10, G-12, G-14, G-15, G-16, G-18, G-19, G-20, G-22.
- Selected generated A/B cover: G-01 A, G-02 A, G-05 B, G-08 A, G-09 A, G-11 A, G-13 A, G-17 A, G-21 A.
- Every published cover was visually reviewed and normalized to 1200×845 WebP. No public card contains an AI/provenance status label.

## Hot Right Now

The selection uses `sqrt(views × total interactions)` from the terminal Scout metrics snapshot observed between 13:59 and 14:17 UTC:

1. Backyard Rascals — 4,744.38
2. NEON VEIL — 209.94
3. Kestrel Nights — 104.90
4. ドキドキリプライ — 88.52
5. REBOUND — Pocket Pinball — 79.25

## Held mods

| Candidate | Verified artifact | Hold reason |
| --- | --- | --- |
| Vertical Cut v1.0.1 | SHA-256 `0c9d4060b498e463f5d78f55662173a2cbad453d10b8e290538064b5f2c8e0d6`; tag commit `f27c57bc8ca06966542e6371991ebc729254a68e` | No independent working report or live client/server reproduction; bounded static review is not security clearance. |
| Duskbound v1.0.2 | SHA-256 `19f01c6e0c88bdbd72341422d532fde6f10c2bddf775c473338acde4af3b7827`; tag commit `0784735ecbedf20ac8aff58ba2ac1941b458e3d6` | No screenshots or independent working report; tagged repository exposes no reviewable source beyond README; partial static review cannot clear the JAR. |
| Alan’s Modpack v1.4.0 | SHA-256 `eec7c31349a72bb457098a17d5d4b96799446bc4752358fbeb0e69557b7017c6`; tag commit `e6bb8f9c60f3f044571f7056753f1888c6771423` | No gameplay screenshots or independent working report; “claude vibe coding” is not sufficiently explicit game-specific AI-authorship evidence. Static review also found a medium/high-confidence CWE-862 private-channel warehouse authorization gap, so the artifact is not security-cleared. |
