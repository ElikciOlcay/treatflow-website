import {
  BarChart3,
  Bell,
  CalendarDays,
  ClipboardCheck,
  FileText,
  Gift,
  Globe,
  Languages,
  Link2,
  ListChecks,
  Lock,
  Mic,
  Plug,
  Server,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Ticket,
  Users,
  Workflow,
} from "lucide-react";
import { BASE_URL } from "@/app/i18n/config";
import type { LocaleSiteContent } from "../types";

/* -------------------------------------------------------------------------- */
/* Helpers                                                                    */
/* -------------------------------------------------------------------------- */

const featureColors = {
  calendar: "bg-indigo-100 text-indigo-600",
  booking: "bg-emerald-100 text-emerald-600",
  consent: "bg-orange-100 text-orange-600",
  records: "bg-blue-100 text-blue-600",
  docs: "bg-teal-100 text-teal-600",
  reminders: "bg-rose-100 text-rose-600",
  workflows: "bg-purple-100 text-purple-600",
} as const;

const cardMeta = {
  calendar: { icon: CalendarDays, color: "text-indigo-600", bg: "bg-indigo-50" },
  booking: { icon: Link2, color: "text-rose-600", bg: "bg-rose-50" },
  records: { icon: Users, color: "text-emerald-600", bg: "bg-emerald-50" },
  forms: { icon: ClipboardCheck, color: "text-orange-600", bg: "bg-orange-50" },
  docs: { icon: FileText, color: "text-blue-600", bg: "bg-blue-50" },
  messaging: { icon: Bell, color: "text-purple-600", bg: "bg-purple-50" },
  integrations: { icon: Plug, color: "text-sky-600", bg: "bg-sky-50" },
  shop: { icon: ShoppingBag, color: "text-amber-600", bg: "bg-amber-50" },
  vouchers: { icon: Gift, color: "text-violet-600", bg: "bg-violet-50" },
  website: { icon: Globe, color: "text-teal-600", bg: "bg-teal-50" },
} as const;

function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: "nl",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

/* -------------------------------------------------------------------------- */
/* Home                                                                       */
/* -------------------------------------------------------------------------- */

const homeFaqs = [
  {
    q: "Wat is Treatflow?",
    a: "Treatflow is alles-in-één salonsoftware voor schoonheidssalons en esthetische klinieken. Het combineert een afsprakenkalender, online boeken zonder commissie, digitale klantdossiers, toestemmingsformulieren, behandelnotities, fotodocumentatie en herinneringen in één app. Gemaakt in Oostenrijk, gehost op EU-servers.",
  },
  {
    q: "Is Treatflow salonsoftware zonder boekingscommissie?",
    a: "Ja. Treatflow is software voor je eigen studio, geen boekingsplatform. Je klantgegevens blijven van jou en je betaalt een vast maandbedrag. Er gaat geen commissie per boeking af.",
  },
  {
    q: "Voor wie is Treatflow?",
    a: "Treatflow is er voor schoonheidssalons, esthetische klinieken, laserstudio's, permanente make-upstudio's, nagel- en wimperstudio's, spa's en massagepraktijken die minder no-shows willen, toestemming netjes digitaal willen vastleggen en behandelingen gestructureerd willen documenteren.",
  },
  {
    q: "Heeft Treatflow digitale toestemmingsformulieren voor esthetische klinieken?",
    a: "Ja. Klanten vullen intake- en toestemmingsformulieren vóór de afspraak in op hun telefoon. De antwoorden worden opgeslagen in het klantdossier, waar nodig met digitale handtekening.",
  },
  {
    q: "Kunnen laserstudio's behandelingen documenteren in Treatflow?",
    a: "Ja. In de behandeldocumentatie leg je per sessie parameters, notities en voor- en nafoto's vast. Notities kun je ook inspreken in plaats van typen.",
  },
  {
    q: "Zijn digitale klantdossiers AVG-proof?",
    a: "Treatflow wordt gehost op EU-servers in Frankfurt, met SSL-versleuteling en dagelijkse back-ups. Klantdossiers, formulieren en documentatie staan in één systeem dat is ontworpen voor de AVG.",
  },
  {
    q: "Wat kost Treatflow?",
    a: "Basic kost €39 per maand voor klantdossiers, formulieren en documentatie. Booking kost €59 per maand en voegt de agenda, online boeken en herinneringen toe. Je probeert Treatflow 14 dagen gratis, zonder creditcard.",
  },
  {
    q: "Hoe begin ik met Treatflow?",
    a: "Registreer je op app.treatflow.io en start je gratis proefperiode van 14 dagen. Geen creditcard nodig, altijd opzegbaar. Ook vanuit Nederland en België.",
  },
];

