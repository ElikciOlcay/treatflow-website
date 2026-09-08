import type { EnComparisonContent } from "@/app/components/EnComparisonPage";

export const vsFreshaTr: EnComparisonContent = {
  competitor: "Fresha",
  title: "Treatflow vs Fresha",
  description:
    "Güzellik salonları için Treatflow ve Fresha karşılaştırması: komisyonsuz salon yazılımı, dijital onam ve işlem kaydı – ücretsiz randevu aracına karşı.",
  intro:
    "Fresha, ücretsiz randevu aracı olarak yaygın biçimde kullanılır. Treatflow ise ücretli salon yazılımıdır: müşteri verileriniz sizin kontrolünüzde kalır, sabit abonelik ödersiniz; onam ve işlem kayıtlarını aynı yerde yönetirsiniz. Pazaryeri komisyonu yoktur.",
  rows: [
    {
      feature: "İş modeli",
      treatflow: "SaaS, şeffaf aylık fiyat",
      competitor: "Ücretsiz çekirdek, ödemelerden gelir",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Randevu komisyonu",
      treatflow: "Yok",
      competitor: "Pazaryeri kesintisi yok, ödeme ücreti olabilir",
      treatflowOk: true,
      competitorOk: true,
    },
    {
      feature: "Müşteri verileri",
      treatflow: "İşletmenizin kontrolünde",
      competitor: "Kullanıma göre değişir",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Onam ve anamnez",
      treatflow: "Dahili, imzalı, müşteri kaydında",
      competitor: "Sınırlı / işlem kaydı odaklı değil",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "İşlem kaydı",
      treatflow: "Notlar, parametreler, öncesi-sonrası",
      competitor: "Dokümantasyon sistemi değil",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Fiyat",
      treatflow: "Lansman: Basic 1.490 TL/ay, Booking 1.990 TL/ay",
      competitor: "Giriş ücretsiz, maliyet ödemeyle artar",
      treatflowOk: true,
      competitorOk: true,
    },
    {
      feature: "Barındırma",
      treatflow: "AB sunucuları, KVKK kapsamında",
      competitor: "Uluslararası ürün",
      treatflowOk: true,
      competitorOk: false,
    },
  ],
  faqs: [
    {
      q: "Fresha gerçekten ücretsiz mi?",
      a: "Randevu katmanı ücretsiz olabilir. Fresha kart ödemeleri ve ek ürünlerden gelir elde eder. Toplam maliyet kullanılan özelliklere göre değişebilir.",
    },
    {
      q: "Treatflow ile Fresha arasındaki fark nedir?",
      a: "Treatflow bağımsız salon yazılımıdır: takvim, müşteri takibi, onam formları ve işlem kaydı sunar. Fresha ise randevu ve pazaryeri tarafına odaklanır. Treatflow randevu komisyonu almaz.",
    },
    {
      q: "Fresha medikal estetik için işlem kaydı sunar mı?",
      a: "Fresha fotoğraf ve parametre odaklı işlem kaydı olarak tasarlanmamıştır. Treatflow notları, parametreleri ve fotoğrafları ziyarete bağlar.",
    },
    {
      q: "Fresha'dan Treatflow'a geçebilir miyim?",
      a: "Evet. Müşteri verilerinin aktarımında yardımcı oluruz. Treatflow'u kredi kartı gerekmeden 30 gün deneyebilirsiniz.",
    },
  ],
  ctaTitle: "Her ziyaretten pay değil, ödediğiniz yazılım mı istiyorsunuz?",
};

