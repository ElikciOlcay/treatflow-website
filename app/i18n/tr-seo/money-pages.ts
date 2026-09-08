import type { TrMoneyPageContent } from "@/app/components/tr-seo/TrMoneyPage";
import { TR_PATHS } from "./paths";

const DATE = "2026-09-07";

const pricingText =
  "Türkiye lansman fiyatları ilk 100 işletme için Basic pakette aylık 1.490 TL, Booking pakette aylık 1.990 TL'dir. 30 gün ücretsiz deneyin. Kredi kartı gerekmez. Randevu başına komisyon yoktur.";

const sharedRelated = {
  center: {
    href: TR_PATHS.beautyCenter,
    label: "Güzellik merkezi programı",
    desc: "Randevu, müşteri, onam, işlem kaydı ve takip tek akışta.",
  },
  salon: {
    href: TR_PATHS.beautySalon,
    label: "Güzellik salonu programı",
    desc: "Küçük ve orta salonlar için randevu ve müşteri takibi.",
  },
  laser: {
    href: TR_PATHS.laser,
    label: "Lazer epilasyon programı",
    desc: "Seans kaydı, onam, fotoğraf ve sonraki randevu.",
  },
  crm: {
    href: TR_PATHS.crm,
    label: "Müşteri takip programı",
    desc: "Kart, işlem geçmişi, formlar ve fotoğraflar.",
  },
  booking: {
    href: TR_PATHS.booking,
    label: "Online randevu sistemi",
    desc: "7/24 randevu. Süreç randevuyla bitmez.",
  },
  pricing: {
    href: TR_PATHS.pricing,
    label: "Fiyatlar",
    desc: "TL fiyatlar, 30 gün deneme, komisyon yok.",
  },
  forms: {
    href: TR_PATHS.forms,
    label: "Dijital onam formları",
    desc: "Anamnez ve imza müşteri kaydına bağlanır.",
  },
  docs: {
    href: TR_PATHS.docs,
    label: "İşlem dokümantasyonu",
    desc: "Not, sesli not ve öncesi-sonrası fotoğraf.",
  },
};

