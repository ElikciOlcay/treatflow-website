import type { FormsContent } from "./types";

export const formsTr: FormsContent = {
  meta: {
    title: "Güzellik Salonları için Dijital Anamnez ve Onam Formları",
    description:
      "Güzellik merkezleri ve estetik klinikler için dijital anamnez, bilgilendirme ve onam formları: hazır şablonlar, yapay zekâ form oluşturucu ve sürükle-bırak editör. Müşteriler randevudan önce doldurup imzalar.",
    keywords: [
      "güzellik salonu anamnez formu",
      "dijital onam formu",
      "müşteri bilgi formu güzellik merkezi",
      "yapay zekâ form oluşturucu",
      "estetik onam formu şablonu",
      "dijital imza formu",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "formulare",
    webPage: {
      name: "Güzellik Salonları için Dijital Anamnez ve Onam Formları",
      description:
        "Güzellik merkezleri için hazır şablonlar, yapay zekâ form oluşturucu ve sürükle-bırak editörle anamnez ve onam formları.",
    },
  },
  breadcrumb: "Formlar",
  hero: {
    eyebrow: "Formlar ve yapay zekâ oluşturucu",
    eyebrowIcon: "file-text",
    title: { before: "Her işlem için ", highlight: "doğru form" },
    description: "Şablon pazarı, yapay zekâ oluşturucu ve sürükle-bırak. Hazır şablonları kullanın ya da kendi formlarınızı dakikalar içinde oluşturun.",
    chips: ["Yapay zekâ oluşturucu", "Şablon pazarı", "Sürükle-bırak"],
    secondaryCta: { label: "Örnekleri deneyin", href: { page: "try-forms" } },
    capsules: [
      {
        question: "Bir güzellik salonunda hangi formlara ihtiyaç var?",
        answer:
          "En az anamnez formu ve onam formu; lazer veya IPL gibi cihazlı uygulamalarda ayrıca risklere ilişkin ayrıntılı bilgilendirme. Treatflow hazır şablonlar ve yapay zekâ oluşturucu sunar; müşteriler formları randevudan önce dijital olarak doldurur ve veriler müşteri kartına güvenle kaydedilir.",
      },
    ],
    image: {
      src: "/images/mockups/formulare-marketplace.png",
      alt: "Şablonlar ve yapay zekâ oluşturucu ile Treatflow form pazarı",
    },
  },
  understand: {
    title: "Anamnez ve onam – kâğıt yerine dijital",
    description:
      "Müşterileriniz formları randevudan önce kendi telefonlarında doldurur. Veriler otomatik olarak müşteri profiline kaydedilir.",
    items: [
      {
        icon: "file-text",
        title: "Hazır şablonları kullanın",
        text: "Şablon pazarında anamnez, bilgilendirme ve onam için şablonlar bulursunuz – lazer ve IPL uygulamaları dahil.",
      },
      {
        icon: "sparkles",
        title: "Yapay zekâ ile kendi formunuzu oluşturun",
        text: "İşleminizi kendi cümlelerinizle anlatın, yapay zekâ size uygun formu hazırlasın. Ardından her şeyi düzenleyebilirsiniz.",
      },
      {
        icon: "send",
        title: "Randevudan önce doldurulsun",
        text: "Form bağlantısını e-postayla gönderin. Müşteriniz evde doldurur – siz her randevuda 10–15 dakika kazanırsınız.",
      },
    ],
  },
  tryBanner: {
    title: "Örnek formları kayıt olmadan deneyin",
    text: "Bu şablonlar dijital check-in sürecini gösterir. Salonunuzun formlarını yapay zekâ oluşturucuyla hazırlarsınız ya da birlikte kurarız.",
    button: "Örnekleri aç",
    href: { page: "try-forms" },
  },
  howItWorks: {
    description: "Boş sayfadan hazır forma üç adımda.",
    steps: [
      { title: "Şablon veya yapay zekâ", text: "Pazardan bir şablon seçin ya da işlemi yapay zekâya anlatın – alanlar otomatik oluşur." },
      { title: "Sürükle-bırak ile düzenleyin", text: "Alanları taşıyın, ekleyin veya silin. Canlı önizleme müşterinin ne göreceğini gösterir." },
      { title: "Paylaşın ve arşivleyin", text: "Bağlantı veya QR kod ile gönderin. İmza ve zaman damgası müşteri kartına güvenle kaydedilir." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Anamnez ve onam için üç yol – üstüne gönderim ve dijital imza.",
    items: [
      { icon: "file-text", title: "Form pazarı", text: "Güzellik işlemleri için hazır şablonlar – profesyonelce hazırlanmış ve hemen kullanılabilir.", points: ["Anamnez ve bilgilendirme", "Onam formları", "Hemen kullanıma hazır"] },
      { icon: "sparkles", title: "Yapay zekâ oluşturucu", text: "İşlemi kendi cümlelerinizle anlatın – yapay zekâ gerekli alanlarla formu oluşturur.", points: ["Alanlar otomatik", "Saniyeler içinde", "Sonradan düzenlenebilir"] },
      { icon: "layout", title: "Sürükle-bırak editör", text: "Kendi formlarınızı oluşturun veya şablonları uyarlayın – tüm alan türleri ve canlı önizlemeyle.", points: ["Tüm alan türleri", "Canlı önizleme", "Tam kontrol"] },
      { icon: "send", title: "Önceden bağlantıyla", text: "Form randevudan önce e-postayla gider. Resepsiyonda 10–15 dakika kazandırır.", points: ["E-postayla", "Kendi cihazında", "Müşteri profilinde"] },
      { icon: "pen-tool", title: "Dijital imza", text: "Onam tablet üzerinde imzalanır. Zaman damgası ve arşiv AB'de.", points: ["Cihaz üzerinde", "Zaman damgası", "İzlenebilir"] },
      { icon: "shield", title: "Güvenli arşiv", text: "Doldurulan her form imza ve zaman damgasıyla AB sunucularında saklanır ve müşteri kartında kalır.", points: ["AB sunucuları", "Şifreli", "Her zaman erişilebilir"] },
    ],
  },
  faq: {
    title: "Formlar hakkında sık sorulan sorular",
    items: [
      {
        question: "Bir güzellik salonunda hangi formlara ihtiyaç var?",
        answer:
          "Bir güzellik salonunda en az anamnez formu ve onam formu gerekir. Lazer veya IPL gibi cihazlı uygulamalarda risklere ilişkin ayrıntılı bilgilendirme de önemlidir. İşleme göre alerji anketleri, bakım önerileri ve memnuniyet anketleri eklenebilir.",
      },
      {
        question: "Güzellik işlemleri için anamnez formunda neler olmalı?",
        answer:
          "Anamnez formu kişisel bilgileri, kullanılan ilaçları, alerji ve hassasiyetleri, cilt hastalıklarını, hamileliği ve önceki işlemleri sormalıdır. Lazer veya IPL gibi cihazlı uygulamalarda genellikle ek sorular gerekir.",
      },
      {
        question: "Anamnez formlarını müşterilere dijital olarak gönderebilir miyim?",
        answer:
          "Evet. Treatflow ile formları randevudan önce müşterilerinize e-postayla gönderebilirsiniz. Müşteriler formları kendi telefonlarında doldurur – bu da salonda her randevuda 10–15 dakika kazandırır.",
      },
      {
        question: "Dijital onam formları hukuken geçerli mi?",
        answer:
          "Elektronik olarak imzalanan onam formları birçok ülkede hukuken kabul edilir. Treatflow her formu zaman damgası ve imzayla AB'deki sunucularda güvenle saklar.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "try-forms" }, title: "Formları deneyin", description: "Örnek formları kayıt olmadan doldurun" },
      { href: { page: "treatment-documentation" }, title: "İşlem kaydı", description: "Formlar ve işlem geçmişi bir arada" },
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Doldurulan formlar profilde" },
    ],
  },
  cta: {
    title: "Dijital formlara hazır mısınız?",
    description: "30 gün ücretsiz deneyin – şablon pazarı, yapay zekâ oluşturucu ve sürükle-bırak, kredi kartı gerekmez.",
    secondary: { label: "Örnekleri deneyin", href: { page: "try-forms" } },
  },
};
