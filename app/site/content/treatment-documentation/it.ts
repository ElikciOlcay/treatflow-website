import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationIt: TreatmentDocumentationContent = {
  meta: {
    title: "Scheda trattamento digitale per centri estetici, con foto",
    description:
      "Documentazione digitale dei trattamenti per centri estetici e studi di medicina estetica: foto prima e dopo, note, parametri delle apparecchiature e storico nella scheda cliente. Detta le note invece di scriverle.",
    keywords: [
      "software documentazione trattamenti",
      "scheda trattamento centro estetico",
      "scheda tecnica estetista",
      "software foto prima e dopo",
      "app note trattamenti",
      "dettare note trattamento",
      "documentazione medicina estetica",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Scheda trattamento digitale per centri estetici, con foto",
      description: "Documentazione digitale dei trattamenti con foto prima e dopo, note e storico.",
    },
  },
  breadcrumb: "Documentazione",
  hero: {
    eyebrow: "Documentazione dei trattamenti",
    eyebrowIcon: "file-text",
    title: { before: "Documenta i trattamenti in ", highlight: "digitale" },
    description:
      "Foto, note e parametri in un unico posto, con il supporto dell'IA. Alla seduta successiva sai subito cosa è stato fatto.",
    chips: ["Foto prima e dopo", "Dettatura con IA", "Firma digitale"],
    secondaryCta: { label: "Moduli digitali", href: { page: "forms" } },
    capsules: [
      {
        question: "Quale software usare per documentare i trattamenti estetici?",
        answer:
          "Treatflow documenta i trattamenti in digitale con foto prima e dopo, parametri, note e firma. Una documentazione completa è importante soprattutto per i trattamenti con apparecchiature come laser o IPL, ed è proprio questo il flusso di lavoro che Treatflow supporta.",
      },
      {
        question: "Come documento l'andamento di un percorso estetico?",
        answer:
          "Per ogni seduta crei una voce con parametri, prodotti, foto e note. Lo storico resta nella scheda cliente. Puoi dettare le note: Treatflow le trascrive e, se vuoi, rifinisce il testo.",
      },
    ],
    image: {
      src: "/images/mockups/it/dokumentation-hero.png",
      alt: "Documentazione dei trattamenti Treatflow con foto e note",
    },
  },
  understand: {
    title: "Ogni trattamento, registrato con cura",
    description:
      "Dopo ogni seduta hai una voce digitale con foto, note e parametri, salvata nella scheda cliente.",
    items: [
      {
        icon: "camera",
        title: "Foto prima e dopo",
        text: "Documenta i progressi con le foto e mostra al cliente i risultati seduta dopo seduta.",
      },
      {
        icon: "brain",
        title: "Con la voce o con l'IA",
        text: "Detta le tue note: Treatflow le trascrive e, se vuoi, rifinisce il testo con l'IA. Meno tempo alla tastiera, più tempo per il trattamento.",
      },
      {
        icon: "shield",
        title: "Completa e tracciabile",
        text: "Ogni voce viene salvata nella scheda cliente con data, parametri ed eventuale firma: se in seguito sorgono domande, puoi dimostrare cosa è stato fatto.",
      },
    ],
  },
  howItWorks: {
    description: "Documentazione completa in tre passaggi.",
    steps: [
      { title: "Apri la documentazione", text: "Apri la documentazione direttamente dall'appuntamento o dalla scheda cliente: cliente e trattamento sono già inseriti." },
      { title: "Aggiungi foto e note", text: "Carica le foto, inserisci i parametri del trattamento e detta o scrivi le note. Se serve, fai firmare il cliente." },
      { title: "Salvato e sempre disponibile", text: "Tutto finisce automaticamente nella scheda cliente. Alla seduta successiva vedi subito cosa è stato fatto l'ultima volta." },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Tutto ciò che ti serve per documentare i trattamenti con ordine, senza scartoffie.",
    items: [
      { icon: "camera", title: "Foto prima e dopo", text: "Salva le foto direttamente con il trattamento e confrontale in ordine cronologico.", points: ["Collegate al trattamento", "Nella scheda cliente", "Conforme al GDPR"] },
      { icon: "mic", title: "Dettatura vocale", text: "Detta le note invece di scriverle: ideale durante o subito dopo il trattamento.", points: ["A mani libere", "Veloce", "Testo chiaro"] },
      { icon: "brain", title: "Assistente IA", text: "Se vuoi, l'IA rifinisce e struttura il testo dettato; tu controlli la voce prima di salvarla.", points: ["Testo rifinito", "Struttura chiara", "Meno tempo alla tastiera"] },
      { icon: "file-text", title: "Parametri e prodotti", text: "Registra con ordine valori delle apparecchiature, prodotti e impostazioni.", points: ["Laser/IPL", "Prodotti", "Cura post-trattamento"] },
      { icon: "pen-tool", title: "Firma digitale", text: "Raccogli consenso o conferma del cliente in digitale, sul tablet.", points: ["Sul tablet", "Nella scheda cliente", "Tracciabile"] },
      { icon: "shield", title: "Archivio sicuro", text: "Tutta la documentazione è conservata su server nell'UE ed è sempre consultabile.", points: ["Server UE", "Crittografata", "Sempre disponibile"] },
    ],
  },
  faq: {
    title: "Domande frequenti sulla documentazione",
    items: [
      {
        question: "Quale software usare per documentare i trattamenti estetici?",
        answer:
          "Treatflow documenta i trattamenti in digitale con foto prima e dopo, parametri, note e firma. Una documentazione completa è importante soprattutto per i trattamenti con apparecchiature come laser o IPL, ed è proprio questo il flusso di lavoro che Treatflow supporta.",
      },
      {
        question: "Come documento l'andamento di un percorso estetico?",
        answer:
          "Per ogni seduta crei una voce con parametri, numeri di lotto, foto e note. Lo storico nella scheda cliente mostra l'andamento seduta dopo seduta. Puoi dettare le note: Treatflow le trascrive e, se vuoi, rifinisce il testo con l'IA.",
      },
      {
        question: "La documentazione dei trattamenti è obbligatoria in un centro estetico?",
        answer:
          "Dipende dal paese e dal trattamento. Per i trattamenti con apparecchiature come laser o IPL una documentazione completa è di norma richiesta. Per tutti gli altri è comunque consigliata: per tutelarti legalmente, garantire la qualità e la soddisfazione dei clienti.",
      },
      {
        question: "Cosa deve contenere una documentazione professionale dei trattamenti?",
        answer:
          "Tipo e data del trattamento, prodotti e parametri, foto prima e dopo, valutazione della pelle, note sull'andamento, consigli per la cura post-trattamento e, facoltativamente, la firma del cliente.",
      },
      {
        question: "Come si scattano correttamente le foto prima e dopo?",
        answer:
          "Sempre nelle stesse condizioni (luce, angolazione, distanza). In Treatflow salvi le foto direttamente nella documentazione, collegate alla scheda cliente.",
      },
      {
        question: "Cosa devo documentare per i trattamenti laser e IPL?",
        answer:
          "Di solito la consulenza, il consenso informato, le impostazioni dell'apparecchiatura (ad es. energia, frequenza, durata dell'impulso), la zona trattata, la reazione della pelle e i consigli post-trattamento.",
      },
      {
        question: "Posso dettare le note del trattamento invece di scriverle?",
        answer:
          "Sì. Nella documentazione detti le note: Treatflow trascrive la voce in testo e, se vuoi, lo rifinisce con l'IA. La scheda però non si compila da sola.",
      },
      {
        question: "Posso segnare le zone trattate su foto o schizzi?",
        answer:
          "Salvi le foto prima e dopo direttamente con il trattamento e segni le zone sulle foto; nei moduli trovi campi schizzo con la sagoma del viso o del corpo. Non esiste un modulo separato per la mappa corporea.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "forms" }, title: "Moduli", description: "Scheda anamnestica e consenso informato in digitale" },
      { href: { page: "client-records" }, title: "Schede clienti", description: "Storico dei trattamenti nella scheda cliente" },
      { href: { page: "appointment-calendar" }, title: "Agenda appuntamenti", description: "Apri la documentazione dall'appuntamento" },
    ],
  },
  cta: {
    title: "Vuoi una documentazione sempre in ordine?",
    description: "Prova gratis per 14 giorni, senza carta di credito. Documentazione, foto e firme in un'unica app.",
    secondary: { label: "Moduli digitali", href: { page: "forms" } },
  },
};
