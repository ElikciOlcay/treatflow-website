import type { OnlineBookingContent } from "./types";

export const onlineBookingTr: OnlineBookingContent = {
  meta: {
    title: "Online Randevu Sistemi",
    description:
      "Güzellik ve lazer için online randevu sistemi. Komisyon yok. Randevu sürecin başlangıcıdır: form, işlem, takip devam eder.",
    keywords: [
      "online randevu sistemi",
      "güzellik salonu online randevu",
      "salon randevu programı",
      "randevu bağlantısı",
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
        "Güzellik salonunuz için online randevu: müşteriler kişisel bağlantınız üzerinden 7/24 randevu alır. Randevular otomatik olarak takviminize düşer, randevu başına komisyon yoktur.",
    },
  },
  breadcrumb: "Online randevu",
  hero: {
    eyebrow: "Online randevu",
    eyebrowIcon: "link",
    title: { before: "Salonunuz için online ", highlight: "randevu" },
    description:
      "Kişisel randevu bağlantınız – müşteriler günün her saatinde randevu alır. Randevular otomatik olarak takviminize düşer.",
    chips: ["7/24 randevu", "Komisyon yok", { text: "Treatflow Pay", feature: "pay" }],
    secondaryCta: { label: "Takvimi görün", href: { page: "appointment-calendar" } },
    capsules: [
      {
        question: "Güzellik salonları için hangi online randevu sistemi uygundur?",
        answer:
          "Treatflow, güzellik salonları için geliştirilmiş bir online randevu sistemi sunar: kişisel randevu bağlantısı, 7/24 randevu, otomatik e-posta onayları ve bekleme listesi. Randevu başına komisyon yoktur; Booking paketinde aylık ₺1.990'dan (KDV hariç), 30 gün ücretsiz deneme.",
      },
    ],
    image: {
      src: "/images/mockups/online-buchung-hero.png",
      alt: "Treatflow online randevu sistemi – kişisel randevu bağlantısı",
    },
  },
  understand: {
    title: "Müşterileriniz kendi randevusunu alır – siz işleminize odaklanırsınız",
    description:
      "Kişisel randevu bağlantınızla müşteriler günün her saatinde randevu seçebilir. Telefon trafiği ve uzayan mesajlaşmalar sona erer.",
    items: [
      {
        icon: "calendar",
        title: "Günün her saatinde açık",
        text: "Randevu bağlantınız 7/24 erişilebilir. Randevuların %60'tan fazlası akşamları veya hafta sonları gelir.",
      },
      {
        icon: "bell",
        title: "Otomatik onay ve hatırlatma",
        text: "Müşteriniz randevu aldıktan hemen sonra onay alır. Randevudan önce de bir e-posta hatırlatması gönderilir.",
      },
      {
        icon: "list-ordered",
        title: "Dolu günler için bekleme listesi",
        text: "Takviminiz doluysa müşteriler bekleme listesine yazılabilir. Bir saat boşalır boşalmaz otomatik olarak bilgilendirilirler.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda kendi randevu bağlantınız.",
    steps: [
      { title: "İşlemlerinizi ekleyin", text: "Hangi işlemlerin online alınabileceğini, ne kadar sürdüğünü ve fiyatını belirleyin. Müşteriler yalnızca boş saatleri görür." },
      { title: "Bağlantınızı paylaşın", text: "Kişisel randevu bağlantınızı Instagram'da, web sitenizde veya mesajlarda paylaşın. Yazdırılabilir bir QR kod da dahildir." },
      { title: "Randevular gelir", text: "Yeni randevular otomatik olarak takviminizde görünür. Onaylar ve hatırlatmalar kendiliğinden gönderilir; müşteri bilgileri doğrudan müşteri kartına kaydedilir." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Randevu bağlantısı, diller, bekleme listesi ve indirim kodları – randevu başına komisyon olmadan.",
    items: [
      { icon: "link", title: "Kişisel randevu bağlantısı", text: "Web sitenizde ve sosyal medyada paylaşabileceğiniz, salonunuzun kimliğini taşıyan bağlantınız.", points: ["Size özel bağlantı", "QR kod", "Salon kimliği"] },
      { icon: "languages", title: "Altı dil", text: "Randevu sayfası müşterinizin diline uyum sağlar – ek ayar gerekmez.", points: ["DE, EN, TR, PL, IT, RU", "Otomatik dil", "Dil engeli yok"] },
      { icon: "wallet", title: "Treatflow Pay", text: "Online randevuda kapora veya tam ödeme.", points: ["Hizmet bazında ayar", "Kapora veya tam ödeme", "İşlem başına %2,69"], feature: "pay" },
      { icon: "list-ordered", title: "Bekleme listesi", text: "Takviminiz doluysa müşteriler bekleme listesine yazılır. Bir saat boşaldığında uygun müşterilere e-posta gider.", points: ["İptalde otomatik e-posta", "İki bildirim modu", "Panelde genel bakış"] },
      { icon: "ticket", title: "İndirim kodları", text: "Yeni müşteriler ve kampanyalar için kodlar – doğrudan online randevuda kullanılır.", points: ["Yeni müşteri ve kampanyalar", "Randevuda kullanım", "Kullanım istatistikleri"] },
      { icon: "bell", title: "Hatırlatmalar", text: "Randevudan önce e-posta hatırlatması. Müşteriler zamanında iptal edebilir ve saat yeniden boşa çıkar.", points: ["E-posta hatırlatmaları", "Esnek zamanlama", "Daha az gelmeyen müşteri"] },
      { icon: "calendar", title: "Esnek planlama", text: "Çalışma saatleri, işlem süreleri, molalar ve tatiller – yalnızca gerçekten müsait saatler sunulur.", points: ["Çalışma saatleri", "Molalar ve tatiller", "Çift rezervasyon yok"] },
    ],
  },
  faq: {
    title: "Online randevu hakkında sık sorulan sorular",
    items: [
      {
        question: "Güzellik salonları için hangi online randevu sistemi uygundur?",
        answer:
          "Treatflow, güzellik salonları için geliştirilmiş bir online randevu sistemi sunar: kişisel randevu bağlantısı, otomatik e-posta onayları, personel takvimleri ve müşteri kayıtları ile işlem kayıtlarına bağlantı. Aylık ₺1.990'dan (KDV hariç).",
      },
      {
        question: "Salonum için online randevuyu nasıl kurarım?",
        answer:
          "Üç adımda: 1) işlemlerinizi süre ve fiyatıyla ekleyin, 2) çalışma saatlerinizi ve müsaitliğinizi belirleyin, 3) kişisel randevu bağlantınızı Instagram'da, web sitenizde veya mesajlarda paylaşın. Kurulum 10 dakikadan kısa sürer.",
      },
      {
        question: "Güzellik salonları için online randevu sisteminin maliyeti nedir?",
        answer:
          "Treatflow'da online randevu, aylık ₺1.990'dan başlayan Booking paketine dahildir (yıllık ödemede ₺1.792/ay, KDV hariç). Randevu başına komisyon ve gizli maliyet yoktur; kredi kartı gerektirmeyen 30 günlük ücretsiz deneme sunulur.",
      },
      {
        question: "Müşteriler günün her saatinde randevu alabilir mi?",
        answer:
          "Evet. Kişisel randevu bağlantınız 7/24 erişilebilir. Müşteriler boş saatleri istedikleri zaman görüp randevu alabilir – akşamları ve hafta sonları da. Randevuların %60'tan fazlası çalışma saatleri dışında alınır.",
      },
      {
        question: "Randevu sistemi gelmeyen müşteri sayısını nasıl azaltır?",
        answer:
          "Randevudan önce sizin belirlediğiniz zamanlarda gönderilen otomatik e-posta hatırlatmalarıyla. Müşteriler hatırlatılır ve gerekirse iptal edebilir; böylece saat başka biri için boşa çıkar. Bu, gelmeyen müşteri sayısını belirgin şekilde azaltır.",
      },
      {
        question: "Tüm randevular doluysa ne olur?",
        answer:
          "Bekleme listesi sayesinde müşteriler boş saatlere ilgi bildirebilir. Mevcut bir randevu iptal edilirse uygun müşteriler yeni boşalan saatlerle birlikte otomatik olarak bir e-posta alır. Böylece hiçbir talep kaybolmaz.",
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
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Yeni randevu, tanıdık müşteri kartı" },
    ],
  },
  cta: {
    title: "Otomatik randevulara hazır mısınız?",
    description: "30 gün ücretsiz deneyin – kredi kartı ve randevu başına komisyon olmadan.",
    secondary: { label: "Takvimi görün", href: { page: "appointment-calendar" } },
  },
};
