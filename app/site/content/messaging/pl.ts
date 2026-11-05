import type { MessagingContent } from "./types";

export const messagingPl: MessagingContent = {
  meta: {
    title: "Automatyczne przypomnienia e-mail dla salonu kosmetycznego",
    description:
      "Automatyczne wiadomości dla salonów kosmetycznych: potwierdzenia rezerwacji, przypomnienia e-mail, powiadomienia o odwołaniu, wiadomości po wizycie i życzenia urodzinowe – z gotowymi szablonami.",
    keywords: [
      "przypomnienie o wizycie e-mail salon",
      "automatyczne wiadomości do klientów",
      "no-show salon kosmetyczny",
      "jak ograniczyć nieodwołane wizyty",
      "automatyczne przypomnienia o wizytach",
      "e-mail z potwierdzeniem rezerwacji",
      "wiadomość po zabiegu",
      "automatyczne życzenia urodzinowe",
      "lojalność klientów salon kosmetyczny",
    ],
  },
  dates: { modified: "2026-09-07", published: "2024-06-01" },
  schema: {
    id: "nachrichtenautomatisierung",
    webPage: {
      name: "Automatyczne przypomnienia e-mail dla salonu kosmetycznego",
      description:
        "Automatyczne wiadomości dla salonów kosmetycznych: potwierdzenia rezerwacji, przypomnienia e-mail, powiadomienia o odwołaniu, wiadomości po wizycie i życzenia urodzinowe.",
    },
  },
  breadcrumb: "Wiadomości",
  hero: {
    eyebrow: "Automatyczne wiadomości",
    eyebrowIcon: "message-circle",
    title: { before: "Automatyczne ", highlight: "przypomnienia" },
    description:
      "Potwierdzenia rezerwacji, przypomnienia i wiadomości po wizycie wysyłane e-mailem – mniej nieodwołanych wizyt, więcej stałych klientów.",
    chips: ["Przypomnienia e-mail", "Mniej nieodwołanych wizyt", "Życzenia urodzinowe"],
    secondaryCta: { label: "Zobacz kalendarz", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Jak ograniczyć nieodwołane wizyty w salonie kosmetycznym?",
        answer:
          "Najskuteczniejszym sposobem są automatyczne przypomnienia o wizytach. Treatflow wysyła przypomnienia e-mail w wybranych przez Ciebie momentach (np. 24 godziny i 2 godziny przed wizytą). Gdy przypomnienia są włączone, klienci znacznie rzadziej zapominają o wizytach.",
      },
    ],
    image: {
      src: "/images/lifestyle/sms-erinnerung-studio.png",
      alt: "Klientka w salonie kosmetycznym czyta na smartfonie przypomnienie o wizycie",
    },
  },
  understand: {
    title: "Wiadomości, które wysyłają się same",
    description:
      "Potwierdzenie, przypomnienie i zalecenia po zabiegu – klienci dostają właściwą wiadomość we właściwym momencie, a Ty nie musisz o niczym pamiętać.",
    items: [
      {
        icon: "bell",
        title: "Mniej zapomnianych wizyt",
        text: "Klienci dostają przypomnienie e-mail od 1 do 7 dni przed wizytą. Dzięki temu znacznie mniej wizyt przepada.",
      },
      {
        icon: "message-circle",
        title: "Opieka po zabiegu",
        text: "Po zabiegu klienci automatycznie dostają wskazówki pielęgnacyjne, prośbę o opinię lub propozycję kolejnej wizyty.",
      },
      {
        icon: "heart",
        title: "Osobiste życzenia",
        text: "Życzenia urodzinowe i spersonalizowane wiadomości wysyłają się automatycznie – to buduje więź bez dodatkowej pracy.",
      },
    ],
  },
  howItWorks: {
    description: "Automatyczne wiadomości w trzech krokach.",
    steps: [
      { title: "Wybierz szablon", text: "Wybierz gotowy szablon potwierdzenia, przypomnienia lub wiadomości po wizycie. Pola takie jak imię klienta i data wizyty uzupełniają się automatycznie." },
      { title: "Ustal termin wysyłki", text: "Zdecyduj, kiedy wiadomość ma zostać wysłana – np. 3 dni i 1 dzień przed wizytą albo zaraz po zabiegu." },
      { title: "Reszta dzieje się sama", text: "Treatflow wysyła e-maile we właściwym momencie, a Ty możesz skupić się na klientach." },
    ],
  },
  cards: {
    title: "Co otrzymujesz",
    description: "Wszystko do automatycznej komunikacji z klientami – przejrzyście i w pełni pod Twoją kontrolą.",
    items: [
      { icon: "clock", title: "Przypomnienia o wizytach", text: "Elastyczny termin wysyłki i spersonalizowane treści, wysyłane e-mailem.", points: ["Od 1 do 7 dni wcześniej", "Kilka przypomnień", "Mniej przepadających wizyt"] },
      { icon: "mail", title: "Potwierdzenie rezerwacji", text: "Od razu po rezerwacji – z terminem, zabiegiem i danymi salonu.", points: ["Automatycznie", "Jasna treść", "Mniej dopytywania"] },
      { icon: "message-circle", title: "Wiadomości po wizycie", text: "Po zabiegu przekaż wskazówki, poproś o opinię lub zaproponuj kolejną wizytę.", points: ["Automatycznie po wizycie", "Szablony", "Większa lojalność"] },
      { icon: "heart", title: "Życzenia urodzinowe", text: "Osobiste życzenia i opcjonalna oferta w dniu urodzin klienta.", points: ["Automatycznie", "Możliwy rabat", "Silniejsza więź"] },
      { icon: "zap", title: "Szablony i pola dynamiczne", text: "Imię, termin, zabieg – treści uzupełniają się same.", points: ["Personalizacja", "Dla każdego zabiegu", "Szybka konfiguracja"] },
      { icon: "bell", title: "Powiadomienia o odwołaniu", text: "Klient i salon są na bieżąco, gdy wizyta zostanie odwołana.", points: ["Natychmiast", "Przejrzyście", "Mniej chaosu"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o automatyczne wiadomości",
    items: [
      {
        question: "Jak ograniczyć nieodwołane wizyty w salonie kosmetycznym?",
        answer:
          "Najskuteczniejszym sposobem są automatyczne przypomnienia o wizytach. Treatflow wysyła przypomnienia e-mail w ustawionych przez Ciebie momentach (np. 3 dni i 1 dzień przed wizytą). Dzięki temu liczba zapomnianych wizyt wyraźnie spada.",
      },
      {
        question: "Ile kosztują przypomnienia e-mail?",
        answer:
          "Przypomnienia i potwierdzenia e-mail są zawarte we wszystkich planach Treatflow – bez dodatkowych opłat i bez limitu wysyłek.",
      },
      {
        question: "Jakie wiadomości warto zautomatyzować?",
        answer:
          "Najważniejsze automatyczne wiadomości to: potwierdzenia rezerwacji, przypomnienia o wizytach (od 1 do 7 dni wcześniej), powiadomienia o odwołaniu, wiadomości po zabiegach i życzenia urodzinowe. Oszczędzasz czas i wzmacniasz lojalność klientów.",
      },
      {
        question: "Czy mogę napisać własną treść wiadomości?",
        answer:
          "Tak. Zacznij od gotowego szablonu lub napisz własny tekst. Pola takie jak imię klienta, data wizyty i zabieg uzupełniają się automatycznie, dzięki czemu każda wiadomość jest osobista.",
      },
      {
        question: "Czy mogę automatycznie wysyłać zalecenia po zabiegu?",
        answer:
          "Tak. W Treatflow ustawisz automatyczne e-maile po zabiegach. Mogą zawierać wskazówki pielęgnacyjne, prośbę o opinię lub ofertę kolejnej wizyty.",
      },
      {
        question: "Czy mogę połączyć kilka wiadomości w jedną automatyzację?",
        answer:
          "Tak. W automatyzacjach dla klientów łączysz kilka kroków – np. wskazówki pielęgnacyjne dwa dni po zabiegu, zaproszenie na kolejną wizytę po sześciu tygodniach i wiadomość do klientów, którzy dawno nie odwiedzili salonu.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "customer-workflows" }, title: "Automatyzacje dla klientów", description: "Wieloetapowa opieka po zabiegu i odzyskiwanie klientów" },
      { href: { page: "online-booking" }, title: "Rezerwacje online", description: "Rezerwacje przychodzą z potwierdzeniem" },
      { href: { page: "appointment-calendar" }, title: "Kalendarz wizyt", description: "Wizyty i przypomnienia w jednym miejscu" },
    ],
  },
  cta: {
    title: "Czas na automatyczną komunikację z klientami?",
    description: "Wypróbuj 14 dni za darmo – przypomnienia, wiadomości po wizycie i życzenia urodzinowe bez dodatkowej pracy.",
    secondary: { label: "Zobacz kalendarz", href: { page: "appointment-calendar" } },
  },
};
