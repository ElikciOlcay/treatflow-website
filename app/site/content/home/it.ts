import type { HomeContent } from "./types";

/**
 * Homepage italiana. Stesse sezioni di `en.ts`, senza le funzioni disponibili solo
 * nell'area DACH (cassa, buoni regalo, WhatsApp, Lexware, SumUp, NiSV). Nessun video
 * del prodotto per ora: il filmato esistente è in tedesco.
 */
export const homeIt: HomeContent = {
  meta: {
    title: "Gestionale per centri estetici e cliniche estetiche",
    description:
      "Treatflow è il gestionale all-in-one per centri estetici, cliniche di medicina estetica e studi di trattamento. Prenotazioni online, schede clienti, moduli digitali, documentazione dei trattamenti e promemoria. 14 giorni gratis.",
    keywords: [
      "gestionale centro estetico",
      "software centro estetico",
      "software prenotazioni centro estetico",
      "gestionale clinica estetica",
      "agenda online centro estetico",
    ],
  },

  schema: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      inLanguage: "it",
      description:
        "Treatflow è una piattaforma gestionale all-in-one per centri estetici, cliniche di medicina estetica e studi di trattamento. Riunisce prenotazioni online, schede clienti, moduli digitali di anamnesi e consenso, documentazione dei trattamenti, foto prima/dopo e follow-up automatici. Ospitato nell'UE.",
      url: "https://www.treatflow.io/it",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Schede clienti, moduli e documentazione dei trattamenti",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Agenda, prenotazioni online e promemoria automatici",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "19",
        reviewCount: "19",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Agenda appuntamenti con prenotazioni online",
        "Schede clienti digitali",
        "Moduli di anamnesi e consenso",
        "Documentazione dei trattamenti con foto",
        "Dettatura vocale delle note di trattamento",
        "Promemoria automatici via email",
        "Flussi automatici per le clienti",
      ],
    },
  },

  hero: {
    badge: "Per i centri estetici che vogliono crescere",
    title: {
      before: "Basta caos negli appuntamenti,",
      highlight: "montagne di carta",
      connector: "e",
      end: "disdette last minute",
    },
    subtitle:
      "Appuntamenti, clienti, moduli e documentazione dei trattamenti in un'unica app chiara. Il tuo team si orienta da subito.",
    primaryCta: "Inizia la prova gratuita di 14 giorni",
    demoCta: "Prenota una demo",
    checks: ["Nessuna carta di credito", "Pronto in 2 minuti", "Migrazione dati gratuita"],
    rating: "4,6/5 su Google",
    tested: { before: "Già provato da ", highlight: "oltre 500 centri", after: "" },
    calendarLocale: "it-IT",
    newBookingLabel: "Nuova prenotazione",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow su laptop e tablet: agenda e schede clienti in un centro estetico moderno",
    },
    liveDemo: { href: { page: "try-features" }, label: "Prova le funzioni dal vivo" },
  },

  socialProof: {
    rating: "4,6/5 su Google",
    allReviews: "Vedi tutte le recensioni",
    tested: { before: "Già provato da ", highlight: "oltre 500 centri", after: "" },
    reviews: [
      {
        text: "L'assistenza è eccezionale: sempre gentile, cordiale e orientata alle soluzioni. Consigliatissimo!",
        name: "Velura Saarburg",
        studio: "Epilazione laser",
      },
      {
        text: "Prezzo imbattibile e facile da usare. La mia richiesta è stata realizzata in un giorno!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Sono passata da Phorest: ottimo rapporto qualità-prezzo. Lo consiglio in tutta coscienza.",
        name: "Sharon U.",
        studio: "Centro estetico",
      },
    ],
    note: "Recensioni Google, tradotte dal tedesco.",
  },

  studioDay: {
    eyebrow: "Un appuntamento, un solo sistema",
    title: "Dalla prenotazione al post-trattamento. In un'unica app.",
    subtitle: "Ecco come si svolge un appuntamento con Treatflow. Niente va inserito due volte.",
    steps: [
      {
        time: "lun · 21:14",
        module: "Prenotazione online",
        title: "Lena prenota la sera, dal divano.",
        text: "Nessuna telefonata e nessuna commissione sulla prenotazione. L'appuntamento è subito in agenda.",
        meta: "Trattamento viso · gio 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "mer · 10:45",
        module: "Promemoria",
        title: "Il promemoria parte in automatico.",
        text: "Il giorno prima, via email. Meno appuntamenti dimenticati, senza che nessuno debba pensarci.",
        meta: "Consegnato · confermato",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "gio · 10:40",
        module: "Moduli",
        title: "Anamnesi sul tablet, firmata.",
        text: "Il modulo finisce direttamente nella scheda cliente di Lena. Nessun foglio da ricopiare dopo.",
        meta: "Scheda di anamnesi · firmata digitalmente",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "gio · 11:40",
        module: "Documentazione",
        title: "Trattamento documentato, con foto.",
        text: "Parametri, prodotti e foto prima/dopo restano nello storico dei trattamenti.",
        meta: "3 foto · parametri salvati",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "ven · 09:00",
        module: "Post-trattamento",
        title: "Consigli post-trattamento e richiamo vanno da soli.",
        text: "Un consiglio di cura il giorno dopo, un promemoria per riprenotare qualche settimana più tardi. Impostato una volta come flusso per le clienti.",
        meta: "Flusso · prossimo passo tra 4 settimane",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Meno caos. Più tempo per le tue clienti.",
    subtitle: "Tutto ciò che serve al tuo centro, in un'unica app che il tuo team capisce subito.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Agenda appuntamenti", desc: "Tutti gli appuntamenti in una vista giornaliera e settimanale chiara.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Prenotazioni online", desc: "Le clienti prenotano da sole, anche fuori dagli orari di apertura.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Schede clienti", desc: "Storico, note e foto in un unico posto, sempre a portata di mano.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Moduli", desc: "Anamnesi e consensi digitali, compilati in anticipo tramite link.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Documentazione", desc: "Documenta ogni trattamento in modo accurato, con foto e parametri.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Incassa un acconto o l'intero importo online al momento della prenotazione.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Promemoria", desc: "I promemoria automatici via email riducono gli appuntamenti mancati.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Flussi per le clienti", desc: "Automatizza post-trattamento e riattivazione in più passaggi.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Inizia la prova gratuita di 14 giorni",
    ctaNote: "Nessuna carta di credito. Disdici quando vuoi.",
  },

  pricing: {
    eyebrow: "Prezzi trasparenti",
    titleBefore: "Prezzi semplici –",
    titleHighlight: " nessun costo nascosto",
    subtitle:
      "Treatflow parte da 39 €/mese (Basic) o 59 €/mese (Booking). Provalo gratis per 14 giorni: nessuna commissione, nessun rischio.",
    monthly: "Mensile",
    yearly: "Annuale",
    saveBadge: "Risparmi il 10%",
    perMonth: "/mese",
    perYear: "/anno",
    vatNote: "IVA esclusa",
    basic: {
      name: "Basic",
      monthlyPrice: "39 €",
      yearlyPrice: "421 €",
      yearlyHint: "35 €/mese • Risparmi 47 €/anno",
      description: "Anamnesi digitale, schede clienti e documentazione dei trattamenti – senza agenda appuntamenti.",
      included: [
        "Gestione clienti",
        "Moduli con firma digitale",
        "Documentazione con note vocali",
        "Foto prima/dopo",
        "Note e attività del team",
        "Shop e prodotti",
        "Statistiche",
        "Personale e ruoli",
        "Supporto via email",
      ],
      excluded: [
        "Agenda appuntamenti",
        "Prenotazioni online",
        "Automazioni e lista d'attesa",
        "Supporto prioritario",
      ],
      cta: "Prova gratis per 14 giorni",
    },
    booking: {
      name: "Booking",
      popular: "Più scelto",
      monthlyPrice: "59 €",
      yearlyPrice: "637 €",
      yearlyHint: "53 €/mese • Risparmi 71 €/anno",
      description: "Agenda appuntamenti, prenotazioni online e promemoria automatici per il tuo centro.",
      included: [
        "Tutto ciò che include Basic",
        "Agenda con colonne per operatrici e cabine",
        "Prenotazioni online senza commissioni",
        "Lista d'attesa",
        "Promemoria via email",
        "Flussi automatici per le clienti",
        "Codici sconto",
        "Pagina di prenotazione multilingue",
        "Integrazioni (Google Calendar, Zapier, assistenti IA)",
        "Supporto prioritario via email e chat",
      ],
      cta: "Prova gratis per 14 giorni",
    },
    trial: {
      title: "Prova gratuita di 14 giorni",
      text: "Nessuna carta di credito • Disdici quando vuoi • Migrazione dati gratuita",
      points: ["Nessun costo di attivazione", "Disdetta mensile", "Conforme al GDPR"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "Hai ancora domande?",
    titleHighlight: " Abbiamo le risposte!",
    subtitle: "Qui trovi le risposte alle domande più frequenti su Treatflow.",
    items: [
      {
        question: "Cos'è Treatflow?",
        answer:
          "Treatflow è un'app all-in-one per il lavoro quotidiano del centro: appuntamenti, schede clienti, moduli digitali e documentazione dei trattamenti sono collegati in un unico sistema, senza commissioni sulle prenotazioni. Sviluppato in Austria, con i dati su server nell'UE.",
      },
      {
        question: "A chi è rivolto Treatflow?",
        answer: [
          "Ai centri che eseguono trattamenti: dall'estetica alla medicina estetica, fino a laser, unghie, ciglia, trucco permanente, massaggi e spa. Scopri di più sul nostro ",
          { text: "software per cliniche estetiche", href: { page: "aesthetic-clinic-software" } },
          " e sulle ",
          { text: "schede clienti", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Per quanto tempo posso provare Treatflow gratis?",
        answer:
          "Puoi provare Treatflow gratis per 14 giorni. Nessuna carta di credito, nessun costo nascosto. Al termine della prova decidi tu se continuare.",
      },
      {
        question: "Che differenza c'è tra Basic e Booking?",
        answer: [
          "Basic (39 €/mese) include la ",
          { text: "gestione clienti", href: { page: "client-records" } },
          " illimitata, il marketplace dei moduli, il generatore di moduli con IA e lo shop. Booking (59 €/mese) aggiunge l'",
          { text: "agenda di prenotazione", href: { page: "appointment-calendar" } },
          " professionale con il tuo link di prenotazione e i ",
          { text: "promemoria appuntamenti", href: { page: "messaging" } },
          " automatici.",
        ],
      },
      {
        question: "Treatflow è conforme al GDPR?",
        answer: [
          "Sì. Treatflow è pienamente conforme al GDPR. Tutti i dati sono crittografati e conservati in sicurezza su server UE a Francoforte, in Germania. Questo vale anche per i ",
          { text: "moduli di anamnesi", href: { page: "forms" } },
          " digitali e per la ",
          { text: "documentazione dei trattamenti", href: { page: "treatment-documentation" } },
          ".",
        ],
      },
      {
        question: "Posso importare i dati delle mie clienti?",
        answer: [
          "Sì, ti aiutiamo a trasferire i dati gratuitamente. Il nostro supporto trasferisce in sicurezza i dati delle tue clienti nelle tue ",
          { text: "schede clienti digitali", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Treatflow funziona anche sullo smartphone?",
        answer:
          "Sì. Treatflow funziona su tutti i dispositivi: computer, tablet e smartphone. Accedi ai dati di clienti e appuntamenti ovunque tu sia.",
      },
      {
        question: "Cosa succede ai miei dati se disdico?",
        answer:
          "I tuoi dati restano sempre sotto il tuo controllo. Se disdici, puoi esportarli tutti. Li cancelliamo completamente solo dopo un periodo di transizione.",
      },
      {
        question: "Servono competenze tecniche per usare Treatflow?",
        answer:
          "No. Treatflow è molto semplice da usare. Non c'è nulla da installare: accedi dal browser e inizi subito. Per qualsiasi domanda, il nostro supporto è a tua disposizione.",
      },
      {
        question: "Come funziona il marketplace dei moduli?",
        answer: [
          "Nel marketplace trovi ",
          { text: "moduli", href: { page: "forms" } },
          " professionali per tutti i trattamenti estetici. Usali così come sono, adattali con il generatore IA o personalizzali nell'editor drag-and-drop. Le schede di anamnesi digitali sono pronte da usare subito.",
        ],
      },
      {
        question: "Posso gestire un numero illimitato di clienti?",
        answer:
          "Sì. Puoi gestire tutte le clienti che vuoi. Il sistema cresce insieme al tuo centro e la funzione di importazione ti permette di trasferire facilmente i dati esistenti.",
      },
    ],
    contactTitle: "Hai altre domande?",
    contactText:
      "Il nostro supporto è a tua disposizione. Scrivici un'email o prenota direttamente una consulenza.",
    demoCta: "Prenota una consulenza",
  },

  cta: {
    ariaLabel: "Invito all'azione",
    title: "Pronta a gestire il tuo centro con più chiarezza?",
    subtitle: "Inizia oggi e scopri quanto può essere semplice organizzare il tuo centro.",
    checks: [
      "Prova gratuita di 14 giorni",
      "Nessuna carta di credito",
      "Pronto in 2 minuti",
      "Assistenza personale",
    ],
    primaryCta: "Inizia la prova gratuita",
    demoCta: "Prenota una demo",
    note: "Disdici quando vuoi. Conforme al GDPR. Con assistenza personale.",
  },

  seo: {
    ariaLabel: "Ulteriori informazioni",
    intro: [
      "Treatflow è il ",
      { text: "gestionale per centri estetici", href: { page: "beauty-salon-software" } },
      " con agenda appuntamenti, prenotazioni online, schede clienti digitali, moduli e documentazione dei trattamenti: senza commissioni, conforme al GDPR e made in Austria.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Software per schede clienti" },
      { href: { page: "online-booking" }, label: "Prenotazione appuntamenti online" },
      { href: { page: "treatment-documentation" }, label: "Documentazione dei trattamenti" },
      { href: { page: "forms" }, label: "Schede di anamnesi digitali" },
      { href: { page: "messaging" }, label: "Promemoria appuntamenti" },
      { href: { page: "software-comparison" }, label: "Confronto software" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
