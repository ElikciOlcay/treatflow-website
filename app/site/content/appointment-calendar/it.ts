import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarIt: AppointmentCalendarContent = {
  meta: {
    title: "Agenda appuntamenti per centri estetici: operatori e cabine",
    description:
      "Agenda appuntamenti online per centri estetici e studi di medicina estetica: colonne per operatori e cabine, prenotazioni online, drag & drop e promemoria automatici via email. Zero commissioni, prova gratuita di 14 giorni.",
    keywords: [
      "agenda appuntamenti centro estetico",
      "software appuntamenti centro estetico",
      "gestionale appuntamenti estetista",
      "gestionale appuntamenti spa",
      "agenda prenotazioni centro estetico",
      "pianificazione operatori e cabine",
      "agenda appuntamenti medicina estetica",
      "agenda appuntamenti drag & drop",
    ],
  },
  dates: { modified: "2026-10-28", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Agenda appuntamenti per centri estetici: operatori e cabine",
      description:
        "Agenda appuntamenti per centri estetici con vista giornaliera per operatori e cabine, drag & drop, prenotazioni online e promemoria automatici.",
    },
    software: {
      name: "Agenda appuntamenti Treatflow per centri estetici",
      description:
        "Agenda appuntamenti per centri estetici con colonne per operatori e cabine, drag & drop, prenotazioni online e promemoria automatici.",
      featureList: [
        "Vista giornaliera con una colonna per ogni operatore o cabina",
        "Occupazione e orari liberi in un colpo d'occhio",
        "Evita doppie prenotazioni di operatori e cabine",
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
    eyebrow: "Agenda e pianificazione",
    eyebrowIcon: "calendar",
    title: { before: "L'agenda appuntamenti per il tuo centro: team, servizi e ", highlight: "cabine" },
    description:
      "Operatori, cabine e appuntamenti del tuo centro estetico in un'unica vista, prenotazioni online incluse. Sposti gli appuntamenti con un trascinamento e dici addio alle doppie prenotazioni.",
    chips: ["Drag & drop", "Team e cabine", "Meno no-show"],
    secondaryCta: { label: "Prenotazioni online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Qual è il modo migliore per organizzare gli appuntamenti in un centro estetico?",
        answer:
          "Treatflow riunisce appuntamenti, operatori e cabine in un'unica agenda. Nella vista giornaliera ogni persona o cabina ha la sua colonna: vedi subito chi è libero, eviti le doppie prenotazioni e gestisci gli imprevisti più in fretta. In più, prenotazioni online e promemoria automatici riducono telefonate e no-show.",
      },
      {
        question: "Quale agenda appuntamenti è adatta a uno studio di medicina estetica?",
        answer:
          "Treatflow unisce un'agenda con colonne per operatori e cabine, prenotazioni online per consulenze e trattamenti e promemoria via email. Le prenotazioni arrivano in agenda senza alcuna commissione.",
      },
    ],
    image: {
      src: "/images/mockups/it/kalender-overview.png",
      alt: "Agenda appuntamenti Treatflow: vista giornaliera con operatori e cabine",
    },
  },
  understand: {
    title: "Un'agenda per tutto il tuo centro",
    description: "Appuntamenti, operatori e cabine in un colpo d'occhio: vedi subito chi è libero e quando.",
    items: [
      {
        icon: "users",
        title: "Team, cabine e servizi",
        text: "Inserisci il tuo team, le cabine e i servizi: l'agenda crea una colonna per ogni persona o cabina.",
      },
      {
        icon: "move",
        title: "Sposta con drag & drop",
        text: "Cambio di programma? Trascina l'appuntamento nel nuovo orario, senza doverlo cancellare e ricreare.",
      },
      {
        icon: "bell",
        title: "Promemoria automatici",
        text: "I tuoi clienti ricevono un promemoria via email prima dell'appuntamento. Così gli appuntamenti dimenticati calano sensibilmente.",
      },
    ],
  },
  howItWorks: {
    description: "Tre passaggi e la tua agenda è operativa.",
    steps: [
      { title: "Configura team, servizi e cabine", text: "Inserisci operatori, trattamenti e cabine con i relativi orari di lavoro. L'agenda crea una colonna per ciascuno." },
      { title: "Inserisci gli appuntamenti", text: "Inserisci tu gli appuntamenti oppure attiva le prenotazioni online: le prenotazioni dei tuoi clienti compaiono automaticamente in agenda." },
      { title: "I promemoria partono da soli", text: "I tuoi clienti ricevono via email la conferma della prenotazione e un promemoria: niente da inviare a mano." },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Tutto ciò che serve per organizzare il centro: team, cabine e promemoria in un'unica agenda.",
    items: [
      { icon: "users", title: "Team e cabine", text: "Una colonna per ogni operatore o cabina. Occupazione e orari liberi in un colpo d'occhio.", points: ["Vista a colonne", "Disponibilità sempre visibile", "Nessuna doppia prenotazione"] },
      { icon: "move", title: "Drag & drop", text: "Sposta, allunga o scambia gli appuntamenti: niente maschere da compilare, niente caos.", points: ["Spostamenti in pochi secondi", "Agenda subito aggiornata", "Per tutto il team"] },
      { icon: "layout-grid", title: "Dalla vista giornaliera alla mensile", text: "Passa dalla vista giornaliera a quella settimanale o mensile, a seconda di ciò che ti serve.", points: ["Vista giornaliera", "Vista settimanale", "Vista mensile"] },
      { icon: "bell", title: "Promemoria automatici", text: "Promemoria via email prima di ogni appuntamento. Meno no-show, meno telefonate di conferma.", points: ["Promemoria via email", "Orari personalizzabili", "Link per disdire"] },
      { icon: "calendar", title: "Prenotazioni online", text: "Le prenotazioni arrivano direttamente in agenda. Nessuna doppia prenotazione, conferma automatica.", points: ["Link di prenotazione personale", "Subito in agenda", "Nessuna commissione"] },
      { icon: "clock", title: "Meno lavoro amministrativo", text: "Meno telefonate, processi più chiari: più tempo per i trattamenti, meno per l'agenda.", points: ["Meno telefonate", "Fasce orarie chiare", "Panoramica immediata"] },
    ],
  },
  faq: {
    title: "Domande frequenti sull'agenda appuntamenti per centri estetici",
    items: [
      {
        question: "Qual è il modo migliore per organizzare gli appuntamenti in un centro estetico?",
        answer:
          "Un gestionale specifico per il settore, come Treatflow, è la soluzione più efficiente. Con le prenotazioni online i clienti prenotano 24 ore su 24, i promemoria automatici via email riducono sensibilmente i no-show e l'agenda ti dà sempre il quadro completo della giornata.",
      },
      {
        question: "Quanto costa un'agenda appuntamenti per centri estetici?",
        answer:
          "Con Treatflow l'agenda con prenotazioni online è inclusa nel piano Booking a 59 € al mese (53 € al mese con abbonamento annuale, IVA esclusa). Puoi provarla gratis per 14 giorni, senza carta di credito. Nessun costo nascosto e zero commissioni sulle prenotazioni.",
      },
      {
        question: "Esiste un'agenda appuntamenti gratuita per centri estetici?",
        answer:
          "Le agende gratuite esistono, ma di solito hanno limitazioni, pubblicità o una commissione su ogni prenotazione (il classico modello a marketplace). L'agenda di carta o un foglio Excel non costano nulla, ma non ricevono prenotazioni online, non inviano promemoria e non sono collegati alle schede clienti. Treatflow si può provare gratis per 14 giorni senza carta di credito; dopo, l'agenda con prenotazioni online costa 59 € al mese, senza commissioni sugli appuntamenti.",
      },
      {
        question: "Agenda, calendario o sistema di prenotazione: qual è la differenza?",
        answer:
          "Nel lavoro di tutti i giorni i tre termini indicano quasi la stessa cosa: l'agenda (o calendario) è la vista in cui tu e il tuo team gestite gli appuntamenti; il sistema di prenotazione è la parte che i clienti usano per prenotare online in autonomia. In Treatflow sono un tutt'uno: le prenotazioni online arrivano direttamente in agenda, con promemoria e schede clienti inclusi.",
      },
      {
        question: "I miei clienti possono prenotare online?",
        answer:
          "Sì. Ricevi un link di prenotazione personale da condividere sul tuo sito, su Instagram o nei messaggi. I clienti scelgono trattamento e orario quando vogliono, a qualsiasi ora. Le nuove prenotazioni compaiono subito in agenda e le conferme partono automaticamente via email.",
      },
      {
        question: "Come riduco i no-show nel mio centro?",
        answer:
          "I promemoria automatici via email sono il modo più efficace per ridurre i no-show. Treatflow invia i promemoria quando decidi tu, prima dell'appuntamento: così molti meno clienti si dimenticano della prenotazione.",
      },
      {
        question: "Quali funzioni deve avere un'agenda appuntamenti per centri estetici?",
        answer:
          "Una buona agenda appuntamenti per centri estetici dovrebbe offrire prenotazioni online, viste giornaliera, settimanale e mensile, pianificazione di operatori e cabine, promemoria automatici via email, drag & drop e il collegamento con le schede clienti e la documentazione dei trattamenti.",
      },
      {
        question: "Come organizzo più operatori e cabine?",
        answer:
          "La vista giornaliera di Treatflow mostra operatori o cabine in colonne separate. Vedi gli orari liberi, eviti le doppie prenotazioni e gestisci più facilmente i cambi dell'ultimo minuto.",
      },
      {
        question: "Come evito le doppie prenotazioni di operatori e cabine?",
        answer:
          "Treatflow mostra l'occupazione di operatori e cabine fianco a fianco. Orari liberi e occupati sono subito visibili, così eviti per tempo sovrapposizioni e doppie prenotazioni.",
      },
      {
        question: "Quale agenda appuntamenti è adatta a uno studio di medicina estetica?",
        answer:
          "Treatflow unisce un'agenda con colonne per operatori e cabine, prenotazioni online per consulenze e trattamenti e promemoria via email. Le nuove prenotazioni arrivano direttamente in agenda, senza commissioni sugli appuntamenti.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Prenotazioni online", description: "Prenotazioni 24 ore su 24 con il tuo link" },
      { href: { page: "messaging" }, title: "Promemoria", description: "Promemoria automatici via email" },
      { href: { page: "client-records" }, title: "Schede clienti", description: "Dall'appuntamento alla scheda cliente in un clic" },
    ],
  },
  cta: {
    title: "Vuoi un'agenda che lavora per te?",
    description: "Provala gratis per 14 giorni, senza carta di credito. Agenda, pianificazione del team e prenotazioni online in un'unica app.",
    secondary: { label: "Prenotazioni online", href: { page: "online-booking" } },
  },
};
