# From unstructured to structured

How to turn a free-form document into a document that follows the skill, without rewriting the content.

The examples show the core content; the preset adds metadata, abstract, anchors, and navigation.

## Steps

- Identify the document type and the matching preset.
- Extract facts, decisions, open questions, and actions from the text.
- Keep the original wording where it is clear.
- Put each fact in one place only; link instead of repeating.
- Give IDs only to items that can be cited or closed.
- Mark missing information as an open question, not as an assumption.
- Remove empty sections and unknown fields; add them later when they have a value.

## Example: meeting notes

Before:

```text
Call with Anna and Marco. We'll go with OIDC. Marco checks the provider by Friday.
Open: do we need MFA at launch? Next review Tuesday.
```

After:

```markdown
# Meeting — Auth provider

## Decisions

- **DP1 — Adopt OIDC.** Chosen over the current session cookies.

## Open decisions

- **DA1 — MFA at launch.** Decide before the release date.

## Actions

- **DF1 — Check the OIDC provider.** Owner: Marco. Due: 2026-11-06.

## Next meeting

Tuesday, same time.
```

The decisions, the open decision, and the action are now separate items. `Owner` appears only because it was known.

## Example: bug report

Before:

```text
Login broken on Safari, users see a blank page. Started after 1.4.0. Repro: open /login, sign in, blank page.
```

After:

```markdown
# Login returns a blank page on Safari

## Environment

- Version: 1.4.0
- Browser: Safari

## Steps to reproduce

- Open `/login`.
- Sign in with a valid account.

## Expected

The dashboard opens.

## Actual

The page stays blank.

## Notes

First seen after the 1.4.0 release.
```

The reproduction is now a sequence, and expected and actual behavior are separated.

## Rules of thumb

- Structure follows the content: do not invent sections to fill a template.
- A field without a value is noise; omit it.
- A constraint section appears only when there is a constraint to record.
- If the source is ambiguous, keep the ambiguity visible as an open question.
