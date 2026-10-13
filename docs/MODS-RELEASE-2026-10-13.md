# Mods launch: owner-selected research catalog

The owner explicitly requested publication of the ten previously reviewed HTML-preview potentials on 2026-10-13. This is a listing and navigation release, not a claim that every mod passed working-file/security acceptance. No further discovery, gameplay testing, mod installation or binary execution was authorized or performed.

- New Mods: all ten square cards, newest creator announcement first; title and original game only.
- View All Mods: alphabetical wider rows, with search and original-game filtering.
- Details: creator profile/post, AI-build attribution, changes, pricing, available media, reply links, version/install information and factual security coverage.
- Only four prices are asserted Free. Six remain Price not confirmed. Future discovery prioritizes free mods.
- Stay Updated uses the existing site newsletter. It does not create a separate mod-only mailing list or subscribe submission contacts.
- Submit a Mod collects original game/pricing and writes an identifiable mod review record into the existing Airtable review table. It never publishes automatically.
- Six missing thumbnails retain neutral placeholders. Four retained source images are stored locally. No generated artwork was introduced.
- Original game catalog, covers, player sandbox, logo, fonts and palette are preserved.

## Research and security limits

AI Game Scout returned these ten potentials and acknowledged STOP in the prior research run. Source-linked positive comments and independent working-use reports were incomplete. Comment wording is not invented: reply URLs are shown for the two AgentMod responses. Several entries have no confirmed public release; their details say so.

The Codex Security source scan `89fcdb95-5fd1-4572-aca0-5c17c0e29db7` completed with partial coverage of three repository snapshots:

- AgentMod: `0f05132c1a69af5ec0cb0e8f4f33224fe037e0f8`.
- PTC Trainer: `be970c8384102daa858c54bc9f2e0c45c4cb1399`.
- Saints Row RTX Remix compatibility: `c86c7191a1c63e29cd6b93ac12740941c11a747e`.

One low-severity CTAB shader-metadata bounds flaw was confirmed statically in Saints Row source (`src/sr3-rtx/sr3rtx.cpp:1852-1880`, reached by both shader creation hooks): crafted metadata can read outside its shader span and potentially crash the game. Runtime reproduction, code execution and external disclosure were not established. The other seven potentials were not scanned. Source review does not certify distributed binaries; no downloads are hosted by this site.

Exact creator, announcement, mod/repository and attribution URLs are retained in `lib/mods-data.json`, alongside per-entry public limitations. Original remote thumbnail URLs remain recorded there for provenance. The Part 2 skill keeps future acceptance gates separate from explicit owner publication decisions.

## Validation

Use Node 22 and the repository checks: dependency install, lint, tests, production build and typecheck. Form tests mock Airtable, including mod-required-field rejection and preserved review-table schema. Never submit a production test record. Browser verification covers cards, detail/return links, prices, filters, desktop/mobile layout, full-document scrolling, mod sidebar and unchanged Games navigation. GitHub CI and the existing main-to-Vercel integration provide the release path; final deployment identity and live checks are reported separately.
