import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Phone,
  MessageCircle,
  BadgeCheck,
  
  Clock,
  Snowflake,
  Plane,
  Palmtree,
  Heart,
  Briefcase,
  Map as MapIcon,
  Route as RouteIcon,
  Star,
  ArrowLeft,
  Users,
  MapPin,
  Languages,
  Globe,
} from "lucide-react";

import heroImage from "@/assets/hero-van-taxi.jpg";
import { CONFIG, telLink, waLink } from "@/lib/site-config";
import { Reveal } from "@/components/landing/Reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * לעריכת טלפון, וואטסאפ, מסלולים, מחירים, שירותים ושאלות נפוצות —
 * ערכו את הקובץ src/lib/site-config.ts (אובייקט CONFIG). אין צורך לגעת בקוד העיצוב.
 */
export { CONFIG };

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      name: CONFIG.businessName,
      description: `${CONFIG.tagline} — הסעות, נתב"ג, אילת, אירועים וטיולים. זמינות 24/7.`,
      telephone: CONFIG.phoneTel,
      priceRange: "₪₪",
      address: {
        "@type": "PostalAddress",
        addressLocality: "בת ים",
        addressCountry: "IL",
      },
      areaServed: { "@type": "Country", name: CONFIG.areaServed },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "5",
        reviewCount: String(CONFIG.testimonials.length),
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: 'דניאל taxi — מונית גדולה עד 6 נוסעים | זמינות 24/7' },
      {
        name: "description",
        content:
          'מונית גדולה עד 6 נוסעים בכל הארץ. נסיעות לנתב"ג, אילת, אירועים, חתונות, טיולים והסעות עובדים. נהג דובר עברית ואנגלית, 24/7.',
      },
      { property: "og:title", content: "דניאל taxi — מונית גדולה עד 6 נוסעים" },
      {
        property: "og:description",
        content: 'הזמנת מונית גדולה 24/7 — נתב"ג, אילת, אירועים, טיולים והסעות עובדים.',
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: LandingPage,
});

const trustIcons = {
  badge: BadgeCheck,
  
  clock: Clock,
  car: Snowflake,
  languages: Languages,
} as const;

const serviceIcons = {
  plane: Plane,
  palm: Palmtree,
  heart: Heart,
  briefcase: Briefcase,
  map: MapIcon,
  route: RouteIcon,
} as const;

const btnBase =
  "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-base font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus-visible:ring-4 focus-visible:ring-ring";
const btnSolid = `${btnBase} bg-brand text-brand-foreground hover:bg-brand-hover`;
const btnOutline = `${btnBase} border-2 border-brand bg-transparent text-foreground hover:bg-brand/10`;

