# Design QA — MAYBE portfolio rebuild

## Evidence

- Source visual truth: https://bymonolog.com/ and https://bymonolog.com/work.
- Implementation: http://127.0.0.1:4173/ and http://127.0.0.1:4173/work.html.
- Desktop first screen: `C:/Users/gagao/.codex/visualizations/2026/09/29/01a0eb34-4046-74b3-8b00-5f483f924506/site-qa/reference-desktop.jpg` beside `implementation-desktop.jpg` in the same folder.
- Work archive: `reference-work.jpg` beside `implementation-work.jpg` in the same folder.
- Mobile first screen: `reference-mobile.jpg` beside `implementation-mobile.jpg` in the same folder.
- Desktop CSS viewport: 1280 × 720; both captures: 1265 × 712 pixels. Mobile CSS viewport: 390 × 844; both captures: 375 × 812 pixels. Source and implementation used the same browser viewport and screenshot density for each comparison; no resizing was needed.
- States: homepage top, work archive top, mobile homepage top; local mobile menu, About dialog, English language, work filter, case pages and FAQ were also inspected.

## Comparison

The implementation follows the source's information architecture: oversized introductory headline, a short positioning statement, selected work, services, a three-step process, FAQs, a large contact invitation, and a separate filterable work archive. The About navigation opens an overlay. Copy, project images, colors and brand mark intentionally belong to Ilya Zubkov's existing portfolio.

- **Typography:** Both use a heavy sans display hierarchy with compact navigation and small mono labels. Russian text wraps differently from the English reference, but headline scale and hierarchy remain clear at both viewports.
- **Spacing and layout:** The desktop split hero, dark interludes, work grid and mobile vertical order follow the source. The work archive's filter and cards are visible at comparable desktop scroll positions.
- **Colors and tokens:** Off-white and near-black alternate across sections. The existing MAYBE orange is used for the primary invitation. The reference's grain and pale watermark were left out as brand-specific decoration.
- **Images and assets:** The MAYBE logo and project imagery are local assets from this repository. SAYDO and KOTO MYOTO display real project images. Other cases use typographic covers because the repository does not contain images for them. No MONOLOG image, logo, testimonial or metric was copied.
- **Copy and content:** All biographical, project, service and contact information comes from the original MAYBE site. The source's client metrics and testimonials were omitted because there is no corresponding evidence in the portfolio.

## Iteration history

1. **[P2] Mobile introduction appeared after the hero image.** In the initial 390 × 844 comparison, the reference placed the introduction and primary action before the image. Reordered the mobile hero with CSS. The revised `implementation-mobile.jpg` shows headline → introduction → action → image.
2. **[P2] Work archive began too low on desktop.** In the initial 1280 × 720 comparison, the filter and cards were mostly below the viewport. Reduced the page hero's top spacing and the lead's bottom rhythm. The revised `implementation-work.jpg` shows the archive at a comparable position to the reference.
3. **[P2] About opened as a dark full-screen window.** Rechecked the source interaction: on desktop it slides in as a 720 px light panel from the right, while the page beneath it is dimmed and blurred; the panel has its own scroll and a fixed close control. Rebuilt the MAYBE About panel with that structure, using Ilya's portrait and biography. At 390 px it fills the screen. Verified opening from the desktop navigation and mobile menu, independent scroll, Escape, backdrop click, close button, and scroll reset on reopening.

## Functional verification

- RU/EN switch updates the title, headline and navigation.
- The work archive renders nine projects; the Packaging filter returns SAYDO and KOTO MYOTO.
- Mobile menu opens and navigates; About panel opens and closes on desktop and mobile.
- Services navigation reaches the homepage anchor; FAQ expands.
- SAYDO and KOTO MYOTO case pages render their media; no horizontal overflow at 390 px.
- Browser console: no errors in the checked routes and states.
- `node --check` passed for the site's JavaScript; local HTML asset references resolve.

## Remaining content work

- Seven projects have no supplied case images. Their typographic covers are intentional until project imagery is added.
- The existing portrait asset is used as supplied; confirm it is the portrait intended for publication.

