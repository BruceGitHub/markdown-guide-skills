# Contributing

Thanks for improving Markdown Guide.

## Requirements

- Node.js 22.20 or later
- npm
- Git

## Setup

```bash
git clone https://github.com/BruceGitHub/markdown-guide-skills.git
cd markdown-guide-skills
npm install
npm test
```

## Repository layout

| Path | Purpose |
| --- | --- |
| `skills/markdown-guide/` | The skill that is installed |
| `tests/` | Tests for the skill scripts |
| `scripts/` | Development scripts, including the root preset wrapper |
| `.changeset/` | Changesets configuration and pending changesets |
| `.opencode/commands/` | OpenCode commands |
| `README.md` | User documentation |
| `CHANGELOG.md` | Release history |

## Workflow

1. Create a branch from `main`.
2. Make the change.
3. Add or update tests.
4. Add a changeset with `npm run changeset`.
5. Run `npm test`.
6. Update the README or references when behavior changes.
7. Commit and open a pull request using the template.

## Adding a preset

1. Create `skills/markdown-guide/presets/<id>.md` with the documented frontmatter.
2. Create `skills/markdown-guide/templates/<id>.md` when the preset needs a skeleton.
3. Add a row to `skills/markdown-guide/presets/index.md`.
4. Add the preset to the ready set in `skills/markdown-guide/references/extension.md`.
5. Add it to the preset table in `README.md`.
6. Add a changeset.
7. Add an assertion to `tests/list-presets.test.mjs`.
8. Run `npm test`.

## Adding a template

- Use `/create-template` or add the file manually.
- Follow the structure of the existing templates: compact metadata, abstract, index, legend, sections, constraints, history, anchors, and navigation.
- Use placeholders such as `{{TITLE}}`, `{{OWNER}}`, `{{YYYY-MM-DD}}`, and `{{LINK_PARENT}}`.
- Update the README and add a changeset.

## Adding a command

- Add `.opencode/commands/<name>.md` with a `description` in the frontmatter and a prompt body.
- Use `$ARGUMENTS` or positional placeholders.
- Avoid shell blocks with untrusted arguments.
- Update the Commands section in `README.md` and add a changeset.

## Changesets

Use semantic versioning:

- `patch` — fixes, documentation, clarifications.
- `minor` — new preset, template, command, or rule.
- `major` — incompatible format or rule change.

Do not edit `CHANGELOG.md` or version fields by hand.

Release steps:

```bash
npm run version
git add -A
git commit -m "Version x.y.z"
npm run release
git push origin main --follow-tags
```

## Style

- Write in English.
- Keep prose minimal and precise.
- Follow `skills/markdown-guide/SKILL.md` and `references/style.md`.
- Do not include secrets, personal data, or sensitive security details.
- Keep pull requests focused.

## Skill size badge

The README shows the size of `skills/markdown-guide/`. If the skill size changes materially, update the badge:

```bash
du -sk skills/markdown-guide
```

## Pull requests

Use `.github/pull_request_template.md`. Include:

- what changed and why;
- tests run;
- the changeset;
- documentation updates;
- any compatibility or migration notes.
