import type { ShiftPlannerContent } from "./types";

const faqItems: ShiftPlannerContent["faq"]["items"] = [
  {
    question: "Wie plane ich Schichten und Urlaub im Kosmetikstudio?",
    answer:
      "Mit dem Schichtplaner von Treatflow planst du jede Woche pro Mitarbeiterin: eine oder mehrere Schichten pro Tag, Vorlagen wie Früh, Spät oder Ganztags und Abwesenheiten wie Urlaub, Krankheit oder Schulung als Zeitraum. Mit „Vorwoche kopieren“ steht die nächste Woche in Sekunden. Die Online-Buchung zeigt danach nur Zeiten, in denen wirklich jemand eingeplant ist.",
  },
  {
    question: "Was kostet der Schichtplaner?",
    answer:
      "Der Schichtplaner ist eine App im Booking-Paket (59 EUR pro Monat, 53 EUR bei jährlicher Zahlung, zzgl. MwSt.) und kostet derzeit nichts extra. Du aktivierst ihn unter Apps → Schichtplaner und kannst ihn in den 14 Testtagen kostenlos ausprobieren.",
  },
  {
    question: "Was passiert mit den bisherigen Arbeitszeiten?",
    answer:
      "Beim Aktivieren füllt Treatflow die nächsten 8 Wochen aus den bisherigen Arbeitszeiten vor, damit keine buchbaren Zeiten wegfallen. Danach planst du selbst weiter – Treatflow füllt nicht automatisch nach. Schaltest du den Schichtplaner wieder aus, gelten die normalen Arbeitszeiten, und dein Plan bleibt gespeichert.",
  },
  {
    question: "Sehen Kundinnen, warum jemand nicht buchbar ist?",
    answer:
      "Nein. Bei Urlaub, Krankheit oder Schulung ist die Mitarbeiterin in diesem Zeitraum einfach nicht online buchbar. Kundinnen sehen nur die freien Zeiten, nie den Grund der Abwesenheit.",
  },
  {
    question: "Was passiert mit Terminen, die schon gebucht sind?",
    answer:
      "Gebuchte Termine bleiben bestehen, auch wenn du eine Schicht änderst oder Urlaub einträgst. Liegt ein Termin außerhalb der Schicht oder in einer Abwesenheit, weist dich Treatflow beim Öffnen des Termins darauf hin – so kannst du ihn rechtzeitig verschieben.",
  },
  {
    question: "Kann ich mehrere Schichten an einem Tag planen?",
    answer:
      "Ja. Pro Mitarbeiterin und Tag sind beliebig viele Schichten möglich, zum Beispiel 9–12 und 15–19 Uhr mit langer Mittagspause. Die Schichten dürfen sich nur nicht überschneiden.",
  },
  {
    question: "Gelten Schichten auch außerhalb der Öffnungszeiten?",
    answer:
      "Ja. Ist der Schichtplaner aktiv, zählt die geplante Schicht – auch wenn sie vor oder nach den normalen Öffnungszeiten liegt. So kannst du zum Beispiel einen langen Donnerstag mit einer Mitarbeiterin anbieten, ohne die Öffnungszeiten zu ändern.",
  },
  {
    question: "Kann ich eine Schicht nur für bestimmte Leistungen freigeben?",
    answer:
      "Ja. Jede Schicht und jede Vorlage lässt sich online auf bestimmte Kategorien oder Leistungen beschränken, etwa nur Laser am Donnerstagnachmittag. Im Wochenplan steht dann an der Schicht, was online buchbar ist.",
  },
  {
    question: "Werden Feiertage berücksichtigt?",
    answer:
      "Ja. Feiertage, an denen dein Studio geschlossen ist, erscheinen im Schichtplan als graue Spalte mit Namen. Du legst sie unter Einstellungen → Öffnungszeiten → Feiertage fest.",
  },
  {
    question: "Wer darf den Schichtplan bearbeiten?",
    answer:
      "Den Schichtplan bearbeiten Inhaberinnen und Mitarbeiterinnen mit Admin-Rolle. Mitarbeiterinnen, die sich nur mit ihrer PIN anmelden, haben keinen Zugriff darauf.",
  },
];