export const beautyCenterPage: TrMoneyPageContent = {
  pageKey: "beauty-center-software",
  path: TR_PATHS.beautyCenter,
  keywordCluster: "guzellik-merkezi-programi",
  title: "Güzellik Merkezi Programı",
  description:
    "Güzellik merkezi yazılımı: randevu, müşteri takibi, dijital onam, işlem kaydı ve fotoğraf tek uygulamada. 30 gün ücretsiz deneyin.",
  h1: "Güzellik merkezi programı: randevu ile bitmeyen bir sistem",
  eyebrow: "Güzellik merkezleri ve medikal estetik işletmeleri",
  subtitle:
    "Treatflow bir randevu defteri değildir. Randevu, müşteri kaydı, dijital form, onam, işlem, dokümantasyon, fotoğraf, geçmiş ve işlem sonrası takip aynı dosyada durur.",
  heroBullets: [
    "Personel ve oda sütunlu randevu takvimi",
    "Dijital anamnez ve imzalı onam",
    "İşlem kaydı, sesli not ve öncesi-sonrası fotoğraf",
    "WhatsApp ve e-posta hatırlatması (SMS kanalı yok)",
  ],
  heroImage: {
    src: "/images/lifestyle/hero-startseite-tr.png",
    alt: "Treatflow güzellik merkezi yazılımı: randevu takvimi ve müşteri kaydı ekranı",
  },
  whatTitle: "Treatflow güzellik merkezi programı nedir?",
  whatParas: [
    "Treatflow, güzellik merkezleri, lazer epilasyon stüdyoları ve medikal estetik işletmeleri için salon yönetim yazılımıdır. Avusturya'da geliştirilir. Müşteri verileri Frankfurt'taki AB sunucularında, KVKK kapsamında saklanır.",
    "Klasik randevu programı saati doldurur. Treatflow müşterinin o güne nasıl geldiğini, hangi formu imzaladığını, hangi parametrelerle işlem gördüğünü ve bir sonraki seansın ne zaman olduğunu aynı kartta tutar.",
    "Pazaryeri değildir. Online randevu sizin sayfanızdan gelir; randevu başına komisyon yoktur. Türkiye lansmanında 30 gün ücretsiz deneme vardır, kredi kartı gerekmez.",
  ],
  whoTitle: "Kimler için?",
  audiences: [
    "Birden fazla uzmanın çalıştığı güzellik merkezleri",
    "Lazer epilasyon merkezleri",
    "Medikal estetik / cilt klinikleri",
    "Kalıcı makyaj ve kombineli merkezler",
    "Seanslı paket satan işletmeler",
    "Onam ve işlem kaydı tutmak zorunda olan ekipler",
  ],
  problemTitle: "Güzellik merkezinde randevu yazılımı yetmez",
  problems: [
    {
      problem: "Randevu bir yerde, onam kâğıtta, fotoğraf telefonda",
      solution:
        "Treatflow'da form, imza, işlem notu ve fotoğraf aynı müşteri kaydına bağlanır. Personel seansa başlarken dosyayı aramaz.",
    },
    {
      problem: "Hangi müşteriye hangi cihaz ayarı uygulandı belirsiz",
      solution:
        "Her ziyaret işlem kaydıdır. Notlar, isteğe bağlı sesli not ve fotoğraflar seansa yazılır. Bir sonraki randevuda geçmiş açıktır.",
    },
    {
      problem: "Takvim dolu görünür, takip boş kalır",
      solution:
        "Hatırlatmalar WhatsApp ve e-posta ile gider. Müşteri otomasyonları işlem sonrası takibi randevuya bağlar. SMS desteklenen bir mesaj kanalı değildir.",
    },
  ],
  workflowTitle: "Merkezdeki gerçek akış",
  workflowSubtitle:
    "Randevu ilk adımdır. Treatflow bu zinciri tek müşteri dosyasında tutar.",
  workflowSteps: [
    { href: TR_PATHS.booking, label: "Randevu", desc: "Online veya resepsiyondan takvime düşer." },
    { href: TR_PATHS.crm, label: "Müşteri", desc: "Kart açılır veya mevcut dosya bulunur." },
    { href: TR_PATHS.forms, label: "Dijital form", desc: "Anamnez randevu öncesi doldurulur." },
    { href: TR_PATHS.forms, label: "Onam", desc: "İmza müşteri kaydına işlenir." },
    { href: TR_PATHS.docs, label: "İşlem", desc: "Personel seansı kayda bağlar." },
    { href: TR_PATHS.docs, label: "Dokümantasyon", desc: "Not ve sesli not aynı ziyarette kalır." },
    { href: TR_PATHS.docs, label: "Fotoğraflar", desc: "Öncesi-sonrası seansa eklenir." },
    { href: TR_PATHS.crm, label: "Geçmiş", desc: "Tüm ziyaretler tek kartta görünür." },
    { href: TR_PATHS.messaging, label: "İşlem sonrası takip", desc: "Hatırlatma ve otomasyon tetiklenir." },
    { href: TR_PATHS.calendar, label: "Sonraki randevu", desc: "Takvimden sonraki seans planlanır." },
  ],
  featuresTitle: "Güzellik merkezi yazılımında olması gerekenler",
  features: [
    {
      title: "Randevu",
      desc: "Günlük, haftalık, aylık görünüm. Personel ve oda sütunları Booking paketinde.",
    },
    {
      title: "Müşteri yönetimi",
      desc: "Kart, not, iletişim ve geçmiş. Excel veya WhatsApp sohbeti yerine tek dosya.",
    },
    {
      title: "Dijital formlar",
      desc: "Anamnez ve onam randevu öncesi gönderilir. Yanıtlar kayda bağlanır.",
    },
    {
      title: "Onam",
      desc: "Dijital imza. Kâğıt arşivi yerine müşteri kartındaki imzalı form.",
    },
    {
      title: "İşlem dokümantasyonu",
      desc: "Seans notları, parametreler, sesli not. Konuşarak yazılır, metne çevrilir.",
    },
    {
      title: "Fotoğraflar",
      desc: "Öncesi-sonrası görseller ziyarete bağlanır, galeride kaybolmaz.",
    },
    {
      title: "Müşteri geçmişi",
      desc: "Kim ne zaman hangi işlemi gördü: tek zaman çizelgesi.",
    },
    {
      title: "Otomasyonlar",
      desc: "Booking paketinde müşteri otomasyonları ve bekleme listesi.",
    },
    {
      title: "Yapay zeka",
      desc: "İşlem kaydında sesli not. Metne çeviri, seansa kaydedilir. Müşteri kaybı tahmini yoktur.",
    },
    {
      title: "Personel",
      desc: "Çalışan rolleri, ekip notları ve görevler. Takvimde uzman bazlı planlama.",
    },
    {
      title: "İşlem sonrası takip",
      desc: "WhatsApp ve e-posta hatırlatması. Sonraki seans unutulmasın diye.",
    },
  ],
  screenshots: [
    {
      src: "/images/lifestyle/terminkalender-wochenplanung.png",
      alt: "Treatflow güzellik merkezi randevu takvimi ekranı",
      caption: "Personel bazlı takvim: çakışma ve boş slot aynı bakışta.",
    },
    {
      src: "/images/lifestyle/kundenverwaltung-kartei.png",
      alt: "Treatflow güzellik merkezi müşteri yönetimi ekranı",
      caption: "Müşteri kartı: randevu, form, işlem ve fotoğraf bir arada.",
    },
    {
      src: "/images/lifestyle/formulare-digital-ausfuellen.png",
      alt: "Treatflow dijital onam ve anamnez formu",
      caption: "Form seans başlamadan imzalanır, kâğıt klasörüne girmez.",
    },
    {
      src: "/images/lifestyle/dokumentation-vorher-nachher.png",
      alt: "Treatflow işlem kaydı ve öncesi-sonrası fotoğraf",
      caption: "Fotoğraf ve not aynı işleme bağlıdır.",
    },
  ],
  whyCalendarTitle: "Neden sadece takvim yetmez?",
  whyCalendarParas: [
    "Takvim koltuğu doldurur. Güzellik merkezinde asıl risk, işlem geçmişinin dağılmasıdır: cihaz ayarı, cilt reaksiyonu, imzalı onam, sonraki seans tarihi.",
    "Treatflow randevuyu müşteri dosyasının başlangıcı olarak kullanır. Takvim yazılımlarının çoğu burada durur. Treatflow ise onam, dokümantasyon ve fotoğraf arşiviyle devam eder.",
    "Kasa, adisyon ve hediye çeki Treatflow Türkiye'de sunulmaz. DACH pazarına özeldir. Türkiye'de odak: müşteri ve tedavi süreci.",
  ],
  pricingTitle: "Ne kadar? Ücretsiz denenebilir mi?",
  pricingText,
  faqs: [
    {
      question: "Türkiye'de güzellik merkezi için en iyi program hangisi?",
      answer:
        "En iyi program, sizin işinize bağlıdır. Sadece randevu ve kasa istiyorsanız yerel randevu yazılımları yeterli olabilir. Onam, işlem kaydı ve fotoğraf aynı dosyada durmalıysa Treatflow bu iş için tasarlandı. 30 gün deneyip karar verin.",
    },
    {
      question: "Güzellik merkezi programında hangi özellikler olmalı?",
      answer:
        "Randevu, müşteri kartı, dijital form, onam, işlem kaydı, fotoğraf, personel planı ve işlem sonrası takip. Treatflow bunları sunar. Türkiye'de kasa/POS ve SMS hatırlatma sunulmaz.",
    },
    {
      question: "Geçiş nasıl işler?",
      answer:
        "Kayıt olun, 30 gün tüm özellikleri kullanın. Mevcut müşteri verilerinin aktarımında yardımcı oluruz. Kredi kartı gerekmez.",
    },
    {
      question: "Veriler nerede tutulur?",
      answer:
        "Veriler Frankfurt'taki AB sunucularında SSL şifreleme ve günlük yedeklemeyle saklanır. Müşteri verilerinin kontrolü işletmenizde kalır. Treatflow, %100 KVKK sertifikalı olduğu iddiasında bulunmaz.",
    },
  ],
  related: [
    sharedRelated.salon,
    sharedRelated.laser,
    sharedRelated.crm,
    sharedRelated.booking,
    sharedRelated.forms,
    sharedRelated.pricing,
    {
      href: TR_PATHS.guideHowToChoose,
      label: "Program seçerken nelere bakmalı",
      desc: "Satın alma kontrol listesi.",
    },
    {
      href: TR_PATHS.guideComparison2026,
      label: "2026 karşılaştırma yazısı",
      desc: "Türkiye'deki programlara bakış.",
    },
  ],
  serviceName: "Güzellik merkezi programı",
  featureList: [
    "Randevu takvimi",
    "Müşteri yönetimi",
    "Dijital formlar",
    "Onam",
    "İşlem dokümantasyonu",
    "Fotoğraf yönetimi",
    "Otomasyon",
    "Yapay zeka sesli not",
  ],
  dateModified: DATE,
};