const home: LocaleSiteContent["home"] = {
  locale: "nl",
  earlyAccessHref: "",
  pricingHref: "/en/pricing",
  hero: {
    eyebrow: "Voor schoonheidssalons en esthetische klinieken",
    titleLead: "Minder no-shows,",
    titleHighlight: "klanten die blijven",
    titleTail: "en geen papierwerk meer",
    subtitle:
      "Afspraken, online boeken zonder commissie, klantdossiers, toestemmingsformulieren en behandeldocumentatie – alles in één overzichtelijke app. Gemaakt in Oostenrijk, voor studio's in Nederland, België en daarbuiten.",
    primaryCta: "Gratis proberen",
    trustItems: ["Geen creditcard", "Binnen 2 minuten klaar", "Gratis datamigratie", "Persoonlijke support"],
    studiosLabel: "500+ studio's",
    ratingValue: "4.6/5",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow-afsprakenkalender op een laptop in een moderne schoonheidssalon",
    },
  },
  aiCapsules: [
    {
      question: "Wat is Treatflow?",
      answer:
        "Treatflow is alles-in-één software voor schoonheidssalons en esthetische klinieken: afsprakenkalender, online boeken zonder commissie, klantdossiers, digitale toestemmingsformulieren, behandelnotities en fotodocumentatie. Gehost in de EU. 14 dagen gratis proberen.",
    },
    {
      question: "Rekent Treatflow commissie op boekingen?",
      answer:
        "Nee. Treatflow is geen boekingsplatform. Studio's betalen een vast maandabonnement (Basic vanaf €39, Booking vanaf €59) en houden 100% van hun boekingsomzet.",
    },
  ],
  trustBar: [
    { icon: Lock, text: "SSL-versleuteld" },
    { icon: Server, text: "EU-servers" },
    { icon: Shield, text: "Dagelijkse back-ups" },
    { icon: ShieldCheck, text: "AVG-proof toestemming" },
  ],
  features: {
    title: "De belangrijkste functies in één oogopslag",
    subtitle: "Alles overzichtelijk ingericht, zodat jij en je team snel kunnen werken.",
    ctaNote: "Geen creditcard. Altijd opzegbaar.",
    items: [
      { icon: CalendarDays, label: "Afsprakenkalender", desc: "Dag-, week- en maandweergave met kolommen per medewerker en ruimte.", color: featureColors.calendar },
      { icon: Users, label: "Online boeken", desc: "Je eigen boekingslink, 24/7. Geen platform, geen commissie.", color: featureColors.booking },
      { icon: ClipboardCheck, label: "Toestemmingsformulieren", desc: "Digitale intake en toestemming, ondertekend op de telefoon of in de studio.", color: featureColors.consent },
      { icon: FileText, label: "Klantdossiers", desc: "Historie, notities, foto's en formulieren in één AVG-proof dossier.", color: featureColors.records },
      { icon: Shield, label: "Behandeldocumentatie", desc: "Parameters, notities en voor- en nafoto's per behandeling.", color: featureColors.docs },
      { icon: Bell, label: "Herinneringen", desc: "Automatische herinneringen via WhatsApp en e-mail tegen no-shows.", color: featureColors.reminders },
      { icon: Workflow, label: "Digitale workflows", desc: "Van boeking tot documentatie in één systeem.", color: featureColors.workflows },
    ],
  },
  extras: {
    title: "En Treatflow kan nog meer",
    subtitle: "Handige extra's die je dag in de studio nog makkelijker maken – al inbegrepen.",
    items: [
      { icon: BarChart3, label: "Statistieken & rapporten", desc: "Omzet, afspraken, klanten en populairste behandelingen in één oogopslag." },
      { icon: Mic, label: "AI-dicteren", desc: "Spreek je behandelnotities in – Treatflow zet ze voor je op papier." },
      { icon: Languages, label: "Meertalig boeken", desc: "Klanten boeken in hun eigen taal op jouw boekingspagina." },
      { icon: Ticket, label: "Kortingscodes", desc: "Acties en codes voor nieuwe klanten bij online boeken." },
      { icon: ListChecks, label: "Taken & teamnotities", desc: "Taken met deadline en leesbevestiging voor je team." },
    ],
  },
  faqs: {
    title: "Veelgestelde vragen",
    pricingLinkLabel: "Bekijk de prijzen",
    items: homeFaqs,
  },
  cta: {
    title: "Klaar voor rustigere dagen en minder no-shows?",
    subtitle: "Start vandaag met Treatflow – 14 dagen gratis, geen creditcard nodig.",
    note: "14 dagen gratis · Geen creditcard · Altijd opzegbaar",
  },
  schemas: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      description:
        "Alles-in-één salonsoftware voor schoonheidssalons en esthetische klinieken: afspraken, online boeken zonder commissie, klantdossiers, toestemmingsformulieren en behandeldocumentatie. AVG-proof hosting in de EU. Gemaakt in Oostenrijk.",
      url: `${BASE_URL}/nl`,
      inLanguage: "nl",
      author: { "@type": "Organization", name: "Treatflow", url: BASE_URL },
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "19",
        reviewCount: "19",
        bestRating: "5",
        worstRating: "1",
      },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          description: "Klantdossiers, formulieren en behandeldocumentatie",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          description: "Agenda, online boeken en automatische herinneringen",
        },
      ],
      featureList: [
        "Afsprakenkalender met kolommen per medewerker en ruimte",
        "Online boeken zonder commissie",
        "Digitale klantdossiers",
        "Intake- en toestemmingsformulieren",
        "Behandeldocumentatie met foto's",
        "Herinneringen via WhatsApp en e-mail",
      ],
    },
    faq: faqSchema(homeFaqs),
  },
};

const homeMeta: LocaleSiteContent["homeMeta"] = {
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
};

/* -------------------------------------------------------------------------- */
/* Pricing                                                                    */
/* -------------------------------------------------------------------------- */

