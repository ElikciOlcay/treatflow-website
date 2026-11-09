import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarTr: AppointmentCalendarContent = {
  meta: {
    title: "Güzellik Salonu Randevu Programı: Tek Başınıza veya Ekiple",
    description:
      "Güzellik salonu randevu programı, tek başınıza veya ekiple: online randevu, sürükle-bırak, e-posta hatırlatmaları, personel ve oda sütunları. Komisyonsuz.",
    keywords: [
      "güzellik salonu randevu programı",
      "randevu takvimi güzellik salonu",
      "salon randevu programı",
      "tek kişilik salon randevu programı",
      "serbest güzellik uzmanı randevu takvimi",
      "güzellik merkezi randevu sistemi",
      "randevu defteri programı",
      "personel ve oda planlama",
      "estetik klinik randevu programı",
      "sürükle bırak randevu takvimi",
    ],
  },
  dates: { modified: "2026-11-09", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Güzellik Salonu Randevu Programı: Tek Başınıza veya Ekiple",
      description:
        "Tek kişilik salonlar ve ekipler için güzellik salonu randevu takvimi: sürükle-bırak, online randevu, otomatik hatırlatmalar, personel ve oda sütunları.",
    },
    software: {
      name: "Güzellik salonları için Treatflow randevu takvimi",
      description:
        "Güzellik salonları için randevu takvimi – tek başınıza veya ekiple: sürükle-bırak, online randevu, otomatik hatırlatmalar, personel ve oda sütunları.",
      featureList: [
        "Tek kişilik salonlar ve ekipler için randevu takvimi",
        "Her personel veya oda için ayrı sütunlu günlük görünüm",
        "Doluluğu ve boş saatleri görme",
        "Personel ve odalarda çakışan randevuları önleme",
        "Randevuları sürükle-bırak ile taşıma",
        "Günlük, haftalık ve aylık görünüm",
        "Online randevu ve otomatik hatırlatmalar",
      ],
      price: "1990",
      currency: "TRY",
      rating: true,
    },
  },
  breadcrumb: "Randevu takvimi",
  hero: {
    eyebrow: "Randevu planlama ve takvim",
    eyebrowIcon: "calendar",
    title: { before: "Salonunuz için randevu takvimi – ", highlight: "tek başınıza veya ekibinizle" },
    description:
      "Online randevu, hatırlatmalar ve sürükle-bırak özelliğiyle randevu takviminiz – tek başınıza çalışıyorsanız ideal. Salonunuz büyüdüğünde her çalışan ve her oda kendi sütununu alır.",
    chips: ["Tek başınıza veya ekiple", "Sürükle-bırak", "Daha az randevuya gelmeme"],
    secondaryCta: { label: "Online randevu", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Güzellik salonunda randevular en iyi nasıl düzenlenir?",
        answer:
          "Treatflow randevuları, online randevu sistemini ve hatırlatmaları tek bir takvimde toplar – ister tek başınıza ister ekiple çalışın. Tek başınıza çalışıyorsanız gününüzü tüm randevularıyla tek bakışta görürsünüz. Ekiple çalışıyorsanız günlük görünüm her çalışanı veya odayı kendi sütununda gösterir; böylece boş saatleri görür ve çakışan randevuları önlersiniz. Online randevu ve otomatik hatırlatmalar da telefon trafiğini ve randevuya gelmeyen müşteri sayısını azaltır.",
      },
      {
        question: "Estetik klinikler için hangi randevu programı uygundur?",
        answer:
          "Treatflow; personel ve oda bazlı takvimi, konsültasyon ve uygulamalar için online randevuyu ve e-posta hatırlatmalarını bir araya getirir. Randevular komisyonsuz olarak doğrudan takvime düşer.",
      },
    ],
    image: {
      src: "/images/mockups/tr/kalender-overview.png",
      alt: "Treatflow randevu takvimi – personel ve odalarla günlük görünüm",
    },
  },
  understand: {
    title: "Salonunuzla birlikte büyüyen randevu takvimi",
    description: "İster tek başınıza ister ekiple çalışın: tüm randevular tek bakışta – ne zaman boş saatiniz olduğunu anında görürsünüz.",
    items: [
      {
        icon: "calendar-days",
        title: "Tek başınıza veya ekiple",
        text: "Tek başınıza çalışıyorsanız gününüzü tüm randevularıyla birlikte görürsünüz. Çalışanlar veya uygulama odaları eklendiğinde her kişi ve her oda kendi sütununu alır.",
      },
      {
        icon: "move",
        title: "Sürükle-bırak ile taşıma",
        text: "Plan değiştiğinde randevuyu yeni saate sürüklemeniz yeterli – silip yeniden oluşturmanıza gerek yok.",
      },
      {
        icon: "bell",
        title: "Otomatik hatırlatmalar",
        text: "Müşterileriniz randevudan önce e-postayla hatırlatma alır. Unutulan randevular belirgin şekilde azalır.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda çalışan bir salon takvimi.",
    steps: [
      { title: "Hizmetleri ve çalışma saatlerini girin", text: "Hizmetlerinizi ve çalışma saatlerinizi ekleyin. Ekibiniz veya birden fazla odanız varsa onları da ekleyin – her kişi ve her oda kendi sütununu alır." },
      { title: "Randevuları ekleyin", text: "Randevuları kendiniz girin veya online randevuyu açın – müşterilerinizin aldığı randevular otomatik olarak takvimde görünür." },
      { title: "Hatırlatmalar otomatik gider", text: "Müşterileriniz randevu onayını ve hatırlatmayı e-postayla alır – sizin ayrıca bir şey göndermeniz gerekmez." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Randevu planlaması için ihtiyacınız olan her şey – tek kişilik salondan ekibe kadar, online randevu ve hatırlatmalar tek takvimde.",
    items: [
      { icon: "users", title: "Tek başınıza veya ekiple", text: "Tek başınıza çalışırken gününüzü tek bakışta görürsünüz. Ekiple her çalışan ve her oda kendi sütununu alır.", points: ["Tek kişilik salonlar için", "Ekip ve odalar için sütunlar", "Çakışan randevu yok"] },
      { icon: "move", title: "Sürükle-bırak", text: "Randevuları taşıyın, uzatın veya değiştirin – form doldurmadan, uğraşmadan.", points: ["Saniyeler içinde taşıma", "Takvimde anında", "Yeniden oluşturmaya gerek yok"] },
      { icon: "layout-grid", title: "Günlük, haftalık, aylık", text: "Günlük, haftalık ve aylık görünüm arasında geçiş yapın – o an hangisine ihtiyacınız varsa.", points: ["Günlük görünüm", "Haftalık", "Aylık"] },
      { icon: "bell", title: "Otomatik hatırlatmalar", text: "Her randevudan önce e-posta hatırlatması. Daha az gelmeyen müşteri, daha az telefon.", points: ["E-posta hatırlatmaları", "Esnek zamanlama", "İptal bağlantısı"] },
      { icon: "calendar", title: "Online randevu", text: "Randevular doğrudan takvime düşer. Çakışma yok, onay otomatik.", points: ["Size özel randevu bağlantısı", "Anında takvimde", "Komisyon yok"] },
      { icon: "clock", title: "Daha az idari iş", text: "Daha az telefon, daha net süreçler – takvimle uğraşmak yerine müşterilerinize daha çok zaman.", points: ["Daha az telefon", "Net zaman dilimleri", "Hızlı genel bakış"] },
    ],
  },
  faq: {
    title: "Salon randevu takvimi hakkında sıkça sorulan sorular",
    items: [
      {
        question: "Randevu programı tek başıma çalışırken de uygun mu?",
        answer:
          "Evet. Birçok güzellik uzmanı Treatflow ile tek başına çalışıyor. Gününüzü tüm randevularıyla görürsünüz; müşterileriniz boş saatlerinize doğrudan online randevu alır, onay ve hatırlatma onlara otomatik olarak gönderilir. Personel ve oda sütunlarına ancak salonunuz büyüdüğünde ihtiyaç duyarsınız.",
      },
      {
        question: "Güzellik salonunda randevular en iyi nasıl düzenlenir?",
        answer:
          "En verimli yol, Treatflow gibi salonlara özel bir randevu programıdır. Online randevu sayesinde müşteriler 7/24 randevu alabilir, otomatik e-posta hatırlatmaları randevuya gelmeyen müşteri sayısını belirgin şekilde azaltır ve sade takvim görünümüyle her şey her an gözünüzün önündedir.",
      },
      {
        question: "Güzellik salonları için randevu programının maliyeti nedir?",
        answer:
          "Treatflow, online randevulu takvimi Booking paketinde aylık ₺1.990'dan sunar (yıllık ödemede ₺1.792/ay, KDV hariç). 14 gün ücretsiz deneyin, kredi kartı gerekmez. Gizli maliyet ve randevu başına komisyon yoktur.",
      },
      {
        question: "Güzellik salonları için ücretsiz bir randevu programı var mı?",
        answer:
          "Ücretsiz programlar var – ancak genellikle kısıtlamalarla, reklamlarla ya da platform üzerinden alınan her randevuya komisyonla. Randevu defteri veya Excel tablosu ücretsizdir ama online randevu almaz, hatırlatma göndermez ve müşteri kartlarınızla bağlantılı değildir. Treatflow'u kredi kartı olmadan 14 gün ücretsiz deneyebilirsiniz; sonrasında online randevulu takvim aylık ₺1.990'dır ve randevu başına komisyon yoktur.",
      },
      {
        question: "Randevu programı, takvim veya online randevu sistemi – farkı ne?",
        answer:
          "Salonun günlük işleyişinde bu terimler çoğu zaman aynı anlamda kullanılır: randevu programı veya takvim, sizin ve ekibinizin randevuları yönettiği ekrandır. Online randevu sistemi ise müşterilerin kendi başına randevu aldığı kısımdır. Treatflow'da ikisi tek yerde – online randevular hatırlatmalar ve müşteri kartlarıyla birlikte doğrudan takvime düşer.",
      },
      {
        question: "Müşterilerim online randevu alabilir mi?",
        answer:
          "Evet. Web sitenizde, Instagram'da veya mesajlarda paylaşabileceğiniz size özel bir randevu bağlantısı alırsınız. Müşteriler günün her saatinde hizmet ve saat seçebilir. Yeni randevular anında takvimde görünür, onaylar otomatik olarak e-posta ile gönderilir.",
      },
      {
        question: "Salonumda gelmeyen müşteri sayısını nasıl azaltırım?",
        answer:
          "Otomatik e-posta hatırlatmaları, gelmeyen müşteri sayısını azaltmanın en etkili yoludur. Treatflow, randevudan önce sizin belirlediğiniz zamanlarda hatırlatma gönderir; böylece çok daha az müşteri randevusunu unutur.",
      },
      {
        question: "Bir salon randevu takviminde hangi özellikler olmalı?",
        answer:
          "Güzellik salonları için iyi bir randevu takvimi; online randevu, günlük/haftalık/aylık görünüm, personel ve oda planlama, otomatik e-posta hatırlatmaları, sürükle-bırak ve müşteri kartlarıyla işlem kayıtlarına bağlantı sunmalıdır.",
      },
      {
        question: "Birden fazla ekip üyesini ve odayı nasıl planlarım?",
        answer:
          "Treatflow'un günlük görünümü çalışanları veya odaları ayrı sütunlarda gösterir. Boş saatleri görür, çakışan randevuları önler ve son dakika değişikliklerini daha kolay yönetirsiniz.",
      },
      {
        question: "Personel ve odalarda çakışan randevuları nasıl önlerim?",
        answer:
          "Treatflow, personel ve odaların doluluğunu yan yana gösterir. Boş ve dolu saatler aynı anda görünür; böylece darboğazları ve çakışmaları önceden fark edersiniz.",
      },
      {
        question: "Estetik klinikler için hangi randevu programı uygundur?",
        answer:
          "Treatflow; personel ve oda bazlı takvimi, konsültasyon ve uygulamalar için online randevuyu ve e-posta hatırlatmalarını bir araya getirir. Yeni randevular, randevu başına komisyon olmadan doğrudan takvime düşer.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Online randevu", description: "Size özel bağlantıyla 7/24 randevu" },
      { href: { page: "messaging" }, title: "Hatırlatmalar", description: "Otomatik e-posta hatırlatmaları" },
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Randevudan doğrudan müşteri kartına" },
    ],
  },
  cta: {
    title: "Stressiz randevu yönetimine hazır mısınız?",
    description: "14 gün ücretsiz deneyin – kredi kartı gerekmez. Takvim, online randevu ve hatırlatmalar tek uygulamada; tek başınıza veya ekiple.",
    secondary: { label: "Online randevu", href: { page: "online-booking" } },
  },
};
