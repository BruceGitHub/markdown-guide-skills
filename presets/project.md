---
id: project
version: "1.0.0"
status: active
applies-to: [project, plan, specification, architecture, decision]
requires: []
---

# Preset: Project

## Purpose

A document that makes decisions and tracks work: project, plan, specification, architecture, decision log.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Field | Value |
| --- | --- |
| Version | 0.1.0 |
| Date | {{YYYY-MM-DD}} |
| Status | draft |
| Owner | {{OWNER}} |
| Template | presets/project.md |
| Parent | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Abstract: at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Context and goal](#s-context-and-goal)
- [Decisions made](#s-decisions-made)
- [Open decisions](#s-open-decisions)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| DP | Decision made | Decisions made |
| DA | Open decision | Open decisions |
| DF | To do | Open decisions, To do |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-context-and-goal"></a>
## Context and goal

{{Context, problem, expected outcome.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-decisions-made"></a>
## Decisions made

- <a id="dp1"></a>**DP1 — {{Title}}.** {{Text}}. Date: {{YYYY-MM-DD}}. Ref.: [RF1](#rf1), [{{document}}]({{link}}).

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-open-decisions"></a>
## Open decisions

- <a id="da1"></a>**DA1 — {{Title}}.** {{Text}}.
  - Status: open
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}
  - Ref.: [{{RF}}](#rf1)

---

### To do

- <a id="df1"></a>**DF1 — {{Title}}.** {{Text}}.
  - Status: to do
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}
  - Ref.: [{{RF}}](#rf1)

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-references"></a>
## References

- <a id="rf1"></a>**RF1 — {{Title}}.** [{{text}}]({{link}})

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-constraints"></a>
## Constraints

No constraints.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | {{AUTHOR}} | Initial version. |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})
```

If `Parent` is not set, replace `{{LINK_PARENT}}` with `#s-index` in every navigation line. If `Parent` is set, add the back link to the Index row too.

## Rules

PR1 — Keep the structure order. Project-specific sections go between `## Context and goal` and `## Decisions made`, with an anchor and navigation.

PR2 — `## Decisions made` contains only DP. Every DP has a title, text, date, and references when present.

PR3 — `## Open decisions` contains DAs. Every DA has `Status`, `Owner`, `Due date`, and `Ref.` when present.

PR4 — Inside `## Open decisions`, separate DAs from DFs with a `---` line followed by `### To do`.

PR5 — `### To do` contains only DF. Every DF has `Status`, `Owner`, `Due date`, and `Ref.` when present.

PR6 — DP and DA references are Markdown links. Internal references point to `RF#` anchors; external references point to the document.

PR7 — A closed DA produces a DP. The DA stays in the document, struck through, with a link to the DP:

`- ~~**DA2 — Title.** Text.~~ → [DP4](#dp4) (2026-10-21).`

PR8 — A completed or cancelled DF stays in the document, struck through, with the date and a link to the DP or DA:

`- ~~**DF2 — Title.**~~ (done 2026-10-21, [DP4](#dp4)).`

PR9 — A superseded DP is not struck through. Add `Superseded by [DP5](#dp5).`

PR10 — History is the file chronology: newest change first. Every closure, new decision, or status change adds a row.

PR11 — The legend lists every prefix used, including project-specific ones (`OB`, `RQ`, `RS`).

PR12 — No automatic numbered lists and no checkboxes. Status is a field (`Status:`) or struck-through text.

PR13 — If the project has a template or directory, apply its rules. Mandatory sections remain present. Conflicts go in `## Constraints`.

PR14 — If there are no references, write `No references.` in `## References`.

## Item format

Decision made:

```markdown
- <a id="dp1"></a>**DP1 — Adopt OIDC.** Date: 2026-09-12. Ref.: [RF1](#rf1), [RF2](#rf2).
```

Open decision:

```markdown
- <a id="da1"></a>**DA1 — Service token management.**
  - Status: open
  - Owner: Security Team
  - Due date: 2026-11-15
  - Ref.: [RF4](#rf4)
```

Action:

```markdown
- <a id="df1"></a>**DF1 — Complete the OIDC client inventory.**
  - Status: in progress
  - Owner: Platform Team
  - Due date: 2026-10-31
  - Ref.: [RF4](#rf4)
```

## Example

See `examples/example-project.md`.
