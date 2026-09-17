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
 * Русская версия страницы.
 * Данные бизнеса (телефон / WhatsApp) берутся из src/lib/site-config.ts.
 */
export const RU = {
  businessName: "Даниэль Такси",
  tagline: "Большое такси до 6 пассажиров",
  vehicle: "Hyundai Staria",
  hours: "24/7, все дни недели",
  areas: ["Весь Израиль"],

  trust: [
    { icon: "badge", title: "Профессиональный лицензированный водитель" },
    { icon: "clock", title: "Доступны 24/7" },
    { icon: "car", title: "Просторный микроавтобус с кондиционером" },
    { icon: "languages", title: "Водитель говорит на иврите и английском" },
  ],

  services: [
    {
      icon: "plane",
      title: "Трансфер в аэропорт Бен-Гурион",
      description:
        "Забираем от дома вместе с багажом, отслеживаем рейсы и привозим к терминалу вовремя.",
      message:
        "Здравствуйте, хочу заказать большое такси в аэропорт Бен-Гурион. Пришлите, пожалуйста, детали.",
    },
    {
      icon: "palm",
      title: "Поездки в Эйлат",
      description: "Прямые и комфортные поездки в Эйлат, с остановками по пути при необходимости.",
      message: "Здравствуйте, хочу получить цену на большое такси в Эйлат.",
    },
    {
      icon: "heart",
      title: "Мероприятия и свадьбы",
      description:
        "Перевозка гостей до зала и обратно, точная координация по расписанию вашего события.",
      message:
        "Здравствуйте, нужно большое такси на мероприятие/свадьбу. Пришлите, пожалуйста, цену.",
    },
    {
      icon: "briefcase",
      title: "Перевозка сотрудников",
      description:
        "Регулярные перевозки для компаний, утром и в конце дня, с оформлением счёта.",
      message: "Здравствуйте, интересуют регулярные перевозки сотрудников на большом такси.",
    },
    {
      icon: "map",
      title: "Экскурсии и достопримечательности",
      description:
        "Целый день для семьи или группы — водитель ждёт и везёт между местами.",
      message:
        "Здравствуйте, нужно большое такси для экскурсии. Пришлите, пожалуйста, цену.",
    },
    {
      icon: "route",
      title: "Междугородние поездки",
      description: "Из любой точки Израиля в любую другую, от двери до двери, с комфортом.",
      message:
        "Здравствуйте, интересует междугородняя поездка на большом такси. Пришлите детали.",
    },
  ],

  routes: [
    { from: "Тель-Авив", to: "Аэропорт Бен-Гурион" },
    { from: "Бат-Ям", to: "Аэропорт Бен-Гурион" },
    { from: "Ришон-ле-Цион", to: "Иерусалим" },
    { from: "Хайфа", to: "Эйлат" },
    { from: "Иерусалим", to: "Мёртвое море" },
    { from: "Холон", to: "Эйлат" },
  ],

  testimonials: [
    {
      name: "Орит М.",
      stars: 5,
      text: "Ехали 9 человек в аэропорт в 4 утра — Даниэль приехал раньше, машина чистая и прохладная. Идеально.",
    },
    {
      name: "Рон К.",
      stars: 5,
      text: "Поездка в Эйлат всей семьёй. Отличная атмосфера и замечательный водитель.",
    },
    {
      name: "Михаль Д.",
      stars: 5,
      text: "Перевозка гостей на нашей свадьбе. Точная координация, бесконечное терпение и много улыбок.",
    },
  ],

  faq: [
    {
      q: "Сколько пассажиров вмещается?",
      a: "Большое такси рассчитано на 6 пассажиров плюс водитель, у каждого удобное место и ремень безопасности.",
    },
    {
      q: "Есть ли место для багажа?",
      a: "Да. Большое багажное отделение вмещает чемоданы всех пассажиров. Если багажа особенно много, сообщите заранее, и мы всё организуем.",
    },
    {
      q: "Как оплатить?",
      a: "Наличные, Bit или банковский перевод. Компании и организации могут получить официальный счёт.",
    },
    {
      q: "Можно ли заказать заранее?",
      a: "Конечно, и это рекомендуется. Можно заказать на точную дату и время, включая ночные и ранние поездки.",
    },
    {
      q: "Работаете ли вы в шаббат?",
      a: "Да, мы доступны 24/7, включая шаббат и праздники. Рекомендуем заказывать заранее.",
    },
    {
      q: "На каких языках говорит водитель?",
      a: "Водитель говорит на иврите и английском, поэтому туристы и гости из-за рубежа получают полный и удобный сервис.",
    },
  ],
} as const;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      name: RU.businessName,
      description: `${RU.tagline} — трансферы в аэропорт, Эйлат, мероприятия, экскурсии и перевозки сотрудников. Доступны 24/7.`,
      telephone: CONFIG.phoneTel,
      priceRange: "₪₪",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Бат-Ям",
        addressCountry: "IL",
      },
      areaServed: { "@type": "Country", name: "Израиль" },
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
        reviewCount: String(RU.testimonials.length),
      },
    },
  ],
};

