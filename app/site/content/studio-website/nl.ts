import type { StudioWebsiteContent } from "./types";

export const studioWebsiteNl: StudioWebsiteContent = {
  meta: {
    title: "Website op maat voor schoonheidssalons",
    description:
      "Een website op maat voor je schoonheidssalon, laserkliniek of beautybedrijf. Professioneel, mobielvriendelijk en gericht op boekingen. Vanaf € 1.000.",
    keywords: [
      "website schoonheidssalon",
      "webdesign schoonheidssalon",
      "website beautysalon",
      "website laserkliniek",
      "website nagelstudio",
      "website permanente make-up",
    ],
  },
  schema: {
    serviceName: "Website op maat voor schoonheidssalons",
    serviceDescription:
      "Professionele websites op maat voor schoonheidssalons en beautybedrijven. Geoptimaliseerd voor boekingen en nieuwe klanten.",
    serviceType: "Webdesign",
    areaServed: ["NL", "BE"],
    priceDescription: "Website op maat vanaf € 1.000",
  },
  emailHref: `mailto:hello@treatflow.io?subject=${encodeURIComponent("Aanvraag websiteproject")}`,
  hero: {
    badge: "Nieuwe service van Treatflow",
    title: { before: "Websites op maat voor", highlight: "schoonheidssalons" },
    lead: "Professioneel, modern en gericht op boekingen. Je website wordt je sterkste kanaal voor nieuwe klanten.",
    sub: "We bouwen niet zomaar mooie websites. We bouwen websites die vertrouwen wekken en aanvragen opleveren.",
    primaryCta: "Gratis advies aanvragen",
    emailCta: "Aanvraag per e-mail",
    checks: ["Vanaf € 1.000", "Ontwerp op maat", "Klaar in 2-4 weken"],
  },
  demo: {
    badge: "Bekijk een live voorbeeld (in het Duits)",
    title: "Zo kan jouw salonwebsite eruitzien",
    description: "Overtuig jezelf. Deze voorbeeldwebsite hebben we gemaakt voor een fictieve premium salon.",
    href: "/demo/skin-atelier",
    imageAlt: "Skin Atelier – demowebsite van Treatflow voor schoonheidssalons (in het Duits)",
    overlayLabel: "Demowebsite",
    overlayTitle: "Skin Atelier München",
    hoverCta: "Demo bekijken",
    cardTitle: "Demowebsite op maat",
    cardText: "Premium design met boekingsintegratie, behandelingen, reviews en meer",
    cardCta: "Live bekijken",
  },
  why: {
    title: "Waarom je salon een professionele website nodig heeft",
    description:
      "Je klanten zoeken online informatie voordat ze boeken. Een professionele website is je digitale visitekaartje en je sterkste middel om nieuwe klanten te winnen.",
    stats: [
      { value: "97%", label: "zoekt online", desc: "Bijna alle klanten googelen een salon voordat ze boeken." },
      { value: "75%", label: "oordeelt op de website", desc: "De kwaliteit van je website bepaalt hoeveel vertrouwen mensen in je salon hebben." },
      { value: "3x", label: "meer aanvragen", desc: "Salons met een professionele website krijgen duidelijk meer boekingsaanvragen." },
    ],
  },
  services: {
    title: "Wat er in je website zit",
    description: "Elke website wordt speciaal voor jouw salon ontworpen. Geen template, geen compromissen.",
    items: [
      {
        icon: "palette",
        title: "Ontwerp op maat",
        desc: "Geen websitebouwer, geen template. Je salon krijgt een ontwerp dat bij je merk past en vertrouwen wekt.",
      },
      {
        icon: "smartphone",
        title: "Mobielvriendelijk",
        desc: "Meer dan 80% van je bezoekers komt via de telefoon. Je website ziet er op elk apparaat perfect uit.",
      },
      {
        icon: "search",
        title: "SEO-basis",
        desc: "Nette techniek, snelle laadtijden en geoptimaliseerde content, zodat je salon in Google wordt gevonden.",
      },
      {
        icon: "mouse-pointer-click",
        title: "Gericht op boekingen",
        desc: "Elke pagina is erop gericht bezoekers om te zetten in aanvragen of boekingen.",
      },
      {
        icon: "calendar-days",
        title: "Boekingsintegratie",
        desc: "Je Treatflow-boekingslink, contactformulier of belknop direct geïntegreerd.",
      },
      {
        icon: "globe",
        title: "Geschikt voor elke branche",
        desc: "Huidverzorging, laser, Hydrafacial, permanente make-up, microneedling, nagels, wimpers en meer.",
      },
    ],
  },
  advantage: {
    badge: "Exclusief voordeel",
    title: "Ideaal in combinatie met Treatflow",
    description:
      "Je website wordt nog sterker als hij met Treatflow is verbonden. Boekingslink, behandelingen en openingstijden kunnen direct uit Treatflow worden overgenomen.",
    points: [
      "Online boekingslink direct geïntegreerd",
      "Behandelingen en prijzen op je website",
      "Automatisch bijwerken mogelijk",
      "Naadloze klantervaring van klik tot afspraak",
    ],
    boxTitle: "Voordeel voor Treatflow-klanten",
    boxText: "Als Treatflow-klant krijg je bij het bestellen van een website daarnaast:",
    creditAmount: "€ 200",
    creditLabel: "Treatflow-tegoed cadeau",
    creditNote: "In te wisselen voor je Treatflow-abonnement. Zo bespaar je ook op je salonsoftware.",
  },
  pricing: {
    title: "Transparante prijzen, geen verborgen kosten",
    description: "Wij geloven in eerlijke, heldere prijzen. Geen kleine lettertjes.",
    badge: "Websiteproject op maat",
    price: { prefix: "vanaf", amount: "1.000", currency: "euro" },
    note: "Eenmalig. Geen abonnement voor het maken van de website.",
    points: [
      "Ontwerp op maat naar jouw wensen",
      "Responsive op alle apparaten",
      "Basis-SEO-optimalisatie",
      "Conversiegerichte opbouw",
      "Contact- en boekingsintegratie",
      "Tot 5 subpagina's inbegrepen",
      "Juridische informatie en privacyverklaring",
      "SSL-versleuteling",
    ],
    customerLabel: "Treatflow-klanten:",
    customerText: "€ 200 Treatflow-tegoed inbegrepen",
    cta: "Websiteproject aanvragen",
    footnote: "Vrijblijvend kennismakingsgesprek. Ons advies is gratis.",
  },
  process: {
    title: "Zo ontstaat jouw salonwebsite",
    description: "Van het eerste idee tot de kant-en-klare website – in vier eenvoudige stappen.",
    steps: [
      { step: "01", title: "Kennismaking", desc: "We leren je salon kennen, begrijpen je doelen en bespreken de omvang." },
      { step: "02", title: "Concept & ontwerp", desc: "We maken een ontwerpconcept op maat dat bij je merk past." },
      { step: "03", title: "Bouw", desc: "Je website wordt professioneel ontwikkeld en gevuld met jouw content." },
      { step: "04", title: "Lancering", desc: "Na jouw akkoord gaat de website live. We helpen je bij de lancering." },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over je website",
    description: "Alles wat je moet weten voordat je opdracht geeft.",
    items: [
      {
        question: "Hoe lang duurt het maken van mijn salonwebsite?",
        answer:
          "Meestal is je website binnen 2-4 weken klaar. De precieze doorlooptijd hangt af van de omvang en van hoe snel je je content aanlevert.",
      },
      {
        question: "Heb ik al teksten en foto's nodig?",
        answer:
          "Nee, dat hoeft niet. We helpen je met de teksten en adviseren je over beeldmateriaal. Professionele foto's van je salon zijn natuurlijk ideaal, maar samen vinden we de beste oplossing.",
      },
      {
        question: "Kan mijn bestaande domein worden gebruikt?",
        answer:
          "Ja, natuurlijk. Heb je al een domein, dan zetten we je nieuwe website daarop. Zo niet, dan helpen we je met het kiezen en registreren.",
      },
      {
        question: "Is de website te combineren met Treatflow?",
        answer:
          "Absoluut. Je Treatflow-boekingslink, behandelingen en openingstijden kunnen direct in de website worden geïntegreerd. Zo boeken nieuwe klanten rechtstreeks via je eigen website.",
      },
      {
        question: "Wat kost een website op maat?",
        answer:
          "Websites op maat beginnen vanaf € 1.000. De uiteindelijke prijs hangt af van de omvang en de gewenste functies. Treatflow-klanten krijgen daarnaast € 200 Treatflow-tegoed.",
      },
      {
        question: "Zorgen jullie ook voor hosting en onderhoud?",
        answer:
          "Ja, op verzoek nemen we ook de hosting en het technisch onderhoud van je website over. Zo hoef je je nergens zorgen over te maken.",
      },
      {
        question: "Kan ik de website later zelf aanpassen?",
        answer:
          "Afhankelijk van de opzet bieden we oplossingen waarmee je eenvoudige aanpassingen zoals teksten en afbeeldingen zelf doet. Bij grotere wijzigingen helpen we je.",
      },
    ],
  },
  cta: {
    title: "Klaar voor je professionele salonwebsite?",
    description: "Laten we samen de perfecte website voor je salon bouwen. Vrijblijvend en gratis advies.",
    primary: "Gratis advies aanvragen",
    email: "Aanvraag per e-mail",
    checks: ["Vrijblijvend", "Persoonlijk advies", "Gespecialiseerd in beautysalons"],
  },
};
