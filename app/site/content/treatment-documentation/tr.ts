import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationTr: TreatmentDocumentationContent = {
  meta: {
    title: "Güzellik Salonları için Dijital İşlem Kaydı ve Seans Takibi",
    description:
      "Güzellik merkezleri ve estetik klinikler için dijital işlem kaydı: öncesi-sonrası fotoğraflar, notlar, cihaz parametreleri ve müşteri kartında tüm geçmiş. Notlarınızı yazmak yerine sesle kaydedin.",
    keywords: [
      "işlem kaydı programı",
      "güzellik salonu işlem takibi",
      "öncesi sonrası fotoğraf programı",
      "seans takip programı",
      "lazer epilasyon seans kaydı",
      "estetik klinik hasta kaydı",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Güzellik Salonları için Dijital İşlem Kaydı",
      description: "Öncesi-sonrası fotoğraflar, notlar ve işlem geçmişiyle dijital işlem kaydı.",
    },
  },
  breadcrumb: "İşlem kaydı",
  hero: {
    eyebrow: "İşlem kaydı",
    eyebrowIcon: "file-text",
    title: { before: "Her işlemi ", highlight: "dijital kayıt altına alın" },
    description:
      "Fotoğraflar, notlar ve parametreler tek yerde – yapay zekâ desteğiyle. Bir sonraki seansta geçen sefer ne yapıldığını hemen görürsünüz.",
    chips: ["Öncesi-sonrası fotoğraflar", "Sesli not", "Dijital imza"],
    secondaryCta: { label: "Dijital formlar", href: { page: "forms" } },
    capsules: [
      {
        question: "Güzellik işlemlerini kaydetmek için hangi program uygundur?",
        answer:
          "Treatflow işlemleri öncesi-sonrası fotoğraflar, parametreler, notlar ve imzayla dijital olarak kaydeder. Özellikle lazer veya IPL gibi cihazlı uygulamalarda eksiksiz kayıt önemlidir – Treatflow bu süreci baştan sona destekler.",
      },
      {
        question: "Estetik uygulamaların seyrini nasıl kayıt altına alırım?",
        answer:
          "Her seans için parametreler, ürünler, fotoğraflar ve notlarla bir kayıt oluşturulur. Tüm geçmiş müşteri kartında durur. Notlarınızı sesle söyleyebilirsiniz; Treatflow bunları metne çevirir ve isterseniz düzenler.",
      },
    ],
    image: {
      src: "/images/mockups/dokumentation-hero.png",
      alt: "Fotoğraflar ve notlarla Treatflow işlem kaydı",
    },
  },
  understand: {
    title: "Her işlem düzenli ve eksiksiz kayıtta",
    description:
      "Her seanstan sonra fotoğraf, not ve parametrelerle dijital bir kaydınız olur – hepsi müşteri kartında saklanır.",
    items: [
      {
        icon: "camera",
        title: "Öncesi-sonrası fotoğraflar",
        text: "Gelişimi fotoğraflarla belgeleyin ve müşterinize sonuçları seans seans gösterin.",
      },
      {
        icon: "brain",
        title: "Sesle veya yapay zekâyla kaydedin",
        text: "Notlarınızı sesli söyleyin. Treatflow bunları metne çevirir ve isterseniz yapay zekâyla düzenler. Daha az yazı, müşterinize daha çok zaman.",
      },
      {
        icon: "shield",
        title: "Eksiksiz ve izlenebilir",
        text: "Her kayıt tarih, parametreler ve isteğe bağlı imzayla müşteri kartında saklanır – sonradan bir soru çıkarsa ne yapıldığını gösterebilirsiniz.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda eksiksiz işlem kaydı.",
    steps: [
      { title: "Kaydı açın", text: "Kaydı doğrudan randevudan veya müşteri kartından açın – müşteri ve işlem bilgileri hazır gelir." },
      { title: "Fotoğraf ve not ekleyin", text: "Fotoğraf yükleyin, işlem parametrelerini girin, notlarınızı sesli söyleyin veya yazın. Gerekirse müşteriye imzalatın." },
      { title: "Kaydedildi, her an elinizin altında", text: "Her şey otomatik olarak müşteri kartına kaydedilir. Bir sonraki randevuda en son ne yapıldığını hemen görürsünüz." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Düzenli bir işlem kaydı için ihtiyacınız olan her şey – kâğıt yığınları olmadan.",
    items: [
      { icon: "camera", title: "Öncesi-sonrası fotoğraflar", text: "Fotoğrafları doğrudan ilgili işleme ekleyin ve zaman sırasına göre karşılaştırın.", points: ["İşlemle birlikte", "Müşteri kartında", "Güvenli saklama"] },
      { icon: "mic", title: "Sesli not", text: "Yazmak yerine konuşun – işlem sırasında veya hemen sonrasında ideal.", points: ["Eller serbest", "Hızlı", "Net ifadeler"] },
      { icon: "brain", title: "Yapay zekâ asistanı", text: "İsterseniz sesli notu düzenletin ve başlıklara ayırtın – kaydetmeden önce son kontrol sizde.", points: ["Metni düzenler", "Düzenli yapı", "Daha az yazma"] },
      { icon: "file-text", title: "Parametreler ve ürünler", text: "Cihaz değerlerini, kullanılan ürünleri ve ayarları düzenli şekilde kaydedin.", points: ["Lazer/IPL", "Ürünler", "Bakım önerileri"] },
      { icon: "pen-tool", title: "Dijital imza", text: "Müşterinin onayını tablette dijital olarak alın.", points: ["Tablette imza", "Müşteri kartında", "İzlenebilir"] },
      { icon: "shield", title: "Güvenli arşiv", text: "Tüm kayıtlar AB sunucularında saklanır ve her an erişilebilir.", points: ["AB sunucuları", "Şifreli", "Her zaman erişilebilir"] },
    ],
  },
  faq: {
    title: "İşlem kaydı hakkında sıkça sorulan sorular",
    items: [
      {
        question: "Güzellik işlemlerini kaydetmek için hangi program uygundur?",
        answer:
          "Treatflow işlemleri öncesi-sonrası fotoğraflar, parametreler, notlar ve imzayla dijital olarak kaydeder. Özellikle lazer veya IPL gibi cihazlı uygulamalarda eksiksiz kayıt önemlidir – Treatflow bu süreci baştan sona destekler.",
      },
      {
        question: "Estetik uygulamaların seyrini nasıl kayıt altına alırım?",
        answer:
          "Her seans için parametreler, lot numaraları, fotoğraflar ve notlarla bir kayıt oluşturulur. Müşteri kartındaki geçmiş, seanslar boyunca gelişimi gösterir. Notlarınızı sesli söyleyebilirsiniz; Treatflow bunları metne çevirir ve isterseniz yapay zekâyla düzenler.",
      },
      {
        question: "Güzellik salonunda işlem kaydı zorunlu mu?",
        answer:
          "Bu, uygulamaya ve geçerli mevzuata bağlıdır. Lazer veya IPL gibi cihazlı uygulamalarda eksiksiz kayıt genellikle beklenir. Diğer işlemlerde de hukuki güvence, kalite ve müşteri memnuniyeti için tavsiye edilir.",
      },
      {
        question: "Profesyonel bir işlem kaydında neler olmalı?",
        answer:
          "İşlem türü ve tarihi, kullanılan ürünler ve parametreler, öncesi-sonrası fotoğraflar, cilt analizi, seans notları, bakım önerileri ve isteğe bağlı olarak müşterinin imzası.",
      },
      {
        question: "Öncesi-sonrası fotoğrafları nasıl doğru çekilir?",
        answer:
          "Her seferinde aynı koşullarda (ışık, açı, mesafe). Treatflow'da fotoğrafları doğrudan işlem kaydına ekler, böylece müşteri kartında saklarsınız.",
      },
      {
        question: "Lazer ve IPL uygulamalarında neler kaydedilmeli?",
        answer:
          "Genellikle ön görüşme, onam, cihaz ayarları (ör. enerji, frekans, atım süresi), uygulama bölgesi, cilt reaksiyonu ve bakım önerileri.",
      },
      {
        question: "İşlem notlarını yazmak yerine sesli söyleyebilir miyim?",
        answer:
          "Evet. Kayıt ekranında notlarınızı sesli söylersiniz. Treatflow konuşmayı metne çevirir ve isterseniz yapay zekâyla düzenler. Kaydı yapay zekâ tek başına yazmaz, son söz sizde.",
      },
      {
        question: "Uygulama bölgelerini fotoğraflarda veya çizimlerde işaretleyebilir miyim?",
        answer:
          "Öncesi-sonrası fotoğrafları doğrudan işleme ekler, bölgeleri fotoğraf üzerinde işaretlersiniz; formlarda yüz veya vücut şablonlu çizim alanları da vardır. Ayrı bir vücut haritası modülü yoktur.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "forms" }, title: "Formlar", description: "Dijital anamnez ve onam formları" },
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Tüm geçmiş müşteri kartında" },
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Kaydı randevudan açın" },
    ],
  },
  cta: {
    title: "İşlem kayıtlarınızı dijitale taşımaya hazır mısınız?",
    description: "14 gün ücretsiz deneyin – kredi kartı gerekmez. Kayıt, fotoğraflar ve imza tek uygulamada.",
    secondary: { label: "Dijital formlar", href: { page: "forms" } },
  },
};
