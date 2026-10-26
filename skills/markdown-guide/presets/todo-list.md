---
id: todo-list
version: "1.0.0"
status: active
applies-to: [todo, todo list, tasks, task list]
requires: []
---

# Preset: Todo list

## Purpose

Track open tasks with owner, priority, and due date, and keep completed tasks for traceability.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/todo-list.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Task list and scope in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Tasks](#s-tasks)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| TD | Task | Tasks |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

{{Project, team, and period covered by this list.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-tasks"></a>
## Tasks

- <a id="td1"></a>**TD1 — {{Title}}.** {{Task detail}}.
  - Status: to do
  - Priority: {{high | medium | low}}
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}
  - Ref.: [RF1](#rf1)

- <a id="td2"></a>**TD2 — {{Title}}.** {{Task detail}}.
  - Status: in progress
  - Priority: {{high | medium | low}}
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}

---

### Done

- ~~**TD3 — {{Title}}.**~~ (done {{YYYY-MM-DD}}, [RF1](#rf1)).

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

TL1 — One task per item. Tasks are `TD#` and keep stable IDs.

TL2 — Use only these statuses: `to do`, `in progress`, `blocked`, `done`.

TL3 — Every task has `Priority` (`high`, `medium`, `low`), `Owner`, and `Due date`.

TL4 — Completed or cancelled tasks go under `### Done`, after `---`, struck through with the completion date and an optional reference.

TL5 — Do not renumber tasks when moving them to Done.

TL6 — No checkboxes and no automatic numbered lists.

TL7 — Link the list from the project document, meeting notes, or runbook that owns it.

TL8 — When scope changes, update `## Scope`; do not repurpose old task IDs.
