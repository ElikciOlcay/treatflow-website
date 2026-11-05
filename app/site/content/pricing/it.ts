import type { PricingPageContent } from "./types";

export const pricingIt: PricingPageContent = {
  meta: {
    title: "Prezzi del gestionale per centri estetici",
    description:
      "Prezzi Treatflow: Basic da 39 €/mese, Booking da 59 €/mese. Nessuna commissione sulle prenotazioni, 14 giorni di prova gratuita, senza carta di credito.",
    keywords: [
      "gestionale centro estetico prezzi",
      "software centro estetico costo",
      "gestionale estetista prezzo",
      "software prenotazioni online prezzi",
      "programma centro estetico abbonamento",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Prezzi",
  capsule: {
    question: "Quanto costa Treatflow?",
    answer:
      "Basic da 39 €/mese (gestione clienti, moduli, documentazione), Booking da 59 €/mese (con agenda appuntamenti, prenotazioni online e promemoria). Nessuna commissione sulle prenotazioni, 14 giorni di prova gratuita.",
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
    title: "Cosa è incluso?",
    subtitle: "Confronta i due piani nel dettaglio e trova quello giusto per il tuo centro.",
    vatNote: "Tutti i prezzi sono IVA esclusa.",
    featureLabel: "Funzione",
    basicLabel: "Basic (39 €)",
    bookingLabel: "Booking (59 €)",
    rows: [
      { label: "Gestione clienti", basic: true, booking: true },
      { label: "Moduli con firma digitale", basic: true, booking: true },
      { label: "Documentazione dei trattamenti con note vocali", basic: true, booking: true },
      { label: "Foto prima/dopo", basic: true, booking: true },
      { label: "Note e attività del team", basic: true, booking: true },
      { label: "Shop e prodotti", basic: true, booking: true },
      { label: "Statistiche", basic: true, booking: true },
      { label: "Personale e ruoli", basic: true, booking: true },
      { label: "Supporto via email", basic: true, booking: true },
      { label: "Agenda appuntamenti (operatrici e cabine)", basic: false, booking: true },
      { label: "Prenotazioni online senza commissioni", basic: false, booking: true },
      { label: "Lista d'attesa", basic: false, booking: true },
      { label: "Promemoria via email", basic: false, booking: true },
      { label: "Flussi automatici per le clienti", basic: false, booking: true },
      { label: "Codici sconto", basic: false, booking: true },
      { label: "Pagina di prenotazione multilingue", basic: false, booking: true },
      { label: "Integrazioni (Google Calendar, Zapier, assistenti IA)", basic: false, booking: true },
      { label: "Supporto prioritario", basic: false, booking: true },
    ],
    cta: "Prova gratis per 14 giorni",
  },
  why: {
    title: "Perché Treatflow?",
    subtitle: "Prezzi fissi trasparenti invece di costi nascosti e commissioni.",
    stats: [
      { value: "0%", label: "Commissione per prenotazione" },
      { value: "0 €", label: "Costi di attivazione" },
      { value: "14 giorni", label: "di prova gratuita" },
      { value: "Sempre", label: "disdicibile" },
    ],
  },
  faq: {
    title: "Domande frequenti sui prezzi",
    subtitle: "Tutto quello che devi sapere sui prezzi di Treatflow.",
    items: [
      {
        question: "Quanto costa Treatflow?",
        answer:
          "Treatflow è disponibile in due piani: Basic da 39 €/mese per gestione clienti, moduli e documentazione. Booking da 59 €/mese con in più agenda appuntamenti, prenotazioni online e promemoria automatici. Entrambi i piani si possono provare gratis per 14 giorni.",
      },
      {
        question: "Ci sono costi nascosti?",
        answer:
          "No. Treatflow lavora con prezzi fissi trasparenti, senza commissioni, costi di attivazione o extra nascosti. Quello che vedi è quello che paghi.",
      },
      {
        question: "Posso disdire in qualsiasi momento?",
        answer:
          "Sì. Con il pagamento mensile puoi disdire in qualsiasi momento, con effetto alla fine del periodo di fatturazione. Non c'è una durata minima del contratto.",
      },
      {
        question: "Esiste un gestionale gratuito per centri estetici?",
        answer:
          "Alcuni fornitori come Fresha offrono versioni base gratuite, ma guadagnano con le commissioni sui pagamenti e le funzioni premium. Treatflow offre prezzi fissi trasparenti senza costi nascosti – da 39 €/mese con tutte le funzioni.",
      },
      {
        question: "Conviene il piano Booking?",
        answer:
          "Sì, se ti servono prenotazioni online, promemoria automatici via email e un'agenda digitale. Con il piano Booking hai molti meno no-show e passi meno tempo al telefono.",
      },
    ],
  },
};