const pricing: LocaleSiteContent["pricing"] = {
  eyebrow: "Transparante prijzen",
  titleBefore: "Eenvoudige prijzen –",
  titleHighlight: "geen verborgen kosten",
  subtitle:
    "Kies het abonnement dat bij jouw studio past. Start je gratis proefperiode van 14 dagen – geen creditcard nodig.",
  monthly: "Maandelijks",
  yearly: "Jaarlijks",
  saveBadge: "Bespaar 10%",
  perMonth: "/maand",
  perYear: "/jaar",
  basicYearlyHint: "€35/maand • Bespaar €47 per jaar",
  bookingYearlyHint: "€53/maand • Bespaar €71 per jaar",
  exclVat: "excl. btw",
  popular: "Populair",
  cta: "Gratis proberen",
  earlyAccessHref: "",
  basic: {
    name: "Basic",
    description:
      "Digitale intake, toestemmingsformulieren en behandeldocumentatie – zonder afsprakenplanning.",
    included: [
      "Klantdossiers",
      "Formulieren met digitale handtekening",
      "Behandeldocumentatie & spraaknotities",
      "Voor- en nafoto's",
      "Teamnotities & taken",
      "Shop & producten",
      "Rapporten",
      "Medewerkersrollen",
      "Support via e-mail",
    ],
    excluded: [
      "Afsprakenkalender",
      "Online boeken",
      "Automatiseringen & wachtlijst",
      "Prioriteitssupport",
    ],
  },
  booking: {
    name: "Booking",
    description:
      "Afsprakenkalender, online boeken en automatische herinneringen voor jouw studio.",
    included: [
      "Alles uit Basic",
      "Afsprakenkalender (medewerkers & ruimtes)",
      "Online boeken zonder commissie",
      "Wachtlijst",
      "Herinneringen via WhatsApp en e-mail",
      "Klantworkflows",
      "Kortingscodes",
      "Meertalige boekingspagina",
      "Integraties (Zapier en meer)",
      "Prioriteitssupport via e-mail & chat",
    ],
  },
  trialBox: {
    title: "14 dagen gratis proberen",
    text: "Geen creditcard nodig • Altijd opzegbaar • Gratis datamigratie",
    points: ["Geen opstartkosten", "Maandelijks opzegbaar", "AVG-proof"],
  },
  comparison: {
    title: "Wat zit erin?",
    subtitle: "Vergelijk beide abonnementen in detail en kies wat bij jouw studio past.",
    vatNote: "Alle prijzen zijn exclusief btw.",
    featureCol: "Functie",
    rows: [
      { feature: "Klantdossiers", basic: true, booking: true },
      { feature: "Formulieren met digitale handtekening", basic: true, booking: true },
      { feature: "Behandeldocumentatie & spraaknotities", basic: true, booking: true },
      { feature: "Voor- en nafoto's", basic: true, booking: true },
      { feature: "Teamnotities & taken", basic: true, booking: true },
      { feature: "Shop & producten", basic: true, booking: true },
      { feature: "Rapporten", basic: true, booking: true },
      { feature: "Medewerkersrollen", basic: true, booking: true },
      { feature: "Support via e-mail", basic: true, booking: true },
      { feature: "Afsprakenkalender (medewerkers & ruimtes)", basic: false, booking: true },
      { feature: "Online boeken zonder commissie", basic: false, booking: true },
      { feature: "Wachtlijst", basic: false, booking: true },
      { feature: "Herinneringen via WhatsApp en e-mail", basic: false, booking: true },
      { feature: "Klantworkflows", basic: false, booking: true },
      { feature: "Kortingscodes", basic: false, booking: true },
      { feature: "Meertalige boekingspagina", basic: false, booking: true },
      { feature: "Integraties (Zapier)", basic: false, booking: true },
      { feature: "Prioriteitssupport", basic: false, booking: true },
    ],
  },
  why: {
    title: "Waarom Treatflow?",
    subtitle: "Transparante vaste prijzen in plaats van verborgen kosten en commissies.",
    items: [
      { value: "0%", label: "Commissie per boeking" },
      { value: "€0", label: "Opstartkosten" },
      { value: "14 dagen", label: "gratis proberen" },
      { value: "Altijd", label: "opzegbaar" },
    ],
  },
  faq: {
    title: "Veelgestelde vragen over de prijzen",
    subtitle: "Alles wat je moet weten over de prijzen van Treatflow.",
    items: [
      {
        question: "Wat kost Treatflow?",
        answer:
          "Treatflow heeft twee abonnementen: Basic vanaf €39 per maand voor klantdossiers, formulieren en documentatie, en Booking vanaf €59 per maand met afsprakenkalender, online boeken en automatische herinneringen. Beide probeer je 14 dagen gratis.",
      },
      {
        question: "Zijn er verborgen kosten?",
        answer:
          "Nee. Treatflow werkt met transparante vaste prijzen – zonder boekingscommissie, opstartkosten of verborgen extra's.",
      },
      {
        question: "Kan ik altijd opzeggen?",
        answer:
          "Ja. Bij maandelijkse betaling zeg je op tegen het einde van de factuurperiode. Er is geen minimale looptijd.",
      },
      {
        question: "Is het Booking-abonnement de moeite waard?",
        answer:
          "Als je online boeken, automatische afspraakherinneringen en een digitale agenda nodig hebt: ja. Studio's met Booking merken vaak minder no-shows en hoeven minder te bellen.",
      },
      {
        question: "Kan ik Treatflow gebruiken in Nederland of België?",
        answer:
          "Ja. Je kunt je overal registreren en op app.treatflow.io je gratis proefperiode van 14 dagen starten – geen creditcard nodig.",
      },
    ],
  },
  meta: {
    title: "Prijzen",
    description:
      "Prijzen van Treatflow: Basic vanaf €39 per maand, Booking vanaf €59 per maand. Geen boekingscommissie, 14 dagen gratis proberen, geen creditcard nodig.",
  },
};

