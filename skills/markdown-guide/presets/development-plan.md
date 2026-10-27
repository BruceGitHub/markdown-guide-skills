---
id: development-plan
version: "1.0.0"
status: active
applies-to: [development plan, dev plan, implementation plan, delivery plan, tracking]
requires: []
---

# Preset: Development plan tracking

## Purpose

Track a development plan created with an agent: phases, open questions, decisions, tasks, new items, and overall progress.

## Mandatory structure

```markdown
<a id="top"></a>

# Development plan — {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/development-plan.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Plan, product area, and tracking goal in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Plan](#s-plan)
- [Progress](#s-progress)
- [Open questions](#s-open-questions)
- [Decisions](#s-decisions)
- [Tasks](#s-tasks)
- [New items](#s-new-items)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| SC | Scope | Scope |
| PH | Phase | Plan |
| PG | Progress summary | Progress |
| DA | Open decision | Open questions |
| DP | Decision made | Decisions |
| DF | Task | Tasks |
| NI | New item | New items |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

- <a id="sc1"></a>**SC1 — Source.** [{{agent session, issue, or brief}}]({{link}}).
- <a id="sc2"></a>**SC2 — Scope.** {{What the plan covers and what it excludes}}.
- <a id="sc3"></a>**SC3 — Assumptions.** {{Assumptions that can change the plan}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-plan"></a>
## Plan

- <a id="ph1"></a>**PH1 — {{Phase}}.** {{Goal}}.
  - Status: {{planned | in progress | blocked | done}}
  - Owner: {{OWNER}}
  - Start: {{YYYY-MM-DD}}
  - End: {{YYYY-MM-DD}}

- <a id="ph2"></a>**PH2 — {{Phase}}.** {{Goal}}.
  - Status: {{planned | in progress | blocked | done}}
  - Owner: {{OWNER}}
  - Start: {{YYYY-MM-DD}}
  - End: {{YYYY-MM-DD}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-progress"></a>
## Progress

- <a id="pg1"></a>**PG1 — Overall.** Status: {{on track | at risk | blocked}}. Phases done: `{{n}}/{{total}}`. Open questions: `{{n}}`. Open tasks: `{{n}}`.
- <a id="pg2"></a>**PG2 — Next.** {{Next action or milestone}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-open-questions"></a>
## Open questions

- <a id="da1"></a>**DA1 — {{Question}}.** {{Context}}.
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}
  - Blocking: {{yes | no}}
  - Ref.: [RF1](#rf1)

- <a id="da2"></a>**DA2 — {{Question}}.** {{Context}}.
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}
  - Blocking: {{yes | no}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-decisions"></a>
## Decisions

- <a id="dp1"></a>**DP1 — {{Decision}}.** {{Rationale}}. Date: {{YYYY-MM-DD}}. Source: [DA1](#da1).
- <a id="dp2"></a>**DP2 — {{Decision}}.** {{Rationale}}. Date: {{YYYY-MM-DD}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-tasks"></a>
## Tasks

- <a id="df1"></a>**DF1 — {{Task}}.** {{Detail}}.
  - Phase: [PH1](#ph1)
  - Status: {{to do | in progress | blocked | done}}
  - Priority: {{high | medium | low}}
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}

- <a id="df2"></a>**DF2 — {{Task}}.** {{Detail}}.
  - Phase: [PH2](#ph2)
  - Status: {{to do | in progress | blocked | done}}
  - Priority: {{high | medium | low}}
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-new-items"></a>
## New items

Items discovered while planning. Triage them before adding them to the plan.

- <a id="ni1"></a>**NI1 — {{Title}}.** {{New question, task, risk, or idea}}.
  - Type: {{question | task | risk | idea}}
  - Status: {{new | triaged | accepted | rejected}}
  - Source: {{agent session or discussion}}
  - Suggested action: {{create DA, DP, DF, or close}}

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

DP1 — Link the source of the plan, such as the agent session, issue, or brief.

DP2 — Phases are `PH#` and include goal, status, owner, start, and end.

DP3 — Open questions are `DA#` with owner, due date, and blocking flag. Do not add `Status: open`.

DP4 — Decisions are `DP#` with a date and the `DA#` they close.

DP5 — Tasks are `DF#` with phase, status, priority, owner, and due date.

DP6 — New items are `NI#` with type, status, source, and suggested action. Triage them before adding them to the plan.

DP7 — An accepted `NI#` becomes a `DA#`, `DP#`, or `DF#`. Keep the `NI#` struck through with a link to the new item.

DP8 — A rejected `NI#` is struck through with the reason. Do not delete it.

DP9 — Update `## Progress` after every status change, closure, or new item.

DP10 — Closed questions, tasks, and items are struck through, not deleted.

DP11 — No checkboxes and no automatic numbered lists.

DP12 — If a new item changes scope or assumptions, update `## Constraints` and add a history row.
