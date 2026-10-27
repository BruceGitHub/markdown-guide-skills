---
id: acceptance-criteria
version: "1.0.0"
status: active
applies-to: [cda, criteri di accettazione, acceptance criteria, gherkin, bdd]
requires: []
---

# Preset: Acceptance criteria (CDA)

## Purpose

Define testable acceptance criteria as Gherkin scenarios, with traceability to tests and references.

## Mandatory structure

```markdown
<a id="top"></a>

# Acceptance criteria — {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/acceptance-criteria.md | {{LINK_PARENT}} |

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

{{Gherkin block for AC1}}

<a id="ac2"></a>
### AC2 — {{Title}}

{{Gherkin block for AC2}}

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
```

If `Parent` is not set, replace `{{LINK_PARENT}}` with `#s-index` in every navigation line. If `Parent` is set, add the back link to the Index row too.

Each `{{Gherkin block for AC#}}` is replaced with a fenced `gherkin` block. Example:

```gherkin
Feature: Password reset
  Scenario: Request a reset link
    Given a registered user
    When the user requests a password reset
    Then the system sends a reset link
```

## Rules

CDA1 — One acceptance criterion per scenario. Scenarios are `AC#` and keep stable IDs.

CDA2 — Each scenario uses `Given`, `When`, and `Then`. Add `And` or `But` only to extend the same step.

CDA3 — Describe behavior, not implementation. Do not mention internal classes, database tables, or UI selectors unless they are part of the contract.

CDA4 — The scenario title describes the behavior, not the test steps.

CDA5 — Use `Background` for shared preconditions and `Scenario Outline` with `Examples` for data-driven cases.

CDA6 — Every acceptance criterion links to a test case `TC#` in `## Traceability`.

CDA7 — Make each criterion testable. Avoid vague terms such as "fast", "user-friendly", or "appropriate".

CDA8 — Keep scenarios independent. Do not rely on execution order or state left by another scenario.

CDA9 — Use one Gherkin language consistently. English is the default; use localized keywords only if the project already does.

CDA10 — Link the issue, user story, or specification in `## References`.

CDA11 — When a criterion is removed, strike it through and add a history row. Do not reuse the ID.

CDA12 — No checkboxes and no automatic numbered lists.