const pricingKeywords = [
  "salonsoftware prijzen",
  "salonsoftware kosten",
  "afsprakensoftware kosten",
  "online boekingssysteem prijs",
  "software schoonheidssalon abonnement",
];

/* -------------------------------------------------------------------------- */
/* Features overview                                                          */
/* -------------------------------------------------------------------------- */

const featuresMeta: LocaleSiteContent["featuresMeta"] = {
  title: "Functies voor salons en klinieken",
  description:
    "Afsprakenkalender, online boeken zonder commissie, klantdossiers, digitale toestemmingsformulieren, behandeldocumentatie met spraakinvoer, herinneringen en integraties – in één studiosysteem.",
  keywords: [
    "salonsoftware functies",
    "afsprakenkalender salon",
    "digitaal klantdossier",
    "toestemmingsformulier digitaal",
    "online boeken salon",
  ],
};

const featuresOverview: LocaleSiteContent["featuresOverview"] = {
  breadcrumbLabel: "Functies",
  homeHref: "/en",
  registerHref: "",
  pricingHref: "/en/pricing",
  eyebrow: "Alle functies",
  title: "Salon- en kliniekssoftware, van boeking tot documentatie",
  subtitle:
    "Treatflow combineert agenda, online boeken, klantdossiers, digitale formulieren, behandelnotities en opvolging in één werkomgeving. Gemaakt voor schoonheidssalons en esthetische klinieken – geen boekingsplatform.",
  bullets: [
    "Geen commissie op boekingen",
    "Formulieren, foto's en notities in het klantdossier",
    "Behandelnotities inspreken",
    "14 dagen gratis, geen creditcard",
  ],
  primaryCta: "14 dagen gratis proberen",
  pricingCta: "Bekijk de prijzen",
  heroImageSrc: "/images/lifestyle/hero-startseite-en.png",
  heroImageAlt:
    "Treatflow op laptop en tablet in een kliniek: agenda en klantdossiers",
  capsules: [
    {
      question: "Welke functies heeft Treatflow?",
      answer:
        "Treatflow heeft een afsprakenkalender, online boeken zonder commissie, klantdossiers, digitale intake- en toestemmingsformulieren, behandeldocumentatie met foto's en spraakinvoer, herinneringen, integraties, een shop en cadeaubonnen.",
    },
    {
      question: "Is Treatflow alles-in-één software?",
      answer:
        "Ja. Treatflow is studiosoftware voor schoonheidssalons en esthetische klinieken. Boekingen, dossiers, formulieren, documentatie en opvolging zitten in één systeem. Het is geen boekingsplatform en rekent geen commissie per boeking.",
    },
  ],
  workflowTitle: "Hoe de functies samenwerken",
  workflowSubtitle:
    "Elke stap sluit aan op de volgende, zodat je team vanuit één klantreis werkt in plaats van met losse tools.",
  workflowSteps: [
    {
      href: "/en/online-booking",
      label: "Online boeken",
      desc: "Klanten boeken via je eigen link. De tijdsloten lopen synchroon met je studio-agenda.",
    },
    {
      href: "/en/forms",
      label: "Intake en toestemming",
      desc: "Intake- en toestemmingsformulieren worden ingevuld nog voordat de klant binnenkomt.",
    },
    {
      href: "/en/client-records",
      label: "Klantdossier",
      desc: "Historie, notities en formulieren staan in één profiel dat het hele team kan openen.",
    },
    {
      href: "/en/treatment-documentation",
      label: "Documentatie",
      desc: "Notities, ingesproken tekst, parameters en foto's blijven gekoppeld aan de behandeling.",
    },
    {
      href: "/en/messaging",
      label: "Opvolging",
      desc: "Herinneringen en automatische berichten verminderen no-shows en brengen klanten terug.",
    },
  ],
  cardsTitle: "Functies in één oogopslag",
  cardsSubtitle: "Elke kaart opent de pagina met alle details over die functie.",
  cards: [
    {
      href: "/en/appointment-calendar",
      ...cardMeta.calendar,
      title: "Afsprakenkalender",
      desc: "Dag-, week- en maandweergave met kolommen per medewerker of ruimte. Online boekingen komen in dezelfde agenda.",
      highlights: ["Kolommen per medewerker en ruimte", "Slepen en neerzetten", "Synchroon met online boeken"],
    },
    {
      href: "/en/online-booking",
      ...cardMeta.booking,
      title: "Online boeken",
      desc: "Je eigen boekingspagina met live beschikbaarheid. Geen platformcommissie. Bevestigingen gaan automatisch de deur uit.",
      highlights: ["Boekingslink 24/7", "Geen commissie", "Optionele aanbetaling"],
    },
    {
      href: "/en/client-records",
      ...cardMeta.records,
      title: "Klantdossiers",
      desc: "Historie, notities, formulieren en foto's in één profiel dat het hele team vóór de afspraak kan inzien.",
      highlights: ["Doorzoekbare profielen", "Formulieren in het dossier", "Zichtbaar voor het team"],
    },
    {
      href: "/en/forms",
      ...cardMeta.forms,
      title: "Intake en toestemming",
      desc: "Verstuur intake- en toestemmingsformulieren vóór de afspraak. Klanten vullen ze in op hun telefoon, inclusief digitale handtekening.",
      highlights: ["Vooraf versturen", "Digitale handtekening", "Opgeslagen in het dossier"],
    },
    {
      href: "/en/treatment-documentation",
      ...cardMeta.docs,
      title: "Behandeldocumentatie",
      desc: "Sessienotities, parameters en voor- en nafoto's bij de behandeling. Spreek notities in en laat ze desgewenst met AI verfijnen.",
      highlights: ["Notities en parameters", "Spraakinvoer", "Voor- en nafoto's"],
    },
    {
      href: "/en/messaging",
      ...cardMeta.messaging,
      title: "Herinneringen en opvolging",
      desc: "Automatische herinneringen via WhatsApp en e-mail vóór de afspraak, plus opvolgberichten na de behandeling. Het tijdstip stel je zelf in.",
      highlights: ["WhatsApp en e-mail", "Boekingsbevestigingen", "Berichten om klanten terug te halen"],
    },
    {
      href: "/en/integrations",
      ...cardMeta.integrations,
      title: "Integraties",
      desc: "Houd Treatflow synchroon met de tools die je al gebruikt, zoals Google Agenda en Zapier.",
      highlights: ["Google Agenda", "Zapier", "Minder dubbel invoeren"],
    },
    {
      href: "/en/shop",
      ...cardMeta.shop,
      title: "Shop en voorraad",
      desc: "Verkoop producten naast je behandelingen en houd de voorraad bij in dezelfde werkomgeving.",
      highlights: ["Productverkoop", "Voorraad", "Gekoppeld aan de klant"],
    },
    {
      href: "/en/vouchers",
      ...cardMeta.vouchers,
      title: "Cadeaubonnen",
      desc: "Verkoop en verzilver cadeaubonnen, inclusief restsaldo, zonder apart spreadsheet.",
      highlights: ["Verkopen en verzilveren", "Restsaldo", "Geldigheid instellen"],
    },
    {
      href: "/en/studio-website",
      ...cardMeta.website,
      title: "Salonwebsite",
      desc: "Een website voor je studio die gekoppeld is aan je Treatflow-boekingspagina, zodat bezoekers direct boeken in plaats van alleen rond te kijken.",
      highlights: ["Mobile-first", "Gekoppeld aan online boeken", "Gemaakt voor studio's"],
    },
  ],
  learnMore: "Meer informatie",
  stepLabel: (n: number) => `Stap ${n}`,
  showCheckoutSection: false,
  checkoutTitle: "",
  checkoutText: "",
  industriesTitle: "Voor wie deze functies zijn",
  industriesSubtitle: "Hetzelfde product, afgestemd op hoe elke studio werkt.",
  industries: [
    { href: "/en/beauty-salon-software", label: "Schoonheidssalons" },
    { href: "/en/aesthetic-clinic-software", label: "Esthetische klinieken" },
    { href: "/en/laser-hair-removal-software", label: "Laserontharing" },
    { href: "/en/permanent-makeup-software", label: "Permanente make-up" },
    { href: "/en/lash-studio-software", label: "Wimperstudio's" },
    { href: "/en/nail-salon-software", label: "Nagelstudio's" },
    { href: "/en/massage-software", label: "Massage en wellness" },
    { href: "/en/spa-wellness-software", label: "Spa" },
  ],
  relatedTitle: "Gerelateerde pagina's",
  relatedLinks: [
    { href: "/en/pricing", label: "Prijzen" },
    { href: "/en/software-comparison", label: "Salonsoftware vergelijken" },
    { href: "/en/treatflow-vs-fresha", label: "Treatflow vs Fresha" },
    { href: "/en/treatflow-vs-treatwell", label: "Treatflow vs Treatwell" },
  ],
  faqs: [
    {
      question: "Welke functies heeft Treatflow?",
      answer:
        "Treatflow heeft een afsprakenkalender, online boeken zonder commissie, klantdossiers, digitale intake- en toestemmingsformulieren, behandeldocumentatie met foto's en spraakinvoer, herinneringen, integraties, een shop, cadeaubonnen en een optionele salonwebsite.",
    },
    {
      question: "Is Treatflow alles-in-één software of alleen een boekingstool?",
      answer:
        "Treatflow is studiosoftware, geen boekingsplatform. Boekingen, dossiers, formulieren, documentatie en opvolging zitten in één systeem, zodat je team niet steeds tussen apps hoeft te wisselen.",
    },
    {
      question: "Kan ik alle functies uitproberen voordat ik betaal?",
      answer: "Ja. Je start een gratis proefperiode van 14 dagen zonder creditcard. Altijd opzegbaar.",
    },
  ],
  faqTitle: "Veelgestelde vragen",
  faqBadge: "FAQ",
  bottomTitle: "Klaar om je studio vanuit één plek te runnen?",
  bottomText: "Start je gratis proefperiode – geen creditcard nodig, altijd opzegbaar.",
};

