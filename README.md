# Markdown Guide

Reusable OpenCode skill for creating and maintaining Markdown documents with a consistent structure: a short abstract, explicit anchors and navigation, reverse-chronological change history, semantic IDs, and extensible presets.

## Install

Copy only the skill folder into an OpenCode skill source:

```bash
mkdir -p ~/.config/opencode/skills/markdown-guide
rsync -a skills/markdown-guide/ ~/.config/opencode/skills/markdown-guide/
```

Alternatively, add the parent directory to the `skills` array in `opencode.json`:

```jsonc
{
  "skills": ["./skills"]
}
```

### Install with a skills CLI

Install directly from GitHub:

```bash
npx skills add BruceGitHub/markdown-guide-skills
```

List the discovered skill without installing:

```bash
npx skills add BruceGitHub/markdown-guide-skills --list
```

Install for a specific agent:

```bash
npx skills add BruceGitHub/markdown-guide-skills -a opencode
```

Add `-g` for a user-level installation. The CLI installs the skill as `markdown-guide`.

If your GitHub CLI includes the skills command:

```bash
gh skill install BruceGitHub/markdown-guide-skills skills/markdown-guide/SKILL.md
```

The CLI installs only `skills/markdown-guide/`. Tests, Changesets, and development scripts stay in the repository.

### Update

Update an installed copy:

```bash
npx skills update "Markdown Guide" -y
```

Use `-g` for a global installation or `-p` for a project installation.

### Manual activation

This skill is manual-only: it is installed but not advertised for automatic selection.

- OpenCode: mention `@markdown-guide` or pick it from `/skills`.
- Claude Code and Cursor: invoke `/markdown-guide`.
- Codex: invoke `$markdown-guide`; automatic invocation is controlled by `policy.allow_implicit_invocation: false` in `agents/openai.yaml`.

The behavior is set by `metadata.opencode/autoinvoke: false` and `disable-model-invocation: true` in `skills/markdown-guide/SKILL.md`.

### Agent compatibility

The repository follows the Agent Skills layout: a folder with `SKILL.md` plus supporting files.

| Agent | Support | Notes |
| --- | --- | --- |
| OpenCode | Native | Discovers `SKILL.md`; manual activation via `metadata.opencode/autoinvoke: false`. |
| Claude Code | Supported | Reads `SKILL.md` and honors `disable-model-invocation`. |
| Cursor | Supported | Reads `SKILL.md` and honors `disable-model-invocation`. |
| Codex | Partial | Reads `SKILL.md`; manual-only needs `agents/openai.yaml` policy. |
| Other Agent Skills hosts | Check | Verify `SKILL.md` discovery and supporting-file access. |

To see which agents the CLI detects, run `npx skills add BruceGitHub/markdown-guide-skills` without `-a`; it prompts with the detected agents. Check the agent documentation for `SKILL.md` support before relying on automatic or manual invocation.

## Commands

`/presets [query]` lists or searches the built-in presets.

- `/presets` — list every preset.
- `/presets adr` — find presets matching `adr`.
- `/presets incident` — find presets matching `incident`.

Both list and search return a Markdown table with ID, status, applies-to, and purpose.

`/update-markdown-guide` updates an installed copy with `npx skills update "Markdown Guide" -y`.

`/create-template <directory> <purpose>` creates a reusable custom template in the target directory, following the structure of the built-in templates:

```text
/create-template ./templates incident review
/create-template ./docs/templates api endpoint
```

From a terminal:

```bash
npm run presets
npm run presets -- ui
```

The commands work when this repository is the active OpenCode project. To use them elsewhere, copy `.opencode/commands/*.md` to `~/.config/opencode/commands/`. Installed copies include `scripts/list-presets.mjs` inside the skill directory for the same search.

## Motivation

Markdown is portable as a file format, but not as a document convention. Teams, repositories, and tools use different structures for metadata, navigation, decisions, and history. This skill defines a known and defined schema for those conventions. With that schema, a Markdown document can be validated, parsed, and moved from one place to another without losing context, links, or traceability.

## Contents

| Path | Purpose |
| --- | --- |
| `skills/markdown-guide/SKILL.md` | Skill entry point and mandatory rules |
| `skills/markdown-guide/references/` | Detailed rules, style, and extension guide |
| `skills/markdown-guide/presets/` | Preset registry and built-in presets |
| `skills/markdown-guide/custom/` | User rules and custom preset example |
| `skills/markdown-guide/templates/` | Generic and project skeletons |
| `skills/markdown-guide/examples/` | Complete example documents |
| `skills/markdown-guide/scripts/list-presets.mjs` | Preset list and search script shipped with the skill |
| `.changeset/` | Changesets configuration and pending changesets |
| `.opencode/commands/presets.md` | `/presets` command to list and search presets |
| `.opencode/commands/create-template.md` | `/create-template` command to create a custom template |
| `.opencode/commands/update-skill.md` | `/update-markdown-guide` command to update the installed skill |
| `scripts/sync-skill-version.mjs` | Development script that syncs the package version |
| `tests/` | Tests for the skill scripts |
| `CHANGELOG.md` | Skill version history |

## Core rules

