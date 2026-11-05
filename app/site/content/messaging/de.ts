import type { MessagingContent } from "./types";

export const messagingDe: MessagingContent = {
  meta: {
    title: "WhatsApp & E-Mail Erinnerungen fürs Kosmetikstudio",
    description:
      "Automatische Nachrichten per WhatsApp und E-Mail für Kosmetikstudios: Terminbestätigungen, Erinnerungen, Stornierungen und Follow-ups.",
    keywords: [
      "Nachrichtenautomatisierung Kosmetik",
      "WhatsApp Terminerinnerung Kosmetikstudio",
      "No-Show reduzieren Kosmetikstudio",
      "Automatische Terminerinnerungen",
      "WhatsApp Terminbestätigung",
      "Follow-up E-Mails",
      "Geburtstagswünsche automatisch",
      "Kundenbindung Beauty Studio",
    ],
    openGraph: {
      title: "WhatsApp & E-Mail Erinnerungen für Kosmetikstudios",
      description:
        "Automatische Nachrichten per WhatsApp und E-Mail: Terminbestätigungen, Erinnerungen, Stornierungen und Follow-ups.",
      image: { url: "/images/mockups/nachrichtenautomatisierung.png", alt: "Treatflow Nachrichtenautomatisierung" },
    },
  },
  dates: { modified: "2026-09-07", published: "2024-06-01" },
  schema: {
    id: "nachrichtenautomatisierung",
    webPage: {
      name: "WhatsApp & E-Mail Erinnerungen fürs Kosmetikstudio",
      description:
        "Automatische Nachrichten per WhatsApp und E-Mail für Kosmetikstudios: Terminbestätigungen, Erinnerungen, Stornierungen und Follow-ups.",
    },
  },
  breadcrumb: "Nachrichten",
  hero: {
    eyebrow: "Nachrichtenautomatisierung",
    eyebrowIcon: "message-circle",
    title: { before: "Automatische ", highlight: "Erinnerungen" },
    description: "Terminbestätigungen, Reminder und Follow-ups per WhatsApp und E-Mail – weniger No-Shows, mehr Bindung.",
    chips: [{ text: "WhatsApp & E-Mail", feature: "whatsapp" }, "Weniger No-Shows", "Geburtstagsgrüße"],
    secondaryCta: { label: "Zum Terminkalender", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Wie kann ich No-Shows im Kosmetikstudio reduzieren?",
        answer:
          "Automatische Terminerinnerungen per WhatsApp und E-Mail sind der effektivste Weg, No-Shows zu reduzieren. Treatflow versendet Erinnerungen zu konfigurierbaren Zeitpunkten (z. B. 24 Stunden und 2 Stunden vor dem Termin). Mit aktivierten Erinnerungen fallen deutlich weniger Termine aus.",
      },
    ],
    image: {
      src: "/images/lifestyle/sms-erinnerung-studio.png",
      alt: "WhatsApp-Erinnerung im Studio – Kundin erhält Terminerinnerung auf dem Smartphone",
    },
  },
  video: {
    title: "Automatische Nachrichten in einer Minute erklärt",
    description: "Bestätigungen und Erinnerungen per E-Mail oder WhatsApp – mit fertigen Vorlagen aus der Bibliothek.",
    videoSrc: "/videos/funktionen/nachrichten.mp4",
    posterSrc: "/images/video/funktionen/nachrichten-poster.jpg",
    posterAlt: "Video: Automatische Nachrichten in einer Minute erklärt",
    playLabel: "Video ansehen",
    playAriaPrefix: "Video abspielen",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
  },
  understand: {
    title: "Nachrichten, die automatisch rausgehen",
    description:
      "Terminbestätigung, Erinnerung und Nachsorge – deine Kunden bekommen die richtige Nachricht zur richtigen Zeit, ohne dass du etwas tun musst.",
    items: [
      {
        icon: "bell",
        title: "Weniger vergessene Termine",
        text: "Deine Kunden bekommen 1–7 Tage vor dem Termin eine Erinnerung per WhatsApp oder E-Mail. So fallen deutlich weniger Termine aus.",
      },
      {
        icon: "message-circle",
        title: "Nachsorge und Follow-up",
        text: "Nach der Behandlung bekommt dein Kunde automatisch Tipps, eine Feedback-Anfrage oder ein Folgetermin-Angebot.",
      },
      {
        icon: "heart",
        title: "Persönliche Grüße",
        text: "Geburtstagswünsche und personalisierte Nachrichten gehen automatisch raus – das stärkt die Bindung ohne Extra-Aufwand.",
      },
    ],
  },
  howItWorks: {
    description: "In drei Schritten zu automatischen Nachrichten.",
    steps: [
      { title: "Vorlage wählen", text: "Wähle eine fertige Vorlage für Bestätigung, Erinnerung oder Follow-up. Platzhalter wie Name und Termindatum werden automatisch gefüllt." },
      { title: "Zeitpunkt festlegen", text: "Bestimme, wann die Nachricht rausgehen soll – z. B. 3 Tage und 1 Tag vor dem Termin oder direkt nach der Behandlung." },
      { title: "Läuft von allein", text: "Treatflow verschickt die Nachrichten per WhatsApp oder E-Mail zur richtigen Zeit. Du kümmerst dich um deine Kunden." },
    ],
  },
  cards: {
    title: "Was du bekommst",
    description: "Alles für automatische Kundenkommunikation – klar und steuerbar.",
    items: [
      { icon: "clock", title: "Terminerinnerungen", text: "Flexibler Zeitpunkt, personalisierte Texte, WhatsApp und E-Mail.", points: ["1–7 Tage vorher", { text: "Beide Kanäle", feature: "whatsapp" }, "Weniger Ausfälle"] },
      { icon: "mail", title: "Buchungsbestätigung", text: "Sofort nach der Buchung – mit Termin, Behandlung und Studio-Infos.", points: ["Automatisch", "Klarer Inhalt", "Weniger Rückfragen"] },
      { icon: "message-circle", title: "Follow-up & Nachsorge", text: "Nach der Behandlung Tipps, Feedback oder Folgetermin anbieten.", points: [{ text: "WhatsApp oder E-Mail", feature: "whatsapp" }, "Vorlagen", "Mehr Bindung"] },
      { icon: "heart", title: "Geburtstagswünsche", text: "Persönliche Grüße und optionale Angebote am Geburtstag.", points: ["Automatisch", "Rabatt möglich", "Stärkere Bindung"] },
      { icon: "zap", title: "Platzhalter", text: "Name, Termin, Behandlung – Texte füllen sich von selbst.", points: ["Personalisierung", "Behandlungsspezifisch", "Schnelle Vorlagen"] },
      { icon: "bell", title: "Storno-Infos", text: "Kunden und Studio bleiben bei Absagen auf dem Laufenden.", points: ["Sofort", "Transparent", "Weniger Chaos"] },
    ],
  },
  faq: {
    title: "Häufige Fragen zur Nachrichtenautomatisierung",
    items: [
      {
        question: "Wie kann ich No-Shows im Kosmetikstudio reduzieren?",
        answer:
          "Automatische Terminerinnerungen per WhatsApp und E-Mail sind der effektivste Weg, No-Shows zu reduzieren. Treatflow versendet Erinnerungen zu konfigurierbaren Zeitpunkten (z.B. 3 Tage und 1 Tag vor dem Termin). So sinkt die Zahl vergessener Termine deutlich.",
      },
      {
        question: "Was kosten WhatsApp-Erinnerungen für Termine?",
        answer:
          "WhatsApp-Erinnerungen bei Treatflow kosten ab 0,09 EUR pro Nachricht. Die WhatsApp-Automatisierung ist im Booking-Plan (59 EUR/Monat) enthalten. E-Mail-Erinnerungen sind in allen Plänen kostenlos und unbegrenzt.",
        feature: "whatsapp",
      },
      {
        question: "Welche Nachrichten sollte ich automatisieren?",
        answer:
          "Die wichtigsten automatisierten Nachrichten sind: Buchungsbestätigungen, Terminerinnerungen (1-7 Tage vorher), Stornierungsbenachrichtigungen, Follow-up-Nachrichten nach Behandlungen und Geburtstagswünsche. Damit sparst du Zeit und stärkst die Kundenbindung.",
      },
      {
        question: "Funktionieren WhatsApp-Erinnerungen besser als E-Mails?",
        answer:
          "WhatsApp-Nachrichten werden in der Regel schnell gelesen, E-Mails oft erst später. Für Terminerinnerungen empfehlen wir WhatsApp, für ausführlichere Nachrichten wie Follow-ups oder Nachsorgehinweise eignen sich E-Mails. Treatflow unterstützt beide Kanäle.",
        feature: "whatsapp",
      },
      {
        question: "Kann ich Nachsorge-Nachrichten automatisch versenden?",
        answer:
          "Ja. Mit Treatflow kannst du automatische Follow-up-Nachrichten nach Behandlungen einrichten. Diese können Nachsorgetipps, Feedback-Anfragen oder Angebote für Folgetermine enthalten - per WhatsApp oder E-Mail.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "customer-workflows" }, title: "Kunden-Workflows", description: "Mehrstufige Nachsorge & Reaktivierung" },
      { href: { page: "online-booking" }, title: "Online-Buchungen", description: "Termine kommen mit Bestätigung an" },
      { href: { page: "appointment-calendar" }, title: "Terminkalender", description: "Termine & Erinnerungen zusammen" },
    ],
  },
  cta: {
    title: "Bereit für automatische Kundenkommunikation?",
    description: "14 Tage kostenlos testen – Erinnerungen, Follow-ups und Geburtstage ohne Extra-Arbeit.",
    secondary: { label: "Zum Terminkalender", href: { page: "appointment-calendar" } },
  },
};
