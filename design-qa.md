# Design QA

- Source visual truth: browser annotation for the compact MAYBE header mark
- Implementation: `http://127.0.0.1:4173/work.html`
- Viewport: 1329 x 912
- States: expanded header and compact header after scroll

## Findings

- Expanded mark container: 92 x 36 px.
- Compact mark container: 92 x 36 px.
- Compact header: 260 x 76 px and centered.
- Desktop clipping mask remains active.
- Horizontal overflow: none.

## Patch

- Removed the compact-state logo enlargement.
- Kept the compact mark at the same dimensions as the expanded mark.

final result: passed
