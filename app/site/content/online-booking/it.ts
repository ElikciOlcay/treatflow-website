import type { OnlineBookingContent } from "./types";

export const onlineBookingIt: OnlineBookingContent = {
  meta: {
    title: "Prenotazione online per centri estetici, senza commissioni",
    description:
      "Prenotazioni online per il tuo centro estetico: i clienti prenotano 24 ore su 24 dal tuo link personale. Con Treatflow Pay incassi un acconto o l'intero importo già alla prenotazione. Zero commissioni sulle prenotazioni.",
    keywords: [
      "sistema prenotazione online centro estetico",
      "programma prenotazioni centro estetico",
      "prenotazione online estetista",
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
        "Prenotazioni online per il tuo centro estetico: i clienti prenotano 24 ore su 24 dal tuo link personale. Con Treatflow Pay incassi un acconto o l'intero importo già alla prenotazione.",
    },
  },
  breadcrumb: "Prenotazioni online",
  hero: {
    eyebrow: "Prenotazioni online",
    eyebrowIcon: "link",
    title: { before: "Prenotazioni online per il tuo ", highlight: "centro" },
    description:
      "Con il tuo link di prenotazione personale i clienti prenotano a qualsiasi ora, anche a centro chiuso. Gli appuntamenti arrivano automaticamente in agenda.",
    chips: ["Prenotabile 24/7", "Zero commissioni", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Scopri l'agenda", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Quale sistema di prenotazione online è adatto ai centri estetici?",
        answer:
          "Treatflow offre un sistema di prenotazione online pensato per i centri estetici: link di prenotazione personale, prenotazioni 24 ore su 24, conferme automatiche via email e Treatflow Pay per incassare un acconto o l'intero importo alla prenotazione. Zero commissioni sulle prenotazioni, 59 €/mese con il piano Booking, prova gratuita di 14 giorni.",
      },
    ],
    image: {
      src: "/images/mockups/it/online-buchung-hero.png",
      alt: "Sistema di prenotazione online Treatflow: link di prenotazione personale",
    },
  },
  understand: {
    title: "I clienti prenotano da soli, tu ti dedichi ai trattamenti",
    description:
      "Con il tuo link di prenotazione personale i clienti scelgono l'appuntamento a qualsiasi ora. Basta telefonate a vuoto e messaggi avanti e indietro.",
    items: [
      {
        icon: "calendar",
        title: "Aperto 24 ore su 24",
        text: "Il tuo link di prenotazione è sempre attivo. Oltre il 60% delle prenotazioni arriva la sera o nel fine settimana.",
      },
      {
        icon: "bell",
        title: "Conferma e promemoria automatici",
        text: "Subito dopo la prenotazione il cliente riceve una conferma, prima dell'appuntamento un promemoria via email.",
      },
      {
        icon: "list-ordered",
        title: "Lista d'attesa per le giornate piene",
        text: "Quando sei al completo, i clienti possono iscriversi alla lista d'attesa. Appena si libera un posto, vengono avvisati automaticamente.",
      },
    ],
  },
  howItWorks: {
    description: "Il tuo link di prenotazione in tre passaggi.",
    steps: [
      { title: "Inserisci i tuoi trattamenti", text: "Scegli quali trattamenti sono prenotabili online, quanto durano e quanto costano. I clienti vedono solo gli orari davvero liberi." },
      { title: "Condividi il tuo link", text: "Condividi il tuo link di prenotazione personale su Instagram, sul tuo sito o nei messaggi. È incluso anche un QR code da stampare." },
      { title: "Arrivano le prenotazioni", text: "I nuovi appuntamenti compaiono automaticamente in agenda. Conferme e promemoria partono da soli. Con Treatflow Pay i clienti possono pagare subito un acconto o l'intero importo." },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Link di prenotazione, lingue, lista d'attesa, codici sconto e Treatflow Pay, senza commissioni sugli appuntamenti.",
    items: [
      { icon: "link", title: "Link di prenotazione personale", text: "Il tuo link da condividere sul sito e sui social, con il brand del tuo centro.", points: ["Link personalizzato", "QR code", "Brand del centro"] },
      { icon: "languages", title: "Sette lingue", text: "La pagina di prenotazione si adatta alla lingua del cliente, senza configurazioni aggiuntive.", points: ["DE, EN, NL, TR, PL, IT, RU", "Lingua automatica", "Nessuna barriera"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Acconto o saldo completo già al momento della prenotazione online.", points: ["Impostabile per servizio", "Acconto o saldo completo", "2,69% per transazione"], feature: "pay" },
      { icon: "list-ordered", title: "Lista d'attesa", text: "Quando sei al completo, i clienti si iscrivono alla lista d'attesa. Se si libera un posto, chi è in lista riceve un'email.", points: ["Email automatica in caso di disdetta", "Due modalità di notifica", "Panoramica nella dashboard"] },
      { icon: "ticket", title: "Codici sconto", text: "Codici per nuovi clienti e promozioni, da inserire direttamente nella prenotazione online.", points: ["Nuovi clienti e promozioni", "Riscatto alla prenotazione", "Statistiche di utilizzo"] },
      { icon: "bell", title: "Promemoria", text: "Promemoria via email prima dell'appuntamento. Chi non può venire disdice per tempo e l'orario torna disponibile.", points: ["Promemoria via email", "Orari personalizzabili", "Meno no-show"] },
      { icon: "calendar", title: "Pianificazione flessibile", text: "Orari di lavoro, durata dei trattamenti, pause e ferie: vengono proposti solo gli orari realmente disponibili.", points: ["Orari di lavoro", "Pause e ferie", "Nessuna doppia prenotazione"] },
    ],
  },
  faq: {
    title: "Domande frequenti sulle prenotazioni online",
    items: [
      {
        question: "Quale sistema di prenotazione online è adatto ai centri estetici?",
        answer:
          "Treatflow offre un sistema di prenotazione online pensato per i centri estetici, con link di prenotazione personale, conferme automatiche via email, agenda per ogni operatore e collegamento con le schede clienti e la documentazione dei trattamenti. Da 59 € al mese.",
      },
      {
        question: "Come attivo le prenotazioni online per il mio centro?",
        answer:
          "In tre passaggi: 1) inserisci i trattamenti con durata e prezzo, 2) imposta orari di lavoro e disponibilità, 3) condividi il tuo link di prenotazione personale su Instagram, sul tuo sito o nei messaggi. Bastano meno di 10 minuti.",
      },
      {
        question: "Quanto costa un sistema di prenotazione online per centri estetici?",
        answer:
          "In Treatflow le prenotazioni online sono incluse nel piano Booking, a 59 € al mese. Zero commissioni sulle prenotazioni, nessun costo nascosto e 14 giorni di prova gratuita senza carta di credito.",
      },
      {
        question: "I clienti possono prenotare a qualsiasi ora?",
        answer:
          "Sì. Il tuo link di prenotazione personale è attivo 24/7. I clienti vedono e prenotano gli orari liberi in qualsiasi momento, anche la sera e nel fine settimana. Oltre il 60% delle prenotazioni arriva fuori dall'orario di apertura.",
      },
      {
        question: "Come riduce i no-show un sistema di prenotazione?",
        answer:
          "Con promemoria automatici via email, inviati quando decidi tu prima dell'appuntamento. Il cliente si ricorda dell'appuntamento e, se non può venire, disdice: l'orario si libera per qualcun altro. Così i no-show calano sensibilmente.",
      },
      {
        question: "Cosa succede quando l'agenda è piena?",
        answer:
          "Con la lista d'attesa i clienti possono segnalare il loro interesse per un orario. Se un appuntamento viene disdetto, chi è in lista riceve automaticamente un'email con gli orari tornati disponibili. Così nessuna richiesta va persa.",
      },
      {
        question: "I clienti possono pagare direttamente con la prenotazione online?",
        answer:
          "Sì. Con Treatflow Pay i clienti pagano un acconto o l'intero importo al momento della prenotazione. Lo imposti per ogni servizio. Il costo è del 2,69% per transazione.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Acconto o saldo completo online", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Agenda appuntamenti", description: "Le prenotazioni arrivano direttamente in agenda" },
      { href: { page: "messaging" }, title: "Promemoria", description: "Conferme e promemoria automatici" },
      { href: { page: "client-records" }, title: "Schede clienti", description: "Nuova prenotazione, scheda già pronta" },
    ],
  },
  cta: {
    title: "Vuoi ricevere prenotazioni anche mentre dormi?",
    description: "Provalo gratis per 14 giorni, senza carta di credito e senza commissioni sulle prenotazioni.",
    secondary: { label: "Scopri l'agenda", href: { page: "appointment-calendar" } },
  },
};
