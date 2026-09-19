import { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  X,
  RotateCcw,
  Type,
  Contrast,
  Link2,
  MousePointer2,
  Pause,
  AlignJustify,
} from "lucide-react";

type LangCode = "he" | "en" | "fr" | "ru";

type Settings = {
  fontStep: number;
  contrast: boolean;
  grayscale: boolean;
  links: boolean;
  cursor: boolean;
  motion: boolean;
  spacing: boolean;
};

const DEFAULTS: Settings = {
  fontStep: 0,
  contrast: false,
  grayscale: false,
  links: false,
  cursor: false,
  motion: false,
  spacing: false,
};

const STORAGE_KEY = "a11y-settings";

const T: Record<
  LangCode,
  {
    open: string;
    title: string;
    close: string;
    fontUp: string;
    fontDown: string;
    fontLabel: string;
    contrast: string;
    grayscale: string;
    links: string;
    cursor: string;
    motion: string;
    spacing: string;
    reset: string;
    statement: string;
  }
> = {
  he: {
    open: "פתיחת תפריט נגישות",
    title: "תפריט נגישות",
    close: "סגירת תפריט נגישות",
    fontUp: "הגדלת טקסט",
    fontDown: "הקטנת טקסט",
    fontLabel: "גודל טקסט",
    contrast: "ניגודיות גבוהה",
    grayscale: "גווני אפור",
    links: "הדגשת קישורים",
    cursor: "סמן גדול",
    motion: "עצירת אנימציות",
    spacing: "ריווח שורות",
    reset: "איפוס הגדרות",
    statement: "הצהרת נגישות",
  },
  en: {
    open: "Open accessibility menu",
    title: "Accessibility menu",
    close: "Close accessibility menu",
    fontUp: "Increase text size",
    fontDown: "Decrease text size",
    fontLabel: "Text size",
    contrast: "High contrast",
    grayscale: "Grayscale",
    links: "Highlight links",
    cursor: "Big cursor",
    motion: "Stop animations",
    spacing: "Line spacing",
    reset: "Reset settings",
    statement: "Accessibility statement",
  },
  fr: {
    open: "Ouvrir le menu d'accessibilité",
    title: "Menu d'accessibilité",
    close: "Fermer le menu d'accessibilité",
    fontUp: "Agrandir le texte",
    fontDown: "Réduire le texte",
    fontLabel: "Taille du texte",
    contrast: "Contraste élevé",
    grayscale: "Niveaux de gris",
    links: "Surligner les liens",
    cursor: "Grand curseur",
    motion: "Arrêter les animations",
    spacing: "Espacement des lignes",
    reset: "Réinitialiser",
    statement: "Déclaration d'accessibilité",
  },
  ru: {
    open: "Открыть меню доступности",
    title: "Меню доступности",
    close: "Закрыть меню доступности",
    fontUp: "Увеличить текст",
    fontDown: "Уменьшить текст",
    fontLabel: "Размер текста",
    contrast: "Высокий контраст",
    grayscale: "Оттенки серого",
    links: "Подсветка ссылок",
    cursor: "Большой курсор",
    motion: "Остановить анимации",
    spacing: "Межстрочный интервал",
    reset: "Сбросить настройки",
    statement: "Заявление о доступности",
  },
};

function apply(s: Settings) {
  const root = document.documentElement;
  root.style.fontSize = s.fontStep === 0 ? "" : `${100 + s.fontStep * 10}%`;
  root.classList.toggle("a11y-contrast", s.contrast);
  root.classList.toggle("a11y-grayscale", s.grayscale);
  root.classList.toggle("a11y-links", s.links);
  root.classList.toggle("a11y-cursor", s.cursor);
  root.classList.toggle("a11y-no-motion", s.motion);
  root.classList.toggle("a11y-spacing", s.spacing);
}

