---
id: code-review
version: "1.1.0"
status: active
applies-to: [code review, pull request review, pr review, diff review]
requires: []
---

# Preset: Code review

## Purpose

Review a pull request, commit, or diff with evidence, a verdict, findings, tests, decisions, and follow-up actions.

## Mandatory structure

```markdown
<a id="top"></a>

# Code review — {{TITLE}}

| Version | Date | Status |
| --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft |

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

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | {{REVIEWER}} | Initial version. |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})
```

If `Parent` is not set, replace `{{LINK_PARENT}}` with `#s-index` in every navigation line. If `Parent` is set, add the back link to the Index row too.

## Rules

CR1 — One finding per item. Findings are `RV#` and keep stable IDs.

CR2 — Use only these severities: `blocking`, `major`, `minor`, `nit`.

CR3 — Every finding has a category, location, evidence, and a specific recommendation.

CR4 — The verdict must match the findings: any blocking finding means `request changes`; no blocking or major findings means `approve`; minor or nit findings mean `approve with changes`.

CR5 — Fixed findings are struck through and linked to the fix or commit. Keep the original ID and evidence.

CR6 — When a finding is accepted, deferred, or a tradeoff is chosen, record a decision `DP#` and link the source `RV#`. Follow-up work becomes actions `DF#`. If there are no decisions, write `No decisions.` or remove `## Decisions` and its index entry.

CR7 — Review the diff and its behavior, not the entire codebase, unless `## Scope` says otherwise.

CR8 — Focus on code, behavior, and evidence. Do not comment on people.

CR9 — Record test evidence in `## Tests`. If tests were not run, state why in `## Constraints`.

CR10 — Link the pull request, commit, issue, and test run in `## References`.

CR11 — Do not delete resolved findings. Update `Status` to `fixed`, `accepted`, or `won't fix` and add a history row.

CR12 — No checkboxes and no automatic numbered lists.

CR13 — `## Decisions` is optional. Keep it only when there are decisions to record.

CR14 — `## Actions` is optional. Keep it only when there is follow-up work. If there is none, write `No actions.` or remove the section and its index entry.

CR15 — Security findings use `Category: security`. If exploit details, secrets, or personal data are sensitive, keep the public finding high-level, link a private advisory or restricted document in `## References`, and record the restriction in `## Constraints`.
