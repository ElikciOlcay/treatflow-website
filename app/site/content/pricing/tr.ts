import type { PricingPageContent } from "./types";

/** Türkei: ₺-Preise (wie home/tr.ts), 14 Tage Test. */
export const pricingTr: PricingPageContent = {
  meta: {
    title: "Güzellik Salonu Yazılımı Fiyatları",
    description:
      "Treatflow Türkiye fiyatları: Basic aylık ₺1.490, Booking aylık ₺1.990 (ilk 100 işletmeye özel lansman fiyatı). 14 gün ücretsiz deneyin, kredi kartı gerekmez. Randevu başına komisyon yok.",
    keywords: [
      "güzellik salonu yazılımı fiyat",
      "salon yazılımı fiyatları",
      "online randevu sistemi fiyat",
      "güzellik salonu programı fiyatları",
      "salon programı aylık ücret",
    ],
  },
  dates: { modified: "2026-11-05", published: "2024-06-01" },
  breadcrumb: "Fiyatlar",
  capsule: {
    question: "Treatflow'un fiyatı ne kadar?",
    answer:
      "Basic aylık ₺1.490 (müşteri takibi, formlar, işlem kayıtları), Booking aylık ₺1.990 (bunlara ek olarak randevu takvimi, online randevu ve hatırlatmalar). Randevu başına komisyon yok, 14 gün ücretsiz deneme.",
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
    subtitle: "İki paketi ayrıntılı karşılaştırın, işletmenize uygun olanı seçin.",
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
    cta: "14 gün ücretsiz deneyin",
  },
  why: {
    title: "Neden Treatflow?",
    subtitle: "Gizli ücret ve komisyon yerine şeffaf, sabit fiyatlar.",
    stats: [
      { value: "%0", label: "Randevu başına komisyon" },
      { value: "₺0", label: "Kurulum ücreti" },
      { value: "14 gün", label: "ücretsiz deneme" },
      { value: "Taahhütsüz", label: "istediğiniz zaman iptal" },
    ],
  },
  faq: {
    title: "Fiyatlarla ilgili sıkça sorulan sorular",
    subtitle: "Treatflow fiyatları hakkında bilmeniz gereken her şey.",
    items: [
      {
        question: "Treatflow'un fiyatı ne kadar?",
        answer:
          "Treatflow'da iki paket vardır: Müşteri takibi, formlar ve işlem kayıtları için aylık ₺1.490 olan Basic ve bunlara ek olarak randevu takvimi, online randevu ve otomatik hatırlatmaları içeren aylık ₺1.990 olan Booking. İki paketi de 14 gün ücretsiz deneyebilirsiniz.",
      },
      {
        question: "Gizli ücret var mı?",
        answer:
          "Hayır. Treatflow'da komisyon, kurulum ücreti veya gizli ek maliyet yoktur; şeffaf, sabit fiyatlar geçerlidir. Gördüğünüz fiyatı ödersiniz.",
      },
      {
        question: "İstediğim zaman iptal edebilir miyim?",
        answer:
          "Evet. Aylık ödemede, fatura döneminin sonunda geçerli olmak üzere istediğiniz zaman iptal edebilirsiniz. Taahhüt veya asgari sözleşme süresi yoktur.",
      },
      {
        question: "Ücretsiz salon programı var mı?",
        answer:
          "Fresha gibi bazı sağlayıcılar ücretsiz temel sürüm sunar, ancak gelirlerini ödeme komisyonlarından ve ücretli ek özelliklerden elde eder. Treatflow ise gizli maliyet olmadan şeffaf, sabit fiyatlar sunar – tüm özellikleriyle aylık ₺1.490'dan başlayan fiyatlarla.",
      },
      {
        question: "Booking paketi buna değer mi?",
        answer:
          "Online randevuya, otomatik e-posta hatırlatmalarına ve dijital randevu takvimine ihtiyacınız varsa kesinlikle. Booking paketiyle randevuya gelmeyen müşteri sayısı belirgin şekilde azalır, telefonda daha az zaman harcarsınız.",
      },
    ],
  },
};
