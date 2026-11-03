import {
  BarChart3,
  Bell,
  Calendar,
  CalendarDays,
  Camera,
  ClipboardCheck,
  Clock,
  CreditCard,
  FilePenLine,
  FileText,
  FolderOpen,
  Gift,
  Globe,
  LayoutDashboard,
  Link2,
  Mail,
  MessageCircle,
  Mic,
  Package,
  PenLine,
  Plug,
  Receipt,
  RefreshCw,
  Search,
  Send,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  Workflow,
  Zap,
  CalendarClock,
  Ban,
  KeyRound,
  BadgePercent,
  CalendarCog,
} from "lucide-react";
import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { FeatureContent, LocaleSiteContent } from "../types";

/**
 * Französische Funktions- und Branchenseiten (Frankreich zuerst, auch BE/LU/CH).
 * Quelle: aktuelle englische Seiten. Interne Links als EN-Pfad (/en/...).
 */

/* ------------------------------------------------------------------ */
/* Gemeinsame Bausteine                                                */
/* ------------------------------------------------------------------ */

const featureDefaults = {
  primaryCta: "Démarrer l'essai gratuit de 14 jours",
  bottomTitle: "Prêt à vous lancer ?",
  bottomText: "Démarrez votre essai gratuit – sans carte bancaire, résiliable à tout moment.",
  relatedTitle: "Pages associées",
  trustItems: ["Hébergement dans l'UE", "14 jours d'essai gratuit", "Aucune commission sur les réservations"],
  faqTitle: "Questions fréquentes",
  faqBadge: "FAQ",
  breadcrumbHomeHref: "/en",
} satisfies Partial<FeatureContent>;

const industryDefaults: Pick<
  InternationalPageContent,
  | "locale"
  | "areaServed"
  | "ctaPrimaryLabel"
  | "ctaBottomTitle"
  | "ctaBottomText"
  | "trustTrialLabel"
  | "internalLinksTitle"
> = {
  locale: "fr",
  areaServed: ["FR", "BE", "LU"],
  ctaPrimaryLabel: "Essayer gratuitement",
  ctaBottomTitle: "Prêt à gérer tout votre institut au même endroit ?",
  ctaBottomText:
    "Démarrez un essai gratuit de 14 jours – sans carte bancaire, résiliable à tout moment.",
  trustTrialLabel: "14 jours d'essai gratuit",
  internalLinksTitle: "Pages associées",
};

const marketLabel = "France";

const faqGetStarted = {
  question: "Comment démarrer ?",
  answer:
    "Inscrivez-vous sur app.treatflow.io et lancez votre essai gratuit de 14 jours. Aucune carte bancaire requise. Disponible en France, en Belgique, au Luxembourg, en Suisse et partout ailleurs.",
};

const faqHosting = {
  question: "Où les données sont-elles hébergées ?",
  answer: "Treatflow héberge les données dans l'UE (Francfort) et est conçu pour être conforme au RGPD.",
};

const rgpdHosting = "Hébergement dans l'UE conforme au RGPD";
const rgpdSupport = "Hébergé dans l'UE et conçu pour le RGPD";

/* ------------------------------------------------------------------ */
/* Kernfunktionen                                                      */
/* ------------------------------------------------------------------ */

