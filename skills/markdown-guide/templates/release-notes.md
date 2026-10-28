<!-- release-notes template. Replace every {{...}} and remove this comment. If Parent is not set, use #s-index in back links. If Parent exists, add the back link to the Index row too. -->

<a id="top"></a>

# {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| {{RELEASE_VERSION}} | {{YYYY-MM-DD}} | active | {{OWNER}} | templates/release-notes.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Release and main change in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Highlights](#s-highlights)
- [Breaking changes](#s-breaking-changes)
- [Features](#s-features)
- [Fixes](#s-fixes)
- [Upgrade notes](#s-upgrade-notes)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| HI | Highlight | Highlights |
| BC | Breaking change | Breaking changes |
| FT | Feature | Features |
| FX | Fix | Fixes |
| UP | Upgrade action | Upgrade notes |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-highlights"></a>
## Highlights

- <a id="hi1"></a>**HI1 — {{Title}}.** {{User-visible outcome}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-breaking-changes"></a>
## Breaking changes

- <a id="bc1"></a>**BC1 — {{Title}}.** {{What changed}}.
  - Migration: {{required action}}
  - Ref.: [RF1](#rf1)

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-features"></a>
## Features

- <a id="ft1"></a>**FT1 — {{Title}}.** {{Feature and value}}. Ref.: [RF1](#rf1).

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-fixes"></a>
## Fixes

- <a id="fx1"></a>**FX1 — {{Title}}.** {{Fixed behavior}}. Ref.: [RF1](#rf1).

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-upgrade-notes"></a>
## Upgrade notes

- <a id="up1"></a>**UP1 — {{Title}}.** {{Action}}.
  - From: {{version}}
  - To: {{version}}

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
| {{RELEASE_VERSION}} | {{YYYY-MM-DD}} | {{AUTHOR}} | Initial version. |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})
