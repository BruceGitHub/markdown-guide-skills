# Style

Writing rules for documents produced with the skill.

## Language

- Use the language of the request.
- If the language is not specified, use English.
- Keep the same language in titles, tables, links, and history.
- Do not mix languages without a reason. Technical terms may stay in English.

## Tone

- Minimal and precise.
- Short sentences, one idea per sentence.
- Active voice.
- Imperative for instructions.
- No promotional adjectives.
- No emoji.
- No decorative emphasis: bold is for IDs and titles, not for stressing words.
- No ALL CAPS for emphasis.
- No apologies, acknowledgements, or filler.

## Precision

- Every statement must be verifiable.
- Distinguish facts, decisions, and assumptions.
- Do not use "etc.", "various", or "some" when you can list the items.
- Define acronyms at first use.
- Use ISO 8601 dates (`2026-10-21`).
- Use explicit numbers and units (`30 days`, `512 MB`).
- Use the same term for the same concept.
- Do not duplicate information: link the source.

## Markdown formatting

- One H1 per document.
- ATX headings (`#`, `##`, `###`).
- One blank line before and after blocks, tables, and code fences.
- Code fences with a language (` ```bash `, ` ```json `).
- Tables for structured data, not prose.
- Relative links for internal files.
- HTML only for anchors.
- No trailing spaces.
- No multiple blank lines.

## Structure

- Abstract first.
- Index after the abstract.
- Content from general to specific.
- Decisions and actions before operational details.
- History at the end.
- Sections short and single-purpose.

## Versioning

- Semver: `major.minor.patch`.
- Major for restructuring or meaning change.
- Minor for a new section, decision, or content.
- Patch for corrections, clarifications, or link updates.
- The version is in the metadata and in the first history row.
- Do not put the version in the file name.

## Avoid

| Avoid | Use |
| --- | --- |
| "In order to perform the validation" | "To validate" |
| "It is important to note that" | "Note:" or delete |
| "As everyone knows" | Delete |
| "About", "roughly" when the value is known | The exact value |
| "Click here" | The destination name |
| Automatic numbered lists | Semantic IDs (`DP1`, `DA1`, `DF1`) |
| `- [ ]` checklists | `Status: to do` or struck-through text |
| Status emoji | `Status: active` |