const coreFeatures: LocaleSiteContent["coreFeatures"] = {
  "appointment-calendar": {
    ...featureDefaults,
    eyebrow: "Agenda",
    title: "Tous vos rendez-vous, clairement organisés",
    subtitle:
      "Gérez tout le planning de votre institut au même endroit – avec des vues jour, semaine et mois que votre équipe comprend au premier coup d'œil.",
    bullets: [
      "Vues jour, semaine et mois",
      "Planning de plusieurs collaborateurs et cabines",
      "Glisser-déposer pour déplacer un rendez-vous en quelques secondes",
      "Synchronisation automatique avec la réservation en ligne",
    ],
    image: {
      src: "/images/lifestyle/terminkalender-wochenplanung.png",
      alt: "Agenda Treatflow en vue planning de la semaine",
    },
    features: [
      {
        icon: CalendarDays,
        title: "Des vues claires",
        desc: "Passez du jour à la semaine ou au mois – toujours la bonne vue d'ensemble au bon moment.",
      },
      {
        icon: Users,
        title: "Planning d'équipe",
        desc: "Gérez en même temps les rendez-vous de plusieurs collaborateurs, cabines et équipements.",
      },
      {
        icon: RefreshCw,
        title: "Toujours synchronisé",
        desc: "Les réservations en ligne arrivent directement dans l'agenda – fini les doubles réservations.",
      },
      {
        icon: Clock,
        title: "Déplacement rapide",
        desc: "Déplacez ou prolongez un rendez-vous d'un simple glisser-déposer.",
      },
      {
        icon: Smartphone,
        title: "Sur tous vos appareils",
        desc: "Gérez votre agenda depuis l'ordinateur, la tablette ou le téléphone.",
      },
      {
        icon: Bell,
        title: "Rappels automatiques",
        desc: "Réduisez les rendez-vous manqués grâce aux rappels automatiques par WhatsApp et e-mail.",
      },
      { icon: CalendarClock, title: "Planning des équipes", desc: "Planifiez la semaine de votre équipe avec des créneaux de travail, des modèles et des absences. La réservation en ligne ne propose alors que des horaires pendant les créneaux planifiés." },
      { icon: Ban, title: "Blocages et séries", desc: "Bloquez pauses, réunions d'équipe et congés – aussi de façon récurrente. Planifiez les cures comme une série de séances." },
      { icon: KeyRound, title: "Tablette avec code PIN", desc: "Chaque membre de l'équipe se connecte avec son propre code PIN. Les rôles séparent administrateurs et employés, le verrouillage d'écran protège les données clients." },
    ],
    closingTitle: "Moins d'administratif, plus de temps pour vos clients",
    closingText:
      "Un agenda bien organisé est le cœur de chaque institut. Treatflow garde votre planning en ordre pour que vous et votre équipe puissiez vous concentrer sur l'essentiel : des soins réussis et des clients satisfaits.",
    faqs: [
      {
        question: "Comment fonctionne l'agenda Treatflow ?",
        answer:
          "Vous disposez de vues jour, semaine et mois avec des colonnes par collaborateur ou par cabine. Les réservations en ligne arrivent dans le même agenda, ce qui évite les doubles réservations. Un glisser-déposer suffit pour déplacer un rendez-vous.",
      },
      {
        question: "L'agenda est-il synchronisé avec la réservation en ligne ?",
        answer:
          "Oui. Dès qu'un client réserve sur votre page de réservation Treatflow, le créneau apparaît dans l'agenda de l'institut. Les rappels peuvent partir par WhatsApp et e-mail.",
      },
    ],
    relatedLinks: [
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/messaging", label: "Rappels" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
    ],
  },

  "online-booking": {
    ...featureDefaults,
    eyebrow: "Réservation en ligne",
    title: "Vos clients réservent eux-mêmes – 24 h/24",
    subtitle:
      "Une page de réservation à vos couleurs qui remplit votre agenda même en dehors des heures d'ouverture – sans allers-retours au téléphone ni doubles réservations.",
    bullets: [
      "Réservable jour et nuit",
      "Uniquement les créneaux réellement disponibles",
      "Acompte en option pour limiter les rendez-vous manqués",
      "Confirmations et rappels inclus",
    ],
    image: {
      src: "/images/lifestyle/online-buchung-smartphone.png",
      alt: "Cliente réservant un soin de beauté sur son smartphone",
    },
    features: [
      {
        icon: Globe,
        title: "Votre page de réservation",
        desc: "Partagez un lien de réservation soigné sur votre site, Instagram et votre fiche Google.",
      },
      {
        icon: Clock,
        title: "Disponibilités en temps réel",
        desc: "Vos clients ne voient que les créneaux réellement libres – aucune double réservation.",
      },
      {
        icon: CreditCard,
        title: "Acompte en option",
        desc: "Demandez un acompte pour les prestations très demandées et protégez votre temps en cabine.",
      },
      {
        icon: Bell,
        title: "Confirmations automatiques",
        desc: "Confirmation immédiate et rappels qui réduisent les rendez-vous manqués.",
      },
      {
        icon: Smartphone,
        title: "Pensé pour le mobile",
        desc: "Conçu pour le téléphone – là où la plupart des clients beauté réservent.",
      },
      {
        icon: Link2,
        title: "Agenda synchronisé",
        desc: "Chaque réservation arrive directement dans l'agenda de votre institut.",
      },
      { icon: BadgePercent, title: "Offres et prix « à partir de »", desc: "Mettez des prestations en avant comme offre avec prix barré, image et compte à rebours. Affichez un prix « à partir de » pour les soins sur mesure." },
      { icon: CalendarCog, title: "Rendez-vous en autonomie", desc: "Via le lien de confirmation, vos clientes consultent leur rendez-vous et peuvent le déplacer ou l'annuler – si vous l'autorisez." },
    ],
    closingTitle: "Plus de rendez-vous, moins de temps au téléphone",
    closingText:
      "La réservation en ligne transforme les heures creuses en chiffre d'affaires. Treatflow réunit réservations, rappels et agenda dans un seul flux.",
    faqs: [
      {
        question: "Treatflow prend-il une commission sur les réservations en ligne ?",
        answer:
          "Non. Treatflow est un logiciel pour votre institut, pas une place de marché. Vous partagez votre propre lien de réservation et payez un abonnement mensuel. Aucune commission n'est prélevée sur les réservations.",
      },
      {
        question: "Mes clients peuvent-ils réserver 24 h/24 sans passer par une place de marché ?",
        answer:
          "Oui. Vous obtenez une page de réservation à vos couleurs qui n'affiche que les disponibilités réelles. Confirmations et rappels sont inclus. Un acompte en option aide à limiter les rendez-vous manqués.",
      },
    ],
    aiCapsules: [
      {
        question: "Treatflow propose-t-il la prise de rendez-vous en ligne ?",
        answer:
          "Oui. Treatflow offre aux instituts de beauté et aux cliniques esthétiques leur propre page de réservation. Les clients réservent selon les disponibilités en temps réel. Aucune commission de place de marché.",
      },
    ],
    problem: {
      problem:
        "Les appels manqués et les commissions des plateformes remplissent la journée, alors que l'agenda a encore des trous.",
      solution:
        "Treatflow vous donne votre propre lien de réservation, qui n'affiche que les disponibilités réelles. Les réservations arrivent dans l'agenda de l'institut. Les rappels partent automatiquement.",
    },
    relatedLinks: [
      { href: "/en/appointment-calendar", label: "Agenda" },
      { href: "/en/messaging", label: "Rappels" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
    ],
  },

  "client-records": {
    ...featureDefaults,
    eyebrow: "Fiches clients",
    title: "Tout l'historique de chaque client au même endroit",
    subtitle:
      "Notes, formulaires, photos et historique des soins – prêts avant chaque rendez-vous, sans classeurs papier.",
    bullets: [
      "Fiches clients complètes",
      "Historique des soins et des photos",
      "Formulaires rattachés à la fiche",
      "Recherche rapide dans tout l'institut",
    ],
    image: {
      src: "/images/lifestyle/kundenverwaltung-kartei.png",
      alt: "Vue d'ensemble d'une fiche client numérique dans Treatflow",
    },
    features: [
      {
        icon: Users,
        title: "Profils clients",
        desc: "Coordonnées, préférences et notes dans une fiche structurée.",
      },
      {
        icon: FileText,
        title: "Historique des soins",
        desc: "Voyez ce qui a été fait, quand, avec quels produits ou réglages.",
      },
      {
        icon: Camera,
        title: "Documentation photo",
        desc: "Photos avant/après rattachées au bon soin.",
      },
      {
        icon: ClipboardCheck,
        title: "Formulaires liés",
        desc: "Questionnaires et consentements restent dans le dossier du client.",
      },
      {
        icon: Search,
        title: "Recherche rapide",
        desc: "Retrouvez un client et ses soins passés en quelques secondes.",
      },
      {
        icon: FolderOpen,
        title: "Archives sans papier",
        desc: "Remplacez les classeurs par des archives numériques consultables.",
      },
    ],
    closingTitle: "Connaissez votre client avant même qu'il ne s'installe",
    closingText:
      "Des fiches bien tenues, ce sont des soins plus sûrs et une expérience plus personnelle – sans fouiller dans les papiers.",
    faqs: [
      {
        question: "Les fiches clients numériques de Treatflow sont-elles conformes au RGPD ?",
        answer:
          "Oui. Les fiches sont hébergées sur des serveurs européens à Francfort, avec chiffrement SSL et sauvegardes quotidiennes. Formulaires, photos et historique des soins se trouvent dans le même dossier client. L'institut reste propriétaire des données de ses clients.",
      },
      {
        question: "Que contient une fiche client Treatflow ?",
        answer:
          "Coordonnées, notes, questionnaires et consentements, historique des soins et photos avant/après – consultables dans tout l'institut pour que l'équipe soit prête avant chaque visite.",
      },
    ],
    aiCapsules: [
      {
        question: "Puis-je conserver l'historique de mes clients dans Treatflow ?",
        answer:
          "Oui. Treatflow enregistre coordonnées, notes, formulaires, historique des soins et photos sur une seule fiche client, que toute l'équipe peut ouvrir avant chaque visite.",
      },
    ],
    problem: {
      problem:
        "Les notes, photos et formulaires des clients sont dispersés entre classeurs, messageries et appareils.",
      solution:
        "Treatflow réunit l'historique sur une seule fiche : formulaires, notes, photos et soins précédents restent ensemble.",
    },
    relatedLinks: [
      { href: "/en/forms", label: "Questionnaires et consentements" },
      { href: "/en/treatment-documentation", label: "Documentation des soins" },
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/aesthetic-clinic-software", label: "Logiciel pour clinique esthétique" },
    ],
  },

  forms: {
    ...featureDefaults,
    eyebrow: "Questionnaires et consentements",
    title: "Questionnaires et formulaires de consentement numériques",
    subtitle:
      "Envoyez questionnaires et formulaires de consentement avant le rendez-vous. Créez vos propres formulaires à partir de modèles ou avec le générateur IA – ou laissez-nous les configurer avec vous.",
    bullets: [
      "Vos clients remplissent les formulaires avant d'arriver",
      "Signature électronique sur tous les appareils",
      "Modèles, générateur de formulaires IA ou configuration avec notre aide",
      "Enregistrés en toute sécurité sur la fiche client",
    ],
    image: {
      src: "/images/lifestyle/formulare-digital-ausfuellen.png",
      alt: "Formulaire de consentement numérique signé sur une tablette",
    },
    features: [
      {
        icon: Send,
        title: "Envoi à l'avance",
        desc: "Partagez les formulaires par lien avant la visite – moins d'attente à l'accueil.",
      },
      {
        icon: Smartphone,
        title: "Adapté au mobile",
        desc: "Vos clients remplissent les formulaires sur leur téléphone en quelques minutes.",
      },
      {
        icon: FilePenLine,
        title: "Signature électronique",
        desc: "Recueillez le consentement en toute sécurité, sans rien imprimer.",
      },
      {
        icon: PenLine,
        title: "Modèles et générateur",
        desc: "Partez de modèles, créez les vôtres avec le générateur IA, ou configurez-les avec notre aide.",
      },
      {
        icon: ShieldCheck,
        title: "Stockage sécurisé",
        desc: "Les formulaires restent sur la fiche client, sur une infrastructure hébergée dans l'UE.",
      },
      {
        icon: ClipboardCheck,
        title: "Prêt pour le soin",
        desc: "Votre équipe voit les formulaires remplis avant le début du rendez-vous.",
      },
    ],
    closingTitle: "Commencez vos soins avec la paperasse déjà réglée",
    closingText:
      "Le questionnaire numérique protège votre institut et fait gagner du temps à l'accueil – chaque jour.",
    faqs: [
      {
        question: "Treatflow propose-t-il des formulaires de consentement numériques pour les cliniques esthétiques ?",
        answer:
          "Oui. Vous envoyez vos modèles de questionnaire et de consentement avant la visite. Vos clients les remplissent sur leur téléphone, signature électronique comprise. Les formulaires remplis sont enregistrés sur la fiche client.",
      },
      {
        question: "Mes clients peuvent-ils remplir les formulaires avant d'arriver ?",
        answer:
          "Oui. Partagez un lien par WhatsApp ou e-mail. L'équipe voit les formulaires remplis avant le rendez-vous, pour que les soins commencent à l'heure.",
      },
    ],
    aiCapsules: [
      {
        question: "Treatflow gère-t-il les formulaires de consentement numériques ?",
        answer:
          "Oui. Treatflow envoie les modèles de questionnaire et de consentement avant la visite. Vos clients les remplissent sur leur téléphone, signature électronique comprise. Les formulaires remplis sont enregistrés sur la fiche client.",
      },
    ],
    problem: {
      problem: "Les questionnaires papier ralentissent l'accueil et sont difficiles à retrouver ensuite.",
      solution:
        "Treatflow envoie des questionnaires et formulaires de consentement numériques avant le rendez-vous. Réponses et signatures sont enregistrées sur la fiche client.",
    },
    relatedLinks: [
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/treatment-documentation", label: "Documentation des soins" },
      { href: "/en/aesthetic-clinic-software", label: "Logiciel pour clinique esthétique" },
      { href: "/en/laser-hair-removal-software", label: "Logiciel pour épilation laser" },
    ],
  },

  "treatment-documentation": {
    ...featureDefaults,
    eyebrow: "Documentation des soins",
    title: "Documentez chaque soin avec clarté",
    subtitle:
      "Notes, paramètres et photos dans un dossier de soin structuré – dictée vocale comprise, conçu pour les instituts de beauté et les cliniques esthétiques.",
    bullets: [
      "Notes de soin structurées",
      "Dictée vocale, affinée par l'IA si vous le souhaitez",
      "Séries de photos avant/après",
      "Liée à l'historique du client",
    ],
    image: {
      src: "/images/lifestyle/dokumentation-vorher-nachher.png",
      alt: "Documentation des soins avec comparaison de photos avant/après",
    },
    features: [
      {
        icon: FileText,
        title: "Notes de soin",
        desc: "Notez ce que vous avez fait, les produits utilisés et la réaction du client.",
      },
      {
        icon: Mic,
        title: "Dictée vocale",
        desc: "Dictez vos notes au lieu de les taper. Treatflow transforme la voix en texte et peut l'affiner avec l'IA.",
      },
      {
        icon: Camera,
        title: "Preuves en photo",
        desc: "Joignez les photos avant/après au soin concerné.",
      },
      {
        icon: ClipboardCheck,
        title: "Suivi facilité",
        desc: "Retrouvez instantanément le dernier soin lors de la visite suivante.",
      },
      {
        icon: ShieldCheck,
        title: "Traçabilité",
        desc: "Gardez une trace claire des soins liés à un consentement.",
      },
      {
        icon: Users,
        title: "Visible par l'équipe",
        desc: "Vos collègues voient la même documentation lorsqu'ils prennent le relais.",
      },
    ],
    closingTitle: "Une documentation qui protège et rassure",
    closingText:
      "Des dossiers de soin clairs améliorent la sécurité, la continuité et la confiance des clients – sans ralentir votre journée.",
    faqs: [
      {
        question: "Les centres d'épilation laser peuvent-ils documenter leurs séances dans Treatflow ?",
        answer:
          "Oui. Vous enregistrez paramètres, notes et photos avant/après à chaque séance. L'historique est rattaché au client, ce qui facilite le suivi et les passages de relais dans l'équipe.",
      },
      {
        question: "Les photos avant/après sont-elles enregistrées sur la fiche client ?",
        answer:
          "Oui. Les séries de photos sont rattachées au soin concerné, et non à une pellicule quelconque : vous pouvez comparer l'évolution lors de la visite suivante.",
      },
      {
        question: "Puis-je dicter mes notes de soin dans Treatflow ?",
        answer:
          "Oui. Dans la documentation des soins, vous pouvez dicter vos notes au lieu de les taper. Treatflow transforme la voix en texte et peut l'affiner avec l'IA. La note est enregistrée sur la visite.",
      },
    ],
    aiCapsules: [
      {
        question: "Puis-je documenter mes soins dans Treatflow ?",
        answer:
          "Oui. Treatflow enregistre notes de soin, paramètres et photos avant/après sur la visite du client. Vous pouvez taper vos notes ou les dicter, et affiner le texte avec l'IA si vous le souhaitez.",
      },
    ],
    problem: {
      problem:
        "Notes et photos finissent sur des téléphones, des papiers et des conversations, sans lien avec la visite.",
      solution:
        "Treatflow rattache notes et photos au soin. Vous pouvez dicter vos notes : la documentation reste sur la visite sans ralentir la séance.",
    },
    relatedLinks: [
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/forms", label: "Questionnaires et consentements" },
      { href: "/en/laser-hair-removal-software", label: "Logiciel pour épilation laser" },
      { href: "/en/aesthetic-clinic-software", label: "Logiciel pour clinique esthétique" },
    ],
  },
};

/* ------------------------------------------------------------------ */
/* Zusatzfunktionen                                                    */
/* ------------------------------------------------------------------ */

const extraDefaults = {
  primaryCta: "Démarrer l'essai gratuit de 14 jours",
  bottomTitle: "Prêt à vous lancer ?",
  bottomText: "Démarrez votre essai gratuit – sans carte bancaire, résiliable à tout moment.",
  relatedTitle: "Pages associées",
  faqTitle: "Questions fréquentes",
  faqBadge: "FAQ",
  breadcrumbHomeHref: "/en",
  trustItems: featureDefaults.trustItems,
} satisfies Partial<FeatureContent>;

const extraFeatures: LocaleSiteContent["extraFeatures"] = {
  vouchers: {
    ...extraDefaults,
    eyebrow: "Bons cadeaux",
    title: "Vendez et encaissez vos bons cadeaux sans prise de tête",
    subtitle:
      "Créez des bons cadeaux, vendez-les en quelques clics et déduisez automatiquement les soldes restants – un levier simple de chiffre d'affaires pour votre institut.",
    bullets: [
      "Vente de bons à l'institut ou en ligne",
      "Utilisation totale ou partielle",
      "Suivi automatique du solde restant",
      "Validité et historique client clairs",
    ],
    image: {
      src: "/images/product-updates/rabattcodes-kalender.png",
      alt: "Bons cadeaux et codes promo Treatflow dans l'agenda",
    },
    features: [
      {
        icon: Gift,
        title: "Bons cadeaux",
        desc: "Proposez des bons d'un montant fixe ou pour un soin précis, que vos clients adorent offrir.",
      },
      {
        icon: Receipt,
        title: "Vente rapide",
        desc: "Ajoutez un bon cadeau à la note du client en quelques secondes.",
      },
      {
        icon: Ticket,
        title: "Utilisation simple",
        desc: "Saisissez le code ou sélectionnez le bon lorsque le client revient.",
      },
      {
        icon: RefreshCw,
        title: "Solde restant",
        desc: "En cas d'utilisation partielle, le solde est mis à jour automatiquement.",
      },
      {
        icon: Calendar,
        title: "Durée de validité",
        desc: "Définissez des dates d'expiration pour des offres claires et faciles à gérer.",
      },
      {
        icon: BarChart3,
        title: "Suivi des ventes",
        desc: "Voyez combien de bons ont été vendus, utilisés ou restent ouverts.",
      },
    ],
    closingTitle: "Des bons cadeaux qui font vraiment revenir les clients",
    closingText:
      "Les bons cadeaux remplissent les journées calmes et vous amènent de nouveaux clients. Treatflow simplifie la vente et l'utilisation pour que rien ne se perde dans un tableur.",
  },

  messaging: {
    ...extraDefaults,
    eyebrow: "Messages et rappels",
    title: "Moins de rendez-vous manqués grâce aux messages automatiques WhatsApp et e-mail",
    subtitle:
      "Envoyez automatiquement confirmations de réservation, rappels de rendez-vous et messages de suivi – par WhatsApp et e-mail, sans relancer vos clients à la main.",
    bullets: [
      "Confirmations de réservation automatiques",
      "Rappels par WhatsApp et e-mail avant les rendez-vous",
      "Messages de suivi après les soins",
      "Messages d'anniversaire et de relance",
    ],
    image: {
      src: "/images/lifestyle/sms-erinnerung-studio.png",
      alt: "Cliente recevant sur WhatsApp un rappel de rendez-vous de son institut de beauté",
    },
    features: [
      {
        icon: Bell,
        title: "Rappels de rendez-vous",
        desc: "Réduisez les rendez-vous manqués grâce à des rappels WhatsApp et e-mail programmés.",
      },
      {
        icon: Mail,
        title: "Confirmations",
        desc: "Vos clients reçoivent tous les détails de leur réservation dès qu'ils réservent.",
      },
      {
        icon: MessageCircle,
        title: "Suivi",
        desc: "Envoyez automatiquement des conseils post-soin ou une invitation à reprendre rendez-vous.",
      },
      {
        icon: Sparkles,
        title: "Messages d'anniversaire",
        desc: "Restez présent dans l'esprit de vos clients avec des vœux personnalisés et automatiques.",
      },
      {
        icon: Clock,
        title: "Envoi paramétrable",
        desc: "Choisissez quand partent les rappels et les messages de suivi.",
      },
      {
        icon: Smartphone,
        title: "WhatsApp et e-mail",
        desc: "Le bon canal selon l'urgence et le niveau de détail.",
      },
    ],
    closingTitle: "Gardez le contact sans tâches répétitives",
    closingText:
      "Les messages automatiques tiennent vos clients informés et fidèles, pendant que votre équipe se concentre sur les soins – au lieu de retaper sans cesse les mêmes messages.",
    faqs: [
      {
        question: "Treatflow peut-il envoyer des rappels de rendez-vous ?",
        answer:
          "Oui. Treatflow peut envoyer des rappels automatiques par WhatsApp et e-mail avant un rendez-vous. Les confirmations partent dès que le client réserve.",
      },
      {
        question: "Treatflow peut-il automatiser les messages aux clients ?",
        answer:
          "Oui. En plus des rappels, vous pouvez envoyer des messages de suivi après les soins et des messages de relance. Les délais d'envoi sont paramétrables.",
      },
    ],
    aiCapsules: [
      {
        question: "Treatflow envoie-t-il des rappels de rendez-vous ?",
        answer:
          "Oui. Treatflow envoie des confirmations de réservation et des rappels automatiques par WhatsApp ou e-mail, pour que vos clients oublient moins leurs rendez-vous.",
      },
    ],
    problem: {
      problem:
        "Les rendez-vous manqués et les relances oubliées laissent des trous que l'équipe doit combler au téléphone.",
      solution:
        "Treatflow envoie automatiquement confirmations, rappels et messages de suivi, liés au rendez-vous dans l'agenda.",
    },
    relatedLinks: [
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/appointment-calendar", label: "Agenda" },
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { href: "/en/laser-hair-removal-software", label: "Logiciel pour épilation laser" },
    ],
  },

  integrations: {
    ...extraDefaults,
    eyebrow: "Intégrations",
    title: "Connectez Treatflow aux outils que vous utilisez déjà",
    subtitle:
      "Synchronisez agendas, comptabilité et automatisations pour saisir les données une seule fois – au lieu de les retaper dans trois systèmes différents.",
    bullets: [
      "Synchronisation bidirectionnelle avec Google Agenda",
      "Connexions comptabilité et facturation",
      "Zapier pour plus de 7 000 applications",
      "Moins de doubles saisies, moins d'erreurs",
    ],
    image: {
      src: "/images/product-updates/swiss21-abaninja-integration.png",
      alt: "Intégrations Treatflow reliant le logiciel de l'institut à des outils externes",
    },
    features: [
      {
        icon: CalendarDays,
        title: "Google Agenda",
        desc: "Gardez votre agenda personnel et celui de l'institut synchronisés en temps réel.",
      },
      {
        icon: Receipt,
        title: "Comptabilité",
        desc: "Créez des factures et synchronisez vos clients sans ressaisir les données.",
      },
      {
        icon: Zap,
        title: "Zapier",
        desc: "Déclenchez des automatisations dans Sheets, votre CRM, votre messagerie et plus encore.",
      },
      {
        icon: RefreshCw,
        title: "Moins de doublons",
        desc: "Saisissez les données une fois dans Treatflow – elles circulent vers le reste.",
      },
      {
        icon: Workflow,
        title: "Automatisations sur mesure",
        desc: "Réagissez aux nouvelles réservations ou aux formulaires sans écrire de code.",
      },
      {
        icon: Plug,
        title: "Un écosystème qui grandit",
        desc: "Connectez les outils sur lesquels votre institut s'appuie déjà.",
      },
      { icon: MessageCircle, title: "WhatsApp", desc: "Confirmations, rappels, annulations et reports via WhatsApp – avec l'e-mail en secours." },
      { icon: Sparkles, title: "Assistants IA (MCP)", desc: "Claude, ChatGPT & co. répondent aux questions sur les rendez-vous, les clients et le chiffre d'affaires – en lecture seule, les données de santé restent dans Treatflow." },
      { icon: CalendarClock, title: "Planning des équipes", desc: "Planifiez créneaux, congés et absences par semaine – la réservation en ligne suit le planning. Gratuit." },
    ],
    closingTitle: "Une seule source de vérité pour votre institut",
    closingText:
      "Les intégrations placent Treatflow au centre de votre activité, tandis que vos outils préférés restent informés – automatiquement.",
    faqs: [
      {
        question: "Treatflow s'intègre-t-il à Google Agenda ?",
        answer:
          "Oui. Treatflow peut se synchroniser avec Google Agenda pour que vos rendez-vous personnels et ceux de l'institut restent alignés.",
      },
      {
        question: "Treatflow fonctionne-t-il avec Zapier ?",
        answer:
          "Oui. Avec la formule Booking, vous pouvez connecter Treatflow à d'autres outils via Zapier, par exemple des tableurs ou des automatisations d'e-mails.",
      },
      { question: "Puis-je connecter Claude ou ChatGPT à mon institut ?", answer: "Oui. Dans Apps → Assistants IA (MCP), vous connectez Claude, ChatGPT, Cursor et d'autres assistants à votre institut. Ils répondent aux questions sur les rendez-vous, les créneaux libres, les coordonnées des clients, les prestations et le chiffre d'affaires. L'accès est en lecture seule : dossiers de soins, fiches d'anamnèse, photos et notes ne sont jamais partagés." },
      { question: "À quoi sert le planning des équipes ?", answer: "Le planning des équipes vous permet d'organiser la semaine de votre équipe avec des créneaux, des modèles et des absences comme les congés ou les arrêts maladie. Une fois activé, la réservation en ligne ne propose que des horaires pendant les créneaux planifiés. Vous l'activez gratuitement dans Apps ; les huit premières semaines sont préremplies à partir de vos horaires de travail existants." },
    ],
    aiCapsules: [
      {
        question: "Treatflow s'intègre-t-il à Google Agenda ?",
        answer:
          "Oui. Treatflow peut se synchroniser avec Google Agenda pour que vos rendez-vous personnels et ceux de l'institut restent alignés.",
      },
    ],
    relatedLinks: [
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/appointment-calendar", label: "Agenda" },
      { href: "/en/features", label: "Toutes les fonctionnalités" },
    ],
  },

  shop: {
    ...extraDefaults,
    eyebrow: "Vente de produits et stock",
    title: "Vendez vos produits de revente et maîtrisez votre stock",
    subtitle:
      "Ajoutez autant de produits que vous voulez, vendez-les à l'institut et suivez qui a acheté quoi – avec une gestion de stock simple pour ne jamais tomber à court de vos best-sellers.",
    bullets: [
      "Produits et catégories illimités",
      "Vente directe à l'institut",
      "Niveaux de stock et alertes simples",
      "Historique d'achat par client",
    ],
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Vue d'ensemble de la vente de produits et du stock dans Treatflow pour instituts de beauté",
    },
    features: [
      {
        icon: Package,
        title: "Catalogue produits",
        desc: "Ajoutez autant de références que nécessaire, avec prix et catégories.",
      },
      {
        icon: ShoppingBag,
        title: "Vente à l'institut",
        desc: "Vendez après un soin sans système de boutique séparé.",
      },
      {
        icon: BarChart3,
        title: "Vue sur le stock",
        desc: "Suivez vos niveaux de stock et réapprovisionnez avant la rupture.",
      },
      {
        icon: Camera,
        title: "Photos produits",
        desc: "Des visuels produits clairs pour votre équipe à l'accueil.",
      },
      {
        icon: TrendingUp,
        title: "Chiffre d'affaires additionnel",
        desc: "Chaque visite devient une occasion de vente de produits.",
      },
      {
        icon: Users,
        title: "Historique d'achat",
        desc: "Sachez quel client a acheté quel produit, et quand.",
      },
    ],
    closingTitle: "La vente de produits intégrée au parcours de rendez-vous",
    closingText:
      "Treatflow place la vente de produits à côté des rendez-vous et des fiches clients – la revente devient un moment naturel de la visite, pas une tâche administrative de plus.",
  },

  "studio-website": {
    ...extraDefaults,
    eyebrow: "Site web de l'institut",
    title: "Un site sur mesure qui transforme les visiteurs en réservations",
    subtitle:
      "Un site professionnel pour votre institut – pensé pour le mobile, optimisé pour le référencement et relié à la réservation en ligne Treatflow pour que vos nouveaux clients réservent en quelques gestes.",
    bullets: [
      "Design sur mesure à l'image de votre marque",
      "Optimisé pour le mobile",
      "Réservation en ligne intégrée",
      "Conçu pour les métiers de la beauté et de l'esthétique",
    ],
    image: {
      src: "/images/og-website-service.jpg",
      alt: "Site web Treatflow sur mesure pour un institut de beauté",
    },
    features: [
      {
        icon: Sparkles,
        title: "Design sur mesure",
        desc: "Un style qui ressemble à votre institut – pas un modèle générique de plus.",
      },
      {
        icon: Smartphone,
        title: "Pensé pour le mobile",
        desc: "La plupart des visiteurs arrivent depuis leur téléphone. Votre site y est parfait.",
      },
      {
        icon: Globe,
        title: "Bases du référencement",
        desc: "Une structure et des contenus clairs pour que vos clients vous trouvent en ligne.",
      },
      {
        icon: Link2,
        title: "Réservation intégrée",
        desc: "Reliez votre lien de réservation Treatflow et vos horaires d'ouverture.",
      },
      {
        icon: Camera,
        title: "Mettez votre travail en valeur",
        desc: "Présentez vos soins, votre équipe et votre ambiance de façon convaincante.",
      },
      {
        icon: LayoutDashboard,
        title: "Fait pour les instituts",
        desc: "Pensé pour la beauté, le laser, les ongles, les cils et l'esthétique.",
      },
    ],
    closingTitle: "Votre site, un canal de réservation – pas une simple plaquette",
    closingText:
      "Nous concevons des sites haut de gamme qui convertissent. Avec la réservation Treatflow, chaque visite peut devenir un rendez-vous.",
  },
};

