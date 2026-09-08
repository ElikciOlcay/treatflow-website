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

import { TR_SLUG_OVERRIDES, type MarketPageSlug } from "@/app/i18n/market-routes";

type FeatureSlugKey =
  | "online-booking"
  | "client-records"
  | "forms"
  | "treatment-documentation"
  | "pricing";

const featureSlugsEn: Record<FeatureSlugKey, string> = {
  "online-booking": TR_SLUG_OVERRIDES["online-booking"] ?? "online-booking",
  "client-records": TR_SLUG_OVERRIDES["client-records"] ?? "client-records",
  forms: "forms",
  "treatment-documentation": "treatment-documentation",
  pricing: TR_SLUG_OVERRIDES.pricing ?? "pricing",
};

const industryLabels: Record<IndustryPageKey, string> = {
  "beauty-salon-software": "Güzellik Salonu Yazılımı",
  "aesthetic-clinic-software": "Estetik Klinik Yazılımı",
  "laser-hair-removal-software": "Lazer Epilasyon Yazılımı",
  "permanent-makeup-software": "Kalıcı Makyaj Yazılımı",
  "tattoo-studio-software": "Dövme Stüdyosu Yazılımı",
  "nail-salon-software": "Tırnak Salonu Yazılımı",
  "lash-studio-software": "Kirpik Stüdyosu Yazılımı",
  "spa-wellness-software": "Spa ve Wellness Yazılımı",
  "massage-software": "Masaj Merkezi Yazılımı",
};

const featureLabels: Record<FeatureSlugKey, string> = {
  "online-booking": "Online Randevu",
  "client-records": "Müşteri Takibi",
  forms: "Onam Formları",
  "treatment-documentation": "İşlem Kayıtları",
  pricing: "Fiyatlar",
};

