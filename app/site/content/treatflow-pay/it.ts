import type { TreatflowPayContent } from "./types";

export const treatflowPayIt: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay – acconto e pagamento completo con la prenotazione online",
    description:
      "Treatflow Pay: le clienti pagano un acconto o l'intero importo già al momento della prenotazione online. Impostabile per servizio, 2,69% per transazione.",
    keywords: [
      "Treatflow Pay",
      "acconto prenotazione online",
      "pagamenti online centro estetico",
      "caparra centro estetico",
      "pagamento anticipato appuntamento",
      "pagamenti Stripe centro estetico",
    ],
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay – acconto e pagamento completo con la prenotazione online",
      description:
        "Treatflow Pay: le clienti pagano un acconto o l'intero importo già al momento della prenotazione online. Impostabile per servizio, 2,69% per transazione.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Acconto o pagamento completo ", highlight: "alla prenotazione" },
    description: "Decidi per ogni servizio se la cliente paga online un acconto, l'intero importo o niente.",
    chips: ["Per servizio", "Carta, Apple Pay, Google Pay", "2,69%"],
    secondaryCta: { label: "Vai alle prenotazioni online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Che cos'è Treatflow Pay?",
        answer:
          "Treatflow Pay è il pagamento online al momento della prenotazione. Per ogni servizio il centro può chiedere nessun pagamento, un acconto in percentuale o come importo fisso, oppure il pagamento completo. Si paga con carta di credito o di debito, oltre ad Apple Pay e Google Pay nel checkout di Stripe. La commissione è del 2,69% per transazione.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay – acconto o pagamento completo con la prenotazione online",
    },
  },
  understand: {
    title: "Meno disdette dell'ultimo minuto, incassi più chiari",
    description: "Decidi per ogni trattamento cosa va pagato online. La cliente paga direttamente durante la prenotazione.",
    items: [
      {
        icon: "percent",
        title: "Impostazione per servizio",
        text: "Nessun pagamento online, acconto o pagamento completo. L'acconto è una percentuale o un importo fisso in euro.",
      },
      {
        icon: "credit-card",
        title: "Pagamento alla prenotazione",
        text: "Carte di credito e di debito nel checkout di Stripe. Apple Pay e Google Pay se il dispositivo della cliente li supporta.",
      },
      {
        icon: "banknote",
        title: "2,69% per transazione",
        text: "Un'unica commissione, tutto incluso. Nessun costo aggiuntivo di Treatflow sul pagamento.",
      },
    ],
  },
  howItWorks: {
    description: "Collega una volta, poi scegli per ogni servizio.",
    steps: [
      { title: "Collega Treatflow Pay", text: "Nella sezione App configuri Treatflow Pay e colleghi il tuo account Stripe. Solo dopo puoi incassare al momento della prenotazione." },
      { title: "Scegli per ogni servizio", text: "Per ogni trattamento: nessun pagamento online, acconto in percentuale o come importo fisso, oppure l'intero prezzo." },
      { title: "La cliente paga", text: "La prenotazione si conclude con il pagamento. Con un acconto, il resto si paga in centro." },
    ],
  },
  cards: {
    title: "Tutte le possibilità",
    description: "Ecco cosa aggiunge Treatflow Pay alle tue prenotazioni online.",
    items: [
      { icon: "wallet", title: "Nessun pagamento, acconto o pagamento completo", text: "Ogni servizio ha la sua modalità. I servizi senza pagamento online restano prenotabili come prima.", points: ["Nessun pagamento online", "Acconto", "Pagamento completo"] },
      { icon: "percent", title: "Acconto in percentuale", text: "Per esempio il 30% del prezzo del servizio. La percentuale vale per quel trattamento.", points: ["Percentuale del prezzo", "Per servizio", "Saldo in centro"] },
      { icon: "banknote", title: "Acconto come importo fisso", text: "Un importo fisso in euro, al massimo pari al prezzo del servizio.", points: ["Importo fisso", "Limitato al prezzo", "Saldo in centro"] },
      { icon: "credit-card", title: "Carte e wallet", text: "Pagamento nel checkout di Stripe con carta, Apple Pay e Google Pay.", points: ["Carte di credito e di debito", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69% tutto incluso", text: "Un'unica commissione per transazione. Importo minimo 0,50 €.", points: ["2,69% per pagamento", "Da 0,50 €", "Tutto incluso"] },
      { icon: "layers", title: "Più servizi", text: "Gli importi di una prenotazione vengono sommati, al massimo fino al prezzo della prenotazione.", points: ["Somma dei servizi", "Limitato al prezzo", "Impostabile per servizio"] },
    ],
  },
  faq: {
    title: "Domande frequenti su Treatflow Pay",
    items: [
      {
        question: "Cosa posso impostare con Treatflow Pay?",
        answer:
          "Per ogni servizio scegli: nessun pagamento online, un acconto o il pagamento completo. L'acconto è una percentuale o un importo fisso. Se la cliente prenota più servizi, gli importi dovuti vengono sommati, al massimo fino al prezzo della prenotazione.",
      },
      {
        question: "Quali metodi di pagamento sono disponibili?",
        answer:
          "La cliente paga nel checkout di Stripe con carta di credito o di debito. Apple Pay e Google Pay compaiono se il suo dispositivo li supporta.",
      },
      {
        question: "Quanto costa Treatflow Pay?",
        answer: "2,69% per transazione, tutto incluso. Non c'è nessun costo aggiuntivo di Treatflow sul pagamento. L'importo minimo è di 0,50 €.",
      },
      {
        question: "Treatflow Pay serve anche per i pagamenti in centro?",
        answer:
          "No. Treatflow Pay è pensato per le prenotazioni online. I pagamenti in centro funzionano come sempre, per esempio con il tuo terminale di pagamento.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Prenotazioni online", description: "Link di prenotazione con Treatflow Pay" },
      { href: { page: "integrations" }, title: "Integrazioni", description: "Stripe, Google Calendar e altro" },
    ],
  },
  cta: {
    title: "L'acconto direttamente alla prenotazione",
    description:
      "Provalo gratis per 14 giorni. Poi colleghi Treatflow Pay nella sezione App: la commissione si applica solo ai pagamenti effettivi.",
    secondary: { label: "Vai alle prenotazioni online", href: { page: "online-booking" } },
  },
};
