---
id: migration-plan
version: "1.0.0"
status: active
applies-to: [migration, cutover, rollout]
requires: []
---

# Preset: Migration Plan

## Purpose

Plan a migration or cutover with preconditions, validation, rollback, and communication.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/migration-plan.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Migration and target date in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Current state](#s-current-state)
- [Target state](#s-target-state)
- [Preconditions](#s-preconditions)
- [Migration steps](#s-migration-steps)
- [Validation](#s-validation)
- [Rollback](#s-rollback)
- [Communication](#s-communication)
- [Risks](#s-risks)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| PRE | Precondition | Preconditions |
| ST | Step | Migration steps |
| VAL | Validation | Validation |
| RB | Rollback step | Rollback |
| COM | Communication | Communication |
| RS | Risk | Risks |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

{{Systems, environments, and data covered by the migration.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-current-state"></a>
## Current state

{{Current architecture, data location, and known constraints.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-target-state"></a>
## Target state

{{Target architecture, data location, and acceptance criteria.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-preconditions"></a>
## Preconditions

- <a id="pre1"></a>**PRE1 — {{Title}}.** {{Required access, backup, approval, or state}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-migration-steps"></a>
## Migration steps

- <a id="st1"></a>**ST1 — {{Action}}.** {{Detail}}.
  - Owner: {{OWNER}}
  - Window: {{YYYY-MM-DD HH:MM}}
  - Expected: {{result}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-validation"></a>
## Validation

- <a id="val1"></a>**VAL1 — {{Check}}.** {{Detail}}.
  - Expected: {{result}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-rollback"></a>
## Rollback

- <a id="rb1"></a>**RB1 — {{Action}}.** {{Detail}}.
  - Trigger: {{condition}}
  - Expected: {{result}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-communication"></a>
## Communication

- <a id="com1"></a>**COM1 — {{Audience}}.** {{Message}}.
  - Channel: {{channel}}
  - When: {{YYYY-MM-DD HH:MM}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-risks"></a>
## Risks

- <a id="rs1"></a>**RS1 — {{Title}}.** {{Risk}}.
  - Likelihood: {{low | medium | high}}
  - Impact: {{low | medium | high}}
  - Mitigation: {{action}}

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

MP1 — One migration per plan. Link dependent migrations in `## References`.

MP2 — Describe current and target state before the steps.

MP3 — Preconditions are `PRE#` and list access, backups, approvals, or state required before starting.

MP4 — Steps are `ST#`, in execution order, with owner, window, and expected result.

MP5 — Validation checks are `VAL#` and state the expected result.

MP6 — Rollback steps are `RB#` and include the trigger and expected result.

MP7 — Communication items are `COM#` and include audience, channel, and time.

MP8 — Risks are `RS#` and include likelihood, impact, and mitigation.

MP9 — Link the migration plan from the project document.

MP10 — No automatic numbered lists and no checkboxes.
