import type { IntegrationsContent } from "./types";

export const integrationsFr: IntegrationsContent = {
  meta: {
    title: "Intégrations et applications pour votre institut de beauté",
    description:
      "Connectez Treatflow à Google Agenda, à Zapier et à des assistants IA comme Claude ou ChatGPT, et encaissez en ligne avec Treatflow Pay – synchronisation de l'agenda, automatisations et paiements sur une seule plateforme.",
    keywords: [
      "intégrations Treatflow",
      "intégrations logiciel institut de beauté",
      "synchronisation Google Agenda institut",
      "Zapier institut de beauté",
      "logiciel institut de beauté ChatGPT",
      "Claude MCP logiciel de gestion",
      "paiement en ligne institut de beauté",
      "synchroniser son agenda institut",
    ],
  },
  schema: { id: "integrationen" },
  breadcrumb: "Intégrations",
  hero: {
    eyebrow: "Intégrations",
    eyebrowIcon: "plug",
    title: { before: "Connectez vos applis, vos ", highlight: "données", after: " restent synchronisées" },
    description:
      "Google Agenda, Zapier, assistants IA et Treatflow Pay – une seule connexion, et tout reste à jour partout.",
    chips: ["Google Agenda", "Zapier", "Assistants IA (MCP)", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Voir l'agenda", href: { page: "appointment-calendar" } },
    tiles: [
      { name: "Google", category: "Agenda", gradient: "from-emerald-500 to-teal-600", icon: "calendar" },
      { name: "Zapier", category: "Automatisation", gradient: "from-orange-500 to-amber-600", icon: "zap" },
      { name: "Claude et ChatGPT", category: "Assistants IA", gradient: "from-blue-500 to-indigo-600", icon: "bot" },
      { name: "Treatflow Pay", category: "Paiement en ligne", gradient: "from-violet-500 to-purple-600", icon: "wallet", feature: "pay" },
    ],
  },
  understand: {
    title: "À quoi servent les intégrations ?",
    description: "Fini la double saisie – vos données circulent entre vos outils.",
    items: [
      {
        icon: "refresh",
        title: "Moins de double saisie",
        text: "Saisissez clients et rendez-vous une seule fois – votre agenda et vos outils connectés restent à jour.",
      },
      {
        icon: "workflow",
        title: "Processus automatiques",
        text: "Les entrées d'agenda et les scénarios Zapier tournent en arrière-plan.",
      },
      {
        icon: "shield-check",
        title: "Conforme au RGPD",
        text: "Connexions sécurisées et traitement des données conforme aux règles européennes. Les données médicales ne quittent jamais Treatflow.",
      },
    ],
  },
  howItWorks: {
    description: "Connecté en trois étapes – sans connaissances techniques.",
    steps: [
      { title: "Choisir l'application", text: "Sélectionnez l'intégration souhaitée dans Paramètres de l'institut > Applications." },
      { title: "Connecter votre compte", text: "Connectez-vous une seule fois chez le fournisseur – par exemple Google, Zapier, Claude ou ChatGPT." },
      { title: "Synchronisation automatique", text: "Rendez-vous, clients et scénarios fonctionnent désormais ensemble." },
    ],
  },
  cards: {
    title: "Ces applications sont intégrées",
    description: "De la synchronisation de l'agenda aux automatisations, jusqu'aux assistants IA et au paiement en ligne.",
    items: [
      {
        icon: "calendar",
        title: "Google Agenda",
        text: "Synchronisation bidirectionnelle : Treatflow et Google restent alignés en temps réel.",
        points: ["Synchronisation bidirectionnelle", "Aucune double réservation", "Agenda perso et pro séparés"],
      },
      {
        icon: "wallet",
        title: "Treatflow Pay",
        text: "Acompte ou paiement intégral lors des réservations en ligne – traités en toute sécurité via Stripe.",
        points: ["Acomptes", "Paiement intégral à l'avance", "2,69 % en toute transparence"],
        feature: "pay",
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "Connectez plus de 7 000 applications – scénarios pour les nouveaux rendez-vous et formulaires.",
        points: ["Plus de 7 000 applications", "Webhooks", "Sans code"],
      },
      {
        icon: "bot",
        title: "Assistants IA (MCP)",
        text: "Connectez Claude, ChatGPT et d'autres assistants, et posez vos questions sur les rendez-vous, les clients ou le chiffre d'affaires.",
        points: ["Lecture seule par défaut", "Les données médicales restent dans Treatflow", "Accès révocable à tout moment"],
      },
    ],
  },
  faq: {
    title: "Questions fréquentes sur les intégrations",
    items: [
      {
        question: "Quelles applications puis-je connecter à Treatflow ?",
        answer:
          "Treatflow se connecte directement à Google Agenda (synchronisation des rendez-vous), à Treatflow Pay (paiement en ligne) et à des assistants IA comme Claude ou ChatGPT via le Model Context Protocol (MCP). Avec Zapier, vous accédez en plus à plus de 7 000 applications, comme Google Sheets, Mailchimp ou votre CRM.",
      },
      {
        question: "Comment synchroniser mes rendez-vous avec Google Agenda ?",
        answer:
          "Vous connectez votre compte Google une seule fois dans Paramètres de l'institut > Applications. Les rendez-vous sont ensuite synchronisés automatiquement dans les deux sens : les réservations faites dans Treatflow apparaissent dans votre Google Agenda et inversement – vous évitez ainsi les doubles réservations.",
      },
      {
        question: "Puis-je utiliser Treatflow avec ChatGPT ou Claude ?",
        answer:
          "Oui. Ajoutez Treatflow comme connecteur dans votre assistant IA et connectez-vous avec votre compte Treatflow. Vous pouvez ensuite poser des questions sur les rendez-vous, les créneaux libres, les clients ou le chiffre d'affaires. L'accès est en lecture seule par défaut ; si vous l'autorisez, l'assistant peut aussi créer et déplacer des rendez-vous, chaque modification étant enregistrée. Les fiches de soin, les formulaires et les photos ne sont jamais partagés.",
      },
      {
        question: "À quoi sert l'intégration Zapier ?",
        answer:
          "Avec Zapier, vous automatisez vos propres processus sans programmer. Lors d'un nouveau rendez-vous ou d'un formulaire rempli, Treatflow peut par exemple ajouter une ligne dans Google Sheets, créer un contact dans votre CRM ou déclencher un e-mail.",
      },
      {
        question: "Les clients peuvent-ils payer en ligne lors de la réservation ?",
        answer:
          "Oui. Avec Treatflow Pay, vos clients versent un acompte ou le montant total lors de la réservation en ligne – traité en toute sécurité via Stripe. Vous choisissez pour chaque prestation si le paiement est obligatoire.",
        feature: "pay",
      },
      {
        question: "Les intégrations sont-elles incluses dans toutes les formules ?",
        answer:
          "Les intégrations sont incluses dans la formule Booking. Après votre inscription, vous les trouvez et les activez dans le tableau de bord, sous Paramètres de l'institut > Applications.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Agenda et planning", description: "Tous les rendez-vous au même endroit, toujours synchronisés" },
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Acompte ou paiement intégral", feature: "pay" },
      { href: { page: "online-booking" }, title: "Réservation en ligne", description: "Réservation 24 h/24 avec paiement" },
      { href: { page: "messaging" }, title: "Rappels", description: "Confirmations et rappels automatiques" },
    ],
  },
  cta: {
    title: "Des outils connectés pour votre institut",
    description: "Essayez gratuitement pendant 14 jours – connectez Google Agenda, Zapier et votre assistant IA en quelques minutes.",
    secondary: { label: "Toutes les fonctionnalités", href: { page: "features" } },
  },
};
