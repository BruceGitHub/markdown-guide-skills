# Presets

Presets add rules for a document type. Core rules stay active. A preset cannot remove the abstract, anchors, history, semantic lists, or constraints.

| ID | File | Version | Status | Applies to | Requires |
| --- | --- | --- | --- | --- | --- |
| project | [project.md](./project.md) | 1.0.0 | active | project, plan, specification, architecture, decision | — |
| meeting-notes | [meeting-notes.md](./meeting-notes.md) | 1.0.0 | active | meeting, minutes | — |
| adr | [adr.md](./adr.md) | 1.0.0 | active | adr, architecture decision, decision record | — |
| rfc | [rfc.md](./rfc.md) | 1.0.0 | active | rfc, proposal, design proposal | — |
| prd | [prd.md](./prd.md) | 1.0.0 | active | prd, product requirements, requirements | — |
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
| checklist | [checklist.md](./checklist.md) | 1.0.0 | active | checklist, verification, operations | — |

## Selection

- Load presets whose `applies-to` matches the document type.
- If the user names a preset, load it even if the type does not match.
- Load presets listed in `requires` first.
- Ignore presets with `status: disabled`.
- If two presets overlap, apply both and record the conflict in `## Constraints`.
- Prefer the narrowest preset. Use `project` only when no more specific preset fits.

## Adding a preset

Read `references/extension.md`. Add a row to this table, bump the preset version, and update `CHANGELOG.md`.
