import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Share2, MapPin } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Google Business Profil für Kosmetikstudios',
    description: 'Mit einem gepflegten Google-Profil findest du leichter neue Kundinnen. So richtest du es ein und nutzt es im Alltag.',
    keywords: ['Google Business Kosmetikstudio', 'Google Mein Unternehmen', 'Lokale Suche Beauty', 'Kosmetikstudio finden', 'Google Bewertungen'],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/google-business-profil-kosmetikstudio' },
    openGraph: {
        title: 'Google Business Profil für Kosmetikstudios: Sichtbar werden',
        description: 'Mit einem gepflegten Google-Profil findest du leichter neue Kundinnen.',
        url: 'https://www.treatflow.io/blog/google-business-profil-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/google-business-kosmetik.jpg', width: 1200, height: 630, alt: 'Google Business Profil Kosmetikstudio' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-12-28T11:00:00.000Z',
        section: 'Marketing',
    },
    twitter: { card: 'summary_large_image', images: ['/images/blog/google-business-kosmetik.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Google Business Profil für Kosmetikstudios: Sichtbar werden",
        "description": "Mit einem gepflegten Google-Profil findest du leichter neue Kundinnen.",
        "image": "https://www.treatflow.io/images/blog/google-business-kosmetik.jpg",
        "author": { "@type": "Person", "name": "Olcay Elikci", "url": "https://www.treatflow.io/ueber-uns", "jobTitle": "Gründer von Treatflow", "worksFor": { "@type": "Organization", "name": "Treatflow" } },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2024-12-28T11:00:00.000Z",
        "dateModified": "2024-12-28T11:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/google-business-profil-kosmetikstudio" },
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
                    { label: 'Google Business Profil für Kosmetikstudios' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Google Business Profil für Kosmetikstudios' },
            ]} />
            <article className="pt-6 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-pink-100 text-pink-700 px-4 py-2 rounded-full text-sm font-medium">Marketing</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />28. Dezember 2024</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />5 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Google Business Profil für Kosmetikstudios: Sichtbar werden
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            „Kosmetikstudio in der Nähe“ – wer so sucht, landet oft bei Google. Mit einem vollständigen und gepflegten Profil stehst du oben mit dabei.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/google-business-kosmetik.jpg" alt="Google Business Profil für Kosmetikstudio" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Viele Kundinnen suchen zuerst bei Google nach einem Studio in der Nähe. Öffnungszeiten, Bewertungen, Fotos und ein Link zur Buchung – all das zeigt Google in den Einträgen. Wenn dein Profil leer oder veraltet ist, springst du entweder nicht in die lokale Suche oder wirkst wenig vertrauenswürdig.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Der Einstieg ist kostenlos: Google Business Profile (früher „Google Mein Unternehmen“) anlegen, Adresse und Kategorie bestätigen, Öffnungszeiten eintragen. Wichtig: Die Kategorie genau wählen (z.B. Kosmetikstudio, Nagelstudio), damit du in den richtigen Suchen erscheinst. Danach lohnt es sich, regelmäßig Fotos zu posten – Behandlungsräume, Ergebnisse (mit Einwilligung), Team. Das wirkt lebendig und seriös.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Bewertungen und Antworten</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Bewertungen beeinflussen, wo du in der Suche landest und ob jemand auf „Anrufen“ oder „Buchungslink“ klickt. Bitte deine zufriedenen Kundinnen ruhig um eine Bewertung – z.B. per Link nach der Behandlung oder über deine <Link href="/kundenverwaltung" className="text-indigo-600 hover:text-indigo-700 underline">Kundenverwaltung</Link>. Und: Auf Bewertungen antworten. Auch auf negative. Sachlich und freundlich bleiben, bei echten Fehlern anbieten, das Gespräch zu suchen. So zeigst du, dass du zuhörst.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Buchungslink einbinden</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            In deinem Profil kannst du einen Button „Termin buchen“ oder „Website“ setzen. Wenn du <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-700 underline">Online-Buchung</Link> anbietest, den Buchungslink dort eintragen. Dann können Interessentinnen direkt vom Suchergebnis aus einen Termin buchen – ohne Umweg über die Website. Eine <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:text-indigo-700 underline">professionelle Studiosoftware</Link> hilft dir, alle Buchungskanäle zentral zu verwalten.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Buchungslink für Google und mehr</h3>
                            <p className="mb-6 text-indigo-100">
                                Mit Treatflow hast du einen festen Buchungslink für dein Google-Profil, deine Website und Social Media.
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
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/google-business-profil-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/google-business-profil-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/google-business-profil-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
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
                            { href: '/online-buchungen', title: 'Online-Terminbuchung', desc: 'Buchungslink für dein Google-Profil' },
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
