import {
    ArrowRight, CheckCircle, FileText, Download, Shield, AlertTriangle,
    Sparkles, ClipboardList, PenLine, Lock, Heart, Zap
} from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LeadDownloadForm from "../components/LeadDownloadForm";

export const metadata: Metadata = {
    title: "Anamnesebogen Kosmetik Vorlage PDF: Kostenlos herunterladen",
    description:
        "Anamnesebogen Kosmetik als PDF-Vorlage kostenlos herunterladen. Inkl. Einwilligungserklärung und Datenschutz. Für Kosmetikstudios, Lash-Studios und Beauty-Salons. Sofort einsetzbar.",
    keywords: [
        "anamnesebogen kosmetik vorlage",
        "anamnesebogen kosmetik pdf",
        "anamnesebogen kosmetik download",
        "anamnesebogen kosmetikstudio",
        "anamnese kosmetik",
        "kosmetik anamnesebogen",
        "einverstandniserklarung kosmetik vorlage kostenlos",
        "einverstandniserklarung kosmetik vorlage",
        "einwilligung kosmetikbehandlung",
        "anamnesebogen gesichtsbehandlung",
        "anamnesebogen laser haarentfernung",
        "datenschutz anamnesebogen",
        "anamnese formular kosmetik",
        "anamnesebogen massage vorlage",
    ],
    alternates: {
        canonical: "https://www.treatflow.io/anamnesebogen-kosmetik-vorlage-pdf",
    },
    openGraph: {
        title: "Anamnesebogen Kosmetik Vorlage PDF: Kostenlos herunterladen",
        description:
            "Anamnesebogen inkl. Einwilligungserklärung als PDF-Vorlage kostenlos herunterladen. Für Kosmetikstudios und Beauty-Salons.",
        url: "https://www.treatflow.io/anamnesebogen-kosmetik-vorlage-pdf",
        images: [
            {
                url: "/images/og-anamnesebogen-kosmetik.jpg",
                width: 1200,
                height: 630,
                alt: "Anamnesebogen Kosmetik PDF Vorlage",
            },
        ],
    },
};

const PDF_URL = "/downloads/anamnesebogen-kosmetik-einwilligung.pdf";
const LEAD_SOURCE = "Anamnesebogen Kosmetik PDF";

const SHORT_DISCLAIMER =
    "Diese Vorlage dient als Orientierungshilfe und wurde nicht rechtlich geprüft. Keine Rechtsberatung.";

