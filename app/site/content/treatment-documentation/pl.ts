import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationPl: TreatmentDocumentationContent = {
  meta: {
    title: "Cyfrowa dokumentacja zabiegów dla salonów kosmetycznych",
    description:
      "Elektroniczna dokumentacja zabiegów dla salonów kosmetycznych i gabinetów medycyny estetycznej: zdjęcia przed i po, notatki, parametry urządzeń i historia w karcie klienta. Notatki dyktujesz zamiast je pisać.",
    keywords: [
      "dokumentacja zabiegów kosmetycznych",
      "program do dokumentacji zabiegów",
      "zdjęcia przed i po program",
      "notatki z zabiegu aplikacja",
      "dyktowanie notatek",
      "dokumentacja medycyny estetycznej",
      "karta zabiegowa online",
      "dokumentacja zabiegów laserowych",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Cyfrowa dokumentacja zabiegów dla salonów kosmetycznych",
      description: "Cyfrowa dokumentacja zabiegów ze zdjęciami przed i po, notatkami i historią.",
    },
  },
  breadcrumb: "Dokumentacja",
  hero: {
    eyebrow: "Dokumentacja zabiegów",
    eyebrowIcon: "file-text",
    title: { before: "Dokumentuj zabiegi ", highlight: "bez papieru" },
    description:
      "Zdjęcia, notatki i parametry w jednym miejscu – ze wsparciem AI. Przy kolejnej wizycie od razu wiesz, co było robione ostatnio.",
    chips: ["Zdjęcia przed i po", "Dyktowanie z AI", "Podpis elektroniczny"],
    secondaryCta: { label: "Cyfrowe formularze", href: { page: "forms" } },
    capsules: [
      {
        question: "Jaki program nadaje się do dokumentowania zabiegów kosmetycznych?",
        answer:
          "W Treatflow dokumentujesz zabiegi elektronicznie – ze zdjęciami przed i po, parametrami, notatkami i podpisem. Kompletna dokumentacja jest szczególnie ważna przy zabiegach z użyciem urządzeń, takich jak laser czy IPL – i właśnie taką pracę Treatflow ułatwia.",
      },
      {
        question: "Jak dokumentować przebieg zabiegów estetycznych?",
        answer:
          "Każda sesja dostaje własny wpis z parametrami, produktami, zdjęciami i notatkami, a historia zostaje w karcie klienta. Notatki możesz dyktować – Treatflow zamienia je na tekst i opcjonalnie go dopracowuje.",
      },
    ],
    image: {
      src: "/images/mockups/dokumentation-hero.png",
      alt: "Dokumentacja zabiegów w Treatflow ze zdjęciami i notatkami",
    },
  },
  understand: {
    title: "Każdy zabieg starannie udokumentowany",
    description:
      "Po każdej sesji masz wpis ze zdjęciami, notatkami i parametrami – zapisany w karcie klienta.",
    items: [
      {
        icon: "camera",
        title: "Zdjęcia przed i po",
        text: "Utrwalaj postępy na zdjęciach – i pokazuj klientom efekty kolejnych zabiegów.",
      },
      {
        icon: "brain",
        title: "Głosem lub z pomocą AI",
        text: "Dyktuj notatki. Treatflow zamienia je na tekst i opcjonalnie dopracowuje go z pomocą AI. Mniej pisania, więcej czasu na zabieg.",
      },
      {
        icon: "shield",
        title: "Kompletnie i przejrzyście",
        text: "Każdy wpis trafia do karty klienta z datą, parametrami i opcjonalnym podpisem – jeśli później pojawią się pytania, pokażesz, co dokładnie zostało zrobione.",
      },
    ],
  },
  howItWorks: {
    description: "Gotowa dokumentacja w trzech krokach.",
    steps: [
      { title: "Otwórz dokumentację", text: "Otwórz dokumentację bezpośrednio z wizyty lub karty klienta – dane klienta i zabieg są już uzupełnione." },
      { title: "Dodaj zdjęcia i notatki", text: "Dodaj zdjęcia, wpisz parametry zabiegu i podyktuj lub wpisz notatki. W razie potrzeby poproś klienta o podpis." },
      { title: "Zapisane i zawsze dostępne", text: "Wszystko trafia automatycznie do karty klienta. Przy kolejnej wizycie od razu widzisz, co było robione ostatnio." },
    ],
  },
  cards: {
    title: "Co zyskujesz",
    description: "Wszystko, czego potrzebujesz do rzetelnej dokumentacji zabiegów – bez papierologii.",
    items: [
      { icon: "camera", title: "Zdjęcia przed i po", text: "Zapisuj zdjęcia bezpośrednio przy zabiegu i porównuj je chronologicznie.", points: ["Przy właściwym zabiegu", "W karcie klienta", "Zgodnie z RODO"] },
      { icon: "mic", title: "Dyktowanie głosowe", text: "Mów zamiast pisać – idealne w trakcie lub tuż po zabiegu.", points: ["Bez użycia rąk", "Szybko", "Jasno sformułowane"] },
      { icon: "brain", title: "Asystent AI", text: "Opcjonalnie dopracuj i uporządkuj podyktowany tekst – zanim zapiszesz wpis, możesz go sprawdzić.", points: ["Dopracowanie tekstu", "Struktura", "Mniej pisania"] },
      { icon: "file-text", title: "Parametry i produkty", text: "Zapisuj ustawienia urządzeń, użyte produkty i parametry zabiegu.", points: ["Laser/IPL", "Produkty", "Pielęgnacja pozabiegowa"] },
      { icon: "pen-tool", title: "Podpis elektroniczny", text: "Zbieraj zgodę lub potwierdzenie elektronicznie, na tablecie.", points: ["Na tablecie", "W karcie klienta", "Przejrzyście"] },
      { icon: "shield", title: "Bezpieczne archiwum", text: "Cała dokumentacja jest przechowywana na serwerach w UE i zawsze dostępna.", points: ["Serwery w UE", "Szyfrowanie", "Zawsze dostępna"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o dokumentację",
    items: [
      {
        question: "Jaki program nadaje się do dokumentowania zabiegów kosmetycznych?",
        answer:
          "W Treatflow dokumentujesz zabiegi elektronicznie – ze zdjęciami przed i po, parametrami, notatkami i podpisem. Kompletna dokumentacja jest szczególnie ważna przy zabiegach z użyciem urządzeń, takich jak laser czy IPL – i właśnie taką pracę Treatflow ułatwia.",
      },
      {
        question: "Jak dokumentować przebieg zabiegów estetycznych?",
        answer:
          "Każda sesja dostaje własny wpis z parametrami, numerami serii produktów, zdjęciami i notatkami. Historia w karcie klienta pokazuje przebieg terapii na przestrzeni wielu wizyt. Notatki możesz dyktować – Treatflow zamienia je na tekst i opcjonalnie dopracowuje go z pomocą AI.",
      },
      {
        question: "Czy dokumentacja zabiegów w salonie kosmetycznym jest obowiązkowa?",
        answer:
          "To zależy od kraju i rodzaju zabiegu. Przy zabiegach z użyciem urządzeń, takich jak laser czy IPL, kompletna dokumentacja jest zwykle oczekiwana. Przy pozostałych zabiegach jest zalecana – dla bezpieczeństwa prawnego, jakości pracy i zadowolenia klientów.",
      },
      {
        question: "Co powinna zawierać profesjonalna dokumentacja zabiegu?",
        answer:
          "Rodzaj i datę zabiegu, użyte produkty i parametry, zdjęcia przed i po, ocenę skóry, notatki z przebiegu, zalecenia pozabiegowe i opcjonalnie podpis klienta.",
      },
      {
        question: "Jak prawidłowo robić zdjęcia przed i po?",
        answer:
          "Zawsze w tych samych warunkach: to samo światło, kąt i odległość. W Treatflow zapisujesz zdjęcia bezpośrednio w dokumentacji zabiegu, w karcie klienta.",
      },
      {
        question: "Co dokumentować przy zabiegach laserowych i IPL?",
        answer:
          "Zazwyczaj konsultację, zgodę, ustawienia urządzenia (np. energia, częstotliwość, czas impulsu), obszar zabiegowy, reakcję skóry i zalecenia pozabiegowe.",
      },
      {
        question: "Czy mogę dyktować notatki z zabiegu zamiast je pisać?",
        answer:
          "Tak. Notatki dyktujesz bezpośrednio w dokumentacji. Treatflow zamienia mowę na tekst i opcjonalnie dopracowuje go z pomocą AI. Sam wpis nie powstaje jednak w pełni automatycznie.",
      },
      {
        question: "Czy mogę zaznaczać obszary zabiegowe na zdjęciach lub szkicach?",
        answer:
          "Zdjęcia przed i po zapisujesz bezpośrednio przy zabiegu, a obszary zaznaczasz na zdjęciach; w formularzach dostępne są pola szkicu z szablonem twarzy lub ciała. Nie ma osobnego modułu mapy ciała.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "forms" }, title: "Formularze", description: "Karty wywiadu i zgody na zabieg online" },
      { href: { page: "client-records" }, title: "Kartoteka klientów", description: "Historia w karcie klienta" },
      { href: { page: "appointment-calendar" }, title: "Kalendarz wizyt", description: "Dokumentacja otwierana z wizyty" },
    ],
  },
  cta: {
    title: "Czas na porządek w dokumentacji?",
    description: "Wypróbuj 14 dni za darmo – bez podawania karty. Dokumentacja, zdjęcia i podpisy w jednej aplikacji.",
    secondary: { label: "Cyfrowe formularze", href: { page: "forms" } },
  },
};
