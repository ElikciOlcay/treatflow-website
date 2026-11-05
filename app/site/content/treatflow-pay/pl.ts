import type { TreatflowPayContent } from "./types";

export const treatflowPayPl: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay – zaliczka i pełna płatność przy rezerwacji online",
    description:
      "Treatflow Pay: klienci wpłacają zaliczkę lub pełną kwotę od razu przy rezerwacji online. Ustawiasz to osobno dla każdej usługi, 2,69% za transakcję.",
    keywords: [
      "Treatflow Pay",
      "zaliczka rezerwacja online",
      "płatności online salon kosmetyczny",
      "zaliczka za wizytę",
      "zadatek za wizytę w salonie",
      "przedpłata za wizytę",
      "płatności Stripe salon",
    ],
  },
  dates: { modified: "2026-10-02", published: "2026-10-02" },
  schema: {
    id: "treatflow-pay",
    webPage: {
      name: "Treatflow Pay – zaliczka i pełna płatność przy rezerwacji online",
      description:
        "Treatflow Pay: klienci wpłacają zaliczkę lub pełną kwotę od razu przy rezerwacji online. Ustawiasz to osobno dla każdej usługi, 2,69% za transakcję.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Zaliczka lub pełna płatność ", highlight: "przy rezerwacji" },
    description: "Dla każdej usługi decydujesz, czy klient płaci online zaliczkę, pełną cenę, czy nic.",
    chips: ["Dla każdej usługi", "Karta, Apple Pay, Google Pay", "2,69%"],
    secondaryCta: { label: "Przejdź do rezerwacji online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Czym jest Treatflow Pay?",
        answer:
          "Treatflow Pay to płatność online przy rezerwacji wizyty. Dla każdej usługi salon wybiera: bez płatności, zaliczka procentowa lub kwotowa albo pełna płatność. Klient płaci kartą kredytową lub debetową albo przez Apple Pay i Google Pay na stronie płatności Stripe. Opłata wynosi 2,69% za transakcję.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay – zaliczka lub pełna płatność przy rezerwacji online",
    },
  },
  understand: {
    title: "Mniej nieodwołanych wizyt, jasne wpływy",
    description: "Dla każdego zabiegu decydujesz, co jest płatne online. Klient płaci od razu w trakcie rezerwacji.",
    items: [
      {
        icon: "percent",
        title: "Ustawienie dla każdej usługi",
        text: "Bez płatności online, zaliczka albo pełna płatność. Zaliczka to procent lub stała kwota w euro.",
      },
      {
        icon: "credit-card",
        title: "Płatność przy rezerwacji",
        text: "Karty kredytowe i debetowe na stronie płatności Stripe, a także Apple Pay i Google Pay, jeśli urządzenie klienta je obsługuje.",
      },
      {
        icon: "banknote",
        title: "2,69% za transakcję",
        text: "Jedna opłata, wszystko w cenie. Treatflow nie dolicza nic od płatności.",
      },
    ],
  },
  howItWorks: {
    description: "Łączysz raz, a potem ustawiasz osobno dla każdej usługi.",
    steps: [
      { title: "Połącz Treatflow Pay", text: "W sekcji Aplikacje konfigurujesz Treatflow Pay i łączysz swoje konto Stripe. Dopiero wtedy możesz przyjmować płatności przy rezerwacji." },
      { title: "Wybierz dla każdej usługi", text: "Dla każdego zabiegu: bez płatności online, zaliczka procentowa lub kwotowa albo pełna cena." },
      { title: "Klient płaci", text: "Rezerwacja kończy się płatnością. Przy zaliczce resztę klient dopłaca w salonie." },
    ],
  },
  cards: {
    title: "Wszystkie możliwości",
    description: "Tyle daje Treatflow Pay przy rezerwacjach online.",
    items: [
      { icon: "wallet", title: "Bez płatności, zaliczka lub pełna płatność", text: "Każda usługa ma własne ustawienie. Usługi bez płatności online klienci rezerwują tak jak dotąd.", points: ["Bez płatności online", "Zaliczka", "Pełna płatność"] },
      { icon: "percent", title: "Zaliczka procentowa", text: "Na przykład 30% ceny usługi – osobno dla każdego zabiegu.", points: ["Procent od ceny", "Dla każdej usługi", "Reszta w salonie"] },
      { icon: "banknote", title: "Zaliczka kwotowa", text: "Stała kwota w euro, maksymalnie do ceny usługi.", points: ["Stała kwota", "Nie więcej niż cena", "Reszta w salonie"] },
      { icon: "credit-card", title: "Karty i portfele cyfrowe", text: "Płatność na stronie Stripe kartą, Apple Pay lub Google Pay.", points: ["Karta kredytowa i debetowa", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69% wszystko w cenie", text: "Jedna opłata za transakcję. Kwota minimalna 0,50 €.", points: ["2,69% za płatność", "Od 0,50 €", "Wszystko w cenie"] },
      { icon: "layers", title: "Kilka usług", text: "Kwoty z jednej rezerwacji się sumują, ale nigdy nie przekraczają jej ceny.", points: ["Suma usług", "Nie więcej niż cena", "Ustawienie dla każdej usługi"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o Treatflow Pay",
    items: [
      {
        question: "Co mogę ustawić w Treatflow Pay?",
        answer:
          "Dla każdej usługi wybierasz: bez płatności online, zaliczka albo pełna płatność. Zaliczka to procent lub stała kwota. Jeśli klient rezerwuje kilka usług, należne kwoty się sumują – maksymalnie do ceny rezerwacji.",
      },
      {
        question: "Jakie metody płatności są dostępne?",
        answer:
          "Klient płaci na stronie płatności Stripe kartą kredytową lub debetową. Apple Pay i Google Pay pojawiają się tam, jeśli urządzenie je obsługuje.",
      },
      {
        question: "Ile kosztuje Treatflow Pay?",
        answer: "2,69% za transakcję, wszystko w cenie. Treatflow nie dolicza żadnej dodatkowej opłaty od płatności. Kwota minimalna to 0,50 €.",
      },
      {
        question: "Czy Treatflow Pay służy też do płatności w salonie?",
        answer:
          "Nie. Treatflow Pay działa przy rezerwacjach online. Na miejscu w salonie przyjmujesz płatności tak jak dotąd, np. swoim terminalem płatniczym.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Rezerwacje online", description: "Link do rezerwacji z Treatflow Pay" },
      { href: { page: "integrations" }, title: "Integracje", description: "Stripe, Kalendarz Google i więcej" },
    ],
  },
  cta: {
    title: "Zaliczka od razu przy rezerwacji",
    description:
      "Wypróbuj 14 dni za darmo. Treatflow Pay połączysz potem w sekcji Aplikacje – opłatę płacisz tylko od faktycznie zrealizowanych płatności.",
    secondary: { label: "Przejdź do rezerwacji online", href: { page: "online-booking" } },
  },
};
