import type { HomeContent } from "./types";

/**
 * Nederlandse homepage (NL + BE). Zelfde secties als `en.ts`, zonder DACH-only functies
 * (kassa, cadeaubonnen, WhatsApp, Lexware, SumUp, NiSV). Nog geen productvideo –
 * de bestaande film is Duitstalig.
 */
export const homeNl: HomeContent = {
  meta: {
    title: "Salonsoftware voor schoonheidssalons & klinieken",
    description:
      "Treatflow is alles-in-één salonsoftware voor schoonheidssalons, esthetische klinieken en behandelstudio's. Online boeken zonder commissie, klantdossiers, digitale formulieren, behandeldocumentatie en herinneringen. 14 dagen gratis.",
    keywords: [
      "salonsoftware",
      "software schoonheidssalon",
      "online afspraken plannen",
      "afsprakensysteem salon",
      "klantenkaart schoonheidssalon",
    ],
  },

  schema: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      inLanguage: "nl",
      description:
        "Treatflow is een alles-in-één platform voor schoonheidssalons, esthetische klinieken en behandelstudio's. Het combineert online boeken, klantdossiers, digitale intake- en toestemmingsformulieren, behandeldocumentatie, voor- en nafoto's en automatische opvolging. Gehost in de EU.",
      url: "https://www.treatflow.io/nl",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Klantdossiers, formulieren en behandeldocumentatie",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Agenda, online boeken en automatische herinneringen",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "19",
        reviewCount: "19",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Afsprakenkalender met online boeken",
        "Digitale klantdossiers",
        "Intake- en toestemmingsformulieren",
        "Behandeldocumentatie met foto's",
        "Spraakgestuurd dicteren van behandelnotities",
        "Automatische herinneringen per e-mail",
        "Klantworkflows",
      ],
    },
  },

  hero: {
    badge: "Voor beautystudio's die willen groeien",
    title: {
      before: "Geen boekingschaos,",
      highlight: "papierwerk",
      connector: "of",
      end: "no-shows meer",
    },
    subtitle:
      "Afspraken, klanten, formulieren en behandeldocumentatie in één overzichtelijke app. Je team kan er meteen mee aan de slag.",
    primaryCta: "Probeer 14 dagen gratis",
    demoCta: "Demo aanvragen",
    checks: ["Geen creditcard", "Binnen 2 minuten klaar", "Gratis datamigratie"],
    rating: "4,6/5 op Google",
    tested: { before: "Al getest door ", highlight: "500+ studio's", after: "" },
    calendarLocale: "nl-NL",
    newBookingLabel: "Nieuwe boeking",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow op laptop en tablet: agenda en klantdossiers in een moderne studio",
    },
    liveDemo: { href: { page: "try-features" }, label: "Probeer de functies live" },
  },

  socialProof: {
    rating: "4,6/5 op Google",
    allReviews: "Alle reviews bekijken",
    tested: { before: "Al getest door ", highlight: "500+ studio's", after: "" },
    reviews: [
      {
        text: "De support is uitstekend – altijd aardig, vriendelijk en oplossingsgericht. Echt een aanrader!",
        name: "Velura Saarburg",
        studio: "Laserontharing",
      },
      {
        text: "Onverslaanbaar qua prijs en intuïtief in gebruik. Mijn wens werd binnen een dag uitgevoerd!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Overgestapt van Phorest – de prijs-kwaliteitverhouding is super. Ik kan het met een gerust hart aanraden.",
        name: "Sharon U.",
        studio: "Schoonheidssalon",
      },
    ],
    note: "Google-reviews, vertaald uit het Duits.",
  },

  studioDay: {
    eyebrow: "Eén afspraak, één systeem",
    title: "Van boeking tot nazorg. In één app.",
    subtitle: "Zo verloopt een afspraak met Treatflow. Niets hoeft twee keer te worden ingevoerd.",
    steps: [
      {
        time: "ma · 21:14",
        module: "Online boeken",
        title: "Lena boekt 's avonds vanaf de bank.",
        text: "Geen telefoontje en geen commissie per boeking. De afspraak staat meteen in de agenda.",
        meta: "Gezichtsbehandeling · do 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "wo · 10:45",
        module: "Herinnering",
        title: "De herinnering gaat automatisch de deur uit.",
        text: "Een dag van tevoren, per e-mail. Minder vergeten afspraken, zonder dat iemand eraan hoeft te denken.",
        meta: "Bezorgd · bevestigd",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "do · 10:40",
        module: "Formulieren",
        title: "Intakeformulier op de tablet, ondertekend.",
        text: "Het formulier komt direct in het klantdossier van Lena. Achteraf niets meer overtypen.",
        meta: "Intakeformulier · digitaal ondertekend",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "do · 11:40",
        module: "Documentatie",
        title: "Behandeling gedocumenteerd, met foto's.",
        text: "Parameters, producten en voor- en nafoto's blijven bewaard in de behandelhistorie.",
        meta: "3 foto's · parameters opgeslagen",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "vr · 09:00",
        module: "Nazorg",
        title: "Nazorg en vervolgafspraak regelen zichzelf.",
        text: "Een verzorgingstip de dag erna, een herinnering voor een nieuwe afspraak een paar weken later. Eén keer ingesteld als klantworkflow.",
        meta: "Workflow · volgende stap over 4 weken",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Minder chaos. Meer tijd voor je klanten.",
    subtitle: "Alles wat je studio nodig heeft – in één app die je team meteen begrijpt.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Afsprakenkalender", desc: "Alle afspraken overzichtelijk in dag- en weekweergave.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Online boeken", desc: "Klanten boeken zelf – ook buiten je openingstijden.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Klantdossiers", desc: "Historie, notities en foto's op één plek en snel terug te vinden.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Formulieren", desc: "Digitale intake- en toestemmingsformulieren, vooraf ingevuld via een link.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Documentatie", desc: "Leg elke behandeling netjes vast, met foto's en parameters.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Vraag bij het boeken online een aanbetaling of het volledige bedrag.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Herinneringen", desc: "Automatische herinneringen per e-mail zorgen voor minder no-shows.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Klantworkflows", desc: "Automatiseer nazorg en heractivering in meerdere stappen.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Probeer 14 dagen gratis",
    ctaNote: "Geen creditcard. Altijd opzegbaar.",
  },

  pricing: {
    eyebrow: "Transparante prijzen",
    titleBefore: "Eenvoudige prijzen -",
    titleHighlight: " geen verborgen kosten",
    subtitle:
      "Treatflow begint bij €39/maand (Basic) of €59/maand (Booking). Probeer het 14 dagen gratis – zonder commissie en zonder risico.",
    monthly: "Maandelijks",
    yearly: "Jaarlijks",
    saveBadge: "Bespaar 10%",
    perMonth: "/maand",
    perYear: "/jaar",
    vatNote: "excl. btw",
    basic: {
      name: "Basic",
      monthlyPrice: "€39",
      yearlyPrice: "€421",
      yearlyHint: "€35/maand • Bespaar €47 per jaar",
      description: "Digitale intakeformulieren, klantdossiers en behandeldocumentatie – zonder afsprakenplanning.",
      included: [
        "Klantenbeheer",
        "Formulieren met digitale handtekening",
        "Documentatie incl. spraaknotities",
        "Voor- en nafoto's",
        "Teamnotities en taken",
        "Shop en producten",
        "Statistieken",
        "Medewerkers en rollen",
        "Support via e-mail",
      ],
      excluded: [
        "Afsprakenkalender",
        "Online boeken",
        "Automatiseringen en wachtlijst",
        "Prioriteitssupport",
      ],
      cta: "14 dagen gratis proberen",
    },
    booking: {
      name: "Booking",
      popular: "Populair",
      monthlyPrice: "€59",
      yearlyPrice: "€637",
      yearlyHint: "€53/maand • Bespaar €71 per jaar",
      description: "Afsprakenkalender, online boeken en automatische herinneringen voor jouw studio.",
      included: [
        "Alles uit Basic",
        "Agenda met kolommen per medewerker en ruimte",
        "Online boeken zonder commissie",
        "Wachtlijst",
        "Herinneringen per e-mail",
        "Klantworkflows",
        "Kortingscodes",
        "Meertalige boekingspagina",
        "Integraties (Google Agenda, Zapier, AI-assistenten)",
        "Prioriteitssupport via e-mail en chat",
      ],
      cta: "14 dagen gratis proberen",
    },
    trial: {
      title: "14 dagen gratis proberen",
      text: "Geen creditcard nodig • Altijd opzegbaar • Gratis datamigratie",
      points: ["Geen opstartkosten", "Maandelijks opzegbaar", "AVG-proof"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "Nog vragen?",
    titleHighlight: " Wij hebben de antwoorden!",
    subtitle: "Hier vind je antwoorden op de meest gestelde vragen over Treatflow.",
    items: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is een alles-in-één app voor je dagelijkse werk in de studio: afspraken, klantdossiers, digitale formulieren en behandeldocumentatie zitten in één systeem – zonder commissie per boeking. Ontwikkeld in Oostenrijk, met je gegevens op EU-servers.",
      },
      {
        question: "Voor wie is Treatflow?",
        answer: [
          "Voor studio's die behandelingen uitvoeren – van beauty en esthetiek tot laser, nagels, wimpers, permanente make-up, massage en spa. Lees meer over onze ",
          { text: "software voor esthetische klinieken", href: { page: "aesthetic-clinic-software" } },
          " en ",
          { text: "klantdossiers", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Hoe lang kan ik Treatflow gratis proberen?",
        answer:
          "Je kunt Treatflow 14 dagen volledig gratis proberen. Geen creditcard nodig, geen verborgen kosten. Na de proefperiode beslis je zelf of je verdergaat.",
      },
      {
        question: "Wat is het verschil tussen Basic en Booking?",
        answer: [
          "Basic (€39/maand) bevat onbeperkt ",
          { text: "klantenbeheer", href: { page: "client-records" } },
          ", de formulierenmarktplaats, de AI-formuliergenerator en de shop. Booking (€59/maand) voegt de professionele ",
          { text: "afsprakenkalender", href: { page: "appointment-calendar" } },
          " toe, met je eigen boekingslink en automatische ",
          { text: "afspraakherinneringen", href: { page: "messaging" } },
          ".",
        ],
      },
      {
        question: "Is Treatflow AVG-proof?",
        answer: [
          "Ja. Treatflow voldoet volledig aan de AVG. Alle gegevens worden versleuteld en veilig opgeslagen op EU-servers in Frankfurt, Duitsland. Dat geldt ook voor digitale ",
          { text: "intakeformulieren", href: { page: "forms" } },
          " en ",
          { text: "behandeldocumentatie", href: { page: "treatment-documentation" } },
          ".",
        ],
      },
      {
        question: "Kan ik mijn bestaande klantgegevens importeren?",
        answer: [
          "Ja, we helpen je gratis met de overstap. Ons supportteam zet je bestaande klantgegevens veilig over naar je ",
          { text: "digitale klantdossiers", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Werkt Treatflow ook op mijn telefoon?",
        answer:
          "Ja. Treatflow werkt op alle apparaten – computer, tablet en smartphone. Je hebt overal toegang tot je klant- en afspraakgegevens.",
      },
      {
        question: "Wat gebeurt er met mijn gegevens als ik opzeg?",
        answer:
          "Je houdt volledige controle over je gegevens. Als je opzegt, kun je alles exporteren. We verwijderen je gegevens pas volledig na een overgangsperiode.",
      },
      {
        question: "Heb ik technische kennis nodig om Treatflow te gebruiken?",
        answer:
          "Nee. Treatflow is heel eenvoudig in gebruik. Je hoeft niets te installeren – log gewoon in via je browser en ga aan de slag. Heb je vragen, dan helpt ons supportteam je graag.",
      },
      {
        question: "Hoe werkt de formulierenmarktplaats?",
        answer: [
          "In de marktplaats vind je professionele ",
          { text: "formulieren", href: { page: "forms" } },
          " voor alle beautybehandelingen. Gebruik ze zoals ze zijn, pas ze aan met de AI-generator of richt ze zelf in met de drag-and-drop-editor. Digitale intakeformulieren zijn meteen klaar voor gebruik.",
        ],
      },
      {
        question: "Kan ik een onbeperkt aantal klanten beheren?",
        answer:
          "Ja. Je kunt zoveel klanten beheren als je wilt. Het systeem groeit mee met je studio, en met de importfunctie breng je bestaande klantgegevens eenvoudig over.",
      },
    ],
    contactTitle: "Nog andere vragen?",
    contactText:
      "Ons supportteam helpt je graag. Stuur ons een e-mail of plan direct een adviesgesprek in.",
    demoCta: "Adviesgesprek inplannen",
  },

  cta: {
    ariaLabel: "Aan de slag",
    title: "Klaar om je studio met meer overzicht te runnen?",
    subtitle: "Begin vandaag nog en ontdek hoe eenvoudig je studio-organisatie kan zijn.",
    checks: [
      "14 dagen gratis proberen",
      "Geen creditcard nodig",
      "Binnen 2 minuten klaar",
      "Persoonlijke support en hulp",
    ],
    primaryCta: "Start je gratis proefperiode",
    demoCta: "Demo aanvragen",
    note: "Altijd opzegbaar. AVG-proof. Met persoonlijke support en hulp.",
  },

  seo: {
    ariaLabel: "Meer informatie",
    intro: [
      "Treatflow is de ",
      { text: "software voor schoonheidssalons", href: { page: "beauty-salon-software" } },
      " met afsprakenkalender, online boeken, digitale klantdossiers, formulieren en behandeldocumentatie – zonder commissie, AVG-proof en made in Austria.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Software voor klantdossiers" },
      { href: { page: "online-booking" }, label: "Online afspraken boeken" },
      { href: { page: "treatment-documentation" }, label: "Behandeldocumentatie" },
      { href: { page: "forms" }, label: "Digitale intakeformulieren" },
      { href: { page: "messaging" }, label: "Afspraakherinneringen" },
      { href: { page: "software-comparison" }, label: "Salonsoftware vergelijken" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
