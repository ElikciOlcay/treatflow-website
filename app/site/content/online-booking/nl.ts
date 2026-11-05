import type { OnlineBookingContent } from "./types";

export const onlineBookingNl: OnlineBookingContent = {
  meta: {
    title: "Online afspraken boeken voor schoonheidssalons",
    description:
      "Online boekingssysteem voor je schoonheidssalon: klanten maken 24/7 een afspraak via je eigen boekingslink. Met Treatflow Pay vraag je direct bij het boeken een aanbetaling of het hele bedrag. Geen commissie per boeking.",
    keywords: [
      "online boekingssysteem schoonheidssalon",
      "boekingssoftware salon",
      "online afspraak maken salon",
      "boekingslink schoonheidssalon",
      "24/7 online boeken",
      "wachtlijst salon",
      "aanbetaling online boeken",
    ],
  },
  dates: { modified: "2026-10-02", published: "2024-06-01" },
  schema: {
    id: "online-buchungen",
    webPage: {
      name: "Online afspraken boeken voor schoonheidssalons",
      description:
        "Online boekingssysteem voor je schoonheidssalon: klanten maken 24/7 een afspraak via je eigen boekingslink. Met Treatflow Pay vraag je direct bij het boeken een aanbetaling of het hele bedrag.",
    },
  },
  breadcrumb: "Online boeken",
  hero: {
    eyebrow: "Online boeken",
    eyebrowIcon: "link",
    title: { before: "Online boeken voor je ", highlight: "salon" },
    description:
      "Je eigen boekingslink – klanten boeken dag en nacht. Afspraken komen automatisch in je agenda.",
    chips: ["24/7 boekbaar", "Geen commissie", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Bekijk de online agenda", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Welk online boekingssysteem past bij schoonheidssalons?",
        answer:
          "Treatflow heeft een online boekingssysteem dat speciaal voor schoonheidssalons is gemaakt: een eigen boekingslink, 24/7 online afspraken maken, automatische bevestigingen per e-mail en Treatflow Pay voor een aanbetaling of volledige betaling bij het boeken. Geen commissie per boeking, vanaf €59/maand met het Booking-pakket, 14 dagen gratis.",
      },
    ],
    image: {
      src: "/images/mockups/nl/online-buchung-hero.png",
      alt: "Online boekingssysteem van Treatflow – eigen boekingslink",
    },
  },
  understand: {
    title: "Je klanten boeken zelf – jij kunt gewoon doorwerken",
    description:
      "Via je eigen boekingslink plannen klanten dag en nacht zelf een afspraak. Geen eindeloos terugbellen of heen-en-weer appen meer.",
    items: [
      {
        icon: "calendar",
        title: "Dag en nacht open",
        text: "Je boekingslink is 24/7 open. Meer dan 60% van de boekingen komt 's avonds of in het weekend binnen.",
      },
      {
        icon: "bell",
        title: "Automatische bevestiging en herinnering",
        text: "Direct na het boeken krijgt je klant een bevestiging. Vóór de afspraak volgt een herinnering per e-mail.",
      },
      {
        icon: "list-ordered",
        title: "Wachtlijst voor volgeboekte dagen",
        text: "Zit je vol? Dan zetten klanten zich op de wachtlijst. Zodra er een plek vrijkomt, krijgen ze automatisch bericht.",
      },
    ],
  },
  howItWorks: {
    description: "In drie stappen je eigen boekingslink.",
    steps: [
      { title: "Voeg je behandelingen toe", text: "Kies welke behandelingen online te boeken zijn, hoe lang ze duren en wat ze kosten. Klanten zien alleen vrije tijden." },
      { title: "Deel je link", text: "Deel je boekingslink op Instagram, je website of in berichten. Je krijgt er ook een QR-code bij om te printen." },
      { title: "De boekingen stromen binnen", text: "Nieuwe afspraken verschijnen automatisch in je agenda. Bevestigingen en herinneringen gaan vanzelf de deur uit. Met Treatflow Pay betalen klanten meteen een aanbetaling of het hele bedrag." },
    ],
  },
  cards: {
    title: "Wat je krijgt",
    description: "Boekingslink, talen, wachtlijst, kortingscodes en Treatflow Pay – zonder commissie per afspraak.",
    items: [
      { icon: "link", title: "Eigen boekingslink", text: "Je eigen link om te delen op je website en social media – in de huisstijl van je salon.", points: ["Eigen link", "QR-code", "In jouw huisstijl"] },
      { icon: "languages", title: "Zeven talen", text: "De boekingspagina toont automatisch de taal van je klant – zonder extra instellingen.", points: ["DE, EN, NL, TR, PL, IT, RU", "Automatische taalkeuze", "Geen taalbarrières"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Aanbetaling of volledige betaling direct bij het online boeken.", points: ["Per behandeling in te stellen", "Aanbetaling of volledige betaling", "2,69% per transactie"], feature: "pay" },
      { icon: "list-ordered", title: "Wachtlijst", text: "Klanten zetten zich op de wachtlijst als je vol zit. Komt er een plek vrij, dan krijgen de juiste klanten een e-mail.", points: ["Automatische e-mail bij annulering", "Twee meldingsopties", "Overzicht in het dashboard"] },
      { icon: "ticket", title: "Kortingscodes", text: "Codes voor nieuwe klanten en acties – direct te gebruiken bij het online boeken.", points: ["Nieuwe klanten & acties", "Verzilveren bij het boeken", "Zien hoe vaak ze gebruikt worden"] },
      { icon: "bell", title: "Herinneringen", text: "Een herinnering per e-mail vóór de afspraak. Klanten kunnen op tijd annuleren en de plek komt weer vrij.", points: ["Herinneringen per e-mail", "Tijdstip naar keuze", "Minder no-shows"] },
      { icon: "calendar", title: "Flexibele planning", text: "Werktijden, behandelduur, pauzes en vakanties – klanten zien alleen tijden waarop je echt kunt.", points: ["Werktijden", "Pauzes & vakanties", "Geen dubbele boekingen"] },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over online boeken",
    items: [
      {
        question: "Welk online boekingssysteem past bij schoonheidssalons?",
        answer:
          "Treatflow heeft een online boekingssysteem dat speciaal voor schoonheidssalons is gemaakt, met een eigen boekingslink, automatische bevestigingen per e-mail, een agenda per medewerker en een koppeling met klantdossiers en behandelverslagen. Vanaf €59 per maand.",
      },
      {
        question: "Hoe stel ik online boeken in voor mijn salon?",
        answer:
          "In drie stappen: 1) voeg je behandelingen toe met duur en prijs, 2) stel je werktijden en beschikbaarheid in, 3) deel je boekingslink op Instagram, je website of in berichten. Binnen 10 minuten ben je klaar.",
      },
      {
        question: "Wat kost een online boekingssysteem voor schoonheidssalons?",
        answer:
          "Bij Treatflow zit online boeken in het Booking-pakket, vanaf €59 per maand. Er is geen commissie per boeking, er zijn geen verborgen kosten en je kunt het 14 dagen gratis proberen, zonder creditcard.",
      },
      {
        question: "Kunnen klanten dag en nacht een afspraak boeken?",
        answer:
          "Ja. Je boekingslink is 24/7 open. Klanten zien en boeken vrije tijden wanneer het hun uitkomt – ook 's avonds en in het weekend. Meer dan 60% van de boekingen komt buiten openingstijden binnen.",
      },
      {
        question: "Hoe zorgt een boekingssysteem voor minder no-shows?",
        answer:
          "Met automatische herinneringen per e-mail op tijdstippen die jij kiest. Klanten worden aan hun afspraak herinnerd en kunnen zo nodig annuleren, zodat de plek vrijkomt voor iemand anders. Dat zorgt voor merkbaar minder no-shows.",
      },
      {
        question: "Wat als ik helemaal volgeboekt ben?",
        answer:
          "Via de wachtlijst laten klanten weten dat ze graag een plekje willen. Wordt er een afspraak geannuleerd, dan krijgen de juiste klanten automatisch een e-mail met de vrijgekomen tijden. Zo gaat er geen aanvraag verloren.",
      },
      {
        question: "Kunnen klanten direct betalen bij het online boeken?",
        answer:
          "Ja. Met Treatflow Pay betalen klanten bij het boeken een aanbetaling of het hele bedrag. Dat stel je per behandeling in. De kosten zijn 2,69% per transactie.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Aanbetaling of volledige betaling", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Online agenda", description: "Boekingen komen direct in je planning" },
      { href: { page: "messaging" }, title: "Herinneringen", description: "Automatische bevestigingen en herinneringen" },
      { href: { page: "client-records" }, title: "Klantdossiers", description: "Elke boeking direct gekoppeld aan het klantdossier" },
    ],
  },
  cta: {
    title: "Klaar om klanten zelf te laten boeken?",
    description: "Probeer het 14 dagen gratis – zonder creditcard en zonder commissie per boeking.",
    secondary: { label: "Bekijk de online agenda", href: { page: "appointment-calendar" } },
  },
};
