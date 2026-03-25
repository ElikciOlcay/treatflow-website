import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
    title: 'SMS-Erinnerungen für Termine im Studio',
    description: 'E-Mail oder SMS? Warum viele Kundinnen Erinnerungen per SMS eher lesen und was du bei der Formulierung beachten solltest.',
    keywords: ['SMS Erinnerung Kosmetikstudio', 'Terminerinnerung SMS', 'SMS Termin Beauty', 'Erinnerung Termin Studio', 'No-Show reduzieren SMS'],
    authors: [{ name: 'Treatflow Team' }],
    alternates: { canonical: 'https://www.treatflow.io/blog/sms-erinnerungen-termine-kosmetikstudio' },
    openGraph: {
        title: 'SMS-Erinnerungen für Termine: Warum sie im Studio ankommen',
        description: 'Warum viele Kundinnen Erinnerungen per SMS eher lesen – und was du beachten solltest.',
        url: 'https://www.treatflow.io/blog/sms-erinnerungen-termine-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [{ url: '/images/blog/sms-erinnerungen-termine.jpg', width: 1200, height: 630, alt: 'SMS Erinnerung Termin Kosmetikstudio' }],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2024-11-18T09:00:00.000Z',
        section: 'Automatisierung',
    },
    twitter: { card: 'summary_large_image', images: ['/images/blog/sms-erinnerungen-termine.jpg'] },
};

export default function BlogPost() {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": "SMS-Erinnerungen für Termine: Warum sie im Studio ankommen",
        "description": "Warum viele Kundinnen Erinnerungen per SMS eher lesen – und was du beachten solltest.",
        "image": "https://www.treatflow.io/images/blog/sms-erinnerungen-termine.jpg",
        "author": { "@type": "Organization", "name": "Treatflow Team", "url": "https://www.treatflow.io/ueber-uns" },
        "publisher": { "@type": "Organization", "name": "Treatflow", "logo": { "@type": "ImageObject", "url": "https://www.treatflow.io/images/logos/treatflow-logo.svg" } },
        "datePublished": "2024-11-18T09:00:00.000Z",
        "dateModified": "2024-11-18T09:00:00.000Z",
        "mainEntityOfPage": { "@type": "WebPage", "@id": "https://www.treatflow.io/blog/sms-erinnerungen-termine-kosmetikstudio" },
        "articleSection": "Automatisierung",
        "wordCount": 980,
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
                            <span className="bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium">Automatisierung</span>
                            <div className="flex items-center text-gray-500"><Calendar className="h-4 w-4 mr-2" />18. November 2024</div>
                            <div className="flex items-center text-gray-500"><Clock className="h-4 w-4 mr-2" />4 min Lesezeit</div>
                        </div>
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            SMS-Erinnerungen für Termine: Warum sie im Studio ankommen
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed">
                            E-Mails gehen unter, SMS werden gelesen. Warum Erinnerungen per Kurznachricht oft besser funktionieren – und wie du sie einsetzt.
                        </p>
                    </div>
                    <div className="mb-12">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <Image src="/images/blog/sms-erinnerungen-termine.jpg" alt="SMS-Erinnerung für Kosmetiktermin" fill className="object-cover" sizes="(max-width: 768px) 100vw, 100vw" />
                        </div>
                    </div>
                    <div className="prose prose-lg max-w-none">
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Der Posteingang ist voll, Newsletter landen im Spam – bei vielen kommt eine E-Mail-Erinnerung nie an oder wird übersehen. Eine SMS dagegen wird fast immer geöffnet. Kurz, direkt, auf dem Handy, das die meisten ohnehin dabeihaben. Für Terminerinnerungen ist das ideal: Datum, Uhrzeit, Ort, vielleicht ein Satz zum Absagen. Mehr braucht es nicht.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Der richtige Zeitpunkt: ein bis zwei Tage vor dem Termin. Zu früh vergisst man es wieder, zu spät kann jemand nicht mehr sinnvoll absagen oder umbuchen. Viele Studios schicken zusätzlich eine Bestätigung direkt nach der <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-700 underline">Online-Buchung</Link> – dann weiß die Kundin sofort, dass der Termin drin ist, und die Erinnerung kurz vorher ist nur noch der zweite Anstupser.
                        </p>
                        <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-10">Tonalität: freundlich, nicht fordernd</h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            „Wir erinnern dich an deinen Termin am … um … Uhr. Bei Verhinderung bitte rechtzeitig absagen.“ So in der Art reicht. Kein Druck, keine langen Texte. Wer will, kann den Namen der Kundin oder der Behandlung einbauen – wirkt persönlicher, ist aber kein Muss. Wichtig: Dein Studio-Name oder eine kurze Kennung, damit klar ist, von wem die Nachricht kommt.
                        </p>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Wenn die Erinnerung über eine <Link href="/nachrichtenautomatisierung" className="text-indigo-600 hover:text-indigo-700 underline">Nachrichtenautomatisierung</Link> rausgeht, sparst du dir das manuelle Schreiben und vergisst niemanden. Die meisten Anbieter mit <Link href="/terminkalender" className="text-indigo-600 hover:text-indigo-700 underline">digitalem Terminkalender</Link> bieten SMS und E-Mail – du kannst beides nutzen oder nur SMS. Probier aus, was bei deiner Klientel besser ankommt.
                        </p>
                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">Erinnerungen automatisch mit Treatflow</h3>
                            <p className="mb-6 text-indigo-100">
                                Terminerinnerungen per SMS und E-Mail – einstellbar, automatisch, ohne dass du dran denken musst.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="https://app.treatflow.io/auth/register" target="_blank" className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                                    Kostenlos testen <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                                <Link href="/sms-erinnerungen-kosmetikstudio" className="inline-flex items-center border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors">Mehr erfahren</Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div><h3 className="text-lg font-semibold text-gray-900 mb-2">War dieser Artikel hilfreich?</h3><p className="text-gray-600">Teile ihn mit anderen Kosmetikerinnen!</p></div>
                            <div className="flex flex-wrap gap-3">
                                <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent('https://www.treatflow.io/blog/sms-erinnerungen-termine-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 text-sm"><Share2 className="mr-2 h-4 w-4" />Twitter</a>
                                <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent('https://www.treatflow.io/blog/sms-erinnerungen-termine-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-800 text-sm"><Share2 className="mr-2 h-4 w-4" />LinkedIn</a>
                                <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent('https://www.treatflow.io/blog/sms-erinnerungen-termine-kosmetikstudio')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm"><Share2 className="mr-2 h-4 w-4" />Facebook</a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Footer />
        </div>
    );
}