export const vsTreatwellTr: EnComparisonContent = {
  competitor: "Treatwell",
  title: "Treatflow vs Treatwell",
  description:
    "Treatflow vs Treatwell: müşteriniz sizde kalsın ve aylık ücret ödeyin, yoksa komisyon alan bir pazaryerinde listelenin. Güzellik salonları için karşılaştırma.",
  intro:
    "Treatwell bir pazaryeridir. Treatflow sizin yazılımınızdır. Platformda keşfedilmek istiyorsanız Treatwell işe yarayabilir. İlişkiyi sizde tutmak ve komisyon ödememek istiyorsanız Treatflow daha yakındır.",
  rows: [
    {
      feature: "Model",
      treatflow: "Sizin salon yazılımınız",
      competitor: "Pazaryeri / platform",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Komisyon",
      treatflow: "Randevu başına %0",
      competitor: "Pazaryeri randevularında komisyon",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Müşteri verileri",
      treatflow: "Salon hesabınızda kalır",
      competitor: "Platformla paylaşılır",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Online randevu",
      treatflow: "Sizin linkiniz, sizin markanız",
      competitor: "Platform listesi ve araçlar",
      treatflowOk: true,
      competitorOk: true,
    },
    {
      feature: "Onam ve işlem kaydı",
      treatflow: "Çekirdek ürün",
      competitor: "Pazaryerinin ana işi değil",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Fiyat",
      treatflow: "1.490–1.990 TL/ay SaaS",
      competitor: "Komisyon bazlı",
      treatflowOk: true,
      competitorOk: false,
    },
  ],
  faqs: [
    {
      q: "Treatflow, komisyonsuz Treatwell alternatifi mi?",
      a: "Pazaryeri değil yazılım istiyorsanız evet. Kendi randevu linkinizi paylaşırsınız, randevu başına kesinti yerine aylık paket ödersiniz.",
    },
    {
      q: "Treatwell onam formu ve işlem notu içerir mi?",
      a: "Pazaryeri ürünleri keşif ve randevuya odaklanır. Treatflow takvimin yanında kayıt, form ve işlem kaydı için kurulmuştur.",
    },
    {
      q: "İkisini birlikte kullanabilir miyim?",
      a: "Bazı salonlar müşteri çekmek için pazaryeri tutar, operasyonu Treatflow'da yürütür. Treatflow pazaryeri hesabı gerektirmez.",
    },
  ],
  ctaTitle: "Randevuyu kendi linkinizden alın, pazaryeri kesintisi olmadan",
};

export const softwareComparisonTr: EnComparisonContent = {
  competitor: "Tipik araçlar",
  title: "Güzellik salonu yazılımı karşılaştırması",
  description:
    "Güzellik salonu yazılımı karşılaştırması: pazaryeri, ücretsiz randevu aracı ve Treatflow. Komisyon yok, KVKK kapsamında kayıt, onam ve işlem kaydı.",
  intro:
    "Çoğu salon takvim, online randevu ekranı, kâğıt form ve fotoğraf klasörünü ayrı ayrı kullanır. Treatflow bunları tek uygulamada birleştirir: randevu, komisyonsuz online randevu, müşteri takibi, onam ve işlem kaydı.",
  rows: [
    {
      feature: "Tek uygulama",
      treatflow: "Takvim, kayıt, onam, işlem kaydı",
      competitor: "Çoğu zaman birkaç araç",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Komisyon",
      treatflow: "Yok",
      competitor: "Pazaryerleri pay alır",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "KVKK / AB barındırma",
      treatflow: "AB sunucuları",
      competitor: "Değişir",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Onam formları",
      treatflow: "Dijital, müşteri dosyasında",
      competitor: "Kağıt veya eklenti",
      treatflowOk: true,
      competitorOk: false,
    },
    {
      feature: "Deneme",
      treatflow: "30 gün, kart yok",
      competitor: "Değişir",
      treatflowOk: true,
      competitorOk: true,
    },
  ],
  faqs: [
    {
      q: "Bir güzellik salonunun gerçekten hangi yazılıma ihtiyacı var?",
      a: "Online randevuyla uyumlu takvim, müşteri kaydı, anamnez/onam ve işlemleri belgeleme yolu. Treatflow bu setin etrafında kuruludur.",
    },
    {
      q: "Komisyonsuz güzellik salonu yazılımı hangisi?",
      a: "Treatflow Avusturya çıkışlı salon SaaS'ıdır; AB sunucuları, pazaryeri komisyonu yok. Türkiye'de lansman fiyatı ayda 1.490 TL.",
    },
  ],
  ctaTitle: "Treatflow'u kullandığınız araçların yanında görün",
};
