import type { NavigationContent } from "./types";

/**
 * Türkçe navigasyon. `en.ts` ile aynı yapı; Türkiye'de sunulmayan özellikler
 * (Treatflow Pay, WhatsApp, kasa, hediye çeki) yok. Ek olarak TR'ye özel
 * "Güzellik merkezleri" sayfası sektörlerin başında.
 */
export const navigationTr: NavigationContent = {
  featuresLabel: "Özellikler",
  featureGroups: [
    {
      title: "Randevular",
      items: [
        { href: { page: "appointment-calendar" }, label: "Randevu takvimi", desc: "Günlük, haftalık ve aylık görünüm", icon: "calendar", color: "text-indigo-600 bg-indigo-100" },
        { href: { page: "online-booking" }, label: "Online randevu", desc: "Size özel bağlantıyla 7/24 randevu", icon: "link", color: "text-rose-600 bg-rose-100" },
        { href: { page: "messaging" }, label: "Hatırlatmalar", desc: "Otomatik e-posta hatırlatmaları", icon: "bell", color: "text-purple-600 bg-purple-100" },
        { href: { page: "customer-workflows" }, label: "Müşteri otomasyonları", desc: "Çok adımlı otomatik akışlar", icon: "workflow", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
    {
      title: "Müşteriler",
      items: [
        { href: { page: "client-records" }, label: "Müşteri takibi", desc: "Müşteri kartı ve işlem geçmişi", icon: "users", color: "text-emerald-600 bg-emerald-100" },
        { href: { page: "forms" }, label: "Onam formları", desc: "Dijital anamnez ve onam formları", icon: "clipboard-check", color: "text-orange-600 bg-orange-100" },
        { href: { page: "treatment-documentation" }, label: "İşlem kayıtları", desc: "Her işlemi dijital kayıt altına alın", icon: "file-text", color: "text-blue-600 bg-blue-100" },
      ],
    },
    {
      title: "Satış",
      items: [
        { href: { page: "shop" }, label: "Mağaza", desc: "Ürün satışı ve stok yönetimi", icon: "shopping-bag", color: "text-amber-600 bg-amber-100" },
        { href: { page: "integrations" }, label: "Entegrasyonlar", desc: "Google Takvim, Zapier, yapay zekâ asistanları ve daha fazlası", icon: "plug", color: "text-indigo-600 bg-indigo-100" },
      ],
    },
  ],
  allFeatures: { href: { page: "features" }, label: "Tüm özellikleri gör" },
  industriesLabel: "Sektörler",
  industries: [
    { href: { page: "beauty-center-software" }, label: "Güzellik merkezleri", desc: "Randevu, onam formu ve işlem kaydı", icon: "sparkles", color: "text-indigo-600 bg-indigo-100" },
    { href: { page: "beauty-salon-software" }, label: "Güzellik salonları", desc: "Hepsi bir arada salon programı", icon: "sparkles", color: "text-indigo-600 bg-indigo-100" },
    { href: { page: "laser-hair-removal-software" }, label: "Lazer epilasyon", desc: "Seans takibi ve onam formları", icon: "zap", color: "text-blue-600 bg-blue-100" },
    { href: { page: "permanent-makeup-software" }, label: "Kalıcı makyaj", desc: "PMU ve microblading", icon: "palette", color: "text-rose-600 bg-rose-100" },
    { href: { page: "aesthetic-clinic-software" }, label: "Medikal estetik merkezleri", desc: "Randevu, hasta kartı ve onam", icon: "stethoscope", color: "text-teal-600 bg-teal-100" },
    { href: { page: "tattoo-studio-software" }, label: "Dövme stüdyoları", desc: "Onam formları ve randevular", icon: "pen", color: "text-gray-600 bg-gray-200" },
    { href: { page: "nail-salon-software" }, label: "Tırnak salonları", desc: "Randevular ve müşteri tercihleri", icon: "gem", color: "text-pink-600 bg-pink-100" },
    { href: { page: "foot-care-software" }, label: "Ayak bakımı", desc: "Müşteri kartı ve bulgu kaydı", icon: "footprints", color: "text-emerald-600 bg-emerald-100" },
    { href: { page: "lash-studio-software" }, label: "Kirpik stüdyoları", desc: "İpek kirpik ve bakım seansları", icon: "eye", color: "text-violet-600 bg-violet-100" },
    { href: { page: "spa-wellness-software" }, label: "Spa ve wellness", desc: "Misafir kartı ve randevular", icon: "waves", color: "text-cyan-600 bg-cyan-100" },
    { href: { page: "massage-software" }, label: "Masaj merkezleri", desc: "Randevu ve sağlık beyan formu", icon: "hand", color: "text-amber-600 bg-amber-100" },
  ],
  links: [
    { href: { page: "pricing" }, label: "Fiyatlar" },
    { href: { page: "blog" }, label: "Blog" },
    { href: { page: "news" }, label: "Yenilikler" },
    { href: { page: "home", hash: "testimonials" }, label: "Yorumlar" },
    { href: { page: "contact" }, label: "İletişim" },
  ],
  login: "Giriş yap",
  cta: "Ücretsiz deneyin",
  menuAria: "Menüyü aç",
};
