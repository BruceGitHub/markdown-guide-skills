---
id: runbook
version: "1.1.0"
status: active
applies-to: [runbook, operations, procedure, playbook]
requires: []
---

# Preset: Runbook

## Purpose

Document a repeatable operational procedure with verification, rollback, and escalation.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status |
| --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft |

<a id="s-abstract"></a>
## Abstract

{{Procedure and intended operator in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Preconditions](#s-preconditions)
- [Symptoms](#s-symptoms)
- [Procedure](#s-procedure)
- [Verification](#s-verification)
- [Rollback](#s-rollback)
- [Escalation](#s-escalation)
- [References](#s-references)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| PC | Precondition | Preconditions |
| ST | Step | Procedure |
| CK | Check | Verification |
| RB | Rollback step | Rollback |
| ES | Escalation | Escalation |
| RF | Reference | References |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

{{Service, environment, and situations covered by this runbook.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-preconditions"></a>
## Preconditions

- <a id="pc1"></a>**PC1 — {{Title}}.** {{Required access, state, or approval}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-symptoms"></a>
## Symptoms

{{Signals that indicate this runbook applies.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-procedure"></a>
## Procedure

- <a id="st1"></a>**ST1 — {{Action}}.** {{Detail}}.
  - Command: `{{command}}`
  - Expected: {{result}}
- <a id="st2"></a>**ST2 — {{Action}}.** {{Detail}}.
  - Command: `{{command}}`
  - Expected: {{result}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-verification"></a>
## Verification

- <a id="ck1"></a>**CK1 — {{Check}}.** {{Detail}}.
  - Expected: {{result}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-rollback"></a>
## Rollback

- <a id="rb1"></a>**RB1 — {{Action}}.** {{Detail}}.
  - Command: `{{command}}`
  - Expected: {{result}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-escalation"></a>
## Escalation

- <a id="es1"></a>**ES1 — {{Condition}}.** {{When to escalate}}.
  - Contact: {{OWNER}}
  - Channel: {{channel}}

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

RB1 — State the exact service, environment, and situations covered in `## Scope`.

RB2 — Preconditions are `PC#` and list access, state, or approvals required before starting.

RB3 — Procedure steps are `ST#`, one action per step, in execution order. Each step has an expected result.

RB4 — Verification checks are `CK#` and state the expected result.

RB5 — Rollback steps are `RB#` and are safe to execute without the normal procedure.

RB6 — Escalation items are `ES#` and include the condition, contact, and channel.

RB7 — No automatic numbered lists and no checkboxes.

RB8 — Test the runbook after a material change and record the test in `## Change history`.
