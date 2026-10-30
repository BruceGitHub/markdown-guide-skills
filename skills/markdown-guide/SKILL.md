---
name: markdown-guide
description: Create or update Markdown documents with an abstract, anchors and navigation, reverse-chronological change history, semantic lists (DP/DA/DF), and extensible rules via presets, templates, and custom rules. Use when writing, reviewing, or updating a .md file.
metadata:
  version: "1.10.0"
  opencode/autoinvoke: false
disable-model-invocation: true
---

# Markdown Guide

## Scope

Create or update Markdown documents that are readable, traceable, and linked. Rules apply to produced documents. Service files (`SKILL.md`, `references/`, `presets/`, `custom/`, `templates/`, `examples/`, `scripts/`) are excluded.

## Reading order

P1 — Identify document type, audience, template or directory, parent, and language.

P2 — Determine the template. If it cannot be inferred, ask before writing.

P3 — Read the selected template and `references/rules.md`; use `references/style.md` for prose.

P4 — Load the narrowest preset from `presets/index.md`; apply `custom/rules.md` if active.

P5 — Use `templates/` for a skeleton and `examples/` for a complete reference.

P6 — On conflict, follow `references/extension.md` and record the deviation in `## Constraints`.

## Mandatory rules

G1 — **Abstract.** `## Abstract` after metadata, 1–2 lines, max 30 words: what and for whom.

G2 — **Anchors.** Top anchor first. Every H2 has `s-<slug>`. The index links every H2. Every H2 ends with back/top navigation; the Index ends with top. Slugs are lowercase, ASCII, stable.

G3 — **History.** `## Change history` last. Table `Version | Date | Author | Change`, newest first, append-only. Metadata version matches the first row.

G4 — **Semantic lists.** No automatic numbered lists or unlabeled bullets for citable items. Use stable IDs and a legend. Exceptions go in `## Constraints`.

G5 — **Metadata.** Compact two-row table: required `Version`, `Date`, `Status`; optional `Owner`, `Template`, `Parent`, omitted when unknown. Semver.

G6 — **Constraints.** Add `## Constraints` only when there is an exception to record. Omit the section and its index entry when there is nothing to record.

G7 — **Templates.** If a template or directory is specified, follow it. If the template cannot be inferred, ask which to use. Core rules win; record conflicts in `## Constraints`.

G8 — **Projects.** Use `presets/project.md`: `## Decisions made`, `## Open decisions`, `---`, `### To do`, references as links, closed items struck.

G9 — **Style.** English by default. Minimal, precise, no filler or emoji. ISO dates.

G10 — **Updates.** Preserve IDs, anchors, and history. Add a history row, bump the version, update `Date`. Strike closed items; never delete them.

## Minimum structure

```markdown
<a id="top"></a>

# Title

| Version | Date | Status |
| --- | --- | --- |
| 0.1.0 | 2026-10-28 | draft |

<a id="s-abstract"></a>
## Abstract

Text, at most 30 words.

[↑ Back to top](#top) · [← Back]({{PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Content](#s-content)
- [Legend](#s-legend)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-content"></a>
## Content

...

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| ... | ... | ... |

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 0.1.0 | 2026-10-28 | ... | Initial version. |
```

Repeat the navigation line after every H2 except the Index. Replace `{{PARENT}}` with the parent link or `#s-index`. Details: `references/rules.md`.

## Procedure

P1 — Identify type, audience, template or directory, parent, and language.

P2 — Read the template and local rules; ask if the template is not inferable.

P3 — Select the narrowest preset and active custom rules.

P4 — Outline sections, anchors, and semantic prefixes.

P5 — Write abstract, content, legend, references, and constraints when needed.

P6 — Add the history row, version, and date.

P7 — Validate with the checklist.

P8 — Deliver and report presets, templates, and exceptions.

## Project

Use `presets/project.md`; see `examples/example-project.md`. `## Decisions made` and `## Open decisions` are mandatory. Separate DA and DF with `---` and `### To do`. Strike closed items.

## Presets

List or search with `node scripts/list-presets.mjs [query]` from the skill directory. From the repository root, use `node scripts/list-presets.mjs [query]`.

## Update

`npx skills update markdown-guide -y`. Use `-g` for global or `-p` for project scope. Existing installs created with the old display name may need `npx skills update "Markdown Guide" -y` once.

## Help

When the user asks for help, explain what the skill does, list commands and presets, and point to `README.md` and `references/extension.md`.

## Extension

Presets in `presets/` and `custom/presets/`, custom rules in `custom/rules.md`, templates in `templates/`. Read `references/extension.md` before adding one. Customize in `custom/`, not in built-in presets.

## Checklist

C1 — Abstract ≤30 words.

C2 — Top anchor present.

C3 — Every H2 has an `s-<slug>` anchor.

C4 — Index links every H2.

C5 — Every H2 has navigation.

C6 — No automatic numbered lists.

C7 — Citable items have semantic IDs.

C8 — Legend covers every prefix.

C9 — Constraints appears only when exceptions exist; every exception is recorded.

C10 — History reverse-chronological; version aligned.

C11 — Project: DP/DA/DF, `---`, links, struck items.

C12 — Template confirmed; conflicts recorded; no placeholders or dead links.
