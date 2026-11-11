export const demoCopyIt = {
  gallery: {
    eyebrow: 'Moduli di esempio',
    titleBefore: 'Prova i moduli – ',
    titleHighlight: 'senza registrarti',
    intro:
      'Questi modelli di esempio ti fanno provare in prima persona anamnesi, consenso informato e firma digitali in Treatflow. I tuoi moduli li crei nell\'editor dei moduli, oppure ti aiutiamo noi a configurarli.',
    points: [
      'Solo modelli di esempio',
      'Crea i tuoi moduli nell\'editor',
      'Ti aiutiamo a configurare nuovi moduli',
      'Non viene salvato nulla',
    ],
    noticeTitle: 'Modelli di esempio per orientarti',
    noticeText:
      "I moduli qui sotto mostrano come funziona l'accettazione digitale in Treatflow: anamnesi, consenso informato e firma. I moduli per il tuo centro li crei nell'editor dei moduli, oppure li configuriamo insieme.",
    generatorTitle: 'Crea i tuoi moduli nell\'editor',
    generatorText:
      "Parti da un modello o da un modulo vuoto e aggiungi i campi con il drag & drop, con domande condizionali, schizzi e firma.",
    generatorCta: 'Come funziona l\'editor',
    supportTitle: 'Ti aiutiamo a configurare nuovi moduli',
    supportText:
      "Ti servono moduli di anamnesi, consenso informato o indicazioni post-trattamento per i tuoi trattamenti? Li configuriamo insieme a te durante l'onboarding.",
    supportCta: 'Prenota una presentazione',
    cardsHeading: 'Apri un modulo di esempio',
    fillCta: 'Compila ora',
    pagesLabel: (count: number) => (count === 1 ? '1 pagina' : `${count} pagine`),
    difficulty: {
      einfach: 'Si compila in fretta',
      mittel: 'Con consenso informato',
      komplex: 'Anamnesi completa',
    } as Record<string, string>,
    bottomLock: 'La demo non salva nulla',
    bottomTitle: 'Pronto a usare i moduli nel tuo centro?',
    bottomText:
      'Questi esempi sono un punto di partenza. Personalizza i modelli, inviali tramite link oppure creiamo insieme nuovi moduli: 14 giorni di prova gratuita.',
    trialCta: 'Prova gratis per 14 giorni',
    moreCta: 'Scopri di più sui moduli',
  },
  player: {
    allTemplates: 'Tutti gli esempi',
    demoBadge: 'Demo – non viene salvato nulla',
    banner:
      "Questo è un modulo di esempio. Mostra ciò che vedono i clienti all'accettazione. Le risposte restano in questo browser e non vengono inviate a Treatflow.",
    requiredCheckbox: "Seleziona almeno un'opzione.",
    requiredField: 'Compila questo campo.',
    requiredSignature: 'Firma qui.',
    completedNote: 'Demo completata – non è stato salvato nulla.',
    completedFallback:
      'Ecco come apparirà poi il modulo compilato nella scheda cliente, con firma e data/ora.',
    doneTitle: "Questa era l'accettazione del tuo cliente",
    doneText:
      'In Treatflow personalizzi i modelli, li invii tramite link o codice QR oppure crei nuovi moduli nell\'editor. Possiamo anche configurarli insieme a te.',
    trialCta: 'Prova gratis per 14 giorni',
    moreSamples: 'Apri altri esempi',
    signatureSection: 'Firma',
    signHint: 'Firma con il dito o con il mouse',
    clear: 'Cancella',
    signHere: 'Firma qui',
    back: 'Indietro',
    next: 'Avanti',
    submit: 'Invia',
    restart: 'Compila di nuovo',
    drawingSkip:
      'Non disponibile nella demo. In Treatflow qui i clienti possono disegnare direttamente su un modello.',
    fileSkip: 'Non disponibile nella demo. In Treatflow qui i clienti possono caricare file.',
    defaultSignature: 'Firma cliente',
    done: 'Fatto',
  },
  meta: {
    galleryTitle: 'Prova i moduli di esempio senza registrarti',
    galleryDescription:
      'Apri e compila i modelli di esempio di Treatflow, senza account. Crea i tuoi moduli nell\'editor, oppure ti aiutiamo a configurare nuovi moduli.',
    playerTitle: (name: string) => `Prova: ${name}`,
    playerDescription: (description: string) =>
      `${description} Modulo di esempio: nessuna registrazione, non viene salvato nulla.`,
    notFound: 'Modulo non trovato',
  },
};
