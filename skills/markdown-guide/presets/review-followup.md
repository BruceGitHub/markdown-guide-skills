---
id: review-followup
version: "1.1.0"
status: active
applies-to: [review followup, followup review, review resolution, pr comments, merge request comments, code review follow-up]
requires: []
---

# Preset: Review follow-up

## Purpose

Track review comments and questions from a pull request, merge request, or agent review through triage, decision, fix, verification, and closure.

## Mandatory structure

```markdown
<a id="top"></a>

# Review follow-up — {{TITLE}}

| Version | Date | Status |
| --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft |

<a id="s-abstract"></a>
## Abstract

{{Review source and follow-up scope in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Progress](#s-progress)
- [Review items](#s-review-items)
- [References](#s-references)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| SC | Scope | Scope |
| PG | Progress summary | Progress |
| RV | Review item | Review items |
| RF | Reference | References |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

- <a id="sc1"></a>**SC1 — Review source.** [{{pull request or merge request}}]({{link}}).
- <a id="sc2"></a>**SC2 — Target.** Branch `{{branch}}`, commit `{{commit}}`.
- <a id="sc3"></a>**SC3 — Reviewers.** {{Reviewers or review sources}}.
- <a id="sc4"></a>**SC4 — Out of scope.** {{Comments or areas not handled here}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-progress"></a>
## Progress

- <a id="pg1"></a>**PG1 — Summary.** Open: `{{n}}`. In progress: `{{n}}`. Waiting: `{{n}}`. Deferred: `{{n}}`. Resolved: `{{n}}`. Won't fix: `{{n}}`. Duplicate: `{{n}}`. Blocking open: `{{n}}`.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-review-items"></a>
## Review items

- <a id="rv1"></a>**RV1 — {{Title}}.** {{Original review comment or question}}.
  - Source: [{{reviewer}}]({{thread link}}) · `{{file}}:{{line}}`
  - Type: {{question | bug | suggestion | style | security | test | docs | other}}
  - Severity: {{blocking | major | minor | nit}}
  - Status: {{new | triaged | in progress | waiting | deferred}}
  - Owner: {{OWNER}}
  - Decision: {{fix | clarify | reject | defer | duplicate}}
  - Resolution: {{what was done, answered, or why rejected}}
  - Evidence: [{{commit, test, or reply}}]({{link}})
  - Verified by: {{REVIEWER}} on {{YYYY-MM-DD}}

- <a id="rv2"></a>**RV2 — {{Title}}.** {{Original review comment or question}}.
  - Source: [{{reviewer}}]({{thread link}}) · `{{file}}:{{line}}`
  - Type: {{question | bug | suggestion | style | security | test | docs | other}}
  - Severity: {{blocking | major | minor | nit}}
  - Status: {{new | triaged | in progress | waiting | deferred}}
  - Owner: {{OWNER}}
  - Decision: {{fix | clarify | reject | defer | duplicate}}
  - Resolution: {{what was done, answered, or why rejected}}
  - Evidence: [{{commit, test, or reply}}]({{link}})
  - Verified by: {{REVIEWER}} on {{YYYY-MM-DD}}

---

### Resolved

- ~~**RV3 — {{Title}}.**~~ Status: {{resolved | won't fix | duplicate}}. {{Resolution}}. Evidence: [{{commit, test, or reply}}]({{link}}). Verified by: {{REVIEWER}} on {{YYYY-MM-DD}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-references"></a>
## References

- <a id="rf1"></a>**RF1 — {{Title}}.** [{{text}}]({{link}})

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

RF1 — One review point per item. Items are `RV#` and keep stable IDs.

RF2 — Every item has source, type, severity, status, owner, and decision.

RF3 — Triage `new` items to `triaged` and assign an owner before starting work.

RF4 — Keep status and decision consistent: `fix` and `clarify` end in `resolved`; `reject` ends in `won't fix`; `defer` ends in `deferred`; `duplicate` ends in `duplicate`.

RF5 — A `resolved` item requires evidence and verification by the reviewer or a second person.

RF6 — A `won't fix` item requires a rationale and, when relevant, a decision or reference.

RF7 — A `deferred` item stays in the open list with an owner and due date.

RF8 — A `duplicate` item links the canonical `RV#`.

RF9 — Resolved, won't-fix, and duplicate items move to `### Resolved`, struck through with evidence. Do not delete them.

RF10 — Update `## Progress` after every status change.

RF11 — New review comments get the next `RV#`. Do not renumber existing items.

RF12 — Link the pull request, merge request, discussion, commits, and test runs in `## References`.

RF13 — No checkboxes and no automatic numbered lists.

RF14 — Use one document per review. Link the parent review or project in `Parent`.
