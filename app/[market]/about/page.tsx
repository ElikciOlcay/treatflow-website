import { notFound } from "next/navigation";
import { Heart, MapPin, ShieldCheck, Users, ArrowRight } from "lucide-react";
import Image from "next/image";
import { buildPageMetadata } from "@/app/i18n/seo";
import {
  isPrefixedMarket,
  marketLanguage,
  type PrefixedMarket,
} from "@/app/i18n/config";
import { APP_REGISTER_BY_MARKET } from "@/app/i18n/market-access";
import { getAboutCopy } from "@/app/i18n/markets/static-pages-nl-fi";

const icons = [Heart, ShieldCheck, Users, MapPin] as const;

const enAbout = {
  metaTitle: "About Treatflow",
  metaDescription:
    "Treatflow is the all-in-one software for beauty studios. Made in Austria, GDPR-compliant and hosted in the EU.",
  eyebrow: "About us",
  title: "Software that gives studios their time back",
  subtitle:
    "Treatflow started with a simple observation: beauty professionals spend far too much time on admin instead of their clients. We set out to change that - with one clear app that brings appointments, clients, forms, documentation and payments together.",
  valuesTitle: "What we stand for",
  values: [
    {
      title: "Built for studios",
      desc: "We build hand in hand with beauty professionals - every feature solves a real, everyday problem.",
    },
    {
      title: "Privacy first",
      desc: "GDPR-compliant and hosted on EU servers. Your data and your clients' data stay protected.",
    },
    {
      title: "Personal support",
      desc: "Real people who know the beauty industry - and help you get set up and get the most out of Treatflow.",
    },
    {
      title: "Made in Austria",
      desc: "Developed and supported in Europe, for studios across Europe and beyond.",
    },
  ],
  ctaLabel: "Start free trial",
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) return {};
  const market = raw as PrefixedMarket;
  const lang = marketLanguage[market];
  const content = lang === "nl" || lang === "fi" ? getAboutCopy(lang) : enAbout;
  return buildPageMetadata({
    pageKey: "about",
    locale: market,
    title: content.metaTitle,
    description: content.metaDescription,
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ market: string }>;
}) {
  const { market: raw } = await params;
  if (!isPrefixedMarket(raw)) notFound();
  const market = raw as PrefixedMarket;
  const lang = marketLanguage[market];
  const content = lang === "nl" || lang === "fi" ? getAboutCopy(lang) : enAbout;
  const registerUrl = APP_REGISTER_BY_MARKET[market];
  const ctaLabel =
    lang === "nl"
      ? "Gratis proberen"
      : lang === "fi"
        ? "Aloita ilmainen kokeilu"
        : content.ctaLabel;

  return (
    <>
      <section className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            {content.eyebrow}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            {content.title}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">{content.subtitle}</p>
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto relative w-full rounded-2xl shadow-xl overflow-hidden aspect-[16/9]">
          <Image
            src="/images/lifestyle/ueber-uns-studio-interior.png"
            alt="Modern beauty studio interior"
            fill
            sizes="(max-width: 1024px) 100vw, 1024px"
            className="object-cover object-center"
          />
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              {content.valuesTitle}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {content.values.map((v, i) => {
              const Icon = icons[i] ?? Heart;
              return (
                <div
                  key={v.title}
                  className="bg-white p-6 rounded-xl border border-gray-100"
                >
                  <div className="w-12 h-12 rounded-lg bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-gray-600">{v.desc}</p>
                </div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <a
              href={registerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700"
            >
              {ctaLabel} <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
