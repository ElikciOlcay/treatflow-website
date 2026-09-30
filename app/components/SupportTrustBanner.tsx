import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';
import { APP_REGISTER_BY_MARKET, DEMO_BOOKING_URL } from '@/app/i18n/market-access';

type HomeLocale = 'de' | 'en';

const copy = {
  de: {
    aria: 'Persönliche Betreuung und Schulungen',
    badge: 'Persönliche Betreuung',
    title: 'Wir lassen dich nicht allein',
    text: 'Von der Einrichtung bis zur Schulung: Unser Team begleitet dich persönlich beim Start mit Treatflow – damit du und dein Team vom ersten Tag an sicher arbeiten.',
    trial: '14 Tage kostenlos testen',
    demo: 'Kostenlose Demo buchen',
    alt: 'Persönliche Betreuung und Schulung durch das Treatflow-Team',
    chip: 'Persönlich. Auf Deutsch. Inklusive.',
    register: APP_REGISTER_BY_MARKET.de,
  },
  en: {
    aria: 'Complete setup for your studio',
    badge: 'Complete setup',
    title: 'We set everything up for you',
    text: 'We can take over the full setup: calendar, services, forms and data migration – so you start with a studio that is ready to work.',
    trial: 'Start 14-day free trial',
    demo: 'Book a free demo',
    alt: 'Treatflow team setting up the studio software together',
    chip: 'Full setup. Included.',
    register: APP_REGISTER_BY_MARKET.en,
  },
};

export default function SupportTrustBanner({ locale = 'de' }: { locale?: HomeLocale }) {
  const t = copy[locale];
  return (
    <section className="py-12 bg-white" aria-label={t.aria}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 shadow-xl">
          <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 -bottom-10 h-44 w-44 rounded-full bg-fuchsia-300/20 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center p-6 sm:p-8 lg:p-10">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                {t.badge}
              </div>

              <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-white leading-tight">
                {t.title}
              </h2>
              <p className="mt-3 text-base text-white/85 leading-relaxed">{t.text}</p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href={t.register}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-md transition-all duration-300 hover:bg-indigo-50 hover:shadow-lg hover:-translate-y-0.5"
                >
                  {t.trial}
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href={DEMO_BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  {t.demo}
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[260px]">
                <div className="relative aspect-square overflow-hidden rounded-3xl ring-4 ring-white/20 shadow-2xl">
                  <Image
                    src="/images/support-betreuung.png"
                    alt={t.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-900 shadow-lg whitespace-nowrap">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                  {t.chip}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
