import type { ClientRecordsContent } from "./types";

export const clientRecordsFr: ClientRecordsContent = {
  meta: {
    title: "Fiches clients pour institut de beauté : données et historique",
    description:
      "Une gestion clients professionnelle pour votre institut de beauté : historique des soins, notes et photos au même endroit. Conforme au RGPD, hébergé dans l'UE.",
    keywords: [
      "logiciel fiches clients institut de beauté",
      "gestion clients institut",
      "fiches clients numériques",
      "CRM institut de beauté",
      "logiciel historique des soins",
      "RGPD données clients institut",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "kundenverwaltung",
    webPage: {
      name: "Fiches clients pour institut de beauté : données et historique",
      description:
        "Une gestion clients professionnelle pour votre institut de beauté : historique des soins, notes et photos au même endroit. Conforme au RGPD.",
    },
    software: {
      name: "Fiches clients Treatflow",
      description: "Fiches clients numériques pour instituts de beauté avec historique des soins, notes et photos.",
      price: "39",
      currency: "EUR",
    },
  },
  breadcrumb: "Fiches clients",
  hero: {
    eyebrow: "Fiches clients numériques",
    eyebrowIcon: "users",
    title: { before: "Toutes les données clients au même ", highlight: "endroit" },
    description: "Des fiches clients illimitées avec historique, import et recherche. Conforme au RGPD, sur des serveurs dans l'UE.",
    chips: ["Conforme au RGPD", "Import de données", "Clients illimités"],
    secondaryCta: { label: "Formulaires numériques", href: { page: "forms" } },
    capsules: [
      {
        question: "Quelle application choisir pour gérer les clients d'un institut de beauté ?",
        answer:
          "Treatflow propose une gestion clients conçue pour les instituts de beauté : fiches clients numériques, historique des soins, photos et hébergement conforme au RGPD dans l'UE. Toutes les données clients sont accessibles sur ordinateur, tablette et smartphone. Essayez gratuitement pendant 14 jours.",
      },
    ],
    image: {
      src: "/images/mockups/kundenverwaltung-overview.png",
      alt: "Fiches clients Treatflow – vue d'ensemble avec recherche et vue détaillée",
    },
  },
  understand: {
    title: "Toutes les données clients au même endroit",
    description:
      "Une fiche pour chaque client avec coordonnées, historique des soins et photos – accessible à tout moment, sur tous vos appareils.",
    items: [
      {
        icon: "shield",
        title: "Sécurisé et conforme au RGPD",
        text: "Les données de vos clients sont stockées chiffrées sur des serveurs dans l'UE. Les demandes d'accès et de suppression peuvent être traitées à tout moment.",
      },
      {
        icon: "upload",
        title: "Reprenez vos données existantes",
        text: "Vous avez déjà une liste de clients ? Importez-la simplement depuis Excel ou un fichier CSV. Notre équipe vous accompagne dans la migration.",
      },
      {
        icon: "database",
        title: "Clients illimités",
        text: "Que vous ayez 50 ou 5 000 clients – aucune limite et aucun coût supplémentaire par contact.",
      },
    ],
  },
  howItWorks: {
    description: "Trois étapes vers des fiches clients numériques.",
    steps: [
      { title: "Ajouter ou importer vos clients", text: "Créez de nouveaux clients manuellement ou importez votre liste existante depuis Excel ou un fichier CSV. Les doublons sont détectés automatiquement." },
      { title: "Compléter la fiche", text: "Enregistrez coordonnées, allergies, notes et photos dans la fiche. Les formulaires remplis y sont ajoutés automatiquement." },
      { title: "Tout est prêt pour la prochaine visite", text: "Ouvrez la fiche client avant le soin – vous voyez immédiatement ce qui a été fait la dernière fois et à quoi faire attention." },
    ],
  },
  cards: {
    title: "Ce que vous obtenez",
    description: "Des fiches clients numériques sans limite – import, recherche et conformité RGPD compris.",
    items: [
      { icon: "database", title: "Clients illimités", text: "Autant de fiches que votre institut en a besoin – sans supplément par contact.", points: ["Aucune limite de clients", "Toujours rapide", "Sauvegardes automatiques"] },
      { icon: "upload", title: "Import de données", text: "Reprenez vos listes existantes depuis Excel ou un fichier CSV. Accompagnement à la migration inclus.", points: ["Excel et CSV", "Correspondance des champs", "Détection des doublons"] },
      { icon: "shield", title: "Conforme au RGPD", text: "Stockage dans l'UE, chiffrement, accès et suppression sur demande.", points: ["Serveurs dans l'UE", "Chiffré", "Droit à l'effacement"] },
      { icon: "search", title: "Recherche rapide", text: "Retrouvez une fiche par nom, téléphone, e-mail ou soin – en quelques secondes.", points: ["Recherche plein texte", "Filtres", "Tri"] },
      { icon: "camera", title: "Photos et historique", text: "Photos avant/après et soins directement dans la fiche, et non dans des dossiers séparés.", points: ["Photos dans la fiche", "Historique des soins", "Notes"] },
      { icon: "users", title: "Toujours avec vous", text: "Accessible via le navigateur sur smartphone, tablette et ordinateur – aucune application supplémentaire à installer.", points: ["Smartphone", "Tablette en cabine", "Ordinateur"] },
    ],
  },
  faq: {
    title: "Questions fréquentes sur les fiches clients",
    items: [
      {
        question: "Quelle application choisir pour gérer les clients d'un institut de beauté ?",
        answer:
          "Treatflow est un logiciel de gestion clients conçu pour les instituts de beauté. L'application propose des fiches clients numériques, l'historique des soins, des photos, des notes et un stockage des données conforme au RGPD dans l'UE. Essayez gratuitement pendant 14 jours.",
      },
      {
        question: "Que sont des fiches clients numériques pour institut de beauté ?",
        answer:
          "Les fiches clients numériques sont un logiciel qui réunit au même endroit toutes les données clients, l'historique des soins, les photos avant/après et les notes. Contrairement aux fiches papier, elles sont conformes au RGPD, consultables par recherche et accessibles depuis n'importe quel appareil.",
      },
      {
        question: "Les fiches clients numériques sont-elles conformes au RGPD ?",
        answer:
          "Oui. Treatflow stocke toutes les données clients de manière chiffrée sur des serveurs dans l'UE et respecte toutes les exigences du RGPD. Vos clients peuvent consulter leurs données et les faire supprimer à tout moment.",
      },
      {
        question: "Quelles informations doit contenir la fiche client d'un institut ?",
        answer:
          "Une fiche client professionnelle doit contenir les coordonnées, l'historique des soins, les allergies et intolérances, les photos avant/après, les formulaires remplis (questionnaire de santé, consentement), les notes et l'historique des rendez-vous.",
      },
      {
        question: "Puis-je importer mes données clients existantes ?",
        answer:
          "Oui. Treatflow permet d'importer des données clients depuis des fichiers Excel et CSV. Notre équipe d'accompagnement vous aide gratuitement à transférer vos données depuis votre ancien système.",
      },
      {
        question: "Treatflow peut-il envoyer des messages automatiques à mes clients ?",
        answer:
          "Oui. Treatflow intègre l'automatisation des messages. Vous pouvez configurer des rappels de rendez-vous automatiques, des messages d'anniversaire et des messages de suivi après les soins pour renforcer la fidélité de vos clients – sans effort supplémentaire.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Agenda des rendez-vous", description: "La fiche client directement depuis le rendez-vous" },
      { href: { page: "forms" }, title: "Formulaires", description: "Les questionnaires arrivent dans la fiche client" },
      { href: { page: "treatment-documentation" }, title: "Documentation", description: "L'historique dans la fiche client" },
    ],
  },
  cta: {
    title: "Prêt pour des fiches clients bien organisées ?",
    description: "Essayez gratuitement pendant 14 jours – sans carte bancaire. Import, historique et conformité RGPD dans une seule application.",
    secondary: { label: "Formulaires numériques", href: { page: "forms" } },
  },
};
