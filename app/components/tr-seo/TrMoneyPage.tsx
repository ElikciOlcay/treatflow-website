import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
} from "lucide-react";
import Breadcrumbs, { generateBreadcrumbSchema } from "@/app/components/Breadcrumbs";
import FaqSectionEn from "@/app/components/FaqSectionEn";
import TreatmentWorkflow from "@/app/components/TreatmentWorkflow";
import TrSeoCta from "@/app/components/tr-seo/TrSeoCta";
import TrSeoPageView from "@/app/components/tr-seo/TrSeoPageView";
import {
  generateServiceSchema,
  generateSoftwareApplicationSchema,
  generateWebPageSchemaIntl,
} from "@/lib/schema";
import { BASE_URL } from "@/app/i18n/config";
import { getPrimaryCtaPath } from "@/app/i18n/market-access";
import { TR_PATHS } from "@/app/i18n/tr-seo/paths";
import type { SeoPageKey } from "@/app/i18n/seo";
import type { WorkflowStep } from "@/app/components/TreatmentWorkflow";

export type TrMoneyPageContent = {
  pageKey: SeoPageKey;
  path: string;
  keywordCluster: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  subtitle: string;
  heroBullets: string[];
  heroImage: { src: string; alt: string };
  whatTitle: string;
  whatParas: string[];
  whoTitle: string;
  audiences: string[];
  problemTitle: string;
  problems: { problem: string; solution: string }[];
  workflowTitle: string;
  workflowSubtitle: string;
  workflowSteps: WorkflowStep[];
  featuresTitle: string;
  features: { title: string; desc: string; points?: string[] }[];
  screenshots: { src: string; alt: string; caption: string }[];
  whyCalendarTitle: string;
  whyCalendarParas: string[];
  pricingTitle: string;
  pricingText: string;
  faqs: { question: string; answer: string }[];
  related: { href: string; label: string; desc: string }[];
  serviceName: string;
  featureList: string[];
  dateModified: string;
};

const CTA_CLASS =
  "inline-flex items-center justify-center bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition-colors";

