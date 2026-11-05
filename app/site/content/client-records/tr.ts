import type { ClientRecordsContent } from "./types";

export const clientRecordsTr: ClientRecordsContent = {
  meta: {
    title: "Güzellik Salonu Müşteri Takip Programı",
    description:
      "Güzellik salonları için müşteri takip programı: dijital müşteri kartı, işlem geçmişi, notlar ve öncesi-sonrası fotoğraflar tek yerde. AB sunucularında, KVKK ve GDPR uyumlu.",
    keywords: [
      "müşteri takip programı",
      "güzellik salonu müşteri takibi",
      "dijital müşteri kartı",
      "güzellik merkezi müşteri takip programı",
      "müşteri kayıt programı",
      "işlem geçmişi programı",
      "KVKK uyumlu müşteri kaydı",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "kundenverwaltung",
    webPage: {
      name: "Güzellik Salonları için Müşteri Takip Programı: Veriler ve Geçmiş",
      description:
        "Güzellik salonunuz için profesyonel müşteri takibi: işlem geçmişi, müşteri notları ve fotoğraflar tek yerde. KVKK ve GDPR uyumlu.",
    },
    software: {
      name: "Treatflow müşteri takibi",
      description: "Güzellik salonları için işlem geçmişi, notlar ve fotoğraflarla dijital müşteri kartları.",
      price: "1490",
      currency: "TRY",
    },
  },
  breadcrumb: "Müşteri takibi",
  hero: {
    eyebrow: "Dijital müşteri kartları",
    eyebrowIcon: "users",
    title: { before: "Tüm müşteri verileri ", highlight: "tek yerde" },
    description: "İşlem geçmişi, hızlı arama ve kolay veri aktarımıyla sınırsız müşteri kartı. AB sunucularında, KVKK ve GDPR uyumlu.",
    chips: ["KVKK ve GDPR uyumlu", "Veri aktarımı", "Sınırsız müşteri"],
    secondaryCta: { label: "Dijital formlar", href: { page: "forms" } },
    capsules: [
      {
        question: "Güzellik salonunda müşteri takibi için hangi program uygundur?",
        answer:
          "Treatflow, güzellik salonları için geliştirilmiş bir müşteri takip programıdır: dijital müşteri kartları, işlem geçmişi, fotoğraflar ve AB sunucularında KVKK ve GDPR uyumlu barındırma. Tüm müşteri bilgilerinize bilgisayardan, tabletten ve akıllı telefondan ulaşırsınız. 14 gün ücretsiz deneyin.",
      },
    ],
    image: {
      src: "/images/mockups/tr/kundenverwaltung-overview.png",
      alt: "Treatflow müşteri takibi – arama ve detay görünümüyle genel bakış",
    },
  },
  understand: {
    title: "Tüm müşteri verileri tek yerde",
    description:
      "Her müşteri için iletişim bilgileri, işlem geçmişi ve fotoğrafların yer aldığı tek bir kart – her an, her cihazdan erişilebilir.",
    items: [
      {
        icon: "shield",
        title: "Güvenli, KVKK ve GDPR uyumlu",
        text: "Müşteri verileriniz AB sunucularında şifreli olarak saklanır. Bilgi alma ve silme talepleri her zaman karşılanabilir.",
      },
      {
        icon: "upload",
        title: "Mevcut verilerinizi aktarın",
        text: "Elinizde bir müşteri listesi mi var? Excel veya CSV dosyasından kolayca içe aktarın. Ekibimiz geçişte size yardımcı olur.",
      },
      {
        icon: "database",
        title: "Sınırsız müşteri",
        text: "İster 50 ister 5.000 müşteri – sınır yok, kişi başı ek ücret yok.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda dijital müşteri kartları.",
    steps: [
      { title: "Müşterileri ekleyin veya aktarın", text: "Yeni müşterileri tek tek ekleyin veya mevcut listenizi Excel ya da CSV'den içe aktarın. Mükerrer kayıtlar otomatik olarak tespit edilir." },
      { title: "Kartı doldurun", text: "İletişim bilgilerini, alerjileri, notları ve fotoğrafları karta kaydedin. Doldurulan formlar karta otomatik eklenir." },
      { title: "Sonraki ziyarette her şey hazır", text: "İşlemden önce müşteri kartını açın – geçen sefer ne yapıldığını ve nelere dikkat etmeniz gerektiğini hemen görürsünüz." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Sınırsız dijital müşteri kartı – veri aktarımı, arama ve KVKK ile GDPR uyumu dahil.",
    items: [
      { icon: "database", title: "Sınırsız müşteri", text: "Salonunuzun ihtiyaç duyduğu kadar kart – kişi başına ek ücret yok.", points: ["Müşteri sınırı yok", "Hızından bir şey kaybetmez", "Otomatik yedekleme"] },
      { icon: "upload", title: "Veri aktarımı", text: "Mevcut listelerinizi Excel veya CSV'den aktarın. Geçiş desteği dahil.", points: ["Excel ve CSV", "Alan eşleştirme", "Mükerrer kayıt tespiti"] },
      { icon: "shield", title: "KVKK ve GDPR uyumlu", text: "AB'de saklama, şifreleme, talep üzerine bilgi verme ve silme.", points: ["AB sunucuları", "Şifreli", "Silme hakkı"] },
      { icon: "search", title: "Hızlı arama", text: "Müşteri kartlarını ad, telefon, e-posta veya işleme göre saniyeler içinde bulun.", points: ["Tam metin arama", "Filtreler", "Sıralama"] },
      { icon: "camera", title: "Fotoğraflar ve geçmiş", text: "Öncesi-sonrası fotoğraflar ve işlemler ayrı klasörlerde değil, doğrudan müşteri kartında.", points: ["Kartta fotoğraflar", "İşlem geçmişi", "Notlar"] },
      { icon: "users", title: "Her an yanınızda", text: "Akıllı telefon, tablet ve bilgisayarda tarayıcıdan çalışır – ayrıca uygulama kurmanız gerekmez.", points: ["Akıllı telefon", "Uygulama koltuğunda tablet", "Bilgisayar"] },
    ],
  },
  faq: {
    title: "Müşteri takibi hakkında sıkça sorulan sorular",
    items: [
      {
        question: "Güzellik salonunda müşteri takibi için hangi program uygundur?",
        answer:
          "Treatflow, güzellik salonları için geliştirilmiş bir müşteri takip programıdır. Dijital müşteri kartları, işlem geçmişi, fotoğraflar, notlar ve AB'de KVKK ile GDPR uyumlu veri saklama sunar. 14 gün ücretsiz deneyin.",
      },
      {
        question: "Güzellik salonları için dijital müşteri kartı nedir?",
        answer:
          "Dijital müşteri kartı; müşteri bilgilerini, işlem geçmişini, öncesi-sonrası fotoğrafları ve notları tek bir yerde toplayan elektronik kayıttır. Kâğıt kartların aksine KVKK ve GDPR uyumlu saklanır, aranabilir ve her cihazdan erişilebilir.",
      },
      {
        question: "Dijital müşteri kartları KVKK ve GDPR uyumlu mu?",
        answer:
          "Evet. Treatflow tüm müşteri verilerini AB sunucularında şifreli olarak saklar ve KVKK ile GDPR gerekliliklerini karşılar. Müşterileriniz verileri hakkında istedikleri zaman bilgi alabilir ve silinmesini talep edebilir.",
      },
      {
        question: "Bir salonun müşteri kartında hangi bilgiler bulunmalı?",
        answer:
          "Profesyonel bir müşteri kartında iletişim bilgileri, işlem geçmişi, alerjiler ve hassasiyetler, öncesi-sonrası fotoğraflar, doldurulmuş formlar (anamnez, onam), notlar ve randevu geçmişi bulunmalıdır.",
      },
      {
        question: "Mevcut müşteri verilerimi aktarabilir miyim?",
        answer:
          "Evet. Treatflow, müşteri verilerinin Excel ve CSV dosyalarından içe aktarılmasını destekler. Kurulum ekibimiz, verilerinizi önceki sisteminizden ücretsiz olarak taşımanıza yardımcı olur.",
      },
      {
        question: "Treatflow müşterilerime otomatik mesaj gönderebilir mi?",
        answer:
          "Evet. Treatflow'un Booking paketinde mesaj otomasyonu dahildir. Randevu hatırlatmalarını, doğum günü mesajlarını ve işlem sonrası takip e-postalarını bir kez ayarlarsınız; müşteri bağlılığı ek çaba harcamadan güçlenir.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Randevudan doğrudan müşteri kartına" },
      { href: { page: "forms" }, title: "Onam formları", description: "Anamnez formları müşteri kartına kaydedilir" },
      { href: { page: "treatment-documentation" }, title: "İşlem kayıtları", description: "Tüm işlem geçmişi müşteri kartında" },
    ],
  },
  cta: {
    title: "Müşteri kayıtlarınızı düzene sokmaya hazır mısınız?",
    description: "14 gün ücretsiz deneyin – kredi kartı gerekmez. Veri aktarımı, geçmiş ve KVKK ile GDPR uyumu tek uygulamada.",
    secondary: { label: "Dijital formlar", href: { page: "forms" } },
  },
};
