import {
    Gift, ShieldCheck, ScanLine, CalendarClock, Receipt, TrendingUp, Sparkles, Wallet,
    Globe, CreditCard, Palette, PackageCheck,
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SocialProofBar from '../components/SocialProofBar';
import Script from 'next/script';
import { generateBreadcrumbSchema } from '../components/Breadcrumbs';
import FeatureHero, { FeatureTitleHighlight } from '../components/FeatureHero';
import {
    FeatureUnderstand,
    FeatureHowItWorks,
    FeatureCards,
    FeatureFaq,
    FeatureRelated,
    FeaturePageCta,
} from '../components/FeatureSections';
import { buildHreflangAlternates } from '../i18n/seo';
import { generateWebPageSchema } from '@/lib/content-attribution';

const PAGE_DATE_MODIFIED = '2026-11-03';
const PAGE_DATE_PUBLISHED = '2025-06-01';

export const metadata = {
    title: 'Gutscheine für Kosmetikstudios – online & an der Kasse verkaufen',
    description: 'Gutscheinverwaltung für dein Kosmetikstudio: Geschenkgutscheine online über deine Buchungsseite und direkt an der Kasse verkaufen und einlösen. Bezahlung per Treatflow Pay oder Überweisung, eigenes Gutschein-Design, Einzweck- und Mehrzweckgutscheine mit korrekter Steuerlogik. Teil der TSE-/RKSV-konformen Treatflow Kasse.',
    keywords: [
        'Gutscheine Kosmetikstudio', 'Gutscheinverwaltung Kosmetikstudio', 'Geschenkgutschein Kosmetikstudio',
        'Gutscheine verkaufen Kosmetikstudio', 'Gutschein einlösen Kasse', 'Gutschein Software Beauty',
        'digitale Gutscheine Studio', 'Einzweckgutschein', 'Mehrzweckgutschein',
        'Gutscheinverwaltung Software', 'Gutschein Kasse Kosmetik', 'Wertgutschein Studio',
        'Gutscheine online verkaufen', 'Online-Gutschein Kosmetikstudio', 'Gutschein Buchungsseite', 'Gutschein PDF per E-Mail',
    ],
    alternates: {
        canonical: 'https://www.treatflow.io/gutscheine-kosmetikstudio',
        ...buildHreflangAlternates('vouchers'),
    },
    openGraph: {
        title: 'Gutscheine für Kosmetikstudios – online & an der Kasse verkaufen',
        description: 'Geschenkgutscheine online über die Buchungsseite und an der Kasse verkaufen und einlösen – mit eigenem Design, Treatflow Pay oder Überweisung, korrekter Steuerlogik und Restwert. Teil der Treatflow Kasse.',
        url: 'https://www.treatflow.io/gutscheine-kosmetikstudio',
    },
};

const faqs = [
    {
        question: 'Kann ich mit Treatflow Gutscheine verkaufen und einlösen?',
        answer: 'Ja. In der Treatflow Kasse verkaufst du Geschenkgutscheine direkt im Kassiervorgang und löst sie bei einem späteren Besuch wieder ein – ganz oder teilweise. Restwerte werden automatisch verwaltet, sodass ein Gutschein bei mehreren Besuchen weiter genutzt werden kann.',
    },
    {
        question: 'Kann ich Gutscheine online verkaufen?',
        answer: 'Ja. Mit der App „Gutscheine“ (Einstellungen → Apps) erscheint auf deiner öffentlichen Buchungsseite der Link „Gutschein kaufen“. Kundinnen wählen einen festen oder freien Betrag (innerhalb deines Minimums und Maximums), die Variante – PDF per E-Mail, per Post (mit von dir festgelegter Versandgebühr inkl. MwSt.) oder Abholung im Studio – und können Empfänger, Absender und eine persönliche Nachricht ergänzen. Eine Live-Vorschau zeigt den Gutschein. Die App ist nur zusammen mit der Treatflow Kasse verfügbar, weil die Gutscheine dort eingelöst werden.',
    },
    {
        question: 'Wie bezahlen Kundinnen online gekaufte Gutscheine?',
        answer: 'Du entscheidest, welche Zahlungsarten du anbietest: Mit Treatflow Pay zahlen Kundinnen per Karte, Apple Pay oder Google Pay – der Gutschein wird sofort ausgestellt und als PDF per E-Mail verschickt. Bei Überweisung erstellt die Kasse automatisch eine Rechnung mit GiroCode und verschickt sie per E-Mail; der Gutschein wird ausgestellt, sobald du den Zahlungseingang in der Kasse bestätigst. Die Bankverbindung kommt aus deinen Kasseneinstellungen.',
    },
    {
        question: 'Wie werden online verkaufte Gutscheine versteuert?',
        answer: 'Online verkaufte Gutscheine sind Mehrzweckgutscheine. Die Umsatzsteuer wird daher nicht beim Kauf, sondern erst bei der Einlösung in der Kasse fällig – dort wird der Vorgang TSE- bzw. RKSV-signiert. In der Kasse verwaltest du Online-Bestellungen im Reiter „Online-Bestellungen“: Zahlung bestätigen, als versendet oder abgeholt markieren, stornieren, PDF öffnen oder die E-Mail erneut senden.',
    },
    {
        question: 'Kann ich das Design der Gutscheine anpassen?',
        answer: 'Ja. Im Gutschein-Designer wählst du aus zehn Vorlagen (Foto, Diagonal, Großer Betrag, Karte, Ticket, Sanft, Klassisch, Modern, Elegant, Minimal) und passt Farben, Logo, eigenes Bild und Texte an. Die Vorschau entspricht genau dem PDF im Format A5 quer.',
    },
    {
        question: 'Was ist der Unterschied zwischen Einzweck- und Mehrzweckgutschein?',
        answer: 'Beim Einzweckgutschein steht der Steuersatz schon beim Verkauf fest (z. B. wenn alle Leistungen denselben Satz haben) – die Steuer wird sofort fällig. Beim Mehrzweckgutschein ist beim Verkauf noch offen, wofür er eingelöst wird (unterschiedliche Steuersätze), daher wird die Steuer erst bei der Einlösung gebucht. Treatflow unterstützt beide Varianten mit korrekter steuerlicher Behandlung.',
    },
    {
        question: 'Sind die Gutscheine fiskalkonform?',
        answer: 'Ja. Verkauf und Einlösung laufen über die TSE-/RKSV-konforme Treatflow Kasse. Jeder Vorgang wird fiskalisch signiert (KassenSichV in Deutschland, RKSV in Österreich) und erscheint mit Signatur-QR auf dem Beleg.',
    },
    {
        question: 'Kann ich eine Gültigkeit für Gutscheine festlegen?',
        answer: 'Ja. Du kannst ein Gültigkeitsdatum hinterlegen. Für online verkaufte Gutscheine legst du die Gültigkeit in der App fest – z. B. drei Jahre zum Jahresende, eine Anzahl Monate oder unbegrenzt. Beim Einlösen prüft Treatflow Status und Restwert des Gutscheins, sodass du immer den aktuellen Stand siehst.',
    },
    {
        question: 'Was kostet die Gutscheinfunktion?',
        answer: 'Der Gutscheinverkauf und die Einlösung sind Teil der Treatflow Kasse, einem Add-on zum Booking-Plan für 39 €/Monat (jährlich 35 €/Monat) zzgl. einmalig 149 € Einrichtung. Für Gutscheine, die an der Kasse verkauft werden, fallen keine Transaktionsgebühren pro Gutschein an. Für den Online-Verkauf aktivierst du zusätzlich die App „Gutscheine“.',
    },
    {
        question: 'Lohnen sich Gutscheine für mein Studio?',
        answer: 'Gutscheine bringen sofortigen Umsatz, gewinnen Neukunden über Beschenkte und erhöhen die Kundenbindung. Besonders vor Weihnachten, Muttertag und Valentinstag sind Geschenkgutscheine eine wichtige Einnahmequelle für Beauty- und Kosmetikstudios.',
    },
];

const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
};

