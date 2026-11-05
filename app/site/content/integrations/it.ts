import type { IntegrationsContent } from "./types";

export const integrationsIt: IntegrationsContent = {
  meta: {
    title: "Integrazioni e app per il tuo centro estetico",
    description:
      "Collega Treatflow a Google Calendar, Zapier e ad assistenti IA come Claude o ChatGPT, e incassa online con Treatflow Pay: sincronizzazione dell'agenda, automazioni e pagamenti in un'unica piattaforma.",
    keywords: [
      "integrazioni Treatflow",
      "integrazioni software centro estetico",
      "sincronizzazione Google Calendar centro estetico",
      "Zapier centro estetico",
      "software centro estetico ChatGPT",
      "Claude MCP software gestionale",
      "pagamenti online centro estetico",
      "sincronizzare agenda appuntamenti",
    ],
  },
  schema: { id: "integrationen" },
  breadcrumb: "Integrazioni",
  hero: {
    eyebrow: "Integrazioni",
    eyebrowIcon: "plug",
    title: { before: "Collega le app, i tuoi ", highlight: "dati", after: " sempre allineati" },
    description:
      "Google Calendar, Zapier, assistenti IA e Treatflow Pay: colleghi una volta, tutto resta aggiornato ovunque.",
    chips: ["Google Calendar", "Zapier", "Assistenti IA (MCP)", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Scopri l'agenda", href: { page: "appointment-calendar" } },
    tiles: [
      { name: "Google", category: "Calendario", gradient: "from-emerald-500 to-teal-600", icon: "calendar" },
      { name: "Zapier", category: "Automazione", gradient: "from-orange-500 to-amber-600", icon: "zap" },
      { name: "Claude & ChatGPT", category: "Assistenti IA", gradient: "from-blue-500 to-indigo-600", icon: "bot" },
      { name: "Treatflow Pay", category: "Pagamenti online", gradient: "from-violet-500 to-purple-600", icon: "wallet", feature: "pay" },
    ],
  },
  understand: {
    title: "In breve: a cosa servono le integrazioni",
    description: "Meno lavoro doppio: i dati passano da uno strumento all'altro.",
    items: [
      {
        icon: "refresh",
        title: "Meno lavoro doppio",
        text: "Inserisci clienti e appuntamenti una sola volta: agenda e strumenti collegati restano aggiornati.",
      },
      {
        icon: "workflow",
        title: "Processi automatici",
        text: "Voci in agenda e flussi Zapier lavorano in background, senza che tu debba intervenire.",
      },
      {
        icon: "shield-check",
        title: "Conforme al GDPR",
        text: "Collegamenti sicuri e trattamento dei dati conforme alle norme UE. I dati sanitari non escono mai da Treatflow.",
      },
    ],
  },
  howItWorks: {
    description: "Collegato in tre passaggi, senza competenze tecniche.",
    steps: [
      { title: "Scegli l'app", text: "Seleziona l'integrazione che ti serve in Impostazioni centro > App." },
      { title: "Collega l'account", text: "Accedi una sola volta presso il fornitore, ad esempio Google, Zapier, Claude o ChatGPT." },
      { title: "Sincronizzazione automatica", text: "Da questo momento appuntamenti, clienti e flussi lavorano insieme." },
    ],
  },
  cards: {
    title: "Queste app sono integrate",
    description: "Dalla sincronizzazione dell'agenda alle automazioni, fino agli assistenti IA e ai pagamenti online.",
    items: [
      {
        icon: "calendar",
        title: "Google Calendar",
        text: "Sincronizzazione bidirezionale: Treatflow e Google restano allineati in tempo reale.",
        points: ["Sincronizzazione bidirezionale", "Nessuna doppia prenotazione", "Privato e lavoro separati"],
      },
      {
        icon: "wallet",
        title: "Treatflow Pay",
        text: "Acconti o pagamenti completi per le prenotazioni online, elaborati in modo sicuro tramite Stripe.",
        points: ["Acconti", "Pagamento anticipato completo", "2,69% trasparente"],
        feature: "pay",
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "Collega oltre 7.000 app: flussi automatici per nuovi appuntamenti e moduli.",
        points: ["Oltre 7.000 app", "Webhook", "Senza codice"],
      },
      {
        icon: "bot",
        title: "Assistenti IA (MCP)",
        text: "Collega Claude, ChatGPT e altri assistenti e fai domande su appuntamenti, clienti o incassi.",
        points: ["Di base solo lettura", "I dati sanitari restano in Treatflow", "Accesso revocabile in ogni momento"],
      },
    ],
  },
  faq: {
    title: "Domande frequenti sulle integrazioni",
    items: [
      {
        question: "Quali app posso collegare a Treatflow?",
        answer:
          "Treatflow si collega direttamente a Google Calendar (sincronizzazione degli appuntamenti), Treatflow Pay (pagamenti online) e ad assistenti IA come Claude o ChatGPT tramite il Model Context Protocol (MCP). Con Zapier raggiungi inoltre oltre 7.000 altre app, come Google Sheets, Mailchimp o il tuo CRM.",
      },
      {
        question: "Come sincronizzo gli appuntamenti con Google Calendar?",
        answer:
          "Colleghi il tuo account Google una sola volta in Impostazioni centro > App. Da quel momento gli appuntamenti si sincronizzano automaticamente in entrambe le direzioni: le prenotazioni in Treatflow compaiono nel tuo Google Calendar e viceversa, così eviti le doppie prenotazioni.",
      },
      {
        question: "Posso usare Treatflow con ChatGPT o Claude?",
        answer:
          "Sì. Aggiungi Treatflow come connettore nel tuo assistente IA e accedi con il tuo account Treatflow. Potrai poi fare domande su appuntamenti, orari liberi, clienti o incassi. L'accesso è di base in sola lettura; se lo consenti, l'assistente può anche creare e spostare appuntamenti, e ogni modifica viene registrata. Documentazione dei trattamenti, moduli e foto non vengono mai condivisi.",
      },
      {
        question: "A cosa mi serve l'integrazione con Zapier?",
        answer:
          "Con Zapier automatizzi i tuoi flussi di lavoro senza programmare. Quando arriva un nuovo appuntamento o viene compilato un modulo, Treatflow può ad esempio aggiungere una riga in Google Sheets, creare un contatto nel CRM o inviare un'email.",
      },
      {
        question: "Le clienti possono pagare online al momento della prenotazione?",
        answer:
          "Sì. Con Treatflow Pay le clienti versano un acconto o l'intero importo quando prenotano online, con pagamento elaborato in modo sicuro tramite Stripe. Decidi tu per ogni trattamento se il pagamento è richiesto.",
        feature: "pay",
      },
      {
        question: "Le integrazioni sono incluse in ogni piano?",
        answer:
          "Le integrazioni sono incluse nel piano Booking. Dopo la registrazione le trovi e le attivi nella dashboard in Impostazioni centro > App.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Agenda appuntamenti", description: "Tutti gli appuntamenti in un posto, sempre sincronizzati" },
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Acconto o pagamento completo", feature: "pay" },
      { href: { page: "online-booking" }, title: "Prenotazioni online", description: "Prenotazioni 24/7 con pagamento" },
      { href: { page: "messaging" }, title: "Promemoria", description: "Conferme e promemoria automatici" },
    ],
  },
  cta: {
    title: "Strumenti collegati per il tuo centro",
    description: "Provalo gratis per 14 giorni: collega Google Calendar, Zapier e il tuo assistente IA in pochi minuti.",
    secondary: { label: "Tutte le funzioni", href: { page: "features" } },
  },
};
