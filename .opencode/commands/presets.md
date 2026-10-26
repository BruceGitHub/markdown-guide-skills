---
description: List or search the Markdown Guide presets
---

List or search the Markdown Guide presets.

Query: $ARGUMENTS

Read `skills/markdown-guide/presets/index.md` and, when a query is present, the matching preset files. Return a Markdown table with columns `ID`, `Status`, `Applies to`, and `Purpose`.

- If the query is empty, list every preset.
- If the query is present, match it against ID, applies-to, and purpose.
- Always return the same Markdown table for both list and search.
- If nothing matches, say so and suggest the closest IDs.
- Do not create a document, load a preset, or modify files. This command only lists and searches presets.
