import type { HomeContent } from "./types";

/**
 * Deutsche Startseite (Referenz für alle Sprachen).
 * Texte, Reihenfolge und Links = bisheriges app/(de)/page.tsx und Sektionen.
 */
export const homeDe: HomeContent = {
  meta: {
    title: "Treatflow: All-in-One Software für dein Kosmetikstudio",
    description:
      "Kosmetikstudio-Software für Termine, Online-Buchung, Kundenkartei, Formulare, Doku & Kasse - alles in einer App. Keine Provision, DSGVO-konform, Made in Austria. Bereits von 500+ Studios getestet. 14 Tage gratis.",
  },

  schema: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Treatflow",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web Browser",
      "description": "Software für Kosmetikstudio: Terminkalender, digitale Kundenkartei, Online-Buchungen und Behandlungsdokumentation",
      "url": "https://www.treatflow.io",
      "author": {
        "@type": "Organization",
        "name": "Treatflow",
        "url": "https://www.treatflow.io"
      },
      "offers": [
        {
          "@type": "Offer",
          "name": "Basic",
          "price": "39",
          "priceCurrency": "EUR",
          "billingIncrement": "P1M",
          "description": "Perfekt für kleine Studios und Einzelunternehmer"
        },
        {
          "@type": "Offer",
          "name": "Booking",
          "price": "59",
          "priceCurrency": "EUR",
          "billingIncrement": "P1M",
          "description": "Ideal für wachsende Studios mit Online-Buchung"
        }
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.6",
        "ratingCount": "19",
        "reviewCount": "19",
        "bestRating": "5",
        "worstRating": "1"
      },
      "featureList": [
        "Terminkalender mit Online-Buchung",
        "Digitale Kundenkartei und Kundenverwaltung",
        "Formulare für Anamnesen",
        "Behandlungsdokumentation",
        "NiSV konform"
      ],
      "review": [
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Stefanie Ruschmann" },
          "reviewBody": "Treatflow ist die ultimative Lösung für meine Praxis. Unschlagbar im Preis und intuitiv zu bedienen. Mein Wunsch nach einer Lexware Office Anbindung wurde innerhalb eines Tages umgesetzt!"
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Organization", "name": "Laser-Haarentfernung Velura Saarburg" },
          "reviewBody": "Wir sind mehr als zufrieden mit Treatflow! Der Support ist wirklich herausragend – immer nett, freundlich und lösungsorientiert. Klare Empfehlung für jeden, der ein zuverlässiges System mit top Service sucht!"
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Nadja Neumann" },
          "reviewBody": "Ich nutze Treatflow erst seit kurzem für mein Studio, aber bin jetzt schon voll und ganz begeistert. Es erleichtert die Arbeit enorm und ist NiSV-konform."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Sharon Ulbrich-Decker" },
          "reviewBody": "Hab von Phorest zu Treatflow gewechselt. Preisleistung ist super. Bei Phorest war ich bei ca. 300 EUR im Monat, bei Treatflow unter 100 EUR. Kann ich mit bestem Gewissen empfehlen."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Selina Klingshirn" },
          "reviewBody": "Für mich eine klare Empfehlung. Es wird auf individuelle Bedürfnisse eingegangen. Eine Funktion, die ich mir gewünscht habe, wurde tatsächlich extra für mich umgesetzt."
        },
        {
          "@type": "Review",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "author": { "@type": "Person", "name": "Pia Patricia" },
          "reviewBody": "Treatflow überzeugt mit einer benutzerfreundlichen Oberfläche und einem durchdachten Konzept. Nutze es täglich und bin sehr begeistert! Klare Empfehlung."
        }
      ]
    },
  },

  hero: {
    badge: "Für Kosmetikstudios, die wachsen wollen",
    title: {
      before: "Schluss mit Terminchaos,",
      highlight: "Zettelwirtschaft",
      connector: "und",
      end: "No-Shows",
    },
    subtitle:
      "Termine, Kunden, Formulare, Behandlungsdokumentation und Kasse in einer übersichtlichen App. So findet sich dein Team sofort zurecht.",
    primaryCta: "Jetzt 14 Tage kostenlos testen",
    demoCta: "Demo buchen",
    checks: ["Ohne Kreditkarte", "In 2 Minuten startklar", "Kostenloser Datenumzug"],
    rating: "4,6/5 auf Google",
    tested: { before: "Bereits von ", highlight: "500+ Studios", after: " getestet" },
    calendarLocale: "de-DE",
    newBookingLabel: "Neue Buchung",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow auf Laptop und Tablet: Kalender, Kasse und Kundenakte in einem modernen Studio",
    },
    liveDemo: { href: { page: "try-features" }, label: "Funktionen live testen" },
  },

  socialProof: {
    rating: "4,6/5 auf Google",
    allReviews: "Alle Reviews ansehen",
    tested: { before: "Bereits von ", highlight: "500+ Studios", after: " getestet" },
    reviews: [
      {
        text: "Support ist herausragend – immer nett, freundlich und lösungsorientiert. Klare Empfehlung!",
        name: "Velura Saarburg",
        studio: "Laser-Haarentfernung",
      },
      {
        text: "Unschlagbar im Preis und intuitiv zu bedienen. Mein Wunsch wurde innerhalb eines Tages umgesetzt!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Von Phorest gewechselt – Preisleistung ist super. Kann ich mit bestem Gewissen empfehlen.",
        name: "Sharon U.",
        studio: "Kosmetikstudio",
      },
    ],
  },

  studioDay: {
    eyebrow: "Ein Termin, ein System",
    title: "Von der Buchung bis zur Kasse. In einer App.",
    subtitle: "So läuft ein Termin mit Treatflow. Nichts muss doppelt eingetragen werden.",
    steps: [
      {
        time: "Mo · 21:14",
        module: "Online-Buchung",
        title: "Lena bucht abends vom Sofa aus.",
        text: "Ohne Anruf und ohne Provision pro Buchung. Der Termin steht sofort im Kalender.",
        meta: "Gesichtsbehandlung · Do 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "Mi · 10:45",
        module: "Erinnerung",
        title: "Die Erinnerung geht automatisch raus.",
        text: "Einen Tag vorher per E-Mail oder WhatsApp. Weniger vergessene Termine, ohne dass jemand daran denken muss.",
        meta: "Zugestellt · bestätigt",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "Do · 10:40",
        module: "Formulare",
        title: "Anamnese am Tablet, unterschrieben.",
        text: "Das Formular landet direkt in Lenas Kundenakte. Kein Papier, das abgetippt werden muss.",
        meta: "Anamnesebogen · digital signiert",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "Do · 11:40",
        module: "Dokumentation",
        title: "Behandlung dokumentiert, mit Fotos.",
        text: "Parameter, Produkte und Vorher-nachher-Bilder bleiben in der Behandlungshistorie.",
        meta: "3 Fotos · Parameter gespeichert",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "Do · 11:45",
        module: "Kasse",
        title: "Kassiert direkt aus dem Termin.",
        text: "Bar, Karte oder Gutschein. Der Beleg ist fiskalkonform, der Umsatz sofort in der Übersicht.",
        meta: "Beleg mit Signatur-QR",
        href: { page: "point-of-sale" },
        icon: "receipt",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
        feature: "pos",
      },
    ],
  },

  features: {
    title: "Weniger Chaos. Mehr Zeit für Kundinnen.",
    subtitle: "Alles was dein Studio braucht – in einer App, die dein Team sofort versteht.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Terminkalender", desc: "Alle Termine in einer klaren Tages- und Wochenansicht.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Online-Buchung", desc: "Kunden buchen selbst – auch außerhalb deiner Öffnungszeiten.", color: "bg-emerald-100 text-emerald-600" },
      { href: "/kundenkartei-software", icon: "file-text", label: "Kundenkartei", desc: "Historie, Notizen und Fotos zentral und schnell auffindbar.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Formulare", desc: "Digitale Anamnese und Einwilligungen, vorab per Link ausfüllbar.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Dokumentation", desc: "Behandlungen sauber dokumentieren, inklusive NiSV-Nachweisen.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "point-of-sale" }, icon: "receipt", label: "Kasse", desc: "TSE- & RKSV-konform kassieren, direkt aus dem Termin.", color: "bg-green-100 text-green-600", feature: "pos" },
      { href: { page: "messaging" }, icon: "bell", label: "Erinnerungen", desc: "Automatische WhatsApp- und E-Mail-Erinnerungen reduzieren No-Shows.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows" }, icon: "workflow", label: "Kunden-Workflows", desc: "Nachsorge und Reaktivierung mehrstufig automatisieren.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "14 Tage kostenlos testen",
    ctaNote: "Ohne Kreditkarte. Jederzeit kündbar.",
  },

  video: {
    title: "Treatflow in einer Minute erklärt",
    description:
      "Online-Buchung, Kalender, digitale Formulare, Doku per Sprachdiktat, Kasse und mehr – so sieht dein Studioalltag mit Treatflow aus.",
    videoSrc: "/videos/treatflow-produktfilm.mp4",
    posterSrc: "/images/video/treatflow-produktfilm-poster.jpg",
    posterAlt: "Treatflow Produktfilm: Kalender, Online-Buchung und Kasse im Überblick",
    playLabel: "Video ansehen",
    playAriaPrefix: "Video abspielen",
    unsupported: "Dein Browser kann dieses Video nicht abspielen.",
  },

  support: {
    ariaLabel: "Persönliche Betreuung und Schulungen",
    badge: "Persönliche Betreuung",
    title: "Wir lassen dich nicht allein",
    text: "Von der Einrichtung bis zur Schulung: Unser Team begleitet dich persönlich beim Start mit Treatflow – damit du und dein Team vom ersten Tag an sicher arbeiten.",
    trialCta: "14 Tage kostenlos testen",
    demoCta: "Kostenlose Demo buchen",
    imageAlt: "Persönliche Betreuung und Schulung durch das Treatflow-Team",
    chip: "Persönlich. Auf Deutsch. Inklusive.",
  },

  pricing: {
    eyebrow: "Transparente Preise",
    titleBefore: "Einfache Preise -",
    titleHighlight: " keine versteckten Kosten",
    subtitle:
      "Treatflow kostet ab 39 €/Monat (Basic) bzw. 59 €/Monat (Booking). Die Kasse ist optional ab 39 €/Monat. 14 Tage kostenlos testen – ohne Provision und ohne Risiko.",
    monthly: "Monatlich",
    yearly: "Jährlich",
    saveBadge: "Spare 10%",
    perMonth: "/Monat",
    perYear: "/Jahr",
    vatNote: "zuzüglich MwSt.",
    basic: {
      name: "Basic",
      monthlyPrice: "€39",
      yearlyPrice: "€421",
      yearlyHint: "€35/Monat • Spare €47/Jahr",
      description: "Digitale Anamnesen, Formulare und Behandlungsdokumentation – ohne Terminplanung.",
      included: [
        "Kundenverwaltung",
        "Formulare mit digitaler Unterschrift",
        "Dokumentation inkl. Sprachnotiz",
        "Vorher-Nachher-Fotos",
        "Team-Notizen und Aufgaben",
        "Shop und Produkte",
        "Statistiken",
        "Mitarbeiter und Rollen",
        { text: "NiSV-Dokumentation", feature: "nisv" },
        "E-Mail-Support",
      ],
      excluded: [
        "Terminkalender",
        "Online-Buchung",
        "Automatisierungen und Warteliste",
        "Priority Support",
      ],
      cta: "14 Tage gratis testen",
    },
    booking: {
      name: "Booking",
      popular: "Beliebt",
      monthlyPrice: "€59",
      yearlyPrice: "€637",
      yearlyHint: "€53/Monat • Spare €71/Jahr",
      description: "Terminkalender, Online-Buchungen und automatische Erinnerungen für dein Studio.",
      included: [
        "Alles aus Basic",
        "Terminkalender mit Mitarbeiter- und Raumspalten",
        "Online-Buchung ohne Provision",
        "Warteliste",
        "WhatsApp- und E-Mail-Erinnerungen",
        "Kunden-Workflows",
        "Rabattcodes",
        "Mehrsprachige Buchungsseite",
        "Integrationen (Lexware, Google Kalender, Zapier, SumUp, KI-Assistenten)",
        "Priority E-Mail- und Chat-Support",
      ],
      cta: "14 Tage gratis testen",
    },
    addon: {
      feature: "pos",
      badge: "Beliebtes Add-on",
      name: "Kasse",
      tag: "Add-on zu Booking",
      description:
        "TSE-konform (DE) und RKSV-konform (AT): direkt aus dem Termin kassieren, fiskalkonforme Belege, Gutscheine, Tagesabschluss und Steuerberater-Export.",
      monthlyPrice: "€39",
      yearlyPrice: "€35",
      note: "zzgl. MwSt. · einmalig 149 € Einrichtung",
      link: { href: { page: "point-of-sale" }, label: "Mehr zur Kasse" },
    },
    trial: {
      title: "14 Tage kostenlos testen",
      text: "Keine Kreditkarte erforderlich • Jederzeit kündbar • Kostenloser Datenumzug",
      points: ["Keine Setup-Gebühren", "Monatlich kündbar", "DSGVO-konform"],
    },
  },

  faq: {
    badge: "Häufige Fragen",
    titleBefore: "Noch Fragen?",
    titleHighlight: " Wir haben Antworten!",
    subtitle: "Hier findest du Antworten auf die häufigsten Fragen zu Treatflow.",
    items: [
      {
        question: "Was ist Treatflow?",
        answer:
          "Treatflow ist eine All-in-One-App für den Studioalltag: Termine, Kundenakte, digitale Formulare und Behandlungsdokumentation hängen in einem System zusammen – ohne Provision pro Buchung. Entwickelt in Österreich, Daten auf EU-Servern.",
      },
      {
        question: "Für wen ist Treatflow?",
        answer: [
          "Für Studios, die Behandlungen durchführen – von Kosmetik über Ästhetik und Laser bis Nagel, Wimpern, Permanent Makeup, Massage und Spa. Mehr zur ",
          { text: "Ästhetik-Software", href: { page: "aesthetic-clinic-software" } },
          " und zur ",
          { text: "Kundenkartei", href: "/kundenkartei-software" },
          ".",
        ],
      },
      {
        question: "Wie lange kann ich Treatflow kostenlos testen?",
        answer:
          "Du kannst Treatflow 14 Tage lang vollkommen kostenlos testen. Keine Kreditkarte erforderlich, keine versteckten Kosten. Nach dem Testzeitraum kannst du entscheiden, ob du weitermachen möchtest.",
      },
      {
        question: "Was ist der Unterschied zwischen Basic und Booking?",
        answer: [
          "Basic (39 Euro/Monat) enthält unbegrenzte ",
          { text: "Kundenverwaltung", href: { page: "client-records" } },
          ", Formular-Marketplace mit Drag & Drop Editor und Shop-Integration. Booking (59 Euro/Monat) hat zusätzlich den professionellen ",
          { text: "Buchungskalender", href: { page: "appointment-calendar" } },
          " mit Buchungslink und automatische ",
          { text: "Terminerinnerungen", href: { page: "messaging" } },
          ".",
        ],
      },
      {
        question: "Ist Treatflow DSGVO-konform?",
        answer: [
          "Ja, absolut! Treatflow ist vollständig DSGVO-konform und erfüllt alle deutschen Datenschutzbestimmungen. Alle Daten werden verschlüsselt und sicher in Deutschland gespeichert. Auch die ",
          { text: "digitale Anamnese", href: "/digitale-anamnese-kosmetikstudio" },
          " und ",
          { text: "Behandlungsdokumentation", href: "/behandlungsdokumentation-kosmetikstudio" },
          " sind DSGVO-konform.",
        ],
      },
      {
        question: "Kann ich meine bestehenden Kundendaten importieren?",
        answer: [
          "Ja, wir helfen dir beim kostenlosen Umzug deiner Daten. Unser Support-Team unterstützt dich dabei, deine bestehenden Kundendaten sicher in die ",
          { text: "digitale Kundenkartei", href: { page: "client-records" } },
          " zu übertragen.",
        ],
      },
      {
        question: "Funktioniert Treatflow auch auf dem Handy?",
        answer:
          "Ja! Treatflow funktioniert perfekt auf allen Geräten - Computer, Tablet und Smartphone. Du hast überall Zugriff auf deine Kunden- und Termindaten.",
      },
      {
        question: "Was passiert mit meinen Daten, wenn ich kündige?",
        answer:
          "Du behältst die volle Kontrolle über deine Daten. Bei einer Kündigung kannst du alle deine Daten exportieren. Wir löschen deine Daten erst nach einer Übergangsfrist vollständig.",
      },
      {
        question: "Brauche ich technische Kenntnisse für Treatflow?",
        answer:
          "Nein! Treatflow ist sehr einfach zu bedienen. Keine Installation nötig - einfach im Browser anmelden und loslegen. Bei Fragen hilft unser Support-Team gerne.",
      },
      {
        question: "Wie funktioniert der Formular-Marketplace?",
        answer: [
          "Im Marketplace findest du professionelle ",
          { text: "Formulare", href: { page: "forms" } },
          " für alle Beauty-Behandlungen. Du kannst sie direkt verwenden oder mit dem Drag & Drop Editor an dein Studio anpassen. Auch ",
          { text: "digitale Anamnesebögen", href: "/digitale-anamnese-kosmetikstudio" },
          " sind sofort verfügbar.",
        ],
      },
      {
        question: "Kann ich unbegrenzt Kunden verwalten?",
        answer:
          "Ja! Du kannst unbegrenzt viele Kunden verwalten. Das System ist skalierbar und wächst mit deinem Studio. Mit der Import-Funktion kannst du bestehende Kundendaten einfach übertragen.",
      },
    ],
    contactTitle: "Hast du weitere Fragen?",
    contactText:
      "Unser Support-Team hilft dir gerne weiter. Schreib uns eine E-Mail oder buche direkt ein Beratungsgespräch.",
    demoCta: "Beratung buchen",
  },

  cta: {
    ariaLabel: "Call-to-Action",
    title: "Bereit, dein Studio übersichtlicher zu steuern?",
    subtitle: "Starte heute und erlebe, wie einfach Studio-Organisation sein kann.",
    checks: [
      "14 Tage kostenlos testen",
      "Keine Kreditkarte nötig",
      "In 2 Minuten startklar",
      "Persönliche Betreuung und Hilfe",
    ],
    primaryCta: "Jetzt kostenlos testen",
    demoCta: "Demo buchen",
    note: "Jederzeit kündbar. DSGVO-konform. Mit persönlicher Betreuung und Hilfe.",
  },

  seo: {
    ariaLabel: "Weiterführende Informationen",
    intro: [
      "Treatflow ist die ",
      { text: "Software für Kosmetikstudios", href: { page: "beauty-salon-software" } },
      " mit Terminkalender, Online-Buchung, digitaler Kundenkartei, Formularen und NiSV-konformer Behandlungsdokumentation – ohne Provision, DSGVO-konform und Made in Austria.",
    ],
    links: [
      { href: "/kundenkartei-software", label: "Kundenkartei Software" },
      { href: { page: "online-booking" }, label: "Online-Terminbuchung" },
      { href: "/behandlungsdokumentation-kosmetikstudio", label: "Behandlungsdokumentation" },
      { href: "/digitale-anamnese-kosmetikstudio", label: "Digitale Anamnese" },
      { href: { page: "messaging" }, label: "WhatsApp-Erinnerungen", feature: "whatsapp" },
      { href: { page: "software-comparison" }, label: "Software-Vergleich" },
      { href: "/blog/beste-kosmetikstudio-software-2026", label: "Beste Software 2026" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs. Treatwell" },
    ],
  },
};
