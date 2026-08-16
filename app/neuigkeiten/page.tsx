import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
    formatPublishedDate,
    getPublishedProductUpdates,
    productUpdateSlug,
} from '@/lib/productUpdates';

export const revalidate = 60;

export const metadata: Metadata = {
    title: 'Neuigkeiten: Neue Funktionen für dein Studio',
    description:
        'Was ist neu in Treatflow? Alle neuen Funktionen, Verbesserungen und Fixes für Kosmetikstudios – übersichtlich und aktuell.',
    alternates: {
        canonical: 'https://www.treatflow.io/neuigkeiten',
    },
    openGraph: {
        title: 'Neuigkeiten | Treatflow',
        description: 'Neue Funktionen und Verbesserungen für dein Kosmetikstudio.',
        url: 'https://www.treatflow.io/neuigkeiten',
    },
};

function categoryClass(category: string | null) {
    const value = (category || '').toLowerCase();
    if (value.includes('fix')) return 'bg-amber-50 text-amber-700';
    if (value.includes('verbesser')) return 'bg-sky-50 text-sky-700';
    return 'bg-indigo-50 text-indigo-700';
}

export default async function NeuigkeitenPage() {
    const updates = await getPublishedProductUpdates();

    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <main className="pt-24 pb-20">
                <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mb-12">
                        <p className="text-sm font-semibold text-indigo-600 mb-3">Produkt-Updates</p>
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">
                            Neuigkeiten für dein Studio
                        </h1>
                        <p className="text-xl text-gray-600">
                            Neue Funktionen, Verbesserungen und Fixes – dieselbe Übersicht wie in der App.
                        </p>
                    </div>

                    {updates.length === 0 ? (
                        <p className="text-gray-600">Aktuell sind keine Neuigkeiten veröffentlicht.</p>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {updates.map((update) => {
                                const slug = productUpdateSlug(update);
                                return (
                                    <Link
                                        key={update.id}
                                        href={`/neuigkeiten/${slug}`}
                                        className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-indigo-200 transition-colors"
                                    >
                                        <div className="relative aspect-[16/9] bg-gray-50">
                                            <Image
                                                src={update.image_url}
                                                alt={update.title}
                                                fill
                                                className="object-cover"
                                                sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                                            />
                                        </div>
                                        <div className="p-5">
                                            <div className="flex items-center gap-2 mb-3">
                                                <span className={`text-xs font-semibold px-2 py-1 rounded-full ${categoryClass(update.category)}`}>
                                                    {update.category || 'Neu'}
                                                </span>
                                                <span className="text-xs text-gray-500">
                                                    {formatPublishedDate(update.published_at)}
                                                </span>
                                            </div>
                                            <h2 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
                                                {update.title}
                                            </h2>
                                            {update.summary && (
                                                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                                                    {update.summary}
                                                </p>
                                            )}
                                            <span className="inline-flex items-center text-sm font-medium text-indigo-600">
                                                Weiterlesen
                                                <ArrowRight className="ml-1 h-4 w-4" />
                                            </span>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    )}
                </section>
            </main>
            <Footer />
        </div>
    );
}
