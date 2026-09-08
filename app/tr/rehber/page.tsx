import type { Metadata } from "next";
import Link from "next/link";
import TrSeoShell from "@/app/components/tr-seo/TrSeoShell";
import Breadcrumbs from "@/app/components/Breadcrumbs";
import { BASE_URL } from "@/app/i18n/config";
import { TR_PATHS } from "@/app/i18n/tr-seo/paths";
import { trGuides } from "@/app/i18n/tr-seo/guides";

export const metadata: Metadata = {
  title: "Güzellik merkezi yazılımı rehberi",
  description:
    "Program seçimi, lazer takibi, dijital onam ve 2026 karşılaştırması. İnce SEO sayfaları değil, karar yazıları.",
  alternates: { canonical: `${BASE_URL}${TR_PATHS.guidesHub}` },
  openGraph: {
    title: "Güzellik merkezi yazılımı rehberi",
    description:
      "Treatflow rehberleri: seçim kriterleri, lazer, müşteri takibi, onam, karşılaştırma.",
    url: `${BASE_URL}${TR_PATHS.guidesHub}`,
    locale: "tr_TR",
  },
};

export default function RehberHubPage() {
  return (
    <TrSeoShell>
      <div className="pt-16">
        <Breadcrumbs
          items={[{ label: "Rehber", href: TR_PATHS.guidesHub }]}
          homeHref={TR_PATHS.home}
          homeLabel="Ana sayfa"
        />
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Güzellik ve lazer yazılımı rehberi
          </h1>
          <p className="text-gray-600 leading-relaxed mb-10">
            Kısa blog üretimi yok. Aşağıdaki yazılar satın alma sorularına cevap verir ve ilgili
            ürün sayfalarına bağlanır.
          </p>
          <ul className="space-y-5">
            {trGuides.map((guide) => (
              <li key={guide.path}>
                <Link
                  href={guide.path}
                  className="block border border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md transition-all"
                >
                  <h2 className="font-semibold text-gray-900 mb-1">{guide.h1}</h2>
                  <p className="text-sm text-gray-600">{guide.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </TrSeoShell>
  );
}
