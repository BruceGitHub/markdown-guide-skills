# Presets

Presets add rules for a document type. Core rules stay active. A preset cannot remove the abstract, anchors, history, semantic lists, or constraints.

| ID | File | Version | Status | Applies to | Requires |
| --- | --- | --- | --- | --- | --- |
| project | [project.md](./project.md) | 1.0.0 | active | project, plan, specification, architecture, decision | — |
| meeting-notes | [meeting-notes.md](./meeting-notes.md) | 1.0.0 | active | meeting, minutes | — |

## Selection

- Load presets whose `applies-to` matches the document type.
- If the user names a preset, load it even if the type does not match.
- Load presets listed in `requires` first.
- Ignore presets with `status: disabled`.
- If two presets overlap, apply both and record the conflict in `## Constraints`.

## Adding a preset

Read `references/extension.md`. Add a row to this table, bump the preset version, and update `CHANGELOG.md`.
