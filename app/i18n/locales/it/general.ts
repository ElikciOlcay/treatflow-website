import {
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Gift,
  Globe,
  Languages,
  Link2,
  ListChecks,
  Lock,
  Mic,
  Plug,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Ticket,
  Users,
  Workflow,
} from "lucide-react";
import { BASE_URL } from "@/app/i18n/config";
import type { LocaleSiteContent } from "../types";

/* -------------------------------------------------------------------------- */
/* Home                                                                       */
/* -------------------------------------------------------------------------- */

const homeFaqs: { q: string; a: string }[] = [
  {
    q: "Cos'è Treatflow?",
    a: "Treatflow è il gestionale all-in-one per centri estetici e cliniche di medicina estetica. Riunisce in un'unica app agenda appuntamenti, prenotazioni online senza commissioni, schede clienti digitali, moduli di consenso, note di trattamento, documentazione fotografica e promemoria. Made in Austria, con server nell'UE.",
  },
  {
    q: "Treatflow è un gestionale per centri estetici senza commissioni sulle prenotazioni?",
    a: "Sì. Treatflow è il software del tuo centro, non un marketplace. I dati delle clienti restano tuoi e paghi un canone mensile trasparente. Nessuna commissione per prenotazione.",
  },
  {
    q: "A chi è rivolto Treatflow?",
    a: "Treatflow è pensato per centri estetici, cliniche di medicina estetica, studi di epilazione laser, studi di trucco permanente, centri unghie e ciglia, spa e centri massaggi che vogliono meno appuntamenti mancati, consensi conformi al GDPR e una documentazione dei trattamenti ordinata.",
  },
  {
    q: "Treatflow include moduli di consenso digitali per le cliniche estetiche?",
    a: "Sì. Le clienti compilano anamnesi e consenso informato dallo smartphone prima dell'appuntamento. Le risposte vengono salvate nella scheda cliente, con firma digitale dove serve.",
  },
  {
    q: "Gli studi di epilazione laser possono documentare i trattamenti in Treatflow?",
    a: "Sì. La documentazione dei trattamenti comprende parametri, note e foto prima/dopo per ogni seduta. Le note si possono anche dettare a voce.",
  },
  {
    q: "Le schede clienti digitali sono conformi al GDPR?",
    a: "Treatflow è ospitato su server UE a Francoforte, con crittografia SSL e backup giornalieri. Schede clienti, moduli e documentazione restano in un unico sistema progettato per il GDPR.",
  },
  {
    q: "Quanto costa Treatflow?",
    a: "Basic parte da 39 €/mese per schede clienti, moduli e documentazione. Booking parte da 59 €/mese e aggiunge agenda, prenotazioni online e promemoria. Prova gratuita di 14 giorni, senza carta di credito.",
  },
  {
    q: "Come posso iniziare?",
    a: "Registrati su app.treatflow.io e inizia la prova gratuita di 14 giorni. Nessuna carta di credito, disdici quando vuoi.",
  },
];

