import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsIt: ClientWorkflowsContent = {
  meta: {
    title: "Flussi automatici per le clienti del centro estetico",
    description:
      "Automazioni in più passaggi con Treatflow: post-trattamento, riattivazione e follow-up con tempi di attesa, condizioni e invio via email, senza doverti ricordare di ricontattare nessuno.",
    keywords: [
      "flussi clienti centro estetico",
      "automazione marketing centro estetico",
      "automazione post-trattamento",
      "riattivare clienti centro estetico",
      "follow-up automatico clienti",
      "Treatflow flussi",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Flussi automatici per le clienti del centro estetico",
      description:
        "Automazioni in più passaggi: post-trattamento, riattivazione e follow-up con tempi di attesa, condizioni e invio via email.",
    },
  },
  breadcrumb: "Flussi per le clienti",
  hero: {
    eyebrow: "Flussi per le clienti",
    eyebrowIcon: "workflow",
    title: { before: "Automazioni in ", highlight: "più passaggi" },
    description:
      "Crea sequenze di post-trattamento, riattivazione e follow-up, con tempi di attesa, condizioni ed email automatiche.",
    chips: ["Editor visivo", "Email automatiche", "Si ferma se la cliente prenota"],
    secondaryCta: { label: "Vai ai promemoria", href: { page: "messaging" } },
    capsules: [
      {
        question: "Come automatizzo il post-trattamento e i follow-up nel mio centro estetico?",
        answer:
          "Con i flussi per le clienti di Treatflow crei sequenze in più passaggi: per esempio attendi 2 giorni dopo il trattamento, chiedi come sta la cliente, verifichi se ha già prenotato di nuovo e solo in caso contrario invii un invito per l'appuntamento successivo. Così resti presente senza dover ricontattare nessuno a mano.",
      },
    ],
    image: {
      src: "/images/mockups/kunden-workflows.jpg",
      alt: "Editor dei flussi di Treatflow con attivatore, tempo di attesa e messaggio",
    },
  },
  understand: {
    title: "Sequenze che vanno avanti da sole",
    description:
      "Invece di singoli promemoria crei sequenze, pensate per post-trattamento, riattivazione e follow-up in più passaggi.",
    items: [
      {
        icon: "heart",
        title: "Post-trattamento senza lavoro extra",
        text: "Chiedi in automatico come sta la pelle e, se la cliente è interessata, proponi subito l'appuntamento successivo.",
      },
      {
        icon: "bell",
        title: "Riconquista le clienti inattive",
        text: "Dopo 60–90 giorni senza visite parte un invito a tornare nel tuo centro, personale e al momento giusto.",
      },
      {
        icon: "git-branch",
        title: "Ramificazioni intelligenti",
        text: "Verifica se la cliente ha prenotato di nuovo. Se sì, il flusso si ferma: nessun messaggio doppio.",
      },
    ],
  },
  howItWorks: {
    description: "Il tuo primo flusso in tre passaggi.",
    steps: [
      { title: "Scegli l'attivatore", text: "Parti per esempio alla fine di un appuntamento o quando una cliente non si vede da tempo." },
      { title: "Collega i passaggi", text: "Disponi tempi di attesa, messaggi e condizioni nell'editor visivo." },
      { title: "Attiva", text: "Treatflow esegue la sequenza e invia i messaggi via email." },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Tutto per una comunicazione con le clienti in più passaggi, chiara e sotto controllo.",
    items: [
      { icon: "workflow", title: "Editor visivo", text: "Attivatore, tempi di attesa, messaggio e condizione con il drag & drop.", points: ["Panoramica chiara", "Più passaggi", "Facile da modificare"] },
      { icon: "message-circle", title: "Messaggi via email", text: "Ogni passaggio arriva direttamente nella casella di posta della cliente.", points: ["Email", "Il tuo testo", "Invio automatico"] },
      { icon: "clock", title: "Tempi di attesa", text: "Giorni o ore tra un passaggio e l'altro, proprio come nella routine del tuo centro.", points: ["Post-trattamento puntuale", "Riattivazione", "Niente da ricordare"] },
      { icon: "git-branch", title: "Condizioni", text: "Controlla per esempio le nuove prenotazioni e ferma la sequenza in tempo.", points: ["Nessuna email doppia", "Ramificazioni intelligenti", "Messaggi più pertinenti"] },
      { icon: "heart", title: "Sequenze post-trattamento", text: "Prima un messaggio per sapere come sta, poi eventualmente l'appuntamento successivo, solo quando ha senso.", points: ["Clienti più fedeli", "Meno appuntamenti mancati", "Più appuntamenti successivi"] },
      { icon: "zap", title: "Riattivazione", text: "Invita di nuovo in automatico le clienti dopo una pausa più lunga.", points: ["60–90 giorni", "Personale", "Niente liste da gestire"] },
    ],
  },
  faq: {
    title: "Domande frequenti sui flussi per le clienti",
    items: [
      {
        question: "Cosa sono i flussi per le clienti in Treatflow?",
        answer:
          "I flussi per le clienti sono automazioni in più passaggi: crei sequenze con attivatore, tempi di attesa, messaggi e condizioni. Così post-trattamento, riattivazione e follow-up procedono in automatico, senza che tu debba scrivere ogni messaggio a mano.",
      },
      {
        question: "Che differenza c'è tra i flussi e i semplici promemoria?",
        answer:
          "I messaggi semplici (come i promemoria degli appuntamenti) sono un attivatore e un messaggio. I flussi servono per sequenze con più passaggi e ramificazioni: per esempio chiedere come sta la cliente dopo il trattamento, attendere, verificare se ha prenotato di nuovo e solo allora inviare un secondo messaggio.",
      },
      {
        question: "Con quale canale vengono inviati i messaggi dei flussi?",
        answer:
          "I passaggi dei flussi vengono inviati via email. I promemoria degli appuntamenti restano disponibili tra i messaggi semplici.",
      },
      {
        question: "Un flusso può fermarsi se la cliente prenota di nuovo?",
        answer:
          "Sì. Puoi impostare delle condizioni, per esempio verificare se dall'ultimo appuntamento c'è una nuova prenotazione. In quel caso la sequenza si ferma: resti presente senza scrivere due volte.",
      },
      {
        question: "Con quali flussi conviene iniziare?",
        answer:
          "I più usati sono: post-trattamento 1–2 giorni dopo il trattamento, riattivazione dopo 60–90 giorni senza visite e post-trattamento in più passaggi con un secondo messaggio solo se non è ancora stato prenotato un appuntamento successivo.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Promemoria", description: "Email prima dell'appuntamento" },
      { href: { page: "appointment-calendar" }, title: "Agenda appuntamenti", description: "Appuntamenti e automazioni insieme" },
      { href: { page: "client-records" }, title: "Schede clienti", description: "Storico e richiami" },
    ],
  },
  cta: {
    title: "Vuoi automatizzare i contatti con le tue clienti?",
    description: "Provalo gratis per 14 giorni: post-trattamento e riattivazione senza ricontattare nessuno a mano.",
    secondary: { label: "Vai ai promemoria", href: { page: "messaging" } },
  },
};
