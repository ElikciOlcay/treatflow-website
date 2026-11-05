import type { FormsContent } from "./types";

export const formsDe: FormsContent = {
  meta: {
    title: "Anamneseformular Kosmetik: Fragen & Pflichten",
    description:
      "Checkliste & Beispiele (Microneedling, Laser, PMU). Formulare mit KI-Generator – NiSV-konform und rechtssicher. Formulare digital im Studio umsetzen.",
    keywords: [
      "Anamnese Formular Kosmetikstudio",
      "Anamnesebogen Kosmetik",
      "Formular Generator Anamnese",
      "Einverständniserklärung Kosmetik Behandlung",
      "Formulare Kosmetik",
      "Anamnese Software Kosmetik",
      "digitaler Anamnesebogen",
      "KI Formular Generator",
      "Anamnese Vorlagen",
      "NiSV konform Formulare",
      "Einverständniserklärung Beauty",
    ],
    openGraph: {
      title: "Anamneseformular Kosmetik: Fragen & Pflichtangaben",
      description: "Checkliste & Beispiele. Formulare mit KI-Generator für Kosmetikstudios – NiSV-konform und rechtssicher.",
      image: { url: "/images/mockups/formulare-marketplace.png", alt: "Treatflow Formulare Marketplace" },
    },
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "formulare",
    webPage: {
      name: "Anamneseformular Kosmetik: Fragen & Pflichten",
      description:
        "Checkliste & Beispiele (Microneedling, Laser, PMU). Formulare mit KI-Generator – NiSV-konform und rechtssicher.",
    },
  },
  breadcrumb: "Formulare",
  hero: {
    eyebrow: "Formulare & KI-Generator",
    eyebrowIcon: "file-text",
    title: { before: "Formulare für jede ", highlight: "Behandlung" },
    description: "Marketplace, KI-Generator und Drag & Drop. Vorlagen nutzen oder eigene Formulare in Minuten erstellen.",
    chips: ["KI-Generator", "Marketplace", "Drag & Drop"],
    secondaryCta: { label: "Beispiele testen", href: { page: "try-forms" } },
    capsules: [
      {
        question: "Welche Formulare brauche ich im Kosmetikstudio?",
        answer:
          "Mindestens Anamnesebögen, Einwilligungserklärungen und bei apparativer Kosmetik NiSV-Aufklärungsbögen. Treatflow liefert fertige Vorlagen plus KI-Generator; Kundinnen füllen digital vorab aus – die Daten landen DSGVO-konform in der Kundenkartei.",
      },
    ],
    image: {
      src: "/images/mockups/formulare-marketplace.png",
      alt: "Treatflow Formulare Marketplace mit Vorlagen und KI-Generator",
    },
  },
  video: {
    title: "Digitale Formulare in einer Minute erklärt",
    description: "Anamnese und Einwilligung digital ausfüllen, mit dem Finger unterschreiben, automatisch bei der Kundin.",
    videoSrc: "/videos/funktionen/formulare.mp4",
    posterSrc: "/images/video/funktionen/formulare-poster.jpg",
    posterAlt: "Video: Digitale Formulare in einer Minute erklärt",
    playLabel: "Video ansehen",
    playAriaPrefix: "Video abspielen",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
  },
  understand: {
    title: "Anamnese und Einwilligung – digital statt auf Papier",
    description:
      "Deine Kunden füllen Formulare vor dem Termin auf dem eigenen Handy aus. Die Daten landen automatisch im Kundenprofil.",
    items: [
      {
        icon: "file-text",
        title: "Fertige Vorlagen nutzen",
        text: "Im Marketplace findest du Vorlagen für Anamnese, Aufklärung und Einwilligung – auch für NiSV-Behandlungen.",
      },
      {
        icon: "sparkles",
        title: "Eigene Formulare mit KI erstellen",
        text: "Beschreibe deine Behandlung in eigenen Worten und die KI baut dir das passende Formular. Danach kannst du alles anpassen.",
      },
      {
        icon: "send",
        title: "Vor dem Termin ausfüllen lassen",
        text: "Schicke den Formular-Link per WhatsApp oder E-Mail. Dein Kunde fuellt zu Hause aus – du sparst 10–15 Minuten pro Termin.",
      },
    ],
  },
  tryBanner: {
    title: "Beispiel-Formulare ohne Anmeldung testen",
    text: "Die folgenden Vorlagen zeigen den digitalen Check-in. Formulare für dein Studio erstellst du mit dem KI-Generator, oder wir richten sie gemeinsam mit dir ein.",
    button: "Beispiele öffnen",
    href: { page: "try-forms" },
  },
  howItWorks: {
    description: "In drei Schritten vom leeren Blatt zum fertigen Formular.",
    steps: [
      { title: "Vorlage oder KI", text: "Marketplace-Vorlage wählen oder der KI die Behandlung beschreiben – Felder entstehen automatisch." },
      { title: "Per Drag & Drop anpassen", text: "Felder verschieben, ergänzen oder streichen. Live-Vorschau zeigt, was die Kundin sieht." },
      { title: "Teilen und archivieren", text: "Per Link oder QR-Code senden. Unterschrift und Zeitstempel landen DSGVO-konform in der Kartei." },
    ],
  },
  cards: {
    title: "Was du bekommst",
    description: "Drei Wege zu Anamnese und Einwilligung – plus Versand und digitale Unterschrift.",
    items: [
      { icon: "file-text", title: "Formular-Marketplace", text: "Fertige Vorlagen für Beauty-Behandlungen – rechtssicher und sofort nutzbar.", points: ["Anamnese & Aufklärung", "Einwilligungen", { text: "NiSV-Vorlagen", feature: "nisv" }] },
      { icon: "sparkles", title: "KI-Generator", text: "Behandlung in eigenen Worten beschreiben – die KI baut das Formular mit den nötigen Feldern.", points: ["Felder automatisch", "In Sekunden", "Danach editierbar"] },
      { icon: "layout", title: "Drag & Drop Editor", text: "Eigene Formulare bauen oder Vorlagen anpassen – mit allen Feldtypen und Live-Vorschau.", points: ["Alle Feldtypen", "Live-Vorschau", "Volle Kontrolle"] },
      { icon: "send", title: "Vorab per Link", text: "Formular vor dem Termin per WhatsApp oder E-Mail. Spart 10–15 Minuten am Empfang.", points: [{ text: "WhatsApp & E-Mail", feature: "whatsapp" }, "Eigenes Gerät", "Im Kundenprofil"] },
      { icon: "pen-tool", title: "Digitale Unterschrift", text: "Einwilligung am Tablet unterschreiben. Zeitstempel und Archiv in der EU.", points: ["Am Gerät", "Zeitstempel", "Nachvollziehbar"] },
      { icon: "shield", title: "NiSV-tauglich", text: "Beratung, Risikoaufklärung und Einwilligung für Laser, IPL und weitere apparative Leistungen.", points: ["Beratungsprotokoll", "Einwilligung", "DSGVO-Archiv"], feature: "nisv" },
    ],
  },
  faq: {
    title: "Häufige Fragen zu Formularen",
    items: [
      {
        question: "Welche Formulare brauche ich im Kosmetikstudio?",
        answer:
          "Im Kosmetikstudio benötigst du mindestens Anamnesebögen, Einwilligungserklärungen und bei apparativer Kosmetik NiSV-Aufklärungsbögen. Je nach Behandlung kommen Allergie-Fragebögen, Nachsorgehinweise und Zufriedenheits-Umfragen hinzu.",
      },
      {
        question: "Was muss in einem Anamnesebogen für Kosmetik stehen?",
        answer:
          "Ein Anamnesebogen für Kosmetikbehandlungen sollte persönliche Daten, aktuelle Medikamenteneinnahme, Allergien und Unverträglichkeiten, Hauterkrankungen, Schwangerschaft und Vorbehandlungen abfragen. Bei NiSV-pflichtigen Behandlungen gelten zusätzliche Anforderungen.",
      },
      {
        question: "Kann ich Anamneseboegen digital an Kunden senden?",
        answer:
          "Ja. Mit Treatflow kannst du Formulare per WhatsApp oder E-Mail vorab an deine Kunden schicken. Sie füllen sie auf ihrem eigenen Handy aus – vor dem Termin. Das spart dir 10–15 Minuten pro Termin im Studio.",
      },
      {
        question: "Sind digitale Einwilligungserklärungen rechtssicher?",
        answer:
          "Ja. Digitale Einwilligungserklärungen mit elektronischer Unterschrift sind rechtlich anerkannt. Treatflow speichert alle Formulare mit Zeitstempel und Unterschrift DSGVO-konform in der EU.",
      },
      {
        question: "Welche Formulare sind für NiSV-Behandlungen Pflicht?",
        answer:
          "Für NiSV-pflichtige Behandlungen (Laser, IPL, Ultraschall, Radiofrequenz) sind Beratungsprotokoll, Einwilligungserklärung mit Risikoaufklärung und die Behandlungsdokumentation mit Parametern gesetzlich vorgeschrieben.",
        feature: "nisv",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "try-forms" }, title: "Formulare testen", description: "Beispiel-Formulare ohne Anmeldung ausfüllen" },
      { href: { page: "treatment-documentation" }, title: "Dokumentation", description: "Formulare plus Behandlungsverlauf" },
      { href: { page: "client-records" }, title: "Kundenverwaltung", description: "Ausgefüllte Bögen im Profil" },
      { href: { page: "nisv-documentation" }, title: "NiSV-Dokumentation", description: "Beratung, Einwilligung & Archiv", feature: "nisv" },
    ],
  },
  cta: {
    title: "Bereit für digitale Formulare?",
    description: "14 Tage kostenlos testen – Marketplace, KI-Generator und Drag & Drop ohne Kreditkarte.",
    secondary: { label: "Beispiele testen", href: { page: "try-forms" } },
  },
};
