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


## 2026-10-04 — Services inspired by Lines Design

- Inspected https://linesdesign.ru/#services in the browser: category tabs switch service groups; each service expands independently with descriptive content and a contact action. Used the interaction structure with original MAYBE styling and copy.
- Replaced the five static service rows with three tabs (Branding, Art Direction, Design and AI). Preserved all five disciplines, including the statistics count. Added original descriptions, use cases, deliverables and contact links; no invented prices or delivery times.
- Native details remain usable without JavaScript. Added interruptible 320 ms expansion/collapse, native reduced-motion behavior, tab ARIA relationships and keyboard navigation. Open headers use brand orange; buttons remain capsules and content follows the shared 30% rail.
- Verified category switching, independent expansion, collapse and three rapid repeated clicks. Finished content height matches its natural height. Contact action opens contact.html.
- Visually inspected desktop 1440 × 1000, tablet 768 × 1024 and phones 390 × 844 / 320 × 568. No horizontal overflow. The three tabs fit one row at 390 px and wrap at 320 px.
- Projects → Services retains an active page transition and arrives at target top ~88 px with Branding selected. Browser error logs empty; JavaScript syntax and whitespace checks passed.

final result: passed locally


## 2026-10-04 — Service tabs in the left column

- Moved the service tabs into the left 30% column, aligned with the section label. The service catalog stays aligned with the heading and navigation rail. Mobile keeps tabs above the cards at the left page margin.
- Verified at 1440 px: tabs x=18, catalog and heading x=434.69. Category switching remains functional. At 390 px both tabs and catalog start at x=18, with horizontal tab semantics and no horizontal overflow. JavaScript syntax check passed.

final result: passed locally


## 2026-10-04 — Services without card backgrounds

- Removed gray surfaces, outlines and outer corner radii from all service items. Closed summary hover remains transparent with orange text; the orange open summary and content expansion are preserved.
- Verified both open and closed items have transparent backgrounds and zero-width borders. AI service expands correctly; no horizontal overflow. Inspected the rendered desktop section.

final result: passed locally


## 2026-10-04 — Services as divided rows

- Restyled service accordions as transparent rows with thin top/bottom dividers, matching the Process section. Removed orange summary surfaces and rounded summary corners.
- Replaced plus/minus marks with the shared arrow glyph: down-right when collapsed, up-right when expanded. The arrow rotates during state changes; expansion animation remains intact.
- Verified rendered desktop rows, expansion and arrow rotation. At 390 px, heading and description share x=54 and there is no horizontal overflow. Whitespace check passed.

final result: passed locally


## 2026-10-04 — Earlier Approach text fill

- Both Approach paragraphs now share progress based on the top of their text column, beginning at viewport entry and finishing when that top reaches 55% of viewport height. Other text-fill sections retain their existing timing.
- Verified at 2551 × 1314 with the Approach text beginning at 57% of viewport height, matching the screenshot: average letter opacity ~0.997 for both paragraphs, with 97–99% of letters above 0.9 opacity. Earlier scroll position retains a partial fill. JavaScript syntax and whitespace checks passed.

final result: passed locally


## 2026-10-04 — Earlier text fill across all blocks

- Applied the same viewport-entry timing to every existing text-fill target on all pages. All lines of each target share progress; the two Approach paragraphs retain their common anchor. Fill finishes at 55% of viewport height.
- At 1440 × 1000 and a 57% top position: Process and FAQ headings had opacity 1; the two-line home CTA averaged 0.997 and the two-line Projects CTA averaged 0.999. At an earlier 85% position the Projects CTA averaged 0.461, confirming gradual fill remains.
- At 390 × 844 the two-line Process heading was fully filled at 57%, with no horizontal overflow. Shared script version updated in all five pages. JavaScript syntax and whitespace checks passed.

final result: passed locally


## 2026-10-04 — Slightly slower text fill

- Extended the shared scroll-fill range from 45% to 50% of viewport height (about 10% slower). Text is fully filled when its anchor reaches the middle of the screen.
- At 1440 × 1000, Approach paragraphs averaged opacity 0.928 and 0.925 at a 57% top position; both reached opacity 1 at 50%. Updated the shared script version in all five pages. JavaScript syntax and whitespace checks passed.

final result: passed locally


## 2026-10-04 — Open project brief

