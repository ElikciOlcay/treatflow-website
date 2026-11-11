import type { NavigationContent } from "./types";

/**
 * Nederlandse navigatie (NL + BE). Zelfde structuur als `en.ts`; items voor pagina's
 * die in een taal nog niet bestaan, worden automatisch verborgen
 * (zie app/i18n/site-pages.ts).
 */
export const navigationNl: NavigationContent = {
  featuresLabel: "Functies",
  featureGroups: [
    {
      title: "Afspraken",
      items: [
        { href: { page: "appointment-calendar" }, label: "Online agenda", desc: "Dag-, week- en maandoverzicht", icon: "calendar", color: "text-indigo-600 bg-indigo-100" },
        { href: { page: "shift-planner" }, label: "Roosterplanner", desc: "Diensten, vakantie & afwezigheid", icon: "calendar-clock", color: "text-teal-600 bg-teal-100" },
        { href: { page: "online-booking" }, label: "Online boeken", desc: "Je eigen boekingslink, 24/7 open", icon: "link", color: "text-rose-600 bg-rose-100" },
        { href: { page: "messaging" }, label: "Herinneringen", desc: "Automatische afspraakherinneringen per e-mail", icon: "bell", color: "text-purple-600 bg-purple-100" },
        { href: { page: "customer-workflows" }, label: "Klantworkflows", desc: "Automatische nazorg en opvolging", icon: "workflow", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
    {
      title: "Klanten",
      items: [
        { href: { page: "client-records" }, label: "Klantdossiers", desc: "Klantgegevens en behandelhistorie", icon: "users", color: "text-emerald-600 bg-emerald-100" },
        { href: { page: "forms" }, label: "Formulieren", desc: "Digitale intake- en toestemmingsformulieren", icon: "clipboard-check", color: "text-orange-600 bg-orange-100" },
        { href: { page: "treatment-documentation" }, label: "Behandelverslagen", desc: "Behandelingen digitaal vastleggen", icon: "file-text", color: "text-blue-600 bg-blue-100" },
      ],
    },
    {
      title: "Betalen & verkoop",
      items: [
        { href: { page: "treatflow-pay" }, label: "Treatflow Pay", desc: "Aanbetaling of volledige betaling bij het boeken", icon: "wallet", color: "text-violet-600 bg-violet-100", feature: "pay" },
        { href: { page: "shop" }, label: "Shop", desc: "Producten verkopen, voorraad beheren", icon: "shopping-bag", color: "text-amber-600 bg-amber-100" },
        { href: { page: "integrations" }, label: "Integraties", desc: "Google Agenda, Zapier, AI-assistenten en meer", icon: "plug", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
  ],
  allFeatures: { href: { page: "features" }, label: "Bekijk alle functies" },
  industriesLabel: "Branches",
  industries: [
    { href: { page: "beauty-salon-software" }, label: "Schoonheidssalons", desc: "Alles in één systeem", icon: "sparkles", color: "text-indigo-600 bg-indigo-100" },
    { href: { page: "laser-hair-removal-software" }, label: "Laserontharing", desc: "Behandelreeksen en toestemming", icon: "zap", color: "text-blue-600 bg-blue-100" },
    { href: { page: "permanent-makeup-software" }, label: "Permanente make-up", desc: "PMU en microblading", icon: "palette", color: "text-rose-600 bg-rose-100" },
    { href: { page: "aesthetic-clinic-software" }, label: "Esthetische klinieken", desc: "Praktijk- en patiëntbeheer", icon: "stethoscope", color: "text-teal-600 bg-teal-100" },
    { href: { page: "tattoo-studio-software" }, label: "Tattoostudio's", desc: "Toestemmingsformulieren en boekingen", icon: "pen", color: "text-gray-600 bg-gray-200" },
    { href: { page: "nail-salon-software" }, label: "Nagelstudio's", desc: "Afspraken en klantvoorkeuren", icon: "gem", color: "text-pink-600 bg-pink-100" },
    { href: { page: "foot-care-software" }, label: "Pedicure & voetzorg", desc: "Klantdossiers en voetbevindingen", icon: "footprints", color: "text-emerald-600 bg-emerald-100" },
    { href: { page: "lash-studio-software" }, label: "Wimperstudio's", desc: "Extensions en opvulafspraken plannen", icon: "eye", color: "text-violet-600 bg-violet-100" },
    { href: { page: "spa-wellness-software" }, label: "Spa & wellness", desc: "Gasten en boekingen beheren", icon: "waves", color: "text-cyan-600 bg-cyan-100" },
    { href: { page: "massage-software" }, label: "Massagepraktijken", desc: "Boekingen en gezondheidsvragenlijsten", icon: "hand", color: "text-amber-600 bg-amber-100" },
  ],
  links: [
    { href: { page: "pricing" }, label: "Prijzen" },
    { href: { page: "blog" }, label: "Blog" },
    { href: { page: "news" }, label: "Nieuws" },
    { href: { page: "home", hash: "testimonials" }, label: "Reviews" },
    { href: { page: "contact" }, label: "Contact" },
  ],
  login: "Inloggen",
  cta: "Probeer gratis",
  menuAria: "Menu openen",
};
