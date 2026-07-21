import Link from "next/link";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "about",
  locale: "it",
  title: "Chi siamo",
  description: "Treatflow è software per centri estetici, fondato in Austria da Olcay e Gökce Elikci.",
});

export default function ItAboutPage() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Chi siamo</h1>
      <p className="text-lg text-gray-600 mb-4 leading-relaxed">
        Treatflow è il software all-in-one per centri estetici e cliniche estetiche. Fondato in
        Austria da Olcay e Gökce Elikci. Oltre 500 studi nel mercato DACH.
      </p>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Stiamo espandendo Treatflow a livello internazionale. Fuori da Germania, Austria e Svizzera
        puoi richiedere l&apos;accesso anticipato.
      </p>
      <Link
        href="/it/accesso-anticipato"
        className="inline-flex rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700"
      >
        Richiedi accesso anticipato
      </Link>
    </section>
  );
}
