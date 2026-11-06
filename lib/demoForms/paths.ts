import { LOCALIZED_SLUGS } from '@/app/i18n/market-routes';

export type DemoLocale = 'de' | 'en' | 'tr' | 'nl' | 'it' | 'pl' | 'es' | 'fr';

export const DEMO_LOCALES: readonly DemoLocale[] = ['de', 'en', 'tr', 'nl', 'it', 'pl', 'es', 'fr'];

type BundleLocale = keyof typeof LOCALIZED_SLUGS;

/** NL/IT/PL/ES/FR: lokalisierte Slugs (Middleware rewritet auf /{lang}/try-forms bzw. /{lang}/forms). */
function bundlePath(locale: BundleLocale, page: 'try-forms' | 'forms'): string {
  return `/${locale}/${LOCALIZED_SLUGS[locale][page] ?? page}`;
}

export const DEMO_FORMS_PATH: Record<DemoLocale, string> = {
  de: '/formulare-testen',
  en: '/en/try-forms',
  tr: '/tr/try-forms',
  nl: bundlePath('nl', 'try-forms'),
  it: bundlePath('it', 'try-forms'),
  pl: bundlePath('pl', 'try-forms'),
  es: bundlePath('es', 'try-forms'),
  fr: bundlePath('fr', 'try-forms'),
};

export const DEMO_FORMS_FEATURE_PATH: Record<DemoLocale, string> = {
  de: '/formulare',
  en: '/en/forms',
  tr: '/tr/forms',
  nl: bundlePath('nl', 'forms'),
  it: bundlePath('it', 'forms'),
  pl: bundlePath('pl', 'forms'),
  es: bundlePath('es', 'forms'),
  fr: bundlePath('fr', 'forms'),
};
