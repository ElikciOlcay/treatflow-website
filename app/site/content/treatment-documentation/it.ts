import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationIt: TreatmentDocumentationContent = {
  meta: {
    title: "Documentazione digitale dei trattamenti per centri estetici",
    description:
      "Documentazione digitale dei trattamenti per centri estetici e studi di medicina estetica: foto prima e dopo, note, parametri dei dispositivi e storico nel profilo cliente. Detta le note invece di scriverle.",
    keywords: [
      "software documentazione trattamenti",
      "scheda trattamenti centro estetico",
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
      name: "Documentazione digitale dei trattamenti per centri estetici",
      description: "Documentazione digitale dei trattamenti con foto prima e dopo, note e storico.",
    },
  },
  breadcrumb: "Documentazione",
  hero: {
    eyebrow: "Documentazione dei trattamenti",
    eyebrowIcon: "file-text",
    title: { before: "Documenta i trattamenti in ", highlight: "digitale" },
    description:
      "Foto, note e parametri in un unico posto – con il supporto dell'IA. All'appuntamento successivo sai subito cosa è stato fatto.",
    chips: ["Foto prima e dopo", "Dettatura con IA", "Firma digitale"],
    secondaryCta: { label: "Moduli digitali", href: { page: "forms" } },
    capsules: [
      {
        question: "Quale software è adatto per documentare i trattamenti estetici?",
        answer:
          "Treatflow documenta i trattamenti in digitale con foto prima e dopo, parametri, note e firma. Soprattutto per i trattamenti con apparecchiature come laser o IPL una documentazione completa è importante – Treatflow supporta esattamente questo flusso di lavoro.",
      },
      {
        question: "Come documento l'andamento dei trattamenti estetici?",
        answer:
          "Ogni seduta riceve una voce con parametri, prodotti, foto e note. Lo storico resta nella scheda cliente. Puoi dettare le note; Treatflow le trasforma in testo e, se vuoi, lo rifinisce.",
      },
    ],
    image: {
      src: "/images/mockups/dokumentation-hero.png",
      alt: "Documentazione dei trattamenti Treatflow con foto e note",
    },
  },
  understand: {
    title: "Ogni trattamento registrato con cura",
    description:
      "Dopo ogni seduta hai una voce digitale con foto, note e parametri – tutto salvato nel profilo cliente.",
    items: [
      {
        icon: "camera",
        title: "Foto prima e dopo",
        text: "Registra i progressi con le foto. Così puoi mostrare alla cliente come procede il trattamento.",
      },
      {
        icon: "brain",
        title: "Con la voce o con l'IA",
        text: "Detta le tue note. Treatflow le trasforma in testo e, se vuoi, lo rifinisce con l'IA. Meno digitazione, più tempo per il trattamento.",
      },
      {
        icon: "shield",
        title: "Completa e tracciabile",
        text: "Ogni voce viene salvata con data, parametri e firma facoltativa nel profilo cliente – così puoi dimostrare cosa è stato fatto se in seguito sorgono domande.",
      },
    ],
  },
  howItWorks: {
    description: "Documentazione completa in tre passaggi.",
    steps: [
      { title: "Apri la documentazione", text: "Apri la documentazione direttamente dall'appuntamento o dal profilo cliente – cliente e trattamento sono già compilati." },
      { title: "Aggiungi foto e note", text: "Carica le foto, inserisci i parametri del trattamento e detta o scrivi le note. Se necessario, fai firmare la cliente." },
      { title: "Salvato e sempre disponibile", text: "Tutto finisce automaticamente nel profilo cliente. All'appuntamento successivo vedi subito cosa è stato fatto l'ultima volta." },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Tutto ciò che ti serve per una documentazione ordinata dei trattamenti – senza scartoffie.",
    items: [
      { icon: "camera", title: "Foto prima e dopo", text: "Salva le foto direttamente con il trattamento e confrontale in ordine cronologico.", points: ["Stesso contesto", "Nel profilo cliente", "Conforme al GDPR"] },
      { icon: "mic", title: "Dettatura vocale", text: "Detta le note invece di scriverle – ideale durante o subito dopo il trattamento.", points: ["A mani libere", "Veloce", "Testo chiaro"] },
      { icon: "brain", title: "Assistente IA", text: "Se vuoi, rifinisci e struttura il testo dettato – controlli la voce prima di salvarla.", points: ["Rifinire il testo", "Struttura", "Meno digitazione"] },
      { icon: "file-text", title: "Parametri e prodotti", text: "Registra con ordine valori dei dispositivi, prodotti e impostazioni.", points: ["Laser/IPL", "Prodotti", "Cura post-trattamento"] },
      { icon: "pen-tool", title: "Firma digitale", text: "Raccogli consenso o conferma in digitale sul tablet.", points: ["Sul dispositivo", "Nel profilo", "Tracciabile"] },
      { icon: "shield", title: "Archivio sicuro", text: "Tutta la documentazione è conservata su server UE ed è sempre consultabile.", points: ["Server UE", "Crittografata", "Sempre disponibile"] },
    ],
  },
  faq: {
    title: "Domande frequenti sulla documentazione",
    items: [
      {
        question: "Quale software è adatto per documentare i trattamenti estetici?",
        answer:
          "Treatflow documenta i trattamenti in digitale con foto prima e dopo, parametri, note e firma. Soprattutto per i trattamenti con apparecchiature come laser o IPL una documentazione completa è importante – Treatflow supporta esattamente questo flusso di lavoro.",
      },
      {
        question: "Come documento l'andamento dei trattamenti estetici?",
        answer:
          "Ogni seduta riceve una voce con parametri, numeri di lotto, foto e note. Lo storico nella scheda cliente mostra l'andamento su più appuntamenti. Puoi dettare le note; Treatflow le trasforma in testo e, se vuoi, lo rifinisce con l'IA.",
      },
      {
        question: "La documentazione dei trattamenti è obbligatoria in un centro estetico?",
        answer:
          "Dipende dal paese e dal trattamento. Per i trattamenti con apparecchiature come laser o IPL una documentazione completa è di norma richiesta. Per tutti gli altri trattamenti è consigliata – per sicurezza giuridica, qualità e soddisfazione delle clienti.",
      },
      {
        question: "Cosa deve contenere una documentazione professionale dei trattamenti?",
        answer:
          "Tipo e data del trattamento, prodotti e parametri, foto prima e dopo, valutazione della pelle, note sull'andamento, consigli per la cura post-trattamento e, facoltativamente, la firma della cliente.",
      },
      {
        question: "Come si scattano correttamente le foto prima e dopo?",
        answer:
          "Nelle stesse condizioni (luce, angolazione, distanza). In Treatflow salvi le foto direttamente nella documentazione e le colleghi al profilo cliente.",
      },
      {
        question: "Cosa devo documentare per i trattamenti laser e IPL?",
        answer:
          "Di solito la consulenza, il consenso, le impostazioni del dispositivo (ad es. energia, frequenza, durata dell'impulso), l'area trattata, la reazione della pelle e i consigli post-trattamento.",
      },
      {
        question: "Posso dettare le note del trattamento invece di scriverle?",
        answer:
          "Sì. Nella documentazione detti le note. Treatflow converte la voce in testo e, se vuoi, lo rifinisce con l'IA. La scheda non viene scritta in modo completamente automatico.",
      },
      {
        question: "Posso segnare le zone trattate su foto o schizzi?",
        answer:
          "Salvi le foto prima e dopo direttamente con il trattamento e segni le zone sulle foto; nei moduli ci sono campi schizzo con modello del viso o del corpo. Non esiste un modulo separato per la mappa corporea.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "forms" }, title: "Moduli", description: "Anamnesi e consensi in digitale" },
      { href: { page: "client-records" }, title: "Schede clienti", description: "Storico nel profilo cliente" },
      { href: { page: "appointment-calendar" }, title: "Agenda appuntamenti", description: "Apri la documentazione dall'appuntamento" },
    ],
  },
  cta: {
    title: "Pronta per una documentazione chiara?",
    description: "Prova gratis per 14 giorni – senza carta di credito. Documentazione, foto e firme in un'unica app.",
    secondary: { label: "Moduli digitali", href: { page: "forms" } },
  },
};
