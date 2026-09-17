import { Link } from "@tanstack/react-router";

/**
 * Language bar with flag icons.
 * Add or edit languages in the LANGUAGES array below.
 */

function FlagIL() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#ffffff" />
      <rect y="1.5" width="24" height="2.4" fill="#0038b8" />
      <rect y="12.1" width="24" height="2.4" fill="#0038b8" />
      <path
        d="M12 5.2l1.9 3.3h-3.8L12 5.2zm0 5.6l-1.9-3.3h3.8L12 10.8z"
        fill="none"
        stroke="#0038b8"
        strokeWidth="0.9"
      />
    </svg>
  );
}

function FlagGB() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="24" height="16" fill="#012169" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#ffffff" strokeWidth="3" />
      <path d="M0 0l24 16M24 0L0 16" stroke="#C8102E" strokeWidth="1.6" />
      <path d="M12 0v16M0 8h24" stroke="#ffffff" strokeWidth="5" />
      <path d="M12 0v16M0 8h24" stroke="#C8102E" strokeWidth="3" />
    </svg>
  );
}

function FlagFR() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="8" height="16" fill="#002395" />
      <rect x="8" width="8" height="16" fill="#ffffff" />
      <rect x="16" width="8" height="16" fill="#ED2939" />
    </svg>
  );
}

function FlagRU() {
  return (
    <svg viewBox="0 0 24 16" className="h-4 w-6 rounded-[2px] shadow-sm" aria-hidden="true">
      <rect width="24" height="5.34" fill="#ffffff" />
      <rect y="5.34" width="24" height="5.33" fill="#0039A6" />
      <rect y="10.67" width="24" height="5.33" fill="#D52B1E" />
    </svg>
  );
}

type LangCode = "he" | "en" | "fr" | "ru";

const LANGUAGES = [
  { code: "he" as LangCode, to: "/" as const, label: "עברית", dir: "rtl" as const, Flag: FlagIL },
  { code: "en" as LangCode, to: "/en" as const, label: "English", dir: "ltr" as const, Flag: FlagGB },
  { code: "fr" as LangCode, to: "/fr" as const, label: "Français", dir: "ltr" as const, Flag: FlagFR },
  { code: "ru" as LangCode, to: "/ru" as const, label: "Русский", dir: "ltr" as const, Flag: FlagRU },
];

const NAV_LABEL: Record<LangCode, string> = {
  he: "בחירת שפה",
  en: "Language selection",
  fr: "Choix de la langue",
  ru: "Выбор языка",
};

export function LanguageSwitcher({ current }: { current: LangCode }) {
  return (
    <nav aria-label={NAV_LABEL[current]} className="bg-card">
      <ul className="mx-auto flex max-w-5xl flex-wrap items-center justify-end gap-1 px-5 py-2">
        {LANGUAGES.map(({ code, to, label, dir, Flag }) => {
          const isCurrent = code === current;
          return (
            <li key={code}>
              <Link
                to={to}
                aria-current={isCurrent ? "page" : undefined}
                className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-bold text-foreground transition-colors hover:bg-brand/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground focus-visible:ring-4 focus-visible:ring-ring ${
                  isCurrent ? "bg-brand/15" : ""
                }`}
              >
                <Flag />
                <span lang={code} dir={dir}>
                  {label}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
