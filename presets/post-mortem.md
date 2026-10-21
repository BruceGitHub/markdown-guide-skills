---
id: post-mortem
version: "1.0.0"
status: active
applies-to: [post-mortem, incident, outage, incident review]
requires: []
---

# Preset: Post-mortem

## Purpose

Review an incident without blame, identify causes, and track corrective actions.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/post-mortem.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Incident and impact in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Summary](#s-summary)
- [Impact](#s-impact)
- [Timeline](#s-timeline)
- [Root cause](#s-root-cause)
- [Contributing factors](#s-contributing-factors)
- [Actions](#s-actions)
- [Residual risks](#s-residual-risks)
- [Lessons](#s-lessons)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| IM | Impact | Impact |
| EV | Event | Timeline |
| RC | Root cause | Root cause |
| CF | Contributing factor | Contributing factors |
| DF | To do | Actions |
| RS | Risk | Actions |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-summary"></a>
## Summary

{{What happened, when, and how it was resolved.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-impact"></a>
## Impact

- <a id="im1"></a>**IM1 — {{Title}}.** {{Affected users, services, and duration}}.
- <a id="im2"></a>**IM2 — {{Title}}.** {{Data, financial, or compliance impact}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-timeline"></a>
## Timeline

- <a id="ev1"></a>**EV1 — {{Event}}.** Time: {{YYYY-MM-DD HH:MM}}. {{Detail}}.
- <a id="ev2"></a>**EV2 — {{Event}}.** Time: {{YYYY-MM-DD HH:MM}}. {{Detail}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-root-cause"></a>
## Root cause

- <a id="rc1"></a>**RC1 — {{Title}}.** {{Systemic cause, not a person}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-contributing-factors"></a>
## Contributing factors

- <a id="cf1"></a>**CF1 — {{Title}}.** {{Factor}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-actions"></a>
## Actions

- <a id="df1"></a>**DF1 — {{Title}}.** {{Action}}.
  - Status: to do
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}
  - Addresses: [RC1](#rc1)

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-residual-risks"></a>
## Residual risks

- <a id="rs1"></a>**RS1 — {{Title}}.** {{Residual risk}}.
  - Owner: {{OWNER}}
  - Accepted: {{yes | no}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-lessons"></a>
## Lessons

{{What changes in process, tooling, or ownership.}}

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

PM1 — Keep the review blameless. Describe systems and conditions, not people.

PM2 — Timeline events are `EV#` and include an ISO timestamp with time.

PM3 — The root cause is `RC1` and states a systemic cause. Contributing factors are `CF#`.

PM4 — Actions are `DF#` and include `Status`, `Owner`, `Due date`, and a link to the root cause or contributing factor they address.

PM5 — Residual risks are `RS#` and include an owner or accepted rationale.

PM6 — Link the incident, alert, or ticket in `## References`.

PM7 — Record the follow-up review date in `## Constraints` if the actions are not closed.

PM8 — No automatic numbered lists and no checkboxes.
