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

/**
 * Französische Website-Inhalte (Frankreich zuerst, auch BE/LU/CH).
 * Quelle: aktuelle englische Seiten. Interne Links als EN-Pfad (/en/...),
 * der zentrale Remapper setzt sie auf /fr/<lokaler-slug> um.
 */

const homeFaqItems: { q: string; a: string }[] = [
  {
    q: "Qu'est-ce que Treatflow ?",
    a: "Treatflow est un logiciel tout-en-un pour instituts de beauté et cliniques esthétiques. Il réunit agenda, prise de rendez-vous en ligne sans commission, fiches clients numériques, formulaires de consentement, notes de soin, documentation photo et rappels dans une seule application. Conçu en Autriche, hébergé sur des serveurs européens.",
  },
  {
    q: "Treatflow est-il un logiciel d'institut de beauté sans commission sur les réservations ?",
    a: "Oui. Treatflow est un logiciel pour votre institut, pas une place de marché. Vous gardez vos données clients et payez un abonnement mensuel transparent. Aucune commission n'est prélevée sur les réservations.",
  },
  {
    q: "À qui s'adresse Treatflow ?",
    a: "Treatflow s'adresse aux instituts de beauté, cliniques esthétiques, centres d'épilation laser, studios de maquillage permanent, prothésistes ongulaires, studios d'extensions de cils, spas et cabinets de massage qui veulent moins de rendez-vous manqués, des consentements conformes au RGPD et une documentation des soins structurée.",
  },
  {
    q: "Treatflow propose-t-il des formulaires de consentement numériques pour les cliniques esthétiques ?",
    a: "Oui. Vos clients remplissent le questionnaire préalable et le formulaire de consentement sur leur téléphone avant le rendez-vous. Les réponses sont enregistrées sur la fiche client, avec signature lorsque c'est nécessaire.",
  },
  {
    q: "Les centres d'épilation laser peuvent-ils documenter leurs séances dans Treatflow ?",
    a: "Oui. La documentation des soins comprend les paramètres, les notes et les photos avant/après de chaque séance. L'historique reste rattaché au client, ce qui facilite le suivi des séries de séances.",
  },
  {
    q: "Les fiches clients numériques sont-elles conformes au RGPD ?",
    a: "Treatflow est hébergé sur des serveurs européens à Francfort, avec chiffrement SSL et sauvegardes quotidiennes. Fiches clients, formulaires et documentation restent dans un seul système conçu pour le RGPD.",
  },
  {
    q: "Combien coûte Treatflow ?",
    a: "La formule Basic démarre à 39 €/mois pour les fiches clients, les formulaires et la documentation. La formule Booking démarre à 59 €/mois et ajoute l'agenda, la prise de rendez-vous en ligne et les rappels. 14 jours d'essai gratuit, sans carte bancaire.",
  },
  {
    q: "Comment démarrer ?",
    a: "Inscrivez-vous sur app.treatflow.io et lancez votre essai gratuit de 14 jours. Aucune carte bancaire requise. Résiliable à tout moment.",
  },
];

