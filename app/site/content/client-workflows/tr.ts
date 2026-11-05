import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsTr: ClientWorkflowsContent = {
  meta: {
    title: "Güzellik Salonları için Müşteri Otomasyonları",
    description:
      "Treatflow ile çok adımlı müşteri otomasyonları: bekleme süreleri, koşullar ve otomatik e-postalarla bakım takibi, kayıp müşteri geri kazanımı ve hatırlatmalar – tek tek takip etmeden.",
    keywords: [
      "müşteri otomasyonu güzellik salonu",
      "salon pazarlama otomasyonu",
      "işlem sonrası takip",
      "kayıp müşteri geri kazanma",
      "salon müşteri sadakati",
      "Treatflow otomasyon",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Güzellik Salonları için Müşteri Otomasyonları",
      description:
        "Çok adımlı otomasyonlar: bekleme süreleri, koşullar ve otomatik e-postalarla bakım takibi, geri kazanım ve hatırlatmalar.",
    },
  },
  breadcrumb: "Müşteri otomasyonları",
  hero: {
    eyebrow: "Müşteri otomasyonları",
    eyebrowIcon: "workflow",
    title: { before: "Çok adımlı ", highlight: "otomasyonlar" },
    description:
      "Bakım takibi, müşteri geri kazanımı ve hatırlatmalar için akışlar kurun – bekleme süreleri, koşullar ve otomatik e-postalarla.",
    chips: ["Görsel akış editörü", "Otomatik e-postalar", "Yeni randevu alınınca durur"],
    secondaryCta: { label: "Hatırlatmaları görün", href: { page: "messaging" } },
    capsules: [
      {
        question: "Güzellik salonunda işlem sonrası takibi nasıl otomatikleştiririm?",
        answer:
          "Treatflow'daki müşteri otomasyonlarıyla çok adımlı akışlar kurarsınız: örneğin işlemden 2 gün sonra müşterinize nasıl olduğunu sorun, yeni randevu alıp almadığını kontrol edin ve almadıysa bir sonraki randevuya davet edin. Böylece tek tek takip etmeden müşterinizle bağınızı korursunuz.",
      },
    ],
    image: {
      src: "/images/mockups/tr/kunden-workflows.jpg",
      alt: "Tetikleyici, bekleme süresi ve mesaj içeren Treatflow akış editörü",
    },
  },
  understand: {
    title: "Kendi kendine ilerleyen akışlar",
    description:
      "Tek seferlik hatırlatmalar yerine adım adım ilerleyen akışlar kurarsınız – bakım takibi, müşteri geri kazanımı ve çok adımlı hatırlatmalar için.",
    items: [
      {
        icon: "heart",
        title: "Ek iş yükü olmadan bakım takibi",
        text: "Cildinin nasıl olduğunu otomatik olarak sorun – müşteri isterse bir sonraki randevuyu önerin.",
      },
      {
        icon: "bell",
        title: "Uzun süredir gelmeyen müşterileri geri kazanın",
        text: "60–90 gün uğramayan müşterilere salonunuza davet eden bir mesaj gider – kişisel ve tam zamanında.",
      },
      {
        icon: "git-branch",
        title: "Akıllı dallanma",
        text: "Yeni randevu alınıp alınmadığını kontrol edin. Alındıysa akış durur – aynı müşteriye gereksiz yere tekrar yazılmaz.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda ilk otomasyonunuz.",
    steps: [
      { title: "Tetikleyiciyi seçin", text: "Örneğin randevu tamamlandığında veya bir müşteri uzun süredir gelmediğinde başlasın." },
      { title: "Adımları bağlayın", text: "Bekleme sürelerini, mesajları ve koşulları görsel editörde sıralayın." },
      { title: "Etkinleştirin", text: "Treatflow akışı yürütür ve mesajları e-posta ile gönderir." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Çok adımlı müşteri iletişimi için ihtiyacınız olan her şey – sade ve kontrol sizde.",
    items: [
      { icon: "workflow", title: "Görsel akış editörü", text: "Tetikleyici, bekleme süresi, mesaj ve koşul – sürükle-bırak ile.", points: ["Net genel bakış", "Birden fazla adım", "Kolayca değiştirilebilir"] },
      { icon: "message-circle", title: "E-posta mesajları", text: "Her adım müşterinizin gelen kutusuna ulaşır.", points: ["E-posta", "Kendi metniniz", "Otomatik gönderim"] },
      { icon: "clock", title: "Bekleme süreleri", text: "Adımlar arasında gün veya saat – salonunuzdaki iş akışına uygun.", points: ["Doğru takip zamanı", "Geri kazanım", "Aklınızda tutmanıza gerek yok"] },
      { icon: "git-branch", title: "Koşullar", text: "Örneğin yeni randevu olup olmadığını kontrol edin ve akışı zamanında durdurun.", points: ["Mükerrer e-posta yok", "Akıllı dallanma", "Daha alakalı mesajlar"] },
      { icon: "heart", title: "Bakım sonrası akışlar", text: "Önce hal hatır sorma, ardından gerekirse yeni randevu daveti – yalnızca gerçekten gerektiğinde.", points: ["Daha güçlü bağlılık", "İleride daha az gelmeyen müşteri", "Daha fazla tekrar randevu"] },
      { icon: "zap", title: "Geri kazanım", text: "Uzun bir aradan sonra müşterileri otomatik olarak yeniden davet edin.", points: ["60–90 gün", "Kişisel", "Liste karmaşası yok"] },
    ],
  },
  faq: {
    title: "Müşteri otomasyonları hakkında sıkça sorulan sorular",
    items: [
      {
        question: "Treatflow'da müşteri otomasyonları nedir?",
        answer:
          "Müşteri otomasyonları çok adımlı akışlardır: tetikleyici, bekleme süreleri, mesajlar ve koşullardan oluşan süreçler kurarsınız. Böylece bakım takibi, müşteri geri kazanımı ve hatırlatmalar, her mesajı tek tek yazmanıza gerek kalmadan otomatik işler.",
      },
      {
        question: "Otomasyonların basit hatırlatmalardan farkı nedir?",
        answer:
          "Basit mesajlar (örneğin randevu hatırlatmaları) bir tetikleyici ve bir mesajdan oluşur. Otomasyonlar ise birden fazla adım ve dallanma içeren süreçler içindir – örneğin: işlemden sonra hal hatır sormak, beklemek, yeni randevu alınıp alınmadığını kontrol etmek ve ancak alınmadıysa ikinci bir mesaj göndermek.",
      },
      {
        question: "Otomasyon mesajları hangi kanaldan gönderilir?",
        answer:
          "Otomasyon adımları e-postayla gönderilir. Randevu hatırlatmaları ise yine Hatırlatmalar bölümünden ayarlanır.",
      },
      {
        question: "Müşteri yeni randevu aldığında otomasyon durabilir mi?",
        answer:
          "Evet. Koşullar belirleyebilirsiniz; örneğin son randevudan bu yana yeni randevu alınıp alınmadığını kontrol edebilirsiniz. Alındıysa akış durur – böylece aynı mesajı iki kez göndermeden müşterinizle iletişimde kalırsınız.",
      },
      {
        question: "Başlangıç için hangi otomasyonlar uygundur?",
        answer:
          "En çok tercih edilenler: işlemden 1–2 gün sonra bakım takibi, 60–90 gün uğramayan müşteriler için geri kazanım mesajı ve henüz yeni randevu alınmadıysa ikinci bir mesaj gönderen çok adımlı bakım takibi.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Hatırlatmalar", description: "Randevudan önce e-posta" },
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Randevular ve otomasyonlar bir arada" },
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Müşteri kartı ve işlem geçmişi" },
    ],
  },
  cta: {
    title: "Çok adımlı müşteri otomasyonlarına hazır mısınız?",
    description: "14 gün ücretsiz deneyin – tek tek uğraşmadan bakım takibi ve müşteri geri kazanımı.",
    secondary: { label: "Hatırlatmaları görün", href: { page: "messaging" } },
  },
};
