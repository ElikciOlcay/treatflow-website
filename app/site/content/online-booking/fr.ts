import type { OnlineBookingContent } from "./types";

export const onlineBookingFr: OnlineBookingContent = {
  meta: {
    title: "Prise de rendez-vous en ligne pour institut de beauté",
    description:
      "La réservation en ligne pour votre institut de beauté : vos clients réservent 24h/24 via votre lien personnel. Avec Treatflow Pay, encaissez un acompte ou le paiement intégral dès la réservation. Aucune commission par réservation.",
    keywords: [
      "réservation en ligne institut de beauté",
      "logiciel de réservation institut",
      "prise de rendez-vous en ligne esthéticienne",
      "lien de réservation institut de beauté",
      "réservation en ligne 24h/24",
      "liste d'attente institut",
      "acompte réservation en ligne",
    ],
  },
  dates: { modified: "2026-10-02", published: "2024-06-01" },
  schema: {
    id: "online-buchungen",
    webPage: {
      name: "Prise de rendez-vous en ligne pour institut de beauté",
      description:
        "La réservation en ligne pour votre institut de beauté : vos clients réservent 24h/24 via votre lien personnel. Avec Treatflow Pay, encaissez un acompte ou le paiement intégral dès la réservation.",
    },
  },
  breadcrumb: "Réservation en ligne",
  hero: {
    eyebrow: "Réservation en ligne",
    eyebrowIcon: "link",
    title: { before: "La réservation en ligne pour votre ", highlight: "institut" },
    description:
      "Avec votre lien de réservation personnel, vos clients prennent rendez-vous à toute heure. Les réservations s'affichent automatiquement dans votre agenda.",
    chips: ["Réservable 24h/24", "Sans commission", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Voir l'agenda", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Quel système de réservation en ligne choisir pour un institut de beauté ?",
        answer:
          "Treatflow propose un système de réservation en ligne conçu pour les instituts de beauté : lien de réservation personnel, prise de rendez-vous 24h/24, confirmations automatiques par e-mail et Treatflow Pay pour un acompte ou le paiement intégral à la réservation. Aucune commission par réservation, à partir de 59 €/mois avec la formule Booking, 14 jours d'essai gratuit.",
      },
    ],
    image: {
      src: "/images/mockups/fr/online-buchung-hero.png",
      alt: "Réservation en ligne Treatflow – lien de réservation personnel",
    },
  },
  understand: {
    title: "Vos clients réservent eux-mêmes – vous vous consacrez aux soins",
    description:
      "Grâce à votre lien de réservation personnel, vos clients choisissent leur rendez-vous à toute heure. Fini les appels manqués et les allers-retours de messages.",
    items: [
      {
        icon: "calendar",
        title: "Réservable jour et nuit",
        text: "Votre lien de réservation est disponible 24h/24 et 7j/7. Plus de 60 % des réservations sont effectuées le soir ou le week-end.",
      },
      {
        icon: "bell",
        title: "Confirmation et rappel automatiques",
        text: "Votre client reçoit une confirmation dès sa réservation, puis un rappel par e-mail avant le rendez-vous.",
      },
      {
        icon: "list-ordered",
        title: "Liste d'attente quand vous affichez complet",
        text: "Quand votre agenda est complet, vos clients peuvent s'inscrire sur la liste d'attente. Dès qu'un créneau se libère, ils sont prévenus automatiquement.",
      },
    ],
  },
  howItWorks: {
    description: "Trois étapes vers votre propre lien de réservation.",
    steps: [
      { title: "Ajoutez vos soins", text: "Choisissez les soins réservables en ligne, leur durée et leur prix. Vos clients ne voient que les créneaux disponibles." },
      { title: "Partagez votre lien", text: "Partagez votre lien de réservation personnel sur Instagram, votre site web ou par message. Un QR code imprimable est également fourni." },
      { title: "Les réservations arrivent", text: "Les nouveaux rendez-vous apparaissent automatiquement dans votre agenda. Confirmations et rappels partent tout seuls. Avec Treatflow Pay, vos clients peuvent régler un acompte ou le prix total immédiatement." },
    ],
  },
  cards: {
    title: "Ce que vous obtenez",
    description: "Lien de réservation, langues, liste d'attente, codes promo et Treatflow Pay – sans commission par rendez-vous.",
    items: [
      { icon: "link", title: "Lien de réservation personnel", text: "Votre lien à partager sur votre site web et les réseaux sociaux – aux couleurs de votre institut.", points: ["Lien personnalisé", "QR code", "Aux couleurs de l'institut"] },
      { icon: "languages", title: "Neuf langues", text: "La page de réservation s'adapte à la langue de votre client – sans configuration supplémentaire.", points: ["DE, EN, NL, IT, PL, TR, ES, FR, RU", "Langue détectée automatiquement", "Sans barrière de langue"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Acompte ou paiement intégral dès la réservation en ligne.", points: ["Réglable par prestation", "Acompte ou paiement intégral", "2,69 % par transaction"], feature: "pay" },
      { icon: "list-ordered", title: "Liste d'attente", text: "Vos clients s'inscrivent sur la liste d'attente quand vous êtes complet. Quand un créneau se libère, les clients concernés reçoivent un e-mail.", points: ["E-mail automatique en cas d'annulation", "Deux modes de notification", "Vue d'ensemble dans le tableau de bord"] },
      { icon: "ticket", title: "Codes promo", text: "Des codes pour les nouveaux clients et vos campagnes – utilisés directement lors de la réservation en ligne.", points: ["Nouveaux clients et promotions", "Utilisés à la réservation", "Statistiques d'utilisation"] },
      { icon: "bell", title: "Rappels", text: "Des rappels par e-mail avant le rendez-vous. Vos clients peuvent annuler à temps et le créneau redevient disponible.", points: ["Rappels par e-mail", "Moment d'envoi au choix", "Moins de rendez-vous non honorés"] },
      { icon: "calendar", title: "Planification flexible", text: "Horaires de travail, durées des soins, pauses et congés – seules les disponibilités réelles sont proposées.", points: ["Horaires de travail", "Pauses et congés", "Aucune double réservation"] },
    ],
  },
  faq: {
    title: "Questions fréquentes sur la réservation en ligne",
    items: [
      {
        question: "Quel système de réservation en ligne choisir pour un institut de beauté ?",
        answer:
          "Treatflow propose un système de réservation en ligne conçu pour les instituts de beauté : lien de réservation personnel, confirmations automatiques par e-mail, agendas par collaborateur, le tout relié aux fiches clients et au suivi des soins. À partir de 59 €/mois.",
      },
      {
        question: "Comment mettre en place la réservation en ligne pour mon institut ?",
        answer:
          "En trois étapes : 1) ajoutez vos soins avec leur durée et leur prix, 2) définissez vos horaires de travail et vos disponibilités, 3) partagez votre lien de réservation personnel sur Instagram, votre site web ou par message. La configuration prend moins de 10 minutes.",
      },
      {
        question: "Combien coûte un système de réservation en ligne pour institut de beauté ?",
        answer:
          "Chez Treatflow, la réservation en ligne est incluse dans la formule Booking à partir de 59 €/mois. Aucune commission par réservation, aucun coût caché, et 14 jours d'essai gratuit sans carte bancaire.",
      },
      {
        question: "Mes clients peuvent-ils réserver à toute heure ?",
        answer:
          "Oui. Votre lien de réservation personnel est disponible 24h/24 et 7j/7. Vos clients peuvent voir et réserver les créneaux libres à tout moment – y compris le soir et le week-end. Plus de 60 % des réservations ont lieu en dehors des heures d'ouverture.",
      },
      {
        question: "Comment un système de réservation réduit-il les rendez-vous non honorés ?",
        answer:
          "Grâce aux rappels automatiques par e-mail envoyés au moment de votre choix avant le rendez-vous. Vos clients sont prévenus et peuvent annuler si nécessaire : le créneau se libère pour quelqu'un d'autre. Les absences diminuent nettement.",
      },
      {
        question: "Que se passe-t-il quand tous les créneaux sont réservés ?",
        answer:
          "Grâce à la liste d'attente, vos clients peuvent se positionner sur les créneaux qui se libèrent. Si un rendez-vous existant est annulé, les clients concernés reçoivent automatiquement un e-mail avec les nouveaux horaires disponibles. Aucune demande ne se perd.",
      },
      {
        question: "Mes clients peuvent-ils payer directement lors de la réservation en ligne ?",
        answer:
          "Oui. Avec Treatflow Pay, vos clients règlent un acompte ou le montant total au moment de la réservation. Vous le définissez pour chaque prestation. Les frais s'élèvent à 2,69 % par transaction.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Acompte ou paiement intégral", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Agenda et planning", description: "Les réservations arrivent directement dans votre planning" },
      { href: { page: "messaging" }, title: "Rappels", description: "Confirmations et rappels automatiques" },
      { href: { page: "client-records" }, title: "Fiches clients", description: "Nouvelle réservation, fiche client déjà connue" },
    ],
  },
  cta: {
    title: "Prêt à recevoir des réservations 24h/24 ?",
    description: "Essayez gratuitement pendant 14 jours – sans carte bancaire et sans commission par réservation.",
    secondary: { label: "Voir l'agenda", href: { page: "appointment-calendar" } },
  },
};