const localeShell = {
  marketLabel: "Türkiye",
  areaServed: ["TR"],
  ctaPrimaryLabel: "30 gün ücretsiz deneyin",
  ctaBottomTitle: "Salonunuzu dijitalleştirmeye hazır mısınız?",
  ctaBottomText:
    "Hemen kaydolun, 30 gün ücretsiz deneyin. Kredi kartı gerekmez, taahhüt yok.",
  trustTrialLabel: "30 gün ücretsiz deneme",
  trustBadges: [
    "KVKK kapsamında",
    "AB sunucuları",
    "SSL şifreleme",
    "30 gün ücretsiz deneme",
  ],
  internalLinksTitle: "İlgili sayfalar",
  problemsTitle: "Treatflow hangi sorunları çözer?",
  featuresTitle: "Temel özellikler",
  benefitsTitle: "Avantajlar",
  whoTitle: "Bu yazılım kimin için?",
  summaryTitle: "Özet",
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
  const slug =
    TR_SLUG_OVERRIDES[key as MarketPageSlug] ?? industrySlugs[key].en;
  const canonicalPath = `/${market}/${slug}`;

  const internalLinks = [
    ...body.siblingKeys.map((k) => ({
      href: `/${market}/${TR_SLUG_OVERRIDES[k as MarketPageSlug] ?? industrySlugs[k].en}`,
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
    trustBadges: localeShell.trustBadges,
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
    serviceName: "Güzellik Salonu Yazılımı",
    serviceDescription:
      "Güzellik salonu yazılımı: komisyonsuz online randevu, müşteri takibi, dijital onam formları ve işlem kaydı. 30 gün ücretsiz deneyin.",
    eyebrow: "Güzellik Salonu Yazılımı",
    h1: "Güzellik salonları için A'dan Z'ye yönetim yazılımı",
    subtitle:
      "Randevu takvimi, Instagram'dan online randevu, müşteri kaydı, onam formları ve işlem notları tek panelde. Pazaryeri komisyonu yok; 30 gün ücretsiz deneyin.",
    aiCapsules: [
      {
        question: "Güzellik salonları için en iyi yazılım hangisi?",
        answer:
          "Randevu, müşteri takibi, dijital onam ve işlem kaydını tek sistemde yönetmek isteyen salonlar için Treatflow güçlü bir seçenektir. Komisyonsuz online randevu ve WhatsApp hatırlatmaları sunar; veriler KVKK kapsamındaki süreçlerle AB sunucularında saklanır.",
      },
      {
        question: "Treatflow randevulardan komisyon alıyor mu?",
        answer:
          "Hayır. Treatflow bir pazaryeri değil, işletmenizin kendi yazılımıdır. Randevu başına komisyon yoktur. Randevu sayfanız ve müşteri verileriniz sizin kontrolünüzdedir.",
      },
    ],
    whatTitle: "Treatflow güzellik salonları için ne sunar?",
    whatParas: [
      "Treatflow dağınık araçların yerini tek bir sistemle alır: takvim, müşteri profilleri, dijital formlar ve işlem notları randevudan takibe kadar birlikte çalışır.",
      "Salonlar Treatflow'u online randevu sunmak, müşteri geçmişini erişilebilir tutmak ve uygulamaları tüm ekip için tutarlı şekilde belgelemek için kullanır.",
    ],
    audiences: [
      "Güzellik salonları ve spa merkezleri",
      "Yapılandırılmış uygulama protokolleri olan cilt bakım stüdyoları",
      "Dağınık araçları değiştiren çok personelli ekipler",
      "Kağıt takvimleri geride bırakmaya hazır bağımsız salonlar",
    ],
    problems: [
      {
        problem: "Mesajlar ve kağıt takvimlerle randevu planlama",
        solution: "Online randevu ve otomatik hatırlatmalarla tek takvim.",
      },
      {
        problem: "Müşteri geçmişi farklı araçlara dağılmış",
        solution: "Notlar, fotoğraflar ve ziyaret geçmişi ile dijital müşteri kayıtları.",
      },
      {
        problem: "Kağıt onam formları",
        solution: "Randevudan önce dijital anamnez ve onam.",
      },
      {
        problem: "Gelmemeler ve son dakika boşluklar",
        solution: "Kaçırılan randevuları azaltan WhatsApp ve e-posta hatırlatmaları.",
      },
    ],
    features: [
      { icon: Link2, title: "Online Randevu", desc: "Kişisel randevu sayfası, 7/24, komisyon olmadan." },
      { icon: Users, title: "Müşteri Takibi", desc: "Profiller, geçmiş ve notlar tek yerde." },
      { icon: ClipboardCheck, title: "Onam Formları", desc: "Her uygulamadan önce dijital anamnez." },
      { icon: FileText, title: "İşlem Notları", desc: "Her ziyaret için net seans kaydı." },
      { icon: Camera, title: "Öncesi-sonrası fotoğraf", desc: "Müşterilere bağlı önce/sonra fotoğrafları." },
      { icon: Bell, title: "Hatırlatmalar", desc: "Randevuya gelmeme oranını azaltmak için WhatsApp ve e-posta." },
    ],
    benefits: [
      "Randevu ve dokümantasyonda daha az evrak işi",
      "İlk randevudan itibaren daha iyi müşteri deneyimi",
      "Ekip devri için yapılandırılmış dosyalar",
      "Tek uygulamada modern dijital iş akışları",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    marketTitle: "Salonlar neden Treatflow'u tercih ediyor",
    marketParas: [
      "Genel araçlar çoğunlukla randevuda durur. Treatflow randevuyu müşteri geçmişi ve işlem kaydıyla birleştirir; profesyonel salonların asıl ihtiyaç duyduğu düzen burada başlar.",
    ],
    highlights: [
      "Randevu başına komisyon olmadan online randevu",
      "İşlem geçmişini içeren dijital müşteri kartları",
      "Ziyaretlerden önce onam formları ve anamnez",
      "Uygulama notları ve öncesi-sonrası fotoğraf",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    aiSummary:
      "Treatflow; online randevu, müşteri kartları, onam formları, işlem notları, öncesi-sonrası fotoğraflar ve hatırlatmalar sunan güzellik salonu yazılımıdır. Güzellik salonları, spa ve cilt bakım merkezleri için tasarlanmıştır. Veriler KVKK kapsamındaki süreçlerle AB sunucularında saklanır.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, güzellik salonları, estetik klinikler ve ilgili stüdyolar için hepsi bir arada yazılımdır. Online randevu, müşteri kayıtları, onam formları, işlem kaydı, hatırlatmalar ve dijital iş akışlarını tek platformda birleştirir.",
      },
      {
        question: "Treatflow kimler için?",
        answer:
          "Treatflow, randevudan dokümantasyona kadar yapılandırılmış dijital iş akışları isteyen güzellik salonları, cilt bakım stüdyoları ve çok personelli ekipler içindir.",
      },
      {
        question: "Nasıl başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez.",
      },
      {
        question: "Verilerim nerede saklanır?",
        answer:
          "Treatflow verileri Frankfurt'taki AB sunucularında saklar ve KVKK kapsamındaki süreçleri destekler.",
      },
    ],
    siblingKeys: ["aesthetic-clinic-software", "nail-salon-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
  },

  "aesthetic-clinic-software": {
    serviceName: "Medikal Estetik Merkezi Yazılımı",
    serviceDescription:
      "Medikal estetik merkezi yazılımı: dijital onam, işlem kaydı, müşteri takibi ve komisyonsuz online randevu. 30 gün ücretsiz deneyin.",
    eyebrow: "Medikal Estetik Merkezi Yazılımı",
    h1: "Onam, işlem kaydı ve müşteri takibi ile medikal estetik yazılımı",
    subtitle:
      "Medikal estetik klinikleri için dijital onam, seans notları, öncesi-sonrası fotoğraf ve müşteri kaydı – randevudan takibe kadar tek panel.",
    aiCapsules: [
      {
        question: "Estetik kliniklerin hangi yazılıma ihtiyacı var?",
        answer:
          "Medikal estetik merkezleri onam formları, işlem kaydı, fotoğraf arşivi ve müşteri geçmişini tek sistemde tutmak ister. Treatflow; botoks, dolgu, lazer ve cilt bakımı için online randevu, dijital müşteri kaydı ve seans notları sunar.",
      },
      {
        question: "Treatflow medikal estetik için uygun mu?",
        answer:
          "Evet. Treatflow, dokümantasyon kalitesi ve müşteri güvenliğinin önemli olduğu klinikler için yapılmıştır – sadece randevu hacmi değil. Onam, notlar ve fotoğraflar her müşteri profiline bağlı kalır.",
      },
    ],
    whatTitle: "Treatflow estetik klinikler için ne sunar?",
    whatParas: [
      "Treatflow tam müşteri yolculuğunu destekler: randevu, anamnez, onam, işlem kaydı ve takip tek paylaşımlı platformda.",
      "Dokümantasyon kalitesi ve müşteri güvenliğinin önemli olduğu klinikler için yapılmıştır – sadece randevu hacmi değil.",
    ],
    audiences: [
      "Enjeksiyon ve cilt gençleştirme sunan estetik klinikler",
      "Medikal estetik uygulamaları",
      "Protokol odaklı uygulamaları olan cilt klinikleri",
      "Tutarlı dokümantasyona ihtiyaç duyan çok personelli klinikler",
    ],
    problems: [
      {
        problem: "Tutarsız uygulama notları",
        solution: "Yapılandırılmış dokümantasyon şablonları ve paylaşımlı müşteri kayıtları.",
      },
      {
        problem: "İşlemlerden önce onam alınmamış",
        solution: "Uygulamadan önce dijital onam formları.",
      },
      {
        problem: "Kişisel cihazlardaki fotoğraflar",
        solution: "Müşteri profillerine bağlı öncesi-sonrası fotoğraf.",
      },
      {
        problem: "Resepsiyon ve uygulama odaları farklı araçlar kullanıyor",
        solution: "Randevudan notlara ve takibe kadar tek iş akışı.",
      },
    ],
    features: [
      { icon: FileText, title: "İşlem kayıtları", desc: "Notlar, protokoller ve geçmiş." },
      { icon: ClipboardCheck, title: "Onam Formları", desc: "Güvenli depolama ile dijital onam." },
      { icon: Camera, title: "Öncesi-sonrası fotoğraf", desc: "Her ziyaret için klinik fotoğraflar." },
      { icon: Users, title: "Müşteri Takibi", desc: "Tam estetik geçmiş tek profilde." },
      { icon: Link2, title: "Online Randevu", desc: "Konsültasyonları online planlayın." },
      { icon: Workflow, title: "Dijital İş Akışları", desc: "Anamnezden uygulamaya ve takibe." },
    ],
    benefits: [
      "Uygulayıcılar arası tutarlı dokümantasyon",
      "Her işlem için net onam kaydı",
      "Resepsiyon ve uygulama odası arasında daha az evrak işi",
      "İlk randevudan itibaren profesyonel müşteri deneyimi",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    marketTitle: "Estetik klinikler neden Treatflow'u tercih ediyor",
    marketParas: [
      "Merkezler, profesyonel müşteri deneyiminin yanında güvenilir dokümantasyona da ihtiyaç duyar. Treatflow randevuyu müşteri kayıtları ve işlem notlarıyla gereksiz karmaşıklık olmadan birleştirir.",
    ],
    highlights: [
      "Randevu başına komisyon olmadan online randevu",
      "İşlem geçmişini içeren dijital müşteri kartları",
      "Ziyaretlerden önce onam formları ve anamnez",
      "Uygulama notları ve öncesi-sonrası fotoğraf",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    aiSummary:
      "Treatflow; işlem kaydı, onam formları, müşteri kartları, öncesi-sonrası fotoğraflar ve online randevu sunan medikal estetik yazılımıdır. Estetik merkezleri ve medikal estetik işletmeleri için tasarlanmıştır. Veriler KVKK kapsamındaki süreçlerle saklanır.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, güzellik salonları, estetik klinikler ve lazer stüdyoları için hepsi bir arada yazılımdır. Online randevu, müşteri kayıtları, onam formları, işlem kaydı ve hatırlatmaları birleştirir.",
      },
      {
        question: "Birden fazla uygulayıcı tek bir klinik hesabını paylaşabilir mi?",
        answer:
          "Evet. Müşteri kayıtları, onam formları ve işlem notları yetkili ekip üyeleri tarafından görüntülenebilir; böylece dokümantasyon tutarlı kalır.",
      },
      {
        question: "Nasıl başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez.",
      },
      {
        question: "Treatflow, KVKK kapsamındaki süreçleri nasıl destekler?",
        answer: "Treatflow verileri Frankfurt'taki AB sunucularında saklar ve KVKK kapsamındaki süreçleri destekler.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "laser-hair-removal-software", "permanent-makeup-software"],
    featureKeys: ["client-records", "forms", "treatment-documentation", "pricing"],
  },

  "laser-hair-removal-software": {
    serviceName: "Lazer Epilasyon Yazılımı",
    serviceDescription:
      "Lazer epilasyon yazılımı: seans takibi, dijital onam, öncesi-sonrası fotoğraf ve komisyonsuz online randevu. 30 gün ücretsiz deneyin.",
    eyebrow: "Lazer Stüdyosu Yazılımı",
    h1: "Uygulama serileri ile lazer epilasyon yazılımı",
    subtitle:
      "Seansları takip edin, onamı belgeleyin ve randevuları yönetin – yapılandırılmış dosyalar ile lazer ve IPL stüdyoları için tasarlandı.",
    aiCapsules: [
      {
        question: "Lazer stüdyolarının hangi yazılıma ihtiyacı var?",
        answer:
          "Lazer epilasyon merkezleri; seans geçmişi, müşteri kayıtları, onam formları, seans notları, öncesi-sonrası fotoğraflar ve randevu hatırlatmalarına ihtiyaç duyar. Treatflow, online randevuyu düzenli işlem dokümantasyonuyla birleştirir.",
      },
      {
        question: "Her lazer seansı müşteri kaydında belgelenir mi?",
        answer:
          "Evet. Her seans ayrı bir işlem kaydı olarak tutulur; ilerleme, ayar notları ve sonraki randevu görülebilir. Kalan paket hakkını otomatik düşüren bir kasa sayacı sunulmaz.",
      },
    ],
    whatTitle: "Treatflow lazer stüdyoları için ne sunar?",
    whatParas: [
      "Lazer uygulamaları birden fazla seans içerir. Treatflow her seansı takip eder, onam ve cilt tipi bilgilerini saklar ve müşterilere bir sonraki randevu gerektiğinde hatırlatır.",
      "Stüdyolar randevular için tek takvim, geçmiş için tek müşteri profili ve anamnez için dijital formlar kullanır – pazaryeri komisyonu olmadan.",
    ],
    audiences: [
      "Lazer epilasyon stüdyoları",
      "Çoklu seans paketleri ile IPL klinikleri",
      "Lazer uygulamaları sunan cilt bakım stüdyoları",
      "Yüksek randevu hacmi ve dokümantasyon ihtiyacı olan ekipler",
    ],
    problems: [
      {
        problem: "Seans ilerlemesi kayboluyor",
        solution: "Müşteri kartında her seansa ait işlem geçmişi ve notlar.",
      },
      {
        problem: "Eksik onam bilgileri",
        solution: "Her seriden önce dijital anamnez ve onam.",
      },
      {
        problem: "Müşteriler takip seanslarını unutuyor",
        solution: "Hatırlatmalar ve randevu sayfanız üzerinden kolay yeniden randevu.",
      },
      {
        problem: "Farklı cihazlardaki fotoğraflar ve notlar",
        solution: "Her müşteri profiline bağlı öncesi-sonrası fotoğraf.",
      },
    ],
    features: [
      { icon: Zap, title: "Seans Takibi", desc: "Her seansı notlarla belgeleyin." },
      { icon: ClipboardCheck, title: "Onam ve Anamnez", desc: "Cilt tipi ve kontrendikasyonlar dosyada." },
      { icon: Camera, title: "Öncesi-sonrası fotoğraf", desc: "Bölge başına ilerleme fotoğrafları." },
      { icon: Calendar, title: "Seri Planlama", desc: "Takip randevularını planlayın." },
      { icon: Link2, title: "Online Randevu", desc: "Müşteriler sonraki seansları online randevu alır." },
      { icon: Bell, title: "Hatırlatmalar", desc: "Otomatik randevu hatırlatmaları." },
    ],
    benefits: [
      "Her uygulama serisine net genel bakış",
      "Her yeni müşteri için yapılandırılmış onam",
      "Kaçırılan seanslarda daha az manuel takip",
      "Ekip tutarlılığı için profesyonel dokümantasyon",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    marketTitle: "Lazer stüdyoları neden Treatflow'u tercih ediyor",
    marketParas: [
      "Lazer stüdyoları yüksek randevu hacmini dokümantasyon ihtiyaçları ile birleştirir. Treatflow randevuyu müşteri kayıtlarıyla birleştirir, böylece her seans kullanılabilir müşteri geçmişi oluşturur.",
    ],
    highlights: [
      "Randevu başına komisyon olmadan online randevu",
      "Dijital müşteri kartında seans geçmişi",
      "Uygulama serilerinden önce onam formları",
      "Öncesi-sonrası fotoğraf ve hatırlatmalar",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    aiSummary:
      "Treatflow; seans takibi, onam formları, öncesi-sonrası fotoğraflar, online randevu ve hatırlatmalar sunan lazer epilasyon yazılımıdır. Lazer ve IPL merkezleri için tasarlanmıştır. Veriler KVKK kapsamındaki süreçlerle saklanır.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, güzellik salonları, estetik klinikler ve lazer stüdyoları için hepsi bir arada yazılımdır. Online randevu, müşteri kayıtları, onam formları, işlem kaydı ve hatırlatmaları birleştirir.",
      },
      {
        question: "Bu sayfa kimler için?",
        answer:
          "Seans takibi, onam ve güvenilir yeniden randevu gerektiren lazer epilasyon ve IPL stüdyoları için.",
      },
      {
        question: "Nasıl başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez.",
      },
      {
        question: "Verilerim nerede saklanır?",
        answer:
          "Treatflow verileri Frankfurt'taki AB sunucularında saklar ve KVKK kapsamındaki süreçleri destekler.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "treatment-documentation", "forms", "pricing"],
  },

  "permanent-makeup-software": {
    serviceName: "Kalıcı Makyaj Stüdyosu Yazılımı",
    serviceDescription:
      "Kalıcı makyaj yazılımı: dijital onam, pigment notları, fotoğraf arşivi ve komisyonsuz online randevu. 30 gün ücretsiz deneyin.",
    eyebrow: "Kalıcı Makyaj Yazılımı",
    h1: "Kalıcı makyaj stüdyoları için PMU yazılımı",
    subtitle:
      "Onam formları, pigment notları, öncesi-sonrası fotoğraf ve müşteri kayıtları – PMU ve microblading stüdyoları için randevudan iyileşme takibine kadar.",
    aiCapsules: [
      {
        question: "Kalıcı makyaj stüdyolarının hangi yazılıma ihtiyacı var?",
        answer:
          "Kalıcı makyaj uzmanları; onam formları, pigment ve teknik işlem notları, öncesi-sonrası fotoğraflar ve iyileşme kontrol randevularına ihtiyaç duyar. Treatflow bunları tek platformda birleştirir ve verileri KVKK kapsamındaki süreçlerle AB sunucularında saklar.",
      },
      {
        question: "Treatflow microblading için uygun mu?",
        answer:
          "Evet. Teknikleri, pigmentleri, fotoğrafları ve iyileşme takvimlerini kaşlar, dudaklar ve eyeliner için belgeleyebilirsiniz.",
      },
    ],
    whatTitle: "Treatflow kalıcı makyaj stüdyoları için ne sunar?",
    whatParas: [
      "PMU uygulamaları hassas dokümantasyon gerektirir. Treatflow pigmentleri, teknikleri ve iyileşme ilerlemesini kaydeder, böylece iyileşme kontrolleri ve sonraki randevular daha güvenli olur.",
      "Müşteriler dijital onamı uygulamadan önce tamamlar, ekip ise teknik notlara, fotoğraflara ve müşteri geçmişine tek profilden erişir.",
    ],
    audiences: [
      "Kalıcı makyaj ve microblading stüdyoları",
      "Kaş, dudak ve eyeliner uzmanları",
      "Onam ve öncesi-sonrası fotoğrafa ihtiyaç duyan PMU uygulayıcıları",
      "İyileşme kontrol ve rötuş randevuları olan stüdyolar",
    ],
    problems: [
      {
        problem: "Pigment ve teknik notları dağınık",
        solution: "Müşteri profilinde yapılandırılmış dokümantasyon.",
      },
      {
        problem: "İşlemlerden önce kağıt onam",
        solution: "Randevulardan önce dijital onam.",
      },
      {
        problem: "İyileşme kontrol tarihleri defterlerde",
        solution: "Takvim, hatırlatmalar ve tek yerde online yeniden randevu.",
      },
      {
        problem: "Önce/sonra fotoğrafları bulmak zor",
        solution: "Müşteri kartına ve ilgili ziyarete bağlı fotoğraflar.",
      },
    ],
    features: [
      { icon: FileText, title: "Pigment ve Teknik Notları", desc: "Renkleri, iğneleri ve uygulama bölgelerini belgeleyin." },
      { icon: ClipboardCheck, title: "Onam Formları", desc: "Her işlemden önce dijital onam." },
      { icon: Camera, title: "Öncesi-sonrası fotoğraf", desc: "Müşteri profilinde önce/sonra fotoğrafları." },
      { icon: Calendar, title: "İyileşme Kontrol Planlama", desc: "İyileşme kontrolleri ve rötuş randevuları planlayın." },
      { icon: Users, title: "Müşteri Takibi", desc: "Tam PMU geçmişi tek yerde." },
      { icon: Bell, title: "Hatırlatmalar", desc: "Kaçırılan rötuş randevularını azaltın." },
    ],
    benefits: [
      "Daha güvenli rötuş işlemleri için hassas geçmiş",
      "Her müşteri için profesyonel onam kaydı",
      "Konsültasyon ve işlem arasında daha az evrak işi",
      "Portfolyo ve takip için net fotoğraf dosyaları",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    marketTitle: "PMU stüdyoları neden Treatflow'u tercih ediyor",
    marketParas: [
      "Kalıcı makyaj detay odaklıdır. Treatflow randevuyu onam, notlar ve fotoğraflarla birleştirir, böylece her ziyaret ekstra araçlar olmadan belgelenmiş kalır.",
    ],
    highlights: [
      "Komisyon olmadan online randevu",
      "İşlemlerden önce onam formları",
      "Pigment ve teknik dokümantasyonu",
      "Müşterilere bağlı fotoğraf geçmişi",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    aiSummary:
      "Treatflow; onam formları, pigment notları, öncesi-sonrası fotoğraflar, müşteri kayıtları, online randevu ve hatırlatmalar sunan kalıcı makyaj yazılımıdır. Kalıcı makyaj ve microblading işletmeleri için tasarlanmıştır. Veriler KVKK kapsamındaki süreçlerle saklanır.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kayıtları, onam formları, işlem kaydı ve hatırlatmalar ile salon yönetim yazılımıdır – kalıcı makyaj stüdyoları için uygundur.",
      },
      {
        question: "Microblading için uygun mu?",
        answer:
          "Evet. Kaşlar, dudaklar ve eyeliner için teknikleri, pigmentleri, fotoğrafları ve iyileşme takvimlerini belgeleyebilirsiniz.",
      },
      {
        question: "Nasıl başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez.",
      },
      {
        question: "Verilerim nerede saklanır?",
        answer:
          "Treatflow verileri Frankfurt'taki AB sunucularında saklar ve KVKK kapsamındaki süreçleri destekler.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "aesthetic-clinic-software", "lash-studio-software"],
    featureKeys: ["forms", "treatment-documentation", "client-records", "pricing"],
  },

  "tattoo-studio-software": {
    serviceName: "Dövme Stüdyosu Yazılımı",
    serviceDescription:
      "Dövme stüdyosu yazılımı: dijital onam, müşteri kaydı, seans notları ve komisyonsuz randevu. 30 gün ücretsiz deneyin.",
    eyebrow: "Dövme Stüdyosu Yazılımı",
    h1: "Modern stüdyolar için dövme yazılımı",
    subtitle:
      "Dijital onam, müşteri kayıtları, seans notları ve online randevu – daha az kağıt işi ve daha net planlama isteyen dövme stüdyoları için tasarlandı.",
    aiCapsules: [
      {
        question: "Dövme stüdyolarının hangi yazılıma ihtiyacı var?",
        answer:
          "Dövme stüdyoları; dijital onam formları, müşteri kayıtları, seans notları, referans görselleri ve güvenilir randevu planlamasına ihtiyaç duyar. Treatflow bunları tek platformda birleştirir ve verileri KVKK kapsamındaki süreçlerle AB sunucularında saklar.",
      },
      {
        question: "Treatflow kağıt feragat formlarının yerini alır mı?",
        answer:
          "Evet. Müşteriler dijital onamı randevudan önce tamamlayabilir, böylece ekibiniz seansa evrak işleri zaten tamamlanmış olarak başlar.",
      },
    ],
    whatTitle: "Treatflow dövme stüdyoları için ne sunar?",
    whatParas: [
      "Treatflow dövme stüdyolarının onamı, randevuları ve müşteri geçmişini tek sistemde birleştirmesine yardımcı olur. Sanatçılar müşteri profilinde notları ve fotoğrafları görür; resepsiyon takvimi yönetir.",
      "Online randevu ve hatırlatmalar randevuya gelmeme oranını azaltmaya yardımcı olur; dijital formlar ise her seans öncesindeki kâğıt işini ortadan kaldırır.",
    ],
    audiences: [
      "Dövme stüdyoları ve özel stüdyolar",
      "Aynı takvimi paylaşan çok sanatçılı dövme stüdyoları",
      "Dövme ve iyileşme takibi sunan stüdyolar",
      "Kağıt feragat ve takvimleri değiştiren ekipler",
    ],
    problems: [
      {
        problem: "Kağıt feragat formları ve arşiv dolapları",
        solution: "Müşteri kartında saklanan dijital onam.",
      },
      {
        problem: "Sanatçılar arasında çift randevu",
        solution: "Net müsaitlik ile paylaşımlı takvim.",
      },
      {
        problem: "Telefonlarda ve kağıtlarda seans notları",
        solution: "Her müşteriye bağlı uygulama notları ve fotoğraflar.",
      },
      {
        problem: "Müşteriler randevularını unutuyor",
        solution: "WhatsApp ve e-posta ile hatırlatmalar.",
      },
    ],
    features: [
      { icon: ClipboardCheck, title: "Onam ve Feragat", desc: "Her seanstan önce dijital formlar." },
      { icon: Users, title: "Müşteri Takibi", desc: "Geçmiş, notlar ve iletişim bilgileri tek profilde." },
      { icon: FileText, title: "Seans Notları", desc: "Çalışmayı, bakımı ve sonraki adımları belgeleyin." },
      { icon: Camera, title: "Referans Fotoğrafları", desc: "Referans ve ilerleme fotoğraflarını saklayın." },
      { icon: Link2, title: "Online Randevu", desc: "Müşteriler müsait zamanları talep eder veya randevu alır." },
      { icon: Calendar, title: "Stüdyo Takvimi", desc: "Sanatçıları ve alanları koordine edin." },
    ],
    benefits: [
      "Her seans öncesi daha az kağıt işi",
      "Sanatçılar arasında daha net takvimler",
      "Rötuş ve kaplamalar için hazır müşteri geçmişi",
      "Hatırlatmalarla daha az gelmeme",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    marketTitle: "Dövme stüdyoları neden Treatflow'u tercih ediyor",
    marketParas: [
      "Dövme stüdyoları yaratıcı araçlar kadar onam ve planlama ihtiyacı duyar. Treatflow stüdyo operasyonlarına odaklanır – randevu, formlar ve müşteri kayıtları – pazaryeri komisyonu olmadan.",
    ],
    highlights: [
      "Seanslardan önce dijital onam",
      "Çok sanatçılı dövme stüdyoları için ortak takvim",
      "Notlar ve fotoğraflarla müşteri kayıtları",
      "Randevuya gelmeme oranını azaltan hatırlatmalar",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    aiSummary:
      "Treatflow; onam formları, müşteri kayıtları, seans notları, referans görselleri, online randevu ve hatırlatmalar sunan dövme stüdyosu yazılımıdır. Tek veya çok sanatçılı stüdyolar için tasarlanmıştır. Veriler KVKK kapsamındaki süreçlerle saklanır.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kayıtları, onam formları, işlem kaydı ve hatırlatmalar ile salon yönetim yazılımıdır – dövme stüdyoları için uygundur.",
      },
      {
        question: "Birden fazla sanatçı tek bir hesabı paylaşabilir mi?",
        answer:
          "Evet. Sanatçılar kendi takvim görünümlerini görürken müşteri kayıtları ve formlar stüdyo genelinde paylaşılır.",
      },
      {
        question: "Nasıl başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez.",
      },
      {
        question: "Verilerim nerede saklanır?",
        answer:
          "Treatflow verileri Frankfurt'taki AB sunucularında saklar ve KVKK kapsamındaki süreçleri destekler.",
      },
    ],
    siblingKeys: ["permanent-makeup-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["forms", "online-booking", "client-records", "pricing"],
  },

  "nail-salon-software": {
    serviceName: "Tırnak Salonu Yazılımı",
    serviceDescription:
      "Tırnak salonu yazılımı: komisyonsuz online randevu, müşteri takibi, hatırlatmalar ve işlem notları. 30 gün ücretsiz deneyin.",
    eyebrow: "Tırnak Salonu Yazılımı",
    h1: "Yoğun protez tırnak salonları için randevu yazılımı",
    subtitle:
      "Online randevu, müşteri tercihleri, hatırlatmalar ve net takvimler – yüksek randevu hacmi olan tırnak salonları için tasarlandı.",
    aiCapsules: [
      {
        question: "Tırnak salonları için en iyi yazılım hangisi?",
        answer:
          "Tırnak salonları komisyonsuz online randevu, düzenli ekip takvimi, müşteri tercih notları ve otomatik hatırlatmalardan yararlanır. Treatflow verileri KVKK kapsamındaki süreçlerle AB sunucularında saklar.",
      },
      {
        question: "Müşteriler bakım randevularını online alabilir mi?",
        answer:
          "Evet. Müşteriler kendi randevu sayfanız üzerinden 7/24 hizmet randevusu alabilir – pazaryeri ücretleri olmadan.",
      },
    ],
    whatTitle: "Treatflow tırnak salonları için ne sunar?",
    whatParas: [
      "Tırnak salonları kısa işlem aralıkları ve yoğun takvimlerle çalışır. Treatflow randevuları düzenli tutar, müşteri tercihlerini kaydeder ve hatırlatmalarla randevuya gelmeme oranını azaltmaya yardımcı olur.",
      "Uzmanlar müşteri profillerinde renk geçmişini, alerjileri ve notları görür; her ziyarette aynı soruları yeniden sormak gerekmez.",
    ],
    audiences: [
      "Tırnak salonları ve protez tırnak salonları",
      "Birden fazla uzmanın çalıştığı tırnak salonları",
      "Jel, akrilik ve tırnak sanatı hizmetleri sunan salonlar",
      "Yoğun randevu trafiği ve düzenli müşterileri olan salonlar",
    ],
    problems: [
      {
        problem: "Çift randevular ve takvim karışıklığı",
        solution: "Net müsaitlik ile paylaşımlı ekip takvimi.",
      },
      {
        problem: "Müşteri tercihleri ziyaretler arasında kaybolur",
        solution: "Notlar ve geçmiş ile müşteri kayıtları.",
      },
      {
        problem: "Randevu talebi için telefon veya mesaj",
        solution: "7/24 komisyonsuz online randevu sayfası.",
      },
      {
        problem: "Gelmemeler yüksek devir saatlerinde",
        solution: "WhatsApp ve e-posta hatırlatmaları ile daha az boşluk.",
      },
    ],
    features: [
      { icon: Link2, title: "Online Randevu", desc: "7/24 hizmet randevusu, komisyon olmadan." },
      { icon: Users, title: "Müşteri Takibi", desc: "Tercihler, alerji notları ve geçmiş." },
      { icon: Calendar, title: "Ekip Takvimi", desc: "Stilistleri ve koltukları koordine edin." },
      { icon: Bell, title: "Hatırlatmalar", desc: "Otomatik randevu hatırlatmaları." },
      { icon: ClipboardCheck, title: "Dijital Formlar", desc: "Alerji ve sağlık bilgilerini kaydedin." },
      { icon: FileText, title: "İşlem Notları", desc: "Renk, teknik ve tercih dokümantasyonu." },
    ],
    benefits: [
      "Daha dolu takvimler daha az boşlukla",
      "Müşteriler her zaman kendi tercih geçmişlerini görür",
      "Stilistler arası daha net planlama",
      "Online randevu ile daha az telefon kesintisi",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    marketTitle: "Tırnak salonları neden Treatflow'u tercih ediyor",
    marketParas: [
      "Tırnak salonlarının yoğun takvim günlerinde verimli planlamaya ihtiyacı var. Treatflow randevuyu müşteri kayıtları ve hatırlatmalar ile birleştirir – pazaryeri ücretleri olmadan.",
    ],
    highlights: [
      "Komisyonsuz online randevu",
      "Tercihlerle müşteri kayıtları",
      "Paylaşımlı ekip takvimi",
      "Müşteri tercih geçmişi",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    aiSummary:
      "Treatflow; online randevu, müşteri kayıtları, tercih notları, hatırlatmalar ve dijital formlar sunan tırnak salonu yazılımıdır. Tırnak ve protez tırnak işletmeleri için tasarlanmıştır. Veriler KVKK kapsamındaki süreçlerle saklanır.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kayıtları, formlar, dokümantasyon ve hatırlatmalar ile salon yönetim yazılımıdır – tırnak salonları için uygundur.",
      },
      {
        question: "Treatflow randevu başına ücret alıyor mu?",
        answer:
          "Hayır. Randevu başına komisyon yoktur.",
      },
      {
        question: "Nasıl başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez.",
      },
      {
        question: "Verilerim nerede saklanır?",
        answer:
          "Treatflow verileri Frankfurt'taki AB sunucularında saklar ve KVKK kapsamındaki süreçleri destekler.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "lash-studio-software", "spa-wellness-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
  },

  "lash-studio-software": {
    serviceName: "Kirpik Salonu Yazılımı",
    serviceDescription:
      "Kirpik salonu yazılımı: bakım randevuları, müşteri notları, dijital onam ve komisyonsuz online randevu. 30 gün ücretsiz deneyin.",
    eyebrow: "Kirpik Salonu Yazılımı",
    h1: "Kirpik uzmanları için salon yazılımı",
    subtitle:
      "Bakım randevuları, müşteri tercihleri, onam formları ve hatırlatmalar – kirpik uygulaması yapan salonlar için tasarlandı.",
    aiCapsules: [
      {
        question: "Kirpik salonları için hangi yazılım kullanılmalı?",
        answer:
          "Kirpik işletmeleri; komisyonsuz online randevuya, kıvrım, uzunluk ve haritalama notlarına, onam formlarına ve bakım randevusu hatırlatmalarına ihtiyaç duyar. Treatflow verileri KVKK kapsamındaki süreçlerle AB sunucularında saklar.",
      },
      {
        question: "Müşteri başına bakım aralıklarını takip edebilir miyim?",
        answer:
          "Evet. Ziyaret geçmişi ve notlar müşteri profilinde kalır; böylece bir sonraki bakımın ne zaman gerektiğini ve önceki uygulamada ne yapıldığını görebilirsiniz.",
      },
    ],
    whatTitle: "Treatflow kirpik salonları için ne sunar?",
    whatParas: [
      "Kirpik işletmeleri düzenli bakım randevularıyla büyür. Treatflow kıvrım, uzunluk ve haritalama tercihlerini belgeler; müşterilere bir sonraki randevularını hatırlatır.",
      "Dijital onam ve öncesi-sonrası fotoğraf profesyonel standartları destekler, koltuk zamanınızı yavaşlatmadan.",
    ],
    audiences: [
      "Kirpik uygulaması yapan salonlar",
      "Özel kirpik uygulayıcıları olan güzellik salonları",
      "Kendi randevularını yöneten solo kirpik teknisyenleri",
      "Birden fazla koltukta bakım randevusu yöneten ekipler",
    ],
    problems: [
      {
        problem: "Bakım aralıkları tablolarda tutuluyor",
        solution: "Tek sistemde müşteri geçmişi ve hatırlatmalar.",
      },
      {
        problem: "Haritalama tercihleri unutuluyor",
        solution: "Her müşteri profilinde notlar ve fotoğraflar.",
      },
      {
        problem: "Onam hala kağıt üzerinde",
        solution: "Randevulardan önce dijital formlar.",
      },
      {
        problem: "Randevu talepleri ile dolu gelen kutusu",
        solution: "Komisyonsuz online randevu sayfası.",
      },
    ],
    features: [
      { icon: Calendar, title: "Bakım Planlama", desc: "Yeni set ve bakım randevularını uygun saatlere planlayın." },
      { icon: Users, title: "Müşteri ve Kirpik Notları", desc: "Kıvrım, uzunluk, haritalama ve yapıştırıcılar dosyada." },
      { icon: ClipboardCheck, title: "Onam Formları", desc: "Her yeni setten önce dijital anamnez." },
      { icon: Camera, title: "İlerleme Fotoğrafları", desc: "Her ziyaret için sonuçları belgeleyin." },
      { icon: Link2, title: "Online Randevu", desc: "Müşteriler 7/24 bakım randevusu alabilir." },
      { icon: Bell, title: "Bakım Hatırlatmaları", desc: "Otomatik hatırlatmalarla düzenli müşteri dönüşünü destekleyin." },
    ],
    benefits: [
      "Zamanında hatırlatmalarla daha düzenli bakım randevuları",
      "Belgelenmiş tercihler ile tutarlı sonuçlar",
      "Koltuk başında daha az evrak işi",
      "Profesyonel onam ve fotoğraf dosyaları",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    marketTitle: "Kirpik salonları neden Treatflow'u tercih ediyor",
    marketParas: [
      "Kirpik salonları randevu yönetiminin yanında müşteri devamlılığına da ihtiyaç duyar. Treatflow randevuları müşteri notları ve hatırlatmalarla birleştirerek bakım sürecini düzenli tutar.",
    ],
    highlights: [
      "Komisyonsuz online randevu",
      "Kirpik tercihi ve haritalama notları",
      "Yeni setlerden önce onam formları",
      "Bakım hatırlatmaları ve fotoğraf geçmişi",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    aiSummary:
      "Treatflow; kirpik bakım randevuları, müşteri notları, onam formları, öncesi-sonrası fotoğraflar, online randevu ve hatırlatmalar sunan kirpik işletmesi yazılımıdır. Kirpik uygulaması yapan salonlar için tasarlanmıştır. Veriler KVKK kapsamındaki süreçlerle saklanır.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kayıtları, onam formları, dokümantasyon ve hatırlatmalar ile salon yönetim yazılımıdır – kirpik stüdyoları için uygundur.",
      },
      {
        question: "Solo kirpik teknisyenleri için uygun mu?",
        answer:
          "Evet. Solo uygulayıcılar Treatflow'u randevu, hatırlatmalar ve müşteri geçmişi için pazaryeri komisyonu olmadan kullanır.",
      },
      {
        question: "Nasıl başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez.",
      },
      {
        question: "Verilerim nerede saklanır?",
        answer:
          "Treatflow verileri Frankfurt'taki AB sunucularında saklar ve KVKK kapsamındaki süreçleri destekler.",
      },
    ],
    siblingKeys: ["beauty-salon-software", "nail-salon-software", "permanent-makeup-software"],
    featureKeys: ["online-booking", "client-records", "forms", "pricing"],
  },

  "spa-wellness-software": {
    serviceName: "Spa ve Wellness Yazılımı",
    serviceDescription:
      "Spa yazılımı: komisyonsuz online randevu, müşteri kaydı, uygulama notları ve dijital onam. 30 gün ücretsiz deneyin.",
    eyebrow: "Spa ve Wellness Yazılımı",
    h1: "Huzurlu operasyonlar için spa ve wellness yazılımı",
    subtitle:
      "Alanları, terapistleri ve paketleri online randevu, müşteri geçmişi ve dijital formlarla koordine edin – pazaryeri komisyonu olmadan.",
    aiCapsules: [
      {
        question: "Spa'ların hangi yazılıma ihtiyacı var?",
        answer:
          "Spa merkezleri; terapist ve oda planlaması, online randevu, müşteri tercihleri, işlem notları ve hatırlatmalara ihtiyaç duyar. Treatflow verileri KVKK kapsamındaki süreçlerle AB sunucularında saklar.",
      },
      {
        question: "Treatflow tekrar ziyaretlerin takibini destekler mi?",
        answer:
          "Evet. Müşteri geçmişi ve hatırlatmalar, seri uygulamaları ve düzenli ziyaretleri takip etmeye yardımcı olur. Paket veya adisyon sayacı sunulmaz.",
      },
    ],
    whatTitle: "Treatflow spa ve wellness stüdyoları için ne sunar?",
    whatParas: [
      "Spa'lar ambiyans ve operasyonu dengeler. Treatflow randevuları düzenli tutar, müşteri tercihlerini saklar ve uygulamaları belgeler, böylece konuk deneyimi kesintisiz kalır.",
      "Dijital anamnez ve hatırlatmalar resepsiyon yükünü azaltırken, terapistler ihtiyaç duyduğu notlara erişir.",
    ],
    audiences: [
      "Spa merkezleri ve wellness stüdyoları",
      "Otel ve butik spa'lar",
      "Çok terapistli wellness merkezleri",
      "Masaj, yüz bakımı ve vücut uygulamalarını birleştiren stüdyolar",
    ],
    problems: [
      {
        problem: "Alan ve terapist çatışmaları",
        solution: "Net kaynak planlaması ile paylaşımlı takvim.",
      },
      {
        problem: "Konuk tercihleri ziyaretler arasında kaybolur",
        solution: "Notlar ve geçmiş ile müşteri kayıtları.",
      },
      {
        problem: "Resepsiyonda kağıt anamnez",
        solution: "Varıştan önce dijital formlar.",
      },
      {
        problem: "Uzun uygulamalarda gelmemeler",
        solution: "Randevulardan önce otomatik hatırlatmalar.",
      },
    ],
    features: [
      { icon: Calendar, title: "Spa Takvimi", desc: "Alanları, terapistleri ve hizmetleri koordine edin." },
      { icon: Link2, title: "Online Randevu", desc: "Konuklar 7/24 komisyonsuz uygulama randevusu alır." },
      { icon: Users, title: "Konuk Profilleri", desc: "Tercihler, geçmiş ve notlar tek yerde." },
      { icon: ClipboardCheck, title: "Anamnez Formları", desc: "Ziyaretlerden önce sağlık ve onam formları." },
      { icon: FileText, title: "İşlem Notları", desc: "Tutarlı bakım için hizmetleri belgeleyin." },
      { icon: Bell, title: "Hatırlatmalar", desc: "Randevuya gelmeme oranını WhatsApp ve e-posta ile azaltın." },
    ],
    benefits: [
      "Kaynaklar arasında daha az planlama çatışması",
      "Ziyaretler boyu konuk tercihlerini hatırlama",
      "Resepsiyonda daha az evrak işi",
      "Terapistler arası tutarlı uygulama kalitesi",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    marketTitle: "Spa'lar neden Treatflow'u tercih ediyor",
    marketParas: [
      "Spa'lar paylaşımlı takvimi terapist ve alan planlaması ile birleştirir. Treatflow randevuyu müşteri kayıtları ve hatırlatmalar ile birleştirir – gereksiz karmaşıklık olmadan.",
    ],
    highlights: [
      "Komisyonsuz online randevu",
      "Alan ve terapist koordinasyonu",
      "Tercihlerle misafir kayıtları",
      "Varıştan önce anamnez formları",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    aiSummary:
      "Treatflow; spa takvimi, online randevu, müşteri kayıtları, anamnez formları, işlem notları ve hatırlatmalar sunan spa yazılımıdır. Spa merkezleri, otel spa'ları ve wellness işletmeleri için tasarlanmıştır. Veriler KVKK kapsamındaki süreçlerle saklanır.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kayıtları, onam formları, işlem kaydı ve hatırlatmalar ile salon yönetim yazılımıdır – spa ve wellness stüdyoları için uygundur.",
      },
      {
        question: "Birden fazla terapist ve alan yönetilebilir mi?",
        answer:
          "Evet. Paylaşımlı takvim terapistleri ve alanları koordine eder, böylece çift randevular engellenir.",
      },
      {
        question: "Nasıl başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez.",
      },
      {
        question: "Verilerim nerede saklanır?",
        answer:
          "Treatflow verileri Frankfurt'taki AB sunucularında saklar ve KVKK kapsamındaki süreçleri destekler.",
      },
    ],
    siblingKeys: ["massage-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "client-records", "treatment-documentation", "pricing"],
  },

  "massage-software": {
    serviceName: "Masaj Stüdyosu Yazılımı",
    serviceDescription:
      "Masaj yazılımı: komisyonsuz online randevu, anamnez, seans notları ve hatırlatmalar. 30 gün ücretsiz deneyin.",
    eyebrow: "Masaj Stüdyosu Yazılımı",
    h1: "Terapistler ve stüdyolar için masaj yazılımı",
    subtitle:
      "Online randevu, anamnez formları, seans notları ve hatırlatmalar – masajcılar ve çok odalı stüdyolar için tasarlandı.",
    aiCapsules: [
      {
        question: "Masaj terapistleri için en iyi yazılım hangisi?",
        answer:
          "Masaj terapistleri; komisyonsuz online randevu, dijital anamnez, seans notları, müşteri kayıtları ve hatırlatmalara ihtiyaç duyar. Treatflow verileri KVKK kapsamındaki süreçlerle AB sunucularında saklar.",
      },
      {
        question: "Solo terapistler Treatflow'u kullanabilir mi?",
        answer:
          "Evet. Solo terapistler randevu, formlar ve notları pazaryeri komisyonu olmadan yönetir.",
      },
    ],
    whatTitle: "Treatflow masaj stüdyoları için ne sunar?",
    whatParas: [
      "Masaj uygulamaları tutarlı müşteri geçmişine dayanır. Treatflow randevuları, sağlık formlarını ve seans notlarını bağlar, böylece terapistler her seansı müşteri bilgisiyle başlatır.",
      "Online randevu ve hatırlatmalar müşterilerin geri dönmesini kolaylaştırırken, dijital formlar sağlık taramasını kapıda yapılmak yerine önceden tamamlar.",
    ],
    audiences: [
      "Masaj terapistleri ve özel uygulamalar",
      "Çok odalı masaj stüdyoları",
      "Medikal masaj ve fizyoterapi uygulamaları",
      "Masaj, spa ve wellness hizmetlerini birleştiren stüdyolar",
    ],
    problems: [
      {
        problem: "Müşteriler geldikten sonra sağlık formu doldurma",
        solution: "Randevudan önce dijital anamnez.",
      },
      {
        problem: "Önceki seansın odak alanlarını hatırlamak zor",
        solution: "Müşteri kartında seans notları ve ziyaret geçmişi.",
      },
      {
        problem: "Telefon veya mesajla randevu planlama",
        solution: "7/24 komisyonsuz online randevu sayfası.",
      },
      {
        problem: "Tekrar müşterilerde gelmemeler",
        solution: "Otomatik WhatsApp ve e-posta hatırlatmaları.",
      },
    ],
    features: [
      { icon: Link2, title: "Online Randevu", desc: "7/24 komisyonsuz randevu sayfası." },
      { icon: ClipboardCheck, title: "Anamnez Formları", desc: "Sağlık geçmişi ve onam dijital olarak." },
      { icon: FileText, title: "Seans Notları", desc: "Odak alanları ve ilerlemeyi belgeleyin." },
      { icon: Users, title: "Müşteri Takibi", desc: "Dönen müşteriler için tam geçmiş." },
      { icon: Calendar, title: "Stüdyo Takvimi", desc: "Terapistleri ve odaları koordine edin." },
      { icon: Bell, title: "Hatırlatmalar", desc: "Randevuya gelmeme oranını azaltın." },
    ],
    benefits: [
      "Seanslar arasında daha az evrak işi",
      "Dijital formlarla daha güvenli anamnez",
      "Notlarla daha iyi bakım sürekliliği",
      "Daha az kaçırılan randevu",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    marketTitle: "Masaj profesyonelleri neden Treatflow'u tercih ediyor",
    marketParas: [
      "Masaj uygulamaları güvenilir randevu ve net müşteri kayıtlarına ihtiyaç duyar. Treatflow randevu, formlar ve dokümantasyona odaklanır.",
    ],
    highlights: [
      "Komisyonsuz online randevu",
      "Dijital anamnez ve onam",
      "Müşteri kartında seans notları",
      "Dönen müşteriler için hatırlatmalar",
      "KVKK kapsamındaki süreçlerle AB sunucularında saklama",
    ],
    aiSummary:
      "Treatflow; online randevu, anamnez formları, seans notları, müşteri kayıtları ve hatırlatmalar sunan masaj merkezi yazılımıdır. Terapistler ve çok odalı işletmeler için tasarlanmıştır. Veriler KVKK kapsamındaki süreçlerle saklanır.",
    faqs: [
      {
        question: "Treatflow nedir?",
        answer:
          "Treatflow, online randevu, müşteri kayıtları, formlar, dokümantasyon ve hatırlatmalar ile salon yönetim yazılımıdır – masaj terapistleri ve stüdyoları için uygundur.",
      },
      {
        question: "Solo terapistler kullanabilir mi?",
        answer:
          "Evet. Solo terapistler randevu, formlar ve notları pazaryeri komisyonu olmadan yönetir.",
      },
      {
        question: "Nasıl başlayabilirim?",
        answer:
          "Hemen kaydolun ve 30 gün boyunca ücretsiz deneyin. Kredi kartı gerekmez.",
      },
      {
        question: "Verilerim nerede saklanır?",
        answer:
          "Treatflow verileri Frankfurt'taki AB sunucularında saklar ve KVKK kapsamındaki süreçleri destekler.",
      },
    ],
    siblingKeys: ["spa-wellness-software", "beauty-salon-software", "aesthetic-clinic-software"],
    featureKeys: ["online-booking", "forms", "client-records", "pricing"],
  },
};

export function getIndustryPageTr(
  key: IndustryPageKey,
  market: string
): InternationalPageContent {
  return buildPage(market, key, pages[key]);
}
