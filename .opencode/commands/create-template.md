---
description: Create a custom Markdown template in a target directory
---

Create a custom, reusable Markdown template for the Markdown Guide skill.

Arguments: $ARGUMENTS

Steps:

1. Extract the target directory and the template purpose from the arguments. If either is missing, ask before writing.
2. If the target directory does not exist, ask whether to create it.
3. Read `skills/markdown-guide/templates/document.md`, `skills/markdown-guide/templates/project.md`, `skills/markdown-guide/references/rules.md`, and `skills/markdown-guide/references/style.md`. If the target directory has a `README.md` or existing templates, read those too.
4. If the user named a preset or base template, read it. If not, ask which base to use: generic document, project, or a specific preset.
5. Generate a reusable template, not a filled document. Use placeholders such as `{{TITLE}}`, `{{OWNER}}`, `{{YYYY-MM-DD}}`, and `{{LINK_PARENT}}`.
6. Follow the skill structure: compact metadata table, Abstract, Index, Legend, content sections, Constraints, Change history, semantic IDs, explicit `s-<slug>` anchors, and navigation lines.
7. Add a short HTML comment at the top with usage instructions, as in the existing templates.
8. Use the indicated directory and a kebab-case `.md` filename. Do not overwrite an existing file without confirmation.
9. Validate: every H2 has an anchor, the index links every H2, every section has navigation, semantic IDs are declared in the legend, no automatic numbered lists, and only the intended placeholders remain.
10. Report the file path and the base template or preset used.
