import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, Share2, FileText } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';

export const metadata: Metadata = {
    title: 'Digitale Anamnese im Kosmetikstudio',
    description: 'Anamnese und Einwilligung digital statt auf Papier. Was du beachten musst, damit es rechtssicher ist und im Alltag funktioniert.',
    keywords: ['Anamnese digital Kosmetik', 'Anamnesebogen digital', 'Einwilligung Kosmetik', 'Formular Software Beauty', 'Rechtssicher Anamnese'],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/anamnese-formulare-digital-kosmetik' },
    openGraph: {
        title: 'Digitale Anamnese-Formulare im Kosmetikstudio',
        description: 'Anamnese und Einwilligung digital – was du beachten musst.',
        url: 'https://www.treatflow.io/blog/anamnese-formulare-digital-kosmetik',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/anamnese-digital.jpg', width: 1200, height: 630, alt: 'Anamnese digital Kosmetikstudio' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2025-01-05T09:00:00.000Z',
        section: 'Recht & Compliance',
    },
    twitter: { card: 'summary_large_image', images: ['/images/blog/anamnese-digital.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "Anamnese digital: Formulare im Kosmetikstudio rechtssicher nutzen",
        "description": "Anamnese und Einwilligung digital – was du beachten musst, damit es rechtssicher ist.",
        "image": "https://www.treatflow.io/images/blog/anamnese-digital.jpg",
        "author": { "@type": "Person", "name": "Olcay Elikci", "url": "https://www.treatflow.io/ueber-uns", "jobTitle": "Gründer von Treatflow", "worksFor": { "@type": "Organization", "name": "Treatflow" } },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2025-01-05T09:00:00.000Z",
        "dateModified": "2025-01-05T09:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/anamnese-formulare-digital-kosmetik" },
        "articleSection": "Recht & Compliance",
        "wordCount": 1200,
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
                    { label: 'Digitale Anamnese im Kosmetikstudio' },
                ])) }}
            />
            <Breadcrumbs items={[
                { label: 'Blog', href: '/blog' },
                { label: 'Digitale Anamnese im Kosmetikstudio' },
            ]} />
            <article className="pt-6 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-slate-100 text-slate-700 px-4 py-2 rounded-full text-sm font-medium">Recht & Compliance</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />5. Januar 2025</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />5 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            Anamnese digital: Formulare im Kosmetikstudio rechtssicher nutzen
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Immer mehr Studios stellen von Papier auf digitale Anamnese und Einwilligungen um. Was du dabei beachten solltest – und warum es den Alltag erleichtert.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/anamnese-digital.jpg" alt="Digitale Anamnese am Tablet im Kosmetikstudio" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Stapel mit ausgefüllten Anamnesebögen, unscharfe Unterschriften, und die Suche nach „der Kundin von letzte Woche“ – wer noch mit Papier arbeitet, kennt das. Digital geht das schneller: <Link href="/formulare" className="text-indigo-600 hover:text-indigo-700 font-medium">Digitale Formulare für Kosmetikstudios</Link> werden am Tablet oder vor dem Termin per Link ausgefüllt, gespeichert und der Kundin zugeordnet. Kein Abheften, kein Verlegen.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Rechtlich gelten für digitale Anamnese und Einwilligung dieselben Anforderungen wie auf Papier: Der Inhalt muss stimmen, die Kundin muss verstehen, worin sie einwilligt, und du musst den Nachweis aufbewahren. Entscheidend ist, dass du eine Lösung nutzt, die Daten sicher speichert (z.B. in der EU), Änderungen protokolliert und dir erlaubt, die Unterlagen bei Bedarf nachzuweisen. DSGVO-konform sollte selbstverständlich sein.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Was du bei digitalen Formularen beachten solltest</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die Formulare selbst sollten fachlich korrekt sein – also alle relevanten Fragen und Aufklärungsinhalte enthalten. Bei Behandlungen mit Geräten (z.B. Laser, IPL) kommen oft <Link href="/nisv-dokumentation" className="text-indigo-600 hover:text-indigo-700 underline">NiSV-relevante Punkte</Link> dazu. Hier lohnt sich die Nutzung von Vorlagen oder einem Anbieter, der rechtssichere Vorlagen anbietet. Eigenes „Zusammenschreiben“ ohne juristische Prüfung kann Lücken haben.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Praktisch wichtig: Die Kundin sollte das Formular vor der Behandlung ausfüllen können – entweder vor Ort am Gerät oder per Link vor dem Termin. So bleibt Zeit zum Lesen, und du hast die Unterlage schon, bevor du startest.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Vorteile im Alltag</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Weniger Papier, weniger Ablage, alles einer Kundin zugeordnet und bei Bedarf schnell auffindbar. Bei Nachfragen oder bei der Dokumentation für NiSV hast du alles an einem Ort. Viele Studios, die auf eine <Link href="/kosmetikstudio-software" className="text-indigo-600 hover:text-indigo-700 underline">moderne Studiosoftware</Link> umgestellt haben, wollen den Papierstapel nicht mehr zurück.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Formulare und Anamnese mit Treatflow</h3>
                            <p className="mb-6 text-indigo-100">
                                Vorlagen für Anamnese und Einwilligung, digital ausfüllbar und der Kundin zugeordnet. NiSV-konform wo nötig.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://app.treatflow.io/auth/register" target="_blank" className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/formulare" className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">Mehr erfahren</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div><h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Artikel hilfreich?</h3><p className="text-gray-600">Teile ihn mit anderen Kosmetikerinnen!</p></div>
                            <div className="flex flex-wrap gap-3">
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/anamnese-formulare-digital-kosmetik')}&text=${encodeURIComponent('Anamnese digital im Kosmetikstudio – Treatflow Blog')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/anamnese-formulare-digital-kosmetik')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/anamnese-formulare-digital-kosmetik')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
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
                            { href: '/digitale-anamnese-kosmetikstudio', title: 'Digitale Anamnese Kosmetikstudio', desc: 'Kunden füllen vorab per Link aus' },
                            { href: '/anamnesebogen-kosmetikstudio', title: 'Anamnesebogen Kosmetikstudio', desc: 'Professionelle Vorlagen für alle Behandlungen' },
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
