# Spec to tasks

Turn a rough input — a model, a brief, a transcript — into a spec, a development plan, and a task list. The three documents can be produced in one session.

## Flow

```text
Input (model, brief, notes)
└──> Spec
     └──> Development plan
          └──> Track tasks
```

Optional: add acceptance criteria before the plan when the spec has testable behavior, and a code review after implementation.

## Bundle

A bundle is a flow that produces a set of documents in one shot. This flow bundles three:

| Document | Preset | Purpose |
| --- | --- | --- |
| Spec | [prd](../skills/markdown-guide/presets/prd.md), [technical-design](../skills/markdown-guide/presets/technical-design.md), or [rfc](../skills/markdown-guide/presets/rfc.md) | What to build and why. |
| Development plan | [development-plan](../skills/markdown-guide/presets/development-plan.md) | Phases, dependencies, open questions, decisions. |
| Track tasks | [todo-list](../skills/markdown-guide/presets/todo-list.md) | The task list to work through, called track-tasks in some projects. |

Each document links to the previous one: plan → spec, tasks → plan. Details stay in one place; the others link to it.

## Stages

| Stage | Template | Output | Ready when |
| --- | --- | --- | --- |
| Spec | [technical-design.md](../skills/markdown-guide/templates/technical-design.md), or the structure inside the preset | Problem, requirements, scope, constraints | Scope and requirements are unambiguous. |
| Development plan | [development-plan.md](../skills/markdown-guide/templates/development-plan.md) | Phases, dependencies, open questions, decisions, tasks | Phases are ordered and every open question has an owner or a next step. |
| Track tasks | The structure inside the `todo-list` preset | Actionable tasks with status | Every task has a status; optional fields appear only when known. |

## Run it in one shot

- Paste the model, brief, or notes and ask for the bundle.
- Let the agent ask only the questions needed to write the spec.
- Generate the spec, then the plan, then the tasks, in that order.
- Link the documents instead of repeating content.
- Leave out fields that are unknown: no owner, no due date, no constraint section when there is nothing to record.

## References

- [Preset registry](../skills/markdown-guide/presets/index.md)
- [Templates](../skills/markdown-guide/templates/)
- [From unstructured to structured](./structure-unstructured.md)
