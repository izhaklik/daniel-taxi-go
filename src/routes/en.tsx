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
  ArrowRight,
  Users,
  MapPin,
  Globe,
  Languages,
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
 * English version of the landing page.
 * Business data (phone / WhatsApp / routes) still comes from src/lib/site-config.ts.
 * English copy lives in the EN object below — edit here only.
 */
export const EN = {
  businessName: "Daniel Taxi",
  tagline: "Large taxi for up to 6 passengers",
  vehicle: "Hyundai Staria",
  hours: "24/7, all week long",
  areas: ["All of Israel"],

  trust: [
    { icon: "badge", title: "Professional licensed driver" },
    
    { icon: "clock", title: "Available 24/7" },
    { icon: "car", title: "Spacious, air-conditioned van" },
    { icon: "languages", title: "Driver speaks Hebrew & English" },
  ],

  services: [
    {
      icon: "plane",
      title: "Ben Gurion Airport transfers",
      description:
        "Door-to-door pickup with luggage, flight tracking and on-time terminal arrival.",
      message:
        "Hello, I'd like to book a large taxi to Ben Gurion Airport. Could you send me the details?",
    },
    {
      icon: "palm",
      title: "Trips to Eilat",
      description: "Direct, comfortable rides to Eilat with stops along the way if needed.",
      message: "Hello, I'd like a quote for a large taxi to Eilat.",
    },
    {
      icon: "heart",
      title: "Events & weddings",
      description:
        "Guest transport to the venue and back, timed precisely around your event schedule.",
      message: "Hello, I'd like a large taxi for an event/wedding. Could you send a quote?",
    },
    {
      icon: "briefcase",
      title: "Employee shuttles",
      description:
        "Recurring shuttles for companies, mornings and end of day, with proper invoicing.",
      message: "Hello, I'm interested in regular employee shuttles with a large taxi.",
    },
    {
      icon: "map",
      title: "Tours & attractions",
      description:
        "A full day out for the family or group — the driver waits and drives between sites.",
      message: "Hello, I'd like a large taxi for a tour/attraction day. Could you send a quote?",
    },
    {
      icon: "route",
      title: "Intercity rides",
      description: "Anywhere in Israel to anywhere else, door to door, in full comfort.",
      message: "Hello, I'd like an intercity ride with a large taxi. Could you send details?",
    },
  ],

  routes: [
    { from: "Tel Aviv", to: "Ben Gurion Airport" },
    { from: "Bat Yam", to: "Ben Gurion Airport" },
    { from: "Rishon LeZion", to: "Jerusalem" },
    { from: "Haifa", to: "Eilat" },
    { from: "Jerusalem", to: "Dead Sea" },
    { from: "Holon", to: "Eilat" },
  ],

  testimonials: [
    {
      name: "Orit M.",
      stars: 5,
      text: "We took 9 people to the airport at 4am — Daniel arrived early, the van was clean and cool. Perfect.",
    },
    {
      name: "Ron K.",
      stars: 5,
      text: "Drove to Eilat with the whole family. Great vibe and a great driver.",
    },
    {
      name: "Michal D.",
      stars: 5,
      text: "Guest transport for our wedding. Precise coordination, endless patience and lots of smiles.",
    },
  ],

  faq: [
    {
      q: "How many passengers fit?",
      a: "The large taxi is licensed for up to 6 passengers plus the driver, with a comfortable seat and seatbelt for everyone.",
    },
    {
      q: "Is there room for luggage?",
      a: "Yes. There is a large luggage compartment that fits suitcases for all passengers. If you have an unusual amount, tell us in advance and we'll arrange it.",
    },
    {
      q: "How do I pay?",
      a: "Cash, Bit or bank transfer. Companies and organizations can receive a proper invoice.",
    },
    {
      q: "Can I book in advance?",
      a: "Absolutely, and it's recommended. You can book exact dates and times, including night and early-morning rides.",
    },
    {
      q: "Do you drive on Shabbat?",
      a: "Yes, we're available 24/7 including Shabbat and holidays. Booking ahead is recommended to guarantee availability.",
    },
    {
      q: "What languages does the driver speak?",
      a: "The driver speaks both Hebrew and English, so tourists and visitors from abroad get full, comfortable service.",
    },
  ],
} as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      name: EN.businessName,
      description: `${EN.tagline} — airport transfers, Eilat, events, tours and employee shuttles. Available 24/7.`,
      telephone: CONFIG.phoneTel,
      priceRange: "₪₪",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bat Yam",
        addressCountry: "IL",
      },
      areaServed: { "@type": "Country", name: "Israel" },
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
        reviewCount: String(EN.testimonials.length),
      },
    },
  ],
};

