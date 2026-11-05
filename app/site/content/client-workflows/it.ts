import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsIt: ClientWorkflowsContent = {
  meta: {
    title: "Follow-up automatici per i clienti del centro estetico",
    description:
      "Automazioni in più passaggi con Treatflow: post-trattamento, richiamo dei clienti inattivi e follow-up con tempi di attesa, condizioni e invio via email. Nessun cliente da ricontattare a mano.",
    keywords: [
      "flussi clienti centro estetico",
      "automazione marketing centro estetico",
      "automazione post-trattamento",
      "recuperare clienti inattivi centro estetico",
      "follow-up automatico clienti",
      "Treatflow flussi",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Follow-up automatici per i clienti del centro estetico",
      description:
        "Automazioni in più passaggi: post-trattamento, richiamo dei clienti inattivi e follow-up con tempi di attesa, condizioni e invio via email.",
    },
  },
  breadcrumb: "Flussi clienti",
  hero: {
    eyebrow: "Flussi clienti",
    eyebrowIcon: "workflow",
    title: { before: "Automazioni in ", highlight: "più passaggi" },
    description:
      "Crea sequenze di post-trattamento, richiamo e follow-up, con tempi di attesa, condizioni ed email automatiche.",
    chips: ["Editor visivo", "Email automatiche", "Si ferma se il cliente riprenota"],
    secondaryCta: { label: "Vai ai promemoria", href: { page: "messaging" } },
    capsules: [
      {
        question: "Come automatizzo il post-trattamento e i follow-up nel mio centro estetico?",
        answer:
          "Con i flussi clienti di Treatflow crei sequenze in più passaggi: per esempio, 2 giorni dopo il trattamento chiedi al cliente come si trova, verifichi se ha già riprenotato e, solo se non l'ha fatto, invii un invito per l'appuntamento successivo. Così resti nei suoi pensieri senza dover ricontattare nessuno a mano.",
      },
    ],
    image: {
      src: "/images/mockups/kunden-workflows.jpg",
      alt: "Editor dei flussi di Treatflow con trigger, tempo di attesa e messaggio",
    },
  },
  understand: {
    title: "Sequenze che lavorano da sole",
    description:
      "Non singoli messaggi, ma sequenze complete per post-trattamento, richiamo e follow-up in più passaggi.",
    items: [
      {
        icon: "heart",
        title: "Post-trattamento senza lavoro extra",
        text: "Chiedi in automatico come sta reagendo la pelle e, se il cliente è interessato, proponi subito l'appuntamento successivo.",
      },
      {
        icon: "bell",
        title: "Recupera i clienti inattivi",
        text: "Dopo 60–90 giorni senza visite parte un invito personale a tornare nel tuo centro, al momento giusto.",
      },
      {
        icon: "git-branch",
        title: "Ramificazioni intelligenti",
        text: "Il flusso verifica se il cliente ha già riprenotato. Se sì, si ferma: nessun messaggio inutile.",
      },
    ],
  },
  howItWorks: {
    description: "Il tuo primo flusso in tre passaggi.",
    steps: [
      { title: "Scegli il trigger", text: "Per esempio la fine di un appuntamento, oppure un cliente che non si fa vedere da tempo." },
      { title: "Collega i passaggi", text: "Componi tempi di attesa, messaggi e condizioni nell'editor visivo." },
      { title: "Attiva", text: "Treatflow esegue la sequenza e invia i messaggi via email." },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Tutto per comunicare con i clienti in più passaggi, in modo chiaro e sotto controllo.",
    items: [
      { icon: "workflow", title: "Editor visivo", text: "Trigger, tempi di attesa, messaggi e condizioni con il drag & drop.", points: ["Panoramica chiara", "Più passaggi", "Facile da modificare"] },
      { icon: "message-circle", title: "Messaggi via email", text: "Ogni passaggio arriva direttamente nella casella di posta del cliente.", points: ["Email", "Il tuo testo", "Invio automatico"] },
      { icon: "clock", title: "Tempi di attesa", text: "Giorni o ore tra un passaggio e l'altro, sui tempi del tuo centro.", points: ["Post-trattamento puntuale", "Richiamo dei clienti", "Niente da ricordare"] },
      { icon: "git-branch", title: "Condizioni", text: "Controlla per esempio se ci sono nuove prenotazioni e ferma la sequenza in tempo.", points: ["Nessuna email doppia", "Ramificazioni intelligenti", "Messaggi più pertinenti"] },
      { icon: "heart", title: "Sequenze post-trattamento", text: "Prima un messaggio per sapere come va, poi l'invito alla seduta successiva, solo quando ha senso.", points: ["Clienti più fedeli", "Meno no-show", "Più riprenotazioni"] },
      { icon: "zap", title: "Richiamo clienti inattivi", text: "Invita di nuovo in automatico i clienti che non vengono da un po'.", points: ["60–90 giorni", "Personale", "Niente liste da gestire"] },
    ],
  },
  faq: {
    title: "Domande frequenti sui flussi clienti",
    items: [
      {
        question: "Cosa sono i flussi clienti di Treatflow?",
        answer:
          "I flussi clienti sono automazioni in più passaggi: crei sequenze con trigger, tempi di attesa, messaggi e condizioni. Così post-trattamento, richiamo e follow-up procedono in automatico, senza che tu debba scrivere ogni messaggio a mano.",
      },
      {
        question: "Che differenza c'è tra i flussi e i semplici promemoria?",
        answer:
          "I messaggi semplici (come i promemoria degli appuntamenti) sono composti da un trigger e un messaggio. I flussi servono per sequenze con più passaggi e ramificazioni: per esempio chiedere al cliente come si trova dopo il trattamento, attendere, verificare se ha riprenotato e solo allora inviare un secondo messaggio.",
      },
      {
        question: "Con quale canale vengono inviati i messaggi dei flussi?",
        answer:
          "I passaggi dei flussi vengono inviati via email. I promemoria degli appuntamenti restano disponibili tra i messaggi semplici.",
      },
      {
        question: "Un flusso può fermarsi se il cliente riprenota?",
        answer:
          "Sì. Puoi impostare delle condizioni, per esempio verificare se dall'ultimo appuntamento c'è una nuova prenotazione. In quel caso la sequenza si ferma: resti presente senza scrivere due volte.",
      },
      {
        question: "Con quali flussi conviene iniziare?",
        answer:
          "I più usati sono: messaggio post-trattamento 1–2 giorni dopo la seduta, richiamo dopo 60–90 giorni senza visite e post-trattamento in più passaggi, con un secondo messaggio solo se il cliente non ha ancora prenotato la seduta successiva.",
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
    title: "Vuoi automatizzare i follow-up con i tuoi clienti?",
    description: "Provalo gratis per 14 giorni: post-trattamento e richiamo dei clienti inattivi, senza ricontattare nessuno a mano.",
    secondary: { label: "Vai ai promemoria", href: { page: "messaging" } },
  },
};
