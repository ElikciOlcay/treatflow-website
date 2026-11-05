import type { FeaturesOverviewContent } from "./types";

/** Türkei: kein Treatflow Pay. */
export const featuresTr: FeaturesOverviewContent = {
  meta: {
    title: "Güzellik Salonu Programı: Tüm Özellikler",
    description:
      "Randevu takvimi, komisyonsuz online randevu, müşteri takibi, dijital onam formları, sesli notla işlem kaydı ve otomatik e-posta hatırlatmaları – hepsi tek salon programında. 30 gün ücretsiz deneyin.",
    keywords: [
      "güzellik salonu programı",
      "güzellik salonu yazılımı",
      "salon programı özellikleri",
      "online randevu sistemi",
      "müşteri takip programı",
      "dijital onam formu",
    ],
  },
  breadcrumb: "Özellikler",
  hero: {
    eyebrow: "Özelliklere genel bakış",
    eyebrowIcon: "sparkles",
    title: { before: "Tüm ", highlight: "özellikler", after: " tek bakışta" },
    description: "Takvim, online randevu, müşteri takibi, formlar ve işlem kayıtları – işletmeniz için tek platformda.",
    chips: ["Hepsi bir arada", "Komisyonsuz", "Avusturya'da geliştirildi"],
    secondaryCta: { label: "Fiyatları görün", href: { page: "pricing" } },
    tiles: [
      { label: "Takvim", icon: "calendar", gradient: "from-indigo-500 to-purple-600" },
      { label: "Online randevu", icon: "link", gradient: "from-rose-500 to-orange-600" },
      { label: "Müşteriler", icon: "users", gradient: "from-blue-500 to-indigo-600" },
      { label: "Formlar", icon: "clipboard-check", gradient: "from-orange-500 to-amber-600" },
      { label: "İşlem kayıtları", icon: "file-text", gradient: "from-violet-500 to-purple-600" },
      { label: "Otomasyonlar", icon: "workflow", gradient: "from-green-500 to-emerald-600" },
    ],
  },
  grid: {
    title: "İşletmeniz için {count} temel özellik",
    subtitle: "Her özellik, güzellik salonlarının ve estetik kliniklerin günlük ihtiyaçlarına göre tasarlandı.",
    more: "Daha fazla bilgi",
    items: [
      {
        href: { page: "appointment-calendar" },
        icon: "calendar",
        title: "Randevu takvimi",
        description:
          "Çalışanları ve odaları ayrı sütunlarda net şekilde planlayın. Boş saatleri görün, çakışan randevuları önleyin ve değişiklikleri daha hızlı yönetin.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Personel ve oda sütunları", "Doluluk tek bakışta", "Sürükle-bırak"],
      },
      {
        href: { page: "online-booking" },
        icon: "link",
        title: "Online randevu",
        description:
          "İşletmenize özel randevu bağlantısı. Müşterileriniz günün her saatinde randevu alır – onaylar ve hatırlatmalar otomatik gider.",
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-200 hover:border-rose-400",
        highlights: ["7/24 randevu bağlantısı", "Otomatik onaylar", "Çakışan randevu yok"],
      },
      {
        href: { page: "client-records" },
        icon: "users",
        title: "Dijital müşteri takibi",
        description:
          "İşlem geçmişi, öncesi-sonrası fotoğraflar, alerjiler ve notlarla dijital müşteri kartı. Her şey tek yerde.",
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-200 hover:border-emerald-400",
        highlights: ["Sınırsız müşteri", "Fotoğraflar ve notlar", "KVKK kapsamında süreçler"],
      },
      {
        href: { page: "forms" },
        icon: "clipboard-check",
        title: "Anamnez ve onam formları",
        description:
          "Dijital anamnez ve onam formları. Müşterileriniz randevudan önce kendi telefonlarından doldurur – kâğıtsız ve güvenli.",
        color: "text-orange-600",
        bg: "bg-orange-50",
        border: "border-orange-200 hover:border-orange-400",
        highlights: ["Dijital anamnez", "Randevudan önce bağlantıyla", "Kâğıtsız"],
      },
      {
        href: { page: "treatment-documentation" },
        icon: "file-text",
        title: "İşlem kayıtları",
        description:
          "Her işlemi dijital olarak kayıt altına alın: fotoğraflar, kullanılan ürünler, notlar ve sonuçlar. Seans takibi için ideal.",
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-200 hover:border-blue-400",
        highlights: ["Fotoğraflar ve ürünler", "İşlem geçmişi", "Eksiksiz kayıt"],
      },
      {
        href: { page: "messaging" },
        icon: "bell",
        title: "Otomatik hatırlatmalar",
        description: "Her randevudan önce e-posta hatırlatması. Randevuya gelmeyen müşterileri azaltın – tamamen otomatik.",
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-200 hover:border-purple-400",
        highlights: ["E-posta hatırlatmaları", "Daha az gelmeyen müşteri", "Ayarlanabilir zamanlar"],
      },
      {
        href: { page: "customer-workflows" },
        icon: "workflow",
        title: "Müşteri otomasyonları",
        description:
          "Bakım takibi, müşteri geri kazanımı ve hatırlatmalar için çok adımlı otomasyonlar – bekleme süreleri, koşullar ve e-postalarla.",
        color: "text-indigo-600",
        bg: "bg-indigo-50",
        border: "border-indigo-200 hover:border-indigo-400",
        highlights: ["Görsel akış editörü", "Otomatik e-postalar", "Yeni randevu alınınca durur"],
      },
      {
        href: { page: "shop" },
        icon: "shopping-bag",
        title: "Ürün satışı ve stok",
        description:
          "Bakım ürünlerini doğrudan müşterilerinize satın. Stoğu yönetin, satışları kaydedin ve ek gelir elde edin.",
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-200 hover:border-amber-400",
        highlights: ["Ürün satışı", "Stok yönetimi", "Gelirinizi artırın"],
      },
    ],
  },
  why: {
    title: "Neden Treatflow?",
    points: [
      "Hepsi bir arada: tüm özellikler tek platformda",
      "AB sunucularında güvenli veri saklama",
      "Gizli ücret veya komisyon yok",
      "30 gün ücretsiz deneme, kredi kartı gerekmez",
      "Ücretsiz destek ve kurulum yardımı",
      "Avusturya'da geliştirildi",
    ],
  },
};
