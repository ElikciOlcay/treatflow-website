import {
    ArrowRight, CheckCircle, FileText, GraduationCap, MapPin,
    Scissors, Shield, AlertTriangle, Sparkles, Building2
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LeadDownloadForm from "../components/LeadDownloadForm";

export const metadata: Metadata = {
    title: "Hygieneplan Kosmetikstudio PDF: Kostenlose Vorlage",
    description:
        "Hygieneplan Kosmetikstudio als PDF-Vorlage kostenlos herunterladen. Muster für Kosmetikstudios, Nagelstudios und Beauty-Studios. Sofort einsetzbar.",
    keywords: [
        "hygieneplan kosmetikstudio pdf",
        "hygieneplan kosmetikstudio vorlage",
        "hygieneplan kosmetikstudio download",
        "hygieneplan kosmetikstudio kostenlos",
        "hygieneplan für kosmetikstudio",
        "hygieneplan nagelstudio pdf",
        "hygieneplan nagelstudio vorlage",
        "muster hygieneplan kosmetikstudio",
        "hygieneplan kosmetikstudio nrw",
        "hygieneplan kosmetikstudio bayern",
        "rahmenhygieneplan kosmetik",
        "reinigungs und desinfektionsplan kosmetik",
    ],
    alternates: {
        canonical: "https://www.treatflow.io/hygieneplan-kosmetikstudio-pdf",
    },
    openGraph: {
        title: "Hygieneplan Kosmetikstudio PDF: Kostenlose Vorlage",
        description:
            "Hygieneplan als PDF-Vorlage kostenlos herunterladen. Muster für Kosmetikstudios und Nagelstudios. Sofort einsetzbar.",
        url: "https://www.treatflow.io/hygieneplan-kosmetikstudio-pdf",
        images: [
            {
                url: "/images/og-hygieneplan-kosmetikstudio.jpg",
                width: 1200,
                height: 630,
                alt: "Hygieneplan Kosmetikstudio PDF Vorlage",
            },
        ],
    },
};

const PDF_URL = "/downloads/hygieneplan-kosmetikstudio.pdf";
const LEAD_SOURCE = "Hygieneplan Kosmetikstudio PDF";

const SHORT_DISCLAIMER =
    "Diese Vorlage dient als Orientierungshilfe und ersetzt keine individuelle rechtliche oder fachliche Beratung.";

const faqData = [
    {
        question: "Was ist ein Hygieneplan für ein Kosmetikstudio?",
        answer:
            "Ein Hygieneplan ist ein schriftliches Dokument, das alle hygienerelevanten Abläufe in deinem Studio regelt. Er beschreibt, wer wann was reinigt, desinfiziert und dokumentiert. Er dient als verbindliche Arbeitsanweisung für das gesamte Team und als Nachweis bei Kontrollen durch das Gesundheitsamt.",
    },
    {
        question: "Ist ein Hygieneplan im Kosmetikstudio Pflicht?",
        answer:
            "Ja, ein Hygieneplan ist in allen Bundesländern für Kosmetikstudios und Nagelstudios verpflichtend. Die genauen Anforderungen richten sich nach der jeweiligen Hygieneverordnung des Bundeslandes. Das zuständige Gesundheitsamt kann bei Kontrollen die Vorlage des Hygieneplans verlangen.",
    },
    {
        question: "Für welche Studios ist die Vorlage geeignet?",
        answer:
            "Die Vorlage ist für Kosmetikstudios, Nagelstudios, Beauty-Salons, Lash Studios, Permanent-Makeup-Studios und ähnliche Betriebe geeignet. Sie deckt die wichtigsten Hygienebereiche ab und kann an die spezifischen Anforderungen deines Studios angepasst werden.",
    },
    {
        question: "Kann ich die Vorlage an mein Studio anpassen?",
        answer:
            "Ja, die PDF-Vorlage ist als Ausgangspunkt gedacht. Du solltest sie an die Behandlungen, Geräte und Abläufe deines Studios anpassen. Jedes Studio hat andere Schwerpunkte, und dein Hygieneplan sollte genau das widerspiegeln.",
    },
    {
        question: "Ist die Vorlage rechtssicher?",
        answer:
            "Die Vorlage dient als Orientierungshilfe und Muster. Sie wurde sorgfältig erstellt, ersetzt aber keine individuelle rechtliche oder fachliche Beratung. Wir empfehlen, den fertigen Plan von deinem zuständigen Gesundheitsamt oder einer fachkundigen Stelle prüfen zu lassen.",
    },
    {
        question: "Wie oft muss der Hygieneplan aktualisiert werden?",
        answer:
            "Der Hygieneplan sollte mindestens einmal jährlich überprüft und bei Bedarf aktualisiert werden. Änderungen in den Hygieneverordnungen, neue Behandlungsverfahren oder Erkenntnisse aus Begehungen durch das Gesundheitsamt erfordern eine sofortige Anpassung.",
    },
    {
        question: "Was ist der Unterschied zwischen Hygieneplan und Behandlungsdokumentation?",
        answer:
            "Der Hygieneplan regelt die allgemeinen Hygiene-Abläufe im Studio (Reinigung, Desinfektion, Schulungen). Die Behandlungsdokumentation hingegen erfasst einzelne Behandlungen pro Kunde – inklusive verwendeter Produkte, Ergebnisse und Fotos. Beides zusammen sorgt für einen professionellen und sicheren Studioalltag.",
    },
    {
        question: "Kann ich meinen Hygieneplan digital verwalten?",
        answer:
            "Ja. Mit einer Studio-Software wie Treatflow kannst du Formulare, Checklisten und Dokumentationen digital verwalten. Das hat den Vorteil, dass alles zentral gespeichert, versioniert und bei Kontrollen sofort abrufbar ist – ohne Papierchaos.",
    },
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
        },
    })),
};

