import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import {
  Calendar,
  ClipboardCheck,
  FileText,
  Link2,
  Users,
} from "lucide-react";

export const itHomeContent: InternationalPageContent = {
  pageKey: "home",
  locale: "it",
  canonicalPath: "/it",
  serviceName: "Treatflow – Software per centri estetici",
  serviceDescription:
    "Software all-in-one per centri estetici e cliniche estetiche: calendario, prenotazioni online, schede clienti, moduli e documentazione trattamenti.",
  areaServed: ["IT", "SM", "VA", "EU"],
  ctaPrimaryLabel: "Richiedi accesso anticipato",
  ctaBottomTitle: "Pronto a digitalizzare il tuo centro?",
  ctaBottomText:
    "Richiedi l'accesso anticipato per l'Italia. La registrazione diretta è attualmente disponibile in Germania, Austria e Svizzera.",
  trustTrialLabel: "Accesso anticipato disponibile",
  hero: {
    marketLabel: "Italia",
    eyebrow: "Software per centri estetici",
    h1: "Software all-in-one per centri estetici e cliniche estetiche",
    subtitle:
      "Calendario, prenotazioni online, schede clienti, consensi digitali e documentazione trattamenti – senza commissioni. Conforme al GDPR. Made in Austria.",
  },
  aiCapsules: [
    {
      question: "Cos'è Treatflow?",
      answer:
        "Treatflow è un software SaaS per centri estetici e cliniche estetiche. Include calendario, prenotazioni online, schede clienti, moduli di anamnesi/consenso e documentazione trattamenti. Server in UE, GDPR. Registrazione diretta in DACH; altri Paesi possono richiedere l'accesso anticipato.",
    },
    {
      question: "Treatflow prende commissioni sulle prenotazioni?",
      answer:
        "No. Treatflow è software del centro, non un marketplace. Nessuna commissione per appuntamento. Prezzi fissi da 39 EUR/mese (Basic) o 59 EUR/mese (Booking).",
    },
  ],
  whatIsTreatflow: {
    title: "Cos'è Treatflow",
    paragraphs: [
      "Treatflow centralizza la gestione del centro: appuntamenti, clienti, moduli e documentazione in un'unica app web.",
      "È pensato per estetiste, laser, trucco permanente, unghie, ciglia, spa e medicina estetica che vogliono digitalizzare senza dipendere da un marketplace.",
    ],
  },
  whoIsItFor: {
    title: "Per chi è",
    audiences: [
      "Centri estetici e beauty salon",
      "Cliniche di medicina estetica",
      "Studi di epilazione laser",
      "Centri di trucco permanente e ciglia",
      "Spa e wellness",
    ],
  },
  problems: {
    title: "Problemi che risolviamo",
    items: [
      {
        problem: "Agenda cartacea o Excel confuso",
        solution: "Calendario digitale per collaboratore, evita doppie prenotazioni e mostra l'occupazione.",
      },
      {
        problem: "Telefono sempre occupato per le prenotazioni",
        solution: "Prenotazioni online 24/7 con il tuo link, senza commissioni.",
      },
      {
        problem: "Consensi su carta",
        solution: "Moduli digitali di anamnesi e consenso inviati prima dell'appuntamento.",
      },
    ],
  },
  features: {
    title: "Funzionalità principali",
    items: [
      {
        icon: Calendar,
        title: "Calendario appuntamenti",
        desc: "Viste giornaliera, settimanale e mensile con drag & drop.",
      },
      {
        icon: Link2,
        title: "Prenotazioni online",
        desc: "Link personale per prenotare in qualsiasi momento.",
      },
      {
        icon: Users,
        title: "Schede clienti",
        desc: "Storico, foto, note e trattamenti in un unico posto.",
      },
      {
        icon: ClipboardCheck,
        title: "Moduli",
        desc: "Anamnesi e consensi digitali con firma.",
      },
      {
        icon: FileText,
        title: "Documentazione",
        desc: "Registra trattamenti, parametri e foto in modo professionale.",
      },
    ],
  },
  benefits: {
    title: "Vantaggi",
    items: [
      "Nessuna commissione sulle prenotazioni",
      "I dati del cliente sono tuoi",
      "Server UE / GDPR",
      "Prezzi trasparenti in EUR",
      "Supporto diretto dal team",
    ],
  },
  marketFit: {
    title: "Treatflow per l'Italia",
    paragraphs: [
      "Stiamo aprendo Treatflow oltre il DACH. I centri in Italia possono richiedere l'accesso anticipato mentre prepariamo l'esperienza locale (lingua, onboarding e supporto).",
      "Nel frattempo puoi già conoscere il prodotto in italiano e richiedere l'accesso anticipato per il tuo centro.",
    ],
    highlights: [
      "GDPR / protezione dati UE",
      "Software proprietario, non marketplace",
      "Accesso anticipato su richiesta",
      "Supporto diretto del team",
    ],
  },
  aiSummary: {
    title: "In breve",
    text: "Treatflow è il software di gestione per centri estetici e cliniche estetiche: calendario, prenotazioni online, schede clienti, moduli e documentazione. Da 39 EUR/mese, senza commissioni, server in UE e conforme al GDPR. La registrazione diretta è disponibile in Germania, Austria e Svizzera; in Italia puoi richiedere l'accesso anticipato.",
  },
  faqs: [
    {
      question: "Posso registrarmi già dall'Italia?",
      answer:
        "La registrazione diretta è aperta in Germania, Austria e Svizzera. Dall'Italia puoi richiedere l'accesso anticipato su /it/accesso-anticipato.",
    },
    {
      question: "Quanto costa Treatflow?",
      answer:
        "Basic da 39 EUR/mese e Booking da 59 EUR/mese (IVA esclusa). Pagamento annuale con sconto. Nessuna commissione.",
    },
    {
      question: "È conforme al GDPR?",
      answer:
        "Sì. Treatflow è ospitato su server UE ed è progettato per studi che devono rispettare il GDPR.",
    },
  ],
  internalLinks: [
    { href: "/it/software-centro-estetico", label: "Software centro estetico" },
    { href: "/it/prezzi", label: "Prezzi" },
    { href: "/it/calendario-appuntamenti", label: "Calendario" },
    { href: "/it/prenotazioni-online", label: "Prenotazioni online" },
    { href: "/it/accesso-anticipato", label: "Accesso anticipato" },
  ],
  internalLinksTitle: "Pagine correlate",
};
