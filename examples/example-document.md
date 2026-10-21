<a id="top"></a>

# Technical documentation guidelines

| Version | Date | Status | Owner | Parent |
| --- | --- | --- | --- | --- |
| 1.1.0 | 2026-10-21 | active | Documentation | [Examples](./README.md#s-index) |

<a id="s-abstract"></a>
## Abstract

Minimum conventions for writing technical documents that are clear, linked, and traceable.

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Audience](#s-audience)
- [Conventions](#s-conventions)
- [Document structure](#s-document-structure)
- [Mistakes to avoid](#s-mistakes-to-avoid)
- [Legend](#s-legend)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-audience"></a>
## Audience

The document is for people who write, review, or approve technical documentation. It does not require knowledge of a specific language.

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-conventions"></a>
## Conventions

- <a id="gl1"></a>**GL1 — One H1.** The document title is the only H1. Sections use H2 and H3.
- <a id="gl2"></a>**GL2 — Short abstract.** The abstract states what the document is and who it is for, in at most 30 words.
- <a id="gl3"></a>**GL3 — Explicit anchors.** Every H2 has an `s-<slug>` anchor and every linked item has an inline anchor. See [Document structure](#s-document-structure).
- <a id="gl4"></a>**GL4 — Semantic lists.** Citable items have a stable ID (`GL1`, `GL2`). Automatic numbered lists are not used.
- <a id="gl5"></a>**GL5 — Change history.** Every change adds a row to `## Change history`, newest first.
- <a id="gl6"></a>**GL6 — Links.** References are Markdown links with descriptive text. Bare paths are not allowed.

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-document-structure"></a>
## Document structure

The minimum structure is: abstract, index, content, legend, constraints, history. Content sections are added between the index and the legend, with an anchor and navigation. See [GL3](#gl3).

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-mistakes-to-avoid"></a>
## Mistakes to avoid

A document with a long abstract, an incomplete index, or an unordered history is not compliant. An automatic numbered list is allowed only when requested and recorded in `## Constraints`.

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| GL | Guideline | Conventions |

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-constraints"></a>
## Constraints

No constraints.

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.1.0 | 2026-10-21 | Documentation | Added GL5 and GL6; updated the index. |
| 1.0.0 | 2026-10-14 | Documentation | Initial version. |

[↑ Back to top](#top) · [← Back](./README.md#s-index)
