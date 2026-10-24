---
id: prd
version: "1.0.0"
status: active
applies-to: [prd, product requirements, requirements]
requires: []
---

# Preset: Product Requirements Document

## Purpose

Define a product problem, its requirements, and the measures of success.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/prd.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Product problem and intended outcome in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Problem](#s-problem)
- [Goals and non-goals](#s-goals-and-non-goals)
- [Personas](#s-personas)
- [Requirements](#s-requirements)
- [Metrics](#s-metrics)
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
| GO | Goal | Goals and non-goals |
| NG | Non-goal | Goals and non-goals |
| PS | Persona | Personas |
| RQ | Requirement | Requirements |
| MT | Metric | Metrics |
| DA | Open decision | Open questions |
| DP | Decision made | Decisions |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-problem"></a>
## Problem

{{User problem, current behavior, and why it matters.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-goals-and-non-goals"></a>
## Goals and non-goals

- <a id="go1"></a>**GO1 — {{Title}}.** {{Measurable goal}}.
- <a id="ng1"></a>**NG1 — {{Title}}.** {{Explicit non-goal}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-personas"></a>
## Personas

- <a id="ps1"></a>**PS1 — {{Name}}.** {{Role, context, and need}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-requirements"></a>
## Requirements

- <a id="rq1"></a>**RQ1 — {{Title}}.** {{Requirement}}.
  - Priority: must
  - Acceptance: {{observable condition}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-metrics"></a>
## Metrics

- <a id="mt1"></a>**MT1 — {{Title}}.** {{Metric}}.
  - Baseline: {{value}}
  - Target: {{value}}
  - Window: {{period}}

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

- <a id="dp1"></a>**DP1 — {{Title}}.** {{Decision}}. Date: {{YYYY-MM-DD}}. Source: [DA1](#da1).

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

PRD1 — State the user problem and current behavior before requirements.

PRD2 — Goals are `GO#` and must be measurable. Non-goals are `NG#` and prevent scope creep.

PRD3 — Personas are `PS#` and describe role, context, and need.

PRD4 — Requirements are `RQ#` and include priority (`must`, `should`, `could`) and an observable acceptance condition.

PRD5 — Metrics are `MT#` and include baseline, target, and window.

PRD6 — Open questions are `DA#` and include `Owner` and `Due date`. Do not add `Status: open`.

PRD7 — Decisions are `DP#` and include a date. A decision that closes a DA links to it with `Source: [DA1](#da1).`

PRD8 — Actions are `DF#`, separated from DAs by `---` and `### To do`.

PRD9 — Link the PRD from the project document.

PRD10 — No automatic numbered lists and no checkboxes.