export default function TrMoneyPage({ content }: { content: TrMoneyPageContent }) {
  const registerHref = getPrimaryCtaPath("tr");
  const pageUrl = `${BASE_URL}${content.path}`;
  const crumbs = [{ label: content.h1, href: content.path }];

  const schemas = [
    generateBreadcrumbSchema(crumbs, TR_PATHS.home, "Ana sayfa"),
    generateWebPageSchemaIntl({
      name: content.title,
      description: content.description,
      url: pageUrl,
      inLanguage: "tr-TR",
      dateModified: content.dateModified,
    }),
    generateServiceSchema({
      name: content.serviceName,
      description: content.description,
      url: pageUrl,
      serviceType: content.serviceName,
      areaServed: ["TR"],
    }),
    generateSoftwareApplicationSchema({
      name: "Treatflow",
      description: content.description,
      url: pageUrl,
      inLanguage: "tr-TR",
      offers: {
        price: "0",
        priceCurrency: "TRY",
        description: "30 gün ücretsiz deneme, kredi kartı gerekmez",
      },
      aggregateRating: {
        ratingValue: "4.6",
        reviewCount: "19",
      },
      featureList: content.featureList,
    }),
  ];

  return (
    <>
      {schemas.map((schema) => (
        <script
          key={schema["@type"] as string}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
      <TrSeoPageView landingPage={content.path} keywordCluster={content.keywordCluster} />

      <div className="pt-16">
        <Breadcrumbs items={crumbs} homeHref={TR_PATHS.home} homeLabel="Ana sayfa" />
      </div>

      <section className="pt-8 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-3 py-1.5 rounded-full text-sm font-medium mb-5">
                {content.eyebrow}
              </div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-5 leading-[1.12]">
                {content.h1}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">{content.subtitle}</p>
              <ul className="space-y-2.5 mb-8">
                {content.heroBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-2.5 text-gray-700">
                    <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base font-medium">{bullet}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row items-start gap-3">
                <TrSeoCta
                  href={registerHref}
                  label="Ücretsiz Deneyin"
                  className={CTA_CLASS}
                  landingPage={content.path}
                  keywordCluster={content.keywordCluster}
                />
                <Link
                  href={TR_PATHS.pricing}
                  className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-700 px-2 py-4"
                >
                  Fiyatları gör
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                30 gün ücretsiz. Kredi kartı gerekmez. Randevu komisyonu yok.
              </p>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
              <Image
                src={content.heroImage.src}
                alt={content.heroImage.alt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 bg-gray-50 border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <div className="flex text-amber-400">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <span className="text-sm font-semibold text-gray-900">4,6/5 Google</span>
            <span className="text-xs text-gray-500">(19 değerlendirme)</span>
          </div>
          <p className="text-sm text-gray-600">
            Dünya genelinde 500+ işletme Treatflow kullanıyor. Veriler KVKK kapsamındaki süreçlerle AB sunucularında saklanıyor.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.whatTitle}</h2>
          {content.whatParas.map((p) => (
            <p key={p.slice(0, 48)} className="text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.whoTitle}</h2>
          <ul className="grid sm:grid-cols-2 gap-3">
            {content.audiences.map((audience) => (
              <li key={audience} className="flex items-start gap-2 text-gray-700">
                <CheckCircle className="h-5 w-5 text-emerald-500 shrink-0 mt-0.5" />
                <span>{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {content.problemTitle}
          </h2>
          <div className="space-y-4">
            {content.problems.map((item) => (
              <div key={item.problem} className="bg-gray-50 rounded-xl border border-gray-100 p-6">
                <p className="font-semibold text-gray-900 mb-2">{item.problem}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TreatmentWorkflow
        title={content.workflowTitle}
        subtitle={content.workflowSubtitle}
        steps={content.workflowSteps}
        stepLabel={(n) => `Adım ${n}`}
        learnMore="İncele"
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">
            {content.featuresTitle}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {content.features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
                {feature.points && (
                  <ul className="mt-3 space-y-1">
                    {feature.points.map((point) => (
                      <li key={point} className="text-sm text-gray-600 flex items-start gap-2">
                        <CheckCircle className="h-4 w-4 text-indigo-600 shrink-0 mt-0.5" />
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {content.screenshots.length > 0 && (
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Ekran görüntüleri</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {content.screenshots.map((shot) => (
                <figure key={shot.src}>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg border border-gray-100">
                    <Image
                      src={shot.src}
                      alt={shot.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="text-sm text-gray-500 mt-3">{shot.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{content.whyCalendarTitle}</h2>
          {content.whyCalendarParas.map((p) => (
            <p key={p.slice(0, 48)} className="text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{content.pricingTitle}</h2>
          <p className="text-gray-600 leading-relaxed mb-8">{content.pricingText}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <TrSeoCta
              href={registerHref}
              label="Ücretsiz Deneyin"
              className={CTA_CLASS}
              landingPage={content.path}
              keywordCluster={content.keywordCluster}
            />
            <Link
              href={TR_PATHS.pricing}
              className="inline-flex items-center justify-center border border-gray-200 text-gray-800 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
            >
              Fiyatlar
            </Link>
          </div>
        </div>
      </section>

      <FaqSectionEn
        title="Sıkça sorulan sorular"
        badge="SSS"
        faqs={content.faqs}
      />

      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">İlgili sayfalar</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.related.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="bg-white border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md transition-all"
              >
                <p className="font-semibold text-gray-900 mb-1">{item.label}</p>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-indigo-600">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">30 gün ücretsiz deneyin</h2>
          <p className="text-indigo-100 mb-8">
            Kredi kartı gerekmez. Veri aktarımında yardımcı oluruz. Taahhüt yok.
          </p>
          <TrSeoCta
            href={registerHref}
            label="Ücretsiz Deneyin"
            className="inline-flex items-center justify-center bg-white text-indigo-700 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
            landingPage={content.path}
            keywordCluster={content.keywordCluster}
          />
        </div>
      </section>
    </>
  );
}
