import type { ClientRecordsContent } from "./types";

export const clientRecordsDe: ClientRecordsContent = {
  meta: {
    title: "Kundenverwaltung Kosmetikstudio: Daten & Historie",
    description:
      "Professionelle Kundenverwaltung für dein Kosmetikstudio: Behandlungsverlauf, Kundenhistorie, Notizen und Fotos zentral verwalten. DSGVO-konform.",
    keywords: [
      "Kundenverwaltung Kosmetikstudio",
      "Kundenverwaltung Kosmetik",
      "digitale Kundenverwaltung Kosmetik",
      "Kundenmanagement Kosmetikstudio",
      "Kundendaten verwalten Kosmetik",
      "Kundenhistorie Kosmetik",
      "Kundenprofil Kosmetikstudio",
      "CRM Kosmetikstudio",
      "Behandlungshistorie",
      "DSGVO Kundendaten",
      "Kundenkartei Kosmetik App",
      "Kundenkartei App Kosmetikstudio",
    ],
    openGraph: {
      title: "Kundenverwaltung Kosmetikstudio: Daten & Historie",
      description:
        "Professionelle Kundenverwaltung für dein Kosmetikstudio: Behandlungsverlauf, Kundenhistorie, Notizen und Fotos zentral verwalten.",
      image: { url: "/images/mockups/kundenverwaltung-overview.png", alt: "Treatflow Kundenverwaltung Interface" },
    },
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "kundenverwaltung",
    webPage: {
      name: "Kundenverwaltung Kosmetikstudio: Daten & Historie",
      description:
        "Professionelle Kundenverwaltung für dein Kosmetikstudio: Behandlungsverlauf, Kundenhistorie, Notizen und Fotos zentral verwalten. DSGVO-konform.",
    },
    software: {
      name: "Treatflow Kundenverwaltung",
      description: "Digitale Kundenkartei für Kosmetikstudios mit Behandlungshistorie, Notizen und Fotos.",
      price: "39",
      currency: "EUR",
    },
  },
  breadcrumb: "Kundenverwaltung",
  hero: {
    eyebrow: "Digitale Kundenkartei",
    eyebrowIcon: "users",
    title: { before: "Kundendaten an einem ", highlight: "Ort" },
    description: "Unbegrenzte Kundenkartei mit Historie, Import und Suche. DSGVO-konform auf EU-Servern.",
    chips: ["DSGVO-konform", "Daten-Import", "Unbegrenzte Kunden"],
    secondaryCta: { label: "Zur Kundenkartei-App", href: "/kundenkartei-software" },
    capsules: [
      {
        question: "Welche App eignet sich für die Kundenverwaltung im Kosmetikstudio?",
        answer:
          "Treatflow bietet eine spezialisierte Kundenverwaltung für Kosmetikstudios mit digitaler Kundenkartei, Behandlungshistorie, Fotos und DSGVO-konformem EU-Hosting. Alle Kundendaten sind am Desktop, Tablet und Smartphone abrufbar. Mehr zur Kundenkartei-App: treatflow.io/kundenkartei-software. 14 Tage kostenlos testen.",
      },
    ],
    image: {
      src: "/images/mockups/kundenverwaltung-overview.png",
      alt: "Treatflow Kundenkartei – Übersicht mit Suche und Detailansicht",
    },
  },
  video: {
    title: "Die Kundenverwaltung in einer Minute erklärt",
    description: "Die digitale Kundenakte mit Behandlungen, Terminen, Formularen und Notizen an einem Ort.",
    videoSrc: "/videos/funktionen/kundenverwaltung.mp4",
    posterSrc: "/images/video/funktionen/kundenverwaltung-poster.jpg",
    posterAlt: "Video: Die Kundenverwaltung in einer Minute erklärt",
    playLabel: "Video ansehen",
    playAriaPrefix: "Video abspielen",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
  },
  understand: {
    title: "Alle Kundendaten an einem Ort",
    description:
      "Für jede Kundin ein Profil mit Kontaktdaten, Behandlungshistorie und Fotos – jederzeit und von jedem Gerät abrufbar.",
    items: [
      {
        icon: "shield",
        title: "Sicher und DSGVO-konform",
        text: "Deine Kundendaten liegen verschlüsselt auf EU-Servern. Auskunft und Löschung sind jederzeit möglich.",
      },
      {
        icon: "upload",
        title: "Bestehende Daten übernehmen",
        text: "Du hast schon eine Kundenliste? Importiere sie einfach aus Excel oder CSV. Unser Team hilft dir beim Umzug.",
      },
      {
        icon: "database",
        title: "Unbegrenzt viele Kunden",
        text: "Egal ob 50 oder 5.000 Kunden – kein Limit, keine Zusatzkosten pro Kontakt.",
      },
    ],
  },
  howItWorks: {
    description: "In drei Schritten zur digitalen Kundenkartei.",
    steps: [
      { title: "Kunden anlegen oder importieren", text: "Lege neue Kunden manuell an oder importiere deine bestehende Liste aus Excel oder CSV. Duplikate werden automatisch erkannt." },
      { title: "Profil mit Infos füllen", text: "Kontaktdaten, Allergien, Notizen und Fotos im Profil speichern. Ausgefüllte Formulare landen automatisch dazu." },
      { title: "Beim nächsten Termin alles parat", text: "Öffne vor der Behandlung das Kundenprofil – du siehst sofort, was zuletzt gemacht wurde und worauf du achten musst." },
    ],
  },
  cards: {
    title: "Was du bekommst",
    description: "Digitale Kundenkartei ohne Limit – inkl. Import, Suche und DSGVO.",
    items: [
      { icon: "database", title: "Unbegrenzte Kunden", text: "So viele Profile wie dein Studio braucht – ohne Aufpreis pro Kontakt.", points: ["Keine Kundenzahl-Grenze", "Bleibt schnell", "Automatische Backups"] },
      { icon: "upload", title: "Daten-Import", text: "Bestehende Listen aus Excel oder CSV übernehmen. Hilfe beim Umzug inklusive.", points: ["Excel & CSV", "Feldzuordnung", "Duplikat-Erkennung"] },
      { icon: "shield", title: "DSGVO-konform", text: "Speicherung in der EU, Verschlüsselung, Auskunft und Löschung auf Anfrage.", points: ["EU-Server", "Verschlüsselt", "Löschrecht"] },
      { icon: "search", title: "Schnelle Suche", text: "Finde Profile nach Name, Telefon, E-Mail oder Behandlung – in Sekunden.", points: ["Volltextsuche", "Filter", "Sortierung"] },
      { icon: "camera", title: "Fotos & Historie", text: "Vorher-Nachher-Bilder und Behandlungen direkt am Profil, nicht in extra Ordnern.", points: ["Fotos im Profil", "Behandlungshistorie", "Notizen"] },
      { icon: "users", title: "Überall dabei", text: "Webbasiert auf Smartphone, Tablet und Desktop – ohne extra App-Installation.", points: ["Smartphone", "Tablet am Platz", "Desktop"] },
    ],
  },
  faq: {
    title: "Häufige Fragen zur Kundenverwaltung",
    items: [
      {
        question: "Welche App eignet sich für die Kundenverwaltung im Kosmetikstudio?",
        answer:
          "Treatflow ist eine spezialisierte Kundenverwaltung für Kosmetikstudios. Die App bietet digitale Kundenkartei, Behandlungshistorie, Fotos, Notizen und DSGVO-konforme Datenspeicherung in der EU. 14 Tage kostenlos testen.",
      },
      {
        question: "Was ist eine digitale Kundenkartei für Kosmetikstudios?",
        answer:
          "Eine digitale Kundenkartei ist eine Software, die alle Kundendaten, Behandlungshistorien, Vorher-Nachher-Fotos und Notizen an einem Ort speichert. Im Gegensatz zur Papierkartei ist sie DSGVO-konform, durchsuchbar und von jedem Gerät zugänglich.",
      },
      {
        question: "Ist eine digitale Kundenkartei DSGVO-konform?",
        answer:
          "Ja. Treatflow speichert alle Kundendaten verschlüsselt auf EU-Servern und erfüllt alle Anforderungen der DSGVO. Kunden können ihre Daten jederzeit einsehen und löschen lassen.",
      },
      {
        question: "Welche Daten sollte eine Kundenkartei im Kosmetikstudio enthalten?",
        answer:
          "Eine professionelle Kundenkartei sollte Kontaktdaten, Behandlungshistorie, Allergien und Unverträglichkeiten, Vorher-Nachher-Fotos, ausgefüllte Formulare (Anamnese, Einwilligung), Notizen und Terminhistorie enthalten.",
      },
      {
        question: "Kann ich bestehende Kundendaten importieren?",
        answer:
          "Ja. Treatflow unterstützt den Import von Kundendaten aus Excel- und CSV-Dateien. Unser Onboarding-Team hilft dir kostenlos beim Datenumzug von deinem bisherigen System.",
      },
      {
        question: "Kann Treatflow automatische Nachrichten an meine Kunden senden?",
        answer:
          "Ja. Treatflow bietet eine integrierte Nachrichtenautomatisierung. Du kannst automatische Terminerinnerungen, Geburtstagsnachrichten und Follow-up-Nachrichten nach Behandlungen einrichten, um die Kundenbindung zu stärken – ohne zusätzlichen Aufwand.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Terminkalender", description: "Profil direkt am Termin" },
      { href: { page: "forms" }, title: "Formulare", description: "Anamnese landet in der Kartei" },
      { href: { page: "treatment-documentation" }, title: "Dokumentation", description: "Verlauf im Kundenprofil" },
    ],
  },
  cta: {
    title: "Bereit für eine klare Kundenkartei?",
    description: "14 Tage kostenlos testen – ohne Kreditkarte. Import, Historie und DSGVO in einer App.",
    secondary: { label: "Zur Kundenkartei-App", href: "/kundenkartei-software" },
  },
};