const checklistItems = [
    "Reinigungs- und Desinfektionsplan für alle Flächen und Geräte",
    "Instrumentenaufbereitung (Desinfektion, Sterilisation)",
    "Handdesinfektion für Mitarbeiter und Kunden",
    "Abfallentsorgung und Entsorgung von Einmalmaterialien",
    "Persönliche Schutzausrüstung (Handschuhe, Mundschutz)",
    "Dokumentation aller durchgeführten Hygieneschritte",
    "Verantwortlichkeiten und Zuständigkeiten im Team",
    "Schulungsnachweis und Erstunterweisungen",
    "Notfallmaßnahmen bei Hygienevorfällen",
    "Aktualisierungsdatum und Versionsnummer",
];

const studioTypes = [
    { name: "Kosmetikstudios", desc: "Gesichtsbehandlungen, Peelings, Anti-Aging" },
    { name: "Nagelstudios", desc: "Maniküre, Pediküre, Nageldesign" },
    { name: "Beauty-Salons", desc: "Waxing, Enthaarung, Gesichtspflege" },
    { name: "Lash & Brow Studios", desc: "Wimpernverlängerung, Augenbrauen-Styling" },
    { name: "Permanent-Makeup-Studios", desc: "PMU, Microblading, Lip Blush" },
    { name: "Laser- und IPL-Studios", desc: "Haarentfernung, Hautverjüngung" },
];

