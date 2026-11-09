import type { AppointmentCalendarContent } from "./types";

const faqItems: AppointmentCalendarContent["faq"]["items"] = [
  {
    question: "Eignet sich der Terminplaner auch, wenn ich allein arbeite?",
    answer:
      "Ja. Viele Studios arbeiten mit Treatflow allein. Du siehst deinen Tag mit allen Terminen, Kundinnen buchen online direkt in deine freien Zeiten und bekommen automatisch eine Bestätigung und Erinnerung. Spalten für Mitarbeiter und Räume brauchst du erst, wenn dein Studio wächst.",
  },
  {
    question: "Wie organisiere ich Termine im Kosmetikstudio am besten?",
    answer:
      "Mit einer spezialisierten Terminsoftware wie Treatflow organisierst du Termine am effizientesten. Online-Buchungen ermöglichen Kunden 24/7 zu buchen, automatische Erinnerungen per WhatsApp reduzieren No-Shows spürbar, und die übersichtliche Kalenderansicht gibt dir jederzeit den vollen Überblick.",
  },
  {
    question: "Was kostet eine Terminsoftware für Kosmetikstudios?",
    answer:
      "Treatflow bietet Terminverwaltung mit Online-Buchungen ab 59 EUR pro Monat im Booking-Plan (53 EUR bei jährlicher Zahlung, zzgl. MwSt.). 14 Tage kostenlos testen, keine Kreditkarte nötig. Es gibt keine versteckten Kosten oder Provisionen pro Buchung.",
  },
  {
    question: "Gibt es einen kostenlosen Terminplaner für Kosmetikstudios?",
    answer:
      "Kostenlose Terminplaner gibt es – meist mit Einschränkungen, Werbung oder Provisionen pro Buchung über ein Marktplatz-Modell. Ein reiner Papier- oder Excel-Terminplaner ist zwar gratis, kann aber keine Online-Buchung, keine Erinnerungen und keine Verbindung zur Kundenkartei. Treatflow kannst du 14 Tage kostenlos und ohne Kreditkarte testen; danach kostet der Terminplaner mit Online-Buchung 59 EUR pro Monat, ohne Provision pro Termin.",
  },
  {
    question: "Terminplaner, Terminkalender oder Buchungssystem – was ist der Unterschied?",
    answer:
      "Im Studioalltag meinen alle drei Begriffe fast dasselbe: Der Terminplaner bzw. Terminkalender ist die Ansicht, in der du und dein Team die Termine verwalten. Das Buchungssystem ist der Teil, über den Kundinnen selbst online buchen. In Treatflow ist beides eins – Online-Buchungen landen direkt im Terminplaner, inklusive Erinnerung und Kundenkartei.",
  },
  {
    question: "Können meine Kunden online Termine buchen?",
    answer:
      "Ja. Du bekommst einen persönlichen Buchungslink, den du auf deiner Website, auf Instagram oder per WhatsApp teilen kannst. Deine Kunden können darüber rund um die Uhr Behandlungen und Termine auswählen. Neue Buchungen erscheinen sofort im Kalender, Bestätigungen werden automatisch per WhatsApp und E-Mail versendet.",
  },
  {
    question: "Wie reduziere ich No-Shows im Kosmetikstudio?",
    answer:
      "Automatische Terminerinnerungen per WhatsApp und E-Mail sind der effektivste Weg, No-Shows zu reduzieren. Treatflow versendet Erinnerungen zu konfigurierbaren Zeitpunkten vor dem Termin. So sinkt die Zahl der No-Shows deutlich.",
  },
  {
    question: "Welche Funktionen sollte ein Terminplaner für Kosmetikstudios haben?",
    answer:
      "Ein guter Terminplaner für Kosmetikstudios sollte Online-Buchungen, Tages-/Wochen-/Monatsansichten, Mitarbeiter- und Raumplanung, automatische Erinnerungen per WhatsApp und E-Mail, Drag & Drop und eine Integration mit Kundenkartei und Dokumentation bieten.",
  },
  {
    question: "Wie plane ich mehrere Mitarbeiter und Räume im Kosmetikstudio?",
    answer:
      "Mit der Tagesansicht von Treatflow siehst du Mitarbeiter oder Räume in getrennten Spalten. So erkennst du freie Kapazitäten, vermeidest Doppelbelegungen und kannst spontane Änderungen im Studioalltag leichter koordinieren.",
  },
  {
    question: "Wie vermeide ich Doppelbelegungen bei Mitarbeitern und Räumen?",
    answer:
      "Treatflow stellt die Auslastung von Mitarbeitern und Räumen übersichtlich nebeneinander dar. Freie und belegte Zeiten sind direkt erkennbar, sodass Engpässe und Doppelbelegungen frühzeitig vermieden werden.",
  },
  {
    question: "Welche Terminsoftware eignet sich für ästhetische Medizin?",
    answer:
      "Treatflow kombiniert Kalender mit Mitarbeiter- und Raumspalten, Online-Buchung für Beratung und Behandlung sowie Erinnerungen per WhatsApp und E-Mail. Neue Buchungen landen direkt im Kalender, ohne Provision pro Termin.",
  },
];

