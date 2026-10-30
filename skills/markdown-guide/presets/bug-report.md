---
id: bug-report
version: "1.1.0"
status: active
applies-to: [bug, bug report, defect]
requires: []
---

# Preset: Bug Report

## Purpose

Report one reproducible defect with environment, expected and actual behavior, impact, and evidence.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status |
| --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft |

<a id="s-abstract"></a>
## Abstract

{{Defect and impact in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Summary](#s-summary)
- [Environment](#s-environment)
- [Triage](#s-triage)
- [Steps to reproduce](#s-steps-to-reproduce)
- [Expected behavior](#s-expected-behavior)
- [Actual behavior](#s-actual-behavior)
- [Evidence](#s-evidence)
- [Impact](#s-impact)
- [Workaround](#s-workaround)
- [References](#s-references)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| ENV | Environment | Environment |
| TR | Triage | Triage |
| ST | Step | Steps to reproduce |
| EXP | Expected behavior | Expected behavior |
| ACT | Actual behavior | Actual behavior |
| EV | Evidence | Evidence |
| IMP | Impact | Impact |
| WRK | Workaround | Workaround |
| RF | Reference | References |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-summary"></a>
## Summary

{{What fails, where, and when.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-environment"></a>
## Environment

- <a id="env1"></a>**ENV1 — {{Name}}.**
  - OS: {{os}}
  - Version: {{version}}
  - Runtime: {{runtime}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-triage"></a>
## Triage

- <a id="tr1"></a>**TR1 — Triage.**
  - Severity: {{low | medium | high | critical}}
  - Priority: {{P1 | P2 | P3 | P4}}
  - Component: {{component}}
  - Bug status: {{open | triaged | in progress | fixed | closed}}
  - Owner: {{OWNER}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-steps-to-reproduce"></a>
## Steps to reproduce

- <a id="st1"></a>**ST1 — {{Action}}.** {{Detail}}.
- <a id="st2"></a>**ST2 — {{Action}}.** {{Detail}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-expected-behavior"></a>
## Expected behavior

- <a id="exp1"></a>**EXP1 — {{Title}}.** {{Expected result}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-actual-behavior"></a>
## Actual behavior

- <a id="act1"></a>**ACT1 — {{Title}}.** {{Actual result}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-evidence"></a>
## Evidence

- <a id="ev1"></a>**EV1 — {{Title}}.** {{Evidence}}.
  - Link: [{{text}}]({{link}})

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-impact"></a>
## Impact

- <a id="imp1"></a>**IMP1 — {{Title}}.** {{Affected users, data, or workflows}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-workaround"></a>
## Workaround

- <a id="wrk1"></a>**WRK1 — {{Title}}.** {{Workaround or "none"}}.

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

BR1 — One defect per report.

BR2 — Steps are `ST#`, minimal, and reproducible. State the starting state.

BR3 — Environment is `ENV#` and includes OS, version, and runtime.

BR4 — Expected behavior is `EXP#`; actual behavior is `ACT#`. Keep them separate.

BR5 — Triage is `TR1` and includes severity, priority, component, bug status, and owner.

BR6 — Evidence is `EV#` and links logs, screenshots, traces, or recordings. Redact secrets and personal data.

BR7 — Impact is `IMP#` and states affected users, data, or workflows.

BR8 — Workaround is `WRK#` and states the mitigation or `none`.

BR9 — Link the issue, pull request, or fix as `RF#`. On fix, update `Bug status` and link the fix; do not delete the report.

BR10 — No automatic numbered lists and no checkboxes.