function SectionTitle({ children, sub }: { children: string; sub?: string }) {
  return (
    <div className="mb-6 text-center">
      <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{children}</h2>
      {sub ? <p className="mt-2 text-sm text-muted-foreground">{sub}</p> : null}
      <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-brand" />
    </div>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background pb-24 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:inset-inline-start-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-3 focus:text-base focus:font-bold focus:text-brand-foreground"
      >
        דלגו לתוכן המרכזי
      </a>
      {/* Language bar */}
      <nav aria-label="בחירת שפה" className="bg-card">
        <div className="mx-auto flex max-w-5xl justify-end px-5 py-2">
          <Link
            to="/en"
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-bold text-foreground transition-colors hover:bg-brand/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus-visible:ring-4 focus-visible:ring-ring"
            aria-label="למעבר לגרסה האנגלית של האתר"
          >
            <Globe className="size-4 text-brand" aria-hidden="true" />
            English
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt={`${CONFIG.businessName} — ${CONFIG.vehicle}, מונית גדולה עד 6 נוסעים`}
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        />
        <div className="mx-auto flex max-w-5xl flex-col items-start px-5 pb-12 pt-16 sm:pt-24">
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">
            {CONFIG.businessName}
          </span>
          <h1
            className="mt-5 text-3xl font-black leading-tight sm:text-5xl"
            style={{ color: "#ffffff" }}
          >
            מונית גדולה עד 6 נוסעים — זמינות 24/7
          </h1>
          <p
            className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "#f5f5f5" }}
          >
            שירות מונית גדולה — {CONFIG.vehicle} — בכל הארץ. נסיעות
            לנתב"ג, אילת, אירועים, חתונות, טיולים והסעות עובדים. נהג דובר עברית ואנגלית.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={telLink}
              className={btnSolid}
              aria-label={`להתקשר עכשיו ל${CONFIG.businessName} בטלפון ${CONFIG.phoneDisplay}`}
            >
              <Phone className="size-5" aria-hidden="true" />
              התקשרו עכשיו {CONFIG.phoneDisplay}
            </a>
            <a
              href={waLink("שלום, אני מעוניין בהזמנת מונית גדולה. אשמח לפרטים ומחיר.")}
              target="_blank"
              rel="noopener noreferrer"
              className={btnOutline}
              style={{ color: "#ffffff" }}
              aria-label="לשליחת הודעת וואטסאפ להזמנת מונית גדולה"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              וואטסאפ
            </a>
          </div>
        </div>
      </header>

      <main id="main">
      {/* Trust strip */}
      <Reveal as="section" aria-label="למה לבחור בנו" className="mx-auto max-w-5xl px-5 py-10">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {CONFIG.trust.map((item) => {
            const Icon = trustIcons[item.icon as keyof typeof trustIcons];
            return (
              <li
                key={item.title}
                className="flex flex-col items-center gap-2 rounded-2xl bg-card p-4 text-center shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
              >
                <Icon className="size-7 text-brand" aria-hidden="true" />
                <span className="text-sm font-bold leading-snug">{item.title}</span>
              </li>
            );
          })}
        </ul>
      </Reveal>

      {/* Services */}
      <section id="services" className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle sub="בחרו שירות ושלחו הודעה — נחזור אליכם עם מחיר סגור">
          השירותים שלנו
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {CONFIG.services.map((service) => {
            const Icon = serviceIcons[service.icon as keyof typeof serviceIcons];
            return (
              <Reveal
                key={service.title}
                as="article"
                className="flex flex-col rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
              >
                <Icon className="size-8 text-brand" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-bold">{service.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={waLink(service.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnSolid} mt-4 w-full`}
                  aria-label={`וואטסאפ בנושא ${service.title}`}
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  לפרטים בוואטסאפ
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Popular routes */}
      <section id="routes" className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle sub="שלחו הודעה ונחזור אליכם עם מחיר סגור מראש">
          מסלולים פופולריים
        </SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-2">
          {CONFIG.routes.map((route) => (
            <Reveal
              key={`${route.from}-${route.to}`}
              as="li"
              className="flex items-center justify-between gap-3 rounded-2xl bg-card p-4 shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-2 text-sm font-bold">
                <span className="truncate">{route.from}</span>
                <ArrowLeft className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="truncate">{route.to}</span>
              </div>
              <a
                href={waLink(
                  `שלום, אני מעוניין בנסיעה מ${route.from} ל${route.to} במונית גדולה. אשמח לאישור מחיר.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnSolid} shrink-0 px-4 py-2.5 text-sm`}
                aria-label={`וואטסאפ להזמנת נסיעה מ${route.from} ל${route.to}`}
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                הזמנה
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      <QuoteForm />

      {/* Testimonials */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle>לקוחות מספרים</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-3">
          {CONFIG.testimonials.map((item) => (
            <Reveal
              key={item.name}
              as="article"
              className="rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
            >
              <div className="flex gap-0.5" role="img" aria-label={`דירוג ${item.stars} מתוך 5`}>
                {Array.from({ length: item.stars }).map((_, i) => (
                  <Star
                    key={i}
                    className="size-4 fill-brand text-brand"
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="mt-3 text-sm leading-relaxed">{item.text}</p>
              <p className="mt-3 text-sm font-bold text-muted-foreground">{item.name}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-3xl px-5 py-10">
        <SectionTitle>שאלות נפוצות</SectionTitle>
        <Reveal className="rounded-2xl bg-card px-4 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
          <Accordion type="single" collapsible className="w-full">
            {CONFIG.faq.map((item, i) => (
              <AccordionItem key={item.q} value={`item-${i}`}>
                <AccordionTrigger className="text-start text-base font-bold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </section>

      </main>

      <SiteFooter />
      <StickyBar />
    </div>
  );
}

function QuoteForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    origin: "",
    destination: "",
    date: "",
    passengers: "",
  });

  const update = (key: keyof typeof form) => (event: { target: { value: string } }) =>
    setForm((prev) => ({ ...prev, [key]: event.target.value }));

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const message = [
      "שלום, אני מעוניין בהצעת מחיר למונית גדולה:",
      `שם: ${form.name}`,
      `טלפון: ${form.phone}`,
      `מוצא: ${form.origin}`,
      `יעד: ${form.destination}`,
      `תאריך: ${form.date}`,
      `מספר נוסעים: ${form.passengers}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full rounded-xl bg-background px-4 py-3 text-base text-foreground shadow-inner ring-1 ring-border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus:ring-4 focus:ring-ring";

  return (
    <section id="quote" className="mx-auto max-w-3xl px-5 py-10">
      <SectionTitle sub="ממלאים את הפרטים ונשלח אותם אלינו בוואטסאפ">
        בקשת הצעת מחיר
      </SectionTitle>
      <Reveal className="rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
        <form onSubmit={handleSubmit} noValidate={false} className="grid gap-4 sm:grid-cols-2">
          <p className="text-sm text-muted-foreground sm:col-span-2">
            כל השדות המסומנים בכוכבית (*) הם שדות חובה.
          </p>
          <div>
            <label htmlFor="name" className="mb-1.5 block text-sm font-bold">
              שם מלא <span aria-hidden="true">*</span>
            </label>
            <input
              id="name"
              required
              aria-required="true"
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              className={fieldClass}
              placeholder="ישראל ישראלי"
            />
          </div>
          <div>
            <label htmlFor="phone" className="mb-1.5 block text-sm font-bold">
              טלפון <span aria-hidden="true">*</span>
            </label>
            <input
              id="phone"
              required
              aria-required="true"
              aria-describedby="phone-hint"
              autoComplete="tel"
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={update("phone")}
              className={fieldClass}
              placeholder="050-0000000"
            />
            <p id="phone-hint" className="mt-1.5 text-xs text-muted-foreground">
              לדוגמה: 050-0000000
            </p>
          </div>
          <div>
            <label htmlFor="origin" className="mb-1.5 block text-sm font-bold">
              נקודת מוצא <span aria-hidden="true">*</span>
            </label>
            <input
              id="origin"
              required
              aria-required="true"
              value={form.origin}
              onChange={update("origin")}
              className={fieldClass}
              placeholder="בת ים"
            />
          </div>
          <div>
            <label htmlFor="destination" className="mb-1.5 block text-sm font-bold">
              יעד <span aria-hidden="true">*</span>
            </label>
            <input
              id="destination"
              required
              aria-required="true"
              value={form.destination}
              onChange={update("destination")}
              className={fieldClass}
              placeholder='נתב"ג'
            />
          </div>
          <div>
            <label htmlFor="date" className="mb-1.5 block text-sm font-bold">
              תאריך הנסיעה <span aria-hidden="true">*</span>
            </label>
            <input
              id="date"
              required
              aria-required="true"
              type="date"
              value={form.date}
              onChange={update("date")}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="passengers" className="mb-1.5 block text-sm font-bold">
              מספר נוסעים <span aria-hidden="true">*</span>
            </label>
            <input
              id="passengers"
              required
              aria-required="true"
              aria-describedby="passengers-hint"
              type="number"
              min={1}
              max={6}
              value={form.passengers}
              onChange={update("passengers")}
              className={fieldClass}
              placeholder="8"
            />
            <p id="passengers-hint" className="mt-1.5 text-xs text-muted-foreground">
              עד 6 נוסעים בנסיעה אחת
            </p>
          </div>
          <button
            type="submit"
            className={`${btnSolid} sm:col-span-2`}
            aria-label="לשליחת פרטי הנסיעה בוואטסאפ"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            שליחה בוואטסאפ
          </button>
        </form>
      </Reveal>
    </section>
  );
}

function SiteFooter() {
  return (
    <footer className="mt-4 border-t border-border bg-card">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-black">דניאל TAXI</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {CONFIG.tagline} ·
          </p>

          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-brand" aria-hidden="true" />
              <a
                href={telLink}
                className="font-bold underline"
                aria-label={`להתקשר לטלפון ${CONFIG.phoneDisplay}`}
              >
                {CONFIG.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-brand" aria-hidden="true" />
              <a
                href={waLink("שלום, אני מעוניין בהזמנת מונית גדולה.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
                aria-label="לפתיחת שיחת וואטסאפ"
              >
                וואטסאפ
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4 text-brand" aria-hidden="true" />
              שעות פעילות: {CONFIG.hours}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-brand" aria-hidden="true" />
              אזורי שירות: {CONFIG.areas.join(", ")}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Users className="size-4 text-brand" aria-hidden="true" />
              עד 6 נוסעים בנסיעה אחת
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1 text-sm font-bold">אזור השירות שלנו</h3>
          <p className="mb-3 text-sm text-muted-foreground">כל הארץ</p>
          <div className="overflow-hidden rounded-2xl shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
            <iframe
              title="מפת אזור השירות"
              src={CONFIG.mapsEmbedUrl}
              loading="lazy"
              className="h-56 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      <div className="border-t border-border px-5 py-4 text-center text-xs text-muted-foreground">
        <Link
          to="/accessibility"
          className="font-bold underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          הצהרת נגישות (תקן ישראלי 5568 / WCAG 2.1 AA)
        </Link>
        <p className="mt-2">
          © {new Date().getFullYear()} {CONFIG.businessName} · כל הזכויות שמורות
        </p>
      </div>
    </footer>
  );
}

function StickyBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 bg-card p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] md:hidden">
      <a
        href={waLink("שלום, אני מעוניין בהזמנת מונית גדולה.")}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnSolid} w-full px-3 py-3 text-sm`}
        aria-label="לשליחת הודעת וואטסאפ"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        וואטסאפ
      </a>
      <a
        href={telLink}
        className={`${btnOutline} w-full px-3 py-3 text-sm`}
        aria-label={`להתקשר לטלפון ${CONFIG.phoneDisplay}`}
      >
        <Phone className="size-5" aria-hidden="true" />
        התקשרו
      </a>
    </div>
  );
}
