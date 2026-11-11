import type { ShiftPlannerContent } from "./types";

const faqItems: ShiftPlannerContent["faq"]["items"] = [
  {
    question: "Come pianifico turni e ferie nel mio centro estetico?",
    answer:
      "Con il pianificatore turni di Treatflow pianifichi ogni settimana per collaboratrice: uno o più turni al giorno, modelli come mattina, pomeriggio o giornata intera e assenze come ferie, malattia o formazione come periodo. Con “Copia settimana precedente” la settimana successiva è pronta in pochi secondi. La prenotazione online mostra poi solo gli orari in cui qualcuno è davvero in turno.",
  },
  {
    question: "Quanto costa il pianificatore turni?",
    answer:
      "Il pianificatore turni è un'app inclusa nel piano Booking (59 € al mese, 53 € al mese con abbonamento annuale, IVA esclusa) e al momento non costa nulla in più. Lo attivi da App → Pianificatore turni e puoi provarlo gratis durante i 14 giorni di prova.",
  },
  {
    question: "Cosa succede agli orari di lavoro attuali?",
    answer:
      "Quando lo attivi, Treatflow compila le prossime 8 settimane in base agli orari di lavoro attuali, così non perdi orari prenotabili. Dopo continui a pianificare tu: Treatflow non riempie le settimane in automatico. Se disattivi il pianificatore turni tornano a valere gli orari di lavoro normali e il tuo piano resta salvato.",
  },
  {
    question: "I clienti vedono perché qualcuno non è prenotabile?",
    answer:
      "No. Durante ferie, malattia o formazione la collaboratrice semplicemente non è prenotabile online in quel periodo. I clienti vedono solo gli orari liberi, mai il motivo dell'assenza.",
  },
  {
    question: "Cosa succede agli appuntamenti già prenotati?",
    answer:
      "Gli appuntamenti prenotati restano, anche se modifichi un turno o inserisci delle ferie. Se un appuntamento cade fuori dal turno o in un'assenza, Treatflow te lo segnala quando apri l'appuntamento, così puoi spostarlo per tempo.",
  },
  {
    question: "Posso pianificare più turni nello stesso giorno?",
    answer:
      "Sì. Per ogni collaboratrice e ogni giorno puoi inserire tutti i turni che vuoi, ad esempio 9–12 e 15–19 con una lunga pausa pranzo. Basta che i turni non si sovrappongano.",
  },
  {
    question: "I turni valgono anche fuori dagli orari di apertura?",
    answer:
      "Sì. Con il pianificatore turni attivo conta il turno pianificato, anche se inizia prima o finisce dopo i normali orari di apertura. Così puoi offrire, ad esempio, un giovedì serale con una collaboratrice senza cambiare gli orari di apertura.",
  },
  {
    question: "Posso aprire un turno solo per alcuni trattamenti?",
    answer:
      "Sì. Ogni turno e ogni modello può essere limitato online a determinate categorie o trattamenti, ad esempio solo laser il giovedì pomeriggio. Nel piano settimanale vedi sul turno cosa è prenotabile online.",
  },
  {
    question: "Si tiene conto dei giorni festivi?",
    answer:
      "Sì. I festivi in cui il tuo centro è chiuso compaiono nel piano turni come colonna grigia con il nome della festività. Li imposti da Impostazioni → Orari di apertura → Festivi.",
  },
  {
    question: "Chi può modificare il piano turni?",
    answer:
      "Il piano turni lo modificano la titolare e le collaboratrici con ruolo di amministratrice. Chi accede solo con il PIN non ha accesso al piano.",
  },
];

