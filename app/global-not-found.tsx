import type { Metadata } from "next";
import Link from "next/link";
import RootDocument from "@/app/components/RootDocument";

// Nötig, weil es mehrere Root-Layouts gibt (Deutsch, Sprach-Märkte, /en, /tr).
export const metadata: Metadata = {
  title: "Seite nicht gefunden | Treatflow",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <RootDocument lang="de">
      <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <p className="text-sm font-semibold text-indigo-600">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Seite nicht gefunden</h1>
        <p className="mt-3 text-gray-600">Diese Seite gibt es nicht (mehr). Page not found.</p>
        <Link href="/" className="mt-6 rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700">
          Zur Startseite
        </Link>
      </main>
    </RootDocument>
  );
}