function faqSchema(inLanguage: string, items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

const homeDescription =
  "Gestionale all-in-one per centri estetici e cliniche estetiche: appuntamenti, prenotazioni online senza commissioni, schede clienti, moduli di consenso e documentazione dei trattamenti. Hosting UE conforme al GDPR. Made in Austria.";

const home: LocaleSiteContent["home"] = {
  locale: "it",
  earlyAccessHref: "",
  pricingHref: "/en/pricing",
  hero: {
    eyebrow: "Per centri estetici e cliniche di medicina estetica",
    titleLead: "Meno disdette last minute,",
    titleHighlight: "clienti più fedeli",
    titleTail: "e niente più scartoffie",
    subtitle:
      "Agenda, prenotazioni online senza commissioni, schede clienti, consensi informati e documentazione dei trattamenti – tutto in un'unica app chiara. Sviluppato in Austria per centri estetici di tutto il mondo.",
    primaryCta: "Prova gratis",
    trustItems: [
      "Nessuna carta di credito",
      "Pronto in 2 minuti",
      "Migrazione dati gratuita",
      "Supporto personale",
    ],
    studiosLabel: "Oltre 500 centri",
    ratingValue: "4,6/5",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Agenda appuntamenti Treatflow aperta su un laptop in un centro estetico moderno",
    },
  },
  aiCapsules: [
    {
      question: "Cos'è Treatflow?",
      answer:
        "Treatflow è un gestionale all-in-one per centri estetici e cliniche estetiche: agenda appuntamenti, prenotazioni online senza commissioni, schede clienti, consensi digitali, note di trattamento e documentazione fotografica. Server nell'UE. Prova gratuita di 14 giorni.",
    },
    {
      question: "Treatflow prende commissioni sulle prenotazioni?",
      answer:
        "No. Treatflow non è un marketplace. Il centro paga un piano mensile fisso (Basic da 39 €, Booking da 59 €) e tiene il 100% degli incassi delle prenotazioni.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "Crittografia SSL" },
    { icon: Server, text: "Server nell'UE" },
    { icon: Shield, text: "Backup giornalieri" },
    { icon: ShieldCheck, text: "Consensi conformi al GDPR" },
  ],
  features: {
    title: "Le funzioni principali in sintesi",
    subtitle: "Tutto organizzato in modo chiaro, così tu e il tuo team lavorate più velocemente.",
    ctaNote: "Nessuna carta di credito. Disdici quando vuoi.",
    items: [
      {
        icon: CalendarDays,
        label: "Agenda appuntamenti",
        desc: "Vista giornaliera, settimanale e mensile con colonne per operatrici e cabine.",
        color: "bg-indigo-100 text-indigo-600",
      },
      {
        icon: Users,
        label: "Prenotazioni online",
        desc: "Il tuo link di prenotazione, 24 ore su 24. Nessun marketplace, nessuna commissione.",
        color: "bg-emerald-100 text-emerald-600",
      },
      {
        icon: ClipboardCheck,
        label: "Moduli di consenso",
        desc: "Anamnesi e consenso digitali, firmati da smartphone o in centro.",
        color: "bg-orange-100 text-orange-600",
      },
      {
        icon: FileText,
        label: "Schede clienti",
        desc: "Storico, note, foto e moduli in un'unica scheda conforme al GDPR.",
        color: "bg-blue-100 text-blue-600",
      },
      {
        icon: Shield,
        label: "Documentazione trattamenti",
        desc: "Parametri, note e foto prima/dopo per ogni visita.",
        color: "bg-teal-100 text-teal-600",
      },
      {
        icon: Bell,
        label: "Promemoria",
        desc: "Promemoria automatici via WhatsApp ed email che riducono gli appuntamenti mancati.",
        color: "bg-rose-100 text-rose-600",
      },
      {
        icon: Workflow,
        label: "Flussi di lavoro digitali",
        desc: "Dalla prenotazione alla documentazione in un unico sistema.",
        color: "bg-purple-100 text-purple-600",
      },
    ],
  },
  extras: {
    title: "E Treatflow fa ancora di più",
    subtitle: "Funzioni extra che semplificano la giornata in centro – già incluse.",
    items: [
      {
        icon: BarChart3,
        label: "Statistiche e report",
        desc: "Fatturato, appuntamenti, clienti e trattamenti più richiesti a colpo d'occhio.",
      },
      {
        icon: Mic,
        label: "Dettatura con IA",
        desc: "Detta le note di trattamento – Treatflow le scrive per te.",
      },
      {
        icon: Languages,
        label: "Prenotazione multilingue",
        desc: "Le clienti prenotano nella propria lingua sulla tua pagina di prenotazione.",
      },
      {
        icon: Ticket,
        label: "Codici sconto",
        desc: "Promozioni e codici per nuove clienti nelle prenotazioni online.",
      },
      {
        icon: ListChecks,
        label: "Attività e note del team",
        desc: "Attività con scadenza e conferme di lettura per il tuo team.",
      },
    ],
  },
  faqs: {
    title: "Domande frequenti",
    pricingLinkLabel: "Vedi i prezzi",
    items: homeFaqs,
  },
  cta: {
    title: "Pronta per giornate più tranquille e meno appuntamenti mancati?",
    subtitle: "Inizia oggi con Treatflow – 14 giorni di prova gratuita, senza carta di credito.",
    note: "14 giorni gratis · Nessuna carta di credito · Disdici quando vuoi",
  },
  schemas: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      description: homeDescription,
      url: `${BASE_URL}/it`,
      inLanguage: "it",
      author: { "@type": "Organization", name: "Treatflow", url: BASE_URL },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "19",
        reviewCount: "19",
        bestRating: "5",
        worstRating: "1",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          description: "Schede clienti, moduli e documentazione dei trattamenti",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          description: "Agenda, prenotazioni online e promemoria automatici",
        },
      ],
      featureList: [
        "Agenda appuntamenti con colonne per operatrici e cabine",
        "Prenotazioni online senza commissioni",
        "Schede clienti digitali",
        "Moduli di anamnesi e consenso",
        "Documentazione dei trattamenti con foto",
        "Promemoria via WhatsApp ed email",
      ],
    },
    faq: faqSchema("it", homeFaqs),
  },
};

/* -------------------------------------------------------------------------- */
/* Pricing                                                                    */
/* -------------------------------------------------------------------------- */

