import type { HomeContent } from "./types";

/**
 * Homepage italiana. Stesse sezioni di `en.ts`, senza le funzioni disponibili solo
 * nell'area DACH (cassa, buoni regalo, WhatsApp, Lexware, SumUp, NiSV). Nessun video
 * del prodotto per ora: il filmato esistente è in tedesco.
 */
export const homeIt: HomeContent = {
  meta: {
    title: "Gestionale per centri estetici e medicina estetica",
    description:
      "Treatflow è il gestionale all-in-one per centri estetici e studi di medicina estetica: agenda appuntamenti, prenotazioni online, schede clienti, consenso informato digitale, documentazione dei trattamenti e promemoria. Prova gratuita di 14 giorni.",
    keywords: [
      "gestionale centro estetico",
      "gestionale per estetiste",
      "software centro estetico",
      "programma prenotazioni centro estetico",
      "gestionale medicina estetica",
      "agenda appuntamenti online centro estetico",
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
        "Treatflow è il gestionale all-in-one per centri estetici e studi di medicina estetica. Riunisce agenda, prenotazioni online, schede clienti, schede anamnestiche e consenso informato digitali, documentazione dei trattamenti, foto prima/dopo e follow-up automatici. Dati ospitati nell'UE.",
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
        "Schede anamnestiche e consenso informato digitali",
        "Documentazione dei trattamenti con foto",
        "Dettatura vocale delle note di trattamento",
        "Promemoria automatici via email",
        "Flussi automatici per i clienti",
      ],
    },
  },

  hero: {
    badge: "Per centri estetici che vogliono crescere",
    title: {
      before: "Basta caos in agenda,",
      highlight: "montagne di carta",
      connector: "e",
      end: "disdette all'ultimo minuto",
    },
    subtitle:
      "Appuntamenti, clienti, moduli e documentazione dei trattamenti in un'unica app semplice e intuitiva. Il tuo team la usa dal primo giorno.",
    primaryCta: "Inizia la prova gratuita di 14 giorni",
    demoCta: "Prenota una demo",
    checks: ["Senza carta di credito", "Attivo in 2 minuti", "Trasferimento dati gratuito"],
    rating: "4,6/5 su Google",
    tested: { before: "Già testato da ", highlight: "oltre 500 centri", after: "" },
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
    tested: { before: "Già testato da ", highlight: "oltre 500 centri", after: "" },
    reviews: [
      {
        text: "Assistenza eccezionale: sempre gentili, disponibili e attenti a trovare una soluzione. Consigliatissimo!",
        name: "Velura Saarburg",
        studio: "Epilazione laser",
      },
      {
        text: "Prezzo imbattibile e facilissimo da usare. Hanno realizzato la mia richiesta in un giorno!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Sono passata da Phorest a Treatflow: ottimo rapporto qualità-prezzo. Lo consiglio senza riserve.",
        name: "Sharon U.",
        studio: "Centro estetico",
      },
    ],
    note: "Recensioni Google, tradotte dal tedesco.",
  },

  studioDay: {
    eyebrow: "Un appuntamento, un unico sistema",
    title: "Dalla prenotazione al post-trattamento, tutto in un'unica app.",
    subtitle: "Ecco il percorso di un appuntamento con Treatflow. Nessun dato da inserire due volte.",
    steps: [
      {
        time: "lun · 21:14",
        module: "Prenotazione online",
        title: "Giulia prenota la sera, dal divano.",
        text: "Nessuna telefonata e nessuna commissione sulla prenotazione. L'appuntamento compare subito in agenda.",
        meta: "Trattamento viso · gio 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "mer · 10:45",
        module: "Promemoria",
        title: "Il promemoria parte da solo.",
        text: "Il giorno prima, via email. Meno appuntamenti dimenticati, senza che nessuno ci debba pensare.",
        meta: "Consegnato · confermato",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "gio · 10:40",
        module: "Moduli",
        title: "Scheda anamnestica compilata e firmata sul tablet.",
        text: "Il modulo finisce direttamente nella scheda cliente di Giulia. Niente fogli da ricopiare a fine giornata.",
        meta: "Scheda anamnestica · firmata digitalmente",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "gio · 11:40",
        module: "Documentazione",
        title: "Trattamento documentato, con foto.",
        text: "Parametri, prodotti e foto prima/dopo vengono salvati nello storico dei trattamenti.",
        meta: "3 foto · parametri salvati",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "ven · 09:00",
        module: "Post-trattamento",
        title: "Consigli post-trattamento e richiamo partono da soli.",
        text: "Il giorno dopo un consiglio per la cura a casa, qualche settimana più tardi un invito a riprenotare. Basta impostare il flusso una volta.",
        meta: "Flusso · prossimo passo tra 4 settimane",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Meno caos. Più tempo per i tuoi clienti.",
    subtitle: "Tutto ciò che serve al tuo centro, in un'unica app che il tuo team impara a usare in pochi minuti.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Agenda appuntamenti", desc: "Tutti gli appuntamenti in una vista giornaliera e settimanale chiara.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Prenotazioni online", desc: "I clienti prenotano da soli, anche a centro chiuso.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Schede clienti", desc: "Storico, note e foto in un unico posto, sempre a portata di mano.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Moduli", desc: "Schede anamnestiche e consensi informati, compilati online prima dell'appuntamento.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Documentazione", desc: "Ogni trattamento documentato con precisione, con foto e parametri.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Incassa online un acconto o l'intero importo già al momento della prenotazione.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Promemoria", desc: "I promemoria automatici via email riducono i no-show.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Flussi clienti", desc: "Post-trattamento e richiamo dei clienti inattivi, automatizzati in più passaggi.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Inizia la prova gratuita di 14 giorni",
    ctaNote: "Senza carta di credito. Disdici quando vuoi.",
  },

  pricing: {
    eyebrow: "Prezzi trasparenti",
    titleBefore: "Prezzi chiari,",
    titleHighlight: " nessun costo nascosto",
    subtitle:
      "Treatflow costa 39 €/mese (Basic) o 59 €/mese (Booking). Provalo gratis per 14 giorni: zero commissioni, zero rischi.",
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
      description: "Schede anamnestiche digitali, schede clienti e documentazione dei trattamenti, senza agenda appuntamenti.",
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
      popular: "Il più scelto",
      monthlyPrice: "59 €",
      yearlyPrice: "637 €",
      yearlyHint: "53 €/mese • Risparmi 71 €/anno",
      description: "Agenda appuntamenti, prenotazioni online e promemoria automatici per il tuo centro.",
      included: [
        "Tutto ciò che include Basic",
        "Agenda con colonne per operatori e cabine",
        "Prenotazioni online senza commissioni",
        "Lista d'attesa",
        "Promemoria via email",
        "Flussi automatici per i clienti",
        "Codici sconto",
        "Pagina di prenotazione multilingue",
        "Integrazioni (Google Calendar, Zapier, assistenti IA)",
        "Supporto prioritario via email e chat",
      ],
      cta: "Prova gratis per 14 giorni",
    },
    trial: {
      title: "Prova gratuita di 14 giorni",
      text: "Senza carta di credito • Disdici quando vuoi • Trasferimento dati gratuito",
      points: ["Nessun costo di attivazione", "Disdetta mensile", "Conforme al GDPR"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "Hai ancora domande?",
    titleHighlight: " Ecco le risposte!",
    subtitle: "Qui trovi le risposte alle domande più frequenti su Treatflow.",
    items: [
      {
        question: "Cos'è Treatflow?",
        answer:
          "Treatflow è un'app all-in-one per la gestione quotidiana del centro: appuntamenti, schede clienti, moduli digitali e documentazione dei trattamenti in un unico sistema, senza commissioni sulle prenotazioni. Sviluppato in Austria, con i dati su server nell'UE.",
      },
      {
        question: "A chi è rivolto Treatflow?",
        answer: [
          "A chi lavora su appuntamento con i trattamenti: centri estetici e studi di medicina estetica, ma anche epilazione laser, onicotecnica, extension ciglia, trucco permanente, massaggi e spa. Scopri di più sul nostro ",
          { text: "gestionale per la medicina estetica", href: { page: "aesthetic-clinic-software" } },
          " e sulle ",
          { text: "schede clienti", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Per quanto tempo posso provare Treatflow gratis?",
        answer:
          "Puoi provare Treatflow gratis per 14 giorni, senza carta di credito e senza costi nascosti. Alla fine della prova decidi tu se continuare.",
      },
      {
        question: "Che differenza c'è tra Basic e Booking?",
        answer: [
          "Basic (39 €/mese) include la ",
          { text: "gestione clienti", href: { page: "client-records" } },
          " senza limiti, il marketplace dei moduli, il generatore di moduli con IA e lo shop. Booking (59 €/mese) aggiunge l'",
          { text: "agenda appuntamenti", href: { page: "appointment-calendar" } },
          " professionale con il tuo link di prenotazione e i ",
          { text: "promemoria appuntamenti", href: { page: "messaging" } },
          " automatici.",
        ],
      },
      {
        question: "Treatflow è conforme al GDPR?",
        answer: [
          "Sì. Treatflow è pienamente conforme al GDPR. Tutti i dati sono crittografati e conservati in sicurezza su server nell'UE, a Francoforte (Germania). Lo stesso vale per le ",
          { text: "schede anamnestiche", href: { page: "forms" } },
          " digitali e per la ",
          { text: "documentazione dei trattamenti", href: { page: "treatment-documentation" } },
          ".",
        ],
      },
      {
        question: "Posso importare i dati dei miei clienti?",
        answer: [
          "Sì, e il trasferimento è gratuito. Il nostro supporto importa in sicurezza i dati dei tuoi clienti nelle nuove ",
          { text: "schede clienti digitali", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Treatflow funziona anche sullo smartphone?",
        answer:
          "Sì. Treatflow funziona su computer, tablet e smartphone. Clienti e appuntamenti sono sempre a portata di mano, ovunque tu sia.",
      },
      {
        question: "Cosa succede ai miei dati se disdico?",
        answer:
          "I tuoi dati restano sempre tuoi. Se disdici, puoi esportarli tutti. Li cancelliamo definitivamente solo dopo un periodo di transizione.",
      },
      {
        question: "Servono competenze tecniche per usare Treatflow?",
        answer:
          "No. Treatflow è pensato per essere semplice. Non c'è nulla da installare: accedi dal browser e inizi subito. Per qualsiasi dubbio, il nostro supporto è a tua disposizione.",
      },
      {
        question: "Come funziona il marketplace dei moduli?",
        answer: [
          "Nel marketplace trovi ",
          { text: "moduli", href: { page: "forms" } },
          " professionali per tutti i trattamenti estetici. Usali così come sono, adattali con il generatore IA o personalizzali nell'editor drag & drop. Le schede anamnestiche digitali sono pronte all'uso.",
        ],
      },
      {
        question: "C'è un limite al numero di clienti?",
        answer:
          "No. Puoi gestire tutti i clienti che vuoi. Treatflow cresce insieme al tuo centro e con l'importazione trasferisci facilmente i dati che hai già.",
      },
    ],
    contactTitle: "Hai altre domande?",
    contactText:
      "Il nostro supporto è a tua disposizione. Scrivici un'email o prenota subito una consulenza.",
    demoCta: "Prenota una consulenza",
  },

  cta: {
    ariaLabel: "Invito all'azione",
    title: "Vuoi gestire il tuo centro con più ordine e meno stress?",
    subtitle: "Inizia oggi e scopri quanto può essere semplice organizzare il lavoro in centro.",
    checks: [
      "Prova gratuita di 14 giorni",
      "Senza carta di credito",
      "Attivo in 2 minuti",
      "Assistenza personale",
    ],
    primaryCta: "Inizia la prova gratuita",
    demoCta: "Prenota una demo",
    note: "Disdici quando vuoi. Conforme al GDPR. Assistenza personale inclusa.",
  },

  seo: {
    ariaLabel: "Ulteriori informazioni",
    intro: [
      "Treatflow è il ",
      { text: "gestionale per centri estetici", href: { page: "beauty-salon-software" } },
      " con agenda appuntamenti, prenotazioni online, schede clienti digitali, moduli e documentazione dei trattamenti: senza commissioni, conforme al GDPR e made in Austria.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Gestionale schede clienti" },
      { href: { page: "online-booking" }, label: "Prenotazione online appuntamenti" },
      { href: { page: "treatment-documentation" }, label: "Documentazione dei trattamenti" },
      { href: { page: "forms" }, label: "Scheda anamnestica e consenso informato" },
      { href: { page: "messaging" }, label: "Promemoria appuntamenti" },
      { href: { page: "software-comparison" }, label: "Confronto gestionali" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
