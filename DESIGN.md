---
name: TA Consulting
description: Dark navy-and-cyan systems schematic for the consultancy, with one scoped daylight variant (Cardápio IA) in WhatsApp green and tomato orange.
colors:
  night: "#080d17"
  night-surface: "#101c2f"
  night-band: "#102458"
  system-blue: "#143bd0"
  cta-blue: "#1946e7"
  electric: "#1248ed"
  action-blue: "#2860f0"
  cyan: "#67edff"
  cyan-hover: "#b3f7ff"
  mint: "#72f1ce"
  lab-ice: "#d7f9ff"
  lab-ink: "#092636"
  paper: "#f4f8ff"
  haze: "#b1bfd3"
  rule: "#293952"
  field-bg: "#0e1b2d"
  field-border: "#5e7799"
  whatsapp: "#25d366"
  ci-ground: "#ffffff"
  ci-surface: "#f6f5f0"
  ci-ink: "#14181c"
  ci-muted: "#5b626a"
  ci-rule: "#e4e2dc"
  ci-green: "#1fb85a"
  ci-green-hover: "#1aa550"
  ci-green-text: "#0f7a3a"
  ci-green-ink: "#06301a"
  ci-green-soft: "#e6f8ec"
  ci-green-edge: "#bfe9cd"
  ci-orange: "#ff5a1f"
  ci-orange-text: "#bf3a0a"
  ci-orange-soft: "#ffece4"
  ci-bar-idle: "#cfd3d8"
  ci-chat-wall: "#efe7dd"
  ci-chat-out: "#dcf8c6"
  ci-chat-header: "#075e54"
typography:
  display:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(52px, 6.3vw, 96px)"
    fontWeight: 500
    lineHeight: 1.03
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(38px, 4.4vw, 64px)"
    fontWeight: 500
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "30px"
    fontWeight: 500
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  subtitle:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "17px"
    fontWeight: 600
    lineHeight: 1.5
  body:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  body-muted:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "12px"
    fontWeight: 400
    lineHeight: 1.6
  action:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.5
  ci-display:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(44px, 5vw, 72px)"
    fontWeight: 500
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  ci-headline:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(40px, 4.6vw, 66px)"
    fontWeight: 500
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  ci-title:
    fontFamily: "Barlow, 'Arial Narrow', sans-serif"
    fontSize: "clamp(28px, 2.8vw, 40px)"
    fontWeight: 500
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  ci-lead:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(16px, 1.3vw, 19px)"
    fontWeight: 400
    lineHeight: 1.6
  ci-action:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "15px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.01em"
rounded:
  none: "0px"
  hairline: "2px"
  bubble-tail: "3px"
  ci-control: "4px"
  bubble: "12px"
  chart-card: "16px"
  phone: "20px"
  pill: "32px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "22px"
  lg: "30px"
  xl: "48px"
  gutter: "clamp(22px, 5vw, 88px)"
  section: "clamp(76px, 8vw, 120px)"
  max-width: "1320px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.night}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "14px 22px"
    height: "58px"
  button-primary-hover:
    backgroundColor: "{colors.cyan-hover}"
    textColor: "{colors.night}"
  text-link:
    backgroundColor: "transparent"
    textColor: "{colors.paper}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "7px 0"
    height: "44px"
  text-link-hover:
    textColor: "{colors.cyan}"
  input-field:
    backgroundColor: "{colors.field-bg}"
    textColor: "{colors.paper}"
    rounded: "{rounded.hairline}"
    padding: "12px 14px"
    height: "49px"
  whatsapp-float:
    backgroundColor: "{colors.whatsapp}"
    textColor: "#052514"
    rounded: "{rounded.pill}"
    padding: "12px 17px 12px 22px"
    height: "62px"
  ci-button-primary:
    backgroundColor: "{colors.ci-green}"
    textColor: "{colors.ci-green-ink}"
    typography: "{typography.ci-action}"
    rounded: "{rounded.ci-control}"
    padding: "12px 26px 12px 20px"
    height: "56px"
  ci-button-primary-hover:
    backgroundColor: "{colors.ci-green-hover}"
    textColor: "{colors.ci-green-ink}"
  ci-button-big:
    backgroundColor: "{colors.ci-green}"
    textColor: "{colors.ci-green-ink}"
    rounded: "{rounded.ci-control}"
    padding: "14px 32px 14px 24px"
    height: "64px"
  ci-button-dark:
    backgroundColor: "{colors.ci-ink}"
    textColor: "{colors.ci-ground}"
    rounded: "{rounded.ci-control}"
    padding: "14px 32px 14px 24px"
    height: "64px"
  ci-text-link:
    backgroundColor: "transparent"
    textColor: "{colors.ci-ink}"
    typography: "{typography.action}"
    rounded: "{rounded.none}"
    padding: "0 0 3px"
  ci-switch-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ci-muted}"
    rounded: "{rounded.hairline}"
    padding: "12px 22px"
  ci-switch-tab-selected:
    backgroundColor: "{colors.ci-ink}"
    textColor: "{colors.ci-ground}"
  ci-switch-tab-selected-com:
    backgroundColor: "{colors.ci-green}"
    textColor: "{colors.ci-green-ink}"
  ci-chat-bubble-in:
    backgroundColor: "{colors.ci-ground}"
    textColor: "{colors.ci-ink}"
    rounded: "{rounded.bubble}"
    padding: "8px 10px 18px"
  ci-chat-bubble-out:
    backgroundColor: "{colors.ci-chat-out}"
    textColor: "{colors.ci-ink}"
    rounded: "{rounded.bubble}"
    padding: "8px 10px 18px"
  ci-price-card:
    backgroundColor: "{colors.ci-green-soft}"
    textColor: "{colors.ci-ink}"
    rounded: "{rounded.none}"
    padding: "clamp(28px, 3vw, 44px)"
