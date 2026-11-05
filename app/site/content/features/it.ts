import type { FeaturesOverviewContent } from "./types";

export const featuresIt: FeaturesOverviewContent = {
  meta: {
    title: "Funzioni del gestionale per centri estetici e cliniche",
    description:
      "Agenda appuntamenti, prenotazioni online senza commissioni, schede clienti, consensi digitali, documentazione dei trattamenti con dettatura vocale, promemoria e integrazioni – in un unico gestionale.",
    keywords: [
      "funzioni gestionale centro estetico",
      "software centro estetico funzionalità",
      "agenda appuntamenti centro estetico",
      "scheda cliente digitale estetista",
    ],
  },
  breadcrumb: "Funzioni",
  hero: {
    eyebrow: "Panoramica delle funzioni",
    eyebrowIcon: "sparkles",
    title: { before: "Tutte le ", highlight: "funzioni", after: " a colpo d'occhio" },
    description: "Agenda, prenotazioni, schede clienti, moduli e documentazione – un'unica piattaforma per il tuo centro.",
    chips: ["Tutto in uno", "Senza commissioni", "Made in Austria"],
    secondaryCta: { label: "Vedi i prezzi", href: { page: "pricing" } },
    tiles: [
      { label: "Agenda", icon: "calendar", gradient: "from-indigo-500 to-purple-600" },
      { label: "Prenotazioni", icon: "link", gradient: "from-rose-500 to-orange-600" },
      { label: "Clienti", icon: "users", gradient: "from-blue-500 to-indigo-600" },
      { label: "Moduli", icon: "clipboard-check", gradient: "from-orange-500 to-amber-600" },
      { label: "Documentazione", icon: "file-text", gradient: "from-violet-500 to-purple-600" },
      { label: "Automazioni", icon: "workflow", gradient: "from-green-500 to-emerald-600" },
    ],
  },
  grid: {
    title: "{count} funzioni principali per il tuo centro",
    subtitle: "Ogni funzione è pensata per le esigenze di centri estetici e studi di medicina estetica.",
    more: "Scopri di più",
    items: [
      {
        href: { page: "appointment-calendar" },
        icon: "calendar",
        title: "Agenda appuntamenti",
        description:
          "Pianifica operatrici e cabine in colonne separate. Vedi subito la disponibilità, eviti le doppie prenotazioni e coordini le modifiche più rapidamente.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Colonne per operatrici e cabine", "Occupazione sotto controllo", "Drag & drop"],
      },
      {
        href: { page: "treatflow-pay" },
        icon: "wallet",
        title: "Treatflow Pay",
        description: "Acconto o pagamento completo direttamente alla prenotazione online. Impostabile per ogni servizio, 2,69% per transazione.",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-200 hover:border-violet-400",
        highlights: ["Acconto o pagamento completo", "Carta, Apple Pay, Google Pay", "2,69% per transazione"],
        feature: "pay",
      },
      {
        href: { page: "online-booking" },
        icon: "link",
        title: "Prenotazioni online",
        description:
          "Un link di prenotazione personale per il tuo centro. Le clienti prenotano a qualsiasi ora – conferme e promemoria partono in automatico.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200 hover:border-rose-400",
        highlights: ["Link di prenotazione 24/7", "Conferme automatiche", "Nessuna doppia prenotazione"],
      },
      {
        href: { page: "client-records" },
        icon: "users",
        title: "Schede clienti digitali",
        description:
          "Scheda cliente digitale con storico dei trattamenti, foto prima/dopo, allergie e note. Tutto in un unico posto.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200 hover:border-emerald-400",
        highlights: ["Clienti illimitate", "Foto e note", "Conforme al GDPR"],
      },
      {
        href: { page: "forms" },
        icon: "clipboard-check",
        title: "Moduli e anamnesi",
        description:
          "Schede anamnestiche e moduli di consenso digitali. Le clienti li compilano in anticipo sullo smartphone – senza carta e a norma.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        highlights: ["Anamnesi digitale", "Invio anticipato tramite link", "Senza carta"],
      },
      {
        href: { page: "treatment-documentation" },
        icon: "file-text",
        title: "Documentazione dei trattamenti",
        description:
          "Documenta ogni trattamento in digitale: foto, prodotti utilizzati, note e risultati. Ideale per i trattamenti successivi.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        highlights: ["Foto e prodotti", "Storico dei trattamenti", "Documentazione completa"],
      },
      {
        href: { page: "messaging" },
        icon: "bell",
        title: "Promemoria automatici",
        description: "Promemoria via email prima di ogni appuntamento. Meno no-show – in modo completamente automatico.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        highlights: ["Promemoria via email", "Meno no-show", "Orari configurabili"],
      },
      {
        href: { page: "customer-workflows" },
        icon: "workflow",
        title: "Flussi per le clienti",
        description:
          "Automazioni in più passaggi per post-trattamento, riattivazione e follow-up – con tempi di attesa, condizioni ed email.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Editor visuale", "Email automatiche", "Si ferma con una nuova prenotazione"],
      },
      {
        href: { page: "shop" },
        icon: "shopping-bag",
        title: "Vendita prodotti e magazzino",
        description:
          "Vendi prodotti per la cura direttamente alle tue clienti. Gestisci il magazzino, registra le vendite e aumenta i ricavi extra.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200 hover:border-amber-400",
        highlights: ["Vendita prodotti", "Gestione magazzino", "Più fatturato"],
      },
    ],
  },
  why: {
    title: "Perché Treatflow?",
    points: [
      "Tutto in uno: tutte le funzioni in un'unica piattaforma",
      "Conforme al GDPR con server nell'UE",
      "Nessun costo nascosto né commissioni",
      "14 giorni di prova gratuita, senza carta di credito",
      "Assistenza e onboarding gratuiti",
      "Made in Austria",
    ],
  },
};
