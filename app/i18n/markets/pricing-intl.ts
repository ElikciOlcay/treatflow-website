export type PricingLocale = "en" | "es" | "it" | "fr";

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
      "Choose the plan that fits your studio. Request early access for your country – self-serve signup is currently available in Germany, Austria and Switzerland.",
    monthly: "Monthly",
    yearly: "Yearly",
    saveBadge: "Save 10%",
    perMonth: "/month",
    perYear: "/year",
    basicYearlyHint: "€35/month • Save €47/year",
    bookingYearlyHint: "€53/month • Save €71/year",
    exclVat: "excl. VAT",
    popular: "Popular",
    cta: "Request early access",
    earlyAccessHref: "/en/early-access",
    basic: {
      name: "Basic",
      description:
        "Digital intake, consent forms and treatment documentation – without appointment scheduling.",
      included: [
        "Client records",
        "Forms",
        "Treatment documentation",
        "Intake form templates",
        "Email support",
      ],
      excluded: [
        "Appointment calendar",
        "Online booking",
        "Priority support",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Appointment calendar, online booking and automatic reminders for your studio.",
      included: [
        "Everything in Basic",
        "Appointment calendar",
        "Online booking",
        "SMS & email automation",
        "Integrations (Google Calendar, Zapier and more)",
        "Advanced settings",
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
        { feature: "Forms & intake", basic: true, booking: true },
        { feature: "Treatment documentation", basic: true, booking: true },
        { feature: "Intake templates", basic: true, booking: true },
        { feature: "Email support", basic: true, booking: true },
        { feature: "Appointment calendar", basic: false, booking: true },
        { feature: "Online booking", basic: false, booking: true },
        { feature: "SMS & email automation", basic: false, booking: true },
        { feature: "Integrations", basic: false, booking: true },
        { feature: "Priority support", basic: false, booking: true },
        { feature: "Advanced settings", basic: false, booking: true },
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
          question: "How do I get access outside DACH?",
          answer:
            "Self-serve signup is currently available in Germany, Austria and Switzerland. For other countries, request early access – we onboard studios country by country.",
        },
      ],
    },
    meta: {
      title: "Pricing | Treatflow",
      description:
        "Transparent Treatflow pricing: Basic from €39/month, Booking from €59/month. Request early access for your country.",
    },
  },
  es: {
    eyebrow: "Precios transparentes",
    titleBefore: "Precios simples –",
    titleHighlight: "sin costes ocultos",
    subtitle:
      "Elige el plan que encaja con tu salón. Solicita acceso anticipado para tu país – el registro directo está disponible en Alemania, Austria y Suiza.",
    monthly: "Mensual",
    yearly: "Anual",
    saveBadge: "Ahorra 10%",
    perMonth: "/mes",
    perYear: "/año",
    basicYearlyHint: "€35/mes • Ahorra €47/año",
    bookingYearlyHint: "€53/mes • Ahorra €71/año",
    exclVat: "sin IVA",
    popular: "Popular",
    cta: "Solicitar acceso anticipado",
    earlyAccessHref: "/es/acceso-anticipado",
    basic: {
      name: "Basic",
      description:
        "Anamnesis digital, consentimientos y documentación de tratamientos – sin agenda.",
      included: [
        "Fichas de clientes",
        "Formularios",
        "Documentación de tratamientos",
        "Plantillas de anamnesis",
        "Soporte por email",
      ],
      excluded: [
        "Calendario de citas",
        "Reservas online",
        "Soporte prioritario",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Calendario, reservas online y recordatorios automáticos para tu salón.",
      included: [
        "Todo de Basic",
        "Calendario de citas",
        "Reservas online",
        "Automatización SMS y email",
        "Integraciones (Google Calendar, Zapier y más)",
        "Ajustes avanzados",
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
        { feature: "Formularios y anamnesis", basic: true, booking: true },
        { feature: "Documentación de tratamientos", basic: true, booking: true },
        { feature: "Plantillas de anamnesis", basic: true, booking: true },
        { feature: "Soporte por email", basic: true, booking: true },
        { feature: "Calendario de citas", basic: false, booking: true },
        { feature: "Reservas online", basic: false, booking: true },
        { feature: "Automatización SMS y email", basic: false, booking: true },
        { feature: "Integraciones", basic: false, booking: true },
        { feature: "Soporte prioritario", basic: false, booking: true },
        { feature: "Ajustes avanzados", basic: false, booking: true },
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
            "El registro directo está disponible en Alemania, Austria y Suiza. En otros países solicita acceso anticipado.",
        },
      ],
    },
    meta: {
      title: "Precios | Treatflow",
      description:
        "Precios transparentes de Treatflow: Basic desde 39€/mes, Booking desde 59€/mes. Solicita acceso anticipado.",
    },
  },
  it: {
    eyebrow: "Prezzi trasparenti",
    titleBefore: "Prezzi semplici –",
    titleHighlight: "nessun costo nascosto",
    subtitle:
      "Scegli il piano giusto per il tuo centro. Richiedi l'accesso anticipato per il tuo Paese – la registrazione diretta è disponibile in Germania, Austria e Svizzera.",
    monthly: "Mensile",
    yearly: "Annuale",
    saveBadge: "Risparmi 10%",
    perMonth: "/mese",
    perYear: "/anno",
    basicYearlyHint: "€35/mese • Risparmi €47/anno",
    bookingYearlyHint: "€53/mese • Risparmi €71/anno",
    exclVat: "IVA esclusa",
    popular: "Popolare",
    cta: "Richiedi accesso anticipato",
    earlyAccessHref: "/it/accesso-anticipato",
    basic: {
      name: "Basic",
      description:
        "Anamnesi digitale, consensi e documentazione trattamenti – senza agenda.",
      included: [
        "Schede clienti",
        "Moduli",
        "Documentazione trattamenti",
        "Modelli di anamnesi",
        "Supporto email",
      ],
      excluded: [
        "Calendario appuntamenti",
        "Prenotazioni online",
        "Supporto prioritario",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Calendario, prenotazioni online e promemoria automatici per il tuo centro.",
      included: [
        "Tutto di Basic",
        "Calendario appuntamenti",
        "Prenotazioni online",
        "Automazione SMS ed email",
        "Integrazioni (Google Calendar, Zapier e altro)",
        "Impostazioni avanzate",
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
        { feature: "Moduli e anamnesi", basic: true, booking: true },
        { feature: "Documentazione trattamenti", basic: true, booking: true },
        { feature: "Modelli di anamnesi", basic: true, booking: true },
        { feature: "Supporto email", basic: true, booking: true },
        { feature: "Calendario appuntamenti", basic: false, booking: true },
        { feature: "Prenotazioni online", basic: false, booking: true },
        { feature: "Automazione SMS ed email", basic: false, booking: true },
        { feature: "Integrazioni", basic: false, booking: true },
        { feature: "Supporto prioritario", basic: false, booking: true },
        { feature: "Impostazioni avanzate", basic: false, booking: true },
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
            "La registrazione diretta è disponibile in Germania, Austria e Svizzera. Negli altri Paesi richiedi l'accesso anticipato.",
        },
      ],
    },
    meta: {
      title: "Prezzi | Treatflow",
      description:
        "Prezzi trasparenti Treatflow: Basic da 39€/mese, Booking da 59€/mese. Richiedi l'accesso anticipato.",
    },
  },
  fr: {
    eyebrow: "Tarifs transparents",
    titleBefore: "Des tarifs simples –",
    titleHighlight: "sans frais cachés",
    subtitle:
      "Choisissez l'offre adaptée à votre institut. Demandez un accès anticipé pour votre pays – l'inscription directe est disponible en Allemagne, Autriche et Suisse.",
    monthly: "Mensuel",
    yearly: "Annuel",
    saveBadge: "Économisez 10%",
    perMonth: "/mois",
    perYear: "/an",
    basicYearlyHint: "€35/mois • Économisez €47/an",
    bookingYearlyHint: "€53/mois • Économisez €71/an",
    exclVat: "HT",
    popular: "Populaire",
    cta: "Demander un accès anticipé",
    earlyAccessHref: "/fr/acces-anticipe",
    basic: {
      name: "Basic",
      description:
        "Anamnèse numérique, consentements et documentation des soins – sans agenda.",
      included: [
        "Fiches clients",
        "Formulaires",
        "Documentation des soins",
        "Modèles d'anamnèse",
        "Support e-mail",
      ],
      excluded: [
        "Calendrier de rendez-vous",
        "Réservation en ligne",
        "Support prioritaire",
      ],
    },
    booking: {
      name: "Booking",
      description:
        "Calendrier, réservation en ligne et rappels automatiques pour votre institut.",
      included: [
        "Tout Basic",
        "Calendrier de rendez-vous",
        "Réservation en ligne",
        "Automatisation SMS et e-mail",
        "Intégrations (Google Calendar, Zapier et plus)",
        "Paramètres avancés",
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
        { feature: "Formulaires et anamnèse", basic: true, booking: true },
        { feature: "Documentation des soins", basic: true, booking: true },
        { feature: "Modèles d'anamnèse", basic: true, booking: true },
        { feature: "Support e-mail", basic: true, booking: true },
        { feature: "Calendrier de rendez-vous", basic: false, booking: true },
        { feature: "Réservation en ligne", basic: false, booking: true },
        { feature: "Automatisation SMS et e-mail", basic: false, booking: true },
        { feature: "Intégrations", basic: false, booking: true },
        { feature: "Support prioritaire", basic: false, booking: true },
        { feature: "Paramètres avancés", basic: false, booking: true },
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
            "L'inscription directe est disponible en Allemagne, Autriche et Suisse. Dans les autres pays, demandez un accès anticipé.",
        },
      ],
    },
    meta: {
      title: "Tarifs | Treatflow",
      description:
        "Tarifs transparents Treatflow : Basic dès 39€/mois, Booking dès 59€/mois. Demandez un accès anticipé.",
    },
  },
};

export function getPricingIntlCopy(locale: PricingLocale): PricingIntlCopy {
  return copies[locale];
}
