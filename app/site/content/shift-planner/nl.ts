import type { ShiftPlannerContent } from "./types";

const faqItems: ShiftPlannerContent["faq"]["items"] = [
  {
    question: "Hoe plan ik diensten en vakantie in mijn salon?",
    answer:
      "Met de roosterplanner van Treatflow plan je elke week per medewerker: één of meer diensten per dag, sjablonen zoals vroeg, laat of hele dag, en afwezigheid zoals vakantie, ziekte of training als periode. Met ‘Vorige week kopiëren' staat de volgende week er in een paar seconden. Online boeken toont daarna alleen tijden waarin echt iemand is ingeroosterd.",
  },
  {
    question: "Wat kost de roosterplanner?",
    answer:
      "De roosterplanner is een app in het Booking-pakket (€59 per maand, €53 per maand bij jaarbetaling, excl. btw) en kost op dit moment niets extra. Je zet hem aan onder Apps → Roosterplanner en kunt hem in de proefperiode van 14 dagen gratis uitproberen.",
  },
  {
    question: "Wat gebeurt er met mijn huidige werktijden?",
    answer:
      "Zodra je hem aanzet, vult Treatflow de komende 8 weken in op basis van je huidige werktijden, zodat er geen boekbare tijden wegvallen. Daarna plan je zelf verder – Treatflow vult niet automatisch aan. Zet je de roosterplanner weer uit, dan gelden de gewone werktijden weer en blijft je rooster bewaard.",
  },
  {
    question: "Zien klanten waarom iemand niet boekbaar is?",
    answer:
      "Nee. Tijdens vakantie, ziekte of training is de medewerker in die periode gewoon niet online boekbaar. Klanten zien alleen de vrije tijden, nooit de reden van de afwezigheid.",
  },
  {
    question: "Wat gebeurt er met afspraken die al geboekt zijn?",
    answer:
      "Geboekte afspraken blijven staan, ook als je een dienst wijzigt of vakantie invoert. Valt een afspraak buiten een dienst of in een afwezigheid, dan wijst Treatflow je daarop zodra je de afspraak opent – zo kun je hem op tijd verplaatsen.",
  },
  {
    question: "Kan ik meerdere diensten op één dag plannen?",
    answer:
      "Ja. Per medewerker en per dag zijn onbeperkt veel diensten mogelijk, bijvoorbeeld 9–12 en 15–19 uur met een lange middagpauze. De diensten mogen elkaar alleen niet overlappen.",
  },
  {
    question: "Gelden diensten ook buiten de openingstijden?",
    answer:
      "Ja. Staat de roosterplanner aan, dan telt de geplande dienst – ook als die vóór of na je gewone openingstijden valt. Zo kun je bijvoorbeeld een koopavond met één medewerker aanbieden zonder je openingstijden aan te passen.",
  },
  {
    question: "Kan ik een dienst alleen voor bepaalde behandelingen openzetten?",
    answer:
      "Ja. Elke dienst en elk sjabloon kun je online beperken tot bepaalde categorieën of behandelingen, bijvoorbeeld alleen laser op donderdagmiddag. In het weekrooster staat dan bij de dienst wat online boekbaar is.",
  },
  {
    question: "Wordt er rekening gehouden met feestdagen?",
    answer:
      "Ja. Feestdagen waarop je salon gesloten is, verschijnen in het rooster als grijze kolom met de naam van de feestdag. Je legt ze vast onder Instellingen → Openingstijden → Feestdagen.",
  },
  {
    question: "Wie mag het rooster bewerken?",
    answer:
      "Het rooster bewerken eigenaren en medewerkers met de beheerdersrol. Medewerkers die alleen met hun pincode inloggen, hebben er geen toegang toe.",
  },
];