final result: passed

## 2026-10-02 — Homepage “01 / Approach” redesign

### Evidence and comparison

- Reference: `D:/Temp/codex-clipboard-6d4a3965-3e93-4872-80db-ed0afab0b2fc.png` (2523 × 783).
- Implementation: `http://127.0.0.1:8767/index.html#approach`.
- Capture: `C:/Users/gagao/.codex/visualizations/2026/09/29/01a0ede5-e228-74c3-884b-40a5e59820f2/approach-redesign.png` (2523 × 808), cropped from the 2523 × 1100 desktop viewport to include the content and bottom divider.
- Side-by-side evidence: `C:/Users/gagao/.codex/visualizations/2026/09/29/01a0ede5-e228-74c3-884b-40a5e59820f2/approach-comparison.png`. Both panels normalized to 1280 pixels wide without changing proportions. Compared together with text fully filled through the existing `figma-capture` query; live preview retains scroll animation.
- Typography: both paragraphs have equal bold weight and size (55.506 px at the reference width), compact line height, and small supporting labels. Different line breaks follow the site's existing Russian copy.
- Spacing and layout: narrow facts column, broad editorial text column, generous paragraph separation, portrait signature, and bottom divider match the reference composition. The existing 30% grid is retained to align with the homepage headline and navigation; the reference uses approximately 34%.
- Color: plain near-black background and off-white text use existing site tokens. Grain is omitted in accordance with the user's earlier instruction to remove Noise.
- Images and assets: existing local portrait is circular; official Bootstrap arrow SVGs are sharp and load correctly. No reference portrait or fictional award metric is used.
- Content: the original approach text remains. Facts derive from the nine portfolio projects and five service entries, with working previous/next controls and 01/02 counter.

### Verification and iteration

- Added facts controls, matching paragraph typography, and the portrait signature. Adjusted supporting typography to the reference's scale.
- Recaptured the correctly scrolled viewport after discovering that screenshot clip coordinates referred to the document; the final comparison uses the verified viewport crop.
- Next switches to 05 / Design disciplines / 02/02; Previous returns to 09 / Projects in the portfolio / 01/02. Progress line updates with the selection.
- At 390 × 844 the section stacks into one column with 30 px paragraphs, no overlap or horizontal overflow. Desktop also has no horizontal overflow.
- Portrait and arrow assets load; browser error logs are empty. `node --check assets/site.js` passes.
- No actionable P0, P1, or P2 findings remain in this scope. Existing copy, grid alignment, and plain background are intentional adaptations. The combined comparison resolves the section-level composition; separate detail crops were unnecessary for the verified local assets and typography.

final result: passed

## 2026-10-02 — Services grid correction

- Scope: homepage `#services`; user annotation moves the heading and service names onto the navigation's content rail.
- Heading, list rules, and service names now share the navigation's horizontal origin: x=771.21875 at 2545 px, x=434.6875 at 1440 px, and x=329.359375 at 1024 px. Section label stays in the left rail; numeric row markers sit immediately to the left of the list.
- Fixed `.service-list span` to target only direct numeric markers. Animation spans now inherit heading typography instead of the 12 px mono marker font. Verified animated names at 44 px (wide desktop), 30.24 px (1440), and 26 px (390).
- List and SAYDO image form two columns on desktop; the image preserves its original 1500/851 proportion. On phones the section becomes one column with natural text wrapping and image below.
- Inspected browser screenshots at 2545 × 1014, 1440 × 1000, and 390 × 844; checked 1024 × 900 alignment. No horizontal overflow or browser console errors. Existing scroll animations remain enabled.
- Desktop evidence: `C:/Users/gagao/.codex/visualizations/2026/09/29/01a0ede5-e228-74c3-884b-40a5e59820f2/services-grid.png`.

final result: passed

## 2026-10-02 — Opaque header contrast and divider removal

