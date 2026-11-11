import type { NavigationContent } from "./types";

/**
 * English navigation. Same structure as `de.ts`; items for pages that do not exist
 * in a language yet (e.g. customer workflows, Treatflow Pay, foot care) are hidden
 * automatically until the page is added (see app/i18n/site-pages.ts).
 */
export const navigationEn: NavigationContent = {
  featuresLabel: "Features",
  featureGroups: [
    {
      title: "Appointments",
      items: [
        { href: { page: "appointment-calendar" }, label: "Appointment calendar", desc: "Daily, weekly and monthly views", icon: "calendar", color: "text-indigo-600 bg-indigo-100" },
        { href: { page: "shift-planner" }, label: "Shift planner", desc: "Shifts, holidays & absences", icon: "calendar-clock", color: "text-teal-600 bg-teal-100" },
        { href: { page: "online-booking" }, label: "Online booking", desc: "Your own booking link, open 24/7", icon: "link", color: "text-rose-600 bg-rose-100" },
        { href: { page: "messaging" }, label: "Reminders", desc: "Automated email reminders", icon: "bell", color: "text-purple-600 bg-purple-100" },
        { href: { page: "customer-workflows" }, label: "Client workflows", desc: "Multi-step automations", icon: "workflow", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
    {
      title: "Clients",
      items: [
        { href: { page: "client-records" }, label: "Client records", desc: "Client profiles and treatment history", icon: "users", color: "text-emerald-600 bg-emerald-100" },
        { href: { page: "forms" }, label: "Forms", desc: "Digital consultation and consent forms", icon: "clipboard-check", color: "text-orange-600 bg-orange-100" },
        { href: { page: "treatment-documentation" }, label: "Treatment records", desc: "Notes, photos and settings per treatment", icon: "file-text", color: "text-blue-600 bg-blue-100" },
      ],
    },
    {
      title: "Payments & sales",
      items: [
        { href: { page: "treatflow-pay" }, label: "Treatflow Pay", desc: "Deposits or full payment online", icon: "wallet", color: "text-violet-600 bg-violet-100", feature: "pay" },
        { href: { page: "shop" }, label: "Shop", desc: "Retail sales and stock control", icon: "shopping-bag", color: "text-amber-600 bg-amber-100" },
        { href: { page: "integrations" }, label: "Integrations", desc: "Google Calendar, Zapier, AI assistants and more", icon: "plug", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
  ],
  allFeatures: { href: { page: "features" }, label: "View all features" },
  industriesLabel: "Industries",
  industries: [
    { href: { page: "beauty-salon-software" }, label: "Beauty salons", desc: "The all-in-one solution", icon: "sparkles", color: "text-indigo-600 bg-indigo-100" },
    { href: { page: "laser-hair-removal-software" }, label: "Laser hair removal", desc: "Session tracking and consent", icon: "zap", color: "text-blue-600 bg-blue-100" },
    { href: { page: "permanent-makeup-software" }, label: "Permanent makeup", desc: "PMU and microblading", icon: "palette", color: "text-rose-600 bg-rose-100" },
    { href: { page: "aesthetic-clinic-software" }, label: "Aesthetic clinics", desc: "Clinic and patient management", icon: "stethoscope", color: "text-teal-600 bg-teal-100" },
    { href: { page: "tattoo-studio-software" }, label: "Tattoo studios", desc: "Consent forms and bookings", icon: "pen", color: "text-gray-600 bg-gray-200" },
    { href: { page: "nail-salon-software" }, label: "Nail salons", desc: "Appointments and client preferences", icon: "gem", color: "text-pink-600 bg-pink-100" },
    { href: { page: "foot-care-software" }, label: "Foot care", desc: "Client records and assessment notes", icon: "footprints", color: "text-emerald-600 bg-emerald-100" },
    { href: { page: "lash-studio-software" }, label: "Lash studios", desc: "Lash extensions and infill planning", icon: "eye", color: "text-violet-600 bg-violet-100" },
    { href: { page: "spa-wellness-software" }, label: "Spa & wellness", desc: "Guest records and bookings", icon: "waves", color: "text-cyan-600 bg-cyan-100" },
    { href: { page: "massage-software" }, label: "Massage therapists", desc: "Bookings and health questionnaires", icon: "hand", color: "text-amber-600 bg-amber-100" },
  ],
  links: [
    { href: { page: "pricing" }, label: "Pricing" },
    { href: { page: "blog" }, label: "Blog" },
    { href: { page: "news" }, label: "News" },
    { href: { page: "home", hash: "testimonials" }, label: "Reviews" },
    { href: { page: "contact" }, label: "Contact" },
  ],
  login: "Log in",
  cta: "Start free trial",
  menuAria: "Open menu",
};
