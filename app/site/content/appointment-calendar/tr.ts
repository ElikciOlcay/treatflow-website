import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarTr: AppointmentCalendarContent = {
  meta: {
    title: "Güzellik Salonu Randevu Programı: Personel ve Oda Planlama",
    description:
      "Güzellik salonları ve estetik klinikler için randevu programı: personel ve oda bazlı takvim, online randevu, sürükle-bırak ve otomatik e-posta hatırlatmaları. Komisyon yok, 14 gün ücretsiz deneyin.",
    keywords: [
      "güzellik salonu randevu programı",
      "randevu takvimi güzellik salonu",
      "salon randevu programı",
      "güzellik merkezi randevu sistemi",
      "randevu defteri programı",
      "personel ve oda planlama",
      "estetik klinik randevu programı",
      "sürükle bırak randevu takvimi",
    ],
  },
  dates: { modified: "2026-10-28", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Güzellik Salonu Randevu Programı: Personel ve Oda Planlama",
      description:
        "Güzellik salonları için randevu takvimi: personel ve odalar için günlük görünüm, sürükle-bırak, online randevu ve otomatik hatırlatmalar.",
    },
    software: {
      name: "Güzellik salonları için Treatflow randevu takvimi",
      description:
        "Güzellik salonları için personel ve oda bazlı randevu takvimi; sürükle-bırak, online randevu ve otomatik hatırlatmalar.",
      featureList: [
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
    title: { before: "Salonunuz için randevu takvimi – ekibiniz ve ", highlight: "odalarınızla birlikte" },
    description:
      "Personel, odalar ve randevular tek ekranda – online randevu dahil. Randevuları sürükle-bırak ile taşıyın, çakışmaları baştan önleyin.",
    chips: ["Sürükle-bırak", "Ekip ve odalar", "Daha az randevuya gelmeme"],
    secondaryCta: { label: "Online randevu", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Güzellik salonunda randevular en iyi nasıl düzenlenir?",
        answer:
          "Treatflow randevuları, personeli ve odaları tek bir takvimde birleştirir. Günlük görünümde her çalışan veya oda kendi sütununda yer alır; böylece boş saatleri görür, çakışan randevuları önler ve değişiklikleri daha hızlı yönetirsiniz. Online randevu ve otomatik hatırlatmalar da telefon trafiğini ve randevuya gelmeyen müşteri sayısını azaltır.",
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
    title: "Bütün salonunuz için tek randevu programı",
    description: "Tüm randevular, çalışanlar ve odalar tek bakışta – kimin ne zaman müsait olduğunu anında görürsünüz.",
    items: [
      {
        icon: "users",
        title: "Ekip, odalar ve hizmetler",
        text: "Çalışanlarınızı, uygulama odalarınızı ve hizmetlerinizi ekleyin. Takvim her çalışan veya oda için ayrı bir sütun gösterir.",
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
      { title: "Ekibi, hizmetleri ve odaları tanımlayın", text: "Çalışanlarınızı, hizmetlerinizi ve odalarınızı çalışma saatleriyle birlikte ekleyin. Takvim her biri için ayrı bir sütun gösterir." },
      { title: "Randevuları ekleyin", text: "Randevuları kendiniz girin veya online randevuyu açın – müşterilerinizin aldığı randevular otomatik olarak takvimde görünür." },
      { title: "Hatırlatmalar otomatik gider", text: "Müşterileriniz randevu onayını ve hatırlatmayı e-postayla alır – sizin ayrıca bir şey göndermeniz gerekmez." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Salon planlaması için ihtiyacınız olan her şey – ekip, odalar ve hatırlatmalar tek takvimde.",
    items: [
      { icon: "users", title: "Ekip ve odalar", text: "Her çalışan veya oda için bir sütun. Dolu ve boş saatler tek bakışta.", points: ["Sütun görünümü", "Boş saatleri görün", "Çakışan randevu yok"] },
      { icon: "move", title: "Sürükle-bırak", text: "Randevuları taşıyın, uzatın veya değiştirin – form doldurmadan, uğraşmadan.", points: ["Saniyeler içinde taşıma", "Takvimde anında", "Tüm ekip için"] },
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
    description: "14 gün ücretsiz deneyin – kredi kartı gerekmez. Takvim, ekip planlama ve online randevu tek uygulamada.",
    secondary: { label: "Online randevu", href: { page: "online-booking" } },
  },
};