- Removed the full-width bottom border of the Approach section identified by the user's first annotation. Services heading and row rules remain as layout elements.
- Replaced `mix-blend-mode: difference` with normal compositing and a fully opaque fixed header. Over light sections: RGB 17/17/17 background and 243/243/238 foreground. Over dark sections: the reverse. Logo, language control and action capsule follow these theme variables; imagery and letters cannot show through the header.
- Header contrast follows the background of the section underneath its midpoint, independent of image pixels. Scroll and resize updates are scheduled once per frame; restored scroll position, translated content and image-driven layout changes refresh the theme.
- Verified desktop at 1440 × 1000: dark header on the homepage; light header while approach text scrolls underneath; dark header again on the light FAQ section. Removed divider computes to 0 px.
- Verified mobile at 390 × 844: opaque header, no horizontal overflow; opening the menu uses a consistent opaque dark surface from either header theme; closing restores the section theme. Browser errors: none.
- `node --check assets/site.js` passed.

final result: passed

## 2026-10-02 — Transparent section-based header (correction)

- Supersedes the opaque-header decision above: the user wants no header-wide background.
- Header now computes to transparent in both themes with normal compositing. Over a light section the logo/navigation are black and the action capsule is black with light text; over a dark section the logo/navigation are light and the action capsule is light with dark text.
- Existing section-based scroll detection retained. Removed the empty header region's pointer interception so underlying content remains interactive; header links and buttons remain clickable.
- Verified rendered desktop homepage and dark Services section at 1440 × 1000: correct opposite foreground colors, transparent backgrounds and no difference blend. Browser error log empty. Expanded mobile menu retains its own opaque surface for readability.

final result: passed

## 2026-10-02 — Contact typography correction

- Rebuilt contact introduction on the shared header rail: label in the left column; headline, supporting copy and email in the right column. Reduced excessive top spacing and tuned responsive display size.
- Heading uses two deliberate lines, “Давайте создадим / что‑то сильное.”, with a nonbreaking hyphen. Explicit motion lines retain those breaks during reveal animation, font loading, resize and language changes.
- Animation line measurement treats words as atomic spans, preventing hyphenated words from being measured across multiple lines. Description now has natural readable lines; mobile email fits on one row beside its arrow.
- Inspected 2526 × 1016 desktop, 1440 × 900 laptop and 390 × 844 mobile: two headline rows, no orphan “то”, no horizontal overflow. Desktop headline aligns with navigation. Headline, introduction and email fit in the first screen at verified sizes.
- Checked English headline and restored Russian; animations remain enabled. Browser error logs empty; JavaScript syntax check passed.

final result: passed

## 2026-10-03 — Contact browser comments

- Removed the language switch from the shared header on all pages. Site defaults to Russian, independent of an old stored English selection; translation strings remain in source.
- Moved the contact description into a left aside beneath the contact label, matching the homepage composition. The two-line heading stays on the shared right content rail.
- Moved Telegram, Behance and Instagram links beside the email in the first section. Removed their former standalone section below contact details. Existing destinations preserved.
- At 2560 × 1300 and 1440 × 1000, mail and social links are side by side with aligned bottoms, no overlapping content. Below 1180 px the links stack; at 390 × 844 the order is label, heading, description, mail and socials, with no horizontal overflow.
- Browser checks confirm no language controls, one social-link group with three unchanged hrefs, and no browser errors. JavaScript syntax check passed.

final result: passed

## 2026-10-03 — Work archive browser comments

- Split work introduction into left copy and right headline aligned with navigation and card grid. Removed project count markup and its rendering code.
- Filter capsules now have 12 px vertical and 18 px horizontal padding, at least 40 px height and 8 px gaps. Font sizes unchanged: 16 px desktop and 14 px mobile.
- Reduced archive CTA font to a maximum 96 px and added deliberate two-line wording: “Есть идея, которой нужна / сильная визуальная форма?”. Existing scroll fill remains active; arrow keeps a separate space.
- Verified desktop at 2560 × 1300, CTA at 1280 px, and mobile at 390 × 844. CTA has two text rows at checked widths, with no horizontal overflow. Heading aligns with navigation; lead stays in left rail on desktop and stacks on mobile.
- Packaging filter returns SAYDO and KOTO MYOTO; All projects restores nine cards. Browser error log empty; JavaScript syntax check passed.

