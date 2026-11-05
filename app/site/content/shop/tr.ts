import type { ShopContent } from "./types";

export const shopTr: ShopContent = {
  meta: {
    title: "Güzellik Salonları için Ürün Satışı ve Stok Yönetimi",
    description:
      "Güzellik salonları için entegre ürün satışı. Bakım ürünlerini doğrudan müşterilerinize satın, basit stok yönetimiyle her şeyi takip edin.",
    keywords: [
      "güzellik salonu ürün satışı",
      "salon stok takibi",
      "kozmetik ürün satışı",
      "salon satış programı",
      "güzellik salonu ek gelir",
    ],
  },
  breadcrumb: "Mağaza",
  hero: {
    eyebrow: "Ürün satışı ve stok",
    eyebrowIcon: "package",
    title: { before: "Ürünleri satın, ", highlight: "stoku", after: " takip edin" },
    description: "Bakım ürünlerini salonunuzda satın – stok durumu ve satış geçmişiyle birlikte.",
    chips: ["Stok kontrolü", "Satış geçmişi", "Sınırsız ürün"],
    secondaryCta: { label: "Müşteri takibi", href: { page: "client-records" } },
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Treatflow ürün satışı ve stok yönetimi",
    },
  },
  understand: {
    title: "Bakım ürünlerini doğrudan salonda satın",
    description:
      "İşlemden sonra müşterinize doğru ürünü önerin ve satışı hemen kaydedin. Stok durumu ve satış geçmişi otomatik olarak güncellenir.",
    items: [
      {
        icon: "package",
        title: "Ürün ekleyin ve satın",
        text: "Serumları, kremleri ve aksesuarları ürün olarak ekleyin. İşlemden sonra veya resepsiyonda hemen satın.",
      },
      {
        icon: "trending-up",
        title: "Stok her zaman görünür",
        text: "Bir üründen ne kadar kaldığını her an görürsünüz. Stok azaldığında sipariş verme zamanının geldiğini bilirsiniz.",
      },
      {
        icon: "bar-chart",
        title: "Müşteri bazında satış geçmişi",
        text: "Müşteri profilinde kimin hangi ürünü aldığını görürsünüz – öneriler ve tekrar satışlar için ideal.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda üründen satışa.",
    steps: [
      {
        title: "Ürünleri ekleyin",
        text: "Ürünlerinizi ad, fiyat, görsel ve başlangıç stoğuyla girin. İstediğiniz kadar ürün ekleyebilirsiniz.",
      },
      {
        title: "Salonda satın",
        text: "İşlemden sonra müşteriye doğru ürünü önerin ve satışı Treatflow'da kaydedin. Satış müşteri profiline kaydedilir.",
      },
      {
        title: "Stok kendiliğinden güncellenir",
        text: "Her satıştan sonra stok otomatik olarak düşer. Satış geçmişi en çok satan ürünleri gösterir.",
      },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Güzellik salonları için basit ürün satışı – net ve anlaşılır.",
    items: [
      { icon: "package", title: "Sınırsız ürün", text: "İstediğiniz kadar ürün – limit yok.", points: ["Limit yok", "Kategoriler", "Esnek fiyatlar"] },
      { icon: "trending-up", title: "Stok yönetimi", text: "Stok tek bakışta, miktar azaldığında uyarı.", points: ["Stok özeti", "Yeniden sipariş", "Satış geçmişi"] },
      { icon: "camera", title: "Görseller ve açıklamalar", text: "Ürünleri fotoğraf ve açıklamalarla sunun.", points: ["Ürün görselleri", "Açıklamalar", "Varyantlar"] },
      { icon: "shopping-bag", title: "Neler satabilirsiniz", text: "Bakım ürünleri, paketler ve aksesuarlar.", points: ["Bakım ürünleri", "Paketler", "Aksesuarlar"] },
      { icon: "bar-chart", title: "Satış özeti", text: "Ciroyu ve en çok satan ürünleri takip edin.", points: ["Ciro", "En çok satanlar", "İzlenebilir"] },
      { icon: "users", title: "Müşteri profiline bağlı", text: "Her satış müşterinin profiline kaydedilir.", points: ["Satın alma geçmişi", "Öneriler", "Tekrar satışlar"] },
    ],
  },
  related: {
    items: [
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Müşteri profilinde satın alma geçmişi" },
      { href: { page: "treatment-documentation" }, title: "İşlem kayıtları", description: "İşlemleri ve bakım önerilerini kaydedin" },
      { href: { page: "online-booking" }, title: "Online randevu", description: "Müşteriler 7/24 komisyonsuz randevu alır" },
    ],
  },
  cta: {
    title: "Salon mağazanıza hazır mısınız?",
    description: "30 gün ücretsiz deneyin – ürün satın ve stoğu takip edin.",
  },
};
