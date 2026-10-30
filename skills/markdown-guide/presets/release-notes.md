---
id: release-notes
version: "1.1.0"
status: active
applies-to: [release, release notes]
requires: []
---

# Preset: Release Notes

## Purpose

Describe a release: highlights, breaking changes, features, fixes, and upgrade actions.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status |
| --- | --- | --- |
| {{RELEASE_VERSION}} | {{YYYY-MM-DD}} | active |

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

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| {{RELEASE_VERSION}} | {{YYYY-MM-DD}} | {{AUTHOR}} | Initial version. |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})
```

If `Parent` is not set, replace `{{LINK_PARENT}}` with `#s-index` in every navigation line. If `Parent` is set, add the back link to the Index row too.

## Rules

RN1 — The metadata `Version` is the release version. The first history row uses the same version.

RN2 — Highlights are `HI#` and describe user-visible outcomes, not internal tasks.

RN3 — Breaking changes are `BC#`, listed before features, and include the required migration action.

RN4 — Features are `FT#`; fixes are `FX#`; upgrade actions are `UP#`.

RN5 — Link issues, pull requests, or migration guides as `RF#`.

RN6 — Release notes are immutable after publication. Corrections add a new history row and bump the patch version.

RN7 — Link the release notes from the project document.

RN8 — No automatic numbered lists and no checkboxes.
