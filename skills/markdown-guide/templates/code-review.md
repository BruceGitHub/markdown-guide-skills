<!-- Code review template. Replace every {{...}} and remove this comment. If Parent is not set, use #s-index in back links. If Parent exists, add the back link to the Index row too. Decisions and Actions are optional: remove those sections and their index entries when there is nothing to record. -->

<a id="top"></a>

# Code review — {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{REVIEWER}} | templates/code-review.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Reviewed change and verdict in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Verdict](#s-verdict)
- [Findings](#s-findings)
- [Tests](#s-tests)
- [Decisions](#s-decisions)
- [Actions](#s-actions)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| SC | Scope | Scope |
| VD | Verdict | Verdict |
| RV | Review finding | Findings |
| TS | Test evidence | Tests |
| DP | Decision made | Decisions |
| DF | To do | Actions |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

- <a id="sc1"></a>**SC1 — Reviewed artifact.** [{{pull request or commit}}]({{link}}). Base: `{{base}}`. Head: `{{head}}`. Reviewer: {{REVIEWER}}. Date: {{YYYY-MM-DD}}.
- <a id="sc2"></a>**SC2 — In scope.** {{Files, modules, or behaviors reviewed}}.
- <a id="sc3"></a>**SC3 — Out of scope.** {{Explicit exclusions}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-verdict"></a>
## Verdict

- <a id="vd1"></a>**VD1 — {{approve | approve with changes | request changes}}.** {{One-paragraph rationale}}. Blocking findings: `{{count}}`.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-findings"></a>
## Findings

- <a id="rv1"></a>**RV1 — {{Title}}.** {{Finding}}.
  - Category: {{security | correctness | performance | accessibility | maintainability | testing | docs}}
  - Severity: {{blocking | major | minor | nit}}
  - Location: [{{file}}:{{line}}]({{link}})
  - Evidence: {{reproduction, test, or code reference}}
  - Recommendation: {{specific fix}}
  - Status: open

- <a id="rv2"></a>**RV2 — {{Title}}.** {{Finding}}.
  - Category: {{security | correctness | performance | accessibility | maintainability | testing | docs}}
  - Severity: {{blocking | major | minor | nit}}
  - Location: [{{file}}:{{line}}]({{link}})
  - Evidence: {{reproduction, test, or code reference}}
  - Recommendation: {{specific fix}}
  - Status: open

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-tests"></a>
## Tests

- <a id="ts1"></a>**TS1 — {{Suite or command}}.** Status: {{passed | failed | not run}}.
  - Command: `{{command}}`
  - Evidence: [RF1](#rf1)

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<!-- Optional. Remove this section and its index entry if there are no decisions. -->
<a id="s-decisions"></a>
## Decisions

No decisions.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<!-- Optional. Remove this section and its index entry if there are no follow-up actions. -->
<a id="s-actions"></a>
## Actions

- <a id="df1"></a>**DF1 — {{Title}}.** {{Follow-up action}}.
  - Status: to do
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}
  - Source: [RV1](#rv1)

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
| 0.1.0 | {{YYYY-MM-DD}} | {{REVIEWER}} | Initial version. |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})
