import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DemoFormPlayer from '../../../components/demo-forms/DemoFormPlayer';
import HtmlLang from '../../../components/HtmlLang';
import {
  demoFormHreflangEn,
  getDemoCopy,
  getDemoForm,
  getDemoForms,
} from '@/lib/demoForms';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getDemoForms('en').map((form) => ({ slug: form.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const form = getDemoForm(slug, 'en');
  const copy = getDemoCopy('en');
  if (!form) {
    return { title: copy.meta.notFound };
  }
  return {
    title: copy.meta.playerTitle(form.name),
    description: copy.meta.playerDescription(form.description),
    alternates: demoFormHreflangEn(form.id),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function TryFormDemoPage({ params }: PageProps) {
  const { slug } = await params;
  const form = getDemoForm(slug, 'en');
  if (!form) notFound();
  return (
    <>
      <HtmlLang lang="en" />
      <DemoFormPlayer form={form} locale="en" />
    </>
  );
}
