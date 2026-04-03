import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Share2, Plane } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Urlaub und Vertretung im Kosmetikstudio',
    description: 'Wer vertritt dich, wer übernimmt Termine, und wie bleiben Kundinnen informiert? Tipps für entspannte Auszeiten.',
    keywords: ['Urlaub Kosmetikstudio', 'Vertretung Beauty Studio', 'Studio Urlaubsplanung', 'Termine Vertretung', 'Kosmetikstudio Urlaub'],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/urlaub-vertretung-kosmetikstudio' },
    openGraph: {
        title: 'Urlaub und Vertretung im Kosmetikstudio: So planst du durch',
        description: 'Wer vertritt dich, wer übernimmt Termine – Tipps für entspannte Auszeiten.',
        url: 'https://www.treatflow.io/blog/urlaub-vertretung-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/urlaub-vertretung-studio.jpg', width: 1200, height: 630, alt: 'Urlaub und Vertretung Kosmetikstudio' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-11-22T10:00:00.000Z',
        section: 'Business',
    },
    twitter: { card: 'summary_large_image', images: ['/images/blog/urlaub-vertretung-studio.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Urlaub und Vertretung im Kosmetikstudio: So planst du durch",
        "description": "Wer vertritt dich, wer übernimmt Termine – Tipps für entspannte Auszeiten.",
        "image": "https://www.treatflow.io/images/blog/urlaub-vertretung-studio.jpg",
        "author": { "@type": "Person", "name": "Olcay Elikci", "url": "https://www.treatflow.io/ueber-uns", "jobTitle": "Gründer von Treatflow", "worksFor": { "@type": "Organization", "name": "Treatflow" } },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2024-11-22T10:00:00.000Z",
        "dateModified": "2024-11-22T10:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/urlaub-vertretung-kosmetikstudio" },
        "articleSection": "Business",
        "wordCount": 1000,
        "timeRequired": "PT4M",
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
                    { label: 'Urlaub und Vertretung im Kosmetikstudio' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Urlaub und Vertretung im Kosmetikstudio' },
            ]} />
            <article className="pt-6 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">Business</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />22. November 2024</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />4 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Urlaub und Vertretung im Kosmetikstudio: So planst du durch
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Irgendwann willst du mal weg. Damit die Kundinnen Bescheid wissen und niemand vor verschlossener Tür steht – ein paar einfache Schritte.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/urlaub-vertretung-studio.jpg" alt="Urlaub und Vertretung im Kosmetikstudio planen" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Viele Solo-Selbstständige schieben Urlaub vor sich her: Wer macht die Termine? Wer informiert die Kundinnen? In der Praxis reicht oft schon, die Schließzeiten früh zu kommunizieren und den <Link href="/terminkalender" className="text-indigo-600 hover:text-indigo-700 underline">Terminkalender</Link> entsprechend zu sperren. Wenn du <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-700 underline">Online-Buchung</Link> nutzt, solltest du die Tage, an denen du weg bist, blockieren – dann bucht niemand in deine Abwesenheit.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Eine kurze Nachricht an bestehende Kundinnen mit Terminen in der Zeit („Vom … bis … habe ich geschlossen, dein Termin ist danach“) oder ein Hinweis auf der Website und bei Google (Öffnungszeiten anpassen) verhindert Missverständnisse. Wer eine Vertretung hat – z.B. eine Kollegin, die in deinem Studio arbeitet – kann in der Software oft einen zweiten Nutzer anlegen. Dann sieht die Vertretung die Termine und kann sie übernehmen, ohne dass du alles per Hand weitergibst.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Rückkehr gut vorbereiten</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Ein paar Tage vor Ende des Urlaubs den Kalender wieder öffnen, damit schon neue Termine reinkommen können. Und: <Link href="/nachrichtenautomatisierung" className="text-indigo-600 hover:text-indigo-700 underline">Erinnerungen</Link> aktiv lassen oder rechtzeitig wieder einschalten, damit niemand den ersten Termin nach der Pause vergisst.
                        </p>
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Kalender und Buchungslink im Griff</h3>
                            <p className="mb-6 text-indigo-100">
                                Mit Treatflow blockierst du Urlaubstage, behältst den Überblick und kannst bei Bedarf mit mehreren Nutzern arbeiten.
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
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/urlaub-vertretung-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/urlaub-vertretung-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/urlaub-vertretung-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