export const appointmentCalendarDe: AppointmentCalendarContent = {
  meta: {
    title: "Terminplaner Kosmetikstudio: allein oder im Team",
    description:
      "Terminplaner fürs Kosmetikstudio, ob allein oder im Team: Online-Buchung, Drag & Drop, WhatsApp-Erinnerungen, Spalten für Team & Räume. Ohne Provision.",
    keywords: [
      "Terminplaner Kosmetikstudio",
      "Terminplaner Software Kosmetikstudio",
      "Terminplaner Kosmetik",
      "Terminplaner Kosmetik kostenlos",
      "Terminsoftware Kosmetikstudio",
      "Buchungssystem Kosmetikstudio",
      "Terminplaner für Kosmetikstudio",
      "Terminkalender Kosmetikstudio",
      "Terminplaner Einzelstudio",
      "Terminkalender Kosmetikerin selbstständig",
      "Tagesansicht Mitarbeiter",
      "Raumplanung Kosmetikstudio",
      "Mitarbeiter Auslastung planen",
      "Drag and Drop Terminplaner",
      "Kosmetikstudio Terminverwaltung",
      "Terminbuchungssoftware Kosmetiker",
    ],
    openGraph: {
      title: "Terminplaner fürs Kosmetikstudio – allein oder im Team",
      description:
        "Dein Terminkalender mit Online-Buchung, Drag & Drop und automatischen Erinnerungen – fürs Einzelstudio und fürs Team mit Mitarbeiter- und Raumspalten.",
      image: { url: "/images/mockups/kalender-overview.png", alt: "Treatflow Terminkalender Interface" },
    },
  },
  dates: { modified: "2026-11-09", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Terminplaner Kosmetikstudio: allein oder im Team",
      description:
        "Terminplaner fürs Kosmetikstudio – für Einzelstudios und Teams – mit Drag & Drop, Online-Buchung, automatischen Erinnerungen und Spalten für Mitarbeiter und Räume.",
    },
    software: {
      name: "Treatflow Terminplaner für Kosmetikstudios",
      description:
        "Terminkalender für Kosmetikstudios – allein oder im Team – mit Drag & Drop, Online-Buchung, automatischen Erinnerungen sowie Mitarbeiter- und Raumspalten.",
      featureList: [
        "Terminkalender für Einzelstudios und Teams",
        "Tagesansicht mit Spalten pro Mitarbeiter oder Raum",
        "Auslastung und freie Kapazitäten erkennen",
        "Doppelbelegungen von Team und Räumen vermeiden",
        "Termine per Drag & Drop umplanen",
        "Tages-, Wochen- und Monatsansicht",
        "Online-Buchung und automatische Erinnerungen",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Terminkalender",
  hero: {
    eyebrow: "Terminplaner & Terminkalender",
    eyebrowIcon: "calendar",
    title: { before: "Terminplaner fürs Kosmetikstudio – ", highlight: "allein oder im Team" },
    description:
      "Dein Terminkalender mit Online-Buchung, Erinnerungen und Drag & Drop – ideal, wenn du allein arbeitest. Wächst dein Studio, bekommen Mitarbeiterinnen und Räume ihre eigene Spalte.",
    chips: ["Allein oder im Team", "Drag & Drop", "Weniger No-Shows"],
    secondaryCta: { label: "Online-Buchungen", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Wie organisiere ich Termine im Kosmetikstudio am besten?",
        answer:
          "Treatflow bündelt Termine, Online-Buchungen und Erinnerungen in einem Kalender – egal, ob du allein arbeitest oder mit Team. Allein hast du deinen Tag mit allen Terminen auf einen Blick. Mit Team zeigt die Tagesansicht jede Person oder jeden Raum in einer eigenen Spalte, sodass du freie Kapazitäten erkennst und Doppelbelegungen vermeidest. Online-Buchungen und automatische Erinnerungen reduzieren zusätzlich Telefonaufwand und No-Shows.",
      },
      {
        question: "Welche Terminsoftware eignet sich für ästhetische Medizin?",
        answer:
          "Treatflow kombiniert Kalender mit Mitarbeiter- und Raumspalten, Online-Buchung für Beratung und Behandlung sowie Erinnerungen per WhatsApp und E-Mail. Buchungen landen ohne Provision im Kalender.",
      },
    ],
    image: {
      src: "/images/mockups/kalender-overview.png",
      alt: "Treatflow Terminkalender – Tagesansicht mit Mitarbeitern und Räumen",
    },
  },
  video: {
    title: "Der Terminkalender in einer Minute erklärt",
    description: "Termin per Klick anlegen, Tag, Woche und Monat im Blick – allein oder mit Team.",
    videoSrc: "/videos/funktionen/terminkalender.mp4",
    posterSrc: "/images/video/funktionen/terminkalender-poster.jpg",
    posterAlt: "Video: Der Terminkalender in einer Minute erklärt",
    playLabel: "Video ansehen",
    playAriaPrefix: "Video abspielen",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
  },
  understand: {
    title: "Ein Terminkalender, der mit deinem Studio wächst",
    description: "Ob du allein arbeitest oder mit Team: Alle Termine auf einen Blick – du siehst sofort, wann noch etwas frei ist.",
    items: [
      {
        icon: "calendar-days",
        title: "Allein oder im Team",
        text: "Arbeitest du allein, hast du deinen Tag mit allen Terminen im Blick. Kommen Mitarbeiterinnen oder Behandlungsräume dazu, bekommt jede Person und jeder Raum eine eigene Spalte.",
      },
      {
        icon: "move",
        title: "Termine verschieben per Drag & Drop",
        text: "Wenn sich etwas ändert, ziehst du den Termin einfach an eine andere Stelle – kein Löschen und Neuanlegen nötig.",
      },
      {
        icon: "bell",
        title: "Automatische Erinnerungen",
        text: "Deine Kunden bekommen vor dem Termin eine Erinnerung per WhatsApp oder E-Mail. Das reduziert vergessene Termine spürbar.",
      },
    ],
  },
  howItWorks: {
    description: "In drei Schritten zum laufenden Studioplan.",
    steps: [
      { title: "Leistungen und Arbeitszeiten eintragen", text: "Lege deine Behandlungen und Arbeitszeiten an. Hast du ein Team oder mehrere Räume, trägst du sie dazu ein – dann bekommt jede Person und jeder Raum eine eigene Spalte." },
      { title: "Termine eintragen", text: "Trage Termine selbst ein oder aktiviere die Online-Buchung – dann erscheinen Buchungen deiner Kunden automatisch im Kalender." },
      { title: "Erinnerungen laufen automatisch", text: "Deine Kunden bekommen Terminbestätigung und Erinnerung per WhatsApp oder E-Mail – du musst nichts manuell verschicken." },
    ],
  },
  cards: {
    title: "Was du bekommst",
    description: "Alles für die Terminplanung – vom Einzelstudio bis zum Team, mit Online-Buchung und Erinnerungen in einem Kalender.",
    items: [
      { icon: "users", title: "Allein oder im Team", text: "Allein siehst du deinen Tag auf einen Blick. Mit Team bekommt jede Mitarbeiterin und jeder Raum eine eigene Spalte.", points: ["Fürs Einzelstudio", "Spalten für Team & Räume", "Keine Doppelbelegung"] },
      { icon: "move", title: "Drag & Drop", text: "Termine verschieben, verlängern oder tauschen – ohne Formulare und ohne Chaos.", points: ["Umplanen in Sekunden", "Live im Kalender", "Ohne Neu-Anlegen"] },
      { icon: "layout-grid", title: "Tages- bis Monatsansicht", text: "Wechsle zwischen Tag, Woche und Monat – je nachdem, was du gerade brauchst.", points: ["Tagesansicht", "Woche", "Monat"] },
      { icon: "bell", title: "Automatische Erinnerungen", text: "WhatsApp und E-Mail vor dem Termin. Weniger No-Shows, weniger Nachtelefonieren.", points: [{ text: "WhatsApp & E-Mail", feature: "whatsapp" }, "Flexible Zeitpunkte", "Storno-Hinweis"] },
      { icon: "calendar", title: "Online-Buchung", text: "Buchungen landen direkt im Kalender. Keine Doppelbuchung, automatische Bestätigung.", points: ["Persönlicher Link", "Sofort im Kalender", "Ohne Provision"] },
      { icon: "clock", title: "Weniger Verwaltungszeit", text: "Weniger Anrufe, klarere Abläufe – mehr Zeit für Behandlungen statt für den Plan.", points: ["Weniger Telefonate", "Klare Slots", "Schneller Überblick"] },
    ],
  },
  faq: {
    title: "Häufige Fragen zum Terminplaner fürs Kosmetikstudio",
    items: faqItems,
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Online-Buchungen", description: "24/7 über deinen Buchungslink" },
      { href: { page: "messaging" }, title: "Nachrichten", description: "Erinnerungen per WhatsApp und E-Mail" },
      { href: { page: "customer-workflows" }, title: "Kunden-Workflows", description: "Nachsorge & Reaktivierung" },
    ],
  },
  cta: {
    title: "Bereit für klare Terminplanung?",
    description: "14 Tage kostenlos testen – ohne Kreditkarte. Kalender, Online-Buchung und Erinnerungen in einer App, allein oder im Team.",
    secondary: { label: "Online-Buchungen", href: { page: "online-booking" } },
  },
};
