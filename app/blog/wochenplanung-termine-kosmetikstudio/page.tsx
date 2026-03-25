import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2 } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Wochenplanung Kosmetikstudio: Termine im Griff',
    description: 'Wie du deine Woche so planst, dass du genug Termine hast, aber nicht im Dauerstress. Praktische Tipps aus dem Studio-Alltag.',
    keywords: ['Wochenplanung Kosmetikstudio', 'Terminplanung Beauty', 'Kalender Kosmetik', 'Studio Organisation', 'Arbeitswoche planen'],
    authors: [{ name: 'Treatflow Team' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/wochenplanung-termine-kosmetikstudio' },
    openGraph: {
        title: 'Wochenplanung im Kosmetikstudio: Termine im Griff',
        description: 'Wie du deine Woche so planst, dass du genug Termine hast, aber nicht im Dauerstress.',
        url: 'https://www.treatflow.io/blog/wochenplanung-termine-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/wochenplanung-termine.jpg', width: 1200, height: 630, alt: 'Wochenplanung Kosmetikstudio' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-12-20T10:00:00.000Z',
        section: 'Organisation',
    },
    twitter: { card: 'summary_large_image', images: ['/images/blog/wochenplanung-termine.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Wochenplanung im Kosmetikstudio: Termine im Griff",
        "description": "Wie du deine Woche so planst, dass du genug Termine hast, aber nicht im Dauerstress.",
        "image": "https://www.treatflow.io/images/blog/wochenplanung-termine.jpg",
        "author": { "@type": "Organization", "name": "Treatflow Team", "url": "https://www.treatflow.io/ueber-uns" },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2024-12-20T10:00:00.000Z",
        "dateModified": "2024-12-20T10:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/wochenplanung-termine-kosmetikstudio" },
        "articleSection": "Organisation",
        "wordCount": 1000,
        "timeRequired": "PT4M",
        "inLanguage": "de-DE",
        "isAccessibleForFree": true
    };

    return (
        <div className="min-h-screen bg-white">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
            <Navigation />
            <article className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <nav className="mb-8">
                        <Link href="/blog" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                            <ArrowLeft className="mr-2 h-4 w-4" /> Zurück zum Blog
                        </Link>
                    </nav>
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">Organisation</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />20. Dezember 2024</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />4 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Wochenplanung im Kosmetikstudio: Termine im Griff
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Entweder zu wenig gebucht oder von morgens bis abends durchgeplant – viele kennen beide Extreme. So findest du eine realistische Woche.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/wochenplanung-termine.jpg" alt="Wochenplanung und Kalender im Kosmetikstudio" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Eine Woche voraus zu denken, hilft ungemein. Nicht nur, weil du siehst, wo noch Lücken sind, sondern auch, weil du Puffer einplanen kannst – für Nachfragen, Aufräumen oder einfach Durchschnaufen. Wer nur von Tag zu Tag schaut, reagiert ständig; wer die Woche im Blick hat, kann lenken.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wann du deine Slots öffnest, ist Geschmackssache. Manche blockieren zuerst Pausen und Verwaltung, andere buchen die festen Stammkundinnen ein und füllen den Rest. Wichtig: Realistische Behandlungszeiten einplanen. Wenn eine Behandlung inklusive Vorbereitung 60 Minuten braucht, sollte der <Link href="/terminkalender" className="text-indigo-600 hover:text-indigo-700 underline">digitale Terminkalender</Link> das auch hergeben. Sonst rutscht alles nach hinten und der Stress ist vorprogrammiert.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Ein Kalender, der mitmacht</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wenn du <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-700 underline">Online-Buchung</Link> anbietest, sollten Kunden nur die Slots sehen, die du freigibst. Keine doppelten Buchungen, keine Termine mitten in deiner Mittagspause. Ein Kalender mit Tages- und Wochenansicht macht es einfacher, den Überblick zu behalten – und deine Kundinnen buchen direkt in die richtigen Lücken. Ergänzt du das mit <Link href="/nachrichtenautomatisierung" className="text-indigo-600 hover:text-indigo-700 underline">automatischen Erinnerungen</Link>, werden gebuchte Termine auch nicht vergessen.
                        </p>
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Terminkalender mit Wochenansicht</h3>
                            <p className="mb-6 text-indigo-100">
                                Treatflow bringt Tages-, Wochen- und Monatsansicht. Buchungslink für Kunden, Erinnerungen inklusive.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://app.treatflow.io/auth/register" target="_blank" className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/terminkalender" className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">Mehr erfahren</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div><h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Artikel hilfreich?</h3><p className="text-gray-600">Teile ihn mit anderen Kosmetikerinnen!</p></div>
                            <div className="flex flex-wrap gap-3">
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/wochenplanung-termine-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/wochenplanung-termine-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/wochenplanung-termine-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
