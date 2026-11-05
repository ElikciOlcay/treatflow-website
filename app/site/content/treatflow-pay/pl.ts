import type { TreatflowPayContent } from "./types";

export const treatflowPayPl: TreatflowPayContent = {
  meta: {
    title: "Treatflow Pay – zaliczka i pełna płatność przy rezerwacji online",
    description:
      "Treatflow Pay: klienci płacą zaliczkę lub pełną cenę od razu przy rezerwacji online. Ustawienie dla każdej usługi, 2,69% za transakcję.",
    keywords: [
      "Treatflow Pay",
      "zaliczka rezerwacja online",
      "płatności online salon kosmetyczny",
      "zaliczka za wizytę",
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
        "Treatflow Pay: klienci płacą zaliczkę lub pełną cenę od razu przy rezerwacji online. Ustawienie dla każdej usługi, 2,69% za transakcję.",
    },
  },
  breadcrumb: "Treatflow Pay",
  hero: {
    eyebrow: "Treatflow Pay",
    eyebrowIcon: "wallet",
    title: { before: "Zaliczka lub pełna płatność ", highlight: "przy rezerwacji" },
    description: "Ustal dla każdej usługi, czy klientka płaci online zaliczkę, pełną cenę, czy nic.",
    chips: ["Dla każdej usługi", "Karta, Apple Pay, Google Pay", "2,69%"],
    secondaryCta: { label: "Przejdź do rezerwacji online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Czym jest Treatflow Pay?",
        answer:
          "Treatflow Pay to płatność online przy rezerwacji wizyty. Dla każdej usługi salon może wybrać brak płatności, zaliczkę procentową lub kwotową albo pełną płatność. Płaci się kartą kredytową lub debetową, a także przez Apple Pay i Google Pay na stronie płatności Stripe. Opłata wynosi 2,69% za transakcję.",
      },
    ],
    image: {
      src: "/images/product-updates/treatflow-pay.png",
      alt: "Treatflow Pay – zaliczka lub pełna płatność przy rezerwacji online",
    },
  },
  understand: {
    title: "Mniej nieodwołanych wizyt, jasne wpływy",
    description: "Dla każdego zabiegu decydujesz, co jest płatne online. Klientka płaci od razu w trakcie rezerwacji.",
    items: [
      {
        icon: "percent",
        title: "Ustawienie dla każdej usługi",
        text: "Bez płatności online, zaliczka albo pełna płatność. Zaliczka to procent lub stała kwota w euro.",
      },
      {
        icon: "credit-card",
        title: "Płatność przy rezerwacji",
        text: "Karty kredytowe i debetowe na stronie płatności Stripe. Apple Pay i Google Pay, jeśli urządzenie klientki je obsługuje.",
      },
      {
        icon: "banknote",
        title: "2,69% za transakcję",
        text: "Jedna opłata, wszystko w cenie. Bez dodatkowej opłaty Treatflow od płatności.",
      },
    ],
  },
  howItWorks: {
    description: "Połącz raz, a potem ustawiaj dla każdej usługi.",
    steps: [
      { title: "Połącz Treatflow Pay", text: "W sekcji Aplikacje konfigurujesz Treatflow Pay i łączysz swoje konto Stripe. Dopiero wtedy możesz przyjmować płatności przy rezerwacji." },
      { title: "Wybierz dla każdej usługi", text: "Dla każdego zabiegu: bez płatności online, zaliczka procentowa lub kwotowa albo pełna cena." },
      { title: "Klientka płaci", text: "Rezerwacja kończy się płatnością. Przy zaliczce resztę klientka płaci w salonie." },
    ],
  },
  cards: {
    title: "Wszystkie możliwości",
    description: "To daje Treatflow Pay przy rezerwacjach online.",
    items: [
      { icon: "wallet", title: "Bez płatności, zaliczka lub pełna płatność", text: "Każda usługa ma własny tryb. Usługi bez płatności online można rezerwować tak jak dotąd.", points: ["Bez płatności online", "Zaliczka", "Pełna płatność"] },
      { icon: "percent", title: "Zaliczka procentowa", text: "Na przykład 30% ceny usługi. Stawka dotyczy tego zabiegu.", points: ["Procent od ceny", "Dla każdej usługi", "Reszta w salonie"] },
      { icon: "banknote", title: "Zaliczka kwotowa", text: "Stała kwota w euro, maksymalnie do ceny usługi.", points: ["Stała kwota", "Nie więcej niż cena", "Reszta w salonie"] },
      { icon: "credit-card", title: "Karty i portfele cyfrowe", text: "Zapłata na stronie płatności Stripe kartą, przez Apple Pay i Google Pay.", points: ["Karta kredytowa i debetowa", "Apple Pay", "Google Pay"] },
      { icon: "shield-check", title: "2,69% wszystko w cenie", text: "Jedna opłata za transakcję. Kwota minimalna 0,50 €.", points: ["2,69% za płatność", "Od 0,50 €", "Wszystko w cenie"] },
      { icon: "layers", title: "Kilka usług", text: "Kwoty w ramach jednej rezerwacji są sumowane, maksymalnie do ceny rezerwacji.", points: ["Suma usług", "Nie więcej niż cena", "Ustawienie dla każdej usługi"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o Treatflow Pay",
    items: [
      {
        question: "Co mogę ustawić w Treatflow Pay?",
        answer:
          "Dla każdej usługi wybierasz: bez płatności online, zaliczkę albo pełną płatność. Zaliczka to procent lub stała kwota. Jeśli klientka rezerwuje kilka usług, należne kwoty są sumowane, maksymalnie do ceny rezerwacji.",
      },
      {
        question: "Jakie metody płatności są dostępne?",
        answer:
          "Klientka płaci na stronie płatności Stripe kartą kredytową lub debetową. Apple Pay i Google Pay pojawiają się tam, jeśli jej urządzenie je obsługuje.",
      },
      {
        question: "Ile kosztuje Treatflow Pay?",
        answer: "2,69% za transakcję, wszystko w cenie. Nie ma dodatkowej opłaty Treatflow od płatności. Kwota minimalna to 0,50 €.",
      },
      {
        question: "Czy Treatflow Pay służy też do płatności w salonie?",
        answer:
          "Nie. Treatflow Pay służy do rezerwacji online. Płatności w salonie działają tak jak dotąd, na przykład przez Twój terminal płatniczy.",
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
      "Wypróbuj za darmo przez 14 dni. Treatflow Pay połączysz potem w sekcji Aplikacje – opłata pojawia się tylko przy rzeczywistej płatności.",
    secondary: { label: "Przejdź do rezerwacji online", href: { page: "online-booking" } },
  },
};
