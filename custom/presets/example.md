---
id: example
version: "0.1.0"
status: disabled
applies-to: [example]
requires: []
---

# Preset: Example

Example preset for the user. Copy the file to `custom/presets/<id>.md`, change `id`, `applies-to`, and set `status: active`.

## Rules

ER1 — The preset only adds rules compatible with the core.

ER2 — Specific sections have an `s-<slug>` anchor and a navigation line.

ER3 — Prefixes used are declared in the document legend.

ER4 — If the preset replaces a built-in preset, declare `override: <id>` in the frontmatter and record the choice in `## Constraints`.