export const beautySalonPage: TrMoneyPageContent = {
  pageKey: "beauty-salon-software",
  path: TR_PATHS.beautySalon,
  keywordCluster: "guzellik-salonu-programi",
  title: "Güzellik Salonu Programı",
  description:
    "Güzellik salonu yazılımı ve randevu programı: müşteri kartı, dijital onam, işlem notu. 30 gün ücretsiz deneyin, komisyon yok.",
  h1: "Güzellik salonu programı: randevu, müşteri ve onam aynı yerde",
  eyebrow: "Güzellik salonları ve butik stüdyolar",
  subtitle:
    "İki koltuklu salon da, büyüyen ekip de aynı sorunu yaşar: Instagram'dan gelen randevu, kâğıt form ve telefonda kalan müşteri notu. Treatflow bunları tek uygulamada toplar.",
  heroBullets: [
    "Instagram, Google ve web'den 7/24 randevu",
    "Müşteri kartı: not, geçmiş, fotoğraf",
    "Dijital onam – seans öncesi imza",
    "30 gün ücretsiz, kredi kartı yok",
  ],
  heroImage: {
    src: "/images/lifestyle/online-buchung-smartphone.png",
    alt: "Treatflow güzellik salonu online randevu ekranı telefonda",
  },
  whatTitle: "Güzellik salonu yazılımı ne işe yarar?",
  whatParas: [
    "Salon yazılımı, kuaför randevu uygulamasından farklı durmalıdır. Cilt bakımı, kirpik, tırnak veya lazer ek hizmeti olan salonlarda her ziyaret bir kayıt ister: hangi ürün, hangi bölge, müşteri neyi imzaladı.",
    "Treatflow güzellik salonu programı olarak takvimi, müşteri kartını ve formları birleştirir. Büyük klinik dili kullanmaz. Hedef: resepsiyonun WhatsApp'tan randevu avlamayı bırakması.",
    "Online randevu Booking paketindedir ve komisyonsuzdur. Basic paket takvim olmadan müşteri takibi, onam ve işlem kaydı sunar – belgeleme öncelikli salonlar için.",
  ],
  whoTitle: "Bu sayfa kimin araması?",
  audiences: [
    "Tek usta veya küçük ekip güzellik salonları",
    "Cilt bakımı ve bölgesel epilasyon yapan stüdyolar",
    "Kirpik, kaş ve tırnak salonu kombinasyonları",
    "Instagram'dan randevu alan işletmeler",
    "Kâğıt anamnezden çıkmak isteyen salonlar",
  ],
  problemTitle: "Salonda günlük kopukluk",
  problems: [
    {
      problem: "Randevu Instagram DM, not defteri ve hafızada",
      solution:
        "Müşteri linkten saat seçer. Siz onay kuralını belirlersiniz. Telefonla gelen talep aynı takvime yazılır.",
    },
    {
      problem: "Yeni personel müşteriyi tanımıyor",
      solution:
        "Kartta son işlem, alerji notu ve fotoğraf durur. Teslimat 30 saniyede olur, sohbet geçmişinde aranmaz.",
    },
    {
      problem: "Onam kâğıdı ıslanır veya kaybolur",
      solution:
        "Form randevu öncesi telefonda doldurulur, imza kayda düşer. Seans başında evrak aranmaz.",
    },
  ],
  workflowTitle: "Küçük salonda Treatflow günü",
  workflowSubtitle: "Merkez kadar karmaşık olmak zorunda değil. Zincir aynı, tempo daha kısa.",
  workflowSteps: [
    { href: TR_PATHS.booking, label: "Randevu", desc: "Link veya telefon, tek takvim." },
    { href: TR_PATHS.crm, label: "Müşteri kartı", desc: "Yeni misafir veya kayıtlı isim." },
    { href: TR_PATHS.forms, label: "Form", desc: "İlk seans öncesi anamnez." },
    { href: TR_PATHS.docs, label: "İşlem notu", desc: "Kullanılan ürün ve bölge yazılır." },
    { href: TR_PATHS.docs, label: "Fotoğraf", desc: "İstenirse öncesi-sonrası eklenir." },
    { href: TR_PATHS.messaging, label: "Hatırlatma", desc: "Sonraki bakım WhatsApp/e-posta." },
  ],
  featuresTitle: "Salona özel, şişirmeden",
  features: [
    { title: "Randevu programı", desc: "Çakışmayı görün. Personel sütunu Booking paketinde." },
    { title: "Online randevu", desc: "Profil bio'suna tek link. Komisyon yok." },
    { title: "Müşteri takibi", desc: "Tercihler, notlar, son ziyaret." },
    { title: "Dijital onam", desc: "Örnek formları sitede deneyebilirsiniz." },
    { title: "Hatırlatmalar", desc: "WhatsApp ve e-posta. SMS yok." },
    { title: "Mağaza", desc: "Ürün satışı kaydı. Kasa/POS Türkiye'de yok." },
  ],
  screenshots: [
    {
      src: "/images/lifestyle/online-buchung-smartphone.png",
      alt: "Treatflow güzellik salonu randevu sayfası",
      caption: "Müşteri müsait saati görür, siz doluluğu kontrol edersiniz.",
    },
    {
      src: "/images/mockups/kundenverwaltung-overview.png",
      alt: "Treatflow güzellik salonu müşteri listesi",
      caption: "Arama: isim, telefon, son işlem.",
    },
  ],
  whyCalendarTitle: "Randevu programı ile salon yazılımı farkı",
  whyCalendarParas: [
    "Güzellik salonu randevu programı arayan çoğu işletme aslında randevuya gelmeyen müşterilerden ve unutulan müşteri notlarından şikâyet eder. Takvim tek başına ikisini de çözmez.",
    "Treatflow randevuyu müşteri dosyasına bağlar. Bu yüzden bu sayfa sadece 'saat seçici' vaat etmez. Form, not ve fotoğraf aynı üründedir.",
    "Büyük merkezler için ayrı sayfa vardır: güzellik merkezi programı. Salon sayfası daha kısa ekip ve günlük resepsiyon işine odaklanır.",
  ],
  pricingTitle: "Fiyat ve deneme",
  pricingText,
  faqs: [
    {
      question: "Güzellik salonu için hangi program kullanılmalı?",
      answer:
        "Sadece takvim istiyorsanız birçok randevu aracı iş görür. Müşteri geçmişi, onam ve işlem notu da gerekiyorsa Treatflow'u 30 gün deneyin. Pazaryeri komisyonu yoktur.",
    },
    {
      question: "Güzellik salonu randevuları nasıl yönetilir?",
      answer:
        "Tüm kanallar tek takvimde toplanmalı: online link, telefon, yürüyerek gelen. Treatflow'da online randevu Booking paketindedir. Onay kuralı sizde kalır.",
    },
    {
      question: "Ücretsiz randevu araçlarından farkı nedir?",
      answer:
        "Ücretsiz araçlar genelde ödemeden veya pazaryerinden kazanır. Treatflow sabit aboneliktir. Onam ve işlem kaydı ücretsiz randevu katmanının parçası değildir.",
    },
  ],
  related: [
    sharedRelated.center,
    sharedRelated.booking,
    sharedRelated.crm,
    sharedRelated.forms,
    sharedRelated.pricing,
    {
      href: TR_PATHS.tryForms,
      label: "Örnek formları dene",
      desc: "Kayıt olmadan onam akışını görün.",
    },
  ],
  serviceName: "Güzellik salonu programı",
  featureList: [
    "Randevu takvimi",
    "Online randevu",
    "Müşteri takibi",
    "Dijital onam",
    "İşlem notu",
  ],
  dateModified: DATE,
};

