import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Heart } from 'lucide-react';

export const metadata: Metadata = {
    title: 'Lash-Kundinnen binden: Tipps für Wiederkehr',
    description: 'Refill-Intervalle, Erinnerungen und persönliche Notizen – so behältst du deine Lash-Kundinnen und füllst den Kalender.',
    keywords: ['Lash Kundenbindung', 'Wimpernverlängerung Kunden', 'Refill Erinnerung', 'Lash Studio', 'Wimpern Kunden binden'],
    authors: [{ name: 'Treatflow Team' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/lash-wimpern-kundenbindung' },
    openGraph: {
        title: 'Lash-Kundinnen binden: Wimpernverlängerung und Wiederkehr',
        description: 'Refill-Intervalle, Erinnerungen und Notizen – so behältst du deine Lash-Kundinnen.',
        url: 'https://www.treatflow.io/blog/lash-wimpern-kundenbindung',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/lash-kundenbindung.jpg', width: 1200, height: 630, alt: 'Lash Kundenbindung Wimpernverlängerung' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-11-28T11:00:00.000Z',
        section: 'Kundenbindung',
    },
    twitter: { card: 'summary_large_image', images: ['/images/blog/lash-kundenbindung.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Lash-Kundinnen binden: Wimpernverlängerung und Wiederkehr",
        "description": "Refill-Intervalle, Erinnerungen und Notizen – so behältst du deine Lash-Kundinnen.",
        "image": "https://www.treatflow.io/images/blog/lash-kundenbindung.jpg",
        "author": { "@type": "Organization", "name": "Treatflow Team", "url": "https://www.treatflow.io/ueber-uns" },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2024-11-28T11:00:00.000Z",
        "dateModified": "2024-11-28T11:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/lash-wimpern-kundenbindung" },
        "articleSection": "Kundenbindung",
        "wordCount": 1050,
        "timeRequired": "PT5M",
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
                            <span className="bg-rose-100 text-rose-700 px-4 py-2 rounded-full text-sm font-medium">Kundenbindung</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />28. November 2024</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />5 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Lash-Kundinnen binden: Wimpernverlängerung und Wiederkehr
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Bei Wimpernverlängerung kommt die Kundin regelmäßig – wenn du sie nicht vergessen lässt. So bleiben Refills im Kalender und die Bindung stark.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/lash-kundenbindung.jpg" alt="Lash-Kundinnen binden und Refill-Termine" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wer Lash macht, weiß: Die Kundin kommt alle zwei bis vier Wochen zum Refill. Vergisst sie den Termin oder geht zur Konkurrenz, fehlt dir nicht nur eine Buchung, sondern oft eine langfristige Stammkundin. Deshalb lohnt es sich, genau hier anzusetzen – mit Erinnerungen und kleinen Details.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Eine Erinnerung ein paar Tage vor dem üblichen Refill-Termin (z.B. „Dein nächster Refill wäre um den … – hast du schon Zeit?“) bringt viele zurück. Ohne Druck, aber mit klarem Angebot. Wer in der <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-700 underline">Kundenkartei</Link> notiert hat, wann die letzte Füllung war und welches Intervall die Kundin bevorzugt, kann solche Nachrichten gezielt schicken – oder noch besser: <Link href="/nachrichtenautomatisierung" className="text-indigo-600 hover:text-indigo-700 underline">automatisch auslösen lassen</Link>.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Persönliche Notizen nutzen</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            „Wünscht Volumen, Dichte 0,15“ oder „Sensibel, bitte Kleber wechseln“ – wenn du das bei der Kundin speicherst, fällt dir der nächste Termin leichter und die Kundin merkt, dass du sie im Blick hast. Das schafft Vertrauen und sorgt dafür, dass sie nicht woanders ausprobiert.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Kurz: Regelmässige, freundliche Erinnerungen plus eine saubere Kundendatei mit Notizen sind bei Lash oft der Unterschied zwischen voll gebucht und Lücken im Kalender. Biete dazu am besten <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-700 underline">Online-Buchung</Link> an, damit Kundinnen ihren Refill-Termin direkt selbst buchen können.
                        </p>
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Kunden im Blick, Refills nicht vergessen</h3>
                            <p className="mb-6 text-indigo-100">
                                Mit Treatflow: Kundendaten, Behandlungsverlauf und automatische Erinnerungen – auch für Lash-Studios.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://app.treatflow.io/auth/register" target="_blank" className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/kundenverwaltung" className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">Mehr erfahren</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div><h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Artikel hilfreich?</h3><p className="text-gray-600">Teile ihn mit anderen Kosmetikerinnen!</p></div>
                            <div className="flex flex-wrap gap-3">
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/lash-wimpern-kundenbindung')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/lash-wimpern-kundenbindung')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/lash-wimpern-kundenbindung')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
