import type { IntegrationsContent } from "./types";

export const integrationsTr: IntegrationsContent = {
  meta: {
    title: "Güzellik Salonunuz için Entegrasyonlar ve Uygulamalar",
    description:
      "Treatflow'u Google Takvim, Zapier ve Claude ya da ChatGPT gibi yapay zekâ asistanlarına bağlayın – takvim senkronizasyonu ve otomasyon tek platformda.",
    keywords: [
      "Treatflow entegrasyonları",
      "salon yazılımı entegrasyon",
      "Google Takvim senkronizasyonu salon",
      "Zapier güzellik salonu",
      "salon yazılımı ChatGPT",
      "Claude MCP salon yazılımı",
      "randevu takvimi senkronizasyonu",
    ],
  },
  schema: { id: "integrationen" },
  breadcrumb: "Entegrasyonlar",
  hero: {
    eyebrow: "Entegrasyonlar",
    eyebrowIcon: "plug",
    title: { before: "Uygulamalarınızı bağlayın, ", highlight: "verileriniz", after: " hep güncel kalsın" },
    description:
      "Google Takvim, Zapier ve yapay zekâ asistanları – bir kez bağlayın, bilgileriniz her yerde güncel olsun.",
    chips: ["Google Takvim", "Zapier", "Yapay zekâ asistanları (MCP)"],
    secondaryCta: { label: "Takvimi görün", href: { page: "appointment-calendar" } },
    tiles: [
      { name: "Google", category: "Takvim", gradient: "from-emerald-500 to-teal-600", icon: "calendar" },
      { name: "Zapier", category: "Otomasyon", gradient: "from-orange-500 to-amber-600", icon: "zap" },
      { name: "Claude", category: "Yapay zekâ asistanı", gradient: "from-blue-500 to-indigo-600", icon: "bot" },
      { name: "ChatGPT", category: "Yapay zekâ asistanı", gradient: "from-violet-500 to-purple-600", icon: "sparkles" },
    ],
  },
  understand: {
    title: "Kısaca: entegrasyonlar ne işe yarar?",
    description: "Aynı işi iki kez yapmayın – veriler araçlarınız arasında kendiliğinden aktarılır.",
    items: [
      {
        icon: "refresh",
        title: "Aynı bilgiyi iki kez girmeyin",
        text: "Müşterileri ve randevuları bir kez girin – takviminiz ve bağlı araçlarınız güncel kalır.",
      },
      {
        icon: "workflow",
        title: "Otomatik süreçler",
        text: "Takvim kayıtları ve Zapier iş akışları arka planda kendiliğinden çalışır.",
      },
      {
        icon: "shield-check",
        title: "Güvenli veri işleme",
        text: "Güvenli bağlantılar ve AB standartlarında veri işleme. Sağlık verileri Treatflow'dan dışarı çıkmaz.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda bağlantı – teknik bilgi gerekmez.",
    steps: [
      { title: "Uygulamayı seçin", text: "Salon ayarları > Uygulamalar bölümünden istediğiniz entegrasyonu seçin." },
      { title: "Hesabınızı bağlayın", text: "Sağlayıcıda bir kez oturum açın – örneğin Google, Zapier, Claude veya ChatGPT." },
      { title: "Otomatik senkronizasyon", text: "Randevular, müşteriler ve iş akışları artık birbiriyle uyumlu çalışır." },
    ],
  },
  cards: {
    title: "Entegre uygulamalar",
    description: "Takvim senkronizasyonundan otomasyona ve yapay zekâ asistanlarına kadar.",
    items: [
      {
        icon: "calendar",
        title: "Google Takvim",
        text: "İki yönlü senkronizasyon: Treatflow ve Google Takvim anlık olarak eşitlenir.",
        points: ["İki yönlü senkronizasyon", "Çakışan randevu yok", "Özel ve salon takvimi ayrı"],
      },
      {
        icon: "zap",
        title: "Zapier",
        text: "7.000'den fazla uygulamayla bağlantı – yeni randevular ve doldurulan formlar için iş akışları.",
        points: ["7.000+ uygulama", "Webhook'lar", "Kod gerekmez"],
      },
      {
        icon: "bot",
        title: "Yapay zekâ asistanları (MCP)",
        text: "Claude, ChatGPT ve diğer asistanları bağlayın; randevularınız, müşterileriniz veya cironuz hakkında soru sorun.",
        points: ["Varsayılan olarak yalnızca okuma", "Sağlık verileri Treatflow'da kalır", "Erişimi istediğiniz an kaldırın"],
      },
    ],
  },
  faq: {
    title: "Entegrasyonlar hakkında sıkça sorulan sorular",
    items: [
      {
        question: "Treatflow'a hangi uygulamaları bağlayabilirim?",
        answer:
          "Treatflow doğrudan Google Takvim (randevu senkronizasyonu) ve Model Context Protocol (MCP) üzerinden Claude veya ChatGPT gibi yapay zekâ asistanlarıyla bağlanır. Zapier aracılığıyla Google Sheets, Mailchimp veya CRM'iniz gibi 7.000'den fazla uygulamaya daha ulaşabilirsiniz.",
      },
      {
        question: "Randevularımı Google Takvim ile nasıl senkronize ederim?",
        answer:
          "Google hesabınızı Salon ayarları > Uygulamalar bölümünden bir kez bağlarsınız. Ardından randevular iki yönlü olarak otomatik eşitlenir: Treatflow'daki randevular Google Takvim'inizde görünür, Google'daki kayıtlar da Treatflow'a aktarılır – böylece çakışan randevuların önüne geçersiniz.",
      },
      {
        question: "Treatflow'u ChatGPT veya Claude ile kullanabilir miyim?",
        answer:
          "Evet. Treatflow'u yapay zekâ asistanınıza bağlayıcı olarak ekleyin ve Treatflow hesabınızla oturum açın. Ardından randevular, boş saatler, müşteriler veya ciro hakkında soru sorabilirsiniz. Erişim varsayılan olarak yalnızca okuma yetkisiyledir; izin verirseniz asistan randevu oluşturup taşıyabilir, müşteri ve ürün ekleyip düzenleyebilir; her değişiklik kayıt altına alınır. İptal ve silme yapamaz; işlem kayıtları, formlar ve fotoğraflar hiçbir zaman paylaşılmaz.",
      },
      {
        question: "Zapier entegrasyonu ne işime yarar?",
        answer:
          "Zapier ile kod yazmadan kendi iş akışlarınızı otomatikleştirirsiniz. Yeni bir randevu alındığında veya bir form doldurulduğunda Treatflow, örneğin Google Sheets'e otomatik bir satır ekleyebilir, CRM'inizde bir kişi oluşturabilir veya bir e-posta tetikleyebilir.",
      },
      {
        question: "Entegrasyonlar her pakete dahil mi?",
        answer:
          "Entegrasyonlar Booking paketine dahildir. Kayıt olduktan sonra onları panelde Salon ayarları > Uygulamalar bölümünde bulup etkinleştirebilirsiniz.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Tüm randevular tek yerde, her zaman güncel" },
      { href: { page: "online-booking" }, title: "Online randevu", description: "7/24 online randevu" },
      { href: { page: "messaging" }, title: "Hatırlatmalar", description: "Otomatik onaylar ve hatırlatmalar" },
    ],
  },
  cta: {
    title: "Salonunuz için birbirine bağlı araçlar",
    description: "14 gün ücretsiz deneyin – Google Takvim'i, Zapier'i ve yapay zekâ asistanınızı dakikalar içinde bağlayın.",
    secondary: { label: "Tüm özellikler", href: { page: "features" } },
  },
};
