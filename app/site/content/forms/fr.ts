import type { FormsContent } from "./types";

export const formsFr: FormsContent = {
  meta: {
    title: "Questionnaires de santé et consentements numériques pour instituts",
    description:
      "Questionnaires de santé, fiches d'information et formulaires de consentement numériques pour instituts de beauté et centres de médecine esthétique : modèles prêts à l'emploi, générateur de formulaires par IA et éditeur glisser-déposer. Vos clients remplissent et signent avant leur rendez-vous.",
    keywords: [
      "questionnaire de santé esthétique",
      "fiche de renseignements client institut",
      "formulaire de consentement esthétique",
      "fiche anamnèse esthétique",
      "formulaires numériques institut",
      "générateur de formulaires IA",
      "signature électronique institut de beauté",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "formulare",
    webPage: {
      name: "Questionnaires de santé et consentements numériques pour instituts",
      description:
        "Modèles prêts à l'emploi, générateur par IA et éditeur glisser-déposer pour questionnaires de santé et formulaires de consentement en institut.",
    },
  },
  breadcrumb: "Formulaires",
  hero: {
    eyebrow: "Formulaires et générateur IA",
    eyebrowIcon: "file-text",
    title: { before: "Des formulaires pour chaque ", highlight: "soin" },
    description: "Bibliothèque de modèles, générateur IA et glisser-déposer. Utilisez des modèles ou créez vos propres formulaires en quelques minutes.",
    chips: ["Générateur IA", "Bibliothèque de modèles", "Glisser-déposer"],
    secondaryCta: { label: "Essayer les exemples", href: { page: "try-forms" } },
    capsules: [
      {
        question: "De quels formulaires un institut de beauté a-t-il besoin ?",
        answer:
          "Au minimum d'un questionnaire de santé et de formulaires de consentement – et, pour les soins avec appareils comme le laser ou l'IPL, d'une information détaillée sur les risques. Treatflow fournit des modèles prêts à l'emploi et un générateur IA ; vos clients remplissent tout en ligne avant leur rendez-vous et les réponses sont enregistrées dans leur fiche client, conformément au RGPD.",
      },
    ],
    image: {
      src: "/images/mockups/fr/formulare-marketplace.png",
      alt: "Bibliothèque de formulaires Treatflow avec modèles et générateur IA",
    },
  },
  understand: {
    title: "Questionnaire de santé et consentement : adieu le papier",
    description:
      "Vos clients remplissent les formulaires avant le rendez-vous, sur leur propre téléphone. Les réponses arrivent automatiquement dans la fiche client.",
    items: [
      {
        icon: "file-text",
        title: "Utiliser des modèles prêts à l'emploi",
        text: "La bibliothèque propose des questionnaires de santé, des fiches d'information et des consentements – y compris pour les soins laser et IPL.",
      },
      {
        icon: "sparkles",
        title: "Créer vos formulaires avec l'IA",
        text: "Décrivez votre soin avec vos propres mots et l'IA crée le formulaire adapté. Vous pouvez ensuite tout modifier.",
      },
      {
        icon: "send",
        title: "Rempli avant le rendez-vous",
        text: "Envoyez le lien du formulaire par e-mail. Votre client le remplit tranquillement chez lui – et vous gagnez 10 à 15 minutes par rendez-vous.",
      },
    ],
  },
  tryBanner: {
    title: "Essayez des formulaires d'exemple sans inscription",
    text: "Ces modèles montrent à quoi ressemble un accueil client sans papier. Les formulaires de votre institut, vous les créez avec le générateur IA – ou nous les configurons avec vous.",
    button: "Ouvrir les exemples",
    href: { page: "try-forms" },
  },
  howItWorks: {
    description: "De la page blanche au formulaire terminé en trois étapes.",
    steps: [
      { title: "Modèle ou IA", text: "Choisissez un modèle dans la bibliothèque ou décrivez le soin à l'IA – les champs se créent automatiquement." },
      { title: "Ajuster par glisser-déposer", text: "Déplacez, ajoutez ou supprimez des champs. L'aperçu en direct montre ce que verra votre client." },
      { title: "Partager et archiver", text: "Envoi par lien ou QR code. Signature et horodatage sont enregistrés dans la fiche, conformément au RGPD." },
    ],
  },
  cards: {
    title: "Ce que vous obtenez",
    description: "Trois façons de créer vos questionnaires et consentements – avec l'envoi et la signature électronique en prime.",
    items: [
      { icon: "file-text", title: "Bibliothèque de formulaires", text: "Des modèles prêts à l'emploi pour les soins esthétiques – rédigés avec soin et utilisables tout de suite.", points: ["Questionnaires de santé", "Consentements", "Prêts à l'emploi"] },
      { icon: "sparkles", title: "Générateur IA", text: "Décrivez le soin avec vos propres mots – l'IA crée le formulaire avec les champs nécessaires.", points: ["Champs automatiques", "En quelques secondes", "Modifiable ensuite"] },
      { icon: "layout", title: "Éditeur glisser-déposer", text: "Créez vos propres formulaires ou adaptez des modèles – avec tous les types de champs et un aperçu en direct.", points: ["Tous les types de champs", "Aperçu en direct", "Contrôle total"] },
      { icon: "send", title: "Envoyé à l'avance par lien", text: "Le formulaire part par e-mail avant le rendez-vous. Vous gagnez 10 à 15 minutes à l'accueil.", points: ["Par e-mail", "Sur son propre appareil", "Dans la fiche client"] },
      { icon: "pen-tool", title: "Signature électronique", text: "Le consentement se signe sur la tablette. Horodatage et archivage dans l'UE.", points: ["Sur l'appareil", "Horodatage", "Traçable"] },
      { icon: "shield", title: "Archivage sécurisé", text: "Chaque formulaire rempli est conservé avec signature et horodatage sur des serveurs dans l'UE et reste dans la fiche client.", points: ["Serveurs dans l'UE", "Chiffré", "Conforme au RGPD"] },
    ],
  },
  faq: {
    title: "Questions fréquentes sur les formulaires",
    items: [
      {
        question: "De quels formulaires un institut de beauté a-t-il besoin ?",
        answer:
          "Un institut de beauté a besoin au minimum d'un questionnaire de santé et de formulaires de consentement. Pour les soins avec appareils comme le laser ou l'IPL, une information détaillée sur les risques est également importante. Selon le soin, s'ajoutent des questionnaires sur les allergies, des conseils post-soin et des enquêtes de satisfaction.",
      },
      {
        question: "Que doit contenir un questionnaire de santé en esthétique ?",
        answer:
          "Un questionnaire de santé pour les soins esthétiques doit recueillir les données personnelles, les médicaments pris, les allergies et intolérances, les affections cutanées, une éventuelle grossesse et les soins précédents. Pour les soins avec appareils comme le laser ou l'IPL, des questions supplémentaires sont généralement nécessaires.",
      },
      {
        question: "Puis-je envoyer les questionnaires à mes clients en ligne ?",
        answer:
          "Oui. Avec Treatflow, vous envoyez les formulaires à vos clients par e-mail avant leur rendez-vous. Ils les remplissent à l'avance sur leur propre téléphone. Vous gagnez ainsi 10 à 15 minutes par rendez-vous à l'institut.",
      },
      {
        question: "Les consentements numériques ont-ils une valeur juridique ?",
        answer:
          "Dans la plupart des pays, les consentements signés électroniquement sont juridiquement reconnus. Treatflow conserve chaque formulaire avec horodatage et signature, conformément au RGPD, dans l'UE.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "try-forms" }, title: "Essayer les formulaires", description: "Remplir des formulaires d'exemple sans inscription" },
      { href: { page: "treatment-documentation" }, title: "Suivi des soins", description: "Formulaires et historique des soins" },
      { href: { page: "client-records" }, title: "Fiches clients", description: "Formulaires remplis dans la fiche" },
    ],
  },
  cta: {
    title: "Passez aux formulaires numériques",
    description: "Essayez gratuitement pendant 14 jours – bibliothèque de modèles, générateur IA et glisser-déposer, sans carte bancaire.",
    secondary: { label: "Essayer les exemples", href: { page: "try-forms" } },
  },
};
