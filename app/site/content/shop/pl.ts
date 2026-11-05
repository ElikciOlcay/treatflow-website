import type { ShopContent } from "./types";

export const shopPl: ShopContent = {
  meta: {
    title: "Sprzedaż produktów i magazyn dla salonów kosmetycznych",
    description:
      "Sprzedaż produktów i magazyn w programie do salonu kosmetycznego. Sprzedawaj kosmetyki do pielęgnacji domowej prosto w salonie i łatwo kontroluj stany magazynowe.",
    keywords: [
      "sprzedaż produktów salon kosmetyczny",
      "magazyn salon kosmetyczny",
      "sprzedaż kosmetyków w salonie",
      "stany magazynowe salon",
      "dodatkowy przychód salon kosmetyczny",
    ],
  },
  breadcrumb: "Sklep",
  hero: {
    eyebrow: "Sprzedaż produktów i magazyn",
    eyebrowIcon: "package",
    title: { before: "Sprzedawaj produkty, miej ", highlight: "magazyn", after: " pod kontrolą" },
    description: "Sprzedawaj kosmetyki do pielęgnacji domowej w salonie – ze stanami magazynowymi i historią sprzedaży pod ręką.",
    chips: ["Magazyn pod kontrolą", "Historia sprzedaży", "Bez limitu produktów"],
    secondaryCta: { label: "Kartoteka klientów", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/pl/shop-hero.png",
      alt: "Sprzedaż produktów i zarządzanie magazynem w Treatflow",
    },
  },
  understand: {
    title: "Sprzedawaj kosmetyki do pielęgnacji domowej prosto w salonie",
    description:
      "Po zabiegu poleć odpowiedni produkt i od razu zapisz sprzedaż. Stany magazynowe i historia sprzedaży aktualizują się same.",
    items: [
      {
        icon: "package",
        title: "Dodawaj i sprzedawaj produkty",
        text: "Dodaj serum, kremy i akcesoria jako produkty. Sprzedawaj je zaraz po zabiegu albo w recepcji.",
      },
      {
        icon: "trending-up",
        title: "Stan magazynu zawsze widoczny",
        text: "W każdej chwili widzisz, ile sztuk zostało. Gdy zapas się kończy, wiesz, że czas zamówić towar.",
      },
      {
        icon: "bar-chart",
        title: "Historia zakupów każdego klienta",
        text: "W karcie klienta widzisz, kto kupił jaki produkt – idealne przy poleceniach i ponownych zakupach.",
      },
    ],
  },
  howItWorks: {
    description: "Od produktu do sprzedaży w trzech krokach.",
    steps: [
      {
        title: "Dodaj produkty",
        text: "Wpisz produkty z nazwą, ceną, zdjęciem i stanem początkowym. Liczba produktów jest nieograniczona.",
      },
      {
        title: "Sprzedawaj w salonie",
        text: "Po zabiegu poleć odpowiedni produkt i zapisz sprzedaż w Treatflow. Sprzedaż trafia do karty klienta.",
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
      { icon: "package", title: "Bez limitu produktów", text: "Tyle produktów, ile potrzebujesz – bez ograniczeń.", points: ["Bez limitów", "Kategorie", "Elastyczne ceny"] },
      { icon: "trending-up", title: "Zarządzanie magazynem", text: "Stany magazynowe na pierwszy rzut oka i ostrzeżenie, gdy towaru jest mało.", points: ["Przegląd stanów", "Zamówienia", "Historia sprzedaży"] },
      { icon: "camera", title: "Zdjęcia i opisy", text: "Prezentuj produkty ze zdjęciami i opisami.", points: ["Zdjęcia produktów", "Opisy", "Warianty"] },
      { icon: "shopping-bag", title: "Co możesz sprzedawać", text: "Kosmetyki do domu, zestawy i akcesoria.", points: ["Kosmetyki pielęgnacyjne", "Zestawy", "Akcesoria"] },
      { icon: "bar-chart", title: "Przegląd sprzedaży", text: "Obroty i najlepiej sprzedające się produkty pod kontrolą.", points: ["Obroty", "Bestsellery", "Przejrzystość"] },
      { icon: "users", title: "Powiązane z kartą klienta", text: "Każda sprzedaż zapisuje się w karcie klienta.", points: ["Historia zakupów", "Rekomendacje", "Ponowne zakupy"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Kartoteka klientów", description: "Historia zakupów w karcie klienta" },
      { href: { page: "treatment-documentation" }, title: "Dokumentacja", description: "Zapisuj zabiegi i zalecenia pielęgnacyjne" },
      { href: { page: "online-booking" }, title: "Rezerwacje online", description: "Klienci umawiają się 24/7 – bez prowizji" },
    ],
  },
  cta: {
    title: "Czas na sprzedaż produktów w salonie?",
    description: "Wypróbuj 14 dni za darmo – sprzedawaj produkty i miej magazyn pod kontrolą.",
  },
};
