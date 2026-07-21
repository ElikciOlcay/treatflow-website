import Link from "next/link";
import { buildPageMetadata } from "@/app/i18n/seo";

export const metadata = buildPageMetadata({
  pageKey: "about",
  locale: "es",
  title: "Sobre nosotros",
  description: "Treatflow es software para salones de belleza, fundado en Austria por Olcay y Gökce Elikci.",
});

export default function EsAboutPage() {
  return (
    <section className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Sobre Treatflow</h1>
      <p className="text-lg text-gray-600 mb-4 leading-relaxed">
        Treatflow es la software all-in-one para salones de belleza y clínicas estéticas. Fundada en
        Austria por Olcay y Gökce Elikci. Más de 500 estudios en el mercado DACH.
      </p>
      <p className="text-gray-600 mb-8 leading-relaxed">
        Estamos expandiendo Treatflow internacionalmente. Fuera de Alemania, Austria y Suiza puedes
        solicitar acceso anticipado.
      </p>
      <Link
        href="/es/acceso-anticipado"
        className="inline-flex rounded-xl bg-indigo-600 text-white px-6 py-3 font-semibold hover:bg-indigo-700"
      >
        Solicitar acceso anticipado
      </Link>
    </section>
  );
}
