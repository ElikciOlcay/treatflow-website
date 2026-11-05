import type { StudioWebsiteContent } from "./types";

export const studioWebsiteIt: StudioWebsiteContent = {
  meta: {
    title: "Siti web per centri estetici, su misura",
    description:
      "Un sito web su misura per il tuo centro estetico, centro laser o attività beauty: professionale, ottimizzato per smartphone e pensato per far prenotare. Da 1.000 euro.",
    keywords: [
      "sito web centro estetico",
      "web design centro estetico",
      "realizzazione sito web centro estetico",
      "sito web istituto di bellezza",
      "sito web centro laser",
      "sito web onicotecnica",
      "sito web trucco permanente",
    ],
  },
  schema: {
    serviceName: "Sito web su misura per centri estetici",
    serviceDescription:
      "Siti web professionali e su misura per centri estetici e attività beauty. Ottimizzati per le prenotazioni e per acquisire nuovi clienti.",
    serviceType: "Web design",
    areaServed: ["IT"],
    priceDescription: "Sito web su misura da 1.000 euro",
  },
  emailHref: `mailto:hello@treatflow.io?subject=${encodeURIComponent("Richiesta progetto sito web")}`,
  hero: {
    badge: "Nuovo servizio di Treatflow",
    title: { before: "Siti web su misura per", highlight: "centri estetici" },
    lead: "Professionali, moderni e pensati per far prenotare. Il tuo sito diventa il canale numero uno per trovare nuovi clienti.",
    sub: "Non ci limitiamo a creare siti belli: creiamo siti che ispirano fiducia e portano richieste.",
    primaryCta: "Consulenza gratuita",
    emailCta: "Scrivici un'email",
    checks: ["Da 1.000 euro", "Design su misura", "Online in 2-4 settimane"],
  },
  demo: {
    badge: "Guarda un esempio dal vivo (in tedesco)",
    title: "Ecco come potrebbe essere il sito del tuo centro",
    description: "Giudica tu. Abbiamo realizzato questo sito di esempio per un centro premium immaginario.",
    href: "/demo/skin-atelier",
    imageAlt: "Skin Atelier – sito demo di Treatflow per centri estetici (in tedesco)",
    overlayLabel: "Sito demo",
    overlayTitle: "Skin Atelier Monaco di Baviera",
    hoverCta: "Vedi la demo",
    cardTitle: "Sito demo su misura",
    cardText: "Design premium con prenotazione integrata, trattamenti, recensioni e molto altro",
    cardCta: "Vedi dal vivo",
  },
  why: {
    title: "Perché il tuo centro ha bisogno di un sito professionale",
    description:
      "I clienti si informano online prima di prenotare. Un sito professionale è il tuo biglietto da visita digitale e lo strumento più efficace per trovare nuovi clienti.",
    stats: [
      { value: "97%", label: "cerca online", desc: "Quasi tutti i clienti cercano un centro su Google prima di prenotare." },
      { value: "75%", label: "giudica dal sito", desc: "La qualità del tuo sito influenza la fiducia nel tuo centro." },
      { value: "3x", label: "più richieste", desc: "I centri con un sito professionale ricevono molte più richieste di prenotazione." },
    ],
  },
  services: {
    title: "Cosa include il tuo sito",
    description: "Ogni sito è progettato su misura per il tuo centro. Niente template, niente compromessi.",
    items: [
      {
        icon: "palette",
        title: "Design su misura",
        desc: "Niente site builder, niente template: il tuo centro ha un design che rispecchia il tuo brand e ispira fiducia.",
      },
      {
        icon: "smartphone",
        title: "Ottimizzato per smartphone",
        desc: "Oltre l'80% dei visitatori arriva da smartphone. Il tuo sito è perfetto su ogni dispositivo.",
      },
      {
        icon: "search",
        title: "Basi SEO",
        desc: "Codice pulito, caricamento veloce e contenuti ottimizzati, perché il tuo centro si trovi su Google.",
      },
      {
        icon: "mouse-pointer-click",
        title: "Pensato per le prenotazioni",
        desc: "Ogni pagina è studiata per trasformare le visite in richieste e prenotazioni.",
      },
      {
        icon: "calendar-days",
        title: "Prenotazione integrata",
        desc: "Link di prenotazione Treatflow, modulo di contatto o pulsante per chiamare, integrati direttamente nel sito.",
      },
      {
        icon: "globe",
        title: "Adatto a ogni settore",
        desc: "Estetica, laser, Hydrafacial, trucco permanente, microneedling, onicotecnica, ciglia e molto altro.",
      },
    ],
  },
  advantage: {
    badge: "Vantaggio esclusivo",
    title: "Ideale insieme a Treatflow",
    description:
      "Collegato a Treatflow, il tuo sito rende ancora di più: link di prenotazione, trattamenti e orari di apertura si possono riprendere direttamente da Treatflow.",
    points: [
      "Link di prenotazione online integrato",
      "Trattamenti e prezzi sul sito",
      "Aggiornamento automatico possibile",
      "Dal clic all'appuntamento, senza interruzioni",
    ],
    boxTitle: "Vantaggio per i clienti Treatflow",
    boxText: "Se sei già cliente Treatflow, con il sito ricevi in più:",
    creditAmount: "200 euro",
    creditLabel: "di credito Treatflow in regalo",
    creditNote: "Da usare sul tuo abbonamento Treatflow: così risparmi anche sul gestionale.",
  },
  pricing: {
    title: "Prezzi trasparenti, nessun costo nascosto",
    description: "Crediamo in prezzi onesti e chiari. Niente clausole scritte in piccolo.",
    badge: "Progetto sito su misura",
    price: { prefix: "da", amount: "1.000", currency: "euro" },
    note: "Una tantum. Nessun abbonamento per la realizzazione del sito.",
    points: [
      "Design su misura, secondo i tuoi gusti",
      "Responsive su tutti i dispositivi",
      "Ottimizzazione SEO di base",
      "Struttura orientata alla conversione",
      "Contatti e prenotazione integrati",
      "Fino a 5 sottopagine incluse",
      "Note legali e informativa sulla privacy",
      "Crittografia SSL",
    ],
    customerLabel: "Clienti Treatflow:",
    customerText: "200 euro di credito Treatflow inclusi",
    cta: "Richiedi un preventivo",
    footnote: "Primo colloquio senza impegno, consulenza gratuita.",
  },
  process: {
    title: "Come nasce il sito del tuo centro",
    description: "Dalla prima idea al sito online, in quattro semplici passaggi.",
    steps: [
      { step: "01", title: "Primo colloquio", desc: "Conosciamo il tuo centro, capiamo i tuoi obiettivi e definiamo il progetto." },
      { step: "02", title: "Concept e design", desc: "Creiamo un concept grafico su misura che rispecchia il tuo brand." },
      { step: "03", title: "Realizzazione", desc: "Sviluppiamo il sito in modo professionale e lo completiamo con i tuoi contenuti." },
      { step: "04", title: "Lancio", desc: "Dopo la tua approvazione il sito va online, e ti accompagniamo nel lancio." },
    ],
  },
  faq: {
    title: "Domande frequenti sulla realizzazione del sito",
    description: "Tutto quello che devi sapere prima di affidarci il progetto.",
    items: [
      {
        question: "Quanto tempo serve per realizzare il sito del mio centro?",
        answer:
          "Di solito il sito è pronto in 2-4 settimane. I tempi esatti dipendono dalla dimensione del progetto e da quando ci invii i tuoi contenuti.",
      },
      {
        question: "Devo avere già testi e foto?",
        answer:
          "No, non è indispensabile. Ti aiutiamo con i testi e ti consigliamo sulle immagini. Le foto professionali del tuo centro sono ovviamente l'ideale, ma troviamo insieme la soluzione migliore.",
      },
      {
        question: "Posso usare il mio dominio attuale?",
        answer:
          "Sì, certo. Se hai già un dominio, pubblichiamo lì il tuo nuovo sito. Altrimenti ti aiutiamo a sceglierlo e registrarlo.",
      },
      {
        question: "Il sito si può collegare a Treatflow?",
        answer:
          "Certo. Il tuo link di prenotazione Treatflow, i trattamenti e gli orari si possono integrare direttamente nel sito. Così i nuovi clienti prenotano direttamente da lì.",
      },
      {
        question: "Quanto costa un sito su misura?",
        answer:
          "I siti su misura partono da 1.000 euro. Il prezzo finale dipende dalla dimensione del progetto e dalle funzioni richieste. Chi è già cliente Treatflow riceve in più 200 euro di credito Treatflow.",
      },
      {
        question: "Vi occupate anche di hosting e manutenzione?",
        answer:
          "Sì, su richiesta ci occupiamo anche dell'hosting e della manutenzione tecnica del tuo sito. Così non devi pensare a nulla.",
      },
      {
        question: "Potrò modificare il sito in autonomia?",
        answer:
          "A seconda della configurazione, offriamo soluzioni che ti permettono di modificare in autonomia testi e immagini. Per interventi più importanti ci pensiamo noi.",
      },
    ],
  },
  cta: {
    title: "Vuoi un sito professionale per il tuo centro?",
    description: "Realizziamo insieme il sito perfetto per il tuo centro. Consulenza gratuita e senza impegno.",
    primary: "Consulenza gratuita",
    email: "Scrivici un'email",
    checks: ["Senza impegno", "Consulenza personale", "Specializzati nel beauty"],
  },
};
