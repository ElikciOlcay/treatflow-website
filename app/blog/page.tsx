import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import BlogCategoryFilter from '../components/BlogCategoryFilter';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, TrendingUp, Users, Sparkles } from 'lucide-react';

export const metadata = {
    title: 'Kosmetikstudio Blog - Tipps & Trends für Beauty-Profis | Treatflow',
    description: 'Expertentipps für Kosmetikstudios: Kundenbindung, Praxisführung, neue Behandlungen und Business-Strategien. Von Profis für Profis.',
    keywords: ['Kosmetikstudio Blog', 'Beauty Business Tipps', 'Kundenbindung Kosmetik', 'Praxisführung Beauty', 'Kosmetik Trends', 'Studio Management'],
    alternates: {
        canonical: 'https://www.treatflow.io/blog',
    },
    openGraph: {
        title: 'Kosmetikstudio Blog - Tipps & Trends für Beauty-Profis',
        description: 'Expertentipps für erfolgreiche Kosmetikstudios. Kundenbindung, Business-Strategien und neue Behandlungstrends.',
        url: 'https://www.treatflow.io/blog',
        images: [
            {
                url: '/images/og-blog.jpg',
                width: 1200,
                height: 630,
                alt: 'Treatflow Blog für Kosmetikstudios',
            },
        ],
    },
};

