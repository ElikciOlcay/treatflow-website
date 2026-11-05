import type { AppointmentCalendarContent } from "./types";

const faqItems: AppointmentCalendarContent["faq"]["items"] = [
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
    title: "Terminplaner Kosmetikstudio: Software für Team & Räume",
    description:
      "Terminplaner-Software fürs Kosmetikstudio: Terminkalender mit Spalten für Mitarbeiter und Räume, Online-Buchung, Drag & Drop und WhatsApp-Erinnerungen. Ohne Provision, 14 Tage gratis testen.",
    keywords: [
      "Terminplaner Kosmetikstudio",
      "Terminplaner Software Kosmetikstudio",
      "Terminplaner Kosmetik",
      "Terminplaner Kosmetik kostenlos",
      "Terminsoftware Kosmetikstudio",
      "Buchungssystem Kosmetikstudio",
      "Terminplaner für Kosmetikstudio",
      "Terminkalender Kosmetikstudio",
      "Tagesansicht Mitarbeiter",
      "Raumplanung Kosmetikstudio",
      "Mitarbeiter Auslastung planen",
      "Drag and Drop Terminplaner",
      "Kosmetikstudio Terminverwaltung",
      "Terminbuchungssoftware Kosmetiker",
    ],
    openGraph: {
      title: "Terminplaner fürs Kosmetikstudio – Team & Räume",
      description:
        "Plane Mitarbeiter, Räume und Termine übersichtlich in einer Tagesansicht – mit Drag & Drop, Online-Buchungen und automatischen Erinnerungen.",
      image: { url: "/images/mockups/kalender-overview.png", alt: "Treatflow Terminkalender Interface" },
    },
  },
  dates: { modified: "2026-10-28", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Terminplaner Kosmetikstudio: Software für Team & Räume",
      description:
        "Terminplaner fürs Kosmetikstudio mit Tagesansicht für Mitarbeiter und Räume, Drag & Drop, Online-Buchung und automatischen Erinnerungen.",
    },
    software: {
      name: "Treatflow Terminplaner für Kosmetikstudios",
      description:
        "Terminkalender für Kosmetikstudios mit Mitarbeiter- und Raumspalten, Drag & Drop, Online-Buchung und automatischen Erinnerungen.",
      featureList: [
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
    title: { before: "Terminplaner fürs Kosmetikstudio – für Team und ", highlight: "Räume" },
    description:
      "Der Terminplaner für dein Kosmetikstudio: Mitarbeiter, Räume und Termine in einer Ansicht, Online-Buchung inklusive. Per Drag & Drop umplanen und Doppelbelegungen vermeiden.",
    chips: ["Drag & Drop", "Team & Räume", "Weniger No-Shows"],
    secondaryCta: { label: "Online-Buchungen", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Wie organisiere ich Termine im Kosmetikstudio am besten?",
        answer:
          "Treatflow bündelt Termine, Mitarbeiter und Räume in einem Kalender. Die Tagesansicht zeigt jede Person oder jeden Raum in einer eigenen Spalte. Dadurch erkennst du freie Kapazitäten, vermeidest Doppelbelegungen und koordinierst Änderungen schneller. Online-Buchungen und automatische Erinnerungen reduzieren zusätzlich Telefonaufwand und No-Shows.",
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
    description: "Termin per Klick anlegen, jede Mitarbeiterin in ihrer Spalte, Tag, Woche und Monat im Blick.",
    videoSrc: "/videos/funktionen/terminkalender.mp4",
    posterSrc: "/images/video/funktionen/terminkalender-poster.jpg",
    posterAlt: "Video: Der Terminkalender in einer Minute erklärt",
    playLabel: "Video ansehen",
    playAriaPrefix: "Video abspielen",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
  },
  understand: {
    title: "Terminplaner-Software für das ganze Studio",
    description: "Alle Termine, Mitarbeiter und Räume auf einen Blick – du siehst sofort, wer wann frei ist.",
    items: [
      {
        icon: "users",
        title: "Team, Räume und Leistungen",
        text: "Lege deine Mitarbeiter, Behandlungsräume und Leistungen an. Im Kalender siehst du dann für jede Person oder jeden Raum eine eigene Spalte.",
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
      { title: "Team, Leistungen und Räume einrichten", text: "Trage deine Mitarbeiter, Behandlungen und Räume mit Arbeitszeiten ein. Danach zeigt der Kalender für jeden eine eigene Spalte." },
      { title: "Termine eintragen", text: "Trage Termine selbst ein oder aktiviere die Online-Buchung – dann erscheinen Buchungen deiner Kunden automatisch im Kalender." },
      { title: "Erinnerungen laufen automatisch", text: "Deine Kunden bekommen Terminbestätigung und Erinnerung per WhatsApp oder E-Mail – du musst nichts manuell verschicken." },
    ],
  },
  cards: {
    title: "Was du bekommst",
    description: "Alles für die Terminplanung im Studio – Team, Räume und Erinnerungen in einem Kalender.",
    items: [
      { icon: "users", title: "Team & Räume", text: "Eine Spalte pro Mitarbeiter oder Raum. Auslastung und freie Zeiten auf einen Blick.", points: ["Spaltenansicht", "Kapazitäten erkennen", "Keine Doppelbelegung"] },
      { icon: "move", title: "Drag & Drop", text: "Termine verschieben, verlängern oder tauschen – ohne Formulare und ohne Chaos.", points: ["Umplanen in Sekunden", "Live im Kalender", "Fürs ganze Team"] },
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
    description: "14 Tage kostenlos testen – ohne Kreditkarte. Kalender, Teamplanung und Online-Buchung in einer App.",
    secondary: { label: "Online-Buchungen", href: { page: "online-booking" } },
  },
};
