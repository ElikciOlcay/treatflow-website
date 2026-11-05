import type { PricingPageContent } from "./types";

/** Türkei: ₺-Preise (wie home/tr.ts), 30 Tage Test. */
export const pricingTr: PricingPageContent = {
  meta: {
    title: "Güzellik Salonu Yazılımı Fiyatları",
    description:
      "Treatflow fiyatları Türkiye'de: Basic ₺1.490, Booking ₺1.990 (lansman, ilk 100 işletme). 30 gün ücretsiz deneyin, kredi kartı gerekmez. Randevu komisyonu yok.",
    keywords: [
      "güzellik salonu yazılımı fiyat",
      "salon yazılımı fiyatları",
      "online randevu sistemi fiyat",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Fiyatlar",
  capsule: {
    question: "Treatflow'un fiyatı ne kadar?",
    answer:
      "Basic aylık ₺1.490 (müşteri takibi, formlar, işlem kayıtları), Booking aylık ₺1.990 (randevu takvimi, online randevu ve hatırlatmalar dahil). Randevu başına komisyon yok, 30 gün ücretsiz deneme.",
  },
  schema: {
    webPage: {
      name: "Güzellik Salonu Yazılımı Fiyatları",
      description: "Şeffaf Treatflow fiyatları: Basic aylık ₺1.490, Booking aylık ₺1.990.",
    },
    priceValidUntil: "2026-12-31",
    offers: [
      { name: "Basic", price: "1490", currency: "TRY" },
      { name: "Booking", price: "1990", currency: "TRY" },
    ],
  },
  comparison: {
    title: "Pakette neler var?",
    subtitle: "İki paketi ayrıntılı karşılaştırın ve işletmenize uygun olanı bulun.",
    vatNote: "Tüm fiyatlar KDV hariçtir.",
    featureLabel: "Özellik",
    basicLabel: "Basic (₺1.490)",
    bookingLabel: "Booking (₺1.990)",
    rows: [
      { label: "Müşteri takibi", basic: true, booking: true },
      { label: "Dijital imzalı formlar", basic: true, booking: true },
      { label: "İşlem kayıtları ve sesli not", basic: true, booking: true },
      { label: "Öncesi-sonrası fotoğraflar", basic: true, booking: true },
      { label: "Ekip notları ve görevler", basic: true, booking: true },
      { label: "Mağaza ve ürünler", basic: true, booking: true },
      { label: "Raporlar", basic: true, booking: true },
      { label: "Çalışanlar ve roller", basic: true, booking: true },
      { label: "E-posta desteği", basic: true, booking: true },
      { label: "Randevu takvimi (personel ve odalar)", basic: false, booking: true },
      { label: "Komisyonsuz online randevu", basic: false, booking: true },
      { label: "Bekleme listesi", basic: false, booking: true },
      { label: "E-posta hatırlatmaları", basic: false, booking: true },
      { label: "Müşteri otomasyonları", basic: false, booking: true },
      { label: "İndirim kodları", basic: false, booking: true },
      { label: "Çok dilli randevu sayfası", basic: false, booking: true },
      { label: "Entegrasyonlar (Google Takvim, Zapier, yapay zekâ asistanları)", basic: false, booking: true },
      { label: "Öncelikli destek", basic: false, booking: true },
    ],
    cta: "30 gün ücretsiz deneyin",
  },
  why: {
    title: "Neden Treatflow?",
    subtitle: "Gizli ücretler ve komisyonlar yerine şeffaf sabit fiyatlar.",
    stats: [
      { value: "%0", label: "Randevu başına komisyon" },
      { value: "₺0", label: "Kurulum ücreti" },
      { value: "30 gün", label: "ücretsiz deneme" },
      { value: "İstediğiniz zaman", label: "iptal" },
    ],
  },
  faq: {
    title: "Fiyatlarla ilgili sık sorulan sorular",
    subtitle: "Treatflow fiyatları hakkında bilmeniz gereken her şey.",
    items: [
      {
        question: "Treatflow'un fiyatı ne kadar?",
        answer:
          "Treatflow iki paketten oluşur: Müşteri takibi, formlar ve işlem kayıtları için aylık ₺1.490'dan Basic. Randevu takvimi, online randevu ve otomatik hatırlatmaları da içeren aylık ₺1.990'dan Booking. İki paketi de 30 gün ücretsiz deneyebilirsiniz.",
      },
      {
        question: "Gizli ücret var mı?",
        answer:
          "Hayır. Treatflow komisyon, kurulum ücreti veya gizli ek maliyet olmadan şeffaf sabit fiyatlarla çalışır. Gördüğünüz fiyatı ödersiniz.",
      },
      {
        question: "İstediğim zaman iptal edebilir miyim?",
        answer:
          "Evet. Aylık ödemede, fatura döneminin sonunda geçerli olmak üzere istediğiniz zaman iptal edebilirsiniz. Asgari sözleşme süresi yoktur.",
      },
      {
        question: "Ücretsiz salon yazılımı var mı?",
        answer:
          "Fresha gibi bazı sağlayıcılar ücretsiz temel sürümler sunar, ancak gelirlerini ödeme ücretleri ve premium özelliklerden elde eder. Treatflow gizli maliyet olmadan şeffaf sabit fiyatlar sunar – tüm özelliklerle aylık ₺1.490'dan başlayan fiyatlarla.",
      },
      {
        question: "Booking paketi değer mi?",
        answer:
          "Online randevuya, otomatik e-posta hatırlatmalarına ve dijital randevu takvimine ihtiyacınız varsa evet. Booking paketiyle gelmeyen müşteri sayısı belirgin şekilde azalır ve telefonda daha az zaman harcarsınız.",
      },
    ],
  },
};