export const laserPage: TrMoneyPageContent = {
  pageKey: "laser-hair-removal-software",
  path: TR_PATHS.laser,
  keywordCluster: "lazer-epilasyon-programi",
  title: "Lazer Epilasyon Programı",
  description:
    "Lazer epilasyon müşteri takip programı: seans kaydı, onam, fotoğraf ve randevu. 30 gün ücretsiz deneyin.",
  h1: "Lazer epilasyon programı: seans, onam ve müşteri kaydı",
  eyebrow: "Lazer epilasyon merkezleri",
  subtitle:
    "Lazer işi seri seanstır. Hangi joule, hangi bölge, hangi seans numarası ve imza aynı kartta durmazsa bir sonraki seans kör başlar.",
  heroBullets: [
    "Her seans müşteri kaydına yazılır",
    "Dijital onam seans öncesi",
    "Öncesi-sonrası fotoğraf işleme bağlı",
    "Sonraki seans için hatırlatma",
  ],
  heroImage: {
    src: "/images/lifestyle/dokumentation-vorher-nachher.png",
    alt: "Treatflow lazer epilasyon işlem kaydı ve fotoğraf ekranı",
  },
  whatTitle: "Lazer merkezi neden ayrı bir program ister?",
  whatParas: [
    "Tek seanslık cilt bakımından farklı olarak lazer epilasyon 6–10 seanslık bir süreçtir. Müşteri üç ay sonra geldiğinde 'geçen sefer ne yaptık?' sorusu dosyadan cevaplanmalıdır.",
    "Treatflow lazer epilasyon programı olarak her ziyareti işlem kaydı yapar: not, isteğe bağlı sesli not, fotoğraf. Bu, paket hakkı otomatik düşen kasa sistemi değildir. Seans geçmişi belgelenir; kalan paket adedi ayrı bir kasa modülü olarak Türkiye'de sunulmaz.",
    "Onam ve anamnez randevu öncesi dijital gider. Cilt tipi, ilaç, güneş notu kâğıtta kalmaz.",
  ],
  whoTitle: "Kimin için?",
  audiences: [
    "Lazer epilasyon merkezleri",
    "IPL / lazer kabini olan güzellik merkezleri",
    "Seanslı paket satan stüdyolar",
    "Fotoğraf ile ilerleme gösteren ekipler",
  ],
  problemTitle: "Lazer operasyonunda kırılan yerler",
  problems: [
    {
      problem: "Seans kartı Excel'de, fotoğraf personel telefonunda",
      solution: "Fotoğraf ve not aynı işleme eklenir. Personel değişse dosya stüdyoda kalır.",
    },
    {
      problem: "Onam her paketin başında kâğıt",
      solution: "Form şablonu bir kez kurulur, müşteri telefonda imzalar, kayıt bağlanır.",
    },
    {
      problem: "Müşteri 8. seansı unutur, cihaz boş kalır",
      solution:
        "WhatsApp ve e-posta hatırlatması Booking paketindedir. İşlem sonrası takip otomasyonu sonraki randevuya bağlanır.",
    },
  ],
  workflowTitle: "Lazer seansı Treatflow'da",
  workflowSubtitle: "Randevu → onam kontrolü → işlem kaydı → fotoğraf → sonraki seans.",
  workflowSteps: [
    { href: TR_PATHS.calendar, label: "Randevu", desc: "Cihaz/uzman slotu takvimde." },
    { href: TR_PATHS.forms, label: "Onam kontrolü", desc: "İmza yoksa seans başlamaz." },
    { href: TR_PATHS.crm, label: "Kart", desc: "Önceki seans parametreleri okunur." },
    { href: TR_PATHS.docs, label: "İşlem kaydı", desc: "Bölge, ayar, reaksiyon notu." },
    { href: TR_PATHS.docs, label: "Fotoğraf", desc: "Karşılaştırma için aynı ziyaret." },
    { href: TR_PATHS.booking, label: "Sonraki seans", desc: "Müşteri online da alabilir." },
  ],
  featuresTitle: "Lazer müşteri takibinde gerçekten olanlar",
  features: [
    { title: "Müşteri kaydı", desc: "İletişim, not, tüm seanslar tek zaman çizelgesi." },
    { title: "Seans belgeleme", desc: "Her ziyaret ayrı kayıttır. Paket kasa sayacı yoktur." },
    { title: "Form ve onam", desc: "Lazer onamı müşteri dosyasında." },
    { title: "Dokümantasyon", desc: "Yazılı veya sesli not, seansa kilitli." },
    { title: "Öncesi-sonrası", desc: "Görseller işlemle birlikte arşivlenir." },
    { title: "Randevu ve işlem sonrası takip", desc: "Takvim, WhatsApp ve e-posta birlikte çalışır. SMS yoktur." },
  ],
  screenshots: [
    {
      src: "/images/lifestyle/dokumentation-vorher-nachher.png",
      alt: "Treatflow lazer epilasyon öncesi-sonrası fotoğraf kaydı",
      caption: "Fotoğraf seans satırına bağlıdır, genel galeriye düşmez.",
    },
    {
      src: "/images/lifestyle/formulare-digital-ausfuellen.png",
      alt: "Treatflow lazer onam formu",
      caption: "Onam seans günü değil, randevu öncesi tamamlanır.",
    },
  ],
  whyCalendarTitle: "Lazer için takvim yeterli mi?",
  whyCalendarParas: [
    "Hayır. Lazer geliri seans zincirinden gelir. Zincir kopunca cihaz boş kalır ve ispat edilemeyen ayar tartışması başlar.",
    "Treatflow takvimi belgeleme ile birleştirir. Kasa, stok ve prim hesaplama gibi yerel randevu yazılımlarının öne çıkardığı başlıklar Türkiye'de Treatflow ürünü değildir.",
  ],
  pricingTitle: "Fiyat",
  pricingText,
  faqs: [
    {
      question: "Lazer epilasyon merkezi için hangi program kullanılmalı?",
      answer:
        "Seans geçmişi, onam ve fotoğraf tutan bir sistem. Treatflow bunları müşteri kaydında birleştirir. Sadece randevu + kasa arıyorsanız yerel alternatifler daha uygun olabilir.",
    },
    {
      question: "Lazer epilasyon müşteri takibi nasıl yapılır?",
      answer:
        "Her seans ayrı işlem kaydı olmalı: tarih, bölge, not, fotoğraf. Treatflow kartta bu geçmişi gösterir. Otomatik '3 seans kaldı' kasa düşümü vaat etmiyoruz.",
    },
    {
      question: "Paket seans hakkı otomatik düşer mi?",
      answer:
        "Hayır. Türkiye'de kasa/adisyon ve paket hakkı sayacı sunulmaz. Seanslar belgelenir; paket muhasebesi sizin sürecinize kalır.",
    },
  ],
  related: [
    sharedRelated.center,
    sharedRelated.crm,
    sharedRelated.docs,
    sharedRelated.forms,
    sharedRelated.pricing,
    {
      href: TR_PATHS.guideLaserChoose,
      label: "Lazer merkezi programı nasıl seçilir",
      desc: "Seans ve onam odaklı kontrol listesi.",
    },
  ],
  serviceName: "Lazer epilasyon programı",
  featureList: [
    "Seans belgeleme",
    "Müşteri kaydı",
    "Dijital onam",
    "Öncesi-sonrası fotoğraf",
    "Randevu",
    "İşlem sonrası takip",
  ],
  dateModified: DATE,
};

