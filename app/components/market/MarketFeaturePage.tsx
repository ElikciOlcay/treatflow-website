import { ArrowRight, CheckCircle, Clock, Users, Smartphone, Shield, Sparkles, Server, Lock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import AiAnswerCapsule from "../AiAnswerCapsule";
import FaqSectionEn from "../FaqSectionEn";
import { generateServiceSchema } from "@/lib/schema";
import { BASE_URL } from "../../i18n/config";
import type { InternationalPageContent } from "../InternationalSeoPage";

function earlyAccessFromPath(canonicalPath: string): string {
  if (canonicalPath.startsWith("/es")) return "/es/acceso-anticipado";
  if (canonicalPath.startsWith("/it")) return "/it/accesso-anticipato";
  if (canonicalPath.startsWith("/fr")) return "/fr/acces-anticipe";
  return "/en/early-access";
}

type Theme = {
  heroBg: string;
  badge: string;
  gradText: string;
  ctaBg: string;
  ctaSoftText: string;
  ctaBtnText: string;
};

const themes: Record<string, Theme> = {
  orange: {
    heroBg: "from-orange-50 via-white to-red-50",
    badge: "bg-orange-100 text-orange-700",
    gradText: "from-orange-600 to-red-600",
    ctaBg: "from-orange-600 to-red-600",
    ctaSoftText: "text-orange-100",
    ctaBtnText: "text-orange-600",
  },
  blue: {
    heroBg: "from-blue-50 via-white to-indigo-50",
    badge: "bg-blue-100 text-blue-700",
    gradText: "from-blue-600 to-indigo-600",
    ctaBg: "from-blue-600 to-indigo-600",
    ctaSoftText: "text-blue-100",
    ctaBtnText: "text-blue-600",
  },
  indigo: {
    heroBg: "from-indigo-50 via-white to-purple-50",
    badge: "bg-indigo-100 text-indigo-700",
    gradText: "from-indigo-600 to-purple-600",
    ctaBg: "from-indigo-600 to-purple-600",
    ctaSoftText: "text-indigo-100",
    ctaBtnText: "text-indigo-600",
  },
  purple: {
    heroBg: "from-purple-50 via-white to-pink-50",
    badge: "bg-purple-100 text-purple-700",
    gradText: "from-purple-600 to-pink-600",
    ctaBg: "from-purple-600 to-pink-600",
    ctaSoftText: "text-purple-100",
    ctaBtnText: "text-purple-600",
  },
  teal: {
    heroBg: "from-teal-50 via-white to-emerald-50",
    badge: "bg-teal-100 text-teal-700",
    gradText: "from-teal-600 to-emerald-600",
    ctaBg: "from-teal-600 to-emerald-600",
    ctaSoftText: "text-teal-100",
    ctaBtnText: "text-teal-600",
  },
  pink: {
    heroBg: "from-pink-50 via-white to-rose-50",
    badge: "bg-pink-100 text-pink-700",
    gradText: "from-pink-600 to-rose-600",
    ctaBg: "from-pink-600 to-rose-600",
    ctaSoftText: "text-pink-100",
    ctaBtnText: "text-pink-600",
  },
  sky: {
    heroBg: "from-sky-50 via-white to-blue-50",
    badge: "bg-sky-100 text-sky-700",
    gradText: "from-sky-600 to-blue-600",
    ctaBg: "from-sky-600 to-blue-600",
    ctaSoftText: "text-sky-100",
    ctaBtnText: "text-sky-600",
  },
};

const CARD_BG = [
  "from-blue-50 to-indigo-100",
  "from-purple-50 to-pink-100",
  "from-green-50 to-emerald-100",
  "from-orange-50 to-red-100",
  "from-sky-50 to-blue-100",
  "from-teal-50 to-cyan-100",
];

const CARD_ICON = [
  "from-blue-500 to-indigo-600",
  "from-purple-500 to-pink-600",
  "from-green-500 to-emerald-600",
  "from-orange-500 to-red-600",
  "from-sky-500 to-blue-600",
  "from-teal-500 to-cyan-600",
];

const BENEFIT_ICONS = [Clock, Users, CheckCircle, Smartphone, Shield, Sparkles];

export default function MarketFeaturePage({
  content,
}: {
  content: InternationalPageContent;
}) {
  const theme = themes[content.theme ?? "indigo"] ?? themes.indigo;
  const BadgeIcon = content.features.items[0]?.icon ?? Sparkles;
  const earlyAccessHref = earlyAccessFromPath(content.canonicalPath);

  const serviceSchema = generateServiceSchema({
    name: content.serviceName,
    description: content.serviceDescription,
    url: `${BASE_URL}${content.canonicalPath}`,
    serviceType: "Beauty and aesthetic studio management software",
    areaServed: content.areaServed ?? ["NL"],
  });

  return (
    <>
      <Script
        id={`service-schema-${content.pageKey}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className={`pt-24 pb-20 bg-gradient-to-br ${theme.heroBg}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div
              className={`inline-flex items-center ${theme.badge} px-4 py-2 rounded-full text-sm font-medium mb-6`}
            >
              <BadgeIcon className="h-4 w-4 mr-2" />
              {content.hero.eyebrow}
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              <span
                className={`bg-gradient-to-r ${theme.gradText} bg-clip-text text-transparent`}
              >
                {content.hero.h1}
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {content.hero.subtitle}
            </p>
            {content.aiCapsules.map((capsule) => (
              <AiAnswerCapsule
                key={capsule.question}
                question={capsule.question}
                answer={capsule.answer}
              />
            ))}
          </div>

          {content.images?.lifestyle && (
            <div className="max-w-5xl mx-auto mb-12">
              <div className="relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[21/9]">
                <Image
                  src={content.images.lifestyle.src}
                  alt={content.images.lifestyle.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          )}

          {content.images?.mockup && (
            <div className="max-w-5xl mx-auto">
              <Image
                src={content.images.mockup.src}
                alt={content.images.mockup.alt}
                width={1200}
                height={800}
                sizes="(max-width: 1024px) 100vw, 80vw"
                className="w-full h-auto shadow-2xl rounded-2xl"
              />
            </div>
          )}
        </div>
      </section>

      {/* What is Treatflow */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {content.whatIsTreatflow.title}
          </h2>
          {content.whatIsTreatflow.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-lg text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {content.features.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {content.features.items.map((feature, idx) => (
              <div
                key={feature.title}
                className={`bg-gradient-to-br ${CARD_BG[idx % CARD_BG.length]} p-8 rounded-2xl`}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${CARD_ICON[idx % CARD_ICON.length]} rounded-lg flex items-center justify-center mb-6`}
                >
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.desc}</p>
                {feature.points && (
                  <ul className="space-y-2">
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
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

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              {content.benefits.title}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.benefits.items.map((benefit, idx) => {
              const Icon = BENEFIT_ICONS[idx % BENEFIT_ICONS.length];
              return (
                <div key={benefit} className="text-center">
                  <div
                    className={`w-16 h-16 bg-gradient-to-r ${CARD_ICON[idx % CARD_ICON.length]} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                  >
                    <Icon className="h-8 w-8 text-white" />
                  </div>
                  <p className="text-gray-700">{benefit}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who is it for */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8 text-center">
            {content.whoIsItFor.title}
          </h2>
          <ul className="grid sm:grid-cols-2 gap-4">
            {content.whoIsItFor.audiences.map((audience) => (
              <li
                key={audience}
                className="flex items-start gap-3 bg-white rounded-xl border border-gray-100 p-5"
              >
                <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{audience}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Market fit + trust */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            {content.marketFit.title}
          </h2>
          {content.marketFit.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-lg text-gray-600 leading-relaxed mb-4">
              {p}
            </p>
          ))}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {content.marketFit.highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 bg-gray-50 rounded-xl p-4 border border-gray-100"
              >
                <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="py-12 bg-gray-50 border-y border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Shield, text: "GDPR / AVG compliant" },
              { icon: Server, text: "EU-hosted servers" },
              { icon: Lock, text: "SSL-encrypted" },
              { icon: CheckCircle, text: "14-day free trial" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3">
                <item.icon className="h-8 w-8 text-indigo-600 flex-shrink-0" />
                <span className="text-gray-700 text-sm">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI summary */}
      <section className="py-16 bg-indigo-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">{content.aiSummary.title}</h2>
          <p className="text-gray-700 leading-relaxed">{content.aiSummary.text}</p>
        </div>
      </section>

      {/* Related pages */}
      {content.internalLinks.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {content.internalLinksTitle ?? "Related features"}
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {content.internalLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group p-6 rounded-2xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all"
                >
                  <span className="text-lg font-semibold text-gray-900 group-hover:text-indigo-600 block mb-2">
                    {link.label}
                  </span>
                  <span className="inline-flex items-center text-indigo-600 text-sm font-medium">
                    Learn more
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <FaqSectionEn faqs={content.faqs} />

      {/* CTA */}
      <section className={`py-20 bg-gradient-to-r ${theme.ctaBg}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to modernise your studio?
          </h2>
          <p className={`text-xl ${theme.ctaSoftText} mb-8 max-w-2xl mx-auto`}>
            Request early access for your country.
          </p>
          <div className="flex justify-center">
            <Link
              href={earlyAccessHref}
              className={`bg-white ${theme.ctaBtnText} px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center`}
            >
              Request early access
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
