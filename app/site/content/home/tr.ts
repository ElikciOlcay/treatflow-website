import type { HomeContent } from "./types";

/**
 * Türkçe ana sayfa. `en.ts` ile aynı bölümler; Türkiye'de sunulmayan özellikler
 * (kasa, hediye çeki, WhatsApp, Treatflow Pay, Lexware, SumUp, NiSV) yok.
 * Deneme süresi 14 gün, fiyatlar TL (KDV hariç). Ürün videosu yok – mevcut film Almanca.
 */
export const homeTr: HomeContent = {
  meta: {
    title: "Güzellik Salonu Programı: Online Randevu ve Müşteri Takibi",
    description:
      "Güzellik salonları ve estetik klinikler için yönetim programı: komisyonsuz online randevu, müşteri takibi, dijital onam formları ve işlem kayıtları. İlk 100 işletmeye özel lansman fiyatı: Basic ₺1.490/ay, Booking ₺1.990/ay. 14 gün ücretsiz deneyin.",
    keywords: [
      "güzellik salonu programı",
      "güzellik merkezi programı",
      "güzellik salonu yazılımı",
      "salon yönetim programı",
      "online randevu sistemi",
      "dijital onam formu",
      "müşteri takip programı",
      "estetik klinik yazılımı",
      "lazer epilasyon programı",
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
        "Treatflow; güzellik salonları, medikal estetik klinikleri ve uygulama yapan tüm güzellik işletmeleri için hepsi bir arada yönetim platformudur. Online randevu, müşteri takibi, dijital anamnez ve onam formları, işlem kayıtları, öncesi-sonrası fotoğrafları ve otomatik takip mesajlarını tek sistemde birleştirir. Veriler AB sunucularında barındırılır.",
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
        "Online randevu destekli randevu takvimi",
        "Dijital müşteri kartları",
        "Anamnez ve onam formları",
        "Fotoğraflı işlem kayıtları",
        "İşlem notlarını sesle kaydetme",
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
      "Randevular, müşteri kartları, onam formları ve işlem kayıtları tek ve sade bir uygulamada. Ekibiniz ilk günden kolayca kullanır.",
    primaryCta: "14 gün ücretsiz deneyin",
    demoCta: "Demo talep edin",
    checks: ["Kredi kartı gerekmez", "2 dakikada kurulum", "Taahhüt yok"],
    rating: "Google'da 4,6/5",
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
    rating: "Google'da 4,6/5",
    allReviews: "Tüm yorumları görün",
    tested: { before: "", highlight: "500+ işletme", after: " tarafından denendi" },
    reviews: [
      {
        text: "Destek ekibi harika – her zaman nazik, güler yüzlü ve çözüm odaklı. Kesinlikle tavsiye ederim!",
        name: "Velura Saarburg",
        studio: "Lazer epilasyon",
      },
      {
        text: "Fiyatı rakipsiz, kullanımı çok kolay. Talebim bir gün içinde hayata geçirildi!",
        name: "Stefanie R.",
        studio: "Local Guide",
      },
      {
        text: "Phorest'ten geçtim – fiyat/performans harika. Gönül rahatlığıyla tavsiye ederim.",
        name: "Sharon U.",
        studio: "Güzellik salonu",
      },
    ],
    note: "Google yorumları Almancadan çevrilmiştir.",
  },

  studioDay: {
    eyebrow: "Bir randevu, tek sistem",
    title: "Randevudan bakım sonrasına kadar, hepsi tek uygulamada.",
    subtitle: "Treatflow'da bir randevunun yolculuğu. Hiçbir bilgiyi iki kez girmezsiniz.",
    steps: [
      {
        time: "Pzt · 21:14",
        module: "Online randevu",
        title: "Elif akşam evinde, kanepeden randevu alıyor.",
        text: "Telefon trafiği yok, randevu başına komisyon yok. Randevu anında takviminizde.",
        meta: "Cilt bakımı · Per 10:45",
        href: { page: "online-booking" },
        icon: "calendar-days",
        tone: "bg-indigo-50 text-indigo-600 ring-indigo-100",
      },
      {
        time: "Çar · 10:45",
        module: "Hatırlatma",
        title: "Hatırlatma kendiliğinden gider.",
        text: "Bir gün önce, e-postayla. Kimse aklında tutmak zorunda kalmaz, unutulan randevular azalır.",
        meta: "Gönderildi · onaylandı",
        href: { page: "messaging" },
        icon: "bell",
        tone: "bg-sky-50 text-sky-600 ring-sky-100",
      },
      {
        time: "Per · 10:40",
        module: "Onam formları",
        title: "Anamnez formu tablette dolduruldu ve imzalandı.",
        text: "Form doğrudan Elif'in müşteri kartına kaydedilir. Kâğıttan bilgisayara aktarma derdi yok.",
        meta: "Anamnez formu · dijital imzalı",
        href: { page: "forms" },
        icon: "file-pen-line",
        tone: "bg-violet-50 text-violet-600 ring-violet-100",
      },
      {
        time: "Per · 11:40",
        module: "İşlem kayıtları",
        title: "İşlem, fotoğraflarıyla kayıt altında.",
        text: "Parametreler, kullanılan ürünler ve öncesi-sonrası fotoğraflar işlem geçmişinde kalır.",
        meta: "3 fotoğraf · parametreler kaydedildi",
        href: { page: "treatment-documentation" },
        icon: "camera",
        tone: "bg-rose-50 text-rose-600 ring-rose-100",
      },
      {
        time: "Cum · 09:00",
        module: "Bakım sonrası",
        title: "Bakım takibi ve yeni randevu daveti kendiliğinden gider.",
        text: "Ertesi gün bakım önerileri, birkaç hafta sonra yeni randevu hatırlatması. Müşteri otomasyonu olarak bir kez kurarsınız, gerisi otomatik.",
        meta: "Otomasyon · sonraki adım 4 hafta sonra",
        href: { page: "customer-workflows", fallback: "messaging" },
        icon: "workflow",
        tone: "bg-emerald-50 text-emerald-600 ring-emerald-100",
      },
    ],
  },

  features: {
    title: "Daha az karmaşa. Müşterilerinize daha fazla zaman.",
    subtitle: "İşletmenizin ihtiyaç duyduğu her şey, ekibinizin hemen kullanabileceği tek bir uygulamada.",
    items: [
      { href: { page: "appointment-calendar" }, icon: "calendar-days", label: "Randevu takvimi", desc: "Tüm randevular net bir günlük ve haftalık görünümde.", color: "bg-indigo-100 text-indigo-600" },
      { href: { page: "online-booking" }, icon: "users", label: "Online randevu", desc: "Müşterileriniz randevusunu kendisi alır – mesai saatleri dışında bile.", color: "bg-emerald-100 text-emerald-600" },
      { href: { page: "client-records" }, icon: "file-text", label: "Müşteri takibi", desc: "Geçmiş işlemler, notlar ve fotoğraflar tek yerde, saniyeler içinde elinizde.", color: "bg-blue-100 text-blue-600" },
      { href: { page: "forms" }, icon: "clipboard-check", label: "Onam formları", desc: "Dijital anamnez ve onam formları, randevudan önce bağlantıyla doldurulur.", color: "bg-orange-100 text-orange-600" },
      { href: { page: "treatment-documentation" }, icon: "shield", label: "İşlem kayıtları", desc: "Her işlemi fotoğraf ve parametrelerle eksiksiz kaydedin.", color: "bg-teal-100 text-teal-600" },
      { href: { page: "shop" }, icon: "shopping-bag", label: "Mağaza", desc: "Ürün satışı ve stok yönetimi tek yerde.", color: "bg-amber-100 text-amber-600" },
      { href: { page: "messaging" }, icon: "bell", label: "Hatırlatmalar", desc: "Otomatik e-posta hatırlatmalarıyla randevuya gelmeyen müşteri sayısı azalır.", color: "bg-rose-100 text-rose-600" },
      { href: { page: "customer-workflows", fallback: "messaging" }, icon: "workflow", label: "Müşteri otomasyonları", desc: "Bakım takibini ve kayıp müşterileri geri kazanmayı adım adım otomatikleştirin.", color: "bg-violet-100 text-violet-600" },
    ],
    cta: "14 gün ücretsiz deneyin",
    ctaNote: "Kredi kartı gerekmez. İstediğiniz zaman iptal edin.",
  },

  support: {
    ariaLabel: "İlk günden birebir destek",
    badge: "Birebir destek",
    title: "Sizi yalnız bırakmıyoruz",
    text: "Kurulumdan ilk sorularınıza kadar: Ekibimiz Treatflow'a başlarken size birebir eşlik eder – böylece siz ve ekibiniz ilk günden itibaren güvenle çalışırsınız.",
    trialCta: "14 gün ücretsiz deneyin",
    demoCta: "Ücretsiz demo talep edin",
    imageAlt: "Treatflow ekibinden birebir destek",
    chip: "Birebir destek. Pakete dahil.",
  },

  pricing: {
    eyebrow: "Şeffaf fiyatlar",
    titleBefore: "Net fiyatlar –",
    titleHighlight: " gizli ücret yok",
    subtitle:
      "Treatflow'un aylık ücreti Basic için ₺1.490, Booking için ₺1.990. 14 gün ücretsiz deneyin – komisyon yok, risk yok.",
    monthly: "Aylık",
    yearly: "Yıllık",
    saveBadge: "%10 indirim",
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
      cta: "14 gün ücretsiz deneyin",
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
      cta: "14 gün ücretsiz deneyin",
    },
    trial: {
      title: "14 gün ücretsiz deneyin",
      text: "Kredi kartı gerekmez • İstediğiniz zaman iptal edin",
      points: ["Kurulum ücreti yok", "Aylık iptal", "KVKK kapsamında süreçler"],
    },
  },

  faq: {
    badge: "SSS",
    titleBefore: "Aklınızda soru mu var?",
    titleHighlight: " Yanıtları burada!",
    subtitle: "Treatflow hakkında en sık sorulan soruları sizin için yanıtladık.",
    items: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, salonunuzun günlük işleri için hepsi bir arada bir programdır: randevular, müşteri kartları, dijital formlar ve işlem kayıtları tek sistemde birbirine bağlıdır – randevu başına komisyon olmadan. Avusturya'da geliştirilmiştir, veriler AB sunucularında saklanır.",
      },
      {
        question: "Treatflow kimler için uygun?",
        answer: [
          "Uygulama yapan tüm güzellik işletmeleri için – cilt bakımı ve medikal estetikten lazer, tırnak, kirpik, kalıcı makyaj, masaj ve spa'ya kadar. ",
          { text: "Estetik klinik yazılımımız", href: { page: "aesthetic-clinic-software" } },
          " ve ",
          { text: "müşteri takibi", href: { page: "client-records" } },
          " hakkında daha fazla bilgi edinin.",
        ],
      },
      {
        question: "Treatflow'u ne kadar süre ücretsiz deneyebilirim?",
        answer:
          "Treatflow'u 14 gün boyunca tamamen ücretsiz deneyebilirsiniz. Kredi kartı gerekmez, gizli ücret yoktur. Deneme süresi bitince devam edip etmeyeceğinize siz karar verirsiniz.",
      },
      {
        question: "Basic ile Booking arasındaki fark nedir?",
        answer: [
          "Basic (aylık ₺1.490) sınırsız ",
          { text: "müşteri takibi", href: { page: "client-records" } },
          ", hazır form şablonları, sürükle-bırak form editörü ve mağazayı içerir. Booking (aylık ₺1.990) bunlara ek olarak size özel randevu bağlantısıyla profesyonel bir ",
          { text: "randevu takvimi", href: { page: "appointment-calendar" } },
          " ve otomatik ",
          { text: "randevu hatırlatmaları", href: { page: "messaging" } },
          " sunar.",
        ],
      },
      {
        question: "Treatflow KVKK ve GDPR'a uygun mu?",
        answer: [
          "Evet. Treatflow, AB Genel Veri Koruma Tüzüğü'ne (GDPR) tam uyumludur ve KVKK kapsamındaki yükümlülüklerinizi yerine getirmenize yardımcı olur. Tüm veriler şifrelenir ve Frankfurt'taki (Almanya) AB sunucularında güvenle saklanır. Bu, dijital ",
          { text: "anamnez formları", href: { page: "forms" } },
          " ve ",
          { text: "işlem kayıtları", href: { page: "treatment-documentation" } },
          " için de geçerlidir.",
        ],
      },
      {
        question: "Mevcut müşteri verilerimi aktarabilir miyim?",
        answer: [
          "Evet. Mevcut müşteri listelerinizi CSV dosyası olarak ",
          { text: "dijital müşteri kartlarınıza", href: { page: "client-records" } },
          " aktarırsınız; alan eşleştirme ve mükerrer kayıt tespiti dahil.",
        ],
      },
      {
        question: "Treatflow telefonumda çalışır mı?",
        answer:
          "Evet. Treatflow bilgisayarda, tablette ve akıllı telefonda çalışır. Müşteri ve randevu bilgilerinize nerede olursanız olun ulaşabilirsiniz.",
      },
      {
        question: "Aboneliğimi iptal edersem verilerime ne olur?",
        answer:
          "Verilerinizin kontrolü tamamen sizdedir. Aboneliğinizi iptal ettiğinizde tüm verilerinizi dışa aktarabilirsiniz. Verileriniz ancak belirli bir geçiş süresinin ardından tamamen silinir.",
      },
      {
        question: "Treatflow'u kullanmak için teknik bilgi gerekir mi?",
        answer:
          "Hayır. Treatflow'un kullanımı çok kolaydır. Herhangi bir kurulum gerekmez – tarayıcınızdan giriş yapıp hemen başlarsınız. Takıldığınız bir nokta olursa destek ekibimiz memnuniyetle yardımcı olur.",
      },
      {
        question: "Hazır form şablonları nasıl çalışır?",
        answer: [
          "Şablon kütüphanesinde tüm güzellik işlemleri için profesyonel ",
          { text: "formlar", href: { page: "forms" } },
          " bulursunuz. Bunları olduğu gibi kullanabilir veya sürükle-bırak düzenleyicide kendinize göre değiştirebilirsiniz. Dijital anamnez formları hemen kullanıma hazırdır.",
        ],
      },
      {
        question: "Sınırsız sayıda müşteri yönetebilir miyim?",
        answer:
          "Evet. Müşteri sayısında sınır yoktur. Sistem işletmenizle birlikte büyür; içe aktarma özelliğiyle mevcut müşteri listenizi kolayca taşıyabilirsiniz.",
      },
    ],
    contactTitle: "Başka bir sorunuz mu var?",
    contactText:
      "Destek ekibimiz memnuniyetle yardımcı olur. Bize e-posta göndermeniz yeterli.",
    demoCta: "Danışmanlık görüşmesi ayarlayın",
  },

  cta: {
    ariaLabel: "Hemen başlayın",
    title: "Salonunuzu daha düzenli yönetmeye hazır mısınız?",
    subtitle: "Bugün başlayın, salon yönetiminin ne kadar kolaylaşabileceğini görün.",
    checks: [
      "14 gün ücretsiz deneyin",
      "Kredi kartı gerekmez",
      "2 dakikada hazır",
      "Birebir destek",
    ],
    primaryCta: "Ücretsiz denemeyi başlatın",
    demoCta: "Demo talep edin",
    note: "İstediğiniz zaman iptal edin. KVKK kapsamında süreçler. Birebir destek.",
  },

  seo: {
    ariaLabel: "Daha fazla bilgi",
    intro: [
      "Treatflow; randevu takvimi, online randevu, dijital müşteri kartları, onam formları ve işlem kayıtlarını bir araya getiren bir ",
      { text: "güzellik salonu programıdır", href: { page: "beauty-salon-software" } },
      ". Komisyon almaz, verileri AB sunucularında barındırır ve Avusturya'da geliştirilmiştir.",
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
