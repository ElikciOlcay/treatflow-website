import type { StudioWebsiteContent } from "./types";

export const studioWebsitePl: StudioWebsiteContent = {
  meta: {
    title: "Strona internetowa na zamówienie dla salonów kosmetycznych",
    description:
      "Indywidualna strona internetowa dla Twojego salonu kosmetycznego, studia laserowego lub firmy beauty. Profesjonalna, dopasowana do smartfonów i nastawiona na rezerwacje. Od 1000 euro.",
    keywords: [
      "strona internetowa salon kosmetyczny",
      "projektowanie stron salon kosmetyczny",
      "strona www salon urody",
      "strona internetowa studio laserowe",
      "strona internetowa stylizacja paznokci",
      "strona internetowa makijaż permanentny",
    ],
  },
  schema: {
    serviceName: "Indywidualna strona internetowa dla salonów kosmetycznych",
    serviceDescription:
      "Profesjonalne, indywidualne strony internetowe dla salonów kosmetycznych i firm beauty. Zoptymalizowane pod rezerwacje i pozyskiwanie nowych klientek.",
    serviceType: "Projektowanie stron internetowych",
    areaServed: ["PL"],
    priceDescription: "Indywidualna strona internetowa od 1000 euro",
  },
  emailHref: `mailto:hello@treatflow.io?subject=${encodeURIComponent("Zapytanie o projekt strony")}`,
  hero: {
    badge: "Nowa usługa od Treatflow",
    title: { before: "Indywidualne strony internetowe dla", highlight: "salonów kosmetycznych" },
    lead: "Profesjonalne, nowoczesne i nastawione na rezerwacje. Twoja strona staje się najsilniejszym kanałem pozyskiwania nowych klientek.",
    sub: "Nie budujemy po prostu ładnych stron. Budujemy strony, które budzą zaufanie i przynoszą zapytania.",
    primaryCta: "Bezpłatna konsultacja",
    emailCta: "Zapytanie e-mailem",
    checks: ["Od 1000 euro", "Indywidualny projekt", "Gotowa w 2-4 tygodnie"],
  },
  demo: {
    badge: "Zobacz przykład na żywo (po niemiecku)",
    title: "Tak może wyglądać strona Twojego salonu",
    description: "Przekonaj się sama. Tę przykładową stronę stworzyliśmy dla fikcyjnego salonu premium.",
    href: "/demo/skin-atelier",
    imageAlt: "Skin Atelier – strona demo Treatflow dla salonów kosmetycznych (po niemiecku)",
    overlayLabel: "Strona demo",
    overlayTitle: "Skin Atelier Monachium",
    hoverCta: "Zobacz demo",
    cardTitle: "Indywidualna strona demo",
    cardText: "Projekt premium z rezerwacjami, zabiegami, opiniami klientek i nie tylko",
    cardCta: "Zobacz na żywo",
  },
  why: {
    title: "Dlaczego Twój salon potrzebuje profesjonalnej strony",
    description:
      "Twoje klientki szukają informacji w internecie, zanim zarezerwują wizytę. Profesjonalna strona to Twoja cyfrowa wizytówka i najskuteczniejsze narzędzie do pozyskiwania nowych klientek.",
    stats: [
      { value: "97%", label: "szuka w internecie", desc: "Prawie wszystkie klientki sprawdzają salon w Google przed rezerwacją." },
      { value: "75%", label: "ocenia po stronie", desc: "Jakość Twojej strony wpływa na zaufanie do salonu." },
      { value: "3x", label: "więcej zapytań", desc: "Salony z profesjonalną stroną otrzymują wyraźnie więcej próśb o rezerwację." },
    ],
  },
  services: {
    title: "Co zawiera Twoja strona",
    description: "Każda strona jest projektowana indywidualnie dla Twojego salonu. Bez szablonów, bez kompromisów.",
    items: [
      {
        icon: "palette",
        title: "Indywidualny projekt",
        desc: "Bez kreatora, bez szablonu. Twój salon dostaje projekt, który pasuje do marki i budzi zaufanie.",
      },
      {
        icon: "smartphone",
        title: "Dopasowana do smartfonów",
        desc: "Ponad 80% odwiedzających wchodzi z telefonu. Twoja strona wygląda świetnie na każdym urządzeniu.",
      },
      {
        icon: "search",
        title: "Podstawy SEO",
        desc: "Czysta technika, szybkie ładowanie i zoptymalizowane treści, aby Twój salon był widoczny w Google.",
      },
      {
        icon: "mouse-pointer-click",
        title: "Nastawiona na rezerwacje",
        desc: "Każda podstrona jest zaprojektowana tak, by zamieniać odwiedzających w zapytania lub rezerwacje.",
      },
      {
        icon: "calendar-days",
        title: "Integracja rezerwacji",
        desc: "Twój link do rezerwacji Treatflow, formularz kontaktowy lub przycisk połączenia bezpośrednio na stronie.",
      },
      {
        icon: "globe",
        title: "Dla każdej branży",
        desc: "Kosmetyka, laser, Hydrafacial, makijaż permanentny, mikroigłowanie, paznokcie, rzęsy i więcej.",
      },
    ],
  },
  advantage: {
    badge: "Wyjątkowa korzyść",
    title: "Idealnie w połączeniu z Treatflow",
    description:
      "Twoja strona jest jeszcze skuteczniejsza, gdy jest połączona z Treatflow. Link do rezerwacji, zabiegi i godziny otwarcia mogą pochodzić bezpośrednio z Treatflow.",
    points: [
      "Link do rezerwacji online bezpośrednio na stronie",
      "Zabiegi i ceny na stronie",
      "Możliwa automatyczna aktualizacja",
      "Płynne doświadczenie klientki od kliknięcia do wizyty",
    ],
    boxTitle: "Korzyść dla klientów Treatflow",
    boxText: "Jako klientka Treatflow przy zamówieniu strony otrzymujesz dodatkowo:",
    creditAmount: "200 euro",
    creditLabel: "środków Treatflow w prezencie",
    creditNote: "Do wykorzystania na abonament Treatflow. Dzięki temu oszczędzasz także na oprogramowaniu salonu.",
  },
  pricing: {
    title: "Przejrzyste ceny, bez ukrytych kosztów",
    description: "Wierzymy w uczciwe, jasne ceny. Bez drobnego druku.",
    badge: "Indywidualny projekt strony",
    price: { prefix: "od", amount: "1000", currency: "euro" },
    note: "Jednorazowo. Bez abonamentu za stworzenie strony.",
    points: [
      "Indywidualny projekt według Twoich życzeń",
      "Responsywna na wszystkich urządzeniach",
      "Podstawowa optymalizacja SEO",
      "Struktura nastawiona na konwersję",
      "Integracja kontaktu i rezerwacji",
      "Do 5 podstron w cenie",
      "Nota prawna i polityka prywatności",
      "Szyfrowanie SSL",
    ],
    customerLabel: "Klienci Treatflow:",
    customerText: "200 euro środków Treatflow w cenie",
    cta: "Zapytaj o projekt strony",
    footnote: "Niezobowiązująca pierwsza rozmowa. Doradzamy bezpłatnie.",
  },
  process: {
    title: "Jak powstaje strona Twojego salonu",
    description: "Od pierwszego pomysłu do gotowej strony – w czterech prostych krokach.",
    steps: [
      { step: "01", title: "Pierwsza rozmowa", desc: "Poznajemy Twój salon, rozumiemy Twoje cele i ustalamy zakres." },
      { step: "02", title: "Koncepcja i projekt", desc: "Tworzymy indywidualną koncepcję graficzną dopasowaną do Twojej marki." },
      { step: "03", title: "Realizacja", desc: "Strona jest profesjonalnie budowana i uzupełniana Twoimi treściami." },
      { step: "04", title: "Start", desc: "Po Twojej akceptacji strona trafia do sieci. Wspieramy Cię przy starcie." },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o tworzenie strony",
    description: "Wszystko, co warto wiedzieć przed zleceniem.",
    items: [
      {
        question: "Jak długo trwa stworzenie strony mojego salonu?",
        answer:
          "Zwykle strona jest gotowa w ciągu 2-4 tygodni. Dokładny czas zależy od zakresu i od tego, jak szybko dostarczysz treści.",
      },
      {
        question: "Czy muszę mieć gotowe teksty i zdjęcia?",
        answer:
          "Nie, to nie jest konieczne. Pomagamy przy tworzeniu tekstów i doradzamy w kwestii zdjęć. Profesjonalne zdjęcia salonu są oczywiście idealne, ale wspólnie znajdziemy najlepsze rozwiązanie.",
      },
      {
        question: "Czy mogę użyć mojej obecnej domeny?",
        answer:
          "Tak, oczywiście. Jeśli masz już domenę, uruchomimy na niej nową stronę. Jeśli nie, pomożemy Ci ją wybrać i zarejestrować.",
      },
      {
        question: "Czy stronę można połączyć z Treatflow?",
        answer:
          "Oczywiście. Twój link do rezerwacji Treatflow, zabiegi i godziny otwarcia można zintegrować bezpośrednio ze stroną. Dzięki temu nowe klientki rezerwują wizyty prosto z Twojej strony.",
      },
      {
        question: "Ile kosztuje indywidualna strona?",
        answer:
          "Indywidualne strony zaczynają się od 1000 euro. Ostateczna cena zależy od zakresu i potrzebnych funkcji. Klienci Treatflow otrzymują dodatkowo 200 euro środków Treatflow.",
      },
      {
        question: "Czy zajmujecie się także hostingiem i utrzymaniem?",
        answer:
          "Tak, na życzenie przejmujemy również hosting i techniczne utrzymanie Twojej strony. Nie musisz się niczym martwić.",
      },
      {
        question: "Czy później mogę sama edytować stronę?",
        answer:
          "W zależności od konfiguracji oferujemy rozwiązania, w których proste zmiany, takie jak teksty i zdjęcia, wprowadzasz samodzielnie. Przy większych zmianach pomagamy.",
      },
    ],
  },
  cta: {
    title: "Czas na profesjonalną stronę Twojego salonu?",
    description: "Zbudujmy razem idealną stronę dla Twojego salonu. Bezpłatna i niezobowiązująca konsultacja.",
    primary: "Bezpłatna konsultacja",
    email: "Zapytanie e-mailem",
    checks: ["Bez zobowiązań", "Indywidualne doradztwo", "Specjalizacja w branży beauty"],
  },
};
