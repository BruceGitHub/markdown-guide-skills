---
id: glossary
version: "1.1.0"
status: active
applies-to: [glossary, terminology, terms, dictionary]
requires: []
---

# Preset: Glossary

## Purpose

Define the terms used by a project, product, or team in one stable, searchable list.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status |
| --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft |

<a id="s-abstract"></a>
## Abstract

{{Glossary domain and audience in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Terms](#s-terms)
- [References](#s-references)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| TR | Term | Terms |
| RF | Reference | References |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

{{Domain, audience, and source of truth for the definitions.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-terms"></a>
## Terms

Terms are sorted alphabetically. IDs remain stable.

- <a id="tr1"></a>**TR1 — {{Term}}.** {{One-sentence definition}}.
  - Aliases: {{acronyms and synonyms}}
  - Ref.: [RF1](#rf1)

- <a id="tr2"></a>**TR2 — {{Term}}.** {{One-sentence definition}}.
  - Aliases: {{acronyms and synonyms}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-references"></a>
## References

- <a id="rf1"></a>**RF1 — {{Title}}.** [{{text}}]({{link}})

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

GL1 — One term per item. Terms are `TR#` and keep stable IDs.

GL2 — Sort terms alphabetically in `## Terms`. IDs do not need to follow the alphabetical order.

GL3 — The definition is one precise sentence. Avoid circular definitions and unexplained acronyms.

GL4 — List acronyms and synonyms under `Aliases`.

GL5 — Cite the source of a non-obvious definition with `Ref.` and an `RF#` item.

GL6 — Do not define the same term twice. Add an alias or update the existing item.

GL7 — When a term changes meaning, update the definition and add a history row. Do not reuse the old ID for a different term.

GL8 — Link the glossary from the project document, PRD, or README that uses it.

GL9 — No checkboxes and no automatic numbered lists.
