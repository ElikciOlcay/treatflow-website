import type { ClientWorkflowsContent } from "./types";

export const clientWorkflowsTr: ClientWorkflowsContent = {
  meta: {
    title: "Güzellik Salonları için Müşteri Otomasyonları",
    description:
      "Treatflow ile çok adımlı otomasyonlar: bekleme süreleri, koşullar ve e-posta gönderimiyle işlem sonrası takip, müşteri geri kazanımı ve hatırlatmalar – elle takip etmeye gerek kalmadan.",
    keywords: [
      "müşteri otomasyonu güzellik salonu",
      "salon pazarlama otomasyonu",
      "işlem sonrası takip",
      "müşteri geri kazanma",
      "güzellik merkezi müşteri takibi",
      "Treatflow otomasyon",
    ],
  },
  dates: { modified: "2026-08-21", published: "2026-08-21" },
  schema: {
    id: "kunden-workflows",
    webPage: {
      name: "Güzellik Salonları için Müşteri Otomasyonları",
      description:
        "Çok adımlı otomasyonlar: bekleme süreleri, koşullar ve e-posta gönderimiyle işlem sonrası takip, geri kazanım ve hatırlatmalar.",
    },
  },
  breadcrumb: "Müşteri otomasyonları",
  hero: {
    eyebrow: "Müşteri otomasyonları",
    eyebrowIcon: "workflow",
    title: { before: "Çok adımlı ", highlight: "otomasyonlar" },
    description:
      "İşlem sonrası takip, geri kazanım ve hatırlatma akışları kurun – bekleme süreleri, koşullar ve otomatik e-postalarla.",
    chips: ["Görsel akış editörü", "Otomatik e-postalar", "Yeni randevuda durur"],
    secondaryCta: { label: "Hatırlatmalara git", href: { page: "messaging" } },
    capsules: [
      {
        question: "Güzellik salonunda işlem sonrası takibi nasıl otomatikleştiririm?",
        answer:
          "Treatflow'daki müşteri otomasyonlarıyla çok adımlı akışlar kurarsınız: örneğin işlemden sonra 2 gün bekleyin, müşterinin nasıl olduğunu sorun, yeni randevu alıp almadığını kontrol edin ve ancak almadıysa bir sonraki randevu için davet gönderin. Böylece elle takip etmeden müşterinizle bağınızı korursunuz.",
      },
    ],
    image: {
      src: "/images/mockups/kunden-workflows.jpg",
      alt: "Tetikleyici, bekleme süresi ve mesaj içeren Treatflow akış editörü",
    },
  },
  understand: {
    title: "Kendi kendine ilerleyen akışlar",
    description:
      "Tek tek hatırlatmalar yerine adım adım ilerleyen akışlar kurarsınız – işlem sonrası takip, geri kazanım ve birden fazla adımlı hatırlatmalar için.",
    items: [
      {
        icon: "heart",
        title: "Ek iş yükü olmadan bakım takibi",
        text: "Cildin nasıl olduğunu otomatik olarak sorun – müşteri isterse bir sonraki randevuyu önerin.",
      },
      {
        icon: "bell",
        title: "Uzun süredir gelmeyen müşterileri geri kazanın",
        text: "60–90 gün ziyaret olmazsa salonunuza geri davet eden bir mesaj gider – kişisel ve doğru zamanda.",
      },
      {
        icon: "git-branch",
        title: "Akıllı dallanma",
        text: "Yeni randevu alınıp alınmadığını kontrol edin. Alındıysa akış durur – aynı müşteriye iki kez yazılmaz.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda ilk otomasyonunuz.",
    steps: [
      { title: "Tetikleyiciyi seçin", text: "Örneğin randevu bittikten sonra veya bir müşteri uzun süredir gelmediğinde başlatın." },
      { title: "Adımları bağlayın", text: "Bekleme sürelerini, mesajları ve koşulları görsel editörde sıralayın." },
      { title: "Etkinleştirin", text: "Treatflow akışı yürütür ve mesajları e-posta ile gönderir." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Çok adımlı müşteri iletişimi için ihtiyacınız olan her şey – net ve kontrol edilebilir.",
    items: [
      { icon: "workflow", title: "Görsel akış editörü", text: "Tetikleyici, bekleme süresi, mesaj ve koşul – sürükle bırak ile.", points: ["Net genel bakış", "Birden fazla adım", "Kolayca değiştirilebilir"] },
      { icon: "message-circle", title: "E-posta mesajları", text: "Her adım müşterinizin gelen kutusuna ulaşır.", points: ["E-posta", "Kendi metniniz", "Otomatik gönderim"] },
      { icon: "clock", title: "Bekleme süreleri", text: "Adımlar arasında gün veya saat – salonunuzdaki iş akışına uygun.", points: ["Doğru takip zamanı", "Geri kazanım", "Akılda tutmaya gerek yok"] },
      { icon: "git-branch", title: "Koşullar", text: "Örneğin yeni randevuları kontrol edin ve akışı zamanında durdurun.", points: ["Mükerrer e-posta yok", "Akıllı dallanma", "Daha alakalı mesajlar"] },
      { icon: "heart", title: "Bakım sonrası akışlar", text: "Önce hal hatır sorma, ardından gerekirse yeni randevu daveti – yalnızca anlamlı olduğunda.", points: ["Daha güçlü bağlılık", "İleride daha az gelmeyen müşteri", "Daha fazla tekrar randevu"] },
      { icon: "zap", title: "Geri kazanım", text: "Uzun bir aradan sonra müşterileri otomatik olarak yeniden davet edin.", points: ["60–90 gün", "Kişisel", "Liste karmaşası yok"] },
    ],
  },
  faq: {
    title: "Müşteri otomasyonları hakkında sık sorulan sorular",
    items: [
      {
        question: "Treatflow'da müşteri otomasyonları nedir?",
        answer:
          "Müşteri otomasyonları çok adımlı akışlardır: tetikleyici, bekleme süreleri, mesajlar ve koşullardan oluşan süreçler kurarsınız. Böylece işlem sonrası takip, geri kazanım ve hatırlatmalar her mesajı elle yazmanıza gerek kalmadan otomatik işler.",
      },
      {
        question: "Otomasyonların basit hatırlatmalardan farkı nedir?",
        answer:
          "Basit mesajlar (örneğin randevu hatırlatmaları) bir tetikleyici ve bir mesajdan oluşur. Otomasyonlar ise birden fazla adım ve dallanma içeren süreçler içindir – örneğin: işlemden sonra hal hatır sormak, beklemek, yeni randevu alınıp alınmadığını kontrol etmek ve ancak alınmadıysa ikinci bir mesaj göndermek.",
      },
      {
        question: "Otomasyon mesajları hangi kanaldan gönderilir?",
        answer:
          "Otomasyon adımları e-posta ile gönderilir. Randevu hatırlatmaları basit mesajlar bölümünde kullanılmaya devam eder.",
      },
      {
        question: "Müşteri yeni randevu aldığında otomasyon durabilir mi?",
        answer:
          "Evet. Koşullar belirleyebilirsiniz; örneğin son randevudan bu yana yeni randevu alınıp alınmadığını kontrol edebilirsiniz. Alındıysa akış durur – böylece aynı mesajı iki kez göndermeden müşterinizle iletişimde kalırsınız.",
      },
      {
        question: "Başlangıç için hangi otomasyonlar uygundur?",
        answer:
          "En çok tercih edilenler: işlemden 1–2 gün sonra bakım takibi, 60–90 gün ziyaret olmadığında geri kazanım ve henüz yeni randevu alınmadıysa ikinci bir mesaj gönderen çok adımlı bakım takibi.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "messaging" }, title: "Hatırlatmalar", description: "Randevudan önce e-posta" },
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Randevular ve otomasyonlar bir arada" },
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Geçmiş ve takip" },
    ],
  },
  cta: {
    title: "Çok adımlı müşteri otomasyonlarına hazır mısınız?",
    description: "30 gün ücretsiz deneyin – elle takip etmeden bakım takibi ve müşteri geri kazanımı.",
    secondary: { label: "Hatırlatmalara git", href: { page: "messaging" } },
  },
};
