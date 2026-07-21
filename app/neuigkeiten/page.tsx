import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Link from "next/link";
import { Sparkles, ArrowRight, Calendar } from "lucide-react";
import {
  fetchPublishedProductUpdates,
  resolveProductUpdateImageUrl,
} from "@/lib/productUpdates";

export const revalidate = 60;

export const metadata = {
  title: "Neuigkeiten | Treatflow Updates & neue Funktionen",
  description:
    "Was ist neu in Treatflow? Alle Produkt-Updates, Verbesserungen und neuen Funktionen für Kosmetikstudios chronologisch.",
  alternates: {
    canonical: "https://www.treatflow.io/neuigkeiten",
  },
  openGraph: {
    title: "Neuigkeiten | Treatflow",
    description:
      "Neue Funktionen und Verbesserungen in Treatflow – chronologisch und verständlich.",
    url: "https://www.treatflow.io/neuigkeiten",
  },
};

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("de-DE", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

function looksLikeHtml(value: string) {
  return /<\/?[a-z][\s\S]*>/i.test(value);
}

function categoryClass(category: string | null) {
  const normalized = (category || "").toLowerCase();
  if (normalized.includes("fix") || normalized.includes("bug")) {
    return "bg-amber-50 text-amber-700";
  }
  if (normalized.includes("verbesser") || normalized.includes("improve")) {
    return "bg-sky-50 text-sky-700";
  }
  return "bg-indigo-50 text-indigo-700";
}

export default async function NeuigkeitenPage() {
  const updates = await fetchPublishedProductUpdates();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="pt-32 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="h-4 w-4 mr-2" />
            Produkt-Updates
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Neuigkeiten
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Neue Funktionen und Verbesserungen in Treatflow – chronologisch,
            mit Fokus auf das, was dir im Studio wirklich hilft.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {updates.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-gray-200 rounded-2xl">
              <Sparkles className="mx-auto h-10 w-10 text-gray-300" />
              <h2 className="mt-4 text-lg font-semibold text-gray-900">
                Bald mehr Neuigkeiten
              </h2>
              <p className="mt-2 text-gray-500">
                Hier erscheinen Updates, sobald neue Funktionen live gehen.
              </p>
              <Link
                href="/funktionen"
                className="mt-6 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
              >
                Alle Funktionen ansehen
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </div>
          ) : (
            <ol className="space-y-10">
              {updates.map((update) => {
                const imageSrc = resolveProductUpdateImageUrl(update.image_url);
                return (
                  <li
                    key={update.id}
                    className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm"
                  >
                    {imageSrc && (
                      <div className="aspect-[16/9] bg-gray-100 overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={imageSrc}
                          alt=""
                          className="h-full w-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <div className="p-6 sm:p-8">
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        {update.category && (
                          <span
                            className={`inline-flex rounded-md px-2.5 py-0.5 text-xs font-medium ${categoryClass(update.category)}`}
                          >
                            {update.category}
                          </span>
                        )}
                        <span className="inline-flex items-center text-gray-400">
                          <Calendar className="mr-1.5 h-3.5 w-3.5" />
                          {formatDate(update.published_at)}
                        </span>
                      </div>
                      <h2 className="mt-3 text-2xl font-bold text-gray-900">
                        {update.title}
                      </h2>
                      {update.summary && (
                        <p className="mt-2 text-gray-600 leading-relaxed">
                          {update.summary}
                        </p>
                      )}
                      <div className="mt-5 text-gray-700 leading-relaxed prose prose-indigo max-w-none prose-p:my-2 prose-ul:my-2">
                        {looksLikeHtml(update.content) ? (
                          <div
                            dangerouslySetInnerHTML={{ __html: update.content }}
                          />
                        ) : (
                          <p className="whitespace-pre-wrap">{update.content}</p>
                        )}
                      </div>
                      {update.link_url && (
                        <a
                          href={
                            update.link_url.startsWith("/")
                              ? `https://app.treatflow.io${update.link_url}`
                              : update.link_url
                          }
                          className="mt-6 inline-flex items-center text-indigo-600 font-medium hover:text-indigo-700"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {update.link_label || "In Treatflow öffnen"}
                          <ArrowRight className="ml-1.5 h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </li>
                );
              })}
            </ol>
          )}

          <div className="mt-16 text-center rounded-2xl bg-indigo-50 px-6 py-10">
            <h3 className="text-xl font-semibold text-gray-900">
              Noch kein Treatflow?
            </h3>
            <p className="mt-2 text-gray-600">
              Teste alle neuen Funktionen 14 Tage kostenlos.
            </p>
            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
            >
              Kostenlos starten
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
