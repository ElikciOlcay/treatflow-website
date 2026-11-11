import type { FeaturesOverviewContent } from "./types";

/** Deutsche Funktionsübersicht (Referenz, = bisheriges Markup von app/(de)/funktionen). */
export const featuresDe: FeaturesOverviewContent = {
  meta: {
    title: "Alle Funktionen der Kosmetikstudio Software",
    description:
      "Entdecke alle Funktionen von Treatflow: Terminkalender, Online-Buchungen, Treatflow Pay, digitale Kundenkartei, Formulare, Behandlungsdokumentation, Kunden-Workflows, NiSV-Dokumentation und automatische Erinnerungen.",
    keywords: [
      "Kosmetikstudio Software Funktionen",
      "Treatflow Funktionen",
      "Terminkalender Kosmetik",
      "Kundenkartei Software",
      "Online-Buchungssystem Kosmetik",
      "Treatflow Pay",
      "Anzahlung Online-Buchung",
      "Behandlungsdokumentation",
      "NiSV Dokumentation",
    ],
    openGraph: {
      title: "Alle Funktionen | Treatflow Kosmetikstudio Software",
      description:
        "Entdecke alle Funktionen von Treatflow: Terminkalender, Online-Buchungen, Kundenkartei, Formulare, Dokumentation und mehr.",
    },
  },
  breadcrumb: "Funktionen",
  hero: {
    eyebrow: "Funktionsübersicht",
    eyebrowIcon: "sparkles",
    title: { before: "Alle ", highlight: "Funktionen", after: " auf einen Blick" },
    description: "Kalender, Buchungen, Kundenkartei, Formulare und Dokumentation – eine Plattform für dein Studio.",
    chips: ["All-in-One", "Ohne Provision", "Made in Austria"],
    secondaryCta: { label: "Preise ansehen", href: { page: "pricing" } },
    tiles: [
      { label: "Kalender", icon: "calendar", gradient: "from-indigo-500 to-purple-600" },
      { label: "Kasse", icon: "receipt", gradient: "from-green-500 to-emerald-600", feature: "pos" },
      { label: "Buchungen", icon: "link", gradient: "from-rose-500 to-orange-600" },
      { label: "Kunden", icon: "users", gradient: "from-blue-500 to-indigo-600" },
      { label: "Formulare", icon: "clipboard-check", gradient: "from-orange-500 to-amber-600" },
      { label: "Doku", icon: "file-text", gradient: "from-violet-500 to-purple-600" },
    ],
  },
  grid: {
    title: "{count} Kernfunktionen für dein Studio",
    subtitle: "Jede Funktion ist auf die Bedürfnisse von Kosmetikstudios zugeschnitten.",
    more: "Mehr erfahren",
    items: [
      {
        href: { page: "appointment-calendar" },
        icon: "calendar",
        title: "Terminkalender",
        description:
          "Plane Mitarbeiter und Räume übersichtlich in eigenen Spalten. Erkenne freie Kapazitäten, vermeide Doppelbelegungen und koordiniere Änderungen schneller.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Mitarbeiter- & Raumspalten", "Auslastung im Blick", "Drag & Drop"],
      },
      {
        href: { page: "shift-planner" },
        icon: "calendar-clock",
        title: "Schichtplaner",
        description:
          "Plane Schichten, Urlaub und Abwesenheiten pro Woche. Die Online-Buchung zeigt nur Zeiten, in denen jemand eingeplant ist.",
        color: "text-teal-600",
        bg: "bg-teal-50",
        border: "border-teal-200 hover:border-teal-400",
        highlights: ["Schichtvorlagen", "Urlaub & Krankheit", "Online-Buchung nach Plan"],
      },
      {
        href: { page: "point-of-sale" },
        icon: "receipt",
        title: "Kassensystem",
        description:
          "TSE- und RKSV-konforme Kasse direkt aus dem Termin. Belege mit Signatur-QR, Gutscheine, Tagesabschluss und Steuerberater-Export.",
        color: "text-green-600",
        bg: "bg-green-50",
        border: "border-green-200 hover:border-green-400",
        highlights: ["TSE (DE) & RKSV (AT)", "Kassieren aus dem Termin", "DSFinV-K & DEP7 Export"],
        feature: "pos",
      },
      {
        href: { page: "vouchers" },
        icon: "gift",
        title: "Gutscheine",
        description:
          "Geschenkgutscheine direkt an der Kasse verkaufen und einlösen. Einzweck- und Mehrzweckgutscheine mit korrekter Steuerlogik, Gültigkeit und automatischer Restwertverwaltung.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        highlights: ["Verkaufen & einlösen", "Einzweck & Mehrzweck", "Restwert automatisch"],
        feature: "vouchers",
      },
      {
        href: { page: "treatflow-pay" },
        icon: "wallet",
        title: "Treatflow Pay",
        description: "Anzahlung oder Vollzahlung direkt bei der Online-Buchung. Pro Leistung einstellbar, 2,69 % pro Transaktion.",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-200 hover:border-violet-400",
        highlights: ["Anzahlung oder Vollzahlung", "Karte, Apple Pay, Google Pay", "2,69 % pro Transaktion"],
        feature: "pay",
      },
      {
        href: { page: "online-booking" },
        icon: "link",
        title: "Online-Buchungen",
        description:
          "Persönlicher Buchungslink für dein Studio. Kunden buchen rund um die Uhr - Bestätigungen und Erinnerungen automatisch.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200 hover:border-rose-400",
        highlights: ["24/7 Buchungslink", "Automatische Bestätigungen", "Keine Doppelbuchungen"],
      },
      {
        // DE-only Landingpage (nicht der Seiten-Key "client-records" = /kundenverwaltung)
        href: "/kundenkartei-software",
        icon: "users",
        title: "Digitale Kundenkartei",
        description:
          "Digitale Kundenkartei mit Behandlungshistorie, Vorher-Nachher-Fotos, Allergien und Notizen. Alles an einem Ort.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200 hover:border-emerald-400",
        highlights: ["Unbegrenzte Kunden", "Fotos & Notizen", "DSGVO-konform"],
      },
      {
        href: { page: "forms" },
        icon: "clipboard-check",
        title: "Formulare & Anamnese",
        description:
          "Digitale Anamnesebögen und Einwilligungserklärungen. Kunden füllen sie vorab auf dem Smartphone aus - papierfrei und rechtssicher.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        highlights: ["Digitale Anamnese", "Vorab per Link senden", "Papierfrei"],
      },
      {
        href: { page: "treatment-documentation" },
        icon: "file-text",
        title: "Behandlungsdokumentation",
        description:
          "Dokumentiere jede Behandlung digital: Fotos, verwendete Produkte, Notizen und Ergebnisse. Perfekt für Nachbehandlungen.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        highlights: ["Fotos & Produkte", "Behandlungsverläufe", "Lückenlose Doku"],
      },
      {
        href: { page: "messaging" },
        icon: "bell",
        title: "Automatische Erinnerungen",
        description: "WhatsApp- und E-Mail-Erinnerungen vor jedem Termin. Reduziere No-Shows - ganz automatisch.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        highlights: ["WhatsApp & E-Mail", "Weniger No-Shows", "Konfigurierbare Zeiten"],
      },
      {
        href: { page: "customer-workflows" },
        icon: "workflow",
        title: "Kunden-Workflows",
        description:
          "Mehrstufige Automationen für Nachsorge, Reaktivierung und Follow-ups – mit Wartezeiten, Bedingungen und E-Mail oder WhatsApp.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Visueller Builder", "E-Mail & WhatsApp", "Stoppt bei neuer Buchung"],
      },
      {
        href: { page: "nisv-documentation" },
        icon: "shield",
        title: "NiSV-Dokumentation",
        description:
          "NiSV-konforme Beratungsprotokolle, Behandlungsdokumentation und Einwilligungserklärungen - alles digital und rechtssicher.",
        color: "text-teal-600",
        bg: "bg-teal-50",
        border: "border-teal-200 hover:border-teal-400",
        highlights: ["NiSV-konform", "Beratungsprotokolle", "Rechtssicher"],
        feature: "nisv",
      },
      {
        href: { page: "shop" },
        icon: "shopping-bag",
        title: "Produktverkauf & Lager",
        description:
          "Verkaufe Pflegeprodukte direkt an deine Kunden. Lagerbestand verwalten, Verkäufe dokumentieren und Zusatzumsatz steigern.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200 hover:border-amber-400",
        highlights: ["Produktverkauf", "Lagerverwaltung", "Umsatz steigern"],
      },
    ],
  },
  why: {
    title: "Warum Treatflow?",
    points: [
      "All-in-One: Alle Funktionen in einer Plattform",
      "DSGVO-konform mit EU-Servern",
      "Keine versteckten Kosten oder Provisionen",
      "14 Tage kostenlos testen, keine Kreditkarte",
      "Kostenloser Support und Onboarding",
      "Made in Austria",
    ],
  },
};