const faqData = [
    {
        question: "Was ist ein Anamnesebogen für Kosmetikstudios?",
        answer:
            "Ein Anamnesebogen ist ein Fragebogen, den Kunden vor einer Behandlung ausfüllen. Er erfasst wichtige Informationen zu Gesundheitszustand, Allergien, Medikamenten und Hauttyp. So kannst du Risiken minimieren und die Behandlung individuell anpassen.",
    },
    {
        question: "Warum brauche ich eine Einwilligungserklärung?",
        answer:
            "Die Einwilligungserklärung dokumentiert, dass deine Kundin über die Behandlung, mögliche Risiken und Nebenwirkungen aufgeklärt wurde und dieser zustimmt. Sie schützt dich rechtlich und ist bei vielen Behandlungen (z.B. Permanent Make-up, Microneedling, Laser) Pflicht.",
    },
    {
        question: "Ist die Vorlage rechtssicher?",
        answer:
            "Die Vorlage dient als Orientierungshilfe und Muster. Sie wurde NICHT rechtlich geprüft und ersetzt keine individuelle rechtliche Beratung. Wir empfehlen, die fertige Vorlage von einem Rechtsanwalt oder einer fachkundigen Stelle prüfen zu lassen, bevor du sie einsetzt.",
    },
    {
        question: "Für welche Behandlungen eignet sich der Anamnesebogen?",
        answer:
            "Die Vorlage eignet sich für klassische Kosmetikbehandlungen, Gesichtsbehandlungen, Wimpernverlängerung, Permanent Make-up, Microneedling, Laser-Behandlungen, Massage und viele weitere Beauty-Treatments. Du kannst sie an deine spezifischen Behandlungen anpassen.",
    },
    {
        question: "Muss ich den Anamnesebogen aufbewahren?",
        answer:
            "Ja, ausgefüllte Anamnesebögen und Einwilligungserklärungen solltest du mindestens 10 Jahre aufbewahren. Bei Minderjährigen läuft die Frist erst ab Volljährigkeit. Eine digitale Lösung wie Treatflow macht die Archivierung einfacher und DSGVO-konform.",
    },
    {
        question: "Kann ich den Anamnesebogen digital verwenden?",
        answer:
            "Ja. Mit Treatflow kannst du Anamnesebögen und Einwilligungserklärungen komplett digital abwickeln – inklusive elektronischer Unterschrift. Kunden füllen den Bogen vorab per Link oder vor Ort am Tablet aus. Alle Daten werden automatisch dem Kundenprofil zugeordnet.",
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
    "Persönliche Daten (Name, Geburtsdatum, Kontakt)",
    "Gesundheitszustand und Vorerkrankungen",
    "Aktuelle Medikamente und Nahrungsergänzungsmittel",
    "Allergien und Unverträglichkeiten",
    "Hauttyp und Hautzustand",
    "Frühere kosmetische Behandlungen",
    "Schwangerschaft / Stillzeit (falls relevant)",
    "Aufklärung über Behandlung und Risiken",
    "Einwilligung zur Behandlung",
    "Datenschutzhinweis und Einwilligung zur Datenverarbeitung",
    "Unterschrift und Datum",
];

const treatmentTypes = [
    { name: "Gesichtsbehandlungen", desc: "Peelings, Anti-Aging, Microneedling" },
    { name: "Wimpern & Brauen", desc: "Wimpernverlängerung, Lash Lifting, Brow Lamination" },
    { name: "Permanent Make-up", desc: "Augenbrauen, Lippen, Lidstrich" },
    { name: "Laser & IPL", desc: "Haarentfernung, Hautverjüngung" },
    { name: "Körperbehandlungen", desc: "Massage, Waxing, Body Wrapping" },
    { name: "Nageldesign", desc: "Maniküre, Pediküre, Gel-Nägel" },
];

export default function AnamnesebogenKosmetikVorlagePdfPage() {
    return (
        <div className="min-h-screen bg-white">
            <Script
                id="faq-schema"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        <div>
                            <div className="inline-flex items-center bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                                <FileText className="h-4 w-4 mr-2" />
                                Kostenlose PDF-Vorlage
                            </div>
                            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Anamnesebogen Kosmetik:{" "}
                                <span className="text-indigo-600">PDF-Vorlage</span> mit Einwilligung
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">
                                Lade dir unsere kostenlose Anamnesebogen-Vorlage für Kosmetikstudios als PDF herunter – 
                                inklusive Einwilligungserklärung und Datenschutzhinweis. 
                                Sofort einsetzbar und individuell anpassbar.
                            </p>
                            <div className="space-y-3 mb-8">
                                {[
                                    "Anamnesebogen mit allen wichtigen Feldern",
                                    "Einwilligungserklärung zur Behandlung",
                                    "Datenschutzhinweis (DSGVO)",
                                    "Für Kosmetik-, Lash- und PMU-Studios geeignet",
                                ].map((item) => (
                                    <div key={item} className="flex items-center gap-3">
                                        <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0" />
                                        <span className="text-gray-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:sticky lg:top-28">
                            <div className="bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-lg">
                                <h2 className="text-xl font-bold text-gray-900 mb-1">
                                    Anamnesebogen kostenlos herunterladen
                                </h2>
                                <p className="text-gray-500 text-sm mb-5">
                                    Trage deine E-Mail ein und erhalte die PDF-Vorlage sofort.
                                </p>
                                <LeadDownloadForm
                                    downloadUrl={PDF_URL}
                                    leadSource={LEAD_SOURCE}
                                    buttonText="Kostenlosen Anamnesebogen herunterladen"
                                    successTitle="Dein Anamnesebogen ist bereit!"
                                    successDescription="Der Download startet automatisch. Falls nicht, klicke auf den Button unten."
                                    disclaimerText={SHORT_DISCLAIMER}
                                    compact
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Definition Box für Featured Snippet */}
            <section className="py-12 bg-white border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 rounded-2xl p-6 sm:p-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                            <ClipboardList className="h-5 w-5 text-indigo-600" />
                            Was ist ein Anamnesebogen für Kosmetik?
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            Ein <strong>Anamnesebogen für Kosmetikstudios</strong> ist ein Fragebogen, den Kunden 
                            vor einer Behandlung ausfüllen. Er erfasst wichtige Informationen zu Gesundheitszustand, 
                            Allergien, Medikamenten und Hauttyp. Zusammen mit einer <strong>Einwilligungserklärung</strong> dokumentiert 
                            er die Aufklärung über Risiken und die Zustimmung zur Behandlung. 
                            Das schützt sowohl die Kundin als auch dich als Studio-Betreiberin rechtlich ab.
                        </p>
                    </div>
                </div>
            </section>

            {/* Warum wichtig */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        Warum brauchst du einen Anamnesebogen mit Einwilligung?
                    </h2>
                    <div className="grid md:grid-cols-2 gap-6">
                        {[
                            {
                                icon: Shield,
                                title: "Rechtliche Absicherung",
                                desc: "Die dokumentierte Aufklärung und Einwilligung schützt dich bei Beschwerden oder rechtlichen Auseinandersetzungen. Ohne Nachweis haftest du im Zweifel.",
                            },
                            {
                                icon: Heart,
                                title: "Kundensicherheit",
                                desc: "Allergien, Medikamente oder Vorerkrankungen können zu Komplikationen führen. Der Anamnesebogen hilft dir, Risiken zu erkennen und die Behandlung anzupassen.",
                            },
                            {
                                icon: Lock,
                                title: "DSGVO-Konformität",
                                desc: "Du verarbeitest sensible Gesundheitsdaten. Mit einem sauberen Datenschutzhinweis und der Einwilligung zur Datenverarbeitung bist du auf der sicheren Seite.",
                            },
                            {
                                icon: Zap,
                                title: "Professioneller Eindruck",
                                desc: "Ein strukturierter Anamnesebogen zeigt deinen Kunden, dass du professionell arbeitest und ihre Gesundheit ernst nimmst.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-gray-50 rounded-2xl border border-gray-100 p-6">
                                <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
                                    <item.icon className="h-5 w-5 text-indigo-600" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Was sollte enthalten sein */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Was sollte ein Anamnesebogen für Kosmetik enthalten?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        Ein vollständiger Anamnesebogen deckt alle relevanten Bereiche ab – von persönlichen Daten 
                        über Gesundheitsfragen bis zur rechtswirksamen Einwilligung. Unsere PDF-Vorlage enthält:
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                        {checklistItems.map((point) => (
                            <div key={point} className="flex items-start gap-3 bg-white border border-gray-100 rounded-xl p-4">
                                <CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                                <p className="text-gray-700">{point}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Für welche Behandlungen */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <Sparkles className="h-6 w-6 text-indigo-600" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Für welche Behandlungen eignet sich die Vorlage?
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        Die Anamnesebogen-Vorlage ist breit einsetzbar. Sie eignet sich als Ausgangspunkt 
                        für verschiedene Behandlungsarten und kann an deine spezifischen Anforderungen angepasst werden.
                    </p>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {treatmentTypes.map((treatment) => (
                            <div key={treatment.name} className="bg-gray-50 border border-gray-100 rounded-xl p-5">
                                <h3 className="font-semibold text-gray-900 mb-1">{treatment.name}</h3>
                                <p className="text-sm text-gray-500">{treatment.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Zweiter Download-Block */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Anamnesebogen Vorlage jetzt kostenlos herunterladen
                        </h2>
                        <p className="text-indigo-100 text-lg">
                            Trage deine E-Mail ein und lade dir die Muster-Vorlage als PDF herunter – 
                            kostenlos und sofort einsetzbar.
                        </p>
                    </div>
                    <LeadDownloadForm
                        downloadUrl={PDF_URL}
                        leadSource={LEAD_SOURCE}
                        buttonText="Jetzt Vorlage kostenlos herunterladen"
                        successTitle="Dein Anamnesebogen ist bereit!"
                        successDescription="Der Download startet automatisch. Falls nicht, klicke auf den Button unten."
                        disclaimerText={SHORT_DISCLAIMER}
                    />
                </div>
            </section>

            {/* Einwilligungserklärung Details */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-4">
                        <PenLine className="h-6 w-6 text-indigo-600" />
                        <h2 className="text-3xl font-bold text-gray-900">
                            Einwilligungserklärung für Kosmetikbehandlungen
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-8 max-w-3xl">
                        Die Einwilligungserklärung (auch Einverständniserklärung genannt) ist ein wichtiger 
                        Bestandteil der Behandlungsdokumentation. Sie sollte folgende Punkte abdecken:
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {[
                            {
                                title: "Aufklärung über die Behandlung",
                                description: "Beschreibung der geplanten Behandlung, Ablauf und erwartete Ergebnisse.",
                            },
                            {
                                title: "Risiken und Nebenwirkungen",
                                description: "Mögliche Komplikationen, Nebenwirkungen und Kontraindikationen müssen genannt werden.",
                            },
                            {
                                title: "Nachsorge-Hinweise",
                                description: "Informationen zur richtigen Pflege nach der Behandlung und Verhaltensregeln.",
                            },
                            {
                                title: "Widerrufsrecht",
                                description: "Hinweis, dass die Einwilligung jederzeit widerrufen werden kann.",
                            },
                        ].map((item) => (
                            <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                                <p className="text-gray-700 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="text-gray-600">
                        Für spezielle Behandlungen wie{" "}
                        <Link href="/nisv-dokumentation" className="text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
                            NiSV-pflichtige Verfahren
                        </Link>{" "}
                        (Laser, IPL, Ultraschall) gelten zusätzliche Dokumentationspflichten.
                    </p>
                </div>
            </section>

            {/* PDF vs Digital Vergleich */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8">
                        PDF-Vorlage vs. digitale Anamnesebogen
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white rounded-2xl border border-gray-200 p-6">
                            <h3 className="text-xl font-semibold text-gray-900 mb-4">Anamnesebogen als PDF</h3>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />Guter Startpunkt und Orientierung</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />Einfach zu drucken und auszufüllen</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />Kostenlos und sofort einsetzbar</li>
                                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />Manuelle Ablage und Archivierung</li>
                                <li className="flex items-start gap-2"><AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />Keine automatische Zuordnung zum Kundenprofil</li>
                            </ul>
                        </div>
                        <div className="bg-white rounded-2xl border-2 border-indigo-200 p-6">
                            <div className="flex items-center gap-2 mb-4">
                                <h3 className="text-xl font-semibold text-gray-900">Digitale Anamnesebogen</h3>
                                <span className="bg-indigo-100 text-indigo-700 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
                                    <Sparkles className="h-3 w-3" /> Empfohlen
                                </span>
                            </div>
                            <ul className="space-y-3 text-gray-700">
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />Kunden füllen vorab per Link aus</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />Elektronische Unterschrift integriert</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />Automatische Zuordnung zum Kundenprofil</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />DSGVO-konforme Speicherung</li>
                                <li className="flex items-start gap-2"><CheckCircle className="h-5 w-5 text-indigo-600 flex-shrink-0 mt-0.5" />Schneller Zugriff bei Kontrollen</li>
                            </ul>
                            <Link
                                href="/formulare"
                                className="inline-flex items-center mt-4 text-indigo-600 font-medium hover:text-indigo-700"
                            >
                                Digitale Formulare von Treatflow ansehen
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                        Häufige Fragen zum Anamnesebogen
                    </h2>
                    <div className="space-y-4">
                        {faqData.map((faq, index) => (
                            <div key={index} className="bg-gray-50 border border-gray-100 rounded-xl p-6">
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">{faq.question}</h3>
                                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Rechtlicher Hinweis / Disclaimer */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                        <div className="flex items-start gap-3">
                            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
                            <div>
                                <h2 className="text-lg font-semibold text-gray-900 mb-2">
                                    Wichtiger Hinweis zur Verwendung dieser Vorlage
                                </h2>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    <strong>Diese Vorlage wurde NICHT rechtlich geprüft.</strong> Sie dient 
                                    ausschließlich als allgemeine Orientierungshilfe und Muster. Sie wurde 
                                    nach bestem Wissen erstellt, erhebt jedoch keinen Anspruch auf Vollständigkeit, 
                                    Aktualität oder rechtliche Wirksamkeit.
                                </p>
                                <p className="text-gray-700 leading-relaxed mb-3">
                                    Diese Vorlage ersetzt keine individuelle rechtliche, medizinische oder 
                                    fachliche Beratung. Die konkreten Anforderungen an Anamnesebögen und 
                                    Einwilligungserklärungen können je nach Behandlungsart, Bundesland und 
                                    individueller Situation variieren.
                                </p>
                                <p className="text-gray-700 leading-relaxed">
                                    <strong>Wir empfehlen dringend</strong>, die Vorlage vor der Verwendung 
                                    von einem Rechtsanwalt oder einer fachkundigen Stelle prüfen und an deine 
                                    spezifischen Anforderungen anpassen zu lassen. Die Treatflow GmbH übernimmt 
                                    keine Gewähr und keine Haftung für Schäden, die aus der Verwendung dieser 
                                    Vorlage entstehen.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Interne Links */}
            <section className="py-20 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Weiterführende Themen
                    </h2>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        <Link href="/anamnesebogen-kosmetikstudio" className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Anamnesebogen</span>
                            <span className="text-sm text-gray-600">Anamnesebogen komplett digital mit Treatflow</span>
                        </Link>
                        <Link href="/formulare" className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Digitale Formulare</span>
                            <span className="text-sm text-gray-600">Alle Formulare für dein Studio</span>
                        </Link>
                        <Link href="/behandlungsdokumentation" className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Behandlungsdokumentation</span>
                            <span className="text-sm text-gray-600">Behandlungen rechtssicher dokumentieren</span>
                        </Link>
                        <Link href="/nisv-dokumentation" className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">NiSV-Dokumentation</span>
                            <span className="text-sm text-gray-600">Pflichten bei Laser, IPL & Co.</span>
                        </Link>
                        <Link href="/hygieneplan-kosmetikstudio-pdf" className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Hygieneplan-Vorlage</span>
                            <span className="text-sm text-gray-600">Kostenlose PDF-Vorlage zum Download</span>
                        </Link>
                        <Link href="/kosmetikstudio-software" className="group p-5 rounded-xl border border-gray-200 bg-white hover:border-indigo-200 hover:shadow-lg transition-all">
                            <span className="font-semibold text-gray-900 group-hover:text-indigo-600 block mb-1">Kosmetikstudio Software</span>
                            <span className="text-sm text-gray-600">All-in-One für dein Studio</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Upsell / Nächste Schritte */}
            <section className="py-20 bg-indigo-600">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">
                        Anamnesebogen, Einwilligung und Dokumentation komplett digital?
                    </h2>
                    <p className="text-indigo-100 text-lg mb-8 max-w-2xl mx-auto">
                        Mit Treatflow verwaltest du alle Formulare, Anamnesebögen, Einwilligungen und 
                        Behandlungsdokumentationen in einer Plattform – DSGVO-konform und speziell für 
                        Beauty-Studios entwickelt.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://app.treatflow.io/auth/register"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
                        >
                            14 Tage kostenlos testen
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </a>
                        <Link
                            href="/formulare"
                            className="inline-flex items-center justify-center border-2 border-indigo-300 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-500 transition-colors"
                        >
                            Digitale Formulare ansehen
                        </Link>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
