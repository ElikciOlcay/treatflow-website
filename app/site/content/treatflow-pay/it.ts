import type { TreatflowPayContent } from "./types";

export const treatflowPayIt: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay: acconto online alla prenotazione per centri estetici",
    description:
      "Treatflow Pay: i clienti pagano un acconto o l'intero importo già al momento della prenotazione online. Meno disdette all'ultimo minuto, impostabile per servizio, 2,69% per transazione.",
    keywords: [
      "Treatflow Pay",
      "acconto prenotazione online",
      "pagamenti online centro estetico",
      "caparra prenotazione centro estetico",
      "no-show centro estetico",
      "pagamento anticipato appuntamento",
      "pagamenti Stripe centro estetico",
    ],
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay: acconto online alla prenotazione per centri estetici",
      description:
        "Treatflow Pay: i clienti pagano un acconto o l'intero importo già al momento della prenotazione online. Impostabile per servizio, 2,69% per transazione.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Acconto o saldo completo ", highlight: "già alla prenotazione" },
    description: "Per ogni servizio decidi tu se il cliente paga online un acconto, l'intero importo o niente.",
    chips: ["Per servizio", "Carta, Apple Pay, Google Pay", "2,69%"],
    secondaryCta: { label: "Vai alle prenotazioni online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Che cos'è Treatflow Pay?",
        answer:
          "Treatflow Pay è il pagamento online integrato nella prenotazione. Per ogni servizio il centro può scegliere: nessun pagamento, un acconto (in percentuale o come importo fisso) oppure il pagamento completo. Si paga con carta di credito o di debito, Apple Pay o Google Pay nel checkout di Stripe. La commissione è del 2,69% per transazione.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay: acconto o saldo completo con la prenotazione online",
    },
  },
  understand: {
    title: "Meno disdette all'ultimo minuto, incassi più chiari",
    description: "Per ogni trattamento decidi cosa va pagato online. Il cliente paga direttamente mentre prenota.",
    items: [
      {
        icon: "percent",
        title: "Impostazione per servizio",
        text: "Nessun pagamento online, acconto o pagamento completo. L'acconto è una percentuale o un importo fisso in euro.",
      },
      {
        icon: "credit-card",
        title: "Pagamento alla prenotazione",
        text: "Carte di credito e di debito nel checkout di Stripe. Apple Pay e Google Pay se il dispositivo del cliente li supporta.",
      },
      {
        icon: "banknote",
        title: "2,69% per transazione",
        text: "Un'unica commissione, tutto incluso. Treatflow non aggiunge altri costi sul pagamento.",
      },
    ],
  },
  howItWorks: {
    description: "Lo colleghi una volta, poi scegli servizio per servizio.",
    steps: [
      { title: "Collega Treatflow Pay", text: "Nella sezione App configuri Treatflow Pay e colleghi il tuo account Stripe. Da quel momento puoi incassare al momento della prenotazione." },
      { title: "Scegli per ogni servizio", text: "Per ogni trattamento: nessun pagamento online, acconto in percentuale o come importo fisso, oppure l'intero prezzo." },
      { title: "Il cliente paga", text: "La prenotazione si conclude con il pagamento. Se hai chiesto un acconto, il saldo si paga in centro." },
    ],
  },
  cards: {
    title: "Tutte le opzioni",
    description: "Ecco cosa aggiunge Treatflow Pay alle tue prenotazioni online.",
    items: [
      { icon: "wallet", title: "Nessun pagamento, acconto o saldo completo", text: "Ogni servizio ha la sua modalità. I servizi senza pagamento online restano prenotabili come sempre.", points: ["Nessun pagamento online", "Acconto", "Saldo completo"] },
      { icon: "percent", title: "Acconto in percentuale", text: "Per esempio il 30% del prezzo del servizio. La percentuale vale per quel singolo trattamento.", points: ["Percentuale del prezzo", "Per servizio", "Saldo in centro"] },
      { icon: "banknote", title: "Acconto come importo fisso", text: "Un importo fisso in euro, al massimo pari al prezzo del servizio.", points: ["Importo fisso", "Limitato al prezzo", "Saldo in centro"] },
      { icon: "credit-card", title: "Carte e wallet", text: "Pagamento nel checkout di Stripe con carta, Apple Pay e Google Pay.", points: ["Carte di credito e di debito", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69% tutto incluso", text: "Un'unica commissione per transazione. Importo minimo 0,50 €.", points: ["2,69% per pagamento", "Da 0,50 €", "Tutto incluso"] },
      { icon: "layers", title: "Più servizi", text: "Gli importi dei servizi prenotati insieme si sommano, fino al massimo del prezzo totale della prenotazione.", points: ["Somma dei servizi", "Limitato al prezzo", "Impostabile per servizio"] },
    ],
  },
  faq: {
    title: "Domande frequenti su Treatflow Pay",
    items: [
      {
        question: "Cosa posso impostare con Treatflow Pay?",
        answer:
          "Per ogni servizio scegli: nessun pagamento online, un acconto o il pagamento completo. L'acconto è una percentuale o un importo fisso. Se il cliente prenota più servizi, gli importi dovuti si sommano, fino al massimo del prezzo totale della prenotazione.",
      },
      {
        question: "Quali metodi di pagamento sono disponibili?",
        answer:
          "Il cliente paga nel checkout di Stripe con carta di credito o di debito. Apple Pay e Google Pay compaiono se il suo dispositivo li supporta.",
      },
      {
        question: "Quanto costa Treatflow Pay?",
        answer: "2,69% per transazione, tutto incluso. Treatflow non aggiunge altri costi sul pagamento. L'importo minimo è di 0,50 €.",
      },
      {
        question: "Treatflow Pay serve anche per i pagamenti in centro?",
        answer:
          "No. Treatflow Pay è pensato per le prenotazioni online. In centro continui a incassare come sempre, per esempio con il tuo POS.",
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
    title: "L'acconto, già al momento della prenotazione",
    description:
      "Provalo gratis per 14 giorni, poi collega Treatflow Pay nella sezione App: la commissione si applica solo ai pagamenti effettivamente incassati.",
    secondary: { label: "Vai alle prenotazioni online", href: { page: "online-booking" } },
  },
};
