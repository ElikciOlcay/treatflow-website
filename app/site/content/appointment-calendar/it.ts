import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarIt: AppointmentCalendarContent = {
  meta: {
    title: "Agenda appuntamenti per centri estetici: da soli o in team",
    description:
      "Agenda appuntamenti per centri estetici, da soli o in team: prenotazioni online, drag & drop, promemoria, colonne per team e cabine. Zero commissioni.",
    keywords: [
      "agenda appuntamenti centro estetico",
      "software appuntamenti centro estetico",
      "gestionale appuntamenti estetista",
      "agenda appuntamenti estetista",
      "agenda appuntamenti estetista in proprio",
      "gestionale appuntamenti spa",
      "agenda prenotazioni centro estetico",
      "pianificazione operatori e cabine",
      "agenda appuntamenti medicina estetica",
      "agenda appuntamenti drag & drop",
    ],
  },
  dates: { modified: "2026-11-09", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Agenda appuntamenti per centri estetici: da soli o in team",
      description:
        "Agenda appuntamenti per centri estetici – per chi lavora in autonomia e per i team – con drag & drop, prenotazioni online, promemoria automatici e colonne per operatori e cabine.",
    },
    software: {
      name: "Agenda appuntamenti Treatflow per centri estetici",
      description:
        "Agenda appuntamenti per centri estetici – da soli o in team – con drag & drop, prenotazioni online, promemoria automatici e colonne per operatori e cabine.",
      featureList: [
        "Agenda appuntamenti per chi lavora in autonomia e per i team",
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
    title: { before: "L'agenda appuntamenti per il tuo centro – ", highlight: "da soli o in team" },
    description:
      "La tua agenda con prenotazioni online, promemoria e drag & drop: ideale se lavori in autonomia. Quando il centro cresce, ogni operatore e ogni cabina ha la sua colonna.",
    chips: ["Da soli o in team", "Drag & drop", "Meno no-show"],
    secondaryCta: { label: "Prenotazioni online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Qual è il modo migliore per organizzare gli appuntamenti in un centro estetico?",
        answer:
          "Treatflow riunisce appuntamenti, prenotazioni online e promemoria in un'unica agenda, che tu lavori in autonomia o con un team. Se lavori in autonomia, vedi tutta la giornata con i tuoi appuntamenti in un colpo d'occhio. Con un team, nella vista giornaliera ogni persona o cabina ha la sua colonna: vedi subito gli orari liberi ed eviti le doppie prenotazioni. In più, prenotazioni online e promemoria automatici riducono telefonate e no-show.",
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
    title: "Un'agenda che cresce con il tuo centro",
    description: "Che tu lavori in autonomia o con un team: tutti gli appuntamenti in un colpo d'occhio, e vedi subito quando c'è ancora un posto libero.",
    items: [
      {
        icon: "calendar-days",
        title: "Da soli o in team",
        text: "Se lavori in autonomia, hai sotto controllo la tua giornata con tutti gli appuntamenti. Quando arrivano collaboratori o nuove cabine, ogni persona e ogni cabina ha la sua colonna.",
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
      { title: "Imposta servizi e orari di lavoro", text: "Inserisci i tuoi trattamenti e gli orari di lavoro. Se lavori con un team o hai più cabine, aggiungili pure: ogni persona e ogni cabina avrà la sua colonna." },
      { title: "Inserisci gli appuntamenti", text: "Inserisci tu gli appuntamenti oppure attiva le prenotazioni online: le prenotazioni dei tuoi clienti compaiono automaticamente in agenda." },
      { title: "I promemoria partono da soli", text: "I tuoi clienti ricevono via email la conferma della prenotazione e un promemoria: niente da inviare a mano." },
    ],
  },
  cards: {
    title: "Cosa ottieni",
    description: "Tutto ciò che serve per gli appuntamenti, che tu lavori in autonomia o con un team: prenotazioni online e promemoria in un'unica agenda.",
    items: [
      { icon: "users", title: "Da soli o in team", text: "In autonomia vedi la tua giornata in un colpo d'occhio. Con un team, ogni operatore e ogni cabina ha la sua colonna.", points: ["Per chi lavora in autonomia", "Colonne per team e cabine", "Nessuna doppia prenotazione"] },
      { icon: "move", title: "Drag & drop", text: "Sposta, allunga o scambia gli appuntamenti: niente maschere da compilare, niente caos.", points: ["Spostamenti in pochi secondi", "Agenda subito aggiornata", "Niente da ricreare"] },
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
        question: "L'agenda appuntamenti va bene anche se lavoro in autonomia?",
        answer:
          "Sì. Molti centri estetici usano Treatflow senza un team. Vedi la tua giornata con tutti gli appuntamenti, i clienti prenotano online direttamente negli orari liberi e ricevono in automatico conferma e promemoria. Le colonne per operatori e cabine ti servono solo quando il centro cresce.",
      },
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
    description: "Provala gratis per 14 giorni, senza carta di credito. Agenda, prenotazioni online e promemoria in un'unica app, da soli o in team.",
    secondary: { label: "Prenotazioni online", href: { page: "online-booking" } },
  },
};
