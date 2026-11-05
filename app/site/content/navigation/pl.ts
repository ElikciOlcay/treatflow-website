import type { NavigationContent } from "./types";

/**
 * Polska nawigacja. Ta sama struktura co `en.ts` (bez funkcji dostępnych tylko w DACH).
 * Pozycje stron, których nie ma jeszcze w danym języku, są ukrywane automatycznie
 * (zob. app/i18n/site-pages.ts).
 */
export const navigationPl: NavigationContent = {
  featuresLabel: "Funkcje",
  featureGroups: [
    {
      title: "Wizyty",
      items: [
        { href: { page: "appointment-calendar" }, label: "Kalendarz wizyt", desc: "Widok dnia, tygodnia i miesiąca", icon: "calendar", color: "text-indigo-600 bg-indigo-100" },
        { href: { page: "online-booking" }, label: "Rezerwacje online", desc: "Własny link do rezerwacji 24/7", icon: "link", color: "text-rose-600 bg-rose-100" },
        { href: { page: "messaging" }, label: "Przypomnienia", desc: "Automatyczne przypomnienia e-mail", icon: "bell", color: "text-purple-600 bg-purple-100" },
        { href: { page: "customer-workflows" }, label: "Automatyzacje dla klientów", desc: "Wieloetapowe automatyzacje", icon: "workflow", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
    {
      title: "Klienci",
      items: [
        { href: { page: "client-records" }, label: "Kartoteka klientów", desc: "Profile klientów i historia zabiegów", icon: "users", color: "text-emerald-600 bg-emerald-100" },
        { href: { page: "forms" }, label: "Formularze", desc: "Cyfrowy wywiad i formularze zgód", icon: "clipboard-check", color: "text-orange-600 bg-orange-100" },
        { href: { page: "treatment-documentation" }, label: "Dokumentacja", desc: "Dokumentuj zabiegi cyfrowo", icon: "file-text", color: "text-blue-600 bg-blue-100" },
      ],
    },
    {
      title: "Płatności i sprzedaż",
      items: [
        { href: { page: "treatflow-pay" }, label: "Treatflow Pay", desc: "Zaliczka lub pełna płatność online", icon: "wallet", color: "text-violet-600 bg-violet-100", feature: "pay" },
        { href: { page: "shop" }, label: "Sklep", desc: "Sprzedaż produktów i magazyn", icon: "shopping-bag", color: "text-amber-600 bg-amber-100" },
        { href: { page: "integrations" }, label: "Integracje", desc: "Kalendarz Google, Zapier, asystenci AI i więcej", icon: "plug", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
  ],
  allFeatures: { href: { page: "features" }, label: "Zobacz wszystkie funkcje" },
  industriesLabel: "Branże",
  industries: [
    { href: { page: "beauty-salon-software" }, label: "Salony kosmetyczne", desc: "Program all-in-one dla salonu", icon: "sparkles", color: "text-indigo-600 bg-indigo-100" },
    { href: { page: "laser-hair-removal-software" }, label: "Depilacja laserowa", desc: "Serie zabiegów i zgody", icon: "zap", color: "text-blue-600 bg-blue-100" },
    { href: { page: "permanent-makeup-software" }, label: "Makijaż permanentny", desc: "PMU i microblading", icon: "palette", color: "text-rose-600 bg-rose-100" },
    { href: { page: "aesthetic-clinic-software" }, label: "Gabinety medycyny estetycznej", desc: "Dokumentacja i kartoteka pacjentów", icon: "stethoscope", color: "text-teal-600 bg-teal-100" },
    { href: { page: "tattoo-studio-software" }, label: "Studia tatuażu", desc: "Zgody i rezerwacje", icon: "pen", color: "text-gray-600 bg-gray-200" },
    { href: { page: "nail-salon-software" }, label: "Salony paznokci", desc: "Wizyty i preferencje klientów", icon: "gem", color: "text-pink-600 bg-pink-100" },
    { href: { page: "foot-care-software" }, label: "Podologia", desc: "Kartoteka klientów i opisy stanu stóp", icon: "footprints", color: "text-emerald-600 bg-emerald-100" },
    { href: { page: "lash-studio-software" }, label: "Stylizacja rzęs", desc: "Przedłużanie i planowanie uzupełnień", icon: "eye", color: "text-violet-600 bg-violet-100" },
    { href: { page: "spa-wellness-software" }, label: "Spa i wellness", desc: "Obsługa gości i rezerwacje", icon: "waves", color: "text-cyan-600 bg-cyan-100" },
    { href: { page: "massage-software" }, label: "Gabinety masażu", desc: "Rezerwacje i ankiety zdrowotne", icon: "hand", color: "text-amber-600 bg-amber-100" },
  ],
  links: [
    { href: { page: "pricing" }, label: "Cennik" },
    { href: { page: "blog" }, label: "Blog" },
    { href: { page: "news" }, label: "Nowości" },
    { href: { page: "home", hash: "testimonials" }, label: "Opinie" },
    { href: { page: "contact" }, label: "Kontakt" },
  ],
  login: "Zaloguj się",
  cta: "Wypróbuj za darmo",
  menuAria: "Otwórz menu",
};
