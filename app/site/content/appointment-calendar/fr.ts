import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarFr: AppointmentCalendarContent = {
  meta: {
    title: "Agenda pour institut de beauté : équipe et cabines",
    description:
      "Logiciel de prise de rendez-vous pour instituts de beauté et cliniques esthétiques : un agenda avec une colonne par collaborateur et par cabine, réservation en ligne, glisser-déposer et rappels automatiques par e-mail. Sans commission, 14 jours d'essai gratuit.",
    keywords: [
      "agenda institut de beauté",
      "logiciel de planning institut",
      "logiciel prise de rendez-vous spa",
      "agenda de réservation institut de beauté",
      "planning équipe et cabines",
      "logiciel de rendez-vous clinique esthétique",
      "agenda glisser-déposer",
    ],
  },
  dates: { modified: "2026-10-28", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Agenda pour institut de beauté : équipe et cabines",
      description:
        "Agenda pour institut de beauté avec vue jour par collaborateur et par cabine, glisser-déposer, réservation en ligne et rappels automatiques.",
    },
    software: {
      name: "Agenda Treatflow pour instituts de beauté",
      description:
        "Agenda pour institut de beauté avec colonnes par collaborateur et par cabine, glisser-déposer, réservation en ligne et rappels automatiques.",
      featureList: [
        "Vue jour avec une colonne par collaborateur ou par cabine",
        "Taux d'occupation et disponibilités visibles",
        "Éviter les doubles réservations de collaborateurs et de cabines",
        "Déplacer les rendez-vous par glisser-déposer",
        "Vues jour, semaine et mois",
        "Réservation en ligne et rappels automatiques",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Agenda des rendez-vous",
  hero: {
    eyebrow: "Planning et agenda des rendez-vous",
    eyebrowIcon: "calendar",
    title: { before: "L'agenda de votre institut – pour votre équipe et vos ", highlight: "cabines" },
    description:
      "L'outil de planning de votre institut de beauté : collaborateurs, cabines et rendez-vous dans une seule vue, réservation en ligne comprise. Déplacez les rendez-vous par glisser-déposer et évitez les doubles réservations.",
    chips: ["Glisser-déposer", "Équipe et cabines", "Moins de rendez-vous non honorés"],
    secondaryCta: { label: "Réservation en ligne", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Comment organiser au mieux les rendez-vous d'un institut de beauté ?",
        answer:
          "Treatflow réunit rendez-vous, collaborateurs et cabines dans un seul agenda. La vue jour affiche chaque personne ou cabine dans sa propre colonne : vous repérez les créneaux libres, évitez les doubles réservations et gérez les changements plus rapidement. La réservation en ligne et les rappels automatiques réduisent en outre les appels et les rendez-vous non honorés.",
      },
      {
        question: "Quel logiciel de rendez-vous convient aux cliniques esthétiques ?",
        answer:
          "Treatflow associe un agenda avec colonnes par collaborateur et par cabine, la réservation en ligne pour les consultations et les soins, et des rappels par e-mail. Les réservations arrivent directement dans l'agenda, sans commission.",
      },
    ],
    image: {
      src: "/images/mockups/kalender-overview.png",
      alt: "Agenda Treatflow – vue jour avec collaborateurs et cabines",
    },
  },
  understand: {
    title: "Un logiciel de planning pour tout votre institut",
    description: "Tous les rendez-vous, collaborateurs et cabines en un coup d'œil – vous voyez immédiatement qui est disponible et quand.",
    items: [
      {
        icon: "users",
        title: "Équipe, cabines et prestations",
        text: "Ajoutez vos collaborateurs, vos cabines de soin et vos prestations. L'agenda affiche ensuite une colonne distincte pour chaque personne ou cabine.",
      },
      {
        icon: "move",
        title: "Déplacer par glisser-déposer",
        text: "Un changement de programme ? Faites simplement glisser le rendez-vous vers un nouveau créneau – inutile de le supprimer puis de le recréer.",
      },
      {
        icon: "bell",
        title: "Rappels automatiques",
        text: "Vos clients reçoivent un rappel par e-mail avant leur rendez-vous. Les oublis diminuent nettement.",
      },
    ],
  },
  howItWorks: {
    description: "Trois étapes pour un planning d'institut opérationnel.",
    steps: [
      { title: "Configurer équipe, prestations et cabines", text: "Ajoutez vos collaborateurs, vos soins et vos cabines avec leurs horaires. L'agenda affiche ensuite une colonne distincte pour chacun d'eux." },
      { title: "Ajouter des rendez-vous", text: "Saisissez vous-même les rendez-vous ou activez la réservation en ligne – les réservations de vos clients apparaissent alors automatiquement dans l'agenda." },
      { title: "Les rappels partent automatiquement", text: "Vos clients reçoivent une confirmation de réservation et un rappel par e-mail – rien à envoyer manuellement." },
    ],
  },
  cards: {
    title: "Ce que vous obtenez",
    description: "Tout pour le planning de votre institut – équipe, cabines et rappels dans un seul agenda.",
    items: [
      { icon: "users", title: "Équipe et cabines", text: "Une colonne par collaborateur ou par cabine. Occupation et créneaux libres en un coup d'œil.", points: ["Vue en colonnes", "Disponibilités visibles", "Aucune double réservation"] },
      { icon: "move", title: "Glisser-déposer", text: "Déplacez, prolongez ou échangez des rendez-vous – sans formulaire, sans chaos.", points: ["Déplacé en quelques secondes", "En direct dans l'agenda", "Pour toute l'équipe"] },
      { icon: "layout-grid", title: "De la vue jour à la vue mois", text: "Passez du jour à la semaine ou au mois – selon ce dont vous avez besoin.", points: ["Vue jour", "Semaine", "Mois"] },
      { icon: "bell", title: "Rappels automatiques", text: "Des rappels par e-mail avant chaque rendez-vous. Moins d'absences, moins d'appels de relance.", points: ["Rappels par e-mail", "Moment d'envoi au choix", "Lien d'annulation"] },
      { icon: "calendar", title: "Réservation en ligne", text: "Les réservations arrivent directement dans l'agenda. Aucune double réservation, confirmation automatique.", points: ["Lien de réservation personnel", "Immédiatement dans l'agenda", "Sans commission"] },
      { icon: "clock", title: "Moins de tâches administratives", text: "Moins d'appels, des processus plus clairs – plus de temps pour les soins plutôt que pour le planning.", points: ["Moins d'appels", "Créneaux clairs", "Vue d'ensemble rapide"] },
    ],
  },
  faq: {
    title: "Questions fréquentes sur l'agenda pour institut de beauté",
    items: [
      {
        question: "Comment organiser au mieux les rendez-vous d'un institut de beauté ?",
        answer:
          "Un outil de planning spécialisé comme Treatflow est la solution la plus efficace. La réservation en ligne permet à vos clients de réserver 24h/24 et 7j/7, les rappels automatiques par e-mail réduisent nettement les rendez-vous non honorés, et la vue claire de l'agenda vous donne à tout moment une vision complète.",
      },
      {
        question: "Combien coûte un logiciel de rendez-vous pour institut de beauté ?",
        answer:
          "Treatflow propose la gestion des rendez-vous avec réservation en ligne à partir de 59 €/mois avec la formule Booking (53 €/mois en paiement annuel, HT). Essayez gratuitement pendant 14 jours, sans carte bancaire. Aucun coût caché et aucune commission par réservation.",
      },
      {
        question: "Existe-t-il un agenda gratuit pour institut de beauté ?",
        answer:
          "Des agendas gratuits existent – généralement avec des limitations, de la publicité ou une commission par réservation via un modèle de place de marché. Un agenda papier ou un tableur ne coûte rien, mais ne permet ni la réservation en ligne, ni l'envoi de rappels, ni le lien avec vos fiches clients. Vous pouvez essayer Treatflow gratuitement pendant 14 jours sans carte bancaire ; ensuite, l'agenda avec réservation en ligne coûte 59 €/mois, sans commission par rendez-vous.",
      },
      {
        question: "Planning, agenda ou système de réservation : quelle différence ?",
        answer:
          "Au quotidien en institut, les trois désignent presque la même chose : le planning ou l'agenda est la vue dans laquelle vous et votre équipe gérez les rendez-vous. Le système de réservation est la partie que vos clients utilisent pour réserver eux-mêmes en ligne. Dans Treatflow, c'est un seul et même outil – les réservations en ligne arrivent directement dans l'agenda, rappels et fiches clients compris.",
      },
      {
        question: "Mes clients peuvent-ils réserver en ligne ?",
        answer:
          "Oui. Vous obtenez un lien de réservation personnel à partager sur votre site web, sur Instagram ou par message. Vos clients choisissent soins et horaires à toute heure. Les nouvelles réservations apparaissent instantanément dans l'agenda et les confirmations sont envoyées automatiquement par e-mail.",
      },
      {
        question: "Comment réduire les rendez-vous non honorés dans mon institut ?",
        answer:
          "Les rappels automatiques par e-mail sont le moyen le plus efficace de réduire les absences. Treatflow envoie les rappels au moment de votre choix avant le rendez-vous : beaucoup moins de clients oublient leur réservation.",
      },
      {
        question: "Quelles fonctionnalités un agenda pour institut de beauté doit-il offrir ?",
        answer:
          "Un bon agenda pour institut de beauté doit proposer la réservation en ligne, des vues jour/semaine/mois, la planification des collaborateurs et des cabines, des rappels automatiques par e-mail, le glisser-déposer et un lien avec les fiches clients et la documentation des soins.",
      },
      {
        question: "Comment planifier plusieurs collaborateurs et cabines ?",
        answer:
          "La vue jour de Treatflow affiche les collaborateurs ou les cabines dans des colonnes distinctes. Vous voyez les disponibilités, évitez les doubles réservations et coordonnez plus facilement les changements de dernière minute.",
      },
      {
        question: "Comment éviter les doubles réservations de collaborateurs et de cabines ?",
        answer:
          "Treatflow affiche côte à côte l'occupation des collaborateurs et des cabines. Les créneaux libres et occupés sont visibles d'un coup d'œil : les goulets d'étranglement et les doubles réservations sont évités en amont.",
      },
      {
        question: "Quel logiciel de rendez-vous convient aux cliniques esthétiques ?",
        answer:
          "Treatflow associe un agenda avec colonnes par collaborateur et par cabine, la réservation en ligne pour les consultations et les soins, et des rappels par e-mail. Les nouvelles réservations arrivent directement dans l'agenda, sans commission par rendez-vous.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Réservation en ligne", description: "24h/24 via votre lien de réservation" },
      { href: { page: "messaging" }, title: "Rappels", description: "Rappels automatiques par e-mail" },
      { href: { page: "client-records" }, title: "Fiches clients", description: "La fiche client directement depuis le rendez-vous" },
    ],
  },
  cta: {
    title: "Prêt pour un planning sans stress ?",
    description: "Essayez gratuitement pendant 14 jours – sans carte bancaire. Agenda, planning d'équipe et réservation en ligne dans une seule application.",
    secondary: { label: "Réservation en ligne", href: { page: "online-booking" } },
  },
};
