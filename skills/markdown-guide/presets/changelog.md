---
id: changelog
version: "1.1.0"
status: active
applies-to: [changelog, release history, version history]
requires: []
---

# Preset: Changelog

## Purpose

Maintain a standard versioned log of project changes. Use `release-notes` for a single release and this preset for the ongoing log.

The format follows [Keep a Changelog 1.1.0](https://keepachangelog.com/en/1.1.0/) and [Semantic Versioning](https://semver.org/spec/v2.0.0.html). The standard release sections are wrapped by the skill's core sections: abstract, index, legend, constraints, and change history.

## Mandatory structure

```markdown
<a id="top"></a>

# Changelog

| Version | Date | Status |
| --- | --- | --- |
| {{CURRENT_VERSION}} | {{YYYY-MM-DD}} | active |

<a id="s-abstract"></a>
## Abstract

All notable changes to this project are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Unreleased](#s-unreleased)
- [1.0.0](#s-1-0-0)
- [References](#s-references)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| CL | Changelog entry | Unreleased, releases |
| RF | Reference | References |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-unreleased"></a>
## [Unreleased]

### Added

- <a id="cl1"></a>**CL1 — {{Title}}.** {{Human-readable description}}. Ref.: [RF1](#rf1).

### Changed

- <a id="cl2"></a>**CL2 — {{Title}}.** {{Human-readable description}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-1-0-0"></a>
## [1.0.0] - {{YYYY-MM-DD}}

### Added

- <a id="cl3"></a>**CL3 — {{Title}}.** {{Human-readable description}}. Ref.: [RF1](#rf1).

### Fixed

- <a id="cl4"></a>**CL4 — {{Title}}.** {{Human-readable description}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-references"></a>
## References

- <a id="rf1"></a>**RF1 — Unreleased compare.** [compare/v1.0.0...HEAD]({{compare_url}})
- <a id="rf2"></a>**RF2 — 1.0.0 release.** [releases/tag/v1.0.0]({{release_url}})

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| {{CURRENT_VERSION}} | {{YYYY-MM-DD}} | {{AUTHOR}} | Initial version. |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})
```

If `Parent` is not set, replace `{{LINK_PARENT}}` with `#s-index` in every navigation line. If `Parent` is set, add the back link to the Index row too.

## Rules

CH1 — Follow Keep a Changelog 1.1.0 and Semantic Versioning.

CH2 — `## [Unreleased]` contains changes not yet released. Move them into a release section when the version is published.

CH3 — Releases are reverse-chronological. Use `## [<version>] - <YYYY-MM-DD>` for each release and add every release heading to the index with an `s-<version>` anchor.

CH4 — Use only these categories, and keep only non-empty ones: Added, Changed, Deprecated, Removed, Fixed, Security.

CH5 — Entries are `CL#`, human-readable, and stable. Link issues or pull requests as `RF#`. Do not paste commit logs.

CH6 — Mark breaking changes with `**Breaking.**` at the start of the entry and include the migration action.

CH7 — Released sections are immutable. Correct a published entry with a new patch release, not by rewriting the old section.

CH8 — Put compare and release links in `## References` and keep them aligned with the release headings.

CH9 — `## Change history` tracks edits to the changelog file, not project releases. Project releases live in the release sections.

CH10 — Link the changelog from the project document and from release notes.

CH11 — No automatic numbered lists and no checkboxes.

CH12 — Save the generated document as `CHANGELOG.md` in the project root.
