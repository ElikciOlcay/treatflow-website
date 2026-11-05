import type { PricingPageContent } from "./types";

export const pricingIt: PricingPageContent = {
  meta: {
    title: "Prezzi del gestionale per centri estetici: da 39 €/mese",
    description:
      "Quanto costa Treatflow? Basic 39 €/mese, Booking 59 €/mese. Zero commissioni sulle prenotazioni, prova gratuita di 14 giorni senza carta di credito.",
    keywords: [
      "gestionale centro estetico prezzi",
      "software centro estetico costo",
      "gestionale estetista prezzo",
      "software prenotazioni online prezzi",
      "programma centro estetico abbonamento",
      "quanto costa un gestionale per centro estetico",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Prezzi",
  capsule: {
    question: "Quanto costa Treatflow?",
    answer:
      "Basic costa 39 €/mese (schede clienti, moduli, documentazione dei trattamenti), Booking 59 €/mese (in più agenda appuntamenti, prenotazioni online e promemoria). Zero commissioni sulle prenotazioni e 14 giorni di prova gratuita.",
  },
  schema: {
    webPage: {
      name: "Prezzi: gestionale per centri estetici da 39 €/mese",
      description: "Prezzi trasparenti di Treatflow: Basic da 39 €/mese, Booking da 59 €/mese.",
    },
    priceValidUntil: "2026-12-31",
    offers: [
      { name: "Basic", price: "39", currency: "EUR" },
      { name: "Booking", price: "59", currency: "EUR" },
    ],
  },
  comparison: {
    title: "Cosa include ogni piano?",
    subtitle: "Confronta i due piani voce per voce e scegli quello giusto per il tuo centro.",
    vatNote: "Tutti i prezzi sono IVA esclusa.",
    featureLabel: "Funzione",
    basicLabel: "Basic (39 €)",
    bookingLabel: "Booking (59 €)",
    rows: [
      { label: "Schede clienti", basic: true, booking: true },
      { label: "Moduli con firma digitale", basic: true, booking: true },
      { label: "Documentazione dei trattamenti con note vocali", basic: true, booking: true },
      { label: "Foto prima/dopo", basic: true, booking: true },
      { label: "Note e attività del team", basic: true, booking: true },
      { label: "Shop e prodotti", basic: true, booking: true },
      { label: "Statistiche", basic: true, booking: true },
      { label: "Personale e ruoli", basic: true, booking: true },
      { label: "Supporto via email", basic: true, booking: true },
      { label: "Agenda appuntamenti (operatori e cabine)", basic: false, booking: true },
      { label: "Prenotazioni online senza commissioni", basic: false, booking: true },
      { label: "Lista d'attesa", basic: false, booking: true },
      { label: "Promemoria via email", basic: false, booking: true },
      { label: "Flussi automatici per i clienti", basic: false, booking: true },
      { label: "Codici sconto", basic: false, booking: true },
      { label: "Pagina di prenotazione multilingue", basic: false, booking: true },
      { label: "Integrazioni (Google Calendar, Zapier, assistenti IA)", basic: false, booking: true },
      { label: "Supporto prioritario", basic: false, booking: true },
    ],
    cta: "Prova gratis per 14 giorni",
  },
  why: {
    title: "Perché Treatflow?",
    subtitle: "Un canone fisso e trasparente, senza costi nascosti né commissioni.",
    stats: [
      { value: "0%", label: "di commissione sulle prenotazioni" },
      { value: "0 €", label: "di costi di attivazione" },
      { value: "14 giorni", label: "di prova gratuita" },
      { value: "Disdetta", label: "quando vuoi" },
    ],
  },
  faq: {
    title: "Domande frequenti sui prezzi",
    subtitle: "Tutto quello che devi sapere sui prezzi di Treatflow.",
    items: [
      {
        question: "Quanto costa Treatflow?",
        answer:
          "Treatflow ha due piani: Basic a 39 €/mese per schede clienti, moduli e documentazione dei trattamenti; Booking a 59 €/mese, che aggiunge agenda appuntamenti, prenotazioni online e promemoria automatici. Puoi provare entrambi gratis per 14 giorni.",
      },
      {
        question: "Ci sono costi nascosti?",
        answer:
          "No. Treatflow ha un canone fisso e trasparente: niente commissioni, niente costi di attivazione, niente extra a sorpresa. Paghi esattamente il prezzo che vedi.",
      },
      {
        question: "Posso disdire in qualsiasi momento?",
        answer:
          "Sì. Con l'abbonamento mensile puoi disdire quando vuoi, con effetto alla fine del periodo di fatturazione. Nessun vincolo di durata minima.",
      },
      {
        question: "Esiste un gestionale gratuito per centri estetici?",
        answer:
          "Alcuni fornitori, come Fresha, offrono una versione base gratuita, ma guadagnano con le commissioni sui pagamenti e le funzioni a pagamento. Treatflow punta su un canone fisso e trasparente, senza costi nascosti: da 39 €/mese, con tutte le funzioni incluse.",
      },
      {
        question: "Conviene il piano Booking?",
        answer:
          "Sì, se ti servono prenotazioni online, promemoria automatici via email e un'agenda digitale. Con il piano Booking hai molti meno no-show e passi molto meno tempo al telefono.",
      },
    ],
  },
};
