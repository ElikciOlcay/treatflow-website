import type { NavigationContent } from "./types";

/** Deutsche Navigation (Referenz). Reihenfolge und Texte = bisheriges Navigation.tsx. */
export const navigationDe: NavigationContent = {
  featuresLabel: "Funktionen",
  featureGroups: [
    {
      title: "Termine",
      items: [
        { href: { page: "appointment-calendar" }, label: "Terminkalender", desc: "Tages-, Wochen- und Monatsansicht", icon: "calendar", color: "text-indigo-600 bg-indigo-100" },
        { href: { page: "shift-planner" }, label: "Schichtplaner", desc: "Schichten, Urlaub & Abwesenheiten", icon: "calendar-clock", color: "text-teal-600 bg-teal-100" },
        { href: { page: "online-booking" }, label: "Online-Buchungen", desc: "Persönlicher Buchungslink 24/7", icon: "link", color: "text-rose-600 bg-rose-100" },
        { href: { page: "messaging" }, label: "Nachrichten", desc: "WhatsApp und E-Mail automatisiert", icon: "bell", color: "text-purple-600 bg-purple-100" },
        { href: { page: "customer-workflows" }, label: "Kunden-Workflows", desc: "Mehrstufige Automationen", icon: "workflow", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
    {
      title: "Kunden",
      items: [
        { href: { page: "client-records" }, label: "Kundenverwaltung", desc: "Kundenprofile und Behandlungshistorie", icon: "users", color: "text-emerald-600 bg-emerald-100" },
        { href: { page: "forms" }, label: "Formulare", desc: "Digitale Anamnese und Einwilligungen", icon: "clipboard-check", color: "text-orange-600 bg-orange-100" },
        { href: { page: "treatment-documentation" }, label: "Dokumentation", desc: "Behandlungen digital festhalten", icon: "file-text", color: "text-blue-600 bg-blue-100" },
        { href: { page: "nisv-documentation" }, label: "NiSV-Dokumentation", desc: "Konform dokumentieren", icon: "shield", color: "text-teal-600 bg-teal-100", feature: "nisv" },
      ],
    },
    {
      title: "Kasse & Verkauf",
      items: [
        { href: { page: "point-of-sale" }, label: "Kassensystem", desc: "TSE- & RKSV-konform kassieren", icon: "receipt", color: "text-green-600 bg-green-100", feature: "pos" },
        { href: { page: "treatflow-pay" }, label: "Treatflow Pay", desc: "Anzahlung oder Vollzahlung online", icon: "wallet", color: "text-violet-600 bg-violet-100", feature: "pay" },
        { href: { page: "vouchers" }, label: "Gutscheine", desc: "Verkaufen, einlösen, Restwert", icon: "gift", color: "text-purple-600 bg-purple-100", feature: "vouchers" },
        { href: { page: "shop" }, label: "Shop", desc: "Produktverkauf und Lagerverwaltung", icon: "shopping-bag", color: "text-amber-600 bg-amber-100" },
        { href: { page: "integrations" }, label: "Integrationen", desc: "Lexware, Google Kalender, Zapier, SumUp u. m.", icon: "plug", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
  ],
  allFeatures: { href: { page: "features" }, label: "Alle Funktionen ansehen" },
  industriesLabel: "Branchen",
  industries: [
    { href: { page: "beauty-salon-software" }, label: "Kosmetikstudios", desc: "Die All-in-One Lösung", icon: "sparkles", color: "text-indigo-600 bg-indigo-100" },
    { href: { page: "laser-hair-removal-software" }, label: "Laser Haarentfernung", desc: "NiSV-konform dokumentieren", icon: "zap", color: "text-blue-600 bg-blue-100" },
    { href: { page: "permanent-makeup-software" }, label: "Permanent Makeup", desc: "PMU und Microblading", icon: "palette", color: "text-rose-600 bg-rose-100" },
    { href: { page: "aesthetic-clinic-software" }, label: "Ästhetische Medizin", desc: "Praxis- und Patientenverwaltung", icon: "stethoscope", color: "text-teal-600 bg-teal-100" },
    { href: { page: "tattoo-studio-software" }, label: "Tattoo Studios", desc: "Einwilligungen und Buchungen", icon: "pen", color: "text-gray-600 bg-gray-200" },
    { href: { page: "nail-salon-software" }, label: "Nagelstudios", desc: "Termine und Kundenvorlieben", icon: "gem", color: "text-pink-600 bg-pink-100" },
    { href: { page: "foot-care-software" }, label: "Fußpflege", desc: "Kundenkartei und Befunde", icon: "footprints", color: "text-emerald-600 bg-emerald-100" },
    { href: { page: "lash-studio-software" }, label: "Lash Studios", desc: "Wimpern und Refill-Planung", icon: "eye", color: "text-violet-600 bg-violet-100" },
    { href: { page: "spa-wellness-software" }, label: "Spa & Wellness", desc: "Gästeverwaltung und Buchungen", icon: "waves", color: "text-cyan-600 bg-cyan-100" },
    { href: { page: "massage-software" }, label: "Massage-Praxen", desc: "Termine und Gesundheitsfragebögen", icon: "hand", color: "text-amber-600 bg-amber-100" },
  ],
  links: [
    { href: { page: "pricing" }, label: "Preise" },
    { href: { page: "blog" }, label: "Blog" },
    { href: { page: "news" }, label: "Neuigkeiten" },
    { href: { page: "home", hash: "testimonials" }, label: "Referenzen" },
    { href: { page: "contact" }, label: "Kontakt" },
  ],
  login: "Login",
  cta: "Kostenlos testen",
};
