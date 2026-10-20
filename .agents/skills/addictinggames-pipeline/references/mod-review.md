# Mod release and artifact review

Read for mod discovery, artifact review or mod publication within [addictinggames-pipeline](../SKILL.md). The main skill owns scope, authorization, discovery duration, Scout lifecycle, worker scheduling, Grok adjudication, the shared ledger and completion. This reference adds mod-specific requirements; it is not a separate skill or campaign. A closed-list request does not launch Scout.

## Mod scope and discovery

Any base game/platform is in scope. Prioritize free mods; record exact price evidence and flag paid/uncertain pricing. A potential is not an accepted mod. Retrieve official source and exact release artifacts for an authorized security review without executing them. Do not install/run mods, launch installers, execute repository scripts, contact creators or submit production forms unless separately authorized.

When discovery is authorized, include mod-specific evidence requests in the same AI Game Scout brief and incremental queue as games. Never launch a separate mod clock or duplicate supervisor.

Find an actual mod/add-on for a named original game with actual publicly released files. An official listing without obtainable release files is a lead, not proof of release. A standalone remake, clone, concept-only announcement, or generic mod-writing tool is not a released mod. Search X announcements, creator replies and linked official listings. Deduplicate by base game, mod identity, creator and canonical listing across current records.

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

For each hit, identify the exact mod the creator says was made or assisted with AI; verify the named base game, actual released mod files and official listing, current version, and official destination. AI assistance in code, gameplay, art, audio, writing, or other creation qualifies when explicitly tied to this mod. AI-powered NPC behavior inside a mod is not by itself evidence that AI helped create the mod. Do not count a repost, vague hashtag, generic tool, modpack, concept, or duplicate as a unique mod. Keep unclear attribution or absent releases as leads with the source link and precise missing evidence.

Require a specific creator or official-listing statement that AI created or assisted in creating this exact mod. Do not impose a code-only or named-model requirement. AI assistance must concern the mod itself; an AI-written promotional description alone does not qualify. Franchise/likeness/license warnings are not automatic denials for linking; do not redistribute files. Record the exact wording, source, and the part of creation it describes; do not upgrade a vague AI hashtag or unrelated creator project into a mod-specific claim. An inaccessible X post can be corroborated by its exact official listing or a retrievable public post representation, with the retrieval limitation recorded.

For each potential, record:
- ID, mod name, original game, creator identity and official X profile, exact announcement and listing URLs, observation UTC, dedup result.
- AI-build attribution excerpt/source/type; changes relative to the original game.
- Free/paid evidence, platform, supported original-game version, requirements and official installation instructions.
- Actual gameplay image/media URL and source, with missing images explicit; no generated image as gameplay proof.
- Source-linked community responses with author/date and short excerpts or faithful summaries. Distinguish enthusiasm from independent reports of successful use; retain crashes, malware reports, incompatibilities and other material complaints.
- Official source repository, exact revision and release/version, exact distributed artifact URL/version, locally computed SHA-256, publisher checksum when available, and security-review status. Missing publisher checksums alone do not deny a mod: record the digest of the exact retrieved bytes and its provenance.

For an authorized discovery campaign, Scout reports incrementally and stops at the shared discovery deadline. Ingest all discovered leads into the shared ledger; do not strand final-wave mods as overflow. Resolve missing fields actively and preserve exact source references. No hands-on mod installation/playtest is required or authorized by the pipeline. Record creator demonstrations and independent use reports separately; absence of positive user reports does not block publication. No public release means 0 only after the official release locations have actually been checked; inaccessible tools trigger recovery, not that conclusion.

Use the main skill's mod-review worker assignments and available capacity. Mod workers retrieve official listings, source and artifacts without taking gameplay tabs or editing the catalog. Source-only review does not count as artifact assessment. All worker reports feed the same ledger and adjudicator; batch sizes count eligible games and mods together.

## Codex Security review

Use the installed Codex Security standard-scan workflow for relevant source plus an adequate assessment of the exact intended release artifact, offline after retrieval. Source scanning is not artifact assessment. Pin the bytes, version and SHA-256 before review; a changed artifact requires new assessment. Record the reviewer, review budget, evidence, covered files, relevant runtime risks and limits. When coverage is incomplete, make one targeted follow-up; a review-tool outage remains pending, while an obtained opaque artifact that cannot be adequately assessed may receive a justified coverage denial. Preserve repository commit, release artifact identity and digest, reviewed paths, coverage, findings and the generated report. Check source-to-release identity when possible; if it cannot be established, state the precise coverage limit in the detail page. Never execute downloaded mod/build/install scripts to review them.

Review relevant code for credential/file access, unexpected network destinations, command/process execution, persistence, package/install hooks, bundled executables and dependency risks. Findings need source evidence; absence of findings is not certification. Source-code review does not establish that a release binary matches that source. If only a binary or closed-source archive exists, record the limitation and request an appropriate artifact assessment before adjudication. Do not call a mod/file "secure", "safe" or "malware-free" from popularity, host reputation or a source scan alone.

Track AI qualification, official release availability, working-use reports, security coverage, known operational risks, and public listing as separate decisions. A mod qualifies for publication when it has mod-specific AI creation evidence, an actual public release with exact artifact identity/hash, and an adequate Codex Security review of the intended release. Lack of an independent positive comment is a documented limit, not a hold. Triage findings for severity and relevance rather than treating any finding as an automatic rejection; block a release when a material security issue or unassessed opaque artifact prevents an adequate review. No scan certifies a file malware-free. If source-to-release identity or runtime behavior remains unverified, state that limit accurately. A known compatibility, save-data, or other operational risk must appear prominently in the mod's **detail view** with its trigger and potential effect; do not bury it in an internal report or imply installation is risk-free. Research-only records stay internal; they cannot enter the public Mods catalog through a weaker listing classification. A public detail-page warning does not waive inadequate artifact coverage or a material blocking finding.

## HTML preview and Mods catalog

Preserve the existing Games/Mods navigation, geometry, search, original-game filter and document scrolling. Routine pipeline work adds approved catalog entries and detail evidence; it does not recreate navigation or redesign the site. Use the existing Mods data and routes.
Clicking an entry opens its own detail view: what changed, original game, official creator X account/post, actual comments, gameplay image, platform/version/requirements, installation instructions and official mod page. Show every material warning on that detail view, including known save/data loss, compatibility, release-artifact/source mismatch, security coverage limits, and lack of hands-on verification when relevant. Make pricing prominent: show Free only with supporting evidence; otherwise show Paid or Price not confirmed. Link out to the creator's listing; do not mirror or execute mod downloads. Keep internal artwork/provenance labels off ordinary public cards. Preserve the site sandbox/security controls and owner-approved game artwork.

Store local preview/run evidence separately from website source. Keep raw evidence and checkpoints resumable; public release evidence must exclude credentials and private bot conversations. For an authorized release, use the existing GitHub/main/Vercel integration and repository-required checks, then verify source, CI, deployment identity, live navigation, list ordering, details, destinations, image loading and responsive layout. An HTML preview is not a production deployment.