- Metadata is a compact two-row table.
- Every document opens with a short abstract of at most 30 words.
- Every H2 has an explicit `s-<slug>` anchor.
- Every section links back to the top and to the parent or index.
- Change history is reverse-chronological and versioned with semver.
- Citable items use semantic IDs defined by the selected preset.
- Automatic numbered lists and checkboxes are forbidden.
- Exceptions are recorded in `## Constraints` with date, requester, and scope.
- `## Constraints` is always present, even when empty.
- Closed items are struck through and kept in the document.

## Presets and customization

Built-in presets:

| Preset | Use |
| --- | --- |
| `project` | Project plans, specifications, architecture notes, and decision logs. |
| `development-plan` | Track phases, open questions, decisions, tasks, new items, and progress. |
| `meeting-notes` | Decisions and actions from a meeting. |
| `adr` | One architecture decision with consequences and alternatives. |
| `rfc` | Design proposal with requirements, open questions, and decisions. |
| `technical-design` | Technical design with architecture, components, interfaces, risks, and rollout. |
| `prd` | Product problem, goals, requirements, and metrics. |
| `code-review` | Pull request or diff review with verdict, findings, tests, and actions. |
| `acceptance-criteria` | Testable CDA as Gherkin scenarios with traceability and tests. |
| `test-plan` | Strategy, environments, test cases, criteria, risks, and results. |
| `glossary` | Stable terms, definitions, aliases, and references. |
| `topic-index` | Topic catalog organized by category, status, owner, and update date. |
| `stitch-design` | Google Stitch DESIGN.md design system with YAML tokens and design rationale. |
| `api-spec` | API contract with endpoints, schemas, errors, and examples. |
| `bug-report` | Reproducible defect with environment, triage, and evidence. |
| `post-mortem` | Incident review with timeline, causes, and actions. |
| `incident` | Active or recent incident with severity, timeline, mitigation, and communication. |
| `runbook` | Operational procedure with verification, rollback, and escalation. |
| `migration-plan` | Migration or cutover with validation, rollback, and communication. |
| `release-notes` | Release highlights, breaking changes, features, fixes, and upgrades. |
| `changelog` | Ongoing versioned log following Keep a Changelog and SemVer. |
| `threat-model` | Assets, trust boundaries, threats, mitigations, and residual risks. |
| `risk-register` | Risks with likelihood, impact, owner, mitigation, and status. |
| `checklist` | Repeatable checks with owners, expected results, and exceptions. |
| `todo-list` | Open tasks with owner, priority, due date, and completed items. |

Choose the narrowest preset. A specific preset such as `adr` takes precedence over `project` for the same document.

To add a preset, create `skills/markdown-guide/presets/<id>.md` with the documented frontmatter, add a row to `skills/markdown-guide/presets/index.md`, and add a changeset with `npm run changeset`.

User customizations:

- `skills/markdown-guide/custom/rules.md` for user rules.
- `skills/markdown-guide/custom/presets/<id>.md` for user presets.

Precedence on conflict: mandatory core, explicit user instruction, template, custom rules, presets, skill defaults. Every deviation from the core is recorded in the generated document.

## Templates and examples

Use `skills/markdown-guide/templates/document.md` as the generic skeleton, `skills/markdown-guide/templates/code-review.md` for a review, `skills/markdown-guide/templates/acceptance-criteria.md` for Gherkin acceptance criteria, and `skills/markdown-guide/templates/{test-plan,risk-register,technical-design,development-plan,topic-index}.md` for planning and indexing. Each preset also contains its own mandatory structure block, which can be used as the template for that document type. `skills/markdown-guide/examples/` contains complete, reusable references.

To create a custom template, use `/create-template <directory> <purpose>`. The command reads the built-in templates and presets, asks for missing details, and writes a reusable template with the same structure and placeholders.

Before creating a document, the skill determines the template. If it cannot infer one from the request, the target directory, or an existing file, it asks the user which template to use instead of choosing silently.

## Versioning

This repository uses [Changesets](https://github.com/changesets/changesets).

Run `npm install` once, then:

- `npm run changeset` — create a changeset for a user-visible change.
- `npm run version` — apply version bumps, update `CHANGELOG.md`, and sync the version in `skills/markdown-guide/SKILL.md`, `README.md`, and `package-lock.json`.
- `npm run release` — create release tags from the current versions.

Commit the generated changeset files. Do not edit `CHANGELOG.md` or the version fields by hand.

## Lightweight by design

Only `skills/markdown-guide/` is installed. Tests, Changesets, package metadata, and the version sync script stay at the repository root. This keeps the installed skill small and avoids downloading development tooling.

## Repository notes

- The skill is written in English.
- `skills/markdown-guide/SKILL.md` is the agent entry point; `skills/markdown-guide/references/` contains the detailed rules.
- Service files (`skills/markdown-guide/SKILL.md`, `skills/markdown-guide/references/`, `skills/markdown-guide/presets/`, `skills/markdown-guide/custom/`, `skills/markdown-guide/templates/`, `skills/markdown-guide/scripts/`, `.changeset/`, `.opencode/commands/`, `scripts/`, `tests/`, `package.json`, `package-lock.json`, `README.md`, `CHANGELOG.md`) are exempt from the document rules.
- `skills/markdown-guide/examples/` contains complete documents that follow the rules.
- `markdown-guide-skills/` is a legacy nested repository and is ignored by `.gitignore`.
- Commit and push are performed by the repository owner because the OpenCode configuration denies `git commit` and `git push` to the agent.

## Version

Current version: 1.9.0. See `CHANGELOG.md`.
