import type { ShopContent } from "./types";

export const shopTr: ShopContent = {
  meta: {
    title: "Güzellik Salonları için Ürün Satışı ve Stok Yönetimi",
    description:
      "Güzellik salonları için entegre ürün satışı: bakım ürünlerini doğrudan müşterilerinize satın, basit stok takibiyle her şeyi kontrol altında tutun.",
    keywords: [
      "güzellik salonu ürün satışı",
      "salon stok takibi",
      "kozmetik ürün satışı",
      "salon stok programı",
      "güzellik salonu ek gelir",
    ],
  },
  breadcrumb: "Mağaza",
  hero: {
    eyebrow: "Ürün satışı ve stok",
    eyebrowIcon: "package",
    title: { before: "Ürün satın, ", highlight: "stoğu", after: " takip edin" },
    description: "Bakım ürünlerini salonunuzda satın – stok durumu ve satış geçmişi her an elinizin altında.",
    chips: ["Stok takibi", "Satış geçmişi", "Sınırsız ürün"],
    secondaryCta: { label: "Müşteri takibi", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Treatflow ürün satışı ve stok yönetimi",
    },
  },
  understand: {
    title: "Bakım ürünlerini doğrudan salonda satın",
    description:
      "İşlemden sonra müşterinize doğru ürünü önerin, satışı hemen kaydedin. Stok durumu ve satış geçmişi otomatik olarak güncellenir.",
    items: [
      {
        icon: "package",
        title: "Ürün ekleyin ve satın",
        text: "Serum, krem ve aksesuarları ürün olarak ekleyin; işlemden sonra veya resepsiyonda hemen satın.",
      },
      {
        icon: "trending-up",
        title: "Stok her zaman görünür",
        text: "Bir üründen kaç adet kaldığını her an görürsünüz. Stok azaldığında sipariş zamanının geldiğini bilirsiniz.",
      },
      {
        icon: "bar-chart",
        title: "Müşteri bazında satış geçmişi",
        text: "Müşteri kartında kimin hangi ürünü aldığını görürsünüz – öneriler ve tekrar satışlar için ideal.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda üründen satışa.",
    steps: [
      {
        title: "Ürünleri ekleyin",
        text: "Ürünlerinizi ad, fiyat, görsel ve başlangıç stoğuyla girin. Ürün sayısında sınır yoktur.",
      },
      {
        title: "Salonda satın",
        text: "İşlemden sonra müşteriye doğru ürünü önerin ve satışı Treatflow'da kaydedin. Satış, müşteri kartına işlenir.",
      },
      {
        title: "Stok kendiliğinden güncellenir",
        text: "Her satıştan sonra stok otomatik olarak düşer. Satış geçmişinde en çok satan ürünleri görürsünüz.",
      },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Güzellik salonları için kolay ürün satışı – sade ve anlaşılır.",
    items: [
      { icon: "package", title: "Sınırsız ürün", text: "İstediğiniz kadar ürün – sınır yok.", points: ["Sınır yok", "Kategoriler", "Esnek fiyatlar"] },
      { icon: "trending-up", title: "Stok yönetimi", text: "Stok tek bakışta, ürün azaldığında uyarı.", points: ["Stok özeti", "Yeniden sipariş", "Satış geçmişi"] },
      { icon: "camera", title: "Görseller ve açıklamalar", text: "Ürünleri fotoğraf ve açıklamalarla sunun.", points: ["Ürün görselleri", "Açıklamalar", "Varyantlar"] },
      { icon: "shopping-bag", title: "Neler satabilirsiniz?", text: "Bakım ürünleri, setler ve aksesuarlar.", points: ["Bakım ürünleri", "Setler", "Aksesuarlar"] },
      { icon: "bar-chart", title: "Satış özeti", text: "Ciroyu ve en çok satan ürünleri takip edin.", points: ["Ciro", "En çok satanlar", "İzlenebilir"] },
      { icon: "users", title: "Müşteri kartına bağlı", text: "Her satış müşterinin kartına kaydedilir.", points: ["Satın alma geçmişi", "Öneriler", "Tekrar satışlar"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Müşteri kartında satın alma geçmişi" },
      { href: { page: "treatment-documentation" }, title: "İşlem kayıtları", description: "İşlemleri ve bakım önerilerini kaydedin" },
      { href: { page: "online-booking" }, title: "Online randevu", description: "Müşteriler 7/24 komisyonsuz randevu alır" },
    ],
  },
  cta: {
    title: "Salonunuzda ürün satışına hazır mısınız?",
    description: "30 gün ücretsiz deneyin – ürünlerinizi satın, stoğunuzu kolayca takip edin.",
  },
};
