import type { FormsContent } from "./types";

export const formsTr: FormsContent = {
  meta: {
    title: "Güzellik Salonları için Dijital Anamnez ve Onam Formları",
    description:
      "Güzellik merkezleri ve estetik klinikler için dijital anamnez, bilgilendirme ve onam formları: hazır şablonlar ve sürükle-bırak form editörü. Müşterileriniz formu randevudan önce doldurup imzalar.",
    keywords: [
      "güzellik salonu anamnez formu",
      "dijital onam formu",
      "müşteri bilgi formu güzellik merkezi",
      "lazer epilasyon onam formu",
      "form oluşturma programı",
      "estetik onam formu şablonu",
      "dijital imza formu",
    ],
  },
  dates: { modified: "2026-11-11", published: "2024-06-01" },
  schema: {
    id: "formulare",
    webPage: {
      name: "Güzellik Salonları için Dijital Anamnez ve Onam Formları",
      description:
        "Güzellik merkezleri için hazır şablonlar ve sürükle-bırak editörle anamnez ve onam formları.",
    },
  },
  breadcrumb: "Formlar",
  hero: {
    eyebrow: "Formlar ve hazır şablonlar",
    eyebrowIcon: "file-text",
    title: { before: "Her işleme ", highlight: "uygun form" },
    description: "Şablon kütüphanesi ve sürükle-bırak editör. Hazır şablonları kullanın ya da kendi formlarınızı dakikalar içinde oluşturun.",
    chips: ["Hazır şablonlar", "Sürükle-bırak", "Dijital imza"],
    secondaryCta: { label: "Örnek formları deneyin", href: { page: "try-forms" } },
    capsules: [
      {
        question: "Bir güzellik salonunda hangi formlara ihtiyaç var?",
        answer:
          "En azından bir anamnez formu ve bir onam formu; lazer veya IPL gibi cihazlı uygulamalarda ayrıca riskleri anlatan ayrıntılı bir bilgilendirme formu. Treatflow hazır şablonlar ve kendi formlarınız için bir form editörü sunar; müşteriler formları randevudan önce dijital olarak doldurur, bilgiler müşteri kartına güvenle kaydedilir.",
      },
    ],
    image: {
      src: "/images/mockups/tr/formulare-marketplace.png",
      alt: "Hazır şablonlarla Treatflow form kütüphanesi",
    },
  },
  understand: {
    title: "Anamnez ve onam formları – kâğıt yerine dijital",
    description:
      "Müşterileriniz formları randevudan önce kendi telefonlarından doldurur. Bilgiler otomatik olarak müşteri kartına kaydedilir.",
    items: [
      {
        icon: "file-text",
        title: "Hazır şablonları kullanın",
        text: "Şablon kütüphanesinde anamnez, bilgilendirme ve onam formları bulursunuz – lazer ve IPL uygulamaları dahil.",
      },
      {
        icon: "layout",
        title: "Kendi formunuzu sürükle-bırakla oluşturun",
        text: "Kendi formlarınızı editörde hazırlayın – koşullu sorular, yüz ve vücut şablonları üzerinde çizimler ve imza alanıyla.",
      },
      {
        icon: "send",
        title: "Form randevudan önce doldurulsun",
        text: "Form bağlantısını e-postayla gönderin. Müşteriniz evde doldurur, siz her randevuda 10–15 dakika kazanırsınız.",
      },
    ],
  },
  tryBanner: {
    title: "Örnek formları kayıt olmadan deneyin",
    text: "Bu örnekler, müşterinin formu dijital olarak nasıl doldurduğunu gösterir. Salonunuzun kendi formlarını form editöründe hazırlayabilir ya da bizimle birlikte kurabilirsiniz.",
    button: "Örnekleri açın",
    href: { page: "try-forms" },
  },
  howItWorks: {
    description: "Boş sayfadan hazır forma üç adımda.",
    steps: [
      { title: "Şablon veya boş form", text: "Kütüphaneden bir şablon içe aktarın ya da boş bir formla başlayın." },
      { title: "Sürükle-bırak ile düzenleyin", text: "Alanları taşıyın, ekleyin veya silin. Canlı önizlemede müşterinin ne göreceğini anında görürsünüz." },
      { title: "Paylaşın ve arşivleyin", text: "Bağlantı veya QR kodla gönderin. İmza ve zaman damgası müşteri kartına güvenle kaydedilir." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Anamnez ve onam formları için şablonlar ve kendi editörünüz – üstelik gönderim ve dijital imza dahil.",
    items: [
      { icon: "file-text", title: "Şablon kütüphanesi", text: "Güzellik uygulamaları için hazır şablonlar – profesyonelce hazırlanmış, hemen kullanılabilir.", points: ["Anamnez ve bilgilendirme", "Onam formları", "Hemen kullanıma hazır"] },
      { icon: "layers", title: "Çizimler ve koşullu sorular", text: "Yüz veya vücut şablonları üzerinde bölge işaretleyin, soruları yalnızca uygun cevap verildiğinde gösterin.", points: ["Yüz ve vücut", "Koşullu gösterim", "Çift imza"] },
      { icon: "layout", title: "Sürükle-bırak editör", text: "Kendi formlarınızı oluşturun veya şablonları uyarlayın – tüm alan türleri ve canlı önizlemeyle.", points: ["Tüm alan türleri", "Canlı önizleme", "Tam kontrol"] },
      { icon: "send", title: "Randevudan önce bağlantıyla", text: "Form randevudan önce e-postayla gider. Resepsiyonda 10–15 dakika kazandırır.", points: ["E-postayla", "Müşterinin kendi telefonunda", "Müşteri kartında"] },
      { icon: "pen-tool", title: "Dijital imza", text: "Onam formu tablette imzalanır. Zaman damgası ve arşiv AB'de.", points: ["Cihaz üzerinde", "Zaman damgası", "İzlenebilir"] },
      { icon: "shield", title: "Güvenli arşiv", text: "Doldurulan her form imza ve zaman damgasıyla AB sunucularında saklanır ve müşteri kartında kalır.", points: ["AB sunucuları", "Şifreli", "Her zaman erişilebilir"] },
    ],
  },
  faq: {
    title: "Formlar hakkında sıkça sorulan sorular",
    items: [
      {
        question: "Bir güzellik salonunda hangi formlara ihtiyaç var?",
        answer:
          "Bir güzellik salonunda en azından anamnez formu ve onam formu gerekir. Lazer veya IPL gibi cihazlı uygulamalarda riskleri anlatan ayrıntılı bir bilgilendirme de önemlidir. Uygulamaya göre alerji anketleri, bakım önerileri ve memnuniyet anketleri eklenebilir.",
      },
      {
        question: "Güzellik uygulamaları için anamnez formunda neler olmalı?",
        answer:
          "Anamnez formunda kişisel bilgiler, kullanılan ilaçlar, alerji ve hassasiyetler, cilt hastalıkları, hamilelik ve daha önce yapılan uygulamalar sorulmalıdır. Lazer veya IPL gibi cihazlı uygulamalarda genellikle ek sorular gerekir.",
      },
      {
        question: "Anamnez formlarını müşterilere dijital olarak gönderebilir miyim?",
        answer:
          "Evet. Treatflow ile formları randevudan önce müşterilerinize e-postayla gönderebilirsiniz. Müşteriler formları kendi telefonlarından doldurur – böylece salonda her randevuda 10–15 dakika kazanırsınız.",
      },
      {
        question: "Dijital onam formları hukuken geçerli mi?",
        answer:
          "Elektronik olarak imzalanan onam formları birçok ülkede hukuken kabul görür. Treatflow her formu zaman damgası ve imzayla AB'deki sunucularda güvenle saklar.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "try-forms" }, title: "Örnek formlar", description: "Kayıt olmadan doldurup deneyin" },
      { href: { page: "treatment-documentation" }, title: "İşlem kaydı", description: "Formlar ve işlem geçmişi bir arada" },
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Doldurulan formlar müşteri kartında" },
    ],
  },
  cta: {
    title: "Dijital formlara hazır mısınız?",
    description: "14 gün ücretsiz deneyin – hazır şablonlar, sürükle-bırak editör ve dijital imza. Kredi kartı gerekmez.",
    secondary: { label: "Örnek formları deneyin", href: { page: "try-forms" } },
  },
};