export const shiftPlannerDe: ShiftPlannerContent = {
  meta: {
    title: "Schichtplaner fürs Kosmetikstudio: Dienstplan & Urlaub",
    description:
      "Schichtplaner fürs Kosmetikstudio: Schichten pro Woche planen, Urlaub und Krankheit eintragen – die Online-Buchung zeigt nur Zeiten, in denen jemand arbeitet.",
    keywords: [
      "Schichtplaner Kosmetikstudio",
      "Dienstplan Kosmetikstudio",
      "Schichtplan Software",
      "Dienstplan Software Salon",
      "Schichtplanung Kosmetikstudio",
      "Personalplanung Kosmetikstudio",
      "Urlaubsplanung Mitarbeiter",
      "Dienstplan App Kosmetik",
      "Abwesenheiten planen",
      "Online-Buchung Schichtplan",
    ],
    openGraph: {
      title: "Schichtplaner fürs Kosmetikstudio – Dienstplan, Urlaub und Online-Buchung",
      description:
        "Plane Schichten, Vorlagen und Urlaub pro Woche. Die Online-Buchung richtet sich automatisch nach dem Schichtplan.",
      image: { url: "/images/mockups/schichtplan.png", alt: "Treatflow Schichtplaner – Wochenplan des Teams" },
    },
  },
  dates: { modified: "2026-11-11", published: "2026-11-11" },
  schema: {
    id: "schichtplaner",
    webPage: {
      name: "Schichtplaner fürs Kosmetikstudio: Dienstplan & Urlaub",
      description:
        "Schichtplaner für Kosmetikstudios mit Wochenplan pro Mitarbeiterin, Schichtvorlagen, Urlaub und Krankheit – die Online-Buchung folgt dem Schichtplan.",
    },
    software: {
      name: "Treatflow Schichtplaner für Kosmetikstudios",
      description:
        "Schichtplaner mit Wochenplan pro Mitarbeiterin, Schichtvorlagen und Abwesenheiten. Die Online-Buchung bietet nur Zeiten innerhalb geplanter Schichten an.",
      featureList: [
        "Wochenplan pro Mitarbeiterin mit mehreren Schichten pro Tag",
        "Schichtvorlagen wie Früh, Spät und Ganztags",
        "Vorwoche kopieren oder aus Arbeitszeiten füllen",
        "Urlaub, Krankheit und Schulungen als Zeitraum",
        "Online-Buchung nur innerhalb geplanter Schichten",
        "Schichten nur für bestimmte Leistungen freigeben",
        "Schichten und Abwesenheiten im Terminkalender",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Schichtplaner",
  hero: {
    eyebrow: "Schichtplaner & Dienstplan",
    eyebrowIcon: "calendar-clock",
    title: { before: "Schichtplaner fürs Kosmetikstudio: ", highlight: "gebucht wird nur, wer arbeitet" },
    description:
      "Plane die Woche deines Teams mit Schichten, Vorlagen und Urlaub. Die Online-Buchung richtet sich automatisch nach dem Schichtplan – Tage ohne Schicht und Abwesenheiten sind nicht buchbar.",
    chips: ["Schichten pro Woche", "Urlaub & Krankheit", "Online-Buchung nach Plan"],
    secondaryCta: { label: "Terminkalender", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Wie plane ich Schichten und Urlaub im Kosmetikstudio?",
        answer:
          "Mit dem Schichtplaner von Treatflow planst du jede Woche pro Mitarbeiterin: eine oder mehrere Schichten pro Tag, Vorlagen wie Früh, Spät oder Ganztags und Abwesenheiten wie Urlaub oder Krankheit als Zeitraum. Die Online-Buchung zeigt danach nur Zeiten, in denen wirklich jemand eingeplant ist.",
      },
      {
        question: "Was passiert mit der Online-Buchung, wenn jemand Urlaub hat?",
        answer:
          "Während Urlaub, Krankheit oder Schulung ist die Mitarbeiterin nicht online buchbar. Kundinnen sehen den Grund nicht, nur die freien Zeiten der Kolleginnen. Bereits gebuchte Termine bleiben bestehen.",
      },
    ],
    image: {
      src: "/images/mockups/schichtplan.png",
      alt: "Treatflow Schichtplaner – Wochenplan mit Schichten und Abwesenheiten pro Mitarbeiterin",
    },
  },
  understand: {
    title: "Ein Schichtplan, der deine Online-Buchung steuert",
    description:
      "Statt fester Arbeitszeiten planst du Woche für Woche – und Kundinnen buchen nur, wenn wirklich jemand im Studio ist.",
    items: [
      {
        icon: "calendar-days",
        title: "Woche für Woche planen",
        text: "Jede Mitarbeiterin bekommt pro Tag eine oder mehrere Schichten, auch geteilte Dienste mit Mittagspause. Die Wochenstunden stehen gleich in der Spalte „Summe“.",
      },
      {
        icon: "plane",
        title: "Urlaub, Krankheit, Schulung",
        text: "Abwesenheiten trägst du als Zeitraum ein. In dieser Zeit ist die Mitarbeiterin nicht online buchbar – Kundinnen sehen den Grund nicht.",
      },
      {
        icon: "globe",
        title: "Online-Buchung nach Plan",
        text: "Die Buchungsseite zeigt nur Zeiten innerhalb geplanter Schichten. Tage ohne Schicht sind nicht buchbar; auch Warteliste und Umbuchungen richten sich danach.",
      },
    ],
  },
  howItWorks: {
    description: "In drei Schritten vom Wochenplan zur passenden Online-Buchung.",
    steps: [
      {
        title: "Schichtplaner aktivieren",
        text: "Unter Apps schaltest du den Schichtplaner ein. Damit keine buchbaren Zeiten wegfallen, füllt Treatflow die nächsten 8 Wochen aus den bisherigen Arbeitszeiten vor.",
      },
      {
        title: "Woche anpassen",
        text: "Setze Schichten per Vorlage, kopiere die Vorwoche oder ändere einzelne Tage. Urlaub und Krankheit trägst du als Zeitraum ein.",
      },
      {
        title: "Kundinnen buchen nach Plan",
        text: "Die Online-Buchung bietet nur Zeiten innerhalb der Schichten an. Im Terminkalender siehst du Schichten und Abwesenheiten direkt in der Tagesansicht.",
      },
    ],
  },
  cards: {
    description: "Alles für die Personalplanung im Studio – verbunden mit Kalender und Online-Buchung.",
    items: [
      {
        icon: "users",
        title: "Wochenplan pro Mitarbeiterin",
        text: "Alle Mitarbeiterinnen untereinander, die Tage nebeneinander – mit beliebig vielen Schichten pro Tag.",
        points: ["Geteilte Dienste", "Stunden pro Woche", "Vorwoche kopieren"],
      },
      {
        icon: "layers",
        title: "Schichtvorlagen",
        text: "Lege Vorlagen wie Früh, Spät oder Ganztags an und setze sie mit einem Klick. Oder fülle eine Woche aus den Standard-Arbeitszeiten.",
        points: ["Eigene Vorlagen", "Schnellauswahl pro Tag", "Aus Arbeitszeiten füllen"],
      },
      {
        icon: "plane",
        title: "Abwesenheiten",
        text: "Urlaub, Krankheit, Schulung oder sonstige Abwesenheit als Zeitraum – mit optionaler Notiz.",
        points: ["Urlaub & Krankheit", "Schulungen", "Grund bleibt intern"],
      },
      {
        icon: "globe",
        title: "Online-Buchung nach Schichtplan",
        text: "Gebucht wird nur innerhalb geplanter Schichten – auch über die Warteliste und wenn Kundinnen selbst umbuchen.",
        points: ["Tage ohne Schicht gesperrt", "Warteliste & Umbuchung", "Gebuchte Termine bleiben"],
      },
      {
        icon: "list-ordered",
        title: "Schichten für bestimmte Leistungen",
        text: "Gib eine Schicht online nur für bestimmte Kategorien oder Leistungen frei – etwa nur Laser am Donnerstagnachmittag.",
        points: ["Pro Schicht einstellbar", "Kategorien oder Leistungen", "Auch in Vorlagen"],
      },
      {
        icon: "calendar",
        title: "Im Terminkalender sichtbar",
        text: "In der Tagesansicht sind Zeiten außerhalb der Schicht schraffiert, Schichten und Abwesenheiten stehen unter dem Namen.",
        points: ["Schraffur außerhalb der Schicht", "Hinweis beim Termin", "Feiertage im Plan"],
      },
    ],
  },
  faq: {
    title: "Häufige Fragen zum Schichtplaner",
    items: faqItems,
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Terminkalender", description: "Team und Räume in einem Kalender" },
      { href: { page: "online-booking" }, title: "Online-Buchungen", description: "24/7 über deinen Buchungslink" },
      { href: { page: "messaging" }, title: "Nachrichten", description: "Erinnerungen per WhatsApp und E-Mail" },
    ],
  },
  cta: {
    title: "Plane dein Team – die Online-Buchung folgt",
    description:
      "14 Tage kostenlos testen – ohne Kreditkarte. Schichtplan, Terminkalender und Online-Buchung in einer App.",
    secondary: { label: "Terminkalender", href: { page: "appointment-calendar" } },
  },
};
