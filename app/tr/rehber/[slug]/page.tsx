import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import TrGuideArticle from "@/app/components/tr-seo/TrGuideArticle";
import { BASE_URL } from "@/app/i18n/config";
import { trGuides } from "@/app/i18n/tr-seo/guides";

export function generateStaticParams() {
  return trGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = trGuides.find((item) => item.slug === slug);
  if (!guide) return {};
  return {
    title: guide.title,
    description: guide.description,
    alternates: { canonical: `${BASE_URL}${guide.path}` },
    openGraph: {
      title: guide.title,
      description: guide.description,
      url: `${BASE_URL}${guide.path}`,
      locale: "tr_TR",
      type: "article",
    },
  };
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = trGuides.find((item) => item.slug === slug);
  if (!guide) notFound();
  return (
    <TrSeoShell>
      <TrGuideArticle content={guide} />
    </TrSeoShell>
  );
}