---

# Design System: TA Consulting

## Overview

**Creative North Star: "The Systems Schematic"**

The site reads like an acquisition-engineering report drawn on a night-navy sheet: a dense, high-contrast editorial document where content sits in horizontal bands separated by 1px rules, headlines are set in a compressed display face, and a single electric cyan does the pointing. Depth is mostly tonal (navy on deeper navy, a saturated blue band for the system explorer, a cold ice-blue band for the funnel lab); the few shadows that exist are soft glows under the illustrated characters and the floating WhatsApp pill, never hard offsets. Numbers are large, tabular and cyan; prose is small, muted and tightly measured.

One route lives in daylight. The Cardápio IA landing page (`body.cardapio-ia-page`) overrides the root tokens to a pure white ground with near-black ink, trades cyan for WhatsApp green as the action colour and adds tomato orange as the colour of the dinner rush. It keeps the same two typefaces, the same 1320px container, the same section rhythm and the same 1px-rule sectioning, so it still reads as this house; it simply flips the sheet from navy to white. Its one licensed exception to the flat language is the floating phone frame in the hero (20px radius, soft shadow) and the chat bubbles inside it (12px radius); every other control on the page is a 4px or sharper corner.

Confirmed rejections carried from the product brief and the build: no SaaS template, no card mosaics, no glass or frosted surfaces, no purple gradients. Illustrations are flat vector scenes with thick outlines; no photography, no portrait of Tony.

**Key Characteristics:**
- Night-navy ground, off-white ink, one cyan accent that owns every "look here" moment
- Barlow Semi Condensed 500 for every heading and big number; Manrope for all running text and controls
- Horizontal editorial bands and 1px rules instead of cards; filled colour bands only for the system explorer, the lab, the closing CTA and the automation strip
- Square or 2px corners on controls; radius appears only on the chart stage (16px), funnel bars (10px) and the WhatsApp pill (32px)
- Cardápio IA variant: white ground, green action, orange rush, 4px control radius, rounded phone and chat bubbles as the single curved element family
- Charts are inline SVG with thick bars, labelled axes and a visible "simulação" disclosure under every title

## Colors

A cold navy-and-cyan palette for the consultancy, and a warm white-green-orange palette scoped to the Cardápio IA page.

### Primary
- **Signal Cyan** (`{colors.cyan}`): the single accent. Primary button fill, headline span colour, metric values, service names, active layer tab, link hover, brand mark, breadcrumb links, chart line, range-slider thumb. If something needs to be noticed, it is cyan; nothing else competes.
- **Cyan Hover** (`{colors.cyan-hover}`): button hover fill; the button also lifts 3px.
- **Electric Blue** (`{colors.electric}`) and **Action Blue** (`{colors.action-blue}`): the deep blues behind the growth-stage gradient and the legacy `.button` token; on the shipped site the visible button is cyan, so these read as background structure, not calls to action.

