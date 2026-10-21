# Rules

Mandatory rules for every document produced or updated with the skill. A document is compliant only if it meets all rules and the final checklist.

## Metadata

The metadata table follows the H1.

| Field | Required | Value |
| --- | --- | --- |
| Version | yes | semver, for example `1.2.0` |
| Date | yes | ISO 8601, for example `2026-10-21` |
| Status | yes | `draft`, `active`, `archived` |
| Owner | no | responsible person or team |
| Template | no | path of the applied template, or `—` |
| Parent | no | link to the parent document, or `—` |

If the template uses YAML frontmatter, keep it and map the same fields. Do not duplicate the same data in frontmatter and table.

## Abstract

- `## Abstract` follows the metadata and precedes the index.
- At most 30 words, 1–2 lines.
- States what the document is and who it is for.
- Contains no history, rationale, acknowledgements, or filler.

Example:

```markdown
## Abstract

Conventions for writing technical documents that are traceable, linked, and easy to update.
```

## Anchors

### Top anchor

`<a id="top"></a>` is the first line of the document, before the H1.

### Section anchor

Every H2 has an explicit anchor on the preceding line:

```markdown
<a id="s-context"></a>
## Context
```

Rules:

- Lowercase ASCII slug, words separated by hyphens.
- Stable slug: it does not change when the title changes.
- Do not reuse the same slug for different content.
- H3 headings do not require an anchor unless linked directly.
- Auto-generated heading anchors are not sufficient.

### Item anchor

An item cited or linked internally has an inline anchor:

```markdown
- <a id="rf1"></a>**RF1 — RFC 6749.** [OAuth 2.0](https://www.rfc-editor.org/rfc/rfc6749)
```

The anchor is lowercase (`rf1`), the visible ID is uppercase (`RF1`). The inline anchor does not split the list.

### Index

`## Index` lists every H2 in the document, in order. Each entry is a link to the section anchor.

```markdown
<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Context](#s-context)
- [Decisions made](#s-decisions-made)
- [Change history](#s-change-history)
```

### Navigation

Every H2 ends with a navigation line:

```markdown
[↑ Back to top](#top) · [← Back](#s-index)
```

Rules:

- If `Parent` is set, the back link points to the parent.
- If `Parent` is not set, the back link points to `#s-index`.
- The Index is the exception: it ends with `[↑ Back to top](#top)` and adds the back link only if a parent exists.
- The last section ends with the same line. No separate footer is needed.
- The line stays on one line.

## Semantic lists

### Prohibitions

- No automatic numbered lists (`1.`, `2.`, `3.`).
- No unlabeled bullets for items that can be cited, updated, or closed.
- No checkboxes `- [ ]` or `- [x]`. Status is a field or struck-through text.

### Format

```markdown
- **DP1 — Title.** Decision text.
- **DA1 — Title.** Open decision text.
- **DF1 — Title.** Action text.
- **RF1 — Title.** [Link](#s-references).
- **V1 — Title.** Constraint text.
```

Rules:

- Stable IDs, never reused or renumbered.
- Progressive numbering per prefix.
- The title is short; the text follows on the same line or in sub-bullets.
- Sub-fields use non-numbered, non-referenced bullets: `- Status:`, `- Owner:`, `- Due date:`, `- Ref.:`.
- Plain bullets are allowed only for non-referenced lists, for example examples or details. They do not mix with ID items in the same list. Index lists and status sub-fields are excluded.

### Legend

Every prefix used appears in `## Legend`:

| Prefix | Meaning | Scope |
| --- | --- | --- |
| DP | Decision made | Decisions made |
| DA | Open decision | Open decisions |
| DF | To do | Open decisions, To do |
| RF | Reference | References |
| V | Constraint | Constraints |

Domain-specific prefixes are allowed if declared in the legend, for example `OB` for objective, `RQ` for requirement, `RS` for risk.

### List exception

The exception is valid only if the user explicitly requests it. It must be recorded in `## Constraints`:

```markdown
- <a id="v3"></a>**V3 — Exception: automatic numbered list requested by Anna on 2026-10-21; valid only in the "Procedure" section.**
```

The exception does not extend to other sections or files. If the requester is unknown, use `requester not specified`.

### Closing and striking through

When an item is closed, it is not deleted or moved.

Closed open decision:

```markdown
- <a id="da2"></a>~~**DA2 — Client migration order.**~~ → [DP4](#dp4) (2026-10-18).
```

Completed action:

```markdown
- ~~**DF2 — Write the rollback plan.**~~ (done 2026-10-02, [DP2](#dp2)).
```

Cancelled action:

```markdown
- ~~**DF3 — Test the legacy provider.**~~ (cancelled 2026-10-21, [DA3](#da3)).
```

Rules:

- A checked-off item, meaning closed or completed, is struck through. Striking through is the only way to show it is no longer active.
- Closing a DA produces a DP.
- The DA stays struck through with a link to the DP.
- Closed DAs and DFs are struck through with `~~...~~`.
- DPs are not struck through. If a DP is superseded, add `Superseded by [DP5](#dp5).`
- Every closure adds a history row.

