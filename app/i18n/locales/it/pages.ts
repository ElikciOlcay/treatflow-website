import {
  BarChart3,
  Bell,
  Calendar,
  CalendarDays,
  Camera,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileSignature,
  FileText,
  FolderOpen,
  Gift,
  Globe,
  LayoutDashboard,
  Link2,
  Mail,
  MessageCircle,
  Mic,
  Package,
  PenLine,
  Plug,
  Receipt,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { SeoPageKey } from "@/app/i18n/seo";
import type { IndustryPageKey } from "../../industry-slugs";
import type { LocaleSiteContent } from "../types";

/* -------------------------------------------------------------------------- */
/* Shared CTA copy                                                            */
/* -------------------------------------------------------------------------- */

const featureCta = {
  primaryCta: "Prova gratis per 14 giorni",
  bottomTitle: "Pronta a iniziare?",
  bottomText: "Inizia la prova gratuita – senza carta di credito, disdici quando vuoi.",
};

/* -------------------------------------------------------------------------- */
/* Core feature pages                                                         */
/* -------------------------------------------------------------------------- */

const coreFeatures: LocaleSiteContent["coreFeatures"] = {
  "appointment-calendar": {
    ...featureCta,
    eyebrow: "Agenda appuntamenti",
    title: "Tutti i tuoi appuntamenti, sempre in ordine",
    subtitle:
      "Gestisci l'agenda di tutto il centro in un unico posto – con viste giornaliere, settimanali e mensili che il team capisce a colpo d'occhio.",
    bullets: [
      "Vista giornaliera, settimanale e mensile",
      "Pianifica più operatrici e cabine",
      "Sposta gli appuntamenti in pochi secondi con il drag & drop",
      "Si sincronizza in automatico con le prenotazioni online",
    ],
    image: {
      src: "/images/lifestyle/terminkalender-wochenplanung.png",
      alt: "Agenda appuntamenti Treatflow con vista settimanale",
    },
    features: [
      { icon: CalendarDays, title: "Viste chiare", desc: "Passa da giorno a settimana a mese – sempre la panoramica giusta per il momento." },
      { icon: Users, title: "Pianificazione del team", desc: "Gestisci insieme gli appuntamenti di più operatrici, cabine e risorse." },
      { icon: RefreshCw, title: "Sempre sincronizzata", desc: "Le prenotazioni online arrivano direttamente in agenda – niente doppie prenotazioni." },
      { icon: Clock, title: "Spostamenti rapidi", desc: "Sposta o allunga gli appuntamenti con un semplice drag & drop." },
      { icon: Smartphone, title: "Su ogni dispositivo", desc: "Gestisci l'agenda da computer, tablet o smartphone." },
      { icon: Bell, title: "Promemoria automatici", desc: "Riduci gli appuntamenti mancati con promemoria automatici via WhatsApp ed email." },
    ],
    closingTitle: "Meno burocrazia, più tempo per le tue clienti",
    closingText:
      "Un'agenda ben organizzata è il cuore di ogni centro estetico. Treatflow tiene in ordine i tuoi appuntamenti, così tu e il tuo team potete concentrarvi su ciò che conta – trattamenti di qualità e clienti soddisfatte.",
    faqs: [
      {
        question: "Come funziona l'agenda appuntamenti di Treatflow?",
        answer:
          "Hai viste giornaliere, settimanali e mensili con colonne per operatrici o cabine. Le prenotazioni online finiscono nella stessa agenda, così eviti le doppie prenotazioni. Per spostare un appuntamento basta trascinarlo.",
      },
      {
        question: "L'agenda si sincronizza con le prenotazioni online?",
        answer:
          "Sì. Quando una cliente prenota sulla tua pagina di prenotazione Treatflow, l'appuntamento compare subito nell'agenda del centro. I promemoria possono partire via WhatsApp ed email.",
      },
    ],
    relatedLinks: [
      { href: "/en/online-booking", label: "Prenotazioni online" },
      { href: "/en/messaging", label: "Promemoria" },
      { href: "/en/client-records", label: "Schede clienti" },
      { href: "/en/beauty-salon-software", label: "Gestionale per centri estetici" },
    ],
  },
  "online-booking": {
    ...featureCta,
    eyebrow: "Prenotazioni online",
    title: "Le clienti prenotano da sole – 24 ore su 24",
    subtitle:
      "Una pagina di prenotazione con il tuo brand che riempie l'agenda anche fuori dall'orario di apertura – senza rincorrersi al telefono e senza doppie prenotazioni.",
    bullets: [
      "Prenotabile a qualsiasi ora",
      "Mostra solo la disponibilità reale",
      "Acconti opzionali per ridurre gli appuntamenti mancati",
      "Conferme e promemoria inclusi",
    ],
    image: {
      src: "/images/lifestyle/online-buchung-smartphone.png",
      alt: "Cliente che prenota un trattamento estetico dallo smartphone",
    },
    features: [
      { icon: Globe, title: "La tua pagina di prenotazione", desc: "Condividi un link di prenotazione pulito su sito web, Instagram e profilo Google." },
      { icon: Clock, title: "Disponibilità in tempo reale", desc: "Le clienti vedono solo gli orari davvero liberi – niente doppie prenotazioni." },
      { icon: CreditCard, title: "Acconti", desc: "Chiedi un acconto per i trattamenti più richiesti e proteggi il tuo tempo in cabina." },
      { icon: Bell, title: "Conferme automatiche", desc: "Conferma immediata e promemoria che riducono gli appuntamenti mancati." },
      { icon: Smartphone, title: "Mobile-first", desc: "Pensata per lo smartphone – dove prenota la maggior parte delle clienti." },
      { icon: Link2, title: "Agenda sincronizzata", desc: "Ogni prenotazione arriva direttamente nell'agenda del centro." },
    ],
    closingTitle: "Più cabine occupate, meno tempo al telefono",
    closingText:
      "Le prenotazioni online trasformano le ore vuote in fatturato. Treatflow tiene prenotazioni, promemoria e agenda in un unico flusso.",
    faqs: [
      {
        question: "Treatflow prende una commissione sulle prenotazioni online?",
        answer:
          "No. Treatflow è il software del tuo centro, non un marketplace. Condividi il tuo link di prenotazione e paghi un piano mensile. Nessuna commissione per prenotazione.",
      },
      {
        question: "Le clienti possono prenotare 24 ore su 24 senza un marketplace?",
        answer:
          "Sì. Hai una pagina di prenotazione con il tuo brand che mostra solo la disponibilità reale. Conferme e promemoria sono inclusi. Gli acconti opzionali aiutano a ridurre gli appuntamenti mancati.",
      },
    ],
    aiCapsules: [
      {
        question: "Treatflow gestisce le prenotazioni online?",
        answer:
          "Sì. Treatflow offre a centri estetici e cliniche estetiche una pagina di prenotazione propria. Le clienti prenotano in base alla disponibilità reale. Nessuna commissione da marketplace.",
      },
    ],
    problem: {
      title: "Il problema che Treatflow risolve",
      problem:
        "Telefonate a vuoto e commissioni dei marketplace riempiono la giornata, mentre in agenda restano buchi.",
      solution:
        "Treatflow ti dà un link di prenotazione tutto tuo che mostra solo la disponibilità reale. Le prenotazioni arrivano nell'agenda del centro e i promemoria partono in automatico.",
    },
    relatedLinks: [
      { href: "/en/appointment-calendar", label: "Agenda appuntamenti" },
      { href: "/en/messaging", label: "Promemoria" },
      { href: "/en/client-records", label: "Schede clienti" },
      { href: "/en/beauty-salon-software", label: "Gestionale per centri estetici" },
    ],
  },
  "client-records": {
    ...featureCta,
    eyebrow: "Schede clienti",
    title: "Lo storico di ogni cliente in un unico posto",
    subtitle:
      "Note, moduli, foto e storico dei trattamenti – pronti prima di ogni appuntamento, senza raccoglitori di carta.",
    bullets: [
      "Profili cliente completi",
      "Storico trattamenti e foto",
      "Moduli collegati alla scheda",
      "Ricerca rapida in tutto il centro",
    ],
    image: {
      src: "/images/lifestyle/kundenverwaltung-kartei.png",
      alt: "Panoramica della scheda cliente digitale in Treatflow",
    },
    features: [
      { icon: Users, title: "Profili cliente", desc: "Contatti, preferenze e note in un'unica scheda strutturata." },
      { icon: FileText, title: "Storico trattamenti", desc: "Vedi cosa è stato fatto, quando e con quali prodotti o impostazioni." },
      { icon: Camera, title: "Documentazione fotografica", desc: "Foto prima/dopo collegate al trattamento giusto." },
      { icon: ClipboardCheck, title: "Moduli collegati", desc: "Anamnesi e consensi restano nella scheda della cliente." },
      { icon: Search, title: "Ricerca veloce", desc: "Trova clienti e trattamenti passati in pochi secondi." },
      { icon: FolderOpen, title: "Archivio senza carta", desc: "Sostituisci i raccoglitori con un archivio digitale ricercabile." },
    ],
    closingTitle: "Conosci la tua cliente prima che si sieda",
    closingText:
      "Schede migliori significano trattamenti più sicuri e un'esperienza più personale – senza dover cercare tra le carte.",
    faqs: [
      {
        question: "Le schede clienti digitali di Treatflow sono conformi al GDPR?",
        answer:
          "Sì. Le schede sono salvate su server UE a Francoforte, con crittografia SSL e backup giornalieri. Moduli, foto e storico dei trattamenti stanno nella stessa scheda. I dati delle clienti restano di proprietà del centro.",
      },
      {
        question: "Cosa contiene una scheda cliente in Treatflow?",
        answer:
          "Dati di contatto, note, moduli di anamnesi e consenso, storico dei trattamenti e foto prima/dopo – ricercabili in tutto il centro, così il team è pronto prima di ogni visita.",
      },
    ],
    aiCapsules: [
      {
        question: "Posso tenere lo storico delle clienti in Treatflow?",
        answer:
          "Sì. Treatflow salva dati di contatto, note, moduli, storico dei trattamenti e foto in un'unica scheda cliente, così tutto il team può aprire lo stesso fascicolo prima di ogni visita.",
      },
    ],
    problem: {
      title: "Il problema che Treatflow risolve",
      problem: "Note, foto e moduli delle clienti sono sparsi tra cartelle, chat e dispositivi diversi.",
      solution:
        "Treatflow tiene lo storico in un'unica scheda: moduli, note, foto e trattamenti precedenti restano insieme.",
    },
    relatedLinks: [
      { href: "/en/forms", label: "Moduli di anamnesi e consenso" },
      { href: "/en/treatment-documentation", label: "Documentazione trattamenti" },
      { href: "/en/online-booking", label: "Prenotazioni online" },
      { href: "/en/aesthetic-clinic-software", label: "Gestionale per cliniche estetiche" },
    ],
  },
  forms: {
    ...featureCta,
    eyebrow: "Moduli di anamnesi e consenso",
    title: "Anamnesi e consenso informato in digitale",
    subtitle:
      "Invia i moduli di anamnesi e consenso prima dell'appuntamento. Parti dai modelli, crea i tuoi moduli con il generatore IA – oppure li configuriamo insieme a te.",
    bullets: [
      "Le clienti compilano i moduli prima di arrivare",
      "Firma digitale su qualsiasi dispositivo",
      "Modelli, generatore di moduli con IA o configurazione insieme a noi",
      "Salvati in modo sicuro nella scheda cliente",
    ],
    image: {
      src: "/images/lifestyle/formulare-digital-ausfuellen.png",
      alt: "Modulo di consenso digitale firmato su un tablet",
    },
    features: [
      { icon: Send, title: "Invio anticipato", desc: "Condividi i moduli tramite link prima della visita – meno attesa alla reception." },
      { icon: Smartphone, title: "Ottimizzati per smartphone", desc: "Le clienti li compilano dal telefono in pochi minuti." },
      { icon: FileSignature, title: "Firma digitale", desc: "Raccogli il consenso in modo sicuro, senza stampare nulla." },
      { icon: PenLine, title: "Modelli e generatore", desc: "Parti dai modelli, crea i tuoi moduli con il generatore IA oppure li configuriamo insieme a te." },
      { icon: ShieldCheck, title: "Archiviazione sicura", desc: "I moduli restano nella scheda cliente, su un'infrastruttura ospitata nell'UE." },
      { icon: ClipboardCheck, title: "Pronta per il trattamento", desc: "Il team vede i moduli compilati prima che l'appuntamento inizi." },
    ],
    closingTitle: "Inizia i trattamenti con le pratiche già sbrigate",
    closingText:
      "L'anamnesi digitale tutela il tuo centro e fa risparmiare tempo alla reception – ogni singolo giorno.",
    faqs: [
      {
        question: "Treatflow include moduli di consenso digitali per le cliniche estetiche?",
        answer:
          "Sì. Invii i modelli di anamnesi e consenso prima della visita. Le clienti li compilano dallo smartphone, firma digitale compresa. I moduli compilati vengono salvati nella scheda cliente.",
      },
      {
        question: "Le clienti possono compilare i moduli prima di arrivare?",
        answer:
          "Sì. Condividi un link via WhatsApp o email. Il team vede i moduli compilati prima dell'appuntamento, così i trattamenti iniziano in orario.",
      },
    ],
    aiCapsules: [
      {
        question: "Treatflow gestisce i moduli di consenso digitali?",
        answer:
          "Sì. Treatflow invia i modelli di anamnesi e consenso prima della visita. Le clienti li compilano dallo smartphone, firma digitale compresa. I moduli compilati vengono salvati nella scheda cliente.",
      },
    ],
    problem: {
      title: "Il problema che Treatflow risolve",
      problem: "L'anamnesi su carta rallenta la reception ed è difficile da ritrovare in seguito.",
      solution:
        "Treatflow invia i moduli digitali di anamnesi e consenso prima dell'appuntamento. Risposte e firme restano nella scheda cliente.",
    },
    relatedLinks: [
      { href: "/en/client-records", label: "Schede clienti" },
      { href: "/en/treatment-documentation", label: "Documentazione trattamenti" },
      { href: "/en/aesthetic-clinic-software", label: "Gestionale per cliniche estetiche" },
      { href: "/en/laser-hair-removal-software", label: "Software per epilazione laser" },
    ],
  },
  "treatment-documentation": {
    ...featureCta,
    eyebrow: "Documentazione trattamenti",
    title: "Documenta ogni trattamento in modo chiaro",
    subtitle:
      "Note, parametri e foto in una cartella trattamenti strutturata – con dettatura vocale, pensata per centri estetici e cliniche di medicina estetica.",
    bullets: [
      "Note di trattamento strutturate",
      "Dettatura vocale, rifinibile con l'IA",
      "Serie di foto prima/dopo",
      "Collegata allo storico della cliente",
    ],
    image: {
      src: "/images/lifestyle/dokumentation-vorher-nachher.png",
      alt: "Documentazione del trattamento con confronto fotografico prima/dopo",
    },
    features: [
      { icon: FileText, title: "Note di trattamento", desc: "Annota cosa hai fatto, i prodotti usati e la reazione della cliente." },
      { icon: Mic, title: "Dettatura vocale", desc: "Detta le note invece di scriverle. Treatflow trasforma la voce in testo e può rifinirlo con l'IA." },
      { icon: Camera, title: "Prove fotografiche", desc: "Allega le immagini prima/dopo al trattamento esatto." },
      { icon: ClipboardCheck, title: "Pronta per il richiamo", desc: "Alla visita successiva vedi subito l'ultimo trattamento." },
      { icon: ShieldCheck, title: "Supporto alla conformità", desc: "Una traccia chiara per i trattamenti legati a un consenso." },
      { icon: Users, title: "Visibile al team", desc: "Le colleghe vedono la stessa documentazione quando prendono in carico una cliente." },
    ],
    closingTitle: "Una documentazione che tutela e fa la differenza",
    closingText:
      "Cartelle trattamento chiare migliorano sicurezza, continuità e fiducia delle clienti – senza rallentare la tua giornata.",
    faqs: [
      {
        question: "Gli studi di epilazione laser possono documentare i trattamenti in Treatflow?",
        answer:
          "Sì. Per ogni seduta registri parametri, note e foto prima/dopo. Lo storico è collegato alla cliente, il che semplifica i richiami e i passaggi di consegne nel team.",
      },
      {
        question: "Le foto prima e dopo vengono salvate nella scheda cliente?",
        answer:
          "Sì. Le serie di foto sono collegate al trattamento esatto, non a un rullino generico, così alla visita successiva puoi confrontare i progressi.",
      },
      {
        question: "Posso dettare le note di trattamento in Treatflow?",
        answer:
          "Sì. Nella documentazione dei trattamenti puoi dettare le note invece di scriverle. Treatflow trasforma la voce in testo e può rifinirlo con l'IA. La nota viene salvata con quella visita.",
      },
    ],
    aiCapsules: [
      {
        question: "Posso documentare i trattamenti in Treatflow?",
        answer:
          "Sì. Treatflow salva note di trattamento, parametri e foto prima/dopo sulla visita della cliente. Puoi scrivere le note o dettarle a voce e, se vuoi, far rifinire il testo dall'IA.",
      },
    ],
    problem: {
      title: "Il problema che Treatflow risolve",
      problem:
        "Note e foto finiscono su smartphone, fogli di carta e chat, scollegate dalla visita.",
      solution:
        "Treatflow collega note e serie di foto al trattamento. Puoi dettare le note a voce, così la documentazione resta sulla visita senza rallentare la seduta.",
    },
    relatedLinks: [
      { href: "/en/client-records", label: "Schede clienti" },
      { href: "/en/forms", label: "Moduli di anamnesi e consenso" },
      { href: "/en/laser-hair-removal-software", label: "Software per epilazione laser" },
      { href: "/en/aesthetic-clinic-software", label: "Gestionale per cliniche estetiche" },
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* Extra feature pages                                                        */
/* -------------------------------------------------------------------------- */

const extraFeatures: LocaleSiteContent["extraFeatures"] = {
  vouchers: {
    ...featureCta,
    eyebrow: "Buoni regalo",
    title: "Vendi e riscatta buoni regalo senza confusione",
    subtitle:
      "Crea buoni regalo, vendili in centro e riscatta il saldo residuo in automatico – un modo semplice per aumentare il fatturato del centro.",
    bullets: [
      "Vendi buoni in centro o online",
      "Riscatta l'importo intero o una parte",
      "Saldo residuo calcolato in automatico",
      "Validità e storico cliente sempre chiari",
    ],
    image: {
      src: "/images/product-updates/rabattcodes-kalender.png",
      alt: "Buoni regalo e codici sconto Treatflow nell'agenda",
    },
    features: [
      { icon: Gift, title: "Buoni regalo", desc: "Offri buoni a valore fisso o legati a un trattamento specifico, che piacciono alle clienti." },
      { icon: Receipt, title: "Vendita in centro", desc: "Aggiungi un buono alla vendita in pochi secondi." },
      { icon: Ticket, title: "Riscatto semplice", desc: "Inserisci il codice o seleziona il buono quando la cliente torna." },
      { icon: RefreshCw, title: "Saldo residuo", desc: "I riscatti parziali aggiornano il saldo in automatico." },
      { icon: Calendar, title: "Controllo della validità", desc: "Imposta date di scadenza, così le offerte restano chiare e gestibili." },
      { icon: BarChart3, title: "Panoramica vendite", desc: "Vedi quanti buoni sono stati venduti, riscattati o sono ancora aperti." },
    ],
    closingTitle: "Buoni regalo che fanno davvero tornare le clienti",
    closingText:
      "I buoni regalo riempiono le giornate più tranquille e portano nuove clienti. Treatflow rende semplice venderli e riscattarli, così nulla si perde nei fogli Excel.",
  },
  messaging: {
    ...featureCta,
    eyebrow: "Messaggi e promemoria",
    title: "Meno appuntamenti mancati con WhatsApp ed email automatici",
    subtitle:
      "Invia in automatico conferme di prenotazione, promemoria e follow-up – via WhatsApp ed email, senza dover rincorrere le clienti a mano.",
    bullets: [
      "Conferme di prenotazione automatiche",
      "Promemoria WhatsApp ed email prima degli appuntamenti",
      "Follow-up dopo i trattamenti",
      "Messaggi di compleanno e di riattivazione",
    ],
    image: {
      src: "/images/lifestyle/sms-erinnerung-studio.png",
      alt: "Cliente che riceve su WhatsApp il promemoria dell'appuntamento dal centro estetico",
    },
    features: [
      { icon: Bell, title: "Promemoria appuntamenti", desc: "Riduci gli appuntamenti mancati con promemoria programmati via WhatsApp ed email." },
      { icon: Mail, title: "Conferme", desc: "Le clienti ricevono i dettagli chiari della prenotazione nel momento in cui prenotano." },
      { icon: MessageCircle, title: "Follow-up", desc: "Invia in automatico consigli post-trattamento o inviti a riprenotare." },
      { icon: Sparkles, title: "Auguri di compleanno", desc: "Resta nella mente delle clienti con auguri personali automatici." },
      { icon: Clock, title: "Tempi configurabili", desc: "Scegli tu quando partono promemoria e follow-up." },
      { icon: Smartphone, title: "WhatsApp ed email", desc: "Usa il canale giusto per l'urgenza e per i dettagli." },
    ],
    closingTitle: "Resta in contatto senza lavoro ripetitivo",
    closingText:
      "I messaggi automatici tengono le clienti informate e fedeli, mentre il team si concentra sui trattamenti – non sul riscrivere sempre gli stessi messaggi.",
    faqs: [
      {
        question: "Treatflow può inviare promemoria degli appuntamenti?",
        answer:
          "Sì. Treatflow invia promemoria automatici via WhatsApp ed email prima dell'appuntamento. Le conferme partono quando la cliente prenota.",
      },
      {
        question: "Treatflow può automatizzare i messaggi alle clienti?",
        answer:
          "Sì. Oltre ai promemoria puoi inviare follow-up dopo i trattamenti e messaggi di riattivazione. I tempi sono configurabili.",
      },
    ],
    aiCapsules: [
      {
        question: "Treatflow invia promemoria degli appuntamenti?",
        answer:
          "Sì. Treatflow invia conferme di prenotazione e promemoria automatici via WhatsApp o email, così le clienti dimenticano meno spesso l'appuntamento.",
      },
    ],
    problem: {
      title: "Il problema che Treatflow risolve",
      problem:
        "Appuntamenti mancati e follow-up dimenticati lasciano buchi che il team deve riempire al telefono.",
      solution:
        "Treatflow invia in automatico conferme, promemoria e follow-up, collegati all'appuntamento in agenda.",
    },
    relatedLinks: [
      { href: "/en/online-booking", label: "Prenotazioni online" },
      { href: "/en/appointment-calendar", label: "Agenda appuntamenti" },
      { href: "/en/beauty-salon-software", label: "Gestionale per centri estetici" },
      { href: "/en/laser-hair-removal-software", label: "Software per epilazione laser" },
    ],
  },
  integrations: {
    ...featureCta,
    eyebrow: "Integrazioni",
    title: "Collega Treatflow agli strumenti che usi già",
    subtitle:
      "Sincronizza calendari, contabilità e automazioni: i dati si inseriscono una volta sola – invece di essere ricopiati in tre sistemi diversi.",
    bullets: [
      "Sincronizzazione bidirezionale con Google Calendar",
      "Collegamenti con contabilità e fatturazione",
      "Zapier per oltre 7.000 app",
      "Meno doppi inserimenti, meno errori",
    ],
    image: {
      src: "/images/product-updates/swiss21-abaninja-integration.png",
      alt: "Integrazioni Treatflow che collegano il gestionale del centro ad altri strumenti",
    },
    features: [
      { icon: CalendarDays, title: "Google Calendar", desc: "Calendario personale e agenda del centro sincronizzati in tempo reale." },
      { icon: Receipt, title: "Contabilità", desc: "Crea fatture e sincronizza le clienti senza ricopiare i dati." },
      { icon: Zap, title: "Zapier", desc: "Avvia flussi in Fogli Google, CRM, email e altro." },
      { icon: RefreshCw, title: "Meno doppio lavoro", desc: "Inserisci i dati una volta in Treatflow – il resto si aggiorna da sé." },
      { icon: Workflow, title: "Automazioni su misura", desc: "Reagisci a nuove prenotazioni o moduli senza scrivere codice." },
      { icon: Plug, title: "Ecosistema in crescita", desc: "Collega gli strumenti su cui il tuo centro fa già affidamento." },
    ],
    closingTitle: "Un'unica fonte di dati per il tuo centro",
    closingText:
      "Le integrazioni mettono Treatflow al centro del lavoro quotidiano, mentre i tuoi strumenti preferiti restano aggiornati – in automatico.",
    faqs: [
      {
        question: "Treatflow si integra con Google Calendar?",
        answer:
          "Sì. Treatflow può sincronizzarsi con Google Calendar, così gli appuntamenti personali e quelli del centro restano allineati.",
      },
      {
        question: "Treatflow funziona con Zapier?",
        answer:
          "Sì. Con il piano Booking puoi collegare Treatflow ad altri strumenti tramite Zapier, ad esempio fogli di calcolo o flussi email.",
      },
    ],
    aiCapsules: [
      {
        question: "Treatflow si integra con Google Calendar?",
        answer:
          "Sì. Treatflow può sincronizzarsi con Google Calendar, così gli appuntamenti personali e quelli del centro restano allineati.",
      },
    ],
    relatedLinks: [
      { href: "/en/online-booking", label: "Prenotazioni online" },
      { href: "/en/appointment-calendar", label: "Agenda appuntamenti" },
      { href: "/en/features", label: "Tutte le funzioni" },
    ],
  },
  shop: {
    ...featureCta,
    eyebrow: "Vendita prodotti e magazzino",
    title: "Vendi prodotti e tieni sotto controllo le scorte",
    subtitle:
      "Aggiungi prodotti senza limiti, vendili in centro e tieni traccia di chi ha comprato cosa – con un magazzino semplice, così i prodotti più venduti non finiscono senza che te ne accorga.",
    bullets: [
      "Prodotti e categorie illimitati",
      "Vendita diretta in centro",
      "Livelli di scorta e avvisi semplici",
      "Storico acquisti per cliente",
    ],
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Panoramica vendita prodotti e magazzino di Treatflow per centri estetici",
    },
    features: [
      { icon: Package, title: "Catalogo prodotti", desc: "Aggiungi tutti gli articoli che ti servono, con prezzi e categorie." },
      { icon: ShoppingBag, title: "Vendita in centro", desc: "Vendi dopo il trattamento senza un sistema di shop separato." },
      { icon: BarChart3, title: "Panoramica magazzino", desc: "Controlla le scorte e riordina prima di rimanere senza." },
      { icon: Camera, title: "Foto dei prodotti", desc: "Immagini chiare dei prodotti per il team in reception." },
      { icon: TrendingUp, title: "Fatturato extra", desc: "Trasforma ogni visita in un'occasione di vendita." },
      { icon: Users, title: "Storico acquisti", desc: "Sai quale cliente ha acquistato quale prodotto e quando." },
    ],
    closingTitle: "Vendita prodotti integrata nel flusso degli appuntamenti",
    closingText:
      "Treatflow tiene la vendita dei prodotti accanto ad appuntamenti e schede clienti – così la rivendita diventa una parte naturale della visita, non un'altra incombenza.",
  },
  "studio-website": {
    ...featureCta,
    eyebrow: "Sito web del centro",
    title: "Un sito su misura che trasforma le visite in prenotazioni",
    subtitle:
      "Un sito professionale per il tuo centro – mobile-first, pronto per la SEO e collegato alle prenotazioni online di Treatflow, così le nuove clienti prenotano in pochi tocchi.",
    bullets: [
      "Design su misura per il tuo brand",
      "Ottimizzato per smartphone",
      "Prenotazione online integrata",
      "Pensato per centri estetici e di bellezza",
    ],
    image: {
      src: "/images/og-website-service.jpg",
      alt: "Sito web su misura di Treatflow per un centro estetico",
    },
    features: [
      { icon: Sparkles, title: "Design su misura", desc: "Un look in linea con il tuo centro – non l'ennesimo template generico." },
      { icon: Smartphone, title: "Mobile-first", desc: "La maggior parte delle visite arriva da smartphone. Il tuo sito lì fa un'ottima figura." },
      { icon: Globe, title: "Basi SEO", desc: "Struttura e contenuti chiari, così le clienti ti trovano online." },
      { icon: Link2, title: "Prenotazione integrata", desc: "Collega il tuo link di prenotazione Treatflow e gli orari di apertura." },
      { icon: Camera, title: "Mostra il tuo lavoro", desc: "Presenta trattamenti, team e atmosfera in modo convincente." },
      { icon: LayoutDashboard, title: "Pensato per i centri", desc: "Costruito per estetica, laser, unghie, ciglia e medicina estetica." },
    ],
    closingTitle: "Il tuo sito come canale di prenotazione – non come brochure",
    closingText:
      "Progettiamo siti dall'aspetto curato che convertono. Insieme alle prenotazioni Treatflow, ogni visita può diventare un appuntamento.",
  },
};

/* -------------------------------------------------------------------------- */
/* Industry pages                                                             */
/* -------------------------------------------------------------------------- */

type FeatureLinkKey =
  | "online-booking"
  | "client-records"
  | "forms"
  | "treatment-documentation"
  | "pricing";

const featureLinks: Record<FeatureLinkKey, { href: string; label: string }> = {
  "online-booking": { href: "/en/online-booking", label: "Prenotazioni online" },
  "client-records": { href: "/en/client-records", label: "Schede clienti" },
  forms: { href: "/en/forms", label: "Moduli di consenso" },
  "treatment-documentation": {
    href: "/en/treatment-documentation",
    label: "Documentazione trattamenti",
  },
  pricing: { href: "/en/pricing", label: "Prezzi" },
};

const industryLabels: Record<IndustryPageKey, string> = {
  "beauty-salon-software": "Gestionale per centri estetici",
  "aesthetic-clinic-software": "Gestionale per cliniche estetiche",
  "laser-hair-removal-software": "Software per epilazione laser",
  "permanent-makeup-software": "Software per trucco permanente",
  "tattoo-studio-software": "Software per studi di tatuaggi",
  "nail-salon-software": "Software per centri unghie",
  "lash-studio-software": "Software per extension ciglia",
  "spa-wellness-software": "Software per spa e wellness",
  "massage-software": "Software per centri massaggi",
};

type IndustryBody = {
  serviceName: string;
  serviceDescription: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  aiCapsules: { question: string; answer: string }[];
  whatTitle: string;
  whatParas: string[];
  audiences: string[];
  problems: { problem: string; solution: string }[];
  features: InternationalPageContent["features"]["items"];
  benefits: string[];
  marketTitle: string;
  marketParas: string[];
  highlights: string[];
  aiSummary: string;
  faqs: { question: string; answer: string }[];
  siblingKeys: IndustryPageKey[];
  featureKeys: FeatureLinkKey[];
  workflow?: InternationalPageContent["workflow"];
  images?: InternationalPageContent["images"];
};

function industry(key: IndustryPageKey, body: IndustryBody): InternationalPageContent {
  return {
    pageKey: key as SeoPageKey,
    locale: "it",
    canonicalPath: `/en/${key}`,
    serviceName: body.serviceName,
    serviceDescription: body.serviceDescription,
    areaServed: ["IT"],
    ctaPrimaryLabel: "Prova gratis",
    ctaBottomTitle: "Pronta a gestire il tuo centro da un unico posto?",
    ctaBottomText:
      "Inizia la prova gratuita di 14 giorni – senza carta di credito, disdici quando vuoi.",
    trustTrialLabel: "14 giorni di prova gratuita",
    trustBadges: [
      "Progettato per il GDPR",
      "Server nell'UE",
      "Crittografia SSL",
      "14 giorni di prova gratuita",
    ],
    hero: {
      marketLabel: "Italia",
      eyebrow: body.eyebrow,
      h1: body.h1,
      subtitle: body.subtitle,
    },
    aiCapsules: body.aiCapsules,
    whatIsTreatflow: { title: body.whatTitle, paragraphs: body.whatParas },
    whoIsItFor: { title: "Per chi è pensato?", audiences: body.audiences },
    problems: { title: "Quali problemi risolve Treatflow?", items: body.problems },
    features: { title: "Funzioni principali", items: body.features },
    benefits: { title: "Vantaggi", items: body.benefits },
    marketFit: {
      title: body.marketTitle,
      paragraphs: body.marketParas,
      highlights: body.highlights,
    },
    aiSummary: { title: "In sintesi", text: body.aiSummary },
    faqs: body.faqs,
    internalLinksTitle: "Pagine correlate",
    internalLinks: [
      ...body.siblingKeys.map((k) => ({ href: `/en/${k}`, label: industryLabels[k] })),
      ...body.featureKeys.map((fk) => featureLinks[fk]),
    ],
    workflow: body.workflow,
    images: body.images,
  };
}

const faqWhatIs = (answer: string) => ({ question: "Cos'è Treatflow?", answer });

const faqStart = {
  question: "Come posso iniziare?",
  answer:
    "Registrati su app.treatflow.io e inizia la prova gratuita di 14 giorni. Nessuna carta di credito. Disponibile anche in Italia.",
};

const faqHosting = {
  question: "Dove sono ospitati i dati?",
  answer:
    "Treatflow ospita i dati su server nell'UE (Francoforte) ed è progettato per la conformità al GDPR.",
};

const industries: LocaleSiteContent["industries"] = {
  "beauty-salon-software": industry("beauty-salon-software", {
    serviceName: "Gestionale per centri estetici",
    serviceDescription:
      "Gestionale per centri estetici con prenotazioni online, schede clienti, moduli di consenso e documentazione dei trattamenti.",
    eyebrow: "Gestionale per centri estetici",
    h1: "Il gestionale per centri estetici moderni",
    subtitle:
      "Prenotazioni online, schede clienti, moduli di consenso e documentazione dei trattamenti in un'unica piattaforma – pensata per centri estetici che vogliono meno burocrazia e un'esperienza migliore per le clienti.",
    aiCapsules: [
      {
        question: "Qual è il miglior gestionale per centri estetici in Europa?",
        answer:
          "Per i centri estetici in Europa che cercano prenotazioni online senza commissioni, schede clienti digitali, moduli di consenso e documentazione dei trattamenti in un unico sistema, Treatflow è un'ottima scelta. Made in Austria, server nell'UE, piani da 39 €/mese.",
      },
      {
        question: "Treatflow prende commissioni sulle prenotazioni?",
        answer:
          "No. Treatflow è il software del tuo centro, non un marketplace. Nessuna commissione per appuntamento. Mantieni il pieno controllo sulla tua pagina di prenotazione e sui dati delle clienti.",
      },
    ],
    whatTitle: "Cos'è Treatflow per i centri estetici?",
    whatParas: [
      "Treatflow sostituisce tanti strumenti sparsi con un unico sistema: agenda, profili cliente, moduli digitali e note di trattamento lavorano insieme, dalla prenotazione al follow-up.",
      "I centri estetici usano Treatflow per offrire la prenotazione online, avere sempre a portata di mano lo storico delle clienti e documentare i trattamenti in modo uniforme in tutto il team.",
    ],
    audiences: [
      "Centri estetici e day spa",
      "Istituti di bellezza con protocolli di trattamento strutturati",
      "Team con più operatrici che vogliono abbandonare gli strumenti sparsi",
      "Centri indipendenti pronti a lasciarsi alle spalle l'agenda di carta",
    ],
    problems: [
      {
        problem: "Appuntamenti gestiti tra messaggi e agenda di carta",
        solution: "Un'unica agenda con prenotazione online e promemoria automatici.",
      },
      {
        problem: "Storico delle clienti sparso tra più strumenti",
        solution: "Schede clienti digitali con note, foto e storico delle visite.",
      },
      {
        problem: "Moduli di consenso cartacei",
        solution: "Anamnesi e consenso digitali compilati prima dell'appuntamento.",
      },
      {
        problem: "Appuntamenti mancati e buchi dell'ultimo minuto",
        solution: "Promemoria via WhatsApp ed email che riducono le assenze.",
      },
    ],
    features: [
      { icon: Link2, title: "Prenotazioni online", desc: "Pagina di prenotazione personale, 24/7, senza commissioni." },
      { icon: Users, title: "Schede clienti", desc: "Profili, storico e note in un unico posto." },
      { icon: ClipboardCheck, title: "Moduli di consenso", desc: "Anamnesi digitale prima di ogni trattamento." },
      { icon: FileText, title: "Note di trattamento", desc: "Documentazione strutturata per ogni visita, anche con dettatura vocale." },
      { icon: Camera, title: "Documentazione fotografica", desc: "Foto prima/dopo collegate alla cliente." },
      { icon: Bell, title: "Promemoria", desc: "WhatsApp ed email per ridurre gli appuntamenti mancati." },
    ],
    benefits: [
      "Meno lavoro amministrativo tra prenotazioni e documentazione",
      "Un'esperienza migliore per la cliente fin dalla prima prenotazione",
      "Schede strutturate per i passaggi di consegne nel team",
      "Flussi di lavoro digitali e moderni in un'unica app",
      "Server nell'UE, progettato per il GDPR",
    ],
    marketTitle: "Perché i centri estetici scelgono Treatflow",
    marketParas: [
      "Molti strumenti generici si fermano agli appuntamenti. Treatflow collega la prenotazione alle schede clienti e alla documentazione dei trattamenti – proprio dove un centro professionale ha bisogno di ordine.",
    ],
    highlights: [
      "Prenotazioni online senza commissioni per appuntamento",
      "Schede clienti digitali con storico dei trattamenti",
      "Anamnesi e consenso compilati prima della visita",
      "Note di trattamento e documentazione fotografica",
      "Hosting nell'UE, progettato per il GDPR",
    ],
    aiSummary:
      "Treatflow è un gestionale per centri estetici con prenotazioni online, schede clienti, moduli di consenso, note di trattamento, documentazione fotografica e promemoria. Per centri estetici, day spa e istituti di bellezza. Server nell'UE.",
    faqs: [
      faqWhatIs(
        "Treatflow è il gestionale all-in-one per centri estetici e cliniche estetiche. Riunisce agenda appuntamenti, prenotazioni online senza commissioni, schede clienti digitali, moduli di consenso, documentazione dei trattamenti e promemoria. Made in Austria, server nell'UE."
      ),
      {
        question: "Treatflow è un gestionale per centri estetici senza commissioni sulle prenotazioni?",
        answer:
          "Sì. Treatflow è il software del tuo centro, non un marketplace. I dati delle clienti restano tuoi e paghi un canone mensile trasparente a partire da 39 €. Nessuna commissione per prenotazione.",
      },
      {
        question: "Le schede clienti digitali sono conformi al GDPR?",
        answer:
          "Treatflow è ospitato su server UE a Francoforte, con crittografia SSL e backup giornalieri. Schede clienti, moduli e documentazione restano in un unico sistema progettato per il GDPR.",
      },
      faqStart,
      {
        question: "Un centro estetico può inviare promemoria e far riprenotare le clienti con Treatflow?",
        answer:
          "Sì. I promemoria automatici via WhatsApp ed email fanno parte del piano Booking. I follow-up aiutano le clienti a prenotare la visita successiva sulla tua pagina di prenotazione.",
      },
    ],
    siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
    workflow: {
      title: "Come un centro estetico usa Treatflow",
      subtitle: "Dalla prima prenotazione alla visita successiva, il centro lavora in un unico sistema.",
      steps: [
        { href: "/en/online-booking", label: "La cliente prenota online", desc: "La cliente usa il tuo link di prenotazione. L'appuntamento compare nell'agenda del centro." },
        { href: "/en/forms", label: "Moduli prima dell'arrivo", desc: "Anamnesi o consenso possono essere inviati prima dell'appuntamento, così la reception non deve raccogliere fogli." },
        { href: "/en/client-records", label: "Apri il profilo cliente", desc: "Note, storico e prodotti usati in precedenza sono in un'unica scheda." },
        { href: "/en/treatment-documentation", label: "Documenta la visita", desc: "Note di trattamento, dettatura vocale opzionale e foto restano collegate a questo appuntamento." },
        { href: "/en/messaging", label: "Promemoria e nuova prenotazione", desc: "I promemoria automatici riducono le assenze. I follow-up aiutano la cliente a prenotare di nuovo." },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/hero-startseite-en.png",
        alt: "Treatflow su laptop e tablet in un centro estetico: agenda e schede clienti",
      },
      mockup: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Cliente che prenota un appuntamento al centro estetico dallo smartphone",
      },
    },
  }),

  "aesthetic-clinic-software": industry("aesthetic-clinic-software", {
    serviceName: "Gestionale per cliniche estetiche",
    serviceDescription:
      "Software per cliniche di medicina estetica: documentazione dei trattamenti, moduli di consenso, schede pazienti e prenotazioni online.",
    eyebrow: "Gestionale per cliniche estetiche",
    h1: "Il gestionale per cliniche estetiche con documentazione strutturata",
    subtitle:
      "Moduli di consenso, note di trattamento, documentazione fotografica e schede clienti per cliniche di medicina estetica – un'unica piattaforma dalla prenotazione al follow-up.",
    aiCapsules: [
      {
        question: "Di quale software ha bisogno una clinica di medicina estetica?",
        answer:
          "Una clinica estetica ha bisogno di moduli di consenso, documentazione dei trattamenti, archivio fotografico e storico dei pazienti in un unico sistema. Treatflow offre prenotazioni online, schede clienti digitali e note di trattamento strutturate per filler, trattamenti della pelle e medicina estetica.",
      },
      {
        question: "Treatflow è adatto alla medicina estetica?",
        answer:
          "Sì. Treatflow è pensato per cliniche in cui contano la qualità della documentazione e la sicurezza dei pazienti – non solo il numero di appuntamenti. Consensi, note e foto restano collegati a ogni profilo.",
      },
    ],
    whatTitle: "Cos'è Treatflow per le cliniche estetiche?",
    whatParas: [
      "Treatflow accompagna l'intero percorso del paziente: prenotazione, anamnesi, consenso, documentazione del trattamento e follow-up in un'unica piattaforma condivisa.",
      "È pensato per cliniche in cui contano la qualità della documentazione e la sicurezza dei pazienti – non solo il volume di appuntamenti.",
    ],
    audiences: [
      "Cliniche estetiche che offrono filler, tossina botulinica e ringiovanimento cutaneo",
      "Studi di medicina estetica",
      "Cliniche dermo-estetiche con trattamenti basati su protocolli",
      "Cliniche con più medici che hanno bisogno di una documentazione uniforme",
    ],
    problems: [
      {
        problem: "Note di trattamento disomogenee",
        solution: "Modelli di documentazione strutturati e schede condivise.",
      },
      {
        problem: "Consenso non raccolto prima della procedura",
        solution: "Moduli di consenso digitali compilati prima del trattamento.",
      },
      {
        problem: "Foto salvate su dispositivi personali",
        solution: "Documentazione fotografica collegata al profilo del paziente.",
      },
      {
        problem: "Reception e ambulatori usano strumenti diversi",
        solution: "Un unico flusso dalla prenotazione alle note e al follow-up.",
      },
    ],
    features: [
      { icon: FileText, title: "Documentazione trattamenti", desc: "Note, dettatura vocale, protocolli e storico." },
      { icon: ClipboardCheck, title: "Moduli di consenso", desc: "Consenso informato digitale con archiviazione sicura." },
      { icon: Camera, title: "Documentazione fotografica", desc: "Foto cliniche per ogni visita." },
      { icon: Users, title: "Schede pazienti", desc: "L'intero storico estetico in un unico profilo." },
      { icon: Link2, title: "Prenotazioni online", desc: "Consulenze prenotabili online." },
      { icon: Workflow, title: "Flussi di lavoro digitali", desc: "Dall'anamnesi al trattamento al follow-up." },
    ],
    benefits: [
      "Documentazione uniforme tra tutti i medici e le operatrici",
      "Una traccia chiara del consenso per ogni procedura",
      "Meno burocrazia tra reception e ambulatori",
      "Un'esperienza professionale per il paziente fin dalla prima prenotazione",
      "Server nell'UE, progettato per il GDPR",
    ],
    marketTitle: "Perché le cliniche estetiche scelgono Treatflow",
    marketParas: [
      "Dietro un'esperienza professionale per il paziente serve una documentazione affidabile. Treatflow collega la prenotazione alle schede e alle note di trattamento, senza complessità inutili.",
    ],
    highlights: [
      "Prenotazioni online senza commissioni per appuntamento",
      "Schede digitali con storico dei trattamenti",
      "Anamnesi e consenso compilati prima della visita",
      "Note di trattamento e documentazione fotografica",
      "Hosting nell'UE, progettato per il GDPR",
    ],
    aiSummary:
      "Treatflow è un gestionale per cliniche estetiche con documentazione dei trattamenti, moduli di consenso, schede pazienti, documentazione fotografica e prenotazioni online. Per cliniche e studi di medicina estetica. Server nell'UE.",
    faqs: [
      faqWhatIs(
        "Treatflow è un software all-in-one per centri estetici, cliniche di medicina estetica e studi laser. Riunisce prenotazioni online, schede clienti, moduli di consenso, documentazione dei trattamenti e promemoria."
      ),
      {
        question: "Treatflow include moduli di consenso digitali per le cliniche estetiche?",
        answer:
          "Sì. I pazienti compilano anamnesi e consenso dallo smartphone prima della visita. Risposte e firme vengono salvate nella scheda, così la clinica ha una traccia chiara per filler e altri trattamenti estetici.",
      },
      {
        question: "Più medici possono condividere un unico account della clinica?",
        answer:
          "Sì. Schede, moduli di consenso e note di trattamento sono condivisi con tutto il team, così la documentazione resta uniforme.",
      },
      faqStart,
      {
        question: "Le cliniche estetiche possono salvare le foto prima e dopo?",
        answer:
          "Sì. Le serie di foto sono collegate alla visita e restano nella scheda, così il professionista successivo può confrontare i progressi.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
    featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
    workflow: {
      title: "Come una clinica estetica usa Treatflow",
      subtitle: "Storico strutturato, consenso, documentazione e follow-up per tutto il team.",
      steps: [
        { href: "/en/online-booking", label: "Prenotazione della consulenza", desc: "Il paziente prenota una consulenza o un trattamento sulla pagina di prenotazione della clinica." },
        { href: "/en/forms", label: "Anamnesi e consenso", desc: "Anamnesi e consenso digitali vengono compilati prima della procedura e salvati nella scheda." },
        { href: "/en/client-records", label: "Storico strutturato", desc: "Trattamenti precedenti, note e controindicazioni sono visibili a ogni professionista." },
        { href: "/en/treatment-documentation", label: "Documenta e fotografa", desc: "Note di seduta, dettatura vocale opzionale e foto prima/dopo restano collegate alla visita." },
        { href: "/en/messaging", label: "Follow-up", desc: "Promemoria e messaggi post-trattamento tengono in agenda il prossimo appuntamento." },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Modulo di consenso digitale compilato su tablet in una clinica estetica",
      },
      mockup: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Foto prima e dopo il trattamento salvate in Treatflow",
      },
    },
  }),

  "laser-hair-removal-software": industry("laser-hair-removal-software", {
    serviceName: "Software per epilazione laser",
    serviceDescription:
      "Software per studi di epilazione laser: monitoraggio delle sedute, moduli di consenso, documentazione fotografica e prenotazioni online.",
    eyebrow: "Software per studi laser",
    h1: "Il software per l'epilazione laser e i cicli di trattamento",
    subtitle:
      "Tieni traccia delle sedute, documenta il consenso e gestisci le prenotazioni – pensato per studi laser e IPL che vogliono schede strutturate.",
    aiCapsules: [
      {
        question: "Di quale software ha bisogno uno studio laser?",
        answer:
          "Uno studio laser ha bisogno di schede clienti con lo storico dei cicli di trattamento, moduli di consenso, note di seduta, documentazione fotografica e promemoria degli appuntamenti. Treatflow offre prenotazioni online e documentazione strutturata per l'epilazione laser.",
      },
      {
        question: "Treatflow può seguire i pacchetti con più sedute?",
        answer:
          "Sì. Ogni seduta viene documentata nella scheda cliente, così vedi sempre i progressi, le note sulle impostazioni e quando è prevista la prossima seduta.",
      },
    ],
    whatTitle: "Cos'è Treatflow per gli studi laser?",
    whatParas: [
      "I trattamenti laser si svolgono in più sedute. Treatflow registra ogni seduta, conserva il consenso e le informazioni sul fototipo e ricorda alla cliente quando è prevista la seduta successiva.",
      "Gli studi usano un'unica agenda per le prenotazioni, un unico profilo cliente per lo storico e moduli digitali per l'anamnesi – senza commissioni da marketplace.",
    ],
    audiences: [
      "Studi di epilazione laser",
      "Centri IPL con pacchetti di più sedute",
      "Centri estetici che offrono trattamenti laser",
      "Team con molte prenotazioni ed esigenze di documentazione",
    ],
    problems: [
      {
        problem: "Si perde il filo dei progressi tra una seduta e l'altra",
        solution: "Storico e note per ogni seduta nella scheda cliente.",
      },
      {
        problem: "Informazioni sul consenso mancanti",
        solution: "Anamnesi e consenso digitali salvati prima di ogni ciclo.",
      },
      {
        problem: "Le clienti dimenticano le sedute successive",
        solution: "Promemoria e nuova prenotazione semplice dalla tua pagina.",
      },
      {
        problem: "Foto e note su dispositivi diversi",
        solution: "Documentazione fotografica collegata a ogni profilo cliente.",
      },
    ],
    features: [
      { icon: Zap, title: "Monitoraggio sedute", desc: "Documenta ogni seduta con note, anche tramite dettatura vocale." },
      { icon: ClipboardCheck, title: "Consenso e anamnesi", desc: "Fototipo e controindicazioni sempre in scheda." },
      { icon: Camera, title: "Documentazione fotografica", desc: "Foto dei progressi per ogni zona trattata." },
      { icon: Calendar, title: "Pianificazione dei cicli", desc: "Pianifica gli appuntamenti successivi." },
      { icon: Link2, title: "Prenotazioni online", desc: "Le clienti prenotano online le sedute successive." },
      { icon: Bell, title: "Promemoria", desc: "Promemoria automatici degli appuntamenti." },
    ],
    benefits: [
      "Una visione chiara del ciclo di trattamento di ogni cliente",
      "Consenso strutturato per ogni nuova cliente",
      "Meno richiami manuali per le sedute saltate",
      "Documentazione professionale e uniforme nel team",
      "Server nell'UE, progettato per il GDPR",
    ],
    marketTitle: "Perché gli studi laser scelgono Treatflow",
    marketParas: [
      "Gli studi laser uniscono un alto volume di prenotazioni a forti esigenze di documentazione. Treatflow collega la prenotazione alle schede, così ogni seduta arricchisce lo storico della cliente.",
    ],
    highlights: [
      "Prenotazioni online senza commissioni per appuntamento",
      "Storico delle sedute nelle schede clienti digitali",
      "Moduli di consenso prima di ogni ciclo",
      "Documentazione fotografica e promemoria",
      "Hosting nell'UE, progettato per il GDPR",
    ],
    aiSummary:
      "Treatflow è un software per l'epilazione laser con monitoraggio delle sedute, moduli di consenso, documentazione fotografica, prenotazioni online e promemoria. Per studi laser e IPL. Server nell'UE.",
    faqs: [
      faqWhatIs(
        "Treatflow è un software all-in-one per centri estetici, cliniche di medicina estetica e studi laser. Riunisce prenotazioni online, schede clienti, moduli di consenso, documentazione dei trattamenti e promemoria."
      ),
      {
        question: "Gli studi di epilazione laser possono documentare i trattamenti in Treatflow?",
        answer:
          "Sì. La documentazione dei trattamenti comprende parametri, note e foto prima/dopo per ogni seduta, collegati alla scheda della cliente.",
      },
      {
        question: "A chi è rivolta questa pagina?",
        answer:
          "A studi di epilazione laser e IPL che hanno bisogno di monitorare le sedute, raccogliere il consenso e gestire in modo affidabile le nuove prenotazioni.",
      },
      faqStart,
      {
        question: "Treatflow può salvare zone trattate e note di seduta per il laser?",
        answer:
          "Sì. Ogni seduta può includere parametri, zone trattate, note e foto nella scheda cliente. Puoi scrivere le note o dettarle a voce. Il prossimo appuntamento del ciclo parte con lo storico completo.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
    workflow: {
      title: "Come uno studio laser usa Treatflow",
      subtitle: "Ogni seduta parte dalla precedente: consenso, zone trattate, note, foto e prossima prenotazione.",
      steps: [
        { href: "/en/online-booking", label: "La cliente prenota una seduta", desc: "Clienti nuove e abituali prenotano dal tuo link, comprese le sedute successive." },
        { href: "/en/forms", label: "Anamnesi e consenso", desc: "Anamnesi e consenso vengono compilati prima della prima seduta e salvati nella scheda." },
        { href: "/en/client-records", label: "Controlla lo storico", desc: "Note sul fototipo, impostazioni precedenti e zone trattate sono in un unico profilo." },
        { href: "/en/treatment-documentation", label: "Documenta la seduta", desc: "Parametri, zone trattate, note di seduta (scritte o dettate) e foto restano collegati alla visita." },
        { href: "/en/messaging", label: "Segui il ciclo", desc: "I promemoria riportano la cliente per la seduta successiva del ciclo." },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Documentazione di un trattamento laser con foto prima e dopo",
      },
      mockup: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Modulo di consenso digitale per un appuntamento di epilazione laser",
      },
    },
  }),

  "permanent-makeup-software": industry("permanent-makeup-software", {
    serviceName: "Software per trucco permanente",
    serviceDescription:
      "Software per artisti del trucco permanente: moduli di consenso, note sui pigmenti, documentazione fotografica, schede clienti e prenotazioni online.",
    eyebrow: "Software per trucco permanente",
    h1: "Il software per il trucco permanente e chi lavora con i pigmenti",
    subtitle:
      "Consenso, documentazione dei pigmenti, pianificazione dei ritocchi e schede clienti – pensato per studi PMU che hanno bisogno di uno storico preciso.",
    aiCapsules: [
      {
        question: "Di quale software ha bisogno uno studio di trucco permanente?",
        answer:
          "Uno studio PMU ha bisogno di un consenso dettagliato, note su pigmenti e tecniche, foto prima/dopo, pianificazione dei ritocchi e storico delle clienti. Treatflow riunisce prenotazioni, moduli e documentazione con hosting nell'UE conforme al GDPR.",
      },
      {
        question: "Posso documentare pigmenti e ritocchi?",
        answer:
          "Sì. Note di trattamento e foto restano nel profilo della cliente, così ogni ritocco parte dalla seduta precedente.",
      },
    ],
    whatTitle: "Cos'è Treatflow per il trucco permanente?",
    whatParas: [
      "Il trucco permanente richiede una documentazione precisa: pigmenti, zone, tecniche e note sulla guarigione. Treatflow conserva questo storico nella scheda cliente insieme a consenso e foto.",
      "Le artiste usano la prenotazione online per consulenze e ritocchi, moduli digitali prima delle procedure e promemoria perché le clienti tornino puntuali.",
    ],
    audiences: [
      "Artiste di trucco permanente e microblading",
      "Studi PMU con più postazioni",
      "Centri estetici che offrono PMU per sopracciglia, labbra ed eyeliner",
      "Team che documentano pigmenti e cicli di ritocco",
    ],
    problems: [
      {
        problem: "Dettagli sui pigmenti persi tra una seduta e l'altra",
        solution: "Note di trattamento strutturate in ogni profilo cliente.",
      },
      {
        problem: "Consenso su carta prima delle procedure",
        solution: "Consenso digitale compilato prima dell'appuntamento.",
      },
      {
        problem: "Date dei ritocchi annotate sul quaderno",
        solution: "Agenda, promemoria e nuova prenotazione online in un unico posto.",
      },
      {
        problem: "Foto prima/dopo difficili da ritrovare",
        solution: "Foto collegate alla scheda cliente e alla visita.",
      },
    ],
    features: [
      { icon: FileText, title: "Note su pigmenti e tecnica", desc: "Documenta colori, aghi e zone trattate." },
      { icon: ClipboardCheck, title: "Moduli di consenso", desc: "Consenso digitale prima di ogni procedura." },
      { icon: Camera, title: "Documentazione fotografica", desc: "Foto prima/dopo nel profilo cliente." },
      { icon: Calendar, title: "Pianificazione ritocchi", desc: "Programma controlli di guarigione e ritocchi." },
      { icon: Users, title: "Schede clienti", desc: "L'intero storico PMU in un unico posto." },
      { icon: Bell, title: "Promemoria", desc: "Meno ritocchi saltati." },
    ],
    benefits: [
      "Uno storico preciso per ritocchi più sicuri",
      "Una traccia professionale del consenso per ogni cliente",
      "Meno burocrazia tra consulenza e procedura",
      "Archivio fotografico chiaro per portfolio e follow-up",
      "Hosting nell'UE conforme al GDPR",
    ],
    marketTitle: "Perché gli studi PMU scelgono Treatflow",
    marketParas: [
      "Il trucco permanente vive di dettagli. Treatflow collega la prenotazione a consenso, note e foto, così ogni visita resta documentata senza strumenti aggiuntivi.",
    ],
    highlights: [
      "Prenotazioni online senza commissioni",
      "Moduli di consenso prima delle procedure",
      "Documentazione di pigmenti e tecniche",
      "Storico fotografico collegato alle clienti",
      "Hosting nell'UE conforme al GDPR",
    ],
    aiSummary:
      "Treatflow è un software per il trucco permanente con moduli di consenso, note sui pigmenti, documentazione fotografica, schede clienti, prenotazioni online e promemoria. Per studi PMU e di microblading. Conforme al GDPR.",
    faqs: [
      faqWhatIs(
        "Treatflow è un gestionale all-in-one con prenotazioni online, schede clienti, moduli di consenso, documentazione dei trattamenti e promemoria – adatto agli studi di trucco permanente."
      ),
      {
        question: "È adatto al microblading?",
        answer:
          "Sì. Puoi documentare tecniche, pigmenti, foto e calendario dei ritocchi per sopracciglia, labbra ed eyeliner.",
      },
      faqStart,
      faqHosting,
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
    featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
  }),

  "tattoo-studio-software": industry("tattoo-studio-software", {
    serviceName: "Software per studi di tatuaggi",
    serviceDescription:
      "Software per studi di tatuaggi: moduli di consenso, schede clienti, prenotazione appuntamenti, note di seduta e promemoria.",
    eyebrow: "Software per studi di tatuaggi",
    h1: "Il software per studi di tatuaggi moderni",
    subtitle:
      "Consenso digitale, schede clienti, note di seduta e prenotazione online – pensato per studi di tatuaggi che vogliono meno carta e un'agenda più chiara.",
    aiCapsules: [
      {
        question: "Di quale software ha bisogno uno studio di tatuaggi?",
        answer:
          "Uno studio di tatuaggi ha bisogno di moduli di consenso e liberatorie digitali, schede clienti, note di seduta, foto di riferimento e una prenotazione affidabile con promemoria. Treatflow riunisce tutto in un'unica piattaforma conforme al GDPR con hosting nell'UE.",
      },
      {
        question: "Treatflow sostituisce le liberatorie cartacee?",
        answer:
          "Sì. Le clienti compilano il consenso digitale prima dell'appuntamento, così il team inizia la seduta con le pratiche già sbrigate.",
      },
    ],
    whatTitle: "Cos'è Treatflow per gli studi di tatuaggi?",
    whatParas: [
      "Treatflow aiuta gli studi di tatuaggi a riunire consensi, prenotazioni e storico clienti in un unico sistema. I tatuatori vedono note e foto nel profilo della cliente; la reception gestisce l'agenda.",
      "Prenotazione online e promemoria riducono gli appuntamenti mancati, mentre i moduli digitali eliminano la carta prima di ogni seduta.",
    ],
    audiences: [
      "Studi di tatuaggi e studi privati",
      "Studi con più tatuatori che condividono un'agenda",
      "Studi che offrono tatuaggi e follow-up post-trattamento",
      "Team che vogliono sostituire liberatorie e agende di carta",
    ],
    problems: [
      {
        problem: "Liberatorie cartacee e schedari",
        solution: "Consenso digitale salvato in modo sicuro nella scheda cliente.",
      },
      {
        problem: "Doppie prenotazioni tra tatuatori",
        solution: "Agenda condivisa con disponibilità chiare.",
      },
      {
        problem: "Note di seduta su telefono e fogli",
        solution: "Note e foto collegate a ogni cliente.",
      },
      {
        problem: "Le clienti dimenticano acconto o orario dell'appuntamento",
        solution: "Promemoria via WhatsApp ed email.",
      },
    ],
    features: [
      { icon: ClipboardCheck, title: "Consenso e liberatorie", desc: "Moduli digitali prima di ogni seduta." },
      { icon: Users, title: "Schede clienti", desc: "Storico, note e contatti in un unico profilo." },
      { icon: FileText, title: "Note di seduta", desc: "Documenta lavoro svolto, cura post-tatuaggio e prossimi passi." },
      { icon: Camera, title: "Foto di riferimento", desc: "Salva riferimenti e foto dei progressi." },
      { icon: Link2, title: "Prenotazioni online", desc: "Le clienti richiedono o prenotano gli orari disponibili." },
      { icon: Calendar, title: "Agenda dello studio", desc: "Coordina tatuatori e postazioni." },
    ],
    benefits: [
      "Meno carta prima di ogni seduta",
      "Agende più chiare tra tutti i tatuatori",
      "Storico clienti pronto per ritocchi e cover-up",
      "Meno appuntamenti saltati grazie ai promemoria",
      "Hosting nell'UE conforme al GDPR",
    ],
    marketTitle: "Perché gli studi di tatuaggi scelgono Treatflow",
    marketParas: [
      "Agli studi di tatuaggi servono consenso e agenda tanto quanto gli strumenti creativi. Treatflow si concentra sulla gestione dello studio – prenotazioni, moduli e schede – senza commissioni da marketplace.",
    ],
    highlights: [
      "Consenso digitale prima delle sedute",
      "Agenda condivisa per studi con più tatuatori",
      "Schede clienti con note e foto",
      "Promemoria per ridurre gli appuntamenti mancati",
      "Hosting nell'UE conforme al GDPR",
    ],
    aiSummary:
      "Treatflow è un software per studi di tatuaggi con consenso digitale, schede clienti, note di seduta, documentazione fotografica, prenotazioni online e promemoria. Per studi di tatuaggi con uno o più tatuatori. Conforme al GDPR.",
    faqs: [
      faqWhatIs(
        "Treatflow è un gestionale per studi con prenotazioni online, schede clienti, moduli di consenso, documentazione e promemoria – adatto agli studi di tatuaggi."
      ),
      {
        question: "Più tatuatori possono lavorare nello stesso studio?",
        answer:
          "Sì. Un'agenda condivisa e le schede clienti aiutano gli studi con più tatuatori a restare organizzati.",
      },
      faqStart,
      faqHosting,
    ],
    siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["forms", "online-booking", "client-records", "pricing"],
  }),

  "nail-salon-software": industry("nail-salon-software", {
    serviceName: "Software per centri unghie",
    serviceDescription:
      "Software per centri unghie e nail bar: prenotazioni online, schede clienti, promemoria degli appuntamenti e note di trattamento.",
    eyebrow: "Software per centri unghie",
    h1: "Il software per centri unghie e nail bar sempre pieni",
    subtitle:
      "Prenotazioni online, preferenze delle clienti, promemoria e un'agenda chiara – pensato per centri unghie che lavorano con tanti appuntamenti.",
    aiCapsules: [
      {
        question: "Qual è il miglior software per centri unghie?",
        answer:
          "Ai centri unghie servono prenotazioni online senza commissioni, un'agenda del team chiara, note sulle preferenze delle clienti e promemoria automatici. Treatflow offre tutto questo con hosting nell'UE conforme al GDPR.",
      },
      {
        question: "Le clienti possono prenotare online i refill?",
        answer:
          "Sì. Le clienti prenotano i servizi sulla tua pagina di prenotazione personale, 24 ore su 24 – senza costi da marketplace.",
      },
    ],
    whatTitle: "Cos'è Treatflow per i centri unghie?",
    whatParas: [
      "I centri unghie vivono di clienti abituali. Treatflow tiene in ordine l'agenda, salva le preferenze delle clienti e invia promemoria, così refill e nuove ricostruzioni arrivano puntuali.",
      "Le schede clienti digitali aiutano il team a ricordare forme, colori e allergie – senza cercare tra chat e quaderni.",
    ],
    audiences: [
      "Centri unghie e nail bar",
      "Centri di manicure e pedicure",
      "Team con più onicotecniche e un'agenda condivisa",
      "Centri che vogliono smettere di gestire le prenotazioni nei DM di Instagram",
    ],
    problems: [
      {
        problem: "Prenotazioni sparse tra DM e telefonate",
        solution: "Un'unica pagina di prenotazione online e un'agenda condivisa.",
      },
      {
        problem: "Preferenze delle clienti dimenticate",
        solution: "Note su colore, forma e allergie nella scheda cliente.",
      },
      {
        problem: "Molti refill saltati",
        solution: "Promemoria automatici via WhatsApp ed email.",
      },
      {
        problem: "Passaggi di consegne difficili tra onicotecniche",
        solution: "Storico condiviso per ogni cliente.",
      },
    ],
    features: [
      { icon: Link2, title: "Prenotazioni online", desc: "Pagina di prenotazione 24/7 senza commissioni." },
      { icon: Calendar, title: "Agenda del team", desc: "Coordina onicotecniche e postazioni." },
      { icon: Users, title: "Schede clienti", desc: "Preferenze, storico e note." },
      { icon: Bell, title: "Promemoria", desc: "Meno refill saltati e appuntamenti mancati." },
      { icon: ClipboardCheck, title: "Moduli di anamnesi", desc: "Raccogli allergie e preferenze in digitale." },
      { icon: FileText, title: "Note di visita", desc: "Documenta servizi e prodotti utilizzati." },
    ],
    benefits: [
      "Meno messaggi di prenotazione da gestire",
      "Giornate più fluide con un'agenda del team chiara",
      "Le clienti si sentono ricordate grazie alle note sulle preferenze",
      "Meno appuntamenti mancati grazie ai promemoria",
      "Hosting nell'UE conforme al GDPR",
    ],
    marketTitle: "Perché i centri unghie scelgono Treatflow",
    marketParas: [
      "Ai centri unghie con molti appuntamenti servono prenotazioni e memoria delle clienti più che moduli clinici complessi. Treatflow mantiene la gestione semplice, offrendo comunque moduli e documentazione quando servono.",
    ],
    highlights: [
      "Prenotazioni online senza commissioni",
      "Agenda condivisa per le onicotecniche",
      "Storico delle preferenze delle clienti",
      "Promemoria automatici",
      "Hosting nell'UE conforme al GDPR",
    ],
    aiSummary:
      "Treatflow è un software per centri unghie con prenotazioni online, schede clienti, note sulle preferenze, promemoria e moduli digitali. Per centri unghie e nail bar con più onicotecniche. Conforme al GDPR.",
    faqs: [
      faqWhatIs(
        "Treatflow è un gestionale all-in-one con prenotazioni online, schede clienti, moduli, documentazione e promemoria – adatto ai centri unghie."
      ),
      {
        question: "Treatflow fa pagare qualcosa per ogni prenotazione?",
        answer: "No. Nessuna commissione per appuntamento.",
      },
      faqStart,
      faqHosting,
    ],
    siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
  }),

  "lash-studio-software": industry("lash-studio-software", {
    serviceName: "Software per extension ciglia",
    serviceDescription:
      "Software per studi di extension ciglia: pianificazione dei refill, schede clienti, moduli di consenso, documentazione fotografica e prenotazioni online.",
    eyebrow: "Software per extension ciglia",
    h1: "Il software per studi di extension ciglia e refill",
    subtitle:
      "Pianifica i refill, salva mappature e consensi, invia promemoria e conserva le foto delle clienti – pensato per studi di ciglia che vivono di clienti fedeli.",
    aiCapsules: [
      {
        question: "Di quale software ha bisogno uno studio di extension ciglia?",
        answer:
          "Uno studio di ciglia ha bisogno di pianificare i refill, annotare preferenze e mappature, raccogliere i consensi, salvare foto dei risultati e inviare promemoria. Treatflow riunisce prenotazioni, schede e moduli con hosting nell'UE conforme al GDPR.",
      },
      {
        question: "Posso tenere traccia degli intervalli di refill per ogni cliente?",
        answer:
          "Sì. Storico delle visite e note restano nel profilo della cliente, così sai quando è previsto il prossimo refill e cosa è stato applicato l'ultima volta.",
      },
    ],
    whatTitle: "Cos'è Treatflow per gli studi di extension ciglia?",
    whatParas: [
      "Gli studi di ciglia crescono grazie ai refill. Treatflow tiene piena l'agenda, documenta curvatura, lunghezza e mappatura preferite e ricorda alle clienti il prossimo appuntamento.",
      "Consenso digitale e documentazione fotografica sostengono standard professionali senza rubare tempo in cabina.",
    ],
    audiences: [
      "Studi di extension ciglia",
      "Centri estetici con lash artist dedicate",
      "Lash artist indipendenti che gestiscono da sole le prenotazioni",
      "Team che coordinano i refill su più postazioni",
    ],
    problems: [
      {
        problem: "Date dei refill annotate su fogli Excel",
        solution: "Storico clienti e promemoria in un unico sistema.",
      },
      {
        problem: "Preferenze di mappatura dimenticate",
        solution: "Note e foto in ogni profilo cliente.",
      },
      {
        problem: "Consenso ancora su carta",
        solution: "Moduli digitali compilati prima dell'appuntamento.",
      },
      {
        problem: "Messaggi pieni di richieste di prenotazione",
        solution: "Pagina di prenotazione online senza commissioni.",
      },
    ],
    features: [
      { icon: Calendar, title: "Pianificazione refill", desc: "Programma applicazioni e refill con disponibilità chiare." },
      { icon: Users, title: "Note su cliente e ciglia", desc: "Curvatura, lunghezza, mappatura e colla sempre in scheda." },
      { icon: ClipboardCheck, title: "Moduli di consenso", desc: "Anamnesi digitale prima di ogni nuova applicazione." },
      { icon: Camera, title: "Foto dei risultati", desc: "Documenta il risultato di ogni visita." },
      { icon: Link2, title: "Prenotazioni online", desc: "Le clienti prenotano i refill 24/7." },
      { icon: Bell, title: "Promemoria refill", desc: "Clienti più fedeli grazie ai promemoria automatici." },
    ],
    benefits: [
      "Più clienti che tornano per il refill grazie ai promemoria puntuali",
      "Risultati costanti grazie alle preferenze documentate",
      "Meno burocrazia in cabina",
      "Consensi e archivio fotografico professionali",
      "Hosting nell'UE conforme al GDPR",
    ],
    marketTitle: "Perché gli studi di ciglia scelgono Treatflow",
    marketParas: [
      "Agli studi di ciglia servono strumenti per fidelizzare le clienti tanto quanto strumenti di prenotazione. Treatflow collega gli appuntamenti alle note e ai promemoria, così i refill restano prevedibili.",
    ],
    highlights: [
      "Prenotazioni online senza commissioni",
      "Note su preferenze e mappatura delle ciglia",
      "Moduli di consenso prima delle nuove applicazioni",
      "Promemoria refill e storico fotografico",
      "Hosting nell'UE conforme al GDPR",
    ],
    aiSummary:
      "Treatflow è un software per studi di extension ciglia con pianificazione dei refill, note sulle clienti, moduli di consenso, documentazione fotografica, prenotazioni online e promemoria. Conforme al GDPR.",
    faqs: [
      faqWhatIs(
        "Treatflow è un gestionale all-in-one con prenotazioni online, schede clienti, moduli di consenso, documentazione e promemoria – adatto agli studi di extension ciglia."
      ),
      {
        question: "È adatto alle lash artist che lavorano da sole?",
        answer:
          "Sì. Le lash artist indipendenti usano Treatflow per prenotazioni, promemoria e storico clienti, senza commissioni da marketplace.",
      },
      faqStart,
      faqHosting,
    ],
    siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
  }),

  "spa-wellness-software": industry("spa-wellness-software", {
    serviceName: "Software per spa e wellness",
    serviceDescription:
      "Software per spa e centri benessere: prenotazioni online, schede clienti, note di trattamento, moduli di consenso e promemoria.",
    eyebrow: "Software per spa e wellness",
    h1: "Il software per spa e centri benessere che lavorano con calma",
    subtitle:
      "Coordina cabine, operatori e pacchetti con prenotazioni online, storico degli ospiti e moduli digitali – senza commissioni da marketplace.",
    aiCapsules: [
      {
        question: "Di quale software ha bisogno una spa?",
        answer:
          "Una spa ha bisogno di pianificare più risorse, prenotazioni online, preferenze degli ospiti, note di trattamento e promemoria. Treatflow supporta spa e centri benessere con hosting nell'UE conforme al GDPR.",
      },
      {
        question: "Treatflow gestisce pacchetti e ospiti abituali?",
        answer:
          "Sì. Storico clienti e promemoria ti aiutano a gestire cicli di trattamenti e ospiti che tornano regolarmente.",
      },
    ],
    whatTitle: "Cos'è Treatflow per spa e centri benessere?",
    whatParas: [
      "Una spa deve conciliare atmosfera e organizzazione. Treatflow tiene in ordine le prenotazioni, salva le preferenze degli ospiti e documenta i trattamenti, così l'esperienza resta impeccabile.",
      "Anamnesi digitale e promemoria alleggeriscono la reception, mentre gli operatori hanno a disposizione le note che servono.",
    ],
    audiences: [
      "Day spa e centri benessere",
      "Spa di hotel e boutique spa",
      "Centri wellness con più operatori",
      "Centri che combinano massaggi, trattamenti viso e corpo",
    ],
    problems: [
      {
        problem: "Conflitti tra cabine e operatori",
        solution: "Agenda condivisa con una pianificazione chiara delle risorse.",
      },
      {
        problem: "Preferenze degli ospiti perse tra una visita e l'altra",
        solution: "Schede clienti con note e storico.",
      },
      {
        problem: "Anamnesi su carta alla reception",
        solution: "Moduli digitali compilati prima dell'arrivo.",
      },
      {
        problem: "Assenze sui trattamenti più lunghi",
        solution: "Promemoria automatici prima degli appuntamenti.",
      },
    ],
    features: [
      { icon: Calendar, title: "Agenda della spa", desc: "Coordina cabine, operatori e servizi." },
      { icon: Link2, title: "Prenotazioni online", desc: "Gli ospiti prenotano i trattamenti 24/7, senza commissioni." },
      { icon: Users, title: "Profili ospiti", desc: "Preferenze, storico e note in un unico posto." },
      { icon: ClipboardCheck, title: "Moduli di anamnesi", desc: "Moduli sanitari e di consenso prima della visita." },
      { icon: FileText, title: "Note di trattamento", desc: "Documenta i servizi per un'assistenza costante." },
      { icon: Bell, title: "Promemoria", desc: "Meno assenze sugli appuntamenti più lunghi." },
    ],
    benefits: [
      "Passaggi più fluidi tra reception e cabine",
      "Gli ospiti si sentono riconosciuti grazie allo storico delle preferenze",
      "Meno carta alla reception",
      "Più ospiti puntuali grazie ai promemoria",
      "Hosting nell'UE conforme al GDPR",
    ],
    marketTitle: "Perché le spa scelgono Treatflow",
    marketParas: [
      "Un software per spa deve proteggere l'esperienza dell'ospite, non complicarla. Treatflow collega la prenotazione a schede e moduli, così la gestione resta tranquilla e professionale.",
    ],
    highlights: [
      "Prenotazioni online senza commissioni",
      "Agenda condivisa per cabine e operatori",
      "Storico delle preferenze degli ospiti",
      "Anamnesi digitale e note di trattamento",
      "Hosting nell'UE conforme al GDPR",
    ],
    aiSummary:
      "Treatflow è un software per spa e wellness con prenotazioni online, schede ospiti, moduli di anamnesi, note di trattamento e promemoria. Per day spa e centri benessere. Conforme al GDPR.",
    faqs: [
      faqWhatIs(
        "Treatflow è un software all-in-one per centri estetici, spa e centri benessere con prenotazioni online, schede clienti, moduli, documentazione e promemoria."
      ),
      {
        question: "È adatto alle day spa?",
        answer:
          "Sì. Le day spa usano Treatflow per coordinare prenotazioni, storico degli ospiti e anamnesi digitale.",
      },
      faqStart,
      faqHosting,
    ],
    siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
  }),

  "massage-software": industry("massage-software", {
    serviceName: "Software per centri massaggi",
    serviceDescription:
      "Software per massaggiatori e centri massaggi: prenotazioni online, schede clienti, moduli di anamnesi, note di seduta e promemoria.",
    eyebrow: "Software per centri massaggi",
    h1: "Il software per massaggiatori e centri massaggi",
    subtitle:
      "Prenotazioni online, moduli di anamnesi, note di seduta e promemoria – pensato per massaggiatori e centri con più cabine.",
    aiCapsules: [
      {
        question: "Di quale software ha bisogno un massaggiatore?",
        answer:
          "Un massaggiatore ha bisogno di una prenotazione online semplice, moduli di anamnesi e consenso, note di seduta, storico clienti e promemoria. Treatflow offre tutto questo con hosting nell'UE conforme al GDPR e senza commissioni sulle prenotazioni.",
      },
      {
        question: "Treatflow è adatto a chi lavora da solo?",
        answer:
          "Sì. I massaggiatori indipendenti usano Treatflow per gestire agenda, schede clienti e promemoria senza costi da marketplace.",
      },
    ],
    whatTitle: "Cos'è Treatflow per i centri massaggi?",
    whatParas: [
      "Treatflow aiuta i massaggiatori a passare meno tempo in burocrazia e più tempo con le clienti. Prenotazioni, anamnesi e note di seduta stanno in un unico posto.",
      "I centri con più cabine coordinano la disponibilità, mantenendo lo storico di ogni cliente riservato e accessibile a chi la tratta.",
    ],
    audiences: [
      "Massaggiatori indipendenti",
      "Centri massaggi con più cabine",
      "Centri benessere che offrono massaggi terapeutici e rilassanti",
      "Team che vogliono sostituire anamnesi cartacea e prenotazioni telefoniche",
    ],
    problems: [
      {
        problem: "Prenotazioni solo al telefono e chiamate perse",
        solution: "Pagina di prenotazione online disponibile 24/7.",
      },
      {
        problem: "Moduli di anamnesi cartacei",
        solution: "Moduli sanitari e di consenso digitali prima delle sedute.",
      },
      {
        problem: "Note di seduta difficili da ritrovare",
        solution: "Note salvate nel profilo cliente.",
      },
      {
        problem: "Le clienti dimenticano gli appuntamenti",
        solution: "Promemoria automatici via WhatsApp ed email.",
      },
    ],
    features: [
      { icon: Link2, title: "Prenotazioni online", desc: "Le clienti prenotano i massaggi senza commissioni." },
      { icon: ClipboardCheck, title: "Moduli di anamnesi", desc: "Storia clinica e consenso in digitale." },
      { icon: FileText, title: "Note di seduta", desc: "Documenta zone di lavoro e progressi." },
      { icon: Users, title: "Schede clienti", desc: "Storico completo per le clienti abituali." },
      { icon: Calendar, title: "Agenda del centro", desc: "Coordina massaggiatori e cabine." },
      { icon: Bell, title: "Promemoria", desc: "Meno appuntamenti mancati." },
    ],
    benefits: [
      "Meno burocrazia tra una seduta e l'altra",
      "Anamnesi più sicura con i moduli digitali",
      "Più continuità nel trattamento grazie alle note",
      "Meno appuntamenti mancati",
      "Hosting nell'UE conforme al GDPR",
    ],
    marketTitle: "Perché i professionisti del massaggio scelgono Treatflow",
    marketParas: [
      "A chi fa massaggi servono prenotazioni affidabili e schede chiare, non sistemi complessi. Treatflow si concentra su appuntamenti, moduli e documentazione.",
    ],
    highlights: [
      "Prenotazioni online senza commissioni",
      "Anamnesi e consenso digitali",
      "Note di seduta nelle schede clienti",
      "Promemoria per le clienti abituali",
      "Hosting nell'UE conforme al GDPR",
    ],
    aiSummary:
      "Treatflow è un software per centri massaggi con prenotazioni online, moduli di anamnesi, note di seduta, schede clienti e promemoria. Per massaggiatori e centri con più cabine. Conforme al GDPR.",
    faqs: [
      faqWhatIs(
        "Treatflow è un gestionale all-in-one con prenotazioni online, schede clienti, moduli, documentazione e promemoria – adatto a massaggiatori e centri massaggi."
      ),
      {
        question: "Lo può usare chi lavora da solo?",
        answer:
          "Sì. I professionisti indipendenti gestiscono prenotazioni, moduli e note senza commissioni da marketplace.",
      },
      faqStart,
      faqHosting,
    ],
    siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "forms", "client-records", "pricing"],
  }),
};

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export const pages: Pick<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  coreFeatures,
  extraFeatures,
  industries,
};