### Secondary
- **System Blue** (`{colors.system-blue}`) and **CTA Blue** (`{colors.cta-blue}`): saturated band fills for the system explorer section and the final CTA. White text, cyan buttons inside.
- **Night Band** (`{colors.night-band}`): the quieter navy band for the automation flow and case sections.
- **Lab Ice** (`{colors.lab-ice}`) with **Lab Ink** (`{colors.lab-ink}`): the one light band on the dark site, used only for the funnel lab; blue `#1547e6` bars and buttons inside it.

### Tertiary
- **Mint** (`{colors.mint}`): positive status only (copied-to-clipboard confirmation).
- **WhatsApp Green** (`{colors.whatsapp}`): the floating WhatsApp pill on every route, with `#052514` text. The only green on the dark pages.

### Neutral
- **Night** (`{colors.night}`): page and header background.
- **Night Surface** (`{colors.night-surface}`): alternating section background (system, scope, case).
- **Paper** (`{colors.paper}`): headings, strong text, body on first paragraphs, button text on blue bands.
- **Haze** (`{colors.haze}`): all secondary prose, labels, captions, nav links at rest.
- **Rule** (`{colors.rule}`): every 1px divider, section border and header border.
- **Field** (`{colors.field-bg}` / `{colors.field-border}`): input background and border; the border turns cyan on focus.

### Cardápio IA (scoped to `body.cardapio-ia-page`)
- **Ground** (`{colors.ci-ground}`): pure white page, header, footer, sticky bar, inbound chat bubble.
- **Warm Surface** (`{colors.ci-surface}`): declared surface token; the page relies on white plus tinted panels instead.
- **Ink** (`{colors.ci-ink}`): headings, body, dark switch tab, dark closing button, 3px focus ring.
- **Muted** (`{colors.ci-muted}`): leads, descriptions, chart axis labels, captions.
- **Rule** (`{colors.ci-rule}`): the 1px section separators, FAQ dividers, step borders, phone frame border.
- **WhatsApp Green** (`{colors.ci-green}`): the action colour and the "com Cardápio IA" side. Buttons, selected "com" tab, bullet dots on the "com" panel, step number squares, open FAQ toggle, the response-time bars of the "com" chart, the full-bleed closing band.
- **Green Text** (`{colors.ci-green-text}`): headline span colour, big step numerals, link hover, checklist icons. Dark enough for white.
- **Green Ink** (`{colors.ci-green-ink}`): text on green fills.
- **Green Soft** (`{colors.ci-green-soft}`) with **Green Edge** (`{colors.ci-green-edge}`): the price card tint and the "com" scene background.
- **Tomato Orange** (`{colors.ci-orange}`): the rush. Rush bars in the hourly chart, "sem" response bars, "sem" panel bullets, the avatar disc in the phone header.
- **Orange Text** (`{colors.ci-orange-text}`) and **Orange Soft** (`{colors.ci-orange-soft}`): rush labels and the rush band behind the hourly chart; "sem" scene background.
- **Idle Bar** (`{colors.ci-bar-idle}`): off-peak bars in the hourly chart.
- **Chat Wall / Chat Out / Chat Header** (`{colors.ci-chat-wall}`, `{colors.ci-chat-out}`, `{colors.ci-chat-header}`): the WhatsApp-like phone interior; these are quotations of the real app, not system colours, and appear only inside chat simulations.

### Named Rules
**The One Signal Rule.** On dark routes, cyan is the only accent. Green exists only as the WhatsApp pill and the positive status line; orange and purple do not exist.

**The Sides Rule.** On Cardápio IA, green always means "with Cardápio IA" and orange always means "the rush without it". A chart, bullet, bar or scene never swaps them.

**The Token Alias Rule.** The Cardápio IA scope remaps `--blue`, `--action` and `--blue-text` to greens so inherited header, footer and link styles stay coherent. New Cardápio IA styles must reference the `--green*` and `--orange*` names, never the blue names.

## Typography

**Display Font:** Barlow Semi Condensed 500 (self-hosted `barlow-semi-condensed-500.woff2`, fallback Arial Narrow)
**Body Font:** Manrope 400 and 600–800 (self-hosted, fallback Arial)
**Label/Mono Font:** none; tabular figures via `font-variant-numeric: tabular-nums` on metrics

**Character:** A compressed, industrial display face pressed tight against a small, calm humanist body. Headlines are large, negative-tracked and often broken into deliberate lines; prose is small, muted and never wider than 70ch. Every big number is Barlow.

