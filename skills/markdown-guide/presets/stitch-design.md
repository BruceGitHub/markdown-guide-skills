---
id: stitch-design
version: "1.0.0"
status: active
applies-to: [design system, design.md, stitch, ui design]
requires: []
---

# Preset: Stitch DESIGN.md

## Purpose

Create a `DESIGN.md` design system for Google Stitch and other AI design tools, following the open DESIGN.md specification: YAML design tokens plus human-readable design rationale.

The token values are normative. The prose explains how to apply them.

## Mandatory structure

```markdown
---
version: alpha
name: "{{TITLE}}"
description: "{{One-line description of the design system}}"
colors:
  primary: "{{#RRGGBB}}"
  on-primary: "{{#RRGGBB}}"
  primary-hover: "{{#RRGGBB}}"
  secondary: "{{#RRGGBB}}"
  tertiary: "{{#RRGGBB}}"
  neutral: "{{#RRGGBB}}"
  surface: "{{#RRGGBB}}"
  on-surface: "{{#RRGGBB}}"
  error: "{{#RRGGBB}}"
typography:
  display-lg:
    fontFamily: "{{family}}"
    fontSize: "{{size}}"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  body-md:
    fontFamily: "{{family}}"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.6
  label-md:
    fontFamily: "{{family}}"
    fontSize: "14px"
    fontWeight: 500
    lineHeight: 1.2
rounded:
  sm: "4px"
  md: "8px"
  lg: "12px"
  full: "9999px"
spacing:
  base: "8px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.full}"
    padding: "12px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
    textColor: "{colors.on-primary}"
---

# Design System: {{TITLE}}

| Version | Date | Status | Owner | Template | Parent |
| --- | --- | --- | --- | --- | --- |
| 0.1.0 | {{YYYY-MM-DD}} | draft | {{OWNER}} | presets/stitch-design.md | {{LINK_PARENT}} |

<a id="s-abstract"></a>
## Abstract

{{Design system and target product in at most 30 words.}}

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-index"></a>
## Index

- [Abstract](#s-abstract)
- [Legend](#s-legend)
- [Overview](#s-overview)
- [Colors](#s-colors)
- [Typography](#s-typography)
- [Layout](#s-layout)
- [Elevation & Depth](#s-elevation-and-depth)
- [Shapes](#s-shapes)
- [Components](#s-components)
- [Do's and Don'ts](#s-dos-and-donts)
- [References](#s-references)
- [Constraints](#s-constraints)
- [Change history](#s-change-history)

[↑ Back to top](#top)

<a id="s-legend"></a>
## Legend

| Prefix | Meaning | Scope |
| --- | --- | --- |
| PR | Principle | Overview |
| CO | Color | Colors |
| TY | Typography | Typography |
| LY | Layout | Layout |
| EL | Elevation | Elevation & Depth |
| SH | Shape | Shapes |
| CP | Component | Components |
| DD | Do / Don't | Do's and Don'ts |
| RF | Reference | References |
| V | Constraint | Constraints |

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-overview"></a>
## Overview

The interface should feel {{evocative adjectives}}. It is for {{audience}} and should evoke {{emotional response}}.

- <a id="pr1"></a>**PR1 — {{Principle}}.** {{Design implication}}.
- <a id="pr2"></a>**PR2 — {{Principle}}.** {{Design implication}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-colors"></a>
## Colors

The palette is rooted in {{color strategy}}.

- <a id="co1"></a>**CO1 — {{Descriptive name}}.** `{{#RRGGBB}}`. Role: {{primary actions and links}}.
- <a id="co2"></a>**CO2 — {{Descriptive name}}.** `{{#RRGGBB}}`. Role: {{backgrounds and surfaces}}.
- <a id="co3"></a>**CO3 — {{Descriptive name}}.** `{{#RRGGBB}}`. Role: {{errors and destructive actions}}.
- <a id="co4"></a>**CO4 — {{Descriptive name}}.** `{{#RRGGBB}}`. Role: {{secondary actions}}.
- <a id="co5"></a>**CO5 — {{Descriptive name}}.** `{{#RRGGBB}}`. Role: {{accents and highlights}}.
- <a id="co6"></a>**CO6 — {{Descriptive name}}.** `{{#RRGGBB}}`. Role: {{text and borders}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-typography"></a>
## Typography

The typography uses {{font family}} for {{roles}}.

- <a id="ty1"></a>**TY1 — Display large.** Token: `display-lg`. {{Size and weight}}. Role: {{hero headlines}}.
- <a id="ty2"></a>**TY2 — Body medium.** Token: `body-md`. {{Size and weight}}. Role: {{body copy}}.
- <a id="ty3"></a>**TY3 — Label medium.** Token: `label-md`. {{Size and weight}}. Role: {{buttons and form labels}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-layout"></a>
## Layout

The layout uses a {{grid model}} with a {{base spacing}} spacing scale.

- <a id="ly1"></a>**LY1 — Spacing.** Base token: `base`. {{Scale description}}.
- <a id="ly2"></a>**LY2 — Grid.** {{Columns}} columns, {{gutter}} gutters, {{margin}} margins.
- <a id="ly3"></a>**LY3 — Breakpoints.** {{Compact, medium, expanded behavior}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-elevation-and-depth"></a>
## Elevation & Depth

{{Depth strategy: flat, tonal layers, or shadows}}.

- <a id="el1"></a>**EL1 — Default card.** {{Shadow or border}}. Role: {{resting surfaces}}.
- <a id="el2"></a>**EL2 — Hover card.** {{Shadow or border}}. Role: {{interactive feedback}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-shapes"></a>
## Shapes

The shape language is {{shape description}}.

- <a id="sh1"></a>**SH1 — Small.** Token: `sm`. {{Radius}}. Role: {{inputs and small controls}}.
- <a id="sh2"></a>**SH2 — Medium.** Token: `md`. {{Radius}}. Role: {{menus and surfaces}}.
- <a id="sh3"></a>**SH3 — Large.** Token: `lg`. {{Radius}}. Role: {{cards and containers}}.
- <a id="sh4"></a>**SH4 — Full.** Token: `full`. {{Radius}}. Role: {{pills and circular controls}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-components"></a>
## Components

Components use the tokens above.

- <a id="cp1"></a>**CP1 — Button primary.** {{Shape, color, padding, typography}}. States: {{default, hover, focus, pressed, disabled}}.
- <a id="cp2"></a>**CP2 — Card.** {{Corner, background, shadow, padding}}. States: {{resting, hover}}.
- <a id="cp3"></a>**CP3 — Input.** {{Stroke, background, focus}}. States: {{default, focus, error, disabled}}.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-dos-and-donts"></a>
## Do's and Don'ts

- <a id="dd1"></a>**DD1 — Do.** Use the primary color for the single most important action per screen.
- <a id="dd2"></a>**DD2 — Don't.** Mix rounded and sharp corners in the same view.
- <a id="dd3"></a>**DD3 — Do.** Maintain WCAG AA contrast: `4.5:1` for normal text and `3:1` for large text.
- <a id="dd4"></a>**DD4 — Don't.** Use more than two font weights on a single screen.

[↑ Back to top](#top) · [← Back]({{LINK_PARENT}})

<a id="s-references"></a>
## References

- <a id="rf1"></a>**RF1 — DESIGN.md specification.** [github.com/google-labs-code/design.md](https://github.com/google-labs-code/design.md)
- <a id="rf2"></a>**RF2 — Stitch DESIGN.md announcement.** [blog.google](https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-design-md/)
- <a id="rf3"></a>**RF3 — Stitch documentation.** [stitch.withgoogle.com/docs](https://stitch.withgoogle.com/docs/)
- <a id="rf4"></a>**RF4 — Stitch prompting guide.** [stitch.withgoogle.com/docs/learn/prompting](https://stitch.withgoogle.com/docs/learn/prompting/)
- <a id="rf5"></a>**RF5 — WCAG 2.2.** [w3.org/TR/WCAG22](https://www.w3.org/TR/WCAG22/)

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

SD1 — Follow the DESIGN.md specification. The YAML tokens are normative; the prose explains how to apply them.

SD2 — Keep the DESIGN.md sections in this order: Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts. The core sections Abstract, Index, Legend, References, Constraints, and Change history are extra and do not replace them.

SD3 — `version: alpha` is the DESIGN.md format version. The document version lives in the metadata table.

SD4 — Define at least the `primary` color and the color roles actually used. For every color, give a descriptive name, the exact hex value, and the functional role.

SD5 — Define typography tokens with `fontFamily`, `fontSize`, `fontWeight`, `lineHeight`, and `letterSpacing` where relevant. Use semantic names such as `display-lg`, `body-md`, and `label-md`.

SD6 — Define `rounded` and `spacing` tokens as dimensions. Reference them from components with `{rounded.md}` and `{spacing.md}`.

SD7 — Translate technical geometry into descriptive language in the prose: "pill-shaped", "gently rounded corners (12px)", "sharp, squared-off edges".

SD8 — Describe depth as a quality: flat, tonal layers, whisper-soft shadows, or high-contrast elevation. Include the exact shadow value when one is used.

SD9 — Define component tokens for each variant and state, for example `button-primary` and `button-primary-hover`. Use token references instead of repeating values.

SD10 — Use evocative, specific atmosphere language. Avoid generic words such as "modern", "clean", or "nice" without context.

SD11 — Include Do's and Don'ts that are actionable and testable, including WCAG AA contrast.

SD12 — Save the file as `DESIGN.md`. Use `.stitch/DESIGN.md` when the Stitch project expects that location.

SD13 — Do not duplicate a top-level YAML key across frontmatter and section tokens. The DESIGN.md parser rejects duplicates.

SD14 — If the project uses Material Design or another design system, use it as the source of truth and record deviations in `## Constraints`. Do not mix systems silently.

SD15 — No automatic numbered lists and no checkboxes. Use the semantic IDs in the legend.
