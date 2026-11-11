import type { ShiftPlannerContent } from "./types";

const faqItems: ShiftPlannerContent["faq"]["items"] = [
  {
    question: "Comment planifier les horaires et les congés dans un institut de beauté ?",
    answer:
      "Avec le planning d'équipe de Treatflow, vous planifiez chaque semaine pour chaque membre de l'équipe : un ou plusieurs créneaux par jour, des modèles comme matin, soir ou journée, et les absences comme les congés, les arrêts maladie ou les formations sous forme de période. Avec « Copier la semaine précédente », la semaine suivante est prête en quelques secondes. La réservation en ligne n'affiche ensuite que les horaires où quelqu'un travaille réellement.",
  },
  {
    question: "Combien coûte le planning d'équipe ?",
    answer:
      "Le planning d'équipe est une application incluse dans la formule Booking (59 €/mois, 53 €/mois en paiement annuel, HT) et ne coûte actuellement rien de plus. Vous l'activez dans Applications → Planning d'équipe et pouvez l'essayer gratuitement pendant les 14 jours d'essai.",
  },
  {
    question: "Que deviennent mes horaires de travail actuels ?",
    answer:
      "À l'activation, Treatflow pré-remplit les 8 semaines suivantes à partir de vos horaires de travail actuels, pour qu'aucun horaire réservable ne disparaisse. Ensuite, c'est vous qui planifiez : Treatflow ne remplit pas les semaines automatiquement. Si vous désactivez le planning d'équipe, les horaires de travail habituels s'appliquent à nouveau et votre planning reste enregistré.",
  },
  {
    question: "Les clients voient-ils pourquoi quelqu'un n'est pas disponible ?",
    answer:
      "Non. Pendant des congés, un arrêt maladie ou une formation, la personne n'est tout simplement pas réservable en ligne. Les clients ne voient que les horaires libres, jamais le motif de l'absence.",
  },
  {
    question: "Que se passe-t-il pour les rendez-vous déjà réservés ?",
    answer:
      "Les rendez-vous réservés sont conservés, même si vous modifiez un créneau ou saisissez des congés. Si un rendez-vous tombe en dehors d'un créneau ou pendant une absence, Treatflow vous le signale à l'ouverture du rendez-vous, pour que vous puissiez le déplacer à temps.",
  },
  {
    question: "Puis-je planifier plusieurs créneaux le même jour ?",
    answer:
      "Oui. Chaque membre de l'équipe peut avoir autant de créneaux par jour que nécessaire, par exemple 9 h–12 h et 15 h–19 h avec une longue pause de midi. Les créneaux ne doivent simplement pas se chevaucher.",
  },
  {
    question: "Les créneaux comptent-ils aussi en dehors des heures d'ouverture ?",
    answer:
      "Oui. Quand le planning d'équipe est actif, c'est le créneau planifié qui compte, même s'il commence avant ou se termine après vos heures d'ouverture habituelles. Vous pouvez ainsi proposer une nocturne le jeudi avec une seule personne sans modifier vos horaires d'ouverture.",
  },
  {
    question: "Puis-je ouvrir un créneau uniquement à certaines prestations ?",
    answer:
      "Oui. Chaque créneau et chaque modèle peut être limité en ligne à certaines catégories ou prestations, par exemple uniquement le laser le jeudi après-midi. Le planning de la semaine indique alors sur le créneau ce qui est réservable en ligne.",
  },
  {
    question: "Les jours fériés sont-ils pris en compte ?",
    answer:
      "Oui. Les jours fériés où votre institut est fermé apparaissent dans le planning sous forme de colonne grise avec leur nom. Vous les définissez dans Paramètres → Heures d'ouverture → Jours fériés.",
  },
  {
    question: "Qui peut modifier le planning ?",
    answer:
      "Le planning est modifiable par la gérante ou le gérant et par les membres de l'équipe ayant le rôle d'administrateur. Les personnes qui se connectent uniquement avec leur code PIN n'y ont pas accès.",
  },
];

