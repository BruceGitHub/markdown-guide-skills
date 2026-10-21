---
id: api-spec
version: "1.0.0"
status: active
applies-to: [api, api spec, endpoint, contract]
requires: []
---

# Preset: API Specification

## Purpose

Document an API contract: authentication, endpoints, schemas, errors, examples, and limits.

## Mandatory structure

```markdown
<a id="top"></a>

# {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/api-spec.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{API and intended consumer in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Overview](#s-overview)
- [Authentication](#s-authentication)
- [Endpoints](#s-endpoints)
- [Schemas](#s-schemas)
- [Errors](#s-errors)
- [Examples](#s-examples)
- [Rate limits](#s-rate-limits)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| EP | Endpoint | Endpoints |
| SC | Schema | Schemas |
| ER | Error | Errors |
| EX | Example | Examples |
| RL | Rate limit | Rate limits |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-overview"></a>
## Overview

Base URL: `{{base_url}}`. API version: `{{version}}`.

{{Purpose, audience, and compatibility policy.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-authentication"></a>
## Authentication

{{Scheme, token lifetime, scopes, and rotation.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-endpoints"></a>
## Endpoints

- <a id="ep1"></a>**EP1 — {{Title}}.**
  - Method: `GET`
  - Path: `/v1/{{resource}}`
  - Auth: `bearer`
  - Response: `200` [SC1](#sc1)

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-schemas"></a>
## Schemas

- <a id="sc1"></a>**SC1 — {{Name}}.**
  - Fields: `id`, `name`
  - Required: `id`

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-errors"></a>
## Errors

- <a id="er1"></a>**ER1 — {{Title}}.**
  - HTTP: `{{status}}`
  - Code: `{{code}}`
  - Retry: `{{yes | no}}`

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-examples"></a>
## Examples

- <a id="ex1"></a>**EX1 — {{Title}}.** {{Description}}.
  - Request: `GET /v1/{{resource}}`
  - Response: `200`

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-rate-limits"></a>
## Rate limits

- <a id="rl1"></a>**RL1 — {{Scope}}.**
  - Limit: `{{limit}}`
  - Window: `{{window}}`
  - Response: `429` [ER1](#er1)

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

API1 — Record the base URL and API version in `## Overview`.

API2 — Endpoints are `EP#` and include method, path, authentication, and response.

API3 — Schemas are `SC#` and list fields and required fields.

API4 — Errors are `ER#` and include HTTP status, stable code, and retry guidance.

API5 — Examples are `EX#` and use fenced code blocks with the correct language.

API6 — Rate limits are `RL#` and include limit, window, scope, and the error returned.

API7 — Record breaking changes in `## Change history` and link the migration guide.

API8 — Link the API specification from the project document.

API9 — No automatic numbered lists and no checkboxes.
