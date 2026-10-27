<!-- Technical design template. Replace every {{...}} and remove this comment. If Parent is not set, use #s-index in back links. If Parent exists, add the back link to the Index row too. -->

<a id="top"></a>

# Technical design — {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | templates/technical-design.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Change and technical approach in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Context](#s-context)
- [Goals and non-goals](#s-goals-and-non-goals)
- [Architecture](#s-architecture)
- [Components](#s-components)
- [Data flow and interfaces](#s-data-flow-and-interfaces)
- [Alternatives](#s-alternatives)
- [Risks](#s-risks)
- [Rollout](#s-rollout)
- [Open questions](#s-open-questions)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| GO | Goal | Goals and non-goals |
| NG | Non-goal | Goals and non-goals |
| CMP | Component | Components |
| FL | Data flow | Data flow and interfaces |
| IF | Interface | Data flow and interfaces |
| ALT | Alternative | Alternatives |
| RS | Risk | Risks |
| RO | Rollout step | Rollout |
| CK | Check | Rollout |
| DA | Open decision | Open questions |
| DF | To do | Open questions |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-context"></a>
## Context

{{Problem, current architecture, and constraints that shape the design}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-goals-and-non-goals"></a>
## Goals and non-goals

- <a id="go1"></a>**GO1 — {{Title}}.** {{Measurable goal}}.
- <a id="ng1"></a>**NG1 — {{Title}}.** {{Explicit non-goal}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-architecture"></a>
## Architecture

{{High-level design, boundaries, and relationship to existing systems}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-components"></a>
## Components

- <a id="cmp1"></a>**CMP1 — {{Name}}.** {{Responsibility}}.
  - Interfaces: [IF1](#if1)
  - Owner: {{OWNER}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-data-flow-and-interfaces"></a>
## Data flow and interfaces

- <a id="fl1"></a>**FL1 — {{Name}}.** From {{source}} to {{destination}}. Data: {{data}}. Protocol: {{protocol}}.
- <a id="if1"></a>**IF1 — {{Name}}.** Type: {{REST | gRPC | event | CLI}}. Contract: [{{spec}}]({{link}}).

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-alternatives"></a>
## Alternatives

- <a id="alt1"></a>**ALT1 — {{Title}}.** {{Description}}. Rejected because {{reason}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-risks"></a>
## Risks

- <a id="rs1"></a>**RS1 — {{Title}}.** {{Risk}}.
  - Likelihood: {{low | medium | high}}
  - Impact: {{low | medium | high}}
  - Mitigation: {{action}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-rollout"></a>
## Rollout

- <a id="ro1"></a>**RO1 — {{Step}}.** {{What happens}}.
  - Owner: {{OWNER}}
  - Expected: {{result}}
- <a id="ck1"></a>**CK1 — {{Check}}.** {{What is verified}}.
  - Expected: {{result}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-open-questions"></a>
## Open questions

- <a id="da1"></a>**DA1 — {{Title}}.** {{Question}}.
  - Owner: {{OWNER}}
  - Due date: {{YYYY-MM-DD}}
  - Ref.: [RF1](#rf1)

---

### To do

- <a id="df1"></a>**DF1 — {{Title}}.** {{Action}}.
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
