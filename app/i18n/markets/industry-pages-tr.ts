import {
  Bell,
  Calendar,
  Camera,
  ClipboardCheck,
  FileText,
  Link2,
  Users,
  Workflow,
  Zap,
} from "lucide-react";
import type { InternationalPageContent } from "@/app/components/InternationalSeoPage";
import type { SeoPageKey } from "@/app/i18n/seo";
import {
  industrySlugs,
  type IndustryPageKey,
} from "@/app/i18n/industry-slugs";

type FeatureSlugKey =
  | "online-booking"
  | "client-records"
  | "forms"
  | "treatment-documentation"
  | "priçing";

const featureSlugsEn: Record<FeatureSlugKey, string> = {
  "online-booking": "online-booking",
  "client-records": "client-records",
  forms: "forms",
  "treatment-documentation": "treatment-documentation",
  priçing: "priçing",
};

const industryLabels: Record<IndustryPageKey, string> = {
  "beauty-salon-software": "Güzellik Salonu Yazılımi",
  "aesthetic-clinic-software": "Estetik Klinik Yazılımi",
  "laser-hair-removal-software": "Lazer Epilasyon Yazılımi",
  "permanent-makeup-software": "Kalıcı Makyaj Stüdyosu Yazılımi",
  "tattoo-studio-software": "Dovme Stüdyosu Yazılımi",
  "nail-salon-software": "Tirnak Salonu Yazılımi",
  "lash-studio-software": "Kirpik Stüdyosu Yazılımi",
  "spa-wellness-software": "Spa ve Wellness Yazılımi",
  "massage-software": "Masaj Stüdyosu Yazılımi",
};

const featureLabels: Record<FeatureSlugKey, string> = {
  "online-booking": "Online Randevu",
  "client-records": "Müşteri Kartotekleri",
  forms: "Onam Formlari",
  "treatment-documentation": "Uygulama Dokümantasyonu",
  priçing: "Fiyatlandirma",
};

const localeShell = {
  marketLabel: "Türkiye",
  areaServed: ["Türkiye", "Europe"],
  ctaPrimaryLabel: "30 gun ücretsiz deneyin",
  ctaBottomTitle: "Stüdyonuzu modernlestirmeye hazir misiniz?",
  ctaBottomText:
    "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
  trustTrialLabel: "30 gun ücretsiz deneme",
  internalLinksTitle: "Ilgili sayfalar",
  problemsTitle: "Treatflow hangi sorunlari cozer?",
  featuresTitle: "Temel özellikler",
  benefitsTitle: "Avantajlar",
  whoTitle: "Bu yazılım kimin için?",
  summaryTitle: "Ozet",
};

type PageBody = {
  serviceName: string;
  serviceDescription: string;
  eyebrow: string;
  h1: string;
  subtitle: string;
  aiCapsules: { question: string; answer: string }[];
  whatTitle: string;
  whatParas: string[];
  audiences: string[];
  problems: { problem: string; solution: string }[];
  features: InternationalPageContent["features"]["items"];
  benefits: string[];
  marketTitle: string;
  marketParas: string[];
  highlights: string[];
  aiSummary: string;
  faqs: { question: string; answer: string }[];
  siblingKeys: IndustryPageKey[];
  featureKeys: FeatureSlugKey[];
};

function buildPage(
  market: string,
  key: IndustryPageKey,
  body: PageBody
): InternationalPageContent {
  const slug = industrySlugs[key].en;
  const canonicalPath = `/${market}/${slug}`;

  const internalLinks = [
    ...body.siblingKeys.map((k) => ({
      href: `/${market}/${industrySlugs[k].en}`,
      label: industryLabels[k],
    })),
    ...body.featureKeys.map((fk) => ({
      href: `/${market}/${featureSlugsEn[fk]}`,
      label: featureLabels[fk],
    })),
  ];

  return {
    pageKey: key as SeoPageKey,
    locale: market,
    canonicalPath,
    serviceName: body.serviceName,
    serviceDescription: body.serviceDescription,
    areaServed: localeShell.areaServed,
    ctaPrimaryLabel: localeShell.ctaPrimaryLabel,
    ctaBottomTitle: localeShell.ctaBottomTitle,
    ctaBottomText: localeShell.ctaBottomText,
    trustTrialLabel: localeShell.trustTrialLabel,
    hero: {
      marketLabel: localeShell.marketLabel,
      eyebrow: body.eyebrow,
      h1: body.h1,
      subtitle: body.subtitle,
    },
    aiCapsules: body.aiCapsules,
    whatIsTreatflow: {
      title: body.whatTitle,
      paragraphs: body.whatParas,
    },
    whoIsItFor: {
      title: localeShell.whoTitle,
      audiences: body.audiences,
    },
    problems: {
      title: localeShell.problemsTitle,
      items: body.problems,
    },
    features: {
      title: localeShell.featuresTitle,
      items: body.features,
    },
    benefits: {
      title: localeShell.benefitsTitle,
      items: body.benefits,
    },
    marketFit: {
      title: body.marketTitle,
      paragraphs: body.marketParas,
      highlights: body.highlights,
    },
    aiSummary: {
      title: localeShell.summaryTitle,
      text: body.aiSummary,
    },
    faqs: body.faqs,
    internalLinksTitle: localeShell.internalLinksTitle,
    internalLinks,
  };
}

