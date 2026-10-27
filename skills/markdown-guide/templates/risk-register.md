<!-- Risk register template. Replace every {{...}} and remove this comment. If Parent is not set, use #s-index in back links. If Parent exists, add the back link to the Index row too. -->

<a id="top"></a>

# Risk register — {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | templates/risk-register.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Project and risk scope in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Risks](#s-risks)
- [Mitigations](#s-mitigations)
- [Decisions](#s-decisions)
- [Actions](#s-actions)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| SC | Scope | Scope |
| RS | Risk | Risks |
| MI | Mitigation | Mitigations |
| DP | Decision made | Decisions |
| DF | To do | Actions |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

- <a id="sc1"></a>**SC1 — Scope.** {{Project, product, and period covered}}.
- <a id="sc2"></a>**SC2 — Scale.** Likelihood and impact use `low`, `medium`, `high`. Score = likelihood × impact on a 1–3 scale.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-risks"></a>
## Risks

- <a id="rs1"></a>**RS1 — {{Title}}.** {{Risk description}}.
  - Likelihood: {{low | medium | high}}
  - Impact: {{low | medium | high}}
  - Score: {{1–9}}
  - Owner: {{OWNER}}
  - Mitigation: [MI1](#mi1)
  - Status: {{open | mitigated | accepted | closed}}

- <a id="rs2"></a>**RS2 — {{Title}}.** {{Risk description}}.
  - Likelihood: {{low | medium | high}}
  - Impact: {{low | medium | high}}
  - Score: {{1–9}}
  - Owner: {{OWNER}}
  - Mitigation: {{none or MI2}}
  - Status: {{open | mitigated | accepted | closed}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-mitigations"></a>
## Mitigations

- <a id="mi1"></a>**MI1 — {{Title}}.** {{Mitigation}}.
  - Addresses: [RS1](#rs1)
  - Status: {{planned | in progress | done}}
  - Owner: {{OWNER}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<!-- Optional. Remove this section and its index entry if there are no decisions. -->
<a id="s-decisions"></a>
## Decisions

No decisions.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<!-- Optional. Remove this section and its index entry if there are no actions. -->
<a id="s-actions"></a>
## Actions

No actions.

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
