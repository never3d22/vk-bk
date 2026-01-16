# CLOUD.md

## Manual testing (CSS-only and UI changes)

This project has no automated tests.
CSS and layout changes are verified manually in the browser.

---

## CSS-only change verification
For changes affecting only CSS:

1. Open the site in a modern browser (Chrome / Yandex Browser)
2. Hard refresh (Ctrl + Shift + R)
3. Verify:
   - No layout breaks
   - No overlapping or cut-off elements
   - Colors, spacing, and fonts match expectations
   - No visual regressions on main screens

---

## Responsive check
- Desktop (≥1280px)
- Mobile (≤390px)

---

## DevTools check
- No CSS errors or warnings in DevTools
- No missing fonts or images

---

## What to report
Testing:
- Manual CSS verification following CLOUD.md
