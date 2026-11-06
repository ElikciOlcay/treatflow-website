import type { Metadata } from 'next';
import { DemoPlayerPage, demoPlayerMetadata, demoPlayerStaticParams } from '@/app/components/demo-forms/routes';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return demoPlayerStaticParams('nl');
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  return demoPlayerMetadata('nl', slug);
}

export default async function TryFormDemoPage({ params }: PageProps) {
  const { slug } = await params;
  return <DemoPlayerPage locale="nl" slug={slug} />;
}