final result: passed

## 2026-10-03 — Shared page layout based on the homepage

- Added shared CSS parameters for content rail, hero top spacing, display typography and introductory copy. Work, Contact, About and the project template now use the homepage values. Header navigation, headings and main content share the same rail, including the 32% intermediate desktop breakpoint.
- Reorganized About and project introductions into a left aside and right heading. Preserved project roles, dates, copy, media and existing motion. Aligned About story, contact details and project story with the shared columns; step numbers stay outside the text rail on desktop and inside the page on smaller screens.
- At 2560 × 1300, all five page headings start at x=775.78, y=140.30 and use 136.5 px text. Work, Contact and About introductory copy matches the homepage at 21 px, line height 24.99 px and y=182.55.
- At 1440 × 900, all five page headings start at x=434.69, y=118.30 and use 79.2 px text; introductory text uses 18.72 px. Homepage hero remains exactly 900 px tall. Also checked Work at 1024 × 768: heading and navigation both start at x=329.36.
- Inspected rendered mobile Home, Work, Contact, About and project pages at 390 × 844: common 35.1 px heading size, readable stacked copy and no horizontal overflow. Project year label now shares the top row with its back link. At 768 × 1024, all five headings start at x=18, y=132 and use 69.12 px text; project step numbers remain visible.
- Browser error logs empty. JavaScript syntax check passed. Preview viewport reset after verification.

final result: passed

## 2026-10-03 — Homepage header and services comments

- Reduced the shared logo from 113 to 100 px on desktop and from 86 to 76 px on mobile, preserving its extension beyond the left edge.
- Added brand orange hover/focus states to header links, About/menu buttons, logo and CTA capsule. Logo uses the existing SVG as an orange mask; normal light/dark section contrast remains intact. Checked the rendered header's transparent light/dark states and its hover CSS rules.
- Renamed shared desktop/mobile navigation from “Работы” to “Проекты”. Confirmed the link opens the work archive.
- Removed the homepage aside CTA, service count and service image. Service rows now occupy the full right content rail. At 2035 × 1244 the five rows occupy a 1379.81 px column starting at x=615.77; the homepage still fits 1244 px height.
- Unified arrow typography with the contact email reference: Inter, weight 730, shared glyph. Applied to actions, project cards, slide captions, socials, dialog, footer and directional controls, preserving their directions. Verified no divergent arrow font weights in the rendered homepage or archive. Statistics controls retain light arrows on the dark background.
- At 390 × 844, the smaller logo and header controls fit, mobile navigation opens, and the slideshow has 32 px separation after the introductory text. Checked desktop/mobile screenshots, archive/contact navigation and no horizontal overflow. Browser error logs empty; JavaScript syntax check passed. Preview viewport reset.

final result: passed

## 2026-10-03 — Page transitions

- Enabled native cross-document view transitions in the shared stylesheet: the incoming page slides from below over the outgoing page, which moves upward slightly. Duration 700 ms. Header has a separate named snapshot and remains stationary.
- Added an animation fallback for browsers without cross-document support and direct file navigation: 240 ms exit and 500 ms entry. Native anchors, external/mail links, downloads and modifier clicks are preserved. Reduced-motion preferences disable transitions; restored pages cancel stale exit state.
- Browser verification at 1440 × 900 detected an active native transition and the expected `page-slide-in` animation when navigating Home → Projects → SAYDO → Projects → Contact. Confirmed the header snapshot has no animation.
- At 390 × 844, a mobile-menu transition to Projects activates successfully, closes the menu and introduces no horizontal overflow. A cross-page link to Services also activates; a subsequent Process anchor scroll has no page transition. Light/dark header contrast settles correctly.
- Ten isolated fallback navigation checks passed: anchors, external/mail, modifier keys, new-tab/download links, project query changes, duplicate clicks, reduced motion and native delegation. Direct file preview was blocked by the browser URL policy, so visual file-mode verification was not performed.
- JavaScript syntax check passed; browser error logs empty. Reference for native CSS syntax: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@view-transition

