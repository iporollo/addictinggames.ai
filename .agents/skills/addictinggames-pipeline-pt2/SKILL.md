---
name: addictinggames-pipeline-pt2
description: Research AI-assisted game mods through AI Game Scout on X, verify creator and community evidence, review available mod source with Codex Security, and prepare the AddictingGames.ai Mods catalog or a local HTML preview. Repository-specific; use Part 1 for standalone browser games.
---

# AddictingGames Pipeline Part 2: Mods

Use only for AddictingGames.ai, canonical repository `iporollo/addictinggames.ai`. Read the current repository `AGENTS.md` and owner decisions. Verify the checkout remote, current main and local changes before editing website source. Part 1 remains responsible for standalone browser games; this pipeline curates modifications of an existing game.

## Scope and authorization

Any base game/platform is in scope. Prioritize free mods; retain an exact source for price and flag paid/uncertain pricing rather than describing it as free. Default pilot: 10 unique potentials or 60 minutes, whichever first. Owner-specified quotas/time limits override defaults. A potential is not an accepted mod; do not fill the quota with invented or unrelated projects.

A discovery/preview request authorizes research and local review artifacts only. Do not commit, push, open/merge a PR, deploy, or publish unless the owner explicitly requests a release. Discussing or editing this skill does not start discovery. Download source for an authorized security review without executing it; do not install/run mods, launch installers, execute repository scripts, contact creators, or submit production forms unless separately authorized.

## Scout discovery

Use the existing Grok Bot conversation **AI Game Scout**. Before launching, reconcile its current status, project chats, and run records. Do not take over another supervisor's active discovery. Send a bounded mod-specific brief and verify an explicit START acknowledgement. Record the absolute UTC deadline from that start once; never restart the clock on resume. Parent supervises quota/deadline and reconciles stop acknowledgement before closing the run. No unrequested recurring routine.

Find an actual mod/add-on for a named original game with released files or an official listing. A standalone remake, clone, concept-only announcement, or generic mod-writing tool is not a released mod. Search X announcements, creator replies and linked official listings. Deduplicate by base game, mod identity, creator and canonical listing across current records.

Use these 14 distinct X keyword searches as a rotating starting set. They pair mod terms with AI coding language and release destinations without demanding an exact sentence, since creators describe their work differently. Search creator posts and replies, then follow their links to the official listing. Check the official listing description and release metadata for AI attribution even when X cannot be fetched; Steam's official published-file-details API can supply the creator description and exact item identity. Vary the named base game and AI tool within each search when results are sparse; keep the 14 intents distinct. A search hit is only a lead, never AI-authorship or working-mod proof.

1. `mod "Claude Code" release`
2. `mod Codex download`
3. `mod ChatGPT GitHub`
4. `mod Gemini coded`
5. `mod "vibe coded" released`
6. `mod "AI assisted" source`
7. `mod "AI wrote" code`
8. `game addon "Claude Code"`
9. `Minecraft plugin Codex release`
10. `Minecraft datapack Claude release`
11. `Modrinth Claude mod`
12. `"Nexus Mods" "AI assisted"`
13. `Thunderstore "vibe coded"`
14. `"Steam Workshop" ChatGPT mod`

For each hit, identify the exact mod the creator says was made or assisted with AI; verify the named base game, released mod files or official listing, current version, and official destination. AI assistance in code, gameplay, art, audio, writing, or other creation qualifies when explicitly tied to this mod. AI-powered NPC behavior inside a mod is not by itself evidence that AI helped create the mod. Do not count a repost, vague hashtag, generic tool, modpack, concept, or duplicate as a unique mod. Keep unclear attribution or absent releases as leads with the source link and precise missing evidence.

Require a specific creator or official-listing statement that AI created or assisted in creating this exact mod. Do not impose a code-only requirement. Record the exact wording, source, and the part of creation it describes; do not upgrade a vague AI hashtag or unrelated creator project into a mod-specific claim. An inaccessible X post can be corroborated by its exact official listing or a retrievable public post representation, with the retrieval limitation recorded.

