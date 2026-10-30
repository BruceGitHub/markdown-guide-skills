---
id: adr
version: "1.1.0"
status: active
applies-to: [adr, architecture decision, decision record]
requires: []
---

# Preset: Architecture Decision Record

## Purpose

Record one architecture decision and its consequences.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status |
| --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft |

<a id="s-abstract"></a>
## Abstract

{{Decision in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Context](#s-context)
- [Decision](#s-decision)
- [Consequences](#s-consequences)
- [Alternatives](#s-alternatives)
- [References](#s-references)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| DP | Decision made | Decision |
| CON | Consequence | Consequences |
| ALT | Alternative | Alternatives |
| RF | Reference | References |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-context"></a>
## Context

{{Context, forces, and constraints that led to the decision.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-decision"></a>
## Decision

- <a id="dp1"></a>**DP1 — {{Title}}.** {{Decision text}}. Decision status: accepted. Date: {{YYYY-MM-DD}}. Ref.: [RF1](#rf1).

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-consequences"></a>
## Consequences

- <a id="con1"></a>**CON1 — {{Title}}.** {{Consequence}}.
- <a id="con2"></a>**CON2 — {{Title}}.** {{Consequence}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-alternatives"></a>
## Alternatives

- <a id="alt1"></a>**ALT1 — {{Title}}.** {{Description}}. Rejected because {{reason}}.

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

ADR1 — One decision per ADR. If the decision changes, create a new ADR and mark the old one `Superseded by [ADR-0007](../adr/0007-title.md)` in the Decision item.

ADR2 — Use this preset only for a decision already made. If the decision is still open, use the `rfc` preset.

ADR3 — The decision is `DP1`; consequences are `CON#`; alternatives are `ALT#`; references are `RF#`.

ADR4 — Use `adr/NNNN-<slug>.md` when the project uses an ADR directory; otherwise use kebab-case.

ADR5 — Link the ADR from the project document's `## Decisions made` section.

ADR6 — No automatic numbered lists and no checkboxes.

ADR7 — The ADR status (`proposed`, `accepted`, `superseded`) is a field on the decision item, not `Status: open`.
