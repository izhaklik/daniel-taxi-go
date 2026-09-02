# דניאל taxi — Hebrew RTL landing page

A single-page, mobile-first (390px) landing site for a large-taxi service, fully in Hebrew with RTL layout, built on your specified palette (off-white background, white cards, yellow #f6c600 CTAs with near-black text).

## What gets built

One page at `/` with these sections in order:

1. **Hero** — full-width photo of a large van-taxi with a dark overlay (rgba(0,0,0,0.45)), headline "מונית גדולה עד 10 נוסעים — זמינות 24/7", service-area subheadline, call + WhatsApp CTAs.
2. **Trust strip** — 4 icon items: נהג מקצועי ומורשה, מחיר קבוע מראש, זמינות 24/7, רכב מרווח וממוזג.
3. **Services grid** — 6 white cards (נתב"ג, אילת, אירועים וחתונות, הסעות עובדים, טיולים ואטרקציות, נסיעות בין-עירוניות), each with a WhatsApp CTA carrying a service-specific pre-filled Hebrew message.
4. **Popular routes board** — route list (תל אביב ← נתב"ג, חיפה ← אילת, ירושלים ← ים המלח, plus a few more) with editable placeholder prices and a per-route WhatsApp button.
5. **Quote form** — שם, טלפון, מוצא, יעד, תאריך, מספר נוסעים; on submit it opens WhatsApp with the details formatted into the message. No backend.
6. **Testimonials** — 3 short Hebrew reviews with star ratings.
7. **FAQ accordion** — the 5 questions you listed.
8. **Footer** — phone, WhatsApp, service hours, service areas, Google Maps embed placeholder.

Plus a **sticky mobile bottom bar**: white with top shadow, WhatsApp filled yellow, call button outlined yellow with dark text.

## Business data in one place

A single exported `CONFIG` object at the top of the page file holds business name, phone `054-6633776`, WhatsApp `97246633776`, service areas (בת ים, ראשון לציון, חולון, אילת), hours, services (title + WhatsApp message), routes (from/to/price), testimonials, and FAQ. Editing it needs no JSX changes.

## Technical notes

- `dir="rtl"` and `lang="he"` on `<html>` in `src/routes/__root.tsx`; Heebo loaded via a `<link>` in the root head and registered as a Tailwind theme font in `src/styles.css`.
- Palette added as design tokens in `src/styles.css` (background #f9f9f9, card #ffffff, text #1a1a1a, muted #5a5a5a, yellow #f6c600, hover #dcb200, focus ring at 40% opacity) — no hardcoded color utilities in components; yellow stays the only strong color.
- Layout uses logical properties only (`ps-*`/`pe-*`, `start`/`end`, `text-start`) so RTL mirrors correctly.
- Phone links are real `tel:` links; every WhatsApp link is `https://wa.me/97246633776?text=` with `encodeURIComponent`'d Hebrew text.
- SEO in the route's `head()`: Hebrew title, meta description, og/twitter tags, plus JSON-LD combining LocalBusiness and TaxiService (areaServed, telephone, openingHours).
- Smooth scroll via `scroll-behavior: smooth` and anchor-scroll handlers; subtle fade-in on scroll using an IntersectionObserver hook with a `prefers-reduced-motion` fallback.
- Accessibility: Hebrew `aria-label` on every icon button, labelled form fields, keyboard-accessible accordion (shadcn Accordion), visible focus ring.
- Hero image generated as a project asset (large van-taxi, Israeli street context) and imported as an ES module.
- Structure: `src/routes/index.tsx` holds `CONFIG` and composes section components under `src/components/landing/`, keeping each section readable.
