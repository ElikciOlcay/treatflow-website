import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/app/components/Navigation';
import Footer from '@/app/components/Footer';
import DemoFormsGallery from '@/app/components/demo-forms/DemoFormsGallery';
import DemoFormPlayer from '@/app/components/demo-forms/DemoFormPlayer';
import { ogLocaleTags } from '@/app/i18n/config';
import {
  demoFormAlternates,
  getDemoCopy,
  getDemoForm,
  getDemoForms,
  type DemoLocale,
} from '@/lib/demoForms';

/**
 * Gemeinsame Bausteine für die Beispiel-Formulare in allen Sprachen
 * (DE: app/(de)/formulare-testen, sonst app/<lang>/try-forms; NL/IT/PL/ES/FR
 * erreichen /<lang>/try-forms über den lokalisierten Slug per Middleware-Rewrite).
 */

export function demoGalleryMetadata(locale: DemoLocale): Metadata {
  const copy = getDemoCopy(locale);
  const alternates = demoFormAlternates(locale);
  return {
    title: copy.meta.galleryTitle,
    description: copy.meta.galleryDescription,
    alternates,
    openGraph: {
      title: `${copy.meta.galleryTitle} | Treatflow`,
      description: copy.meta.galleryDescription,
      url: alternates.canonical,
      locale: ogLocaleTags[locale],
    },
  };
}

export function DemoGalleryPage({ locale }: { locale: DemoLocale }) {
  return (
    <div className="min-h-screen bg-white">
      <Navigation market={locale} />
      <DemoFormsGallery locale={locale} />
      <Footer market={locale} />
    </div>
  );
}

export function demoPlayerStaticParams(locale: DemoLocale) {
  return getDemoForms(locale).map((form) => ({ slug: form.slug }));
}

export function demoPlayerMetadata(locale: DemoLocale, slug: string): Metadata {
  const form = getDemoForm(slug, locale);
  const copy = getDemoCopy(locale);
  if (!form) {
    return { title: copy.meta.notFound };
  }
  const alternates = demoFormAlternates(locale, form.id);
  return {
    title: copy.meta.playerTitle(form.name),
    description: copy.meta.playerDescription(form.description),
    alternates,
    openGraph: {
      title: `${copy.meta.playerTitle(form.name)} | Treatflow`,
      description: copy.meta.playerDescription(form.description),
      url: alternates.canonical,
      locale: ogLocaleTags[locale],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function DemoPlayerPage({ locale, slug }: { locale: DemoLocale; slug: string }) {
  const form = getDemoForm(slug, locale);
  if (!form) notFound();
  return <DemoFormPlayer form={form} locale={locale} />;
}
