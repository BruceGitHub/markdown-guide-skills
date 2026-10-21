---
name: Markdown Guide
description: Create or update Markdown documents with an abstract, anchors and navigation, reverse-chronological change history, semantic lists (DP/DA/DF), and extensible rules via presets, templates, and custom rules. Use when writing, reviewing, or updating a .md file.
metadata:
  version: "1.4.0"
---

# Markdown Guide

## Scope

This skill defines how to create or update Markdown documents that are readable, traceable, and linked. The rules apply to documents produced or modified. The skill's service files (`SKILL.md`, `CHANGELOG.md`, `references/`, `presets/`, `custom/`, `templates/`) are excluded.

## Reading order

P1 — Identify the document type, audience, template or directory, parent, and language. If the template cannot be inferred from the request, the target directory, or an existing file, ask the user which template to use before writing.

P2 — Read the selected template and local rules. Also read `references/rules.md` and `references/style.md`. Use `templates/` only after the user chooses or confirms a built-in template.

P3 — Read `presets/index.md` and load the relevant active presets. For a project, load `presets/project.md`.

P4 — If `custom/rules.md` exists with `status: active`, apply it.

P5 — Use `templates/` for a skeleton and `examples/` for a complete document to reuse.

P6 — On conflict, apply the precedence in `references/extension.md`. Record every exception in `## Constraints`.

## Mandatory rules

G1 — **Abstract.** Every document opens with `## Abstract` right after the metadata: 1–2 lines, at most 30 words. It states what the document is and who it is for. No history, preamble, or acknowledgements.

G2 — **Anchors and navigation.** `<a id="top"></a>` is the first line. Every H2 has `<a id="s-<slug>"></a>` on the preceding line. The index links every H2. Every H2 except the Index ends with:

`[↑ Back to top](#top) · [← Back]({{PARENT}})`

The Index ends with `[↑ Back to top](#top)` and, if a parent exists, the back link. Slug: lowercase ASCII, hyphens, stable over time.

G3 — **Change history.** `## Change history` is the last section. Table `Version | Date | Author | Change`, rows newest first. Every change adds a row; rows are never deleted. ISO 8601 date. The metadata version matches the first row.

G4 — **Semantic lists.** Automatic numbered lists (`1.`, `2.`) and unlabeled bullets for citable items are forbidden. Format: `- **DP1 — Title.** Text.` IDs are stable, never reused or renumbered. Every prefix used appears in `## Legend`. Exception only on explicit request, recorded in `## Constraints` with date, requester, and scope.

G5 — **Metadata and version.** Compact two-row table after the H1. Required columns: `Version`, `Date`, `Status`. Optional columns: `Owner`, `Template`, `Parent`, added only when they have a value. Semantic versioning: major for restructuring or meaning change, minor for new sections or content, patch for corrections.

G6 — **Constraints.** `## Constraints` is always present. It contains exceptions, conflicts with templates, and active custom rules. If none, write `No constraints.`

G7 — **Templates and directories.** Before writing, determine the template. If the user specifies a template or directory, read it and follow its rules, names, and location. If the template cannot be inferred from the request, the target directory, or an existing file, ask the user which template to use before creating anything. Offer the built-in templates (`templates/document.md`, `templates/project.md`) and any custom template paths. Do not choose silently. Add missing mandatory sections. Core rules are never removed. Record every conflict in `## Constraints`.

G8 — **Project document.** Use `presets/project.md`: `## Decisions made` and `## Open decisions`; DA and DF separated by `---`; DP/DA/DF IDs; references as links; checked-off (closed) items struck through; file history.

G9 — **Style.** English by default. Minimal and precise: short sentences, no filler, no emoji, no decorative emphasis. ISO dates. Consistent terms. See `references/style.md`.

G10 — **Updates.** Never delete history, IDs, or anchors. Add a history row, bump the version, update `Date`. Closed items are struck through, not deleted.

## Minimum structure

```markdown
<a id="top"></a>

# Title

| Version | Date | Status | Owner | Parent |
| --- | --- | --- | --- | --- |
| 0.1.0 | 2026-10-21 | draft | ... | ... |

<a id="s-abstract"></a>
## Abstract

Text, at most 30 words.

[↑ Back to top](#top) · [← Back]({{PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Content](#s-content)
- [Legend](#s-legend)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-content"></a>
## Content

...

[↑ Back to top](#top) · [← Back]({{PARENT}})

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| ... | ... | ... |

[↑ Back to top](#top) · [← Back]({{PARENT}})

<a id="s-constraints"></a>
## Constraints

No constraints.

[↑ Back to top](#top) · [← Back]({{PARENT}})

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 0.1.0 | 2026-10-21 | ... | Initial version. |

[↑ Back to top](#top) · [← Back]({{PARENT}})
```

Replace `{{PARENT}}` with the parent document link or `#s-index` if the document has no parent. If a parent exists, add the back link to the Index row too.

## Procedure

P1 — Identify document type, audience, template or directory, parent, and language. If the template is not inferable, ask the user before writing.

P2 — Read the selected template and local rules. Use `templates/` only after the user chooses or confirms a built-in template.

P3 — Select the narrowest active preset and the active custom rules.

P4 — Define the outline with anchors and semantic prefixes.

P5 — Write the abstract, content, legend, references, and constraints.

P6 — Add the history row, update version and date.

P7 — Validate with the checklist.

P8 — Deliver the file. Report presets, templates, and exceptions applied.

## Project

For a project document read `presets/project.md` and use `examples/example-project.md` as a reference. `## Decisions made` and `## Open decisions` are mandatory. Inside `## Open decisions`, DA and DF are separated by `---`. Closed items are struck through with `~~...~~` and remain in the document.

## Extension

The skill is extensible on three levels: presets in `presets/` and `custom/presets/`, custom rules in `custom/rules.md`, templates in `templates/`. Read `references/extension.md` before adding a preset or custom rule. Do not modify existing presets for customization: use `custom/`.

## Checklist

C1 — Abstract present, at most 30 words.

C2 — `<a id="top"></a>` present.

C3 — Every H2 has the `s-<slug>` anchor.

C4 — The index links every H2.

C5 — Every H2 has the navigation line.

C6 — No automatic numbered lists.

C7 — Every citable item has a semantic ID.

C8 — The legend covers every prefix used.

C9 — `## Constraints` present; exceptions recorded.

C10 — Change history in reverse-chronological order; version aligned.

C11 — Project: DP/DA/DF, `---`, references as links, closed items struck through.

C12 — Template selected or explicitly confirmed by the user; conflicts recorded; no placeholders or dead links.
