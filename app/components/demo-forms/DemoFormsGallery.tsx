import Link from 'next/link';
import { ArrowRight, CheckCircle, ClipboardCheck, Lock, Sparkles, Users } from 'lucide-react';
import { FormDemoCards } from '../FormDemoSection';
import {
  DEMO_FORMS_FEATURE_PATH,
  getDemoCopy,
  type DemoLocale,
} from '@/lib/demoForms';
import { APP_REGISTER_BY_MARKET, DEMO_BOOKING_URL } from '@/app/i18n/market-access';

export default function DemoFormsGallery({ locale }: { locale: DemoLocale }) {
  const copy = getDemoCopy(locale);
  const featureHref = DEMO_FORMS_FEATURE_PATH[locale];
  const registerHref =
    locale === 'tr'
      ? APP_REGISTER_BY_MARKET.tr
      : locale === 'en'
        ? APP_REGISTER_BY_MARKET.en
        : APP_REGISTER_BY_MARKET.de;

  return (
    <>
      <section className="pt-28 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <ClipboardCheck className="h-4 w-4" />
            {copy.gallery.eyebrow}
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
            {copy.gallery.titleBefore}
            <span className="text-indigo-600">{copy.gallery.titleHighlight}</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
            {copy.gallery.intro}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-gray-600">
            {copy.gallery.points.map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-4 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50 px-5 py-4 sm:px-6 sm:py-5">
            <p className="text-sm font-semibold text-indigo-900 mb-1">{copy.gallery.noticeTitle}</p>
            <p className="text-sm text-indigo-800 leading-relaxed">{copy.gallery.noticeText}</p>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="sr-only">{copy.gallery.cardsHeading}</h2>
          <FormDemoCards locale={locale} />
        </div>
      </section>

      <section className="pb-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
              <Sparkles className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{copy.gallery.generatorTitle}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{copy.gallery.generatorText}</p>
            <Link
              href={featureHref}
              className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              {copy.gallery.generatorCta}
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-lg font-bold text-gray-900 mb-2">{copy.gallery.supportTitle}</h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">{copy.gallery.supportText}</p>
            <a
              href={DEMO_BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-700"
            >
              {copy.gallery.supportCta}
              <ArrowRight className="ml-1 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-indigo-600 rounded-2xl p-8 text-center">
            <div className="inline-flex items-center gap-2 text-indigo-100 text-sm font-medium mb-3">
              <Lock className="h-4 w-4" />
              {copy.gallery.bottomLock}
            </div>
            <h2 className="text-2xl font-bold text-white mb-3">{copy.gallery.bottomTitle}</h2>
            <p className="text-indigo-100 mb-6">{copy.gallery.bottomText}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={registerHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-gray-50"
              >
                {copy.gallery.trialCta}
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                href={featureHref}
                className="inline-flex items-center justify-center border border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-indigo-600"
              >
                {copy.gallery.moreCta}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
