---
id: rfc
version: "1.0.0"
status: active
applies-to: [rfc, proposal, design proposal]
requires: []
---

# Preset: Request for Comments

## Purpose

Propose a design, collect open questions, and record the decisions that close them.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/rfc.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Proposal in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Summary](#s-summary)
- [Motivation](#s-motivation)
- [Requirements](#s-requirements)
- [Design](#s-design)
- [Alternatives](#s-alternatives)
- [Drawbacks](#s-drawbacks)
- [Open questions](#s-open-questions)
- [Decisions](#s-decisions)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| RQ | Requirement | Requirements |
| ALT | Alternative | Alternatives |
| DW | Drawback | Drawbacks |
| DA | Open decision | Open questions |
| DP | Decision made | Decisions |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-summary"></a>
## Summary

RFC status: {{draft | accepted | rejected}}.

{{Proposal summary.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-motivation"></a>
## Motivation

{{Problem, current limitations, and expected value.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-requirements"></a>
## Requirements

- <a id="rq1"></a>**RQ1 — {{Title}}.** {{Requirement}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-design"></a>
## Design

{{Detailed design, interfaces, data flow, and failure modes.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-alternatives"></a>
## Alternatives

- <a id="alt1"></a>**ALT1 — {{Title}}.** {{Description}}. Rejected because {{reason}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-drawbacks"></a>
## Drawbacks

- <a id="dw1"></a>**DW1 — {{Title}}.** {{Drawback}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-open-questions"></a>
## Open questions

- <a id="da1"></a>**DA1 — {{Title}}.** {{Question}}.
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}
  - Ref.: [RF1](#rf1)

---

### To do

- <a id="df1"></a>**DF1 — {{Title}}.** {{Action}}.
  - Status: to do
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-decisions"></a>
## Decisions

- <a id="dp1"></a>**DP1 — {{Title}}.** {{Decision}}. Date: {{YYYY-MM-DD}}. Ref.: [RF1](#rf1).

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

RFC1 — Use this preset for a proposal that is not yet a final decision. Use `adr` once the decision is accepted.

RFC2 — Requirements are `RQ#`; alternatives are `ALT#`; drawbacks are `DW#`.

RFC3 — Open questions are `DA#` and include `Owner` and `Due date`. Do not add `Status: open`; the section already defines the state.

RFC4 — Decisions are `DP#` and include a date. A decision that closes a DA links to it with `Source: [DA1](#da1).`

RFC5 — Actions are `DF#`, separated from DAs by `---` and `### To do`. They include `Status`, `Owner`, and `Due date`.

RFC6 — Record the RFC status (`draft`, `accepted`, `rejected`) in `## Summary`.

RFC7 — Link the RFC from the project document when the proposal affects the project.

RFC8 — No automatic numbered lists and no checkboxes.
