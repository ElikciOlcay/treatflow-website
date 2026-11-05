import Image from "next/image";
import { ArrowRight, CheckCircle, ChevronDown, Gift, Globe, Zap } from "lucide-react";
import SocialProofBar from "@/app/components/SocialProofBar";
import { BASE_URL } from "@/app/i18n/config";
import { DEMO_BOOKING_URL } from "@/app/i18n/market-access";
import { stripTitleBrand } from "@/app/i18n/seo";
import { sitePagePath } from "@/app/i18n/site-pages";
import { getHomeContent } from "@/app/site/content/home";
import type { SiteMarket } from "@/app/site/content/shared";
import { getStudioWebsiteContent, type StudioWebsiteContent } from "@/app/site/content/studio-website";
import { siteIcons } from "@/app/site/icons";
import { JsonLd, ORGANIZATION_ID, breadcrumbSchema, faqPageSchema, webPageSchema } from "@/app/site/schema";

/**
 * Seite „studio-website“ (Website für Kosmetikstudios) für alle Sprachen.
 * Markup = bisherige deutsche Seite app/(de)/website-fuer-kosmetikstudios;
 * Texte aus app/site/content/studio-website/<lang>.ts.
 */

/**
 * JSON-LD (Breadcrumb, WebPage, Service, FAQ). DE rendert es wie bisher vor der Navigation.
 * Kein SoftwareApplication-Block: die Seite verkauft eine Dienstleistung (Website-Erstellung).
 */
export function StudioWebsiteSchemas({ market }: { market: SiteMarket }) {
  const content = getStudioWebsiteContent(market);
  const s = content.schema;
  const pageUrl = `${BASE_URL}${sitePagePath(market, "studio-website") ?? ""}`;
  const serviceId = `${pageUrl}#service`;
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: s.serviceName,
    description: s.serviceDescription,
    provider: { "@id": ORGANIZATION_ID },
    serviceType: s.serviceType,
    ...(s.areaServed ? { areaServed: s.areaServed } : {}),
    offers: {
      "@type": "Offer",
      price: "1000",
      priceCurrency: "EUR",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "1000",
        priceCurrency: "EUR",
        description: s.priceDescription,
      },
    },
  };
  const schemaFaqs =
    content.faq.schemaCount === undefined ? content.faq.items : content.faq.items.slice(0, content.faq.schemaCount);

  return (
    <>
      <JsonLd data={breadcrumbSchema(market, [{ label: s.serviceName }], pageUrl)} />
      <JsonLd
        data={webPageSchema(market, {
          url: pageUrl,
          name: stripTitleBrand(content.meta.title),
          description: content.meta.description,
          breadcrumb: true,
          aboutId: serviceId,
        })}
      />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqPageSchema(market, pageUrl, schemaFaqs)} />
    </>
  );
}

