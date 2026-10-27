<!-- Test plan template. Replace every {{...}} and remove this comment. If Parent is not set, use #s-index in back links. If Parent exists, add the back link to the Index row too. -->

<a id="top"></a>

# Test plan — {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | templates/test-plan.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Feature and verification scope in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Strategy](#s-strategy)
- [Environments](#s-environments)
- [Test cases](#s-test-cases)
- [Entry and exit criteria](#s-entry-and-exit-criteria)
- [Risks](#s-risks)
- [Results](#s-results)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| SC | Scope | Scope |
| TS | Test strategy | Strategy |
| ENV | Environment | Environments |
| TC | Test case | Test cases |
| EC | Entry/exit criterion | Entry and exit criteria |
| RS | Risk | Risks |
| TR | Test run | Results |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

- <a id="sc1"></a>**SC1 — In scope.** {{Features, platforms, and behaviors covered}}.
- <a id="sc2"></a>**SC2 — Out of scope.** {{Explicit exclusions}}.
- <a id="sc3"></a>**SC3 — Source.** [{{issue or acceptance criteria}}]({{link}}).

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-strategy"></a>
## Strategy

- <a id="ts1"></a>**TS1 — Test levels.** {{unit, integration, e2e, manual, performance, security}}.
- <a id="ts2"></a>**TS2 — Approach.** {{Risk-based, regression, exploratory, or other}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-environments"></a>
## Environments

- <a id="env1"></a>**ENV1 — {{Environment}}.** {{URL, access, dependencies}}.
- <a id="env2"></a>**ENV2 — Test data.** {{Dataset, fixtures, reset strategy}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-test-cases"></a>
## Test cases

- <a id="tc1"></a>**TC1 — {{Title}}.** {{What is verified}}.
  - Covers: [AC1]({{link}})
  - Type: {{unit | integration | e2e | manual | performance | security}}
  - Preconditions: {{state and data}}
  - Steps: {{steps separated by →}}
  - Expected: {{observable result}}
  - Status: {{not run | passed | failed | blocked}}

- <a id="tc2"></a>**TC2 — {{Title}}.** {{What is verified}}.
  - Covers: [AC2]({{link}})
  - Type: {{unit | integration | e2e | manual | performance | security}}
  - Preconditions: {{state and data}}
  - Steps: {{steps separated by →}}
  - Expected: {{observable result}}
  - Status: {{not run | passed | failed | blocked}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-entry-and-exit-criteria"></a>
## Entry and exit criteria

- <a id="ec1"></a>**EC1 — Entry.** {{Conditions required before execution}}.
- <a id="ec2"></a>**EC2 — Exit.** {{Conditions required to sign off}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-risks"></a>
## Risks

- <a id="rs1"></a>**RS1 — {{Title}}.** {{Risk for the test effort}}.
  - Likelihood: {{low | medium | high}}
  - Impact: {{low | medium | high}}
  - Mitigation: {{action}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-results"></a>
## Results

- <a id="tr1"></a>**TR1 — {{Run}}.** Date: {{YYYY-MM-DD}}. Passed: `{{n}}`. Failed: `{{n}}`. Blocked: `{{n}}`. Ref.: [RF1](#rf1).

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
