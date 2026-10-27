---
id: topic-index
version: "1.0.0"
status: active
applies-to: [index, topic index, documentation index, content index]
requires: []
---

# Preset: Topic index

## Purpose

Organize an index of topics or documents by category, with status, owner, last update, and a one-line summary.

## Mandatory structure

```markdown
<a id="top"></a>

# Topic index — {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/topic-index.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Index scope and audience in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Categories](#s-categories)
- [Catalog](#s-catalog)
- [Maintenance](#s-maintenance)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| SC | Scope | Scope |
| CT | Category | Categories |
| TP | Topic | Catalog |
| MT | Maintenance rule | Maintenance |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

- <a id="sc1"></a>**SC1 — Coverage.** {{Topics, products, or documents included}}.
- <a id="sc2"></a>**SC2 — Audience.** {{Who uses this index and why}}.
- <a id="sc3"></a>**SC3 — Order.** {{Category then title, or curated order}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-categories"></a>
## Categories

- <a id="ct1"></a>**CT1 — {{Category}}.** {{Description}}.
- <a id="ct2"></a>**CT2 — {{Category}}.** {{Description}}.
  - Parent: [CT1](#ct1)

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-catalog"></a>
## Catalog

- <a id="tp1"></a>**TP1 — {{Title}}.** [{{link}}]({{link}}).
  - Category: [CT1](#ct1)
  - Status: {{active | draft | deprecated | archived}}
  - Owner: {{OWNER}}
  - Updated: {{YYYY-MM-DD}}
  - Summary: {{One line}}

- <a id="tp2"></a>**TP2 — {{Title}}.** [{{link}}]({{link}}).
  - Category: [CT2](#ct2)
  - Status: {{active | draft | deprecated | archived}}
  - Owner: {{OWNER}}
  - Updated: {{YYYY-MM-DD}}
  - Summary: {{One line}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-maintenance"></a>
## Maintenance

- <a id="mt1"></a>**MT1 — Review cadence.** {{Monthly, quarterly, or on release}}. Owner: {{OWNER}}.
- <a id="mt2"></a>**MT2 — Add a topic.** Add `TP#` under `## Catalog`, assign a category, and update the history.
- <a id="mt3"></a>**MT3 — Archive a topic.** Set `Status: archived`; do not delete the entry.

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

IX1 — One canonical entry per topic. Do not list the same link twice.

IX2 — Every topic `TP#` has a link, category, status, owner, updated date, and one-line summary.

IX3 — Categories are `CT#` with a description. Every category used by a topic is listed in `## Categories`.

IX4 — Use only these topic statuses: `active`, `draft`, `deprecated`, `archived`.

IX5 — State the catalog order in `## Scope`: by category and title, or curated.

IX6 — Archived and deprecated topics remain in the catalog with their status. Do not delete them without a history row.

IX7 — Update the `Updated` date and add a history row when a topic changes.

IX8 — No checkboxes and no automatic numbered lists.

IX9 — Link the index from the parent README, project document, or documentation home.

IX10 — A sub-index uses `Parent` and must not create circular links.

IX11 — If a topic moves, update its link and owner. Keep the same `TP#`.

IX12 — Review the index on the cadence declared in `## Maintenance`.