/* -------------------------------------------------------------------------- */
/* Comparisons                                                                */
/* -------------------------------------------------------------------------- */

const comparisons: LocaleSiteContent["comparisons"] = {
  "treatflow-vs-fresha": {
    competitor: "Fresha",
    title: "Treatflow vs Fresha",
    description:
      "Treatflow vs Fresha voor schoonheidssalons: studiosoftware met documentatie en toestemmingsformulieren versus een gratis boekingstool die verdient aan betalingen. Een eerlijke vergelijking.",
    intro:
      "Fresha wordt veel gebruikt als gratis boekingstool. Treatflow is betaalde studiosoftware: je klanten blijven van jou, je betaalt een vast bedrag en je documenteert behandelingen en toestemming op één plek. Geen platformcommissie.",
    rows: [
      { feature: "Verdienmodel", treatflow: "SaaS, vaste prijs per maand", competitor: "Gratis basis, verdient aan betalingen", treatflowOk: true, competitorOk: false },
      { feature: "Boekingscommissie", treatflow: "Geen", competitor: "Geen platformcommissie, wel mogelijke betaalkosten", treatflowOk: true, competitorOk: true },
      { feature: "Eigendom klantgegevens", treatflow: "De studio is eigenaar van de dossiers", competitor: "Hangt af van hoe je het platform gebruikt", treatflowOk: true, competitorOk: false },
      { feature: "Intake- en toestemmingsformulieren", treatflow: "Ingebouwd, ondertekend, opgeslagen in het dossier", competitor: "Beperkt / niet gericht op behandeldocumentatie", treatflowOk: true, competitorOk: false },
      { feature: "Behandeldocumentatie", treatflow: "Notities, parameters, voor- en nafoto's", competitor: "Geen documentatiesysteem", treatflowOk: true, competitorOk: false },
      { feature: "Prijs", treatflow: "Vanaf €39 per maand, transparant", competitor: "Gratis instap, kosten groeien mee met betalingen", treatflowOk: true, competitorOk: true },
      { feature: "Hosting", treatflow: "EU-servers, AVG-proof", competitor: "Internationaal product", treatflowOk: true, competitorOk: false },
    ],
    faqs: [
      {
        q: "Is Fresha echt gratis?",
        a: "De boekingsfunctie kan gratis zijn. Fresha verdient meestal aan kaartbetalingen en extra producten. Je werkelijke kosten hangen af van je omzet, niet van een vast abonnement.",
      },
      {
        q: "Wat is het verschil tussen Treatflow en Fresha?",
        a: "Treatflow is onafhankelijke studiosoftware met agenda, klantdossiers, toestemmingsformulieren en behandeldocumentatie. Fresha is in de eerste plaats een gratis boekingsproduct. Treatflow rekent geen boekingscommissie.",
      },
      {
        q: "Heeft Fresha behandeldocumentatie voor esthetische klinieken?",
        a: "Fresha is niet gebouwd als systeem voor behandeldocumentatie met parameters en foto's. Treatflow slaat parameters, notities en foto's op bij elke behandeling.",
      },
      {
        q: "Kan ik overstappen van Fresha naar Treatflow?",
        a: "Ja. We helpen je met het overzetten van je klantgegevens. Je probeert Treatflow 14 dagen gratis, zonder creditcard.",
      },
    ],
    ctaTitle: "Liever software waarvoor je betaalt – in plaats van een deel van elke afspraak?",
    keywords: [
      "Fresha alternatief",
      "Treatflow vs Fresha",
      "Fresha ervaringen salon",
      "Fresha kosten",
      "salonsoftware zonder commissie",
    ],
  },
  "treatflow-vs-treatwell": {
    competitor: "Treatwell",
    title: "Treatflow vs Treatwell",
    description:
      "Treatflow vs Treatwell: houd je klanten en betaal een vast maandbedrag, of sta op een boekingsplatform dat commissie rekent. Vergelijking voor schoonheidssalons.",
    intro:
      "Treatwell is een boekingsplatform. Treatflow is je eigen software. Wil je gevonden worden via een platform, dan kan Treatwell helpen. Wil je zelf de klantrelatie houden en geen commissie betalen, dan past Treatflow beter.",
    rows: [
      { feature: "Model", treatflow: "Software voor je eigen studio", competitor: "Boekingsplatform / marktplaats", treatflowOk: true, competitorOk: false },
      { feature: "Commissie", treatflow: "0% per boeking", competitor: "Commissie op boekingen via het platform", treatflowOk: true, competitorOk: false },
      { feature: "Klantgegevens", treatflow: "Blijven in je eigen studio-account", competitor: "Gedeeld met het platform", treatflowOk: true, competitorOk: false },
      { feature: "Online boeken", treatflow: "Jouw link, jouw merk", competitor: "Vermelding op het platform plus tools", treatflowOk: true, competitorOk: true },
      { feature: "Formulieren & documentatie", treatflow: "Kern van het product", competitor: "Niet de hoofdtaak van een platform", treatflowOk: true, competitorOk: false },
      { feature: "Prijs", treatflow: "€39–€59 per maand", competitor: "Op basis van commissie", treatflowOk: true, competitorOk: false },
    ],
    faqs: [
      {
        q: "Is Treatflow een alternatief voor Treatwell zonder commissie?",
        a: "Ja, als je software zoekt in plaats van een platform. Je deelt je eigen boekingslink en betaalt een vast maandbedrag in plaats van een percentage per boeking.",
      },
      {
        q: "Heeft Treatwell toestemmingsformulieren en behandelnotities?",
        a: "Boekingsplatforms richten zich op gevonden worden en boeken. Treatflow is gebouwd rond klantdossiers, formulieren en documentatie, naast de agenda.",
      },
      {
        q: "Kan ik beide gebruiken?",
        a: "Sommige studio's houden een platform aan voor nieuwe klanten en regelen de dagelijkse gang van zaken in Treatflow. Voor Treatflow heb je geen platformaccount nodig.",
      },
    ],
    ctaTitle: "Boekingen via je eigen link, zonder platformcommissie",
    keywords: [
      "Treatwell alternatief",
      "Treatflow vs Treatwell",
      "Treatwell commissie",
      "boekingssysteem zonder commissie",
      "Treatwell opzeggen salon",
    ],
  },
  "software-comparison": {
    competitor: "Gangbare tools",
    title: "Salonsoftware vergelijken",
    description:
      "Salonsoftware vergelijken: boekingsplatform vs gratis boekingstool vs Treatflow. Geen commissie, AVG-proof dossiers, toestemmingsformulieren en documentatie.",
    intro:
      "De meeste studio's combineren een agenda, een boekingswidget, papieren formulieren en fotomapjes. Treatflow vervangt dat allemaal door één app: afspraken, online boeken zonder commissie, klantdossiers, formulieren en behandeldocumentatie.",
    rows: [
      { feature: "Alles-in-één", treatflow: "Agenda, dossiers, formulieren, documentatie", competitor: "Vaak meerdere tools", treatflowOk: true, competitorOk: false },
      { feature: "Commissie", treatflow: "Geen", competitor: "Platforms rekenen een percentage", treatflowOk: true, competitorOk: false },
      { feature: "AVG / EU-hosting", treatflow: "EU-servers", competitor: "Wisselend", treatflowOk: true, competitorOk: false },
      { feature: "Toestemmingsformulieren", treatflow: "Digitaal, in het klantdossier", competitor: "Op papier of als add-on", treatflowOk: true, competitorOk: false },
      { feature: "Proefperiode", treatflow: "14 dagen, zonder creditcard", competitor: "Wisselend", treatflowOk: true, competitorOk: true },
    ],
    faqs: [
      {
        q: "Welke software heeft een schoonheidssalon echt nodig?",
        a: "Een agenda die aansluit op online boeken, een klantdossier, intake en toestemming, en een manier om behandelingen te documenteren. Treatflow is precies rond die combinatie gebouwd.",
      },
      {
        q: "Wat is de beste salonsoftware in Europa zonder boekingscommissie?",
        a: "Treatflow is studiosoftware uit Oostenrijk met hosting in de EU en zonder platformcommissie. Abonnementen vanaf €39 per maand.",
      },
    ],
    ctaTitle: "Bekijk Treatflow naast de tools die je nu gebruikt",
    keywords: [
      "salonsoftware vergelijken",
      "beste salonsoftware",
      "boekingssysteem salon vergelijken",
      "software schoonheidssalon vergelijken",
      "afsprakenapp salon",
    ],
  },
};