const blogPosts = [
    {
        slug: 'beste-kosmetikstudio-software-2026',
        title: 'Beste Kosmetikstudio Software 2026 - Der ultimative Vergleich',
        excerpt: 'Welche Software eignet sich am besten für dein Kosmetikstudio? Wir vergleichen die besten Lösungen 2026 nach Funktionen, Preis und Bedienung.',
        category: 'Software',
        readTime: '12 min',
        publishDate: '15. März 2026',
        featured: true,
        image: '/images/blog/beste-kosmetikstudio-software-2026.jpg'
    },
    {
        slug: 'terminkalender-kosmetikstudio-effizienz',
        title: 'Effizienter Terminkalender im Kosmetikstudio: So planst du deinen Tag perfekt',
        excerpt: 'Optimiere deinen Terminkalender und steigere die Effizienz um 40%. Professionelle Tipps für bessere Terminplanung, weniger Stress und mehr Umsatz im Kosmetikstudio.',
        category: 'Organisation',
        readTime: '10 min',
        publishDate: '22. Januar 2024',
        featured: true,
        image: '/images/blog/terminkalender.png'
    },
    {
        slug: 'nachrichtenautomatisierung-kosmetikstudio',
        title: 'Nachrichtenautomatisierung für Kosmetikstudios: 80% weniger No-Shows durch automatische Erinnerungen',
        excerpt: 'Entdecke, wie automatische Terminerinnerungen, Follow-ups und Geburtstagswünsche dein Kosmetikstudio revolutionieren. Reduziere No-Shows um 80% und steigere die Kundenbindung.',
        category: 'Automatisierung',
        readTime: '8 min',
        publishDate: '20. Januar 2024',
        featured: true,
        image: '/images/blog/no-shows.png'
    },
    {
        slug: 'email-marketing-kosmetikstudios',
        title: 'Email-Marketing für Kosmetikstudios: Kunden erfolgreich zurückgewinnen',
        excerpt: 'Mit strategischem Email-Marketing holst du verlorene Kunden zurück und steigerst deinen Umsatz um bis zu 40%. So baust du eine erfolgreiche Email-Strategie auf.',
        category: 'Marketing',
        readTime: '10 min',
        publishDate: '15. Dezember 2024',
        featured: true,
        image: '/images/blog/email-marketing-kosmetikstudios.jpg'
    },
    {
        slug: 'anti-aging-trends-2024',
        title: 'Anti-Aging Trends 2024: Diese Behandlungen sind jetzt gefragt',
        excerpt: 'Von Micro-Needling bis hin zu personalisierten Peptid-Therapien - entdecke die neuesten Anti-Aging Trends, mit denen du dein Kosmetikstudio 2024 erfolgreich positionierst.',
        category: 'Fachkompetenz',
        readTime: '12 min',
        publishDate: '20. Dezember 2024',
        featured: true,
        image: '/images/blog/anti-aging-trends-2024.jpg'
    },
    {
        slug: 'hautanalyse-beratung-kosmetikstudio',
        title: 'Professionelle Hautanalyse: Der Schlüssel zu erfolgreichen Behandlungen',
        excerpt: 'Eine gründliche Hautanalyse ist die Basis jeder erfolgreichen Kosmetikbehandlung. 7-Schritte Prozess für professionelle Beratung und Kundenbindung.',
        category: 'Fachkompetenz',
        readTime: '8 min',
        publishDate: '12. Dezember 2024',
        featured: false,
        image: '/images/blog/hautanalyse-beratung.jpg'
    },
    {
        slug: 'kosmetikstudio-eroeffnen-guide',
        title: 'Kosmetikstudio eröffnen: Der ultimative Guide für 2024',
        excerpt: 'Von der ersten Idee bis zur Eröffnung: Alle Schritte, Kosten und Tipps für dein erfolgreiches Kosmetikstudio. Praxiserprobt und rechtssicher.',
        category: 'Business',
        readTime: '15 min',
        publishDate: '8. Dezember 2024',
        featured: false,
        image: '/images/blog/kosmetikstudio-eroeffnen.jpg'
    },
    {
        slug: 'kundenbindung-kosmetikstudio-5-strategien',
        title: '5 bewährte Strategien für mehr Kundenbindung im Kosmetikstudio',
        excerpt: 'Entdecke die wirksamsten Methoden, um Kundinnen langfristig zu binden und die Wiederkehrrate zu erhöhen. Von personalisierten Behandlungen bis zur digitalen Nachbetreuung.',
        category: 'Kundenbindung',
        readTime: '8 min',
        publishDate: '15. Dezember 2024',
        featured: false,
        image: '/images/blog/kundenbindung-strategien.jpg'
    },
    {
        slug: 'online-buchungssystem-vorteile',
        title: 'Warum jedes Kosmetikstudio 2024 ein Online-Buchungssystem braucht',
        excerpt: 'Online-Buchungen sind kein Luxus mehr, sondern Notwendigkeit. Erfahre, wie du 30% mehr Termine generierst und deine Kundinnen begeisterst.',
        category: 'Digitalisierung',
        readTime: '6 min',
        publishDate: '10. Dezember 2024',
        featured: false,
        image: '/images/blog/online-buchung-vorteile.jpg'
    },
    {
        slug: 'mitarbeiterfuehrung-beauty-business',
        title: 'Mitarbeiterführung im Beauty-Business: So baust du ein Traumteam auf',
        excerpt: 'Erfolgreiche Kosmetikstudios brauchen mehr als gute Behandlungen - sie brauchen motivierte Mitarbeiter. Führungsstrategien für mehr Erfolg.',
        category: 'Business',
        readTime: '10 min',
        publishDate: '3. Dezember 2024',
        featured: false,
        image: '/images/blog/mitarbeiterfuehrung.jpg'
    },
    {
        slug: 'hygiene-sicherheit-kosmetikstudio',
        title: 'Hygiene und Sicherheit im Kosmetikstudio: Rechtssicher und professionell',
        excerpt: 'Hygieneverordnungen, Desinfektionsvorschriften und Sicherheitsstandards - alles was du für einen rechtssicheren Studiobetrieb wissen musst.',
        category: 'Recht & Compliance',
        readTime: '12 min',
        publishDate: '28. November 2024',
        featured: false,
        image: '/images/blog/hygiene-sicherheit.jpg'
    },
    {
        slug: 'saisonales-marketing-beauty-studios',
        title: 'Saisonales Marketing für Beauty-Studios: Das ganze Jahr über erfolgreich',
        excerpt: 'Nutze die Kraft der Jahreszeiten für dein Marketing! Von Frühjahrskuren bis Winterpflege - so planst du saisonale Kampagnen.',
        category: 'Marketing',
        readTime: '11 min',
        publishDate: '25. November 2024',
        featured: false,
        image: '/images/blog/saisonales-marketing.jpg'
    },
    {
        slug: 'behandlungsdokumentation-nisv-konform',
        title: 'NiSV-konforme Behandlungsdokumentation: Was du wissen musst',
        excerpt: 'Seit der NiSV-Verordnung ist professionelle Dokumentation Pflicht. So dokumentierst du rechtssicher und effizient - ohne Mehraufwand.',
        category: 'Recht & Compliance',
        readTime: '10 min',
        publishDate: '5. Dezember 2024',
        featured: false,
        image: '/images/blog/nisv-dokumentation.jpg'
    },
    {
        slug: 'zusatzumsatz-kosmetikstudio-produkte',
        title: 'Zusatzumsatz generieren: Der ultimative Guide für Produktverkäufe',
        excerpt: 'Bis zu 40% mehr Umsatz durch cleveren Produktverkauf. Welche Produkte funktionieren und wie du sie erfolgreich verkaufst.',
        category: 'Business',
        readTime: '12 min',
        publishDate: '28. November 2024',
        featured: false,
        image: '/images/blog/produktverkauf-guide.jpg'
    },
    {
        slug: 'social-media-marketing-kosmetikstudio',
        title: 'Social Media Marketing für Kosmetikstudios: Instagram & TikTok Strategien',
        excerpt: 'Gewinne neue Kundinnen über Social Media. Bewährte Content-Strategien, die wirklich funktionieren - auch mit wenig Zeit.',
        category: 'Marketing',
        readTime: '9 min',
        publishDate: '20. November 2024',
        featured: false,
        image: '/images/blog/social-media-marketing.jpg'
    },
    {
        slug: 'preisgestaltung-kosmetikbehandlungen',
        title: 'Preisgestaltung im Kosmetikstudio: Was deine Behandlungen wirklich wert sind',
        excerpt: 'Viele Studios verkaufen sich unter Wert. So kalkulierst du deine Preise richtig und kommunizierst den Wert deiner Arbeit.',
        category: 'Business',
        readTime: '7 min',
        publishDate: '15. November 2024',
        featured: false,
        image: '/images/blog/preisgestaltung-guide.jpg'
    },
    {
        slug: 'kosmetikstudio-buchhaltung-steuern',
        title: 'Kosmetikstudio Buchhaltung: Was du steuerlich absetzen kannst',
        excerpt: 'Spare bis zu 40% Steuern mit der richtigen Buchhaltung. Alle Ausgaben, die du als Kosmetikstudio-Betreiberin absetzen kannst - plus praktische Tipps für den Alltag.',
        category: 'Business',
        readTime: '13 min',
        publishDate: '18. Dezember 2024',
        featured: false,
        image: '/images/blog/kosmetikstudio-buchhaltung.jpg'
    },
    {
        slug: 'ki-kosmetikstudio-hautanalyse',
        title: 'KI im Kosmetikstudio: Hautanalyse der Zukunft',
        excerpt: 'Künstliche Intelligenz revolutioniert die Hautanalyse. Erfahre, wie KI-gestützte Tools dein Studio professioneller machen und Kunden begeistern - ohne Technik-Stress.',
        category: 'Digitalisierung',
        readTime: '11 min',
        publishDate: '22. Dezember 2024',
        featured: false,
        image: '/images/blog/ki-kosmetikstudio-hautanalyse.jpg'
    },
    {
        slug: 'no-shows-reduzieren-kosmetikstudio',
        title: 'No-Shows im Kosmetikstudio reduzieren: Was wirklich hilft',
        excerpt: 'Leere Stühle nerven. Mit Erinnerungen, Buchungsbestätigung und ein paar Kniffen senkst du verpasste Termine spürbar – ohne großen Aufwand.',
        category: 'Automatisierung',
        readTime: '6 min',
        publishDate: '8. Januar 2025',
        featured: false,
        image: '/images/blog/no-shows-reduzieren.jpg'
    },
    {
        slug: 'anamnese-formulare-digital-kosmetik',
        title: 'Anamnese digital: Formulare im Kosmetikstudio rechtssicher nutzen',
        excerpt: 'Anamnese und Einwilligung digital statt auf Papier. Was du beachten musst, damit es rechtssicher ist und im Alltag funktioniert.',
        category: 'Recht & Compliance',
        readTime: '5 min',
        publishDate: '5. Januar 2025',
        featured: false,
        image: '/images/blog/anamnese-digital.jpg'
    },
    {
        slug: 'google-business-profil-kosmetikstudio',
        title: 'Google Business Profil für Kosmetikstudios: Sichtbar werden',
        excerpt: 'Mit einem gepflegten Google-Profil findest du leichter neue Kundinnen. So richtest du es ein und nutzt es im Alltag.',
        category: 'Marketing',
        readTime: '5 min',
        publishDate: '28. Dezember 2024',
        featured: false,
        image: '/images/blog/google-business-kosmetik.jpg'
    },
    {
        slug: 'wochenplanung-termine-kosmetikstudio',
        title: 'Wochenplanung im Kosmetikstudio: Termine im Griff',
        excerpt: 'Wie du deine Woche so planst, dass du genug Termine hast, aber nicht im Dauerstress. Praktische Tipps aus dem Studio-Alltag.',
        category: 'Organisation',
        readTime: '4 min',
        publishDate: '20. Dezember 2024',
        featured: false,
        image: '/images/blog/wochenplanung-termine.jpg'
    },
    {
        slug: 'dsgvo-datenschutz-kosmetikstudio',
        title: 'DSGVO im Kosmetikstudio: Datenschutz ohne Panik',
        excerpt: 'Kundendaten, Fotos, Anamnese – was du speichern darfst, was du brauchst und wie du DSGVO-konform bleibst.',
        category: 'Recht & Compliance',
        readTime: '6 min',
        publishDate: '14. Dezember 2024',
        featured: false,
        image: '/images/blog/dsgvo-kosmetikstudio.jpg'
    },
    {
        slug: 'erste-kundinnen-gewinnen-kosmetikstudio',
        title: 'Erste Kundinnen gewinnen: Tipps für neue Kosmetikstudios',
        excerpt: 'Neu eröffnet und noch wenig gebucht? So kommst du zu den ersten Terminen – ohne teures Marketing.',
        category: 'Marketing',
        readTime: '5 min',
        publishDate: '10. Dezember 2024',
        featured: false,
        image: '/images/blog/erste-kundinnen-gewinnen.jpg'
    },
    {
        slug: 'behandlungsraum-einrichten-kosmetikstudio',
        title: 'Behandlungsraum einrichten: Worauf es ankommt',
        excerpt: 'Licht, Stauraum, Hygiene – wie du deinen Behandlungsraum so gestaltest, dass du gut arbeitest und Kundinnen sich wohlfühlen.',
        category: 'Fachkompetenz',
        readTime: '4 min',
        publishDate: '5. Dezember 2024',
        featured: false,
        image: '/images/blog/behandlungsraum-einrichten.jpg'
    },
    {
        slug: 'lash-wimpern-kundenbindung',
        title: 'Lash-Kundinnen binden: Wimpernverlängerung und Wiederkehr',
        excerpt: 'Refill-Intervalle, Erinnerungen und persönliche Notizen – so behältst du deine Lash-Kundinnen und füllst den Kalender.',
        category: 'Kundenbindung',
        readTime: '5 min',
        publishDate: '28. November 2024',
        featured: false,
        image: '/images/blog/lash-kundenbindung.jpg'
    },
    {
        slug: 'urlaub-vertretung-kosmetikstudio',
        title: 'Urlaub und Vertretung im Kosmetikstudio: So planst du durch',
        excerpt: 'Wer vertritt dich, wer übernimmt Termine, und wie bleiben Kundinnen informiert? Tipps für entspannte Auszeiten.',
        category: 'Business',
        readTime: '4 min',
        publishDate: '22. November 2024',
        featured: false,
        image: '/images/blog/urlaub-vertretung-studio.jpg'
    },
    {
        slug: 'sms-erinnerungen-termine-kosmetikstudio',
        title: 'SMS-Erinnerungen für Termine: Warum sie im Studio ankommen',
        excerpt: 'E-Mail oder SMS? Warum viele Kundinnen Erinnerungen per SMS eher lesen und was du bei der Formulierung beachten solltest.',
        category: 'Automatisierung',
        readTime: '4 min',
        publishDate: '18. November 2024',
        featured: false,
        image: '/images/blog/sms-erinnerungen-termine.jpg'
    }
];

