import type { StudioWebsiteContent } from "./types";

export const studioWebsiteIt: StudioWebsiteContent = {
  meta: {
    title: "Sito web su misura per centri estetici",
    description:
      "Un sito web su misura per il tuo centro estetico, centro laser o attività beauty. Professionale, ottimizzato per smartphone e pensato per le prenotazioni. Da 1.000 euro.",
    keywords: [
      "sito web centro estetico",
      "web design centro estetico",
      "sito web salone di bellezza",
      "sito web centro laser",
      "sito web onicotecnica",
      "sito web trucco permanente",
    ],
  },
  schema: {
    serviceName: "Sito web su misura per centri estetici",
    serviceDescription:
      "Siti web professionali e su misura per centri estetici e attività beauty. Ottimizzati per le prenotazioni e per acquisire nuove clienti.",
    serviceType: "Web design",
    areaServed: ["IT"],
    priceDescription: "Sito web su misura da 1.000 euro",
  },
  emailHref: `mailto:hello@treatflow.io?subject=${encodeURIComponent("Richiesta progetto sito web")}`,
  hero: {
    badge: "Nuovo servizio di Treatflow",
    title: { before: "Siti web su misura per", highlight: "centri estetici" },
    lead: "Professionali, moderni e pensati per le prenotazioni. Il tuo sito diventa il canale più forte per nuove clienti.",
    sub: "Non costruiamo semplicemente siti belli. Costruiamo siti che creano fiducia e generano richieste.",
    primaryCta: "Consulenza gratuita",
    emailCta: "Richiesta via e-mail",
    checks: ["Da 1.000 euro", "Design su misura", "Pronto in 2-4 settimane"],
  },
  demo: {
    badge: "Guarda un esempio dal vivo (in tedesco)",
    title: "Ecco come potrebbe essere il sito del tuo centro",
    description: "Giudica tu stessa. Abbiamo creato questo sito di esempio per un centro premium immaginario.",
    href: "/demo/skin-atelier",
    imageAlt: "Skin Atelier – sito demo di Treatflow per centri estetici (in tedesco)",
    overlayLabel: "Sito demo",
    overlayTitle: "Skin Atelier Monaco di Baviera",
    hoverCta: "Vedi la demo",
    cardTitle: "Sito demo su misura",
    cardText: "Design premium con prenotazione integrata, trattamenti, recensioni e altro",
    cardCta: "Vedi dal vivo",
  },
  why: {
    title: "Perché il tuo centro ha bisogno di un sito professionale",
    description:
      "Le tue clienti si informano online prima di prenotare. Un sito professionale è il tuo biglietto da visita digitale e lo strumento più efficace per acquisire nuove clienti.",
    stats: [
      { value: "97%", label: "cerca online", desc: "Quasi tutte le clienti cercano un centro su Google prima di prenotare." },
      { value: "75%", label: "giudica dal sito", desc: "La qualità del tuo sito influenza la fiducia nel tuo centro." },
      { value: "3x", label: "più richieste", desc: "I centri con un sito professionale ricevono molte più richieste di prenotazione." },
    ],
  },
  services: {
    title: "Cosa c'è nel tuo sito",
    description: "Ogni sito viene progettato su misura per il tuo centro. Nessun template, nessun compromesso.",
    items: [
      {
        icon: "palette",
        title: "Design su misura",
        desc: "Niente costruttori di siti, niente template. Il tuo centro riceve un design che rispecchia il tuo brand e ispira fiducia.",
      },
      {
        icon: "smartphone",
        title: "Ottimizzato per smartphone",
        desc: "Oltre l'80% dei visitatori arriva dal telefono. Il tuo sito è perfetto su ogni dispositivo.",
      },
      {
        icon: "search",
        title: "Basi SEO",
        desc: "Tecnica pulita, caricamento veloce e contenuti ottimizzati, perché il tuo centro venga trovato su Google.",
      },
      {
        icon: "mouse-pointer-click",
        title: "Pensato per le prenotazioni",
        desc: "Ogni pagina è studiata per trasformare i visitatori in richieste o prenotazioni.",
      },
      {
        icon: "calendar-days",
        title: "Prenotazione integrata",
        desc: "Il tuo link di prenotazione Treatflow, il modulo di contatto o il pulsante di chiamata integrati direttamente.",
      },
      {
        icon: "globe",
        title: "Adatto a ogni settore",
        desc: "Estetica, laser, Hydrafacial, trucco permanente, microneedling, unghie, ciglia e altro.",
      },
    ],
  },
  advantage: {
    badge: "Vantaggio esclusivo",
    title: "Ideale insieme a Treatflow",
    description:
      "Il tuo sito diventa ancora più efficace se collegato a Treatflow. Link di prenotazione, trattamenti e orari di apertura possono essere ripresi direttamente da Treatflow.",
    points: [
      "Link di prenotazione online integrato",
      "Trattamenti e prezzi sul sito",
      "Aggiornamento automatico possibile",
      "Un'esperienza fluida dal clic all'appuntamento",
    ],
    boxTitle: "Vantaggio per i clienti Treatflow",
    boxText: "Come cliente Treatflow, quando ordini un sito ricevi in più:",
    creditAmount: "200 euro",
    creditLabel: "di credito Treatflow in regalo",
    creditNote: "Utilizzabile per il tuo abbonamento Treatflow. Così risparmi anche sul software del centro.",
  },
  pricing: {
    title: "Prezzi trasparenti, nessun costo nascosto",
    description: "Crediamo in prezzi equi e chiari. Niente clausole in piccolo.",
    badge: "Progetto sito su misura",
    price: { prefix: "da", amount: "1.000", currency: "euro" },
    note: "Una tantum. Nessun abbonamento per la realizzazione del sito.",
    points: [
      "Design su misura secondo i tuoi desideri",
      "Responsive su tutti i dispositivi",
      "Ottimizzazione SEO di base",
      "Struttura orientata alla conversione",
      "Contatti e prenotazione integrati",
      "Fino a 5 sottopagine incluse",
      "Note legali e informativa privacy",
      "Crittografia SSL",
    ],
    customerLabel: "Clienti Treatflow:",
    customerText: "200 euro di credito Treatflow inclusi",
    cta: "Richiedi il tuo progetto",
    footnote: "Primo colloquio senza impegno. La consulenza è gratuita.",
  },
  process: {
    title: "Come nasce il sito del tuo centro",
    description: "Dalla prima idea al sito finito – in quattro semplici passaggi.",
    steps: [
      { step: "01", title: "Primo colloquio", desc: "Conosciamo il tuo centro, capiamo i tuoi obiettivi e definiamo il progetto." },
      { step: "02", title: "Concept e design", desc: "Creiamo un concept grafico su misura che rispecchia il tuo brand." },
      { step: "03", title: "Realizzazione", desc: "Il sito viene sviluppato in modo professionale e riempito con i tuoi contenuti." },
      { step: "04", title: "Lancio", desc: "Dopo la tua approvazione il sito va online. Ti accompagniamo nel lancio." },
    ],
  },
  faq: {
    title: "Domande frequenti sulla realizzazione del sito",
    description: "Tutto quello che devi sapere prima di affidarci il progetto.",
    items: [
      {
        question: "Quanto tempo serve per realizzare il sito del mio centro?",
        answer:
          "Di solito il sito è pronto in 2-4 settimane. I tempi esatti dipendono dall'ampiezza del progetto e dalla consegna dei tuoi contenuti.",
      },
      {
        question: "Devo avere già testi e foto?",
        answer:
          "No, non è indispensabile. Ti aiutiamo con i testi e ti consigliamo sulle immagini. Foto professionali del tuo centro sono ovviamente ideali, ma troviamo insieme la soluzione migliore.",
      },
      {
        question: "Posso usare il mio dominio attuale?",
        answer:
          "Sì, certo. Se hai già un dominio, pubblichiamo lì il tuo nuovo sito. Altrimenti ti aiutiamo a sceglierlo e registrarlo.",
      },
      {
        question: "Il sito si può collegare a Treatflow?",
        answer:
          "Assolutamente. Il tuo link di prenotazione Treatflow, i trattamenti e gli orari possono essere integrati direttamente nel sito. Così le nuove clienti prenotano direttamente dal tuo sito.",
      },
      {
        question: "Quanto costa un sito su misura?",
        answer:
          "I siti su misura partono da 1.000 euro. Il prezzo finale dipende dall'ampiezza del progetto e dalle funzioni richieste. I clienti Treatflow ricevono inoltre 200 euro di credito Treatflow.",
      },
      {
        question: "Vi occupate anche di hosting e manutenzione?",
        answer:
          "Sì, su richiesta ci occupiamo anche dell'hosting e della manutenzione tecnica del tuo sito. Così non devi pensare a nulla.",
      },
      {
        question: "Potrò modificare il sito da sola in seguito?",
        answer:
          "A seconda della configurazione offriamo soluzioni che ti permettono di fare da sola semplici modifiche a testi e immagini. Per modifiche più grandi ti supportiamo noi.",
      },
    ],
  },
  cta: {
    title: "Pronta per il sito professionale del tuo centro?",
    description: "Costruiamo insieme il sito perfetto per il tuo centro. Consulenza gratuita e senza impegno.",
    primary: "Consulenza gratuita",
    email: "Richiesta via e-mail",
    checks: ["Senza impegno", "Consulenza personale", "Specializzati nel beauty"],
  },
};
