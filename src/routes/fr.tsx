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
  Languages,
} from "lucide-react";

import heroImage from "@/assets/hero-van-taxi.jpg";
import { CONFIG, telLink, waLink } from "@/lib/site-config";
import { Reveal } from "@/components/landing/Reveal";
import { LanguageSwitcher } from "@/components/landing/LanguageSwitcher";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

/**
 * Version française de la page.
 * Les données de l'entreprise (téléphone / WhatsApp) viennent de src/lib/site-config.ts.
 */
export const FR = {
  businessName: "Daniel Taxi",
  tagline: "Grand taxi jusqu'à 6 passagers",
  vehicle: "Hyundai Staria",
  hours: "24h/24, 7j/7",
  areas: ["Tout Israël"],

  trust: [
    { icon: "badge", title: "Chauffeur professionnel et agréé" },
    { icon: "clock", title: "Disponible 24h/24" },
    { icon: "car", title: "Van spacieux et climatisé" },
    { icon: "languages", title: "Chauffeur parlant hébreu et anglais" },
  ],

  services: [
    {
      icon: "plane",
      title: "Transferts aéroport Ben Gourion",
      description:
        "Prise en charge à domicile avec les bagages, suivi des vols et arrivée à l'heure au terminal.",
      message:
        "Bonjour, je souhaite réserver un grand taxi pour l'aéroport Ben Gourion. Pouvez-vous m'envoyer les détails ?",
    },
    {
      icon: "palm",
      title: "Trajets vers Eilat",
      description: "Trajets directs et confortables vers Eilat, avec des arrêts si besoin.",
      message: "Bonjour, je souhaite un devis pour un grand taxi vers Eilat.",
    },
    {
      icon: "heart",
      title: "Événements et mariages",
      description:
        "Transport des invités aller-retour, coordonné précisément avec le programme de votre événement.",
      message:
        "Bonjour, je souhaite un grand taxi pour un événement/mariage. Pouvez-vous m'envoyer un devis ?",
    },
    {
      icon: "briefcase",
      title: "Navettes pour employés",
      description:
        "Navettes régulières pour les entreprises, matin et fin de journée, avec facture en règle.",
      message: "Bonjour, je souhaite des navettes régulières pour employés avec un grand taxi.",
    },
    {
      icon: "map",
      title: "Excursions et attractions",
      description:
        "Une journée complète pour la famille ou le groupe — le chauffeur attend et conduit entre les sites.",
      message:
        "Bonjour, je souhaite un grand taxi pour une journée d'excursion. Pouvez-vous m'envoyer un devis ?",
    },
    {
      icon: "route",
      title: "Trajets interurbains",
      description: "De n'importe quel point d'Israël à un autre, de porte à porte, en tout confort.",
      message:
        "Bonjour, je souhaite un trajet interurbain avec un grand taxi. Pouvez-vous m'envoyer les détails ?",
    },
  ],

  routes: [
    { from: "Tel Aviv", to: "Aéroport Ben Gourion" },
    { from: "Bat Yam", to: "Aéroport Ben Gourion" },
    { from: "Rishon LeZion", to: "Jérusalem" },
    { from: "Haïfa", to: "Eilat" },
    { from: "Jérusalem", to: "Mer Morte" },
    { from: "Holon", to: "Eilat" },
  ],

  testimonials: [
    {
      name: "Orit M.",
      stars: 5,
      text: "Nous étions 9 pour l'aéroport à 4h du matin — Daniel est arrivé en avance, le van était propre et frais. Parfait.",
    },
    {
      name: "Ron K.",
      stars: 5,
      text: "Trajet vers Eilat avec toute la famille. Très bonne ambiance et un excellent chauffeur.",
    },
    {
      name: "Michal D.",
      stars: 5,
      text: "Transport des invités pour notre mariage. Coordination précise, patience infinie et beaucoup de sourires.",
    },
  ],

  faq: [
    {
      q: "Combien de passagers peuvent monter ?",
      a: "Le grand taxi est autorisé pour 6 passagers en plus du chauffeur, avec un siège confortable et une ceinture pour chacun.",
    },
    {
      q: "Y a-t-il de la place pour les bagages ?",
      a: "Oui. Un grand coffre accueille les valises de tous les passagers. Si vous avez beaucoup de bagages, dites-le nous à l'avance et nous nous organiserons.",
    },
    {
      q: "Comment payer ?",
      a: "Espèces, Bit ou virement bancaire. Les entreprises et organisations peuvent recevoir une facture en règle.",
    },
    {
      q: "Peut-on réserver à l'avance ?",
      a: "Absolument, et c'est recommandé. Vous pouvez réserver des dates et heures précises, y compris la nuit et très tôt le matin.",
    },
    {
      q: "Roulez-vous le Shabbat ?",
      a: "Oui, nous sommes disponibles 24h/24 y compris le Shabbat et les jours de fête. Réserver à l'avance est conseillé.",
    },
    {
      q: "Quelles langues parle le chauffeur ?",
      a: "Le chauffeur parle hébreu et anglais, les touristes et visiteurs de l'étranger sont donc parfaitement accompagnés.",
    },
  ],
} as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      name: FR.businessName,
      description: `${FR.tagline} — transferts aéroport, Eilat, événements, excursions et navettes. Disponible 24h/24.`,
      telephone: CONFIG.phoneTel,
      priceRange: "₪₪",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bat Yam",
        addressCountry: "IL",
      },
      areaServed: { "@type": "Country", name: "Israël" },
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
        reviewCount: String(FR.testimonials.length),
      },
    },
  ],
};

