import type { ShopContent } from "./types";

export const shopPl: ShopContent = {
  meta: {
    title: "Sprzedaż produktów i magazyn dla salonów kosmetycznych",
    description:
      "Zintegrowana sprzedaż produktów dla salonów kosmetycznych. Sprzedawaj kosmetyki pielęgnacyjne bezpośrednio klientkom i kontroluj stan magazynu w prosty sposób.",
    keywords: [
      "sprzedaż produktów salon kosmetyczny",
      "magazyn salon kosmetyczny",
      "sprzedaż kosmetyków w salonie",
      "system sprzedaży salon",
      "dodatkowy przychód salon kosmetyczny",
    ],
  },
  breadcrumb: "Sklep",
  hero: {
    eyebrow: "Sprzedaż produktów i magazyn",
    eyebrowIcon: "package",
    title: { before: "Sprzedawaj produkty, miej ", highlight: "magazyn", after: " pod kontrolą" },
    description: "Sprzedawaj kosmetyki pielęgnacyjne w salonie – ze stanem magazynu i historią sprzedaży.",
    chips: ["Magazyn pod kontrolą", "Historia sprzedaży", "Nielimitowane produkty"],
    secondaryCta: { label: "Kartoteka klientów", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Sprzedaż produktów i zarządzanie magazynem w Treatflow",
    },
  },
  understand: {
    title: "Sprzedawaj kosmetyki pielęgnacyjne bezpośrednio w salonie",
    description:
      "Po zabiegu poleć klientce odpowiedni produkt i od razu zapisz sprzedaż. Stan magazynu i historia sprzedaży aktualizują się automatycznie.",
    items: [
      {
        icon: "package",
        title: "Dodawaj i sprzedawaj produkty",
        text: "Dodaj serum, kremy i akcesoria jako artykuły. Sprzedawaj je zaraz po zabiegu lub w recepcji.",
      },
      {
        icon: "trending-up",
        title: "Stan magazynu zawsze widoczny",
        text: "W każdej chwili widzisz, ile zostało danego produktu. Gdy zapas się kończy, wiesz, że trzeba zamówić.",
      },
      {
        icon: "bar-chart",
        title: "Historia sprzedaży dla każdej klientki",
        text: "W profilu klientki widzisz, kto kupił jaki produkt – idealne do rekomendacji i ponownych zakupów.",
      },
    ],
  },
  howItWorks: {
    description: "Od produktu do sprzedaży w trzech krokach.",
    steps: [
      {
        title: "Dodaj produkty",
        text: "Wpisz artykuły z nazwą, ceną, zdjęciem i stanem początkowym. Możesz dodać tyle produktów, ile chcesz.",
      },
      {
        title: "Sprzedawaj w salonie",
        text: "Po zabiegu poleć klientce odpowiedni produkt i zapisz sprzedaż w Treatflow. Sprzedaż trafia do profilu klientki.",
      },
      {
        title: "Magazyn aktualizuje się sam",
        text: "Po każdej sprzedaży stan magazynu zmniejsza się automatycznie. Historia sprzedaży pokazuje, które produkty sprzedają się najlepiej.",
      },
    ],
  },
  cards: {
    title: "Co otrzymujesz",
    description: "Prosta sprzedaż produktów dla salonów kosmetycznych – jasno i przejrzyście.",
    items: [
      { icon: "package", title: "Nielimitowane produkty", text: "Tyle artykułów, ile chcesz – bez limitów.", points: ["Bez limitów", "Kategorie", "Elastyczne ceny"] },
      { icon: "trending-up", title: "Zarządzanie magazynem", text: "Stan na pierwszy rzut oka i ostrzeżenie przy niskich ilościach.", points: ["Przegląd stanów", "Zamawianie", "Historia sprzedaży"] },
      { icon: "camera", title: "Zdjęcia i opisy", text: "Prezentuj produkty ze zdjęciami i opisami.", points: ["Zdjęcia produktów", "Opisy", "Warianty"] },
      { icon: "shopping-bag", title: "Co możesz sprzedawać", text: "Pielęgnację, pakiety i akcesoria.", points: ["Kosmetyki pielęgnacyjne", "Pakiety", "Akcesoria"] },
      { icon: "bar-chart", title: "Przegląd sprzedaży", text: "Obrót i najlepiej sprzedające się produkty pod kontrolą.", points: ["Obrót", "Bestsellery", "Przejrzystość"] },
      { icon: "users", title: "Powiązane z profilem klientki", text: "Każda sprzedaż zapisuje się w profilu klientki.", points: ["Historia zakupów", "Rekomendacje", "Ponowne zakupy"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Kartoteka klientów", description: "Historia zakupów w profilu klientki" },
      { href: { page: "treatment-documentation" }, title: "Dokumentacja", description: "Zapisuj zabiegi i zalecenia pielęgnacyjne" },
      { href: { page: "online-booking" }, title: "Rezerwacje online", description: "Klientki rezerwują 24/7 – bez prowizji" },
    ],
  },
  cta: {
    title: "Czas na sprzedaż produktów w salonie?",
    description: "Wypróbuj za darmo przez 14 dni – sprzedawaj produkty i kontroluj magazyn.",
  },
};
