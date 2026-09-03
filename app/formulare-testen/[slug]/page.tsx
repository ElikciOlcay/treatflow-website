import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DemoFormPlayer from '../../components/demo-forms/DemoFormPlayer';
import { DEMO_FORMS, demoFormHreflang, getDemoCopy, getDemoForm } from '@/lib/demoForms';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return DEMO_FORMS.map((form) => ({ slug: form.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const form = getDemoForm(slug, 'de');
  const copy = getDemoCopy('de');
  if (!form) {
    return { title: copy.meta.notFound };
  }
  return {
    title: copy.meta.playerTitle(form.name),
    description: copy.meta.playerDescription(form.description),
    alternates: demoFormHreflang(form.id),
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function FormularDemoPage({ params }: PageProps) {
  const { slug } = await params;
  const form = getDemoForm(slug, 'de');
  if (!form) notFound();
  return <DemoFormPlayer form={form} locale="de" />;
}
