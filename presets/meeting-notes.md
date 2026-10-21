---
id: meeting-notes
version: "1.0.0"
status: active
applies-to: [meeting, minutes]
requires: []
---

# Preset: Meeting notes

## Purpose

Record decisions and actions from a meeting. Meeting notes are not a transcript.

## Mandatory structure

```markdown
<a id="top"></a>

# Meeting notes — {{TITLE}}

| Field | Value |
| --- | --- |
| Version | 0.1.0 |
| Date | {{YYYY-MM-DD}} |
| Status | draft |
| Owner | {{NOTE_TAKER}} |
| Template | presets/meeting-notes.md |
| Parent | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Meeting outcome in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Attendees](#s-attendees)
- [Agenda](#s-agenda)
- [Summary](#s-summary)
- [Decisions made](#s-decisions-made)
- [Open decisions](#s-open-decisions)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| DP | Decision made | Decisions made |
| DA | Open decision | Open decisions |
| DF | To do | Open decisions, To do |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-attendees"></a>
## Attendees

| Name | Role |
| --- | --- |
| {{Name}} | {{Role}} |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-agenda"></a>
## Agenda

| Item | Outcome |
| --- | --- |
| {{Item}} | {{Outcome}} |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-summary"></a>
## Summary

{{Summary, at most 5 lines.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-decisions-made"></a>
## Decisions made

- <a id="dp1"></a>**DP1 — {{Title}}.** {{Text}}. Date: {{YYYY-MM-DD}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-open-decisions"></a>
## Open decisions

- <a id="da1"></a>**DA1 — {{Title}}.** {{Text}}.
  - Status: open
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}

---

### To do

- <a id="df1"></a>**DF1 — {{Title}}.** {{Text}}.
  - Status: to do
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}

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

If `Parent` is not set, replace `{{LINK_PARENT}}` with `#s-index`. If `Parent` is set, add the back link to the Index row too.

## Rules

MR1 — Record only decisions, actions, and relevant points. Do not transcribe the discussion.

MR2 — A decision made during the meeting is a DP. A deferred decision is a DA. An activity is a DF.

MR3 — Every DA and DF has an `Owner` and a `Due date`. If they are missing, the item remains open and the notes record it in `## Constraints`.

MR4 — DAs and DFs are separated by `---` and the `### To do` subsection.

MR5 — Closed items are struck through with `~~...~~` and include the date and a link to the DP or DA.

MR6 — History is reverse-chronological. A revision of the notes adds a row.

MR7 — No automatic numbered lists and no checkboxes.

MR8 — If the meeting has a template or directory, apply its rules. Mandatory sections remain present.

MR9 — The legend lists every prefix used, including meeting-specific ones.