export const shiftPlannerIt: ShiftPlannerContent = {
  meta: {
    title: "Pianificazione turni per centri estetici: turni e ferie",
    description:
      "Pianificatore turni per centri estetici: turni settimanali, ferie e malattia in un unico piano – la prenotazione online mostra solo gli orari in cui qualcuno lavora.",
    keywords: [
      "pianificazione turni centro estetico",
      "software turni personale",
      "turni dipendenti centro estetico",
      "gestione turni salone",
      "app turni di lavoro",
      "pianificazione ferie dipendenti",
      "prenotazione online turni",
    ],
  },
  dates: { modified: "2026-11-11", published: "2026-11-11" },
  schema: {
    id: "shift-planner",
    webPage: {
      name: "Pianificazione turni per centri estetici: turni e ferie",
      description:
        "Pianificatore turni per centri estetici con piano settimanale per collaboratrice, modelli di turno, ferie e malattia – la prenotazione online segue il piano turni.",
    },
    software: {
      name: "Treatflow pianificatore turni per centri estetici",
      description:
        "Pianificatore turni con piano settimanale per collaboratrice, modelli di turno e assenze. La prenotazione online propone solo orari all'interno dei turni pianificati.",
      featureList: [
        "Piano settimanale per collaboratrice con più turni al giorno",
        "Modelli di turno come mattina, pomeriggio e giornata intera",
        "Copia la settimana precedente o compila dagli orari di lavoro",
        "Ferie, malattia e formazione come periodo",
        "Prenotazione online solo nei turni pianificati",
        "Turni aperti solo per alcuni trattamenti",
        "Turni e assenze nell'agenda appuntamenti",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Pianificatore turni",
  hero: {
    eyebrow: "Pianificatore turni e personale",
    eyebrowIcon: "calendar-clock",
    title: { before: "Pianificazione turni per centri estetici: ", highlight: "si prenota solo quando qualcuno lavora" },
    description:
      "Pianifica la settimana del tuo team con turni, modelli e ferie. La prenotazione online segue automaticamente il piano turni: i giorni senza turno e le assenze non sono prenotabili.",
    chips: ["Turni settimanali", "Ferie e malattia", "Prenotazioni secondo il piano"],
    secondaryCta: { label: "Agenda appuntamenti", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Come pianifico turni e ferie nel mio centro estetico?",
        answer:
          "Con il pianificatore turni di Treatflow pianifichi ogni settimana per collaboratrice: uno o più turni al giorno, modelli come mattina, pomeriggio o giornata intera e assenze come ferie o malattia come periodo. La prenotazione online mostra poi solo gli orari in cui qualcuno è davvero in turno.",
      },
      {
        question: "Cosa succede alla prenotazione online se qualcuno è in ferie?",
        answer:
          "Durante ferie, malattia o formazione la collaboratrice non è prenotabile online. I clienti non vedono il motivo, solo gli orari liberi delle colleghe. Gli appuntamenti già prenotati restano.",
      },
    ],
    image: {
      src: "/images/mockups/it/schichtplan.png",
      alt: "Pianificatore turni Treatflow – piano settimanale con turni e assenze per collaboratrice",
    },
  },
  understand: {
    title: "Un piano turni che guida le tue prenotazioni online",
    description:
      "Invece di orari fissi pianifichi settimana per settimana, e i clienti prenotano solo quando qualcuno è davvero in centro.",
    items: [
      {
        icon: "calendar-days",
        title: "Settimana per settimana",
        text: "Ogni collaboratrice ha uno o più turni al giorno, anche spezzati con pausa pranzo. Le ore della settimana compaiono nella colonna “Totale”.",
      },
      {
        icon: "plane",
        title: "Ferie, malattia, formazione",
        text: "Inserisci le assenze come periodo. In quei giorni la collaboratrice non è prenotabile online e i clienti non vedono il motivo.",
      },
      {
        icon: "globe",
        title: "Prenotazioni secondo il piano",
        text: "La pagina di prenotazione mostra solo orari nei turni pianificati. I giorni senza turno non sono prenotabili; anche lista d'attesa e spostamenti seguono il piano.",
      },
    ],
  },
  howItWorks: {
    description: "Tre passi dal piano settimanale alle prenotazioni online giuste.",
    steps: [
      {
        title: "Attiva il pianificatore turni",
        text: "Attivi il pianificatore turni dalla sezione App. Per non perdere orari prenotabili, Treatflow compila le prossime 8 settimane dagli orari di lavoro attuali.",
      },
      {
        title: "Adatta la settimana",
        text: "Inserisci turni da un modello, copia la settimana precedente o modifica singoli giorni. Ferie e malattia le inserisci come periodo.",
      },
      {
        title: "I clienti prenotano secondo il piano",
        text: "La prenotazione online propone solo orari all'interno dei turni. Nell'agenda vedi turni e assenze direttamente nella vista giornaliera.",
      },
    ],
  },
  cards: {
    description: "Tutto per pianificare il personale del tuo centro, collegato ad agenda e prenotazioni online.",
    items: [
      {
        icon: "users",
        title: "Piano settimanale per collaboratrice",
        text: "Le collaboratrici una sotto l'altra, i giorni uno accanto all'altro, con tutti i turni che servono.",
        points: ["Turni spezzati", "Ore settimanali", "Copia settimana precedente"],
      },
      {
        icon: "layers",
        title: "Modelli di turno",
        text: "Crea modelli come mattina, pomeriggio o giornata intera e inseriscili con un clic. Oppure compila una settimana dagli orari di lavoro standard.",
        points: ["Modelli personalizzati", "Scelta rapida per giorno", "Compila dagli orari"],
      },
      {
        icon: "plane",
        title: "Assenze",
        text: "Ferie, malattia, formazione o altre assenze come periodo, con nota facoltativa.",
        points: ["Ferie e malattia", "Formazione", "Il motivo resta interno"],
      },
      {
        icon: "globe",
        title: "Prenotazione online secondo il piano",
        text: "Si prenota solo all'interno dei turni pianificati, anche dalla lista d'attesa e quando i clienti spostano da soli l'appuntamento.",
        points: ["Giorni senza turno bloccati", "Lista d'attesa e spostamenti", "Gli appuntamenti restano"],
      },
      {
        icon: "list-ordered",
        title: "Turni per alcuni trattamenti",
        text: "Apri un turno online solo per determinate categorie o trattamenti, ad esempio solo laser il giovedì pomeriggio.",
        points: ["Impostabile per turno", "Categorie o trattamenti", "Anche nei modelli"],
      },
      {
        icon: "calendar",
        title: "Visibile in agenda",
        text: "Nella vista giornaliera gli orari fuori turno sono tratteggiati, mentre turni e assenze compaiono sotto il nome.",
        points: ["Tratteggio fuori turno", "Avviso sull'appuntamento", "Festivi nel piano"],
      },
    ],
  },
  faq: {
    title: "Domande frequenti sul pianificatore turni",
    items: faqItems,
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Agenda appuntamenti", description: "Team e cabine in un'unica agenda" },
      { href: { page: "online-booking" }, title: "Prenotazioni online", description: "Prenotazioni 24 ore su 24 con il tuo link" },
      { href: { page: "messaging" }, title: "Promemoria", description: "Promemoria automatici via email" },
    ],
  },
  cta: {
    title: "Pianifica il team, le prenotazioni seguono",
    description: "Prova gratis per 14 giorni, senza carta di credito. Piano turni, agenda e prenotazioni online in un'unica app.",
    secondary: { label: "Agenda appuntamenti", href: { page: "appointment-calendar" } },
  },
};
