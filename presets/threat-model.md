---
id: threat-model
version: "1.0.0"
status: active
applies-to: [threat model, security, risk assessment]
requires: []
---

# Preset: Threat Model

## Purpose

Identify assets, trust boundaries, threats, mitigations, and residual risks.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/threat-model.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{System and security scope in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Assets](#s-assets)
- [Trust boundaries](#s-trust-boundaries)
- [Threats](#s-threats)
- [Mitigations](#s-mitigations)
- [Residual risks](#s-residual-risks)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| AS | Asset | Assets |
| TB | Trust boundary | Trust boundaries |
| TH | Threat | Threats |
| MI | Mitigation | Mitigations |
| RS | Residual risk | Residual risks |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

{{System, data, users, and environments covered.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-assets"></a>
## Assets

- <a id="as1"></a>**AS1 — {{Title}}.** {{Asset and sensitivity}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-trust-boundaries"></a>
## Trust boundaries

- <a id="tb1"></a>**TB1 — {{Title}}.** {{Boundary and crossing points}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-threats"></a>
## Threats

- <a id="th1"></a>**TH1 — {{Title}}.** {{Threat scenario}}.
  - Category: {{STRIDE category}}
  - Likelihood: {{low | medium | high}}
  - Impact: {{low | medium | high}}
  - Mitigation: [MI1](#mi1)

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-mitigations"></a>
## Mitigations

- <a id="mi1"></a>**MI1 — {{Title}}.** {{Control}}.
  - Addresses: [TH1](#th1)
  - Status: {{planned | implemented | verified}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-residual-risks"></a>
## Residual risks

- <a id="rs1"></a>**RS1 — {{Title}}.** {{Residual risk}}.
  - Owner: {{OWNER}}
  - Accepted: {{yes | no}}

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

TM1 — Define the system, data, users, and environments in `## Scope`.

TM2 — Assets are `AS#` and include sensitivity.

TM3 — Trust boundaries are `TB#` and identify crossing points.

TM4 — Threats are `TH#` and include STRIDE category, likelihood, impact, and mitigation.

TM5 — Mitigations are `MI#` and link to the threats they address. Status is `planned`, `implemented`, or `verified`.

TM6 — Residual risks are `RS#` and include owner and acceptance.

TM7 — Record the next review date in `## Constraints`.

TM8 — Link the threat model from the project document.

TM9 — No automatic numbered lists and no checkboxes.
