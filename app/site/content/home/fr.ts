import type { HomeContent } from "./types";

/**
 * Page d'accueil française. Mêmes sections que `en.ts`, sans les fonctionnalités
 * réservées à la région DACH (caisse, cartes cadeaux, WhatsApp, Lexware, SumUp,
 * NiSV). Pas encore de vidéo produit – le film existant est en allemand.
 */
export const homeFr: HomeContent = {
  meta: {
    title: "Logiciel de gestion pour institut de beauté et médecine esthétique",
    description:
      "Treatflow, le logiciel de gestion tout-en-un pour instituts de beauté, esthéticiennes et centres de médecine esthétique : agenda, prise de rendez-vous en ligne, fiches clients, formulaires de consentement, suivi des soins et rappels automatiques. Essai gratuit de 14 jours.",
    keywords: [
      "logiciel institut de beauté",
      "logiciel de gestion institut de beauté",
      "logiciel esthéticienne",
      "prise de rendez-vous en ligne institut",
      "logiciel médecine esthétique",
      "fiche client esthétique",
      "logiciel planning institut",
      "agenda institut de beauté",
    ],
  },

  schema: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      inLanguage: "fr",
      description:
        "Treatflow est une plateforme de gestion tout-en-un pour instituts de beauté, esthéticiennes et centres de médecine esthétique. Elle réunit prise de rendez-vous en ligne, fiches clients, questionnaires et formulaires de consentement numériques, suivi des soins, photos avant/après et relances automatisées. Hébergée dans l'UE.",
      url: "https://www.treatflow.io/fr",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Fiches clients, formulaires et suivi des soins",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Agenda, prise de rendez-vous en ligne et rappels automatiques",
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
        "Agenda avec prise de rendez-vous en ligne",
        "Fiches clients numériques",
        "Questionnaires et formulaires de consentement",
        "Suivi des soins avec photos",
        "Dictée vocale pour les notes de soin",
        "Rappels automatiques par e-mail",
        "Parcours clients",
      ],
    },
  },

  hero: {
    badge: "Pour les instituts qui voient plus grand",
    title: {
      before: "Fini le casse-tête des rendez-vous,",
      highlight: "la paperasse",
      connector: "et",
      end: "les no-shows",
    },
    subtitle:
      "Rendez-vous, clients, formulaires et suivi des soins réunis dans une seule application, simple et intuitive. Votre équipe la prend en main tout de suite.",
    primaryCta: "Essayer 14 jours gratuitement",
    demoCta: "Réserver une démo",
    checks: ["Sans carte bancaire", "Prêt en 2 minutes", "Migration des données offerte"],
    rating: "4,6/5 sur Google",
    tested: { before: "Déjà testé par ", highlight: "plus de 500 instituts", after: "" },
    calendarLocale: "fr-FR",
    newBookingLabel: "Nouvelle réservation",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow sur ordinateur portable et tablette : agenda et fiches clients dans un institut moderne",
    },
    liveDemo: { href: { page: "try-features" }, label: "Tester les fonctionnalités en direct" },
  },

  socialProof: {
    rating: "4,6/5 sur Google",
    allReviews: "Voir tous les avis",
    tested: { before: "Déjà testé par ", highlight: "plus de 500 instituts", after: "" },
    reviews: [
      {
        text: "Le support est exceptionnel – toujours aimable, sympathique et orienté solutions. Je recommande vivement !",
        name: "Velura Saarburg",
        studio: "Épilation laser",
      },
      {
        text: "Imbattable côté prix et intuitif à utiliser. Ma demande a été réalisée en une journée !",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Passée de Phorest à Treatflow – excellent rapport qualité-prix. Je le recommande en toute confiance.",
        name: "Sharon U.",
        studio: "Institut de beauté",
      },
    ],
    note: "Avis Google, traduits de l'allemand.",
  },

  studioDay: {
    eyebrow: "Un rendez-vous, un seul système",
    title: "De la réservation au suivi. Dans une seule application.",
    subtitle: "Voici comment se déroule un rendez-vous avec Treatflow. Rien n'est saisi deux fois.",
    steps: [
      {
        time: "lun. · 21h14",
        module: "Réservation en ligne",
        title: "Lena réserve le soir, depuis son canapé.",
        text: "Pas d'appel, aucune commission par réservation. Le rendez-vous apparaît aussitôt dans l'agenda.",
        meta: "Soin du visage · jeu. 10h45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "mer. · 10h45",
        module: "Rappel",
        title: "Le rappel part automatiquement.",
        text: "La veille, par e-mail. Moins d'oublis, sans que personne n'ait à y penser.",
        meta: "Envoyé · confirmé",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "jeu. · 10h40",
        module: "Formulaires",
        title: "Questionnaire de santé rempli et signé sur tablette.",
        text: "Le formulaire est enregistré directement dans la fiche de Lena. Plus rien à recopier ensuite.",
        meta: "Questionnaire · signé numériquement",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "jeu. · 11h40",
        module: "Suivi des soins",
        title: "Soin documenté, photos comprises.",
        text: "Paramètres, produits et photos avant/après restent dans l'historique des soins.",
        meta: "3 photos · paramètres enregistrés",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "ven. · 9h00",
        module: "Suivi",
        title: "Le suivi et la prochaine réservation se font tout seuls.",
        text: "Des conseils post-soin le lendemain, une invitation à reprendre rendez-vous quelques semaines plus tard. Paramétré une seule fois sous forme de parcours client.",
        meta: "Parcours · prochaine étape dans 4 semaines",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Moins de chaos. Plus de temps pour vos clients.",
    subtitle: "Tout ce dont votre institut a besoin – dans une application que votre équipe comprend tout de suite.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Agenda et planning", desc: "Tous vos rendez-vous dans une vue jour et semaine claire.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Réservation en ligne", desc: "Vos clients réservent eux-mêmes – même en dehors de vos heures d'ouverture.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Fiches clients", desc: "Historique, notes et photos au même endroit, retrouvés en un instant.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Formulaires", desc: "Questionnaires et consentements numériques, remplis à l'avance via un lien.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Suivi des soins", desc: "Chaque soin consigné avec précision, photos et paramètres compris.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Encaissez un acompte ou le paiement intégral en ligne dès la réservation.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Rappels", desc: "Des rappels automatiques par e-mail pour limiter les rendez-vous non honorés.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Parcours clients", desc: "Automatisez le suivi et la relance de vos clients en plusieurs étapes.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Essayer 14 jours gratuitement",
    ctaNote: "Sans carte bancaire. Sans engagement.",
  },

  support: {
    ariaLabel: "Accompagnement personnalisé dès le premier jour",
    badge: "Accompagnement personnalisé",
    title: "Nous vous accompagnons dès le premier jour",
    text: "De la configuration au transfert de vos données clients : notre équipe vous accompagne personnellement dans vos débuts avec Treatflow – pour que vous et votre équipe travailliez sereinement dès le premier jour.",
    trialCta: "Essayer 14 jours gratuitement",
    demoCta: "Réserver une démo gratuite",
    imageAlt: "Accompagnement personnalisé par l'équipe Treatflow",
    chip: "Personnalisé. Inclus.",
  },

  pricing: {
    eyebrow: "Des tarifs transparents",
    titleBefore: "Des prix simples –",
    titleHighlight: " sans frais cachés",
    subtitle:
      "Treatflow démarre à 39 €/mois (Basic) ou 59 €/mois (Booking). Testez-le gratuitement pendant 14 jours – sans commission et sans risque.",
    monthly: "Mensuel",
    yearly: "Annuel",
    saveBadge: "-10 %",
    perMonth: "/mois",
    perYear: "/an",
    vatNote: "HT",
    basic: {
      name: "Basic",
      monthlyPrice: "39 €",
      yearlyPrice: "421 €",
      yearlyHint: "35 €/mois • 47 € d'économie par an",
      description:
        "Questionnaires de santé, formulaires de consentement et suivi des soins en numérique – sans gestion des rendez-vous.",
      included: [
        "Fiches clients",
        "Formulaires avec signature électronique",
        "Suivi des soins et notes vocales",
        "Photos avant/après",
        "Notes d'équipe et tâches",
        "Boutique et produits",
        "Statistiques",
        "Collaborateurs et rôles",
        "Support par e-mail",
      ],
      excluded: [
        "Agenda et planning",
        "Réservation en ligne",
        "Automatisations et liste d'attente",
        "Support prioritaire",
      ],
      cta: "Essayer 14 jours gratuitement",
    },
    booking: {
      name: "Booking",
      popular: "Populaire",
      monthlyPrice: "59 €",
      yearlyPrice: "637 €",
      yearlyHint: "53 €/mois • 71 € d'économie par an",
      description: "Agenda, prise de rendez-vous en ligne et rappels automatiques pour votre institut.",
      included: [
        "Tout ce qui est inclus dans Basic",
        "Agenda avec colonnes collaborateurs et cabines",
        "Réservation en ligne sans commission",
        "Liste d'attente",
        "Rappels par e-mail",
        "Parcours clients",
        "Codes promo",
        "Page de réservation multilingue",
        "Intégrations (Google Agenda, Zapier, assistants IA)",
        "Support prioritaire par e-mail et chat",
      ],
      cta: "Essayer 14 jours gratuitement",
    },
    trial: {
      title: "14 jours d'essai gratuit",
      text: "Sans carte bancaire • Résiliable à tout moment • Migration des données offerte",
      points: ["Pas de frais d'installation", "Sans engagement", "Conforme au RGPD"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "Encore des questions ?",
    titleHighlight: " Nous avons les réponses !",
    subtitle: "Retrouvez ici les réponses aux questions les plus fréquentes sur Treatflow.",
    items: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est une application tout-en-un pour le quotidien de votre institut : rendez-vous, fiches clients, formulaires numériques et suivi des soins sont réunis dans un seul outil – sans commission sur les réservations. Conçu en Autriche, avec des données hébergées sur des serveurs européens.",
      },
      {
        question: "À qui s'adresse Treatflow ?",
        answer: [
          "À tous les professionnels du soin – instituts de beauté, médecine esthétique, centres laser, ongleries, extensions de cils, maquillage permanent, massage et spa. En savoir plus sur notre ",
          { text: "logiciel pour la médecine esthétique", href: { page: "aesthetic-clinic-software" } },
          " et nos ",
          { text: "fiches clients", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Combien de temps puis-je essayer Treatflow gratuitement ?",
        answer:
          "Vous pouvez essayer Treatflow gratuitement pendant 14 jours. Sans carte bancaire et sans frais cachés. À la fin de l'essai, vous décidez si vous souhaitez continuer.",
      },
      {
        question: "Quelle est la différence entre Basic et Booking ?",
        answer: [
          "Basic (39 €/mois) comprend la ",
          { text: "gestion des clients", href: { page: "client-records" } },
          " en illimité, la bibliothèque de formulaires, le générateur de formulaires par IA et la boutique. Booking (59 €/mois) y ajoute l'",
          { text: "agenda de réservation", href: { page: "appointment-calendar" } },
          " professionnel avec votre propre lien de réservation et des ",
          { text: "rappels de rendez-vous", href: { page: "messaging" } },
          " automatiques.",
        ],
      },
      {
        question: "Treatflow est-il conforme au RGPD ?",
        answer: [
          "Oui. Treatflow est entièrement conforme au RGPD. Toutes les données sont chiffrées et hébergées en toute sécurité sur des serveurs européens à Francfort, en Allemagne. Les ",
          { text: "questionnaires numériques", href: { page: "forms" } },
          " et la ",
          { text: "fiches de suivi des soins", href: { page: "treatment-documentation" } },
          " sont également couverts.",
        ],
      },
      {
        question: "Puis-je importer mes données clients existantes ?",
        answer: [
          "Oui, nous vous aidons gratuitement à migrer vos données. Notre équipe support transfère en toute sécurité vos données clients existantes dans vos ",
          { text: "fiches clients numériques", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Treatflow fonctionne-t-il sur mon téléphone ?",
        answer:
          "Oui. Treatflow fonctionne sur tous les appareils – ordinateur, tablette et smartphone. Vous accédez à vos clients et à vos rendez-vous où que vous soyez.",
      },
      {
        question: "Que deviennent mes données si je résilie ?",
        answer:
          "Vous gardez le contrôle total de vos données. En cas de résiliation, vous pouvez toutes les exporter. Nous ne les supprimons définitivement qu'après une période de transition.",
      },
      {
        question: "Faut-il des connaissances techniques pour utiliser Treatflow ?",
        answer:
          "Non. Treatflow est très simple à utiliser. Rien à installer : connectez-vous depuis votre navigateur et c'est parti. Pour toute question, notre équipe support est là pour vous aider.",
      },
      {
        question: "Comment fonctionne la bibliothèque de formulaires ?",
        answer: [
          "Dans la bibliothèque, vous trouvez des ",
          { text: "formulaires", href: { page: "forms" } },
          " professionnels pour tous les soins esthétiques. Utilisez-les tels quels, adaptez-les avec le générateur IA ou personnalisez-les dans l'éditeur glisser-déposer. Les questionnaires numériques sont immédiatement opérationnels.",
        ],
      },
      {
        question: "Puis-je gérer un nombre illimité de clients ?",
        answer:
          "Oui. Vous pouvez gérer autant de clients que vous le souhaitez. Le système évolue avec votre institut, et la fonction d'import facilite la reprise de vos données clients existantes.",
      },
    ],
    contactTitle: "D'autres questions ?",
    contactText:
      "Notre équipe support est là pour vous aider. Écrivez-nous simplement un e-mail.",
    demoCta: "Réserver un appel conseil",
  },

  cta: {
    ariaLabel: "Appel à l'action",
    title: "Envie de gérer votre institut plus sereinement ?",
    subtitle: "Commencez dès aujourd'hui et découvrez à quel point l'organisation de votre institut peut être simple.",
    checks: [
      "14 jours d'essai gratuit",
      "Sans carte bancaire",
      "Prêt en 2 minutes",
      "Accompagnement personnalisé",
    ],
    primaryCta: "Démarrer l'essai gratuit",
    demoCta: "Réserver une démo",
    note: "Sans engagement. Conforme au RGPD. Accompagnement personnalisé inclus.",
  },

  seo: {
    ariaLabel: "Informations complémentaires",
    intro: [
      "Treatflow est le ",
      { text: "logiciel pour instituts de beauté", href: { page: "beauty-salon-software" } },
      " avec agenda, prise de rendez-vous en ligne, fiches clients numériques, formulaires de consentement et suivi des soins – sans commission, conforme au RGPD et conçu en Autriche.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Logiciel de fiches clients" },
      { href: { page: "online-booking" }, label: "Prise de rendez-vous en ligne" },
      { href: { page: "treatment-documentation" }, label: "Suivi des soins et fiches de soin" },
      { href: { page: "forms" }, label: "Questionnaires clients numériques" },
      { href: { page: "messaging" }, label: "Rappels de rendez-vous" },
      { href: { page: "software-comparison" }, label: "Comparatif de logiciels" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
