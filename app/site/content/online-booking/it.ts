import type { OnlineBookingContent } from "./types";

export const onlineBookingIt: OnlineBookingContent = {
  meta: {
    title: "Sistema di prenotazione online per centri estetici",
    description:
      "Prenotazioni online per il tuo centro estetico: le clienti prenotano 24 ore su 24 tramite il tuo link personale. Con Treatflow Pay incassi un acconto o l'intero importo già al momento della prenotazione. Nessuna commissione sulle prenotazioni.",
    keywords: [
      "sistema prenotazione online centro estetico",
      "software prenotazioni centro estetico",
      "prenotazione appuntamenti online spa",
      "link di prenotazione centro estetico",
      "prenotazioni online 24 ore su 24",
      "lista d'attesa centro estetico",
      "acconto prenotazione online",
    ],
  },
  dates: { modified: "2026-10-02", published: "2024-06-01" },
  schema: {
    id: "online-buchungen",
    webPage: {
      name: "Sistema di prenotazione online per centri estetici",
      description:
        "Prenotazioni online per il tuo centro estetico: le clienti prenotano 24 ore su 24 tramite il tuo link personale. Con Treatflow Pay incassi un acconto o l'intero importo già al momento della prenotazione.",
    },
  },
  breadcrumb: "Prenotazioni online",
  hero: {
    eyebrow: "Prenotazioni online",
    eyebrowIcon: "link",
    title: { before: "Prenotazioni online per il tuo ", highlight: "centro" },
    description:
      "Il tuo link di prenotazione personale: le clienti prenotano a qualsiasi ora. Gli appuntamenti arrivano automaticamente nella tua agenda.",
    chips: ["Prenotabile 24/7", "Nessuna commissione", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Scopri l'agenda", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Quale sistema di prenotazione online è adatto ai centri estetici?",
        answer:
          "Treatflow offre un sistema di prenotazione online pensato per i centri estetici, con link di prenotazione personale, prenotazioni 24 ore su 24, conferme automatiche via email e Treatflow Pay per incassare un acconto o l'intero importo alla prenotazione. Nessuna commissione sulle prenotazioni, a partire da 59 €/mese con il piano Booking, 14 giorni di prova gratuita.",
      },
    ],
    image: {
      src: "/images/mockups/online-buchung-hero.png",
      alt: "Sistema di prenotazione online Treatflow: link di prenotazione personale",
    },
  },
  understand: {
    title: "Le tue clienti prenotano da sole, tu ti dedichi ai trattamenti",
    description:
      "Con il tuo link di prenotazione personale le clienti scelgono l'appuntamento a qualsiasi ora. Basta rincorrersi al telefono o scambiarsi messaggi.",
    items: [
      {
        icon: "calendar",
        title: "Aperto 24 ore su 24",
        text: "Il tuo link di prenotazione è disponibile 24/7. Oltre il 60% delle prenotazioni arriva la sera o nel fine settimana.",
      },
      {
        icon: "bell",
        title: "Conferma e promemoria automatici",
        text: "Subito dopo la prenotazione la tua cliente riceve una conferma. Prima dell'appuntamento segue un promemoria via email.",
      },
      {
        icon: "list-ordered",
        title: "Lista d'attesa per le giornate piene",
        text: "Quando sei al completo, le clienti possono iscriversi alla lista d'attesa. Appena si libera un posto, vengono avvisate automaticamente.",
      },
    ],
  },
  howItWorks: {
    description: "Tre passaggi per avere il tuo link di prenotazione.",
    steps: [
      { title: "Inserisci i tuoi trattamenti", text: "Scegli quali trattamenti sono prenotabili, quanto durano e quanto costano. Le clienti vedono sempre e solo gli orari liberi." },
      { title: "Condividi il tuo link", text: "Condividi il tuo link di prenotazione personale su Instagram, sul tuo sito o nei messaggi. È incluso anche un QR code da stampare." },
      { title: "Arrivano le prenotazioni", text: "I nuovi appuntamenti compaiono automaticamente in agenda. Conferme e promemoria partono da soli. Con Treatflow Pay le clienti possono pagare subito un acconto o l'intero importo." },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Link di prenotazione, lingue, lista d'attesa, codici sconto e Treatflow Pay, senza commissioni sugli appuntamenti.",
    items: [
      { icon: "link", title: "Link di prenotazione personale", text: "Il tuo link da condividere sul sito e sui social, con il marchio del tuo centro.", points: ["Link personalizzato", "QR code", "Marchio del centro"] },
      { icon: "languages", title: "Sei lingue", text: "La pagina di prenotazione si adatta alla lingua della cliente, senza configurazioni aggiuntive.", points: ["DE, EN, TR, PL, IT, RU", "Lingua automatica", "Nessuna barriera"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Acconto o pagamento completo già al momento della prenotazione online.", points: ["Impostabile per servizio", "Acconto o pagamento completo", "2,69% per transazione"], feature: "pay" },
      { icon: "list-ordered", title: "Lista d'attesa", text: "Quando sei al completo, le clienti si iscrivono alla lista d'attesa. Se si libera un posto, le clienti interessate ricevono un'email.", points: ["Email automatica in caso di disdetta", "Due modalità di notifica", "Panoramica nella dashboard"] },
      { icon: "ticket", title: "Codici sconto", text: "Codici per nuove clienti e campagne, riscattati direttamente durante la prenotazione online.", points: ["Nuove clienti e promozioni", "Riscatto alla prenotazione", "Statistiche di utilizzo"] },
      { icon: "bell", title: "Promemoria", text: "Promemoria via email prima dell'appuntamento. Le clienti possono disdire per tempo e l'orario torna disponibile.", points: ["Promemoria via email", "Orari personalizzabili", "Meno no-show"] },
      { icon: "calendar", title: "Pianificazione flessibile", text: "Orari di lavoro, durata dei trattamenti, pause e ferie: vengono proposti solo gli orari realmente disponibili.", points: ["Orari di lavoro", "Pause e ferie", "Nessuna doppia prenotazione"] },
    ],
  },
  faq: {
    title: "Domande frequenti sulle prenotazioni online",
    items: [
      {
        question: "Quale sistema di prenotazione online è adatto ai centri estetici?",
        answer:
          "Treatflow offre un sistema di prenotazione online pensato per i centri estetici, con link di prenotazione personale, conferme automatiche via email, agende per le operatrici e collegamento con le schede clienti e la documentazione dei trattamenti. A partire da 59 € al mese.",
      },
      {
        question: "Come attivo le prenotazioni online per il mio centro?",
        answer:
          "In tre passaggi: 1) inserisci i tuoi trattamenti con durata e prezzo, 2) imposta orari di lavoro e disponibilità, 3) condividi il tuo link di prenotazione personale su Instagram, sul tuo sito o nei messaggi. La configurazione richiede meno di 10 minuti.",
      },
      {
        question: "Quanto costa un sistema di prenotazione online per centri estetici?",
        answer:
          "In Treatflow le prenotazioni online sono incluse nel piano Booking, a partire da 59 € al mese. Nessuna commissione sulle prenotazioni, nessun costo nascosto e 14 giorni di prova gratuita senza carta di credito.",
      },
      {
        question: "Le clienti possono prenotare a qualsiasi ora?",
        answer:
          "Sì. Il tuo link di prenotazione personale è disponibile 24/7. Le clienti vedono e prenotano gli orari liberi in qualsiasi momento, anche la sera e nel fine settimana. Oltre il 60% delle prenotazioni avviene fuori dall'orario di apertura.",
      },
      {
        question: "Come riduce i no-show un sistema di prenotazione?",
        answer:
          "Con promemoria automatici via email agli orari che scegli tu prima dell'appuntamento. Le clienti vengono avvisate e, se necessario, possono disdire, così l'orario si libera per qualcun'altra. In questo modo i no-show calano sensibilmente.",
      },
      {
        question: "Cosa succede quando tutti gli appuntamenti sono occupati?",
        answer:
          "Con la lista d'attesa le clienti possono segnalare il loro interesse per gli orari liberi. Se un appuntamento viene disdetto, le clienti interessate ricevono automaticamente un'email con gli orari tornati disponibili. Così nessuna richiesta va persa.",
      },
      {
        question: "Le clienti possono pagare direttamente durante la prenotazione online?",
        answer:
          "Sì. Con Treatflow Pay le clienti pagano un acconto o l'intero importo al momento della prenotazione. Lo imposti per ogni servizio. Il costo è del 2,69% per transazione.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Acconto o pagamento completo", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Agenda appuntamenti", description: "Le prenotazioni arrivano direttamente in agenda" },
      { href: { page: "messaging" }, title: "Promemoria", description: "Conferme e promemoria automatici" },
      { href: { page: "client-records" }, title: "Schede clienti", description: "Nuova prenotazione, scheda già pronta" },
    ],
  },
  cta: {
    title: "Vuoi ricevere prenotazioni in automatico?",
    description: "Provalo gratis per 14 giorni, senza carta di credito e senza commissioni sulle prenotazioni.",
    secondary: { label: "Scopri l'agenda", href: { page: "appointment-calendar" } },
  },
};
