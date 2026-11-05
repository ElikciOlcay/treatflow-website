import type { FeaturesOverviewContent } from "./types";

export const featuresPl: FeaturesOverviewContent = {
  meta: {
    title: "Funkcje programu do salonu kosmetycznego",
    description:
      "Kalendarz wizyt, rezerwacje online bez prowizji, kartoteka klientów, zgody na zabieg online, dokumentacja zabiegów z dyktowaniem głosowym, przypomnienia e-mail i integracje – w jednym systemie dla salonu i gabinetu.",
    keywords: [
      "program do salonu kosmetycznego",
      "system rezerwacji online",
      "kartoteka klientów salon kosmetyczny",
      "elektroniczna karta klienta",
      "formularz zgody na zabieg online",
    ],
  },
  breadcrumb: "Funkcje",
  hero: {
    eyebrow: "Przegląd funkcji",
    eyebrowIcon: "sparkles",
    title: { before: "Wszystkie ", highlight: "funkcje", after: " w jednym miejscu" },
    description: "Kalendarz, rezerwacje, kartoteka klientów, formularze i dokumentacja – jeden system dla całego salonu.",
    chips: ["Wszystko w jednym", "Bez prowizji", "Made in Austria"],
    secondaryCta: { label: "Zobacz cennik", href: { page: "pricing" } },
    tiles: [
      { label: "Kalendarz", icon: "calendar", gradient: "from-indigo-500 to-purple-600" },
      { label: "Rezerwacje", icon: "link", gradient: "from-rose-500 to-orange-600" },
      { label: "Klienci", icon: "users", gradient: "from-blue-500 to-indigo-600" },
      { label: "Formularze", icon: "clipboard-check", gradient: "from-orange-500 to-amber-600" },
      { label: "Dokumentacja", icon: "file-text", gradient: "from-violet-500 to-purple-600" },
      { label: "Automatyzacje", icon: "workflow", gradient: "from-green-500 to-emerald-600" },
    ],
  },
  grid: {
    title: "Kluczowe funkcje dla Twojego salonu ({count})",
    subtitle: "Każda funkcja powstała z myślą o codziennej pracy salonów kosmetycznych i gabinetów.",
    more: "Dowiedz się więcej",
    items: [
      {
        href: { page: "appointment-calendar" },
        icon: "calendar",
        title: "Kalendarz wizyt",
        description:
          "Każda osoba z zespołu i każdy gabinet w osobnej kolumnie. Widzisz wolne terminy, unikasz podwójnych rezerwacji i szybciej ogarniasz zmiany w grafiku.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Kolumny pracowników i gabinetów", "Obłożenie na pierwszy rzut oka", "Przeciągnij i upuść"],
      },
      {
        href: { page: "treatflow-pay" },
        icon: "wallet",
        title: "Treatflow Pay",
        description: "Zaliczka lub pełna płatność już przy rezerwacji online. Ustawiasz osobno dla każdej usługi, 2,69% od transakcji.",
        color: "text-violet-600",
        bg: "bg-violet-50",
        border: "border-violet-200 hover:border-violet-400",
        highlights: ["Zaliczka lub pełna płatność", "Karta, Apple Pay, Google Pay", "2,69% od transakcji"],
        feature: "pay",
      },
      {
        href: { page: "online-booking" },
        icon: "link",
        title: "Rezerwacje online",
        description:
          "Własny link do rezerwacji dla Twojego salonu. Klienci umawiają się o każdej porze, a potwierdzenia i przypomnienia wysyłają się same.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200 hover:border-rose-400",
        highlights: ["Link do rezerwacji 24/7", "Automatyczne potwierdzenia", "Bez podwójnych rezerwacji"],
      },
      {
        href: { page: "client-records" },
        icon: "users",
        title: "Cyfrowa kartoteka klientów",
        description:
          "Cyfrowa kartoteka z historią zabiegów, zdjęciami przed i po, alergiami i notatkami. Wszystko w jednym miejscu.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200 hover:border-emerald-400",
        highlights: ["Nieograniczona liczba klientów", "Zdjęcia i notatki", "Zgodność z RODO"],
      },
      {
        href: { page: "forms" },
        icon: "clipboard-check",
        title: "Formularze i wywiad",
        description:
          "Karty wywiadu i zgody na zabieg online. Klienci wypełniają je przed wizytą na smartfonie – bez papieru i zgodnie z RODO.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        highlights: ["Karta wywiadu online", "Link przed wizytą", "Bez papieru"],
      },
      {
        href: { page: "treatment-documentation" },
        icon: "file-text",
        title: "Dokumentacja zabiegów",
        description:
          "Każdy zabieg w jednym wpisie: zdjęcia, użyte produkty, notatki i efekty. Przy kolejnej wizycie wszystko masz pod ręką.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        highlights: ["Zdjęcia i produkty", "Historia zabiegów", "Pełna dokumentacja"],
      },
      {
        href: { page: "messaging" },
        icon: "bell",
        title: "Automatyczne przypomnienia",
        description: "Przypomnienie e-mail przed każdą wizytą. Mniej nieodwołanych wizyt – w pełni automatycznie.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        highlights: ["Przypomnienia e-mail", "Mniej nieodwołanych wizyt", "Własny termin wysyłki"],
      },
      {
        href: { page: "customer-workflows" },
        icon: "workflow",
        title: "Automatyzacje dla klientów",
        description:
          "Wieloetapowe automatyzacje do opieki pozabiegowej, odzyskiwania klientów i kontaktu po wizycie – z odstępami czasowymi, warunkami i e-mailami.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Edytor wizualny", "Automatyczne e-maile", "Zatrzymuje się po nowej rezerwacji"],
      },
      {
        href: { page: "shop" },
        icon: "shopping-bag",
        title: "Sprzedaż produktów i magazyn",
        description:
          "Sprzedawaj kosmetyki do pielęgnacji domowej prosto w salonie. Kontroluj magazyn, rejestruj sprzedaż i buduj dodatkowe przychody.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200 hover:border-amber-400",
        highlights: ["Sprzedaż produktów", "Stany magazynowe", "Dodatkowe przychody"],
      },
    ],
  },
  why: {
    title: "Dlaczego Treatflow?",
    points: [
      "Wszystko w jednym: wszystkie funkcje w jednym systemie",
      "Zgodność z RODO, serwery w UE",
      "Bez ukrytych kosztów i prowizji",
      "14 dni za darmo, bez podawania karty",
      "Bezpłatne wsparcie i wdrożenie",
      "Made in Austria",
    ],
  },
};