export const shiftPlannerFr: ShiftPlannerContent = {
  meta: {
    title: "Planning d'équipe pour institut de beauté : horaires et congés",
    description:
      "Planning d'équipe pour instituts de beauté : créneaux de la semaine, congés et arrêts maladie au même endroit – la réservation en ligne n'affiche que les horaires où quelqu'un travaille.",
    keywords: [
      "planning équipe institut de beauté",
      "logiciel planning personnel",
      "planning des horaires salon",
      "gestion des plannings employés",
      "application planning équipe",
      "gestion des congés employés",
      "réservation en ligne planning",
    ],
  },
  dates: { modified: "2026-11-11", published: "2026-11-11" },
  schema: {
    id: "shift-planner",
    webPage: {
      name: "Planning d'équipe pour institut de beauté : horaires et congés",
      description:
        "Planning d'équipe pour instituts de beauté avec planning hebdomadaire par personne, modèles de créneaux, congés et arrêts maladie – la réservation en ligne suit le planning.",
    },
    software: {
      name: "Treatflow planning d'équipe pour instituts de beauté",
      description:
        "Planning d'équipe avec planning hebdomadaire par personne, modèles de créneaux et absences. La réservation en ligne ne propose que des horaires dans les créneaux planifiés.",
      featureList: [
        "Planning hebdomadaire par personne avec plusieurs créneaux par jour",
        "Modèles de créneaux comme matin, soir et journée",
        "Copier la semaine précédente ou remplir depuis les horaires de travail",
        "Congés, arrêts maladie et formations sous forme de période",
        "Réservation en ligne uniquement dans les créneaux planifiés",
        "Créneaux ouverts à certaines prestations seulement",
        "Créneaux et absences dans l'agenda",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Planning d'équipe",
  hero: {
    eyebrow: "Planning d'équipe et horaires",
    eyebrowIcon: "calendar-clock",
    title: { before: "Planning d'équipe pour votre institut : ", highlight: "on ne réserve que quand quelqu'un travaille" },
    description:
      "Planifiez la semaine de votre équipe avec des créneaux, des modèles et les congés. La réservation en ligne suit automatiquement le planning : les jours sans créneau et les absences ne sont pas réservables.",
    chips: ["Créneaux par semaine", "Congés et arrêts maladie", "Réservation selon le planning"],
    secondaryCta: { label: "Agenda et planning", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Comment planifier les horaires et les congés dans un institut de beauté ?",
        answer:
          "Avec le planning d'équipe de Treatflow, vous planifiez chaque semaine pour chaque membre de l'équipe : un ou plusieurs créneaux par jour, des modèles comme matin, soir ou journée, et les absences comme les congés ou les arrêts maladie sous forme de période. La réservation en ligne n'affiche ensuite que les horaires où quelqu'un travaille réellement.",
      },
      {
        question: "Que devient la réservation en ligne quand quelqu'un est en congé ?",
        answer:
          "Pendant des congés, un arrêt maladie ou une formation, la personne n'est pas réservable en ligne. Les clients ne voient pas le motif, seulement les horaires libres du reste de l'équipe. Les rendez-vous déjà réservés sont conservés.",
      },
    ],
    image: {
      src: "/images/mockups/fr/schichtplan.png",
      alt: "Planning d'équipe Treatflow – planning de la semaine avec créneaux et absences par personne",
    },
  },
  understand: {
    title: "Un planning qui pilote votre réservation en ligne",
    description:
      "Au lieu d'horaires fixes, vous planifiez semaine après semaine – et les clients ne réservent que lorsque quelqu'un est vraiment à l'institut.",
    items: [
      {
        icon: "calendar-days",
        title: "Semaine après semaine",
        text: "Chaque membre de l'équipe a un ou plusieurs créneaux par jour, y compris des journées coupées avec pause de midi. Les heures de la semaine s'affichent dans la colonne « Total ».",
      },
      {
        icon: "plane",
        title: "Congés, maladie, formation",
        text: "Vous saisissez les absences sous forme de période. Pendant ce temps, la personne n'est pas réservable en ligne – les clients ne voient pas le motif.",
      },
      {
        icon: "globe",
        title: "Réservation selon le planning",
        text: "Votre page de réservation n'affiche que les horaires dans les créneaux planifiés. Les jours sans créneau ne sont pas réservables ; la liste d'attente et les modifications de rendez-vous suivent aussi le planning.",
      },
    ],
  },
  howItWorks: {
    description: "Trois étapes du planning de la semaine à une réservation en ligne qui colle.",
    steps: [
      {
        title: "Activez le planning d'équipe",
        text: "Vous activez le planning d'équipe dans la rubrique Applications. Pour qu'aucun horaire réservable ne disparaisse, Treatflow pré-remplit les 8 semaines suivantes à partir de vos horaires de travail actuels.",
      },
      {
        title: "Ajustez la semaine",
        text: "Ajoutez des créneaux depuis un modèle, copiez la semaine précédente ou modifiez des jours précis. Les congés et arrêts maladie se saisissent sous forme de période.",
      },
      {
        title: "Les clients réservent selon le planning",
        text: "La réservation en ligne ne propose que des horaires dans les créneaux. Dans l'agenda, vous voyez les créneaux et les absences directement dans la vue du jour.",
      },
    ],
  },
  cards: {
    description: "Tout pour planifier l'équipe de votre institut – relié à l'agenda et à la réservation en ligne.",
    items: [
      {
        icon: "users",
        title: "Planning hebdomadaire par personne",
        text: "L'équipe de haut en bas, les jours côte à côte – avec autant de créneaux par jour que nécessaire.",
        points: ["Journées coupées", "Heures par semaine", "Copier la semaine précédente"],
      },
      {
        icon: "layers",
        title: "Modèles de créneaux",
        text: "Créez des modèles comme matin, soir ou journée et ajoutez-les en un clic. Ou remplissez une semaine à partir des horaires de travail standard.",
        points: ["Vos propres modèles", "Choix rapide par jour", "Remplir depuis les horaires"],
      },
      {
        icon: "plane",
        title: "Absences",
        text: "Congés, arrêts maladie, formations ou autres absences sous forme de période – avec une note facultative.",
        points: ["Congés et maladie", "Formations", "Le motif reste interne"],
      },
      {
        icon: "globe",
        title: "Réservation en ligne selon le planning",
        text: "On ne réserve que dans les créneaux planifiés – y compris depuis la liste d'attente et quand les clients déplacent eux-mêmes leur rendez-vous.",
        points: ["Jours sans créneau bloqués", "Liste d'attente et déplacements", "Rendez-vous conservés"],
      },
      {
        icon: "list-ordered",
        title: "Créneaux pour certaines prestations",
        text: "Ouvrez un créneau en ligne uniquement à certaines catégories ou prestations – par exemple seulement le laser le jeudi après-midi.",
        points: ["Réglable par créneau", "Catégories ou prestations", "Aussi dans les modèles"],
      },
      {
        icon: "calendar",
        title: "Visible dans l'agenda",
        text: "Dans la vue du jour, les heures hors créneau sont hachurées, et les créneaux et absences s'affichent sous chaque nom.",
        points: ["Hachures hors créneau", "Alerte sur le rendez-vous", "Jours fériés dans le planning"],
      },
    ],
  },
  faq: {
    title: "Questions fréquentes sur le planning d'équipe",
    items: faqItems,
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Agenda et planning", description: "Équipe et cabines dans un seul agenda" },
      { href: { page: "online-booking" }, title: "Réservation en ligne", description: "24h/24 via votre lien de réservation" },
      { href: { page: "messaging" }, title: "Rappels", description: "Rappels automatiques par e-mail" },
    ],
  },
  cta: {
    title: "Planifiez votre équipe – la réservation en ligne suit",
    description: "Essayez gratuitement pendant 14 jours, sans carte bancaire. Planning, agenda et réservation en ligne dans une seule application.",
    secondary: { label: "Agenda et planning", href: { page: "appointment-calendar" } },
  },
};