- Replaced the homepage FAQ accordion with an open six-question brief covering business context, required work, identity impact, applications, timing and budget. Added short prompts and a note that unresolved details can be discussed together.
- Desktop layout follows the shared 30% content rail: the brief list and hero content both start at x=434.69 at 1440 px. Six numbered rows have thin dividers and separate question/prompt columns. Retained the shared text-fill animation on the new heading.
- Verified desktop and 390 px mobile screenshots. Mobile rows stack question and prompt at the same x=54, all six are present, with no horizontal overflow and no browser errors. JavaScript syntax and whitespace checks passed.

final result: passed locally


## 2026-10-04 — Brief heading aligned with the homepage

- Moved the brief heading above the questions in the right content column. The section label, introduction and note remain in the left rail. Matched the introduction typography and spacing to the homepage aside.
- At 2536 px the heading, list and hero content share x=768.47; the label sits 5 px below the heading top. Checked the rendered wide-screen composition.
- At 390 px verified the visual order (label, heading, introduction, note, six questions), with no horizontal overflow. Shared CSS version updated in all five pages; whitespace check passed.

final result: passed locally


## 2026-10-04 — Process in the shared site style

- Rebuilt Process around the shared content rail: section label and short introduction on the left, sentence-case heading and all three stages on the right. Kept existing stage descriptions, arrow directions and text animations.
- Matched the heading scale to the brief and the stage typography, numbers and arrows to Services. Removed the superseded oversized heading and mobile layout overrides.
- At 1440 px, hero content, Process heading and stage dividers share x=434.69; Process and brief headings both use 51.84 px type. Checked desktop and 390 px screenshots. Mobile stage headings/descriptions align at x=54, all arrows remain within their rows, and there is no horizontal overflow. CSS version updated across all five pages; whitespace check passed.

final result: passed locally


## 2026-10-04 — Vector arrows instead of emoji glyphs

- Replaced all static and generated Unicode arrows with empty decorative spans using a shared SVG mask. Explicit WebKit and standard mask rules render the same sharp monochrome shape independent of iOS emoji fonts; currentColor retains light/dark and hover colors. Existing rotation classes and accordion transitions remain.
- Updated both shared asset versions in all five pages. Parsed the SVG and verified there are no diagonal Unicode arrow glyphs in page templates or script.
- At 390 px checked rendered Services, full-screen menu and Contact screenshots. Home had 30 vector arrows and zero glyph-bearing arrow spans; expanded/collapsed service rotations remained 0/90 degrees. Contact icons and email arrow rendered correctly with no horizontal overflow. Physical iPhone rendering was not tested. JavaScript syntax and whitespace checks passed.

final result: passed locally


## 2026-10-04 — Stats timeline, typography and footer