export const shiftPlannerNl: ShiftPlannerContent = {
  meta: {
    title: "Roosterplanner voor je salon: diensten & vakantie",
    description:
      "Roosterplanner voor salons en klinieken: diensten per week plannen, vakantie en ziekte invoeren – online boeken toont alleen tijden waarin iemand werkt.",
    keywords: [
      "roosterplanner salon",
      "personeelsrooster schoonheidssalon",
      "roosterprogramma salon",
      "personeelsplanning salon",
      "dienstrooster app",
      "vakantieplanning medewerkers",
      "online boeken rooster",
    ],
  },
  dates: { modified: "2026-11-11", published: "2026-11-11" },
  schema: {
    id: "shift-planner",
    webPage: {
      name: "Roosterplanner voor je salon: diensten & vakantie",
      description:
        "Roosterplanner voor salons en klinieken met een weekrooster per medewerker, dienstsjablonen, vakantie en ziekte – online boeken volgt het rooster.",
    },
    software: {
      name: "Treatflow roosterplanner voor salons",
      description:
        "Roosterplanner met een weekrooster per medewerker, dienstsjablonen en afwezigheid. Online boeken biedt alleen tijden binnen geplande diensten aan.",
      featureList: [
        "Weekrooster per medewerker met meerdere diensten per dag",
        "Dienstsjablonen zoals vroeg, laat en hele dag",
        "Vorige week kopiëren of vullen vanuit werktijden",
        "Vakantie, ziekte en training als periode",
        "Online boeken alleen binnen geplande diensten",
        "Diensten alleen voor bepaalde behandelingen openzetten",
        "Diensten en afwezigheid in de agenda",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Roosterplanner",
  hero: {
    eyebrow: "Roosterplanner & personeelsrooster",
    eyebrowIcon: "calendar-clock",
    title: { before: "Roosterplanner voor je salon: ", highlight: "klanten boeken alleen als er iemand werkt" },
    description:
      "Plan de week van je team met diensten, sjablonen en vakantie. Online boeken volgt automatisch het rooster – dagen zonder dienst en afwezigheid zijn niet boekbaar.",
    chips: ["Diensten per week", "Vakantie & ziekte", "Online boeken volgens rooster"],
    secondaryCta: { label: "Online agenda", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Hoe plan ik diensten en vakantie in mijn salon?",
        answer:
          "Met de roosterplanner van Treatflow plan je elke week per medewerker: één of meer diensten per dag, sjablonen zoals vroeg, laat of hele dag, en afwezigheid zoals vakantie of ziekte als periode. Online boeken toont daarna alleen tijden waarin echt iemand is ingeroosterd.",
      },
      {
        question: "Wat gebeurt er met online boeken als iemand op vakantie is?",
        answer:
          "Tijdens vakantie, ziekte of training is de medewerker niet online boekbaar. Klanten zien de reden niet, alleen de vrije tijden van de collega's. Afspraken die al geboekt zijn, blijven staan.",
      },
    ],
    image: {
      src: "/images/mockups/nl/schichtplan.png",
      alt: "Treatflow roosterplanner – weekrooster met diensten en afwezigheid per medewerker",
    },
  },
  understand: {
    title: "Een rooster dat je online boekingen stuurt",
    description:
      "In plaats van vaste werktijden plan je week voor week – en klanten boeken alleen als er echt iemand in de salon is.",
    items: [
      {
        icon: "calendar-days",
        title: "Week voor week plannen",
        text: "Elke medewerker krijgt per dag één of meer diensten, ook gesplitste diensten met middagpauze. De uren van de week zie je direct naast de naam.",
      },
      {
        icon: "plane",
        title: "Vakantie, ziekte, training",
        text: "Afwezigheid voer je in als periode. In die tijd is de medewerker niet online boekbaar – klanten zien de reden niet.",
      },
      {
        icon: "globe",
        title: "Online boeken volgens rooster",
        text: "Je boekingspagina toont alleen tijden binnen geplande diensten. Dagen zonder dienst zijn niet boekbaar; ook de wachtlijst en omboekingen volgen het rooster.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen van weekrooster naar passende online boekingen.",
    steps: [
      {
        title: "Roosterplanner aanzetten",
        text: "Onder Apps zet je de roosterplanner aan. Zodat er geen boekbare tijden wegvallen, vult Treatflow de komende 8 weken in vanuit je huidige werktijden.",
      },
      {
        title: "Week aanpassen",
        text: "Zet diensten via een sjabloon, kopieer de vorige week of wijzig losse dagen. Vakantie en ziekte voer je in als periode.",
      },
      {
        title: "Klanten boeken volgens rooster",
        text: "Online boeken biedt alleen tijden binnen de diensten aan. In de agenda zie je diensten en afwezigheid direct in de dagweergave.",
      },
    ],
  },
  cards: {
    description: "Alles voor de personeelsplanning in je salon – gekoppeld aan agenda en online boeken.",
    items: [
      {
        icon: "users",
        title: "Weekrooster per medewerker",
        text: "Medewerkers onder elkaar, de dagen naast elkaar – met onbeperkt veel diensten per dag.",
        points: ["Gesplitste diensten", "Uren per week", "Vorige week kopiëren"],
      },
      {
        icon: "layers",
        title: "Dienstsjablonen",
        text: "Maak sjablonen zoals vroeg, laat of hele dag en zet ze met één klik. Of vul een week vanuit de standaard werktijden.",
        points: ["Eigen sjablonen", "Snelkeuze per dag", "Vullen vanuit werktijden"],
      },
      {
        icon: "plane",
        title: "Afwezigheid",
        text: "Vakantie, ziekte, training of andere afwezigheid als periode – met een optionele notitie.",
        points: ["Vakantie & ziekte", "Trainingen", "Reden blijft intern"],
      },
      {
        icon: "globe",
        title: "Online boeken volgens rooster",
        text: "Er wordt alleen geboekt binnen geplande diensten – ook via de wachtlijst en als klanten zelf omboeken.",
        points: ["Dagen zonder dienst dicht", "Wachtlijst & omboeken", "Geboekte afspraken blijven"],
      },
      {
        icon: "list-ordered",
        title: "Diensten voor bepaalde behandelingen",
        text: "Zet een dienst online alleen open voor bepaalde categorieën of behandelingen – bijvoorbeeld alleen laser op donderdagmiddag.",
        points: ["Per dienst in te stellen", "Categorieën of behandelingen", "Ook in sjablonen"],
      },
      {
        icon: "calendar",
        title: "Zichtbaar in de agenda",
        text: "In de dagweergave zijn tijden buiten de dienst gearceerd, en diensten en afwezigheid staan onder de naam.",
        points: ["Arcering buiten diensten", "Melding bij de afspraak", "Feestdagen in het rooster"],
      },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over de roosterplanner",
    items: faqItems,
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Online agenda", description: "Team en ruimtes in één agenda" },
      { href: { page: "online-booking" }, title: "Online boeken", description: "24/7 via je boekingslink" },
      { href: { page: "messaging" }, title: "Herinneringen", description: "Automatische herinneringen per e-mail" },
    ],
  },
  cta: {
    title: "Plan je team – online boeken volgt vanzelf",
    description: "Probeer het 14 dagen gratis – zonder creditcard. Rooster, agenda en online boeken in één app.",
    secondary: { label: "Online agenda", href: { page: "appointment-calendar" } },
  },
};
