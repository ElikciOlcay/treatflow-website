import type { HomeContent } from "./types";

/**
 * Nederlandse homepage (NL + BE). Zelfde secties als `en.ts`, zonder DACH-only functies
 * (kassa, cadeaubonnen, WhatsApp, Lexware, SumUp, NiSV). Nog geen productvideo –
 * de bestaande film is Duitstalig.
 */
export const homeNl: HomeContent = {
  meta: {
    title: "Salonsoftware voor schoonheidssalons en klinieken",
    description:
      "Alles-in-één salonsoftware voor schoonheidssalons, huid- en esthetische klinieken: online agenda, online afspraken boeken zonder commissie, digitale klantenkaart, intake- en toestemmingsformulieren, behandelverslagen en herinneringen. 14 dagen gratis.",
    keywords: [
      "salonsoftware",
      "software schoonheidssalon",
      "online afspraken boeken",
      "afsprakensysteem salon",
      "klantenkaart schoonheidssalon",
      "online agenda salon",
      "kliniek software",
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
        "Treatflow is een alles-in-één platform voor schoonheidssalons, esthetische klinieken en andere behandelpraktijken. Het combineert online boeken, klantdossiers, digitale intake- en toestemmingsformulieren, behandelverslagen, voor- en nafoto's en automatische opvolging. Gehost in de EU.",
      url: "https://www.treatflow.io/nl",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Klantdossiers, formulieren en behandelverslagen",
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
        "Online agenda met online afspraken boeken",
        "Digitale klantdossiers",
        "Intake- en toestemmingsformulieren",
        "Behandelverslagen met foto's",
        "Behandelnotities inspreken in plaats van typen",
        "Automatische herinneringen per e-mail",
        "Klantworkflows",
      ],
    },
  },

  hero: {
    badge: "Voor salons die willen groeien",
    title: {
      before: "Klaar met boekingschaos,",
      highlight: "papierwerk",
      connector: "en",
      end: "no-shows",
    },
    subtitle:
      "Afspraken, klanten, formulieren en behandelverslagen in één overzichtelijke app. Je team kan er direct mee aan de slag.",
    primaryCta: "Probeer 14 dagen gratis",
    demoCta: "Demo aanvragen",
    checks: ["Geen creditcard nodig", "In 2 minuten aan de slag", "Gratis overzetten van je gegevens"],
    rating: "4,6/5 op Google",
    tested: { before: "Al uitgeprobeerd door ", highlight: "500+ salons", after: "" },
    calendarLocale: "nl-NL",
    newBookingLabel: "Nieuwe boeking",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow op laptop en tablet: agenda en klantdossiers in een moderne salon",
    },
    liveDemo: { href: { page: "try-features" }, label: "Probeer de functies live uit" },
  },

  socialProof: {
    rating: "4,6/5 op Google",
    allReviews: "Alle reviews bekijken",
    tested: { before: "Al uitgeprobeerd door ", highlight: "500+ salons", after: "" },
    reviews: [
      {
        text: "Top support: altijd vriendelijk, behulpzaam en oplossingsgericht. Echt een aanrader!",
        name: "Velura Saarburg",
        studio: "Laserontharing",
      },
      {
        text: "Qua prijs niet te verslaan en heel makkelijk in gebruik. Mijn wens was binnen een dag geregeld!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Overgestapt van Phorest – de prijs-kwaliteitverhouding is top. Ik raad het iedereen aan.",
        name: "Sharon U.",
        studio: "Schoonheidssalon",
      },
    ],
    note: "Google-reviews, vertaald uit het Duits.",
  },

  studioDay: {
    eyebrow: "Eén afspraak, één systeem",
    title: "Van boeking tot nazorg. Alles in één app.",
    subtitle: "Zo verloopt een afspraak met Treatflow. Je hoeft niets dubbel in te voeren.",
    steps: [
      {
        time: "ma · 21:14",
        module: "Online boeken",
        title: "Lena boekt 's avonds vanaf de bank.",
        text: "Zonder te bellen en zonder commissie per boeking. De afspraak staat meteen in je agenda.",
        meta: "Gezichtsbehandeling · do 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "wo · 10:45",
        module: "Herinnering",
        title: "De herinnering gaat automatisch de deur uit.",
        text: "Een dag van tevoren, per e-mail. Minder vergeten afspraken, zonder dat jij eraan hoeft te denken.",
        meta: "Afgeleverd · bevestigd",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "do · 10:40",
        module: "Formulieren",
        title: "Intakeformulier op de tablet, direct ondertekend.",
        text: "Het formulier komt direct in het klantdossier van Lena. Niets meer overtypen achteraf.",
        meta: "Intakeformulier · digitaal ondertekend",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "do · 11:40",
        module: "Behandelverslag",
        title: "Behandelverslag klaar, met foto's.",
        text: "Instellingen, producten en voor- en nafoto's staan in de behandelhistorie.",
        meta: "3 foto's · instellingen opgeslagen",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "vr · 09:00",
        module: "Nazorg",
        title: "Nazorg en vervolgafspraak gaan vanzelf.",
        text: "De dag erna een verzorgingstip, een paar weken later een seintje om opnieuw te boeken. Eén keer ingesteld als klantworkflow.",
        meta: "Workflow · volgende stap over 4 weken",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Minder chaos. Meer tijd voor je klanten.",
    subtitle: "Alles wat je salon nodig heeft – in één app die je team meteen snapt.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Online agenda", desc: "Al je afspraken overzichtelijk per dag en per week.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Online boeken", desc: "Klanten boeken zelf – ook buiten openingstijden.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Klantdossiers", desc: "Historie, notities en foto's op één plek, snel terug te vinden.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Formulieren", desc: "Digitale intake- en toestemmingsformulieren, vooraf ingevuld via een link.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Behandelverslagen", desc: "Leg elke behandeling netjes vast, met foto's en instellingen.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Laat klanten bij het online boeken een aanbetaling of het hele bedrag betalen.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Herinneringen", desc: "Automatische herinneringen per e-mail: minder no-shows.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Klantworkflows", desc: "Automatische nazorg en klanten terughalen, in meerdere stappen.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Probeer 14 dagen gratis",
    ctaNote: "Geen creditcard nodig. Altijd opzegbaar.",
  },

  support: {
    ariaLabel: "Persoonlijke begeleiding vanaf dag één",
    badge: "Persoonlijke begeleiding",
    title: "We laten je niet alleen",
    text: "Van de inrichting tot het overzetten van je klantgegevens: ons team begeleidt je persoonlijk bij je start met Treatflow – zodat jij en je team vanaf dag één met vertrouwen aan de slag gaan.",
    trialCta: "Probeer 14 dagen gratis",
    demoCta: "Gratis demo aanvragen",
    imageAlt: "Persoonlijke begeleiding door het Treatflow-team",
    chip: "Persoonlijk. Inbegrepen.",
  },

  pricing: {
    eyebrow: "Heldere prijzen",
    titleBefore: "Eenvoudige prijzen –",
    titleHighlight: " geen verborgen kosten",
    subtitle:
      "Treatflow kost vanaf €39/maand (Basic) of €59/maand (Booking). Probeer het 14 dagen gratis – zonder commissie en zonder risico.",
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
      description: "Digitale intakeformulieren, klantdossiers en behandelverslagen – zonder agenda.",
      included: [
        "Klantenbeheer",
        "Formulieren met digitale handtekening",
        "Behandelverslagen incl. ingesproken notities",
        "Voor- en nafoto's",
        "Teamnotities en taken",
        "Shop en producten",
        "Statistieken",
        "Medewerkers en rollen",
        "Support via e-mail",
      ],
      excluded: [
        "Online agenda",
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
      description: "Online agenda, online boeken en automatische herinneringen voor jouw salon.",
      included: [
        "Alles uit Basic",
        "Agenda met een kolom per medewerker en ruimte",
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
      text: "Geen creditcard nodig • Altijd opzegbaar • Gratis overzetten van je gegevens",
      points: ["Geen opstartkosten", "Maandelijks opzegbaar", "AVG-proof"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "Nog vragen?",
    titleHighlight: " Hier vind je de antwoorden.",
    subtitle: "De meest gestelde vragen over Treatflow op een rij.",
    items: [
      {
        question: "Wat is Treatflow?",
        answer:
          "Treatflow is een alles-in-één app voor het dagelijkse werk in je salon: afspraken, klantdossiers, digitale formulieren en behandelverslagen in één systeem – zonder commissie per boeking. Ontwikkeld in Oostenrijk, je gegevens staan op EU-servers.",
      },
      {
        question: "Voor wie is Treatflow?",
        answer: [
          "Voor salons en praktijken die behandelingen uitvoeren – van beauty en esthetiek tot laser, nagels, wimpers, permanente make-up, massage en spa. Lees meer over onze ",
          { text: "software voor esthetische klinieken", href: { page: "aesthetic-clinic-software" } },
          " en ",
          { text: "klantdossiers", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Hoe lang kan ik Treatflow gratis proberen?",
        answer:
          "Je kunt Treatflow 14 dagen helemaal gratis uitproberen. Geen creditcard nodig, geen verborgen kosten. Na de proefperiode beslis je zelf of je doorgaat.",
      },
      {
        question: "Wat is het verschil tussen Basic en Booking?",
        answer: [
          "Basic (€39/maand) bevat onbeperkt ",
          { text: "klantenbeheer", href: { page: "client-records" } },
          ", de formulieren-Marketplace, de AI-formuliergenerator en de shop. Booking (€59/maand) voegt daar de professionele ",
          { text: "online agenda", href: { page: "appointment-calendar" } },
          " aan toe, met je eigen boekingslink en automatische ",
          { text: "afspraakherinneringen", href: { page: "messaging" } },
          ".",
        ],
      },
      {
        question: "Is Treatflow AVG-proof?",
        answer: [
          "Ja. Treatflow voldoet volledig aan de AVG. Alle gegevens worden versleuteld opgeslagen op EU-servers in Frankfurt (Duitsland). Dat geldt ook voor digitale ",
          { text: "intakeformulieren", href: { page: "forms" } },
          " en ",
          { text: "behandelverslagen", href: { page: "treatment-documentation" } },
          ".",
        ],
      },
      {
        question: "Kan ik mijn bestaande klantgegevens importeren?",
        answer: [
          "Ja, we helpen je gratis met de overstap. Ons supportteam zet je bestaande klantgegevens veilig over naar ",
          { text: "digitale klantdossiers", href: { page: "client-records" } },
          " in Treatflow.",
        ],
      },
      {
        question: "Werkt Treatflow ook op mijn telefoon?",
        answer:
          "Ja. Treatflow werkt op computer, tablet en smartphone. Zo heb je je klant- en afspraakgegevens overal bij de hand.",
      },
      {
        question: "Wat gebeurt er met mijn gegevens als ik opzeg?",
        answer:
          "Je gegevens blijven van jou. Als je opzegt, kun je alles exporteren. Pas na een overgangsperiode verwijderen we je gegevens definitief.",
      },
      {
        question: "Heb ik technische kennis nodig om Treatflow te gebruiken?",
        answer:
          "Nee. Treatflow is heel eenvoudig in gebruik. Je hoeft niets te installeren – je logt in via je browser en gaat aan de slag. Heb je vragen, dan helpt ons supportteam je graag.",
      },
      {
        question: "Hoe werkt de formulieren-Marketplace?",
        answer: [
          "In de Marketplace vind je professionele ",
          { text: "formulieren", href: { page: "forms" } },
          " voor allerlei beautybehandelingen. Gebruik ze zoals ze zijn, pas ze aan met de AI-generator of stel ze zelf samen met de drag-and-drop-editor. Digitale intakeformulieren zijn zo direct klaar voor gebruik.",
        ],
      },
      {
        question: "Kan ik een onbeperkt aantal klanten beheren?",
        answer:
          "Ja. Je kunt zoveel klanten beheren als je wilt. Treatflow groeit mee met je salon, en met de importfunctie zet je bestaande klantgegevens eenvoudig over.",
      },
    ],
    contactTitle: "Nog andere vragen?",
    contactText:
      "Ons supportteam helpt je graag. Stuur ons gerust een mail.",
    demoCta: "Adviesgesprek inplannen",
  },

  cta: {
    ariaLabel: "Aan de slag",
    title: "Klaar voor meer overzicht in je salon?",
    subtitle: "Begin vandaag nog en ontdek hoe eenvoudig je salon te organiseren is.",
    checks: [
      "14 dagen gratis proberen",
      "Geen creditcard nodig",
      "In 2 minuten aan de slag",
      "Persoonlijke support",
    ],
    primaryCta: "Start je gratis proefperiode",
    demoCta: "Demo aanvragen",
    note: "Altijd opzegbaar. AVG-proof. Met persoonlijke support.",
  },

  seo: {
    ariaLabel: "Meer informatie",
    intro: [
      "Treatflow is de ",
      { text: "software voor schoonheidssalons", href: { page: "beauty-salon-software" } },
      " met online agenda, online afspraken boeken, digitale klantdossiers, formulieren en behandelverslagen – zonder commissie, AVG-proof en made in Austria.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Digitale klantenkaart" },
      { href: { page: "online-booking" }, label: "Online afspraken boeken" },
      { href: { page: "treatment-documentation" }, label: "Digitaal behandelverslag" },
      { href: { page: "forms" }, label: "Digitale intakeformulieren" },
      { href: { page: "messaging" }, label: "Afspraakherinneringen" },
      { href: { page: "software-comparison" }, label: "Salonsoftware vergelijken" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
