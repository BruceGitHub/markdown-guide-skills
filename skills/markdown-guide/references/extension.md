# Extension

The skill is extensible without modifying its core. Customizations live in `presets/` and `custom/`.

## Levels

| Level | Location | Purpose |
| --- | --- | --- |
| Core | `SKILL.md`, `references/` | Mandatory rules, always active |
| Template | `templates/` or a user-specified path | Skeleton and local conventions |
| Preset | `presets/` | Rules for a document type |
| Custom | `custom/` | User rules and presets |
| File constraints | `## Constraints` in the document | Exceptions valid only for that file |

## Precedence

On conflict, the higher level wins:

- **L1 — Mandatory core.**
- **L2 — Explicit user instruction in the current request.**
- **L3 — Template or directory selected for the document.**
- **L4 — Custom rules.**
- **L5 — Presets.**
- **L6 — Skill defaults.**

Every exception to the core must be recorded in `## Constraints` with date, requester, and scope. A preset or custom rule cannot remove the abstract, anchors, navigation, history, semantic lists, or constraints.

## Presets

A preset is a Markdown file in `presets/` with frontmatter:

```yaml
---
id: meeting-notes
version: "1.0.0"
status: active
applies-to: [meeting, minutes]
requires: []
---
```

Fields:

| Field | Required | Value |
| --- | --- | --- |
| `id` | yes | kebab-case identifier, equal to the file name |
| `version` | yes | preset semver |
| `status` | yes | `active` or `disabled` |
| `applies-to` | yes | document types or keywords |
| `requires` | no | presets to load first |
| `override` | no | replaced preset, custom presets only |

Rules:

- A preset adds or specializes; it does not cancel the core.
- If two presets overlap, apply both and record the conflict in `## Constraints`.
- A disabled preset is ignored.
- Load presets listed in `requires` first.
- Use the narrowest preset that fits. Use `project` for project documents that do not match a more specific preset.

### Add a preset

- **EP1 — Create `presets/<id>.md` with the frontmatter.**
- **EP2 — Write rules with `PR#` IDs or with a preset prefix (`MR#` for meeting notes).**
- **EP3 — Add the row to the table in `presets/index.md`.**
- **EP4 — Add a changeset in the skill repository with `npm run changeset`.**
- **EP5 — Verify with a test document: abstract, anchors, index, legend, constraints, history.**

### Disable a preset

Set `status: disabled` in the frontmatter. Do not delete the file: it serves as documentation.

## Custom

`custom/rules.md` is the user's file. The skill does not overwrite it.

Frontmatter:

```yaml
---
status: disabled
version: "0.1.0"
scope: all
owner: —
---
```

Fields:

| Field | Required | Value |
| --- | --- | --- |
| `status` | yes | `active` or `disabled` |
| `version` | yes | custom rules semver |
| `scope` | yes | `all`, a document type, or a preset ID |
| `owner` | no | owner of the rules |

Rules:

- Stable `C#` IDs.
- Every rule states what to do, not only what to avoid.
- If a rule changes the output, the document records a `V#` with `Source: C#`.
- Custom rules cannot contradict the core.
- To disable all rules, use `status: disabled`; for a single rule, remove it.

### Add a custom rule

- **EC1 — Open `custom/rules.md`.**
- **EC2 — Add an item with a `C#` ID and the next number.**
- **EC3 — If the rule is active, set `status: active`.**
- **EC4 — If the rule changes the output, add the matching `V#` to the document.**
- **EC5 — Bump the custom rules `version`.**

### Custom presets

User presets live in `custom/presets/<id>.md` and use the same frontmatter as built-in presets. See `custom/presets/example.md`. To replace a built-in preset:

```yaml
---
id: company-project
version: "1.0.0"
status: active
applies-to: [project]
requires: []
override: project
---
```

Rules:

- `override` applies only to presets, not to the core.
- The replaced preset stays in the repository as a reference.
- Record the override in `## Constraints` of the generated document.

## Template

Templates in `templates/` are skeletons. Each preset also contains a mandatory structure block that can be used as a template for that document type. A user-specified template takes precedence over built-in templates.

Rules:

- Before creating a document or a template, determine the template.
- If the template cannot be inferred from the request, the target directory, or an existing file, ask the user which template to use. Offer the built-in templates (`templates/document.md`, `templates/project.md`) and any custom template paths. Do not choose silently.
- The template may change the order and names of compatible sections.
- Missing mandatory sections must be added.
- Placeholders must be filled or removed.
- The applied template must be recorded in the metadata.
- Conflicts must be recorded in `## Constraints`.

## Versioning the skill

- `metadata.version` in `SKILL.md` is the current version.
- `CHANGELOG.md` lists changes newest first.
- Use Changesets in the skill repository: `npm run changeset`, `npm run version`, `npm run release`.
- Choose major for an incompatible rule change.
- Choose minor for a new preset, rule, or template.
- Choose patch for corrections and clarifications.
- Every change to a preset also bumps the preset version.

## Ready set

Included presets:

- `project` — project document with DP, DA, DF, references, and history.
- `meeting-notes` — meeting notes with decisions and actions.
- `adr` — architecture decision record.
- `rfc` — design proposal with open questions and decisions.
- `prd` — product requirements with goals, requirements, and metrics.
- `stitch-design` — Google Stitch DESIGN.md design system with YAML tokens and design rationale.
- `api-spec` — API contract with endpoints, schemas, errors, and examples.
- `bug-report` — reproducible defect with environment, triage, and evidence.
- `post-mortem` — incident review with timeline, causes, and actions.
- `incident` — active or recent incident with severity, timeline, mitigation, and communication.
- `runbook` — operational procedure with verification, rollback, and escalation.
- `migration-plan` — migration or cutover with validation, rollback, and communication.
- `release-notes` — release highlights, breaking changes, features, fixes, and upgrades.
- `changelog` — ongoing versioned log following Keep a Changelog and SemVer.
- `threat-model` — assets, trust boundaries, threats, mitigations, and residual risks.
- `checklist` — repeatable checks with owners, expected results, and exceptions.

Every new preset follows the format above and does not modify the core.