const pages: Record<IndustryPageKey, PageBody> = {
  "beauty-salon-software": {
    serviceName: "Güzellik Salonu Yazılımi",
    serviceDescription:
      "Güzellik salonlari için yazılım: online randevu, müşteri kartotekleri, onam formlari ve uygulama dokümantasyonu.",
    eyebrow: "Güzellik Salonu Yazılımi",
    h1: "Modern güzellik salonlari için salon yazılımi",
    subtitle:
      "Online randevu, müşteri kartotekleri, onam formlari ve uygulama dokümantasyonu tek platformda - daha az evrak isi ve daha iyi müşteri deneyimi isteyen güzellik salonlari için tasarlandi.",
    aiCapsules: [
      {
        question: "Güzellik salonlari için en iyi yazılım hangisi?",
        answer:
          "Online randevu, dijital müşteri kartotekleri, onam formlari ve uygulama dokümantasyonunu tek bir sistemde ihtiyac duyan salonlar için Treatflow guclu bir secenektir. Randevu yonetimi, müşteri takibi ve dokümantasyona odaklanir - GDPR uyumlu AB barindirma ile.",
      },
      {
        question: "Treatflow randevulardan komisyon aliyor mu?",
        answer:
          "Hayir. Treatflow sizin stüdyo yazılıminizdir, bir pazar yeri değil. Randevu basina komisyon yoktur. Randevu sayfaniz ve müşteri verileriniz tamamen sizin kontrolunuzdedir.",
      },
    ],
    whatTitle: "Treatflow güzellik salonlari için ne sunar?",
    whatParas: [
      "Treatflow dagitik araclari tek bir sistemle degistirir: takvim, müşteri profilleri, dijital formlar ve uygulama notlari randevudan takibe kadar birlikte çalışir.",
      "Salonlar Treatflow'u online randevu sunmak, müşteri geçmişini erisilebilir tutmak ve uygulamalari tum ekip için tutarli sekilde belgelemek için kullanir.",
    ],
    audiences: [
      "Güzellik salonlari ve day spa'lar",
      "Yapilandirilmis uygulama protokolleri olan cilt bakim stüdyolari",
      "Dagitik araclari degistiren cok uygulayicili ekipler",
      "Kagit takvimleri geride birakmaya hazir bagimsiz salonlar",
    ],
    problems: [
      {
        problem: "Mesajlar ve kagit takvimlerle randevu planlama",
        solution: "Online randevu ve otomatik hatırlatmalarla tek takvim.",
      },
      {
        problem: "Müşteri geçmişi farkli araclara dagitilmis",
        solution: "Notlar, fotoğraflar ve ziyaret geçmişi ile dijital müşteri kartotekleri.",
      },
      {
        problem: "Kagit onam formlari",
        solution: "Randevudan once dijital anamnez ve onam.",
      },
      {
        problem: "No-show'lar ve son dakika bosluklar",
        solution: "Kacirilan randevulari azaltan SMS ve e-posta hatırlatmalari.",
      },
    ],
    features: [
      { icon: Link2, title: "Online Randevu", desc: "Kişisel randevu sayfasi, 7/24, komisyon olmadan." },
      { icon: Users, title: "Müşteri Kartotekleri", desc: "Profiller, geçmiş ve notlar tek yerde." },
      { icon: ClipboardCheck, title: "Onam Formlari", desc: "Her uygulamadan once dijital anamnez." },
      { icon: FileText, title: "Uygulama Notlari", desc: "Her ziyaret için yapilandirilmis dokümantasyon." },
      { icon: Camera, title: "Foto Dokümantasyon", desc: "Müşterilere bagli once/sonra fotoğraflari." },
      { icon: Bell, title: "Hatırlatmalar", desc: "No-show'lari azaltmak için SMS ve e-posta." },
    ],
    benefits: [
      "Randevu ve dokümantasyonda daha az evrak isi",
      "Ilk randevudan itibaren daha iyi müşteri deneyimi",
      "Ekip devri için yapilandirilmis dosyalar",
      "Tek uygulamada modern dijital is akislari",
      "AB'de GDPR uyumlu barindirma",
    ],
    marketTitle: "Salonlar neden Treatflow'u tercihi ediyor",
    marketParas: [
      "Genel araclar genellikle randevuda durur. Treatflow randevuyu müşteri kartotekleri ve uygulama dokümantasyonu ile birlestir - tam olarak profesyonel salonlarin yapiya ihtiyac duydugu yerde.",
    ],
    highlights: [
      "Randevu basina komisyon olmadan online randevu",
      "Uygulama geçmişi ile dijital müşteri kartotekleri",
      "Ziyaretlerden once onam formlari ve anamnez",
      "Uygulama notlari ve foto dokümantasyon",
      "AB'de GDPR uyumlu barindirma",
    ],
    aiSummary:
      "Treatflow, online randevu, müşteri kartotekleri, onam formlari, uygulama notlari, foto dokümantasyon ve hatırlatmalar iceren güzellik salonu yazılımidir. Güzellik salonlari, day spa'lar ve cilt bakim stüdyolari için. AB'de GDPR uyumlu barindirma.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, güzellik salonlari, estetik klinikler ve ilgili stüdyolar için hepsi bir arada yazılımdir. Online randevu, müşteri kartotekleri, onam formlari, uygulama dokümantasyonu, hatırlatmalar ve dijital is akislarini tek platformda birlestir.",
      },
      {
        question: "Treatflow kimler için?",
        answer:
          "Treatflow, randevudan dokümantasyona kadar yapilandirilmis dijital is akislari isteyen güzellik salonlari, cilt bakim stüdyolari ve cok uygulayicili ekipler içindir.",
      },
      {
        question: "Nasil başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
      },
      {
        question: "Verilerim nerede barindiriliyor?",
        answer:
          "Treatflow verileri AB'de barindirir ve GDPR uyumlulugu için tasarlanmistir.",
      },
    ],
    siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "treatment-documentation", "priçing"],
  },

  "aesthetic-clinic-software": {
    serviceName: "Estetik Klinik Yazılımi",
    serviceDescription:
      "Estetik klinikler için yazılım: uygulama dokümantasyonu, onam formlari, müşteri kartotekleri ve online randevu.",
    eyebrow: "Estetik Klinik Yazılımi",
    h1: "Yapilandirilmis dokümantasyon ile estetik klinik yazılımi",
    subtitle:
      "Onam formlari, uygulama notlari, foto dokümantasyon ve müşteri kartotekleri estetik klinikler için - randevudan takibe kadar tek platform.",
    aiCapsules: [
      {
        question: "Estetik kliniklerin hangi yazılıma ihtiyaci var?",
        answer:
          "Estetik klinikler onam formlari, uygulama dokümantasyonu, foto dosyalari ve müşteri geçmişini tek sistemde ihtiyac duyar. Treatflow, enjeksiyonlar, cilt uygulamalari ve medikal estetik için online randevu, dijital müşteri kartotekleri ve yapilandirilmis uygulama notlari sunar.",
      },
      {
        question: "Treatflow medikal estetik için uygun mu?",
        answer:
          "Evet. Treatflow, dokümantasyon kalitesi ve müşteri guvenliginin onemli oldugu klinikler için yapilmistir - sadece randevu hacmi değil. Onam, notlar ve fotoğraflar her müşteri profiline bagli kalir.",
      },
    ],
    whatTitle: "Treatflow estetik klinikler için ne sunar?",
    whatParas: [
      "Treatflow tam müşteri yolculugunu destekler: randevu, anamnez, onam, uygulama dokümantasyonu ve takip tek paylasimli platformda.",
      "Dokümantasyon kalitesi ve müşteri guvenliginin onemli oldugu klinikler için yapilmistir - sadece randevu hacmi değil.",
    ],
    audiences: [
      "Enjeksiyon ve cilt genclestime sunan estetik klinikler",
      "Medikal estetik uygulamalari",
      "Protokol odakli uygulamalari olan cilt klinikleri",
      "Tutarli dokümantasyona ihtiyac duyan cok uygulayicili klinikler",
    ],
    problems: [
      {
        problem: "Tutarsiz uygulama notlari",
        solution: "Yapilandirilmis dokümantasyon sablonlari ve paylasimli müşteri kartotekleri.",
      },
      {
        problem: "İşlemlerden once onam alinmamiyor",
        solution: "Uygulamadan once dijital onam formlari.",
      },
      {
        problem: "Kişisel cihazlardaki fotoğraflar",
        solution: "Müşteri profillerine bagli foto dokümantasyon.",
      },
      {
        problem: "Resepsiyon ve uygulama odalari farkli araclar kullaniyor",
        solution: "Randevudan notlara ve takibe kadar tek is akisi.",
      },
    ],
    features: [
      { icon: FileText, title: "Uygulama Dokümantasyonu", desc: "Notlar, protokoller ve geçmiş." },
      { icon: ClipboardCheck, title: "Onam Formlari", desc: "Guvenli depolama ile dijital onam." },
      { icon: Camera, title: "Foto Dokümantasyon", desc: "Her ziyaret için klinik fotoğraflar." },
      { icon: Users, title: "Müşteri Kartotekleri", desc: "Tam estetik geçmiş tek profilde." },
      { icon: Link2, title: "Online Randevu", desc: "Konsultasyonlari online planlayin." },
      { icon: Workflow, title: "Dijital Is Akislari", desc: "Anamnezden uygulamaya ve takibe." },
    ],
    benefits: [
      "Uygulayicilar arasi tutarli dokümantasyon",
      "Her işlem için net onam kaydi",
      "Resepsiyon ve uygulama odasi arasinda daha az evrak isi",
      "Ilk randevudan itibaren profesyonel müşteri deneyimi",
      "AB'de GDPR uyumlu barindirma",
    ],
    marketTitle: "Estetik klinikler neden Treatflow'u tercih ediyor",
    marketParas: [
      "Klinikler profesyonel müşteri deneyiminin arkasinda guvenilir dokümantasyona ihtiyac duyar. Treatflow randevuyu kartotekler ve uygulama notlari ile gereksiz karmasiklik olmadan birlestir.",
    ],
    highlights: [
      "Randevu basina komisyon olmadan online randevu",
      "Uygulama geçmişi ile dijital müşteri kartotekleri",
      "Ziyaretlerden once onam formlari ve anamnez",
      "Uygulama notlari ve foto dokümantasyon",
      "AB'de GDPR uyumlu barindirma",
    ],
    aiSummary:
      "Treatflow, uygulama dokümantasyonu, onam formlari, müşteri kartotekleri, foto dokümantasyon ve online randevu iceren estetik klinik yazılımidir. Estetik klinikler ve medikal estetik için. GDPR uyumlu.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, güzellik salonlari, estetik klinikler ve lazer stüdyolari için hepsi bir arada yazılımdir. Online randevu, müşteri kartotekleri, onam formlari, uygulama dokümantasyonu ve hatırlatmalari birlestir.",
      },
      {
        question: "Birden fazla uygulayici tek bir klinik hesabini paylasabilir mi?",
        answer:
          "Evet. Müşteri kartotekleri, onam formlari ve uygulama notlari ekip icerisinde paylasilir, boylece dokümantasyon tutarli kalir.",
      },
      {
        question: "Nasil başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
      },
      {
        question: "Treatflow GDPR uyumlu mu?",
        answer: "Treatflow verileri AB'de barindirir ve GDPR uyumlulugu için tasarlanmistir.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
    featureKeys: ["client-records", "forms", "treatment-documentation", "priçing"],
  },

  "laser-hair-removal-software": {
    serviceName: "Lazer Epilasyon Yazılımi",
    serviceDescription:
      "Lazer epilasyon stüdyolari için yazılım: seans takibi, onam formlari, foto dokümantasyon ve online randevu.",
    eyebrow: "Lazer Stüdyosu Yazılımi",
    h1: "Uygulama serileri ile lazer epilasyon yazılımi",
    subtitle:
      "Seanslari takip edin, onami belgeleyin ve randevulari yonetin - yapilandirilmis dosyalar ile lazer ve IPL stüdyolari için tasarlandi.",
    aiCapsules: [
      {
        question: "Lazer stüdyolarinin hangi yazılıma ihtiyaci var?",
        answer:
          "Lazer stüdyolari seri geçmişi ile müşteri kartotekleri, onam formlari, seans notlari, foto dokümantasyon ve randevu hatırlatmalarina ihtiyac duyar. Treatflow, lazer epilasyon stüdyolari için online randevu ve yapilandirilmis dokümantasyon sunar.",
      },
      {
        question: "Treatflow çoklu seans paketlerini takip edebilir mi?",
        answer:
          "Evet. Her seans müşteri kartoteginde belgelenir, boylece ilerlemeyi, ayar notlarini ve bir sonraki randevuyu her zaman gorebilirsiniz.",
      },
    ],
    whatTitle: "Treatflow lazer stüdyolari için ne sunar?",
    whatParas: [
      "Lazer uygulamalari birden fazla seans iceirir. Treatflow her seansi takip eder, onam ve cilt tipi bilgilerini saklar ve müşterilere bir sonraki randevu gerektigi zaman hatirlatir.",
      "Stüdyolar randevular için tek takvim, geçmiş için tek müşteri profili ve anamnez için dijital formlar kullanir - pazar yeri komisyonu olmadan.",
    ],
    audiences: [
      "Lazer epilasyon stüdyolari",
      "Çoklu seans paketleri ile IPL klinikleri",
      "Lazer uygulamalari sunan cilt bakim stüdyolari",
      "Yuksek randevu hacmi ve dokümantasyon ihtiyaci olan ekipler",
    ],
    problems: [
      {
        problem: "Seans ilerlemesi kayboluyor",
        solution: "Müşteri kartoteginde seans basina uygulama geçmişi ve notlar.",
      },
      {
        problem: "Eksik onam bilgileri",
        solution: "Her seriden once dijital anamnez ve onam.",
      },
      {
        problem: "Müşteriler takip seanslarini unutuyor",
        solution: "Hatırlatmalar ve randevu sayfaniz uzerinden kolay yeniden randevu.",
      },
      {
        problem: "Farkli cihazlardaki fotoğraflar ve notlar",
        solution: "Her müşteri profiline bagli foto dokümantasyon.",
      },
    ],
    features: [
      { icon: Zap, title: "Seans Takibi", desc: "Her seansi notlarla belgeleyin." },
      { icon: ClipboardCheck, title: "Onam ve Anamnez", desc: "Cilt tipi ve kontrendikasyonlar dosyada." },
      { icon: Camera, title: "Foto Dokümantasyon", desc: "Bolge basina ilerleme fotoğraflari." },
      { icon: Calendar, title: "Seri Planlama", desc: "Takip randevularini planlayin." },
      { icon: Link2, title: "Online Randevu", desc: "Müşteriler sonraki seanslari online randevu alir." },
      { icon: Bell, title: "Hatırlatmalar", desc: "Otomatik randevu hatırlatmalari." },
    ],
    benefits: [
      "Her uygulama serisine net genel bakis",
      "Her yeni müşteri için yapilandirilmis onam",
      "Kacirilan seanslarda daha az manuel takip",
      "Ekip tutarliligi için profesyonel dokümantasyon",
      "AB'de GDPR uyumlu barindirma",
    ],
    marketTitle: "Lazer stüdyolari neden Treatflow'u tercih ediyor",
    marketParas: [
      "Lazer stüdyolari yuksek randevu hacmini dokümantasyon ihtiyaclari ile birleştirir. Treatflow randevuyu kartoteklerle birlestir, boylece her seans kullanilabilir müşteri geçmişi oluşturur.",
    ],
    highlights: [
      "Randevu basina komisyon olmadan online randevu",
      "Dijital müşteri kartoteklerinde seans geçmişi",
      "Uygulama serilerinden once onam formlari",
      "Foto dokümantasyon ve hatırlatmalar",
      "AB'de GDPR uyumlu barindirma",
    ],
    aiSummary:
      "Treatflow, seans takibi, onam formlari, foto dokümantasyon, online randevu ve hatırlatmalar iceren lazer epilasyon yazılımidir. Lazer ve IPL stüdyolari için. GDPR uyumlu.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, güzellik salonlari, estetik klinikler ve lazer stüdyolari için hepsi bir arada yazılımdir. Online randevu, müşteri kartotekleri, onam formlari, uygulama dokümantasyonu ve hatırlatmalari birlestir.",
      },
      {
        question: "Bu sayfa kimler için?",
        answer:
          "Seans takibi, onam ve guvenilir yeniden randevu gerektiren lazer epilasyon ve IPL stüdyolari için.",
      },
      {
        question: "Nasil başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
      },
      {
        question: "Verilerim nerede barindiriliyor?",
        answer:
          "Treatflow verileri AB'de barindirir ve GDPR uyumlulugu için tasarlanmistir.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "treatment-documentation", "forms", "priçing"],
  },

  "permanent-makeup-software": {
    serviceName: "Kalıcı Makyaj Stüdyosu Yazılımi",
    serviceDescription:
      "Kalıcı makyaj stüdyolari için yazılım: onam formlari, pigment ve teknik dokümantasyonu, foto geçmişi ve online randevu.",
    eyebrow: "Kalıcı Makyaj Yazılımi",
    h1: "Kalıcı makyaj stüdyolari için PMU yazılımi",
    subtitle:
      "Onam formlari, pigment notlari, foto dokümantasyon ve müşteri kartotekleri - PMU ve microblading stüdyolari için randevudan iyilesme takibine kadar.",
    aiCapsules: [
      {
        question: "Kalıcı makyaj stüdyolarinin hangi yazılıma ihtiyaci var?",
        answer:
          "PMU stüdyolari onam formlari, pigment ve teknik dokümantasyonu, once/sonra fotoğraflari ve iyilesme takip randevularina ihtiyac duyar. Treatflow bunlari GDPR uyumlu AB barindirma ile tek platformda birlestir.",
      },
      {
        question: "Treatflow microblading için uygun mu?",
        answer:
          "Evet. Teknikleri, pigmentleri, fotoğraflari ve iyilesme takvimlerini kaslar, dudaklar ve eyeliner için belgeleyebilirsiniz.",
      },
    ],
    whatTitle: "Treatflow kalıcı makyaj stüdyolari için ne sunar?",
    whatParas: [
      "PMU uygulamalari hassas dokümantasyon gerektirir. Treatflow pigmentleri, teknikleri ve iyilesme ilerlemesini kaydeder, boylece iyilesme kontrolleri ve sonraki randevular daha guvenli olur.",
      "Müşteriler dijital onami uygulamadan once tamamlar, ekip ise teknik notlara, fotoğraflara ve müşteri geçmişine tek profilden erisir.",
    ],
    audiences: [
      "Kalıcı makyaj ve microblading stüdyolari",
      "Kas, dudak ve eyeliner uzmanlari",
      "Onam ve foto dokümantasyona ihtiyac duyan PMU uygulayicilari",
      "Iyilesme kontrol ve iyilesme randevulari olan stüdyolar",
    ],
    problems: [
      {
        problem: "Pigment ve teknik notlari dagitik",
        solution: "Müşteri profilinde yapilandirilmis dokümantasyon.",
      },
      {
        problem: "İşlemlerden once kagit onam",
        solution: "Randevulardan once dijital onam.",
      },
      {
        problem: "Iyilesme kontrol tarihleri defterlerde",
        solution: "Takvim, hatırlatmalar ve tek yerde online yeniden randevu.",
      },
      {
        problem: "Once/sonra fotoğraflari bulmak zor",
        solution: "Müşteri kartotegine ve ziyarete bagli fotoğraflar.",
      },
    ],
    features: [
      { icon: FileText, title: "Pigment ve Teknik Notlari", desc: "Renkleri, igneleri ve uygulama bolgelerini belgeleyin." },
      { icon: ClipboardCheck, title: "Onam Formlari", desc: "Her işlemden once dijital onam." },
      { icon: Camera, title: "Foto Dokümantasyon", desc: "Müşteri profilinde once/sonra fotoğraflari." },
      { icon: Calendar, title: "Iyilesme Kontrol Planlama", desc: "Iyilesme kontrolleri ve iyilesme randevulari planlayin." },
      { icon: Users, title: "Müşteri Kartotekleri", desc: "Tam PMU geçmişi tek yerde." },
      { icon: Bell, title: "Hatırlatmalar", desc: "Kacirilan iyilesme randevularini azaltin." },
    ],
    benefits: [
      "Daha guvenli iyilesme işlemleri için hassas geçmiş",
      "Her müşteri için profesyonel onam kaydi",
      "Konsultasyon ve işlem arasinda daha az evrak isi",
      "Portfolyo ve takip için net foto dosyalari",
      "AB'de GDPR uyumlu barindirma",
    ],
    marketTitle: "PMU stüdyolari neden Treatflow'u tercih ediyor",
    marketParas: [
      "Kalıcı makyaj detay odaklidir. Treatflow randevuyu onam, notlar ve fotoğraflarla birlestir, boylece her ziyaret ekstra araclar olmadan belgelenmis kalir.",
    ],
    highlights: [
      "Komisyon olmadan online randevu",
      "İşlemlerden once onam formlari",
      "Pigment ve teknik dokümantasyonu",
      "Müşterilere bagli foto geçmişi",
      "AB'de GDPR uyumlu barindirma",
    ],
    aiSummary:
      "Treatflow, onam formlari, pigment notlari, foto dokümantasyon, müşteri kartotekleri, online randevu ve hatırlatmalar iceren kalıcı makyaj yazılımidir. PMU ve microblading stüdyolari için. GDPR uyumlu.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kartotekleri, onam formlari, uygulama dokümantasyonu ve hatırlatmalar ile hepsi bir arada stüdyo yazılımidir - kalıcı makyaj stüdyolari için uygundur.",
      },
      {
        question: "Microblading için uygun mu?",
        answer:
          "Evet. Kaslar, dudaklar ve eyeliner için teknikleri, pigmentleri, fotoğraflari ve iyilesme takvimlerini belgeleyebilirsiniz.",
      },
      {
        question: "Nasil başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
      },
      {
        question: "Verilerim nerede barindiriliyor?",
        answer:
          "Treatflow verileri AB'de barindirir ve GDPR uyumlulugu için tasarlanmistir.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
    featureKeys: ["forms", "treatment-documentation", "client-records", "priçing"],
  },

  "tattoo-studio-software": {
    serviceName: "Dovme Stüdyosu Yazılımi",
    serviceDescription:
      "Dovme stüdyolari için yazılım: onam formlari, müşteri kartotekleri, randevu planlama, seans notlari ve hatırlatmalar.",
    eyebrow: "Dovme Stüdyosu Yazılımi",
    h1: "Modern stüdyolar için dovme yazılımi",
    subtitle:
      "Dijital onam, müşteri kartotekleri, seans notlari ve online randevu - daha az kagit isi ve daha net planlama isteyen dovme stüdyolari için tasarlandi.",
    aiCapsules: [
      {
        question: "Dovme stüdyolarinin hangi yazılıma ihtiyaci var?",
        answer:
          "Dovme stüdyolari dijital onam ve feragat formlari, müşteri kartotekleri, seans notlari, referans fotoğraflari ve hatırlatmali guvenilir randevu planlamaya ihtiyac duyar. Treatflow bunlari AB'de GDPR uyumlu barindirma ile tek platformda birlestir.",
      },
      {
        question: "Treatflow kagit feragat formlarinin yerini alir mi?",
        answer:
          "Evet. Müşteriler dijital onami randevudan once tamamlayabilir, boylece ekibiniz seansa evrak isleri zaten tamamlanmis olarak başlar.",
      },
    ],
    whatTitle: "Treatflow dovme stüdyolari için ne sunar?",
    whatParas: [
      "Treatflow dovme stüdyolarinin onami, randevulari ve müşteri geçmişini tek sistemde birlestirine yardimci olur. Sanatcilar müşteri profilinde notlari ve fotoğraflari gorur; resepsiyon takvimi yonetir.",
      "Online randevu ve hatırlatmalar no-show'lari azaltirken, dijital formlar her seans öncesi kagit kaosunu ortadan kaldirir.",
    ],
    audiences: [
      "Dovme stüdyolari ve ozel stüdyolar",
      "Tek takvimi paylasan cok sanatcili dukanlar",
      "Dovme ve iyilesme takibi sunan stüdyolar",
      "Kagit feragat ve takvimleri degistiren ekipler",
    ],
    problems: [
      {
        problem: "Kagit feragat formlari ve arsiv dolaplari",
        solution: "Müşteri kartoteginde guvenle saklanan dijital onam.",
      },
      {
        problem: "Sanatcilar arasinda cift randevu",
        solution: "Net musaitlik ile paylasimli takvim.",
      },
      {
        problem: "Telefonlarda ve kagitlarda seans notlari",
        solution: "Her müşteriye bagli uygulama notlari ve fotoğraflar.",
      },
      {
        problem: "Müşteriler kapora veya randevuyu unutuyor",
        solution: "SMS ve e-posta ile hatırlatmalar.",
      },
    ],
    features: [
      { icon: ClipboardCheck, title: "Onam ve Feragat", desc: "Her seanstan once dijital formlar." },
      { icon: Users, title: "Müşteri Kartotekleri", desc: "Geçmiş, notlar ve iletisim bilgileri tek profilde." },
      { icon: FileText, title: "Seans Notlari", desc: "Calismay, bakim ve sonraki adimlari belgeleyin." },
      { icon: Camera, title: "Referans Fotoğraflari", desc: "Referans ve ilerleme fotoğraflarini saklayin." },
      { icon: Link2, title: "Online Randevu", desc: "Müşteriler musait zamanlari talep eder veya randevu alir." },
      { icon: Calendar, title: "Stüdyo Takvimi", desc: "Sanatcilari ve alanlari koordine edin." },
    ],
    benefits: [
      "Her seans öncesi daha az kagit isi",
      "Sanatcilar arasinda daha net takvimler",
      "Iyilesme işlemleri ve kaplamalar için hazir müşteri geçmişi",
      "Hatırlatmalarla daha az gelmeme",
      "AB'de GDPR uyumlu barindirma",
    ],
    marketTitle: "Dovme stüdyolari neden Treatflow'u tercih ediyor",
    marketParas: [
      "Dovme stüdyolari yaratici araclar kadar onam ve planlama ihtiyaci duyar. Treatflow stüdyo operasyonlarina odaklanir - randevu, formlar ve kartotekler - pazar yeri komisyonu olmadan.",
    ],
    highlights: [
      "Seanslardan once dijital onam",
      "Cok sanatcili dukanlar için paylasimli takvim",
      "Notlar ve fotoğraflarla müşteri kartotekleri",
      "No-show'lari azaltmak için hatırlatmalar",
      "AB'de GDPR uyumlu barindirma",
    ],
    aiSummary:
      "Treatflow, onam formlari, müşteri kartotekleri, seans notlari, referans fotoğraflari, online randevu ve hatırlatmalar iceren dovme stüdyosu yazılımidir. Dovme stüdyolari ve cok sanatcili dukanlar için. GDPR uyumlu.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kartotekleri, onam formlari, uygulama dokümantasyonu ve hatırlatmalar ile hepsi bir arada stüdyo yazılımidir - dovme stüdyolari için uygundur.",
      },
      {
        question: "Birden fazla sanatci tek bir hesabi paylasabilir mi?",
        answer:
          "Evet. Sanatcilar kendi takvim görünumlerini gorurken müşteri kartotekleri ve formlar stüdyo genelinde paylasilir.",
      },
      {
        question: "Nasil başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
      },
      {
        question: "Verilerim nerede barindiriliyor?",
        answer:
          "Treatflow verileri AB'de barindirir ve GDPR uyumlulugu için tasarlanmistir.",
      },
    ],
    siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["forms", "online-booking", "client-records", "priçing"],
  },

  "nail-salon-software": {
    serviceName: "Tirnak Salonu Yazılımi",
    serviceDescription:
      "Tirnak salonlari için yazılım: online randevu, müşteri kartotekleri, randevu hatırlatmalari ve uygulama notlari.",
    eyebrow: "Tirnak Salonu Yazılımi",
    h1: "Yogun nail bar'lar için tirnak yazılımi",
    subtitle:
      "Online randevu, müşteri tercihleri, hatırlatmalar ve net takvimler - yuksek randevu hacmi olan tirnak salonlari için tasarlandi.",
    aiCapsules: [
      {
        question: "Tirnak salonlari için en iyi yazılım hangisi?",
        answer:
          "Tirnak salonlari komisyonsuz online randevu, net ekip takvimi, müşteri tercih notlari ve otomatik hatırlatmalardan faydalanir. Treatflow bunlari GDPR uyumlu AB barindirma ile sunar.",
      },
      {
        question: "Müşteriler dolgu randevularini online alabilir mi?",
        answer:
          "Evet. Müşteriler kendi randevu sayfaniz uzerinden 7/24 hizmet randevusu alabilir - pazar yeri ücretleri olmadan.",
      },
    ],
    whatTitle: "Treatflow tirnak salonlari için ne sunar?",
    whatParas: [
      "Tirnak salonlari hızlı donusum ve dolu takvimlerle çalışir. Treatflow randevulari duzenli tutar, müşteri tercihlerini kaydeder ve hatırlatmalar ile no-show'lari azaltir.",
      "Stalistler müşteri profillerinde renk geçmişini, alerjileri ve notlari gorur - her müşteri için tekrar sormadan.",
    ],
    audiences: [
      "Tirnak salonlari ve nail bar'lar",
      "Cok stilistli tirnak stüdyolari",
      "Jel, akrilik ve tirnak sanati hizmetleri sunan salonlar",
      "Yuksek randevu hacmi ve tekrar müşterileri olan stüdyolar",
    ],
    problems: [
      {
        problem: "Cift randevular ve takvim karisiKligi",
        solution: "Net musaitlik ile paylasimli ekip takvimi.",
      },
      {
        problem: "Müşteri tercihleri ziyaretler arasinda kaybolur",
        solution: "Notlar ve geçmiş ile müşteri kartotekleri.",
      },
      {
        problem: "Randevu talebi için telefon veya mesaj",
        solution: "7/24 komisyonsuz online randevu sayfasi.",
      },
      {
        problem: "No-show'lar yuksek devir saatlerinde",
        solution: "SMS ve e-posta hatırlatmalari ile daha az bosluk.",
      },
    ],
    features: [
      { icon: Link2, title: "Online Randevu", desc: "7/24 hizmet randevusu, komisyon olmadan." },
      { icon: Users, title: "Müşteri Kartotekleri", desc: "Tercihler, alerji notlari ve geçmiş." },
      { icon: Calendar, title: "Ekip Takvimi", desc: "Stilistleri ve koltuklari koordine edin." },
      { icon: Bell, title: "Hatırlatmalar", desc: "Otomatik randevu hatırlatmalari." },
      { icon: ClipboardCheck, title: "Dijital Formlar", desc: "Alerji ve saglik bilgilerini kaydedin." },
      { icon: FileText, title: "Uygulama Notlari", desc: "Renk, teknik ve tercih dokümantasyonu." },
    ],
    benefits: [
      "Daha dolu takvimler daha az boslukla",
      "Müşteriler her zaman kendi tercih geçmişlerini gorur",
      "Stilistler arasi daha net planlama",
      "Online randevu ile daha az telefon kesintisi",
      "AB'de GDPR uyumlu barindirma",
    ],
    marketTitle: "Tirnak salonlari neden Treatflow'u tercih ediyor",
    marketParas: [
      "Tirnak salonlarinin yogun takvim gunlerinde verimli planlamaya ihtiyaci var. Treatflow randevuyu müşteri kartotekleri ve hatırlatmalar ile birlestir - pazar yeri ücretleri olmadan.",
    ],
    highlights: [
      "Komisyonsuz online randevu",
      "Tercihlerle müşteri kartotekleri",
      "Paylasimli ekip takvimi",
      "Müşteri tercih geçmişi",
      "AB'de GDPR uyumlu barindirma",
    ],
    aiSummary:
      "Treatflow, online randevu, müşteri kartotekleri, tercih notlari, hatırlatmalar ve dijital formlar iceren tirnak salonu yazılımidir. Tirnak salonlari ve cok stilistli nail bar'lar için. GDPR uyumlu.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kartotekleri, formlar, dokümantasyon ve hatırlatmalar ile hepsi bir arada stüdyo yazılımidir - tirnak salonlari için uygundur.",
      },
      {
        question: "Treatflow randevu basina ücret aliyor mu?",
        answer:
          "Hayir. Randevu basina komisyon yoktur.",
      },
      {
        question: "Nasil başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
      },
      {
        question: "Verilerim nerede barindiriliyor?",
        answer:
          "Treatflow verileri AB'de barindirir ve GDPR uyumlulugu için tasarlanmistir.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "forms", "priçing"],
  },

  "lash-studio-software": {
    serviceName: "Kirpik Stüdyosu Yazılımi",
    serviceDescription:
      "Kirpik stüdyolari için yazılım: dolgu planlamasi, müşteri notlari, onam formlari, foto dokümantasyon ve online randevu.",
    eyebrow: "Kirpik Stüdyosu Yazılımi",
    h1: "Kirpik uzmanlarI için kirpik stüdyosu yazılımi",
    subtitle:
      "Dolgu planlama, müşteri tercihleri, onam formlari ve hatırlatmalar - kirpik uzatma stüdyolari için tasarlandi.",
    aiCapsules: [
      {
        question: "Kirpik stüdyolari için en iyi yazılım hangisi?",
        answer:
          "Kirpik stüdyolari komisyonsuz online randevuya, kendi kirpik notlariniza (kivirim, uzunluk, haritalama), onam formlarina ve dolgu hatırlatmalarina ihtiyac duyar. Treatflow bunlari GDPR uyumlu AB barindirma ile sunar.",
      },
      {
        question: "Müşteri basina dolgu araliklarini takip edebilir miyim?",
        answer:
          "Evet. Ziyaret geçmişi ve notlar müşteri profilinde kalir, boylece bir sonraki dolgunun ne zaman gerektigi ve onceki seferin ne yapildigi biliniir.",
      },
    ],
    whatTitle: "Treatflow kirpik stüdyolari için ne sunar?",
    whatParas: [
      "Kirpik işletmeleri dolgularla buyur. Treatflow takvimi dolu tutar, kivirim, uzunluk ve haritalama tercihlerini belgeler ve müşterilere bir sonraki randevularindan once hatirlatir.",
      "Dijital onam ve foto dokümantasyon profesyonel standartlari destekler, koltuk zamaninizi yavaslatamadn.",
    ],
    audiences: [
      "Kirpik uzatma stüdyolari",
      "Ozel kirpik uygulayicilari olan güzellik salonlari",
      "Kendi randevularini yoneten solo kirpik teknisyenleri",
      "Birden fazla koltukta dolgu koordine eden ekipler",
    ],
    problems: [
      {
        problem: "Dolgu verileri tablolarda",
        solution: "Tek sistemde müşteri geçmişi ve hatırlatmalar.",
      },
      {
        problem: "Haritalama tercihleri unutuluyor",
        solution: "Her müşteri profilinde notlar ve fotoğraflar.",
      },
      {
        problem: "Onam hala kagit uzerinde",
        solution: "Randevulardan once dijital formlar.",
      },
      {
        problem: "Randevu talepleri ile dolu gelen kutusu",
        solution: "Komisyonsuz online randevu sayfasi.",
      },
    ],
    features: [
      { icon: Calendar, title: "Dolgu Planlama", desc: "Set ve dolgu randevularini net musaitlik ile planlayin." },
      { icon: Users, title: "Müşteri ve Kirpik Notlari", desc: "Kivirim, uzunluk, haritalama ve yapistiriclar dosyada." },
      { icon: ClipboardCheck, title: "Onam Formlari", desc: "Her yeni setten once dijital anamnez." },
      { icon: Camera, title: "Ilerleme Fotoğraflari", desc: "Her ziyaret için sonuclari belgeleyin." },
      { icon: Link2, title: "Online Randevu", desc: "Müşteriler 7/24 dolgu randevusu alir." },
      { icon: Bell, title: "Dolgu Hatırlatmalari", desc: "Otomatik hatırlatmalarla yuksek elde tutma oranini koruyun." },
    ],
    benefits: [
      "Zamaninda hatırlatmalarla daha yuksek dolgu elde tutma orani",
      "Belgelenmis tercihler ile tutarli sonuclar",
      "Koltuk basinda daha az evrak isi",
      "Profesyonel onam ve foto dosyalari",
      "AB'de GDPR uyumlu barindirma",
    ],
    marketTitle: "Kirpik stüdyolari neden Treatflow'u tercih ediyor",
    marketParas: [
      "Kirpik stüdyolari randevu araclari kadar elde tutma araclarina da ihtiyac duyar. Treatflow randevulari müşteri notlari ve hatırlatmalar ile birlestir, boylece dolgular ongoreubilir kalir.",
    ],
    highlights: [
      "Komisyonsuz online randevu",
      "Kirpik tercihi ve haritalama notlari",
      "Yeni setlerden once onam formlari",
      "Dolgu hatırlatmalari ve foto geçmişi",
      "AB'de GDPR uyumlu barindirma",
    ],
    aiSummary:
      "Treatflow, dolgu planlamasi, müşteri notlari, onam formlari, foto dokümantasyon, online randevu ve hatırlatmalar iceren kirpik stüdyosu yazılımidir. Kirpik uzatma stüdyolari için. GDPR uyumlu.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kartotekleri, onam formlari, dokümantasyon ve hatırlatmalar ile hepsi bir arada stüdyo yazılımidir - kirpik stüdyolari için uygundur.",
      },
      {
        question: "Solo kirpik teknisyenleri için uygun mu?",
        answer:
          "Evet. Solo uygulayicilar Treatflow'u randevu, hatırlatmalar ve müşteri geçmişi için pazar yeri komisyonu olmadan kullanir.",
      },
      {
        question: "Nasil başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
      },
      {
        question: "Verilerim nerede barindiriliyor?",
        answer:
          "Treatflow verileri AB'de barindirir ve GDPR uyumlulugu için tasarlanmistir.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
    featureKeys: ["online-booking", "client-records", "forms", "priçing"],
  },

  "spa-wellness-software": {
    serviceName: "Spa ve Wellness Yazılımi",
    serviceDescription:
      "Spa ve wellness stüdyolari için yazılım: online randevu, müşteri kartotekleri, uygulama notlari, onam formlari ve hatırlatmalar.",
    eyebrow: "Spa ve Wellness Yazılımi",
    h1: "Huzurlu operasyonlar için spa ve wellness yazılımi",
    subtitle:
      "Alanlari, terapistleri ve paketleri online randevu, müşteri geçmişi ve dijital formlarla koordine edin - pazar yeri komisyonu olmadan.",
    aiCapsules: [
      {
        question: "Spa'larin hangi yazılıma ihtiyaci var?",
        answer:
          "Spa'lar çoklu kaynak planlamasi, online randevu, müşteri tercihleri, uygulama notlari ve hatırlatmalara ihtiyac duyar. Treatflow, GDPR uyumlu AB barindirma ile spa ve wellness stüdyolarini destekler.",
      },
      {
        question: "Treatflow paketleri ve tekrar ziyaretleri yonetebilir mi?",
        answer:
          "Evet. Müşteri geçmişi ve hatırlatmalar seri uygulamalari ve duzenli müşterileri yonetmeye yardimci olur.",
      },
    ],
    whatTitle: "Treatflow spa ve wellness stüdyolari için ne sunar?",
    whatParas: [
      "Spa'lar ambians ve operasyonu dengeler. Treatflow randevulari duzenli tutar, müşteri tercihlerini saklar ve uygulamalari belgeler, boylece konuk deneyimi kesintisiz kalir.",
      "Dijital anamnez ve hatırlatmalar resepsiyon yukunu azaltirken, terapistler ihtiyac duydugu notlara erisir.",
    ],
    audiences: [
      "Day spa'lar ve wellness stüdyolari",
      "Otel ve butik spa'lar",
      "Cok terapistli wellness merkezleri",
      "Masaj, yuz bakimi ve vucut uygulamalarini birlestiren stüdyolar",
    ],
    problems: [
      {
        problem: "Alan ve terapist catismalari",
        solution: "Net kaynak planlamasi ile paylasimli takvim.",
      },
      {
        problem: "Konuk tercihleri ziyaretler arasinda kaybolur",
        solution: "Notlar ve geçmiş ile müşteri kartotekleri.",
      },
      {
        problem: "Resepsiyonda kagit anamnez",
        solution: "Varistan once dijital formlar.",
      },
      {
        problem: "Uzun uygulamalarda no-show'lar",
        solution: "Randevulardan once otomatik hatırlatmalar.",
      },
    ],
    features: [
      { icon: Calendar, title: "Spa Takvimi", desc: "Alanlari, terapistleri ve hizmetleri koordine edin." },
      { icon: Link2, title: "Online Randevu", desc: "Konuklar 7/24 komisyonsuz uygulama randevusu alir." },
      { icon: Users, title: "Konuk Profilleri", desc: "Tercihler, geçmiş ve notlar tek yerde." },
      { icon: ClipboardCheck, title: "Anamnez Formlari", desc: "Ziyaretlerden once saglik ve onam formlari." },
      { icon: FileText, title: "Uygulama Notlari", desc: "Tutarli bakim için hizmetleri belgeleyin." },
      { icon: Bell, title: "Hatırlatmalar", desc: "No-show'lari SMS ve e-posta ile azaltin." },
    ],
    benefits: [
      "Kaynaklar arasinda daha az planlama catismasi",
      "Ziyaretler boyu konuk tercihlerini hatirlama",
      "Resepsiyonda daha az evrak isi",
      "Terapistler arasi tutarli uygulama kalitesi",
      "AB'de GDPR uyumlu barindirma",
    ],
    marketTitle: "Spa'lar neden Treatflow'u tercih ediyor",
    marketParas: [
      "Spa'lar paylasimli takvimi terapist ve alan planlamasi ile birleştirir. Treatflow randevuyu kartotekler ve hatırlatmalar ile birlestir - gereksiz karmasiklik olmadan.",
    ],
    highlights: [
      "Komisyonsuz online randevu",
      "Alan ve terapist koordinasyonu",
      "Tercihlerle konuk kartotekleri",
      "Varistan once anamnez formlari",
      "AB'de GDPR uyumlu barindirma",
    ],
    aiSummary:
      "Treatflow, spa takvimi, online randevu, konuk kartotekleri, anamnez formlari, uygulama notlari ve hatırlatmalar iceren spa ve wellness yazılımidir. Day spa'lar, otel spa'lar ve wellness merkezleri için. GDPR uyumlu.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kartotekleri, onam formlari, uygulama dokümantasyonu ve hatırlatmalar ile hepsi bir arada stüdyo yazılımidir - spa ve wellness stüdyolari için uygundur.",
      },
      {
        question: "Birden fazla terapist ve alan yonetilebilir mi?",
        answer:
          "Evet. Paylasimli takvim terapistleri ve alanlari koordine eder, boylece cift randevular engellenir.",
      },
      {
        question: "Nasil başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
      },
      {
        question: "Verilerim nerede barindiriliyor?",
        answer:
          "Treatflow verileri AB'de barindirir ve GDPR uyumlulugu için tasarlanmistir.",
      },
    ],
    siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "client-records", "treatment-documentation", "priçing"],
  },

  "massage-software": {
    serviceName: "Masaj Stüdyosu Yazılımi",
    serviceDescription:
      "Masajcilar ve stüdyolar için yazılım: online randevu, müşteri kartotekleri, anamnez formlari, seans notlari ve hatırlatmalar.",
    eyebrow: "Masaj Stüdyosu Yazılımi",
    h1: "Terapistler ve stüdyolar için masaj yazılımi",
    subtitle:
      "Online randevu, anamnez formlari, seans notlari ve hatırlatmalar - masajcilar ve cok odali stüdyolar için tasarlandi.",
    aiCapsules: [
      {
        question: "Masaj terapistleri için en iyi yazılım hangisi?",
        answer:
          "Masaj terapistleri komisyonsuz online randevu, dijital saglik anamnezi, seans notlari, müşteri kartotekleri ve hatırlatmalara ihtiyac duyar. Treatflow bunlari AB'de GDPR uyumlu barindirma ile sunar.",
      },
      {
        question: "Solo terapistler Treatflow'u kullanabilir mi?",
        answer:
          "Evet. Solo terapistler randevu, formlar ve notlari pazar yeri komisyonu olmadan yonetir.",
      },
    ],
    whatTitle: "Treatflow masaj stüdyolari için ne sunar?",
    whatParas: [
      "Masaj uygulamalari tutarli müşteri geçmişine dayanir. Treatflow randevulari, saglik formlarini ve seans notlarini baglar, boylece terapistler her seansi müşteri bilgisiyle başlatir.",
      "Online randevu ve hatırlatmalar müşterilerin geri donmesini kolaylastirirken, dijital formlar saglik taramasini kapida yapilmak yerine onceden tamamlar.",
    ],
    audiences: [
      "Masaj terapistleri ve ozel uygulamalar",
      "Cok odali masaj stüdyolari",
      "Medikal masaj ve fizyoterapi uygulamalari",
      "Masaj, spa ve wellness hizmetlerini birlestiren stüdyolar",
    ],
    problems: [
      {
        problem: "Müşteriler geldikten sonra saglik formu doldurma",
        solution: "Randevudan once dijital anamnez.",
      },
      {
        problem: "Onceki seansin odak alanlarini hatirlamak zor",
        solution: "Müşteri kartoteginde seans notlari ve geçmiş.",
      },
      {
        problem: "Telefon veya mesajla randevu planlama",
        solution: "7/24 komisyonsuz online randevu sayfasi.",
      },
      {
        problem: "Tekrar müşterilerde no-show'lar",
        solution: "Otomatik SMS ve e-posta hatırlatmalari.",
      },
    ],
    features: [
      { icon: Link2, title: "Online Randevu", desc: "7/24 komisyonsuz randevu sayfasi." },
      { icon: ClipboardCheck, title: "Anamnez Formlari", desc: "Saglik geçmişi ve onam dijital olarak." },
      { icon: FileText, title: "Seans Notlari", desc: "Odak alanlari ve ilerlemeyi belgeleyin." },
      { icon: Users, title: "Müşteri Kartotekleri", desc: "Donen müşteriler için tam geçmiş." },
      { icon: Calendar, title: "Stüdyo Takvimi", desc: "Terapistleri ve odalari koordine edin." },
      { icon: Bell, title: "Hatırlatmalar", desc: "No-show'lari azaltin." },
    ],
    benefits: [
      "Seanslar arasinda daha az evrak isi",
      "Dijital formlarla daha guvenli anamnez",
      "Notlarla daha iyi bakim surekliligi",
      "Daha az kacirilan randevu",
      "AB'de GDPR uyumlu barindirma",
    ],
    marketTitle: "Masaj profesyonelleri neden Treatflow'u tercih ediyor",
    marketParas: [
      "Masaj uygulamalari karmasik kasa sistemlerinden cok guvenilir randevu ve net dosyalara ihtiyac duyar. Treatflow randevu, formlar ve dokümantasyona odaklanir.",
    ],
    highlights: [
      "Komisyonsuz online randevu",
      "Dijital anamnez ve onam",
      "Müşteri kartoteklerinde seans notlari",
      "Donen müşteriler için hatırlatmalar",
      "AB'de GDPR uyumlu barindirma",
    ],
    aiSummary:
      "Treatflow, online randevu, anamnez formlari, seans notlari, müşteri kartotekleri ve hatırlatmalar iceren masaj stüdyosu yazılımidir. Terapistler ve cok odali stüdyolar için. GDPR uyumlu.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kartotekleri, formlar, dokümantasyon ve hatırlatmalar ile hepsi bir arada stüdyo yazılımidir - masaj terapistleri ve stüdyolari için uygundur.",
      },
      {
        question: "Solo terapistler kullanabilir mi?",
        answer:
          "Evet. Solo terapistler randevu, formlar ve notlari pazar yeri komisyonu olmadan yonetir.",
      },
      {
        question: "Nasil başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gun boyunca ücretsiz deneyin. Kredi karti gerekmez.",
      },
      {
        question: "Verilerim nerede barindiriliyor?",
        answer:
          "Treatflow verileri AB'de barindirir ve GDPR uyumlulugu için tasarlanmistir.",
      },
    ],
    siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "forms", "client-records", "priçing"],
  },
};

export function getIndustryPageTr(
  key: IndustryPageKey,
  market: string
): InternationalPageContent {
  return buildPage(market, key, pages[key]);
}