### Hierarchy
- **Display** (`{typography.display}`): page h1. The home hero sets it uppercase at `clamp(72px, 6.6vw, 96px)`, line-height 0.98, tracking −0.035em; subpages use the default. A closing phrase inside the h1 is cyan.
- **Headline** (`{typography.headline}`): section h2. Section-specific sizes range 44–54px on desktop and 39–44px on mobile.
- **Title** (`{typography.title}`): h3 for service names, FAQ groups, steps. Service names on the home page climb to `clamp(33px, 3.3vw, 47px)` in cyan.
- **Statement** (Barlow 500, `clamp(25px, 2.5vw, 35px)` / 1.2): the one-sentence promise under a hero or the lead of a segment page.
- **Subtitle** (`{typography.subtitle}`): h4 and strong promise lines inside rows.
- **Body** (`{typography.body}`): base; most descriptive paragraphs step down to `{typography.body-muted}` in Haze.
- **Action** (`{typography.action}`): buttons, text links, nav.
- **Label** (`{typography.label}`): captions, source notes, form hints, flow steps; 13px for nav and metric terms.
- **Metric** (Barlow 500, `clamp(45px, 4.7vw, 66px)` / 1.1, tracking −0.03em, tabular): metric values, section indices (60–78px), case numbers (88px).

### Cardápio IA hierarchy
- **Display** (`{typography.ci-display}`): hero h1 in three lines, last line green.
- **Headline** (`{typography.ci-headline}`): every section h2, two lines with the second in green; the price-list h2 is `clamp(36px, 4vw, 56px)`.
- **Title** (`{typography.ci-title}`): compare-panel h3; step, kind and setup h3 are 26–28px / 1.1.
- **Lead** (`{typography.ci-lead}`): hero lead and section intros (17px / 1.6), max 46–52ch.
- **Action** (`{typography.ci-action}`): green buttons; 17px in the big hero/closing variant.
- **Price** (Barlow 500, `clamp(84px, 9vw, 124px)` / 1, tracking −0.05em): the R$ 99 amount; 44px in the hero, 26px in the sticky bar.
- **Chart caption** (Barlow 500, 22px / 1.15 title + Manrope 12px note): every chart title, with the simulation disclosure as the note.
- **Body** (Manrope 15–16px / 1.55–1.65, Muted): list points, step descriptions, FAQ answers.

### Named Rules
**The Barlow-Means-Hierarchy Rule.** Barlow appears only on headings, big numbers, chart titles and the in-chart "hora do rush" annotation. Running text, controls and labels are always Manrope.

**The Second-Line Accent Rule.** A multi-line heading accents its closing line (cyan on dark, green on Cardápio IA) with a `span`; the accent never lands on the first line.

**The Small Muted Prose Rule.** Descriptive paragraphs are 15px Haze under a 16px Paper promise; body text rarely exceeds 17px except article bodies and Cardápio IA leads.

## Layout

A single centred container (`{spacing.max-width}` wide, `{spacing.gutter}` side gutters) with sections padded `{spacing.section}` top and bottom. Content is organised as full-width horizontal bands; inside each band a two-column asymmetric grid (ratios like 1.3fr/1fr, 1.2fr/0.8fr, 0.8fr/1.4fr) places a heading or statement on the left and detail on the right, with gaps of 90–120px on desktop. Lists are stacked rows separated by 1px rules, not cards. Sticky elements: the header (88px tall, 76px below 960px, 72px below 700px), the method intro at `top: 140px`, and the Cardápio IA price card at `top: 110px`.

Breakpoints are 1700px (hero widens), 1200px (gaps tighten), 960px (two-column grids compress or drop to one, header contact hides), 700px (mobile: gutter 24px, section 72px, full-width buttons, full-screen drawer navigation with 36px Barlow links) and 370px (single-column forms and footers).

Cardápio IA keeps the same container and section rhythm. Its hero is a 1.05fr/1fr grid with the illustration right and the phone absolutely positioned at the illustration's bottom-right (`width: min(296px, 42%)`); below 960px the visual moves above the title and the phone becomes a centred block pulled up 70px over the scene. Flow steps are a 4-column grid (2 at 1200px, 1 at 700px); "para quem" is 4 columns (2 at 960px). Below 700px a fixed bottom bar carries the price and a 48px green button, the floating WhatsApp pill hides, and the footer gains 120px bottom padding so nothing is covered.

## Elevation & Depth

