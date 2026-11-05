import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationPl: TreatmentDocumentationContent = {
  meta: {
    title: "Cyfrowa dokumentacja zabiegów dla salonów kosmetycznych",
    description:
      "Cyfrowa dokumentacja zabiegów dla salonów kosmetycznych i gabinetów medycyny estetycznej: zdjęcia przed i po, notatki, parametry urządzeń i historia w profilu klienta. Dyktuj notatki zamiast je pisać.",
    keywords: [
      "dokumentacja zabiegów kosmetycznych",
      "program do dokumentacji zabiegów",
      "zdjęcia przed i po program",
      "notatki z zabiegu aplikacja",
      "dyktowanie notatek",
      "dokumentacja medycyny estetycznej",
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
    title: { before: "Dokumentuj zabiegi ", highlight: "cyfrowo" },
    description:
      "Zdjęcia, notatki i parametry w jednym miejscu – ze wsparciem AI. Przy kolejnej wizycie od razu wiesz, co zostało zrobione.",
    chips: ["Zdjęcia przed i po", "Dyktowanie z AI", "Podpis elektroniczny"],
    secondaryCta: { label: "Cyfrowe formularze", href: { page: "forms" } },
    capsules: [
      {
        question: "Jaki program nadaje się do dokumentowania zabiegów kosmetycznych?",
        answer:
          "Treatflow dokumentuje zabiegi cyfrowo – ze zdjęciami przed i po, parametrami, notatkami i podpisem. Szczególnie przy zabiegach z użyciem urządzeń, takich jak laser czy IPL, kompletna dokumentacja jest ważna – Treatflow wspiera właśnie ten sposób pracy.",
      },
      {
        question: "Jak dokumentować przebieg zabiegów estetycznych?",
        answer:
          "Każda sesja otrzymuje wpis z parametrami, produktami, zdjęciami i notatkami. Historia pozostaje w kartotece klienta. Notatki możesz dyktować; Treatflow zamienia je na tekst i opcjonalnie go dopracowuje.",
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
      "Po każdej sesji masz cyfrowy wpis ze zdjęciami, notatkami i parametrami – wszystko zapisane w profilu klienta.",
    items: [
      {
        icon: "camera",
        title: "Zdjęcia przed i po",
        text: "Utrwalaj postępy na zdjęciach. Dzięki temu pokażesz klientce, jak przebiega zabieg.",
      },
      {
        icon: "brain",
        title: "Głosem lub z pomocą AI",
        text: "Dyktuj notatki. Treatflow zamienia je na tekst i opcjonalnie dopracowuje go z pomocą AI. Mniej pisania, więcej czasu na zabieg.",
      },
      {
        icon: "shield",
        title: "Kompletnie i przejrzyście",
        text: "Każdy wpis jest zapisywany z datą, parametrami i opcjonalnym podpisem w profilu klienta – możesz pokazać, co zostało zrobione, jeśli później pojawią się pytania.",
      },
    ],
  },
  howItWorks: {
    description: "Gotowa dokumentacja w trzech krokach.",
    steps: [
      { title: "Otwórz dokumentację", text: "Otwórz dokumentację bezpośrednio z wizyty lub profilu klienta – klientka i zabieg są już uzupełnione." },
      { title: "Dodaj zdjęcia i notatki", text: "Prześlij zdjęcia, wpisz parametry zabiegu i podyktuj lub wpisz notatki. W razie potrzeby poproś klientkę o podpis." },
      { title: "Zapisane i zawsze dostępne", text: "Wszystko trafia automatycznie do profilu klienta. Przy kolejnej wizycie od razu widzisz, co zrobiono ostatnio." },
    ],
  },
  cards: {
    title: "Co zyskujesz",
    description: "Wszystko, czego potrzebujesz do porządnej dokumentacji zabiegów – bez papierów.",
    items: [
      { icon: "camera", title: "Zdjęcia przed i po", text: "Zapisuj zdjęcia bezpośrednio przy zabiegu i porównuj je chronologicznie.", points: ["Ten sam kontekst", "W profilu klienta", "Zgodnie z RODO"] },
      { icon: "mic", title: "Dyktowanie głosowe", text: "Mów zamiast pisać – idealne w trakcie lub tuż po zabiegu.", points: ["Bez użycia rąk", "Szybko", "Jasno sformułowane"] },
      { icon: "brain", title: "Asystent AI", text: "Opcjonalnie dopracuj i uporządkuj podyktowany tekst – przed zapisaniem sprawdzasz wpis.", points: ["Dopracowanie tekstu", "Struktura", "Mniej pisania"] },
      { icon: "file-text", title: "Parametry i produkty", text: "Porządnie zapisuj ustawienia urządzeń, produkty i parametry.", points: ["Laser/IPL", "Produkty", "Pielęgnacja pozabiegowa"] },
      { icon: "pen-tool", title: "Podpis elektroniczny", text: "Zbieraj zgodę lub potwierdzenie cyfrowo na tablecie.", points: ["Na urządzeniu", "W profilu", "Przejrzyście"] },
      { icon: "shield", title: "Bezpieczne archiwum", text: "Cała dokumentacja jest przechowywana na serwerach w UE i zawsze dostępna.", points: ["Serwery w UE", "Szyfrowanie", "Zawsze dostępna"] },
    ],
  },
  faq: {
    title: "Najczęstsze pytania o dokumentację",
    items: [
      {
        question: "Jaki program nadaje się do dokumentowania zabiegów kosmetycznych?",
        answer:
          "Treatflow dokumentuje zabiegi cyfrowo – ze zdjęciami przed i po, parametrami, notatkami i podpisem. Szczególnie przy zabiegach z użyciem urządzeń, takich jak laser czy IPL, kompletna dokumentacja jest ważna – Treatflow wspiera właśnie ten sposób pracy.",
      },
      {
        question: "Jak dokumentować przebieg zabiegów estetycznych?",
        answer:
          "Każda sesja otrzymuje wpis z parametrami, numerami serii, zdjęciami i notatkami. Historia w kartotece klienta pokazuje przebieg na przestrzeni wielu wizyt. Notatki możesz dyktować; Treatflow zamienia je na tekst i opcjonalnie dopracowuje go z pomocą AI.",
      },
      {
        question: "Czy dokumentacja zabiegów w salonie kosmetycznym jest obowiązkowa?",
        answer:
          "To zależy od kraju i rodzaju zabiegu. Przy zabiegach z użyciem urządzeń, takich jak laser czy IPL, kompletna dokumentacja jest zwykle oczekiwana. Przy wszystkich innych zabiegach jest zalecana – dla bezpieczeństwa prawnego, jakości i zadowolenia klientek.",
      },
      {
        question: "Co powinna zawierać profesjonalna dokumentacja zabiegu?",
        answer:
          "Rodzaj i datę zabiegu, produkty i parametry, zdjęcia przed i po, ocenę skóry, notatki z przebiegu, zalecenia pozabiegowe i opcjonalnie podpis klientki.",
      },
      {
        question: "Jak prawidłowo robić zdjęcia przed i po?",
        answer:
          "W tych samych warunkach (światło, kąt, odległość). W Treatflow zapisujesz zdjęcia bezpośrednio w dokumentacji i przypisujesz je do profilu klienta.",
      },
      {
        question: "Co dokumentować przy zabiegach laserowych i IPL?",
        answer:
          "Zazwyczaj konsultację, zgodę, ustawienia urządzenia (np. energia, częstotliwość, czas impulsu), obszar zabiegowy, reakcję skóry i zalecenia pozabiegowe.",
      },
      {
        question: "Czy mogę dyktować notatki z zabiegu zamiast je pisać?",
        answer:
          "Tak. W dokumentacji dyktujesz notatki. Treatflow zamienia mowę na tekst i opcjonalnie dopracowuje go z pomocą AI. Kartoteka nie jest tworzona w pełni automatycznie.",
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
      { href: { page: "forms" }, title: "Formularze", description: "Karty wywiadu i zgody w wersji cyfrowej" },
      { href: { page: "client-records" }, title: "Kartoteka klientów", description: "Historia w profilu klienta" },
      { href: { page: "appointment-calendar" }, title: "Kalendarz wizyt", description: "Dokumentacja otwierana z wizyty" },
    ],
  },
  cta: {
    title: "Gotowa na przejrzystą dokumentację?",
    description: "Wypróbuj za darmo przez 14 dni – bez karty kredytowej. Dokumentacja, zdjęcia i podpisy w jednej aplikacji.",
    secondary: { label: "Cyfrowe formularze", href: { page: "forms" } },
  },
};
