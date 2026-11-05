import type { PricingPageContent } from "./types";

export const pricingPl: PricingPageContent = {
  meta: {
    title: "Cennik",
    description:
      "Cennik Treatflow: Basic od 39 €/miesiąc, Booking od 59 €/miesiąc. Bez prowizji od rezerwacji, 14 dni za darmo, bez karty kredytowej.",
    keywords: [
      "program do salonu kosmetycznego cena",
      "system rezerwacji online cena",
      "program do salonu kosmetycznego bez prowizji",
      "oprogramowanie dla gabinetu kosmetycznego cennik",
      "program do gabinetu medycyny estetycznej cena",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Cennik",
  capsule: {
    question: "Ile kosztuje Treatflow?",
    answer:
      "Basic od 39 €/miesiąc (zarządzanie klientami, formularze, dokumentacja), Booking od 59 €/miesiąc (z kalendarzem wizyt, rezerwacjami online i przypomnieniami). Bez prowizji od rezerwacji, 14 dni za darmo.",
  },
  schema: {
    webPage: {
      name: "Cennik: program do salonu od 39 €/miesiąc",
      description: "Przejrzysty cennik Treatflow: Basic od 39 €/miesiąc, Booking od 59 €/miesiąc.",
    },
    priceValidUntil: "2026-12-31",
    offers: [
      { name: "Basic", price: "39", currency: "EUR" },
      { name: "Booking", price: "59", currency: "EUR" },
    ],
  },
  comparison: {
    title: "Co zawierają pakiety?",
    subtitle: "Porównaj szczegółowo oba pakiety i wybierz ten, który pasuje do Twojego salonu.",
    vatNote: "Wszystkie ceny netto (bez VAT).",
    featureLabel: "Funkcja",
    basicLabel: "Basic (39 €)",
    bookingLabel: "Booking (59 €)",
    rows: [
      { label: "Zarządzanie klientami", basic: true, booking: true },
      { label: "Formularze z podpisem elektronicznym", basic: true, booking: true },
      { label: "Dokumentacja zabiegów z notatkami głosowymi", basic: true, booking: true },
      { label: "Zdjęcia przed i po", basic: true, booking: true },
      { label: "Notatki i zadania zespołu", basic: true, booking: true },
      { label: "Sklep i produkty", basic: true, booking: true },
      { label: "Statystyki", basic: true, booking: true },
      { label: "Pracownicy i role", basic: true, booking: true },
      { label: "Wsparcie e-mail", basic: true, booking: true },
      { label: "Kalendarz wizyt (pracownicy i gabinety)", basic: false, booking: true },
      { label: "Rezerwacje online bez prowizji", basic: false, booking: true },
      { label: "Lista oczekujących", basic: false, booking: true },
      { label: "Przypomnienia e-mail", basic: false, booking: true },
      { label: "Automatyzacje dla klientów", basic: false, booking: true },
      { label: "Kody rabatowe", basic: false, booking: true },
      { label: "Wielojęzyczna strona rezerwacji", basic: false, booking: true },
      { label: "Integracje (Kalendarz Google, Zapier, asystenci AI)", basic: false, booking: true },
      { label: "Wsparcie priorytetowe", basic: false, booking: true },
    ],
    cta: "Wypróbuj za darmo przez 14 dni",
  },
  why: {
    title: "Dlaczego Treatflow?",
    subtitle: "Przejrzyste stałe ceny zamiast ukrytych kosztów i prowizji.",
    stats: [
      { value: "0%", label: "prowizji od rezerwacji" },
      { value: "0 €", label: "opłat za wdrożenie" },
      { value: "14 dni", label: "za darmo" },
      { value: "W każdej chwili", label: "możesz zrezygnować" },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o ceny",
    subtitle: "Wszystko, co musisz wiedzieć o cenach Treatflow.",
    items: [
      {
        question: "Ile kosztuje Treatflow?",
        answer:
          "Treatflow oferuje dwa pakiety: Basic od 39 €/miesiąc do zarządzania klientami, formularzy i dokumentacji. Booking od 59 €/miesiąc dodatkowo z kalendarzem wizyt, rezerwacjami online i automatycznymi przypomnieniami. Oba pakiety możesz testować za darmo przez 14 dni.",
      },
      {
        question: "Czy są ukryte koszty?",
        answer:
          "Nie. Treatflow działa w oparciu o przejrzyste stałe ceny – bez prowizji, opłat za wdrożenie i ukrytych dopłat. Płacisz dokładnie tyle, ile widzisz.",
      },
      {
        question: "Czy mogę zrezygnować w każdej chwili?",
        answer:
          "Tak. Przy płatności miesięcznej możesz zrezygnować w każdej chwili ze skutkiem na koniec okresu rozliczeniowego. Nie ma minimalnego okresu umowy.",
      },
      {
        question: "Czy istnieje darmowy program do salonu kosmetycznego?",
        answer:
          "Niektórzy dostawcy, np. Fresha, oferują darmowe wersje podstawowe, ale zarabiają na opłatach za płatności i funkcjach premium. Treatflow oferuje przejrzyste stałe ceny bez ukrytych kosztów – od 39 €/miesiąc z pełnym zakresem funkcji.",
      },
      {
        question: "Czy pakiet Booking się opłaca?",
        answer:
          "Tak, jeśli potrzebujesz rezerwacji online, automatycznych przypomnień e-mail o wizytach i cyfrowego kalendarza. Z pakietem Booking masz wyraźnie mniej nieobecności i mniej czasu spędzasz przy telefonie.",
      },
    ],
  },
};