export const crmPage: TrMoneyPageContent = {
  pageKey: "client-records",
  path: TR_PATHS.crm,
  keywordCluster: "musteri-takip-programi",
  title: "Müşteri Takip Programı",
  description:
    "Güzellik merkezi müşteri takip programı: kart, randevu, form, işlem, fotoğraf ve işlem sonrası takip. Genel amaçlı satış yazılımı değil, müşteri ve işlem dosyası.",
  h1: "Müşteri takip programı: güzellik ve lazer için dosya",
  eyebrow: "Güzellik, lazer ve estetik işletmeleri",
  subtitle:
    "Bu, genel amaçlı bir satış CRM'i değildir. Satış hunisi ve potansiyel müşteri puanlaması yoktur. Müşteri → randevu → form → işlem → fotoğraf → not → geçmiş → işlem sonrası takip.",
  heroBullets: [
    "Tek kartta tüm ziyaretler",
    "Form ve imza kayda bağlı",
    "Fotoğraf ve not seansla birlikte",
    "Arama: isim, telefon, e-posta",
  ],
  heroImage: {
    src: "/images/lifestyle/kundenverwaltung-kartei.png",
    alt: "Treatflow güzellik merkezi müşteri takibi ekranı",
  },
  whatTitle: "Müşteri takibi burada ne anlama gelir?",
  whatParas: [
    "Güzellik merkezinde müşteri takibi, satış hunisi değil tedavi hafızasıdır. Kim geldi, ne imzaladı, hangi işlem yapıldı, fotoğraf nerede, sonraki randevu ne zaman.",
    "Treatflow müşteri kartı bu zinciri tutar. Personel notları ve görevler ekibe bırakılır. Pazarlama otomasyonu Booking paketindeki müşteri otomasyonları kadardır – genel amaçlı Salesforce değildir.",
    "Basic paket takvim olmadan da kart, form ve işlem kaydı sunar. Randevu takvimi Booking paketindedir.",
  ],
  whoTitle: "Kim arar 'müşteri takip programı'?",
  audiences: [
    "Excel ve defterden çıkan güzellik merkezleri",
    "Personel değişince bilgi kaybeden stüdyolar",
    "Lazer ve estetikte geçmişe ihtiyaç duyan ekipler",
    "Onam arşivini dijitalleştirmek isteyen işletmeler",
  ],
  problemTitle: "Dağınık müşteri hafızası",
  problems: [
    {
      problem: "Notlar WhatsApp'ta, fotoğraf galeride, form klasörde",
      solution: "Hepsi müşteri kaydına yazılır. Yeni personel aynı dosyayı açar.",
    },
    {
      problem: "Aynı isimde iki kart",
      solution: "Arama ve tek dosya disiplini. Geçmiş ziyaretler kartta listelenir.",
    },
    {
      problem: "İşlem sonrası takip unutulur",
      solution: "Hatırlatma ve otomasyon Booking paketinde, karttaki randevuya bağlı.",
    },
  ],
  workflowTitle: "Kartın etrafındaki akış",
  workflowSubtitle: "Müşteri kartı merkezdedir. Randevu ve işlem bu kayda bağlanır.",
  workflowSteps: [
    { href: TR_PATHS.crm, label: "Müşteri", desc: "Kart açılır veya bulunur." },
    { href: TR_PATHS.calendar, label: "Randevular", desc: "Geçmiş ve gelecek ziyaretler." },
    { href: TR_PATHS.forms, label: "Formlar", desc: "Anamnez ve onam ekleri." },
    { href: TR_PATHS.docs, label: "Tedaviler", desc: "İşlem kayıtları listelenir." },
    { href: TR_PATHS.docs, label: "Fotoğraflar", desc: "Seansa bağlı görseller." },
    { href: TR_PATHS.crm, label: "Notlar", desc: "Ekip notu ve görev." },
    { href: TR_PATHS.crm, label: "Geçmiş", desc: "Zaman çizelgesi." },
    { href: TR_PATHS.messaging, label: "İşlem sonrası takip", desc: "Sonraki iletişim planı." },
  ],
  featuresTitle: "Kartta ne durur?",
  features: [
    { title: "Kimlik ve iletişim", desc: "Ad, telefon, e-posta. KVKK kapsamında AB sunucusu." },
    { title: "Randevu geçmişi", desc: "Geldi / gelmedi, hangi uzman." },
    { title: "Formlar", desc: "İmzalı onam PDF değil, kayıttaki form cevabı." },
    { title: "İşlemler", desc: "Her seans satırı." },
    { title: "Fotoğraflar", desc: "Öncesi-sonrası, işleme bağlı." },
    { title: "Notlar", desc: "Yazılı ve sesli not (işlem kaydında)." },
  ],
  screenshots: [
    {
      src: "/images/mockups/kundenverwaltung-overview.png",
      alt: "Treatflow müşteri takip listesi",
      caption: "Liste ve arama. Satış hunisi görünümü yoktur; odak müşteri geçmişidir.",
    },
    {
      src: "/images/lifestyle/kundenverwaltung-kartei.png",
      alt: "Treatflow müşteri kartı detayı",
      caption: "Kart: randevu, form, işlem, fotoğraf sekmeleri aynı yerde.",
    },
  ],
  whyCalendarTitle: "Neden genel CRM değil?",
  whyCalendarParas: [
    "Satış CRM'i fırsat aşamaları satar. Güzellik merkezinin sorunu fırsat değil, son lazer ayarı ve imzalı onamdır.",
    "Treatflow bu yüzden müşteri takip programını işlem dosyası olarak kurgular. Potansiyel müşteri puanlama, toplu e-posta pazarlaması veya çağrı merkezi özellikleri sunmaz.",
  ],
  pricingTitle: "Fiyat",
  pricingText,
  faqs: [
    {
      question: "Güzellik merkezi için müşteri takip programı hangisi?",
      answer:
        "Randevu, form ve işlem kaydını aynı kartta tutan yazılım. Treatflow bunu güzellik ve lazer işletmeleri için yapar. Genel satış CRM'leri onamı ve fotoğrafları seansa bağlamaz.",
    },
    {
      question: "Müşteri verileri kimin kontrolünde kalır?",
      answer:
        "Salonda. Treatflow pazaryeri değildir. Veriler AB sunucularında barınır, sahip sizsiniz.",
    },
  ],
  related: [
    sharedRelated.center,
    sharedRelated.laser,
    sharedRelated.forms,
    sharedRelated.docs,
    sharedRelated.pricing,
    {
      href: TR_PATHS.guideCrmHow,
      label: "Müşteri takibi nasıl yapılır",
      desc: "Adım adım dosya disiplini.",
    },
  ],
  serviceName: "Müşteri takip programı",
  featureList: [
    "Müşteri kartı",
    "Randevu geçmişi",
    "Formlar",
    "İşlem kaydı",
    "Fotoğraflar",
    "Notlar",
  ],
  dateModified: DATE,
};

