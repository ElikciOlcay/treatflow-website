import Link from "next/link";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "about",
  locale: "fr",
  title: "À propos",
  description:
    "Treatflow est un logiciel pour instituts de beauté, fondé en Autriche par Olcay et Gökce Elikci.",
});

export default function FrAboutPage() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">À propos de Treatflow</h1>
      <p className="text-lg text-gray-600 mb-4 leading-relaxed">
        Treatflow est le logiciel tout-en-un pour instituts de beauté et cliniques esthétiques.
        Fondé en Autriche par Olcay et Gökce Elikci. Plus de 500 instituts sur le marché DACH.
      </p>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Nous développons Treatflow à l&apos;international. Hors Allemagne, Autriche et Suisse, vous
        pouvez demander un accès anticipé.
      </p>
      <Link
        href="/fr/acces-anticipe"
        className="inline-flex rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700"
      >
        Demander un accès anticipé
      </Link>
    </section>
  );
}
