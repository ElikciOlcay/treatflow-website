import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarFr: AppointmentCalendarContent = {
  meta: {
    title: "Agenda et planning pour institut de beauté : en solo ou en équipe",
    description:
      "Agenda pour institut de beauté, en solo ou en équipe : réservation en ligne, glisser-déposer, rappels e-mail, colonnes équipe et cabines. Sans commission.",
    keywords: [
      "agenda institut de beauté",
      "logiciel de planning institut",
      "logiciel prise de rendez-vous spa",
      "agenda de réservation institut de beauté",
      "agenda esthéticienne indépendante",
      "planning institut de beauté en solo",
      "planning équipe et cabines",
      "logiciel de rendez-vous médecine esthétique",
      "agenda en ligne esthéticienne",
    ],
  },
  dates: { modified: "2026-11-09", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Agenda pour institut de beauté : en solo ou en équipe",
      description:
        "Agenda pour institut de beauté, en solo comme en équipe, avec glisser-déposer, réservation en ligne, rappels automatiques et colonnes par collaborateur et par cabine.",
    },
    software: {
      name: "Agenda Treatflow pour instituts de beauté",
      description:
        "Agenda pour institut de beauté – que vous travailliez en solo ou en équipe – avec glisser-déposer, réservation en ligne, rappels automatiques et colonnes par collaborateur et par cabine.",
      featureList: [
        "Agenda pour instituts en solo et en équipe",
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
  breadcrumb: "Agenda et planning",
  hero: {
    eyebrow: "Agenda et planning",
    eyebrowIcon: "calendar",
    title: { before: "L'agenda de votre institut – ", highlight: "en solo ou en équipe" },
    description:
      "Votre agenda avec réservation en ligne, rappels et glisser-déposer – idéal si vous travaillez en solo. Quand votre institut s'agrandit, chaque collaborateur et chaque cabine a sa propre colonne.",
    chips: ["En solo ou en équipe", "Glisser-déposer", "Moins de rendez-vous non honorés"],
    secondaryCta: { label: "Réservation en ligne", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Comment organiser au mieux les rendez-vous d'un institut de beauté ?",
        answer:
          "Treatflow réunit rendez-vous, réservations en ligne et rappels dans un seul agenda, que vous travailliez en solo ou en équipe. En solo, vous voyez toute votre journée et tous vos rendez-vous en un coup d'œil. En équipe, la vue jour affiche chaque personne ou cabine dans sa propre colonne : vous repérez les créneaux libres et évitez les doubles réservations. La réservation en ligne et les rappels automatiques réduisent en outre les appels et les rendez-vous non honorés.",
      },
      {
        question: "Quel logiciel de rendez-vous pour un centre de médecine esthétique ?",
        answer:
          "Treatflow associe un agenda avec colonnes par collaborateur et par cabine, la réservation en ligne pour les consultations et les soins, et des rappels par e-mail. Les réservations arrivent directement dans l'agenda, sans commission.",
      },
    ],
    image: {
      src: "/images/mockups/fr/kalender-overview.png",
      alt: "Agenda Treatflow – vue jour avec collaborateurs et cabines",
    },
  },
  understand: {
    title: "Un agenda qui grandit avec votre institut",
    description: "Que vous travailliez en solo ou en équipe : tous les rendez-vous en un coup d'œil – vous voyez immédiatement s'il reste un créneau libre.",
    items: [
      {
        icon: "calendar-days",
        title: "En solo ou en équipe",
        text: "Si vous travaillez en solo, vous avez votre journée et tous vos rendez-vous sous les yeux. Dès que des collaborateurs ou des cabines de soin s'ajoutent, chaque personne et chaque cabine a sa propre colonne.",
      },
      {
        icon: "move",
        title: "Déplacer par glisser-déposer",
        text: "Un imprévu ? Faites glisser le rendez-vous vers un autre créneau – inutile de l'annuler puis de le recréer.",
      },
      {
        icon: "bell",
        title: "Rappels automatiques",
        text: "Vos clients reçoivent un rappel par e-mail avant leur rendez-vous. Résultat : nettement moins d'oublis.",
      },
    ],
  },
  howItWorks: {
    description: "Votre planning opérationnel en trois étapes.",
    steps: [
      { title: "Saisir prestations et horaires", text: "Ajoutez vos soins et vos horaires de travail. Si vous avez une équipe ou plusieurs cabines, ajoutez-les aussi – chaque personne et chaque cabine aura alors sa propre colonne." },
      { title: "Ajouter des rendez-vous", text: "Saisissez vous-même les rendez-vous ou activez la réservation en ligne – les réservations de vos clients apparaissent alors automatiquement dans l'agenda." },
      { title: "Les rappels partent automatiquement", text: "Vos clients reçoivent une confirmation de réservation et un rappel par e-mail – rien à envoyer manuellement." },
    ],
  },
  cards: {
    title: "Ce que vous obtenez",
    description: "Tout pour planifier vos rendez-vous – de l'institut en solo à l'équipe, avec réservation en ligne et rappels dans un seul agenda.",
    items: [
      { icon: "users", title: "En solo ou en équipe", text: "En solo, vous voyez votre journée en un coup d'œil. En équipe, chaque collaborateur et chaque cabine a sa propre colonne.", points: ["Pour les instituts en solo", "Colonnes équipe et cabines", "Aucune double réservation"] },
      { icon: "move", title: "Glisser-déposer", text: "Déplacez, prolongez ou échangez des rendez-vous – sans formulaire, sans chaos.", points: ["Déplacé en quelques secondes", "Mis à jour en temps réel", "Sans rien recréer"] },
      { icon: "layout-grid", title: "De la vue jour à la vue mois", text: "Passez du jour à la semaine ou au mois – selon ce dont vous avez besoin.", points: ["Vue jour", "Semaine", "Mois"] },
      { icon: "bell", title: "Rappels automatiques", text: "Des rappels par e-mail avant chaque rendez-vous. Moins d'absences, moins d'appels de relance.", points: ["Rappels par e-mail", "Moment d'envoi au choix", "Lien d'annulation"] },
      { icon: "calendar", title: "Réservation en ligne", text: "Les réservations arrivent directement dans l'agenda. Aucune double réservation, confirmation automatique.", points: ["Lien de réservation personnel", "Immédiatement dans l'agenda", "Sans commission"] },
      { icon: "clock", title: "Moins de tâches administratives", text: "Moins d'appels, une organisation plus fluide – et plus de temps pour vos soins que pour votre planning.", points: ["Moins d'appels", "Créneaux clairs", "Vue d'ensemble rapide"] },
    ],
  },
  faq: {
    title: "Questions fréquentes sur l'agenda pour institut de beauté",
    items: [
      {
        question: "L'agenda convient-il aussi si je travaille en solo ?",
        answer:
          "Oui. De nombreux instituts travaillent en solo avec Treatflow. Vous voyez votre journée avec tous vos rendez-vous, vos clients réservent en ligne directement sur vos créneaux libres et reçoivent automatiquement une confirmation et un rappel. Les colonnes par collaborateur et par cabine ne vous seront utiles que lorsque votre institut s'agrandira.",
      },
      {
        question: "Comment organiser au mieux les rendez-vous d'un institut de beauté ?",
        answer:
          "Le plus efficace est un outil de planning spécialisé comme Treatflow. La réservation en ligne permet à vos clients de réserver 24h/24 et 7j/7, les rappels automatiques par e-mail réduisent nettement les rendez-vous non honorés, et la vue claire de l'agenda vous donne à tout moment une vision complète.",
      },
      {
        question: "Combien coûte un logiciel de rendez-vous pour institut de beauté ?",
        answer:
          "Treatflow propose la gestion des rendez-vous avec réservation en ligne à partir de 59 €/mois avec la formule Booking (53 €/mois en paiement annuel, HT). Essayez gratuitement pendant 14 jours, sans carte bancaire. Aucun coût caché et aucune commission par réservation.",
      },
      {
        question: "Existe-t-il un agenda gratuit pour institut de beauté ?",
        answer:
          "Il existe des agendas gratuits – généralement limités, financés par la publicité ou par une commission sur les réservations via une place de marché. Un agenda papier ou un tableur ne coûte rien, mais ne permet ni la réservation en ligne, ni l'envoi de rappels, ni le lien avec vos fiches clients. Vous pouvez essayer Treatflow gratuitement pendant 14 jours sans carte bancaire ; ensuite, l'agenda avec réservation en ligne coûte 59 €/mois, sans commission par rendez-vous.",
      },
      {
        question: "Planning, agenda ou système de réservation : quelle différence ?",
        answer:
          "Au quotidien en institut, les trois désignent presque la même chose : le planning ou l'agenda est la vue dans laquelle vous et votre équipe gérez les rendez-vous. Le système de réservation est la partie que vos clients utilisent pour réserver eux-mêmes en ligne. Dans Treatflow, c'est un seul et même outil – les réservations en ligne arrivent directement dans l'agenda, rappels et fiches clients compris.",
      },
      {
        question: "Mes clients peuvent-ils réserver en ligne ?",
        answer:
          "Oui. Vous disposez d'un lien de réservation personnel à partager sur votre site web, sur Instagram ou par message. Vos clients choisissent leur soin et leur créneau à toute heure. Les nouvelles réservations apparaissent instantanément dans l'agenda et les confirmations sont envoyées automatiquement par e-mail.",
      },
      {
        question: "Comment réduire les rendez-vous non honorés dans mon institut ?",
        answer:
          "Les rappels automatiques par e-mail sont le moyen le plus efficace de réduire les absences. Treatflow envoie les rappels au moment de votre choix avant le rendez-vous : beaucoup moins de clients oublient leur réservation.",
      },
      {
        question: "Quelles fonctionnalités un agenda pour institut de beauté doit-il offrir ?",
        answer:
          "Un bon agenda pour institut de beauté doit proposer la réservation en ligne, des vues jour/semaine/mois, la planification des collaborateurs et des cabines, des rappels automatiques par e-mail, le glisser-déposer et un lien avec les fiches clients et le suivi des soins.",
      },
      {
        question: "Comment planifier plusieurs collaborateurs et cabines ?",
        answer:
          "La vue jour de Treatflow affiche les collaborateurs ou les cabines dans des colonnes distinctes. Vous voyez les disponibilités, évitez les doubles réservations et coordonnez plus facilement les changements de dernière minute.",
      },
      {
        question: "Comment éviter les doubles réservations de collaborateurs et de cabines ?",
        answer:
          "Treatflow affiche côte à côte l'occupation des collaborateurs et des cabines. Les créneaux libres et occupés sont visibles d'un coup d'œil : vous anticipez les créneaux saturés et évitez les doubles réservations.",
      },
      {
        question: "Quel logiciel de rendez-vous pour un centre de médecine esthétique ?",
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
    title: "Envie d'un planning sans stress ?",
    description: "Essayez gratuitement pendant 14 jours – sans carte bancaire. Agenda, réservation en ligne et rappels dans une seule application, en solo ou en équipe.",
    secondary: { label: "Réservation en ligne", href: { page: "online-booking" } },
  },
};
