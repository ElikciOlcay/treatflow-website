import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Share2, Home } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Behandlungsraum einrichten: Worauf es ankommt',
    description: 'Licht, Stauraum, Hygiene – wie du deinen Behandlungsraum so gestaltest, dass du gut arbeitest und Kundinnen sich wohlfühlen.',
    keywords: ['Behandlungsraum einrichten', 'Kosmetikstudio Raum', 'Beauty Studio Gestaltung', 'Behandlungszimmer', 'Kosmetik Praxis einrichten'],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/behandlungsraum-einrichten-kosmetikstudio' },
    openGraph: {
        title: 'Behandlungsraum einrichten: Worauf es ankommt',
        description: 'Licht, Stauraum, Hygiene – so gestaltest du den Raum für dich und deine Kundinnen.',
        url: 'https://www.treatflow.io/blog/behandlungsraum-einrichten-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/behandlungsraum-einrichten.jpg', width: 1200, height: 630, alt: 'Behandlungsraum Kosmetikstudio einrichten' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-12-05T10:00:00.000Z',
        section: 'Fachkompetenz',
    },
    twitter: { card: 'summary_large_image', images: ['/images/blog/behandlungsraum-einrichten.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Behandlungsraum einrichten: Worauf es ankommt",
        "description": "Licht, Stauraum, Hygiene – so gestaltest du den Raum für dich und deine Kundinnen.",
        "image": "https://www.treatflow.io/images/blog/behandlungsraum-einrichten.jpg",
        "author": { "@type": "Person", "name": "Olcay Elikci", "url": "https://www.treatflow.io/ueber-uns", "jobTitle": "Gründer von Treatflow", "worksFor": { "@type": "Organization", "name": "Treatflow" } },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2024-12-05T10:00:00.000Z",
        "dateModified": "2024-12-05T10:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/behandlungsraum-einrichten-kosmetikstudio" },
        "articleSection": "Fachkompetenz",
        "wordCount": 950,
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
                    { label: 'Behandlungsraum einrichten: Worauf es ankommt' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Behandlungsraum einrichten: Worauf es ankommt' },
            ]} />
            <article className="pt-6 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-medium">Fachkompetenz</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />5. Dezember 2024</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />4 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Behandlungsraum einrichten: Worauf es ankommt
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Der Raum, in dem du arbeitest, soll funktionieren – und gleichzeitig Ruhe ausstrahlen. Ein paar Punkte, die oft vergessen werden.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/behandlungsraum-einrichten.jpg" alt="Behandlungsraum im Kosmetikstudio einrichten" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Ein Behandlungsraum muss zwei Ansprüchen genügen: Du brauchst alles griffbereit, ohne dass es unruhig wirkt. Und die Kundin soll sich sicher und willkommen fühlen. Das fängt beim Licht an – Tageslicht oder Licht, das Hauttöne natürlich wiedergibt, ist für die Beratung und für Behandlungen entscheidend. Zu grell oder zu gelb verfälscht alles.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Stauraum wird oft unterschätzt. Produkte, Geräte, Handtücher – wenn alles seinen Platz hat, wirkt der Raum aufgeräumt und du verlierst keine Zeit mit Suchen. Ein kleiner Tisch oder Rollwagen neben der Liege, Schubladen oder Regale mit klarer Ordnung reichen oft. Wichtig: Hygiene im Blick. Oberflächen leicht zu reinigen, Spritzen und Einwegmaterialien sicher lagern, Hände waschen und desinfizieren – das sollte von der Einrichtung her unterstützt werden. Auch eine <Link href="/behandlungsdokumentation" className="text-indigo-600 hover:text-indigo-700 underline">digitale Behandlungsdokumentation</Link> gehört zum professionellen Arbeiten, damit du alles direkt im Raum festhalten kannst.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Wo die Kundin liegt und sitzt</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die Liege sollte stabil sein und für verschiedene Behandlungen gut einstellbar. Ein Sichtschutz oder ein dezenter Raumteiler gibt Privatsphäre, wenn jemand sich umzieht. Und: Ein Platz für Taschen oder Kleidung, damit nichts auf dem Boden liegt. Eine <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:text-indigo-700 underline">gute Studiosoftware</Link> hilft dir, neben dem Raum auch Termine und Kundinnen im Griff zu behalten. Kleinigkeiten – aber sie machen den Unterschied zwischen „geht so“ und „hier bin ich gerne“.
                        </p>
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Alles im Studio organisiert</h3>
                            <p className="mb-6 text-indigo-100">
                                Termine, Kunden, <Link href="/formulare" className="text-indigo-600 hover:text-indigo-700 underline">Formulare</Link> und Dokumentation an einem Ort – mehr Zeit für den Raum und die Behandlung.
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
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/behandlungsraum-einrichten-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/behandlungsraum-einrichten-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/behandlungsraum-einrichten-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