export default function StudioWebsitePage({ market }: { market: SiteMarket }) {
  const content = getStudioWebsiteContent(market);
  const { hero, demo, why, services, advantage, pricing, process, faq, cta } = content;

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Globe className="h-4 w-4" />
              {hero.badge}
            </div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight mb-6">
              {hero.title.before}
              {hero.title.before ? " " : null}
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {hero.title.highlight}
              </span>
              {hero.title.after || null}
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 mb-4 leading-relaxed max-w-3xl mx-auto">
              {hero.lead}
            </p>
            <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
              {hero.sub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 flex items-center justify-center shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                {hero.primaryCta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href={content.emailHref}
                className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-indigo-300 hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
              >
                {hero.emailCta}
              </a>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
              {hero.checks.map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-indigo-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Showcase */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Globe className="h-4 w-4" />
              {demo.badge}
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {demo.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {demo.description}
            </p>
          </div>
          <a
            href={demo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block group relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 max-w-5xl mx-auto"
          >
            <div className="aspect-[16/9] relative overflow-hidden bg-stone-100">
              <Image
                src="/images/demo/demo-hero.png"
                alt={demo.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="object-cover group-hover:scale-[1.02] transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <p className="text-sm text-white/70 tracking-[0.2em] uppercase mb-2">{demo.overlayLabel}</p>
                <p className="text-2xl lg:text-3xl font-light text-white tracking-wide">{demo.overlayTitle}</p>
              </div>
              <div className="absolute top-4 right-4 bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {demo.hoverCta}
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-900">{demo.cardTitle}</p>
                <p className="text-sm text-gray-500">{demo.cardText}</p>
              </div>
              <div className="bg-indigo-600 text-white px-6 py-3 rounded-xl text-sm font-semibold flex items-center gap-2 flex-shrink-0 group-hover:bg-indigo-700 transition-colors">
                {demo.cardCta}
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Warum eine professionelle Website */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {why.title}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              {why.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {why.stats.map((item, i) => (
              <div
                key={i}
                className="text-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100"
              >
                <div className="text-4xl lg:text-5xl font-bold text-indigo-600 mb-2">
                  {item.value}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </div>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leistungen */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {services.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {services.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.items.map((item, i) => {
              const Icon = siteIcons[item.icon];
              return (
                <div
                  key={i}
                  className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Treatflow-Vorteil */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 lg:p-14 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
            <div className="relative grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Zap className="h-4 w-4" />
                  {advantage.badge}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                  {advantage.title}
                </h2>
                <p className="text-lg text-indigo-100 leading-relaxed mb-8">
                  {advantage.description}
                </p>
                <div className="space-y-4">
                  {advantage.points.map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-indigo-200 flex-shrink-0" />
                      <span className="text-indigo-50">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center gap-3 mb-6">
                  <Gift className="h-8 w-8 text-indigo-200" />
                  <h3 className="text-2xl font-bold">{advantage.boxTitle}</h3>
                </div>
                <p className="text-indigo-100 mb-6 leading-relaxed">
                  {advantage.boxText}
                </p>
                <div className="bg-white/15 rounded-xl p-6 mb-6">
                  <div className="text-3xl font-bold mb-1">{advantage.creditAmount}</div>
                  <div className="text-indigo-200 font-medium">
                    {advantage.creditLabel}
                  </div>
                </div>
                <p className="text-sm text-indigo-200">
                  {advantage.creditNote}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preis-Bereich */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {pricing.title}
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              {pricing.description}
            </p>
          </div>
          <div className="max-w-lg mx-auto">
            <div className="bg-white rounded-2xl border-2 border-indigo-200 p-8 lg:p-10 shadow-lg relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-indigo-600 text-white px-6 py-1.5 rounded-full text-sm font-semibold">
                  {pricing.badge}
                </div>
              </div>
              <div className="text-center mb-8 pt-4">
                <div className="flex items-baseline justify-center gap-1">
                  {pricing.price.prefix && <span className="text-lg text-gray-500">{pricing.price.prefix}</span>}
                  <span className="text-5xl lg:text-6xl font-bold text-gray-900">{pricing.price.amount}</span>
                  <span className="text-2xl text-gray-500">{pricing.price.currency}</span>
                </div>
                <p className="text-gray-500 mt-2">{pricing.note}</p>
              </div>
              <div className="space-y-4 mb-8">
                {pricing.points.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="bg-indigo-50 rounded-xl p-4 mb-8 border border-indigo-100">
                <div className="flex items-center gap-3">
                  <Gift className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-indigo-700">{pricing.customerLabel}</span>{' '}
                    <span className="text-indigo-600">{pricing.customerText}</span>
                  </div>
                </div>
              </div>
              <a
                href={DEMO_BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-indigo-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition-all duration-300 text-center shadow-md hover:shadow-lg"
              >
                {pricing.cta}
                <ArrowRight className="ml-2 h-5 w-5 inline" />
              </a>
              <p className="text-center text-sm text-gray-500 mt-4">
                {pricing.footnote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prozess */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              {process.title}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {process.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.steps.map((item, i) => (
              <div key={i} className="relative">
                <div className="text-6xl font-bold text-indigo-100 mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <WebsiteFAQSection faq={faq} />

      <SocialProofBar content={getHomeContent(market).socialProof} />

      {/* Finaler CTA */}
      <section className="py-20 bg-indigo-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {cta.title}
          </h2>
          <p className="text-xl text-indigo-200 mb-10 max-w-2xl mx-auto">
            {cta.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-indigo-600 px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              {cta.primary}
              <ArrowRight className="ml-3 h-6 w-6" />
            </a>
            <a
              href={content.emailHref}
              className="border-2 border-white text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center"
            >
              {cta.email}
            </a>
          </div>
          <div className="flex flex-col sm:flex-row justify-center gap-x-8 gap-y-3 text-white/90 text-sm">
            {cta.checks.map((item, i) => (
              <div key={i} className="flex items-center justify-center gap-2">
                <CheckCircle className="h-4 w-4 text-indigo-200" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function WebsiteFAQSection({ faq }: { faq: StudioWebsiteContent["faq"] }) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {faq.title}
          </h2>
          <p className="text-lg text-gray-600">
            {faq.description}
          </p>
        </div>
        <div className="space-y-4">
          {faq.items.map((item, index) => (
            <WebsiteFAQItem key={index} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WebsiteFAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group bg-white rounded-2xl border border-gray-200 hover:border-indigo-200 transition-all duration-300 overflow-hidden">
      <summary className="w-full px-8 py-6 text-left flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors list-none [&::-webkit-details-marker]:hidden">
        <h3 className="text-lg font-semibold text-gray-900 pr-4">{question}</h3>
        <ChevronDown className="h-5 w-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 group-open:rotate-180" />
      </summary>
      <div className="px-8 pb-6">
        <p className="text-gray-600 leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}