export const Route = createFileRoute("/ru")({
  head: () => ({
    meta: [
      { title: "Даниэль Такси — большое такси до 6 пассажиров | 24/7 в Израиле" },
      {
        name: "description",
        content:
          "Большое такси (Hyundai Staria) до 6 пассажиров по всему Израилю. Трансферы в аэропорт Бен-Гурион, Эйлат, мероприятия, свадьбы, экскурсии и перевозки сотрудников. 24/7.",
      },
      { property: "og:title", content: "Даниэль Такси — большое такси до 6 пассажиров" },
      {
        property: "og:description",
        content:
          "Заказ большого такси 24/7 — аэропорт, Эйлат, мероприятия, экскурсии и перевозки сотрудников.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(jsonLd) }],
  }),
  component: LandingPageRu,
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

function LandingPageRu() {
  return (
    <div dir="ltr" lang="ru" className="min-h-screen bg-background pb-24 md:pb-0">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-xl focus:bg-brand focus:px-4 focus:py-3 focus:text-base focus:font-bold focus:text-brand-foreground"
      >
        Перейти к основному содержанию
      </a>

      <LanguageSwitcher current="ru" />

      {/* Hero */}
      <header className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt={`${RU.businessName} — ${RU.vehicle}, большое такси до 6 пассажиров`}
          width={1600}
          height={1104}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ backgroundColor: "rgba(0,0,0,0.45)" }} />
        <div className="mx-auto flex max-w-5xl flex-col items-start px-5 pb-12 pt-16 sm:pt-24">
          <span className="rounded-full bg-brand px-3 py-1 text-xs font-bold text-brand-foreground">
            {RU.businessName}
          </span>
          <h1
            className="mt-5 text-3xl font-black leading-tight sm:text-5xl"
            style={{ color: "#ffffff" }}
          >
            Большое такси до 6 пассажиров — доступны 24/7
          </h1>
          <p
            className="mt-4 max-w-xl text-base leading-relaxed sm:text-lg"
            style={{ color: "#f5f5f5" }}
          >
            Услуги большого такси — {RU.vehicle} — по всему Израилю. Трансферы в аэропорт, Эйлат,
            мероприятия, свадьбы, экскурсии и перевозки сотрудников. Водитель говорит на иврите и
            английском — удобно для туристов.
          </p>
          <div className="mt-7 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a
              href={telLink}
              className={btnSolid}
              aria-label={`Позвонить ${RU.businessName} по номеру ${CONFIG.phoneDisplay}`}
            >
              <Phone className="size-5" aria-hidden="true" />
              Позвонить {CONFIG.phoneDisplay}
            </a>
            <a
              href={waLink(
                "Здравствуйте, хочу заказать большое такси. Пришлите, пожалуйста, детали.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={btnOutline}
              style={{ color: "#ffffff" }}
              aria-label="Отправить сообщение в WhatsApp для заказа большого такси"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      <main id="main">
        {/* Trust strip */}
        <Reveal as="section" aria-label="Почему мы" className="mx-auto max-w-5xl px-5 py-10">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {RU.trust.map((item) => {
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
          <SectionTitle sub="Выберите услугу и отправьте сообщение — мы ответим сразу">
            Наши услуги
          </SectionTitle>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RU.services.map((service) => {
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
                    aria-label={`WhatsApp по услуге: ${service.title}`}
                  >
                    <MessageCircle className="size-5" aria-hidden="true" />
                    Детали в WhatsApp
                  </a>
                </Reveal>
              );
            })}
          </div>
        </section>

        {/* Popular routes */}
        <section id="routes" className="mx-auto max-w-5xl px-5 py-10">
          <SectionTitle sub="Отправьте сообщение, и мы вернёмся со всеми деталями">
            Популярные маршруты
          </SectionTitle>
          <ul className="grid gap-3 sm:grid-cols-2">
            {RU.routes.map((route) => (
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
                    `Здравствуйте, нужно большое такси из ${route.from} в ${route.to}. Подтвердите, пожалуйста, доступность.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${btnSolid} shrink-0 px-4 py-2.5 text-sm`}
                  aria-label={`WhatsApp для заказа поездки из ${route.from} в ${route.to}`}
                >
                  <MessageCircle className="size-4" aria-hidden="true" />
                  Заказать
                </a>
              </Reveal>
            ))}
          </ul>
        </section>

        <QuoteFormRu />

        {/* Testimonials */}
        <section className="mx-auto max-w-5xl px-5 py-10">
          <SectionTitle>Отзывы наших клиентов</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-3">
            {RU.testimonials.map((item) => (
              <Reveal
                key={item.name}
                as="article"
                className="rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]"
              >
                <div className="flex gap-0.5" role="img" aria-label={`Оценка: ${item.stars} из 5`}>
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
          <SectionTitle>Частые вопросы</SectionTitle>
          <Reveal className="rounded-2xl bg-card px-4 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
            <Accordion type="single" collapsible className="w-full">
              {RU.faq.map((item, i) => (
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

      <SiteFooterRu />
      <StickyBarRu />
    </div>
  );
}

function QuoteFormRu() {
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
      "Здравствуйте, хочу получить цену на большое такси:",
      `Имя: ${form.name}`,
      `Телефон: ${form.phone}`,
      `Откуда: ${form.origin}`,
      `Куда: ${form.destination}`,
      `Дата: ${form.date}`,
      `Пассажиров: ${form.passengers}`,
    ].join("\n");
    window.open(waLink(message), "_blank", "noopener,noreferrer");
  };

  const fieldClass =
    "w-full rounded-xl bg-background px-4 py-3 text-base text-foreground shadow-inner ring-1 ring-border transition focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus:ring-4 focus:ring-ring";

  return (
    <section id="quote" className="mx-auto max-w-3xl px-5 py-10">
      <SectionTitle sub="Заполните детали, и мы получим их в WhatsApp">
        Запрос цены
      </SectionTitle>
      <Reveal className="rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
        <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
          <p className="text-sm text-muted-foreground sm:col-span-2">
            Поля со звёздочкой (*) обязательны.
          </p>
          <div>
            <label htmlFor="ru-name" className="mb-1.5 block text-sm font-bold">
              Полное имя <span aria-hidden="true">*</span>
            </label>
            <input
              id="ru-name"
              required
              aria-required="true"
              autoComplete="name"
              value={form.name}
              onChange={update("name")}
              className={fieldClass}
              placeholder="Иван Иванов"
            />
          </div>
          <div>
            <label htmlFor="ru-phone" className="mb-1.5 block text-sm font-bold">
              Телефон <span aria-hidden="true">*</span>
            </label>
            <input
              id="ru-phone"
              required
              aria-required="true"
              aria-describedby="ru-phone-hint"
              autoComplete="tel"
              type="tel"
              inputMode="tel"
              value={form.phone}
              onChange={update("phone")}
              className={fieldClass}
              placeholder="050-0000000"
            />
            <p id="ru-phone-hint" className="mt-1.5 text-xs text-muted-foreground">
              Например: 050-0000000
            </p>
          </div>
          <div>
            <label htmlFor="ru-origin" className="mb-1.5 block text-sm font-bold">
              Место посадки <span aria-hidden="true">*</span>
            </label>
            <input
              id="ru-origin"
              required
              aria-required="true"
              value={form.origin}
              onChange={update("origin")}
              className={fieldClass}
              placeholder="Бат-Ям"
            />
          </div>
          <div>
            <label htmlFor="ru-destination" className="mb-1.5 block text-sm font-bold">
              Пункт назначения <span aria-hidden="true">*</span>
            </label>
            <input
              id="ru-destination"
              required
              aria-required="true"
              value={form.destination}
              onChange={update("destination")}
              className={fieldClass}
              placeholder="Аэропорт Бен-Гурион"
            />
          </div>
          <div>
            <label htmlFor="ru-date" className="mb-1.5 block text-sm font-bold">
              Дата поездки <span aria-hidden="true">*</span>
            </label>
            <input
              id="ru-date"
              required
              aria-required="true"
              type="date"
              value={form.date}
              onChange={update("date")}
              className={fieldClass}
            />
          </div>
          <div>
            <label htmlFor="ru-passengers" className="mb-1.5 block text-sm font-bold">
              Количество пассажиров <span aria-hidden="true">*</span>
            </label>
            <input
              id="ru-passengers"
              required
              aria-required="true"
              aria-describedby="ru-passengers-hint"
              type="number"
              min={1}
              max={6}
              value={form.passengers}
              onChange={update("passengers")}
              className={fieldClass}
              placeholder="6"
            />
            <p id="ru-passengers-hint" className="mt-1.5 text-xs text-muted-foreground">
              До 6 пассажиров за поездку
            </p>
          </div>
          <button
            type="submit"
            className={`${btnSolid} sm:col-span-2`}
            aria-label="Отправить детали поездки в WhatsApp"
          >
            <MessageCircle className="size-5" aria-hidden="true" />
            Отправить в WhatsApp
          </button>
        </form>
      </Reveal>
    </section>
  );
}

function SiteFooterRu() {
  return (
    <footer className="mt-4 border-t border-border bg-card">
      <div className="mx-auto grid max-w-5xl gap-8 px-5 py-10 sm:grid-cols-2">
        <div>
          <h2 className="text-xl font-black">{RU.businessName}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{RU.tagline}</p>

          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-brand" aria-hidden="true" />
              <a
                href={telLink}
                className="font-bold underline"
                aria-label={`Позвонить по номеру ${CONFIG.phoneDisplay}`}
              >
                {CONFIG.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-brand" aria-hidden="true" />
              <a
                href={waLink("Здравствуйте, хочу заказать большое такси.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
                aria-label="Открыть чат WhatsApp"
              >
                WhatsApp
              </a>
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Clock className="size-4 text-brand" aria-hidden="true" />
              Часы работы: {RU.hours}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="size-4 text-brand" aria-hidden="true" />
              Зона обслуживания: {RU.areas.join(", ")}
            </li>
            <li className="flex items-center gap-2 text-muted-foreground">
              <Users className="size-4 text-brand" aria-hidden="true" />
              До 6 пассажиров за поездку
            </li>
          </ul>
        </div>

        <div>
          <h3 className="mb-1 text-sm font-bold">Наша зона обслуживания</h3>
          <p className="mb-3 text-sm text-muted-foreground">Весь Израиль</p>
          <div className="overflow-hidden rounded-2xl shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
            <iframe
              title="Карта зоны обслуживания"
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
          Заявление о доступности (IS 5568 / WCAG 2.1 AA)
        </Link>
        <p className="mt-2">
          © {new Date().getFullYear()} {RU.businessName} · Все права защищены
        </p>
      </div>
    </footer>
  );
}

function StickyBarRu() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-3 bg-card p-3 shadow-[0_-4px_16px_rgba(0,0,0,0.12)] md:hidden">
      <a
        href={waLink("Здравствуйте, хочу заказать большое такси.")}
        target="_blank"
        rel="noopener noreferrer"
        className={`${btnSolid} w-full px-3 py-3 text-sm`}
        aria-label="Отправить сообщение в WhatsApp"
      >
        <MessageCircle className="size-5" aria-hidden="true" />
        WhatsApp
      </a>
      <a
        href={telLink}
        className={`${btnOutline} w-full px-3 py-3 text-sm`}
        aria-label={`Позвонить по номеру ${CONFIG.phoneDisplay}`}
      >
        <Phone className="size-5" aria-hidden="true" />
        Позвонить
      </a>
    </div>
  );
}