final result: passed for the HTTP preview and fallback navigation checks

## 2026-10-03 — Wider About drawer

- Increased the desktop drawer maximum width from 720 to 960 px and the viewport limit from 56.25% to 72%. Introductory copy now uses up to 720 px; metadata and story columns adapt to the wider panel.
- Verified the open drawer at 1440 × 900: width 960 px, right aligned at x=480, with no horizontal overflow. Tablet at 768 × 1024 uses a 660.47 px panel and stacked story columns. Phone at 390 × 844 uses the full 390 px width, with readable text and a visible close button.
- Inspected desktop, tablet and phone screenshots. Versioned shared assets consistently across all five HTML documents.

final result: passed

## 2026-10-03 — Synchronize shared elements across all pages

- Found a stale rendered stylesheet in the user's existing homepage tab: logo width 113 px, while a freshly opened work page used the current 100 px rule.
- All five HTML documents now explicitly load the same version of the shared CSS and JavaScript (`20261003-shared-elements`). Refreshed the original homepage tab and verified it loads that version and the 100 px logo.
- Centralized logo width and edge extension in shared CSS variables: desktop 100 px / -24 px; mobile 76 px / -16 px. Removed the remaining About practice count and renamed the archive's document title to Projects.
- At 1440 × 900, Home, Work, Contact, About and the project template have identical header measurements: logo 100 px at x=-24, navigation 18 px at x=434.69, CTA 47.19 px high with 16 px type and 999 px radius. Arrow weight is consistently 730.
- At 390 × 844, all five page types use the same 76 px logo at x=-16, 36 px CTA with 11 px type, and 14 px menu label. No horizontal overflow.
- Opened all nine project routes and verified the same logo/navigation, shared arrow styling and no horizontal overflow. Browser error logs empty; JavaScript syntax check passed. Test viewport reset.

final result: passed


## 2026-10-03 — Cross-page fragment transition fix

- Reproduced Projects → Services and Projects → Process: the native transition was active while the incoming homepage remained at scrollY=0. Global smooth scrolling moved to the fragment after its snapshot, producing a second movement.
- Added a shared parser-blocking entry script that disables smooth scrolling during page entry and restores it after load and transition completion. The pagereveal hook prepares fragment position, header contrast and visible text before the incoming snapshot. History traversal keeps its restored scroll position.
- Verified both desktop destinations during an active transition: target top ~88 px and a light header on the dark section. Target position stays unchanged after the transition; ordinary same-page anchor navigation remains smooth without a page transition.
- Verified both routes through the mobile menu at 390 × 844: active native transition, target top ~88 px, readable heading, no horizontal overflow, and stable position afterward. Normal Projects → Contact navigation still animates. Browser error logs empty; both JavaScript syntax checks passed.
- Lifecycle reference: https://developer.chrome.com/docs/web-platform/view-transitions/cross-document

final result: passed


## 2026-10-03 — Full-screen mobile menu

- Shared mobile navigation now fills the viewport below the 62 px header using dynamic viewport height. Telegram, Behance and Instagram use the existing profile URLs and remain at the lower edge with safe-area padding.
- Primary navigation scrolls separately on short screens. Removed capsule corners from the About navigation row; all navigation dividers are straight.
- Centralized menu state for toggle, Escape, navigation, About and desktop resize. Background content is inert while the menu is open, and keyboard focus stays within the header/menu.
- Verified at 390 × 844: menu bottom 844 px, socials bottom 820 px, no horizontal overflow. At 320 × 568: menu bottom 568 px and socials bottom 544 px; visually inspected readable links. At 667 × 375: socials bottom 351 px, primary list scrolls within 183 px rather than displacing the social links.
- Open/close resets expanded state and removes background inertness. Services navigation still lands at ~88 px with the menu closed; About opens its drawer and closes the menu. Checked automatic menu closure when returning to desktop. Browser error logs empty; JavaScript syntax check passed.

final result: passed