## Change history

`## Change history` is the last section of the document.

```markdown
<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.2.0 | 2026-10-21 | M. Bianchi | Closed DA2 with DP4; updated DF1 and RF4. |
| 1.1.0 | 2026-10-10 | M. Bianchi | Added DP3, RF2, and DF3. |
| 1.0.0 | 2026-09-12 | M. Bianchi | Initial version. |
```

Rules:

- Reverse chronological: the most recent change is the first row.
- ISO 8601 date. If multiple changes occur on the same day, add the time (`2026-10-21 14:30`) and order newest first.
- Every change adds a row. Existing rows are not rewritten or deleted.
- A correction is a new row with a patch bump.
- The version in the metadata matches the first row.
- In a project document, history is also the file chronology: it answers "what happened to this file".
- The author is whoever made the change. If unknown, use `n/a`.

Versioning:

- Major: restructuring or meaning change.
- Minor: new section, new decision, new content.
- Patch: correction, clarification, link update.

## Constraints

`## Constraints` is always present, even without exceptions.

It contains:

- Exceptions requested by the user.
- Conflicts with a template or directory.
- Active custom rules that change the output.
- Deviations from presets.
- Known limitations of the document.

Format:

```markdown
- <a id="v1"></a>**V1 — On-premise OIDC provider.** Authentication data does not leave the corporate network. Source: security requirement.
```

If there are no constraints:

```markdown
No constraints.
```

Do not use `## Constraints` for generic notes or to repeat rules already followed.

## Links and references

- Use Markdown links, not bare paths.
- Internal links: `[text](#s-section)` or `[text](#item-id)`.
- File links: `[text](./path/file.md#s-section)`.
- External links: `[text](https://example.com/document)`.
- Link text describes the destination. Avoid "click here".
- Verify that the target exists. Do not invent files or URLs.
- A DP with references lists them in `Ref.:`.
- The `## References` section collects `RF#` items; every item is a link.
- If a reference is internal to the document, the `RF#` item has an inline anchor.

Example:

```markdown
- <a id="dp1"></a>**DP1 — Adopt OIDC.** Date: 2026-09-12. Ref.: [RF1](#rf1), [RF2](#rf2).

- <a id="rf1"></a>**RF1 — RFC 6749 (OAuth 2.0).** [rfc-editor.org/rfc/rfc6749](https://www.rfc-editor.org/rfc/rfc6749)
```

## Templates and directories

Before creating a document or a template:

- **TP1 — Determine the template. If it cannot be inferred from the request, the target directory, or an existing file, ask the user which template to use. Offer the built-in templates (`templates/document.md`, `templates/project.md`) and any custom template paths. Ask explicitly, for example: "Which template should I use: generic, project, or a custom path?" Do not choose silently.**
- **TP2 — If the user specifies a template or directory, read the template, the `README.md`, any guidelines (`AGENTS.md`, `CONTRIBUTING.md`, `STYLE.md`), and a representative existing document.**
- **TP3 — Apply the local file name, location, frontmatter, language, and style.**
- **TP4 — Keep template sections that are compatible with the core rules.**
- **TP5 — Add missing mandatory sections in the correct position.**
- **TP6 — Fill every placeholder. Do not leave `{{...}}`, `TODO`, or example text.**
- **TP7 — Record `Template` in the metadata and every conflict in `## Constraints`.**
- **TP8 — If the directory has an index, add the new document link.**

Templates cannot remove the abstract, anchors, navigation, history, semantic lists, or constraints. On conflict, the core rule wins; the exception must be recorded.

If the file name is not specified, use kebab-case derived from the title. If no template is specified or inferable, ask the user before proceeding; do not impose one. Use `templates/` only after the user chooses or confirms a built-in template.

## Updates

Before modifying an existing document:

- **UP1 — Read the whole document.**
- **UP2 — Keep IDs, anchors, history, and local conventions.**
- **UP3 — Assign new IDs with the next number.**
- **UP4 — Do not renumber or reorder existing items.**
- **UP5 — Bump the version according to the type of change.**
- **UP6 — Add the history row at the top.**
- **UP7 — Update `Date` in the metadata.**
- **UP8 — Strike through closed items; do not delete them.**
- **UP9 — Update the index if you add or rename sections.**
- **UP10 — Update links if you move an anchor or a file.**

## Validation

A document is ready only if every answer is yes:

- The abstract is present and does not exceed 30 words.
- `<a id="top"></a>` is the first line.
- Every H2 has the `s-<slug>` anchor.
- Every linked item has an inline anchor.
- The index links every H2.
- Every H2 has the navigation line.
- No automatic numbered lists exist.
- Every citable item has a semantic ID.
- The legend covers every prefix used.
- `## Constraints` is present.
- Exceptions have a date, requester, and scope.
- History is reverse-chronological and the version matches the first row.
- Project documents have DP, DA, DF, the `---` separator, references as links, and closed items struck through.
- The template was applied and conflicts are recorded.
- There are no placeholders, dead links, duplicate IDs, or duplicate anchors.