const categories = [
    { name: 'Alle', count: 25, active: true },
    { name: 'Business', count: 7, active: false },
    { name: 'Marketing', count: 5, active: false },
    { name: 'Fachkompetenz', count: 3, active: false },
    { name: 'Recht & Compliance', count: 4, active: false },
    { name: 'Digitalisierung', count: 2, active: false },
    { name: 'Kundenbindung', count: 2, active: false },
    { name: 'Organisation', count: 2, active: false },
    { name: 'Automatisierung', count: 3, active: false }
];


export default function BlogPage() {
    const featuredPosts = blogPosts.filter(post => post.featured);
    const regularPosts = blogPosts.filter(post => !post.featured);

    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4 mr-2" />
                            Beauty Business Blog
                        </div>
                        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                            Expertentipps für <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">erfolgreiche</span> Kosmetikstudios
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Von Kundenbindung bis Digitalisierung - praktische Tipps und bewährte Strategien
                            für mehr Erfolg in deinem Beauty-Business.
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-16">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                                <TrendingUp className="h-6 w-6 text-indigo-600" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-900">Wöchentlich neue Artikel</div>
                                <div className="text-sm text-gray-600">Immer aktuell</div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                                <Users className="h-6 w-6 text-purple-600" />
                            </div>
                            <div>
                                <div className="text-lg font-semibold text-gray-900">Von Profis für Profis</div>
                                <div className="text-sm text-gray-600">Praxiserprobt</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Aktuelle Highlights
                        </h2>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Die wichtigsten Artikel für dein Beauty-Business
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {featuredPosts.map((post) => (
                            <article key={post.slug} className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-8">
                                    <div className="flex items-center gap-4 mb-4">
                                        <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                                            {post.category}
                                        </span>
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <Clock className="h-4 w-4 mr-1" />
                                            {post.readTime}
                                        </div>
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center text-gray-500 text-sm">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {post.publishDate}
                                        </div>
                                        <Link
                                            href={`/blog/${post.slug}`}
                                            className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                                        >
                                            Weiterlesen
                                            <ArrowRight className="ml-2 h-4 w-4" />
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories & Regular Posts */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <BlogCategoryFilter
                        posts={blogPosts}
                        categories={categories.map(({ name, count }) => ({ name, count }))}
                    />
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-white mb-6">
                        Verpasse keine Expertentipps
                    </h2>
                    <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                        Erhalte wöchentlich die neuesten Artikel und exklusive Tipps für dein Kosmetikstudio direkt in dein Postfach.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                        <input
                            type="email"
                            placeholder="Deine E-Mail-Adresse"
                            className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
                        />
                        <button className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center">
                            Anmelden
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </button>
                    </div>
                    <p className="text-indigo-200 text-sm mt-4">
                        Kostenlos • Jederzeit abbestellbar • Kein Spam
                    </p>
                </div>
            </section>

            <Footer />
        </div>
    );
}
