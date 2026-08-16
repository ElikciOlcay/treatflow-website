import { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, CheckCircle, TrendingUp, MessageSquare, Shield, Heart } from 'lucide-react';
import Breadcrumbs, { generateBreadcrumbSchema } from '../../components/Breadcrumbs';
import LeadMagnetEmbed from '../../components/LeadMagnetEmbed';

export const metadata: Metadata = {
    title: 'Preiserhöhung Kosmetikstudio: Richtig kommunizieren',
    description: 'Preiserhöhung im Kosmetikstudio kommunizieren: Wann du anheben solltest, wie du Stammkundinnen mitnimmst und welche Formulierungen Vertrauen stärken statt verlieren.',
    keywords: [
        'Preiserhöhung Kosmetikstudio',
        'Preise erhöhen Kosmetikstudio',
        'Preiserhöhung kommunizieren Beauty',
        'Behandlung teurer machen',
        'Preisanpassung Kosmetik',
        'Preisgestaltung Kosmetikstudio',
    ],
    authors: [{ name: 'Olcay Elikci' }],
    alternates: {
        canonical: 'https://www.treatflow.io/blog/preiserhoehung-kosmetikstudio',
    },
    openGraph: {
        title: 'Preiserhöhung im Kosmetikstudio richtig kommunizieren',
        description: 'Wann du anheben solltest, wie du Stammkundinnen mitnimmst und welche Formulierungen Vertrauen stärken.',
        url: 'https://www.treatflow.io/blog/preiserhoehung-kosmetikstudio',
        siteName: 'Treatflow Blog',
        images: [
            {
                url: '/images/blog/preiserhoehung-kosmetikstudio.jpg',
                width: 1200,
                height: 630,
                alt: 'Preiserhöhung im Kosmetikstudio kommunizieren',
            },
        ],
        locale: 'de_DE',
        type: 'article',
        publishedTime: '2026-08-05T10:00:00.000Z',
        authors: ['Olcay Elikci'],
        section: 'Business',
        tags: ['Preiserhöhung', 'Preisgestaltung', 'Kommunikation', 'Kosmetikstudio'],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Preiserhöhung im Kosmetikstudio richtig kommunizieren',
        description: 'Wann du anheben solltest, wie du Stammkundinnen mitnimmst und welche Formulierungen Vertrauen stärken.',
        images: ['/images/blog/preiserhoehung-kosmetikstudio.jpg'],
    },
};

