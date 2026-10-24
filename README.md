# Markdown Guide

Reusable OpenCode skill for creating and maintaining Markdown documents with a consistent structure: a short abstract, explicit anchors and navigation, reverse-chronological change history, semantic IDs, and extensible presets.

## Motivation

Markdown is portable as a file format, but not as a document convention. Teams, repositories, and tools use different structures for metadata, navigation, decisions, and history. This skill defines a known and defined schema for those conventions. With that schema, a Markdown document can be validated, parsed, and moved from one place to another without losing context, links, or traceability.

## Contents

| Path | Purpose |
| --- | --- |
| `SKILL.md` | Entry point and mandatory rules |
| `references/rules.md` | Detailed rules for structure, anchors, lists, history, and constraints |
| `references/style.md` | Minimal, precise writing style |
| `references/extension.md` | Presets, custom rules, templates, and precedence |
| `presets/index.md` | Preset registry |
| `presets/*.md` | Built-in document presets |
| `custom/rules.md` | User rules, disabled by default |
| `custom/presets/` | User preset examples |
| `templates/` | Generic and project skeletons |
| `examples/` | Complete example documents |
| `.changeset/` | Changesets configuration and pending changesets |
| `scripts/sync-skill-version.mjs` | Syncs the package version to `SKILL.md` and `README.md` |
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
| `meeting-notes` | Decisions and actions from a meeting. |
| `adr` | One architecture decision with consequences and alternatives. |
| `rfc` | Design proposal with requirements, open questions, and decisions. |
| `prd` | Product problem, goals, requirements, and metrics. |
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
| `checklist` | Repeatable checks with owners, expected results, and exceptions. |

Choose the narrowest preset. A specific preset such as `adr` takes precedence over `project` for the same document.

To add a preset, create `presets/<id>.md` with the documented frontmatter, add a row to `presets/index.md`, and update `CHANGELOG.md`.

User customizations:

- `custom/rules.md` for user rules.
- `custom/presets/<id>.md` for user presets.

Precedence on conflict: mandatory core, explicit user instruction, template, custom rules, presets, skill defaults. Every deviation from the core is recorded in the generated document.

## Templates and examples

Use `templates/document.md` as the generic skeleton. Each preset also contains its own mandatory structure block, which can be used as the template for that document type. `examples/` contains complete, reusable references.

Before creating a document, the skill determines the template. If it cannot infer one from the request, the target directory, or an existing file, it asks the user which template to use instead of choosing silently.

## Install

Copy the skill files into an OpenCode skill source, excluding Git metadata:

```bash
mkdir -p ~/.config/opencode/skills/markdown-guide
rsync -a --exclude '.git' --exclude 'markdown-guide-skills' ./ ~/.config/opencode/skills/markdown-guide/
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
gh skill install BruceGitHub/markdown-guide-skills SKILL.md
```

### Manual activation

This skill is manual-only: it is installed but not advertised for automatic selection.

- OpenCode: mention `@markdown-guide` or pick it from `/skills`.
- Claude Code and Cursor: invoke `/markdown-guide`.
- Codex: invoke `$markdown-guide`; automatic invocation is controlled by `policy.allow_implicit_invocation: false` in `agents/openai.yaml`.

The behavior is set by `metadata.opencode/autoinvoke: false` and `disable-model-invocation: true` in `SKILL.md`.

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

## Versioning

This repository uses [Changesets](https://github.com/changesets/changesets).

Run `npm install` once, then:

- `npm run changeset` — create a changeset for a user-visible change.
- `npm run version` — apply version bumps, update `CHANGELOG.md`, and sync the version in `SKILL.md`, `README.md`, and `package-lock.json`.
- `npm run release` — create release tags from the current versions.

Commit the generated changeset files. Do not edit `CHANGELOG.md` or the version fields by hand.

## Repository notes

- The skill is written in English.
- `SKILL.md` is the agent entry point; `references/` contains the detailed rules.
- Service files (`SKILL.md`, `README.md`, `CHANGELOG.md`, `package.json`, `package-lock.json`, `.changeset/`, `scripts/`, `references/`, `presets/`, `custom/`, `templates/`) are exempt from the document rules.
- `examples/` contains complete documents that follow the rules.
- `markdown-guide-skills/` is a legacy nested repository and is ignored by `.gitignore`.
- Commit and push are performed by the repository owner because the OpenCode configuration denies `git commit` and `git push` to the agent.

## Version

Current version: 1.6.0. See `CHANGELOG.md`.
