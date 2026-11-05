import type { HomeContent } from "./types";

/**
 * Türkçe ana sayfa. `en.ts` ile aynı bölümler; Türkiye'de sunulmayan özellikler
 * (kasa, hediye çeki, WhatsApp, Treatflow Pay, Lexware, SumUp, NiSV) yok.
 * Deneme süresi 30 gün, fiyatlar TL (KDV hariç). Ürün videosu yok – mevcut film Almanca.
 */
export const homeTr: HomeContent = {
  meta: {
    title: "Güzellik Salonu Yazılımı: Randevu ve Müşteri Takibi",
    description:
      "Türkiye için salon yönetim yazılımı: komisyonsuz online randevu, müşteri takibi, dijital onam ve işlem kaydı. İlk 100 işletmeye lansman fiyatları: Basic ₺1.490/ay, Booking ₺1.990/ay. 30 gün ücretsiz deneyin.",
    keywords: [
      "güzellik salonu yazılımı",
      "salon yönetim yazılımı",
      "online randevu sistemi",
      "dijital onam formu",
      "müşteri takip programı",
      "estetik klinik yazılımı",
      "lazer epilasyon randevu",
    ],
  },

  schema: {
    software: {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: "Treatflow",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web Browser",
      inLanguage: "tr",
      description:
        "Treatflow; güzellik salonları, medikal estetik klinikleri ve işlem odaklı işletmeler için hepsi bir arada yönetim platformudur. Online randevu, müşteri takibi, dijital anamnez ve onam formları, işlem kayıtları, öncesi-sonrası fotoğraflar ve otomatik takip mesajlarını tek sistemde birleştirir. Veriler AB sunucularında barındırılır.",
      url: "https://www.treatflow.io/tr",
      author: { "@type": "Organization", name: "Treatflow", url: "https://www.treatflow.io" },
      offers: [
        {
          "@type": "Offer",
          name: "Basic",
          price: "1490",
          priceCurrency: "TRY",
          billingIncrement: "P1M",
          description: "Müşteri takibi, onam formları ve işlem kayıtları",
        },
        {
          "@type": "Offer",
          name: "Booking",
          price: "1990",
          priceCurrency: "TRY",
          billingIncrement: "P1M",
          description: "Randevu takvimi, online randevu ve otomatik hatırlatmalar",
        },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.6",
        ratingCount: "19",
        reviewCount: "19",
        bestRating: "5",
        worstRating: "1",
      },
      featureList: [
        "Online randevulu randevu takvimi",
        "Dijital müşteri kartları",
        "Anamnez ve onam formları",
        "Fotoğraflı işlem kayıtları",
        "İşlem notları için sesli not",
        "Otomatik e-posta hatırlatmaları",
        "Müşteri otomasyonları",
      ],
    },
  },

  hero: {
    badge: "Büyümek isteyen güzellik işletmeleri için",
    title: {
      before: "Randevu karmaşasına,",
      highlight: "kâğıt işlerine",
      connector: "ve gelmeyen",
      end: "müşterilere son",
    },
    subtitle:
      "Randevular, müşteriler, onam formları ve işlem kayıtları tek ve sade bir uygulamada. Ekibiniz hemen alışır.",
    primaryCta: "30 gün ücretsiz deneyin",
    demoCta: "Demo talep edin",
    checks: ["Kredi kartı gerekmez", "2 dakikada hazır", "Ücretsiz veri aktarımı"],
    rating: "Google'da 4.6/5",
    tested: { before: "", highlight: "500+ işletme", after: " tarafından denendi" },
    calendarLocale: "tr-TR",
    newBookingLabel: "Yeni randevu",
    image: {
      src: "/images/lifestyle/hero-startseite-tr.png",
      alt: "Treatflow güzellik merkezi yazılımında randevu, müşteri kaydı ve dijital onam ekranları",
    },
    liveDemo: { href: { page: "try-features" }, label: "Özellikleri canlı deneyin" },
  },

  socialProof: {
    rating: "Google'da 4.6/5",
    allReviews: "Tüm yorumları gör",
    tested: { before: "", highlight: "500+ işletme", after: " tarafından denendi" },
    reviews: [
      {
        text: "Destek ekibi mükemmel – her zaman nazik, güler yüzlü ve çözüm odaklı. Kesinlikle tavsiye ederim!",
        name: "Velura Saarburg",
        studio: "Lazer epilasyon",
      },
      {
        text: "Fiyatı rakipsiz, kullanımı çok kolay. İsteğim bir gün içinde hayata geçirildi!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Phorest'ten geçtim – fiyat-performans harika. Gönül rahatlığıyla tavsiye edebilirim.",
        name: "Sharon U.",
        studio: "Güzellik salonu",
      },
    ],
    note: "Google yorumları, Almancadan çevrilmiştir.",
  },

  studioDay: {
    eyebrow: "Tek randevu, tek sistem",
    title: "Randevudan bakım sonrasına kadar. Tek uygulamada.",
    subtitle: "Treatflow ile bir randevu böyle ilerler. Hiçbir şeyi iki kez girmeniz gerekmez.",
    steps: [
      {
        time: "Pzt · 21:14",
        module: "Online randevu",
        title: "Lena akşam koltuğundan randevu alıyor.",
        text: "Telefon yok, randevu başına komisyon yok. Randevu anında takvimde.",
        meta: "Cilt bakımı · Per 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "Çar · 10:45",
        module: "Hatırlatma",
        title: "Hatırlatma otomatik olarak gönderilir.",
        text: "Bir gün önce, e-postayla. Kimse düşünmek zorunda kalmadan daha az unutulan randevu.",
        meta: "İletildi · onaylandı",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "Per · 10:40",
        module: "Onam formları",
        title: "Anamnez formu tablette dolduruldu ve imzalandı.",
        text: "Form doğrudan Lena'nın müşteri kartına kaydedilir. Sonradan kâğıttan aktarmaya gerek yok.",
        meta: "Anamnez formu · dijital imzalı",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "Per · 11:40",
        module: "İşlem kayıtları",
        title: "İşlem fotoğraflarla kayıt altında.",
        text: "Parametreler, kullanılan ürünler ve öncesi-sonrası fotoğraflar işlem geçmişinde kalır.",
        meta: "3 fotoğraf · parametreler kaydedildi",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "Cum · 09:00",
        module: "Bakım sonrası",
        title: "Bakım sonrası takip ve yeni randevu kendiliğinden ilerler.",
        text: "Ertesi gün bir bakım önerisi, birkaç hafta sonra yeni randevu hatırlatması. Müşteri otomasyonu olarak bir kez kurulur.",
        meta: "Otomasyon · sonraki adım 4 hafta sonra",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Daha az karmaşa. Müşterilerinize daha fazla zaman.",
    subtitle: "İşletmenizin ihtiyaç duyduğu her şey – ekibinizin hemen anlayacağı tek bir uygulamada.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Randevu takvimi", desc: "Tüm randevular net bir günlük ve haftalık görünümde.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Online randevu", desc: "Müşterileriniz kendileri randevu alır – çalışma saatleriniz dışında da.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Müşteri takibi", desc: "Geçmiş, notlar ve fotoğraflar tek yerde, hızlıca bulunur.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Onam formları", desc: "Dijital anamnez ve onam formları, bağlantıyla önceden doldurulur.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "İşlem kayıtları", desc: "Her işlemi fotoğraf ve parametrelerle eksiksiz kaydedin.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "shop" }, icon: "shopping-bag", label: "Mağaza", desc: "Ürün satışı ve stok yönetimi tek yerde.", color: "bg-amber-100 text-amber-600" },
      { href: { page: "messaging" }, icon: "bell", label: "Hatırlatmalar", desc: "Otomatik e-posta hatırlatmaları gelmeyen müşteri sayısını azaltır.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Müşteri otomasyonları", desc: "Bakım sonrası takibi ve müşteri geri kazanımını adım adım otomatikleştirin.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "30 gün ücretsiz deneyin",
    ctaNote: "Kredi kartı gerekmez. İstediğiniz zaman iptal edin.",
  },

  pricing: {
    eyebrow: "Şeffaf fiyatlar",
    titleBefore: "Net fiyat –",
    titleHighlight: " gizli ücret yok",
    subtitle:
      "Treatflow aylık ₺1.490 (Basic) veya ₺1.990 (Booking) ile başlar. 30 gün ücretsiz deneyin – komisyon yok, risk yok.",
    monthly: "Aylık",
    yearly: "Yıllık",
    saveBadge: "%10 tasarruf",
    perMonth: "/ay",
    perYear: "/yıl",
    vatNote: "KDV hariç",
    basic: {
      name: "Basic",
      monthlyPrice: "₺1.490",
      yearlyPrice: "₺16.100",
      yearlyHint: "₺1.342/ay • Yılda ₺1.780 tasarruf",
      description: "Dijital anamnez formları, müşteri takibi ve işlem kayıtları – randevu takvimi olmadan.",
      included: [
        "Müşteri takibi",
        "Dijital imzalı formlar",
        "İşlem kayıtları ve sesli not",
        "Öncesi-sonrası fotoğraflar",
        "Ekip notları ve görevler",
        "Mağaza ve ürünler",
        "Raporlar",
        "Çalışanlar ve roller",
        "E-posta desteği",
      ],
      excluded: [
        "Randevu takvimi",
        "Online randevu",
        "Otomasyonlar ve bekleme listesi",
        "Öncelikli destek",
      ],
      cta: "30 gün ücretsiz deneyin",
    },
    booking: {
      name: "Booking",
      popular: "En çok tercih edilen",
      monthlyPrice: "₺1.990",
      yearlyPrice: "₺21.500",
      yearlyHint: "₺1.792/ay • Yılda ₺2.380 tasarruf",
      description: "İşletmeniz için randevu takvimi, online randevu ve otomatik hatırlatmalar.",
      included: [
        "Basic'teki her şey",
        "Personel ve oda sütunlu takvim",
        "Komisyonsuz online randevu",
        "Bekleme listesi",
        "E-posta hatırlatmaları",
        "Müşteri otomasyonları",
        "İndirim kodları",
        "Çok dilli randevu sayfası",
        "Entegrasyonlar (Google Takvim, Zapier, yapay zekâ asistanları)",
        "Öncelikli e-posta ve sohbet desteği",
      ],
      cta: "30 gün ücretsiz deneyin",
    },
    trial: {
      title: "30 gün ücretsiz deneyin",
      text: "Kredi kartı gerekmez • İstediğiniz zaman iptal • Ücretsiz veri aktarımı",
      points: ["Kurulum ücreti yok", "Aylık iptal", "KVKK kapsamında süreçler"],
    },
  },

  faq: {
    badge: "SSS",
    titleBefore: "Sorunuz mu var?",
    titleHighlight: " Cevaplarımız hazır!",
    subtitle: "Treatflow hakkında en sık sorulan soruların cevaplarını burada bulabilirsiniz.",
    items: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, salonunuzun günlük işleri için hepsi bir arada bir uygulamadır: randevular, müşteri kartları, dijital formlar ve işlem kayıtları tek bir sistemde birbirine bağlıdır – randevu başına komisyon olmadan. Avusturya'da geliştirildi, veriler AB sunucularında saklanır.",
      },
      {
        question: "Treatflow kimler için uygun?",
        answer: [
          "İşlem yapan tüm işletmeler için – güzellik ve estetikten lazer, tırnak, kirpik, kalıcı makyaj, masaj ve spa'ya kadar. ",
          { text: "Estetik klinik yazılımımız", href: { page: "aesthetic-clinic-software" } },
          " ve ",
          { text: "müşteri takibi", href: { page: "client-records" } },
          " hakkında daha fazla bilgi alın.",
        ],
      },
      {
        question: "Treatflow'u ne kadar süre ücretsiz deneyebilirim?",
        answer:
          "Treatflow'u 30 gün boyunca tamamen ücretsiz deneyebilirsiniz. Kredi kartı gerekmez, gizli maliyet yoktur. Deneme süresinden sonra devam edip etmeyeceğinize siz karar verirsiniz.",
      },
      {
        question: "Basic ile Booking arasındaki fark nedir?",
        answer: [
          "Basic (aylık ₺1.490) sınırsız ",
          { text: "müşteri takibi", href: { page: "client-records" } },
          ", form pazaryeri, yapay zekâ form oluşturucu ve mağazayı içerir. Booking (aylık ₺1.990) buna kendi randevu bağlantınızla profesyonel ",
          { text: "randevu takvimini", href: { page: "appointment-calendar" } },
          " ve otomatik ",
          { text: "randevu hatırlatmalarını", href: { page: "messaging" } },
          " ekler.",
        ],
      },
      {
        question: "Treatflow KVKK ve GDPR'a uygun mu?",
        answer: [
          "Evet. Treatflow, AB Genel Veri Koruma Tüzüğü'ne (GDPR) tam uyumludur ve KVKK kapsamındaki süreçlerinizi destekler. Tüm veriler şifrelenir ve Almanya'nın Frankfurt kentindeki AB sunucularında güvenle saklanır. Dijital ",
          { text: "anamnez formları", href: { page: "forms" } },
          " ve ",
          { text: "işlem kayıtları", href: { page: "treatment-documentation" } },
          " da buna dahildir.",
        ],
      },
      {
        question: "Mevcut müşteri verilerimi aktarabilir miyim?",
        answer: [
          "Evet, verilerinizi ücretsiz olarak aktarmanıza yardımcı oluyoruz. Destek ekibimiz mevcut müşteri verilerinizi ",
          { text: "dijital müşteri kartlarınıza", href: { page: "client-records" } },
          " güvenle aktarmanıza yardımcı olur.",
        ],
      },
      {
        question: "Treatflow telefonumda çalışır mı?",
        answer:
          "Evet. Treatflow bilgisayar, tablet ve akıllı telefon gibi tüm cihazlarda çalışır. Müşteri ve randevu bilgilerinize nerede olursanız olun erişebilirsiniz.",
      },
      {
        question: "Aboneliğimi iptal edersem verilerime ne olur?",
        answer:
          "Verilerinizin kontrolü tamamen sizdedir. İptal ettiğinizde tüm verilerinizi dışa aktarabilirsiniz. Verilerinizi ancak bir geçiş süresinden sonra tamamen sileriz.",
      },
      {
        question: "Treatflow'u kullanmak için teknik bilgi gerekir mi?",
        answer:
          "Hayır. Treatflow'un kullanımı çok kolaydır. Kurulacak bir şey yoktur – tarayıcınızdan giriş yapıp hemen başlayabilirsiniz. Sorularınız olursa destek ekibimiz memnuniyetle yardımcı olur.",
      },
      {
        question: "Form pazaryeri nasıl çalışır?",
        answer: [
          "Pazaryerinde tüm güzellik işlemleri için profesyonel ",
          { text: "formlar", href: { page: "forms" } },
          " bulursunuz. Bunları olduğu gibi kullanabilir, yapay zekâ oluşturucuyla uyarlayabilir veya sürükle-bırak düzenleyicide kişiselleştirebilirsiniz. Dijital anamnez formları hemen kullanıma hazırdır.",
        ],
      },
      {
        question: "Sınırsız sayıda müşteri yönetebilir miyim?",
        answer:
          "Evet. İstediğiniz kadar müşteri yönetebilirsiniz. Sistem işletmenizle birlikte büyür; içe aktarma özelliği sayesinde mevcut müşteri verilerinizi kolayca taşıyabilirsiniz.",
      },
    ],
    contactTitle: "Başka sorunuz mu var?",
    contactText:
      "Destek ekibimiz memnuniyetle yardımcı olur. Bize e-posta gönderin veya doğrudan bir danışmanlık görüşmesi planlayın.",
    demoCta: "Danışmanlık görüşmesi planlayın",
  },

  cta: {
    ariaLabel: "Hemen başlayın",
    title: "Salonunuzu daha düzenli yönetmeye hazır mısınız?",
    subtitle: "Bugün başlayın ve salon organizasyonunun ne kadar kolay olabileceğini görün.",
    checks: [
      "30 gün ücretsiz deneyin",
      "Kredi kartı gerekmez",
      "2 dakikada hazır",
      "Kişisel destek ve yardım",
    ],
    primaryCta: "Ücretsiz denemeyi başlatın",
    demoCta: "Demo talep edin",
    note: "İstediğiniz zaman iptal edin. KVKK kapsamında süreçler. Kişisel destek ve yardım.",
  },

  seo: {
    ariaLabel: "Daha fazla bilgi",
    intro: [
      "Treatflow; randevu takvimi, online randevu, dijital müşteri kartları, onam formları ve işlem kayıtları sunan ",
      { text: "güzellik salonu yazılımıdır", href: { page: "beauty-salon-software" } },
      " – komisyonsuz, AB sunucularında ve Avusturya'da geliştirildi.",
    ],
    links: [
      { href: { page: "client-records" }, label: "Müşteri takip programı" },
      { href: { page: "online-booking" }, label: "Online randevu sistemi" },
      { href: { page: "treatment-documentation" }, label: "İşlem kayıtları" },
      { href: { page: "forms" }, label: "Dijital onam formları" },
      { href: { page: "messaging" }, label: "Randevu hatırlatmaları" },
      { href: { page: "software-comparison" }, label: "Yazılım karşılaştırması" },
      { href: { page: "treatflow-vs-treatwell" }, label: "Treatflow vs Treatwell" },
      { href: { page: "treatflow-vs-fresha" }, label: "Treatflow vs Fresha" },
    ],
  },
};
