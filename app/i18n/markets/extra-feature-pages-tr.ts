import type { FeaturePageProps } from "@/app/components/FeaturePageEn";
import type { ExtraFeatureKey } from "@/app/i18n/feature-slugs";
import {
  BarChart3,
  Bell,
  Calendar,
  CalendarDays,
  Camera,
  ClipboardCheck,
  Clock,
  CreditCard,
  FileText,
  Gift,
  Globe,
  LayoutDashboard,
  Link2,
  Mail,
  MessageCircle,
  Package,
  Plug,
  Receipt,
  RefreshCw,
  ShoppingBag,
  Smartphone,
  Sparkles,
  Ticket,
  TrendingUp,
  Users,
  Workflow,
  Zap,
} from "lucide-react";

type PageContent = Omit<
  FeaturePageProps,
  "earlyAccessHref" | "primaryCta" | "bottomTitle" | "bottomText"
>;

const cta = {
  earlyAccessHref: "https://app.treatflow.io/auth/register?lang=tr",
  primaryCta: "30 gün ücretsiz deneyin",
  bottomTitle: "Başlamaya hazır mısınız?",
  bottomText:
    "Ücretsiz denemenizi başlatın \u2013 kredi kartı gerekmez, istediğiniz zaman iptal edin.",
} as const;

