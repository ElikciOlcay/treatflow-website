import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarNl: AppointmentCalendarContent = {
  meta: {
    title: "Online agenda voor schoonheidssalons: alleen of met een team",
    description:
      "Online agenda voor schoonheidssalons, alleen of met een team: online boeken, drag-and-drop, herinneringen, kolommen voor team & ruimtes. Geen commissie.",
    keywords: [
      "online agenda schoonheidssalon",
      "afsprakenkalender salon",
      "planningssoftware salon",
      "afsprakensoftware schoonheidssalon",
      "afsprakenplanner salon",
      "online agenda zelfstandige schoonheidsspecialist",
      "afsprakenplanner zzp schoonheidsspecialist",
      "planning medewerkers en ruimtes",
      "afsprakensoftware esthetische kliniek",
      "agenda drag-and-drop",
    ],
  },
  dates: { modified: "2026-11-09", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Online agenda voor schoonheidssalons: alleen of met een team",
      description:
        "Online agenda voor schoonheidssalons – voor zelfstandigen en teams – met drag-and-drop, online boeken, automatische herinneringen en kolommen voor medewerkers en ruimtes.",
    },
    software: {
      name: "Treatflow online agenda voor schoonheidssalons",
      description:
        "Online agenda voor schoonheidssalons – alleen of met een team – met drag-and-drop, online boeken, automatische herinneringen en kolommen voor medewerkers en ruimtes.",
      featureList: [
        "Online agenda voor zelfstandigen en teams",
        "Dagoverzicht met een kolom per medewerker of ruimte",
        "Bezetting en vrije plekken in één oogopslag",
        "Geen dubbele boekingen van medewerkers en ruimtes",
        "Afspraken verslepen met drag-and-drop",
        "Dag-, week- en maandoverzicht",
        "Online boeken en automatische herinneringen",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Online agenda",
  hero: {
    eyebrow: "Planning & online agenda",
    eyebrowIcon: "calendar",
    title: { before: "De online agenda voor je salon – ", highlight: "alleen of met een team" },
    description:
      "Je online agenda met online boeken, herinneringen en drag-and-drop – ideaal als je alleen werkt. Groeit je salon, dan krijgen medewerkers en ruimtes elk een eigen kolom.",
    chips: ["Alleen of met een team", "Drag-and-drop", "Minder no-shows"],
    secondaryCta: { label: "Online boeken", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Hoe plan je afspraken in een schoonheidssalon het handigst?",
        answer:
          "Treatflow brengt afspraken, online boekingen en herinneringen samen in één agenda – of je nu alleen werkt of met een team. Werk je alleen, dan zie je je hele dag met alle afspraken in één oogopslag. Met een team geeft het dagoverzicht elke medewerker of ruimte een eigen kolom, zodat je meteen ziet waar nog plek is en dubbele boekingen voorkomt. Online boeken en automatische herinneringen zorgen bovendien voor minder telefoontjes en minder no-shows.",
      },
      {
        question: "Welke afsprakensoftware is geschikt voor esthetische klinieken?",
        answer:
          "Treatflow combineert een agenda met kolommen voor medewerkers en ruimtes, online boeken voor consulten en behandelingen, en herinneringen per e-mail. Boekingen komen zonder commissie direct in je agenda.",
      },
    ],
    image: {
      src: "/images/mockups/nl/kalender-overview.png",
      alt: "Online agenda van Treatflow – dagoverzicht met medewerkers en ruimtes",
    },
  },
  understand: {
    title: "Een agenda die meegroeit met je salon",
    description: "Of je nu alleen werkt of met een team: alle afspraken in één oogopslag – je ziet meteen wanneer er nog plek is.",
    items: [
      {
        icon: "calendar-days",
        title: "Alleen of met een team",
        text: "Werk je alleen, dan heb je je dag met alle afspraken in beeld. Komen er medewerkers of behandelruimtes bij, dan krijgt elke persoon en elke ruimte een eigen kolom.",
      },
      {
        icon: "move",
        title: "Verplaatsen met drag-and-drop",
        text: "Schuift er iets? Sleep de afspraak gewoon naar een ander tijdstip – verwijderen en opnieuw inplannen is niet nodig.",
      },
      {
        icon: "bell",
        title: "Automatische herinneringen",
        text: "Je klanten krijgen vóór hun afspraak een herinnering per e-mail. Zo worden afspraken merkbaar minder vaak vergeten.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen een planning die loopt.",
    steps: [
      { title: "Behandelingen en werktijden invoeren", text: "Zet je behandelingen en werktijden erin. Heb je een team of meerdere ruimtes, voeg die dan ook toe – dan krijgt elke persoon en elke ruimte een eigen kolom." },
      { title: "Afspraken toevoegen", text: "Plan afspraken zelf in of zet online boeken aan – boekingen van klanten verschijnen dan vanzelf in de agenda." },
      { title: "Herinneringen gaan vanzelf", text: "Je klanten krijgen een boekingsbevestiging en een herinnering per e-mail – je hoeft zelf niets te versturen." },
    ],
  },
  cards: {
    title: "Wat je krijgt",
    description: "Alles voor je planning – of je nu alleen werkt of met een team, met online boeken en herinneringen in één agenda.",
    items: [
      { icon: "users", title: "Alleen of met een team", text: "Werk je alleen, dan zie je je dag in één oogopslag. Met een team krijgt elke medewerker en elke ruimte een eigen kolom.", points: ["Voor zelfstandigen", "Kolommen voor team & ruimtes", "Geen dubbele boekingen"] },
      { icon: "move", title: "Drag-and-drop", text: "Afspraken verplaatsen, verlengen of omwisselen – zonder gedoe.", points: ["In een paar seconden verplaatst", "Direct zichtbaar in de agenda", "Niets opnieuw invoeren"] },
      { icon: "layout-grid", title: "Dag, week of maand", text: "Wissel tussen dag, week en maand – precies wat je op dat moment nodig hebt.", points: ["Dag", "Week", "Maand"] },
      { icon: "bell", title: "Automatische herinneringen", text: "Een herinnering per e-mail voor elke afspraak. Minder no-shows, minder nabellen.", points: ["Herinneringen per e-mail", "Tijdstip naar keuze", "Annuleringslink"] },
      { icon: "calendar", title: "Online boeken", text: "Boekingen komen direct in de agenda, met automatische bevestiging. Dubbele boekingen zijn uitgesloten.", points: ["Persoonlijke boekingslink", "Direct in de agenda", "Geen commissie"] },
      { icon: "clock", title: "Minder administratie", text: "Minder telefoontjes, duidelijke afspraken – meer tijd voor behandelingen in plaats van voor planning.", points: ["Minder telefoontjes", "Duidelijke tijdsloten", "Snel overzicht"] },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over de online agenda",
    items: [
      {
        question: "Is de online agenda ook geschikt als ik alleen werk?",
        answer:
          "Ja. Veel schoonheidsspecialisten werken in hun eentje met Treatflow. Je ziet je dag met alle afspraken, klanten boeken online direct op een vrij moment in je agenda en krijgen automatisch een bevestiging en een herinnering. Kolommen voor medewerkers en ruimtes heb je pas nodig als je salon groeit.",
      },
      {
        question: "Hoe plan je afspraken in een schoonheidssalon het handigst?",
        answer:
          "Met een online agenda die voor salons is gemaakt, zoals Treatflow. Klanten maken 24/7 zelf online een afspraak, automatische herinneringen per e-mail zorgen voor merkbaar minder no-shows en in de overzichtelijke agenda zie je altijd hoe je dag eruitziet.",
      },
      {
        question: "Wat kost een online agenda voor een schoonheidssalon?",
        answer:
          "Bij Treatflow zit de agenda met online boeken in het Booking-pakket, vanaf €59 per maand (€53 per maand bij jaarbetaling, excl. btw). Probeer het 14 dagen gratis, zonder creditcard. Geen verborgen kosten en geen commissie per boeking.",
      },
      {
        question: "Is er een gratis afsprakenplanner voor schoonheidssalons?",
        answer:
          "Die zijn er – meestal met beperkingen, advertenties of een commissie per boeking via een boekingsplatform. Een papieren agenda of Excel-lijst kost niets, maar daarmee ontvang je geen online boekingen, verstuur je geen herinneringen en koppel je niets aan je klantdossiers. Treatflow kun je 14 dagen gratis proberen zonder creditcard; daarna kost de agenda met online boeken €59 per maand, zonder commissie per afspraak.",
      },
      {
        question: "Afsprakenplanner, agenda of boekingssysteem: wat is het verschil?",
        answer:
          "In de praktijk bedoel je met alle drie bijna hetzelfde: de planner of agenda is het overzicht waarin jij en je team afspraken beheren, het boekingssysteem is het deel waarmee klanten zelf online boeken. In Treatflow is dat één geheel – online boekingen komen direct in de agenda, inclusief herinneringen en klantdossiers.",
      },
      {
        question: "Kunnen mijn klanten online een afspraak maken?",
        answer:
          "Ja. Je krijgt een eigen boekingslink die je deelt op je website, op Instagram of in berichten. Klanten kiezen dag en nacht zelf hun behandeling en tijdstip. Nieuwe boekingen verschijnen direct in de agenda en bevestigingen worden automatisch per e-mail verstuurd.",
      },
      {
        question: "Hoe verminder ik no-shows in mijn salon?",
        answer:
          "Automatische herinneringen per e-mail zijn de meest effectieve manier om no-shows te verminderen. Treatflow verstuurt herinneringen op tijdstippen die jij kiest, zodat veel minder klanten hun afspraak vergeten.",
      },
      {
        question: "Welke functies moet een online agenda voor salons hebben?",
        answer:
          "Een goede online agenda voor schoonheidssalons heeft online boeken, een dag-, week- en maandoverzicht, planning van medewerkers en ruimtes, automatische herinneringen per e-mail, drag-and-drop en een koppeling met klantdossiers en behandelverslagen.",
      },
      {
        question: "Hoe plan ik meerdere medewerkers en ruimtes?",
        answer:
          "In het dagoverzicht van Treatflow staan medewerkers of ruimtes in aparte kolommen. Je ziet waar nog plek is, voorkomt dubbele boekingen en vangt last-minute wijzigingen makkelijker op.",
      },
      {
        question: "Hoe voorkom ik dubbele boekingen van medewerkers en ruimtes?",
        answer:
          "Treatflow toont de bezetting van medewerkers en ruimtes naast elkaar. Vrije en geboekte tijden zie je in één oogopslag, zodat je knelpunten en dubbele boekingen vóór bent.",
      },
      {
        question: "Welke afsprakensoftware is geschikt voor esthetische klinieken?",
        answer:
          "Treatflow combineert een agenda met kolommen voor medewerkers en ruimtes, online boeken voor consulten en behandelingen, en herinneringen per e-mail. Nieuwe boekingen komen direct in de agenda, zonder commissie per afspraak.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Online boeken", description: "24/7 via je boekingslink" },
      { href: { page: "messaging" }, title: "Herinneringen", description: "Automatische herinneringen per e-mail" },
      { href: { page: "client-records" }, title: "Klantdossiers", description: "Klantdossier direct vanuit de afspraak" },
    ],
  },
  cta: {
    title: "Klaar voor een planning zonder stress?",
    description: "Probeer het 14 dagen gratis – geen creditcard nodig. Agenda, online boeken en herinneringen in één app, alleen of met een team.",
    secondary: { label: "Online boeken", href: { page: "online-booking" } },
  },
};