/* -------------------------------------------------------------------------- */
/* About & contact                                                            */
/* -------------------------------------------------------------------------- */

const about: LocaleSiteContent["about"] = {
  metaTitle: "Over Treatflow",
  metaDescription:
    "Treatflow is alles-in-één software voor beautystudio's. Gemaakt in Oostenrijk, AVG-proof en gehost in de EU.",
  eyebrow: "Over ons",
  title: "Software die studio's hun tijd teruggeeft",
  subtitle:
    "Treatflow begon met een simpele observatie: beautyprofessionals zijn veel te veel tijd kwijt aan administratie in plaats van aan hun klanten. Dat wilden we veranderen – met één overzichtelijke app die afspraken, klanten, formulieren en documentatie samenbrengt.",
  valuesTitle: "Waar we voor staan",
  values: [
    {
      title: "Gemaakt voor studio's",
      desc: "We bouwen samen met beautyprofessionals – elke functie lost een echt, dagelijks probleem op.",
    },
    {
      title: "Privacy voorop",
      desc: "AVG-proof en gehost op EU-servers. Jouw gegevens en die van je klanten blijven beschermd.",
    },
    {
      title: "Persoonlijke support",
      desc: "Echte mensen die de beautybranche kennen – en je helpen met de start en met alles uit Treatflow te halen.",
    },
    {
      title: "Made in Austria",
      desc: "Ontwikkeld en ondersteund in Europa, voor studio's in heel Europa en daarbuiten.",
    },
  ],
  ctaLabel: "Gratis proberen",
};

