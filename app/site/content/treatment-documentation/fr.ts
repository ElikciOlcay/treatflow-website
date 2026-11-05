import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationFr: TreatmentDocumentationContent = {
  meta: {
    title: "Suivi des soins et fiches de soin numériques pour instituts",
    description:
      "Suivi des soins numérique pour instituts de beauté et centres de médecine esthétique : photos avant/après, notes, paramètres des appareils et historique dans la fiche client. Dictez vos notes au lieu de les taper.",
    keywords: [
      "logiciel suivi des soins",
      "fiche de soin esthétique",
      "suivi des soins institut de beauté",
      "logiciel photos avant après",
      "application notes de soin",
      "dicter notes de soin",
      "traçabilité des soins médecine esthétique",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Suivi des soins et fiches de soin numériques pour instituts",
      description: "Suivi des soins numérique avec photos avant/après, notes et historique.",
    },
  },
  breadcrumb: "Suivi des soins",
  hero: {
    eyebrow: "Suivi des soins",
    eyebrowIcon: "file-text",
    title: { before: "Documentez vos soins en ", highlight: "numérique" },
    description:
      "Photos, notes et paramètres au même endroit – avec l'aide de l'IA. Au rendez-vous suivant, vous savez tout de suite ce qui a été fait.",
    chips: ["Photos avant/après", "Dictée avec IA", "Signature électronique"],
    secondaryCta: { label: "Formulaires numériques", href: { page: "forms" } },
    capsules: [
      {
        question: "Quel logiciel choisir pour documenter les soins esthétiques ?",
        answer:
          "Treatflow documente les soins en numérique avec photos avant/après, paramètres, notes et signature. Pour les soins avec appareils comme le laser ou l'IPL en particulier, une traçabilité complète est essentielle – Treatflow est conçu pour cela.",
      },
      {
        question: "Comment documenter l'évolution des soins esthétiques ?",
        answer:
          "Chaque séance reçoit une entrée avec paramètres, produits, photos et notes. L'historique reste dans la fiche client. Vous pouvez dicter vos notes ; Treatflow les transforme en texte et peut, si vous le souhaitez, l'améliorer.",
      },
    ],
    image: {
      src: "/images/mockups/dokumentation-hero.png",
      alt: "Suivi des soins Treatflow : fiche de soin avec photos et notes",
    },
  },
  understand: {
    title: "Chaque soin consigné avec soin",
    description:
      "Après chaque séance, vous disposez d'une fiche de soin numérique avec photos, notes et paramètres – le tout enregistré dans la fiche client.",
    items: [
      {
        icon: "camera",
        title: "Photos avant/après",
        text: "Suivez les progrès en photos et montrez à votre client l'évolution des résultats.",
      },
      {
        icon: "brain",
        title: "À la voix ou avec l'IA",
        text: "Dictez vos notes. Treatflow les transforme en texte et peut, si vous le souhaitez, l'améliorer avec l'IA. Moins de saisie, plus de temps pour le soin.",
      },
      {
        icon: "shield",
        title: "Complète et traçable",
        text: "Chaque entrée est enregistrée avec la date, les paramètres et une signature facultative dans la fiche client – en cas de question ultérieure, vous pouvez justifier ce qui a été fait.",
      },
    ],
  },
  howItWorks: {
    description: "Une documentation complète en trois étapes.",
    steps: [
      { title: "Ouvrir la fiche de soin", text: "Ouvrez la fiche de soin directement depuis le rendez-vous ou la fiche client – le client et le soin sont déjà renseignés." },
      { title: "Ajouter photos et notes", text: "Importez des photos, saisissez les paramètres du soin et dictez ou tapez vos notes. Si nécessaire, faites signer le client." },
      { title: "Enregistré et accessible", text: "Tout est automatiquement enregistré dans la fiche client. Au prochain rendez-vous, vous voyez tout de suite ce qui a été fait la dernière fois." },
    ],
  },
  cards: {
    title: "Ce que vous obtenez",
    description: "Tout ce qu'il faut pour un suivi des soins bien tenu – sans paperasse.",
    items: [
      { icon: "camera", title: "Photos avant/après", text: "Enregistrez les photos directement avec le soin et comparez-les chronologiquement.", points: ["Mêmes conditions de prise de vue", "Dans la fiche client", "Conforme au RGPD"] },
      { icon: "mic", title: "Dictée vocale", text: "Parlez au lieu de taper – idéal pendant ou juste après le soin.", points: ["Mains libres", "Rapide", "Formulation claire"] },
      { icon: "brain", title: "Assistant IA", text: "Améliorez et structurez si besoin le texte dicté – vous vérifiez l'entrée avant de l'enregistrer.", points: ["Améliorer le texte", "Structure", "Moins de saisie"] },
      { icon: "file-text", title: "Paramètres et produits", text: "Consignez proprement les réglages des appareils, les produits et les paramètres.", points: ["Laser/IPL", "Produits", "Conseils post-soin"] },
      { icon: "pen-tool", title: "Signature électronique", text: "Recueillez le consentement ou une confirmation sur la tablette.", points: ["Sur l'appareil", "Dans la fiche", "Traçable"] },
      { icon: "shield", title: "Archivage sécurisé", text: "Toute la documentation est conservée sur des serveurs dans l'UE et reste accessible à tout moment.", points: ["Serveurs dans l'UE", "Chiffrée", "Toujours accessible"] },
    ],
  },
  faq: {
    title: "Questions fréquentes sur le suivi des soins",
    items: [
      {
        question: "Quel logiciel choisir pour documenter les soins esthétiques ?",
        answer:
          "Treatflow documente les soins en numérique avec photos avant/après, paramètres, notes et signature. Pour les soins avec appareils comme le laser ou l'IPL en particulier, une traçabilité complète est essentielle – Treatflow est conçu pour cela.",
      },
      {
        question: "Comment documenter l'évolution des soins esthétiques ?",
        answer:
          "Chaque séance reçoit une entrée avec paramètres, numéros de lot, photos et notes. L'historique de la fiche client montre l'évolution d'une séance à l'autre. Vous pouvez dicter vos notes ; Treatflow les transforme en texte et peut, si vous le souhaitez, l'améliorer avec l'IA.",
      },
      {
        question: "Le suivi des soins est-il obligatoire en institut de beauté ?",
        answer:
          "Cela dépend du pays et du soin. Pour les soins avec appareils comme le laser ou l'IPL, une documentation complète est généralement attendue. Pour tous les autres soins, elle est recommandée – pour votre sécurité juridique, la qualité de vos prestations et la satisfaction de vos clients.",
      },
      {
        question: "Que doit contenir une fiche de soin professionnelle ?",
        answer:
          "Le type et la date du soin, les produits et paramètres, les photos avant/après, le diagnostic de peau, les notes d'évolution, les conseils post-soin et, si souhaité, la signature du client.",
      },
      {
        question: "Comment bien prendre les photos avant/après ?",
        answer:
          "Dans les mêmes conditions (lumière, angle, distance). Dans Treatflow, vous enregistrez les photos directement dans la documentation et les rattachez à la fiche client.",
      },
      {
        question: "Que faut-il documenter pour les soins laser et IPL ?",
        answer:
          "En général la consultation, le consentement, les réglages de l'appareil (p. ex. énergie, fréquence, durée d'impulsion), la zone traitée, la réaction de la peau et les conseils post-soin.",
      },
      {
        question: "Puis-je dicter mes notes de soin au lieu de les taper ?",
        answer:
          "Oui. Dans la fiche de soin, vous dictez vos notes. Treatflow convertit la voix en texte et peut, si vous le souhaitez, l'améliorer avec l'IA. Le dossier n'est pas rédigé de façon entièrement automatique.",
      },
      {
        question: "Puis-je marquer les zones traitées sur des photos ou des croquis ?",
        answer:
          "Vous enregistrez les photos avant/après directement avec le soin et marquez les zones sur les photos ; les formulaires proposent des champs croquis avec un modèle de visage ou de corps. Il n'y a pas de module de cartographie corporelle séparé.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "forms" }, title: "Formulaires", description: "Questionnaires de santé et consentements" },
      { href: { page: "client-records" }, title: "Fiches clients", description: "Historique dans la fiche client" },
      { href: { page: "appointment-calendar" }, title: "Agenda et planning", description: "Ouvrir la fiche de soin depuis le rendez-vous" },
    ],
  },
  cta: {
    title: "Envie d'un suivi des soins impeccable ?",
    description: "Essayez gratuitement pendant 14 jours – sans carte bancaire. Fiches de soin, photos et signatures dans une seule application.",
    secondary: { label: "Formulaires numériques", href: { page: "forms" } },
  },
};
