import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarNl: AppointmentCalendarContent = {
  meta: {
    title: "Afsprakenkalender voor schoonheidssalons: team & ruimtes",
    description:
      "Afsprakensoftware voor schoonheidssalons en esthetische klinieken: een agenda met kolommen voor medewerkers en ruimtes, online boeken, slepen en neerzetten en automatische herinneringen per e-mail. Geen commissie, 14 dagen gratis.",
    keywords: [
      "afsprakenkalender schoonheidssalon",
      "planningssoftware salon",
      "afsprakensoftware schoonheidssalon",
      "online agenda schoonheidssalon",
      "planning medewerkers en ruimtes",
      "afsprakensoftware esthetische kliniek",
      "afsprakenkalender slepen en neerzetten",
    ],
  },
  dates: { modified: "2026-10-28", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Afsprakenkalender voor schoonheidssalons: team & ruimtes",
      description:
        "Afsprakenkalender voor schoonheidssalons met een dagweergave voor medewerkers en ruimtes, slepen en neerzetten, online boeken en automatische herinneringen.",
    },
    software: {
      name: "Treatflow-afsprakenkalender voor schoonheidssalons",
      description:
        "Afsprakenkalender voor schoonheidssalons met kolommen voor medewerkers en ruimtes, slepen en neerzetten, online boeken en automatische herinneringen.",
      featureList: [
        "Dagweergave met een kolom per medewerker of ruimte",
        "Bezetting en vrije capaciteit in één oogopslag",
        "Dubbele boekingen van medewerkers en ruimtes voorkomen",
        "Afspraken verplaatsen met slepen en neerzetten",
        "Dag-, week- en maandweergave",
        "Online boeken en automatische herinneringen",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Afsprakenkalender",
  hero: {
    eyebrow: "Planning & afsprakenkalender",
    eyebrowIcon: "calendar",
    title: { before: "De afsprakenkalender voor je salon – voor je team en je ", highlight: "ruimtes" },
    description:
      "De planningstool voor je schoonheidssalon: medewerkers, ruimtes en afspraken in één overzicht, inclusief online boeken. Verplaats afspraken met slepen en neerzetten en voorkom dubbele boekingen.",
    chips: ["Slepen en neerzetten", "Team & ruimtes", "Minder no-shows"],
    secondaryCta: { label: "Online boeken", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Hoe organiseer je afspraken in een schoonheidssalon het best?",
        answer:
          "Treatflow brengt afspraken, medewerkers en ruimtes samen in één agenda. In de dagweergave heeft elke medewerker of ruimte een eigen kolom, zodat je vrije capaciteit meteen ziet, dubbele boekingen voorkomt en wijzigingen sneller afhandelt. Online boeken en automatische herinneringen zorgen bovendien voor minder telefoontjes en minder no-shows.",
      },
      {
        question: "Welke afsprakensoftware is geschikt voor esthetische klinieken?",
        answer:
          "Treatflow combineert een agenda met kolommen voor medewerkers en ruimtes, online boeken voor consulten en behandelingen, en herinneringen per e-mail. Boekingen komen zonder commissie direct in de agenda.",
      },
    ],
    image: {
      src: "/images/mockups/kalender-overview.png",
      alt: "Treatflow-afsprakenkalender – dagweergave met medewerkers en ruimtes",
    },
  },
  understand: {
    title: "Planningssoftware voor je hele salon",
    description: "Alle afspraken, medewerkers en ruimtes in één oogopslag – je ziet direct wie wanneer vrij is.",
    items: [
      {
        icon: "users",
        title: "Team, ruimtes en behandelingen",
        text: "Voeg je medewerkers, behandelruimtes en behandelingen toe. De agenda toont vervolgens een aparte kolom voor elke medewerker of ruimte.",
      },
      {
        icon: "move",
        title: "Verplaatsen met slepen en neerzetten",
        text: "Verandert de planning? Sleep de afspraak gewoon naar een nieuw tijdstip – je hoeft hem niet te verwijderen en opnieuw aan te maken.",
      },
      {
        icon: "bell",
        title: "Automatische herinneringen",
        text: "Je klanten krijgen voor hun afspraak een herinnering per e-mail. Zo worden afspraken merkbaar minder vaak vergeten.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen een draaiende salonplanning.",
    steps: [
      { title: "Team, behandelingen en ruimtes instellen", text: "Voeg je medewerkers, behandelingen en ruimtes toe, inclusief werktijden. De agenda toont vervolgens voor elk een aparte kolom." },
      { title: "Afspraken toevoegen", text: "Plan afspraken zelf in of zet online boeken aan – de boekingen van je klanten verschijnen dan automatisch in de agenda." },
      { title: "Herinneringen gaan automatisch", text: "Je klanten krijgen een boekingsbevestiging en een herinnering per e-mail – je hoeft niets handmatig te versturen." },
    ],
  },
  cards: {
    title: "Wat je krijgt",
    description: "Alles voor je salonplanning – team, ruimtes en herinneringen in één agenda.",
    items: [
      { icon: "users", title: "Team & ruimtes", text: "Eén kolom per medewerker of ruimte. Bezetting en vrije tijdsloten in één oogopslag.", points: ["Kolommenweergave", "Vrije capaciteit zien", "Geen dubbele boekingen"] },
      { icon: "move", title: "Slepen en neerzetten", text: "Afspraken verplaatsen, verlengen of omwisselen – zonder formulieren, zonder chaos.", points: ["In seconden verplaatst", "Direct zichtbaar in de agenda", "Voor het hele team"] },
      { icon: "layout-grid", title: "Van dag- tot maandweergave", text: "Wissel tussen dag, week en maand – precies wat je op dat moment nodig hebt.", points: ["Dagweergave", "Week", "Maand"] },
      { icon: "bell", title: "Automatische herinneringen", text: "Herinneringen per e-mail voor elke afspraak. Minder no-shows, minder nabellen.", points: ["Herinneringen per e-mail", "Tijdstip naar keuze", "Annuleringslink"] },
      { icon: "calendar", title: "Online boeken", text: "Boekingen komen direct in de agenda. Geen dubbele boekingen, automatische bevestiging.", points: ["Persoonlijke boekingslink", "Direct in de agenda", "Geen commissie"] },
      { icon: "clock", title: "Minder administratie", text: "Minder telefoontjes, duidelijkere processen – meer tijd voor behandelingen in plaats van voor de planning.", points: ["Minder telefoontjes", "Duidelijke tijdsloten", "Snel overzicht"] },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over de afsprakenkalender voor salons",
    items: [
      {
        question: "Hoe organiseer je afspraken in een schoonheidssalon het best?",
        answer:
          "Een gespecialiseerde planningstool zoals Treatflow is de meest efficiënte manier. Met online boeken kunnen klanten 24/7 een afspraak maken, automatische herinneringen per e-mail zorgen voor merkbaar minder no-shows en de overzichtelijke agenda geeft je op elk moment het volledige beeld.",
      },
      {
        question: "Wat kost afsprakensoftware voor schoonheidssalons?",
        answer:
          "Treatflow biedt planning met online boeken vanaf €59 per maand met het Booking-pakket (€53 per maand bij jaarlijkse betaling, excl. btw). Probeer het 14 dagen gratis, zonder creditcard. Er zijn geen verborgen kosten en geen commissie per boeking.",
      },
      {
        question: "Bestaat er een gratis afsprakenplanner voor schoonheidssalons?",
        answer:
          "Gratis planners bestaan – meestal met beperkingen, advertenties of een commissie per boeking via een marktplaatsmodel. Een papieren agenda of spreadsheet kost niets, maar daarmee kun je geen online boekingen ontvangen, geen herinneringen versturen en niets koppelen aan je klantdossiers. Treatflow kun je 14 dagen gratis proberen zonder creditcard; daarna kost de agenda met online boeken €59 per maand, zonder commissie per afspraak.",
      },
      {
        question: "Afsprakenplanner, agenda of boekingssysteem – wat is het verschil?",
        answer:
          "In de dagelijkse salonpraktijk bedoelen alle drie bijna hetzelfde: de planner of agenda is het overzicht waarin jij en je team afspraken beheren. Het boekingssysteem is het deel waarmee klanten zelf online boeken. In Treatflow is dat één en hetzelfde – online boekingen komen direct in de agenda, inclusief herinneringen en klantdossiers.",
      },
      {
        question: "Kunnen mijn klanten online een afspraak maken?",
        answer:
          "Ja. Je krijgt een persoonlijke boekingslink die je kunt delen op je website, op Instagram of in berichten. Klanten kiezen dag en nacht zelf hun behandeling en tijdstip. Nieuwe boekingen verschijnen direct in de agenda en bevestigingen worden automatisch per e-mail verstuurd.",
      },
      {
        question: "Hoe verminder ik no-shows in mijn salon?",
        answer:
          "Automatische herinneringen per e-mail zijn de meest effectieve manier om no-shows te verminderen. Treatflow verstuurt herinneringen op tijdstippen die jij kiest, zodat veel minder klanten hun afspraak vergeten.",
      },
      {
        question: "Welke functies moet een afsprakenkalender voor salons hebben?",
        answer:
          "Een goede afsprakenkalender voor schoonheidssalons biedt online boeken, een dag-, week- en maandweergave, planning van medewerkers en ruimtes, automatische herinneringen per e-mail, slepen en neerzetten en een koppeling met klantdossiers en behandeldocumentatie.",
      },
      {
        question: "Hoe plan ik meerdere medewerkers en ruimtes?",
        answer:
          "In de dagweergave van Treatflow staan medewerkers of ruimtes in aparte kolommen. Je ziet vrije capaciteit, voorkomt dubbele boekingen en stemt wijzigingen op het laatste moment makkelijker af.",
      },
      {
        question: "Hoe voorkom ik dubbele boekingen van medewerkers en ruimtes?",
        answer:
          "Treatflow toont de bezetting van medewerkers en ruimtes naast elkaar. Vrije en geboekte tijden zie je in één oogopslag, zodat knelpunten en dubbele boekingen al vroeg worden voorkomen.",
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
      { href: { page: "client-records" }, title: "Klantdossiers", description: "Klantprofiel direct vanuit de afspraak" },
    ],
  },
  cta: {
    title: "Klaar voor een planning zonder stress?",
    description: "Probeer het 14 dagen gratis – geen creditcard nodig. Agenda, teamplanning en online boeken in één app.",
    secondary: { label: "Online boeken", href: { page: "online-booking" } },
  },
};
