import type { StudioWebsiteContent } from "./types";

export const studioWebsiteFr: StudioWebsiteContent = {
  meta: {
    title: "Site web sur mesure pour instituts de beauté",
    description:
      "Un site web sur mesure pour votre institut de beauté, centre laser ou activité beauté. Professionnel, adapté au mobile et conçu pour les réservations. À partir de 1 000 euros.",
    keywords: [
      "site web institut de beauté",
      "création site institut de beauté",
      "site internet salon de beauté",
      "site web centre laser",
      "site web onglerie",
      "site web maquillage permanent",
    ],
  },
  schema: {
    serviceName: "Site web sur mesure pour instituts de beauté",
    serviceDescription:
      "Des sites web professionnels et sur mesure pour les instituts et entreprises de beauté. Optimisés pour les réservations et l'acquisition de nouvelles clientes.",
    serviceType: "Conception de sites web",
    areaServed: ["FR", "BE"],
    priceDescription: "Site web sur mesure à partir de 1 000 euros",
  },
  emailHref: `mailto:hello@treatflow.io?subject=${encodeURIComponent("Demande de projet de site web")}`,
  hero: {
    badge: "Nouveau service de Treatflow",
    title: { before: "Des sites web sur mesure pour les", highlight: "instituts de beauté" },
    lead: "Professionnels, modernes et conçus pour les réservations. Votre site devient votre meilleur canal pour attirer de nouvelles clientes.",
    sub: "Nous ne créons pas simplement de beaux sites. Nous créons des sites qui inspirent confiance et génèrent des demandes.",
    primaryCta: "Conseil gratuit",
    emailCta: "Demande par e-mail",
    checks: ["À partir de 1 000 euros", "Design sur mesure", "Prêt en 2 à 4 semaines"],
  },
  demo: {
    badge: "Voir un exemple en ligne (en allemand)",
    title: "Voici à quoi peut ressembler le site de votre institut",
    description: "Jugez par vous-même. Nous avons créé ce site d'exemple pour un institut premium fictif.",
    href: "/demo/skin-atelier",
    imageAlt: "Skin Atelier – site de démonstration Treatflow pour instituts de beauté (en allemand)",
    overlayLabel: "Site de démonstration",
    overlayTitle: "Skin Atelier Munich",
    hoverCta: "Voir la démo",
    cardTitle: "Site de démonstration sur mesure",
    cardText: "Design premium avec réservation intégrée, soins, avis clients et plus encore",
    cardCta: "Voir en ligne",
  },
  why: {
    title: "Pourquoi votre institut a besoin d'un site professionnel",
    description:
      "Vos clientes se renseignent en ligne avant de réserver. Un site professionnel est votre carte de visite numérique et votre meilleur outil pour gagner de nouvelles clientes.",
    stats: [
      { value: "97 %", label: "cherchent en ligne", desc: "Presque toutes les clientes cherchent un institut sur Google avant de réserver." },
      { value: "75 %", label: "jugent sur le site", desc: "La qualité de votre site influence la confiance accordée à votre institut." },
      { value: "3x", label: "plus de demandes", desc: "Les instituts dotés d'un site professionnel reçoivent nettement plus de demandes de réservation." },
    ],
  },
  services: {
    title: "Ce que contient votre site",
    description: "Chaque site est conçu sur mesure pour votre institut. Pas de modèle, pas de compromis.",
    items: [
      {
        icon: "palette",
        title: "Design sur mesure",
        desc: "Pas de constructeur de site, pas de modèle. Votre institut reçoit un design fidèle à votre marque qui inspire confiance.",
      },
      {
        icon: "smartphone",
        title: "Adapté au mobile",
        desc: "Plus de 80 % de vos visiteurs arrivent depuis leur téléphone. Votre site est parfait sur tous les appareils.",
      },
      {
        icon: "search",
        title: "Bases SEO",
        desc: "Une technique propre, un chargement rapide et des contenus optimisés pour que votre institut soit trouvé sur Google.",
      },
      {
        icon: "mouse-pointer-click",
        title: "Conçu pour les réservations",
        desc: "Chaque page est pensée pour transformer les visiteurs en demandes ou en réservations.",
      },
      {
        icon: "calendar-days",
        title: "Réservation intégrée",
        desc: "Votre lien de réservation Treatflow, votre formulaire de contact ou un bouton d'appel, intégrés directement.",
      },
      {
        icon: "globe",
        title: "Adapté à chaque spécialité",
        desc: "Esthétique, laser, Hydrafacial, maquillage permanent, microneedling, ongles, cils et plus encore.",
      },
    ],
  },
  advantage: {
    badge: "Avantage exclusif",
    title: "Idéal avec Treatflow",
    description:
      "Votre site est encore plus efficace lorsqu'il est connecté à Treatflow. Lien de réservation, soins et horaires d'ouverture peuvent être repris directement depuis Treatflow.",
    points: [
      "Lien de réservation en ligne intégré",
      "Soins et tarifs sur votre site",
      "Mise à jour automatique possible",
      "Un parcours client fluide, du clic au rendez-vous",
    ],
    boxTitle: "Avantage clients Treatflow",
    boxText: "En tant que client Treatflow, vous recevez en plus lors de la commande d'un site :",
    creditAmount: "200 euros",
    creditLabel: "de crédit Treatflow offert",
    creditNote: "Utilisable pour votre abonnement Treatflow. Vous économisez ainsi aussi sur votre logiciel d'institut.",
  },
  pricing: {
    title: "Des prix transparents, sans frais cachés",
    description: "Nous croyons à des prix justes et clairs. Pas de petits caractères.",
    badge: "Projet de site sur mesure",
    price: { prefix: "à partir de", amount: "1\u00a0000", currency: "euros" },
    note: "Paiement unique. Pas d'abonnement pour la création du site.",
    points: [
      "Design sur mesure selon vos envies",
      "Responsive sur tous les appareils",
      "Optimisation SEO de base",
      "Structure orientée conversion",
      "Contact et réservation intégrés",
      "Jusqu'à 5 sous-pages incluses",
      "Mentions légales et politique de confidentialité",
      "Chiffrement SSL",
    ],
    customerLabel: "Clients Treatflow :",
    customerText: "200 euros de crédit Treatflow inclus",
    cta: "Demander un projet de site",
    footnote: "Premier échange sans engagement. Nos conseils sont gratuits.",
  },
  process: {
    title: "Comment naît le site de votre institut",
    description: "De la première idée au site terminé – en quatre étapes simples.",
    steps: [
      { step: "01", title: "Premier échange", desc: "Nous découvrons votre institut, comprenons vos objectifs et définissons le périmètre." },
      { step: "02", title: "Concept et design", desc: "Nous créons un concept graphique sur mesure, fidèle à votre marque." },
      { step: "03", title: "Réalisation", desc: "Votre site est développé de manière professionnelle et rempli avec vos contenus." },
      { step: "04", title: "Mise en ligne", desc: "Après votre validation, le site est mis en ligne. Nous vous accompagnons lors du lancement." },
    ],
  },
  faq: {
    title: "Questions fréquentes sur la création de votre site",
    description: "Tout ce que vous devez savoir avant de passer commande.",
    items: [
      {
        question: "Combien de temps faut-il pour créer le site de mon institut ?",
        answer:
          "En général, votre site est prêt en 2 à 4 semaines. Le délai exact dépend du périmètre et de la livraison de vos contenus.",
      },
      {
        question: "Dois-je déjà avoir des textes et des photos ?",
        answer:
          "Non, ce n'est pas obligatoire. Nous vous aidons à rédiger les textes et vous conseillons sur les visuels. Des photos professionnelles de votre institut sont bien sûr idéales, mais nous trouverons ensemble la meilleure solution.",
      },
      {
        question: "Puis-je utiliser mon nom de domaine actuel ?",
        answer:
          "Oui, bien sûr. Si vous avez déjà un nom de domaine, nous y installons votre nouveau site. Sinon, nous vous aidons à le choisir et à l'enregistrer.",
      },
      {
        question: "Le site peut-il être combiné avec Treatflow ?",
        answer:
          "Absolument. Votre lien de réservation Treatflow, vos soins et vos horaires peuvent être intégrés directement au site. Vos nouvelles clientes réservent ainsi directement depuis votre propre site.",
      },
      {
        question: "Combien coûte un site sur mesure ?",
        answer:
          "Les sites sur mesure commencent à 1 000 euros. Le prix final dépend du périmètre et des fonctionnalités souhaitées. Les clients Treatflow reçoivent en plus 200 euros de crédit Treatflow.",
      },
      {
        question: "Vous occupez-vous aussi de l'hébergement et de la maintenance ?",
        answer:
          "Oui, sur demande, nous prenons aussi en charge l'hébergement et la maintenance technique de votre site. Vous n'avez à vous soucier de rien.",
      },
      {
        question: "Pourrai-je modifier le site moi-même plus tard ?",
        answer:
          "Selon la configuration, nous proposons des solutions qui vous permettent d'effectuer vous-même des modifications simples comme les textes et les images. Pour les changements plus importants, nous vous accompagnons.",
      },
    ],
  },
  cta: {
    title: "Prêt pour le site professionnel de votre institut ?",
    description: "Construisons ensemble le site idéal pour votre institut. Conseil gratuit et sans engagement.",
    primary: "Conseil gratuit",
    email: "Demande par e-mail",
    checks: ["Sans engagement", "Conseil personnalisé", "Spécialistes de la beauté"],
  },
};
