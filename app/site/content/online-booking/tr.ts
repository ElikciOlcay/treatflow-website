import type { OnlineBookingContent } from "./types";

export const onlineBookingTr: OnlineBookingContent = {
  meta: {
    title: "Güzellik Salonu Online Randevu Sistemi",
    description:
      "Güzellik salonları ve lazer merkezleri için komisyonsuz online randevu sistemi. Müşterileriniz size özel bağlantıdan 7/24 randevu alır; randevu doğrudan takviminize düşer.",
    keywords: [
      "online randevu sistemi",
      "güzellik salonu online randevu",
      "online randevu programı",
      "salon randevu programı",
      "randevu linki",
      "7/24 online randevu",
      "bekleme listesi salon",
    ],
  },
  dates: { modified: "2026-10-02", published: "2024-06-01" },
  schema: {
    id: "online-buchungen",
    webPage: {
      name: "Güzellik Salonları için Online Randevu Sistemi",
      description:
        "Güzellik salonunuz için online randevu: müşteriler size özel bağlantı üzerinden 7/24 randevu alır. Randevular otomatik olarak takviminize düşer, randevu başına komisyon yoktur.",
    },
  },
  breadcrumb: "Online randevu",
  hero: {
    eyebrow: "Online randevu",
    eyebrowIcon: "link",
    title: { before: "Salonunuz için online ", highlight: "randevu" },
    description:
      "Size özel randevu bağlantısı – müşterileriniz günün her saatinde randevu alır. Randevular otomatik olarak takviminize düşer.",
    chips: ["7/24 randevu", "Komisyon yok", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Takvimi görün", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Güzellik salonları için hangi online randevu sistemi uygundur?",
        answer:
          "Treatflow, güzellik salonları için geliştirilmiş bir online randevu sistemi sunar: size özel randevu bağlantısı, 7/24 randevu, otomatik e-posta onayları ve bekleme listesi. Randevu başına komisyon yoktur; Booking paketinde aylık ₺1.990'dan başlar (KDV hariç), 14 gün ücretsiz denenebilir.",
      },
    ],
    image: {
      src: "/images/mockups/tr/online-buchung-hero.png",
      alt: "Treatflow online randevu sistemi – salona özel randevu bağlantısı",
    },
  },
  understand: {
    title: "Müşterileriniz randevusunu kendisi alır – siz işinize odaklanırsınız",
    description:
      "Size özel randevu bağlantısıyla müşteriler günün her saatinde randevu alabilir. Bitmeyen telefonlar ve uzayıp giden mesajlaşmalar sona erer.",
    items: [
      {
        icon: "calendar",
        title: "7/24 açık",
        text: "Randevu bağlantınız 7/24 erişilebilir. Randevuların %60'tan fazlası akşamları veya hafta sonları alınır.",
      },
      {
        icon: "bell",
        title: "Otomatik onay ve hatırlatma",
        text: "Müşteriniz randevu alır almaz onay e-postası gelir. Randevudan önce de bir e-posta hatırlatması gönderilir.",
      },
      {
        icon: "list-ordered",
        title: "Dolu günler için bekleme listesi",
        text: "Takviminiz doluysa müşteriler bekleme listesine yazılabilir. Bir saat boşalır boşalmaz otomatik olarak haber alırlar.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda size özel randevu bağlantısı.",
    steps: [
      { title: "Hizmetlerinizi ekleyin", text: "Hangi hizmetler için online randevu alınabileceğini, süresini ve fiyatını belirleyin. Müşteriler yalnızca boş saatleri görür." },
      { title: "Bağlantınızı paylaşın", text: "Randevu bağlantınızı Instagram biyografinizde, web sitenizde veya mesajlarda paylaşın. Yazdırılabilir bir QR kod da dahildir." },
      { title: "Randevular gelmeye başlar", text: "Yeni randevular otomatik olarak takviminizde görünür. Onaylar ve hatırlatmalar kendiliğinden gönderilir; müşteri bilgileri doğrudan müşteri kartına kaydedilir." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Randevu bağlantısı, diller, bekleme listesi ve indirim kodları – randevu başına komisyon olmadan.",
    items: [
      { icon: "link", title: "Size özel randevu bağlantısı", text: "Web sitenizde ve sosyal medyada paylaşabileceğiniz, salonunuzun adını ve görünümünü taşıyan bağlantı.", points: ["Salona özel bağlantı", "QR kod", "Salonunuzun görünümü"] },
      { icon: "languages", title: "Yedi dil", text: "Randevu sayfası müşterinizin dilinde açılır – ek ayar gerekmez.", points: ["DE, EN, NL, TR, PL, IT, RU", "Otomatik dil seçimi", "Dil engeli yok"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Online randevuda kapora veya tam ödeme.", points: ["Hizmet bazında ayar", "Kapora veya tam ödeme", "İşlem başına %2,69"], feature: "pay" },
      { icon: "list-ordered", title: "Bekleme listesi", text: "Takviminiz doluysa müşteriler bekleme listesine yazılır. Bir saat boşaldığında uygun müşterilere e-posta gider.", points: ["İptalde otomatik e-posta", "İki bildirim modu", "Panelden tek bakışta"] },
      { icon: "ticket", title: "İndirim kodları", text: "Yeni müşterilere ve kampanyalara özel kodlar – doğrudan online randevuda kullanılır.", points: ["Yeni müşteri ve kampanyalar", "Randevu sırasında kullanılır", "Kullanım istatistikleri"] },
      { icon: "bell", title: "Hatırlatmalar", text: "Randevudan önce e-posta hatırlatması. Müşteriler zamanında iptal edebilir, saat başka bir müşteriye açılır.", points: ["E-posta hatırlatmaları", "Esnek zamanlama", "Daha az gelmeyen müşteri"] },
      { icon: "calendar", title: "Esnek planlama", text: "Çalışma saatleri, hizmet süreleri, molalar ve izinler – yalnızca gerçekten müsait saatler gösterilir.", points: ["Çalışma saatleri", "Molalar ve izinler", "Çakışan randevu yok"] },
    ],
  },
  faq: {
    title: "Online randevu hakkında sıkça sorulan sorular",
    items: [
      {
        question: "Güzellik salonları için hangi online randevu sistemi uygundur?",
        answer:
          "Treatflow, güzellik salonları için geliştirilmiş bir online randevu sistemi sunar: size özel randevu bağlantısı, otomatik e-posta onayları, personel takvimleri ve müşteri kartlarıyla işlem kayıtlarına bağlantı. Aylık ₺1.990'dan başlar (KDV hariç).",
      },
      {
        question: "Salonum için online randevuyu nasıl kurarım?",
        answer:
          "Üç adımda: 1) hizmetlerinizi süre ve fiyatıyla ekleyin, 2) çalışma saatlerinizi ve müsaitliğinizi belirleyin, 3) randevu bağlantınızı Instagram'da, web sitenizde veya mesajlarda paylaşın. Kurulum 10 dakikadan kısa sürer.",
      },
      {
        question: "Güzellik salonları için online randevu sisteminin maliyeti nedir?",
        answer:
          "Treatflow'da online randevu, aylık ₺1.990'dan başlayan Booking paketine dahildir (yıllık ödemede ₺1.792/ay, KDV hariç). Randevu başına komisyon ve gizli maliyet yoktur; kredi kartı gerektirmeyen 14 günlük ücretsiz deneme sunulur.",
      },
      {
        question: "Müşteriler günün her saatinde randevu alabilir mi?",
        answer:
          "Evet. Randevu bağlantınız 7/24 erişilebilir. Müşteriler boş saatleri istedikleri zaman görüp randevu alabilir – akşamları ve hafta sonları da. Randevuların %60'tan fazlası çalışma saatleri dışında alınır.",
      },
      {
        question: "Randevu sistemi gelmeyen müşteri sayısını nasıl azaltır?",
        answer:
          "Randevudan önce sizin belirlediğiniz zamanlarda gönderilen otomatik e-posta hatırlatmalarıyla. Müşteri randevusunu hatırlar, gelemeyecekse iptal eder; boşalan saat başka bir müşteriye açılır. Böylece randevuya gelmeyen müşteri sayısı belirgin şekilde azalır.",
      },
      {
        question: "Tüm randevular doluysa ne olur?",
        answer:
          "Müşteriler bekleme listesine yazılarak ilgilerini bildirebilir. Bir randevu iptal edilirse uygun müşterilere boşalan saatlerle birlikte otomatik bir e-posta gider. Böylece hiçbir talep kaybolmaz.",
      },
      {
        question: "Müşteriler online randevu sırasında doğrudan ödeme yapabilir mi?",
        answer:
          "Evet. Treatflow Pay ile müşteriler randevu alırken kapora veya tam tutarı öder. Bunu hizmet bazında belirlersiniz. Ücret işlem başına %2,69'dur.",
        feature: "pay",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "treatflow-pay" }, title: "Treatflow Pay", description: "Kapora veya tam ödeme", feature: "pay" },
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Randevular doğrudan takviminize düşer" },
      { href: { page: "messaging" }, title: "Hatırlatmalar", description: "Otomatik onaylar ve hatırlatmalar" },
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Yeni randevu, mevcut müşteri kartına" },
    ],
  },
  cta: {
    title: "Online randevuya geçmeye hazır mısınız?",
    description: "14 gün ücretsiz deneyin – kredi kartı ve randevu başına komisyon olmadan.",
    secondary: { label: "Takvimi görün", href: { page: "appointment-calendar" } },
  },
};