Hybrid, flat-first. Depth is conveyed by tonal bands (Night, Night Surface, Night Band, System Blue, Lab Ice) and 1px rules. Shadows exist in exactly four places on the dark site and two on the light page, all soft and diffuse: the WhatsApp pill (`0 7px 24px #0005`), the chart line glow (`drop-shadow(0 3px 8px #001c42)`), drop-shadows under illustrated figures (`drop-shadow(0 20px 24px rgb(0 12 38 / .28))` and `0 18px 20px rgb(0 11 35 / .34)`), the Cardápio IA phone frame (`0 18px 40px -20px #14181c55`) and the pill restyled for white (`0 10px 28px #0e3a1f33`). Gradients appear on the home hero backdrop (radial navy), the growth-stage and human-chart panels (linear deep blue) and the page-intro backdrop; nowhere else.

### Shadow Vocabulary
- **Pill lift** (`box-shadow: 0 7px 24px #0005`; on white `0 10px 28px #0e3a1f33`): the floating WhatsApp button only.
- **Figure ground** (`filter: drop-shadow(0 20px 24px rgb(0 12 38 / .28))`): illustrated characters that sit on the navy sheet.
- **Phone float** (`box-shadow: 0 18px 40px -20px #14181c55`): the Cardápio IA hero phone, because it overlaps the illustration.
- **Chart glow** (`filter: drop-shadow(0 3px 8px #001c42)`): the cyan growth line.

### Named Rules
**The Float-Only Shadow Rule.** A shadow is permitted only on an element that literally floats over other content (the WhatsApp pill, the hero phone) or on an illustrated figure standing on the sheet. Rows, panels, cards, inputs and buttons are flat.

**The Band-Not-Card Rule.** Change the background of a whole section to mark a shift in register; never box individual items.

## Shapes

Square by default. Controls on the dark site have 0 radius (buttons) or 2px (inputs, textarea); dividers are 1px lines; list markers are 6–12px filled circles or 1px rotated-square chevrons. Rounded geometry is reserved for things that are pills or screens: the WhatsApp pill (`{rounded.pill}`), the chart stage card (`{rounded.chart-card}`), funnel bars (10px) and the range thumb (circle). Illustrations are flat vector with thick outlines, no frames, often bleeding past their column.

Cardápio IA sharpens the same language on white: buttons, step-number squares, FAQ toggles and the compare switch housing all use `{rounded.ci-control}` (4px); switch tabs are 2px; scene and step frames are square with a 1px Rule border. The only soft shapes are the phone frame (`{rounded.phone}`), chat bubbles (`{rounded.bubble}` with a 3px tail corner on the inbound top-left / outbound top-right), typing-dot pills and the 3px "exemplo simulado" tag. SVG chart bars carry `rx="3"` and the rush band `rx="6"`.

## Components

### Buttons
- **Shape:** square on dark (0 radius, 58px min height); 4px on Cardápio IA (56px, 64px for the big variant, 48px in the sticky bar).
- **Primary (dark):** `{components.button-primary}`: cyan fill, Night text, 14px Manrope 600, arrow icon on the right with 32px gap. Full width below 700px.
- **Hover / Focus:** fill to Cyan Hover and `translateY(-3px)`; arrow slides 3px right; focus ring 2px cyan at 5px offset; disabled at 50% opacity.
- **Primary (Cardápio IA):** `{components.ci-button-primary}`: green fill, Green Ink text, 15px Manrope 700 with a 22px WhatsApp glyph on the left. Hover to Green Hover with a 2px lift; focus ring 3px Ink at 3px offset.
- **Dark (Cardápio IA closing band):** `{components.ci-button-dark}`: Ink fill, white text on the green band; hover to black.
- **Text link:** `{components.text-link}`: no fill, 1px Rule underline, 14px Manrope 600 with a 20px arrow; hover turns text and underline cyan. The Cardápio IA version underlines in Ink and hovers to Green Text.
- **Blue-band buttons:** inside the funnel lab the button is `#1547e6` with white text; inside the final CTA it is cyan.

### Chips / Switches
- **Chart switch (dark):** transparent buttons with a 1px `#8bb1ff` border, white text, 44px tall; pressed state fills cyan with `#062239` text; in the human-chart variant corners are 6px.
- **Compare switch (Cardápio IA):** `{components.ci-switch-tab}` inside a 4px-padded white housing with a 1px Rule border; the selected "sem" tab is Ink on white text, the selected "com" tab is green on Green Ink. JS-only; without JS both panels stack.
- **Layer tabs (system explorer):** text buttons with a 1px bottom rule, cyan fill when pressed.

