import type { NavigationContent } from "./types";

/**
 * Navigation française. Même structure que `en.ts` ; les entrées vers des pages
 * qui n'existent pas encore en français sont masquées automatiquement
 * (voir app/i18n/site-pages.ts).
 */
export const navigationFr: NavigationContent = {
  featuresLabel: "Fonctionnalités",
  featureGroups: [
    {
      title: "Rendez-vous",
      items: [
        { href: { page: "appointment-calendar" }, label: "Agenda et planning", desc: "Vues jour, semaine et mois", icon: "calendar", color: "text-indigo-600 bg-indigo-100" },
        { href: { page: "online-booking" }, label: "Réservation en ligne", desc: "Votre page de réservation 24h/24", icon: "link", color: "text-rose-600 bg-rose-100" },
        { href: { page: "messaging" }, label: "Rappels", desc: "Rappels automatiques par e-mail", icon: "bell", color: "text-purple-600 bg-purple-100" },
        { href: { page: "customer-workflows" }, label: "Parcours clients", desc: "Automatisations en plusieurs étapes", icon: "workflow", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
    {
      title: "Clients",
      items: [
        { href: { page: "client-records" }, label: "Fiches clients", desc: "Profils clients et historique des soins", icon: "users", color: "text-emerald-600 bg-emerald-100" },
        { href: { page: "forms" }, label: "Formulaires", desc: "Questionnaires et consentements numériques", icon: "clipboard-check", color: "text-orange-600 bg-orange-100" },
        { href: { page: "treatment-documentation" }, label: "Suivi des soins", desc: "Fiches de soin, photos et paramètres", icon: "file-text", color: "text-blue-600 bg-blue-100" },
      ],
    },
    {
      title: "Paiements et ventes",
      items: [
        { href: { page: "treatflow-pay" }, label: "Treatflow Pay", desc: "Acompte ou paiement intégral en ligne", icon: "wallet", color: "text-violet-600 bg-violet-100", feature: "pay" },
        { href: { page: "shop" }, label: "Boutique", desc: "Vente de produits et gestion du stock", icon: "shopping-bag", color: "text-amber-600 bg-amber-100" },
        { href: { page: "integrations" }, label: "Intégrations", desc: "Google Agenda, Zapier, assistants IA et plus", icon: "plug", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
  ],
  allFeatures: { href: { page: "features" }, label: "Voir toutes les fonctionnalités" },
  industriesLabel: "Métiers",
  industries: [
    { href: { page: "beauty-salon-software" }, label: "Instituts de beauté", desc: "La solution tout-en-un", icon: "sparkles", color: "text-indigo-600 bg-indigo-100" },
    { href: { page: "laser-hair-removal-software" }, label: "Épilation laser", desc: "Suivi des séances et consentements", icon: "zap", color: "text-blue-600 bg-blue-100" },
    { href: { page: "permanent-makeup-software" }, label: "Maquillage permanent", desc: "PMU et microblading", icon: "palette", color: "text-rose-600 bg-rose-100" },
    { href: { page: "aesthetic-clinic-software" }, label: "Médecine esthétique", desc: "Gestion du cabinet et des patients", icon: "stethoscope", color: "text-teal-600 bg-teal-100" },
    { href: { page: "tattoo-studio-software" }, label: "Salons de tatouage", desc: "Consentements et réservations", icon: "pen", color: "text-gray-600 bg-gray-200" },
    { href: { page: "nail-salon-software" }, label: "Ongleries", desc: "Rendez-vous et préférences clients", icon: "gem", color: "text-pink-600 bg-pink-100" },
    { href: { page: "foot-care-software" }, label: "Soins des pieds", desc: "Fiches clients et observations", icon: "footprints", color: "text-emerald-600 bg-emerald-100" },
    { href: { page: "lash-studio-software" }, label: "Extensions de cils", desc: "Poses et planification des remplissages", icon: "eye", color: "text-violet-600 bg-violet-100" },
    { href: { page: "spa-wellness-software" }, label: "Spa et bien-être", desc: "Gestion des clients et réservations", icon: "waves", color: "text-cyan-600 bg-cyan-100" },
    { href: { page: "massage-software" }, label: "Massage", desc: "Réservations et questionnaires de santé", icon: "hand", color: "text-amber-600 bg-amber-100" },
  ],
  links: [
    { href: { page: "pricing" }, label: "Tarifs" },
    { href: { page: "blog" }, label: "Blog" },
    { href: { page: "news" }, label: "Nouveautés" },
    { href: { page: "home", hash: "testimonials" }, label: "Avis clients" },
    { href: { page: "contact" }, label: "Contact" },
  ],
  login: "Connexion",
  cta: "Essai gratuit",
  menuAria: "Ouvrir le menu",
};
