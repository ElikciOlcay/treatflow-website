import type { FooterContent } from "./types";

/**
 * Türkçe footer. `en.ts` ile aynı sütunlar; Treatflow Pay yok (Türkiye'de sunulmuyor).
 * Ek olarak TR'ye özel "Güzellik merkezleri" sayfası ve Rehber bağlantısı.
 */
export const footerTr: FooterContent = {
  tagline: "Dijital salon asistanınız. Avusturya'da geliştirildi.",
  instagramAria: "Instagram'da Treatflow",
  columns: [
    {
      sections: [
        {
          title: "Özellikler",
          links: [
            { href: { page: "appointment-calendar" }, label: "Randevu takvimi" },
            { href: { page: "online-booking" }, label: "Online randevu" },
            { href: { page: "client-records" }, label: "Müşteri takibi" },
            { href: { page: "forms" }, label: "Onam formları" },
            { href: { page: "try-forms" }, label: "Örnek formları deneyin" },
            { href: { page: "treatment-documentation" }, label: "İşlem kayıtları" },
            { href: { page: "messaging" }, label: "Hatırlatmalar" },
            { href: { page: "customer-workflows" }, label: "Müşteri otomasyonları" },
            { href: { page: "integrations" }, label: "Entegrasyonlar" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Sektörler",
          links: [
            { href: { page: "beauty-center-software" }, label: "Güzellik merkezleri" },
            { href: { page: "beauty-salon-software" }, label: "Güzellik salonları" },
            { href: { page: "laser-hair-removal-software" }, label: "Lazer ve IPL" },
            { href: { page: "permanent-makeup-software" }, label: "Kalıcı makyaj" },
            { href: { page: "aesthetic-clinic-software" }, label: "Medikal estetik merkezleri" },
            { href: { page: "nail-salon-software" }, label: "Tırnak salonları" },
            { href: { page: "foot-care-software" }, label: "Ayak bakımı" },
            { href: { page: "lash-studio-software" }, label: "Kirpik stüdyoları" },
            { href: { page: "tattoo-studio-software" }, label: "Dövme stüdyoları" },
            { href: { page: "spa-wellness-software" }, label: "Spa ve wellness" },
            { href: { page: "massage-software" }, label: "Masaj" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Ürün",
          links: [
            { href: { page: "pricing" }, label: "Fiyatlar" },
            { href: { page: "software-comparison" }, label: "Yazılım karşılaştırması" },
            { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
            { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
            { href: { page: "shop" }, label: "Mağaza" },
            { href: { page: "studio-website" }, label: "Salon web sitesi" },
            { special: "register", label: "Ücretsiz deneyin" },
            { special: "login", label: "Giriş yap" },
          ],
        },
      ],
    },
    {
      sections: [
        {
          title: "Şirket",
          links: [
            { href: { page: "about" }, label: "Hakkımızda" },
            { href: { page: "blog" }, label: "Blog" },
            { href: "/tr/rehber", label: "Rehber" },
            { href: { page: "news" }, label: "Yenilikler" },
            { href: { page: "try-features" }, label: "Özellikleri canlı deneyin" },
            { href: { page: "contact" }, label: "İletişim" },
          ],
        },
        {
          title: "Yasal",
          links: [
            { href: { page: "privacy" }, label: "Gizlilik Politikası" },
            { special: "cookie-settings", label: "Çerez ayarları" },
            { href: { page: "terms" }, label: "Kullanım Koşulları" },
            { href: { page: "imprint" }, label: "Künye" },
          ],
        },
      ],
    },
  ],
  popularTopicsTitle: "Popüler konular",
  popularTopics: [
    { href: { page: "online-booking" }, label: "Güzellik salonları için online randevu" },
    { href: { page: "treatment-documentation" }, label: "İşlem kaydı yazılımı" },
    { href: { page: "forms" }, label: "Dijital anamnez ve onam formları" },
    { href: { page: "messaging" }, label: "Randevu hatırlatmaları" },
    { href: { page: "appointment-calendar" }, label: "Salon randevu programı" },
    { href: { page: "client-records" }, label: "Salonlar için müşteri takibi" },
    { href: { page: "aesthetic-clinic-software" }, label: "Estetik klinik yazılımı" },
    { href: { page: "software-comparison" }, label: "Salon yazılımı karşılaştırması" },
  ],
  rights: "Tüm hakları saklıdır.",
};
