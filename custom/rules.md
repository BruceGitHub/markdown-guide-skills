---
status: disabled
version: "0.1.0"
scope: all
owner: —
---

# Custom rules

User-owned file. The skill does not overwrite it. To enable the rules, set `status: active`.

The rules below are examples. Enable only the ones you want and delete the rest.

## Format

- **C1 — Title.** Rule text.
- **C2 — Title.** Rule text.

Rules:

- Use stable `C#` IDs.
- A rule states what to do, not only what to avoid.
- `scope` applies to `all`, a document type, or a preset ID.
- If a rule changes the output, the document records a `V#` with `Source: C#`.
- Custom rules cannot remove the core rules.
- To disable all rules, set `status: disabled`; for a single rule, remove it.
- Increment `version` on every change.

## Examples

- **C1 — Client in metadata.** Every project document declares the client in the metadata table.
- **C2 — External link check.** External links are checked on the last modification date and the check is recorded in history.
- **C3 — File names.** File names use kebab-case and contain no dates.

## Custom presets

User presets live in `custom/presets/<id>.md`. They use the same frontmatter as built-in presets and can replace one with `override: <id>`. See `custom/presets/example.md` and `references/extension.md`.
