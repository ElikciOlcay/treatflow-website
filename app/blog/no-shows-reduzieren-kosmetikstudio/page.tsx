import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Bell, CheckCircle } from 'lucide-react';

export const metadata: Metadata = {
    title: 'No-Shows im Kosmetikstudio reduzieren',
    description: 'Leere Stühle nerven. Mit Erinnerungen, Buchungsbestätigung und ein paar Kniffen senkst du verpasste Termine spürbar – ohne Aufwand.',
    keywords: ['No-Show Kosmetikstudio', 'Terminerinnerung', 'SMS Erinnerung Beauty', 'Absagequote senken', 'Kosmetik Termin'],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/no-shows-reduzieren-kosmetikstudio' },
    openGraph: {
        title: 'No-Shows im Kosmetikstudio reduzieren: Was wirklich hilft',
        description: 'Mit Erinnerungen und der richtigen Abläufe senkst du verpasste Termine spürbar.',
        url: 'https://www.treatflow.io/blog/no-shows-reduzieren-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/no-shows-reduzieren.jpg', width: 1200, height: 630, alt: 'No-Shows reduzieren Kosmetikstudio' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2025-01-08T10:00:00.000Z',
        section: 'Automatisierung',
    },
    twitter: { card: 'summary_large_image', title: 'No-Shows im Kosmetikstudio reduzieren', description: 'Was wirklich hilft – Erinnerungen, Bestätigung, Abläufe.', images: ['/images/blog/no-shows-reduzieren.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "No-Shows im Kosmetikstudio reduzieren: Was wirklich hilft",
        "description": "Mit Erinnerungen, Buchungsbestätigung und klaren Abläufen senkst du verpasste Termine spürbar.",
        "image": "https://www.treatflow.io/images/blog/no-shows-reduzieren.jpg",
        "author": { "@type": "Person", "name": "Olcay Elikci", "url": "https://www.treatflow.io/ueber-uns", "jobTitle": "Gründer von Treatflow", "worksFor": { "@type": "Organization", "name": "Treatflow" } },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2025-01-08T10:00:00.000Z",
        "dateModified": "2025-01-08T10:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/no-shows-reduzieren-kosmetikstudio" },
        "articleSection": "Automatisierung",
        "wordCount": 1400,
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
                            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">Automatisierung</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />8. Januar 2025</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />6 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            No-Shows im Kosmetikstudio reduzieren: Was wirklich hilft
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            Leere Stühle nerven. Mit Erinnerungen, Buchungsbestätigung und ein paar Kniffen senkst du verpasste Termine spürbar – ohne großen Aufwand.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/no-shows-reduzieren.jpg" alt="Terminerinnerung per SMS reduziert No-Shows" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Du kennst das: Um 10 Uhr steht eine Kundin auf dem Plan, um 10:05 ist klar – sie kommt nicht. Keine Absage, nichts. Der Slot ist futsch, und wenn du Pech hast, hast du andere Anfragen abgelehnt. So etwas passiert in vielen Studios mehrmals pro Woche.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die gute Nachricht: Du kannst etwas dagegen tun. Nicht mit Moralpredigten, sondern mit Abläufen, die automatisch laufen. Die meisten No-Shows entstehen, weil Kundinnen den Termin schlicht vergessen oder falsch im Kalender haben. Genau da setzen Erinnerungen an.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Erinnerungen – der größte Hebel</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Studios, die eine <Link href="/nachrichtenautomatisierung" className="text-indigo-600 hover:text-indigo-700 underline">automatische Erinnerung</Link> (z.B. 24 Stunden vorher per SMS oder E-Mail) schicken, berichten oft von deutlich weniger unentschuldigten Ausfällen. Die Zahlen variieren, aber Reduktionen um 40 bis 80 Prozent sind keine Seltenheit. Der Grund ist simpel: Die Kundin wird nochmal an den Termin erinnert und kann rechtzeitig absagen oder den Termin verschieben.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wichtig: Nicht nur einmal erinnern. Eine Bestätigung direkt nach der Buchung („Dein Termin am … ist reserviert“) und eine Erinnerung ein bis zwei Tage vorher bringen am meisten. So bleibt der Termin präsent und du wirkst professionell.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Klare Absage-Regel</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            In der Erinnerung solltest du auch sagen, wie man absagt: z.B. „Bei Verhinderung bitte bis 24 h vorher absagen.“ Das schafft Klarheit und gibt dir die Chance, den Slot nachzuvergeben. Manche Studios bauen eine kurze Erwähnung in die Buchungsbestätigung ein („Bei No-Show behalten wir uns vor …“). Das ist rechtlich ein eigenes Thema – aber eine freundliche, klare Absage-Regel hilft oft schon.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Was du sofort umsetzen kannst</h2>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
                            <li><Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-700 underline">Buchungsbestätigung</Link> direkt nach der Buchung (E-Mail oder SMS)</li>
                            <li>Eine Erinnerung 24–48 Stunden vor dem Termin</li>
                            <li>In beiden Nachrichten: Datum, Uhrzeit, Ort und kurze Absage-Hinweise</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wenn du das noch manuell machst, wird es schnell vergessen oder weggelassen. Mit einem <Link href="/terminkalender" className="text-indigo-600 hover:text-indigo-700 underline">digitalen Terminkalender</Link>, der Erinnerungen und Bestätigungen automatisch verschickt, bleibt es dauerhaft dabei – und du gewinnst Zeit.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Weniger No-Shows mit Treatflow</h3>
                            <p className="mb-6 text-indigo-100">
                                Automatische Terminerinnerungen und Buchungsbestätigungen per SMS und E-Mail – einrichten und laufen lassen.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://app.treatflow.io/auth/register" target="_blank" className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/nachrichtenautomatisierung" className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">Mehr erfahren</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Artikel hilfreich?</h3>
                                <p className="text-gray-600">Teile ihn mit anderen Kosmetikerinnen!</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/no-shows-reduzieren-kosmetikstudio')}&text=${encodeURIComponent('No-Shows im Kosmetikstudio reduzieren – Treatflow Blog')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/no-shows-reduzieren-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/no-shows-reduzieren-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
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
                            { href: '/sms-erinnerungen-kosmetikstudio', title: 'SMS-Erinnerungen', desc: 'Weniger No-Shows durch automatische SMS' },
                            { href: '/online-terminbuchung-kosmetikstudio', title: 'Online-Terminbuchung', desc: 'Kunden buchen 24/7 online' },
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
