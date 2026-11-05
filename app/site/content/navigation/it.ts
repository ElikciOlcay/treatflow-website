import type { NavigationContent } from "./types";

/**
 * Navigazione italiana. Stessa struttura di `en.ts`; le voci per pagine non ancora
 * disponibili in italiano vengono nascoste automaticamente (vedi app/i18n/site-pages.ts).
 */
export const navigationIt: NavigationContent = {
  featuresLabel: "Funzioni",
  featureGroups: [
    {
      title: "Appuntamenti",
      items: [
        { href: { page: "appointment-calendar" }, label: "Agenda appuntamenti", desc: "Vista giornaliera, settimanale e mensile", icon: "calendar", color: "text-indigo-600 bg-indigo-100" },
        { href: { page: "online-booking" }, label: "Prenotazioni online", desc: "Il tuo link di prenotazione 24/7", icon: "link", color: "text-rose-600 bg-rose-100" },
        { href: { page: "messaging" }, label: "Promemoria", desc: "Promemoria automatici via email", icon: "bell", color: "text-purple-600 bg-purple-100" },
        { href: { page: "customer-workflows" }, label: "Flussi per le clienti", desc: "Automazioni in più passaggi", icon: "workflow", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
    {
      title: "Clienti",
      items: [
        { href: { page: "client-records" }, label: "Schede clienti", desc: "Profili e storico dei trattamenti", icon: "users", color: "text-emerald-600 bg-emerald-100" },
        { href: { page: "forms" }, label: "Moduli", desc: "Anamnesi e consensi digitali", icon: "clipboard-check", color: "text-orange-600 bg-orange-100" },
        { href: { page: "treatment-documentation" }, label: "Documentazione", desc: "Documenta i trattamenti in digitale", icon: "file-text", color: "text-blue-600 bg-blue-100" },
      ],
    },
    {
      title: "Pagamenti e vendite",
      items: [
        { href: { page: "treatflow-pay" }, label: "Treatflow Pay", desc: "Acconto o pagamento completo online", icon: "wallet", color: "text-violet-600 bg-violet-100", feature: "pay" },
        { href: { page: "shop" }, label: "Shop", desc: "Vendita prodotti e magazzino", icon: "shopping-bag", color: "text-amber-600 bg-amber-100" },
        { href: { page: "integrations" }, label: "Integrazioni", desc: "Google Calendar, Zapier, assistenti IA e altro", icon: "plug", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
  ],
  allFeatures: { href: { page: "features" }, label: "Vedi tutte le funzioni" },
  industriesLabel: "Settori",
  industries: [
    { href: { page: "beauty-salon-software" }, label: "Centri estetici", desc: "Il gestionale tutto in uno", icon: "sparkles", color: "text-indigo-600 bg-indigo-100" },
    { href: { page: "laser-hair-removal-software" }, label: "Epilazione laser", desc: "Sedute e consensi", icon: "zap", color: "text-blue-600 bg-blue-100" },
    { href: { page: "permanent-makeup-software" }, label: "Trucco permanente", desc: "PMU e microblading", icon: "palette", color: "text-rose-600 bg-rose-100" },
    { href: { page: "aesthetic-clinic-software" }, label: "Cliniche estetiche", desc: "Gestione di clinica e pazienti", icon: "stethoscope", color: "text-teal-600 bg-teal-100" },
    { href: { page: "tattoo-studio-software" }, label: "Studi di tatuaggi", desc: "Consensi e prenotazioni", icon: "pen", color: "text-gray-600 bg-gray-200" },
    { href: { page: "nail-salon-software" }, label: "Centri unghie", desc: "Appuntamenti e preferenze delle clienti", icon: "gem", color: "text-pink-600 bg-pink-100" },
    { href: { page: "foot-care-software" }, label: "Pedicure e podologia", desc: "Schede clienti e rilevazioni", icon: "footprints", color: "text-emerald-600 bg-emerald-100" },
    { href: { page: "lash-studio-software" }, label: "Extension ciglia", desc: "Applicazioni e refill", icon: "eye", color: "text-violet-600 bg-violet-100" },
    { href: { page: "spa-wellness-software" }, label: "Spa e wellness", desc: "Gestione ospiti e prenotazioni", icon: "waves", color: "text-cyan-600 bg-cyan-100" },
    { href: { page: "massage-software" }, label: "Centri massaggi", desc: "Prenotazioni e questionari sulla salute", icon: "hand", color: "text-amber-600 bg-amber-100" },
  ],
  links: [
    { href: { page: "pricing" }, label: "Prezzi" },
    { href: { page: "blog" }, label: "Blog" },
    { href: { page: "news" }, label: "Novità" },
    { href: { page: "home", hash: "testimonials" }, label: "Recensioni" },
    { href: { page: "contact" }, label: "Contatti" },
  ],
  login: "Accedi",
  cta: "Prova gratis",
  menuAria: "Apri menu",
};
