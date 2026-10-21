---
id: checklist
version: "1.0.0"
status: active
applies-to: [checklist, verification, operations]
requires: []
---

# Preset: Checklist

## Purpose

Track a repeatable set of checks with owners, expected results, and exceptions.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/checklist.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Checklist and situation in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Preconditions](#s-preconditions)
- [Checklist](#s-checklist)
- [Exceptions](#s-exceptions)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| PRE | Precondition | Preconditions |
| CK | Check | Checklist |
| EX | Exception | Exceptions |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

{{Process, environment, and moment when the checklist applies.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-preconditions"></a>
## Preconditions

- <a id="pre1"></a>**PRE1 — {{Title}}.** {{Required access, state, or approval}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-checklist"></a>
## Checklist

- <a id="ck1"></a>**CK1 — {{Check}}.** {{Detail}}.
  - Status: to do
  - Owner: {{OWNER}}
  - Expected: {{result}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-exceptions"></a>
## Exceptions

- <a id="ex1"></a>**EX1 — {{Check}}.** {{Reason for the exception}}.
  - Approver: {{OWNER}}
  - Date: {{YYYY-MM-DD}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-references"></a>
## References

- <a id="rf1"></a>**RF1 — {{Title}}.** [{{text}}]({{link}})

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-constraints"></a>
## Constraints

No constraints.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | {{AUTHOR}} | Initial version. |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})
```

If `Parent` is not set, replace `{{LINK_PARENT}}` with `#s-index` in every navigation line. If `Parent` is set, add the back link to the Index row too.

## Rules

CL1 — One check per item. Checks are `CK#` and include `Status`, `Owner`, and `Expected`.

CL2 — Use `Status: to do`, `Status: in progress`, `Status: blocked`, or `Status: done`. Do not use checkboxes.

CL3 — A completed check is struck through and keeps its date: `~~**CK1 — Title.**~~ (done 2026-10-22).`

CL4 — Preconditions are `PRE#` and list access, state, or approvals required before starting.

CL5 — Exceptions are `EX#` and include the reason, approver, and date.

CL6 — Link the checklist from the runbook or project document that uses it.

CL7 — No automatic numbered lists and no checkboxes.

CL8 — If the checklist is reused, keep the same `CK#` IDs and add new checks with the next number.
