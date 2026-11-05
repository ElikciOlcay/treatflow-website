import type { TreatflowPayContent } from "./types";

export const treatflowPayFr: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay – acompte et paiement intégral à la réservation en ligne",
    description:
      "Treatflow Pay : vos clients règlent un acompte ou le prix total dès la réservation en ligne. Réglable par prestation, 2,69 % par transaction.",
    keywords: [
      "Treatflow Pay",
      "acompte réservation en ligne",
      "paiement en ligne institut de beauté",
      "acompte institut de beauté",
      "prépaiement rendez-vous",
      "paiement Stripe institut",
    ],
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay – acompte et paiement intégral à la réservation en ligne",
      description:
        "Treatflow Pay : vos clients règlent un acompte ou le prix total dès la réservation en ligne. Réglable par prestation, 2,69 % par transaction.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Acompte ou paiement intégral ", highlight: "dès la réservation" },
    description: "Définissez pour chaque prestation si la cliente paie en ligne un acompte, le prix total ou rien.",
    chips: ["Par prestation", "Carte, Apple Pay, Google Pay", "2,69 %"],
    secondaryCta: { label: "Voir la réservation en ligne", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Qu'est-ce que Treatflow Pay ?",
        answer:
          "Treatflow Pay, c'est le paiement en ligne au moment de la prise de rendez-vous. Pour chaque prestation, l'institut peut ne demander aucun paiement, un acompte en pourcentage ou en montant fixe, ou le paiement intégral. Le règlement se fait par carte de crédit ou de débit, ainsi que par Apple Pay et Google Pay sur la page de paiement Stripe. Les frais sont de 2,69 % par transaction.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay – acompte ou paiement intégral à la réservation en ligne",
    },
  },
  understand: {
    title: "Moins de rendez-vous manqués, des encaissements clairs",
    description: "Vous décidez pour chaque soin ce qui est dû en ligne. La cliente paie directement pendant la réservation.",
    items: [
      {
        icon: "percent",
        title: "Réglage par prestation",
        text: "Aucun paiement en ligne, un acompte ou le paiement intégral. L'acompte est un pourcentage ou un montant fixe en euros.",
      },
      {
        icon: "credit-card",
        title: "Paiement à la réservation",
        text: "Cartes de crédit et de débit sur la page de paiement Stripe. Apple Pay et Google Pay si l'appareil de la cliente les prend en charge.",
      },
      {
        icon: "banknote",
        title: "2,69 % par transaction",
        text: "Des frais uniques, tout compris. Aucuns frais Treatflow supplémentaires sur le paiement.",
      },
    ],
  },
  howItWorks: {
    description: "Connectez une fois, puis choisissez pour chaque prestation.",
    steps: [
      { title: "Connecter Treatflow Pay", text: "Dans Apps, vous configurez Treatflow Pay et connectez votre compte Stripe. Vous pouvez ensuite encaisser dès la réservation." },
      { title: "Choisir par prestation", text: "Pour chaque soin : aucun paiement en ligne, un acompte en pourcentage ou en montant fixe, ou le prix total." },
      { title: "La cliente paie", text: "La réservation est finalisée avec le paiement. En cas d'acompte, le solde est réglé à l'institut." },
    ],
  },
  cards: {
    title: "Toutes les options",
    description: "Voici ce que Treatflow Pay apporte à vos réservations en ligne.",
    items: [
      { icon: "wallet", title: "Aucun paiement, acompte ou paiement intégral", text: "Chaque prestation a son propre mode. Les prestations sans paiement en ligne restent réservables comme avant.", points: ["Aucun paiement en ligne", "Acompte", "Paiement intégral"] },
      { icon: "percent", title: "Acompte en pourcentage", text: "Par exemple 30 % du prix de la prestation. Le taux s'applique à ce soin.", points: ["Pourcentage du prix", "Par prestation", "Solde à l'institut"] },
      { icon: "banknote", title: "Acompte en montant fixe", text: "Un montant fixe en euros, au maximum le prix de la prestation.", points: ["Montant fixe", "Plafonné au prix", "Solde à l'institut"] },
      { icon: "credit-card", title: "Cartes et portefeuilles mobiles", text: "Règlement sur la page de paiement Stripe par carte, Apple Pay et Google Pay.", points: ["Carte de crédit et de débit", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69 % tout compris", text: "Des frais uniques par transaction. Montant minimum 0,50 €.", points: ["2,69 % par paiement", "À partir de 0,50 €", "Tout compris"] },
      { icon: "layers", title: "Plusieurs prestations", text: "Les montants d'une même réservation sont additionnés, dans la limite du prix de la réservation.", points: ["Somme des prestations", "Plafonné au prix", "Réglable par prestation"] },
    ],
  },
  faq: {
    title: "Questions fréquentes sur Treatflow Pay",
    items: [
      {
        question: "Que puis-je régler avec Treatflow Pay ?",
        answer:
          "Pour chaque prestation, vous choisissez : aucun paiement en ligne, un acompte ou le paiement intégral. L'acompte est un pourcentage ou un montant fixe. Si la cliente réserve plusieurs prestations, les montants dus sont additionnés, dans la limite du prix de la réservation.",
      },
      {
        question: "Quels moyens de paiement sont proposés ?",
        answer:
          "La cliente paie par carte de crédit ou de débit sur la page de paiement Stripe. Apple Pay et Google Pay s'y affichent si son appareil les prend en charge.",
      },
      {
        question: "Combien coûte Treatflow Pay ?",
        answer: "2,69 % par transaction, tout compris. Aucuns frais Treatflow supplémentaires ne s'ajoutent au paiement. Le montant minimum est de 0,50 €.",
      },
      {
        question: "Treatflow Pay sert-il aussi aux paiements à l'institut ?",
        answer:
          "Non. Treatflow Pay est destiné à la réservation en ligne. Les paiements à l'institut se font comme avant, par exemple avec votre terminal de paiement habituel.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Réservation en ligne", description: "Lien de réservation avec Treatflow Pay" },
      { href: { page: "integrations" }, title: "Intégrations", description: "Stripe, Google Agenda et plus" },
    ],
  },
  cta: {
    title: "L'acompte dès la réservation",
    description:
      "Essayez gratuitement pendant 14 jours. Connectez ensuite Treatflow Pay dans Apps – les frais ne s'appliquent qu'aux paiements effectifs.",
    secondary: { label: "Voir la réservation en ligne", href: { page: "online-booking" } },
  },
};