const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Gutscheinverwaltung für Kosmetikstudios',
    serviceType: 'Gutschein- und Geschenkgutschein-Verwaltung',
    description:
        'Geschenkgutscheine im Kosmetikstudio online über die Buchungsseite und direkt an der Kasse verkaufen und einlösen – Einzweck- und Mehrzweckgutscheine mit korrekter Steuerlogik, Gültigkeit und Restwertverwaltung. Fiskalkonform über die TSE-/RKSV-konforme Treatflow Kasse.',
    url: 'https://www.treatflow.io/gutscheine-kosmetikstudio',
    provider: {
        '@type': 'Organization',
        name: 'Treatflow',
        url: 'https://www.treatflow.io',
    },
    areaServed: ['DE', 'AT', 'CH'],
};

export default function GutscheinePage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateBreadcrumbSchema([
                            { label: 'Funktionen', href: '/funktionen' },
                            { label: 'Gutscheine' },
                        ])
                    ),
                }}
            />
            <Script id="gutscheine-faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
            <Script id="gutscheine-service-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
            <Script
                id="gutscheine-webpage-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        generateWebPageSchema({
                            name: 'Gutscheine für Kosmetikstudios – online & an der Kasse verkaufen',
                            description:
                                'Gutscheinverwaltung für dein Kosmetikstudio: Geschenkgutscheine online über die Buchungsseite und direkt an der Kasse verkaufen und einlösen, Einzweck- und Mehrzweckgutscheine mit korrekter Steuerlogik.',
                            url: 'https://www.treatflow.io/gutscheine-kosmetikstudio',
                            dateModified: PAGE_DATE_MODIFIED,
                            datePublished: PAGE_DATE_PUBLISHED,
                        })
                    ),
                }}
            />

            <FeatureHero
                theme="purple"
                breadcrumbs={[
                    { label: 'Funktionen', href: '/funktionen' },
                    { label: 'Gutscheine' },
                ]}
                eyebrow="Gutscheine"
                eyebrowIcon={Gift}
                title={<>Gutscheine verkaufen & <FeatureTitleHighlight theme="purple">einlösen</FeatureTitleHighlight></>}
                description="Online über deine Buchungsseite und direkt an der Kasse – steuerlich korrekt, fiskalkonform, mit automatischem Restwert."
                chips={['Online verkaufen', 'Fiskalkonform', 'Restwert automatisch', 'Teil der Kasse']}
                secondaryCta={{ label: 'Zur Kasse', href: '/kassensystem-kosmetikstudio' }}
                aiCapsule={{
                    question: 'Wie kann ich in meinem Kosmetikstudio Gutscheine verwalten?',
                    answer: 'Mit der Treatflow Kasse verkaufst du Geschenkgutscheine direkt im Kassiervorgang – und mit der App „Gutscheine“ auch online über deine Buchungsseite, bezahlt per Treatflow Pay oder Überweisung. Eingelöst werden sie später ganz oder teilweise wieder ein – Restwerte werden automatisch verwaltet. Treatflow unterstützt Einzweck- und Mehrzweckgutscheine mit korrekter steuerlicher Behandlung, optionalem Gültigkeitsdatum und fiskalkonformer Signatur (KassenSichV in Deutschland, RKSV in Österreich). Die Gutscheinfunktion ist Teil der Kasse, einem Add-on zum Booking-Plan für 39 €/Monat zzgl. einmalig 149 € Einrichtung.',
                }}
                dateModified={PAGE_DATE_MODIFIED}
                datePublished={PAGE_DATE_PUBLISHED}
                visual={
                    <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 to-pink-600 shadow-xl max-w-md mx-auto lg:mx-0 lg:ml-auto">
                        <div className="bg-white rounded-[14px] p-6 sm:p-8">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center gap-2">
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center">
                                        <Gift className="h-5 w-5 text-white" />
                                    </div>
                                    <span className="font-semibold text-gray-900">Geschenkgutschein</span>
                                </div>
                                <Sparkles className="h-5 w-5 text-purple-400" />
                            </div>
                            <div className="text-center py-6">
                                <div className="text-4xl font-bold text-gray-900">50,00 €</div>
                                <p className="text-sm text-gray-500 mt-1">Restwert nach erster Einlösung: 20,00 €</p>
                            </div>
                            <div className="flex items-center justify-between text-xs text-gray-500 border-t border-dashed border-gray-200 pt-3">
                                <span className="inline-flex items-center"><Wallet className="h-3.5 w-3.5 mr-1" /> Code TF-2026-0042</span>
                                <span className="inline-flex items-center"><CalendarClock className="h-3.5 w-3.5 mr-1" /> gültig bis 31.12.2027</span>
                            </div>
                        </div>
                    </div>
                }
            />

            <FeatureUnderstand
                theme="purple"
                title="Gutscheine verkaufen und einlösen – online und an der Kasse"
                description="Verkaufe Gutscheine an der Kasse oder online über deine Buchungsseite. Eingelöst wird an der Kasse – Restwert, Gültigkeit und Steuer werden automatisch verwaltet."
                items={[
                    {
                        icon: Gift,
                        title: 'Für eine bestimmte Leistung',
                        text: 'Ein Gutschein für eine konkrete Behandlung (z. B. eine Gesichtsbehandlung). Die Steuer wird direkt beim Verkauf gebucht.',
                    },
                    {
                        icon: ScanLine,
                        title: 'Für einen beliebigen Betrag',
                        text: 'Ein Wertgutschein, den dein Kunde frei einlösen kann. Die Steuer faellt erst bei der Einlösung an – je nachdem, wofür er ihn nutzt.',
                    },
                    {
                        icon: ShieldCheck,
                        title: 'Fiskalkonform',
                        text: 'Jeder Gutscheinverkauf und jede Einlösung wird über die TSE-/RKSV-Kasse signiert – mit QR-Code auf dem Beleg.',
                    },
                ]}
            />

            <FeatureHowItWorks
                theme="purple"
                description="In drei Schritten vom Verkauf zur Einlösung."
                steps={[
                    { title: 'Gutschein verkaufen', text: 'An der Kasse im normalen Kassiervorgang – oder online: Kundinnen wählen auf deiner Buchungsseite Betrag, Variante (PDF per E-Mail, per Post oder Abholung im Studio) und eine persönliche Nachricht und zahlen per Treatflow Pay oder Überweisung.' },
                    { title: 'Code übergeben', text: 'Dein Kunde bekommt einen Code mit Gültigkeit – als Beleg an der Kasse oder als gestaltetes PDF per E-Mail. Perfekt als Geschenk zu Weihnachten, Geburtstag oder Muttertag.' },
                    { title: 'Spaeter einlösen', text: 'Beim nächsten Besuch loest der Beschenkte den Gutschein ganz oder teilweise ein. Der Restwert bleibt automatisch gespeichert.' },
                ]}
            />

            <FeatureCards
                theme="purple"
                title="Was du bekommst"
                description="Gutscheinverwaltung, die mit Buchungsseite, Kasse, Kalender und Kundenkartei zusammenarbeitet."
                items={[
                    { icon: Globe, title: 'Online verkaufen', text: '„Gutschein kaufen“ direkt auf deiner Buchungsseite – mit Live-Vorschau.', points: ['Feste und freie Beträge', 'PDF, Post oder Abholung', 'Persönliche Nachricht'] },
                    { icon: CreditCard, title: 'Online bezahlen', text: 'Treatflow Pay oder Überweisung – du entscheidest.', points: ['Karte, Apple Pay, Google Pay', 'Rechnung mit GiroCode', 'Sofort-PDF per E-Mail'] },
                    { icon: Palette, title: 'Eigenes Design', text: '10 Vorlagen mit Farben, Logo, eigenem Bild und Texten.', points: ['Vorschau = PDF', 'A5 quer', 'Gültigkeit einstellbar'] },
                    { icon: PackageCheck, title: 'Online-Bestellungen', text: 'Eigener Reiter in der Kasse für alle Online-Käufe.', points: ['Zahlung bestätigen', 'Versendet / abgeholt', 'PDF & E-Mail erneut senden'] },
                    { icon: Gift, title: 'Verkauf an der Kasse', text: 'Beliebiger Betrag direkt im Checkout – sofort gültig.', points: ['Frei wählbarer Betrag', 'Direkt im Checkout', 'Sofort gültig'] },
                    { icon: ScanLine, title: 'Einfach einlösen', text: 'Ganz oder teilweise – Restwert bleibt erhalten.', points: ['Teil-Einlösung', 'Restwert automatisch', 'Schnelle Code-Suche'] },
                    { icon: ShieldCheck, title: 'Steuerlich korrekt', text: 'Einzweck und Mehrzweck mit korrekter Steuerbuchung.', points: ['Einzweckgutschein', 'Mehrzweckgutschein', 'Richtige Buchung'] },
                    { icon: CalendarClock, title: 'Gültigkeit & Status', text: 'Datum hinterlegen, Herkunft, Restwert und Einlösungen jederzeit sehen.', points: ['Gültigkeitsdatum', 'Herkunft Online/Kasse', 'Einlösungs-Historie'] },
                    { icon: Receipt, title: 'Fiskalkonform', text: 'Jeder Vorgang signiert – KassenSichV und RKSV.', points: ['KassenSichV (DE)', 'RKSV (AT)', 'Signatur-QR'] },
                    { icon: TrendingUp, title: 'Mehr Umsatz', text: 'Sofortiger Cashflow und Neukunden über Beschenkte.', points: ['Sofortiger Umsatz', 'Neukunden', 'Stärkere Bindung'] },
                ]}
            />

            <SocialProofBar />

            <FeatureFaq title="Häufige Fragen zu Gutscheinen" items={faqs} />

            <FeatureRelated
                items={[
                    { href: '/kassensystem-kosmetikstudio', title: 'Kassensystem', description: 'TSE- & RKSV-konform kassieren' },
                    { href: '/shop', title: 'Produktverkauf & Lager', description: 'Pflegeprodukte verkaufen' },
                    { href: '/online-buchungen', title: 'Online-Buchungen', description: 'Buchungsseite mit Gutschein-Shop' },
                ]}
            />

            <FeaturePageCta
                theme="purple"
                title="Mehr Umsatz mit Gutscheinen"
                description="14 Tage kostenlos testen – Gutscheine online und an der Kasse verkaufen und fiskalkonform einlösen."
                secondaryLabel="Zur Kasse"
                secondaryHref="/kassensystem-kosmetikstudio"
            />

            <Footer />
        </div>
    );
}
