import type { ShiftPlannerContent } from "./types";

const faqItems: ShiftPlannerContent["faq"]["items"] = [
  {
    question: "Jak zaplanować grafik i urlopy w salonie kosmetycznym?",
    answer:
      "W planerze grafiku Treatflow planujesz każdy tydzień dla każdej osoby z zespołu: jedną lub kilka zmian dziennie, szablony takie jak zmiana ranna, popołudniowa lub cały dzień oraz nieobecności, np. urlop, chorobę lub szkolenie, jako okres. Dzięki opcji „Kopiuj poprzedni tydzień” kolejny tydzień jest gotowy w kilka sekund. Rezerwacja online pokazuje potem tylko godziny, w których ktoś naprawdę pracuje.",
  },
  {
    question: "Ile kosztuje planer grafiku?",
    answer:
      "Planer grafiku to aplikacja w planie Booking (59 €/miesiąc, 53 €/miesiąc przy płatności rocznej, netto + VAT) i obecnie nie kosztuje nic dodatkowo. Włączasz go w Aplikacje → Planer grafiku i możesz go bezpłatnie wypróbować w 14-dniowym okresie testowym.",
  },
  {
    question: "Co się stanie z dotychczasowymi godzinami pracy?",
    answer:
      "Po włączeniu Treatflow wypełnia kolejne 8 tygodni na podstawie dotychczasowych godzin pracy, żeby nie zniknęły żadne terminy dostępne do rezerwacji. Dalej planujesz już samodzielnie – Treatflow nie uzupełnia tygodni automatycznie. Jeśli wyłączysz planer grafiku, znów obowiązują zwykłe godziny pracy, a Twój grafik zostaje zapisany.",
  },
  {
    question: "Czy klienci widzą, dlaczego ktoś jest niedostępny?",
    answer:
      "Nie. W czasie urlopu, choroby lub szkolenia dana osoba po prostu nie jest dostępna w rezerwacji online. Klienci widzą tylko wolne godziny, nigdy powód nieobecności.",
  },
  {
    question: "Co z wizytami, które są już zarezerwowane?",
    answer:
      "Zarezerwowane wizyty pozostają bez zmian, nawet jeśli zmienisz zmianę lub wpiszesz urlop. Jeśli wizyta wypada poza zmianą albo w czasie nieobecności, Treatflow pokaże to po otwarciu wizyty – dzięki temu możesz ją odpowiednio wcześnie przełożyć.",
  },
  {
    question: "Czy mogę zaplanować kilka zmian jednego dnia?",
    answer:
      "Tak. Dla każdej osoby i każdego dnia możesz dodać dowolną liczbę zmian, np. 9–12 i 15–19 z długą przerwą obiadową. Ważne tylko, żeby zmiany się nie nakładały.",
  },
  {
    question: "Czy zmiany obowiązują także poza godzinami otwarcia?",
    answer:
      "Tak. Gdy planer grafiku jest włączony, liczy się zaplanowana zmiana – nawet jeśli zaczyna się przed zwykłymi godzinami otwarcia lub kończy po nich. Możesz więc np. zaproponować długi czwartek z jedną osobą bez zmiany godzin otwarcia.",
  },
  {
    question: "Czy mogę udostępnić zmianę tylko dla wybranych zabiegów?",
    answer:
      "Tak. Każdą zmianę i każdy szablon możesz w rezerwacji online ograniczyć do wybranych kategorii lub zabiegów, np. tylko laser w czwartek po południu. W grafiku tygodniowym przy zmianie widać wtedy, co można zarezerwować online.",
  },
  {
    question: "Czy uwzględniane są dni świąteczne?",
    answer:
      "Tak. Święta, w które Twój salon jest zamknięty, pojawiają się w grafiku jako szara kolumna z nazwą święta. Ustawiasz je w Ustawienia → Godziny otwarcia → Święta.",
  },
  {
    question: "Kto może edytować grafik?",
    answer:
      "Grafik edytują właściciele oraz osoby z rolą administratora. Osoby, które logują się tylko kodem PIN, nie mają do niego dostępu.",
  },
];