### Rows / Containers
- **Corner Style:** square.
- **Background:** transparent over the band colour; a service row tints to `#10223a` on hover.
- **Border:** 1px Rule top (and bottom on the last row).
- **Internal Padding:** 20–39px vertical, 0 horizontal; grids 2–3 columns.
- **Cardápio IA price card:** `{components.ci-price-card}`: Green Soft fill with a 1px Green Edge border, sticky, holding the 124px price; the one tinted panel on the page.
- **Cardápio IA scene / step frames:** white with 1px Rule border; compare scenes tint Orange Soft ("sem") or Green Soft ("com"); step visuals are 4:5 (1:1 on mobile) with a mini chat overlaid bottom-left.

### Inputs / Fields
- **Style:** `{components.input-field}`: Field background, 1px Field Border, 2px radius, 13px text (16px on mobile), 49px min height; textarea 130px min.
- **Focus:** border turns cyan; caret cyan.
- **Error / Disabled:** invalid border `#ff9a93`; submit button at 75% opacity while busy.

### Navigation
- Sticky Night header with a 1px bottom rule; logo image 118px wide; links 14px Haze that turn cyan on hover or when current; header contact link in cyan with a left rule. Below 700px a 40px square toggle opens a full-height Night drawer with 36px Barlow links separated by rules. Cardápio IA paints the same header white with Rule borders and Green Text contact.

### WhatsApp Pill
Fixed bottom-right, 62px tall, `{components.whatsapp-float}` with a 34px glyph; collapses to a 58px circle below 700px and hides while the menu is open or a field is focused. Hover to `#55e28a` with a 3px lift.

### Chat Simulation (Cardápio IA signature)
A white phone frame (`{rounded.phone}`, 1px Rule, Phone Float shadow) with a `#075e54` header holding an orange 34px avatar disc, a Chat Wall message list 372px tall (250px on mobile) and a white bottom bar with a "Ver de novo" replay button and the label "Demonstração simulada". Bubbles are `{components.ci-chat-bubble-in}` (white) and `{components.ci-chat-bubble-out}` (Chat Out green) at 86% max width, 13px text with a 10px grey timestamp; messages fade and rise 8px as they appear; a three-dot typing pill precedes replies. Mini chats inside step frames reuse the bubbles at 12–14px with a 3px-radius "exemplo simulado" tag.

### Charts (Cardápio IA)
Inline SVG only, generated at build time, `role="img"` with a descriptive label. Every chart is a `<figure>` whose caption carries a Barlow 22px title and a 12px Muted note that names it a simulation. Bars are thick rectangles with `rx="3"`; axis text is 12px Manrope 600 in Muted. The hourly chart uses Idle Bar for off-peak hours, Tomato Orange bars with Orange Text labels for 19h–21h and an Orange Soft band labelled "HORA DO RUSH" in Barlow 15px uppercase (24px on mobile, where odd-hour labels hide). Response-time charts are horizontal bars, orange on the "sem" panel and green on the "com" panel, with Ink slot labels and bold Muted values.

## Do's and Don'ts

### Do:
- **Do** keep cyan (`#67edff`) as the only accent on dark routes and use it for the headline span, metric values and the primary button.
- **Do** separate content with 1px rules (`#293952` dark, `#e4e2dc` light) and change whole-section backgrounds to shift register.
- **Do** set every heading and big number in Barlow Semi Condensed 500 with negative tracking, and everything else in Manrope.
- **Do** keep buttons square (0 radius) on dark routes and 4px on Cardápio IA, with a right-side arrow or left-side WhatsApp glyph.
- **Do** label every chart as a simulation in its caption and provide an `aria-label` that states the takeaway.
- **Do** keep green = "com Cardápio IA" and orange = "the rush" on the light page, in bars, bullets, scenes and tabs alike.
- **Do** honour `prefers-reduced-motion` by removing bubble transitions, panel entrances, line draws and hover lifts.

### Don't:
- **Don't** box content into card mosaics or add shadows to rows, panels, inputs or buttons; shadows belong only to floating elements and illustrated figures.
- **Don't** use glass, blur or purple gradients; the only gradients are the navy hero backdrop and the deep-blue chart stage.
- **Don't** reach for photography or a portrait; illustrations are flat vector with thick outlines.
- **Don't** round anything on Cardápio IA beyond 4px except the phone frame and chat bubbles.
- **Don't** use orange, purple or a second green on dark routes; the WhatsApp pill is the only green there.
- **Don't** let the Cardápio IA light theme leak: every light override is scoped to `body.cardapio-ia-page`.
