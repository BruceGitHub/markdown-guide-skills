---
id: incident
version: "1.1.0"
status: active
applies-to: [incident, outage, sev, incident report]
requires: []
---

# Preset: Incident

## Purpose

Track an active or recently resolved incident: severity, impact, timeline, mitigation, communication, and actions. Use `post-mortem` for the later analysis.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status |
| --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft |

<a id="s-abstract"></a>
## Abstract

{{Incident and impact in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Summary](#s-summary)
- [Severity and status](#s-severity-and-status)
- [Impact](#s-impact)
- [Timeline](#s-timeline)
- [Current status](#s-current-status)
- [Mitigation](#s-mitigation)
- [Preliminary cause](#s-preliminary-cause)
- [Actions](#s-actions)
- [Communication](#s-communication)
- [References](#s-references)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| SEV | Severity | Severity and status |
| STA | Status | Severity and status |
| IM | Impact | Impact |
| EV | Event | Timeline |
| MIT | Mitigation | Mitigation |
| RC | Preliminary cause | Preliminary cause |
| DF | To do | Actions |
| COM | Communication | Communication |
| RF | Reference | References |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-summary"></a>
## Summary

{{What happened, when, and who is responding.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-severity-and-status"></a>
## Severity and status

- <a id="sev1"></a>**SEV1 — Severity.** {{SEV-1 | SEV-2 | SEV-3 | SEV-4}}.
- <a id="sta1"></a>**STA1 — Status.** {{investigating | identified | mitigating | monitoring | resolved}}.
  - Commander: {{OWNER}}
  - Started: {{YYYY-MM-DD HH:MM}}
  - Resolved: {{YYYY-MM-DD HH:MM | —}}

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

<a id="s-current-status"></a>
## Current status

{{What is happening now, what is degraded, and what is being monitored.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-mitigation"></a>
## Mitigation

- <a id="mit1"></a>**MIT1 — {{Title}}.** {{Mitigation applied or planned}}.
  - Owner: {{OWNER}}
  - Status: {{applied | planned}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-preliminary-cause"></a>
## Preliminary cause

- <a id="rc1"></a>**RC1 — {{Title}}.** {{Preliminary cause, without blame}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-actions"></a>
## Actions

- <a id="df1"></a>**DF1 — {{Title}}.** {{Action}}.
  - Status: to do
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-communication"></a>
## Communication

- <a id="com1"></a>**COM1 — {{Audience}}.** {{Message}}.
  - Channel: {{channel}}
  - When: {{YYYY-MM-DD HH:MM}}

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

IN1 — Use this preset during or immediately after an incident. Use `post-mortem` for the later analysis.

IN2 — Severity is `SEV1` and uses a documented scale (`SEV-1` to `SEV-4`). Status is `STA1` and uses `investigating`, `identified`, `mitigating`, `monitoring`, or `resolved`.

IN3 — Timeline events are `EV#` and include an ISO timestamp with time. Append events; do not rewrite old ones.

IN4 — Impact is `IM#` and states affected users, services, duration, and any data or compliance impact.

IN5 — Mitigations are `MIT#` and include owner and status.

IN6 — Preliminary cause is `RC1` and describes systems and conditions, not people.

IN7 — Actions are `DF#` and include `Status`; `Owner` and `Due date` appear when known.

IN8 — Communication items are `COM#` and include audience, channel, and time.

IN9 — Link the post-mortem as `RF#` when it exists.

IN10 — Link the incident from the project document and from the post-mortem.

IN11 — No automatic numbered lists and no checkboxes.
