---
description: Show Markdown Guide help, commands, presets, and usage
---

Show help for the Markdown Guide skill.

Topic: $ARGUMENTS

Read `README.md` and `skills/markdown-guide/SKILL.md` when needed. Keep the answer short and practical.

Default help:

- What the skill does.
- Install and update commands.
- Commands: `/presets [query]`, `/create-template <directory> <purpose>`, `/markdown-guide-help [topic]`.
- Manual activation: `@markdown-guide` or `/skills`.
- Preset search: `/presets` or `node skills/markdown-guide/scripts/list-presets.mjs`.
- Links to `README.md` and `skills/markdown-guide/SKILL.md`.

If a topic is present:

- `presets` — explain preset categories and point to `/presets`.
- `templates` — explain `/create-template` and the `templates/` directory.
- `review` — point to `code-review` and `acceptance-criteria`.
- `install` or `update` — show install and update commands.
- `rules` — summarize the mandatory rules.
- Unknown topic — say so and show the default help.