- Centered both Approach controls using a horizontal SVG mask, rotating only the left arrow by 180 degrees. At 2560 px both rendered arrows had identical top/bottom bounds (253.55 / 275.55 px).
- Added a 7000 ms elapsed-time progress bar and automatic fact rotation. Time pauses offscreen, in hidden tabs and while interacting with the widget; manual navigation resets it. Checked manual 01→02 switching, zeroed progress and automatic 02→01 switching after a 7.2 second wait.
- Added shared Russian preposition binding using nonbreaking spaces, including generated content and both motion text splitters. Prepositions move with the next word only when needed; no hard breaks are inserted. Checked grouped Approach words and no trailing prepositions in measured animation lines on 390/320 px homepage and 320 px Projects.
- Changed the homepage CTA to the supplied copy with an explicit line break: “Давайте создадим,” / “что-то красивое! Вместе!”. Verified two rendered lines at 2560, 390 and 320 px.
- Added Dprofile (https://dprofile.ru/maybeproject) to the shared footer. Checked homepage and Projects links and kept the footer contact arrow beside its label. No horizontal overflow or browser errors in the checked mobile views. Shared asset versions updated in all five pages; SVG, JavaScript syntax and whitespace checks passed.

final result: passed locally


## 2026-10-04 — Bind hanging conjunctions and introductory words

- Extended the shared Russian word binding to conjunctions, relative pronouns and “Это”, covering all six annotated cases. Repeated binding also keeps adjacent combinations such as “и на каком” together; wrapping remains responsive without inserted hard breaks.
- At 2560 px verified Range bounds for “которая работает”, “и системе”, “и на каком”, “Это поможет” and “и предложить”: each marked word shares the following word's line. The second Process stage now starts its next line with “и носители”.
- At 320 px checked no horizontal overflow and no marked conjunctions/introductory words left at animation-line ends. The CTA still has two lines, and bound words survive letter splitting. No browser errors; shared JS version updated in all five pages. JavaScript syntax and whitespace checks passed.

final result: passed locally


## 2026-10-04 — Service contact buttons in the left column

- Moved all five service contact buttons from the deliverables column into the description column, below the context text. Buttons share the heading/description alignment and retain a minimum 24 px gap; taller columns align the button toward the bottom.
- Checked the rendered 1440 px layout: heading, description and button share x=518.69. All five buttons are in descriptions and none remain in the deliverables column. At 390 px heading/button share x=54 and the button appears before deliverables, without horizontal overflow. Shared CSS version updated in all five pages; whitespace check passed.

final result: passed locally


## 2026-10-04 — Compact homepage CTA on mobile

- Replaced the mobile absolute arrow and heading spacer with a normal grid flow: label, two-line headline, then a 56 px arrow aligned right. Reduced section padding from 85 to 52 px, kept 28 px content gaps and relaxed the mobile headline tracking. Desktop layout remains governed by the existing rules.
- Checked 320, 390 and 820 px: exactly two headline lines, no horizontal overflow and no overlapping button. At 390 px the section height is 288.69 px (previously 366.53 px); at 320 px the button starts 28 px after the title. Reviewed the 390 px screenshot. At 1440 px the title still has two lines and the button retains its absolute desktop positioning. No browser errors. Physical iPhone rendering was not tested. Shared CSS version updated in all five pages; whitespace check passed.

final result: passed locally


## 2026-10-04 — Identity labels and smaller homepage CTA arrow

- Updated the hero signature and shared footer to “Илья Зубков / MAYBE PROJECT”. Removed the MAYBE prefix from the hero discipline label. Removed “выборочным” / “selected” from the shared availability note.
- Reduced the homepage CTA circle to 56–88 px on desktop and 48 px on mobile, with proportionate vector arrows. Checked 1462 px: circle 87.72 px, correct rendered labels and no horizontal overflow. Checked 320 px: circle 48 px, footer signature wraps within its column with a 20 px gap before the contact link, correct availability note and no horizontal overflow. Reviewed the mobile footer screenshot. Shared asset versions updated in all five pages.

final result: passed locally


## 2026-10-04 — Desktop homepage scroll chapters

- Added native vertical mandatory scroll snapping only for the homepage on fine-pointer desktop viewports above 820 px. Main sections stop at their starts; the footer also has an end snap point so its final links remain reachable. Hero, Approach, Services, Process and Brief occupy at least one viewport. Intrinsic heights can grow with content; no clipping, nested scroll containers or wheel handlers were introduced. Reduced-motion users retain instant programmatic scrolling.
- At 1462×1044 the five primary sections each measured 1044 px. A 760 px scroll settled at the Approach start, and navigation to Process settled at its start. At 1440×768 both branding details expanded Services to 952.72 px: scrolling inside it kept the lower button visible before continuing to Process. Checked upward scrolling to Approach, Projects retaining scroll-snap-type none, Projects→Services landing at top=0, and reaching all footer links at document end.
- At 390×844 snapping is none and section heights remain intrinsic; a 270 px scroll retained its exact position without snapping. No horizontal overflow or browser errors. Shared CSS version updated in all five pages; whitespace check passed.

final result: passed locally


## 2026-10-04 — Smooth desktop chapter transitions

- Added a homepage-only desktop scroll controller with a cosine ease and a 900 ms viewport transition (650–1100 ms for shorter/longer distances). Wheel input moves to the adjacent chapter; remaining trackpad momentum is discarded until the gesture ends. A taller chapter has a lower reading stop. Same-page menu links and keyboard chapter navigation use the same motion. Native snapping remains the no-script fallback; mobile and reduced-motion users keep native scrolling. Resize, history traversal, page entry/hide and pointer input cancel pending animations. Nested scroll containers and the About dialog retain their own wheel scrolling; zoom and horizontal wheel input are not intercepted.
- At 1440×900, a strong 2800 px scroll settled at Approach (y=900), without skipping sections. Sampled the Services→Process transition: y=1800 at 35 ms, 1833 at 139 ms, 2180 at 436 ms, 2589 at 723 ms and 2700 at 917 ms, confirming gradual acceleration/deceleration and the exact final boundary. Same-page Services link finished at top=0. About dialog scrolled by 500 px while the page stayed at y=1800. At 1440×768 the expanded Services lower stop landed at y=1721 and kept its final button visible (bottom=666.72).
- At 390×844 the controller is inactive and a 270 px scroll remains y=270, with no horizontal overflow or browser errors. An isolated controller check passed keyboard section order, tall-section reading stop, Home, history cancellation and reduced-motion/mobile fallbacks. JavaScript syntax and whitespace checks passed; shared asset versions updated in all five pages.

final result: passed locally


## 2026-10-04 — Visible letter fill after chapter arrival

- On the desktop homepage, letter fill now follows scroll progress with a 1450 ms full-range rate, continuing via animation frames after the chapter scroll ends. Both Approach paragraphs share one state. Offscreen future chapters reset their state; mobile and reduced-motion behavior retain their existing rendering.
- At 1440×900 measured Approach fill during the 900 ms scroll: 42/43% at 893 ms, 51/52% at 1012 ms (scroll settled at y=900), 78/78% at 1367 ms and 100/100% at 1728 ms. This leaves a visible fill tail after arrival. A direct menu jump to Process likewise arrived with 22% fill at 1081 ms and completed at 2139 ms.
- At 390 px the desktop controller remains inactive, the Process heading is fully filled at its normal anchored position, and there is no horizontal overflow or browser error. Updated the shared JS version in all five pages. Syntax and whitespace checks passed.

final result: passed locally


## 2026-10-04 — About content only in the side panel

- Removed the standalone About page content, its CSS selectors and motion hooks. About remains in the shared side dialog on all pages. Replaced about.html with a noindex redirect to index.html#about; that fragment opens the dialog automatically and is removed when it closes. Updated README and shared asset versions. No page links target the legacy route.
- Checked the old address at 1440 px: redirected to index.html#about with a 960 px open dialog; closing removed the fragment. On Projects the About navigation button opened the dialog without changing pages. At 390 px the mobile menu closed while About opened at full width, with no overflow. The old address also redirected to an open full-width dialog on mobile. No browser errors. CSS braces balanced, dialog styles retained, standalone selectors absent; JavaScript syntax and whitespace checks passed.

final result: passed locally


## 2026-10-05 — Four Approach facts

- Replaced portfolio/design counts with the supplied four facts: 50+ completed projects; Direct / Agency / In-house; From zero → Beyond launch; Available, with the supplied Russian explanations. Updated the no-script first fact and counter to 01/04. Preserved the 7000 ms timeline, manual cycling and pause behavior.
- Text facts use smaller responsive headings; the From zero arrow uses the horizontal SVG mask with an accessible full title. A reserved content height prevents jumps when switching between numerical and text facts.
- Checked all four titles and labels on desktop and at 390 px: no text or horizontal overflow, the content height stays at 150 px, and the third fact uses arrow-right.svg. Observed automatic cycling after focus and hover left the widget. Saved the desktop preview of 50+. No browser errors, JavaScript syntax and whitespace checks passed. Shared asset versions updated in the four active pages.

final result: passed locally


## 2026-10-05 — Каталог задач бренда

- Четыре вкладки «Создать / Обновить / Развить / Внедрить» содержат 3 / 3 / 4 / 4 задачи с пояснениями из предоставленных таблиц.
- Проверено переключение всех вкладок и раскрытие четвёртой задачи «Развить».
- На ширине 390 px длинные названия помещаются, горизонтального переполнения нет. Временный размер предпросмотра сброшен.
- Кнопка «Обсудить задачу» остаётся под пояснением; добавлены английские переводы задач и описаний.


## 2026-10-05 — Четыре услуги вместо вкладок

- Вместо кнопок категорий слева размещён текст «Масштаб может быть разным» с пояснением в стилистике вводных текстов сайта.
- Справа ровно четыре основных раскрывающихся услуги: «Создать», «Обновить», «Развить», «Внедрить». Внутри сохранены 14 ранее согласованных уточнений задач; это не отдельные услуги.
- Удалена логика вкладок. Проверены раскрытие и закрытие «Обновить», отсутствие ошибок в консоли.
- На ширине 390 px вводный текст и каталог расположены последовательно, уточнения в одну колонку, горизонтального переполнения нет. Размер предпросмотра восстановлен.
- Проверки `node --check assets/site.js` и `git diff --check` пройдены.


## 2026-10-05 — Одновременно раскрыта одна услуга

- При открытии услуги остальные плавно закрываются; повторное нажатие закрывает текущую.
- В браузере проверены переход к «Обновить», быстрое переключение «Развить → Внедрить», закрытие текущей и открытие клавишей Enter. После каждой завершённой анимации открыта только выбранная услуга (либо ни одной при повторном нажатии).
- `node --check assets/site.js` и `git diff --check` пройдены.

## 2026-10-05 — Стрелки без внешних SVG-запросов

- По сообщению пользователя стрелки исчезали при открытии `index.html` с диска. На локальном HTTP-сервере исходные стрелки отображались; проблема совместима с ограничениями загрузки CSS-масок через `file:`.
- Обе SVG-маски встроены в CSS как data URL. Исходные векторы и размеры сохранены, версия CSS обновлена на четырёх активных страницах.
- В локальном браузерном предпросмотре проверены встроенные маски, размеры и видимые стрелки меню, услуг и кнопок. Открытие `file:` для автоматической проверки заблокировано политикой браузера.

## 2026-10-05 — Финальные описания услуг

- В каждой из четырёх услуг уточнения задач заменены одним согласованным абзацем. Сохранены английские переводы и кнопки «Обсудить задачу».
- В браузере проверены финальные описания «Создать», «Обновить», «Развить» и «Внедрить». Сохранены предпросмотры; одновременно раскрыта одна услуга.

## 2026-10-05 — Текстовая структура кейса AXONIC

- Прочитаны описание и текстовые слайды авторского кейса Dprofile. Старый текст заменён семью блоками: концепт, цель, знак, генеративный инструмент, носители, AI-пайплайн, авторское заключение. Добавлены английские версии.
- Для AXONIC добавлен статус «Концептуальный проект», убрана обложка-заглушка. Общий шаблон поддерживает индивидуальные заголовки, несколько абзацев и список инструментов. Пайплайн содержит пять направлений; на узких экранах располагается в одну колонку.
- На локальной странице проверены семь блоков, пять элементов пайплайна и отсутствие горизонтального переполнения при 1280×720. Предпросмотр сохранён.
- Кейс SAYDO сохраняет обложку, шесть текстовых разделов и 15 изображений галереи; переполнения нет.
- По уточнению пользователя «О проекте» с двумя абзацами перенесён в левую колонку вместо прежнего вступления. Справа остаётся шесть блоков с последовательной нумерацией; повторения вводного блока и горизонтального переполнения нет. Сохранён обновлённый предпросмотр.
- `node --check assets/site.js`, `node --check assets/projects.js` и `git diff --check` пройдены.

## 2026-10-05 — Раздел «Процесс» снят с главной

- Исходная разметка сохранена в `backups/process-section-2026-10-05.html`; совпадение с разделом из HEAD проверено. Инструкция восстановления добавлена в README.
- Раздел удалён из главной, ссылка удалена из обоих общих меню. Следующий раздел перенумерован в «03 / Перед началом».
- В браузере проверено отсутствие раздела и ссылок, последовательность «Услуги → Перед началом» без пустого промежутка и отсутствие горизонтального переполнения. Предпросмотр сохранён.
- `node --check assets/site.js` и `git diff --check` пройдены.

## 2026-10-05 — AXONIC: разделы с изображениями 16:9

- Первый экран и семь текстовых разделов собраны в отдельные экраны: текст слева, заглушка справа, как на главной. Все исходные абзацы и пять пунктов AI-пайплайна сохранены.
- В браузере при 1280×720 проверены восемь экранов, отсутствие горизонтального переполнения и пропорции всех заглушек 16:9. Прокрутка колесом перевела первый экран в «О проекте» с остановкой ровно на 720 px.
- Для длинного AI-пайплайна проверена дополнительная остановка: нижний пункт «Анимация» полностью доступен, заглушка остаётся в пределах экрана.
- Для ширины до 820 px предусмотрены одна колонка и обычная прокрутка; адаптивные правила проверены по коду. Мобильный браузер в этой проверке не использовался.
- Настройка `textSide` позволяет поменять колонки местами. Предпросмотр сохранён в `axonic-chapters-desktop.png`.

## 2026-10-05 — Первый экран AXONIC по референсу SAYDO

- Крупное название и подзаголовок перенесены на всю ширину первого экрана. Под разделительной линией — описание слева, роль и год справа.
- Обложка вынесена в отдельный следующий экран без полей, размером с окно браузера. Для будущего изображения предусмотрен `cover` и заполнение области через `object-fit: cover`.
- В браузере при 1280×720 проверено: первый экран высотой 720 px, обложка занимает всю доступную ширину 1265 px и высоту 720 px. Колесо мыши переводит начало кейса к обложке с остановкой на 720 px; горизонтального переполнения нет.
- Сохранены предпросмотры `axonic-opening.png` и `axonic-fullscreen-cover.png`. `node --check assets/site.js` и `git diff --check` пройдены.

## 2026-10-05 — Видеообложка AXONIC

- Заглушка обложки заменена iframe Kinescope из комментария пользователя. Адрес хранится в `coverEmbed`; плеер занимает всю ширину и высоту экрана, имеет доступное название и разрешение полноэкранного режима.
- В браузере проверены загрузка видео, размер плеера 1265×720, отсутствие горизонтального переполнения и переход прокруткой к следующему разделу. Меню поверх видео переключается в светлый цвет.
- Предпросмотр сохранён в `axonic-video-cover.png`. Синтаксис обоих JS-файлов и `git diff --check` проверены.

## 2026-10-05 — Прокрутка поверх видео и скругления

- Видеообложка не принимает указатель и фокус клавиатуры: колесо и жесты обрабатывает страница, без конкуренции с iframe. Доступ к отдельному плееру сохранён ссылкой «Смотреть видео».
- Возвращены скругления 20–40 px и небольшие поля вокруг обложки. В браузере при 1280×720 проверены скругление 25.6 px, попадание указателя в родительскую секцию вместо iframe и отсутствие горизонтального переполнения.
- Три быстрых импульса колеса поверх видео переводят к следующему разделу ровно на 1440 px без пропуска разделов. Обратная прокрутка возвращает обложку на 720 px. Светлое меню переключается обратно в тёмное над текстом.
- Предпросмотр сохранён в `axonic-rounded-cover.png`.

## 2026-10-05 — Верхнее выравнивание разделов AXONIC

- «О проекте» и все следующие текстовые разделы выровнены по верхней линии сетки вместо вертикального центрирования. Используется общий отступ `--hero-top`, как на главной.
- В браузере при 1280×720 проверено: у всех семи разделов текст и заглушка начинаются на 88 px от верхнего края секции; горизонтального переполнения нет. Предпросмотр сохранён в `axonic-grid-top.png`.
- `git diff --check` пройден.

## 2026-10-05 — Вступление на первом экране и пункт 01

- Начало кейса поднято к общему верхнему отступу. Два абзаца «О проекте» перенесены в первый экран под названием; отдельного повторяющегося раздела больше нет.
- «Всё начинается с импульса» — пункт 01 после видеообложки. Изображение заменено исходным `Frame 251.png` без белой рамки; файл показан целиком без обрезки.
- В браузере при 1280×720 проверены высота первого экрана 720 px, шесть последующих разделов, номер 01 и загрузка нового изображения 2560×1440. Предпросмотр — `axonic-first-impulse.png`.

## 2026-10-05 — Два изображения с закреплённым текстом и AXONIC на главной

- Первый раздел содержит два кадра: `Frame 251.png` и `Frame 289.png`. Второй файл скопирован в `assets/projects/axonic/axonic-symbol-grid.png` без изменений. Текст остаётся слева по уточнению пользователя.
- В браузере проверены две остановки: при scrollY 1440 и 2160 верх текста остаётся на 88 px. Второе изображение загружено целиком, углы скруглены; следующий жест переводит к разделу 02 на 2881 px. Переполнения нет.
- На главной порядок слайдов начинается с AXONIC, затем SAYDO, KOTO MYOTO, GFPA, ASSORO. Первый слайд показывает тот же Kinescope-плеер, что и кейс. При смене на SAYDO адрес iframe отключается; клики и колесо проходят к странице.
- Сохранены `axonic-sequence-second.png` и `axonic-home-video-first.png`. Синтаксис обоих JS-файлов и `git diff --check` проверены.

## 2026-10-05 — Видео перед пунктом 01 и фиксированные пропорции

- Перед «Всё начинается с импульса» добавлен отдельный Kinescope-экран `v3YKCDKEJSaPHPUTfMAZdF` через `chapterIntroEmbed`. Основная видеообложка остаётся первым видео; новое видео идёт непосредственно перед пунктом 01. Для его светлого фона меню тёмное.
- Для обеих видеообложек установлены `aspect-ratio: 16/9` и автоматическая высота, включая узкие экраны. Правило мобильной высоты `100svh` удалено; скругления и поля сохранены.
- В браузере проверены загрузка нового видео, точные пропорции обоих плееров 1229×691.3125 (16:9), отсутствие переполнения и перелистывание непосредственно к первому разделу. Дополнительные остановки для незначительного превышения высоты видеоэкраном исключены.
- Мобильные правила проверены по коду; отдельный мобильный браузер не использовался. Предпросмотр — `axonic-chapter-intro-video.png`. Синтаксис JS и `git diff --check` проверены.

## 2026-10-05 — Изображение концепции импульса

- Раздел «Всё начинается с импульса» перемещён сразу после «О проекте» на экран 02. Раздел с целью проекта сохранён следующим экраном.
- Пользовательский файл `Frame 285.png` скопирован в `assets/projects/axonic/axonic-impulse.png` и подключён через `media` текстового блока. Исходное изображение сохранено без изменений, выводится целиком с `object-fit: contain`.
- В браузере проверены порядок разделов, загрузка изображения 2560×1440, отсутствие обрезки и горизонтального переполнения. Предпросмотр сохранён в `axonic-impulse-image.png`.
- Синтаксис JS и `git diff --check` проверены.

## 2026-10-05 — Видео первым внутри раздела 01

- По уточнению пользователя видео `v3YKCDKEJSaPHPUTfMAZdF` перенесено из отдельного экрана в первый кадр раздела «Всё начинается с импульса». Затем идут `Frame 251.png` и `Frame 289.png`; отдельный `case-chapter-intro` удалён.
- В браузере проверены порядок трёх кадров, пропорции видео 16:9, скругления и закрепление текста слева. При 1280×720 переход с видео к изображению сохраняет верх текста на 88 px. После изменения размера окна до 2183×1244 оба изображения перелистываются по одному кадру, текст остаётся на 112 px; следующий жест открывает раздел 02.
- Предпросмотр сохранён в `axonic-impulse-video-first.png`. Синтаксис обоих JS-файлов и `git diff --check` проверены.

## 2026-10-05 — Графические константы и следующий кейс

- Раздел 02 заменён на «От знака к системе»: типографика, цвет, сетка носителей, форма текстовых блоков из геометрии логотипа и графика как отпечаток знака. Текст обновлён на русском и английском.
- Раздел «От автора» удалён вместе с его заглушкой; осталось пять разделов.
- Следующий проект после AXONIC — Redsoft. По уточнению пользователя добавлена пустая страница «Кейс готовится»; материалов и описания проекта пока нет. Она не добавляется в каталог готовых кейсов.
- В браузере 1280×720 проверены новый текст (нижний край 551 px), отсутствие горизонтального переполнения, порядок пяти разделов и переход по ссылке на Redsoft. Предпросмотр — `axonic-visual-system.png`.
- Синтаксис JS и `git diff --check` проверены.

## 2026-10-05 — Мокап инструмента и второй кадр визуальной системы

- Пользовательский `iPad Mockup (1) 1.png` скопирован без изменений в `assets/projects/axonic/axonic-graphic-tool-ipad.png` и заменяет заглушку раздела 03. Размер 2400×1640 задан в данных: изображение выводится целиком с исходными пропорциями, прозрачностью и скруглениями.
- В разделе 02 добавлено второе видео `0kYeR1NvBHFUsmKy3yKKZp` через встроенный плеер. При скролле оно идёт после видео типографики; текст остаётся закреплённым слева.
- В браузере 1280×720 проверены загрузка изображения (860.3125×587.875), второй плеер, переход одним жестом и верх текста 88 px на обоих кадрах. Кнопок «Смотреть видео» нет. Синтаксис JS и `git diff --check` проверены.

## 2026-10-05 — Пять кадров носителей и коммуникации

- В раздел 04 добавлены пять исходных PNG без изменений, в порядке пользователя: Branding Set → Group 83 → Book Folder → Group 84 → Billboard. Для каждого указаны размеры и описания; изображения показываются целиком в исходных пропорциях со скруглениями.
- В браузере 1280×720 проверены все пять переходов и загрузка файлов. Верх текста остаётся на 88 px на кадрах 2–5, пропорции совпадают с оригиналами, горизонтального переполнения нет.
- Синтаксис `assets/projects.js` и `git diff --check` проверены.

## 2026-10-05 — Ещё два кадра в разделе 04

- После билборда добавлены пользовательские `Frame 341.png` и `MacBook Mockup 1.png`, скопированные без изменений. Всего семь кадров; размеры 2560×1440 и 2560×1622 заданы для сохранения исходных пропорций.
- В браузере проверены порядок, загрузка обоих изображений, скругления и переход к последнему кадру. Текст остаётся закреплённым слева на 88 px; горизонтального переполнения нет. Синтаксис JS и `git diff --check` проверены.

## 2026-10-05 — Видео после MacBook и Frame 342

- После MacBook добавлен Kinescope `hKF9WAnBcwQuSUSvGAJNs6` с фиксированными исходными пропорциями 2560×1706. После велосипедиста добавлен `Frame 342.png`, скопированный без изменений в `axonic-prosthesis-football.png` (2560×1440). В разделе 04 девять кадров.
- В браузере проверены порядок, воспроизведение видео, загрузка изображения, скругления, отсутствие кнопок и горизонтального переполнения. Текст остаётся закреплённым слева на 88 px. Синтаксис JS и `git diff --check` проверены.


## 2026-10-05 — Full HD / 2K, общая типографика и один шаг на кадр

- Шрифт подтверждён: Inter на обеих страницах. Заголовки левой колонки кейса приведены к `.service-intro`: 21 px, вес 630, интерлиньяж 1.3 и трекинг −0.04em на Full HD и 2K. Абзацы совпадают с `.service-scope`: 16 px, вес 400, интерлиньяж 1.45, без дополнительного трекинга. Ширина колонки и отступы также взяты с главной; вводный текст первого экрана уменьшен до 16 px.
- Все медиа-рамки 16:9. На десктопах ширина ограничена доступной высотой окна; исходные изображения вписаны без обрезки, скругления сохранены на самих изображениях. Видео с исходными пропорциями 2560×1706 вписано в рамку с сохранением пропорций плеера.
- Для последовательностей исключена общая нижняя остановка раздела, оставлены остановки отдельных кадров. Для длинного текста AI-пайплайна нижняя остановка сохранена.
- В браузере через временные страницы предпросмотра с вложенными окнами проверены реальные viewport 1920×1080, 2560×1440, 1920×900 и 2560×1200. Все 16 рамок соответствуют 16:9 и помещаются по высоте; изображения внутри рамок, горизонтального переполнения нет. Стили заголовков и абзацев совпадают с главной по всем пяти измеренным параметрам.
- Реальное колесо в окнах Full HD / 2K переводит с кадра 1 на 2 за один жест (1080 / 1440 px); текст остаётся на 108 / 112 px. Сохранены `axonic-desktop-sizing.json`, `axonic-fullhd-fit.png`, `axonic-2k-fit.png`. Временные страницы проверки удалены.
- Синтаксис JS и `git diff --check` проверены.


## 2026-10-05 — Совпадающие края медиа

- Все изображения глав кейса заполняют рамку 16:9 через `object-fit: cover`, вместо вписывания по исходным пропорциям. Боковые края соседних кадров совпадают; центральная обрезка и скругления едины для шаблона на всех ширинах. Статичная обложка также заполняет рамку.
- Iframe занимает всю рамку; удалены вычисляемые боковые отступы для видео других исходных пропорций. Внутреннее отображение видео определяется плеером Kinescope.
- В браузере у всех 15 заполненных рамок глав проверено совпадение координат и размеров дочернего медиа с рамкой; визуально проверен ранее суженный кадр с медицинской формой. Синтаксис JS и `git diff --check` проверены.
