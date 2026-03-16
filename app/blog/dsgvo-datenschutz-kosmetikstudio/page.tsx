import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Shield } from 'lucide-react';

export const metadata: Metadata = {
    title: 'DSGVO im Kosmetikstudio: Datenschutz ohne Panik | Treatflow Blog',
    description: 'Kundendaten, Fotos, Anamnese – was du speichern darfst, was du brauchst und wie du DSGVO-konform bleibst.',
    keywords: ['DSGVO Kosmetikstudio', 'Datenschutz Beauty', 'Kundendaten speichern', 'DSGVO konform Beauty', 'Kosmetikstudio Datenschutz'],
    authors: [{ name: 'Treatflow Team' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/dsgvo-datenschutz-kosmetikstudio' },
    openGraph: {
        title: 'DSGVO im Kosmetikstudio: Datenschutz ohne Panik',
        description: 'Kundendaten, Fotos, Anamnese – was du speichern darfst und wie du DSGVO-konform bleibst.',
        url: 'https://www.treatflow.io/blog/dsgvo-datenschutz-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/dsgvo-kosmetikstudio.jpg', width: 1200, height: 630, alt: 'DSGVO Datenschutz Kosmetikstudio' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-12-14T09:00:00.000Z',
        section: 'Recht & Compliance',
    },
    twitter: { card: 'summary_large_image', images: ['/images/blog/dsgvo-kosmetikstudio.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "DSGVO im Kosmetikstudio: Datenschutz ohne Panik",
        "description": "Kundendaten, Fotos, Anamnese – was du speichern darfst und wie du DSGVO-konform bleibst.",
        "image": "https://www.treatflow.io/images/blog/dsgvo-kosmetikstudio.jpg",
        "author": { "@type": "Organization", "name": "Treatflow Team", "url": "https://www.treatflow.io/ueber-uns" },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2024-12-14T09:00:00.000Z",
        "dateModified": "2024-12-14T09:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/dsgvo-datenschutz-kosmetikstudio" },
        "articleSection": "Recht & Compliance",
        "wordCount": 1300,
        "timeRequired": "PT6M",
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
                            <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">Recht & Compliance</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />14. Dezember 2024</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />6 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            DSGVO im Kosmetikstudio: Datenschutz ohne Panik
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Kundendaten, Fotos, Anamnese – du speicherst eine Menge. Was du dürfen musst und worauf du achten solltest, damit es rechtlich sauber bleibt.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img src="/images/blog/dsgvo-kosmetikstudio.jpg" alt="Datenschutz und DSGVO im Kosmetikstudio" className="w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die DSGVO klingt nach Bürokratie und Strafen. In der Praxis geht es vor allem um zwei Dinge: Du verarbeitest personenbezogene Daten nur mit Rechtsgrundlage (Vertrag, Einwilligung, berechtigtes Interesse), und du behandelst sie sicher. Für ein Kosmetikstudio heißt das: Namen, Adressen, Anamnesen, Behandlungsnotizen und eventuell Fotos – alles das unterliegt dem Datenschutz.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Du brauchst eine Datenschutzerklärung (auf der Website und wenn du Daten erhebst), und idealerweise eine kurze Info, was du warum speicherst. Bei Fotos (z.B. Vorher-Nachher) ist eine explizite Einwilligung nötig. Die Aufbewahrungsfristen für Anamnese und Behandlungsdokumentation solltest du kennen – oft sind das mehrere Jahre. Nach Ablauf solltest du löschen oder anonymisieren, wenn du die Daten nicht mehr brauchst.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Wo liegen die Daten?</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wenn du Software nutzt: Serverstandort und Vertrag prüfen. EU-Server und ein Auftragsverarbeitungsvertrag (AV-Vertrag) sind Standard bei seriösen Anbietern. So weißt du, wer deine Kundendaten wo verarbeitet und dass die Anbieter sich vertraglich an die DSGVO halten.
                        </p>
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Treatflow: EU-Hosting, DSGVO-konform</h3>
                            <p className="mb-6 text-indigo-100">
                                Kundendaten und Dokumentation in der EU, mit AV-Vertrag und klaren Prozessen.
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
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/dsgvo-datenschutz-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/dsgvo-datenschutz-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/dsgvo-datenschutz-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
