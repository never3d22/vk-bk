# CLOUD.md

## Testing / QA steps (manual)

> This repository currently has no automated tests.
> When making changes, follow the relevant checklist below and report what was verified.

---

## 1) Quick smoke test (always)
1. Install deps (if applicable): `npm ci` / `pnpm i` / `composer install`
2. Start the project:
   - Frontend: `npm run dev` / `pnpm dev`
   - Backend: `php -S localhost:8000 -t public` (or project-specific)
3. Open the app in a browser and verify:
   - No runtime errors in console
   - Main page loads without layout breaks
   - Key navigation links work

---

## 2) UI regression checklist (when UI/markup/styles changed)
- [ ] Desktop: header/footer look correct
- [ ] Mobile (<= 390px): no text cut off, no overflow, buttons tappable
- [ ] Forms: required fields, validation messages, submit works
- [ ] Modals/popups open/close correctly
- [ ] Images/icons load (no broken assets)

---

## 3) Functional checklist (when business logic changed)
- [ ] Primary flow works end-to-end (core user action for this app)
- [ ] Edge cases: empty states, invalid input, slow network (if relevant)
- [ ] No new warnings/errors in server logs (if backend)

---

## 4) SEO checklist (when meta/content/URLs changed)
- [ ] Title/Description present and correct
- [ ] H1 exists and matches page intent
- [ ] Canonical (if used) points to the correct URL
- [ ] No accidental indexation changes (robots, noindex)
- [ ] No duplicate GET-parameter pages introduced

---

## 5) What to write in PR “Testing” section
Use one of these formats:

### If you ran manual checks
- Manual: Smoke test + relevant checklist items above

### If you couldn’t run anything
- Not run (no automated tests). Please run the steps in CLOUD.md.