const contact: LocaleSiteContent["contact"] = {
  metaTitle: "Contact met Treatflow",
  metaDescription:
    "Neem contact op met het Treatflow-team. We helpen schoonheidssalons en esthetische klinieken om afspraken, formulieren en behandeldocumentatie te digitaliseren.",
  title: "Contact",
  body: "Mail ons op hello@treatflow.io of start direct je gratis proefperiode.",
  cta: "Gratis proberen",
};

/* -------------------------------------------------------------------------- */
/* Legal                                                                      */
/* -------------------------------------------------------------------------- */

const privacy: LocaleSiteContent["privacy"] = {
  metaTitle: "Privacyverklaring",
  metaDescription:
    "Privacyverklaring van Treatflow: verwerking volgens de AVG, hosting in de EU (Frankfurt), je rechten en hoe we omgaan met studio- en websitegegevens.",
  title: "Privacyverklaring",
  intro:
    "Treatflow is studiosoftware voor schoonheidssalons en esthetische klinieken. We verwerken persoonsgegevens in overeenstemming met de AVG (GDPR). De Duitse privacyverklaring op /datenschutz is de juridisch volledige en bindende versie. Deze Nederlandse pagina vat de punten samen waar studio's en klanten het vaakst naar vragen.",
  sections: [
    {
      heading: "1. Verwerkingsverantwoordelijke",
      html: `<p>Verwerkingsverantwoordelijke voor deze website en de Treatflow-applicatie:</p>
<p><strong>Treatflow</strong><br/>Olcay Elikci<br/>Bahnhofstrasse 17<br/>5500 Bischofshofen, Austria<br/>E-mail: <a href="mailto:hello@treatflow.io">hello@treatflow.io</a></p>`,
    },
    {
      heading: "2. Waar gegevens worden gehost",
      html: `<p>Treatflow wordt gehost op EU-servers (Frankfurt). Verbindingen zijn SSL-versleuteld. We maken dagelijks back-ups. De hosting is ingericht op de AVG. We verkopen geen klantgegevens en we zijn geen boekingsplatform.</p>`,
    },
    {
      heading: "3. Welke gegevens we verwerken",
      html: `<p><strong>Websitebezoekers:</strong> IP-adres, tijdstip van bezoek, browser en verwijzende pagina – nodig om de website te leveren en te beveiligen.</p>
<p><strong>Contact en aanmelding voor de proefperiode:</strong> naam, e-mailadres en de studiogegevens die je invult.</p>
<p><strong>In de app (studiogegevens):</strong> klantdossiers, afspraken, formulieren, handtekeningen, behandelnotities, foto's en factuurgegevens die een studio opslaat. De studio is doorgaans de verwerkingsverantwoordelijke voor de eigen klantgegevens; Treatflow treedt op als verwerker op basis van een verwerkersovereenkomst.</p>`,
    },
    {
      heading: "4. Doeleinden en rechtsgronden",
      html: `<ul>
<li>Het leveren van de website en de software (overeenkomst / gerechtvaardigd belang)</li>
<li>Account, facturatie en support (overeenkomst)</li>
<li>Wettelijke verplichtingen (belastingen, boekhouding)</li>
<li>Optionele analyse- en marketingcookies alleen met toestemming</li>
</ul>`,
    },
    {
      heading: "5. Jouw rechten",
      html: `<p>Afhankelijk van het toepasselijke recht kun je inzage, rectificatie, wissing, beperking en overdraagbaarheid van je gegevens vragen en bezwaar maken tegen de verwerking. Je kunt een klacht indienen bij een toezichthoudende autoriteit. Onze bevoegde autoriteit in Oostenrijk is de Datenschutzbehörde; in Nederland kun je ook terecht bij de Autoriteit Persoonsgegevens en in België bij de Gegevensbeschermingsautoriteit. Neem contact met ons op via hello@treatflow.io.</p>`,
    },
    {
      heading: "6. Volledige Duitse verklaring",
      html: `<p>Voor cookies, verwerkers, bewaartermijnen en de volledige juridische tekst, zie de <a href="/datenschutz">Duitse privacyverklaring</a>. Bij verschillen tussen deze samenvatting en de Duitse versie is de Duitse versie leidend.</p>`,
    },
  ],
};