export const Route = createFileRoute("/fr")({
  head: () => ({
    meta: [
      { title: "Daniel Taxi — Grand taxi jusqu'à 6 passagers | 24h/24 en Israël" },
      {
        name: "description",
        content:
          "Grand taxi (Hyundai Staria) jusqu'à 6 passagers partout en Israël. Transferts aéroport Ben Gourion, Eilat, événements, mariages, excursions et navettes. Disponible 24h/24.",
      },
      { property: "og:title", content: "Daniel Taxi — Grand taxi jusqu'à 6 passagers" },
      {
        property: "og:description",
        content:
          "Réservez un grand taxi 24h/24 — transferts aéroport, Eilat, événements, excursions et navettes.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: LandingPageFr,
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

function LandingPageFr() {
  return (
    <div dir="ltr" lang="fr" className="min-h-screen bg-background pb-24 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-3 focus:text-base focus:font-bold focus:text-brand-foreground"
      >
        Aller au contenu principal
      </a>

      <LanguageSwitcher current="fr" />

      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt={`${FR.businessName} — ${FR.vehicle}, grand taxi jusqu'à 6 passagers`}
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />
        <div className="mx-auto flex max-w-5xl flex-col items-start px-5 pb-12 pt-16 sm:pt-24">
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">
            {FR.businessName}
          </span>
          <h1
            className="mt-5 text-3xl font-black leading-tight sm:text-5xl"
            style={{ color: "#ffffff" }}
          >
            Grand taxi jusqu'à 6 passagers — disponible 24h/24
          </h1>
          <p
            className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "#f5f5f5" }}
          >
            Service de grand taxi — {FR.vehicle} — partout en Israël. Transferts aéroport, Eilat,
            événements, mariages, excursions et navettes. Le chauffeur parle hébreu et anglais —
            idéal pour les touristes.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={telLink}
              className={btnSolid}
              aria-label={`Appeler ${FR.businessName} au ${CONFIG.phoneDisplay}`}
            >
              <Phone className="size-5" aria-hidden="true" />
              Appeler {CONFIG.phoneDisplay}
            </a>
            <a
              href={waLink(
                "Bonjour, je souhaite réserver un grand taxi. Pouvez-vous m'envoyer les détails ?",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={btnOutline}
              style={{ color: "#ffffff" }}
              aria-label="Envoyer un message WhatsApp pour réserver un grand taxi"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Trust strip */}
        <Reveal
          as="section"
          aria-label="Pourquoi nous choisir"
          className="mx-auto max-w-5xl px-5 py-10"
        >
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {FR.trust.map((item) => {
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
          <SectionTitle sub="Choisissez un service et envoyez un message — nous répondons tout de suite">
            Nos services
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FR.services.map((service) => {
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
                    aria-label={`WhatsApp à propos de : ${service.title}`}
                  >
                    <MessageCircle className="size-5" aria-hidden="true" />
                    Détails sur WhatsApp
                  </a>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Popular routes */}
        <section id="routes" className="mx-auto max-w-5xl px-5 py-10">
          <SectionTitle sub="Envoyez un message et nous revenons vers vous avec tous les détails">
            Trajets populaires
          </SectionTitle>
          <ul className="grid gap-3 sm:grid-cols-2">
            {FR.routes.map((route) => (
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
                    `Bonjour, je souhaite un grand taxi de ${route.from} à ${route.to}. Pouvez-vous confirmer la disponibilité ?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnSolid} shrink-0 px-4 py-2.5 text-sm`}
                  aria-label={`WhatsApp pour réserver un trajet de ${route.from} à ${route.to}`}
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Réserver
                </a>
              </Reveal>
            ))}
          </ul>
        </section>

        <QuoteFormFr />

        {/* Testimonials */}
        <section className="mx-auto max-w-5xl px-5 py-10">
          <SectionTitle>Ce que disent nos clients</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {FR.testimonials.map((item) => (
              <Reveal
                key={item.name}
                as="article"
                className="rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
              >
                <div
                  className="flex gap-0.5"
                  role="img"
                  aria-label={`Note : ${item.stars} sur 5`}
                >
                  {Array.from({ length: item.stars }).map((_, i) => (
                    <Star key={i} className="size-4 fill-brand text-brand" aria-hidden="true" />
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
          <SectionTitle>Questions fréquentes</SectionTitle>
          <Reveal className="rounded-2xl bg-card px-4 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
            <Accordion type="single" collapsible className="w-full">
              {FR.faq.map((item, i) => (
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

      <SiteFooterFr />
      <StickyBarFr />
    </div>
  );
}

function QuoteFormFr() {
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
      "Bonjour, je souhaite un devis pour un grand taxi :",
      `Nom : ${form.name}`,
      `Téléphone : ${form.phone}`,
      `Départ : ${form.origin}`,
      `Destination : ${form.destination}`,
      `Date : ${form.date}`,
      `Passagers : ${form.passengers}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full rounded-xl bg-background px-4 py-3 text-base text-foreground shadow-inner ring-1 ring-border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus:ring-4 focus:ring-ring";

  return (
    <section id="quote" className="mx-auto max-w-3xl px-5 py-10">
      <SectionTitle sub="Remplissez les détails et nous les recevons sur WhatsApp">
        Demander un devis
      </SectionTitle>
      <Reveal className="rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <p className="text-sm text-muted-foreground sm:col-span-2">
            Les champs marqués d'un astérisque (*) sont obligatoires.
          </p>
          <div>
            <label htmlFor="fr-name" className="mb-1.5 block text-sm font-bold">
              Nom complet <span aria-hidden="true">*</span>
            </label>
            <input
              id="fr-name"
              required
              aria-required="true"
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              className={fieldClass}
              placeholder="Jean Dupont"
            />
          </div>
          <div>
            <label htmlFor="fr-phone" className="mb-1.5 block text-sm font-bold">
              Téléphone <span aria-hidden="true">*</span>
            </label>
            <input
              id="fr-phone"
              required
              aria-required="true"
              aria-describedby="fr-phone-hint"
              autoComplete="tel"
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={update("phone")}
              className={fieldClass}
              placeholder="050-0000000"
            />
            <p id="fr-phone-hint" className="mt-1.5 text-xs text-muted-foreground">
              Par exemple : 050-0000000
            </p>
          </div>
          <div>
            <label htmlFor="fr-origin" className="mb-1.5 block text-sm font-bold">
              Lieu de prise en charge <span aria-hidden="true">*</span>
            </label>
            <input
              id="fr-origin"
              required
              aria-required="true"
              value={form.origin}
              onChange={update("origin")}
              className={fieldClass}
              placeholder="Bat Yam"
            />
          </div>
          <div>
            <label htmlFor="fr-destination" className="mb-1.5 block text-sm font-bold">
              Destination <span aria-hidden="true">*</span>
            </label>
            <input
              id="fr-destination"
              required
              aria-required="true"
              value={form.destination}
              onChange={update("destination")}
              className={fieldClass}
              placeholder="Aéroport Ben Gourion"
            />
          </div>
          <div>
            <label htmlFor="fr-date" className="mb-1.5 block text-sm font-bold">
              Date du trajet <span aria-hidden="true">*</span>
            </label>
            <input
              id="fr-date"
              required
              aria-required="true"
              type="date"
              value={form.date}
              onChange={update("date")}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="fr-passengers" className="mb-1.5 block text-sm font-bold">
              Nombre de passagers <span aria-hidden="true">*</span>
            </label>
            <input
              id="fr-passengers"
              required
              aria-required="true"
              aria-describedby="fr-passengers-hint"
              type="number"
              min={1}
              max={6}
              value={form.passengers}
              onChange={update("passengers")}
              className={fieldClass}
              placeholder="6"
            />
            <p id="fr-passengers-hint" className="mt-1.5 text-xs text-muted-foreground">
              Jusqu'à 6 passagers par trajet
            </p>
          </div>
          <button
            type="submit"
            className={`${btnSolid} sm:col-span-2`}
            aria-label="Envoyer les détails du trajet sur WhatsApp"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Envoyer sur WhatsApp
          </button>
        </form>
      </Reveal>
    </section>
  );
}

function SiteFooterFr() {
  return (
    <footer className="mt-4 border-t border-border bg-card">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-black">{FR.businessName}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{FR.tagline}</p>

          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-brand" aria-hidden="true" />
              <a
                href={telLink}
                className="font-bold underline"
                aria-label={`Appeler le ${CONFIG.phoneDisplay}`}
              >
                {CONFIG.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-brand" aria-hidden="true" />
              <a
                href={waLink("Bonjour, je souhaite réserver un grand taxi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
                aria-label="Ouvrir une conversation WhatsApp"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4 text-brand" aria-hidden="true" />
              Heures de service : {FR.hours}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-brand" aria-hidden="true" />
              Zones de service : {FR.areas.join(", ")}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Users className="size-4 text-brand" aria-hidden="true" />
              Jusqu'à 6 passagers par trajet
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1 text-sm font-bold">Notre zone de service</h3>
          <p className="mb-3 text-sm text-muted-foreground">Tout Israël</p>
          <div className="overflow-hidden rounded-2xl shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
            <iframe
              title="Carte de la zone de service"
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
          Déclaration d'accessibilité (IS 5568 / WCAG 2.1 AA)
        </Link>
        <p className="mt-2">
          © {new Date().getFullYear()} {FR.businessName} · Tous droits réservés
        </p>
      </div>
    </footer>
  );
}

function StickyBarFr() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 bg-card p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] md:hidden">
      <a
        href={waLink("Bonjour, je souhaite réserver un grand taxi.")}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnSolid} w-full px-3 py-3 text-sm`}
        aria-label="Envoyer un message WhatsApp"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
      </a>
      <a
        href={telLink}
        className={`${btnOutline} w-full px-3 py-3 text-sm`}
        aria-label={`Appeler le ${CONFIG.phoneDisplay}`}
      >
        <Phone className="size-5" aria-hidden="true" />
        Appeler
      </a>
    </div>
  );
}