export default function HygieneplanKosmetikstudioPdfPage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <FileText className="h-4 w-4 mr-2" />
                                Kostenlose PDF-Vorlage
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Hygieneplan Kosmetikstudio PDF:{" "}
                                <span className="text-blue-600">Kostenlose Vorlage</span> zum Download
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Lade dir unsere kostenlose Hygieneplan-Vorlage als PDF herunter – als
                                Orientierung für dein Kosmetikstudio, Nagelstudio oder Beauty-Studio.
                                Sofort einsetzbar und individuell anpassbar.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Muster-Hygieneplan als PDF-Download",
                                    "Checkliste für Reinigung, Desinfektion und Dokumentation",
                                    "Geeignet für Kosmetik-, Nagel- und Beauty-Studios",
                                    "An dein Studio anpassbar",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:sticky lg:top-28">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                                <h2 className="text-xl font-bold text-gray-900 mb-1">
                                    Hygieneplan kostenlos herunterladen
                                </h2>
                                <p className="text-gray-500 text-sm mb-5">
                                    Trage deine E-Mail ein und erhalte die PDF-Vorlage sofort.
                                </p>
                                <LeadDownloadForm
                                    downloadUrl={PDF_URL}
                                    leadSource={LEAD_SOURCE}
                                    buttonText="Kostenlosen Hygieneplan herunterladen"
                                    successTitle="Dein Hygieneplan ist bereit!"
                                    successDescription="Der Download startet automatisch. Falls nicht, klicke auf den Button unten."
                                    disclaimerText={SHORT_DISCLAIMER}
                                    compact
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Was ist ein Hygieneplan */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Was ist ein Hygieneplan für ein Kosmetikstudio?
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Ein Hygieneplan (auch Rahmenhygieneplan Kosmetik genannt) ist ein schriftliches
                        Dokument, das alle hygienerelevanten Abläufe in deinem Studio verbindlich regelt.
                        Er beschreibt, welche Reinigungs- und Desinfektionsmaßnahmen wann, wie und von
                        wem durchgeführt werden müssen.
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-4">
                        Der Plan dient als Arbeitsanweisung für dein Team und als Nachweis bei
                        Kontrollen durch das Gesundheitsamt. Er umfasst in der Regel einen Reinigungs-
                        und Desinfektionsplan, Vorgaben zur Instrumentenaufbereitung, Regeln zur
                        Händehygiene und die Dokumentation aller Maßnahmen.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        Wenn du deine Hygienedokumentation langfristig professionell und digital
                        organisieren willst, lohnt sich ein Blick auf{" "}
                        <Link href="/formulare" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
                            digitale Formulare für dein Kosmetikstudio
                        </Link>{" "}
                        – so sparst du Papier und hast bei Kontrollen alles sofort parat.
                    </p>
                </div>
            </section>

            {/* Warum ist er wichtig */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Warum ist ein Hygieneplan im Kosmetikstudio wichtig?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                title: "Gesetzliche Pflicht",
                                desc: "In allen Bundesländern ist ein schriftlicher Hygieneplan für Kosmetikstudios vorgeschrieben. Bei Kontrollen durch das Gesundheitsamt muss er vorgelegt werden können.",
                            },
                            {
                                title: "Schutz deiner Kunden",
                                desc: "Klare Hygieneregeln minimieren Infektionsrisiken und zeigen deinen Kunden, dass du ihre Gesundheit ernst nimmst.",
                            },
                            {
                                title: "Professioneller Arbeitsablauf",
                                desc: "Ein strukturierter Plan sorgt dafür, dass alle im Team die gleichen Standards einhalten – ohne Unsicherheiten oder vergessene Schritte.",
                            },
                            {
                                title: "Nachweis bei Kontrollen",
                                desc: "Mit einem dokumentierten Hygieneplan bist du bei Begehungen durch das Gesundheitsamt vorbereitet und vermeidest Beanstandungen.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white rounded-2xl border border-gray-100 p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Was sollte enthalten sein */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Was sollte in einem Hygieneplan enthalten sein?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        Ein vollständiger Hygieneplan für Kosmetikstudios deckt alle relevanten Bereiche
                        ab – von der Flächendesinfektion bis zur Schulungsdokumentation. Unsere
                        PDF-Vorlage orientiert sich an diesen Punkten:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {checklistItems.map((point) => (
                            <div key={point} className="flex items-start gap-3 bg-gray-50 border border-gray-100 rounded-xl p-4">
                                <CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700">{point}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600 mt-6">
                        Weitere Informationen zu Hygiene und Sicherheit findest du in unserem{" "}
                        <Link
                            href="/blog/hygiene-sicherheit-kosmetikstudio"
                            className="text-blue-600 hover:text-blue-700 underline underline-offset-4"
                        >
                            Blogartikel zu Hygiene und Sicherheit im Kosmetikstudio
                        </Link>
                        . Für die digitale Erfassung von Behandlungsnachweisen eignet sich die{" "}
                        <Link
                            href="/behandlungsdokumentation"
                            className="text-blue-600 hover:text-blue-700 underline underline-offset-4"
                        >
                            Behandlungsdokumentation von Treatflow
                        </Link>.
                    </p>
                </div>
            </section>

            {/* Für welche Studios */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Building2 className="h-6 w-6 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Für welche Studios ist die Vorlage geeignet?
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        Die Hygieneplan-Vorlage ist breit einsetzbar. Sie eignet sich als Ausgangspunkt
                        für verschiedene Studio-Typen und kann an die jeweiligen Behandlungen
                        angepasst werden.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {studioTypes.map((studio) => (
                            <div key={studio.name} className="bg-white border border-gray-100 rounded-xl p-5">
                                <h3 className="font-semibold text-gray-900 mb-1">{studio.name}</h3>
                                <p className="text-sm text-gray-500">{studio.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zweiter Download-Block */}
            <section className="py-20 bg-blue-600">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Hygieneplan Vorlage jetzt kostenlos herunterladen
                        </h2>
                        <p className="text-blue-100 text-lg">
                            Trage deine E-Mail ein und lade dir die Muster-Vorlage als PDF herunter –
                            kostenlos und sofort einsetzbar.
                        </p>
                    </div>
                    <LeadDownloadForm
                        downloadUrl={PDF_URL}
                        leadSource={LEAD_SOURCE}
                        buttonText="Jetzt Vorlage kostenlos herunterladen"
                        successTitle="Dein Hygieneplan ist bereit!"
                        successDescription="Der Download startet automatisch. Falls nicht, klicke auf den Button unten."
                        disclaimerText={SHORT_DISCLAIMER}
                    />
                </div>
            </section>

            {/* Bundesland-Vorgaben */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <MapPin className="h-6 w-6 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Hygienevorschriften nach Bundesland
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-10 max-w-3xl">
                        Die Hygieneverordnung für Kosmetikstudios unterscheidet sich je nach Bundesland.
                        Prüfe daher immer die konkreten Vorgaben deines zuständigen Gesundheitsamts.
                    </p>

                    <div className="grid md:grid-cols-2 gap-8 mb-10">
                        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Hygieneplan Kosmetikstudio Bayern
                            </h3>
                            <p className="text-gray-700 mb-4">
                                In Bayern regelt die Verordnung zur Verhütung übertragbarer Krankheiten
                                (MedHygV) zusammen mit dem Infektionsschutzgesetz die Hygieneanforderungen.
                                Kosmetikstudios müssen einen schriftlichen Hygieneplan vorhalten.
                            </p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                {[
                                    "Schriftlicher Hygieneplan verpflichtend",
                                    "Dokumentation der Instrumentenaufbereitung",
                                    "Regelmäßige Begehungen durch das Gesundheitsamt möglich",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-blue-600 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                Hygieneplan Kosmetikstudio NRW
                            </h3>
                            <p className="text-gray-700 mb-4">
                                In Nordrhein-Westfalen gilt die Hygieneverordnung NRW. Sie verpflichtet
                                Betreiber von Kosmetik- und Nagelstudios zur Erstellung eines Hygieneplans.
                            </p>
                            <ul className="space-y-2 text-gray-700 text-sm">
                                {[
                                    "Hygieneplan nach Hygieneverordnung NRW",
                                    "Nachweispflicht für Desinfektionsmittel (VAH-gelistet)",
                                    "Personalschulung mit Dokumentation erforderlich",
                                ].map((item) => (
                                    <li key={item} className="flex items-start gap-2">
                                        <CheckCircle className="h-4 w-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Weitere Bundesländer</h3>
                        <p className="text-gray-700">
                            Auch in allen anderen Bundesländern ist ein Hygieneplan für Kosmetikstudios Pflicht.
                            Die konkreten Anforderungen variieren. In Baden-Württemberg, Niedersachsen oder
                            Sachsen gibt es zusätzliche Merkblätter und Rahmenhygienepläne. Wende dich im
                            Zweifel an dein örtliches Gesundheitsamt.
                        </p>
                    </div>
                </div>
            </section>

            {/* Hygieneplan Nagelstudio */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Scissors className="h-6 w-6 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Hygieneplan für Nagelstudios</h2>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        Nagelstudios haben besondere Hygieneanforderungen, da bei vielen Behandlungen
                        direkter Hautkontakt und der Einsatz rotierender Instrumente stattfinden. Die
                        Vorlage deckt auch diese Bereiche ab.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {[
                            {
                                title: "Instrumentendesinfektion",
                                description: "Alle wiederverwendbaren Instrumente (Scheren, Zangen, Hautschieber) müssen nach jedem Einsatz desinfiziert und bei Bedarf sterilisiert werden.",
                            },
                            {
                                title: "Fräser-Aufbereitung",
                                description: "Nagelfräser und Aufsätze müssen nach jeder Kundin gereinigt, desinfiziert und gegebenenfalls im Autoklaven sterilisiert werden.",
                            },
                            {
                                title: "Staubabsaugung",
                                description: "Beim Feilen und Fräsen entsteht Feinstaub. Eine leistungsfähige Staubabsaugung am Arbeitsplatz ist Pflicht und muss regelmäßig gewartet werden.",
                            },
                            {
                                title: "UV-Sterilisation",
                                description: "UV-Sterilisatoren können ergänzend eingesetzt werden, ersetzen jedoch nicht die normgerechte Aufbereitung nach RKI-Empfehlungen.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-white border border-gray-100 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600">
                        Du suchst eine digitale Lösung speziell für dein Nagelstudio? Erfahre mehr über unsere{" "}
                        <Link href="/nagelstudio-software" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
                            Software für Nagelstudios
                        </Link>{" "}
                        mit{" "}
                        <Link href="/kundenverwaltung" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
                            Kundenverwaltung
                        </Link>,{" "}
                        <Link href="/online-buchungen" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
                            Online-Buchungen
                        </Link>{" "}
                        und{" "}
                        <Link href="/formulare" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
                            digitalen Formularen
                        </Link>.
                    </p>
                </div>
            </section>

            {/* Hygieneschulung */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <GraduationCap className="h-6 w-6 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gray-900">Hygieneschulung im Kosmetikstudio</h2>
                    </div>
                    <p className="text-gray-600 mb-6 max-w-3xl">
                        Ein Hygieneplan allein reicht nicht. Damit die Hygienevorschriften im
                        Kosmetikstudio tatsächlich eingehalten werden, müssen alle Mitarbeiterinnen
                        und Mitarbeiter regelmäßig geschult werden.
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mb-8">
                        {[
                            {
                                title: "Erstunterweisung",
                                description: "Neue Mitarbeiter müssen vor dem ersten Arbeitstag über den Hygieneplan und Schutzmaßnahmen unterwiesen werden.",
                            },
                            {
                                title: "Jährliche Auffrischung",
                                description: "Mindestens einmal pro Jahr sollte eine Hygieneschulung für das gesamte Team stattfinden.",
                            },
                            {
                                title: "Dokumentation",
                                description: "Jede Schulung muss mit Datum, Inhalt und Teilnehmerliste dokumentiert werden – das Gesundheitsamt kann Nachweise anfordern.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600">
                        Mit Treatflow kannst du Schulungsnachweise digital erfassen und zentral ablegen.
                        Mehr dazu unter{" "}
                        <Link href="/formulare" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
                            digitale Formulare
                        </Link>
                        . Für die lückenlose Dokumentation deiner Behandlungen empfehlen wir die{" "}
                        <Link href="/nisv-dokumentation" className="text-blue-600 hover:text-blue-700 underline underline-offset-4">
                            NiSV-Dokumentation
                        </Link>.
                    </p>
                </div>
            </section>

            {/* PDF vs Digital Vergleich */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        PDF-Vorlage vs. digitale Dokumentation
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl border border-gray-200 p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Hygieneplan als PDF</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />Guter Startpunkt und Orientierung</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />Einfach zu drucken und aufzubewahren</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />Ideal für Schulungen und Ersteinrichtung</li>
                                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />Manuelle Updates oft fehleranfällig</li>
                                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />Nachweise im Alltag schnell unvollständig</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl border-2 border-blue-200 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">Digitale Dokumentation</h3>
                                <span className="bg-blue-100 text-blue-700 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                                    <Sparkles className="h-3 w-3" /> Empfohlen
                                </span>
                            </div>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />Klare Versionierung und Nachvollziehbarkeit</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />Einheitliche Formulare für das Team</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />Schneller Zugriff bei Kontrollen</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />Weniger Papierchaos im Studio-Alltag</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />Automatisch DSGVO-konform gespeichert</li>
                            </ul>
                            <Link
                                href="/formulare"
                                className="inline-flex items-center mt-4 text-blue-600 font-medium hover:text-blue-700"
                            >
                                Digitale Formulare von Treatflow ansehen
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Rechtlicher Hinweis / Disclaimer */}
            <section className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                        <div className="flex items-start gap-3">
                            <Shield className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                    Hinweis zur Verwendung dieser Vorlage
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Die bereitgestellte Hygieneplan-Vorlage dient ausschließlich als
                                    allgemeine Orientierungshilfe. Sie wurde nach bestem Wissen erstellt,
                                    erhebt jedoch keinen Anspruch auf Vollständigkeit, Aktualität oder
                                    rechtliche Wirksamkeit.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Diese Vorlage ersetzt keine individuelle rechtliche, medizinische oder
                                    fachliche Beratung. Die konkreten Anforderungen an einen Hygieneplan
                                    können je nach Bundesland, Behandlungsangebot und Studio-Ausstattung
                                    variieren.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    Wir empfehlen, den fertigen Hygieneplan vor der Verwendung durch das
                                    zuständige Gesundheitsamt oder eine fachkundige Stelle prüfen zu lassen.
                                    Die Treatflow GmbH übernimmt keine Gewähr und keine Haftung für Schäden,
                                    die aus der Verwendung dieser Vorlage entstehen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upsell / Nächste Schritte */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Formulare, Dokumentation und Studio-Verwaltung komplett digital?
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                        Mit Treatflow verwaltest du Anamnesebögen, Behandlungsdokumentation, Kundenkartei und
                        Terminbuchung in einer Plattform – DSGVO-konform und speziell für Beauty-Studios entwickelt.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 transition-colors flex items-center justify-center"
                        >
                            Treatflow 14 Tage kostenlos testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <a
                            href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                        >
                            Demo buchen
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
                        Häufige Fragen zum Hygieneplan im Kosmetikstudio
                    </h2>
                    <div className="space-y-6">
                        {faqData.map((faq) => (
                            <div key={faq.question} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interne Links */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Passende Seiten für dein Studio</h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { href: '/formulare', title: 'Digitale Formulare', desc: 'Anamnesebögen und Einwilligungen digital' },
                            { href: '/behandlungsdokumentation', title: 'Behandlungsdokumentation', desc: 'Behandlungen digital dokumentieren' },
                            { href: '/nisv-dokumentation', title: 'NiSV-Dokumentation', desc: 'Rechtssichere Dokumentation nach NiSV' },
                            { href: '/kundenverwaltung', title: 'Kundenverwaltung', desc: 'Alle Kundendaten zentral verwalten' },
                            { href: '/online-buchungen', title: 'Online-Buchungen', desc: 'Kunden buchen 24/7 über deinen Link' },
                            { href: '/blog/hygiene-sicherheit-kosmetikstudio', title: 'Hygiene-Guide', desc: 'Hygiene und Sicherheit im Studio' },
                        ].map((link) => (
                            <Link key={link.href} href={link.href} className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-md transition-all">
                                <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">{link.title}</span>
                                <span className="text-sm text-gray-500">{link.desc}</span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
