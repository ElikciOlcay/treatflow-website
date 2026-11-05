import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationDe: TreatmentDocumentationContent = {
  meta: {
    title: "Behandlungsdokumentation Kosmetik digital",
    description:
      "Digitale Behandlungsdokumentation Kosmetik mit Vorher-Nachher-Fotos, Notizen und Historie. Strukturiert, nachvollziehbar und NiSV-konform.",
    keywords: [
      "Behandlungsdokumentation Kosmetik",
      "Behandlungsdokumentation Kosmetikstudio",
      "Vorher Nachher Fotos Software",
      "Dokumentation App Kosmetikstudio",
      "NiSV konform dokumentieren",
      "Behandlungsdokumentation Software Kosmetik",
      "NiSV Dokumentation Software",
      "Automatische Behandlungsnotizen",
      "Rechtssichere Dokumentation",
      "Behandlung per Sprache diktieren",
      "KI Diktat Kosmetik",
      "Foto-Markierungen Behandlung",
      "digitale Unterschrift Behandlung",
    ],
    openGraph: {
      title: "Behandlungsdokumentation Kosmetik: Fotos & Notizen",
      description: "Halte jede Behandlung strukturiert fest. Vorher-Nachher-Fotos, Notizen, NiSV-konform.",
      image: { url: "/images/mockups/ai-doc.png", alt: "Treatflow Behandlungsdokumentation" },
    },
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Behandlungsdokumentation Kosmetik digital",
      description: "Digitale Behandlungsdokumentation Kosmetik mit Vorher-Nachher-Fotos, Notizen und Historie.",
    },
  },
  breadcrumb: "Dokumentation",
  hero: {
    eyebrow: "Behandlungsdokumentation",
    eyebrowIcon: "file-text",
    title: { before: "Behandlung digital ", highlight: "dokumentieren" },
    description:
      "Fotos, Notizen und Parameter an einem Ort – mit KI-Unterstützung. Beim nächsten Termin weißt du sofort, was gemacht wurde.",
    chips: ["Vorher-Nachher-Fotos", "KI-Diktat", { text: "NiSV-konform", feature: "nisv" }],
    secondaryCta: { label: "NiSV-Dokumentation", href: { page: "nisv-documentation" } },
    capsules: [
      {
        question: "Welche Software eignet sich für Behandlungsdokumentation in der Kosmetik?",
        answer:
          "Treatflow dokumentiert Behandlungen digital mit Vorher-Nachher-Fotos, Parametern, Notizen und Unterschrift. Für NiSV-pflichtige Anwendungen ist eine konforme Dokumentation gesetzlich vorgeschrieben – Treatflow unterstützt genau diesen Workflow.",
      },
      {
        question: "Wie dokumentiere ich den Behandlungsverlauf in der Ästhetik?",
        answer:
          "Jede Sitzung erhält einen Eintrag mit Parametern, Produkten, Fotos und Notizen. Die Historie bleibt in der Patientenakte. Du kannst Notizen diktieren; Treatflow macht daraus Text und kann ihn optional glätten.",
      },
    ],
    image: {
      src: "/images/mockups/dokumentation-hero.png",
      alt: "Treatflow Behandlungsdokumentation mit Fotos und Notizen",
    },
  },
  video: {
    title: "Behandlungsdoku in einer Minute erklärt",
    description: "Einfach einsprechen – die KI macht daraus eine saubere, strukturierte Dokumentation.",
    videoSrc: "/videos/funktionen/behandlungsdokumentation.mp4",
    posterSrc: "/images/video/funktionen/behandlungsdokumentation-poster.jpg",
    posterAlt: "Video: Behandlungsdoku in einer Minute erklärt",
    playLabel: "Video ansehen",
    playAriaPrefix: "Video abspielen",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
  },
  understand: {
    title: "Jede Behandlung sauber festhalten",
    description:
      "Nach jeder Sitzung hast du einen digitalen Eintrag mit Fotos, Notizen und Parametern – alles im Kundenprofil gespeichert.",
    items: [
      {
        icon: "camera",
        title: "Vorher-Nachher-Fotos",
        text: "Halte den Fortschritt mit Fotos fest. So kannst du deiner Kundin den Behandlungsverlauf zeigen.",
      },
      {
        icon: "brain",
        title: "Per Sprache oder KI erfassen",
        text: "Diktiere deine Notizen. Treatflow macht daraus Text und kann ihn optional mit KI glätten. Weniger Tippen, mehr Zeit für die Behandlung.",
      },
      {
        icon: "shield",
        title: "Rechtlich auf der sicheren Seite",
        text: "Bei NiSV-Behandlungen (Laser, IPL etc.) brauchst du eine lückenlose Dokumentation – die ist damit automatisch abgedeckt.",
        feature: "nisv",
      },
    ],
  },
  howItWorks: {
    description: "In drei Schritten zur fertigen Dokumentation.",
    steps: [
      { title: "Dokumentation öffnen", text: "Öffne die Dokumentation direkt aus dem Termin oder Kundenprofil – Kundin und Behandlung sind schon vorausgefüllt." },
      { title: "Fotos und Notizen erfassen", text: "Lade Fotos hoch, trage Behandlungsparameter ein und diktiere oder tippe deine Notizen. Wenn nötig, lass die Kundin unterschreiben." },
      { title: "Gespeichert und abrufbar", text: "Alles landet automatisch im Kundenprofil. Beim nächsten Termin siehst du sofort, was zuletzt gemacht wurde." },
    ],
  },
  cards: {
    title: "Was du bekommst",
    description: "Alles, was du für eine saubere Behandlungsdokumentation brauchst – ohne Zettelwirtschaft.",
    items: [
      { icon: "camera", title: "Vorher-Nachher-Fotos", text: "Fotos direkt zur Behandlung speichern und chronologisch vergleichen.", points: ["Gleicher Kontext", "Am Kundenprofil", "DSGVO-konform"] },
      { icon: "mic", title: "Sprach-Diktat", text: "Notizen sprechen statt tippen – ideal während oder direkt nach der Behandlung.", points: ["Hands-free", "Schnell", "Klar formuliert"] },
      { icon: "brain", title: "KI-Assistent", text: "Optional den diktierten Text glätten und strukturieren – du prüfst den Eintrag vor dem Speichern.", points: ["Text glätten", "Struktur", "Weniger Tippaufwand"] },
      { icon: "file-text", title: "Parameter & Produkte", text: "Gerätewerte, Produkte und Einstellungen sauber festhalten.", points: ["Laser/IPL", "Produkte", "Nachsorge"] },
      { icon: "pen-tool", title: "Digitale Unterschrift", text: "Einwilligung oder Bestätigung digital am Tablet erfassen.", points: ["Am Gerät", "Im Profil", "Nachvollziehbar"] },
      { icon: "shield", title: "NiSV-tauglich", text: "Für apparative Behandlungen die Pflichtfelder abdecken und archivieren.", points: ["Beratung", "Einwilligung", "Archiv"], feature: "nisv" },
    ],
  },
  faq: {
    title: "Häufige Fragen zur Dokumentation",
    items: [
      {
        question: "Welche Software eignet sich für Behandlungsdokumentation in der Kosmetik?",
        answer:
          "Treatflow dokumentiert Behandlungen digital mit Vorher-Nachher-Fotos, Parametern, Notizen und Unterschrift. Für NiSV-pflichtige Anwendungen ist eine konforme Dokumentation gesetzlich vorgeschrieben – Treatflow unterstützt genau diesen Workflow.",
      },
      {
        question: "Wie dokumentiere ich den Behandlungsverlauf in der Ästhetik?",
        answer:
          "Jede Sitzung erhält einen Eintrag mit Parametern, Chargen, Fotos und Notizen. Die Historie in der Patientenakte zeigt den Verlauf über mehrere Termine. Notizen kannst du sprechen; Treatflow macht daraus Text und kann ihn optional mit KI glätten.",
      },
      {
        question: "Ist Behandlungsdokumentation im Kosmetikstudio Pflicht?",
        answer:
          "Für NiSV-pflichtige Behandlungen (Laser, IPL, Ultraschall, Radiofrequenz) ist eine Behandlungsdokumentation gesetzlich vorgeschrieben. Für alle anderen Behandlungen ist sie empfehlenswert – für Rechtssicherheit, Qualität und Kundenzufriedenheit.",
        feature: "nisv",
      },
      {
        question: "Was gehört in eine professionelle Behandlungsdokumentation?",
        answer:
          "Behandlungsart und -datum, Produkte und Parameter, Vorher-Nachher-Fotos, Hautbefund, Verlaufsnotizen, Nachsorge-Empfehlungen und optional die Unterschrift der Kundin.",
      },
      {
        question: "Wie dokumentiere ich Vorher-Nachher-Fotos korrekt?",
        answer:
          "Unter gleichen Bedingungen (Licht, Winkel, Abstand). In Treatflow speicherst du Fotos direkt in der Dokumentation und ordnest sie dem Kundenprofil zu.",
      },
      {
        question: "Was muss bei NiSV-Behandlungen dokumentiert werden?",
        answer:
          "Beratungsprotokoll, Einwilligung, Geräteeinstellungen (z. B. Energie, Frequenz, Impulsdauer), Behandlungsgebiet, Hautreaktion und Nachsorgehinweise.",
        feature: "nisv",
      },
      {
        question: "Kann ich Behandlungsnotizen diktieren statt tippen?",
        answer:
          "Ja. In der Dokumentation sprichst du die Notizen. Treatflow wandelt Sprache in Text um und kann den Text optional mit KI glätten. Die Akte wird nicht vollautomatisch geschrieben.",
      },
      {
        question: "Kann ich Behandlungszonen auf Fotos oder Skizzen markieren?",
        answer:
          "Vorher-Nachher-Fotos speicherst du direkt zur Behandlung. Zonen markierst du auf den Fotos; in Formularen gibt es Skizzenfelder mit Gesicht- oder Körpervorlage. Es gibt kein separates Bodychart-Modul.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "nisv-documentation" }, title: "NiSV-Dokumentation", description: "Beratung, Einwilligung & Archiv", feature: "nisv" },
      { href: { page: "forms" }, title: "Formulare", description: "Anamnese & Einwilligungen digital" },
      { href: { page: "client-records" }, title: "Kundenverwaltung", description: "Historie im Kundenprofil" },
    ],
  },
  cta: {
    title: "Bereit für klare Dokumentation?",
    description: "14 Tage kostenlos testen – ohne Kreditkarte. Dokumentation, Fotos und NiSV-Workflow in einer App.",
    secondary: { label: "NiSV-Dokumentation", href: { page: "nisv-documentation" } },
  },
};
