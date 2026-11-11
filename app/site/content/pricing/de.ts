import type { PricingPageContent } from "./types";

/** Deutsche Preisseite (Referenz, = bisheriges Markup von app/(de)/preise). */
export const pricingDe: PricingPageContent = {
  meta: {
    title: "Preise: Kosmetikstudio Software ab 39€/Monat",
    description:
      "Transparente Preise für Treatflow: Basic ab 39€/Monat, Booking ab 59€/Monat, Kasse als Add-on ab 39€/Monat (TSE & RKSV). 14 Tage kostenlos testen, keine Kreditkarte, keine versteckten Kosten.",
    keywords: [
      "Kosmetikstudio Software Preise",
      "Treatflow Preise",
      "Kosmetikstudio Software Kosten",
      "Beauty Software Preis",
      "Studio Software günstig",
      "Kassensystem Preis Kosmetik",
      "TSE Kasse Kosten",
    ],
    openGraph: {
      title: "Preise: Kosmetikstudio Software ab 39€/Monat",
      description:
        "Transparente Preise für Treatflow: Basic ab 39€/Monat, Booking ab 59€/Monat. 14 Tage kostenlos testen, keine Kreditkarte, keine versteckten Kosten.",
    },
  },
  dates: { modified: "2026-09-07", published: "2024-06-01" },
  breadcrumb: "Preise",
  capsule: {
    question: "Was kostet Treatflow?",
    answer:
      "Basic ab 39 €/Monat (Kundenverwaltung, Formulare, Dokumentation), Booking ab 59 €/Monat (inkl. Terminkalender, Online-Buchung, Erinnerungen). Kasse optional als Add-on ab 39 €/Monat. Keine Provision pro Buchung, 14 Tage kostenlos testen.",
  },
  schema: {
    webPage: {
      name: "Preise: Kosmetikstudio Software ab 39€/Monat",
      description:
        "Transparente Preise für Treatflow: Basic ab 39€/Monat, Booking ab 59€/Monat, Kasse als Add-on ab 39€/Monat (TSE & RKSV).",
    },
    priceValidUntil: "2026-12-31",
    offers: [
      { name: "Basic", price: "39", currency: "EUR" },
      { name: "Booking", price: "59", currency: "EUR" },
      {
        name: "Kasse (Add-on zu Booking)",
        price: "39",
        currency: "EUR",
        description:
          "TSE-/RKSV-konformes Kassensystem als Add-on zum Booking-Plan, 39 €/Monat zzgl. einmalig 149 € Einrichtung.",
        feature: "pos",
      },
    ],
  },
  comparison: {
    title: "Was ist enthalten?",
    subtitle: "Vergleiche die beiden Pläne im Detail und finde den passenden für dein Studio.",
    vatNote: "Alle Preise zuzüglich MwSt.",
    featureLabel: "Feature",
    basicLabel: "Basic (39€)",
    bookingLabel: "Booking (59€)",
    rows: [
      { label: "Kundenverwaltung", basic: true, booking: true },
      { label: "Formulare mit digitaler Unterschrift", basic: true, booking: true },
      { label: "Behandlungsdokumentation inkl. Sprachnotiz", basic: true, booking: true },
      { label: "Vorher-Nachher-Fotos", basic: true, booking: true },
      { label: "Team-Notizen und Aufgaben", basic: true, booking: true },
      { label: "Shop und Produkte", basic: true, booking: true },
      { label: "Statistiken", basic: true, booking: true },
      { label: "Mitarbeiter und Rollen", basic: true, booking: true },
      { label: "NiSV-Dokumentation", basic: true, booking: true, feature: "nisv" },
      { label: "E-Mail-Support", basic: true, booking: true },
      { label: "Terminkalender (Mitarbeiter und Räume)", basic: false, booking: true },
      { label: "Online-Buchung ohne Provision", basic: false, booking: true },
      { label: "Warteliste", basic: false, booking: true },
      { label: "WhatsApp und E-Mail", basic: false, booking: true },
      { label: "Kunden-Workflows", basic: false, booking: true },
      { label: "Rabattcodes", basic: false, booking: true },
      { label: "Mehrsprachige Buchungsseite", basic: false, booking: true },
      { label: "Integrationen (Lexware, Google Kalender, Zapier, KI-Assistenten)", basic: false, booking: true },
      { label: "Priority Support", basic: false, booking: true },
    ],
    cta: "14 Tage kostenlos testen",
  },
  why: {
    title: "Warum Treatflow?",
    subtitle: "Transparente Festpreise statt versteckter Kosten und Provisionen.",
    stats: [
      { value: "0%", label: "Provision pro Buchung" },
      { value: "0€", label: "Setup-Gebühren" },
      { value: "14 Tage", label: "kostenlos testen" },
      { value: "Jederzeit", label: "kündbar" },
    ],
  },
  faq: {
    title: "Häufige Fragen zu Preisen",
    subtitle: "Alles, was du über Treatflow-Preise wissen musst.",
    items: [
      {
        question: "Was kostet Treatflow?",
        answer:
          "Treatflow gibt es in zwei Plänen: Basic ab 39€/Monat für Kundenverwaltung, Formulare und Dokumentation. Booking ab 59€/Monat mit zusätzlichem Terminkalender, Online-Buchungen und automatischen Erinnerungen. Beide Pläne können 14 Tage kostenlos getestet werden.",
      },
      {
        question: "Gibt es versteckte Kosten?",
        answer:
          "Nein. Treatflow arbeitet mit transparenten Festpreisen ohne Provisionen, Setup-Gebühren oder versteckte Zusatzkosten. Was du siehst, ist was du zahlst.",
      },
      {
        question: "Kann ich jederzeit kündigen?",
        answer:
          "Ja. Bei monatlicher Zahlung kannst du jederzeit zum Ende des Abrechnungszeitraums kündigen. Es gibt keine Mindestvertragslaufzeit.",
      },
      {
        question: "Gibt es kostenlose Kosmetikstudio Software?",
        answer:
          "Einige Anbieter wie Fresha bieten kostenlose Basisversionen, verdienen aber an Payment-Gebühren und Premium-Features. Treatflow bietet transparente Festpreise ohne versteckte Kosten - ab 39€/Monat mit vollem Funktionsumfang.",
      },
      {
        question: "Lohnt sich der Booking-Plan?",
        answer:
          "Wenn du Online-Buchungen, automatische Terminerinnerungen per WhatsApp und einen digitalen Terminkalender benötigst, ja. Mit dem Booking-Plan hast du deutlich weniger No-Shows und weniger Telefonaufwand.",
      },
      {
        question: "Was kostet das Kassensystem?",
        answer:
          "Die Kasse ist ein Add-on zum Booking-Plan und kostet 39€/Monat (zzgl. MwSt.), jährlich 35€/Monat. Einmalig kommen 149€ Einrichtungsgebühr für die TSE-/RKSV-Provisionierung hinzu. Es gibt keine Transaktionsgebühren und keine Provision pro Verkauf.",
        feature: "pos",
      },
      {
        question: "Ist die Kasse TSE- und RKSV-konform?",
        answer:
          "Ja. In Deutschland signiert Treatflow jeden Verkauf über eine zertifizierte TSE gemäß KassenSichV und erstellt DSFinV-K-Exporte. In Österreich erfüllt die Kasse die RKSV inklusive Start-, Monats-, Jahres- und Schlussbeleg sowie DEP7-Export. Belege tragen den maschinenlesbaren Signatur-QR-Code.",
        feature: "pos",
      },
    ],
  },
};
