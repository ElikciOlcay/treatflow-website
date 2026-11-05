import type { OnlineBookingContent } from "./types";

export const onlineBookingPl: OnlineBookingContent = {
  meta: {
    title: "System rezerwacji online dla salonu kosmetycznego",
    description:
      "Rezerwacje online dla Twojego salonu kosmetycznego: klienci umawiają się 24/7 przez Twój własny link. Z Treatflow Pay pobierasz zaliczkę lub pełną płatność już przy rezerwacji. Bez prowizji od rezerwacji.",
    keywords: [
      "system rezerwacji online salon kosmetyczny",
      "program do rezerwacji salon",
      "rezerwacja wizyt online spa",
      "link do rezerwacji salon kosmetyczny",
      "rezerwacje online 24/7",
      "lista oczekujących salon",
      "zaliczka przy rezerwacji online",
    ],
  },
  dates: { modified: "2026-10-02", published: "2024-06-01" },
  schema: {
    id: "online-buchungen",
    webPage: {
      name: "System rezerwacji online dla salonu kosmetycznego",
      description:
        "Rezerwacje online dla Twojego salonu kosmetycznego: klienci umawiają się 24/7 przez Twój własny link. Z Treatflow Pay pobierasz zaliczkę lub pełną płatność już przy rezerwacji.",
    },
  },
  breadcrumb: "Rezerwacje online",
  hero: {
    eyebrow: "Rezerwacje online",
    eyebrowIcon: "link",
    title: { before: "Rezerwacje online dla Twojego ", highlight: "salonu" },
    description:
      "Twój własny link do rezerwacji – klienci umawiają się o każdej porze. Wizyty automatycznie trafiają do Twojego kalendarza.",
    chips: ["Rezerwacje 24/7", "Bez prowizji", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Zobacz kalendarz", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Jaki system rezerwacji online wybrać dla salonu kosmetycznego?",
        answer:
          "Treatflow oferuje system rezerwacji online stworzony dla salonów kosmetycznych: z własnym linkiem do rezerwacji, umawianiem wizyt 24/7, automatycznymi potwierdzeniami e-mail i Treatflow Pay do pobierania zaliczki lub pełnej płatności przy rezerwacji. Bez prowizji od rezerwacji, od 59 €/miesiąc w planie Booking, 14 dni za darmo.",
      },
    ],
    image: {
      src: "/images/mockups/online-buchung-hero.png",
      alt: "System rezerwacji online Treatflow – własny link do rezerwacji",
    },
  },
  understand: {
    title: "Klienci rezerwują sami – Ty wykonujesz zabiegi",
    description:
      "Dzięki Twojemu własnemu linkowi do rezerwacji klienci wybierają terminy o każdej porze. Koniec z dodzwanianiem się i wymianą dziesiątek wiadomości.",
    items: [
      {
        icon: "calendar",
        title: "Otwarte przez całą dobę",
        text: "Twój link do rezerwacji działa 24/7. Ponad 60% rezerwacji wpływa wieczorami lub w weekendy.",
      },
      {
        icon: "bell",
        title: "Automatyczne potwierdzenie i przypomnienie",
        text: "Zaraz po rezerwacji Twój klient otrzymuje potwierdzenie. Przed wizytą przychodzi jeszcze przypomnienie e-mail.",
      },
      {
        icon: "list-ordered",
        title: "Lista oczekujących na pełne dni",
        text: "Gdy grafik jest pełny, klienci mogą zapisać się na listę oczekujących. Gdy tylko zwolni się termin, dostają automatyczne powiadomienie.",
      },
    ],
  },
  howItWorks: {
    description: "Trzy kroki do własnego linku do rezerwacji.",
    steps: [
      { title: "Dodaj swoje zabiegi", text: "Wybierz, które zabiegi można rezerwować, ile trwają i ile kosztują. Klienci widzą wyłącznie wolne terminy." },
      { title: "Udostępnij link", text: "Udostępnij własny link do rezerwacji na Instagramie, swojej stronie lub w wiadomościach. W zestawie jest też kod QR do wydruku." },
      { title: "Rezerwacje spływają same", text: "Nowe wizyty automatycznie pojawiają się w Twoim kalendarzu. Potwierdzenia i przypomnienia wysyłają się same. Z Treatflow Pay klienci mogą od razu wpłacić zaliczkę lub pełną kwotę." },
    ],
  },
  cards: {
    title: "Co otrzymujesz",
    description: "Link do rezerwacji, wersje językowe, lista oczekujących, kody rabatowe i Treatflow Pay – bez prowizji od wizyt.",
    items: [
      { icon: "link", title: "Własny link do rezerwacji", text: "Twój link do udostępnienia na stronie i w mediach społecznościowych – w barwach Twojego salonu.", points: ["Własny link", "Kod QR", "Wygląd Twojego salonu"] },
      { icon: "languages", title: "Sześć języków", text: "Strona rezerwacji dopasowuje się do języka klienta – bez dodatkowej konfiguracji.", points: ["DE, EN, TR, PL, IT, RU", "Automatyczny wybór języka", "Bez barier"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Zaliczka lub pełna płatność już przy rezerwacji online.", points: ["Ustawienie dla każdej usługi", "Zaliczka lub pełna płatność", "2,69% za transakcję"], feature: "pay" },
      { icon: "list-ordered", title: "Lista oczekujących", text: "Klienci zapisują się na listę oczekujących, gdy grafik jest pełny. Gdy zwolni się termin, pasujące osoby dostają e-mail.", points: ["Automatyczny e-mail po odwołaniu wizyty", "Dwa tryby powiadomień", "Podgląd w panelu"] },
      { icon: "ticket", title: "Kody rabatowe", text: "Kody dla nowych klientów i akcji promocyjnych – realizowane od razu przy rezerwacji online.", points: ["Nowi klienci i promocje", "Realizacja przy rezerwacji", "Statystyki użycia"] },
      { icon: "bell", title: "Przypomnienia", text: "Przypomnienia e-mail przed wizytą. Klienci mogą odwołać wizytę z wyprzedzeniem, a termin znów staje się wolny.", points: ["Przypomnienia e-mail", "Elastyczny termin wysyłki", "Mniej nieobecności"] },
      { icon: "calendar", title: "Elastyczne planowanie", text: "Godziny pracy, czas trwania zabiegów, przerwy i urlopy – oferowane są tylko rzeczywiście wolne terminy.", points: ["Godziny pracy", "Przerwy i urlopy", "Bez podwójnych rezerwacji"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o rezerwacje online",
    items: [
      {
        question: "Jaki system rezerwacji online wybrać dla salonu kosmetycznego?",
        answer:
          "Treatflow oferuje system rezerwacji online stworzony dla salonów kosmetycznych: z własnym linkiem do rezerwacji, automatycznymi potwierdzeniami e-mail, kalendarzami pracowników oraz połączeniem z kartoteką klientów i dokumentacją zabiegów. Od 59 €/miesiąc.",
      },
      {
        question: "Jak uruchomić rezerwacje online w moim salonie?",
        answer:
          "W trzech krokach: 1) dodaj zabiegi z czasem trwania i ceną, 2) ustaw godziny pracy i dostępność, 3) udostępnij własny link do rezerwacji na Instagramie, swojej stronie lub w wiadomościach. Konfiguracja zajmuje mniej niż 10 minut.",
      },
      {
        question: "Ile kosztuje system rezerwacji online dla salonu kosmetycznego?",
        answer:
          "W Treatflow rezerwacje online są częścią planu Booking od 59 €/miesiąc (53 €/miesiąc przy płatności rocznej, netto bez VAT). Nie ma prowizji od rezerwacji ani ukrytych kosztów, a przez 14 dni możesz testować za darmo, bez karty kredytowej.",
      },
      {
        question: "Czy klienci mogą rezerwować wizyty przez całą dobę?",
        answer:
          "Tak. Twój własny link do rezerwacji działa 24/7. Klienci w każdej chwili widzą wolne terminy i mogą je zarezerwować – także wieczorami i w weekendy. Ponad 60% rezerwacji odbywa się poza godzinami otwarcia.",
      },
      {
        question: "Jak system rezerwacji ogranicza nieobecności?",
        answer:
          "Dzięki automatycznym przypomnieniom e-mail wysyłanym w wybranym przez Ciebie czasie przed wizytą. Klienci pamiętają o terminie i w razie potrzeby mogą go odwołać, więc wizyta zwalnia się dla kogoś innego. To wyraźnie zmniejsza liczbę nieodwołanych wizyt.",
      },
      {
        question: "Co się dzieje, gdy wszystkie terminy są zajęte?",
        answer:
          "Dzięki liście oczekujących klienci mogą zgłosić zainteresowanie wolnymi terminami. Gdy ktoś odwoła wizytę, pasujące osoby automatycznie otrzymują e-mail z nowo dostępnymi terminami. Dzięki temu żadne zapytanie nie przepada.",
      },
      {
        question: "Czy klienci mogą zapłacić od razu przy rezerwacji online?",
        answer:
          "Tak. Z Treatflow Pay klienci wpłacają zaliczkę lub pełną kwotę już przy rezerwacji. Ustawiasz to osobno dla każdej usługi. Opłata wynosi 2,69% za transakcję.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Zaliczka lub pełna płatność", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Kalendarz wizyt", description: "Rezerwacje trafiają prosto do grafiku" },
      { href: { page: "messaging" }, title: "Przypomnienia", description: "Automatyczne potwierdzenia i przypomnienia" },
      { href: { page: "client-records" }, title: "Kartoteka klientów", description: "Nowa rezerwacja, znany profil" },
    ],
  },
  cta: {
    title: "Czas na automatyczne rezerwacje?",
    description: "Wypróbuj za darmo przez 14 dni – bez karty kredytowej i bez prowizji od rezerwacji.",
    secondary: { label: "Zobacz kalendarz", href: { page: "appointment-calendar" } },
  },
};