/* ------------------------------------------------------------------ */
/* Branchenseiten                                                      */
/* ------------------------------------------------------------------ */

const industries: LocaleSiteContent["industries"] = {
  "beauty-salon-software": {
    ...industryDefaults,
    pageKey: "beauty-salon-software",
    canonicalPath: "/en/beauty-salon-software",
    serviceName: "Logiciel pour institut de beauté",
    serviceDescription:
      "Logiciel pour institut de beauté avec prise de rendez-vous en ligne, fiches clients, formulaires de consentement et documentation des soins.",
    hero: {
      marketLabel,
      eyebrow: "Logiciel pour institut de beauté",
      h1: "Le logiciel pour instituts de beauté modernes",
      subtitle:
        "Prise de rendez-vous en ligne, fiches clients, formulaires de consentement et documentation des soins sur une seule plateforme – pour les instituts qui veulent moins d'administratif et une meilleure expérience client.",
    },
    aiCapsules: [
      {
        question: "Quel est le meilleur logiciel pour institut de beauté en Europe ?",
        answer:
          "Pour les instituts européens qui veulent la prise de rendez-vous en ligne sans commission, des fiches clients numériques, des formulaires de consentement et la documentation des soins dans un seul système, Treatflow est un excellent choix. Conçu en Autriche, hébergé sur des serveurs européens, formules dès 39 €/mois.",
      },
      {
        question: "Treatflow prend-il une commission sur les réservations ?",
        answer:
          "Non. Treatflow est le logiciel de votre institut, pas une place de marché. Aucune commission par rendez-vous. Vous gardez la maîtrise de votre page de réservation et de vos données clients.",
      },
    ],
    whatIsTreatflow: {
      title: "Qu'est-ce que Treatflow pour les instituts de beauté ?",
      paragraphs: [
        "Treatflow remplace les outils dispersés par un seul système : agenda, fiches clients, formulaires numériques et notes de soin fonctionnent ensemble, de la réservation au suivi.",
        "Les instituts utilisent Treatflow pour proposer la réservation en ligne, garder l'historique client accessible et documenter les soins de façon homogène dans toute l'équipe.",
      ],
    },
    whoIsItFor: {
      title: "À qui s'adresse Treatflow ?",
      audiences: [
        "Instituts de beauté et day spas",
        "Instituts de soins du visage aux protocoles structurés",
        "Équipes de plusieurs esthéticiennes qui veulent un seul outil",
        "Instituts indépendants prêts à abandonner l'agenda papier",
      ],
    },
    problems: {
      title: "Quels problèmes Treatflow résout-il ?",
      items: [
        {
          problem: "Rendez-vous gérés par messages et agenda papier",
          solution: "Un seul agenda avec réservation en ligne et rappels automatiques.",
        },
        {
          problem: "Historique client éparpillé entre plusieurs outils",
          solution: "Fiches clients numériques avec notes, photos et historique des visites.",
        },
        {
          problem: "Formulaires de consentement papier",
          solution: "Questionnaire et consentement numériques remplis avant le rendez-vous.",
        },
        {
          problem: "Rendez-vous manqués et trous de dernière minute",
          solution: "Rappels par WhatsApp et e-mail qui réduisent les absences.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités clés",
      items: [
        { icon: Link2, title: "Réservation en ligne", desc: "Page de réservation personnelle, 24 h/24, sans commission." },
        { icon: Users, title: "Fiches clients", desc: "Profils, historique et notes au même endroit." },
        { icon: ClipboardCheck, title: "Formulaires de consentement", desc: "Questionnaire numérique avant chaque soin." },
        { icon: FileText, title: "Notes de soin", desc: "Documentation structurée à chaque visite, dictée vocale comprise." },
        { icon: Camera, title: "Documentation photo", desc: "Photos avant/après rattachées au client." },
        { icon: Bell, title: "Rappels", desc: "WhatsApp et e-mail pour réduire les rendez-vous manqués." },
      ],
    },
    benefits: {
      title: "Avantages",
      items: [
        "Moins d'administratif, de la réservation à la documentation",
        "Une meilleure expérience client dès la première réservation",
        "Des fiches structurées pour les passages de relais",
        "Des parcours numériques modernes dans une seule application",
        rgpdSupport,
      ],
    },
    marketFit: {
      title: "Pourquoi les instituts choisissent Treatflow",
      paragraphs: [
        "Les outils génériques s'arrêtent souvent aux rendez-vous. Treatflow relie la réservation aux fiches clients et à la documentation des soins – là où un institut professionnel a besoin de structure.",
      ],
      highlights: [
        "Réservation en ligne sans commission par rendez-vous",
        "Fiches clients numériques avec historique des soins",
        "Questionnaires et consentements remplis avant la visite",
        "Notes de soin et documentation photo",
        rgpdSupport,
      ],
    },
    aiSummary: {
      title: "En résumé",
      text: "Treatflow est un logiciel pour institut de beauté avec prise de rendez-vous en ligne, fiches clients, formulaires de consentement, notes de soin, documentation photo et rappels. Pour les instituts de beauté, day spas et instituts de soins du visage. Hébergé dans l'UE.",
    },
    faqs: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel tout-en-un pour instituts de beauté et cliniques esthétiques. Il réunit agenda, prise de rendez-vous en ligne sans commission, fiches clients numériques, formulaires de consentement, documentation des soins et rappels. Conçu en Autriche, hébergé dans l'UE.",
      },
      {
        question: "Treatflow est-il un logiciel d'institut de beauté sans commission sur les réservations ?",
        answer:
          "Oui. Treatflow est un logiciel pour votre institut, pas une place de marché. Vous gardez vos données clients et payez un abonnement mensuel transparent dès 39 €. Aucune commission n'est prélevée sur les réservations.",
      },
      {
        question: "Les fiches clients numériques sont-elles conformes au RGPD ?",
        answer:
          "Treatflow est hébergé sur des serveurs européens à Francfort, avec chiffrement SSL et sauvegardes quotidiennes. Fiches clients, formulaires et documentation restent dans un seul système conçu pour le RGPD.",
      },
      faqGetStarted,
      {
        question: "Un institut de beauté peut-il envoyer des rappels et faire revenir ses clients avec Treatflow ?",
        answer:
          "Oui. Les rappels automatiques par WhatsApp et e-mail font partie de la formule Booking. Les messages de suivi aident vos clients à reprendre rendez-vous sur votre propre page de réservation.",
      },
    ],
    internalLinks: [
      { href: "/en/aesthetic-clinic-software", label: "Logiciel pour clinique esthétique" },
      { href: "/en/nail-salon-software", label: "Logiciel pour onglerie" },
      { href: "/en/spa-wellness-software", label: "Logiciel pour spa et bien-être" },
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/forms", label: "Formulaires de consentement" },
      { href: "/en/pricing", label: "Tarifs" },
    ],
    workflow: {
      title: "Comment un institut de beauté utilise Treatflow",
      subtitle: "De la première réservation à la visite suivante, l'institut reste dans un seul système.",
      steps: [
        {
          href: "/en/online-booking",
          label: "Le client réserve en ligne",
          desc: "Le client utilise votre lien de réservation. Le créneau apparaît dans l'agenda de l'institut.",
        },
        {
          href: "/en/forms",
          label: "Formulaires avant l'arrivée",
          desc: "Questionnaire ou consentement peuvent être envoyés avant le rendez-vous : l'accueil n'a plus de papiers à collecter.",
        },
        {
          href: "/en/client-records",
          label: "Ouvrir la fiche client",
          desc: "Notes, historique et produits utilisés précédemment sont réunis sur une seule fiche.",
        },
        {
          href: "/en/treatment-documentation",
          label: "Documenter la visite",
          desc: "Notes de soin, dictée vocale en option et photos restent rattachées à ce rendez-vous.",
        },
        {
          href: "/en/messaging",
          label: "Rappeler et faire revenir",
          desc: "Les rappels automatiques réduisent les absences. Les messages de suivi invitent le client à reprendre rendez-vous.",
        },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/hero-startseite-en.png",
        alt: "Treatflow sur ordinateur portable et tablette dans un institut : agenda et fiches clients",
      },
      mockup: {
        src: "/images/lifestyle/online-buchung-smartphone.png",
        alt: "Cliente réservant un rendez-vous en institut sur son téléphone",
      },
    },
  },

  "aesthetic-clinic-software": {
    ...industryDefaults,
    pageKey: "aesthetic-clinic-software",
    canonicalPath: "/en/aesthetic-clinic-software",
    serviceName: "Logiciel pour clinique esthétique",
    serviceDescription:
      "Logiciel pour cliniques esthétiques : documentation des soins, formulaires de consentement, fiches clients et prise de rendez-vous en ligne.",
    hero: {
      marketLabel,
      eyebrow: "Logiciel pour clinique esthétique",
      h1: "Le logiciel pour cliniques esthétiques à la documentation structurée",
      subtitle:
        "Formulaires de consentement, notes de soin, documentation photo et fiches patients pour cliniques esthétiques – une seule plateforme, de la réservation au suivi.",
    },
    aiCapsules: [
      {
        question: "De quel logiciel une clinique esthétique a-t-elle besoin ?",
        answer:
          "Une clinique esthétique a besoin de formulaires de consentement, d'une documentation des soins, de dossiers photo et de l'historique client dans un seul système. Treatflow propose la prise de rendez-vous en ligne, des fiches clients numériques et des notes de soin structurées pour les injections, les soins de la peau et la médecine esthétique.",
      },
      {
        question: "Treatflow convient-il à la médecine esthétique ?",
        answer:
          "Oui. Treatflow est conçu pour les cliniques où la qualité de la documentation et la sécurité des patients comptent – pas seulement le volume de rendez-vous. Consentements, notes et photos restent liés à chaque fiche.",
      },
    ],
    whatIsTreatflow: {
      title: "Qu'est-ce que Treatflow pour les cliniques esthétiques ?",
      paragraphs: [
        "Treatflow accompagne tout le parcours client : réservation, questionnaire, consentement, documentation des soins et suivi sur une seule plateforme partagée.",
        "Conçu pour les cliniques où la qualité de la documentation et la sécurité des patients comptent – pas seulement le volume de rendez-vous.",
      ],
    },
    whoIsItFor: {
      title: "À qui s'adresse Treatflow ?",
      audiences: [
        "Cliniques esthétiques proposant injections et rajeunissement de la peau",
        "Cabinets de médecine esthétique",
        "Centres de soins de la peau aux protocoles définis",
        "Cliniques à plusieurs praticiens ayant besoin d'une documentation homogène",
      ],
    },
    problems: {
      title: "Quels problèmes Treatflow résout-il ?",
      items: [
        {
          problem: "Notes de soin hétérogènes",
          solution: "Modèles de documentation structurés et fiches clients partagées.",
        },
        {
          problem: "Consentement non recueilli avant l'acte",
          solution: "Formulaires de consentement numériques remplis avant le soin.",
        },
        {
          problem: "Photos stockées sur des appareils personnels",
          solution: "Documentation photo rattachée aux fiches clients.",
        },
        {
          problem: "Accueil et salles de soin utilisent des outils différents",
          solution: "Un seul parcours, de la réservation aux notes et au suivi.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités clés",
      items: [
        { icon: FileText, title: "Documentation des soins", desc: "Notes, dictée vocale, protocoles et historique." },
        { icon: ClipboardCheck, title: "Formulaires de consentement", desc: "Consentement numérique stocké en toute sécurité." },
        { icon: Camera, title: "Documentation photo", desc: "Photos cliniques à chaque visite." },
        { icon: Users, title: "Fiches clients", desc: "Tout l'historique esthétique sur une seule fiche." },
        { icon: Link2, title: "Réservation en ligne", desc: "Consultations réservées en ligne." },
        { icon: Workflow, title: "Parcours numériques", desc: "Du questionnaire au soin, puis au suivi." },
      ],
    },
    benefits: {
      title: "Avantages",
      items: [
        "Une documentation homogène entre praticiens",
        "Une traçabilité claire du consentement pour chaque acte",
        "Moins d'administratif entre l'accueil et les salles de soin",
        "Une expérience client professionnelle dès la première réservation",
        rgpdSupport,
      ],
    },
    marketFit: {
      title: "Pourquoi les cliniques esthétiques choisissent Treatflow",
      paragraphs: [
        "Une expérience client professionnelle repose sur une documentation fiable. Treatflow relie la réservation aux fiches et aux notes de soin, sans complexité inutile.",
      ],
      highlights: [
        "Réservation en ligne sans commission par rendez-vous",
        "Fiches clients numériques avec historique des soins",
        "Questionnaires et consentements remplis avant la visite",
        "Notes de soin et documentation photo",
        rgpdSupport,
      ],
    },
    aiSummary: {
      title: "En résumé",
      text: "Treatflow est un logiciel pour clinique esthétique avec documentation des soins, formulaires de consentement, fiches clients, documentation photo et prise de rendez-vous en ligne. Pour les cliniques esthétiques et cabinets de médecine esthétique. Hébergé dans l'UE.",
    },
    faqs: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel tout-en-un pour instituts de beauté, cliniques esthétiques et centres laser. Il réunit prise de rendez-vous en ligne, fiches clients, formulaires de consentement, documentation des soins et rappels.",
      },
      {
        question: "Treatflow propose-t-il des formulaires de consentement numériques pour les cliniques esthétiques ?",
        answer:
          "Oui. Vos patients remplissent questionnaire et consentement sur leur téléphone avant la visite. Réponses et signatures sont enregistrées sur la fiche, ce qui offre une traçabilité claire pour les injections et les autres actes esthétiques.",
      },
      {
        question: "Plusieurs praticiens peuvent-ils partager le compte de la clinique ?",
        answer:
          "Oui. Fiches clients, formulaires de consentement et notes de soin sont partagés dans l'équipe pour une documentation homogène.",
      },
      faqGetStarted,
      {
        question: "Les cliniques esthétiques peuvent-elles enregistrer des photos avant/après ?",
        answer:
          "Oui. Les séries de photos sont rattachées à la visite et restent sur la fiche client : le praticien suivant peut comparer l'évolution.",
      },
    ],
    internalLinks: [
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { href: "/en/laser-hair-removal-software", label: "Logiciel pour épilation laser" },
      { href: "/en/permanent-makeup-software", label: "Logiciel pour maquillage permanent" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/forms", label: "Formulaires de consentement" },
      { href: "/en/treatment-documentation", label: "Documentation des soins" },
      { href: "/en/pricing", label: "Tarifs" },
    ],
    workflow: {
      title: "Comment une clinique esthétique utilise Treatflow",
      subtitle: "Historique structuré, consentement, documentation et suivi pour toute l'équipe.",
      steps: [
        {
          href: "/en/online-booking",
          label: "Réservation de la consultation",
          desc: "Le patient réserve une consultation ou un soin sur la page de réservation de votre clinique.",
        },
        {
          href: "/en/forms",
          label: "Questionnaire et consentement",
          desc: "Questionnaire et consentement numériques sont remplis avant l'acte et enregistrés sur la fiche.",
        },
        {
          href: "/en/client-records",
          label: "Historique structuré",
          desc: "Soins précédents, notes et contre-indications sont visibles par chaque praticien.",
        },
        {
          href: "/en/treatment-documentation",
          label: "Documenter et photographier",
          desc: "Notes de séance, dictée vocale en option et photos avant/après restent rattachées à la visite.",
        },
        {
          href: "/en/messaging",
          label: "Suivi",
          desc: "Rappels et conseils post-soin gardent le prochain rendez-vous dans l'agenda.",
        },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Formulaire de consentement numérique rempli sur une tablette dans une clinique esthétique",
      },
      mockup: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Photos avant/après d'un soin enregistrées dans Treatflow",
      },
    },
  },

  "laser-hair-removal-software": {
    ...industryDefaults,
    pageKey: "laser-hair-removal-software",
    canonicalPath: "/en/laser-hair-removal-software",
    serviceName: "Logiciel pour épilation laser",
    serviceDescription:
      "Logiciel pour centres d'épilation laser : suivi des séances, formulaires de consentement, documentation photo et prise de rendez-vous en ligne.",
    hero: {
      marketLabel,
      eyebrow: "Logiciel pour centre laser",
      h1: "Le logiciel d'épilation laser pensé pour les séries de séances",
      subtitle:
        "Suivez les séances, documentez le consentement et gérez les réservations – conçu pour les centres laser et IPL qui veulent des dossiers structurés.",
    },
    aiCapsules: [
      {
        question: "De quel logiciel un centre laser a-t-il besoin ?",
        answer:
          "Un centre laser a besoin de fiches clients avec l'historique des séries de séances, de formulaires de consentement, de notes de séance, d'une documentation photo et de rappels de rendez-vous. Treatflow propose la réservation en ligne et une documentation structurée pour les centres d'épilation laser.",
      },
      {
        question: "Treatflow permet-il de suivre les forfaits de plusieurs séances ?",
        answer:
          "Oui. Chaque séance est documentée sur la fiche client : vous voyez toujours l'évolution, les notes sur les réglages et la date de la prochaine séance.",
      },
    ],
    whatIsTreatflow: {
      title: "Qu'est-ce que Treatflow pour les centres laser ?",
      paragraphs: [
        "L'épilation laser se fait en plusieurs séances. Treatflow suit chaque séance, enregistre le consentement et le phototype, et rappelle au client quand revenir.",
        "Les centres utilisent un seul agenda pour les réservations, une seule fiche pour l'historique et des formulaires numériques pour le questionnaire – sans commission de place de marché.",
      ],
    },
    whoIsItFor: {
      title: "À qui s'adresse Treatflow ?",
      audiences: [
        "Centres d'épilation laser",
        "Centres IPL proposant des forfaits de plusieurs séances",
        "Instituts de soins de la peau proposant le laser",
        "Équipes avec un fort volume de réservations et des besoins de documentation",
      ],
    },
    problems: {
      title: "Quels problèmes Treatflow résout-il ?",
      items: [
        {
          problem: "On perd le fil de l'avancement des séances",
          solution: "Historique des soins et notes de chaque séance sur la fiche client.",
        },
        {
          problem: "Informations de consentement manquantes",
          solution: "Questionnaire et consentement numériques enregistrés avant chaque série.",
        },
        {
          problem: "Les clients oublient leurs séances de suivi",
          solution: "Rappels et nouvelle réservation facile via votre page de réservation.",
        },
        {
          problem: "Photos et notes sur des appareils différents",
          solution: "Documentation photo rattachée à chaque fiche client.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités clés",
      items: [
        { icon: Zap, title: "Suivi des séances", desc: "Documentez chaque séance avec des notes, dictée vocale comprise." },
        { icon: ClipboardCheck, title: "Questionnaire et consentement", desc: "Phototype et contre-indications dans le dossier." },
        { icon: Camera, title: "Documentation photo", desc: "Photos d'évolution par zone." },
        { icon: Calendar, title: "Planification des séries", desc: "Planifiez les séances suivantes." },
        { icon: Link2, title: "Réservation en ligne", desc: "Vos clients réservent leurs prochaines séances en ligne." },
        { icon: Bell, title: "Rappels", desc: "Rappels de rendez-vous automatiques." },
      ],
    },
    benefits: {
      title: "Avantages",
      items: [
        "Une vue claire de la série de séances de chaque client",
        "Un consentement structuré pour chaque nouveau client",
        "Moins de relances manuelles pour les séances manquées",
        "Une documentation professionnelle, homogène dans l'équipe",
        rgpdSupport,
      ],
    },
    marketFit: {
      title: "Pourquoi les centres laser choisissent Treatflow",
      paragraphs: [
        "Les centres laser conjuguent un fort volume de réservations et des besoins de documentation. Treatflow relie la réservation aux fiches pour que chaque séance enrichisse l'historique client.",
      ],
      highlights: [
        "Réservation en ligne sans commission par rendez-vous",
        "Historique des séances sur des fiches clients numériques",
        "Formulaires de consentement avant chaque série",
        "Documentation photo et rappels",
        rgpdSupport,
      ],
    },
    aiSummary: {
      title: "En résumé",
      text: "Treatflow est un logiciel d'épilation laser avec suivi des séances, formulaires de consentement, documentation photo, prise de rendez-vous en ligne et rappels. Pour les centres laser et IPL. Hébergé dans l'UE.",
    },
    faqs: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel tout-en-un pour instituts de beauté, cliniques esthétiques et centres laser. Il réunit prise de rendez-vous en ligne, fiches clients, formulaires de consentement, documentation des soins et rappels.",
      },
      {
        question: "Les centres d'épilation laser peuvent-ils documenter leurs séances dans Treatflow ?",
        answer:
          "Oui. La documentation des soins comprend les paramètres, les notes et les photos avant/après de chaque séance.",
      },
      {
        question: "À qui s'adresse cette page ?",
        answer:
          "Aux centres d'épilation laser et IPL qui ont besoin de suivre les séances, de recueillir le consentement et de faire revenir leurs clients de façon fiable.",
      },
      faqGetStarted,
      {
        question: "Treatflow peut-il enregistrer les zones traitées et les notes de séance laser ?",
        answer:
          "Oui. Chaque séance peut comporter paramètres, zones traitées, notes et photos sur la fiche client. Vous pouvez taper vos notes ou les dicter. La séance suivante démarre avec un historique complet.",
      },
    ],
    internalLinks: [
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { href: "/en/aesthetic-clinic-software", label: "Logiciel pour clinique esthétique" },
      { href: "/en/spa-wellness-software", label: "Logiciel pour spa et bien-être" },
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/treatment-documentation", label: "Documentation des soins" },
      { href: "/en/forms", label: "Formulaires de consentement" },
      { href: "/en/pricing", label: "Tarifs" },
    ],
    workflow: {
      title: "Comment un centre laser utilise Treatflow",
      subtitle:
        "Chaque séance s'appuie sur la précédente : consentement, zones traitées, notes, photos et prochaine réservation.",
      steps: [
        {
          href: "/en/online-booking",
          label: "Le client réserve une séance",
          desc: "Nouveaux clients et habitués réservent sur votre propre lien, séances de suivi comprises.",
        },
        {
          href: "/en/forms",
          label: "Questionnaire et consentement",
          desc: "Questionnaire et consentement sont remplis avant la première séance et enregistrés sur la fiche.",
        },
        {
          href: "/en/client-records",
          label: "Consulter l'historique",
          desc: "Notes sur le phototype, réglages précédents et zones traitées sont réunis sur une seule fiche.",
        },
        {
          href: "/en/treatment-documentation",
          label: "Documenter la séance",
          desc: "Paramètres, zones traitées, notes de séance (tapées ou dictées) et photos restent rattachés à la visite.",
        },
        {
          href: "/en/messaging",
          label: "Suivre la série",
          desc: "Les rappels font revenir le client pour la séance suivante de la série.",
        },
      ],
    },
    images: {
      lifestyle: {
        src: "/images/lifestyle/dokumentation-vorher-nachher.png",
        alt: "Documentation d'un soin laser avec photos avant/après",
      },
      mockup: {
        src: "/images/lifestyle/formulare-digital-ausfuellen.png",
        alt: "Formulaire de consentement numérique pour un rendez-vous d'épilation laser",
      },
    },
  },

  "permanent-makeup-software": {
    ...industryDefaults,
    pageKey: "permanent-makeup-software",
    canonicalPath: "/en/permanent-makeup-software",
    serviceName: "Logiciel pour maquillage permanent",
    serviceDescription:
      "Logiciel pour dermopigmentateurs : formulaires de consentement, notes sur les pigments, documentation photo, fiches clients et prise de rendez-vous en ligne.",
    hero: {
      marketLabel,
      eyebrow: "Logiciel pour maquillage permanent",
      h1: "Le logiciel de maquillage permanent pour les artistes du pigment",
      subtitle:
        "Consentement, documentation des pigments, planification des retouches et fiches clients – conçu pour les studios de maquillage permanent qui ont besoin d'un historique précis.",
    },
    aiCapsules: [
      {
        question: "De quel logiciel un studio de maquillage permanent a-t-il besoin ?",
        answer:
          "Un studio de maquillage permanent a besoin d'un consentement détaillé, de notes sur les pigments et les techniques, de photos avant/après, d'une planification des retouches et de l'historique client. Treatflow réunit réservation, formulaires et documentation, avec un hébergement dans l'UE conforme au RGPD.",
      },
      {
        question: "Puis-je documenter les pigments et les retouches ?",
        answer:
          "Oui. Notes de soin et photos restent sur la fiche client : chaque retouche s'appuie sur la séance précédente.",
      },
    ],
    whatIsTreatflow: {
      title: "Qu'est-ce que Treatflow pour le maquillage permanent ?",
      paragraphs: [
        "Le maquillage permanent exige une documentation précise : pigments, zones, techniques et notes de cicatrisation. Treatflow conserve cet historique sur la fiche client, avec le consentement et les photos.",
        "Les artistes utilisent la réservation en ligne pour les consultations et les retouches, des formulaires numériques avant chaque acte et des rappels pour que les clients reviennent à temps.",
      ],
    },
    whoIsItFor: {
      title: "À qui s'adresse Treatflow ?",
      audiences: [
        "Dermopigmentateurs et artistes microblading",
        "Studios de maquillage permanent à plusieurs postes",
        "Instituts de beauté proposant sourcils, lèvres et eye-liner permanents",
        "Équipes qui documentent pigments et cycles de retouches",
      ],
    },
    problems: {
      title: "Quels problèmes Treatflow résout-il ?",
      items: [
        {
          problem: "Détails des pigments perdus entre deux séances",
          solution: "Notes de soin structurées sur chaque fiche client.",
        },
        {
          problem: "Consentement papier avant l'acte",
          solution: "Consentement numérique rempli avant le rendez-vous.",
        },
        {
          problem: "Dates de retouche notées dans un carnet",
          solution: "Agenda, rappels et nouvelle réservation en ligne au même endroit.",
        },
        {
          problem: "Photos avant/après difficiles à retrouver",
          solution: "Photos rattachées à la fiche client et à la visite.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités clés",
      items: [
        { icon: FileText, title: "Notes pigments et techniques", desc: "Documentez couleurs, aiguilles et zones traitées." },
        { icon: ClipboardCheck, title: "Formulaires de consentement", desc: "Consentement numérique avant chaque acte." },
        { icon: Camera, title: "Documentation photo", desc: "Photos avant/après sur la fiche client." },
        { icon: Calendar, title: "Planification des retouches", desc: "Planifiez contrôles de cicatrisation et retouches." },
        { icon: Users, title: "Fiches clients", desc: "Tout l'historique de maquillage permanent au même endroit." },
        { icon: Bell, title: "Rappels", desc: "Moins de rendez-vous de retouche manqués." },
      ],
    },
    benefits: {
      title: "Avantages",
      items: [
        "Un historique précis pour des retouches plus sûres",
        "Une traçabilité professionnelle du consentement pour chaque client",
        "Moins d'administratif entre consultation et acte",
        "Des photos claires pour votre portfolio et le suivi",
        rgpdHosting,
      ],
    },
    marketFit: {
      title: "Pourquoi les studios de maquillage permanent choisissent Treatflow",
      paragraphs: [
        "Le maquillage permanent est une affaire de détails. Treatflow relie la réservation au consentement, aux notes et aux photos pour que chaque visite soit documentée, sans outil supplémentaire.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Formulaires de consentement avant chaque acte",
        "Documentation des pigments et des techniques",
        "Historique photo rattaché aux clients",
        rgpdHosting,
      ],
    },
    aiSummary: {
      title: "En résumé",
      text: "Treatflow est un logiciel de maquillage permanent avec formulaires de consentement, notes sur les pigments, documentation photo, fiches clients, prise de rendez-vous en ligne et rappels. Pour les studios de maquillage permanent et de microblading. Conforme au RGPD.",
    },
    faqs: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel tout-en-un avec prise de rendez-vous en ligne, fiches clients, formulaires de consentement, documentation des soins et rappels – adapté aux studios de maquillage permanent.",
      },
      {
        question: "Convient-il au microblading ?",
        answer:
          "Oui. Vous pouvez documenter techniques, pigments, photos et calendrier de retouches pour les sourcils, les lèvres et l'eye-liner.",
      },
      faqGetStarted,
      faqHosting,
    ],
    internalLinks: [
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { href: "/en/aesthetic-clinic-software", label: "Logiciel pour clinique esthétique" },
      { href: "/en/lash-studio-software", label: "Logiciel pour extensions de cils" },
      { href: "/en/forms", label: "Formulaires de consentement" },
      { href: "/en/treatment-documentation", label: "Documentation des soins" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/pricing", label: "Tarifs" },
    ],
  },

  "tattoo-studio-software": {
    ...industryDefaults,
    pageKey: "tattoo-studio-software",
    canonicalPath: "/en/tattoo-studio-software",
    serviceName: "Logiciel pour salon de tatouage",
    serviceDescription:
      "Logiciel pour salons de tatouage : formulaires de consentement, fiches clients, prise de rendez-vous, notes de séance et rappels.",
    hero: {
      marketLabel,
      eyebrow: "Logiciel pour salon de tatouage",
      h1: "Le logiciel pour salons de tatouage modernes",
      subtitle:
        "Consentement numérique, fiches clients, notes de séance et réservation en ligne – conçu pour les salons de tatouage qui veulent moins de paperasse et des plannings plus clairs.",
    },
    aiCapsules: [
      {
        question: "De quel logiciel un salon de tatouage a-t-il besoin ?",
        answer:
          "Un salon de tatouage a besoin de formulaires de consentement et de décharge numériques, de fiches clients, de notes de séance, de photos de référence et d'une prise de rendez-vous fiable avec rappels. Treatflow réunit tout cela sur une plateforme conforme au RGPD, hébergée dans l'UE.",
      },
      {
        question: "Treatflow remplace-t-il les décharges papier ?",
        answer:
          "Oui. Vos clients remplissent le consentement numérique avant le rendez-vous : votre équipe commence chaque séance avec la paperasse déjà réglée.",
      },
    ],
    whatIsTreatflow: {
      title: "Qu'est-ce que Treatflow pour les salons de tatouage ?",
      paragraphs: [
        "Treatflow aide les salons de tatouage à réunir consentements, réservations et historique client dans un seul système. Les tatoueurs voient notes et photos sur la fiche client ; l'accueil gère l'agenda.",
        "La réservation en ligne et les rappels réduisent les rendez-vous manqués, tandis que les formulaires numériques suppriment les papiers avant chaque séance.",
      ],
    },
    whoIsItFor: {
      title: "À qui s'adresse Treatflow ?",
      audiences: [
        "Salons de tatouage et studios privés",
        "Salons à plusieurs tatoueurs partageant un agenda",
        "Studios proposant tatouage et suivi de cicatrisation",
        "Équipes qui veulent abandonner décharges et agendas papier",
      ],
    },
    problems: {
      title: "Quels problèmes Treatflow résout-il ?",
      items: [
        {
          problem: "Décharges papier et classeurs",
          solution: "Consentement numérique stocké en toute sécurité sur la fiche client.",
        },
        {
          problem: "Doubles réservations entre tatoueurs",
          solution: "Agenda partagé avec des disponibilités claires.",
        },
        {
          problem: "Notes de séance sur téléphone et papier",
          solution: "Notes et photos rattachées à chaque client.",
        },
        {
          problem: "Les clients oublient l'acompte ou l'heure du rendez-vous",
          solution: "Rappels par WhatsApp et e-mail.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités clés",
      items: [
        { icon: ClipboardCheck, title: "Consentement et décharge", desc: "Formulaires numériques avant chaque séance." },
        { icon: Users, title: "Fiches clients", desc: "Historique, notes et coordonnées sur une seule fiche." },
        { icon: FileText, title: "Notes de séance", desc: "Documentez le travail, les soins post-tatouage et la suite." },
        { icon: Camera, title: "Photos de référence", desc: "Stockez références et photos d'avancement." },
        { icon: Link2, title: "Réservation en ligne", desc: "Vos clients demandent ou réservent les créneaux libres." },
        { icon: Calendar, title: "Agenda du salon", desc: "Coordonnez tatoueurs et postes." },
      ],
    },
    benefits: {
      title: "Avantages",
      items: [
        "Moins de papiers avant chaque séance",
        "Des plannings plus clairs entre tatoueurs",
        "Un historique client prêt pour les retouches et les recouvrements",
        "Moins de rendez-vous manqués grâce aux rappels",
        rgpdHosting,
      ],
    },
    marketFit: {
      title: "Pourquoi les salons de tatouage choisissent Treatflow",
      paragraphs: [
        "Un salon de tatouage a autant besoin de consentements et de planning que d'outils créatifs. Treatflow se concentre sur la gestion du salon – réservations, formulaires et fiches – sans commission de place de marché.",
      ],
      highlights: [
        "Consentement numérique avant les séances",
        "Agenda partagé pour les salons à plusieurs tatoueurs",
        "Fiches clients avec notes et photos",
        "Rappels pour réduire les rendez-vous manqués",
        rgpdHosting,
      ],
    },
    aiSummary: {
      title: "En résumé",
      text: "Treatflow est un logiciel pour salon de tatouage avec consentement numérique, fiches clients, notes de séance, documentation photo, prise de rendez-vous en ligne et rappels. Pour les salons de tatouage, y compris à plusieurs tatoueurs. Conforme au RGPD.",
    },
    faqs: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel de gestion avec prise de rendez-vous en ligne, fiches clients, formulaires de consentement, documentation et rappels – adapté aux salons de tatouage.",
      },
      {
        question: "Plusieurs tatoueurs peuvent-ils partager un même salon ?",
        answer:
          "Oui. Un agenda partagé et des fiches clients communes aident les salons à plusieurs tatoueurs à rester organisés.",
      },
      faqGetStarted,
      faqHosting,
    ],
    internalLinks: [
      { href: "/en/permanent-makeup-software", label: "Logiciel pour maquillage permanent" },
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { href: "/en/aesthetic-clinic-software", label: "Logiciel pour clinique esthétique" },
      { href: "/en/forms", label: "Formulaires de consentement" },
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/pricing", label: "Tarifs" },
    ],
  },

  "nail-salon-software": {
    ...industryDefaults,
    pageKey: "nail-salon-software",
    canonicalPath: "/en/nail-salon-software",
    serviceName: "Logiciel pour onglerie",
    serviceDescription:
      "Logiciel pour ongleries : prise de rendez-vous en ligne, fiches clients, rappels de rendez-vous et notes de prestation.",
    hero: {
      marketLabel,
      eyebrow: "Logiciel pour onglerie",
      h1: "Le logiciel pour ongleries qui tournent à plein régime",
      subtitle:
        "Réservation en ligne, préférences clients, rappels et plannings clairs – conçu pour les ongleries qui enchaînent les rendez-vous.",
    },
    aiCapsules: [
      {
        question: "Quel est le meilleur logiciel pour une onglerie ?",
        answer:
          "Une onglerie profite d'une réservation en ligne sans commission, d'un agenda d'équipe clair, de notes sur les préférences clients et de rappels automatiques. Treatflow propose tout cela avec un hébergement dans l'UE conforme au RGPD.",
      },
      {
        question: "Mes clientes peuvent-elles réserver leur remplissage en ligne ?",
        answer:
          "Oui. Vos clientes réservent leurs prestations sur votre page de réservation personnelle, jour et nuit – sans frais de place de marché.",
      },
    ],
    whatIsTreatflow: {
      title: "Qu'est-ce que Treatflow pour les ongleries ?",
      paragraphs: [
        "Une onglerie vit des rendez-vous récurrents. Treatflow garde l'agenda clair, enregistre les préférences de vos clientes et envoie des rappels pour que remplissages et nouvelles poses arrivent à l'heure.",
        "Les fiches clients numériques aident votre équipe à se souvenir des formes, des couleurs et des allergies – sans fouiller dans les messages et les carnets.",
      ],
    },
    whoIsItFor: {
      title: "À qui s'adresse Treatflow ?",
      audiences: [
        "Ongleries et nail bars",
        "Studios de manucure et de pédicure",
        "Équipes de prothésistes ongulaires partageant un agenda",
        "Ongleries qui veulent arrêter de prendre les rendez-vous par messages Instagram",
      ],
    },
    problems: {
      title: "Quels problèmes Treatflow résout-il ?",
      items: [
        {
          problem: "Réservations éparpillées entre messages privés et appels",
          solution: "Une seule page de réservation en ligne et un agenda partagé.",
        },
        {
          problem: "Préférences clientes oubliées",
          solution: "Notes sur la couleur, la forme et les allergies dans la fiche client.",
        },
        {
          problem: "Beaucoup de remplissages non honorés",
          solution: "Rappels automatiques par WhatsApp et e-mail.",
        },
        {
          problem: "Passages de relais difficiles entre prothésistes",
          solution: "Un historique partagé pour chaque cliente.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités clés",
      items: [
        { icon: Link2, title: "Réservation en ligne", desc: "Page de réservation 24 h/24, sans commission." },
        { icon: Calendar, title: "Agenda d'équipe", desc: "Coordonnez prothésistes et postes de travail." },
        { icon: Users, title: "Fiches clients", desc: "Préférences, historique et notes." },
        { icon: Bell, title: "Rappels", desc: "Moins de remplissages manqués et d'absences." },
        { icon: ClipboardCheck, title: "Questionnaires", desc: "Recueillez allergies et préférences en ligne." },
        { icon: FileText, title: "Notes de visite", desc: "Documentez prestations et produits utilisés." },
      ],
    },
    benefits: {
      title: "Avantages",
      items: [
        "Moins de messages de réservation à gérer",
        "Des journées plus fluides grâce à un agenda d'équipe clair",
        "Des clientes qui se sentent reconnues grâce aux notes de préférences",
        "Moins de rendez-vous manqués grâce aux rappels",
        rgpdHosting,
      ],
    },
    marketFit: {
      title: "Pourquoi les ongleries choisissent Treatflow",
      paragraphs: [
        "Une onglerie à fort volume a davantage besoin de réservation et de mémoire client que de modules cliniques complexes. Treatflow garde la gestion simple, tout en proposant formulaires et documentation quand vous en avez besoin.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Agenda partagé pour les prothésistes",
        "Historique des préférences clientes",
        "Rappels automatiques",
        rgpdHosting,
      ],
    },
    aiSummary: {
      title: "En résumé",
      text: "Treatflow est un logiciel pour onglerie avec prise de rendez-vous en ligne, fiches clients, notes de préférences, rappels et formulaires numériques. Pour les ongleries et nail bars avec plusieurs prothésistes. Conforme au RGPD.",
    },
    faqs: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel tout-en-un avec prise de rendez-vous en ligne, fiches clients, formulaires, documentation et rappels – adapté aux ongleries.",
      },
      {
        question: "Treatflow facture-t-il chaque réservation ?",
        answer: "Non. Aucune commission n'est prélevée par rendez-vous.",
      },
      faqGetStarted,
      faqHosting,
    ],
    internalLinks: [
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { href: "/en/lash-studio-software", label: "Logiciel pour extensions de cils" },
      { href: "/en/spa-wellness-software", label: "Logiciel pour spa et bien-être" },
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/forms", label: "Formulaires de consentement" },
      { href: "/en/pricing", label: "Tarifs" },
    ],
  },

  "lash-studio-software": {
    ...industryDefaults,
    pageKey: "lash-studio-software",
    canonicalPath: "/en/lash-studio-software",
    serviceName: "Logiciel pour extensions de cils",
    serviceDescription:
      "Logiciel pour studios d'extensions de cils : planification des remplissages, fiches clients, formulaires de consentement, documentation photo et réservation en ligne.",
    hero: {
      marketLabel,
      eyebrow: "Logiciel pour extensions de cils",
      h1: "Le logiciel pour studios d'extensions de cils et de remplissages",
      subtitle:
        "Planifiez les remplissages, enregistrez cartographies et consentements, envoyez des rappels et conservez les photos – conçu pour les studios de cils qui misent sur la fidélité.",
    },
    aiCapsules: [
      {
        question: "De quel logiciel un studio d'extensions de cils a-t-il besoin ?",
        answer:
          "Un studio de cils a besoin d'une planification des remplissages, de notes sur les préférences et la cartographie, de formulaires de consentement, de photos d'évolution et de rappels. Treatflow réunit réservation, fiches et formulaires, avec un hébergement dans l'UE conforme au RGPD.",
      },
      {
        question: "Puis-je suivre l'intervalle de remplissage de chaque cliente ?",
        answer:
          "Oui. L'historique des visites et les notes restent sur la fiche client : vous savez quand le prochain remplissage est prévu et ce qui a été posé la dernière fois.",
      },
    ],
    whatIsTreatflow: {
      title: "Qu'est-ce que Treatflow pour les studios de cils ?",
      paragraphs: [
        "Un studio de cils vit des remplissages. Treatflow garde l'agenda plein, documente courbure, longueur et cartographie, et rappelle à vos clientes leur prochain rendez-vous.",
        "Le consentement numérique et la documentation photo garantissent un niveau professionnel sans ralentir votre temps de pose.",
      ],
    },
    whoIsItFor: {
      title: "À qui s'adresse Treatflow ?",
      audiences: [
        "Studios d'extensions de cils",
        "Instituts de beauté avec des techniciennes cils dédiées",
        "Techniciennes cils indépendantes qui gèrent leurs propres réservations",
        "Équipes qui coordonnent les remplissages sur plusieurs postes",
      ],
    },
    problems: {
      title: "Quels problèmes Treatflow résout-il ?",
      items: [
        {
          problem: "Dates de remplissage suivies dans un tableur",
          solution: "Historique client et rappels dans un seul système.",
        },
        {
          problem: "Préférences de cartographie oubliées",
          solution: "Notes et photos sur chaque fiche client.",
        },
        {
          problem: "Consentement encore sur papier",
          solution: "Formulaires numériques remplis avant le rendez-vous.",
        },
        {
          problem: "Messagerie submergée de demandes de rendez-vous",
          solution: "Page de réservation en ligne sans commission.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités clés",
      items: [
        { icon: Calendar, title: "Planification des remplissages", desc: "Planifiez poses et remplissages avec des disponibilités claires." },
        { icon: Users, title: "Notes clientes et cils", desc: "Courbure, longueur, cartographie et colle dans le dossier." },
        { icon: ClipboardCheck, title: "Formulaires de consentement", desc: "Questionnaire numérique avant chaque nouvelle pose." },
        { icon: Camera, title: "Photos d'évolution", desc: "Documentez le résultat à chaque visite." },
        { icon: Link2, title: "Réservation en ligne", desc: "Vos clientes réservent leurs remplissages 24 h/24." },
        { icon: Bell, title: "Rappels de remplissage", desc: "Une fidélité au top grâce aux rappels automatiques." },
      ],
    },
    benefits: {
      title: "Avantages",
      items: [
        "Plus de remplissages honorés grâce à des rappels au bon moment",
        "Des résultats constants grâce aux préférences documentées",
        "Moins d'administratif pendant la pose",
        "Des consentements et photos professionnels",
        rgpdHosting,
      ],
    },
    marketFit: {
      title: "Pourquoi les studios de cils choisissent Treatflow",
      paragraphs: [
        "Un studio de cils a autant besoin d'outils de fidélisation que d'outils de réservation. Treatflow relie les rendez-vous aux notes clientes et aux rappels pour des remplissages prévisibles.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Notes sur les préférences et la cartographie",
        "Formulaires de consentement avant chaque nouvelle pose",
        "Rappels de remplissage et historique photo",
        rgpdHosting,
      ],
    },
    aiSummary: {
      title: "En résumé",
      text: "Treatflow est un logiciel pour extensions de cils avec planification des remplissages, notes clientes, formulaires de consentement, documentation photo, réservation en ligne et rappels. Pour les studios d'extensions de cils. Conforme au RGPD.",
    },
    faqs: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel tout-en-un avec prise de rendez-vous en ligne, fiches clients, formulaires de consentement, documentation et rappels – adapté aux studios d'extensions de cils.",
      },
      {
        question: "Convient-il aux techniciennes cils indépendantes ?",
        answer:
          "Oui. Les indépendantes utilisent Treatflow pour la réservation, les rappels et l'historique client, sans commission de place de marché.",
      },
      faqGetStarted,
      faqHosting,
    ],
    internalLinks: [
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { href: "/en/nail-salon-software", label: "Logiciel pour onglerie" },
      { href: "/en/permanent-makeup-software", label: "Logiciel pour maquillage permanent" },
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/forms", label: "Formulaires de consentement" },
      { href: "/en/pricing", label: "Tarifs" },
    ],
  },

  "spa-wellness-software": {
    ...industryDefaults,
    pageKey: "spa-wellness-software",
    canonicalPath: "/en/spa-wellness-software",
    serviceName: "Logiciel pour spa et bien-être",
    serviceDescription:
      "Logiciel pour spas et centres de bien-être : réservation en ligne, fiches clients, notes de soin, formulaires de consentement et rappels.",
    hero: {
      marketLabel,
      eyebrow: "Logiciel pour spa et bien-être",
      h1: "Le logiciel de spa et de bien-être pour une gestion sereine",
      subtitle:
        "Coordonnez cabines, praticiens et forfaits avec la réservation en ligne, l'historique client et les formulaires numériques – sans commission de place de marché.",
    },
    aiCapsules: [
      {
        question: "De quel logiciel un spa a-t-il besoin ?",
        answer:
          "Un spa a besoin d'une planification multi-ressources, de la réservation en ligne, des préférences clients, de notes de soin et de rappels. Treatflow accompagne les spas et centres de bien-être avec un hébergement dans l'UE conforme au RGPD.",
      },
      {
        question: "Treatflow gère-t-il les forfaits et les clients réguliers ?",
        answer:
          "Oui. L'historique client et les rappels vous aident à gérer les cures et vos habitués du bien-être.",
      },
    ],
    whatIsTreatflow: {
      title: "Qu'est-ce que Treatflow pour les spas et centres de bien-être ?",
      paragraphs: [
        "Un spa doit concilier ambiance et organisation. Treatflow garde les réservations en ordre, enregistre les préférences de vos clients et documente les soins pour une expérience sans accroc.",
        "Le questionnaire numérique et les rappels allègent l'accueil, tandis que les praticiens accèdent aux notes dont ils ont besoin.",
      ],
    },
    whoIsItFor: {
      title: "À qui s'adresse Treatflow ?",
      audiences: [
        "Day spas et centres de bien-être",
        "Spas d'hôtel et spas boutique",
        "Centres de bien-être à plusieurs praticiens",
        "Établissements qui combinent massages, soins du visage et soins du corps",
      ],
    },
    problems: {
      title: "Quels problèmes Treatflow résout-il ?",
      items: [
        {
          problem: "Conflits de cabines et de praticiens",
          solution: "Agenda partagé avec une planification claire des ressources.",
        },
        {
          problem: "Préférences des clients perdues d'une visite à l'autre",
          solution: "Fiches clients avec notes et historique.",
        },
        {
          problem: "Questionnaires papier à l'accueil",
          solution: "Formulaires numériques remplis avant l'arrivée.",
        },
        {
          problem: "Absences sur les soins longs",
          solution: "Rappels automatiques avant les rendez-vous.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités clés",
      items: [
        { icon: Calendar, title: "Agenda du spa", desc: "Coordonnez cabines, praticiens et prestations." },
        { icon: Link2, title: "Réservation en ligne", desc: "Vos clients réservent leurs soins 24 h/24, sans commission." },
        { icon: Users, title: "Profils clients", desc: "Préférences, historique et notes au même endroit." },
        { icon: ClipboardCheck, title: "Questionnaires", desc: "Questionnaire de santé et consentement avant la visite." },
        { icon: FileText, title: "Notes de soin", desc: "Documentez les prestations pour des soins homogènes." },
        { icon: Bell, title: "Rappels", desc: "Moins d'absences sur les rendez-vous longs." },
      ],
    },
    benefits: {
      title: "Avantages",
      items: [
        "Des passages de relais plus fluides entre l'accueil et les cabines",
        "Des clients qui se sentent reconnus grâce à l'historique des préférences",
        "Moins de papier à l'accueil",
        "Davantage de rendez-vous honorés grâce aux rappels",
        rgpdHosting,
      ],
    },
    marketFit: {
      title: "Pourquoi les spas choisissent Treatflow",
      paragraphs: [
        "Un logiciel de spa doit préserver l'expérience client, pas la compliquer. Treatflow relie la réservation aux fiches et aux formulaires pour une gestion sereine et professionnelle.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Agenda partagé pour cabines et praticiens",
        "Historique des préférences clients",
        "Questionnaire numérique et notes de soin",
        rgpdHosting,
      ],
    },
    aiSummary: {
      title: "En résumé",
      text: "Treatflow est un logiciel pour spa et bien-être avec réservation en ligne, fiches clients, questionnaires, notes de soin et rappels. Pour les day spas et centres de bien-être. Conforme au RGPD.",
    },
    faqs: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel tout-en-un pour instituts de beauté, spas et centres de bien-être, avec réservation en ligne, fiches clients, formulaires, documentation et rappels.",
      },
      {
        question: "Convient-il aux day spas ?",
        answer:
          "Oui. Les day spas utilisent Treatflow pour coordonner les réservations, l'historique client et le questionnaire numérique.",
      },
      faqGetStarted,
      faqHosting,
    ],
    internalLinks: [
      { href: "/en/massage-software", label: "Logiciel pour cabinet de massage" },
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { href: "/en/aesthetic-clinic-software", label: "Logiciel pour clinique esthétique" },
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/treatment-documentation", label: "Documentation des soins" },
      { href: "/en/pricing", label: "Tarifs" },
    ],
  },

  "massage-software": {
    ...industryDefaults,
    pageKey: "massage-software",
    canonicalPath: "/en/massage-software",
    serviceName: "Logiciel pour cabinet de massage",
    serviceDescription:
      "Logiciel pour praticiens et cabinets de massage : réservation en ligne, fiches clients, questionnaires, notes de séance et rappels.",
    hero: {
      marketLabel,
      eyebrow: "Logiciel pour cabinet de massage",
      h1: "Le logiciel de massage pour praticiens et cabinets",
      subtitle:
        "Réservation en ligne, questionnaires, notes de séance et rappels – conçu pour les praticiens du massage et les cabinets à plusieurs salles.",
    },
    aiCapsules: [
      {
        question: "De quel logiciel un praticien du massage a-t-il besoin ?",
        answer:
          "Un praticien du massage a besoin d'une réservation en ligne simple, de questionnaires et de consentements, de notes de séance, de l'historique client et de rappels. Treatflow propose tout cela avec un hébergement dans l'UE conforme au RGPD et sans commission sur les réservations.",
      },
      {
        question: "Treatflow convient-il aux praticiens indépendants ?",
        answer:
          "Oui. Les praticiens indépendants utilisent Treatflow pour gérer leur agenda, leurs fiches clients et leurs rappels, sans frais de place de marché.",
      },
    ],
    whatIsTreatflow: {
      title: "Qu'est-ce que Treatflow pour les cabinets de massage ?",
      paragraphs: [
        "Treatflow aide les praticiens du massage à passer moins de temps sur l'administratif et plus de temps avec leurs clients. Réservation, questionnaire et notes de séance sont réunis au même endroit.",
        "Les cabinets à plusieurs salles coordonnent les disponibilités, tandis que l'historique de chaque client reste confidentiel et accessible au praticien qui le suit.",
      ],
    },
    whoIsItFor: {
      title: "À qui s'adresse Treatflow ?",
      audiences: [
        "Praticiens du massage indépendants",
        "Cabinets de massage à plusieurs salles",
        "Centres de bien-être proposant massages thérapeutiques et de relaxation",
        "Équipes qui veulent en finir avec les questionnaires papier et la réservation par téléphone",
      ],
    },
    problems: {
      title: "Quels problèmes Treatflow résout-il ?",
      items: [
        {
          problem: "Réservation uniquement par téléphone et appels manqués",
          solution: "Page de réservation en ligne disponible 24 h/24.",
        },
        {
          problem: "Questionnaires papier",
          solution: "Questionnaire de santé et consentement numériques avant la séance.",
        },
        {
          problem: "Notes de séance difficiles à retrouver",
          solution: "Notes enregistrées sur la fiche client.",
        },
        {
          problem: "Les clients oublient leurs rendez-vous",
          solution: "Rappels automatiques par WhatsApp et e-mail.",
        },
      ],
    },
    features: {
      title: "Fonctionnalités clés",
      items: [
        { icon: Link2, title: "Réservation en ligne", desc: "Vos clients réservent leur massage sans commission." },
        { icon: ClipboardCheck, title: "Questionnaires", desc: "Antécédents de santé et consentement en ligne." },
        { icon: FileText, title: "Notes de séance", desc: "Documentez zones travaillées et progrès." },
        { icon: Users, title: "Fiches clients", desc: "Tout l'historique de vos clients réguliers." },
        { icon: Calendar, title: "Agenda du cabinet", desc: "Coordonnez praticiens et salles." },
        { icon: Bell, title: "Rappels", desc: "Moins de rendez-vous manqués." },
      ],
    },
    benefits: {
      title: "Avantages",
      items: [
        "Moins d'administratif entre deux séances",
        "Un questionnaire plus sûr grâce aux formulaires numériques",
        "Une meilleure continuité de suivi grâce aux notes",
        "Moins de rendez-vous manqués",
        rgpdHosting,
      ],
    },
    marketFit: {
      title: "Pourquoi les praticiens du massage choisissent Treatflow",
      paragraphs: [
        "Un cabinet de massage a davantage besoin d'une réservation fiable et de fiches claires que de modules complexes. Treatflow se concentre sur les rendez-vous, les formulaires et la documentation.",
      ],
      highlights: [
        "Réservation en ligne sans commission",
        "Questionnaire et consentement numériques",
        "Notes de séance sur les fiches clients",
        "Rappels pour les clients réguliers",
        rgpdHosting,
      ],
    },
    aiSummary: {
      title: "En résumé",
      text: "Treatflow est un logiciel pour cabinet de massage avec réservation en ligne, questionnaires, notes de séance, fiches clients et rappels. Pour les praticiens et les cabinets à plusieurs salles. Conforme au RGPD.",
    },
    faqs: [
      {
        question: "Qu'est-ce que Treatflow ?",
        answer:
          "Treatflow est un logiciel tout-en-un avec réservation en ligne, fiches clients, formulaires, documentation et rappels – adapté aux praticiens et cabinets de massage.",
      },
      {
        question: "Les praticiens indépendants peuvent-ils l'utiliser ?",
        answer:
          "Oui. Les indépendants gèrent réservations, formulaires et notes sans commission de place de marché.",
      },
      faqGetStarted,
      faqHosting,
    ],
    internalLinks: [
      { href: "/en/spa-wellness-software", label: "Logiciel pour spa et bien-être" },
      { href: "/en/beauty-salon-software", label: "Logiciel pour institut de beauté" },
      { href: "/en/aesthetic-clinic-software", label: "Logiciel pour clinique esthétique" },
      { href: "/en/online-booking", label: "Réservation en ligne" },
      { href: "/en/forms", label: "Formulaires de consentement" },
      { href: "/en/client-records", label: "Fiches clients" },
      { href: "/en/pricing", label: "Tarifs" },
    ],
  },
};

export const pages: Pick<LocaleSiteContent, "coreFeatures" | "extraFeatures" | "industries"> = {
  coreFeatures,
  extraFeatures,
  industries,
};
