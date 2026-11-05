import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarIt: AppointmentCalendarContent = {
  meta: {
    title: "Agenda appuntamenti per centri estetici: team e cabine",
    description:
      "Software di gestione appuntamenti per centri estetici e cliniche di medicina estetica: agenda con colonne per operatrici e cabine, prenotazioni online, drag & drop e promemoria automatici via email. Nessuna commissione, 14 giorni di prova gratuita.",
    keywords: [
      "agenda appuntamenti centro estetico",
      "software appuntamenti centro estetico",
      "gestionale appuntamenti spa",
      "agenda prenotazioni centro estetico",
      "pianificazione operatrici e cabine",
      "software appuntamenti clinica estetica",
      "agenda appuntamenti drag & drop",
    ],
  },
  dates: { modified: "2026-10-28", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Agenda appuntamenti per centri estetici: team e cabine",
      description:
        "Agenda appuntamenti per centri estetici con vista giornaliera per operatrici e cabine, drag & drop, prenotazioni online e promemoria automatici.",
    },
    software: {
      name: "Agenda appuntamenti Treatflow per centri estetici",
      description:
        "Agenda appuntamenti per centri estetici con colonne per operatrici e cabine, drag & drop, prenotazioni online e promemoria automatici.",
      featureList: [
        "Vista giornaliera con una colonna per ogni operatrice o cabina",
        "Visualizza occupazione e disponibilità libere",
        "Evita doppie prenotazioni di operatrici e cabine",
        "Sposta gli appuntamenti con drag & drop",
        "Vista giornaliera, settimanale e mensile",
        "Prenotazioni online e promemoria automatici",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Agenda appuntamenti",
  hero: {
    eyebrow: "Pianificazione e agenda appuntamenti",
    eyebrowIcon: "calendar",
    title: { before: "L'agenda appuntamenti per il tuo centro, per il tuo team e le ", highlight: "cabine" },
    description:
      "Lo strumento di pianificazione per il tuo centro estetico: operatrici, cabine e appuntamenti in un'unica vista, prenotazioni online incluse. Sposta gli appuntamenti con drag & drop ed evita le doppie prenotazioni.",
    chips: ["Drag & drop", "Team e cabine", "Meno no-show"],
    secondaryCta: { label: "Prenotazioni online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Qual è il modo migliore per organizzare gli appuntamenti in un centro estetico?",
        answer:
          "Treatflow riunisce appuntamenti, operatrici e cabine in un'unica agenda. La vista giornaliera mostra ogni persona o cabina in una colonna dedicata: vedi subito le disponibilità, eviti le doppie prenotazioni e gestisci i cambiamenti più velocemente. Prenotazioni online e promemoria automatici riducono inoltre telefonate e no-show.",
      },
      {
        question: "Quale software di gestione appuntamenti è adatto alle cliniche estetiche?",
        answer:
          "Treatflow unisce un'agenda con colonne per operatori e cabine, prenotazioni online per consulenze e trattamenti e promemoria via email. Le prenotazioni arrivano in agenda senza alcuna commissione.",
      },
    ],
    image: {
      src: "/images/mockups/kalender-overview.png",
      alt: "Agenda appuntamenti Treatflow: vista giornaliera con operatrici e cabine",
    },
  },
  understand: {
    title: "Il gestionale appuntamenti per tutto il tuo centro",
    description: "Tutti gli appuntamenti, le operatrici e le cabine a colpo d'occhio: vedi subito chi è libera e quando.",
    items: [
      {
        icon: "users",
        title: "Team, cabine e servizi",
        text: "Inserisci le persone del tuo team, le cabine di trattamento e i servizi. L'agenda mostra poi una colonna separata per ogni persona o cabina.",
      },
      {
        icon: "move",
        title: "Sposta con drag & drop",
        text: "Se i programmi cambiano, trascina semplicemente l'appuntamento in un nuovo orario: non serve cancellarlo e crearlo di nuovo.",
      },
      {
        icon: "bell",
        title: "Promemoria automatici",
        text: "Le tue clienti ricevono un promemoria via email prima dell'appuntamento. Così gli appuntamenti dimenticati calano sensibilmente.",
      },
    ],
  },
  howItWorks: {
    description: "Tre passaggi per un'agenda del centro subito operativa.",
    steps: [
      { title: "Configura team, servizi e cabine", text: "Inserisci operatrici, trattamenti e cabine con i relativi orari di lavoro. L'agenda mostra poi una colonna separata per ciascuno." },
      { title: "Inserisci gli appuntamenti", text: "Inserisci tu gli appuntamenti oppure attiva le prenotazioni online: le prenotazioni delle tue clienti compaiono automaticamente in agenda." },
      { title: "I promemoria partono da soli", text: "Le tue clienti ricevono via email la conferma della prenotazione e un promemoria: niente da inviare a mano." },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Tutto per pianificare il tuo centro: team, cabine e promemoria in un'unica agenda.",
    items: [
      { icon: "users", title: "Team e cabine", text: "Una colonna per ogni operatrice o cabina. Occupazione e orari liberi a colpo d'occhio.", points: ["Vista a colonne", "Disponibilità a colpo d'occhio", "Nessuna doppia prenotazione"] },
      { icon: "move", title: "Drag & drop", text: "Sposta, allunga o scambia gli appuntamenti: niente moduli, niente caos.", points: ["Spostamenti in pochi secondi", "Subito aggiornato in agenda", "Per tutto il team"] },
      { icon: "layout-grid", title: "Dalla vista giornaliera alla mensile", text: "Passa da giorno a settimana a mese, a seconda di ciò che ti serve in quel momento.", points: ["Vista giornaliera", "Settimana", "Mese"] },
      { icon: "bell", title: "Promemoria automatici", text: "Promemoria via email prima di ogni appuntamento. Meno no-show, meno telefonate di verifica.", points: ["Promemoria via email", "Orari personalizzabili", "Link per disdire"] },
      { icon: "calendar", title: "Prenotazioni online", text: "Le prenotazioni arrivano direttamente in agenda. Nessuna doppia prenotazione, conferma automatica.", points: ["Link di prenotazione personale", "Subito in agenda", "Nessuna commissione"] },
      { icon: "clock", title: "Meno tempo in amministrazione", text: "Meno telefonate, processi più chiari: più tempo per i trattamenti e meno per l'agenda.", points: ["Meno telefonate", "Fasce orarie chiare", "Panoramica immediata"] },
    ],
  },
  faq: {
    title: "Domande frequenti sull'agenda appuntamenti per centri estetici",
    items: [
      {
        question: "Qual è il modo migliore per organizzare gli appuntamenti in un centro estetico?",
        answer:
          "Uno strumento specializzato come Treatflow è la soluzione più efficiente. Con le prenotazioni online le clienti prenotano 24 ore su 24, i promemoria automatici via email riducono sensibilmente i no-show e la vista chiara dell'agenda ti dà sempre il quadro completo.",
      },
      {
        question: "Quanto costa un software di gestione appuntamenti per centri estetici?",
        answer:
          "Treatflow offre la gestione appuntamenti con prenotazioni online a partire da 59 € al mese con il piano Booking (53 € al mese con pagamento annuale, IVA esclusa). Puoi provarlo gratis per 14 giorni, senza carta di credito. Nessun costo nascosto e nessuna commissione sulle prenotazioni.",
      },
      {
        question: "Esiste un'agenda appuntamenti gratuita per centri estetici?",
        answer:
          "Le agende gratuite esistono, ma di solito hanno limitazioni, pubblicità o una commissione su ogni prenotazione tramite un modello a marketplace. Un'agenda di carta o un foglio di calcolo non costano nulla, ma non accettano prenotazioni online, non inviano promemoria e non sono collegati alle schede clienti. Treatflow si può provare gratis per 14 giorni senza carta di credito; dopo, l'agenda con prenotazioni online costa 59 € al mese, senza commissioni sugli appuntamenti.",
      },
      {
        question: "Agenda, calendario o sistema di prenotazione: qual è la differenza?",
        answer:
          "Nella quotidianità del centro i tre termini indicano quasi la stessa cosa: l'agenda o il calendario è la vista in cui tu e il tuo team gestite gli appuntamenti. Il sistema di prenotazione è la parte che le clienti usano per prenotare online in autonomia. In Treatflow sono un tutt'uno: le prenotazioni online arrivano direttamente in agenda, con promemoria e schede clienti inclusi.",
      },
      {
        question: "Le mie clienti possono prenotare online?",
        answer:
          "Sì. Ricevi un link di prenotazione personale da condividere sul tuo sito, su Instagram o nei messaggi. Le clienti scelgono trattamenti e orari a qualsiasi ora. Le nuove prenotazioni compaiono subito in agenda e le conferme vengono inviate automaticamente via email.",
      },
      {
        question: "Come riduco i no-show nel mio centro?",
        answer:
          "I promemoria automatici via email sono il modo più efficace per ridurre i no-show. Treatflow invia i promemoria agli orari che scegli tu prima dell'appuntamento, così molte meno clienti dimenticano la prenotazione.",
      },
      {
        question: "Quali funzioni deve avere un'agenda appuntamenti per centri estetici?",
        answer:
          "Una buona agenda appuntamenti per centri estetici dovrebbe offrire prenotazioni online, viste giornaliera, settimanale e mensile, pianificazione di operatrici e cabine, promemoria automatici via email, drag & drop e il collegamento con le schede clienti e la documentazione dei trattamenti.",
      },
      {
        question: "Come pianifico più operatrici e cabine?",
        answer:
          "La vista giornaliera di Treatflow mostra operatrici o cabine in colonne separate. Vedi le disponibilità libere, eviti le doppie prenotazioni e coordini più facilmente i cambiamenti dell'ultimo minuto.",
      },
      {
        question: "Come evito le doppie prenotazioni di operatrici e cabine?",
        answer:
          "Treatflow mostra l'occupazione di operatrici e cabine una accanto all'altra. Orari liberi e occupati sono visibili subito, così colli di bottiglia e doppie prenotazioni si evitano per tempo.",
      },
      {
        question: "Quale software di gestione appuntamenti è adatto alle cliniche estetiche?",
        answer:
          "Treatflow unisce un'agenda con colonne per operatori e cabine, prenotazioni online per consulenze e trattamenti e promemoria via email. Le nuove prenotazioni arrivano direttamente in agenda, senza commissioni sugli appuntamenti.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Prenotazioni online", description: "24 ore su 24 con il tuo link di prenotazione" },
      { href: { page: "messaging" }, title: "Promemoria", description: "Promemoria automatici via email" },
      { href: { page: "client-records" }, title: "Schede clienti", description: "La scheda cliente direttamente dall'appuntamento" },
    ],
  },
  cta: {
    title: "Vuoi un'agenda senza stress?",
    description: "Provalo gratis per 14 giorni, senza carta di credito. Agenda, pianificazione del team e prenotazioni online in un'unica app.",
    secondary: { label: "Prenotazioni online", href: { page: "online-booking" } },
  },
};
