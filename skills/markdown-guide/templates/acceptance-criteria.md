<!-- Acceptance criteria template. Replace every {{...}} and remove this comment. If Parent is not set, use #s-index in back links. If Parent exists, add the back link to the Index row too. Each AC# has its own fenced gherkin block. -->

<a id="top"></a>

# Acceptance criteria — {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | templates/acceptance-criteria.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Feature and acceptance scope in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Scope](#s-scope)
- [Feature](#s-feature)
- [Scenarios](#s-scenarios)
- [Traceability](#s-traceability)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| FT | Feature | Feature |
| SC | Scope | Scope |
| AC | Acceptance criterion | Scenarios |
| TC | Test case | Traceability |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scope"></a>
## Scope

- <a id="sc1"></a>**SC1 — In scope.** {{Behavior, user, and product area covered}}.
- <a id="sc2"></a>**SC2 — Out of scope.** {{Explicit exclusions}}.
- <a id="sc3"></a>**SC3 — Source.** [{{issue or user story}}]({{link}}).

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-feature"></a>
## Feature

- <a id="ft1"></a>**FT1 — {{Feature}}.** {{User story or value}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-scenarios"></a>
## Scenarios

<a id="ac1"></a>
### AC1 — {{Title}}

```gherkin
Feature: {{Feature}}
  Scenario: {{Scenario title}}
    Given {{context}}
    When {{action}}
    Then {{outcome}}
```

<a id="ac2"></a>
### AC2 — {{Title}}

```gherkin
Feature: {{Feature}}
  Scenario: {{Scenario title}}
    Given {{context}}
    When {{action}}
    Then {{outcome}}
```

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-traceability"></a>
## Traceability

- <a id="tc1"></a>**TC1 — {{Test case}}.** Covers: [AC1](#ac1). Link: [{{test}}]({{link}}).

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