export const bookingPage: TrMoneyPageContent = {
  pageKey: "online-booking",
  path: TR_PATHS.booking,
  keywordCluster: "online-randevu-sistemi",
  title: "Online Randevu Sistemi",
  description:
    "Güzellik ve lazer için online randevu sistemi. Komisyon yok. Randevu sürecin başlangıcıdır: form, işlem, takip devam eder.",
  h1: "Online randevu sistemi: saat seçimi yetmez",
  eyebrow: "Güzellik, lazer ve estetik randevuları",
  subtitle:
    "Müşteri 7/24 uygun saat seçer. Treatflow orada durmaz: aynı randevu müşteri kartına, onama ve işlem kaydına bağlanır.",
  heroBullets: [
    "Komisyonsuz online randevu (Booking paketi)",
    "Instagram, Google, web – tek link",
    "Onay kuralı sizde",
    "Hatırlatma WhatsApp ve e-posta",
  ],
  heroImage: {
    src: "/images/lifestyle/online-buchung-smartphone.png",
    alt: "Treatflow online randevu sistemi müşteri ekranı",
  },
  whatTitle: "Online randevu sistemi nedir – Treatflow'da neye bağlanır?",
  whatParas: [
    "Online randevu, müşterinin müsait saati görmesi ve rezervasyon bırakmasıdır. Çoğu araç burada biter. Treatflow'da rezervasyon bir müşteri kaydı açar veya mevcut karta eklenir.",
    "Güzellik merkezi için online randevu, MHRS veya hastane randevusu değildir. Bu sayfa işletmelere yönelik bir yazılımı anlatır: müşterileriniz kendi merkezinize ait randevu sayfasından saat seçer.",
    "Booking paketinde takvim, online randevu, bekleme listesi, hatırlatmalar ve otomasyonlar vardır. Basic paket belgeleme odaklıdır, takvim içermez.",
  ],
  whoTitle: "Kimler kullanır?",
  audiences: [
    "Telefonu kapatamayan güzellik salonları",
    "Instagram mesajlarında saat belirlemeye çalışan merkezler",
    "Birden fazla uzmanın çalıştığı lazer merkezleri",
    "Randevuya gelmeme oranını hatırlatmalarla düşürmek isteyen ekipler",
  ],
  problemTitle: "Sadece randevu sayfası olunca",
  problems: [
    {
      problem: "Rezervasyon gelir, onam unutulur",
      solution: "Randevu öncesi form gönderilir. İmza yoksa seans evrakla başlamaz.",
    },
    {
      problem: "Pazaryeri komisyonu ciroyu yer",
      solution: "Treatflow sabit abonelik. Randevu başına kesinti yok.",
    },
    {
      problem: "Takvim dolu, müşteri dosyası boş",
      solution: "Online randevu kartı oluşturur. İşlem kaydı aynı kişide devam eder.",
    },
  ],
  workflowTitle: "Randevu sadece ilk kutu",
  workflowSubtitle: "Saat seçildikten sonra Treatflow tedavi sürecine geçer.",
  workflowSteps: [
    { href: TR_PATHS.booking, label: "Online randevu", desc: "Müşteri uygun saati seçer." },
    { href: TR_PATHS.crm, label: "Kart", desc: "Yeni veya mevcut müşteri." },
    { href: TR_PATHS.forms, label: "Form", desc: "Anamnez / onam linki." },
    { href: TR_PATHS.calendar, label: "Seans günü", desc: "Personel takvimden alır." },
    { href: TR_PATHS.docs, label: "Kayıt", desc: "İşlem ve fotoğraf." },
    { href: TR_PATHS.messaging, label: "Sonraki", desc: "Hatırlatma ve yeni randevu." },
  ],
  featuresTitle: "Randevu katmanında ne var?",
  features: [
    { title: "7/24 sayfa", desc: "Çok dilli randevu sayfası Booking paketinde." },
    { title: "Takvim", desc: "Personel ve oda sütunları." },
    { title: "Bekleme listesi", desc: "İptal olunca doldurma." },
    { title: "Hatırlatma", desc: "WhatsApp + e-posta. SMS yok." },
    { title: "İndirim kodları", desc: "Booking paketi. Hediye çeki/POS yok." },
    { title: "Komisyon 0", desc: "Pazaryeri değil, sizin yazılımınız." },
  ],
  screenshots: [
    {
      src: "/images/lifestyle/online-buchung-smartphone.png",
      alt: "Treatflow online randevu müşteri akışı",
      caption: "Müşteri hizmet ve saati seçer, onay sizde kalabilir.",
    },
    {
      src: "/images/lifestyle/terminkalender-wochenplanung.png",
      alt: "Treatflow randevu takvimi",
      caption: "Online gelen talep aynı haftalık görünümde.",
    },
  ],
  whyCalendarTitle: "Treatflow neden takvim satıcısı gibi durmaz?",
  whyCalendarParas: [
    "Online randevu sistemi araması geniştir. Hastane, MHRS, 'yakınımdaki güzellik merkezi' bu ürünün hedefi değildir.",
    "Treatflow'u seçen işletme, randevudan sonra onam ve işlem kaydını da yönetmek ister. Bu yüzden süreç saat seçme ekranında bitmez.",
  ],
  pricingTitle: "Fiyat",
  pricingText,
  faqs: [
    {
      question: "Güzellik merkezi için hangi online randevu sistemi kullanılmalı?",
      answer:
        "Komisyonsuz, sizin markanızda kalan bir sayfa. Treatflow Booking paketi bunu takvim, hatırlatma ve müşteri kaydıyla verir.",
    },
    {
      question: "Ücretsiz online randevu var mı?",
      answer:
        "30 gün ücretsiz deneme vardır. Kalıcı ücretsiz randevu pazaryeri değiliz. 'Ücretsiz randevu al' tüketici aramaları için tasarlanmadık.",
    },
  ],
  related: [
    sharedRelated.center,
    sharedRelated.salon,
    sharedRelated.crm,
    {
      href: TR_PATHS.calendar,
      label: "Randevu takvimi",
      desc: "Personel ve oda sütunları, haftalık görünüm.",
    },
    sharedRelated.pricing,
    {
      href: TR_PATHS.guideMustHaveFeatures,
      label: "Yazılımda hangi özellikler olmalı",
      desc: "Randevu sonrası özellik listesi.",
    },
  ],
  serviceName: "Online randevu sistemi",
  featureList: [
    "Online randevu",
    "Randevu takvimi",
    "Bekleme listesi",
    "WhatsApp ve e-posta hatırlatması",
    "Müşteri kaydı bağlantısı",
  ],
  dateModified: DATE,
};

export const trMoneyPages = {
  beautyCenter: beautyCenterPage,
  beautySalon: beautySalonPage,
  laser: laserPage,
  crm: crmPage,
  booking: bookingPage,
} as const;