export const Route = createFileRoute("/en")({
  head: () => ({
    meta: [
      { title: "Daniel Taxi — Large Taxi for up to 6 passengers | 24/7 in Israel" },
      {
        name: "description",
        content:
          "Large taxi (Hyundai Staria) for up to 6 passengers anywhere in Israel. Ben Gurion Airport transfers, Eilat, events, weddings, tours and employee shuttles. Available 24/7.",
      },
      { property: "og:title", content: "Daniel Taxi — Large Taxi for up to 6 passengers" },
      {
        property: "og:description",
        content:
          "Book a large taxi 24/7 — airport transfers, Eilat, events, tours and employee shuttles.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: LandingPageEn,
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

function LandingPageEn() {
  return (
    <div dir="ltr" lang="en" className="min-h-screen bg-background pb-24 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-3 focus:text-base focus:font-bold focus:text-brand-foreground"
      >
        Skip to main content
      </a>
      {/* Language bar */}
      <nav aria-label="Language selection" className="bg-card">
        <div className="mx-auto flex max-w-5xl justify-end px-5 py-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-bold text-foreground transition-colors hover:bg-brand/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus-visible:ring-4 focus-visible:ring-ring"
            aria-label="Switch to the Hebrew version of the site"
          >
            <Globe className="size-4 text-brand" aria-hidden="true" />
            <span lang="he" dir="rtl">עברית</span>
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt={`${EN.businessName} — ${EN.vehicle}, large taxi for up to 6 passengers`}
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
            {EN.businessName}
          </span>
          <h1
            className="mt-5 text-3xl font-black leading-tight sm:text-5xl"
            style={{ color: "#ffffff" }}
          >
            Large taxi for up to 6 passengers — available 24/7
          </h1>
          <p
            className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "#f5f5f5" }}
          >
            Large taxi service — {EN.vehicle} — anywhere in Israel. Airport transfers, Eilat,
            events, weddings, tours and employee shuttles. The driver speaks Hebrew and English —
            perfect for tourists.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={telLink}
              className={btnSolid}
              aria-label={`Call ${EN.businessName} now at ${CONFIG.phoneDisplay}`}
            >
              <Phone className="size-5" aria-hidden="true" />
              Call now {CONFIG.phoneDisplay}
            </a>
            <a
              href={waLink("Hello, I'd like to book a large taxi. Could you send me the details?")}
              target="_blank"
              rel="noopener noreferrer"
              className={btnOutline}
              style={{ color: "#ffffff" }}
              aria-label="Send a WhatsApp message to book a large taxi"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="main">
      {/* Trust strip */}
      <Reveal as="section" aria-label="Why choose us" className="mx-auto max-w-5xl px-5 py-10">
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-5">
          {EN.trust.map((item) => {
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
        <SectionTitle sub="Pick a service and send a message — we'll get back to you right away">
          Our services
        </SectionTitle>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {EN.services.map((service) => {
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
                  aria-label={`WhatsApp about ${service.title}`}
                >
                  <MessageCircle className="size-5" aria-hidden="true" />
                  Details on WhatsApp
                </a>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Popular routes */}
      <section id="routes" className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle sub="Send a message and we'll get back to you with all the details">
          Popular routes
        </SectionTitle>
        <ul className="grid gap-3 sm:grid-cols-2">
          {EN.routes.map((route) => (
            <Reveal
              key={`${route.from}-${route.to}`}
              as="li"
              className="flex items-center justify-between gap-3 rounded-2xl bg-card p-4 shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
            >
              <div className="flex items-center gap-2 text-sm font-bold">
                <span className="truncate">{route.from}</span>
                <ArrowRight className="size-4 shrink-0 text-brand" aria-hidden="true" />
                <span className="truncate">{route.to}</span>
              </div>
              <a
                href={waLink(
                  `Hello, I'd like a large taxi from ${route.from} to ${route.to}. Could you confirm availability?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`${btnSolid} shrink-0 px-4 py-2.5 text-sm`}
                aria-label={`WhatsApp to book a ride from ${route.from} to ${route.to}`}
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Book
              </a>
            </Reveal>
          ))}
        </ul>
      </section>

      <QuoteFormEn />

      {/* Testimonials */}
      <section className="mx-auto max-w-5xl px-5 py-10">
        <SectionTitle>What our customers say</SectionTitle>
        <div className="grid gap-4 sm:grid-cols-3">
          {EN.testimonials.map((item) => (
            <Reveal
              key={item.name}
              as="article"
              className="rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
            >
              <div className="flex gap-0.5" role="img" aria-label={`Rated ${item.stars} out of 5`}>
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
        <SectionTitle>Frequently asked questions</SectionTitle>
        <Reveal className="rounded-2xl bg-card px-4 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
          <Accordion type="single" collapsible className="w-full">
            {EN.faq.map((item, i) => (
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

      <SiteFooterEn />
      <StickyBarEn />
    </div>
  );
}

function QuoteFormEn() {
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
      "Hello, I'd like a quote for a large taxi:",
      `Name: ${form.name}`,
      `Phone: ${form.phone}`,
      `Origin: ${form.origin}`,
      `Destination: ${form.destination}`,
      `Date: ${form.date}`,
      `Passengers: ${form.passengers}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full rounded-xl bg-background px-4 py-3 text-base text-foreground shadow-inner ring-1 ring-border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus:ring-4 focus:ring-ring";

  return (
    <section id="quote" className="mx-auto max-w-3xl px-5 py-10">
      <SectionTitle sub="Fill in the details and we'll send them to us on WhatsApp">
        Request a quote
      </SectionTitle>
      <Reveal className="rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <p className="text-sm text-muted-foreground sm:col-span-2">
            Fields marked with an asterisk (*) are required.
          </p>
          <div>
            <label htmlFor="en-name" className="mb-1.5 block text-sm font-bold">
              Full name <span aria-hidden="true">*</span>
            </label>
            <input
              id="en-name"
              required
              aria-required="true"
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              className={fieldClass}
              placeholder="John Smith"
            />
          </div>
          <div>
            <label htmlFor="en-phone" className="mb-1.5 block text-sm font-bold">
              Phone <span aria-hidden="true">*</span>
            </label>
            <input
              id="en-phone"
              required
              aria-required="true"
              aria-describedby="en-phone-hint"
              autoComplete="tel"
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={update("phone")}
              className={fieldClass}
              placeholder="050-0000000"
            />
            <p id="en-phone-hint" className="mt-1.5 text-xs text-muted-foreground">
              For example: 050-0000000
            </p>
          </div>
          <div>
            <label htmlFor="en-origin" className="mb-1.5 block text-sm font-bold">
              Pickup location <span aria-hidden="true">*</span>
            </label>
            <input
              id="en-origin"
              required
              aria-required="true"
              value={form.origin}
              onChange={update("origin")}
              className={fieldClass}
              placeholder="Bat Yam"
            />
          </div>
          <div>
            <label htmlFor="en-destination" className="mb-1.5 block text-sm font-bold">
              Destination <span aria-hidden="true">*</span>
            </label>
            <input
              id="en-destination"
              required
              aria-required="true"
              value={form.destination}
              onChange={update("destination")}
              className={fieldClass}
              placeholder="Ben Gurion Airport"
            />
          </div>
          <div>
            <label htmlFor="en-date" className="mb-1.5 block text-sm font-bold">
              Ride date <span aria-hidden="true">*</span>
            </label>
            <input
              id="en-date"
              required
              aria-required="true"
              type="date"
              value={form.date}
              onChange={update("date")}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="en-passengers" className="mb-1.5 block text-sm font-bold">
              Number of passengers <span aria-hidden="true">*</span>
            </label>
            <input
              id="en-passengers"
              required
              aria-required="true"
              aria-describedby="en-passengers-hint"
              type="number"
              min={1}
              max={6}
              value={form.passengers}
              onChange={update("passengers")}
              className={fieldClass}
              placeholder="8"
            />
            <p id="en-passengers-hint" className="mt-1.5 text-xs text-muted-foreground">
              Up to 6 passengers per ride
            </p>
          </div>
          <button
            type="submit"
            className={`${btnSolid} sm:col-span-2`}
            aria-label="Send the ride details on WhatsApp"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Send on WhatsApp
          </button>
        </form>
      </Reveal>
    </section>
  );
}

function SiteFooterEn() {
  return (
    <footer className="mt-4 border-t border-border bg-card">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-black">{EN.businessName}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {EN.tagline} · {EN.vehicle}
          </p>

          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-brand" aria-hidden="true" />
              <a
                href={telLink}
                className="font-bold underline"
                aria-label={`Call ${CONFIG.phoneDisplay}`}
              >
                {CONFIG.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-brand" aria-hidden="true" />
              <a
                href={waLink("Hello, I'd like to book a large taxi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
                aria-label="Open a WhatsApp chat"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4 text-brand" aria-hidden="true" />
              Service hours: {EN.hours}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-brand" aria-hidden="true" />
              Service areas: {EN.areas.join(", ")}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Users className="size-4 text-brand" aria-hidden="true" />
              Up to 6 passengers per ride
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1 text-sm font-bold">Our service area</h3>
          <p className="mb-3 text-sm text-muted-foreground">All of Israel</p>
          <div className="overflow-hidden rounded-2xl shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
            <iframe
              title="Service area map"
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
          <span lang="he" dir="rtl">הצהרת נגישות</span> — Accessibility statement (IS 5568 / WCAG 2.1 AA)
        </Link>
        <p className="mt-2">
          © {new Date().getFullYear()} {EN.businessName} · All rights reserved
        </p>
      </div>
    </footer>
  );
}

function StickyBarEn() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 bg-card p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] md:hidden">
      <a
        href={waLink("Hello, I'd like to book a large taxi.")}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnSolid} w-full px-3 py-3 text-sm`}
        aria-label="Send a WhatsApp message"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
      </a>
      <a
        href={telLink}
        className={`${btnOutline} w-full px-3 py-3 text-sm`}
        aria-label={`Call ${CONFIG.phoneDisplay}`}
      >
        <Phone className="size-5" aria-hidden="true" />
        Call
      </a>
    </div>
  );
}