export function AccessibilityMenu({ lang }: { lang: LangCode }) {
  const t = T[lang];
  const [open, setOpen] = useState(false);
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULTS, ...(JSON.parse(raw) as Partial<Settings>) };
        setSettings(parsed);
        apply(parsed);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const update = (patch: Partial<Settings>) => {
    setSettings((prev) => {
      const next = { ...prev, ...patch };
      apply(next);
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  const reset = () => {
    apply(DEFAULTS);
    setSettings(DEFAULTS);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        panelRef.current &&
        !panelRef.current.contains(target) &&
        !buttonRef.current?.contains(target)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open]);

  const toggles: { key: keyof Settings; label: string; Icon: typeof Contrast }[] = [
    { key: "contrast", label: t.contrast, Icon: Contrast },
    { key: "grayscale", label: t.grayscale, Icon: Type },
    { key: "links", label: t.links, Icon: Link2 },
    { key: "spacing", label: t.spacing, Icon: AlignJustify },
    { key: "cursor", label: t.cursor, Icon: MousePointer2 },
    { key: "motion", label: t.motion, Icon: Pause },
  ];

  return (
    <div className="fixed bottom-24 z-50 ltr:left-4 rtl:right-4 md:bottom-6 print:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-label={t.open}
        aria-expanded={open}
        aria-haspopup="dialog"
        onClick={() => setOpen((v) => !v)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1a1a1a] text-[#f6c600] shadow-[0_4px_18px_rgba(0,0,0,0.25)] outline-offset-2 transition-colors hover:bg-[#333] focus-visible:outline-2 focus-visible:outline-[#f6c600]"
      >
        <Accessibility className="h-6 w-6" aria-hidden="true" />
      </button>

      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-modal="false"
          aria-label={t.title}
          className="absolute bottom-14 w-[17rem] rounded-2xl bg-card p-4 text-[#1a1a1a] shadow-[0_8px_30px_rgba(0,0,0,0.18)] ltr:left-0 rtl:right-0"
        >
          <div className="mb-3 flex items-center justify-between gap-2">
            <h2 className="text-base font-bold">{t.title}</h2>
            <button
              type="button"
              aria-label={t.close}
              onClick={() => {
                setOpen(false);
                buttonRef.current?.focus();
              }}
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#5a5a5a] outline-offset-2 hover:bg-[#f2f2f2] focus-visible:outline-2 focus-visible:outline-[#f6c600]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="mb-3">
            <p className="mb-2 text-sm font-medium">{t.fontLabel}</p>
            <div className="flex items-center gap-2" dir="ltr">
              <button
                type="button"
                aria-label={t.fontDown}
                onClick={() => update({ fontStep: Math.max(-1, settings.fontStep - 1) })}
                className="h-10 flex-1 rounded-xl border-2 border-[#f6c600] text-lg font-bold outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#f6c600]"
              >
                A−
              </button>
              <span className="min-w-10 text-center text-sm text-[#5a5a5a]" aria-hidden="true">
                {100 + settings.fontStep * 10}%
              </span>
              <button
                type="button"
                aria-label={t.fontUp}
                onClick={() => update({ fontStep: Math.min(4, settings.fontStep + 1) })}
                className="h-10 flex-1 rounded-xl border-2 border-[#f6c600] text-lg font-bold outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#f6c600]"
              >
                A+
              </button>
            </div>
          </div>

          <ul className="space-y-2">
            {toggles.map(({ key, label, Icon }) => {
              const active = Boolean(settings[key]);
              return (
                <li key={key}>
                  <button
                    type="button"
                    aria-pressed={active}
                    onClick={() => update({ [key]: !active } as Partial<Settings>)}
                    className={`flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-start text-sm font-medium outline-offset-2 transition-colors focus-visible:outline-2 focus-visible:outline-[#f6c600] ${
                      active ? "bg-[#f6c600] text-[#1a1a1a]" : "bg-[#f4f4f4] text-[#1a1a1a]"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                    <span className="min-w-0 flex-1">{label}</span>
                    <span aria-hidden="true" className="text-xs text-[#5a5a5a]">
                      {active ? "✓" : ""}
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            onClick={reset}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border-2 border-[#1a1a1a] px-3 py-2.5 text-sm font-bold outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#f6c600]"
          >
            <RotateCcw className="h-4 w-4" aria-hidden="true" />
            {t.reset}
          </button>

          <a
            href="/accessibility"
            className="mt-2 block rounded-xl px-3 py-2 text-center text-sm font-medium text-[#5a5a5a] underline outline-offset-2 focus-visible:outline-2 focus-visible:outline-[#f6c600]"
          >
            {t.statement}
          </a>
        </div>
      )}
    </div>
  );
}