const pricing: LocaleSiteContent["pricing"] = {
  eyebrow: "Prezzi trasparenti",
  titleBefore: "Prezzi semplici –",
  titleHighlight: "nessun costo nascosto",
  subtitle:
    "Scegli il piano giusto per il tuo centro. Inizia la prova gratuita di 14 giorni – senza carta di credito.",
  monthly: "Mensile",
  yearly: "Annuale",
  saveBadge: "Risparmi il 10%",
  perMonth: "/mese",
  perYear: "/anno",
  basicYearlyHint: "35 €/mese • Risparmi 47 €/anno",
  bookingYearlyHint: "53 €/mese • Risparmi 71 €/anno",
  exclVat: "IVA esclusa",
  popular: "Più scelto",
  cta: "Prova gratis",
  earlyAccessHref: "",
  basic: {
    name: "Basic",
    description:
      "Anamnesi digitale, moduli di consenso e documentazione dei trattamenti – senza agenda appuntamenti.",
    included: [
      "Schede clienti",
      "Moduli con firma digitale",
      "Documentazione trattamenti e note vocali",
      "Foto prima/dopo",
      "Note e attività del team",
      "Shop e prodotti",
      "Report",
      "Ruoli del personale",
      "Supporto via email",
    ],
    excluded: [
      "Agenda appuntamenti",
      "Prenotazioni online",
      "Automazioni e lista d'attesa",
      "Supporto prioritario",
    ],
  },
  booking: {
    name: "Booking",
    description:
      "Agenda appuntamenti, prenotazioni online e promemoria automatici per il tuo centro.",
    included: [
      "Tutto ciò che include Basic",
      "Agenda appuntamenti (operatrici e cabine)",
      "Prenotazioni online senza commissioni",
      "Lista d'attesa",
      "Promemoria via WhatsApp ed email",
      "Flussi automatici per le clienti",
      "Codici sconto",
      "Pagina di prenotazione multilingue",
      "Integrazioni (Zapier e altre)",
      "Supporto prioritario via email e chat",
    ],
  },
  trialBox: {
    title: "Prova gratuita di 14 giorni",
    text: "Nessuna carta di credito • Disdici quando vuoi • Migrazione dati gratuita",
    points: ["Nessun costo di attivazione", "Disdetta mensile", "Conforme al GDPR"],
  },
  comparison: {
    title: "Cosa è incluso?",
    subtitle: "Confronta nel dettaglio i due piani e scegli quello giusto per il tuo centro.",
    vatNote: "Tutti i prezzi si intendono IVA esclusa.",
    featureCol: "Funzione",
    rows: [
      { feature: "Schede clienti", basic: true, booking: true },
      { feature: "Moduli con firma digitale", basic: true, booking: true },
      { feature: "Documentazione trattamenti e note vocali", basic: true, booking: true },
      { feature: "Foto prima/dopo", basic: true, booking: true },
      { feature: "Note e attività del team", basic: true, booking: true },
      { feature: "Shop e prodotti", basic: true, booking: true },
      { feature: "Report", basic: true, booking: true },
      { feature: "Ruoli del personale", basic: true, booking: true },
      { feature: "Supporto via email", basic: true, booking: true },
      { feature: "Agenda appuntamenti (operatrici e cabine)", basic: false, booking: true },
      { feature: "Prenotazioni online senza commissioni", basic: false, booking: true },
      { feature: "Lista d'attesa", basic: false, booking: true },
      { feature: "Promemoria via WhatsApp ed email", basic: false, booking: true },
      { feature: "Flussi automatici per le clienti", basic: false, booking: true },
      { feature: "Codici sconto", basic: false, booking: true },
      { feature: "Pagina di prenotazione multilingue", basic: false, booking: true },
      { feature: "Integrazioni (Zapier)", basic: false, booking: true },
      { feature: "Supporto prioritario", basic: false, booking: true },
    ],
  },
  why: {
    title: "Perché Treatflow?",
    subtitle: "Prezzi fissi e trasparenti invece di costi nascosti e commissioni.",
    items: [
      { value: "0%", label: "Commissioni sulle prenotazioni" },
      { value: "0 €", label: "Costi di attivazione" },
      { value: "14 giorni", label: "di prova gratuita" },
      { value: "In qualsiasi momento", label: "puoi disdire" },
    ],
  },
  faq: {
    title: "Domande sui prezzi",
    subtitle: "Tutto quello che devi sapere sui prezzi di Treatflow.",
    items: [
      {
        question: "Quanto costa Treatflow?",
        answer:
          "Treatflow ha due piani: Basic da 39 €/mese per schede clienti, moduli e documentazione; Booking da 59 €/mese con agenda appuntamenti, prenotazioni online e promemoria automatici. Puoi provarli entrambi gratis per 14 giorni.",
      },
      {
        question: "Ci sono costi nascosti?",
        answer:
          "No. Treatflow ha prezzi fissi e trasparenti, senza commissioni sulle prenotazioni, costi di attivazione o extra nascosti.",
      },
      {
        question: "Posso disdire in qualsiasi momento?",
        answer:
          "Sì. Con la fatturazione mensile puoi disdire alla fine del periodo di fatturazione. Non c'è una durata minima del contratto.",
      },
      {
        question: "Conviene il piano Booking?",
        answer:
          "Sì, se ti servono prenotazioni online, promemoria automatici e un'agenda digitale. I centri con il piano Booking riferiscono spesso meno appuntamenti mancati e meno tempo al telefono.",
      },
      {
        question: "Posso usare Treatflow in Italia?",
        answer:
          "Sì. Puoi registrarti dall'Italia (e da qualsiasi altro Paese) e iniziare la prova gratuita di 14 giorni su app.treatflow.io – senza carta di credito.",
      },
    ],
  },
  meta: {
    title: "Prezzi del gestionale per centri estetici",
    description:
      "Prezzi Treatflow: Basic da 39 €/mese, Booking da 59 €/mese. Nessuna commissione sulle prenotazioni, 14 giorni di prova gratuita, senza carta di credito.",
  },
};

/* -------------------------------------------------------------------------- */
/* Features overview                                                          */
/* -------------------------------------------------------------------------- */

