import type { AppointmentCalendarContent } from "./types";

export const appointmentCalendarTr: AppointmentCalendarContent = {
  meta: {
    title: "Randevu Takvimi: Güzellik Salonu için Personel ve Oda Planlama",
    description:
      "Güzellik salonları ve estetik klinikleri için randevu programı: personel ve oda sütunlu takvim, online randevu, sürükle-bırak ve otomatik e-posta hatırlatmaları. Komisyon yok, 30 gün ücretsiz deneyin.",
    keywords: [
      "randevu takvimi güzellik salonu",
      "salon randevu programı",
      "güzellik merkezi randevu sistemi",
      "personel ve oda planlama",
      "estetik klinik randevu programı",
      "sürükle bırak randevu takvimi",
    ],
  },
  dates: { modified: "2026-10-28", published: "2024-06-01" },
  schema: {
    id: "terminkalender",
    webPage: {
      name: "Randevu Takvimi: Güzellik Salonu için Personel ve Oda Planlama",
      description:
        "Güzellik salonları için randevu takvimi: personel ve odalar için günlük görünüm, sürükle-bırak, online randevu ve otomatik hatırlatmalar.",
    },
    software: {
      name: "Güzellik salonları için Treatflow randevu takvimi",
      description:
        "Güzellik salonları için personel ve oda sütunlu randevu takvimi; sürükle-bırak, online randevu ve otomatik hatırlatmalar.",
      featureList: [
        "Her personel veya oda için ayrı sütunlu günlük görünüm",
        "Doluluk ve boş kapasiteyi görme",
        "Personel ve odalarda çift rezervasyonu önleme",
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
    title: { before: "Salonunuz için randevu takvimi – ekibiniz ve ", highlight: "odalarınız için" },
    description:
      "Güzellik salonunuz için randevu planlama aracı: personel, odalar ve randevular tek ekranda, online randevu dahil. Sürükle-bırak ile taşıyın, çift rezervasyonları önleyin.",
    chips: ["Sürükle-bırak", "Ekip ve odalar", "Daha az gelmeyen müşteri"],
    secondaryCta: { label: "Online randevu", href: { page: "online-booking" } },
    capsules: [
      {
        question: "Güzellik salonunda randevular en iyi nasıl düzenlenir?",
        answer:
          "Treatflow randevuları, personeli ve odaları tek bir takvimde birleştirir. Günlük görünümde her kişi veya oda kendi sütununda yer alır; böylece boş kapasiteyi görür, çift rezervasyonları önler ve değişiklikleri daha hızlı yönetirsiniz. Online randevu ve otomatik hatırlatmalar da telefon trafiğini ve gelmeyen müşteri sayısını azaltır.",
      },
      {
        question: "Estetik klinikleri için hangi randevu programı uygundur?",
        answer:
          "Treatflow; personel ve oda sütunlu takvimi, konsültasyon ve işlemler için online randevuyu ve e-posta hatırlatmalarını bir araya getirir. Randevular komisyonsuz olarak doğrudan takvime düşer.",
      },
    ],
    image: {
      src: "/images/mockups/kalender-overview.png",
      alt: "Treatflow randevu takvimi – personel ve odalarla günlük görünüm",
    },
  },
  understand: {
    title: "Tüm salonunuz için randevu programı",
    description: "Tüm randevular, personel ve odalar tek bakışta – kimin ne zaman müsait olduğunu anında görürsünüz.",
    items: [
      {
        icon: "users",
        title: "Ekip, odalar ve hizmetler",
        text: "Ekip üyelerinizi, işlem odalarınızı ve hizmetlerinizi ekleyin. Takvim her kişi veya oda için ayrı bir sütun gösterir.",
      },
      {
        icon: "move",
        title: "Sürükle-bırak ile taşıma",
        text: "Plan değiştiğinde randevuyu yeni saate sürüklemeniz yeterli – silip yeniden oluşturmanıza gerek yok.",
      },
      {
        icon: "bell",
        title: "Otomatik hatırlatmalar",
        text: "Müşterileriniz randevudan önce e-posta ile hatırlatma alır. Bu, unutulan randevuları belirgin şekilde azaltır.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda çalışan bir salon takvimi.",
    steps: [
      { title: "Ekibi, hizmetleri ve odaları tanımlayın", text: "Personelinizi, işlemlerinizi ve odalarınızı çalışma saatleriyle birlikte ekleyin. Takvim her biri için ayrı bir sütun gösterir." },
      { title: "Randevuları ekleyin", text: "Randevuları kendiniz girin veya online randevuyu açın – müşterilerinizin rezervasyonları otomatik olarak takvimde görünür." },
      { title: "Hatırlatmalar otomatik gider", text: "Müşterileriniz randevu onayını ve hatırlatmayı e-posta ile alır – elle bir şey göndermeniz gerekmez." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Salon planlaması için her şey – ekip, odalar ve hatırlatmalar tek takvimde.",
    items: [
      { icon: "users", title: "Ekip ve odalar", text: "Her ekip üyesi veya oda için bir sütun. Doluluk ve boş saatler tek bakışta.", points: ["Sütun görünümü", "Boş kapasiteyi görün", "Çift rezervasyon yok"] },
      { icon: "move", title: "Sürükle-bırak", text: "Randevuları taşıyın, uzatın veya değiştirin – form doldurmadan, karmaşa olmadan.", points: ["Saniyeler içinde taşıma", "Takvimde anında", "Tüm ekip için"] },
      { icon: "layout-grid", title: "Günlükten aylığa görünüm", text: "Günlük, haftalık ve aylık görünüm arasında geçiş yapın – o an neye ihtiyacınız varsa.", points: ["Günlük görünüm", "Haftalık", "Aylık"] },
      { icon: "bell", title: "Otomatik hatırlatmalar", text: "Her randevudan önce e-posta hatırlatması. Daha az gelmeyen müşteri, daha az arama.", points: ["E-posta hatırlatmaları", "Esnek zamanlama", "İptal bağlantısı"] },
      { icon: "calendar", title: "Online randevu", text: "Rezervasyonlar doğrudan takvime düşer. Çift rezervasyon yok, onay otomatik.", points: ["Kişisel randevu bağlantısı", "Anında takvimde", "Komisyon yok"] },
      { icon: "clock", title: "Daha az idari iş", text: "Daha az telefon, daha net süreçler – takvime değil işlemlere daha fazla zaman.", points: ["Daha az telefon", "Net zaman dilimleri", "Hızlı genel bakış"] },
    ],
  },
  faq: {
    title: "Salon randevu takvimi hakkında sık sorulan sorular",
    items: [
      {
        question: "Güzellik salonunda randevular en iyi nasıl düzenlenir?",
        answer:
          "Treatflow gibi özel bir randevu programı en verimli yoldur. Online randevu sayesinde müşteriler 7/24 randevu alabilir, otomatik e-posta hatırlatmaları gelmeyen müşteri sayısını belirgin şekilde azaltır ve sade takvim görünümü size her an tam bir genel bakış sunar.",
      },
      {
        question: "Güzellik salonları için randevu programının maliyeti nedir?",
        answer:
          "Treatflow, online randevulu takvimi Booking paketinde aylık ₺1.990'dan sunar (yıllık ödemede ₺1.792/ay, KDV hariç). 30 gün ücretsiz deneyin, kredi kartı gerekmez. Gizli maliyet ve randevu başına komisyon yoktur.",
      },
      {
        question: "Güzellik salonları için ücretsiz bir randevu planlayıcı var mı?",
        answer:
          "Ücretsiz planlayıcılar var – ancak genellikle kısıtlamalarla, reklamlarla veya pazaryeri modeli üzerinden randevu başına komisyonla. Kâğıt ajanda ya da Excel tablosu ücretsizdir ama online randevu alamaz, hatırlatma gönderemez ve müşteri kayıtlarınıza bağlanamaz. Treatflow'u kredi kartı olmadan 30 gün ücretsiz deneyebilirsiniz; sonrasında online randevulu takvim aylık ₺1.990'dır ve randevu başına komisyon yoktur.",
      },
      {
        question: "Randevu planlayıcı, takvim veya randevu sistemi – fark nedir?",
        answer:
          "Salonun günlük işleyişinde üçü de neredeyse aynı anlama gelir: planlayıcı veya takvim, sizin ve ekibinizin randevuları yönettiği görünümdür. Randevu sistemi ise müşterilerin kendi başlarına online randevu aldığı kısımdır. Treatflow'da ikisi tek bir yerdedir – online randevular hatırlatmalar ve müşteri kayıtlarıyla birlikte doğrudan takvime düşer.",
      },
      {
        question: "Müşterilerim online randevu alabilir mi?",
        answer:
          "Evet. Web sitenizde, Instagram'da veya mesajlarda paylaşabileceğiniz kişisel bir randevu bağlantısı alırsınız. Müşteriler günün her saatinde işlem ve saat seçebilir. Yeni randevular anında takvimde görünür, onaylar otomatik olarak e-posta ile gönderilir.",
      },
      {
        question: "Salonumda gelmeyen müşteri sayısını nasıl azaltırım?",
        answer:
          "Otomatik e-posta hatırlatmaları, gelmeyen müşteri sayısını azaltmanın en etkili yoludur. Treatflow, randevudan önce sizin belirlediğiniz zamanlarda hatırlatma gönderir; böylece çok daha az müşteri randevusunu unutur.",
      },
      {
        question: "Bir salon randevu takviminde hangi özellikler olmalı?",
        answer:
          "Güzellik salonları için iyi bir randevu takvimi; online randevu, günlük/haftalık/aylık görünüm, personel ve oda planlama, otomatik e-posta hatırlatmaları, sürükle-bırak ve müşteri kayıtları ile işlem kayıtlarına bağlantı sunmalıdır.",
      },
      {
        question: "Birden fazla ekip üyesini ve odayı nasıl planlarım?",
        answer:
          "Treatflow'un günlük görünümü personeli veya odaları ayrı sütunlarda gösterir. Boş kapasiteyi görür, çift rezervasyonları önler ve son dakika değişikliklerini daha kolay koordine edersiniz.",
      },
      {
        question: "Personel ve odalarda çift rezervasyonu nasıl önlerim?",
        answer:
          "Treatflow, personel ve odaların doluluğunu yan yana gösterir. Boş ve dolu saatler aynı anda görünür; böylece darboğazlar ve çift rezervasyonlar erkenden önlenir.",
      },
      {
        question: "Estetik klinikleri için hangi randevu programı uygundur?",
        answer:
          "Treatflow; personel ve oda sütunlu takvimi, konsültasyon ve işlemler için online randevuyu ve e-posta hatırlatmalarını bir araya getirir. Yeni randevular, randevu başına komisyon olmadan doğrudan takvime düşer.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "online-booking" }, title: "Online randevu", description: "Randevu bağlantınızla 7/24" },
      { href: { page: "messaging" }, title: "Hatırlatmalar", description: "Otomatik e-posta hatırlatmaları" },
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Randevudan doğrudan müşteri kartına" },
    ],
  },
  cta: {
    title: "Stressiz randevu planlamaya hazır mısınız?",
    description: "30 gün ücretsiz deneyin – kredi kartı gerekmez. Takvim, ekip planlama ve online randevu tek uygulamada.",
    secondary: { label: "Online randevu", href: { page: "online-booking" } },
  },
};