function faqSchema(inLanguage: string, items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export const general: Omit<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  home: {
    locale: "fr",
    earlyAccessHref: "",
    pricingHref: "/en/pricing",
    hero: {
      eyebrow: "Pour les instituts de beauté et cliniques esthétiques",
      titleLead: "Moins de rendez-vous manqués,",
      titleHighlight: "des clients fidèles",
      titleTail: "et zéro paperasse",
      subtitle:
        "Agenda, prise de rendez-vous en ligne sans commission, fiches clients, formulaires de consentement et documentation des soins – réunis dans une seule application claire. Conçu en Autriche pour les instituts du monde entier.",
      primaryCta: "Essayer gratuitement",
      trustItems: [
        "Sans carte bancaire",
        "Prêt en 2 minutes",
        "Migration des données offerte",
        "Accompagnement personnalisé",
      ],
      studiosLabel: "Plus de 500 instituts",
      ratingValue: "4,6/5",
      image: {
        src: "/images/lifestyle/hero-startseite-en.png",
        alt: "Agenda Treatflow ouvert sur un ordinateur portable dans un institut de beauté moderne",
      },
    },
    aiCapsules: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel tout-en-un pour instituts de beauté et cliniques esthétiques : agenda, prise de rendez-vous en ligne sans commission, fiches clients, formulaires de consentement numériques, notes de soin et documentation photo. Hébergé dans l'UE. 14 jours d'essai gratuit.",
      },
      {
        question: "Treatflow prend-il une commission sur les réservations ?",
        answer:
          "Non. Treatflow n'est pas une place de marché. Les instituts paient un abonnement mensuel fixe (Basic dès 39 €, Booking dès 59 €) et conservent 100 % du chiffre d'affaires de leurs réservations.",
      },
    ],
    trustBar: [
      { icon: Lock, text: "Chiffrement SSL" },
      { icon: Server, text: "Serveurs dans l'UE" },
      { icon: Shield, text: "Sauvegardes quotidiennes" },
      { icon: ShieldCheck, text: "Consentements conformes au RGPD" },
    ],
    features: {
      title: "Les fonctionnalités essentielles en un coup d'œil",
      subtitle: "Tout est clairement organisé pour que vous et votre équipe travailliez vite.",
      ctaNote: "Sans carte bancaire. Résiliable à tout moment.",
      items: [
        {
          icon: CalendarDays,
          label: "Agenda",
          desc: "Vues jour, semaine et mois avec colonnes par collaborateur et par cabine.",
          color: "bg-indigo-100 text-indigo-600",
        },
        {
          icon: Users,
          label: "Réservation en ligne",
          desc: "Votre propre lien de réservation, 24 h/24. Pas de place de marché, pas de commission.",
          color: "bg-emerald-100 text-emerald-600",
        },
        {
          icon: ClipboardCheck,
          label: "Formulaires de consentement",
          desc: "Questionnaire et consentement numériques, signés sur mobile ou à l'institut.",
          color: "bg-orange-100 text-orange-600",
        },
        {
          icon: FileText,
          label: "Fiches clients",
          desc: "Historique, notes, photos et formulaires dans une fiche conforme au RGPD.",
          color: "bg-blue-100 text-blue-600",
        },
        {
          icon: Shield,
          label: "Documentation des soins",
          desc: "Paramètres, notes et photos avant/après pour chaque visite.",
          color: "bg-teal-100 text-teal-600",
        },
        {
          icon: Bell,
          label: "Rappels",
          desc: "Rappels automatiques par WhatsApp et e-mail pour réduire les rendez-vous manqués.",
          color: "bg-rose-100 text-rose-600",
        },
        {
          icon: Workflow,
          label: "Parcours numériques",
          desc: "De la réservation à la documentation, dans un seul système.",
          color: "bg-purple-100 text-purple-600",
        },
      ],
    },
    extras: {
      title: "Et Treatflow en fait encore plus",
      subtitle: "Des extras pratiques qui simplifient vos journées à l'institut – déjà inclus.",
      items: [
        {
          icon: BarChart3,
          label: "Statistiques et rapports",
          desc: "Chiffre d'affaires, rendez-vous, clients et prestations phares en un coup d'œil.",
        },
        {
          icon: Mic,
          label: "Dictée IA",
          desc: "Dictez vos notes de soin – Treatflow les rédige pour vous.",
        },
        {
          icon: Languages,
          label: "Réservation multilingue",
          desc: "Vos clients réservent dans leur langue sur votre page de réservation.",
        },
        {
          icon: Ticket,
          label: "Codes promo",
          desc: "Offres et codes de bienvenue pour la réservation en ligne.",
        },
        {
          icon: ListChecks,
          label: "Tâches et notes d'équipe",
          desc: "Tâches avec échéances et accusés de lecture pour votre équipe.",
        },
      ],
    },
    faqs: {
      title: "Questions fréquentes",
      pricingLinkLabel: "Voir les tarifs",
      items: homeFaqItems,
    },
    cta: {
      title: "Prêt pour des journées plus sereines et moins de rendez-vous manqués ?",
      subtitle: "Démarrez Treatflow dès aujourd'hui – 14 jours d'essai gratuit, sans carte bancaire.",
      note: "14 jours d'essai gratuit · Sans carte bancaire · Résiliable à tout moment",
    },
    schemas: {
      software: {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Treatflow",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web Browser",
        description:
          "Logiciel tout-en-un pour instituts de beauté et cliniques esthétiques : agenda, prise de rendez-vous en ligne sans commission, fiches clients, formulaires de consentement et documentation des soins. Hébergement dans l'UE conforme au RGPD. Conçu en Autriche.",
        url: `${BASE_URL}/fr`,
        inLanguage: "fr",
        author: {
          "@type": "Organization",
          name: "Treatflow",
          url: BASE_URL,
        },
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
            description: "Fiches clients, formulaires et documentation des soins",
          },
          {
            "@type": "Offer",
            name: "Booking",
            price: "59",
            priceCurrency: "EUR",
            description: "Agenda, prise de rendez-vous en ligne et rappels automatiques",
          },
        ],
        featureList: [
          "Agenda avec colonnes par collaborateur et par cabine",
          "Prise de rendez-vous en ligne sans commission",
          "Fiches clients numériques",
          "Formulaires de consentement et questionnaires préalables",
          "Documentation des soins avec photos",
          "Rappels par WhatsApp et e-mail",
        ],
      },
      faq: faqSchema("fr", homeFaqItems),
    },
  },

  homeMeta: {
    title: "Logiciel pour institut de beauté et clinique esthétique",
    description:
      "Treatflow, le logiciel tout-en-un pour instituts de beauté, cliniques esthétiques et métiers du soin : prise de rendez-vous en ligne, fiches clients, formulaires numériques, documentation des soins et rappels. 14 jours d'essai gratuit.",
    keywords: [
      "logiciel institut de beauté",
      "logiciel esthéticienne",
      "prise de rendez-vous en ligne institut",
      "logiciel clinique esthétique",
      "fiche client esthétique",
      "agenda institut de beauté",
    ],
  },

  pricing: {
    eyebrow: "Des tarifs transparents",
    titleBefore: "Des prix simples –",
    titleHighlight: "sans frais cachés",
    subtitle:
      "Choisissez la formule adaptée à votre institut. Démarrez votre essai gratuit de 14 jours – sans carte bancaire.",
    monthly: "Mensuel",
    yearly: "Annuel",
    saveBadge: "-10 %",
    perMonth: "/mois",
    perYear: "/an",
    basicYearlyHint: "35 €/mois • 47 € d'économie par an",
    bookingYearlyHint: "53 €/mois • 71 € d'économie par an",
    exclVat: "HT",
    popular: "Populaire",
    cta: "Essayer gratuitement",
    earlyAccessHref: "",
    basic: {
      name: "Basic",
      description:
        "Questionnaires, formulaires de consentement et documentation des soins numériques – sans gestion des rendez-vous.",
      included: [
        "Fiches clients",
        "Formulaires avec signature électronique",
        "Documentation des soins et notes vocales",
        "Photos avant/après",
        "Notes d'équipe et tâches",
        "Boutique et produits",
        "Rapports",
        "Rôles des collaborateurs",
        "Support par e-mail",
      ],
      excluded: [
        "Agenda",
        "Réservation en ligne",
        "Automatisations et liste d'attente",
        "Support prioritaire",
      ],
    },
    booking: {
      name: "Booking",
      description: "Agenda, prise de rendez-vous en ligne et rappels automatiques pour votre institut.",
      included: [
        "Tout ce qui est inclus dans Basic",
        "Agenda (collaborateurs et cabines)",
        "Réservation en ligne sans commission",
        "Liste d'attente",
        "Rappels par WhatsApp et e-mail",
        "Parcours clients",
        "Codes promo",
        "Page de réservation multilingue",
        "Intégrations (Zapier et plus)",
        "Support prioritaire par e-mail et chat",
      ],
    },
    trialBox: {
      title: "14 jours d'essai gratuit",
      text: "Sans carte bancaire • Résiliable à tout moment • Migration des données offerte",
      points: ["Aucuns frais d'installation", "Résiliation mensuelle", "Conforme au RGPD"],
    },
    comparison: {
      title: "Qu'est-ce qui est inclus ?",
      subtitle: "Comparez les deux formules en détail et trouvez celle qui convient à votre institut.",
      vatNote: "Tous les prix sont indiqués hors TVA.",
      featureCol: "Fonctionnalité",
      rows: [
        { feature: "Fiches clients", basic: true, booking: true },
        { feature: "Formulaires avec signature électronique", basic: true, booking: true },
        { feature: "Documentation des soins et notes vocales", basic: true, booking: true },
        { feature: "Photos avant/après", basic: true, booking: true },
        { feature: "Notes d'équipe et tâches", basic: true, booking: true },
        { feature: "Boutique et produits", basic: true, booking: true },
        { feature: "Rapports", basic: true, booking: true },
        { feature: "Rôles des collaborateurs", basic: true, booking: true },
        { feature: "Support par e-mail", basic: true, booking: true },
        { feature: "Agenda (collaborateurs et cabines)", basic: false, booking: true },
        { feature: "Réservation en ligne sans commission", basic: false, booking: true },
        { feature: "Liste d'attente", basic: false, booking: true },
        { feature: "Rappels par WhatsApp et e-mail", basic: false, booking: true },
        { feature: "Parcours clients", basic: false, booking: true },
        { feature: "Codes promo", basic: false, booking: true },
        { feature: "Page de réservation multilingue", basic: false, booking: true },
        { feature: "Intégrations (Zapier)", basic: false, booking: true },
        { feature: "Support prioritaire", basic: false, booking: true },
      ],
    },
    why: {
      title: "Pourquoi Treatflow ?",
      subtitle: "Des prix fixes et transparents plutôt que des frais cachés et des commissions.",
      items: [
        { value: "0 %", label: "de commission par réservation" },
        { value: "0 €", label: "de frais d'installation" },
        { value: "14 jours", label: "d'essai gratuit" },
        { value: "À tout moment", label: "résiliable" },
      ],
    },
    faq: {
      title: "Questions sur les tarifs",
      subtitle: "Tout ce qu'il faut savoir sur les tarifs de Treatflow.",
      items: [
        {
          question: "Combien coûte Treatflow ?",
          answer:
            "Treatflow propose deux formules : Basic dès 39 €/mois pour les fiches clients, les formulaires et la documentation, et Booking dès 59 €/mois avec agenda, prise de rendez-vous en ligne et rappels automatiques. Les deux peuvent être testées gratuitement pendant 14 jours.",
        },
        {
          question: "Y a-t-il des frais cachés ?",
          answer:
            "Non. Treatflow fonctionne avec des prix fixes et transparents, sans commission sur les réservations, sans frais d'installation et sans options cachées.",
        },
        {
          question: "Puis-je résilier à tout moment ?",
          answer:
            "Oui. Avec la facturation mensuelle, vous pouvez résilier à la fin de la période en cours. Il n'y a pas de durée minimale d'engagement.",
        },
        {
          question: "La formule Booking vaut-elle le coup ?",
          answer:
            "Oui, si vous avez besoin de la prise de rendez-vous en ligne, de rappels automatiques et d'un agenda numérique. Les instituts en formule Booking constatent souvent moins de rendez-vous manqués et moins d'appels téléphoniques.",
        },
        {
          question: "Puis-je utiliser Treatflow en France, en Belgique, au Luxembourg ou en Suisse ?",
          answer:
            "Oui. L'inscription est ouverte dans le monde entier : lancez votre essai gratuit de 14 jours sur app.treatflow.io, sans carte bancaire. Les prix sont indiqués en euros.",
        },
      ],
    },
    meta: {
      title: "Tarifs",
      description:
        "Tarifs Treatflow : Basic dès 39 €/mois, Booking dès 59 €/mois. Aucune commission sur les réservations, 14 jours d'essai gratuit, sans carte bancaire.",
    },
  },

  pricingKeywords: [
    "logiciel institut de beauté prix",
    "tarif logiciel esthéticienne",
    "logiciel prise de rendez-vous sans commission",
    "abonnement logiciel salon de beauté",
    "logiciel clinique esthétique tarif",
  ],

  featuresMeta: {
    title: "Fonctionnalités pour instituts et cliniques",
    description:
      "Agenda, prise de rendez-vous en ligne sans commission, fiches clients, formulaires de consentement numériques, documentation des soins avec dictée vocale, rappels et intégrations – dans un seul logiciel pour votre institut.",
    keywords: [
      "fonctionnalités logiciel institut de beauté",
      "logiciel gestion institut de beauté",
      "formulaire de consentement numérique",
      "logiciel esthétique tout-en-un",
    ],
  },

  featuresOverview: {
    breadcrumbLabel: "Fonctionnalités",
    homeHref: "/en",
    registerHref: "",
    pricingHref: "/en/pricing",
    eyebrow: "Toutes les fonctionnalités",
    title: "Le logiciel pour instituts et cliniques, de la réservation à la documentation",
    subtitle:
      "Treatflow réunit agenda, prise de rendez-vous en ligne, fiches clients, formulaires numériques, notes de soin et suivi dans un seul espace de travail. Conçu pour les instituts de beauté et les cliniques esthétiques – pas comme une place de marché de réservation.",
    bullets: [
      "Aucune commission sur les réservations",
      "Formulaires, photos et notes sur la fiche client",
      "Dictée vocale pour les notes de soin",
      "14 jours d'essai gratuit, sans carte bancaire",
    ],
    primaryCta: "Démarrer l'essai gratuit de 14 jours",
    pricingCta: "Voir les tarifs",
    heroImageSrc: "/images/lifestyle/hero-startseite-en.png",
    heroImageAlt: "Treatflow sur ordinateur portable et tablette dans une clinique : agenda et fiches clients",
    capsules: [
      {
        question: "Quelles fonctionnalités Treatflow propose-t-il ?",
        answer:
          "Treatflow comprend un agenda, la prise de rendez-vous en ligne sans commission, des fiches clients, des questionnaires et formulaires de consentement numériques, la documentation des soins avec photos et dictée vocale, des rappels, des intégrations, une boutique et des bons cadeaux.",
      },
      {
        question: "Treatflow est-il un logiciel tout-en-un ?",
        answer:
          "Oui. Treatflow est un logiciel pour instituts de beauté et cliniques esthétiques. Réservations, fiches, formulaires, documentation et suivi sont réunis dans un seul système. Ce n'est pas une place de marché et aucune commission n'est prélevée sur les réservations.",
      },
    ],
    workflowTitle: "Comment les fonctionnalités s'enchaînent",
    workflowSubtitle:
      "Chaque étape mène à la suivante : l'équipe suit un seul parcours client au lieu de jongler entre plusieurs outils.",
    workflowSteps: [
      {
        href: "/en/online-booking",
        label: "Réservation en ligne",
        desc: "Les clients réservent sur votre propre lien. Les créneaux restent synchronisés avec l'agenda de l'institut.",
      },
      {
        href: "/en/forms",
        label: "Questionnaire et consentement",
        desc: "Les formulaires de consultation et de consentement peuvent être remplis avant l'arrivée du client.",
      },
      {
        href: "/en/client-records",
        label: "Fiches clients",
        desc: "Historique, notes et formulaires réunis sur une seule fiche accessible à toute l'équipe.",
      },
      {
        href: "/en/treatment-documentation",
        label: "Documentation",
        desc: "Notes, dictée vocale, paramètres et photos restent rattachés à la visite.",
      },
      {
        href: "/en/messaging",
        label: "Suivi",
        desc: "Rappels et messages automatiques réduisent les rendez-vous manqués et font revenir les clients.",
      },
    ],
    cardsTitle: "Les fonctionnalités en un coup d'œil",
    cardsSubtitle: "Chaque carte ouvre la page dédiée.",
    cards: [
      {
        href: "/en/appointment-calendar",
        icon: CalendarDays,
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        title: "Agenda",
        desc: "Vues jour, semaine et mois avec colonnes par collaborateur ou par cabine. Les réservations en ligne arrivent dans le même agenda.",
        highlights: [
          "Colonnes collaborateurs et cabines",
          "Glisser-déposer",
          "Synchronisé avec la réservation en ligne",
        ],
      },
      {
        href: "/en/online-booking",
        icon: Link2,
        color: "text-rose-600",
        bg: "bg-rose-50",
        title: "Réservation en ligne",
        desc: "Votre propre page de réservation avec disponibilités en temps réel. Aucune commission de place de marché. Les confirmations partent automatiquement.",
        highlights: ["Lien de réservation 24 h/24", "Sans commission", "Acompte en option"],
      },
      {
        href: "/en/client-records",
        icon: Users,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        title: "Fiches clients",
        desc: "Historique, notes, formulaires et photos sur une seule fiche que toute l'équipe peut consulter avant la visite.",
        highlights: ["Fiches consultables", "Formulaires sur la fiche", "Visibles par l'équipe"],
      },
      {
        href: "/en/forms",
        icon: ClipboardCheck,
        color: "text-orange-600",
        bg: "bg-orange-50",
        title: "Questionnaire et consentement",
        desc: "Envoyez questionnaires et formulaires de consentement avant le rendez-vous. Vos clients les remplissent sur leur téléphone, signature électronique comprise.",
        highlights: ["Envoi avant l'arrivée", "Signature électronique", "Enregistré sur la fiche"],
      },
      {
        href: "/en/treatment-documentation",
        icon: FileText,
        color: "text-blue-600",
        bg: "bg-blue-50",
        title: "Documentation des soins",
        desc: "Notes de séance, paramètres et photos avant/après rattachés à la visite. Dictez vos notes à voix haute et affinez-les si besoin avec l'IA.",
        highlights: ["Notes et paramètres", "Dictée vocale", "Photos avant/après"],
      },
      {
        href: "/en/messaging",
        icon: Bell,
        color: "text-purple-600",
        bg: "bg-purple-50",
        title: "Rappels et suivi",
        desc: "Rappels automatiques par WhatsApp et e-mail avant les rendez-vous, et messages de suivi après les soins. Les délais sont paramétrables.",
        highlights: ["WhatsApp et e-mail", "Confirmations de réservation", "Messages de relance"],
      },
      {
        href: "/en/integrations",
        icon: Plug,
        color: "text-sky-600",
        bg: "bg-sky-50",
        title: "Intégrations",
        desc: "Synchronisez Treatflow avec les outils que vous utilisez déjà, dont Google Agenda et Zapier.",
        highlights: ["Google Agenda", "Zapier", "Moins de doubles saisies"],
      },
      {
        href: "/en/shop",
        icon: ShoppingBag,
        color: "text-amber-600",
        bg: "bg-amber-50",
        title: "Boutique et stock",
        desc: "Vendez vos produits de revente en plus des soins et gérez le stock dans le même espace.",
        highlights: ["Vente de produits", "Gestion du stock", "Lié au client"],
      },
      {
        href: "/en/vouchers",
        icon: Gift,
        color: "text-violet-600",
        bg: "bg-violet-50",
        title: "Bons cadeaux",
        desc: "Vendez et encaissez des bons cadeaux, soldes restants compris, sans tableur à part.",
        highlights: ["Vente et utilisation", "Solde restant", "Durée de validité"],
      },
      {
        href: "/en/studio-website",
        icon: Globe,
        color: "text-teal-600",
        bg: "bg-teal-50",
        title: "Site web de l'institut",
        desc: "Un site relié à votre page de réservation Treatflow : les visiteurs réservent au lieu de simplement regarder.",
        highlights: ["Pensé pour le mobile", "Réservation intégrée", "Conçu pour les instituts"],
      },
    ],
    learnMore: "En savoir plus",
    stepLabel: (n: number) => `Étape ${n}`,
    showCheckoutSection: false,
    checkoutTitle: "",
    checkoutText: "",
    industriesTitle: "À qui s'adressent ces fonctionnalités",
    industriesSubtitle: "Le même logiciel, adapté à la façon de travailler de chaque métier.",
    industries: [
      { href: "/en/beauty-salon-software", label: "Instituts de beauté" },
      { href: "/en/aesthetic-clinic-software", label: "Cliniques esthétiques" },
      { href: "/en/laser-hair-removal-software", label: "Épilation laser" },
      { href: "/en/permanent-makeup-software", label: "Maquillage permanent" },
      { href: "/en/lash-studio-software", label: "Extensions de cils" },
      { href: "/en/nail-salon-software", label: "Ongleries" },
      { href: "/en/massage-software", label: "Massage et bien-être" },
      { href: "/en/spa-wellness-software", label: "Spa" },
    ],
    relatedTitle: "Pages associées",
    relatedLinks: [
      { href: "/en/pricing", label: "Tarifs" },
      { href: "/en/software-comparison", label: "Comparatif de logiciels" },
      { href: "/en/treatflow-vs-fresha", label: "Treatflow vs Fresha" },
      { href: "/en/treatflow-vs-treatwell", label: "Treatflow vs Treatwell" },
    ],
    faqs: [
      {
        question: "Quelles fonctionnalités Treatflow propose-t-il ?",
        answer:
          "Treatflow comprend un agenda, la prise de rendez-vous en ligne sans commission, des fiches clients, des questionnaires et formulaires de consentement numériques, la documentation des soins avec photos et dictée vocale, des rappels, des intégrations, une boutique, des bons cadeaux et, en option, un site web pour votre institut.",
      },
      {
        question: "Treatflow est-il un logiciel tout-en-un ou seulement un outil de réservation ?",
        answer:
          "Treatflow est un logiciel pour votre institut, pas une place de marché. Réservations, fiches, formulaires, documentation et suivi sont réunis dans un seul système : l'équipe ne passe plus d'une application à l'autre.",
      },
      {
        question: "Puis-je tester toutes les fonctionnalités avant de payer ?",
        answer:
          "Oui. Vous pouvez démarrer un essai gratuit de 14 jours sans carte bancaire. Résiliable à tout moment.",
      },
    ],
    faqTitle: "Questions fréquentes",
    faqBadge: "FAQ",
    bottomTitle: "Prêt à gérer tout votre institut au même endroit ?",
    bottomText: "Démarrez votre essai gratuit – sans carte bancaire, résiliable à tout moment.",
  },

  comparisons: {
    "treatflow-vs-fresha": {
      competitor: "Fresha",
      title: "Treatflow vs Fresha",
      description:
        "Treatflow ou Fresha pour votre institut de beauté : un logiciel avec documentation des soins et consentements, face à un outil de réservation gratuit financé par les paiements. Comparatif honnête.",
      intro:
        "Fresha est très utilisé comme outil de réservation gratuit. Treatflow est un logiciel payant pour votre institut : vous gardez vos clients, payez un abonnement fixe et documentez soins et consentements au même endroit. Aucune commission de place de marché.",
      rows: [
        {
          feature: "Modèle économique",
          treatflow: "SaaS, prix mensuel fixe",
          competitor: "Base gratuite, rémunérée via les paiements",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Commission sur les réservations",
          treatflow: "Aucune",
          competitor: "Pas de commission de place de marché, frais de paiement possibles",
          treatflowOk: true,
          competitorOk: true,
        },
        {
          feature: "Propriété des données clients",
          treatflow: "L'institut est propriétaire des fiches",
          competitor: "Dépend de l'usage de la plateforme",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Formulaires de consentement et questionnaires",
          treatflow: "Intégrés, signés, enregistrés sur la fiche",
          competitor: "Limités / la documentation esthétique n'est pas sa priorité",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Documentation des soins",
          treatflow: "Notes, paramètres, photos avant/après",
          competitor: "Pas un outil de documentation",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Tarifs",
          treatflow: "Dès 39 €/mois, transparents",
          competitor: "Accès gratuit, coûts liés aux paiements",
          treatflowOk: true,
          competitorOk: true,
        },
        {
          feature: "Hébergement",
          treatflow: "Serveurs dans l'UE, conforme au RGPD",
          competitor: "Produit international",
          treatflowOk: true,
          competitorOk: false,
        },
      ],
      faqs: [
        {
          q: "Fresha est-il vraiment gratuit ?",
          a: "La partie réservation peut être gratuite. Fresha se rémunère généralement sur les paiements par carte et les produits complémentaires. Votre coût réel dépend donc de votre chiffre d'affaires, et non d'un abonnement publié.",
        },
        {
          q: "Quelle est la différence entre Treatflow et Fresha ?",
          a: "Treatflow est un logiciel indépendant pour votre institut, avec agenda, fiches clients, formulaires de consentement et documentation des soins. Fresha est d'abord un outil de réservation gratuit. Treatflow ne prélève aucune commission sur les réservations.",
        },
        {
          q: "Fresha permet-il de documenter les soins d'une clinique esthétique ?",
          a: "Fresha n'est pas conçu pour une documentation des soins détaillée avec photos. Treatflow enregistre paramètres, notes et photos sur chaque visite.",
        },
        {
          q: "Puis-je passer de Fresha à Treatflow ?",
          a: "Oui. Nous vous aidons à migrer vos données clients. Vous pouvez tester Treatflow gratuitement pendant 14 jours, sans carte bancaire.",
        },
      ],
      ctaTitle: "Vous préférez payer un logiciel plutôt qu'une part de chaque visite ?",
      keywords: [
        "alternative à Fresha",
        "Treatflow vs Fresha",
        "Fresha avis institut de beauté",
        "logiciel institut de beauté sans commission",
      ],
    },
    "treatflow-vs-treatwell": {
      competitor: "Treatwell",
      title: "Treatflow vs Treatwell",
      description:
        "Treatflow ou Treatwell : gardez vos clients avec un abonnement mensuel, ou soyez référencé sur une place de marché qui prend une commission. Comparatif pour instituts de beauté.",
      intro:
        "Treatwell est une place de marché. Treatflow est votre propre logiciel. Si vous cherchez de la visibilité sur une plateforme, Treatwell peut vous aider. Si vous voulez maîtriser la relation client et éviter les commissions, Treatflow est plus adapté.",
      rows: [
        {
          feature: "Modèle",
          treatflow: "Le logiciel de votre institut",
          competitor: "Place de marché / plateforme",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Commission",
          treatflow: "0 % par réservation",
          competitor: "Commission sur les réservations de la place de marché",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Données clients",
          treatflow: "Restent dans le compte de votre institut",
          competitor: "Partagées avec la plateforme",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Réservation en ligne",
          treatflow: "Votre lien, votre marque",
          competitor: "Fiche sur la plateforme et outils",
          treatflowOk: true,
          competitorOk: true,
        },
        {
          feature: "Formulaires et documentation",
          treatflow: "Au cœur du produit",
          competitor: "Pas la mission principale d'une place de marché",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Prix",
          treatflow: "SaaS de 39 à 59 €/mois",
          competitor: "À la commission",
          treatflowOk: true,
          competitorOk: false,
        },
      ],
      faqs: [
        {
          q: "Treatflow est-il une alternative à Treatwell sans commission ?",
          a: "Oui, si vous cherchez un logiciel plutôt qu'une place de marché. Vous partagez votre propre lien de réservation et payez un abonnement mensuel au lieu d'une commission par réservation.",
        },
        {
          q: "Treatwell propose-t-il des formulaires de consentement et des notes de soin ?",
          a: "Les places de marché se concentrent sur la visibilité et la réservation. Treatflow est construit autour des fiches clients, des formulaires et de la documentation, en plus de l'agenda.",
        },
        {
          q: "Puis-je utiliser les deux ?",
          a: "Certains instituts gardent une place de marché pour attirer de nouveaux clients et gèrent leur activité dans Treatflow. Treatflow ne nécessite aucun compte sur une place de marché.",
        },
      ],
      ctaTitle: "Vos réservations sur votre propre lien, sans commission de place de marché",
      keywords: [
        "alternative à Treatwell",
        "Treatflow vs Treatwell",
        "Treatwell commission institut",
        "logiciel de réservation sans commission",
      ],
    },
    "software-comparison": {
      competitor: "Outils classiques",
      title: "Comparatif de logiciels pour institut de beauté",
      description:
        "Comparez les logiciels pour institut de beauté : place de marché, outil de réservation gratuit ou Treatflow. Sans commission, fiches conformes au RGPD, consentements et documentation des soins.",
      intro:
        "La plupart des instituts combinent un agenda, un widget de réservation, des formulaires papier et des dossiers photo. Treatflow remplace tout cela par une seule application : rendez-vous, réservation en ligne sans commission, fiches clients, formulaires et documentation des soins.",
      rows: [
        {
          feature: "Tout-en-un",
          treatflow: "Agenda, fiches, formulaires, documentation",
          competitor: "Souvent plusieurs outils",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Commission",
          treatflow: "Aucune",
          competitor: "Les places de marché prennent une part",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "RGPD / hébergement dans l'UE",
          treatflow: "Serveurs dans l'UE",
          competitor: "Variable",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Formulaires de consentement",
          treatflow: "Numériques, sur la fiche client",
          competitor: "Papier ou module payant",
          treatflowOk: true,
          competitorOk: false,
        },
        {
          feature: "Essai",
          treatflow: "14 jours, sans carte bancaire",
          competitor: "Variable",
          treatflowOk: true,
          competitorOk: true,
        },
      ],
      faqs: [
        {
          q: "De quel logiciel un institut de beauté a-t-il vraiment besoin ?",
          a: "D'un agenda synchronisé avec la réservation en ligne, d'une fiche client, d'un questionnaire et d'un consentement, et d'un moyen de documenter les soins. Treatflow est conçu autour de cet ensemble.",
        },
        {
          q: "Quel est le meilleur logiciel d'institut de beauté en Europe sans commission ?",
          a: "Treatflow est un logiciel SaaS autrichien, hébergé dans l'UE, sans commission de place de marché. Formules dès 39 €/mois.",
        },
      ],
      ctaTitle: "Comparez Treatflow aux outils que vous utilisez déjà",
      keywords: [
        "comparatif logiciel institut de beauté",
        "meilleur logiciel institut de beauté",
        "logiciel esthéticienne comparatif",
        "logiciel de gestion institut de beauté",
      ],
    },
  },

  about: {
    metaTitle: "À propos de Treatflow",
    metaDescription:
      "Treatflow est le logiciel tout-en-un pour instituts de beauté. Conçu en Autriche, conforme au RGPD et hébergé dans l'UE.",
    eyebrow: "À propos",
    title: "Un logiciel qui rend du temps aux instituts",
    subtitle:
      "Treatflow est né d'un constat simple : les professionnels de la beauté passent bien trop de temps sur l'administratif au lieu de s'occuper de leurs clients. Nous avons voulu changer cela – avec une application claire qui réunit rendez-vous, clients, formulaires et documentation des soins.",
    valuesTitle: "Nos valeurs",
    values: [
      {
        title: "Pensé pour les instituts",
        desc: "Nous développons Treatflow main dans la main avec des professionnels de la beauté – chaque fonctionnalité répond à un vrai problème du quotidien.",
      },
      {
        title: "La confidentialité avant tout",
        desc: "Conforme au RGPD et hébergé sur des serveurs européens. Vos données et celles de vos clients restent protégées.",
      },
      {
        title: "Un accompagnement personnalisé",
        desc: "De vraies personnes qui connaissent le secteur de la beauté – et qui vous aident à démarrer et à tirer le meilleur de Treatflow.",
      },
      {
        title: "Made in Austria",
        desc: "Développé et accompagné en Europe, pour les instituts de toute l'Europe et d'ailleurs.",
      },
    ],
    ctaLabel: "Essayer gratuitement",
  },

  contact: {
    metaTitle: "Contacter Treatflow",
    metaDescription:
      "Contactez l'équipe Treatflow. Nous aidons les instituts de beauté et les cliniques esthétiques à digitaliser rendez-vous, formulaires et documentation des soins.",
    title: "Contact",
    body: "Écrivez-nous à hello@treatflow.io ou démarrez dès maintenant votre essai gratuit.",
    cta: "Essayer gratuitement",
  },

  privacy: {
    metaTitle: "Politique de confidentialité",
    metaDescription:
      "Politique de confidentialité de Treatflow : traitement conforme au RGPD, hébergement dans l'UE à Francfort, vos droits et la gestion des données des instituts et du site.",
    title: "Politique de confidentialité",
    intro:
      "Treatflow est un logiciel pour instituts de beauté et cliniques esthétiques. Nous traitons les données personnelles conformément au RGPD. La déclaration de confidentialité en allemand, disponible sur /datenschutz, constitue la version juridiquement complète et fait foi. Cette page en français résume les points sur lesquels les instituts et leurs clients nous interrogent le plus souvent.",
    sections: [
      {
        heading: "1. Responsable du traitement",
        html: `<p>Responsable du traitement pour ce site web et l'application Treatflow :</p>
<p><strong>Treatflow</strong><br/>Olcay Elikci<br/>Bahnhofstrasse 17<br/>5500 Bischofshofen, Austria<br/>E-mail : <a href="mailto:hello@treatflow.io">hello@treatflow.io</a></p>`,
      },
      {
        heading: "2. Hébergement des données",
        html: `<p>Treatflow est hébergé sur des serveurs situés dans l'UE (Francfort). Les connexions sont chiffrées en SSL. Nous effectuons des sauvegardes quotidiennes. L'hébergement est conçu pour le RGPD. Nous ne vendons pas les données clients et nous ne sommes pas une place de marché de réservation.</p>`,
      },
      {
        heading: "3. Données traitées",
        html: `<p><strong>Visiteurs du site :</strong> adresse IP, heure d'accès, navigateur, site de provenance – nécessaires pour fournir et sécuriser le site.</p>
<p><strong>Contact et inscription à l'essai :</strong> nom, e-mail et informations sur l'institut que vous nous transmettez.</p>
<p><strong>Dans l'application (données de l'institut) :</strong> fiches clients, rendez-vous, formulaires, signatures, notes de soin, photos et données de facturation enregistrées par l'institut. L'institut est en général responsable du traitement des données de ses clients ; Treatflow agit en tant que sous-traitant dans le cadre d'un accord de traitement des données.</p>`,
      },
      {
        heading: "4. Finalités et bases juridiques",
        html: `<ul>
<li>Fourniture du site web et du logiciel (contrat / intérêt légitime)</li>
<li>Compte, facturation et support (contrat)</li>
<li>Obligations légales (fiscalité, comptabilité)</li>
<li>Cookies d'analyse et de marketing facultatifs, uniquement avec votre consentement</li>
</ul>`,
      },
      {
        heading: "5. Vos droits",
        html: `<p>Selon la législation applicable, vous pouvez demander l'accès à vos données, leur rectification, leur effacement, la limitation du traitement, la portabilité, et vous opposer au traitement. Vous pouvez introduire une réclamation auprès d'une autorité de contrôle, par exemple la CNIL en France. Autorité autrichienne compétente : Datenschutzbehörde. Contactez-nous à hello@treatflow.io.</p>`,
      },
      {
        heading: "6. Intégration Google Agenda",
        html: `<p>Les instituts peuvent connecter, de manière facultative, leur compte Google dans l'application Treatflow (app.treatflow.io) sous <strong>Applications → Google Agenda</strong>. La connexion est volontaire et n'est établie que lorsqu'un utilisateur accorde activement l'accès via l'écran de consentement de Google.</p>
<p><strong>Données consultées et finalités :</strong></p>
<ul>
<li><strong>Profil de base (openid, e-mail, profil) :</strong> pour associer le compte Google au compte Treatflow et afficher le compte Google connecté.</li>
<li><strong>Liste des agendas (calendar.readonly) :</strong> pour afficher vos agendas afin que vous puissiez choisir celui à synchroniser.</li>
<li><strong>Événements de l'agenda (calendar.events) :</strong> pour créer, modifier et supprimer les rendez-vous et plages bloquées de Treatflow sous forme d'événements dans l'agenda choisi, et pour lire les événements de cet agenda afin de les afficher dans Treatflow comme créneaux bloqués ou rendez-vous (synchronisation bidirectionnelle).</li>
</ul>
<p><strong>Données conservées :</strong> jetons d'accès et d'actualisation (chiffrés en AES), identifiant et adresse e-mail du compte Google, identifiant et nom de l'agenda choisi, identifiants, horaires et titres des événements synchronisés, ainsi que les journaux de synchronisation. Toutes les données sont stockées dans notre base de données dans l'UE (Supabase, Francfort).</p>
<p><strong>Utilisation et partage :</strong> les données utilisateur Google sont utilisées exclusivement pour assurer la synchronisation de l'agenda dans Treatflow. Nous ne les transmettons pas à des tiers, ne les vendons pas et ne les utilisons ni à des fins publicitaires ni pour entraîner des modèles d'intelligence artificielle. Aucune personne ne consulte ces données, sauf avec votre consentement explicite (par ex. pour une demande d'assistance), lorsque cela est nécessaire pour la sécurité ou l'examen d'abus, ou lorsque la loi l'exige.</p>
<p><strong>Révocation de l'accès et suppression :</strong> vous pouvez vous déconnecter à tout moment dans Treatflow sous Applications → Google Agenda avec « Déconnecter » ; les jetons enregistrés sont alors supprimés. Vous pouvez également révoquer l'accès via <a href="https://myaccount.google.com/permissions">https://myaccount.google.com/permissions</a>.</p>
<p>L'utilisation et le transfert vers toute autre application, par Treatflow, des informations reçues des API Google respecteront le <a href="https://developers.google.com/terms/api-services-user-data-policy">Règlement sur les données utilisateur des services d'API Google</a> (Google API Services User Data Policy), y compris les exigences d'utilisation limitée (Limited Use). Texte original en anglais :</p>
<p lang="en"><em>Treatflow's use and transfer to any other app of information received from Google APIs will adhere to the <a href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</a>, including the Limited Use requirements.</em></p>`,
      },
      {
        heading: "7. Version allemande complète",
        html: `<p>Pour les cookies, les sous-traitants, les durées de conservation et le texte juridique complet, consultez la <a href="/datenschutz">politique de confidentialité en allemand</a>, qui fait foi.</p>`,
      },
    ],
  },

  terms: {
    metaTitle: "Conditions d'utilisation",
    metaDescription:
      "Conditions d'utilisation de Treatflow : SaaS pour instituts de beauté, tarifs transparents, 14 jours d'essai, aucune commission sur les réservations. Les CGV allemandes complètes s'appliquent.",
    title: "Conditions d'utilisation",
    intro:
      "Treatflow est un produit SaaS payant pour la gestion des instituts. En créant un compte, vous acceptez ces conditions. Les CGV allemandes (AGB), disponibles sur /agb, constituent le contrat juridiquement contraignant. Cette page en français explique les points commerciaux pour les instituts hors d'Allemagne.",
    sections: [
      {
        heading: "1. Le service",
        html: `<p>Treatflow fournit un logiciel web pour les rendez-vous, la réservation en ligne, les fiches clients, les formulaires, la documentation des soins et d'autres outils de gestion d'institut. Ce n'est pas une place de marché et aucune commission n'est prélevée sur les réservations.</p>`,
      },
      {
        heading: "2. Formules, essai et résiliation",
        html: `<p>Les formules démarrent à 39 €/mois (Basic) et 59 €/mois (Booking), hors TVA. L'essai de 14 jours ne nécessite pas de carte bancaire. Les formules mensuelles peuvent être résiliées à la fin de la période de facturation.</p>`,
      },
      {
        heading: "3. Responsabilité de l'institut",
        html: `<p>Vous êtes responsable des données que vous saisissez, de l'utilisation correcte des formulaires et de la documentation, ainsi que du respect des règles applicables dans votre pays en matière d'esthétique, de santé et de fiscalité. Treatflow ne remplace pas un conseil juridique ou médical.</p>`,
      },
      {
        heading: "4. Disponibilité et support",
        html: `<p>Nous visons une haute disponibilité et proposons un support par e-mail (support prioritaire avec la formule Booking). Nous pouvons faire évoluer le produit. Les mises à jour de sécurité critiques peuvent être appliquées sans préavis.</p>`,
      },
      {
        heading: "5. Conditions allemandes contraignantes",
        html: `<p>Les conditions contractuelles complètes sont les <a href="/agb">CGV allemandes (AGB)</a>. Questions : hello@treatflow.io.</p>`,
      },
    ],
  },
};