const featuresOverview: LocaleSiteContent["featuresOverview"] = {
  breadcrumbLabel: "Funzioni",
  homeHref: "/en",
  registerHref: "",
  pricingHref: "/en/pricing",
  eyebrow: "Tutte le funzioni",
  title: "Il gestionale per centri estetici e cliniche, dalla prenotazione alla documentazione",
  subtitle:
    "Treatflow riunisce agenda, prenotazioni online, schede clienti, moduli digitali, note di trattamento e follow-up in un unico spazio di lavoro. Pensato per centri estetici e cliniche di medicina estetica – non come marketplace di prenotazioni.",
  bullets: [
    "Nessuna commissione sulle prenotazioni",
    "Moduli, foto e note nella scheda cliente",
    "Dettatura vocale per le note di trattamento",
    "Server nell'UE, conforme al GDPR",
  ],
  primaryCta: "Prova gratis per 14 giorni",
  pricingCta: "Vedi i prezzi",
  heroImageSrc: "/images/lifestyle/hero-startseite-en.png",
  heroImageAlt:
    "Treatflow su laptop e tablet in una clinica estetica: agenda e schede clienti",
  capsules: [
    {
      question: "Quali funzioni include Treatflow?",
      answer:
        "Treatflow include agenda appuntamenti, prenotazioni online senza commissioni, schede clienti, moduli digitali di anamnesi e consenso, documentazione dei trattamenti con foto e dettatura vocale, promemoria, integrazioni, shop e buoni regalo.",
    },
    {
      question: "Treatflow è un gestionale all-in-one?",
      answer:
        "Sì. Treatflow è il software per centri estetici e cliniche estetiche in cui prenotazioni, schede, moduli, documentazione e follow-up stanno in un unico sistema. Non è un marketplace e non prende commissioni sulle prenotazioni.",
    },
  ],
  workflowTitle: "Come lavorano insieme le funzioni",
  workflowSubtitle:
    "Ogni passaggio porta al successivo: il team segue un unico percorso cliente invece di passare da uno strumento all'altro.",
  workflowSteps: [
    {
      href: "/en/online-booking",
      label: "Prenotazione online",
      desc: "Le clienti prenotano tramite il tuo link. Gli orari restano sincronizzati con l'agenda del centro.",
    },
    {
      href: "/en/forms",
      label: "Anamnesi e consenso",
      desc: "I moduli di anamnesi e consenso si possono compilare prima che la cliente arrivi.",
    },
    {
      href: "/en/client-records",
      label: "Schede clienti",
      desc: "Storico, note e moduli in un unico profilo che tutto il team può aprire.",
    },
    {
      href: "/en/treatment-documentation",
      label: "Documentazione",
      desc: "Note, dettatura vocale, parametri e foto restano collegati alla visita.",
    },
    {
      href: "/en/messaging",
      label: "Follow-up",
      desc: "Promemoria e messaggi automatici riducono gli appuntamenti mancati e fanno tornare le clienti.",
    },
  ],
  cardsTitle: "Le funzioni in sintesi",
  cardsSubtitle: "Ogni scheda apre la pagina dedicata alla funzione.",
  cards: [
    {
      href: "/en/appointment-calendar",
      icon: CalendarDays,
      color: "text-indigo-600",
      bg: "bg-indigo-50",
      title: "Agenda appuntamenti",
      desc: "Vista giornaliera, settimanale e mensile con colonne per operatrici o cabine. Le prenotazioni online finiscono nella stessa agenda.",
      highlights: ["Colonne per operatrici e cabine", "Drag & drop", "Sincronizzata con le prenotazioni online"],
    },
    {
      href: "/en/online-booking",
      icon: Link2,
      color: "text-rose-600",
      bg: "bg-rose-50",
      title: "Prenotazioni online",
      desc: "La tua pagina di prenotazione con disponibilità in tempo reale. Nessuna commissione da marketplace. Le conferme partono in automatico.",
      highlights: ["Link di prenotazione 24/7", "Nessuna commissione", "Acconti opzionali"],
    },
    {
      href: "/en/client-records",
      icon: Users,
      color: "text-emerald-600",
      bg: "bg-emerald-50",
      title: "Schede clienti",
      desc: "Storico, note, moduli e foto in un unico profilo che tutto il team può consultare prima della visita.",
      highlights: ["Profili ricercabili", "Moduli nella scheda", "Visibili a tutto il team"],
    },
    {
      href: "/en/forms",
      icon: ClipboardCheck,
      color: "text-orange-600",
      bg: "bg-orange-50",
      title: "Anamnesi e consenso",
      desc: "Invia i moduli di anamnesi e consenso prima dell'appuntamento. Le clienti li compilano dallo smartphone, firma digitale compresa.",
      highlights: ["Invio prima dell'arrivo", "Firma digitale", "Salvati nella scheda"],
    },
    {
      href: "/en/treatment-documentation",
      icon: FileText,
      color: "text-blue-600",
      bg: "bg-blue-50",
      title: "Documentazione trattamenti",
      desc: "Note di seduta, parametri e foto prima/dopo collegati alla visita. Detta le note a voce e, se vuoi, falle rifinire dall'IA.",
      highlights: ["Note e parametri", "Dettatura vocale", "Foto prima/dopo"],
    },
    {
      href: "/en/messaging",
      icon: Bell,
      color: "text-purple-600",
      bg: "bg-purple-50",
      title: "Promemoria e follow-up",
      desc: "Promemoria automatici via WhatsApp ed email prima degli appuntamenti e follow-up dopo i trattamenti. Tempi configurabili.",
      highlights: ["WhatsApp ed email", "Conferme di prenotazione", "Messaggi di riattivazione"],
    },
    {
      href: "/en/integrations",
      icon: Plug,
      color: "text-sky-600",
      bg: "bg-sky-50",
      title: "Integrazioni",
      desc: "Mantieni Treatflow sincronizzato con gli strumenti che già usi, come Google Calendar e Zapier.",
      highlights: ["Google Calendar", "Zapier", "Meno doppi inserimenti"],
    },
    {
      href: "/en/shop",
      icon: ShoppingBag,
      color: "text-amber-600",
      bg: "bg-amber-50",
      title: "Shop e magazzino",
      desc: "Vendi prodotti insieme ai trattamenti e gestisci le scorte nello stesso spazio di lavoro.",
      highlights: ["Vendita prodotti", "Magazzino", "Collegato alla cliente"],
    },
    {
      href: "/en/vouchers",
      icon: Gift,
      color: "text-violet-600",
      bg: "bg-violet-50",
      title: "Buoni regalo",
      desc: "Vendi e riscatta buoni regalo, compreso il saldo residuo, senza fogli Excel separati.",
      highlights: ["Vendita e riscatto", "Saldo residuo", "Controllo della validità"],
    },
    {
      href: "/en/studio-website",
      icon: Globe,
      color: "text-teal-600",
      bg: "bg-teal-50",
      title: "Sito web del centro",
      desc: "Un sito collegato alla tua pagina di prenotazione Treatflow, così chi visita può prenotare invece di limitarsi a guardare.",
      highlights: ["Mobile-first", "Prenotazione integrata", "Pensato per i centri"],
    },
  ],
  learnMore: "Scopri di più",
  stepLabel: (n: number) => `Passo ${n}`,
  showCheckoutSection: false,
  checkoutTitle: "",
  checkoutText: "",
  industriesTitle: "Per chi sono pensate queste funzioni",
  industriesSubtitle: "La stessa base di funzioni, adattata al modo di lavorare di ogni centro.",
  industries: [
    { href: "/en/beauty-salon-software", label: "Centri estetici" },
    { href: "/en/aesthetic-clinic-software", label: "Cliniche di medicina estetica" },
    { href: "/en/laser-hair-removal-software", label: "Epilazione laser" },
    { href: "/en/permanent-makeup-software", label: "Trucco permanente" },
    { href: "/en/lash-studio-software", label: "Extension ciglia" },
    { href: "/en/nail-salon-software", label: "Centri unghie" },
    { href: "/en/massage-software", label: "Massaggi e benessere" },
    { href: "/en/spa-wellness-software", label: "Spa" },
  ],
  relatedTitle: "Pagine correlate",
  relatedLinks: [
    { href: "/en/pricing", label: "Prezzi" },
    { href: "/en/software-comparison", label: "Confronto gestionali" },
    { href: "/en/treatflow-vs-fresha", label: "Treatflow vs Fresha" },
    { href: "/en/treatflow-vs-treatwell", label: "Treatflow vs Treatwell" },
  ],
  faqs: [
    {
      question: "Quali funzioni include Treatflow?",
      answer:
        "Treatflow include agenda appuntamenti, prenotazioni online senza commissioni, schede clienti, moduli digitali di anamnesi e consenso, documentazione dei trattamenti con foto e dettatura vocale, promemoria, integrazioni, shop, buoni regalo e un sito web opzionale per il centro.",
    },
    {
      question: "Treatflow è un gestionale all-in-one o solo uno strumento di prenotazione?",
      answer:
        "Treatflow è il software del tuo centro, non un marketplace. Prenotazioni, schede, moduli, documentazione e follow-up stanno in un unico sistema, così il team non deve passare da un'app all'altra.",
    },
    {
      question: "Dove sono salvati i dati?",
      answer:
        "Su server UE a Francoforte, con crittografia SSL e backup giornalieri. Treatflow è progettato per il GDPR e i dati delle clienti restano di proprietà del centro.",
    },
    {
      question: "Posso provare tutte le funzioni prima di pagare?",
      answer:
        "Sì. Puoi iniziare una prova gratuita di 14 giorni senza carta di credito e disdire quando vuoi.",
    },
  ],
  faqTitle: "Domande frequenti",
  faqBadge: "FAQ",
  bottomTitle: "Pronta a gestire il centro da un unico posto?",
  bottomText: "Inizia la prova gratuita – senza carta di credito, disdici quando vuoi.",
};

