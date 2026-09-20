# Big Taxi Israel Landing

Build a single-page landing site for an Israeli large-taxi (מונית גדולה) service.

LANGUAGE & DIRECTION

- All content in Hebrew, full RTL layout (dir="rtl" on html, logical CSS properties, no hardcoded left/right).

- Font: Heebo or Assistant from Google Fonts.

BUSINESS

- Name: [דניאל taxi]

- Service: מונית גדולה עד 10 נוסעים —, נסיעות בין-עירוניות, אילת, אירועים, חתונות, טיולים, הסעות עובדים,  נסיעות לנתב"ג

- Phone: [054-6633776]

- WhatsApp: [97246633776]

- Areas: [בת ים, ראשון לציון, חולון, אילת]



DESIGN

- Palette:

  - Background: #f9f9f9 (off-white) across all sections. Use white (#ffffff) cards on top of it for separation, plus soft shadows instead of borders.

  - Buttons / CTAs: #f6c600 (yellow) with #1a1a1a text — yellow needs dark text, never white.

  - Button hover: darken to #dcb200. Focus ring: #f6c600 at 40% opacity.

  - Body text: #1a1a1a. Secondary text: #5a5a5a.

  - Accents (icons, dividers, active states): #f6c600 used sparingly so the CTAs stay dominant.

- The yellow is the ONLY strong color on the page — do not add a second accent color. Everything else is off-white, white, and near-black.

- Since the background is light, the hero needs a dark overlay (rgba(0,0,0,0.45)) on the photo so white headline text is readable.

- Sticky mobile bottom bar: white background with top shadow, two full-width buttons — WhatsApp in #f6c600, call button as an outlined variant (#f6c600 border, transparent fill, #1a1a1a text) so they don't compete.

- Mobile-first, 390px width first. Font: Heebo or Assistant.

SECTIONS (in order)

1. Hero: full-width photo of a large van-taxi, headline "מונית גדולה עד 10 נוסעים — זמינות 24/7", subheadline with service area, two CTAs (call + WhatsApp).

2. Trust strip: 4 icons — נהג מקצועי ומורשה, מחיר קבוע מראש, זמינות 24/7, רכב מרווח וממוזג.

3. Services grid: 6 cards (נתב"ג, אילת, אירועים וחתונות, הסעות עובדים, טיולים ואטרקציות, נסיעות בין-עירוניות). Each card has a WhatsApp CTA with a message pre-filled for that specific service.

4. Popular routes board: interactive list of routes (e.g. תל אביב ← נתב"ג, חיפה ← אילת, ירושלים ← ים המלח) with an estimated price placeholder and a per-route WhatsApp button. Use placeholder prices I can edit in one config object at the top of the file.

5. Quote form: name, phone, origin, destination, date, number of passengers. On submit, open WhatsApp with the details formatted into the message (no backend needed).

6. Testimonials: 3 short Hebrew reviews with star ratings.

7. FAQ accordion: 5 questions (כמה נוסעים נכנסים?, האם יש מקום למזוודות?, איך משלמים?, האם אפשר להזמין מראש?, האם נוסעים בשבת?).

8. Footer: phone, WhatsApp, service hours, service areas, and a Google Maps embed placeholder.

TECHNICAL

- React + Tailwind, single page, no routing.

- Put ALL business data (phone, WhatsApp, routes, prices, services, FAQ) in one exported CONFIG object at the top so I can edit without touching JSX.

- Every phone number is a real tel: link, every WhatsApp button is a wa.me link with encodeURIComponent'd Hebrew text.

- Add SEO: Hebrew <title>, meta description, and LocalBusiness + TaxiService JSON-LD schema.

- Smooth scroll between sections, subtle fade-in on scroll.

- Accessible: aria-labels in Hebrew on all icon buttons.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://daniel-taxi-go.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/71026c08-7678-4001-a941-38d67e226250).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