For each potential, record:
- ID, mod name, original game, creator identity and official X profile, exact announcement and listing URLs, observation UTC, dedup result.
- AI-build attribution excerpt/source/type; changes relative to the original game.
- Free/paid evidence, platform, supported original-game version, requirements and official installation instructions.
- Actual gameplay image/media URL and source, with missing images explicit; no generated image as gameplay proof.
- Source-linked community responses with author/date and short excerpts or faithful summaries. Distinguish enthusiasm from independent reports of successful use; retain crashes, malware reports, incompatibilities and other material complaints.
- Official source repository, exact revision and release/version, distributed artifact URL/checksum if available, and security-review status.

Scout reports incrementally and stops at the owner-specified boundary; when the owner requests a full-duration search, keep searching through the deadline even after the target count is reached and retain overflow separately. Missing fields remain missing. Do not invent comments, metrics, accounts, post URLs or images. Preserve an ordered potential queue and per-candidate accepted/held/excluded/duplicate dispositions with reasons. No gameplay testing is required by the owner: verify availability and working-mod evidence through official releases/demonstrations and community reports, while stating that there was no hands-on playtest. A creator's demo and independent confirmation are separate evidence.

## Codex Security review

Use the installed Codex Security standard-scan workflow against the exact available mod source, offline after retrieval. Preserve repository commit, release artifact identity and digest, reviewed paths, coverage, findings and the generated report. Never execute downloaded mod/build/install scripts to review them.

Review relevant code for credential/file access, unexpected network destinations, command/process execution, persistence, package/install hooks, bundled executables and dependency risks. Findings need source evidence; absence of findings is not certification. Source-code review does not establish that a release binary matches that source. If only a binary or closed-source archive exists, record the limitation and hold security acceptance until an appropriate artifact assessment is possible. Do not call a mod/file "secure", "safe" or "malware-free" from popularity, host reputation or a source scan alone.

Track AI qualification, official release availability, working-use reports, security coverage, and public listing as separate decisions. Lack of an independent positive comment is a documented limit, not a reason to relabel a released AI-assisted mod as non-AI. A safety-reviewed listing still requires an assessment relevant to the intended release file; no scan can certify a file malware-free. If only a binary or closed-source archive is available, record that exact limitation and do not claim Codex Security cleared it. The owner may explicitly select a research catalog for publication with factual security limits shown on each detail page; that is distinct from a safety-reviewed listing and never authorizes installing the mod.

## HTML preview and Mods catalog

Match the current live front page's branding, covers and geometry. Add Games/Mods navigation near the middle of the header with a blue underline on the active section. The Mods landing page has only New Mods: square thumbnail cards, mod title, then original game name. Do not add Featured, Browse Mods or a second navigation bar. Populate the grid with the whole batch, newest announcement first. Keep creator handles, price/license, platform and descriptions inside details. Preserve Games/Mods header navigation, with a blue active underline. Include search, an alphabetical original-game dropdown, a View All Mods link inside New Mods, and a sidebar with Stay Updated plus View All Mods / Submit a Mod quick links. View All Mods uses wider rows ordered alphabetically. All scrolling is on the document; never add an independently scrolling list or detail box.

Clicking an entry opens its own detail view: what changed, original game, official creator X account/post, actual comments, gameplay image, platform/version/requirements, installation instructions and official mod page. Make pricing prominent: show Free only with supporting evidence; otherwise show Paid or Price not confirmed. Link out to the creator's listing; do not mirror or execute mod downloads. Keep internal artwork/provenance labels off ordinary public cards. Preserve the site sandbox/security controls and owner-approved game artwork.

Store local preview/run evidence separately from website source. Keep raw evidence and checkpoints resumable; public release evidence must exclude credentials and private bot conversations. For an explicitly authorized future release, use the existing GitHub/main/Vercel integration and repository-required checks, then verify source, CI, deployment identity, live navigation, list ordering, details, destinations, image loading and responsive layout. An HTML preview is not a production deployment.
