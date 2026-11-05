import type { IntegrationsContent } from "./types";

export const integrationsDe: IntegrationsContent = {
  meta: {
    title: "Integrationen & Apps für dein Kosmetikstudio",
    description:
      "Verbinde Treatflow mit Lexware Office, Google Kalender, SumUp, Zapier u. v. m. Buchhaltung, Kartenzahlung, Online-Bezahlung und Automatisierung – alles in einer Plattform.",
    keywords: [
      "Treatflow Integrationen",
      "Kosmetikstudio Software Schnittstellen",
      "Lexware Office Integration",
      "Google Kalender Synchronisation",
      "Zapier Kosmetikstudio",
      "SumUp Kartenterminal Kosmetikstudio",
      "Online Zahlung Kosmetikstudio",
      "Gutscheine online verkaufen",
      "Buchhaltung Kosmetikstudio",
      "Terminkalender Sync",
      "AbaNinja Schweiz",
    ],
    openGraph: {
      title: "Integrationen & Apps",
      description:
        "Verbinde Treatflow mit Lexware, SumUp, Google Kalender, Zapier u. v. m. – Buchhaltung, Kartenzahlung und Automatisierung in einer Plattform.",
    },
  },
  schema: { id: "integrationen" },
  breadcrumb: "Integrationen",
  hero: {
    eyebrow: "Integrationen",
    eyebrowIcon: "plug",
    title: { before: "Apps verbinden, ", highlight: "Daten", after: " synchron" },
    description: "Lexware, SumUp, Google Kalender, Zapier und mehr – einmal verbinden, überall aktuell.",
    chips: [
      { text: "Lexware", feature: "accounting" },
      { text: "SumUp Solo", feature: "sumup" },
      "Google Kalender",
      "Zapier",
    ],
    secondaryCta: { label: "Zur Kasse", href: { page: "point-of-sale" } },
    tiles: [
      { name: "Lexware", category: "Buchhaltung", gradient: "from-blue-500 to-indigo-600", icon: "receipt", feature: "accounting" },
      { name: "SumUp", category: "Kartenzahlung", gradient: "from-sky-500 to-cyan-600", icon: "credit-card", feature: "sumup" },
      { name: "Google", category: "Kalender", gradient: "from-emerald-500 to-teal-600", icon: "calendar" },
      { name: "Zapier", category: "Automatisierung", gradient: "from-orange-500 to-amber-600", icon: "zap" },
      { name: "Treatflow Pay", category: "Online-Zahlung", gradient: "from-violet-500 to-purple-600", icon: "wallet", feature: "pay" },
      { name: "AbaNinja", category: "Schweiz", gradient: "from-red-500 to-rose-600", icon: "building", feature: "accounting" },
    ],
  },
  understand: {
    title: "Sofort klar: wofür Integrationen da sind",
    description: "Weniger Doppelarbeit – Daten fließen zwischen deinen Tools.",
    items: [
      {
        icon: "refresh",
        title: "Weniger Doppelarbeit",
        text: "Kunden und Termine einmal pflegen – Lexware, Kalender und Co. bleiben aktuell.",
      },
      {
        icon: "workflow",
        title: "Automatische Abläufe",
        text: "Rechnungen, Kalendereinträge und Zapier-Workflows laufen im Hintergrund.",
      },
      {
        icon: "shield-check",
        title: "DSGVO-konform",
        text: "Sichere Schnittstellen und EU-konforme Datenverarbeitung.",
      },
    ],
  },
  howItWorks: {
    description: "In drei Schritten verbunden – ohne technisches Vorwissen.",
    steps: [
      { title: "App auswählen", text: "Unter Studio-Einstellungen > Apps die gewünschte Integration wählen." },
      { title: "Konto verbinden", text: "Einmalig beim Anbieter anmelden – z. B. Lexware, Google, SumUp oder Zapier." },
      { title: "Automatisch synchron", text: "Termine, Kunden und Workflows laufen ab sofort zusammen." },
    ],
  },
  cards: {
    title: "Diese Apps sind integriert",
    description: "Von Buchhaltung über Kartenzahlung bis Automatisierung.",
    items: [
      {
        icon: "receipt",
        title: "Lexware Office",
        text: "Kunden synchronisieren und Rechnungen aus dem Termin erstellen – ohne Doppelpflege.",
        points: ["Kunden sync", "Rechnungen aus dem Kalender", "Kein Doppelaufwand"],
        feature: "accounting",
      },
      {
        icon: "calendar",
        title: "Google Kalender",
        text: "Zwei-Wege-Sync: Treatflow und Google bleiben in Echtzeit abgestimmt.",
        points: ["Zwei-Wege-Sync", "Keine Doppelbuchungen", "Privat & Studio getrennt"],
      },
      {
        icon: "credit-card",
        title: "SumUp Kartenterminal",
        text: "Kartenzahlung direkt aus der Kasse – SumUp Solo per Cloud API, ohne Eintippen.",
        points: ["Direkt aus der Kasse", "Cloud API", "Kontaktlos"],
        feature: "sumup",
      },
      {
        icon: "wallet",
        title: "Treatflow Pay",
        text: "Anzahlungen oder Vollzahlungen bei Online-Buchungen – sicher über Stripe.",
        points: ["Anzahlungen", "Vollzahlung vorab", "2,69 % transparent"],
        feature: "pay",
      },
      {
        icon: "gift",
        title: "Gutscheine",
        text: "Gutscheine online über deine Buchungsseite verkaufen – eingelöst wird in der Treatflow Kasse.",
        points: ["Treatflow Pay oder Überweisung", "10 Design-Vorlagen", "Nur mit der Kasse"],
        feature: "vouchers",
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "Über 7.000 Apps verbinden – Workflows bei Terminen und Formularen.",
        points: ["7.000+ Apps", "Webhooks", "Ohne Code"],
      },
      {
        icon: "building",
        title: "Swiss21 AbaNinja",
        text: "Schweizer Buchhaltung: Kunden sync und QR-Rechnungen aus Treatflow.",
        points: ["Kunden sync", "QR-Rechnungen", "Für die Schweiz"],
        feature: "accounting",
      },
    ],
  },
  faq: {
    title: "Häufige Fragen zu Integrationen",
    items: [
      {
        question: "Welche Apps kann ich mit Treatflow verbinden?",
        answer:
          "Treatflow lässt sich direkt mit Lexware Office (Buchhaltung DE), Swiss21 AbaNinja (Buchhaltung CH), Google Kalender (Terminsynchronisation), SumUp (Kartenzahlung) und Treatflow Pay (Online-Bezahlung) verbinden. Über Zapier erreichst du zusätzlich mehr als 7.000 weitere Apps wie Google Sheets, Mailchimp oder dein CRM.",
      },
      {
        question: "Wie synchronisiere ich meine Termine mit dem Google Kalender?",
        answer:
          "Du verbindest deinen Google-Account einmalig in den Studio-Einstellungen unter „Apps\". Danach werden Termine automatisch in beide Richtungen abgeglichen: Buchungen in Treatflow erscheinen in deinem Google Kalender und umgekehrt – so vermeidest du Doppelbuchungen.",
      },
      {
        question: "Kann ich Rechnungen automatisch an Lexware Office übergeben?",
        answer:
          "Ja. Mit der Lexware-Integration kannst du Kunden automatisch synchronisieren und Rechnungen direkt aus dem Termin heraus in Lexware Office erstellen. Das spart manuelle Doppelerfassung und hält deine Buchhaltung aktuell.",
        feature: "accounting",
      },
      {
        question: "Kann ich Gutscheine online verkaufen?",
        answer:
          "Ja. Mit der App „Gutscheine“ unter Einstellungen → Apps erscheint auf deiner Buchungsseite der Link „Gutschein kaufen“. Kundinnen wählen Betrag und Variante (PDF per E-Mail, per Post oder Abholung im Studio) und zahlen per Treatflow Pay oder Überweisung. Die App ist nur zusammen mit der Treatflow Kasse verfügbar, weil die Gutscheine dort eingelöst werden.",
        feature: "vouchers",
      },
      {
        question: "Wofür brauche ich die Zapier-Integration?",
        answer:
          "Mit Zapier automatisierst du individuelle Workflows ohne Programmierung. Bei einem neuen Termin oder einem ausgefüllten Formular kann Treatflow z. B. automatisch eine Zeile in Google Sheets anlegen, einen Kontakt im CRM erstellen oder eine E-Mail auslösen.",
      },
      {
        question: "Kann ich Kartenzahlungen über Treatflow annehmen?",
        answer:
          "Ja. Mit der SumUp-Integration verbindest du dein SumUp Solo Terminal und nimmst Kartenzahlungen direkt aus der Treatflow Kasse an – per Cloud API, ohne manuelles Eintippen. Für Online-Buchungen bietet Treatflow Pay sichere Anzahlungen und Vollzahlungen über Stripe.",
        feature: "sumup",
      },
      {
        question: "Sind die Integrationen in jedem Tarif enthalten?",
        answer:
          "Die Integrationen sind im Booking-Paket enthalten. Du findest und aktivierst sie nach der Anmeldung im Dashboard unter Studio-Einstellungen > Apps.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "point-of-sale" }, title: "Kassensystem", description: "TSE- & RKSV-konform kassieren" },
      { href: { page: "appointment-calendar" }, title: "Terminkalender", description: "Termine zentral & sync" },
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Anzahlung oder Vollzahlung", feature: "pay" },
      { href: { page: "online-booking" }, title: "Online-Buchungen", description: "24/7 Buchung mit Pay" },
    ],
  },
  cta: {
    title: "Vernetzte Tools für dein Studio",
    description: "14 Tage kostenlos testen – Lexware, SumUp, Google Kalender und Zapier in Minuten verbinden.",
    secondary: { label: "Alle Funktionen", href: { page: "features" } },
  },
};
