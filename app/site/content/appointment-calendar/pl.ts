import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarPl: AppointmentCalendarContent = {
  meta: {
    title: "Kalendarz wizyt dla salonu kosmetycznego: solo lub w zespole",
    description:
      "Kalendarz wizyt dla salonu kosmetycznego, solo lub w zespole: rezerwacje online, przypomnienia e-mail, kolumny dla zespołu i gabinetów. Bez prowizji.",
    keywords: [
      "kalendarz wizyt salon kosmetyczny",
      "program do umawiania wizyt salon",
      "grafik salonu kosmetycznego",
      "terminarz wizyt online",
      "kalendarz wizyt jednoosobowy salon",
      "program do umawiania wizyt dla kosmetyczki",
      "kalendarz rezerwacji salon kosmetyczny",
      "planowanie pracowników i gabinetów",
      "program do umawiania wizyt gabinet medycyny estetycznej",
      "kalendarz wizyt przeciągnij i upuść",
    ],
  },
  dates: { modified: "2026-11-09", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Kalendarz wizyt dla salonu kosmetycznego: solo lub w zespole",
      description:
        "Kalendarz wizyt dla salonów kosmetycznych – dla jednoosobowych salonów i zespołów – z przeciąganiem i upuszczaniem, rezerwacjami online, automatycznymi przypomnieniami i kolumnami dla pracowników i gabinetów.",
    },
    software: {
      name: "Kalendarz wizyt Treatflow dla salonów kosmetycznych",
      description:
        "Kalendarz wizyt dla salonów kosmetycznych – solo lub w zespole – z przeciąganiem i upuszczaniem, rezerwacjami online, automatycznymi przypomnieniami oraz kolumnami dla pracowników i gabinetów.",
      featureList: [
        "Kalendarz wizyt dla jednoosobowych salonów i zespołów",
        "Widok dnia z osobną kolumną dla każdej osoby z zespołu lub gabinetu",
        "Podgląd obłożenia i wolnych terminów",
        "Brak podwójnych rezerwacji pracowników i gabinetów",
        "Przesuwanie wizyt metodą przeciągnij i upuść",
        "Widok dnia, tygodnia i miesiąca",
        "Rezerwacje online i automatyczne przypomnienia",
      ],
      price: "59",
      currency: "EUR",
      rating: true,
    },
  },
  breadcrumb: "Kalendarz wizyt",
  hero: {
    eyebrow: "Planowanie i kalendarz wizyt",
    eyebrowIcon: "calendar",
    title: { before: "Kalendarz wizyt dla salonu kosmetycznego – ", highlight: "solo lub w zespole" },
    description:
      "Twój kalendarz wizyt z rezerwacjami online, przypomnieniami i funkcją przeciągnij i upuść – idealny, gdy pracujesz samodzielnie. Gdy salon się rozrasta, każda osoba z zespołu i każdy gabinet dostają własną kolumnę.",
    chips: ["Solo lub w zespole", "Przeciągnij i upuść", "Mniej nieodwołanych wizyt"],
    secondaryCta: { label: "Rezerwacje online", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Jak najlepiej organizować wizyty w salonie kosmetycznym?",
        answer:
          "Treatflow łączy wizyty, rezerwacje online i przypomnienia w jednym kalendarzu – niezależnie od tego, czy pracujesz samodzielnie, czy z zespołem. Pracując samodzielnie, widzisz cały dzień ze wszystkimi wizytami na pierwszy rzut oka. W zespole widok dnia pokazuje każdą osobę lub gabinet w osobnej kolumnie, dzięki czemu od razu widzisz wolne terminy i unikasz podwójnych rezerwacji. Rezerwacje online i automatyczne przypomnienia ograniczają też liczbę telefonów i nieodwołanych wizyt.",
      },
      {
        question: "Jaki program do umawiania wizyt sprawdzi się w gabinecie medycyny estetycznej?",
        answer:
          "Treatflow łączy kalendarz z kolumnami dla pracowników i gabinetów, rezerwacje online konsultacji i zabiegów oraz przypomnienia e-mail. Rezerwacje trafiają do kalendarza bez żadnej prowizji.",
      },
    ],
    image: {
      src: "/images/mockups/pl/kalender-overview.png",
      alt: "Kalendarz wizyt Treatflow – widok dnia z pracownikami i gabinetami",
    },
  },
  understand: {
    title: "Kalendarz wizyt, który rośnie razem z Twoim salonem",
    description: "Niezależnie od tego, czy pracujesz samodzielnie, czy z zespołem: wszystkie wizyty w jednym miejscu – od razu widzisz, kiedy jest jeszcze wolny termin.",
    items: [
      {
        icon: "calendar-days",
        title: "Solo lub w zespole",
        text: "Gdy pracujesz samodzielnie, masz przed oczami cały dzień ze wszystkimi wizytami. Gdy dochodzą nowe osoby lub gabinety zabiegowe, każda osoba i każdy gabinet dostają własną kolumnę.",
      },
      {
        icon: "move",
        title: "Przesuwanie metodą przeciągnij i upuść",
        text: "Gdy plany się zmieniają, po prostu przeciągnij wizytę na nowy termin – bez usuwania i tworzenia jej od nowa.",
      },
      {
        icon: "bell",
        title: "Automatyczne przypomnienia",
        text: "Przed wizytą klienci dostają przypomnienie e-mail. Dzięki temu znacznie rzadziej zapominają o terminie.",
      },
    ],
  },
  howItWorks: {
    description: "Trzy kroki do sprawnie działającego grafiku salonu.",
    steps: [
      { title: "Wpisz usługi i godziny pracy", text: "Dodaj swoje zabiegi i godziny pracy. Jeśli masz zespół lub kilka gabinetów, dodaj je również – wtedy każda osoba i każdy gabinet dostaną własną kolumnę." },
      { title: "Dodawaj wizyty", text: "Wpisuj wizyty samodzielnie lub włącz rezerwacje online – wtedy wizyty umówione przez klientów same pojawią się w kalendarzu." },
      { title: "Przypomnienia wysyłają się same", text: "Klienci dostają e-mailem potwierdzenie rezerwacji i przypomnienie – niczego nie wysyłasz ręcznie." },
    ],
  },
  cards: {
    title: "Co otrzymujesz",
    description: "Wszystko do planowania wizyt – od jednoosobowego salonu po zespół, z rezerwacjami online i przypomnieniami w jednym kalendarzu.",
    items: [
      { icon: "users", title: "Solo lub w zespole", text: "Pracując samodzielnie, widzisz swój dzień na pierwszy rzut oka. W zespole każda osoba i każdy gabinet mają własną kolumnę.", points: ["Dla jednoosobowych salonów", "Kolumny dla zespołu i gabinetów", "Bez podwójnych rezerwacji"] },
      { icon: "move", title: "Przeciągnij i upuść", text: "Przesuwaj, wydłużaj lub zamieniaj wizyty – bez wypełniania formularzy i bez chaosu.", points: ["Zmiana terminu w kilka sekund", "Od razu w kalendarzu", "Bez tworzenia od nowa"] },
      { icon: "layout-grid", title: "Od widoku dnia po miesiąc", text: "Przełączaj się między dniem, tygodniem i miesiącem – zależnie od tego, czego akurat potrzebujesz.", points: ["Widok dnia", "Tydzień", "Miesiąc"] },
      { icon: "bell", title: "Automatyczne przypomnienia", text: "Przypomnienie e-mail przed każdą wizytą. Mniej nieodwołanych wizyt i mniej obdzwaniania klientów.", points: ["Przypomnienia e-mail", "Elastyczny termin wysyłki", "Link do odwołania wizyty"] },
      { icon: "calendar", title: "Rezerwacje online", text: "Rezerwacje trafiają prosto do kalendarza. Bez podwójnych rezerwacji, z automatycznym potwierdzeniem.", points: ["Własny link do rezerwacji", "Od razu w kalendarzu", "Bez prowizji"] },
      { icon: "clock", title: "Mniej pracy administracyjnej", text: "Mniej telefonów, prostsza organizacja – więcej czasu na zabiegi, a mniej na układanie grafiku.", points: ["Mniej telefonów", "Przejrzyste terminy", "Szybki podgląd"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o kalendarz wizyt dla salonu",
    items: [
      {
        question: "Czy kalendarz wizyt sprawdzi się, jeśli pracuję samodzielnie?",
        answer:
          "Tak. Z Treatflow pracuje wiele jednoosobowych salonów. Widzisz swój dzień ze wszystkimi wizytami, klienci rezerwują online bezpośrednio w Twoich wolnych terminach i automatycznie dostają potwierdzenie oraz przypomnienie. Kolumny dla pracowników i gabinetów przydadzą Ci się dopiero wtedy, gdy salon się rozrośnie.",
      },
      {
        question: "Jak najlepiej organizować wizyty w salonie kosmetycznym?",
        answer:
          "Najlepiej sprawdza się program stworzony do umawiania wizyt, taki jak Treatflow. Dzięki rezerwacjom online klienci umawiają się 24/7, automatyczne przypomnienia e-mail wyraźnie ograniczają nieodwołane wizyty, a przejrzysty kalendarz w każdej chwili pokazuje Ci pełny obraz dnia.",
      },
      {
        question: "Ile kosztuje program do umawiania wizyt dla salonu kosmetycznego?",
        answer:
          "Treatflow oferuje planowanie wizyt z rezerwacjami online od 59 €/miesiąc w planie Booking (53 €/miesiąc przy płatności rocznej, netto + VAT). Możesz go wypróbować za darmo przez 14 dni, bez podawania karty. Nie ma ukrytych kosztów ani prowizji od rezerwacji.",
      },
      {
        question: "Czy istnieje darmowy program do umawiania wizyt dla salonu kosmetycznego?",
        answer:
          "Darmowe programy istnieją – zwykle z ograniczeniami, reklamami lub prowizją od każdej rezerwacji w modelu marketplace. Papierowy kalendarz czy arkusz kalkulacyjny nic nie kosztują, ale nie przyjmą rezerwacji online, nie wyślą przypomnień i nie połączą się z kartoteką klientów. Treatflow możesz wypróbować za darmo przez 14 dni bez podawania karty; potem kalendarz z rezerwacjami online kosztuje 59 €/miesiąc, bez prowizji od wizyt.",
      },
      {
        question: "Terminarz, kalendarz czy system rezerwacji – czym się różnią?",
        answer:
          "W codziennej pracy salonu wszystkie trzy określenia znaczą prawie to samo: terminarz lub kalendarz to widok, w którym Ty i Twój zespół zarządzacie wizytami. System rezerwacji to część, przez którą klienci sami umawiają się online. W Treatflow to jedno i to samo – rezerwacje online trafiają prosto do kalendarza, razem z przypomnieniami i kartoteką klientów.",
      },
      {
        question: "Czy moi klienci mogą umawiać wizyty online?",
        answer:
          "Tak. Otrzymujesz własny link do rezerwacji, który możesz udostępnić na swojej stronie, na Instagramie lub w wiadomościach. Klienci wybierają zabiegi i terminy o każdej porze. Nowe rezerwacje od razu pojawiają się w kalendarzu, a potwierdzenia wysyłane są automatycznie e-mailem.",
      },
      {
        question: "Jak ograniczyć nieodwołane wizyty (no-show) w salonie?",
        answer:
          "Najskuteczniejszym sposobem są automatyczne przypomnienia e-mail. Treatflow wysyła je w wybranym przez Ciebie czasie przed wizytą, dzięki czemu znacznie mniej klientów zapomina o terminie.",
      },
      {
        question: "Jakie funkcje powinien mieć kalendarz wizyt dla salonu?",
        answer:
          "Dobry kalendarz wizyt dla salonu kosmetycznego powinien oferować rezerwacje online, widok dnia, tygodnia i miesiąca, planowanie pracowników i gabinetów, automatyczne przypomnienia e-mail, przeciąganie i upuszczanie oraz połączenie z kartoteką klientów i dokumentacją zabiegów.",
      },
      {
        question: "Jak zaplanować pracę kilku osób z zespołu i kilku gabinetów?",
        answer:
          "Widok dnia w Treatflow pokazuje pracowników lub gabinety w osobnych kolumnach. Widzisz wolne terminy, unikasz podwójnych rezerwacji i łatwiej ogarniasz zmiany w ostatniej chwili.",
      },
      {
        question: "Jak uniknąć podwójnych rezerwacji pracowników i gabinetów?",
        answer:
          "Treatflow pokazuje obłożenie pracowników i gabinetów obok siebie. Wolne i zajęte terminy widać od razu, więc wąskie gardła i podwójne rezerwacje da się wychwycić z wyprzedzeniem.",
      },
      {
        question: "Jaki program do umawiania wizyt sprawdzi się w gabinecie medycyny estetycznej?",
        answer:
          "Treatflow łączy kalendarz z kolumnami dla pracowników i gabinetów, rezerwacje online konsultacji i zabiegów oraz przypomnienia e-mail. Nowe rezerwacje trafiają prosto do kalendarza, bez prowizji od wizyty.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Rezerwacje online", description: "24/7 przez Twój link do rezerwacji" },
      { href: { page: "messaging" }, title: "Przypomnienia", description: "Automatyczne przypomnienia e-mail" },
      { href: { page: "client-records" }, title: "Kartoteka klientów", description: "Karta klienta otwierana prosto z wizyty" },
    ],
  },
  cta: {
    title: "Czas na planowanie wizyt bez stresu?",
    description: "Wypróbuj 14 dni za darmo – bez podawania karty. Kalendarz, rezerwacje online i przypomnienia w jednej aplikacji – solo lub w zespole.",
    secondary: { label: "Rezerwacje online", href: { page: "online-booking" } },
  },
};