export const shiftPlannerPl: ShiftPlannerContent = {
  meta: {
    title: "Grafik pracy dla salonu kosmetycznego: zmiany i urlopy",
    description:
      "Planer grafiku dla salonów kosmetycznych: zmiany na każdy tydzień, urlopy i zwolnienia w jednym miejscu – rezerwacja online pokazuje tylko godziny, gdy ktoś pracuje.",
    keywords: [
      "grafik pracy salon kosmetyczny",
      "program do grafiku pracy",
      "planowanie grafiku pracowników",
      "grafik zmian salon",
      "aplikacja do grafiku",
      "planowanie urlopów pracowników",
      "rezerwacja online grafik",
    ],
  },
  dates: { modified: "2026-11-11", published: "2026-11-11" },
  schema: {
    id: "shift-planner",
    webPage: {
      name: "Grafik pracy dla salonu kosmetycznego: zmiany i urlopy",
      description:
        "Planer grafiku dla salonów kosmetycznych z tygodniowym planem dla każdej osoby, szablonami zmian, urlopami i zwolnieniami – rezerwacja online podąża za grafikiem.",
    },
    software: {
      name: "Treatflow planer grafiku dla salonów kosmetycznych",
      description:
        "Planer grafiku z tygodniowym planem dla każdej osoby, szablonami zmian i nieobecnościami. Rezerwacja online proponuje tylko godziny w zaplanowanych zmianach.",
      featureList: [
        "Tygodniowy grafik dla każdej osoby z kilkoma zmianami dziennie",
        "Szablony zmian: ranna, popołudniowa i cały dzień",
        "Kopiowanie poprzedniego tygodnia lub wypełnianie z godzin pracy",
        "Urlop, choroba i szkolenie jako okres",
        "Rezerwacja online tylko w zaplanowanych zmianach",
        "Zmiany dostępne tylko dla wybranych zabiegów",
        "Zmiany i nieobecności w kalendarzu wizyt",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Planer grafiku",
  hero: {
    eyebrow: "Planer grafiku i zmian",
    eyebrowIcon: "calendar-clock",
    title: { before: "Grafik pracy dla salonu kosmetycznego: ", highlight: "rezerwacje tylko wtedy, gdy ktoś pracuje" },
    description:
      "Zaplanuj tydzień zespołu ze zmianami, szablonami i urlopami. Rezerwacja online automatycznie podąża za grafikiem – dni bez zmiany i nieobecności są niedostępne.",
    chips: ["Zmiany na tydzień", "Urlop i choroba", "Rezerwacje według grafiku"],
    secondaryCta: { label: "Kalendarz wizyt", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Jak zaplanować grafik i urlopy w salonie kosmetycznym?",
        answer:
          "W planerze grafiku Treatflow planujesz każdy tydzień dla każdej osoby z zespołu: jedną lub kilka zmian dziennie, szablony takie jak zmiana ranna, popołudniowa lub cały dzień oraz nieobecności, np. urlop lub chorobę, jako okres. Rezerwacja online pokazuje potem tylko godziny, w których ktoś naprawdę pracuje.",
      },
      {
        question: "Co dzieje się z rezerwacją online, gdy ktoś ma urlop?",
        answer:
          "W czasie urlopu, choroby lub szkolenia dana osoba nie jest dostępna online. Klienci nie widzą powodu, tylko wolne godziny reszty zespołu. Wizyty zarezerwowane wcześniej pozostają bez zmian.",
      },
    ],
    image: {
      src: "/images/mockups/pl/schichtplan.png",
      alt: "Planer grafiku Treatflow – tygodniowy grafik ze zmianami i nieobecnościami zespołu",
    },
  },
  understand: {
    title: "Grafik, który steruje Twoją rezerwacją online",
    description:
      "Zamiast stałych godzin pracy planujesz tydzień po tygodniu – a klienci rezerwują tylko wtedy, gdy ktoś naprawdę jest w salonie.",
    items: [
      {
        icon: "calendar-days",
        title: "Tydzień po tygodniu",
        text: "Każda osoba dostaje dziennie jedną lub kilka zmian, także dzielonych z przerwą obiadową. Godziny w tygodniu widać tuż obok imienia.",
      },
      {
        icon: "plane",
        title: "Urlop, choroba, szkolenie",
        text: "Nieobecności wpisujesz jako okres. W tym czasie dana osoba nie jest dostępna online – klienci nie widzą powodu.",
      },
      {
        icon: "globe",
        title: "Rezerwacje według grafiku",
        text: "Strona rezerwacji pokazuje tylko godziny w zaplanowanych zmianach. Dni bez zmiany są niedostępne; lista oczekujących i przekładanie wizyt też podążają za grafikiem.",
      },
    ],
  },
  howItWorks: {
    description: "Trzy kroki od grafiku tygodniowego do pasującej rezerwacji online.",
    steps: [
      {
        title: "Włącz planer grafiku",
        text: "Planer grafiku włączasz w sekcji Aplikacje. Żeby nie zniknęły żadne terminy, Treatflow wypełnia kolejne 8 tygodni na podstawie dotychczasowych godzin pracy.",
      },
      {
        title: "Dopasuj tydzień",
        text: "Dodawaj zmiany z szablonu, kopiuj poprzedni tydzień albo zmieniaj pojedyncze dni. Urlop i chorobę wpisujesz jako okres.",
      },
      {
        title: "Klienci rezerwują według grafiku",
        text: "Rezerwacja online proponuje tylko godziny w zmianach. W kalendarzu wizyt widzisz zmiany i nieobecności od razu w widoku dnia.",
      },
    ],
  },
  cards: {
    description: "Wszystko do planowania zespołu w salonie – połączone z kalendarzem i rezerwacją online.",
    items: [
      {
        icon: "users",
        title: "Grafik tygodniowy dla każdej osoby",
        text: "Zespół jedna osoba pod drugą, dni obok siebie – z dowolną liczbą zmian dziennie.",
        points: ["Zmiany dzielone", "Godziny w tygodniu", "Kopiuj poprzedni tydzień"],
      },
      {
        icon: "layers",
        title: "Szablony zmian",
        text: "Utwórz szablony, np. zmiana ranna, popołudniowa lub cały dzień, i dodawaj je jednym kliknięciem. Albo wypełnij tydzień ze standardowych godzin pracy.",
        points: ["Własne szablony", "Szybki wybór na dzień", "Wypełnij z godzin pracy"],
      },
      {
        icon: "plane",
        title: "Nieobecności",
        text: "Urlop, choroba, szkolenie lub inna nieobecność jako okres – z opcjonalną notatką.",
        points: ["Urlop i choroba", "Szkolenia", "Powód pozostaje wewnętrzny"],
      },
      {
        icon: "globe",
        title: "Rezerwacja online według grafiku",
        text: "Rezerwacje są możliwe tylko w zaplanowanych zmianach – także z listy oczekujących i gdy klienci sami przekładają wizytę.",
        points: ["Dni bez zmiany zablokowane", "Lista oczekujących i przekładanie", "Wizyty pozostają"],
      },
      {
        icon: "list-ordered",
        title: "Zmiany dla wybranych zabiegów",
        text: "Udostępnij zmianę online tylko dla wybranych kategorii lub zabiegów – np. tylko laser w czwartek po południu.",
        points: ["Ustawiane dla zmiany", "Kategorie lub zabiegi", "Także w szablonach"],
      },
      {
        icon: "calendar",
        title: "Widoczne w kalendarzu",
        text: "W widoku dnia godziny poza zmianą są zakreskowane, a zmiany i nieobecności widać pod imieniem.",
        points: ["Kreskowanie poza zmianą", "Informacja przy wizycie", "Święta w grafiku"],
      },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o planer grafiku",
    items: faqItems,
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Kalendarz wizyt", description: "Zespół i gabinety w jednym kalendarzu" },
      { href: { page: "online-booking" }, title: "Rezerwacje online", description: "24/7 przez Twój link do rezerwacji" },
      { href: { page: "messaging" }, title: "Przypomnienia", description: "Automatyczne przypomnienia e-mail" },
    ],
  },
  cta: {
    title: "Zaplanuj zespół – rezerwacje online dopasują się same",
    description: "Wypróbuj za darmo przez 14 dni – bez karty. Grafik, kalendarz wizyt i rezerwacje online w jednej aplikacji.",
    secondary: { label: "Kalendarz wizyt", href: { page: "appointment-calendar" } },
  },
};
