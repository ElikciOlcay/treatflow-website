export type PricingLocale = "en" | "es" | "it" | "fr" | "nl" | "fi" | "tr";

export type PricingIntlCopy = {
  eyebrow: string;
  titleBefore: string;
  titleHighlight: string;
  subtitle: string;
  monthly: string;
  yearly: string;
  saveBadge: string;
  perMonth: string;
  perYear: string;
  basicYearlyHint: string;
  bookingYearlyHint: string;
  exclVat: string;
  popular: string;
  cta: string;
  earlyAccessHref: string;
  prices?: {
    currencySymbol: string;
    basicMonthly: number;
    basicYearly: number;
    bookingMonthly: number;
    bookingYearly: number;
    comparisonBasicLabel: string;
    comparisonBookingLabel: string;
  };
  basic: {
    name: string;
    description: string;
    included: string[];
    excluded: string[];
  };
  booking: {
    name: string;
    description: string;
    included: string[];
  };
  trialBox: {
    title: string;
    text: string;
    points: string[];
  };
  comparison: {
    title: string;
    subtitle: string;
    vatNote: string;
    featureCol: string;
    rows: { feature: string; basic: boolean; booking: boolean }[];
  };
  why: {
    title: string;
    subtitle: string;
    items: { value: string; label: string }[];
  };
  faq: {
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  meta: { title: string; description: string };
};

const copies: Record<PricingLocale, PricingIntlCopy> = {
  en: {
    eyebrow: "Transparent pricing",
    titleBefore: "Simple pricing –",
    titleHighlight: "no hidden fees",
    subtitle:
      "Choose the plan that fits your studio. Start your 14-day free trial – no credit card required.",
    monthly: "Monthly",
    yearly: "Yearly",
    saveBadge: "Save 10%",
    perMonth: "/month",
    perYear: "/year",
    basicYearlyHint: "€35/month • Save €47/year",
    bookingYearlyHint: "€53/month • Save €71/year",
    exclVat: "excl. VAT",
    popular: "Popular",
    cta: "Start free trial",
    earlyAccessHref: "https://app.treatflow.io/auth/register?lang=en",
    basic: {
      name: "Basic",
      description:
        "Digital intake, consent forms and treatment documentation – without appointment scheduling.",
      included: [
        "Client records",
        "Forms with digital signature",
        "Treatment documentation & voice notes",
        "Before/after photos",
        "Team notes & tasks",
        "Shop & products",
        "Reports",
        "Staff roles",
        "Email support",
      ],
      excluded: [
        "Appointment calendar",
        "Online booking",
        "Automations & waitlist",
        "Priority support",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Appointment calendar, online booking and automatic reminders for your studio.",
      included: [
        "Everything in Basic",
        "Appointment calendar (staff & rooms)",
        "Online booking without commission",
        "Waitlist",
        "WhatsApp and email reminders",
        "Client workflows",
        "Discount codes",
        "Multilingual booking page",
        "Integrations (Zapier and more)",
        "Priority email & chat support",
      ],
    },
    trialBox: {
      title: "14-day free trial",
      text: "No credit card required • Cancel anytime • Free data migration",
      points: ["No setup fees", "Cancel monthly", "GDPR compliant"],
    },
    comparison: {
      title: "What's included?",
      subtitle: "Compare both plans in detail and find the right fit for your studio.",
      vatNote: "All prices exclude VAT.",
      featureCol: "Feature",
      rows: [
        { feature: "Client records", basic: true, booking: true },
        { feature: "Forms with digital signature", basic: true, booking: true },
        { feature: "Treatment documentation & voice notes", basic: true, booking: true },
        { feature: "Before/after photos", basic: true, booking: true },
        { feature: "Team notes & tasks", basic: true, booking: true },
        { feature: "Shop & products", basic: true, booking: true },
        { feature: "Reports", basic: true, booking: true },
        { feature: "Staff roles", basic: true, booking: true },
        { feature: "Email support", basic: true, booking: true },
        { feature: "Appointment calendar (staff & rooms)", basic: false, booking: true },
        { feature: "Online booking without commission", basic: false, booking: true },
        { feature: "Waitlist", basic: false, booking: true },
        { feature: "WhatsApp and email reminders", basic: false, booking: true },
        { feature: "Client workflows", basic: false, booking: true },
        { feature: "Discount codes", basic: false, booking: true },
        { feature: "Multilingual booking page", basic: false, booking: true },
        { feature: "Integrations (Zapier)", basic: false, booking: true },
        { feature: "Priority support", basic: false, booking: true },
      ],
    },
    why: {
      title: "Why Treatflow?",
      subtitle: "Transparent fixed prices instead of hidden fees and commissions.",
      items: [
        { value: "0%", label: "Commission per booking" },
        { value: "€0", label: "Setup fees" },
        { value: "14 days", label: "free trial" },
        { value: "Anytime", label: "cancel" },
      ],
    },
    faq: {
      title: "Pricing FAQ",
      subtitle: "Everything you need to know about Treatflow pricing.",
      items: [
        {
          question: "How much does Treatflow cost?",
          answer:
            "Treatflow has two plans: Basic from €39/month for client records, forms and documentation. Booking from €59/month with appointment calendar, online booking and automatic reminders. Both can be tested for 14 days.",
        },
        {
          question: "Are there hidden fees?",
          answer:
            "No. Treatflow uses transparent fixed prices without booking commissions, setup fees or hidden extras.",
        },
        {
          question: "Can I cancel anytime?",
          answer:
            "Yes. With monthly billing you can cancel at the end of the billing period. There is no minimum contract term.",
        },
        {
          question: "Is the Booking plan worth it?",
          answer:
            "If you need online booking, automatic appointment reminders and a digital calendar, yes. Studios on Booking often report fewer no-shows and less phone work.",
        },
        {
          question: "Can I start Treatflow from outside Germany, Austria or Switzerland?",
          answer:
            "Yes. You can register worldwide and start a 14-day free trial at app.treatflow.io – no credit card required.",
        },
      ],
    },
    meta: {
      title: "Pricing",
      description:
        "Treatflow pricing: Basic from €39/month, Booking from €59/month. No booking commission, 14-day free trial, no credit card required.",
    },
  },
  es: {
    eyebrow: "Precios transparentes",
    titleBefore: "Precios simples –",
    titleHighlight: "sin costes ocultos",
    subtitle:
      "Elige el plan que encaja con tu salón. Empieza tu prueba gratuita de 14 días – sin tarjeta.",
    monthly: "Mensual",
    yearly: "Anual",
    saveBadge: "Ahorra 10%",
    perMonth: "/mes",
    perYear: "/año",
    basicYearlyHint: "€35/mes • Ahorra €47/año",
    bookingYearlyHint: "€53/mes • Ahorra €71/año",
    exclVat: "sin IVA",
    popular: "Popular",
    cta: "Start free trial",
    earlyAccessHref: "/es/acceso-anticipado",
    basic: {
      name: "Basic",
      description:
        "Anamnesis digital, consentimientos y documentación de tratamientos – sin agenda.",
      included: [
        "Fichas de clientes",
        "Formularios con firma digital",
        "Documentación de tratamientos y notas de voz",
        "Fotos antes/después",
        "Notas y tareas del equipo",
        "Tienda y productos",
        "Informes",
        "Roles de personal",
        "Soporte por email",
      ],
      excluded: [
        "Calendario de citas",
        "Reservas online",
        "Automatizaciones y lista de espera",
        "Soporte prioritario",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Calendario, reservas online y recordatorios automáticos para tu salón.",
      included: [
        "Todo de Basic",
        "Calendario de citas (personal y salas)",
        "Reservas online sin comisión",
        "Lista de espera",
        "Recordatorios WhatsApp y email",
        "Flujos de clientes",
        "Códigos de descuento",
        "Página de reservas multilingüe",
        "Integraciones (Zapier y más)",
        "Soporte prioritario email y chat",
      ],
    },
    trialBox: {
      title: "Prueba gratuita de 14 días",
      text: "Sin tarjeta de crédito • Cancela cuando quieras • Migración de datos gratis",
      points: ["Sin coste de alta", "Cancelación mensual", "Conforme RGPD"],
    },
    comparison: {
      title: "¿Qué incluye?",
      subtitle: "Compara ambos planes y elige el adecuado para tu salón.",
      vatNote: "Todos los precios sin IVA.",
      featureCol: "Función",
      rows: [
        { feature: "Fichas de clientes", basic: true, booking: true },
        { feature: "Formularios con firma digital", basic: true, booking: true },
        { feature: "Documentación de tratamientos y notas de voz", basic: true, booking: true },
        { feature: "Fotos antes/después", basic: true, booking: true },
        { feature: "Notas y tareas del equipo", basic: true, booking: true },
        { feature: "Tienda y productos", basic: true, booking: true },
        { feature: "Informes", basic: true, booking: true },
        { feature: "Roles de personal", basic: true, booking: true },
        { feature: "Soporte por email", basic: true, booking: true },
        { feature: "Calendario de citas (personal y salas)", basic: false, booking: true },
        { feature: "Reservas online sin comisión", basic: false, booking: true },
        { feature: "Lista de espera", basic: false, booking: true },
        { feature: "Recordatorios WhatsApp y email", basic: false, booking: true },
        { feature: "Flujos de clientes", basic: false, booking: true },
        { feature: "Códigos de descuento", basic: false, booking: true },
        { feature: "Página de reservas multilingüe", basic: false, booking: true },
        { feature: "Integraciones (Zapier)", basic: false, booking: true },
        { feature: "Soporte prioritario", basic: false, booking: true },
      ],
    },
    why: {
      title: "¿Por qué Treatflow?",
      subtitle: "Precios fijos transparentes en lugar de comisiones ocultas.",
      items: [
        { value: "0%", label: "Comisión por reserva" },
        { value: "0€", label: "Coste de alta" },
        { value: "14 días", label: "de prueba" },
        { value: "Cuando quieras", label: "cancelar" },
      ],
    },
    faq: {
      title: "Preguntas frecuentes sobre precios",
      subtitle: "Todo lo que debes saber sobre los precios de Treatflow.",
      items: [
        {
          question: "¿Cuánto cuesta Treatflow?",
          answer:
            "Treatflow tiene dos planes: Basic desde 39€/mes para fichas, formularios y documentación. Booking desde 59€/mes con calendario, reservas online y recordatorios. Ambos se pueden probar 14 días.",
        },
        {
          question: "¿Hay costes ocultos?",
          answer:
            "No. Treatflow usa precios fijos transparentes sin comisiones por reserva ni extras ocultos.",
        },
        {
          question: "¿Puedo cancelar en cualquier momento?",
          answer:
            "Sí. Con facturación mensual puedes cancelar al final del periodo. No hay permanencia mínima.",
        },
        {
          question: "¿Merece la pena el plan Booking?",
          answer:
            "Si necesitas reservas online, recordatorios automáticos y calendario digital, sí. Los salones con Booking suelen reducir ausencias y llamadas.",
        },
        {
          question: "¿Cómo accedo fuera de DACH?",
          answer:
            "Sí. Puedes registrarte en cualquier país y empezar una prueba de 14 días en app.treatflow.io – sin tarjeta.",
        },
      ],
    },
    meta: {
      title: "Precios",
      description:
        "Precios transparentes de Treatflow: Basic desde 39€/mes, Booking desde 59€/mes. 14 días de prueba, sin tarjeta.",
    },
  },
  it: {
    eyebrow: "Prezzi trasparenti",
    titleBefore: "Prezzi semplici –",
    titleHighlight: "nessun costo nascosto",
    subtitle:
      "Scegli il piano giusto per il tuo centro. Inizia la prova gratuita di 14 giorni – nessuna carta di credito.",
    monthly: "Mensile",
    yearly: "Annuale",
    saveBadge: "Risparmi 10%",
    perMonth: "/mese",
    perYear: "/anno",
    basicYearlyHint: "€35/mese • Risparmi €47/anno",
    bookingYearlyHint: "€53/mese • Risparmi €71/anno",
    exclVat: "IVA esclusa",
    popular: "Popolare",
    cta: "Start free trial",
    earlyAccessHref: "/it/accesso-anticipato",
    basic: {
      name: "Basic",
      description:
        "Anamnesi digitale, consensi e documentazione trattamenti – senza agenda.",
      included: [
        "Schede clienti",
        "Moduli con firma digitale",
        "Documentazione trattamenti e note vocali",
        "Foto prima/dopo",
        "Note e attività del team",
        "Shop e prodotti",
        "Report",
        "Ruoli dello staff",
        "Supporto email",
      ],
      excluded: [
        "Calendario appuntamenti",
        "Prenotazioni online",
        "Automazioni e lista d'attesa",
        "Supporto prioritario",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Calendario, prenotazioni online e promemoria automatici per il tuo centro.",
      included: [
        "Tutto di Basic",
        "Calendario appuntamenti (staff e sale)",
        "Prenotazioni online senza commissione",
        "Lista d'attesa",
        "Promemoria WhatsApp ed email",
        "Workflow clienti",
        "Codici sconto",
        "Pagina prenotazioni multilingue",
        "Integrazioni (Zapier e altro)",
        "Supporto prioritario email e chat",
      ],
    },
    trialBox: {
      title: "Prova gratuita di 14 giorni",
      text: "Nessuna carta di credito • Disdici quando vuoi • Migrazione dati gratuita",
      points: ["Nessun costo di setup", "Disdetta mensile", "Conforme GDPR"],
    },
    comparison: {
      title: "Cosa è incluso?",
      subtitle: "Confronta i due piani e trova quello giusto per il tuo centro.",
      vatNote: "Tutti i prezzi IVA esclusa.",
      featureCol: "Funzionalità",
      rows: [
        { feature: "Schede clienti", basic: true, booking: true },
        { feature: "Moduli con firma digitale", basic: true, booking: true },
        { feature: "Documentazione trattamenti e note vocali", basic: true, booking: true },
        { feature: "Foto prima/dopo", basic: true, booking: true },
        { feature: "Note e attività del team", basic: true, booking: true },
        { feature: "Shop e prodotti", basic: true, booking: true },
        { feature: "Report", basic: true, booking: true },
        { feature: "Ruoli dello staff", basic: true, booking: true },
        { feature: "Supporto email", basic: true, booking: true },
        { feature: "Calendario appuntamenti (staff e sale)", basic: false, booking: true },
        { feature: "Prenotazioni online senza commissione", basic: false, booking: true },
        { feature: "Lista d'attesa", basic: false, booking: true },
        { feature: "Promemoria WhatsApp ed email", basic: false, booking: true },
        { feature: "Workflow clienti", basic: false, booking: true },
        { feature: "Codici sconto", basic: false, booking: true },
        { feature: "Pagina prenotazioni multilingue", basic: false, booking: true },
        { feature: "Integrazioni (Zapier)", basic: false, booking: true },
        { feature: "Supporto prioritario", basic: false, booking: true },
      ],
    },
    why: {
      title: "Perché Treatflow?",
      subtitle: "Prezzi fissi trasparenti invece di commissioni nascoste.",
      items: [
        { value: "0%", label: "Commissione per prenotazione" },
        { value: "0€", label: "Costi di setup" },
        { value: "14 giorni", label: "di prova" },
        { value: "Quando vuoi", label: "disdire" },
      ],
    },
    faq: {
      title: "Domande sui prezzi",
      subtitle: "Tutto quello che devi sapere sui prezzi Treatflow.",
      items: [
        {
          question: "Quanto costa Treatflow?",
          answer:
            "Treatflow ha due piani: Basic da 39€/mese per schede, moduli e documentazione. Booking da 59€/mese con calendario, prenotazioni online e promemoria. Entrambi si possono provare 14 giorni.",
        },
        {
          question: "Ci sono costi nascosti?",
          answer:
            "No. Treatflow usa prezzi fissi trasparenti senza commissioni per prenotazione né costi nascosti.",
        },
        {
          question: "Posso disdire in qualsiasi momento?",
          answer:
            "Sì. Con fatturazione mensile puoi disdire a fine periodo. Non c'è durata minima.",
        },
        {
          question: "Vale la pena il piano Booking?",
          answer:
            "Se ti servono prenotazioni online, promemoria automatici e calendario digitale, sì. I centri con Booking spesso riducono assenze e telefonate.",
        },
        {
          question: "Come accedo fuori dal DACH?",
          answer:
            "Sì. Puoi registrarti in qualsiasi Paese e iniziare una prova di 14 giorni su app.treatflow.io – nessuna carta richiesta.",
        },
      ],
    },
    meta: {
      title: "Prezzi",
      description:
        "Prezzi trasparenti Treatflow: Basic da 39€/mese, Booking da 59€/mese. 14 giorni di prova, nessuna carta.",
    },
  },
  fr: {
    eyebrow: "Tarifs transparents",
    titleBefore: "Des tarifs simples –",
    titleHighlight: "sans frais cachés",
    subtitle:
      "Choisissez l'offre adaptée à votre institut. Démarrez l'essai gratuit de 14 jours – sans carte bancaire.",
    monthly: "Mensuel",
    yearly: "Annuel",
    saveBadge: "Économisez 10%",
    perMonth: "/mois",
    perYear: "/an",
    basicYearlyHint: "€35/mois • Économisez €47/an",
    bookingYearlyHint: "€53/mois • Économisez €71/an",
    exclVat: "HT",
    popular: "Populaire",
    cta: "Start free trial",
    earlyAccessHref: "/fr/acces-anticipe",
    basic: {
      name: "Basic",
      description:
        "Anamnèse numérique, consentements et documentation des soins – sans agenda.",
      included: [
        "Fiches clients",
        "Formulaires avec signature numérique",
        "Documentation des soins et notes vocales",
        "Photos avant/après",
        "Notes et tâches d'équipe",
        "Boutique et produits",
        "Rapports",
        "Rôles du personnel",
        "Support e-mail",
      ],
      excluded: [
        "Calendrier de rendez-vous",
        "Réservation en ligne",
        "Automatisations et liste d'attente",
        "Support prioritaire",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Calendrier, réservation en ligne et rappels automatiques pour votre institut.",
      included: [
        "Tout Basic",
        "Calendrier (personnel et salles)",
        "Réservation en ligne sans commission",
        "Liste d'attente",
        "Rappels WhatsApp et e-mail",
        "Workflows clients",
        "Codes promo",
        "Page de réservation multilingue",
        "Intégrations (Zapier et plus)",
        "Support prioritaire e-mail et chat",
      ],
    },
    trialBox: {
      title: "Essai gratuit de 14 jours",
      text: "Sans carte bancaire • Résiliable à tout moment • Migration des données gratuite",
      points: ["Sans frais de setup", "Résiliation mensuelle", "Conforme RGPD"],
    },
    comparison: {
      title: "Que contient l'offre ?",
      subtitle: "Comparez les deux formules et trouvez celle qui convient à votre institut.",
      vatNote: "Tous les prix hors taxes.",
      featureCol: "Fonctionnalité",
      rows: [
        { feature: "Fiches clients", basic: true, booking: true },
        { feature: "Formulaires avec signature numérique", basic: true, booking: true },
        { feature: "Documentation des soins et notes vocales", basic: true, booking: true },
        { feature: "Photos avant/après", basic: true, booking: true },
        { feature: "Notes et tâches d'équipe", basic: true, booking: true },
        { feature: "Boutique et produits", basic: true, booking: true },
        { feature: "Rapports", basic: true, booking: true },
        { feature: "Rôles du personnel", basic: true, booking: true },
        { feature: "Support e-mail", basic: true, booking: true },
        { feature: "Calendrier (personnel et salles)", basic: false, booking: true },
        { feature: "Réservation en ligne sans commission", basic: false, booking: true },
        { feature: "Liste d'attente", basic: false, booking: true },
        { feature: "Rappels WhatsApp et e-mail", basic: false, booking: true },
        { feature: "Workflows clients", basic: false, booking: true },
        { feature: "Codes promo", basic: false, booking: true },
        { feature: "Page de réservation multilingue", basic: false, booking: true },
        { feature: "Intégrations (Zapier)", basic: false, booking: true },
        { feature: "Support prioritaire", basic: false, booking: true },
      ],
    },
    why: {
      title: "Pourquoi Treatflow ?",
      subtitle: "Des tarifs fixes transparents plutôt que des commissions cachées.",
      items: [
        { value: "0%", label: "Commission par réservation" },
        { value: "0€", label: "Frais de setup" },
        { value: "14 jours", label: "d'essai" },
        { value: "À tout moment", label: "résiliable" },
      ],
    },
    faq: {
      title: "FAQ tarifs",
      subtitle: "Tout ce qu'il faut savoir sur les tarifs Treatflow.",
      items: [
        {
          question: "Combien coûte Treatflow ?",
          answer:
            "Treatflow propose deux formules : Basic dès 39€/mois pour fiches, formulaires et documentation. Booking dès 59€/mois avec calendrier, réservation en ligne et rappels. Les deux sont essayables 14 jours.",
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer:
            "Non. Treatflow applique des tarifs fixes transparents, sans commission par réservation ni extras cachés.",
        },
        {
          question: "Puis-je résilier à tout moment ?",
          answer:
            "Oui. En facturation mensuelle, vous pouvez résilier à la fin de la période. Pas d'engagement minimum.",
        },
        {
          question: "La formule Booking en vaut-elle la peine ?",
          answer:
            "Si vous avez besoin de réservation en ligne, de rappels automatiques et d'un calendrier numérique, oui. Les instituts Booking réduisent souvent les absences et les appels.",
        },
        {
          question: "Comment accéder hors DACH ?",
          answer:
            "Oui. Vous pouvez vous inscrire depuis n'importe quel pays et démarrer un essai de 14 jours sur app.treatflow.io – sans carte bancaire.",
        },
      ],
    },
    meta: {
      title: "Tarifs",
      description:
        "Tarifs transparents Treatflow : Basic dès 39€/mois, Booking dès 59€/mois. Essai de 14 jours, sans carte.",
    },
  },
  nl: {
    eyebrow: "Transparante prijzen",
    titleBefore: "Eenvoudige prijzen –",
    titleHighlight: "geen verborgen kosten",
    subtitle:
      "Kies het plan dat bij jouw studio past. Start direct met 14 dagen gratis – geen creditcard nodig.",
    monthly: "Maandelijks",
    yearly: "Jaarlijks",
    saveBadge: "Bespaar 10%",
    perMonth: "/maand",
    perYear: "/jaar",
    basicYearlyHint: "€35/maand • Bespaar €47/jaar",
    bookingYearlyHint: "€53/maand • Bespaar €71/jaar",
    exclVat: "excl. btw",
    popular: "Populair",
    cta: "Gratis proberen",
    earlyAccessHref: "https://app.treatflow.io/auth/register?lang=en",
    basic: {
      name: "Basic",
      description:
        "Digitale anamnese, toestemmingsformulieren en behandeldocumentatie – zonder afspraakplanning.",
      included: [
        "Klantendossiers",
        "Formulieren met digitale handtekening",
        "Behandeldocumentatie en spraaknotities",
        "Voor/na-foto's",
        "Teamnotities en taken",
        "Shop en producten",
        "Rapporten",
        "Medewerkersrollen",
        "E-mailsupport",
      ],
      excluded: [
        "Afspraakagenda",
        "Online boeken",
        "Automatisering en wachtlijst",
        "Prioriteitssupport",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Afspraakagenda, online boeken en automatische herinneringen voor jouw studio.",
      included: [
        "Alles van Basic",
        "Afspraakagenda (medewerkers en ruimtes)",
        "Online boeken zonder commissie",
        "Wachtlijst",
        "WhatsApp- en e-mailherinneringen",
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
      points: ["Geen opstartkosten", "Maandelijks opzegbaar", "GDPR-conform"],
    },
    comparison: {
      title: "Wat zit erin?",
      subtitle: "Vergelijk beide plannen in detail en vind de juiste match voor jouw studio.",
      vatNote: "Alle prijzen exclusief btw.",
      featureCol: "Functie",
      rows: [
        { feature: "Klantendossiers", basic: true, booking: true },
        { feature: "Formulieren met digitale handtekening", basic: true, booking: true },
        { feature: "Behandeldocumentatie en spraaknotities", basic: true, booking: true },
        { feature: "Voor/na-foto's", basic: true, booking: true },
        { feature: "Teamnotities en taken", basic: true, booking: true },
        { feature: "Shop en producten", basic: true, booking: true },
        { feature: "Rapporten", basic: true, booking: true },
        { feature: "Medewerkersrollen", basic: true, booking: true },
        { feature: "E-mailsupport", basic: true, booking: true },
        { feature: "Afspraakagenda (medewerkers en ruimtes)", basic: false, booking: true },
        { feature: "Online boeken zonder commissie", basic: false, booking: true },
        { feature: "Wachtlijst", basic: false, booking: true },
        { feature: "WhatsApp- en e-mailherinneringen", basic: false, booking: true },
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
      title: "Veelgestelde vragen over prijzen",
      subtitle: "Alles wat je moet weten over de Treatflow-prijzen.",
      items: [
        {
          question: "Wat kost Treatflow?",
          answer:
            "Treatflow heeft twee plannen: Basic vanaf €39/maand voor klantendossiers, formulieren en documentatie. Booking vanaf €59/maand met afspraakagenda, online boeken en automatische herinneringen. Beide kun je 14 dagen uitproberen.",
        },
        {
          question: "Zijn er verborgen kosten?",
          answer:
            "Nee. Treatflow werkt met transparante vaste prijzen – zonder boekingscommissies, opstartkosten of verborgen extras.",
        },
        {
          question: "Kan ik altijd opzeggen?",
          answer:
            "Ja. Bij maandelijkse facturatie kun je opzeggen aan het einde van de facturatieperiode. Er is geen minimale contractduur.",
        },
        {
          question: "Is het Booking-plan de moeite waard?",
          answer:
            "Als je online boeken, automatische afspraakherinneringen en een digitale agenda nodig hebt: ja. Studio's met Booking melden vaak minder no-shows en minder telefoonwerk.",
        },
        {
          question: "Hoe krijg ik toegang buiten DACH?",
          answer:
            "Ja. Je kunt je wereldwijd registreren en 14 dagen gratis starten op app.treatflow.io – geen creditcard nodig.",
        },
      ],
    },
    meta: {
      title: "Prijzen",
      description:
        "Transparante Treatflow-prijzen: Basic vanaf €39/maand, Booking vanaf €59/maand. 14 dagen gratis, geen creditcard nodig.",
    },
  },
  fi: {
    eyebrow: "Läpinäkyvät hinnat",
    titleBefore: "Yksinkertaiset hinnat –",
    titleHighlight: "ei piilokuluja",
    subtitle:
      "Valitse studioosi sopiva paketti. Aloita suoraan 14 päivän ilmaisella kokeilulla – ei luottokorttia.",
    monthly: "Kuukausittain",
    yearly: "Vuosittain",
    saveBadge: "Säästä 10 %",
    perMonth: "/kk",
    perYear: "/vuosi",
    basicYearlyHint: "€35/kk • Säästä €47/vuosi",
    bookingYearlyHint: "€53/kk • Säästä €71/vuosi",
    exclVat: "ilman ALV:a",
    popular: "Suosituin",
    cta: "Aloita ilmainen kokeilu",
    earlyAccessHref: "https://app.treatflow.io/auth/register?lang=en",
    basic: {
      name: "Basic",
      description:
        "Digitaalinen anamneesi, suostumuslomakkeet ja hoitodokumentointi – ilman ajanvarausta.",
      included: [
        "Asiakaskortistot",
        "Lomakkeet digitaalisella allekirjoituksella",
        "Hoitodokumentointi ja äänimuistiinpanot",
        "Ennen/jälkeen-kuvat",
        "Tiimin muistiinpanot ja tehtävät",
        "Kauppa ja tuotteet",
        "Raportit",
        "Henkilöstöroolit",
        "Sähköpostituki",
      ],
      excluded: [
        "Ajanvarauskalenteri",
        "Verkkoajanvaraus",
        "Automaatiot ja jonolista",
        "Prioriteettituki",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Ajanvarauskalenteri, verkkoajanvaraus ja automaattiset muistutukset studiollesi.",
      included: [
        "Kaikki Basicista",
        "Ajanvarauskalenteri (henkilöstö ja huoneet)",
        "Verkkoajanvaraus ilman provisiota",
        "Jonolista",
        "WhatsApp- ja sähköpostimuistutukset",
        "Asiakastyönkulut",
        "Alennuskoodit",
        "Monikielinen ajanvaraussivu",
        "Integraatiot (Zapier ja muita)",
        "Prioriteettituki sähköpostilla ja chatilla",
      ],
    },
    trialBox: {
      title: "14 päivän ilmainen kokeilu",
      text: "Ei luottokorttia • Peru milloin tahansa • Ilmainen datasiirto",
      points: ["Ei käyttöönottomaksuja", "Kuukausittainen irtisanominen", "GDPR-mukainen"],
    },
    comparison: {
      title: "Mitä sisältyy?",
      subtitle: "Vertaa molempia paketteja tarkasti ja löydä studioosi sopiva vaihtoehto.",
      vatNote: "Kaikki hinnat ilman ALV:a.",
      featureCol: "Ominaisuus",
      rows: [
        { feature: "Asiakaskortistot", basic: true, booking: true },
        { feature: "Lomakkeet digitaalisella allekirjoituksella", basic: true, booking: true },
        { feature: "Hoitodokumentointi ja äänimuistiinpanot", basic: true, booking: true },
        { feature: "Ennen/jälkeen-kuvat", basic: true, booking: true },
        { feature: "Tiimin muistiinpanot ja tehtävät", basic: true, booking: true },
        { feature: "Kauppa ja tuotteet", basic: true, booking: true },
        { feature: "Raportit", basic: true, booking: true },
        { feature: "Henkilöstöroolit", basic: true, booking: true },
        { feature: "Sähköpostituki", basic: true, booking: true },
        { feature: "Ajanvarauskalenteri (henkilöstö ja huoneet)", basic: false, booking: true },
        { feature: "Verkkoajanvaraus ilman provisiota", basic: false, booking: true },
        { feature: "Jonolista", basic: false, booking: true },
        { feature: "WhatsApp- ja sähköpostimuistutukset", basic: false, booking: true },
        { feature: "Asiakastyönkulut", basic: false, booking: true },
        { feature: "Alennuskoodit", basic: false, booking: true },
        { feature: "Monikielinen ajanvaraussivu", basic: false, booking: true },
        { feature: "Integraatiot (Zapier)", basic: false, booking: true },
        { feature: "Prioriteettituki", basic: false, booking: true },
      ],
    },
    why: {
      title: "Miksi Treatflow?",
      subtitle: "Läpinäkyvät kiinteät hinnat piilokulujen ja provisioiden sijaan.",
      items: [
        { value: "0%", label: "Provisio per varaus" },
        { value: "€0", label: "Käyttöönottomaksut" },
        { value: "14 päivää", label: "ilmainen kokeilu" },
        { value: "Milloin tahansa", label: "irtisanottavissa" },
      ],
    },
    faq: {
      title: "Hinnoittelun UKK",
      subtitle: "Kaikki mitä sinun tarvitsee tietää Treatflow-hinnoista.",
      items: [
        {
          question: "Paljonko Treatflow maksaa?",
          answer:
            "Treatflowilla on kaksi pakettia: Basic alkaen €39/kk asiakaskortistoille, lomakkeille ja dokumentoinnille. Booking alkaen €59/kk ajanvarauskalenterilla, verkkoajanvarauksella ja automaattisilla muistutuksilla. Molempia voi kokeilla 14 päivää.",
        },
        {
          question: "Onko piilokuluja?",
          answer:
            "Ei. Treatflow käyttää läpinäkyviä kiinteitä hintoja ilman varausprovisioita, käyttöönottomaksuja tai piilotettuja lisäkuluja.",
        },
        {
          question: "Voinko irtisanoa milloin tahansa?",
          answer:
            "Kyllä. Kuukausilaskutuksella voit irtisanoa laskutuskauden lopussa. Ei vähimmäissopimuskautta.",
        },
        {
          question: "Kannattaako Booking-paketti?",
          answer:
            "Jos tarvitset verkkoajanvarausta, automaattisia ajanmuistutuksia ja digitaalista kalenteria, kyllä. Booking-studiot raportoivat usein vähemmän no-show'ta ja vähemmän puhelutyötä.",
        },
        {
          question: "Miten saan pääsyn DACH-alueen ulkopuolella?",
          answer:
            "Kyllä. Voit rekisteröityä maailmanlaajuisesti ja aloittaa 14 päivän ilmaisen kokeilun osoitteessa app.treatflow.io – luottokorttia ei tarvita.",
        },
      ],
    },
    meta: {
      title: "Hinnat",
      description:
        "Läpinäkyvät Treatflow-hinnat: Basic alkaen €39/kk, Booking alkaen €59/kk. 14 päivää ilmaiseksi, ei luottokorttia.",
    },
  },
  tr: {
    eyebrow: "Şeffaf fiyatlar",
    titleBefore: "Net fiyat –",
    titleHighlight: "gizli ücret yok",
    subtitle:
      "İşletmenize uygun paketi seçin. 30 gün ücretsiz deneyin – kredi kartı gerekmez, taahhüt yok.",
    monthly: "Aylık",
    yearly: "Yıllık",
    saveBadge: "2 ay tasarruf",
    perMonth: "/ay",
    perYear: "/yıl",
    basicYearlyHint: "Yıllık ödemede aylık karşılığı",
    bookingYearlyHint: "Yıllık ödemede aylık karşılığı",
    exclVat: "KDV hariç fiyatlar",
    popular: "En çok tercih edilen",
    cta: "30 gün ücretsiz deneyin",
    earlyAccessHref: "https://app.treatflow.io/auth/register?lang=tr",
    prices: {
      currencySymbol: "₺",
      basicMonthly: 1490,
      basicYearly: 16100,
      bookingMonthly: 1990,
      bookingYearly: 21500,
      comparisonBasicLabel: "Basic (₺1.490)",
      comparisonBookingLabel: "Booking (₺1.990)",
    },
    basic: {
      name: "Basic",
      description: "Müşteri takibi, onam formları ve işlem kayıtları – randevu takvimi olmadan.",
      included: [
        "Müşteri takibi",
        "Dijital imzalı onam ve anamnez formları",
        "İşlem kayıtları ve sesli not",
        "Öncesi-sonrası fotoğraflar",
        "Ekip notları ve görevler",
        "Mağaza ve ürünler",
        "Raporlar",
        "Çalışan rolleri",
        "E-posta desteği",
      ],
      excluded: [
        "Randevu takvimi",
        "Online randevu",
        "Otomasyonlar ve bekleme listesi",
        "Öncelikli destek",
      ],
    },
    booking: {
      name: "Booking",
      description: "Randevu takvimi, 7/24 online randevu ve otomatik hatırlatmalar.",
      included: [
        "Basic'teki her şey",
        "Randevu takvimi (personel ve oda sütunları)",
        "Komisyonsuz online randevu",
        "Bekleme listesi",
        "WhatsApp ve e-posta hatırlatmaları",
        "Müşteri otomasyonları",
        "İndirim kodları",
        "Çok dilli randevu sayfası",
        "Entegrasyonlar (Zapier)",
        "Öncelikli e-posta ve WhatsApp desteği",
      ],
    },
    trialBox: {
      title: "30 gün ücretsiz deneyin",
      text: "Hemen başlayın – kredi kartı gerekmez, taahhüt yok.",
      points: [
        "30 gün tüm özellikler",
        "Kredi kartı gerekmez",
        "Taahhüt yok, istediğiniz zaman iptal",
        "Ücretsiz veri aktarımı",
      ],
    },
    comparison: {
      title: "Paket karşılaştırması",
      subtitle: "Hangi özelliğin hangi pakette olduğunu görün.",
      vatNote: "Tüm fiyatlar KDV hariçtir.",
      featureCol: "Özellik",
      rows: [
        { feature: "Müşteri takibi", basic: true, booking: true },
        { feature: "Dijital imzalı onam ve anamnez formları", basic: true, booking: true },
        { feature: "İşlem kayıtları ve sesli not", basic: true, booking: true },
        { feature: "Öncesi-sonrası fotoğraflar", basic: true, booking: true },
        { feature: "Ekip notları ve görevler", basic: true, booking: true },
        { feature: "Mağaza ve ürünler", basic: true, booking: true },
        { feature: "Raporlar", basic: true, booking: true },
        { feature: "Çalışan rolleri", basic: true, booking: true },
        { feature: "E-posta desteği", basic: true, booking: true },
        { feature: "Randevu takvimi (personel ve oda sütunları)", basic: false, booking: true },
        { feature: "Komisyonsuz online randevu", basic: false, booking: true },
        { feature: "Bekleme listesi", basic: false, booking: true },
        { feature: "WhatsApp ve e-posta hatırlatmaları", basic: false, booking: true },
        { feature: "Müşteri otomasyonları", basic: false, booking: true },
        { feature: "İndirim kodları", basic: false, booking: true },
        { feature: "Çok dilli randevu sayfası", basic: false, booking: true },
        { feature: "Entegrasyonlar (Zapier)", basic: false, booking: true },
        { feature: "Öncelikli destek", basic: false, booking: true },
      ],
    },
    why: {
      title: "Neden Treatflow?",
      subtitle: "Komisyon yok, gizli ücret yok – müşteri verileriniz sizin kontrolünüzde.",
      items: [
        { value: "%0", label: "Komisyon" },
        { value: "500+", label: "İşletme" },
        { value: "KVKK", label: "AB sunucuları" },
        { value: "30 gün", label: "Ücretsiz deneme" },
      ],
    },
    faq: {
      title: "Sıkça sorulan sorular",
      subtitle: "Fiyatlar ve paketler hakkında merak edilenler.",
      items: [
        {
          question: "Ücretsiz deneme nasıl işler?",
          answer:
            "Kayıt olun, 30 gün boyunca tüm özellikleri ücretsiz kullanın. Kredi kartı gerekmez. Deneme bitince paket seçebilir veya hesabı kapatabilirsiniz.",
        },
        {
          question: "Randevu başına komisyon var mı?",
          answer:
            "Hayır. Treatflow bir pazaryeri değil, salon yazılımınızdır. Şeffaf aylık abonelik ödersiniz; online randevu başına komisyon yoktur.",
        },
        {
          question: "İstediğim zaman iptal edebilir miyim?",
          answer:
            "Evet. Aylık paketlerde taahhüt yoktur, istediğiniz zaman iptal edebilirsiniz. Yıllık paket dönem sonuna kadar geçerlidir.",
        },
        {
          question: "Verilerim nerede saklanır?",
          answer:
            "Tüm veriler Frankfurt'taki AB sunucularında SSL şifreleme ve günlük yedeklemeyle saklanır. Müşteri verilerinin kontrolü işletmenizde kalır.",
        },
        {
          question: "Türkiye'den kayıt olabilir miyim?",
          answer:
            "Evet. Türk Lirası fiyatlandırma ve Türkçe arayüz ile app.treatflow.io üzerinden 30 günlük ücretsiz denemenizi başlatabilirsiniz – kredi kartı gerekmez.",
        },
      ],
    },
    meta: {
      title: "Güzellik Salonu Yazılımı Fiyatları",
      description:
        "Treatflow fiyatları Türkiye'de: Basic ₺1.490, Booking ₺1.990 (lansman, ilk 100 işletme). 30 gün ücretsiz deneyin, kredi kartı gerekmez. Randevu komisyonu yok.",
    },
  },
};

export function getPricingIntlCopy(locale: PricingLocale): PricingIntlCopy {
  return copies[locale];
}
