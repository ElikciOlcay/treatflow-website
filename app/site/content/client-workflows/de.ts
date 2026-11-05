import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsDe: ClientWorkflowsContent = {
  meta: {
    title: "Kunden-Workflows fürs Kosmetikstudio",
    description:
      "Mehrstufige Automationen in Treatflow: Nachsorge, Reaktivierung und Follow-ups mit Wartezeiten, Bedingungen und Versand per E-Mail oder WhatsApp – ohne manuelles Nachfassen.",
    keywords: [
      "Kunden-Workflows Kosmetikstudio",
      "Automatisierung Beauty Studio",
      "Nachsorge Automatisierung",
      "Kunden reaktivieren Kosmetik",
      "Follow-up Workflow Studio",
      "Treatflow Workflows",
    ],
    openGraph: {
      title: "Kunden-Workflows für Kosmetikstudios",
      description:
        "Mehrstufige Automationen: Nachsorge, Reaktivierung und Follow-ups – mit Wartezeiten, Bedingungen und E-Mail oder WhatsApp.",
      image: { url: "/images/mockups/kunden-workflows.jpg", alt: "Treatflow Kunden-Workflows Builder" },
    },
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Kunden-Workflows fürs Kosmetikstudio",
      description:
        "Mehrstufige Automationen: Nachsorge, Reaktivierung und Follow-ups mit Wartezeiten, Bedingungen und Versand per E-Mail oder WhatsApp.",
    },
  },
  breadcrumb: "Kunden-Workflows",
  hero: {
    eyebrow: "Kunden-Workflows",
    eyebrowIcon: "workflow",
    title: { before: "Mehrstufige ", highlight: "Automationen" },
    description:
      "Nachsorge, Reaktivierung und Follow-ups bauen – mit Wartezeiten, Bedingungen und Versand per E-Mail oder WhatsApp.",
    chips: ["Visueller Builder", { text: "E-Mail & WhatsApp", feature: "whatsapp" }, "Stoppt bei neuer Buchung"],
    secondaryCta: { label: "Zu den Erinnerungen", href: { page: "messaging" } },
    capsules: [
      {
        question: "Wie automatisiere ich Nachsorge und Wiedervorlage im Kosmetikstudio?",
        answer:
          "Mit Kunden-Workflows in Treatflow baust du mehrstufige Abläufe: z. B. nach der Behandlung 2 Tage warten, nachfragen, prüfen ob neu gebucht wurde und nur dann eine Folgetermin-Einladung senden. So bleibst du präsent, ohne manuell nachzufassen.",
      },
    ],
    image: {
      src: "/images/mockups/kunden-workflows.jpg",
      alt: "Treatflow Workflow-Builder mit Auslöser, Wartezeit und Nachricht",
    },
  },
  video: {
    title: "Kunden-Workflows in einer Minute erklärt",
    description: "Automatische Abläufe nach der Behandlung: warten, nachfassen, bei neuer Buchung stoppen.",
    videoSrc: "/videos/funktionen/kunden-workflows.mp4",
    posterSrc: "/images/video/funktionen/kunden-workflows-poster.jpg",
    posterAlt: "Video: Kunden-Workflows in einer Minute erklärt",
    playLabel: "Video ansehen",
    playAriaPrefix: "Video abspielen",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
  },
  understand: {
    title: "Abläufe, die von allein weiterlaufen",
    description:
      "Statt einzelner Erinnerungen baust du Sequenzen – genau für Nachsorge, Reaktivierung und Follow-ups mit mehreren Schritten.",
    items: [
      {
        icon: "heart",
        title: "Nachsorge ohne Extra-Aufwand",
        text: "Frag automatisch nach, wie es der Haut geht – und biete bei Interesse den Folgetermin an.",
      },
      {
        icon: "bell",
        title: "Inaktive Kund:innen zurückholen",
        text: "Nach 60–90 Tagen ohne Besuch geht eine Einladung zurück ins Studio – persönlich und zur richtigen Zeit.",
      },
      {
        icon: "git-branch",
        title: "Intelligent verzweigen",
        text: "Prüfe, ob neu gebucht wurde. Wenn ja, stoppt der Workflow – kein doppeltes Anschreiben.",
      },
    ],
  },
  howItWorks: {
    description: "In drei Schritten zu deinem ersten Workflow.",
    steps: [
      { title: "Auslöser wählen", text: "Starte z. B. nach Terminende oder wenn jemand länger nicht da war." },
      { title: "Schritte verbinden", text: "Wartezeiten, Nachrichten und Bedingungen im visuellen Builder anordnen." },
      { title: "Aktivieren", text: "Treatflow führt den Ablauf aus – per E-Mail und optional WhatsApp." },
    ],
  },
  cards: {
    title: "Was du bekommst",
    description: "Alles für mehrstufige Kundenkommunikation – klar und steuerbar.",
    items: [
      { icon: "workflow", title: "Visueller Builder", text: "Auslöser, Wartezeiten, Nachricht und Bedingung per Drag & Drop.", points: ["Klarer Überblick", "Mehrere Stufen", "Schnell anpassbar"] },
      { icon: "message-circle", title: "E-Mail & WhatsApp", text: "Versand über die Kanäle, die deine Kund:innen lesen.", points: ["E-Mail", { text: "WhatsApp optional", feature: "whatsapp" }, "Dein Text"] },
      { icon: "clock", title: "Wartezeiten", text: "Tage oder Stunden zwischen den Schritten – genau wie im Studio-Ablauf.", points: ["Nachsorge-Timing", "Reaktivierung", "Kein manuelles Merken"] },
      { icon: "git-branch", title: "Bedingungen", text: "Prüfe z. B. neue Buchungen und stoppe den Ablauf rechtzeitig.", points: ["Keine Doppelmails", "Smarte Verzweigung", "Mehr Relevanz"] },
      { icon: "heart", title: "Nachsorge-Sequenzen", text: "Erste Nachfrage, dann optional Folgetermin – nur wenn sinnvoll.", points: ["Mehr Bindung", "Weniger No-Shows später", "Mehr Folgetermine"] },
      { icon: "zap", title: "Reaktivierung", text: "Kund:innen nach längerer Pause automatisch wieder einladen.", points: ["60–90 Tage", "Persönlich", "Ohne Listen-Chaos"] },
    ],
  },
  faq: {
    title: "Häufige Fragen zu Kunden-Workflows",
    items: [
      {
        question: "Was sind Kunden-Workflows in Treatflow?",
        answer:
          "Kunden-Workflows sind mehrstufige Automationen: Du baust Abläufe mit Auslöser, Wartezeiten, Nachrichten und Bedingungen. So laufen Nachsorge, Reaktivierung und Follow-ups automatisch – ohne dass du jede Nachricht manuell schreibst.",
      },
      {
        question: "Worin unterscheiden sich Workflows von einfachen Erinnerungen?",
        answer:
          "Einfache Nachrichten (z. B. Terminerinnerungen) sind ein Auslöser und eine Nachricht. Workflows eignen sich für Abläufe mit mehreren Schritten und Verzweigungen – etwa: nach der Behandlung nachfragen, warten, prüfen ob neu gebucht wurde und nur dann eine zweite Nachricht senden.",
      },
      {
        question: "Über welche Kanäle werden Workflow-Nachrichten versendet?",
        answer:
          "Workflow-Schritte können per E-Mail und optional per WhatsApp versendet werden. Terminerinnerungen bleiben unter den einfachen Nachrichten verfügbar.",
      },
      {
        question: "Kann ein Workflow stoppen, wenn der Kunde neu bucht?",
        answer:
          "Ja. Du kannst Bedingungen setzen, z. B. prüfen, ob seit dem letzten Termin neu gebucht wurde. Wenn ja, stoppt der Ablauf – so bleibst du präsent, ohne doppelt zu schreiben.",
      },
      {
        question: "Welche Workflows eignen sich für den Start?",
        answer:
          "Beliebt sind: Nachsorge 1–2 Tage nach der Behandlung, Reaktivierung nach 60–90 Tagen ohne Besuch und mehrstufige Nachsorge mit einer zweiten Nachricht nur, wenn noch kein Folgetermin gebucht wurde.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Erinnerungen", description: "WhatsApp & E-Mail vor dem Termin" },
      { href: { page: "appointment-calendar" }, title: "Terminkalender", description: "Termine und Automationen zusammen" },
      { href: { page: "client-records" }, title: "Kundenverwaltung", description: "Historie und Wiedervorlage" },
    ],
  },
  cta: {
    title: "Bereit für mehrstufige Kunden-Workflows?",
    description: "14 Tage kostenlos testen – Nachsorge und Reaktivierung ohne manuelles Nachfassen.",
    secondary: { label: "Zu den Erinnerungen", href: { page: "messaging" } },
  },
};