/* -------------------------------------------------------------------------- */
/* Comparisons                                                                */
/* -------------------------------------------------------------------------- */

const comparisons: LocaleSiteContent["comparisons"] = {
  "treatflow-vs-fresha": {
    competitor: "Fresha",
    title: "Treatflow vs Fresha",
    description:
      "Treatflow vs Fresha per centri estetici: gestionale con documentazione e consensi contro uno strumento di prenotazione gratuito finanziato dai pagamenti. Confronto onesto.",
    intro:
      "Fresha è molto diffuso come strumento di prenotazione gratuito. Treatflow è un gestionale a pagamento: le clienti restano tue, paghi un canone fisso e documenti trattamenti e consensi in un unico posto. Nessuna commissione da marketplace.",
    rows: [
      { feature: "Modello di business", treatflow: "SaaS, prezzo mensile fisso", competitor: "Base gratuita, guadagno sui pagamenti", treatflowOk: true, competitorOk: false },
      { feature: "Commissione sulle prenotazioni", treatflow: "Nessuna", competitor: "Nessuna quota marketplace, possibili commissioni sui pagamenti", treatflowOk: true, competitorOk: true },
      { feature: "Proprietà dei dati clienti", treatflow: "Le schede sono del centro", competitor: "Dipende da come usi la piattaforma", treatflowOk: true, competitorOk: false },
      { feature: "Moduli di anamnesi e consenso", treatflow: "Integrati, firmati, salvati nella scheda", competitor: "Limitati / non pensati per la documentazione estetica", treatflowOk: true, competitorOk: false },
      { feature: "Documentazione trattamenti", treatflow: "Note, parametri, foto prima/dopo", competitor: "Non è un sistema di documentazione", treatflowOk: true, competitorOk: false },
      { feature: "Prezzi", treatflow: "Da 39 €/mese, trasparenti", competitor: "Ingresso gratuito, costi che crescono con i pagamenti", treatflowOk: true, competitorOk: true },
      { feature: "Hosting", treatflow: "Server UE, conforme al GDPR", competitor: "Prodotto internazionale", treatflowOk: true, competitorOk: false },
    ],
    faqs: [
      {
        q: "Fresha è davvero gratuito?",
        a: "La parte di prenotazione può essere gratuita. Di solito Fresha guadagna sui pagamenti con carta e su prodotti aggiuntivi. Il costo reale dipende quindi dal tuo fatturato, non da un canone pubblicato.",
      },
      {
        q: "Qual è la differenza tra Treatflow e Fresha?",
        a: "Treatflow è un gestionale indipendente per centri estetici con agenda, schede clienti, moduli di consenso e documentazione dei trattamenti. Fresha è un prodotto di prenotazione nato come gratuito. Treatflow non prende commissioni sulle prenotazioni.",
      },
      {
        q: "Fresha include la documentazione dei trattamenti per le cliniche estetiche?",
        a: "Fresha non nasce come sistema di documentazione dei trattamenti con parametri e foto. Treatflow salva parametri, note e foto direttamente sulla visita.",
      },
      {
        q: "Posso passare da Fresha a Treatflow?",
        a: "Sì. Ti aiutiamo a migrare i dati delle clienti. Puoi provare Treatflow per 14 giorni senza carta di credito.",
      },
    ],
    ctaTitle: "Preferisci pagare un software invece di una quota su ogni visita?",
    keywords: [
      "alternativa a Fresha",
      "Treatflow vs Fresha",
      "Fresha alternativa centro estetico",
      "gestionale centro estetico senza commissioni",
    ],
  },
  "treatflow-vs-treatwell": {
    competitor: "Treatwell",
    title: "Treatflow vs Treatwell",
    description:
      "Treatflow vs Treatwell: tieni le tue clienti e paghi un canone mensile, oppure ti affidi a un marketplace che prende commissioni. Confronto per centri estetici.",
    intro:
      "Treatwell è un marketplace. Treatflow è il tuo software. Se cerchi visibilità su una piattaforma, Treatwell può aiutarti. Se vuoi gestire direttamente il rapporto con le clienti ed evitare commissioni, Treatflow è la scelta più adatta.",
    rows: [
      { feature: "Modello", treatflow: "Il gestionale del tuo centro", competitor: "Marketplace / piattaforma", treatflowOk: true, competitorOk: false },
      { feature: "Commissione", treatflow: "0% per prenotazione", competitor: "Commissione sulle prenotazioni dal marketplace", treatflowOk: true, competitorOk: false },
      { feature: "Dati delle clienti", treatflow: "Restano nell'account del centro", competitor: "Condivisi con la piattaforma", treatflowOk: true, competitorOk: false },
      { feature: "Prenotazione online", treatflow: "Il tuo link, il tuo brand", competitor: "Inserzione sulla piattaforma più strumenti", treatflowOk: true, competitorOk: true },
      { feature: "Moduli e documentazione", treatflow: "Parte centrale del prodotto", competitor: "Non è il compito principale di un marketplace", treatflowOk: true, competitorOk: false },
      { feature: "Prezzo", treatflow: "SaaS da 39 a 59 €/mese", competitor: "Basato su commissioni", treatflowOk: true, competitorOk: false },
    ],
    faqs: [
      {
        q: "Treatflow è un'alternativa a Treatwell senza commissioni?",
        a: "Sì, se cerchi un software e non un marketplace. Condividi il tuo link di prenotazione e paghi un piano mensile invece di una quota per ogni prenotazione.",
      },
      {
        q: "Treatwell include moduli di consenso e note di trattamento?",
        a: "I marketplace si concentrano su visibilità e prenotazioni. Treatflow è costruito attorno a schede clienti, moduli e documentazione, oltre che all'agenda.",
      },
      {
        q: "Posso usarli entrambi?",
        a: "Alcuni centri mantengono un marketplace per acquisire nuove clienti e gestiscono il lavoro quotidiano in Treatflow. Treatflow non richiede un account su alcun marketplace.",
      },
    ],
    ctaTitle: "Prenotazioni sul tuo link, senza quote al marketplace",
    keywords: [
      "alternativa a Treatwell",
      "Treatflow vs Treatwell",
      "Treatwell commissioni",
      "prenotazioni online centro estetico senza commissioni",
    ],
  },
  "software-comparison": {
    competitor: "Strumenti tipici",
    title: "Confronto gestionali per centri estetici",
    description:
      "Confronta i gestionali per centri estetici: marketplace, strumento di prenotazione gratuito o Treatflow. Nessuna commissione, schede conformi al GDPR, consensi e documentazione.",
    intro:
      "Molti centri combinano un'agenda, un widget di prenotazione, moduli cartacei e cartelle di foto. Treatflow sostituisce tutto questo con un'unica app: appuntamenti, prenotazioni online senza commissioni, schede clienti, moduli e documentazione dei trattamenti.",
    rows: [
      { feature: "All-in-one", treatflow: "Agenda, schede, moduli, documentazione", competitor: "Spesso più strumenti diversi", treatflowOk: true, competitorOk: false },
      { feature: "Commissione", treatflow: "Nessuna", competitor: "I marketplace trattengono una quota", treatflowOk: true, competitorOk: false },
      { feature: "GDPR / hosting UE", treatflow: "Server nell'UE", competitor: "Variabile", treatflowOk: true, competitorOk: false },
      { feature: "Moduli di consenso", treatflow: "Digitali, nella scheda cliente", competitor: "Cartacei o a pagamento extra", treatflowOk: true, competitorOk: false },
      { feature: "Prova gratuita", treatflow: "14 giorni, senza carta", competitor: "Variabile", treatflowOk: true, competitorOk: true },
    ],
    faqs: [
      {
        q: "Di quale software ha davvero bisogno un centro estetico?",
        a: "Di un'agenda collegata alle prenotazioni online, di una scheda cliente, di moduli di anamnesi e consenso e di un modo per documentare i trattamenti. Treatflow è costruito proprio attorno a queste esigenze.",
      },
      {
        q: "Qual è il miglior gestionale per centri estetici in Europa senza commissioni sulle prenotazioni?",
        a: "Treatflow è un gestionale SaaS sviluppato in Austria, con hosting nell'UE e nessuna commissione da marketplace. Piani da 39 €/mese.",
      },
    ],
    ctaTitle: "Metti Treatflow a confronto con gli strumenti che usi oggi",
    keywords: [
      "confronto gestionali centro estetico",
      "miglior gestionale centro estetico",
      "software per centri estetici confronto",
      "programma gestione centro estetico",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* About & contact                                                            */
/* -------------------------------------------------------------------------- */

const about: LocaleSiteContent["about"] = {
  metaTitle: "Chi siamo – Treatflow",
  metaDescription:
    "Treatflow è il gestionale all-in-one per centri estetici. Made in Austria, conforme al GDPR e ospitato nell'UE.",
  eyebrow: "Chi siamo",
  title: "Il software che restituisce tempo ai centri estetici",
  subtitle:
    "Treatflow nasce da un'osservazione semplice: chi lavora nel mondo beauty passa troppo tempo in burocrazia invece che con le proprie clienti. Abbiamo deciso di cambiare le cose – con un'unica app chiara che riunisce appuntamenti, clienti, moduli e documentazione.",
  valuesTitle: "I nostri valori",
  values: [
    {
      title: "Pensato per i centri",
      desc: "Sviluppiamo Treatflow insieme a professioniste del settore beauty: ogni funzione risolve un problema reale di tutti i giorni.",
    },
    {
      title: "Privacy al primo posto",
      desc: "Conforme al GDPR e ospitato su server nell'UE. I tuoi dati e quelli delle tue clienti restano protetti.",
    },
    {
      title: "Supporto personale",
      desc: "Persone vere che conoscono il settore beauty – e ti aiutano a partire e a sfruttare al meglio Treatflow.",
    },
    {
      title: "Made in Austria",
      desc: "Sviluppato e supportato in Europa, per centri in tutta Europa e oltre.",
    },
  ],
  ctaLabel: "Prova gratis",
};

const contact: LocaleSiteContent["contact"] = {
  metaTitle: "Contatta Treatflow",
  metaDescription:
    "Mettiti in contatto con il team Treatflow. Aiutiamo centri estetici e cliniche di medicina estetica a digitalizzare appuntamenti, moduli e documentazione dei trattamenti.",
  title: "Contatti",
  body: "Scrivici a hello@treatflow.io oppure inizia subito la tua prova gratuita.",
  cta: "Prova gratis",
};

/* -------------------------------------------------------------------------- */
/* Legal                                                                      */
/* -------------------------------------------------------------------------- */

const privacy: LocaleSiteContent["privacy"] = {
  metaTitle: "Informativa sulla privacy",
  metaDescription:
    "Informativa privacy di Treatflow: trattamento conforme al GDPR, hosting nell'UE a Francoforte, i tuoi diritti e come gestiamo i dati dei centri e del sito web.",
  title: "Informativa sulla privacy",
  intro:
    "Treatflow è un software per centri estetici e cliniche di medicina estetica. Trattiamo i dati personali in conformità al GDPR. La versione giuridicamente completa e vincolante è l'informativa in lingua tedesca disponibile su /datenschutz. Questa pagina in italiano riassume i punti su cui centri e clienti ci fanno più domande.",
  sections: [
    {
      heading: "1. Titolare del trattamento",
      html: `<p>Titolare del trattamento per questo sito web e per l'applicazione Treatflow:</p>
<p><strong>Treatflow</strong><br/>Olcay Elikci<br/>Bahnhofstrasse 17<br/>5500 Bischofshofen, Austria<br/>Email: <a href="mailto:hello@treatflow.io">hello@treatflow.io</a></p>`,
    },
    {
      heading: "2. Dove sono ospitati i dati",
      html: `<p>Treatflow è ospitato su server nell'UE (Francoforte). Le connessioni sono crittografate con SSL. Effettuiamo backup giornalieri. L'hosting è progettato per il GDPR. Non vendiamo i dati delle clienti e non siamo un marketplace di prenotazioni.</p>`,
    },
    {
      heading: "3. Dati che trattiamo",
      html: `<p><strong>Visitatori del sito:</strong> indirizzo IP, data e ora di accesso, browser, pagina di provenienza – necessari per erogare e proteggere il sito.</p>
<p><strong>Contatto e registrazione alla prova:</strong> nome, email e dati del centro che ci comunichi.</p>
<p><strong>All'interno dell'app (dati del centro):</strong> schede clienti, appuntamenti, moduli, firme, note di trattamento, foto e dati di fatturazione salvati dal centro. Di norma il centro è titolare del trattamento dei dati delle proprie clienti; Treatflow agisce come responsabile del trattamento sulla base di un accordo sul trattamento dei dati.</p>`,
    },
    {
      heading: "4. Finalità e basi giuridiche",
      html: `<ul>
<li>Fornitura del sito web e del software (contratto / legittimo interesse)</li>
<li>Account, fatturazione e assistenza (contratto)</li>
<li>Obblighi di legge (fiscali e contabili)</li>
<li>Cookie facoltativi di analisi e marketing solo previo consenso</li>
</ul>`,
    },
    {
      heading: "5. I tuoi diritti",
      html: `<p>In base alla normativa applicabile puoi chiedere l'accesso, la rettifica, la cancellazione, la limitazione e la portabilità dei dati, e opporti al trattamento. Puoi presentare reclamo a un'autorità di controllo, ad esempio il Garante per la protezione dei dati personali in Italia; l'autorità austriaca competente è la Datenschutzbehörde. Contattaci a hello@treatflow.io.</p>`,
    },
    {
      heading: "6. Integrazione con Google Calendar",
      html: `<p>I centri possono collegare facoltativamente il proprio account Google nell'app Treatflow (app.treatflow.io) in <strong>App → Google Calendar</strong>. Il collegamento è volontario e avviene solo quando un utente concede attivamente l'accesso tramite la schermata di consenso di Google.</p>
<p><strong>Dati a cui accediamo e perché:</strong></p>
<ul>
<li><strong>Profilo di base (openid, email, profilo):</strong> per associare l'account Google all'account Treatflow e mostrare quale account Google è collegato.</li>
<li><strong>Elenco dei calendari (calendar.readonly):</strong> per mostrarti i tuoi calendari e permetterti di scegliere quello da sincronizzare.</li>
<li><strong>Eventi del calendario (calendar.events):</strong> per creare, modificare ed eliminare appuntamenti e blocchi orari di Treatflow come eventi nel calendario scelto e per leggere gli eventi di quel calendario, così da mostrarli in Treatflow come orari bloccati o appuntamenti (sincronizzazione bidirezionale).</li>
</ul>
<p><strong>Dati che conserviamo:</strong> token di accesso e di aggiornamento (cifrati con AES), ID e indirizzo email dell'account Google, ID e nome del calendario scelto, ID, orari e titoli degli eventi sincronizzati e registri di sincronizzazione. Tutti i dati sono conservati nel nostro database nell'UE (Supabase, Francoforte).</p>
<p><strong>Utilizzo e condivisione:</strong> i dati utente di Google vengono utilizzati esclusivamente per fornire la sincronizzazione del calendario all'interno di Treatflow. Non li condividiamo con terzi, non li vendiamo, non li usiamo per pubblicità né per addestrare modelli di intelligenza artificiale. Nessuna persona visualizza questi dati, salvo tuo consenso esplicito (ad es. per una richiesta di assistenza), per motivi di sicurezza o per indagare su abusi, oppure se richiesto dalla legge.</p>
<p><strong>Revoca dell'accesso e cancellazione:</strong> puoi scollegare l'account in qualsiasi momento in Treatflow in App → Google Calendar con “Disconnetti”; i token salvati vengono eliminati. Puoi anche revocare l'accesso tramite <a href="https://myaccount.google.com/permissions">https://myaccount.google.com/permissions</a>.</p>
<p>L'utilizzo e il trasferimento ad altre app, da parte di Treatflow, delle informazioni ricevute dalle API di Google rispetteranno le <a href="https://developers.google.com/terms/api-services-user-data-policy">Norme sui dati utente dei servizi API di Google</a> (Google API Services User Data Policy), inclusi i requisiti di Uso limitato (Limited Use). Testo originale in inglese:</p>
<p lang="en"><em>Treatflow's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.</em></p>`,
    },
    {
      heading: "7. Versione completa in tedesco",
      html: `<p>Per cookie, responsabili del trattamento, tempi di conservazione e il testo giuridico completo consulta l'<a href="/datenschutz">informativa sulla privacy in tedesco</a>, che è la versione vincolante.</p>`,
    },
  ],
};

const terms: LocaleSiteContent["terms"] = {
  metaTitle: "Termini e condizioni",
  metaDescription:
    "Termini di Treatflow: SaaS per centri estetici, prezzi trasparenti, 14 giorni di prova, nessuna commissione sulle prenotazioni. Si applicano le condizioni generali (AGB) in tedesco.",
  title: "Termini e condizioni",
  intro:
    "Treatflow è un prodotto SaaS a pagamento per la gestione dei centri. Creando un account accetti questi termini. Il contratto vincolante sono le condizioni generali in lingua tedesca (AGB) disponibili su /agb. Questa pagina in italiano spiega i punti commerciali principali per i centri internazionali.",
  sections: [
    {
      heading: "1. Il servizio",
      html: `<p>Treatflow fornisce un software web per appuntamenti, prenotazioni online, schede clienti, moduli, documentazione dei trattamenti e strumenti correlati per i centri. Non è un marketplace e non applica commissioni sulle prenotazioni.</p>`,
    },
    {
      heading: "2. Piani, prova e disdetta",
      html: `<p>I piani partono da 39 €/mese (Basic) e 59 €/mese (Booking), IVA esclusa. La prova di 14 giorni non richiede una carta di credito. I piani mensili possono essere disdetti alla fine del periodo di fatturazione.</p>`,
    },
    {
      heading: "3. Responsabilità del centro",
      html: `<p>Sei responsabile dei dati che inserisci, dell'uso corretto di moduli e documentazione e del rispetto delle norme estetiche, sanitarie e fiscali del tuo Paese. Treatflow non sostituisce una consulenza legale o medica.</p>`,
    },
    {
      heading: "4. Disponibilità e assistenza",
      html: `<p>Puntiamo a un'elevata disponibilità e offriamo assistenza via email (assistenza prioritaria con il piano Booking). Possiamo aggiornare il prodotto. Gli aggiornamenti di sicurezza critici possono essere applicati senza preavviso.</p>`,
    },
    {
      heading: "5. Condizioni vincolanti in tedesco",
      html: `<p>Le condizioni contrattuali complete sono le <a href="/agb">condizioni generali (AGB) in tedesco</a>, che prevalgono su questa traduzione. Domande: hello@treatflow.io.</p>`,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export const general: Omit<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  home,
  homeMeta: {
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
  pricing,
  pricingKeywords: [
    "gestionale centro estetico prezzi",
    "software centro estetico costo",
    "gestionale estetista prezzo",
    "software prenotazioni online prezzi",
    "programma centro estetico abbonamento",
  ],
  featuresMeta: {
    title: "Funzioni del gestionale per centri estetici e cliniche",
    description:
      "Agenda appuntamenti, prenotazioni online senza commissioni, schede clienti, consensi digitali, documentazione dei trattamenti con dettatura vocale, promemoria e integrazioni – in un unico gestionale.",
    keywords: [
      "funzioni gestionale centro estetico",
      "software centro estetico funzionalità",
      "agenda appuntamenti centro estetico",
      "scheda cliente digitale estetista",
    ],
  },
  featuresOverview,
  comparisons,
  about,
  contact,
  privacy,
  terms,
};
