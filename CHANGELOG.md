# Changelog

Changes to the skill, newest first.

## 1.4.0 — 2026-10-22

- Added `changelog` preset following Keep a Changelog and Semantic Versioning.
- Added `bug-report` preset.
- Added `incident` preset.
- Updated the preset registry and extension guide.
- Removed project-specific details from the README; `project` is one preset among many.

## 1.3.0 — 2026-10-22

- Added presets: `adr`, `rfc`, `prd`, `api-spec`, `post-mortem`, `runbook`, `migration-plan`, `release-notes`, `threat-model`, `checklist`.
- Updated the preset registry and extension guide.
- Added the motivation for a known, defined schema that makes Markdown documents transportable.

## 1.2.0 — 2026-10-22

- Added `README.md` with usage, structure, installation, and maintenance notes.
- Require asking the user which template to use when the template cannot be inferred.
- Use a compact two-row metadata table as the document header.
- Do not repeat `Status: open` in `## Open decisions`; the section already defines the state.

## 1.0.0 — 2026-10-21

- Initial version.
- Core rules: abstract, anchors and navigation, reverse-chronological change history, semantic lists, metadata, constraints.
- `project` preset with DP, DA, DF, `---` separator, references as links, and closed items struck through.
- `meeting-notes` preset as an extension example.
- Custom rules in `custom/rules.md`.
- Custom preset example in `custom/presets/example.md`.
- Generic and project templates.
- Generic and project examples.