const terms: LocaleSiteContent["terms"] = {
  metaTitle: "Algemene voorwaarden",
  metaDescription:
    "Voorwaarden van Treatflow: SaaS voor schoonheidssalons, transparante prijzen, 14 dagen gratis proberen, geen boekingscommissie. De volledige Duitse AGB zijn van toepassing.",
  title: "Algemene voorwaarden",
  intro:
    "Treatflow is een betaald SaaS-product voor de bedrijfsvoering van studio's. Door een account aan te maken ga je akkoord met deze voorwaarden. De Duitse AGB op /agb vormen de bindende overeenkomst. Deze Nederlandse pagina licht de commerciële hoofdpunten toe voor studio's buiten de DACH-regio.",
  sections: [
    {
      heading: "1. De dienst",
      html: `<p>Treatflow levert websoftware voor afspraken, online boeken, klantdossiers, formulieren, behandeldocumentatie en aanverwante tools voor studio's. Het is geen boekingsplatform en rekent geen commissie per boeking.</p>`,
    },
    {
      heading: "2. Abonnementen, proefperiode en opzeggen",
      html: `<p>Abonnementen beginnen bij €39 per maand (Basic) en €59 per maand (Booking), exclusief btw. Voor de proefperiode van 14 dagen is geen creditcard nodig. Maandabonnementen kun je opzeggen tegen het einde van de factuurperiode.</p>`,
    },
    {
      heading: "3. Verantwoordelijkheid van de studio",
      html: `<p>Je bent zelf verantwoordelijk voor de gegevens die je invoert, voor het juiste gebruik van formulieren en documentatie en voor het naleven van de regels op het gebied van beauty, gezondheid en belastingen in je eigen land. Treatflow vervangt geen juridisch of medisch advies.</p>`,
    },
    {
      heading: "4. Beschikbaarheid en support",
      html: `<p>We streven naar een hoge beschikbaarheid en bieden support via e-mail (prioriteitssupport bij Booking). We kunnen het product bijwerken. Kritieke beveiligingsupdates kunnen zonder aankondiging worden doorgevoerd.</p>`,
    },
    {
      heading: "5. Bindende Duitse voorwaarden",
      html: `<p>De volledige contractuele voorwaarden zijn de <a href="/agb">Duitse AGB</a>. Vragen? Mail naar hello@treatflow.io.</p>`,
    },
  ],
};

/* -------------------------------------------------------------------------- */
/* Export                                                                     */
/* -------------------------------------------------------------------------- */

export const general: Omit<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  home,
  homeMeta,
  pricing,
  pricingKeywords,
  featuresMeta,
  featuresOverview,
  comparisons,
  about,
  contact,
  privacy,
  terms,
};
