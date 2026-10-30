<!-- Topic index template. Replace every {{...}} and remove this comment. If Parent is not set, use #s-index in back links. If Parent exists, add the back link to the Index row too. -->

<a id="top"></a>

# Topic index — {{TITLE}}

| Version | Date | Status |
| --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft |

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

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | {{AUTHOR}} | Initial version. |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})