export default function BlogPost() {
    const structuredData = {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: 'Preiserhöhung im Kosmetikstudio: So kommunizierst du sie richtig',
        description:
            'Preiserhöhung im Kosmetikstudio kommunizieren: Wann du anheben solltest, wie du Stammkundinnen mitnimmst und welche Formulierungen Vertrauen stärken statt verlieren.',
        image: 'https://www.treatflow.io/images/blog/preiserhoehung-kosmetikstudio.jpg',
        author: {
            '@type': 'Person',
            name: 'Olcay Elikci',
            url: 'https://www.treatflow.io/ueber-uns',
            jobTitle: 'Gründer von Treatflow',
            worksFor: { '@type': 'Organization', name: 'Treatflow' },
        },
        publisher: {
            '@type': 'Organization',
            name: 'Treatflow',
            logo: {
                '@type': 'ImageObject',
                url: 'https://www.treatflow.io/images/logos/treatflow-logo.svg',
            },
        },
        datePublished: '2026-08-05T10:00:00.000Z',
        dateModified: '2026-08-05T10:00:00.000Z',
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': 'https://www.treatflow.io/blog/preiserhoehung-kosmetikstudio',
        },
        articleSection: 'Business',
        keywords: 'Preiserhöhung Kosmetikstudio, Preise erhöhen, Preisanpassung Beauty',
        wordCount: 2100,
        timeRequired: 'PT9M',
        inLanguage: 'de-DE',
        isAccessibleForFree: true,
    };

    return (
        <div className="min-h-screen bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
            />
            <Navigation />

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Blog', href: '/blog' },
                            { label: 'Preiserhöhung Kosmetikstudio kommunizieren' },
                        ])
                    ),
                }}
            />
            <Breadcrumbs
                items={[
                    { label: 'Blog', href: '/blog' },
                    { label: 'Preiserhöhung Kosmetikstudio kommunizieren' },
                ]}
            />

            <section className="pt-6 pb-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-6">
                        <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
                            Business
                        </span>
                    </div>
                    <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                        Preiserhöhung im Kosmetikstudio: So kommunizierst du sie richtig
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                        Viele Studios schieben Preisanpassungen jahrelang vor sich her – und verlieren dabei
                        Marge, Motivation und Spielraum für Qualität. Mit klarer Begründung und guter Timing
                        bleibst du fair und profitabel.
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            5. August 2026
                        </span>
                        <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            9 min Lesezeit
                        </span>
                    </div>
                </div>
            </section>

            <article className="py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-gray-50 rounded-2xl p-8 mb-12 border border-gray-100">
                            <h2 className="text-xl font-bold text-gray-900 mb-4 mt-0">Inhaltsverzeichnis</h2>
                            <nav>
                                <ol className="space-y-2 list-decimal list-inside text-indigo-600">
                                    <li>
                                        <a href="#warum" className="hover:text-indigo-800 transition-colors">
                                            Warum Preiserhöhungen normal sind
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#timing" className="hover:text-indigo-800 transition-colors">
                                            Der richtige Zeitpunkt
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#hoehe" className="hover:text-indigo-800 transition-colors">
                                            Wie stark anheben?
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#kommunizieren" className="hover:text-indigo-800 transition-colors">
                                            So kommunizierst du es
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#einwaende" className="hover:text-indigo-800 transition-colors">
                                            Einwände souverän handhaben
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#systeme" className="hover:text-indigo-800 transition-colors">
                                            Preise überall konsistent halten
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#fazit" className="hover:text-indigo-800 transition-colors">
                                            Fazit
                                        </a>
                                    </li>
                                </ol>
                            </nav>
                        </div>

                        <p className="text-gray-700 leading-relaxed text-lg">
                            Steigende Produktkosten, höhere Miete, mehr Zeitaufwand für Dokumentation und
                            Schulungen – dein Studio wird teurer, auch wenn deine Preise stehen bleiben. Eine
                            gut vorbereitete Preiserhöhung ist kein „Kunden vergraulen“, sondern das Gegenteil:
                            Du schützt Qualität und bleibst langfristig verfügbar. Wie du deine Preise grundsätzlich
                            kalkulierst, steht im Beitrag zur{' '}
                            <Link
                                href="/blog/preisgestaltung-kosmetikbehandlungen"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                Preisgestaltung für Kosmetikbehandlungen
                            </Link>
                            .
                        </p>

                        <h2 id="warum" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            1. Warum Preiserhöhungen normal sind
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-8">
                            Kundinnen erwarten keine Einfrierpreise auf Jahre. Sie erwarten Transparenz und
                            Gegenwert. Typische Treiber:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-8">
                            {[
                                {
                                    icon: TrendingUp,
                                    title: 'Kostensteigerung',
                                    desc: 'Miete, Energie, Produkte und Versicherungen steigen – deine Marge schrumpft sonst still.',
                                },
                                {
                                    icon: Shield,
                                    title: 'Mehr Aufwand',
                                    desc: 'NiSV, Anamnese und Dokumentation kosten Zeit, die im Preis stecken muss.',
                                },
                                {
                                    icon: Heart,
                                    title: 'Mehr Qualität',
                                    desc: 'Neue Geräte, bessere Produkte oder längere Beratung rechtfertigen höhere Preise.',
                                },
                                {
                                    icon: MessageSquare,
                                    title: 'Markt-Realität',
                                    desc: 'Wer dauerhaft unter Marktpreis liegt, signalisiert oft ungewollt „günstig statt gut“.',
                                },
                            ].map((item, index) => (
                                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                                            <item.icon className="h-5 w-5 text-indigo-600" />
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
                                    </div>
                                    <p className="text-gray-600 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <h2 id="timing" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            2. Der richtige Zeitpunkt
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Vermeide Erhöhungen mitten in einer laufenden Kur oder direkt vor einem Feiertagsrush,
                            bei dem du eh ausgebucht bist und keine Zeit für Gespräche hast. Besser:
                        </p>
                        <div className="bg-gray-50 rounded-2xl p-8 my-8">
                            <div className="space-y-4">
                                {[
                                    {
                                        title: 'Zum Monats- oder Quartalswechsel',
                                        desc: 'Klare Stichtage sind leichter zu merken und wirken professionell.',
                                    },
                                    {
                                        title: 'Nach einer sichtbaren Verbesserung',
                                        desc: 'Neues Gerät, längere Behandlungszeit oder bessere Produkte machen den Mehrwert greifbar.',
                                    },
                                    {
                                        title: 'Mit Vorlauf kommunizieren',
                                        desc: 'Idealerweise 2–4 Wochen vorher – Stammkundinnen fühlen sich ernst genommen.',
                                    },
                                    {
                                        title: 'Nicht mitten in einer Krise',
                                        desc: 'Wenn du gerade Personalwechsel oder Umbau hast, warte auf ruhigere Wochen.',
                                    },
                                ].map((feature, index) => (
                                    <div key={index} className="flex gap-4">
                                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                                            <p className="text-gray-600 text-sm mt-1">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <h2 id="hoehe" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            3. Wie stark anheben?
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Kleine, regelmäßige Anpassungen (z. B. 5–10 % alle 12–18 Monate) verkraften die meisten
                            Kundinnen besser als ein großer Sprung nach Jahren des Stillstands. Prüfe vorher:
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-8">
                            <li>Was verlangen vergleichbare Studios in deiner Lage?</li>
                            <li>Deckt der neue Preis Zeit, Produkt und Nachsorge wirklich ab?</li>
                            <li>Gibt es Leistungen, die du bündeln statt pauschal erhöhen kannst?</li>
                        </ul>
                        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 my-6">
                            <p className="m-0 text-amber-900">
                                <strong>Tipp:</strong> Offene Gutscheine und bereits bezahlte Pakete bleiben zum
                                alten Preis gültig – das signalisiert Fairness und verhindert Frust. Mehr zu
                                Gutscheinregeln im Beitrag{' '}
                                <Link
                                    href="/blog/gutscheine-kosmetikstudio-verkaufen"
                                    className="text-amber-800 underline hover:text-amber-950"
                                >
                                    Gutscheine verkaufen
                                </Link>
                                .
                            </p>
                        </div>

                        <h2 id="kommunizieren" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            4. So kommunizierst du es
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die Botschaft braucht drei Teile: <strong>Warum</strong>, <strong>ab wann</strong> und{' '}
                            <strong>was bleibt gleich</strong> (Qualität, Ablauf, Betreuung). Beispiel:
                        </p>
                        <blockquote className="border-l-4 border-indigo-400 bg-indigo-50/50 pl-6 py-4 my-8 text-gray-700 italic">
                            „Ab dem 1. Oktober passen wir unsere Preise leicht an. Material- und Betriebskosten
                            sind gestiegen – damit wir dir weiterhin dieselbe Qualität und genug Zeit für Beratung
                            bieten können. Bereits gebuchte Termine und offene Gutscheine bleiben zum bisherigen
                            Preis.“
                        </blockquote>
                        <div className="space-y-6 my-8">
                            {[
                                {
                                    num: '01',
                                    title: 'Persönlich bei Stammkundinnen',
                                    desc: 'Beim nächsten Termin kurz ansprechen – Vertrauen entsteht im Gespräch, nicht nur per Aushang.',
                                },
                                {
                                    num: '02',
                                    title: 'Website und Online-Buchung aktualisieren',
                                    desc: 'Alte Preise online sind der häufigste Konfliktgrund. Aktualisiere Preisliste und Buchungsseite am Stichtag.',
                                },
                                {
                                    num: '03',
                                    title: 'E-Mail oder SMS an die Liste',
                                    desc: 'Eine kurze, sachliche Info reicht – keine Entschuldigungsschleife, keine Drama-Story.',
                                },
                                {
                                    num: '04',
                                    title: 'Aushang an der Rezeption',
                                    desc: 'Für Laufkundschaft und als Referenz, falls jemand nachfragt.',
                                },
                            ].map((item, index) => (
                                <div key={index} className="flex gap-5 p-6 bg-white rounded-xl border border-gray-200">
                                    <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                                        <span className="text-indigo-600 font-bold text-sm">{item.num}</span>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                                        <p className="text-gray-600">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 id="einwaende" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            5. Einwände souverän handhaben
                        </h2>
                        <p className="text-gray-700 leading-relaxed mb-6">
                            Nicht jede Kundin wird begeistert sein – und das ist okay. Bleib ruhig, wiederhole den
                            Nutzen und biete optional Alternativen (kürzere Behandlung, anderes Produktpaket), statt
                            sofort nachzugeben. Wer dauerhaft unter Wert arbeitet, kann Qualität nicht halten.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Wenn einzelne Kundinnen abspringen, nutze die Chance zur{' '}
                            <Link
                                href="/blog/kundenbindung-kosmetikstudio-5-strategien"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                Kundenbindung
                            </Link>{' '}
                            bei denen, die bleiben – und hole inaktive später gezielt zurück.
                        </p>

                        <h2 id="systeme" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            6. Preise überall konsistent halten
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Der peinlichste Moment: Online 89 €, an der Kasse 99 €. Halte Preise in Software,
                            Website, Google Business Profil und gedruckter Liste synchron. In Treatflow pflegst du
                            Leistungen zentral – Änderungen greifen in Kalender und{' '}
                            <Link href="/online-buchungen" className="text-indigo-600 hover:text-indigo-800">
                                Online-Buchung
                            </Link>
                            . Auch dein{' '}
                            <Link
                                href="/blog/kassensystem-kosmetikstudio"
                                className="text-indigo-600 hover:text-indigo-800"
                            >
                                Kassensystem
                            </Link>{' '}
                            sollte denselben Preisstand nutzen.
                        </p>

                        <h2 id="fazit" className="text-3xl font-bold text-gray-900 mt-16 mb-6">
                            7. Fazit
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Eine Preiserhöhung ist ein Management-Thema, kein peinliches Geheimnis. Mit klarem
                            Stichtag, nachvollziehbarer Begründung und konsistenten Preisen überall bleibst du
                            professionell – und schützt die Qualität, für die Kundinnen zu dir kommen.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 my-12 text-center">
                            <h3 className="text-2xl font-bold text-white mb-4">Preise und Leistungen an einem Ort</h3>
                            <p className="text-indigo-100 mb-6 max-w-lg mx-auto">
                                Verwalte Leistungen, Buchungen und Kundinnen zentral – teste Treatflow 14 Tage
                                kostenlos, ohne Kreditkarte.
                            </p>
                            <a
                                href="https://app.treatflow.io/auth/register"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
                            >
                                Jetzt kostenlos starten
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </article>

            <section className="py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Weiterlesen</h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        <Link
                            href="/blog/preisgestaltung-kosmetikbehandlungen"
                            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <span className="text-sm text-indigo-600 font-medium">Business</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">
                                Preisgestaltung für Kosmetikbehandlungen
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                So kalkulierst du Preise fair und profitabel.
                            </p>
                        </Link>
                        <Link
                            href="/blog/gutscheine-kosmetikstudio-verkaufen"
                            className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow"
                        >
                            <span className="text-sm text-indigo-600 font-medium">Business</span>
                            <h3 className="text-lg font-semibold text-gray-900 mt-2">
                                Gutscheine im Kosmetikstudio verkaufen
                            </h3>
                            <p className="text-gray-600 text-sm mt-2">
                                Umsatz-Booster mit klaren Regeln für Gültigkeit.
                            </p>
                        </Link>
                    </div>
                </div>
            </section>

            <section className="py-12 bg-gray-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Passende Funktionen für dein Studio</h2>
                    <div className="grid sm:grid-cols-2 gap-4">
                        {[
                            {
                                href: '/online-buchungen',
                                title: 'Online-Buchungen',
                                desc: 'Aktuelle Preise direkt buchbar',
                            },
                            {
                                href: '/kundenverwaltung',
                                title: 'Kundenverwaltung',
                                desc: 'Stammkundinnen gezielt informieren',
                            },
                        ].map((link, i) => (
                            <Link
                                key={i}
                                href={link.href}
                                className="group flex items-center justify-between p-4 bg-white rounded-xl border border-gray-200 hover:border-indigo-200 hover:shadow-md transition-all"
                            >
                                <div>
                                    <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block">
                                        {link.title}
                                    </span>
                                    <span className="text-sm text-gray-500">{link.desc}</span>
                                </div>
                                <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 flex-shrink-0" />
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <LeadMagnetEmbed
                    href="/preisliste-vorlage-kosmetikstudio-pdf"
                    title="Neue Preisliste als Vorlage"
                    description="Aktualisiere Kategorien und Ab-Preise, bevor du die Erhöhung kommunizierst."
                />
            </div>

            <Footer />
        </div>
    );
}
