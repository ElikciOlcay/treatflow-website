import type { OnlineBookingContent } from "./types";

export const onlineBookingDe: OnlineBookingContent = {
  meta: {
    title: "Online-Terminbuchung & Buchungssystem Kosmetikstudio",
    description:
      "Online-Terminbuchung für dein Kosmetikstudio: Kunden buchen 24/7 über deinen persönlichen Link. Mit Treatflow Pay Anzahlung oder Vollzahlung direkt bei der Buchung.",
    keywords: [
      "Online Terminbuchung Kosmetikstudio",
      "Online Buchungssystem Kosmetikstudio",
      "Buchungssystem Kosmetik",
      "Online Buchungssystem Kosmetik",
      "Terminbuchungssoftware Kosmetik",
      "Buchungssoftware Kosmetikstudio",
      "Buchungslink Beauty",
      "24/7 Terminbuchung",
      "Online-Terminbuchung Kosmetik",
      "Kosmetikstudio Buchungssystem",
      "mehrsprachige Buchungsseite",
      "Buchungsseite mehrere Sprachen",
      "Rabattcodes Online-Buchung",
      "Rabattcode Kosmetikstudio",
      "Warteliste Kosmetikstudio",
      "Warteliste Online-Buchung",
      "Treatflow Pay",
      "Anzahlung Online-Buchung",
    ],
    openGraph: {
      title: "Online-Buchungen für Kosmetikstudios",
      description:
        "Kein Telefonstress mehr: deine Kunden buchen rund um die Uhr, mit automatischen Bestätigungen und ohne Doppelbuchungen.",
      image: { url: "/images/og-online-buchungen.jpg", alt: "Treatflow Online-Buchungssystem" },
    },
  },
  dates: { modified: "2026-10-02", published: "2024-06-01" },
  schema: {
    id: "online-buchungen",
    webPage: {
      name: "Online-Terminbuchung & Buchungssystem Kosmetikstudio",
      description:
        "Online-Terminbuchung für dein Kosmetikstudio: Kunden buchen 24/7 über deinen persönlichen Link. Mit Treatflow Pay Anzahlung oder Vollzahlung direkt bei der Buchung.",
    },
  },
  breadcrumb: "Online-Buchungen",
  hero: {
    eyebrow: "Online-Buchungen",
    eyebrowIcon: "link",
    title: { before: "Online-Buchung für dein ", highlight: "Studio" },
    description:
      "Persönlicher Buchungslink – Kundinnen buchen rund um die Uhr. Termine landen automatisch im Kalender.",
    chips: ["24/7 buchbar", "Keine Provision", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Zum Terminkalender", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Welches Online-Buchungssystem eignet sich für Kosmetikstudios?",
        answer:
          "Treatflow bietet ein spezialisiertes Online-Buchungssystem für Kosmetikstudios mit persönlichem Buchungslink, 24/7-Terminbuchung, automatischen Bestätigungen per WhatsApp und E-Mail sowie Treatflow Pay für Anzahlung oder Vollzahlung bei der Buchung. Keine Provision pro Buchung, ab 59 EUR/Monat im Booking-Plan, 14 Tage kostenlos testen.",
      },
    ],
    image: {
      src: "/images/mockups/online-buchung-hero.png",
      alt: "Treatflow Online-Buchungssystem – persönlicher Buchungslink",
    },
  },
  video: {
    title: "Online-Buchung in einer Minute erklärt",
    description:
      "So buchen deine Kundinnen rund um die Uhr selbst – und der Termin steht sofort in deinem Kalender.",
    videoSrc: "/videos/funktionen/online-buchungen.mp4",
    posterSrc: "/images/video/funktionen/online-buchungen-poster.jpg",
    posterAlt: "Video: Online-Buchung in einer Minute erklärt",
    playLabel: "Video ansehen",
    playAriaPrefix: "Video abspielen",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
  },
  understand: {
    title: "Deine Kunden buchen selbst – du behandelst",
    description:
      "Mit deinem persönlichen Buchungslink können Kunden rund um die Uhr Termine auswählen. Du sparst dir Telefonate und Hin-und-Her-Schreiben.",
    items: [
      {
        icon: "calendar",
        title: "Rund um die Uhr geöffnet",
        text: "Dein Buchungslink ist 24/7 erreichbar. Über 60 % der Buchungen kommen abends oder am Wochenende rein.",
      },
      {
        icon: "bell",
        title: "Bestätigung und Erinnerung automatisch",
        text: "Nach der Buchung bekommt dein Kunde sofort eine Bestätigung. Vor dem Termin folgt eine Erinnerung per WhatsApp oder E-Mail.",
      },
      {
        icon: "list-ordered",
        title: "Warteliste bei vollen Tagen",
        text: "Wenn alles ausgebucht ist, kann sich dein Kunde vormerken. Wird ein Termin frei, bekommt er automatisch Bescheid.",
      },
    ],
  },
  howItWorks: {
    description: "In drei Schritten zum eigenen Buchungslink.",
    steps: [
      { title: "Behandlungen anlegen", text: "Lege fest, welche Behandlungen buchbar sind, wie lange sie dauern und was sie kosten. Das System zeigt deinen Kunden nur freie Zeiten." },
      { title: "Link teilen", text: "Teile deinen persönlichen Buchungslink auf Instagram, deiner Website oder per WhatsApp. Einen QR-Code zum Ausdrucken gibt es auch." },
      { title: "Buchungen kommen rein", text: "Neue Termine erscheinen automatisch in deinem Kalender. Bestätigungen und Erinnerungen gehen von allein raus. Mit Treatflow Pay kann die Kundin Anzahlung oder den vollen Preis direkt mitbezahlen." },
    ],
  },
  cards: {
    title: "Was du bekommst",
    description: "Buchungslink, Sprachen, Warteliste, Rabatte und Treatflow Pay – ohne Provision pro Termin.",
    items: [
      { icon: "link", title: "Persönlicher Buchungslink", text: "Dein Link zum Teilen auf Website und Social Media – mit Studio-Branding.", points: ["Individueller Link", "QR-Code", "Studio-Branding"] },
      { icon: "languages", title: "Sieben Sprachen", text: "Die Buchungsseite passt sich der Sprache der Kundin an – ohne extra Setup.", points: ["DE, EN, NL, TR, PL, IT, RU", "Automatische Sprache", "Ohne Barriere"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Anzahlung oder Vollzahlung direkt bei der Online-Buchung.", points: ["Pro Leistung einstellbar", "Anzahlung oder Vollzahlung", "2,69 % pro Transaktion"], feature: "pay" },
      { icon: "list-ordered", title: "Warteliste", text: "Bei Ausbuchung vormerken. Wird ein Termin frei, geht eine E-Mail an passende Interessenten.", points: ["Auto-Mail bei Storno", "Zwei Benachrichtigungsmodi", "Übersicht im Dashboard"] },
      { icon: "ticket", title: "Rabattcodes", text: "Codes für Neukunden und Kampagnen – direkt bei der Online-Buchung einlösen.", points: ["Neukunden & Aktionen", "Einlösung beim Buchen", "Nutzungsstatistik"] },
      { icon: "bell", title: "Erinnerungen", text: "WhatsApp und E-Mail vor dem Termin. Kundinnen können rechtzeitig stornieren, der Slot wird frei.", points: [{ text: "WhatsApp & E-Mail", feature: "whatsapp" }, "Flexible Zeitpunkte", "Weniger No-Shows"] },
      { icon: "calendar", title: "Flexible Termine", text: "Arbeitszeiten, Behandlungsdauern, Pausen und Urlaub – nur echte Verfügbarkeit wird angeboten.", points: ["Arbeitszeiten", "Pausen & Urlaub", "Keine Doppelbuchung"] },
    ],
  },
  faq: {
    title: "Häufige Fragen zu Online-Buchungen",
    items: [
      {
        question: "Welches Online-Buchungssystem eignet sich für Kosmetikstudios?",
        answer:
          "Treatflow bietet ein spezialisiertes Online-Buchungssystem für Kosmetikstudios mit persönlichem Buchungslink, automatischen Bestätigungen per WhatsApp und E-Mail, Mitarbeiterkalendern und Integration mit Kundenkartei und Dokumentation. Ab 59 EUR pro Monat.",
      },
      {
        question: "Wie kann ich Online-Buchungen für mein Studio einrichten?",
        answer:
          "In drei Schritten: 1) Lege deine Behandlungen mit Dauer und Preis an, 2) Hinterlege deine Arbeitszeiten und Verfügbarkeit, 3) Teile deinen persönlichen Buchungslink auf Instagram, deiner Website oder per WhatsApp. Die Einrichtung dauert weniger als 10 Minuten.",
      },
      {
        question: "Was kostet ein Online-Buchungssystem für Kosmetikstudios?",
        answer:
          "Treatflow bietet Online-Buchungen im Booking-Plan ab 59 EUR pro Monat an. Es gibt keine Provision pro Buchung, keine versteckten Kosten und 14 Tage kostenlose Testphase ohne Kreditkarte.",
      },
      {
        question: "Können Kunden rund um die Uhr Termine buchen?",
        answer:
          "Ja. Dein persönlicher Buchungslink ist 24/7 erreichbar. Deine Kunden können jederzeit verfügbare Termine sehen und buchen – auch abends oder am Wochenende. Über 60 % der Buchungen finden außerhalb der Geschäftszeiten statt.",
      },
      {
        question: "Wie reduziert ein Buchungssystem No-Shows?",
        answer:
          "Durch automatische Terminerinnerungen per WhatsApp und E-Mail zu konfigurierbaren Zeitpunkten vor dem Termin. Kunden werden erinnert und können bei Bedarf stornieren, sodass der Termin für andere frei wird. So sinkt die Zahl der No-Shows deutlich.",
      },
      {
        question: "Was passiert, wenn alle Termine ausgebucht sind?",
        answer:
          "Mit der Warteliste können sich deine Kunden auf freie Termine vormerken lassen. Wird ein bestehender Termin storniert, bekommen passende Interessenten automatisch eine E-Mail mit den frei gewordenen Zeiten. So gehen dir keine Anfragen verloren.",
      },
      {
        question: "Können Kundinnen bei der Online-Buchung direkt bezahlen?",
        answer:
          "Ja. Mit Treatflow Pay bezahlt die Kundin bei der Buchung eine Anzahlung oder den vollen Betrag. Du stellst das pro Leistung ein. Die Gebühr beträgt 2,69 % pro Transaktion.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Anzahlung oder Vollzahlung", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Terminkalender", description: "Buchungen landen direkt im Plan" },
      { href: { page: "messaging" }, title: "Nachrichten", description: "Bestätigung und Reminder automatisch" },
      { href: { page: "client-records" }, title: "Kundenverwaltung", description: "Neue Buchung, bekanntes Profil" },
    ],
  },
  cta: {
    title: "Bereit für automatische Buchungen?",
    description: "14 Tage kostenlos testen – ohne Kreditkarte und ohne Provision pro Buchung.",
    secondary: { label: "Zum Terminkalender", href: { page: "appointment-calendar" } },
  },
};
