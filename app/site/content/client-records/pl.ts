import type { ClientRecordsContent } from "./types";

export const clientRecordsPl: ClientRecordsContent = {
  meta: {
    title: "Kartoteka klientów dla salonu kosmetycznego: dane i historia",
    description:
      "Profesjonalna kartoteka klientów dla Twojego salonu kosmetycznego: historia zabiegów, notatki i zdjęcia w jednym miejscu. Zgodnie z RODO, hosting w UE.",
    keywords: [
      "kartoteka klientów salon kosmetyczny",
      "zarządzanie klientami salon",
      "cyfrowe karty klientów",
      "CRM dla salonu kosmetycznego",
      "program historia zabiegów",
      "RODO dane klientów salon",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "kundenverwaltung",
    webPage: {
      name: "Kartoteka klientów dla salonu kosmetycznego: dane i historia",
      description:
        "Profesjonalna kartoteka klientów dla Twojego salonu kosmetycznego: historia zabiegów, notatki i zdjęcia w jednym miejscu. Zgodnie z RODO.",
    },
    software: {
      name: "Kartoteka klientów Treatflow",
      description: "Cyfrowa kartoteka klientów dla salonów kosmetycznych z historią zabiegów, notatkami i zdjęciami.",
      price: "39",
      currency: "EUR",
    },
  },
  breadcrumb: "Kartoteka klientów",
  hero: {
    eyebrow: "Cyfrowa kartoteka klientów",
    eyebrowIcon: "users",
    title: { before: "Wszystkie dane klientów w jednym ", highlight: "miejscu" },
    description: "Nieograniczona liczba kart klientów z historią, importem i wyszukiwarką. Zgodnie z RODO, na serwerach w UE.",
    chips: ["Zgodność z RODO", "Import danych", "Bez limitu klientów"],
    secondaryCta: { label: "Formularze cyfrowe", href: { page: "forms" } },
    capsules: [
      {
        question: "Jaka aplikacja sprawdzi się do zarządzania klientami w salonie kosmetycznym?",
        answer:
          "Treatflow oferuje kartotekę klientów stworzoną dla salonów kosmetycznych: cyfrowe karty klientów, historię zabiegów, zdjęcia i hosting zgodny z RODO w UE. Wszystkie dane klientów są dostępne na komputerze, tablecie i smartfonie. Wypróbuj za darmo przez 14 dni.",
      },
    ],
    image: {
      src: "/images/mockups/kundenverwaltung-overview.png",
      alt: "Kartoteka klientów Treatflow – przegląd z wyszukiwarką i widokiem szczegółów",
    },
  },
  understand: {
    title: "Wszystkie dane klientów w jednym miejscu",
    description:
      "Profil każdego klienta z danymi kontaktowymi, historią zabiegów i zdjęciami – dostępny zawsze i na każdym urządzeniu.",
    items: [
      {
        icon: "shield",
        title: "Bezpiecznie i zgodnie z RODO",
        text: "Dane Twoich klientów są przechowywane w formie zaszyfrowanej na serwerach w UE. Wnioski o dostęp do danych i ich usunięcie możesz zrealizować w każdej chwili.",
      },
      {
        icon: "upload",
        title: "Przenieś swoje dotychczasowe dane",
        text: "Masz już listę klientów? Po prostu zaimportuj ją z Excela lub pliku CSV. Nasz zespół pomoże Ci w przeprowadzce.",
      },
      {
        icon: "database",
        title: "Bez limitu klientów",
        text: "Niezależnie od tego, czy masz 50, czy 5000 klientów – bez limitu i bez dopłat za kontakt.",
      },
    ],
  },
  howItWorks: {
    description: "Trzy kroki do cyfrowej kartoteki klientów.",
    steps: [
      { title: "Dodaj lub zaimportuj klientów", text: "Twórz nowych klientów ręcznie lub zaimportuj dotychczasową listę z Excela lub pliku CSV. Duplikaty są wykrywane automatycznie." },
      { title: "Uzupełnij profil", text: "Zapisuj w profilu dane kontaktowe, alergie, notatki i zdjęcia. Wypełnione formularze dodawane są automatycznie." },
      { title: "Wszystko gotowe na kolejną wizytę", text: "Otwórz profil klienta przed zabiegiem – od razu widzisz, co zostało zrobione ostatnio i na co zwrócić uwagę." },
    ],
  },
  cards: {
    title: "Co otrzymujesz",
    description: "Cyfrowa kartoteka klientów bez ograniczeń – z importem, wyszukiwarką i zgodnością z RODO.",
    items: [
      { icon: "database", title: "Bez limitu klientów", text: "Tyle profili, ile potrzebuje Twój salon – bez dopłat za kontakt.", points: ["Bez limitu klientów", "Zawsze szybko", "Automatyczne kopie zapasowe"] },
      { icon: "upload", title: "Import danych", text: "Przenieś dotychczasowe listy z Excela lub pliku CSV. Pomoc w przeprowadzce w cenie.", points: ["Excel i CSV", "Przypisywanie pól", "Wykrywanie duplikatów"] },
      { icon: "shield", title: "Zgodność z RODO", text: "Przechowywanie danych w UE, szyfrowanie, dostęp do danych i ich usunięcie na żądanie.", points: ["Serwery w UE", "Szyfrowanie", "Prawo do usunięcia danych"] },
      { icon: "search", title: "Szybka wyszukiwarka", text: "Znajdź profil po imieniu i nazwisku, numerze telefonu, adresie e-mail lub zabiegu – w kilka sekund.", points: ["Wyszukiwanie pełnotekstowe", "Filtry", "Sortowanie"] },
      { icon: "camera", title: "Zdjęcia i historia", text: "Zdjęcia przed i po oraz zabiegi bezpośrednio w profilu, a nie w osobnych folderach.", points: ["Zdjęcia w profilu", "Historia zabiegów", "Notatki"] },
      { icon: "users", title: "Zawsze pod ręką", text: "W przeglądarce na smartfonie, tablecie i komputerze – bez instalowania dodatkowej aplikacji.", points: ["Smartfon", "Tablet przy fotelu zabiegowym", "Komputer"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o kartotekę klientów",
    items: [
      {
        question: "Jaka aplikacja sprawdzi się do zarządzania klientami w salonie kosmetycznym?",
        answer:
          "Treatflow to program do zarządzania klientami stworzony dla salonów kosmetycznych. Aplikacja oferuje cyfrowe karty klientów, historię zabiegów, zdjęcia, notatki i przechowywanie danych w UE zgodnie z RODO. Wypróbuj za darmo przez 14 dni.",
      },
      {
        question: "Czym jest cyfrowa kartoteka klientów dla salonu kosmetycznego?",
        answer:
          "Cyfrowa kartoteka klientów to program, który przechowuje w jednym miejscu wszystkie dane klientów, historię zabiegów, zdjęcia przed i po oraz notatki. W przeciwieństwie do papierowych kart jest zgodna z RODO, łatwa do przeszukiwania i dostępna z każdego urządzenia.",
      },
      {
        question: "Czy cyfrowa kartoteka klientów jest zgodna z RODO?",
        answer:
          "Tak. Treatflow przechowuje wszystkie dane klientów w formie zaszyfrowanej na serwerach w UE i spełnia wszystkie wymogi RODO. Klienci mogą w każdej chwili wglądać w swoje dane i zażądać ich usunięcia.",
      },
      {
        question: "Jakie informacje powinna zawierać karta klienta w salonie?",
        answer:
          "Profesjonalna karta klienta powinna zawierać dane kontaktowe, historię zabiegów, alergie i nietolerancje, zdjęcia przed i po, wypełnione formularze (wywiad, zgody), notatki oraz historię wizyt.",
      },
      {
        question: "Czy mogę zaimportować moje dotychczasowe dane klientów?",
        answer:
          "Tak. Treatflow obsługuje import danych klientów z plików Excel i CSV. Nasz zespół wdrożeniowy bezpłatnie pomoże Ci przenieść dane z dotychczasowego systemu.",
      },
      {
        question: "Czy Treatflow może wysyłać automatyczne wiadomości do moich klientów?",
        answer:
          "Tak. Treatflow ma wbudowaną automatyzację wiadomości. Możesz ustawić automatyczne przypomnienia o wizytach, życzenia urodzinowe i wiadomości po zabiegach, które wzmacniają lojalność klientów – bez dodatkowego wysiłku.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Kalendarz wizyt", description: "Profil klienta prosto z wizyty" },
      { href: { page: "forms" }, title: "Formularze", description: "Formularze wywiadu trafiają do karty klienta" },
      { href: { page: "treatment-documentation" }, title: "Dokumentacja", description: "Historia w profilu klienta" },
    ],
  },
  cta: {
    title: "Czas na uporządkowaną kartotekę klientów?",
    description: "Wypróbuj za darmo przez 14 dni – bez karty kredytowej. Import, historia i zgodność z RODO w jednej aplikacji.",
    secondary: { label: "Formularze cyfrowe", href: { page: "forms" } },
  },
};
