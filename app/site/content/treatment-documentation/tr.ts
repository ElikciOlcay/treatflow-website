import type { TreatmentDocumentationContent } from "./types";

export const treatmentDocumentationTr: TreatmentDocumentationContent = {
  meta: {
    title: "Güzellik Salonları için Dijital İşlem Kaydı",
    description:
      "Güzellik merkezleri ve estetik klinikler için dijital işlem kaydı: öncesi-sonrası fotoğraflar, notlar, cihaz parametreleri ve müşteri profilinde geçmiş. Notları yazmak yerine sesle kaydedin.",
    keywords: [
      "işlem kaydı programı",
      "güzellik salonu işlem takibi",
      "öncesi sonrası fotoğraf programı",
      "seans notları uygulaması",
      "lazer epilasyon seans kaydı",
      "estetik klinik dokümantasyon",
    ],
  },
  dates: { modified: "2026-08-18", published: "2024-06-01" },
  schema: {
    id: "behandlungsdokumentation",
    webPage: {
      name: "Güzellik Salonları için Dijital İşlem Kaydı",
      description: "Öncesi-sonrası fotoğraflar, notlar ve geçmişle dijital işlem kaydı.",
    },
  },
  breadcrumb: "İşlem kaydı",
  hero: {
    eyebrow: "İşlem kaydı",
    eyebrowIcon: "file-text",
    title: { before: "İşlemleri ", highlight: "dijital kaydedin" },
    description:
      "Fotoğraflar, notlar ve parametreler tek yerde – yapay zekâ desteğiyle. Bir sonraki randevuda neyin yapıldığını hemen görürsünüz.",
    chips: ["Öncesi-sonrası fotoğraflar", "Sesle not", "Dijital imza"],
    secondaryCta: { label: "Dijital formlar", href: { page: "forms" } },
    capsules: [
      {
        question: "Güzellik işlemlerini kaydetmek için hangi program uygundur?",
        answer:
          "Treatflow işlemleri öncesi-sonrası fotoğraflar, parametreler, notlar ve imzayla dijital olarak kaydeder. Özellikle lazer veya IPL gibi cihazlı uygulamalarda eksiksiz kayıt önemlidir – Treatflow tam olarak bu süreci destekler.",
      },
      {
        question: "Estetik işlemlerin seyrini nasıl kaydederim?",
        answer:
          "Her seans parametreler, ürünler, fotoğraflar ve notlarla bir kayıt alır. Geçmiş müşteri dosyasında kalır. Notlarınızı sesle söyleyebilirsiniz; Treatflow bunları metne çevirir ve isterseniz düzenler.",
      },
    ],
    image: {
      src: "/images/mockups/dokumentation-hero.png",
      alt: "Fotoğraflar ve notlarla Treatflow işlem kaydı",
    },
  },
  understand: {
    title: "Her işlemi düzenli kaydedin",
    description:
      "Her seanstan sonra fotoğraf, not ve parametrelerle dijital bir kaydınız olur – hepsi müşteri profilinde saklanır.",
    items: [
      {
        icon: "camera",
        title: "Öncesi-sonrası fotoğraflar",
        text: "İlerlemeyi fotoğraflarla kaydedin. Böylece müşterinize işlemin nasıl ilerlediğini gösterebilirsiniz.",
      },
      {
        icon: "brain",
        title: "Sesle veya yapay zekâyla kaydedin",
        text: "Notlarınızı sesle söyleyin. Treatflow bunları metne çevirir ve isterseniz yapay zekâyla düzenler. Daha az yazı, işleme daha çok zaman.",
      },
      {
        icon: "shield",
        title: "Eksiksiz ve izlenebilir",
        text: "Her kayıt tarih, parametreler ve isteğe bağlı imzayla müşteri profilinde saklanır – sonradan soru çıkarsa neyin yapıldığını gösterebilirsiniz.",
      },
    ],
  },
  howItWorks: {
    description: "Üç adımda eksiksiz işlem kaydı.",
    steps: [
      { title: "Kaydı açın", text: "Kaydı doğrudan randevudan veya müşteri profilinden açın – müşteri ve işlem zaten doldurulmuş olur." },
      { title: "Fotoğraf ve not ekleyin", text: "Fotoğraf yükleyin, işlem parametrelerini girin, notlarınızı sesle söyleyin veya yazın. Gerekirse müşteriye imzalatın." },
      { title: "Kaydedildi, her an erişilebilir", text: "Her şey otomatik olarak müşteri profiline kaydedilir. Bir sonraki randevuda en son neyin yapıldığını hemen görürsünüz." },
    ],
  },
  cards: {
    title: "Neler sunuyoruz",
    description: "Düzenli bir işlem kaydı için ihtiyacınız olan her şey – kâğıt yığını olmadan.",
    items: [
      { icon: "camera", title: "Öncesi-sonrası fotoğraflar", text: "Fotoğrafları doğrudan işleme kaydedin ve kronolojik olarak karşılaştırın.", points: ["Aynı bağlamda", "Müşteri profilinde", "Güvenli saklama"] },
      { icon: "mic", title: "Sesle not", text: "Yazmak yerine konuşun – işlem sırasında veya hemen sonrasında ideal.", points: ["Eller serbest", "Hızlı", "Net ifadeler"] },
      { icon: "brain", title: "Yapay zekâ asistanı", text: "İsterseniz sesle söylenen metni düzenleyip yapılandırın – kaydetmeden önce kaydı siz kontrol edersiniz.", points: ["Metni düzenleme", "Yapı", "Daha az yazma"] },
      { icon: "file-text", title: "Parametreler ve ürünler", text: "Cihaz değerlerini, ürünleri ve ayarları düzenli kaydedin.", points: ["Lazer/IPL", "Ürünler", "Bakım önerileri"] },
      { icon: "pen-tool", title: "Dijital imza", text: "Onay veya teyidi tablet üzerinde dijital olarak alın.", points: ["Cihaz üzerinde", "Profilde", "İzlenebilir"] },
      { icon: "shield", title: "Güvenli arşiv", text: "Tüm kayıtlar AB sunucularında saklanır ve her an erişilebilir.", points: ["AB sunucuları", "Şifreli", "Her zaman erişilebilir"] },
    ],
  },
  faq: {
    title: "İşlem kaydı hakkında sık sorulan sorular",
    items: [
      {
        question: "Güzellik işlemlerini kaydetmek için hangi program uygundur?",
        answer:
          "Treatflow işlemleri öncesi-sonrası fotoğraflar, parametreler, notlar ve imzayla dijital olarak kaydeder. Özellikle lazer veya IPL gibi cihazlı uygulamalarda eksiksiz kayıt önemlidir – Treatflow tam olarak bu süreci destekler.",
      },
      {
        question: "Estetik işlemlerin seyrini nasıl kaydederim?",
        answer:
          "Her seans parametreler, parti numaraları, fotoğraflar ve notlarla bir kayıt alır. Müşteri dosyasındaki geçmiş, birden fazla randevudaki gelişimi gösterir. Notlarınızı sesle söyleyebilirsiniz; Treatflow bunları metne çevirir ve isterseniz yapay zekâyla düzenler.",
      },
      {
        question: "Güzellik salonunda işlem kaydı zorunlu mu?",
        answer:
          "Bu, işleme ve geçerli mevzuata bağlıdır. Lazer veya IPL gibi cihazlı uygulamalarda eksiksiz kayıt genellikle beklenir. Diğer tüm işlemlerde de hukuki güvence, kalite ve müşteri memnuniyeti için tavsiye edilir.",
      },
      {
        question: "Profesyonel bir işlem kaydında neler olmalı?",
        answer:
          "İşlem türü ve tarihi, ürünler ve parametreler, öncesi-sonrası fotoğraflar, cilt değerlendirmesi, seyir notları, bakım önerileri ve isteğe bağlı olarak müşterinin imzası.",
      },
      {
        question: "Öncesi-sonrası fotoğraflarını doğru nasıl çekerim?",
        answer:
          "Aynı koşullarda (ışık, açı, mesafe). Treatflow'da fotoğrafları doğrudan işlem kaydına ekler ve müşteri profiline bağlarsınız.",
      },
      {
        question: "Lazer ve IPL uygulamalarında neler kaydedilmeli?",
        answer:
          "Genellikle danışmanlık, onam, cihaz ayarları (ör. enerji, frekans, atım süresi), uygulama bölgesi, cilt reaksiyonu ve bakım önerileri.",
      },
      {
        question: "İşlem notlarını yazmak yerine sesle söyleyebilir miyim?",
        answer:
          "Evet. Kayıt ekranında notlarınızı sesle söylersiniz. Treatflow konuşmayı metne çevirir ve isterseniz yapay zekâyla düzenler. Kayıt tamamen otomatik olarak yazılmaz.",
      },
      {
        question: "Uygulama bölgelerini fotoğraflarda veya çizimlerde işaretleyebilir miyim?",
        answer:
          "Öncesi-sonrası fotoğraflarını doğrudan işleme kaydeder, bölgeleri fotoğraflar üzerinde işaretlersiniz; formlarda yüz veya vücut şablonlu çizim alanları vardır. Ayrı bir vücut haritası modülü yoktur.",
      },
    ],
  },
  related: {
    items: [
      { href: { page: "forms" }, title: "Formlar", description: "Dijital anamnez ve onam formları" },
      { href: { page: "client-records" }, title: "Müşteri takibi", description: "Geçmiş müşteri profilinde" },
      { href: { page: "appointment-calendar" }, title: "Randevu takvimi", description: "Kaydı randevudan açın" },
    ],
  },
  cta: {
    title: "Düzenli işlem kaydına hazır mısınız?",
    description: "30 gün ücretsiz deneyin – kredi kartı gerekmez. Kayıt, fotoğraflar ve imza tek uygulamada.",
    secondary: { label: "Dijital formlar", href: { page: "forms" } },
  },
};