const pages: Record<ExtraFeatureKey, PageContent> = {
  "point-of-sale": {
    eyebrow: "Satış Noktası",
    title: "Takviminizden ayrılmadan ödeme alın",
    subtitle:
      "Hizmet ve ürün ödemelerini tek bir akışta alın \u2013 doğrudan randevudan, net fişlerle ve ekibinizin güvenebileceği gün sonu özetiyle.",
    bullets: [
      "Randevudan saniyeler içinde ödeme alın",
      "Hizmetler, ürünler ve bahşişler tek kasada",
      "Her satış için dijital fiş",
      "Stüdyo için günlük kapanış özeti",
    ],
    image: {
      src: "/images/lifestyle/reference/stüdyo-empfang-tablet.png",
      alt: "Güzellik salonu resepsiyonunda tablette Treatflow kasa sistemi",
    },
    features: [
      {
        icon: Receipt,
        title: "Takvimden ödeme alma",
        desc: "Randevuyu açın ve araç değiştirmeden ödeme alın.",
      },
      {
        icon: ShoppingBag,
        title: "Hizmetler ve perakende",
        desc: "Tedavileri, ürünleri ve ekstraları aynı fişe ekleyin.",
      },
      {
        icon: CreditCard,
        title: "Esnek ödeme",
        desc: "Nakit, kart veya karışık ödemeleri net şekilde kaydedin.",
      },
      {
        icon: Ticket,
        title: "Kasada hediye çeki",
        desc: "Kasadan ayrılmadan hediye çeklerini satın ve kullanın.",
      },
      {
        icon: BarChart3,
        title: "Net gün sonu kapanışı",
        desc: "Ne satıldı, kim sattı ve nasıl ödendi görüntüleyin.",
      },
      {
        icon: Users,
        title: "Müşteriye bağlı",
        desc: "Her satış, takip için müşteri geçmişinde kalır.",
      },
    ],
    closingTitle: "Daha akıcı bir resepsiyon için tek kasa",
    closingText:
      "Treatflow randevuları, müşterileri ve kasayı birleştirerek ekibinizin araçlar arasında daha az, müşterilerle daha fazla zaman geçirmesini sağlar.",
    faqs: [
      {
        question: "Treatflow ile randevudan doğrudan ödeme alabilir miyim?",
        answer:
          "Evet. Randevuyu açıp hizmetleri, ürünleri ve bahşişleri tek bir fişte toplayarak doğrudan ödeme alabilirsiniz.",
      },
      {
        question: "Hangi ödeme yöntemlerini destekliyor?",
        answer:
          "Nakit, kredi kartı ve karışık ödemeleri kayıt altına alabilirsiniz. SumUp gibi kart terminalleri de entegre edilebilir.",
      },
      {
        question: "Gün sonu kapanışı nasıl çalışıyor?",
        answer:
          "Günlük kapanış özeti otomatik olarak oluşturulur; ne satıldı, kim sattı ve nasıl ödendi tek ekranda görürsünüz.",
      },
    ],
    relatedLinks: [
      { href: "/tr/online-randevu", label: "Online randevu" },
      { href: "/tr/randevu-takvimi", label: "Randevu takvimi" },
      {
        href: "/tr/güzellik-salonu-yazılımı",
        label: "Güzellik salonu yazılımı",
      },
    ],
  },

  vouchers: {
    eyebrow: "Hediye Çekleri",
    title: "Kaos olmadan hediye çeki satın ve kullanın",
    subtitle:
      "Hediye çekleri oluştürün, kasada satın ve kalan bakiyeyi otomatik takip edin \u2013 salonunuz için basit bir gelir artırıcı.",
    bullets: [
      "Kasada veya online hediye çeki satın",
      "Tam veya kısmi kullanım",
      "Otomatik bakiye takibi",
      "Net geçerlilik süresi ve müşteri geçmişi",
    ],
    image: {
      src: "/images/product-updates/rabattcodes-kalender.png",
      alt: "Treatflow hediye çekleri ve indirim kodları takvimde",
    },
    features: [
      {
        icon: Gift,
        title: "Hediye çekleri",
        desc: "Müşterilerin severek hediye edeceği sabit değerli veya tedaviye özel çekler sunun.",
      },
      {
        icon: Receipt,
        title: "Kasada satış",
        desc: "Ödeme sırasında saniyeler içinde fişe hediye çeki ekleyin.",
      },
      {
        icon: Ticket,
        title: "Kolay kullanım",
        desc: "Müşteri döndüğünde kodu uygulayın veya çeki seçin.",
      },
      {
        icon: RefreshCw,
        title: "Kalan bakiye",
        desc: "Kısmi kullanımlar bakiyeyi otomatik olarak günceller.",
      },
      {
        icon: Calendar,
        title: "Geçerlilik kontrolü",
        desc: "Son kullanım tarihlerini belirleyerek teklifleri net ve yönetilebilir tutun.",
      },
      {
        icon: BarChart3,
        title: "Satış özeti",
        desc: "Kaç çekin satıldığını, kullanıldığını veya hâlâ açık olduğunu görün.",
      },
    ],
    closingTitle: "Müşterileri gerçekten geri getiren hediye çekleri",
    closingText:
      "Hediye çekleri sakin günleri doldurur ve yeni müşteriler getirir. Treatflow satışı ve kullanımı basitleştirerek hiçbir şeyin tablolarda kaybolmamasını sağlar.",
    faqs: [
      {
        question: "Hediye çeklerinin geçerlilik süresi belirlenebilir mi?",
        answer:
          "Evet. Her hediye çeki için son kullanım tarihi belirleyebilirsiniz. Süre dolduğunda çek otomatik olarak geçersiz sayılır.",
      },
      {
        question: "Kısmi kullanım destekleniyor mu?",
        answer:
          "Evet. Müşteri çekin tamamını kullanmak zorunda değildir; kalan bakiye otomatik güncellenir ve bir sonraki ziyarette kullanılabilir.",
      },
    ],
    relatedLinks: [
      { href: "/tr/kasa", label: "Satış noktası" },
      { href: "/tr/online-randevu", label: "Online randevu" },
      {
        href: "/tr/güzellik-salonu-yazılımı",
        label: "Güzellik salonu yazılımı",
      },
    ],
  },

  messaging: {
    eyebrow: "Mesajlar ve Hatırlatmalar",
    title: "SMS ve e-posta otomasyonuyla daha az gelmeme",
    subtitle:
      "Randevu onaylarını, hatırlatmaları ve takip mesajlarını otomatik gönderin \u2013 takviminiz, WhatsApp kovalamacası olmadan dolu kalsın.",
    bullets: [
      "Otomatik randevu onayları",
      "Randevu öncesi SMS ve e-posta hatırlatmaları",
      "Tedavi sonrası takip mesajları",
      "Doğum günü ve yeniden aktivasyon mesajları",
    ],
    image: {
      src: "/images/lifestyle/sms-erinnerung-stüdyo.png",
      alt: "Müşteri güzellik salonundan SMS randevu hatırlatması alıyor",
    },
    features: [
      {
        icon: Bell,
        title: "Randevu hatırlatmaları",
        desc: "Zamanlanmış SMS ve e-posta hatırlatmalarıyla gelmemeleri azaltın.",
      },
      {
        icon: Mail,
        title: "Onaylar",
        desc: "Müşteriler rezervasyon yaptıkları anda net randevu bilgilerini alır.",
      },
      {
        icon: MessageCircle,
        title: "Takip mesajları",
        desc: "Bakım ipuçlarını veya yeniden randevu önerilerini otomatik gönderin.",
      },
      {
        icon: Sparkles,
        title: "Doğum günü mesajları",
        desc: "Kişiselleştirilmiş, otomatik kutlamalarla akılda kalın.",
      },
      {
        icon: Clock,
        title: "Ayarlanabilir zamanlama",
        desc: "Hatırlatma ve takip mesajlarının ne zaman gönderileceğini seçin.",
      },
      {
        icon: Smartphone,
        title: "SMS ve e-posta",
        desc: "Aciliyet ve ayrıntıya göre doğru kanalı kullanın.",
      },
    ],
    closingTitle: "Ekstra iş yükünüz olmadan iletişimde kalın",
    closingText:
      "Mesaj otomasyonu ekibiniz tedavilere odaklanırken müşterileri bilgilendirir ve sadık tutar \u2013 aynı mesajları tekrar tekrar yazmak yerine.",
    faqs: [
      {
        question: "Treatflow randevu hatırlatması gönderebilir mi?",
        answer:
          "Evet. Treatflow randevu öncesinde otomatik SMS ve e-posta hatırlatmaları gönderebilir. Onaylar müşteri rezervasyon yaptığında gider.",
      },
      {
        question: "Mesaj zamanlaması ayarlanabilir mi?",
        answer:
          "Evet. Hatırlatma ve takip mesajlarının ne zaman gönderileceğini kendiniz belirleyebilirsiniz.",
      },
      {
        question: "Gelmeme oranını azaltmaya nasıl yardımcı olur?",
        answer:
          "Otomatik hatırlatmalar müşterilerin randevularını unutmamasını sağlar; onaylar ise randevu yapıldığında anında gönderilir.",
      },
    ],
    relatedLinks: [
      { href: "/tr/online-randevu", label: "Online randevu" },
      { href: "/tr/randevu-takvimi", label: "Randevu takvimi" },
      {
        href: "/tr/güzellik-salonu-yazılımı",
        label: "Güzellik salonu yazılımı",
      },
    ],
  },

  integrations: {
    eyebrow: "Entegrasyonlar",
    title: "Treatflow\u2019u zaten kullandığınız araçlarla bağlayın",
    subtitle:
      "Takvimleri, muhasebeyi ve otomasyonları senkronize edin; veriler üç sisteme ayrı ayrı girilmek yerine bir kez aksın.",
    bullets: [
      "Çift yönlü Google Takvim senkronizasyonu",
      "Muhasebe ve fatura bağlantıları",
      "7.000\u2019den fazla uygulama için Zapier",
      "Daha az çift giriş, daha az hata",
    ],
    image: {
      src: "/images/product-updates/swiss21-abaninja-integration.png",
      alt: "Treatflow entegrasyonları salon yazılımını dış araçlarla bağlıyor",
    },
    features: [
      {
        icon: CalendarDays,
        title: "Google Takvim",
        desc: "Kişisel ve stüdyo takvimlerini gerçek zamanlı senkronize tutun.",
      },
      {
        icon: Receipt,
        title: "Muhasebe",
        desc: "Fatura oluştürün ve müşterileri yeniden yazmadan senkronize edin.",
      },
      {
        icon: Zap,
        title: "Zapier",
        desc: "Sheets, CRM, e-posta ve daha fazlasında iş akışlarını tetikleyin.",
      },
      {
        icon: RefreshCw,
        title: "Daha az tekrar iş",
        desc: "Verileri Treatflow\u2019a bir kez girin \u2013 geri kalanına otomatik akar.",
      },
      {
        icon: Workflow,
        title: "Kendi otomasyonlarınız",
        desc: "Yeni randevulara veya formlara kod yazmadan tepki verin.",
      },
      {
        icon: Plug,
        title: "Büyüyen ekosistem",
        desc: "Salonunuzun zaten güvendiği teknoloji yığınını bağlayın.",
      },
    ],
    closingTitle: "Stüdyonuz için tek gerçek kaynağı",
    closingText:
      "Entegrasyonlar, favori araçlarınız otomatik olarak güncel kalırken Treatflow\u2019u operasyonunuzun merkezinde tutar.",
    faqs: [
      {
        question: "Treatflow Google Takvim ile entegre oluyor mu?",
        answer:
          "Evet. Treatflow, kişisel ve stüdyo randevularının uyumlu kalmasını sağlayan çift yönlü Google Takvim senkronizasyonu sunar.",
      },
      {
        question: "Treatflow Zapier ile çalışıyor mu?",
        answer:
          "Evet. Rezervasyon planında Treatflow\u2019u Zapier üzerinden tablolar veya e-posta iş akışları gibi diğer araçlara bağlayabilirsiniz.",
      },
    ],
    relatedLinks: [
      { href: "/tr/online-randevu", label: "Online randevu" },
      { href: "/tr/randevu-takvimi", label: "Randevu takvimi" },
      { href: "/tr/özellikler", label: "Tüm özellikler" },
    ],
  },

  features: {
    eyebrow: "Tüm Özellikler",
    title: "Güzellik stüdyonuzun ihtiyaç duyduğu her şey, tek yerde",
    subtitle:
      "Takvim ve online randevudan müşteri dosyalarına, formlara, kasaya ve hatırlatmalara kadar \u2013 Treatflow modern bir salonun günlük işlerini karşılar.",
    bullets: [
      "Takvim, randevu ve müşteri dosyaları",
      "Dijital formlar ve tedavi notları",
      "Kasa, hediye çekleri ve ürün satışı",
      "Mesajlaşma, entegrasyonlar ve dahası",
    ],
    image: {
      src: "/images/mockups/dashboard-main.png",
      alt: "Salon yazılımı özelliklerini gösteren Treatflow kontrol paneli",
    },
    features: [
      {
        icon: CalendarDays,
        title: "Randevu takvimi",
        desc: "Ekibi, odaları ve tedavileri net gün ve hafta görünümlerinde planlayın.",
      },
      {
        icon: Link2,
        title: "Online randevu",
        desc: "Müşterilerinizin kişisel randevu linkinizle 7/24 rezervasyon yapmasını sağlayın.",
      },
      {
        icon: Users,
        title: "Müşteri dosyaları",
        desc: "Geçmiş, notlar, fotoğraflar ve alerjiler tek bir dijital dosyada.",
      },
      {
        icon: ClipboardCheck,
        title: "Formlar ve onay",
        desc: "Randevu öncesi dijital anamnez ve imzalar.",
      },
      {
        icon: FileText,
        title: "Dokümantasyon",
        desc: "Tedavileri, ürünleri ve öncesi/sonrası fotoğrafları kaydedin.",
      },
      {
        icon: LayoutDashboard,
        title: "Tek çalışma alanı",
        desc: "Stüdyoyu tek bir tutarlı platformdan yönetin.",
      },
    ],
    closingTitle:
      "Güzellik stüdyoları için üretildi \u2013 genel randevu araçları değil",
    closingText:
      "Treatflow, salonların her gün gerçekten kullandığı özellikleri birleştirerek uygulamalar arası geçişe daha az, işletme büyütmeye daha fazla zaman ayırmanızı sağlar.",
    faqs: [
      {
        question: "Treatflow hangi özellikleri içeriyor?",
        answer:
          "Treatflow; randevu takvimi, komisyonsuz online randevu, müşteri dosyaları, dijital danışma ve onay formları, fotoğraf ve sesli not ile tedavi dokümantasyonu, hatırlatmalar, entegrasyonlar, mağaza ve hediye çeklerini içerir.",
      },
      {
        question: "Treatflow hangi iş kollarına uygundur?",
        answer:
          "Güzellik salonları, lazer epilasyon merkezleri, medikal estetik klinikleri, tırnak stüdyoları, kirpik stüdyoları ve SPA merkezleri gibi güzellik ve bakım işletmeleri için tasarlanmıştır.",
      },
    ],
    relatedLinks: [
      { href: "/tr/online-randevu", label: "Online randevu" },
      { href: "/tr/formlar", label: "Danışma ve onay formları" },
      {
        href: "/tr/tedavi-dokümantasyonu",
        label: "Tedavi dokümantasyonu",
      },
      { href: "/tr/fiyatlandırma", label: "Fiyatlandırma" },
    ],
  },

  shop: {
    eyebrow: "Ürün Satışı ve Stok",
    title: "Perakende ürünleri satın ve stoğu kontrol altında tutun",
    subtitle:
      "Sınırsız ürün ekleyin, stüdyoda satın ve kimin ne aldığını takip edin \u2013 çok satanların fark edilmeden tükenmemesi için basit stok yönetimi.",
    bullets: [
      "Sınırsız ürün ve kategori",
      "Stüdyoda doğrudan satış",
      "Basit stok seviyeleri ve bildirimler",
      "Müşteri bazında satış geçmişi",
    ],
    image: {
      src: "/images/mockups/shop-hero.png",
      alt: "Güzellik salonları için Treatflow ürün satışı ve stok görünümü",
    },
    features: [
      {
        icon: Package,
        title: "Ürün kataloğu",
        desc: "Fiyatlar ve kategorilerle ihtiyacınız kadar ürün ekleyin.",
      },
      {
        icon: ShoppingBag,
        title: "Stüdyoda satış",
        desc: "Tedavi sonrasında ayrı bir mağaza sistemi olmadan satın.",
      },
      {
        icon: BarChart3,
        title: "Stok görünümü",
        desc: "Stok seviyelerini görün ve tükenmeden önce sipariş verin.",
      },
      {
        icon: Camera,
        title: "Ürün fotoğrafları",
        desc: "Resepsiyonda ekibiniz için net ürün görselleri gösterin.",
      },
      {
        icon: TrendingUp,
        title: "Ek gelir",
        desc: "Her ziyareti bir perakende satış fırsatına dönüştürün.",
      },
      {
        icon: Users,
        title: "Satın alma geçmişi",
        desc: "Hangi müşterinin hangi ürünü ne zaman aldığını bilin.",
      },
    ],
    closingTitle: "Randevu akışına uyan perakende",
    closingText:
      "Treatflow ürün satışını randevular ve müşteri dosyalarının yanında tutar \u2013 böylece perakende ziyaretin doğal bir parçası olur, ayrı bir yönetim görevi değil.",
    faqs: [
      {
        question: "Kaç ürün ekleyebilirim?",
        answer:
          "Sınır yoktur. İhtiyacınız kadar ürün ve kategori ekleyebilirsiniz.",
      },
      {
        question: "Stok azaldığında bildirim alabilir miyim?",
        answer:
          "Evet. Stok seviyeleri belirlediğiniz eşik değerinin altına düştüğünde bildirim alırsınız.",
      },
    ],
    relatedLinks: [
      { href: "/tr/kasa", label: "Satış noktası" },
      { href: "/tr/online-randevu", label: "Online randevu" },
      {
        href: "/tr/güzellik-salonu-yazılımı",
        label: "Güzellik salonu yazılımı",
      },
    ],
  },

  "studio-website": {
    eyebrow: "Stüdyo Web Sitesi",
    title:
      "Ziyaretçileri randevuya dönüştüren özel tasarım web sitesi",
    subtitle:
      "Salonunuz için profesyonel bir site edinin \u2013 mobil öncelikli, SEO\u2019ya hazır ve Treatflow online randevuyla entegre; yeni müşteriler birkaç dokunuşla randevu alsın.",
    bullets: [
      "Markanıza özel tasarım",
      "Modern müşteriler için mobil optimizasyon",
      "Online randevu entegrasyonu",
      "Güzellik ve estetik işletmeleri için üretildi",
    ],
    image: {
      src: "/images/og-website-service.jpg",
      alt: "Güzellik salonu için özel tasarım Treatflow stüdyo web sitesi",
    },
    features: [
      {
        icon: Sparkles,
        title: "Özel tasarım",
        desc: "Stüdyonuza yakışan bir görünüm \u2013 genel bir şablon fabrikası değil.",
      },
      {
        icon: Smartphone,
        title: "Mobil öncelikli",
        desc: "Ziyaretçilerin çoğu telefondan gelir. Siteniz orada da mükemmel görünür.",
      },
      {
        icon: Globe,
        title: "SEO temeli",
        desc: "Müşterilerin sizi online bulmasını sağlayan net yapı ve içerik.",
      },
      {
        icon: Link2,
        title: "Randevu entegrasyonu",
        desc: "Treatflow randevu linkinizi ve çalışma saatlerinizi bağlayın.",
      },
      {
        icon: Camera,
        title: "İşinizi sergileyin",
        desc: "Tedavilerinizi, ekibinizi ve atmosferinizi etkileyici şekilde sunun.",
      },
      {
        icon: LayoutDashboard,
        title: "Salonlar için üretildi",
        desc: "Güzellik, lazer, tırnak, kirpik ve estetik etrafında inşa edildi.",
      },
    ],
    closingTitle: "Web siteniz bir randevu kanalı \u2013 broşürünüz değil",
    closingText:
      "Premium görünen ve dönüşüm sağlayan siteler tasarlıyoruz. Treatflow randevu sistemiyle birlikte her ziyaret bir randevuya dönüşebilir.",
    faqs: [
      {
        question: "Web sitesi mobil uyumlu mu?",
        answer:
          "Evet. Tüm siteler mobil öncelikli tasarlanır ve her ekran boyutunda mükemmel görünür.",
      },
      {
        question: "Online randevu entegre mi?",
        answer:
          "Evet. Treatflow randevu sistemi doğrudan web sitenize entegre edilir, böylece ziyaretçiler siteyi terk etmeden randevu alabilir.",
      },
      {
        question: "SEO için optimize edilmiş mi?",
        answer:
          "Evet. Temiz HTML yapısı, hızlı yüklenme süresi ve doğru meta etiketleriyle arama motorlarında görünürlük sağlanır.",
      },
    ],
    relatedLinks: [
      { href: "/tr/online-randevu", label: "Online randevu" },
      {
        href: "/tr/güzellik-salonu-yazılımı",
        label: "Güzellik salonu yazılımı",
      },
      { href: "/tr/özellikler", label: "Tüm özellikler" },
    ],
  },
};

export function getExtraFeaturePageTr(
  key: ExtraFeatureKey
): FeaturePageProps {
  return {
    ...pages[key],
    ...cta,
  };
}
