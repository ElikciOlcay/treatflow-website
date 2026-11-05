import type { StudioWebsiteContent } from "./types";

export const studioWebsiteTr: StudioWebsiteContent = {
  meta: {
    title: "Güzellik Salonları için Özel Web Sitesi Tasarımı",
    description:
      "Güzellik salonunuz, lazer merkeziniz veya güzellik işletmeniz için özel web sitesi. Profesyonel, mobil uyumlu ve randevu odaklı. 1.000 Euro'dan itibaren.",
    keywords: [
      "güzellik salonu web sitesi",
      "güzellik salonu web tasarım",
      "kuaför web sitesi",
      "lazer epilasyon merkezi web sitesi",
      "tırnak salonu web sitesi",
      "kalıcı makyaj stüdyosu web sitesi",
    ],
  },
  schema: {
    serviceName: "Güzellik salonları için özel web sitesi",
    serviceDescription:
      "Güzellik salonları ve güzellik işletmeleri için profesyonel, özel web siteleri. Randevu ve yeni müşteri kazanımı için optimize edilmiştir.",
    serviceType: "Web tasarım",
    areaServed: ["TR"],
    priceDescription: "1.000 Euro'dan itibaren özel web sitesi",
  },
  emailHref: `mailto:hello@treatflow.io?subject=${encodeURIComponent("Web sitesi projesi talebi")}`,
  hero: {
    badge: "Treatflow'dan yeni hizmet",
    title: { before: "", highlight: "Güzellik salonları", after: " için özel web siteleri" },
    lead: "Profesyonel, modern ve randevu odaklı. Web siteniz yeni müşteriler için en güçlü kanalınız olur.",
    sub: "Sadece güzel web siteleri yapmıyoruz. Güven oluşturan ve talep getiren web siteleri yapıyoruz.",
    primaryCta: "Ücretsiz danışmanlık alın",
    emailCta: "E-posta ile talep",
    checks: ["1.000 Euro'dan itibaren", "Özel tasarım", "2-4 haftada hazır"],
  },
  demo: {
    badge: "Canlı örneği inceleyin (Almanca)",
    title: "Salon web siteniz böyle görünebilir",
    description: "Kendiniz görün. Bu örnek web sitesini hayali bir premium stüdyo için hazırladık.",
    href: "/demo/skin-atelier",
    imageAlt: "Skin Atelier – Treatflow'un güzellik salonları için demo web sitesi (Almanca)",
    overlayLabel: "Demo web sitesi",
    overlayTitle: "Skin Atelier Münih",
    hoverCta: "Demoyu görün",
    cardTitle: "Özel demo web sitesi",
    cardText: "Randevu entegrasyonu, işlemler, müşteri yorumları ve daha fazlasıyla premium tasarım",
    cardCta: "Canlı görün",
  },
  why: {
    title: "Salonunuzun neden profesyonel bir web sitesine ihtiyacı var",
    description:
      "Müşterileriniz randevu almadan önce internette araştırma yapar. Profesyonel bir web sitesi dijital kartvizitiniz ve yeni müşteri kazanmak için en güçlü aracınızdır.",
    stats: [
      { value: "%97", label: "internette arıyor", desc: "Neredeyse tüm müşteriler randevu almadan önce salonu Google'da arar." },
      { value: "%75", label: "web sitesine göre karar veriyor", desc: "Web sitenizin kalitesi salonunuza duyulan güveni etkiler." },
      { value: "3 kat", label: "daha fazla talep", desc: "Profesyonel web sitesi olan salonlar belirgin şekilde daha fazla randevu talebi alır." },
    ],
  },
  services: {
    title: "Web sitenizde neler var",
    description: "Her web sitesi salonunuz için özel olarak tasarlanır. Şablon yok, taviz yok.",
    items: [
      {
        icon: "palette",
        title: "Özel tasarım",
        desc: "Site oluşturucu yok, şablon yok. Salonunuz markanıza uyan ve güven veren bir tasarıma kavuşur.",
      },
      {
        icon: "smartphone",
        title: "Mobil uyumlu",
        desc: "Ziyaretçilerinizin %80'inden fazlası telefondan gelir. Web siteniz her cihazda kusursuz görünür.",
      },
      {
        icon: "search",
        title: "SEO temeli",
        desc: "Temiz teknik altyapı, hızlı yükleme ve optimize içerik sayesinde salonunuz Google'da bulunur.",
      },
      {
        icon: "mouse-pointer-click",
        title: "Randevu odaklı",
        desc: "Her sayfa, ziyaretçileri talebe veya randevuya dönüştürmek için tasarlanır.",
      },
      {
        icon: "calendar-days",
        title: "Randevu entegrasyonu",
        desc: "Treatflow randevu bağlantınız, iletişim formunuz veya arama butonunuz doğrudan sitede.",
      },
      {
        icon: "globe",
        title: "Her alana uygun",
        desc: "Cilt bakımı, lazer, Hydrafacial, kalıcı makyaj, microneedling, tırnak, kirpik ve daha fazlası.",
      },
    ],
  },
  advantage: {
    badge: "Özel avantaj",
    title: "Treatflow ile birlikte ideal",
    description:
      "Web siteniz Treatflow'a bağlandığında daha da güçlü olur. Randevu bağlantısı, işlemler ve çalışma saatleri doğrudan Treatflow'dan eklenebilir.",
    points: [
      "Online randevu bağlantısı doğrudan sitede",
      "İşlemler ve fiyatlar web sitesinde",
      "Otomatik güncelleme mümkün",
      "Tıklamadan randevuya kesintisiz müşteri deneyimi",
    ],
    boxTitle: "Treatflow müşterilerine özel",
    boxText: "Treatflow müşterisi olarak web sitesi siparişinizde ayrıca şunu alırsınız:",
    creditAmount: "200 Euro",
    creditLabel: "hediye Treatflow kredisi",
    creditNote: "Treatflow aboneliğinizde kullanılabilir. Böylece salon yazılımınızda da tasarruf edersiniz.",
  },
  pricing: {
    title: "Şeffaf fiyatlar, gizli maliyet yok",
    description: "Adil ve net fiyatlara inanıyoruz. Küçük harfli maddeler yok.",
    badge: "Özel web sitesi projesi",
    price: { prefix: "", amount: "1.000", currency: "Euro'dan itibaren" },
    note: "Tek seferlik. Web sitesi yapımı için abonelik yok.",
    points: [
      "İsteklerinize göre özel tasarım",
      "Tüm cihazlarda duyarlı (responsive)",
      "Temel SEO optimizasyonu",
      "Dönüşüm odaklı yapı",
      "İletişim ve randevu entegrasyonu",
      "5 alt sayfaya kadar dahil",
      "Yasal bilgiler ve gizlilik politikası",
      "SSL şifreleme",
    ],
    customerLabel: "Treatflow müşterileri:",
    customerText: "200 Euro Treatflow kredisi dahil",
    cta: "Web sitesi projesi talep edin",
    footnote: "Bağlayıcı olmayan ilk görüşme. Danışmanlık ücretsizdir.",
  },
  process: {
    title: "Salon web siteniz nasıl hazırlanır",
    description: "İlk fikirden hazır web sitesine – dört basit adımda.",
    steps: [
      { step: "01", title: "İlk görüşme", desc: "Salonunuzu tanır, hedeflerinizi anlar ve kapsamı birlikte belirleriz." },
      { step: "02", title: "Konsept ve tasarım", desc: "Markanıza uyan özel bir tasarım konsepti hazırlarız." },
      { step: "03", title: "Geliştirme", desc: "Web siteniz profesyonelce geliştirilir ve içeriklerinizle doldurulur." },
      { step: "04", title: "Yayına alma", desc: "Onayınızın ardından site yayına girer. Yayın sürecinde yanınızdayız." },
    ],
  },
  faq: {
    title: "Web sitesi yapımı hakkında sık sorulan sorular",
    description: "Sipariş vermeden önce bilmeniz gereken her şey.",
    items: [
      {
        question: "Salon web sitemin hazırlanması ne kadar sürer?",
        answer:
          "Web siteniz genellikle 2-4 hafta içinde hazır olur. Kesin süre, kapsama ve içeriklerinizin ne zaman teslim edildiğine bağlıdır.",
      },
      {
        question: "Hazır metin ve fotoğraflarım olması gerekiyor mu?",
        answer:
          "Hayır, şart değil. Metinlerin yazılmasında size destek olur, görseller konusunda danışmanlık veririz. Salonunuzun profesyonel fotoğrafları elbette idealdir, ama en iyi çözümü birlikte buluruz.",
      },
      {
        question: "Mevcut alan adım kullanılabilir mi?",
        answer:
          "Evet, elbette. Zaten bir alan adınız varsa yeni web sitenizi onun üzerinde yayınlarız. Yoksa seçim ve kayıt işlemlerinde size yardımcı oluruz.",
      },
      {
        question: "Web sitesi Treatflow ile birlikte kullanılabilir mi?",
        answer:
          "Kesinlikle. Treatflow randevu bağlantınız, işlemleriniz ve çalışma saatleriniz doğrudan web sitesine entegre edilebilir. Böylece yeni müşteriler doğrudan kendi sitenizden randevu alır.",
      },
      {
        question: "Özel bir web sitesinin maliyeti nedir?",
        answer:
          "Özel web siteleri 1.000 Euro'dan başlar. Nihai fiyat kapsama ve istenen özelliklere bağlıdır. Treatflow müşterileri ayrıca 200 Euro Treatflow kredisi alır.",
      },
      {
        question: "Hosting ve bakımla da ilgileniyor musunuz?",
        answer:
          "Evet, isterseniz web sitenizin hosting ve teknik bakımını da üstleniriz. Böylece hiçbir şeyle uğraşmanız gerekmez.",
      },
      {
        question: "Web sitesini daha sonra kendim düzenleyebilir miyim?",
        answer:
          "Kuruluma bağlı olarak, metin ve görseller gibi basit değişiklikleri kendiniz yapabileceğiniz çözümler sunuyoruz. Büyük değişikliklerde size destek oluruz.",
      },
    ],
  },
  cta: {
    title: "Profesyonel salon web sitenize hazır mısınız?",
    description: "Salonunuz için mükemmel web sitesini birlikte oluşturalım. Bağlayıcı olmayan, ücretsiz danışmanlık alın.",
    primary: "Ücretsiz danışmanlık alın",
    email: "E-posta ile talep",
    checks: ["Bağlayıcı değil", "Kişisel danışmanlık", "Güzellik işletmelerinde uzman"],
  },
};
