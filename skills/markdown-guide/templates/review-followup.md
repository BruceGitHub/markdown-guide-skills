<!-- Review follow-up template. Replace every {{...}} and remove this comment. If Parent is not set, use #s-index in back links. If Parent exists, add the back link to the Index row too. Resolved items move to ### Resolved and are struck through. -->

<a id="top"></a>

# Review follow-up — {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | templates/review-followup.md | {{LINK_PARENT}} |

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
- [Constraints](#s-constraints)
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
| V | Constraint | Constraints |

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
