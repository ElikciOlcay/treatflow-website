import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Share2, Shield } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'DSGVO Kosmetikstudio: Datenschutz ohne Panik',
    description: 'Kundendaten, Fotos, Anamnese – was du speichern darfst, was du brauchst und wie du DSGVO-konform bleibst.',
    keywords: ['DSGVO Kosmetikstudio', 'Datenschutz Beauty', 'Kundendaten speichern', 'DSGVO konform Beauty', 'Kosmetikstudio Datenschutz'],
    authors: [{ name: 'Olcay Elikci' }],
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
        "author": { "@type": "Person", "name": "Olcay Elikci", "url": "https://www.treatflow.io/ueber-uns", "jobTitle": "Gründer von Treatflow", "worksFor": { "@type": "Organization", "name": "Treatflow" } },
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
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(generateBreadcrumbSchema([
                    { label: 'Blog', href: '/blog' },
                    { label: 'DSGVO Kosmetikstudio: Datenschutz ohne Panik' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'DSGVO Kosmetikstudio: Datenschutz ohne Panik' },
            ]} />
            <article className="pt-6 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/dsgvo-kosmetikstudio.jpg" alt="Datenschutz und DSGVO im Kosmetikstudio" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die DSGVO klingt nach Bürokratie und Strafen. In der Praxis geht es vor allem um zwei Dinge: Du verarbeitest personenbezogene Daten nur mit Rechtsgrundlage (Vertrag, Einwilligung, berechtigtes Interesse), und du behandelst sie sicher. Für ein Kosmetikstudio heißt das: Namen, Adressen, Anamnesen, Behandlungsnotizen und eventuell Fotos – alles das gehört in eine sichere <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-700 underline">digitale Kundenverwaltung</Link> und unterliegt dem Datenschutz.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Du brauchst eine Datenschutzerklärung (auf der Website und wenn du Daten erhebst), und idealerweise eine kurze Info, was du warum speicherst. Bei Fotos (z.B. Vorher-Nachher) ist eine explizite Einwilligung nötig. Die Aufbewahrungsfristen für <Link href="/formulare" className="text-indigo-600 hover:text-indigo-700 font-medium">DSGVO-konforme Formulare</Link> wie Anamnese und Behandlungsdokumentation solltest du kennen – oft sind das mehrere Jahre. Nach Ablauf solltest du löschen oder anonymisieren, wenn du die Daten nicht mehr brauchst.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Wo liegen die Daten?</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wenn du <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:text-indigo-700 underline">Studiosoftware</Link> nutzt: Serverstandort und Vertrag prüfen. EU-Server und ein Auftragsverarbeitungsvertrag (AV-Vertrag) sind Standard bei seriösen Anbietern. So weißt du, wer deine Kundendaten wo verarbeitet und dass die Anbieter sich vertraglich an die DSGVO halten.
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

            {/* Verwandte Seiten */}
            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Passende Funktionen für dein Studio</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            { href: '/digitale-anamnese-kosmetikstudio', title: 'Digitale Anamnese', desc: 'DSGVO-konforme digitale Formulare' },
                            { href: '/kundenkartei-kosmetikstudio', title: 'Digitale Kundenkartei', desc: 'Alle Kundendaten sicher verwalten' },
                        ].map((link, i) => (
                            <Link key={i} href={link.href} className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all">
                                <div>
                                    <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block">{link.title}</span>
                                    <span className="text-sm text-gray-500">{link.desc}</span>
                                </div>
                                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
