# Presets

Presets add rules for a document type. Core rules stay active. A preset cannot remove the abstract, anchors, history, semantic lists, or constraints.

| ID | File | Version | Status | Applies to | Requires |
| --- | --- | --- | --- | --- | --- |
| project | [project.md](./project.md) | 1.0.0 | active | project, plan, specification, architecture, decision | — |
| development-plan | [development-plan.md](./development-plan.md) | 1.0.0 | active | development plan, dev plan, implementation plan, delivery plan, tracking | — |
| meeting-notes | [meeting-notes.md](./meeting-notes.md) | 1.0.0 | active | meeting, minutes | — |
| adr | [adr.md](./adr.md) | 1.0.0 | active | adr, architecture decision, decision record | — |
| rfc | [rfc.md](./rfc.md) | 1.0.0 | active | rfc, proposal, design proposal | — |
| technical-design | [technical-design.md](./technical-design.md) | 1.0.0 | active | technical design, design doc, architecture design | — |
| prd | [prd.md](./prd.md) | 1.0.0 | active | prd, product requirements, requirements | — |
| code-review | [code-review.md](./code-review.md) | 1.0.0 | active | code review, pull request review, pr review, diff review | — |
| acceptance-criteria | [acceptance-criteria.md](./acceptance-criteria.md) | 1.0.0 | active | cda, criteri di accettazione, acceptance criteria, gherkin, bdd | — |
| test-plan | [test-plan.md](./test-plan.md) | 1.0.0 | active | test plan, test strategy, qa plan, verification plan | — |
| glossary | [glossary.md](./glossary.md) | 1.0.0 | active | glossary, terminology, terms, dictionary | — |
| topic-index | [topic-index.md](./topic-index.md) | 1.0.0 | active | index, topic index, documentation index, content index | — |
| stitch-design | [stitch-design.md](./stitch-design.md) | 1.0.0 | active | design system, design.md, stitch, ui design | — |
| api-spec | [api-spec.md](./api-spec.md) | 1.0.0 | active | api, api spec, endpoint, contract | — |
| bug-report | [bug-report.md](./bug-report.md) | 1.0.0 | active | bug, bug report, defect | — |
| post-mortem | [post-mortem.md](./post-mortem.md) | 1.0.0 | active | post-mortem, incident review, outage review | — |
| incident | [incident.md](./incident.md) | 1.0.0 | active | incident, outage, sev, incident report | — |
| runbook | [runbook.md](./runbook.md) | 1.0.0 | active | runbook, operations, procedure, playbook | — |
| migration-plan | [migration-plan.md](./migration-plan.md) | 1.0.0 | active | migration, cutover, rollout | — |
| release-notes | [release-notes.md](./release-notes.md) | 1.0.0 | active | release, release notes | — |
| changelog | [changelog.md](./changelog.md) | 1.0.0 | active | changelog, release history, version history | — |
| threat-model | [threat-model.md](./threat-model.md) | 1.0.0 | active | threat model, security, risk assessment | — |
| risk-register | [risk-register.md](./risk-register.md) | 1.0.0 | active | risk register, risk log, risk management | — |
| checklist | [checklist.md](./checklist.md) | 1.0.0 | active | checklist, verification, operations | — |
| todo-list | [todo-list.md](./todo-list.md) | 1.0.0 | active | todo, todo list, tasks, task list | — |

## Selection

- Load presets whose `applies-to` matches the document type.
- If the user names a preset, load it even if the type does not match.
- Load presets listed in `requires` first.
- Ignore presets with `status: disabled`.
- If two presets overlap, apply both and record the conflict in `## Constraints`.
- Prefer the narrowest preset. Use `project` only when no more specific preset fits.

## Adding a preset

Read `references/extension.md`. Add a row to this table, bump the preset version, and add a changeset in the skill repository.
