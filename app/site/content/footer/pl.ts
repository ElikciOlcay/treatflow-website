import type { FooterContent } from "./types";

/**
 * Polska stopka. Te same kolumny co `en.ts` (bez pozycji dostępnych tylko w DACH).
 * Linki do stron, których nie ma jeszcze w danym języku, są ukrywane automatycznie
 * (zob. app/i18n/site-pages.ts).
 */
export const footerPl: FooterContent = {
  tagline: "Twój cyfrowy asystent salonu. Made in Austria.",
  instagramAria: "Treatflow na Instagramie",
  columns: [
    {
      sections: [
        {
          title: "Funkcje",
          links: [
            { href: { page: "appointment-calendar" }, label: "Kalendarz wizyt" },
            { href: { page: "online-booking" }, label: "Rezerwacje online" },
            { href: { page: "treatflow-pay" }, label: "Treatflow Pay", feature: "pay" },
            { href: { page: "client-records" }, label: "Kartoteka klientów" },
            { href: { page: "forms" }, label: "Formularze" },
            { href: { page: "try-forms" }, label: "Wypróbuj przykładowe formularze" },
            { href: { page: "treatment-documentation" }, label: "Dokumentacja zabiegów" },
            { href: { page: "messaging" }, label: "Przypomnienia" },
            { href: { page: "customer-workflows" }, label: "Automatyzacje dla klientów" },
            { href: { page: "integrations" }, label: "Integracje" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Branże",
          links: [
            { href: { page: "beauty-salon-software" }, label: "Salony kosmetyczne" },
            { href: { page: "laser-hair-removal-software" }, label: "Laser i IPL" },
            { href: { page: "permanent-makeup-software" }, label: "Makijaż permanentny" },
            { href: { page: "aesthetic-clinic-software" }, label: "Gabinety medycyny estetycznej" },
            { href: { page: "nail-salon-software" }, label: "Salony paznokci" },
            { href: { page: "foot-care-software" }, label: "Podologia" },
            { href: { page: "lash-studio-software" }, label: "Stylizacja rzęs" },
            { href: { page: "tattoo-studio-software" }, label: "Studia tatuażu" },
            { href: { page: "spa-wellness-software" }, label: "Spa i wellness" },
            { href: { page: "massage-software" }, label: "Masaż" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Produkt",
          links: [
            { href: { page: "pricing" }, label: "Cennik" },
            { href: { page: "software-comparison" }, label: "Porównanie programów" },
            { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
            { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
            { href: { page: "shop" }, label: "Sklep" },
            { href: { page: "studio-website" }, label: "Strona salonu" },
            { special: "register", label: "Wypróbuj za darmo" },
            { special: "login", label: "Zaloguj się" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Firma",
          links: [
            { href: { page: "about" }, label: "O nas" },
            { href: { page: "blog" }, label: "Blog" },
            { href: { page: "news" }, label: "Nowości" },
            { href: { page: "try-features" }, label: "Wypróbuj funkcje na żywo" },
            { href: { page: "contact" }, label: "Kontakt" },
          ],
        },
        {
          title: "Informacje prawne",
          links: [
            { href: { page: "privacy" }, label: "Polityka prywatności" },
            { special: "cookie-settings", label: "Ustawienia cookies" },
            { href: { page: "terms" }, label: "Regulamin" },
            { href: { page: "imprint" }, label: "Nota prawna" },
          ],
        },
      ],
    },
  ],
  popularTopicsTitle: "Popularne tematy",
  popularTopics: [
    { href: { page: "online-booking" }, label: "Rezerwacje online dla salonu kosmetycznego" },
    { href: { page: "treatment-documentation" }, label: "Program do dokumentacji zabiegów" },
    { href: { page: "forms" }, label: "Cyfrowe formularze wywiadu" },
    { href: { page: "messaging" }, label: "Przypomnienia o wizytach" },
    { href: { page: "appointment-calendar" }, label: "Program do umawiania wizyt w salonie" },
    { href: { page: "client-records" }, label: "Kartoteka klientów dla salonu" },
    { href: { page: "aesthetic-clinic-software" }, label: "Program do gabinetu medycyny estetycznej" },
    { href: { page: "software-comparison" }, label: "Porównanie programów dla salonów" },
  ],
  rights: "Wszelkie prawa zastrzeżone.",
};
