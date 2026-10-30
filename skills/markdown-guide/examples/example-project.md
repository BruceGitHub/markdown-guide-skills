<a id="top"></a>

# OIDC authentication migration

| Version | Date | Status |
| --- | --- | --- |
| 1.2.0 | 2026-10-21 | active |

<a id="s-abstract"></a>
## Abstract

Replace local authentication with OIDC, reduce managed credentials, and complete the migration by 2026.

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Context and goal](#s-context-and-goal)
- [Decisions made](#s-decisions-made)
- [Open decisions](#s-open-decisions)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| DP | Decision made | Decisions made |
| DA | Open decision | Open decisions |
| DF | To do | Open decisions, To do |
| RF | Reference | References |
| V | Constraint | Constraints |
| OB | Objective | Context and goal |

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-context-and-goal"></a>
## Context and goal

The service controls access to three internal applications. Today each application keeps local credentials, which increases management cost and fragments audit. The goal is a single OIDC provider with a gradual migration and a possible rollback.

- <a id="ob1"></a>**OB1 — Migrate all clients by 2026-12-31.**
- <a id="ob2"></a>**OB2 — Remove local passwords for new clients from 2026-11-01.**

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-decisions-made"></a>
## Decisions made

- <a id="dp1"></a>**DP1 — Adopt OIDC with the corporate provider.** Date: 2026-09-12. Ref.: [RF1](#rf1), [RF3](#rf3).
- <a id="dp2"></a>**DP2 — Keep the local fallback for 90 days.** Date: 2026-09-26. Ref.: [RF4](#rf4).
- <a id="dp3"></a>**DP3 — Use PKCE for public clients.** Date: 2026-10-10. Ref.: [RF2](#rf2).
- <a id="dp4"></a>**DP4 — Migrate mobile clients first.** Date: 2026-10-18. Source: [DA2](#da2). Ref.: [RF4](#rf4).

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-open-decisions"></a>
## Open decisions

- <a id="da1"></a>**DA1 — Service token management.**
  - Owner: Security Team
  - Due date: 2026-11-15
  - Ref.: [RF4](#rf4)

- <a id="da2"></a>~~**DA2 — Client migration order.**~~ → [DP4](#dp4) (2026-10-18).
  - Outcome: mobile clients before web clients.

---

### To do

- <a id="df1"></a>**DF1 — Complete the OIDC client inventory.**
  - Status: in progress
  - Owner: Platform Team
  - Due date: 2026-10-31
  - Ref.: [RF4](#rf4)

- ~~**DF2 — Write the rollback plan.**~~ (done 2026-10-02, [DP2](#dp2)).

- <a id="df3"></a>**DF3 — Run the provider load test.**
  - Status: to do
  - Owner: SRE
  - Due date: 2026-11-08

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-references"></a>
## References

- <a id="rf1"></a>**RF1 — RFC 6749 (OAuth 2.0).** [rfc-editor.org/rfc/rfc6749](https://www.rfc-editor.org/rfc/rfc6749)
- <a id="rf2"></a>**RF2 — RFC 7636 (PKCE).** [rfc-editor.org/rfc/rfc7636](https://www.rfc-editor.org/rfc/rfc7636)
- <a id="rf3"></a>**RF3 — OpenID Connect Core 1.0.** [openid.net/specs/openid-connect-core-1_0.html](https://openid.net/specs/openid-connect-core-1_0.html)
- <a id="rf4"></a>**RF4 — OWASP ASVS 5.0.** [owasp.org/www-project-application-security-verification-standard](https://owasp.org/www-project-application-security-verification-standard/)

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-constraints"></a>
## Constraints

- <a id="v1"></a>**V1 — On-premise OIDC provider.** Authentication data does not leave the corporate network. Source: security requirement.

[↑ Back to top](#top) · [← Back](./README.md#s-index)

<a id="s-change-history"></a>
## Change history

| Version | Date | Author | Change |
| --- | --- | --- | --- |
| 1.2.0 | 2026-10-21 | M. Bianchi | Closed DA2 with DP4; updated DF1 and RF4. |
| 1.1.0 | 2026-10-10 | M. Bianchi | Added DP3, RF2, and DF3; updated DA1. |
| 1.0.0 | 2026-09-12 | M. Bianchi | Initial version: DP1, DP2, DA1, DA2, DF1, DF2, and RF1, RF3, RF4. |

[↑ Back to top](#top) · [← Back](./README.md#s-index)
