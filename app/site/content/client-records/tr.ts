import type { ClientRecordsContent } from "./types";

export const clientRecordsTr: ClientRecordsContent = {
  meta: {
    title: "Müşteri Takip Programı",
    description:
      "Güzellik merkezi müşteri takip programı: kart, randevu, form, işlem, fotoğraf ve işlem sonrası takip. Genel amaçlı satış yazılımı değil, müşteri ve işlem dosyası.",
    keywords: [
      "müşteri takip programı",
      "güzellik salonu müşteri takibi",
      "dijital müşteri kartı",
      "güzellik merkezi CRM",
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
    description: "Geçmiş, veri aktarımı ve aramayla sınırsız müşteri kartı. AB sunucularında, KVKK ve GDPR uyumlu.",
    chips: ["KVKK ve GDPR uyumlu", "Veri aktarımı", "Sınırsız müşteri"],
    secondaryCta: { label: "Dijital formlar", href: { page: "forms" } },
    capsules: [
      {
        question: "Güzellik salonunda müşteri takibi için hangi uygulama uygundur?",
        answer:
          "Treatflow, güzellik salonları için geliştirilmiş bir müşteri takibi sunar: dijital müşteri kartları, işlem geçmişi, fotoğraflar ve AB sunucularında KVKK ve GDPR uyumlu barındırma. Tüm müşteri verilerine bilgisayar, tablet ve akıllı telefondan erişilebilir. 30 gün ücretsiz deneyin.",
      },
    ],
    image: {
      src: "/images/mockups/kundenverwaltung-overview.png",
      alt: "Treatflow müşteri takibi – arama ve detay görünümüyle genel bakış",
    },
  },
  understand: {
    title: "Tüm müşteri verileri tek yerde",
    description:
      "Her müşteri için iletişim bilgileri, işlem geçmişi ve fotoğraflarla bir kart – her zaman, her cihazdan erişilebilir.",
    items: [
      {
        icon: "shield",
        title: "Güvenli, KVKK ve GDPR uyumlu",
        text: "Müşteri verileriniz AB sunucularında şifreli olarak saklanır. Bilgi ve silme talepleri her zaman karşılanabilir.",
      },
      {
        icon: "upload",
        title: "Mevcut verilerinizi aktarın",
        text: "Zaten bir müşteri listeniz mi var? Excel veya CSV'den kolayca içe aktarın. Ekibimiz geçişte size yardımcı olur.",
      },
      {
        icon: "database",
        title: "Sınırsız müşteri",
        text: "50 ya da 5.000 müşteri – sınır yok, kişi başına ek ücret yok.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda dijital müşteri kartları.",
    steps: [
      { title: "Müşterileri ekleyin veya aktarın", text: "Yeni müşterileri elle oluşturun veya mevcut listenizi Excel ya da CSV'den içe aktarın. Mükerrer kayıtlar otomatik olarak tespit edilir." },
      { title: "Kartı doldurun", text: "İletişim bilgilerini, alerjileri, notları ve fotoğrafları karta kaydedin. Doldurulan formlar otomatik olarak eklenir." },
      { title: "Sonraki ziyarette her şey hazır", text: "İşlemden önce müşteri kartını açın – son seferde ne yapıldığını ve nelere dikkat etmeniz gerektiğini hemen görürsünüz." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Sınırsız dijital müşteri kartları – veri aktarımı, arama ve KVKK ile GDPR uyumu dahil.",
    items: [
      { icon: "database", title: "Sınırsız müşteri", text: "Salonunuzun ihtiyaç duyduğu kadar kart – kişi başına ek ücret yok.", points: ["Müşteri sınırı yok", "Hızlı kalır", "Otomatik yedekleme"] },
      { icon: "upload", title: "Veri aktarımı", text: "Mevcut listelerinizi Excel veya CSV'den aktarın. Geçiş desteği dahil.", points: ["Excel ve CSV", "Alan eşleştirme", "Mükerrer kayıt tespiti"] },
      { icon: "shield", title: "KVKK ve GDPR uyumlu", text: "AB'de saklama, şifreleme, talep üzerine bilgi verme ve silme.", points: ["AB sunucuları", "Şifreli", "Silme hakkı"] },
      { icon: "search", title: "Hızlı arama", text: "Kartları isim, telefon, e-posta veya işleme göre saniyeler içinde bulun.", points: ["Tam metin arama", "Filtreler", "Sıralama"] },
      { icon: "camera", title: "Fotoğraflar ve geçmiş", text: "Öncesi-sonrası fotoğraflar ve işlemler ayrı klasörlerde değil, doğrudan müşteri kartında.", points: ["Kartta fotoğraflar", "İşlem geçmişi", "Notlar"] },
      { icon: "users", title: "Her zaman yanınızda", text: "Akıllı telefon, tablet ve bilgisayarda web tabanlı – ek uygulama kurmanız gerekmez.", points: ["Akıllı telefon", "İşlem koltuğunda tablet", "Bilgisayar"] },
    ],
  },
  faq: {
    title: "Müşteri takibi hakkında sık sorulan sorular",
    items: [
      {
        question: "Güzellik salonunda müşteri takibi için hangi uygulama uygundur?",
        answer:
          "Treatflow, güzellik salonları için geliştirilmiş bir müşteri takip programıdır. Uygulama dijital müşteri kartları, işlem geçmişi, fotoğraflar, notlar ve AB'de KVKK ile GDPR uyumlu veri saklama sunar. 30 gün ücretsiz deneyin.",
      },
      {
        question: "Güzellik salonları için dijital müşteri kartı nedir?",
        answer:
          "Dijital müşteri kartları; tüm müşteri verilerini, işlem geçmişini, öncesi-sonrası fotoğrafları ve notları tek bir yerde saklayan bir yazılımdır. Kâğıt kartların aksine KVKK ve GDPR uyumludur, aranabilir ve her cihazdan erişilebilir.",
      },
      {
        question: "Dijital müşteri kartları KVKK ve GDPR uyumlu mu?",
        answer:
          "Evet. Treatflow tüm müşteri verilerini AB sunucularında şifreli olarak saklar ve KVKK ile GDPR gerekliliklerini karşılar. Müşteriler verilerini istedikleri zaman görüntüleyebilir ve sildirebilir.",
      },
      {
        question: "Bir salonun müşteri kartında hangi bilgiler bulunmalı?",
        answer:
          "Profesyonel bir müşteri kartında iletişim bilgileri, işlem geçmişi, alerji ve intoleranslar, öncesi-sonrası fotoğraflar, doldurulmuş formlar (anamnez, onam), notlar ve randevu geçmişi bulunmalıdır.",
      },
      {
        question: "Mevcut müşteri verilerimi aktarabilir miyim?",
        answer:
          "Evet. Treatflow, müşteri verilerinin Excel ve CSV dosyalarından içe aktarılmasını destekler. Kurulum ekibimiz, verilerinizi önceki sisteminizden ücretsiz olarak taşımanıza yardımcı olur.",
      },
      {
        question: "Treatflow müşterilerime otomatik mesaj gönderebilir mi?",
        answer:
          "Evet. Treatflow'un Booking paketinde yerleşik mesaj otomasyonu bulunur. Otomatik randevu hatırlatmaları, doğum günü mesajları ve işlem sonrası takip mesajlarını e-posta ile ayarlayarak müşteri bağlılığını ek çaba harcamadan güçlendirebilirsiniz.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Randevudan doğrudan müşteri kartına" },
      { href: { page: "forms" }, title: "Onam formları", description: "Anamnez formları müşteri kartına kaydedilir" },
      { href: { page: "treatment-documentation" }, title: "İşlem kayıtları", description: "Müşteri kartında geçmiş" },
    ],
  },
  cta: {
    title: "Düzenli müşteri kayıtlarına hazır mısınız?",
    description: "30 gün ücretsiz deneyin – kredi kartı gerekmez. Veri aktarımı, geçmiş ve KVKK ile GDPR uyumu tek uygulamada.",
    secondary: { label: "Dijital formlar", href: { page: "forms" } },
  },
};
