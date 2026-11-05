import type { HomeContent } from "./types";

/**
 * Polska strona główna. Te same sekcje co `en.ts`, bez funkcji dostępnych tylko w DACH
 * (kasa, bony podarunkowe, WhatsApp, Lexware, SumUp, NiSV). Bez filmu – istniejący
 * film jest po niemiecku.
 */
export const homePl: HomeContent = {
  meta: {
    title: "Program do salonu kosmetycznego: rezerwacje online i kartoteka",
    description:
      "Treatflow to program do salonu kosmetycznego i gabinetu medycyny estetycznej: kalendarz wizyt, rezerwacje online bez prowizji, kartoteka klientów, zgody na zabieg online, dokumentacja zabiegów i przypomnienia e-mail. Wypróbuj 14 dni za darmo.",
    keywords: [
      "program do salonu kosmetycznego",
      "system rezerwacji online",
      "program do gabinetu kosmetycznego",
      "program do gabinetu medycyny estetycznej",
      "system rezerwacji dla salonu",
      "kalendarz wizyt online",
      "kartoteka klientów salon kosmetyczny",
    ],
  },

  schema: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      inLanguage: "pl",
      description:
        "Treatflow to kompleksowy program do zarządzania salonem kosmetycznym, gabinetem medycyny estetycznej i każdym innym miejscem, w którym wykonuje się zabiegi. Łączy rezerwacje online, kartotekę klientów, karty wywiadu i zgody na zabieg online, dokumentację zabiegów, zdjęcia przed i po oraz automatyczną opiekę pozabiegową. Hosting w UE.",
      url: "https://www.treatflow.io/pl",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "39",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Kartoteka klientów, formularze i dokumentacja zabiegów",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "59",
          priceCurrency: "EUR",
          billingIncrement: "P1M",
          description: "Kalendarz, rezerwacje online i automatyczne przypomnienia",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "19",
        reviewCount: "19",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Kalendarz wizyt z rezerwacjami online",
        "Cyfrowa kartoteka klientów",
        "Karty wywiadu i zgody na zabieg",
        "Dokumentacja zabiegów ze zdjęciami",
        "Dyktowanie głosowe notatek z zabiegów",
        "Automatyczne przypomnienia e-mail",
        "Automatyzacje dla klientów",
      ],
    },
  },

  hero: {
    badge: "Dla salonów kosmetycznych, które chcą się rozwijać",
    title: {
      before: "Koniec z chaosem w grafiku,",
      highlight: "papierologią",
      connector: "i",
      end: "nieodwołanymi wizytami",
    },
    subtitle:
      "Wizyty, klienci, formularze i dokumentacja zabiegów w jednej przejrzystej aplikacji. Twój zespół od razu się w niej odnajdzie.",
    primaryCta: "Wypróbuj 14 dni za darmo",
    demoCta: "Umów prezentację",
    checks: ["Bez podawania karty", "Start w 2 minuty", "Bezpłatne przeniesienie danych"],
    rating: "4,6/5 w Google",
    tested: { before: "Przetestowało już ", highlight: "500+ salonów", after: "" },
    calendarLocale: "pl-PL",
    newBookingLabel: "Nowa rezerwacja",
    image: {
      src: "/images/lifestyle/hero-startseite-en.png",
      alt: "Treatflow na laptopie i tablecie: kalendarz i kartoteka klientów w nowoczesnym salonie",
    },
    liveDemo: { href: { page: "try-features" }, label: "Wypróbuj funkcje na żywo" },
  },

  socialProof: {
    rating: "4,6/5 w Google",
    allReviews: "Zobacz wszystkie opinie",
    tested: { before: "Przetestowało już ", highlight: "500+ salonów", after: "" },
    reviews: [
      {
        text: "Wsparcie jest znakomite – zawsze miłe, życzliwe i nastawione na rozwiązania. Zdecydowanie polecam!",
        name: "Velura Saarburg",
        studio: "Depilacja laserowa",
      },
      {
        text: "Bezkonkurencyjna cena i intuicyjna obsługa. Moją prośbę zrealizowali w jeden dzień!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Przeszłam z Phorestu – świetny stosunek jakości do ceny. Polecam z czystym sumieniem.",
        name: "Sharon U.",
        studio: "Salon kosmetyczny",
      },
    ],
    note: "Opinie z Google, przetłumaczone z niemieckiego.",
  },

  studioDay: {
    eyebrow: "Jedna wizyta, jeden system",
    title: "Od rezerwacji po opiekę pozabiegową. W jednej aplikacji.",
    subtitle: "Tak wygląda wizyta z Treatflow. Niczego nie wpisujesz dwa razy.",
    steps: [
      {
        time: "pon. · 21:14",
        module: "Rezerwacje online",
        title: "Lena umawia się wieczorem, prosto z kanapy.",
        text: "Bez dzwonienia i bez prowizji od rezerwacji. Wizyta od razu pojawia się w kalendarzu.",
        meta: "Zabieg na twarz · czw. 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "śr. · 10:45",
        module: "Przypomnienie",
        title: "Przypomnienie wysyła się samo.",
        text: "Dzień wcześniej, e-mailem. Mniej zapomnianych wizyt – i nikt nie musi o tym pamiętać.",
        meta: "Dostarczono · potwierdzono",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "czw. · 10:40",
        module: "Formularze",
        title: "Karta wywiadu wypełniona i podpisana na tablecie.",
        text: "Formularz trafia prosto do karty Leny. Koniec z przepisywaniem papierów po wizycie.",
        meta: "Karta wywiadu · podpisana elektronicznie",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "czw. · 11:40",
        module: "Dokumentacja",
        title: "Zabieg udokumentowany, ze zdjęciami.",
        text: "Parametry, produkty i zdjęcia przed i po zostają w historii zabiegów.",
        meta: "3 zdjęcia · parametry zapisane",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "pt. · 09:00",
        module: "Opieka pozabiegowa",
        title: "Opieka pozabiegowa i kolejna wizyta – automatycznie.",
        text: "Następnego dnia wskazówki pielęgnacyjne, kilka tygodni później przypomnienie o kolejnej wizycie. Ustawiasz to raz – jako automatyzację dla klientów.",
        meta: "Automatyzacja · następny krok za 4 tygodnie",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Mniej chaosu. Więcej czasu dla klientów.",
    subtitle: "Wszystko, czego potrzebuje Twój salon – w jednej aplikacji, w której Twój zespół od razu się odnajdzie.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Kalendarz wizyt", desc: "Wszystkie wizyty w przejrzystym widoku dnia i tygodnia.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Rezerwacje online", desc: "Klienci umawiają się sami – także po godzinach otwarcia.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Kartoteka klientów", desc: "Historia, notatki i zdjęcia każdego klienta zawsze pod ręką.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Formularze", desc: "Karta wywiadu i zgody na zabieg wypełniane online jeszcze przed wizytą.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "Dokumentacja", desc: "Każdy zabieg rzetelnie udokumentowany – ze zdjęciami i parametrami.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "treatflow-pay", fallback: "online-booking" }, icon: "wallet", label: "Treatflow Pay", desc: "Pobieraj zaliczkę lub pełną płatność online już przy rezerwacji.", color: "bg-green-100 text-green-600", feature: "pay" },
      { href: { page: "messaging" }, icon: "bell", label: "Przypomnienia", desc: "Automatyczne przypomnienia e-mail – mniej nieodwołanych wizyt.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Automatyzacje dla klientów", desc: "Zautomatyzuj opiekę pozabiegową i odzyskiwanie klientów w kilku krokach.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "Wypróbuj 14 dni za darmo",
    ctaNote: "Bez podawania karty. Rezygnacja w każdej chwili.",
  },

  pricing: {
    eyebrow: "Przejrzyste ceny",
    titleBefore: "Proste ceny –",
    titleHighlight: " bez ukrytych opłat",
    subtitle:
      "Treatflow kosztuje od 39 €/miesiąc (Basic) lub 59 €/miesiąc (Booking). Przetestuj 14 dni za darmo – bez prowizji i bez ryzyka.",
    monthly: "Miesięcznie",
    yearly: "Rocznie",
    saveBadge: "Oszczędzasz 10%",
    perMonth: "/miesiąc",
    perYear: "/rok",
    vatNote: "netto + VAT",
    basic: {
      name: "Basic",
      monthlyPrice: "39 €",
      yearlyPrice: "421 €",
      yearlyHint: "35 €/miesiąc • Oszczędzasz 47 € rocznie",
      description: "Karty wywiadu online, kartoteka klientów i dokumentacja zabiegów – bez kalendarza wizyt.",
      included: [
        "Zarządzanie klientami",
        "Formularze z podpisem elektronicznym",
        "Dokumentacja i notatki głosowe",
        "Zdjęcia przed i po",
        "Notatki i zadania zespołu",
        "Sklep i produkty",
        "Statystyki",
        "Pracownicy i role",
        "Wsparcie e-mail",
      ],
      excluded: [
        "Kalendarz wizyt",
        "Rezerwacje online",
        "Automatyzacje i lista oczekujących",
        "Wsparcie priorytetowe",
      ],
      cta: "Wypróbuj 14 dni za darmo",
    },
    booking: {
      name: "Booking",
      popular: "Najczęściej wybierany",
      monthlyPrice: "59 €",
      yearlyPrice: "637 €",
      yearlyHint: "53 €/miesiąc • Oszczędzasz 71 € rocznie",
      description: "Kalendarz wizyt, rezerwacje online i automatyczne przypomnienia dla Twojego salonu.",
      included: [
        "Wszystko z pakietu Basic",
        "Kalendarz z kolumnami dla pracowników i gabinetów",
        "Rezerwacje online bez prowizji",
        "Lista oczekujących",
        "Przypomnienia e-mail",
        "Automatyzacje dla klientów",
        "Kody rabatowe",
        "Wielojęzyczna strona rezerwacji",
        "Integracje (Kalendarz Google, Zapier, asystenci AI)",
        "Priorytetowe wsparcie e-mail i czat",
      ],
      cta: "Wypróbuj 14 dni za darmo",
    },
    trial: {
      title: "14 dni za darmo",
      text: "Bez podawania karty • Rezygnacja w każdej chwili • Bezpłatne przeniesienie danych",
      points: ["Bez opłat za wdrożenie", "Rezygnacja co miesiąc", "Zgodność z RODO"],
    },
  },

  faq: {
    badge: "FAQ",
    titleBefore: "Masz jeszcze pytania?",
    titleHighlight: " Mamy odpowiedzi!",
    subtitle: "Tutaj znajdziesz odpowiedzi na najczęstsze pytania o Treatflow.",
    items: [
      {
        question: "Czym jest Treatflow?",
        answer:
          "Treatflow to aplikacja all-in-one do codziennej pracy salonu: wizyty, kartoteka klientów, formularze online i dokumentacja zabiegów w jednym systemie – bez prowizji od rezerwacji. Tworzymy ją w Austrii, a dane przechowujemy na serwerach w UE.",
      },
      {
        question: "Dla kogo jest Treatflow?",
        answer: [
          "Dla każdego miejsca, w którym wykonuje się zabiegi – od gabinetów kosmetycznych i medycyny estetycznej, przez depilację laserową, stylizację paznokci i rzęs oraz makijaż permanentny, po masaż i spa. Dowiedz się więcej o naszym ",
          { text: "programie do gabinetu medycyny estetycznej", href: { page: "aesthetic-clinic-software" } },
          " i ",
          { text: "kartotece klientów", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Jak długo mogę testować Treatflow za darmo?",
        answer:
          "Treatflow możesz testować całkowicie za darmo przez 14 dni – bez podawania karty i bez ukrytych kosztów. Po okresie próbnym to Ty decydujesz, czy zostajesz.",
      },
      {
        question: "Czym różni się pakiet Basic od Booking?",
        answer: [
          "Basic (39 €/miesiąc) obejmuje nieograniczone ",
          { text: "zarządzanie klientami", href: { page: "client-records" } },
          ", bibliotekę gotowych formularzy, generator formularzy AI i sklep. Booking (59 €/miesiąc) dodaje profesjonalny ",
          { text: "kalendarz rezerwacji", href: { page: "appointment-calendar" } },
          " z własnym linkiem do rezerwacji i automatycznymi ",
          { text: "przypomnieniami o wizytach", href: { page: "messaging" } },
          ".",
        ],
      },
      {
        question: "Czy Treatflow jest zgodny z RODO?",
        answer: [
          "Tak. Treatflow jest w pełni zgodny z RODO. Wszystkie dane są szyfrowane i bezpiecznie przechowywane na serwerach w UE, we Frankfurcie (Niemcy). Dotyczy to również ",
          { text: "kart wywiadu online", href: { page: "forms" } },
          " i ",
          { text: "dokumentacji zabiegów", href: { page: "treatment-documentation" } },
          ".",
        ],
      },
      {
        question: "Czy mogę zaimportować dotychczasowe dane klientów?",
        answer: [
          "Tak, a przeniesienie danych jest bezpłatne. Nasz zespół wsparcia pomoże Ci bezpiecznie przenieść dotychczasowe dane klientów do ",
          { text: "cyfrowej kartoteki klientów", href: { page: "client-records" } },
          ".",
        ],
      },
      {
        question: "Czy Treatflow działa na telefonie?",
        answer:
          "Tak. Treatflow działa na wszystkich urządzeniach – komputerze, tablecie i smartfonie. Masz dostęp do danych klientów i wizyt, gdziekolwiek jesteś.",
      },
      {
        question: "Co się stanie z moimi danymi, jeśli zrezygnuję?",
        answer:
          "Zachowujesz pełną kontrolę nad swoimi danymi. Po rezygnacji możesz wyeksportować wszystkie dane. Całkowicie usuwamy je dopiero po okresie przejściowym.",
      },
      {
        question: "Czy potrzebuję wiedzy technicznej, żeby korzystać z Treatflow?",
        answer:
          "Nie. Treatflow jest bardzo prosty w obsłudze. Niczego nie instalujesz – logujesz się w przeglądarce i od razu zaczynasz. A jeśli pojawią się pytania, nasz zespół wsparcia chętnie pomoże.",
      },
      {
        question: "Jak działa biblioteka formularzy?",
        answer: [
          "W bibliotece znajdziesz profesjonalne ",
          { text: "formularze", href: { page: "forms" } },
          " do wszystkich zabiegów kosmetycznych. Używaj ich bez zmian, dopasuj je generatorem AI albo przerób w edytorze metodą „przeciągnij i upuść”. Gotowe karty wywiadu możesz wysyłać od razu.",
        ],
      },
      {
        question: "Czy liczba klientów jest ograniczona?",
        answer:
          "Nie. Możesz prowadzić dowolną liczbę kart klientów. System rośnie razem z Twoim salonem, a import ułatwia przeniesienie dotychczasowych danych.",
      },
    ],
    contactTitle: "Masz inne pytania?",
    contactText:
      "Nasz zespół wsparcia chętnie pomoże. Napisz do nas e-mail albo od razu umów rozmowę z doradcą.",
    demoCta: "Umów rozmowę z doradcą",
  },

  cta: {
    ariaLabel: "Wezwanie do działania",
    title: "Czas na lepiej zorganizowany salon?",
    subtitle: "Zacznij już dziś i zobacz, jak prosto może działać Twój salon.",
    checks: [
      "14 dni za darmo",
      "Bez podawania karty",
      "Start w 2 minuty",
      "Osobiste wsparcie",
    ],
    primaryCta: "Wypróbuj za darmo",
    demoCta: "Umów prezentację",
    note: "Rezygnacja w każdej chwili. Zgodność z RODO. Osobiste wsparcie.",
  },

  seo: {
    ariaLabel: "Więcej informacji",
    intro: [
      "Treatflow to ",
      { text: "program do salonu kosmetycznego", href: { page: "beauty-salon-software" } },
      " z kalendarzem wizyt, rezerwacjami online, cyfrową kartoteką klientów, formularzami i dokumentacją zabiegów – bez prowizji, zgodny z RODO i stworzony w Austrii.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Kartoteka klientów online" },
      { href: { page: "online-booking" }, label: "Rezerwacja wizyt online" },
      { href: { page: "treatment-documentation" }, label: "Dokumentacja zabiegów" },
      { href: { page: "forms" }, label: "Karta wywiadu i zgody online" },
      { href: { page: "messaging" }, label: "Przypomnienia o wizytach" },
      { href: { page: "software-comparison" }, label: "Porównanie programów" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
