import type { StudioWebsiteContent } from "./types";

export const studioWebsiteTr: StudioWebsiteContent = {
  meta: {
    title: "Güzellik Salonları için Özel Web Sitesi Tasarımı",
    description:
      "Güzellik salonunuz, lazer merkeziniz veya güzellik işletmeniz için size özel web sitesi: profesyonel, mobil uyumlu ve randevu getirmeye odaklı. 1.000 Euro'dan başlayan fiyatlarla.",
    keywords: [
      "güzellik salonu web sitesi",
      "güzellik salonu web tasarım",
      "güzellik merkezi web sitesi",
      "lazer epilasyon merkezi web sitesi",
      "tırnak salonu web sitesi",
      "kalıcı makyaj stüdyosu web sitesi",
    ],
  },
  schema: {
    serviceName: "Güzellik salonları için özel web sitesi",
    serviceDescription:
      "Güzellik salonları ve güzellik işletmeleri için profesyonel, özel tasarım web siteleri. Randevu ve yeni müşteri kazanmak için optimize edilmiştir.",
    serviceType: "Web tasarım",
    areaServed: ["TR"],
    priceDescription: "1.000 Euro'dan itibaren özel web sitesi",
  },
  emailHref: `mailto:hello@treatflow.io?subject=${encodeURIComponent("Web sitesi projesi talebi")}`,
  hero: {
    badge: "Treatflow'dan yeni hizmet",
    title: { before: "", highlight: "Güzellik salonları", after: " için özel web siteleri" },
    lead: "Profesyonel, modern ve randevu odaklı. Web siteniz, yeni müşteri kazanmada en güçlü kanalınız olur.",
    sub: "Sadece güzel görünen siteler yapmıyoruz. Güven veren ve müşteri getiren siteler yapıyoruz.",
    primaryCta: "Ücretsiz danışmanlık alın",
    emailCta: "E-posta ile talep",
    checks: ["1.000 Euro'dan başlayan fiyatlar", "Size özel tasarım", "2–4 haftada yayında"],
  },
  demo: {
    badge: "Canlı örneği inceleyin (Almanca)",
    title: "Salon web siteniz böyle görünebilir",
    description: "Kendiniz görün: Bu örnek siteyi hayali bir premium güzellik stüdyosu için hazırladık.",
    href: "/demo/skin-atelier",
    imageAlt: "Skin Atelier – Treatflow'un güzellik salonları için demo web sitesi (Almanca)",
    overlayLabel: "Demo web sitesi",
    overlayTitle: "Skin Atelier Münih",
    hoverCta: "Demoyu görün",
    cardTitle: "Özel demo web sitesi",
    cardText: "Randevu entegrasyonu, hizmetler, müşteri yorumları ve daha fazlasıyla premium tasarım",
    cardCta: "Canlı inceleyin",
  },
  why: {
    title: "Salonunuzun neden profesyonel bir web sitesine ihtiyacı var",
    description:
      "Müşterileriniz randevu almadan önce internette araştırır. Profesyonel bir web sitesi hem dijital kartvizitiniz hem de yeni müşteri kazanmak için en güçlü aracınızdır.",
    stats: [
      { value: "%97", label: "önce internette arıyor", desc: "Neredeyse tüm müşteriler randevu almadan önce salonu Google'da arar." },
      { value: "%75", label: "kararını web sitesine göre veriyor", desc: "Web sitenizin kalitesi salonunuza duyulan güveni etkiler." },
      { value: "3 kat", label: "daha fazla talep", desc: "Profesyonel web sitesi olan salonlar belirgin şekilde daha fazla randevu talebi alır." },
    ],
  },
  services: {
    title: "Web sitenizde neler var",
    description: "Her site salonunuza özel tasarlanır. Hazır şablon yok, kaliteden taviz yok.",
    items: [
      {
        icon: "palette",
        title: "Özel tasarım",
        desc: "Site oluşturucu yok, hazır şablon yok. Salonunuz, markanıza uyan ve güven veren bir tasarıma kavuşur.",
      },
      {
        icon: "smartphone",
        title: "Mobil uyumlu",
        desc: "Ziyaretçilerinizin %80'inden fazlası telefondan girer. Siteniz her cihazda kusursuz görünür.",
      },
      {
        icon: "search",
        title: "SEO altyapısı",
        desc: "Temiz teknik altyapı, hızlı yükleme ve optimize içerik sayesinde salonunuz Google'da bulunur.",
      },
      {
        icon: "mouse-pointer-click",
        title: "Randevu odaklı",
        desc: "Her sayfa, ziyaretçiyi talep veya randevuya dönüştürmek için tasarlanır.",
      },
      {
        icon: "calendar-days",
        title: "Randevu entegrasyonu",
        desc: "Treatflow randevu bağlantınız, iletişim formunuz veya “Hemen ara” butonunuz doğrudan sitede.",
      },
      {
        icon: "globe",
        title: "Her uzmanlık alanına uygun",
        desc: "Cilt bakımı, lazer, Hydrafacial, kalıcı makyaj, microneedling, tırnak, kirpik ve daha fazlası.",
      },
    ],
  },
  advantage: {
    badge: "Özel avantaj",
    title: "Treatflow ile birlikte ideal",
    description:
      "Web siteniz Treatflow'a bağlandığında daha da güçlü olur. Randevu bağlantısı, hizmetler ve çalışma saatleri doğrudan Treatflow'dan eklenebilir.",
    points: [
      "Online randevu bağlantısı doğrudan sitede",
      "Hizmetler ve fiyatlar web sitesinde",
      "Otomatik güncelleme mümkün",
      "İlk tıklamadan randevuya kesintisiz müşteri deneyimi",
    ],
    boxTitle: "Treatflow müşterilerine özel",
    boxText: "Treatflow müşterisi olarak web sitesi siparişinizde ayrıca şunu kazanırsınız:",
    creditAmount: "200 Euro",
    creditLabel: "hediye Treatflow kredisi",
    creditNote: "Treatflow aboneliğinizde kullanabilirsiniz. Böylece salon programınızdan da tasarruf edersiniz.",
  },
  pricing: {
    title: "Şeffaf fiyatlar, gizli maliyet yok",
    description: "Adil ve net fiyatlardan yanayız. Sürpriz yok, dipnotlarda gizli madde yok.",
    badge: "Özel web sitesi projesi",
    price: { prefix: "", amount: "1.000", currency: "Euro'dan itibaren" },
    note: "Tek seferlik. Web sitesi yapımı için abonelik yok.",
    points: [
      "İsteklerinize göre özel tasarım",
      "Tüm cihazlarda mobil uyumlu (responsive)",
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
    footnote: "İlk görüşme ücretsiz ve bağlayıcı değildir.",
  },
  process: {
    title: "Salon web siteniz nasıl hazırlanır",
    description: "İlk fikirden yayındaki siteye – dört basit adımda.",
    steps: [
      { step: "01", title: "İlk görüşme", desc: "Salonunuzu tanır, hedeflerinizi anlar ve kapsamı birlikte belirleriz." },
      { step: "02", title: "Konsept ve tasarım", desc: "Markanıza uyan özel bir tasarım konsepti hazırlarız." },
      { step: "03", title: "Geliştirme", desc: "Web siteniz profesyonelce geliştirilir ve içeriklerinizle doldurulur." },
      { step: "04", title: "Yayına alma", desc: "Onayınızın ardından site yayına girer. Yayın sürecinde yanınızdayız." },
    ],
  },
  faq: {
    title: "Web sitesi yapımı hakkında sıkça sorulan sorular",
    description: "Sipariş vermeden önce bilmeniz gereken her şey.",
    items: [
      {
        question: "Salon web sitemin hazırlanması ne kadar sürer?",
        answer:
          "Web siteniz genellikle 2–4 hafta içinde hazır olur. Kesin süre, projenin kapsamına ve içeriklerinizi ne zaman ilettiğinize bağlıdır.",
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
          "Özel web siteleri 1.000 Euro'dan başlar. Net fiyat, kapsama ve istediğiniz özelliklere göre belirlenir. Treatflow müşterileri ayrıca 200 Euro Treatflow kredisi kazanır.",
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
    description: "Salonunuz için en iyi web sitesini birlikte oluşturalım. Ücretsiz ve bağlayıcı olmayan bir ön görüşme ayarlayın.",
    primary: "Ücretsiz danışmanlık alın",
    email: "E-posta ile talep",
    checks: ["Bağlayıcı değil", "Kişisel danışmanlık", "Güzellik işletmelerinde uzman"],
  },
};
