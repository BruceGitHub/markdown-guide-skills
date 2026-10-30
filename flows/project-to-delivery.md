# Project to delivery

A delivery flow from project decisions to release. Each stage uses a preset and a template, and produces a document that must be ready before the next stage starts.

## Flow

```text
Project
└──> Technical design
     └──> Acceptance criteria
          └──> Test plan
               └──> Code review
                    └──> Review follow-up
                         └──> Release notes
                              └──> Changelog
```

The solid path is required. Optional branches:

- Add an RFC before the technical design when the approach is still open.
- Add an ADR before the technical design when a decision is made.
- Add an incident and a post-mortem after release when something breaks, then feed the actions back into the project.

## Stages

| Stage | Preset | Template | Output | Ready when |
| --- | --- | --- | --- | --- |
| Project | [project](../skills/markdown-guide/presets/project.md) | [project.md](../skills/markdown-guide/templates/project.md) | Scope, decisions, open questions, tasks | No blocking open decisions; decisions and tasks have owners. |
| Technical design | [technical-design](../skills/markdown-guide/presets/technical-design.md) | [technical-design.md](../skills/markdown-guide/templates/technical-design.md) | Architecture, components, interfaces, risks, rollout | The RFC or ADR is linked; interfaces, risks, and rollout are explicit. |
| Acceptance criteria | [acceptance-criteria](../skills/markdown-guide/presets/acceptance-criteria.md) | [acceptance-criteria.md](../skills/markdown-guide/templates/acceptance-criteria.md) | Testable Gherkin scenarios and traceability | Every criterion is testable and linked to a test case. |
| Test plan | [test-plan](../skills/markdown-guide/presets/test-plan.md) | [test-plan.md](../skills/markdown-guide/templates/test-plan.md) | Strategy, environments, cases, entry/exit, results | Exit criteria are met; failures and blockers have owners. |
| Code review | [code-review](../skills/markdown-guide/presets/code-review.md) | [code-review.md](../skills/markdown-guide/templates/code-review.md) | Verdict, findings, tests, decisions, actions | The verdict is approve, or requested changes are closed. |
| Review follow-up | [review-followup](../skills/markdown-guide/presets/review-followup.md) | [review-followup.md](../skills/markdown-guide/templates/review-followup.md) | Triage, decisions, fixes, verification, closure | Blocking items are resolved and verified; deferred items have an owner and a date. |
| Release notes | [release-notes](../skills/markdown-guide/presets/release-notes.md) | [release-notes.md](../skills/markdown-guide/templates/release-notes.md) | Highlights, breaking changes, features, fixes, upgrades | Notes and changelog match the release version. |
| Changelog | [changelog](../skills/markdown-guide/presets/changelog.md) | [changelog.md](../skills/markdown-guide/templates/changelog.md) | Versioned change log | The entry matches the release version. |

## Optional branches

- **RFC.** Use before the technical design when the approach is still open.
- **ADR.** Use when a decision is made; link it from the project and technical design.
- **Incident.** Use after release when an incident occurs; run incident, then post-mortem, and feed actions back to the project.

## References

- Preset registry: [presets/index.md](../skills/markdown-guide/presets/index.md)
- Templates: [templates/](../skills/markdown-guide/templates/)
- Extension guide: [references/extension.md](../skills/markdown-guide/references/extension.md)

## How to use

- Copy this flow into the project documentation.
- Replace the links with the actual project documents.
- Use the preset and template for each stage.
- Move to the next stage only when the "Ready when" condition is met.
- If a stage is skipped, record why in `## Constraints` of the project document.
- Keep the flow as an index: link details instead of duplicating them.
