import type { IntegrationsContent } from "./types";

export const integrationsPl: IntegrationsContent = {
  meta: {
    title: "Integracje i aplikacje dla Twojego salonu kosmetycznego",
    description:
      "Połącz Treatflow z Kalendarzem Google, Zapierem i asystentami AI, takimi jak Claude czy ChatGPT, oraz przyjmuj płatności online przez Treatflow Pay – synchronizacja kalendarza, automatyzacje i płatności na jednej platformie.",
    keywords: [
      "integracje Treatflow",
      "integracje programu dla salonu",
      "synchronizacja Kalendarza Google salon",
      "Zapier salon kosmetyczny",
      "program dla salonu ChatGPT",
      "Claude MCP program dla salonu",
      "płatności online salon kosmetyczny",
      "synchronizacja kalendarza wizyt",
    ],
  },
  schema: { id: "integrationen" },
  breadcrumb: "Integracje",
  hero: {
    eyebrow: "Integracje",
    eyebrowIcon: "plug",
    title: { before: "Połącz aplikacje, a ", highlight: "dane", after: " będą zawsze zgodne" },
    description:
      "Kalendarz Google, Zapier, asystenci AI i Treatflow Pay – łączysz raz, wszystko jest aktualne wszędzie.",
    chips: ["Kalendarz Google", "Zapier", "Asystenci AI (MCP)", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Zobacz kalendarz", href: { page: "appointment-calendar" } },
    tiles: [
      { name: "Google", category: "Kalendarz", gradient: "from-emerald-500 to-teal-600", icon: "calendar" },
      { name: "Zapier", category: "Automatyzacja", gradient: "from-orange-500 to-amber-600", icon: "zap" },
      { name: "Claude i ChatGPT", category: "Asystenci AI", gradient: "from-blue-500 to-indigo-600", icon: "bot" },
      { name: "Treatflow Pay", category: "Płatności online", gradient: "from-violet-500 to-purple-600", icon: "wallet", feature: "pay" },
    ],
  },
  understand: {
    title: "W skrócie: do czego służą integracje",
    description: "Mniej podwójnej pracy – dane same przepływają między Twoimi narzędziami.",
    items: [
      {
        icon: "refresh",
        title: "Mniej podwójnej pracy",
        text: "Klientów i wizyty wprowadzasz raz – kalendarz i połączone narzędzia pozostają aktualne.",
      },
      {
        icon: "workflow",
        title: "Automatyczne procesy",
        text: "Wpisy w kalendarzu i automatyzacje Zapier działają w tle.",
      },
      {
        icon: "shield-check",
        title: "Zgodność z RODO",
        text: "Bezpieczne połączenia i przetwarzanie danych zgodne z przepisami UE. Dane medyczne nigdy nie opuszczają Treatflow.",
      },
    ],
  },
  howItWorks: {
    description: "Połączenie w trzech krokach – bez wiedzy technicznej.",
    steps: [
      { title: "Wybierz aplikację", text: "Wybierz integrację w Ustawieniach salonu > Aplikacje." },
      { title: "Połącz konto", text: "Zaloguj się jednorazowo u dostawcy – np. w Google, Zapierze, Claude lub ChatGPT." },
      { title: "Automatyczna synchronizacja", text: "Od teraz wizyty, klienci i automatyzacje działają razem." },
    ],
  },
  cards: {
    title: "Te aplikacje są zintegrowane",
    description: "Od synchronizacji kalendarza i automatyzacji po asystentów AI i płatności online.",
    items: [
      {
        icon: "calendar",
        title: "Kalendarz Google",
        text: "Synchronizacja dwukierunkowa: Treatflow i Google są zgodne w czasie rzeczywistym.",
        points: ["Synchronizacja dwukierunkowa", "Bez podwójnych rezerwacji", "Prywatne i salonowe osobno"],
      },
      {
        icon: "wallet",
        title: "Treatflow Pay",
        text: "Zaliczki lub pełne płatności przy rezerwacjach online – bezpiecznie przez Stripe.",
        points: ["Zaliczki", "Pełna płatność z góry", "2,69% – przejrzyście"],
        feature: "pay",
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "Połącz ponad 7000 aplikacji – automatyzacje przy nowych wizytach i formularzach.",
        points: ["Ponad 7000 aplikacji", "Webhooki", "Bez kodowania"],
      },
      {
        icon: "bot",
        title: "Asystenci AI (MCP)",
        text: "Połącz Claude, ChatGPT i innych asystentów i pytaj o wizyty, klientów lub przychody.",
        points: ["Domyślnie tylko odczyt", "Dane medyczne zostają w Treatflow", "Dostęp można cofnąć w każdej chwili"],
      },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o integracje",
    items: [
      {
        question: "Jakie aplikacje mogę połączyć z Treatflow?",
        answer:
          "Treatflow łączy się bezpośrednio z Kalendarzem Google (synchronizacja wizyt), Treatflow Pay (płatności online) oraz asystentami AI, takimi jak Claude czy ChatGPT, przez Model Context Protocol (MCP). Przez Zapier masz dodatkowo dostęp do ponad 7000 innych aplikacji, np. Arkuszy Google, Mailchimp lub Twojego CRM.",
      },
      {
        question: "Jak zsynchronizować wizyty z Kalendarzem Google?",
        answer:
          "Konto Google łączysz jednorazowo w Ustawieniach salonu > Aplikacje. Od tej chwili wizyty synchronizują się automatycznie w obu kierunkach: rezerwacje w Treatflow pojawiają się w Kalendarzu Google i odwrotnie – dzięki temu unikasz podwójnych rezerwacji.",
      },
      {
        question: "Czy mogę używać Treatflow z ChatGPT lub Claude?",
        answer:
          "Tak. Dodaj Treatflow jako konektor w swoim asystencie AI i zaloguj się kontem Treatflow. Potem możesz pytać o wizyty, wolne terminy, klientów lub przychody. Dostęp jest domyślnie tylko do odczytu; jeśli na to pozwolisz, asystent może też tworzyć i przenosić wizyty, a każda zmiana jest rejestrowana. Dokumentacja zabiegów, formularze i zdjęcia nigdy nie są udostępniane.",
      },
      {
        question: "Do czego przyda mi się integracja z Zapierem?",
        answer:
          "Z Zapierem automatyzujesz własne procesy bez programowania. Przy nowej wizycie lub wypełnionym formularzu Treatflow może np. dodać wiersz w Arkuszach Google, utworzyć kontakt w CRM albo wysłać e-mail.",
      },
      {
        question: "Czy klienci mogą zapłacić online przy rezerwacji?",
        answer:
          "Tak. Dzięki Treatflow Pay klienci wpłacają zaliczkę lub pełną kwotę przy rezerwacji online – bezpiecznie przez Stripe. Dla każdej usługi decydujesz, czy płatność jest wymagana.",
        feature: "pay",
      },
      {
        question: "Czy integracje są dostępne w każdym planie?",
        answer:
          "Integracje są zawarte w planie Booking. Po rejestracji znajdziesz je i włączysz w panelu w Ustawieniach salonu > Aplikacje.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Kalendarz wizyt", description: "Wszystkie wizyty w jednym miejscu, zawsze zsynchronizowane" },
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Zaliczka lub pełna płatność", feature: "pay" },
      { href: { page: "online-booking" }, title: "Rezerwacje online", description: "Rezerwacje 24/7 z płatnością" },
      { href: { page: "messaging" }, title: "Przypomnienia", description: "Automatyczne potwierdzenia i przypomnienia" },
    ],
  },
  cta: {
    title: "Połączone narzędzia dla Twojego salonu",
    description: "Wypróbuj za darmo przez 14 dni – połącz Kalendarz Google, Zapier i swojego asystenta AI w kilka minut.",
    secondary: { label: "Wszystkie funkcje", href: { page: "features" } },
  },
};
