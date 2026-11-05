import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsNl: ClientWorkflowsContent = {
  meta: {
    title: "Klantworkflows voor schoonheidssalons: automatische nazorg",
    description:
      "Automatische klantopvolging met Treatflow: nazorg, oud-klanten terughalen en follow-ups in meerdere stappen, met wachttijden, voorwaarden en e-mails – zonder zelf na te bellen.",
    keywords: [
      "klantworkflows schoonheidssalon",
      "marketingautomatisering salon",
      "nazorg automatiseren",
      "klanten terughalen salon",
      "klantopvolging automatiseren",
      "follow-up workflow salon",
      "Treatflow workflows",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Klantworkflows voor schoonheidssalons: automatische nazorg",
      description:
        "Automatische klantopvolging in meerdere stappen: nazorg, oud-klanten terughalen en follow-ups met wachttijden, voorwaarden en e-mails.",
    },
  },
  breadcrumb: "Klantworkflows",
  hero: {
    eyebrow: "Klantworkflows",
    eyebrowIcon: "workflow",
    title: { before: "Automatische opvolging in ", highlight: "meerdere stappen" },
    description:
      "Zet nazorg, klanten terughalen en follow-ups op de automatische piloot – met wachttijden, voorwaarden en e-mails.",
    chips: ["Visuele editor", "Automatische e-mails", "Stopt bij een nieuwe boeking"],
    secondaryCta: { label: "Bekijk de herinneringen", href: { page: "messaging" } },
    capsules: [
      {
        question: "Hoe automatiseer ik nazorg en follow-ups in mijn schoonheidssalon?",
        answer:
          "Met klantworkflows in Treatflow zet je reeksen in meerdere stappen op: bijvoorbeeld 2 dagen na de behandeling vragen hoe het gaat, controleren of er al opnieuw is geboekt en pas dan uitnodigen voor een vervolgafspraak. Zo blijf je in beeld zonder zelf achter klanten aan te hoeven.",
      },
    ],
    image: {
      src: "/images/mockups/nl/kunden-workflows.jpg",
      alt: "Workfloweditor in Treatflow met trigger, wachttijd en bericht",
    },
  },
  understand: {
    title: "Reeksen die vanzelf doorlopen",
    description:
      "In plaats van losse herinneringen zet je complete reeksen op – ideaal voor nazorg, klanten terughalen en follow-ups in meerdere stappen.",
    items: [
      {
        icon: "heart",
        title: "Nazorg zonder extra werk",
        text: "Vraag automatisch hoe het met de huid gaat – en bied bij interesse meteen een vervolgafspraak aan.",
      },
      {
        icon: "bell",
        title: "Inactieve klanten terughalen",
        text: "Na 60–90 dagen zonder bezoek krijgt je klant een uitnodiging om weer langs te komen – persoonlijk en op het juiste moment.",
      },
      {
        icon: "git-branch",
        title: "Slim vertakken",
        text: "Check of er al opnieuw is geboekt. Zo ja, dan stopt de workflow – geen dubbele berichten.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen naar je eerste workflow.",
    steps: [
      { title: "Kies een trigger", text: "Start bijvoorbeeld na een afspraak of als een klant al een tijdje niet is geweest." },
      { title: "Verbind de stappen", text: "Zet wachttijden, berichten en voorwaarden achter elkaar in de visuele editor." },
      { title: "Zet hem aan", text: "Treatflow voert de reeks uit en verstuurt de berichten per e-mail." },
    ],
  },
  cards: {
    title: "Wat je krijgt",
    description: "Alles voor klantcommunicatie in meerdere stappen – overzichtelijk en makkelijk bij te sturen.",
    items: [
      { icon: "workflow", title: "Visuele editor", text: "Trigger, wachttijden, bericht en voorwaarde met drag-and-drop.", points: ["Helder overzicht", "Meerdere stappen", "Snel aan te passen"] },
      { icon: "message-circle", title: "E-mailberichten", text: "Elke stap komt rechtstreeks in de inbox van je klant.", points: ["E-mail", "Je eigen tekst", "Automatisch verstuurd"] },
      { icon: "clock", title: "Wachttijden", text: "Dagen of uren tussen de stappen – precies zoals jouw salon werkt.", points: ["Nazorg op het juiste moment", "Klanten terughalen", "Niets hoeven onthouden"] },
      { icon: "git-branch", title: "Voorwaarden", text: "Check bijvoorbeeld op nieuwe boekingen en stop de reeks op tijd.", points: ["Geen dubbele e-mails", "Slimme vertakking", "Relevantere berichten"] },
      { icon: "heart", title: "Nazorgreeksen", text: "Eerst even vragen hoe het gaat, daarna eventueel een vervolgafspraak – alleen als dat zinvol is.", points: ["Meer klantbinding", "Later minder no-shows", "Meer vervolgafspraken"] },
      { icon: "zap", title: "Klanten terughalen", text: "Nodig klanten die een tijd weg zijn geweest automatisch opnieuw uit.", points: ["60–90 dagen", "Persoonlijk", "Geen gedoe met lijstjes"] },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over klantworkflows",
    items: [
      {
        question: "Wat zijn klantworkflows in Treatflow?",
        answer:
          "Klantworkflows zijn automatische reeksen in meerdere stappen: met een trigger, wachttijden, berichten en voorwaarden. Zo lopen nazorg, het terughalen van klanten en follow-ups vanzelf – zonder dat je elk bericht zelf hoeft te sturen.",
      },
      {
        question: "Wat is het verschil tussen workflows en gewone herinneringen?",
        answer:
          "Gewone berichten (zoals afspraakherinneringen) bestaan uit één trigger en één bericht. Workflows zijn bedoeld voor reeksen met meerdere stappen en vertakkingen – bijvoorbeeld: na de behandeling vragen hoe het gaat, wachten, checken of er opnieuw is geboekt en pas dan een tweede bericht sturen.",
      },
      {
        question: "Via welk kanaal worden workflowberichten verstuurd?",
        answer:
          "Workflowstappen worden per e-mail verstuurd. Afspraakherinneringen blijven beschikbaar bij de gewone berichten.",
      },
      {
        question: "Kan een workflow stoppen als de klant opnieuw boekt?",
        answer:
          "Ja. Je kunt voorwaarden instellen, bijvoorbeeld checken of er sinds de laatste afspraak opnieuw is geboekt. Zo ja, dan stopt de reeks – je blijft in beeld zonder dubbele berichten te sturen.",
      },
      {
        question: "Met welke workflows kan ik het beste beginnen?",
        answer:
          "Populair zijn: nazorg 1–2 dagen na de behandeling, klanten terughalen na 60–90 dagen zonder bezoek, en nazorg in meerdere stappen waarbij het tweede bericht alleen verstuurd wordt als er nog geen vervolgafspraak is.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Herinneringen", description: "E-mail vóór de afspraak" },
      { href: { page: "appointment-calendar" }, title: "Online agenda", description: "Afspraken en automatiseringen samen" },
      { href: { page: "client-records" }, title: "Klantdossiers", description: "Historie en opvolging" },
    ],
  },
  cta: {
    title: "Klaar voor klantworkflows in meerdere stappen?",
    description: "Probeer het 14 dagen gratis – nazorg en klanten terughalen zonder zelf achter iedereen aan te gaan.",
    secondary: { label: "Bekijk de herinneringen", href: { page: "messaging" } },
  },
};
