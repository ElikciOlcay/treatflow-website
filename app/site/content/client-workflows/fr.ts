import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsFr: ClientWorkflowsContent = {
  meta: {
    title: "Parcours clients automatisés pour instituts de beauté",
    description:
      "Des automatisations en plusieurs étapes avec Treatflow : suivi après soin, relance et rappels avec délais, conditions et envoi par e-mail – sans relances manuelles.",
    keywords: [
      "parcours clients institut de beauté",
      "automatisation marketing institut",
      "suivi après soin automatique",
      "relancer clients institut de beauté",
      "relance automatique clientes",
      "Treatflow parcours",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Parcours clients automatisés pour instituts de beauté",
      description:
        "Des automatisations en plusieurs étapes : suivi après soin, relance et rappels avec délais, conditions et envoi par e-mail.",
    },
  },
  breadcrumb: "Parcours clients",
  hero: {
    eyebrow: "Parcours clients",
    eyebrowIcon: "workflow",
    title: { before: "Des automatisations en ", highlight: "plusieurs étapes" },
    description:
      "Créez vos séquences de suivi après soin, de relance et de rappel – avec délais, conditions et e-mails automatiques.",
    chips: ["Éditeur visuel", "E-mails automatiques", "S'arrête en cas de nouvelle réservation"],
    secondaryCta: { label: "Voir les rappels", href: { page: "messaging" } },
    capsules: [
      {
        question: "Comment automatiser le suivi après soin dans mon institut de beauté ?",
        answer:
          "Avec les parcours clients de Treatflow, vous créez des séquences en plusieurs étapes : par exemple, attendre 2 jours après le soin, prendre des nouvelles, vérifier si la cliente a déjà repris rendez-vous et, seulement dans le cas contraire, lui envoyer une invitation pour le prochain rendez-vous. Vous gardez le contact sans avoir à relancer qui que ce soit à la main.",
      },
    ],
    image: {
      src: "/images/mockups/kunden-workflows.jpg",
      alt: "Éditeur de parcours Treatflow avec déclencheur, délai et message",
    },
  },
  understand: {
    title: "Des séquences qui avancent toutes seules",
    description:
      "Au lieu de rappels isolés, vous créez des séquences – conçues pour le suivi après soin, la relance et les rappels en plusieurs étapes.",
    items: [
      {
        icon: "heart",
        title: "Un suivi après soin sans effort",
        text: "Demandez automatiquement comment va la peau – et proposez le prochain rendez-vous si votre cliente est intéressée.",
      },
      {
        icon: "bell",
        title: "Faire revenir les clients inactifs",
        text: "Après 60 à 90 jours sans visite, une invitation à revenir à l'institut est envoyée – personnelle et au bon moment.",
      },
      {
        icon: "git-branch",
        title: "Des embranchements intelligents",
        text: "Vérifiez si une nouvelle réservation a été faite. Si oui, le parcours s'arrête – pas de messages en double.",
      },
    ],
  },
  howItWorks: {
    description: "Votre premier parcours en trois étapes.",
    steps: [
      { title: "Choisir un déclencheur", text: "Démarrez par exemple à la fin d'un rendez-vous ou quand une cliente n'est pas venue depuis longtemps." },
      { title: "Relier les étapes", text: "Organisez délais, messages et conditions dans l'éditeur visuel." },
      { title: "Activer", text: "Treatflow exécute la séquence et envoie les messages par e-mail." },
    ],
  },
  cards: {
    title: "Ce que vous obtenez",
    description: "Tout pour une communication client en plusieurs étapes – claire et maîtrisée.",
    items: [
      { icon: "workflow", title: "Éditeur visuel", text: "Déclencheur, délais, message et condition par glisser-déposer.", points: ["Vue d'ensemble claire", "Plusieurs étapes", "Facile à modifier"] },
      { icon: "message-circle", title: "Messages par e-mail", text: "Chaque étape arrive directement dans la boîte de réception de vos clients.", points: ["E-mail", "Votre propre texte", "Envoi automatique"] },
      { icon: "clock", title: "Délais", text: "Des jours ou des heures entre les étapes – au rythme de votre institut.", points: ["Suivi au bon moment", "Relance", "Rien à retenir"] },
      { icon: "git-branch", title: "Conditions", text: "Vérifiez par exemple les nouvelles réservations et arrêtez la séquence à temps.", points: ["Pas d'e-mails en double", "Embranchements intelligents", "Messages plus pertinents"] },
      { icon: "heart", title: "Séquences de suivi après soin", text: "D'abord des nouvelles, puis éventuellement le prochain rendez-vous – seulement quand c'est pertinent.", points: ["Plus de fidélité", "Moins de rendez-vous manqués ensuite", "Plus de rendez-vous de suivi"] },
      { icon: "zap", title: "Relance", text: "Réinvitez automatiquement vos clients après une longue absence.", points: ["60 à 90 jours", "Personnalisée", "Sans listes interminables"] },
    ],
  },
  faq: {
    title: "Questions fréquentes sur les parcours clients",
    items: [
      {
        question: "Que sont les parcours clients dans Treatflow ?",
        answer:
          "Les parcours clients sont des automatisations en plusieurs étapes : vous créez des séquences avec un déclencheur, des délais, des messages et des conditions. Le suivi après soin, la relance et les rappels se font alors automatiquement – sans écrire chaque message à la main.",
      },
      {
        question: "Quelle différence entre les parcours et de simples rappels ?",
        answer:
          "Les messages simples (comme les rappels de rendez-vous) se composent d'un déclencheur et d'un message. Les parcours servent aux séquences avec plusieurs étapes et embranchements – par exemple : prendre des nouvelles après le soin, attendre, vérifier si une nouvelle réservation a été faite et seulement alors envoyer un second message.",
      },
      {
        question: "Par quel canal les messages des parcours sont-ils envoyés ?",
        answer:
          "Les étapes des parcours sont envoyées par e-mail. Les rappels de rendez-vous restent disponibles dans les messages simples.",
      },
      {
        question: "Un parcours peut-il s'arrêter si le client reprend rendez-vous ?",
        answer:
          "Oui. Vous pouvez définir des conditions, par exemple vérifier si une nouvelle réservation a été faite depuis le dernier rendez-vous. Si c'est le cas, la séquence s'arrête – vous gardez le contact sans écrire deux fois.",
      },
      {
        question: "Par quels parcours commencer ?",
        answer:
          "Les plus utilisés : le suivi 1 à 2 jours après le soin, la relance après 60 à 90 jours sans visite et un suivi en plusieurs étapes avec un second message uniquement si aucun rendez-vous de suivi n'a encore été pris.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Rappels", description: "E-mails avant le rendez-vous" },
      { href: { page: "appointment-calendar" }, title: "Agenda des rendez-vous", description: "Rendez-vous et automatisations réunis" },
      { href: { page: "client-records" }, title: "Fiches clients", description: "Historique et relances" },
    ],
  },
  cta: {
    title: "Prêt pour des parcours clients en plusieurs étapes ?",
    description: "Essayez gratuitement pendant 14 jours – suivi après soin et relance sans effort manuel.",
    secondary: { label: "Voir les rappels", href: { page: "messaging" } },
  },
};
