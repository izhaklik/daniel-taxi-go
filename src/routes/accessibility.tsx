import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Phone, MessageCircle } from "lucide-react";

import { CONFIG, telLink, waLink } from "@/lib/site-config";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "הצהרת נגישות | דניאל taxi — מונית גדולה" },
      {
        name: "description",
        content:
          "הצהרת הנגישות של אתר דניאל taxi — מונית גדולה עד 6 נוסעים. האתר נבנה בהתאם לתקן הישראלי 5568 ולהנחיות WCAG 2.1 ברמה AA.",
      },
      { property: "og:title", content: "הצהרת נגישות | דניאל taxi" },
      {
        property: "og:description",
        content: "האתר נבנה לפי תקן ישראלי 5568 והנחיות WCAG 2.1 ברמה AA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AccessibilityPage,
});

function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-background">
      <main id="main" className="mx-auto max-w-3xl px-5 py-12">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-bold hover:bg-brand/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground"
        >
          <ArrowRight className="size-4 text-brand" aria-hidden="true" />
          חזרה לעמוד הבית
        </Link>

        <h1 className="mt-6 text-3xl font-black">הצהרת נגישות</h1>
        <p className="mt-3 text-base leading-relaxed text-muted-foreground">
          אנו ב־{CONFIG.businessName} רואים חשיבות רבה במתן שירות שוויוני לכל אדם, ופועלים
          להנגשת האתר והשירות לאנשים עם מוגבלות.
        </p>

        <section className="mt-8 rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
          <h2 className="text-xl font-bold">רמת הנגישות באתר</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            האתר הונגש בהתאם לתקן הישראלי ת"י 5568 ולהנחיות הבינלאומיות WCAG 2.1 ברמת
            תאימות AA, ובהתאם לתקנות שוויון זכויות לאנשים עם מוגבלות (התאמות נגישות לשירות),
            תשע"ג-2013.
          </p>
          <ul className="mt-4 list-inside list-disc space-y-2 text-sm leading-relaxed">
            <li>מבנה סמנטי עם כותרות היררכיות, אזורי ניווט וקישור "דלגו לתוכן המרכזי".</li>
            <li>תפעול מלא באמצעות מקלדת, כולל סימון פוקוס ברור בכל רכיב אינטראקטיבי.</li>
            <li>תמיכה בקוראי מסך: תיאורי תמונות, תוויות בעברית לכל כפתור ושדה טופס.</li>
            <li>ניגודיות צבעים העומדת ביחס של 4.5:1 לפחות בטקסט רגיל.</li>
            <li>עיצוב מותאם לנייד, אפשרות הגדלת טקסט עד 200% ללא אובדן תוכן.</li>
            <li>כיבוד העדפת מערכת ההפעלה לצמצום אנימציות (prefers-reduced-motion).</li>
            <li>טפסים עם סימון שדות חובה, הנחיות טקסט והודעות שגיאה נגישות.</li>
          </ul>
        </section>

        <section className="mt-6 rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
          <h2 className="text-xl font-bold">מרכיבים שאינם נגישים במלואם</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            מפת גוגל המוטמעת בתחתית האתר היא רכיב של צד שלישי, וייתכן שחלק ממאפייני
            הנגישות שלה אינם בשליטתנו. כל המידע המופיע במפה — אזורי השירות ודרכי ההתקשרות —
            זמין גם כטקסט רגיל באתר.
          </p>
        </section>

        <section className="mt-6 rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
          <h2 className="text-xl font-bold">נגישות השירות</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            הרכב הוא {CONFIG.vehicle} עד 6 נוסעים. ניתן לתאם מראש סיוע בעלייה וירידה מהרכב,
            מקום לאחסון עזרי הליכה, וכן הזמנה טלפונית או בוואטסאפ למי שמתקשה בשימוש באתר.
            הנהג דובר עברית ואנגלית.
          </p>
        </section>

        <section className="mt-6 rounded-2xl bg-card p-5 shadow-[0_2px_14px_rgba(0,0,0,0.06)]">
          <h2 className="text-xl font-bold">פנייה בנושא נגישות</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            נתקלתם בבעיית נגישות באתר או בשירות? נשמח לשמוע ולתקן.
          </p>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-brand" aria-hidden="true" />
              <a
                href={telLink}
                className="font-bold underline"
                aria-label={`להתקשר לרכז הנגישות בטלפון ${CONFIG.phoneDisplay}`}
              >
                {CONFIG.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-brand" aria-hidden="true" />
              <a
                href={waLink("שלום, אני רוצה לדווח על בעיית נגישות באתר.")}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold underline"
                aria-label="לשליחת הודעת וואטסאפ בנושא נגישות"
              >
                וואטסאפ
              </a>
            </li>
          </ul>
          <p className="mt-4 text-sm text-muted-foreground">
            רכז הנגישות: {CONFIG.businessName} · שעות מענה: {CONFIG.hours}
          </p>
        </section>

        <p className="mt-6 text-xs text-muted-foreground">
          הצהרת הנגישות עודכנה בתאריך 02.09.2026.
        </p>
      </main>
    </div>
  );
}
