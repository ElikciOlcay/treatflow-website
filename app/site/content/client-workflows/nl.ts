import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsNl: ClientWorkflowsContent = {
  meta: {
    title: "Klantworkflows voor schoonheidssalons: automatische nazorg",
    description:
      "Automatiseringen in meerdere stappen met Treatflow: nazorg, heractivering en follow-ups met wachttijden, voorwaarden en verzending per e-mail – zonder handmatig na te bellen.",
    keywords: [
      "klantworkflows schoonheidssalon",
      "marketingautomatisering salon",
      "nazorg automatiseren",
      "klanten heractiveren salon",
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
        "Automatiseringen in meerdere stappen: nazorg, heractivering en follow-ups met wachttijden, voorwaarden en verzending per e-mail.",
    },
  },
  breadcrumb: "Klantworkflows",
  hero: {
    eyebrow: "Klantworkflows",
    eyebrowIcon: "workflow",
    title: { before: "Automatiseringen in ", highlight: "meerdere stappen" },
    description:
      "Bouw nazorg, heractivering en follow-ups – met wachttijden, voorwaarden en automatische e-mails.",
    chips: ["Visuele builder", "Automatische e-mails", "Stopt bij een nieuwe boeking"],
    secondaryCta: { label: "Naar de herinneringen", href: { page: "messaging" } },
    capsules: [
      {
        question: "Hoe automatiseer ik nazorg en follow-ups in mijn schoonheidssalon?",
        answer:
          "Met klantworkflows in Treatflow bouw je reeksen in meerdere stappen: bijvoorbeeld 2 dagen na de behandeling wachten, vragen hoe het gaat, controleren of er opnieuw is geboekt en pas dan een uitnodiging voor een vervolgafspraak sturen. Zo blijf je in beeld zonder zelf achter klanten aan te hoeven gaan.",
      },
    ],
    image: {
      src: "/images/mockups/kunden-workflows.jpg",
      alt: "Treatflow workflowbuilder met trigger, wachttijd en bericht",
    },
  },
  understand: {
    title: "Reeksen die vanzelf doorlopen",
    description:
      "In plaats van losse herinneringen bouw je reeksen – precies voor nazorg, heractivering en follow-ups met meerdere stappen.",
    items: [
      {
        icon: "heart",
        title: "Nazorg zonder extra werk",
        text: "Vraag automatisch hoe het met de huid gaat – en bied bij interesse meteen een vervolgafspraak aan.",
      },
      {
        icon: "bell",
        title: "Inactieve klanten terughalen",
        text: "Na 60–90 dagen zonder bezoek gaat er een uitnodiging uit om weer langs te komen – persoonlijk en op het juiste moment.",
      },
      {
        icon: "git-branch",
        title: "Slim vertakken",
        text: "Controleer of er opnieuw is geboekt. Zo ja, dan stopt de workflow – geen dubbele berichten.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen naar je eerste workflow.",
    steps: [
      { title: "Kies een trigger", text: "Start bijvoorbeeld na afloop van een afspraak of als een klant al een tijd niet is geweest." },
      { title: "Verbind de stappen", text: "Zet wachttijden, berichten en voorwaarden in de visuele builder." },
      { title: "Activeer", text: "Treatflow voert de reeks uit en verstuurt de berichten per e-mail." },
    ],
  },
  cards: {
    title: "Wat je krijgt",
    description: "Alles voor klantcommunicatie in meerdere stappen – overzichtelijk en goed te sturen.",
    items: [
      { icon: "workflow", title: "Visuele builder", text: "Trigger, wachttijden, bericht en voorwaarde met drag & drop.", points: ["Helder overzicht", "Meerdere stappen", "Snel aan te passen"] },
      { icon: "message-circle", title: "E-mailberichten", text: "Elke stap komt rechtstreeks in de inbox van je klant terecht.", points: ["E-mail", "Je eigen tekst", "Automatisch verstuurd"] },
      { icon: "clock", title: "Wachttijden", text: "Dagen of uren tussen de stappen – precies zoals jouw salon werkt.", points: ["Nazorg op het juiste moment", "Heractivering", "Niets hoeven onthouden"] },
      { icon: "git-branch", title: "Voorwaarden", text: "Controleer bijvoorbeeld nieuwe boekingen en stop de reeks op tijd.", points: ["Geen dubbele e-mails", "Slimme vertakking", "Relevantere berichten"] },
      { icon: "heart", title: "Nazorgreeksen", text: "Eerst even informeren, daarna eventueel een vervolgafspraak – alleen als het zinvol is.", points: ["Meer klantbinding", "Later minder no-shows", "Meer vervolgafspraken"] },
      { icon: "zap", title: "Heractivering", text: "Nodig klanten na een langere pauze automatisch opnieuw uit.", points: ["60–90 dagen", "Persoonlijk", "Geen gedoe met lijstjes"] },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over klantworkflows",
    items: [
      {
        question: "Wat zijn klantworkflows in Treatflow?",
        answer:
          "Klantworkflows zijn automatiseringen in meerdere stappen: je bouwt reeksen met een trigger, wachttijden, berichten en voorwaarden. Zo lopen nazorg, heractivering en follow-ups automatisch – zonder dat je elk bericht zelf hoeft te schrijven.",
      },
      {
        question: "Wat is het verschil tussen workflows en gewone herinneringen?",
        answer:
          "Gewone berichten (zoals afspraakherinneringen) bestaan uit één trigger en één bericht. Workflows zijn bedoeld voor reeksen met meerdere stappen en vertakkingen – bijvoorbeeld: na de behandeling informeren, wachten, controleren of er opnieuw is geboekt en pas dan een tweede bericht sturen.",
      },
      {
        question: "Via welk kanaal worden workflowberichten verstuurd?",
        answer:
          "Workflowstappen worden per e-mail verstuurd. Afspraakherinneringen blijven beschikbaar bij de gewone berichten.",
      },
      {
        question: "Kan een workflow stoppen als de klant opnieuw boekt?",
        answer:
          "Ja. Je kunt voorwaarden instellen, bijvoorbeeld controleren of er sinds de laatste afspraak opnieuw is geboekt. Zo ja, dan stopt de reeks – je blijft in beeld zonder dubbele berichten te sturen.",
      },
      {
        question: "Met welke workflows kan ik het beste beginnen?",
        answer:
          "Populair zijn: nazorg 1–2 dagen na de behandeling, heractivering na 60–90 dagen zonder bezoek en nazorg in meerdere stappen met een tweede bericht alleen als er nog geen vervolgafspraak is geboekt.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Herinneringen", description: "E-mail vóór de afspraak" },
      { href: { page: "appointment-calendar" }, title: "Afsprakenkalender", description: "Afspraken en automatiseringen samen" },
      { href: { page: "client-records" }, title: "Klantdossiers", description: "Historie en opvolging" },
    ],
  },
  cta: {
    title: "Klaar voor klantworkflows in meerdere stappen?",
    description: "Probeer het 14 dagen gratis – nazorg en heractivering zonder handmatig opvolgen.",
    secondary: { label: "Naar de herinneringen", href: { page: "messaging" } },
  },
};
