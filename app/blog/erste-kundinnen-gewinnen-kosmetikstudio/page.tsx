import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Share2, Users } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Erste Kundinnen gewinnen: Tipps für Studios',
    description: 'Neu eröffnet und noch wenig gebucht? So kommst du zu den ersten Terminen – ohne teures Marketing.',
    keywords: ['Erste Kunden Kosmetikstudio', 'Neues Studio Kunden gewinnen', 'Kosmetikstudio Start', 'Kundenakquise Beauty', 'Studio eröffnen'],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/erste-kundinnen-gewinnen-kosmetikstudio' },
    openGraph: {
        title: 'Erste Kundinnen gewinnen: Tipps für neue Kosmetikstudios',
        description: 'Neu eröffnet und noch wenig gebucht? So kommst du zu den ersten Terminen.',
        url: 'https://www.treatflow.io/blog/erste-kundinnen-gewinnen-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/erste-kundinnen-gewinnen.jpg', width: 1200, height: 630, alt: 'Erste Kundinnen gewinnen Kosmetikstudio' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-12-10T14:00:00.000Z',
        section: 'Marketing',
    },
    twitter: { card: 'summary_large_image', images: ['/images/blog/erste-kundinnen-gewinnen.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Erste Kundinnen gewinnen: Tipps für neue Kosmetikstudios",
        "description": "Neu eröffnet – so kommst du zu den ersten Terminen, ohne teures Marketing.",
        "image": "https://www.treatflow.io/images/blog/erste-kundinnen-gewinnen.jpg",
        "author": { "@type": "Person", "name": "Olcay Elikci", "url": "https://www.treatflow.io/ueber-uns", "jobTitle": "Gründer von Treatflow", "worksFor": { "@type": "Organization", "name": "Treatflow" } },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2024-12-10T14:00:00.000Z",
        "dateModified": "2024-12-10T14:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/erste-kundinnen-gewinnen-kosmetikstudio" },
        "articleSection": "Marketing",
        "wordCount": 1100,
        "timeRequired": "PT5M",
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
                    { label: 'Erste Kundinnen gewinnen: Tipps für Studios' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Erste Kundinnen gewinnen: Tipps für Studios' },
            ]} />
            <article className="pt-6 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">Marketing</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />10. Dezember 2024</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />5 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Erste Kundinnen gewinnen: Tipps für neue Kosmetikstudios
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Du hast gerade eröffnet, der Raum steht – aber der Kalender ist noch leer. So bekommst du die ersten Buchungen rein, ohne gleich viel Geld auszugeben.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/erste-kundinnen-gewinnen.jpg" alt="Erste Kundinnen für neues Kosmetikstudio gewinnen" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Am Anfang zählt jeder Termin. Nicht nur wegen des Umsatzes, sondern weil jede zufriedene Kundin weitererzählt und vielleicht wieder kommt. Deshalb lohnt es sich, von Tag eins an sichtbar zu sein und es den Leuten leicht zu machen, dich zu finden und zu buchen.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Google Business Profile anlegen und vollständig ausfüllen – Adresse, Öffnungszeiten, Fotos, eine kurze Beschreibung. Dann erscheinst du bei „Kosmetikstudio in der Nähe“. Freundinnen, Familie und ehemalige Kolleginnen bitten, dich zu empfehlen oder eine Bewertung zu schreiben. Das bringt die ersten Einträge und wirkt vertrauenswürdig.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Online buchbar von Anfang an</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wenn jemand deinen <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-700 underline">Buchungslink</Link> sieht (auf Google, Instagram oder der Website), kann sie sofort einen Termin wählen. Kein Hin und Her per Telefon oder Nachricht. Gerade für neue Studios ist das ein Plus: Du wirkst mit der richtigen <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:text-indigo-700 underline">Studiosoftware</Link> von vornherein professionell, und du verlierst keine Interessentin, weil gerade niemand ans Telefon geht.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Ein kleiner Tipp: In den ersten Wochen kannst du z.B. eine „Eröffnungsaktion“ anbieten – z.B. 10 Prozent auf die erste Behandlung. Das motiviert zum Ausprobieren. Den Gutschein oder den Hinweis kannst du in deinem Profil und in deinen Posts erwähnen. Mit <Link href="/nachrichtenautomatisierung" className="text-indigo-600 hover:text-indigo-700 underline">automatischen Nachrichten</Link> erinnerst du Neukunden außerdem an ihren nächsten Termin.
                        </p>
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Buchungslink von Tag eins</h3>
                            <p className="mb-6 text-indigo-100">
                                Mit Treatflow hast du sofort einen eigenen Buchungslink für Google, Social Media und Website.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://app.treatflow.io/auth/register" target="_blank" className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/online-buchungen" className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">Mehr erfahren</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div><h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Artikel hilfreich?</h3><p className="text-gray-600">Teile ihn mit anderen Kosmetikerinnen!</p></div>
                            <div className="flex flex-wrap gap-3">
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/erste-kundinnen-gewinnen-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/erste-kundinnen-gewinnen-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/erste-kundinnen-gewinnen-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
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
                            { href: '/online-terminbuchung-kosmetikstudio', title: 'Online-Terminbuchung', desc: 'Kunden buchen 24/7 online' },
                            { href: '/kosmetikstudio-software', title: 'Kosmetikstudio Software', desc: 'All-in-One für dein Studio' },
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
