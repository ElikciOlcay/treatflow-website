'use client';

import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "Wie lange kann ich Treatflow kostenlos testen?",
        answer: "Du kannst Treatflow 14 Tage lang vollkommen kostenlos testen. Keine Kreditkarte erforderlich, keine versteckten Kosten. Nach dem Testzeitraum kannst du entscheiden, ob du weitermachen möchtest."
    },
    {
        question: "Was ist der Unterschied zwischen Basic und Booking?",
        answer: "Basic (€39/Monat) enthält unbegrenzte Kundenverwaltung, Formular-Marketplace, KI-Generator und Shop-Integration. Booking (€59/Monat) hat zusätzlich den professionellen Buchungskalender mit Buchungslink und automatische Terminerinnerungen."
    },
    {
        question: "Ist Treatflow DSGVO-konform?",
        answer: "Ja, absolut! Treatflow ist vollständig DSGVO-konform und erfüllt alle deutschen Datenschutzbestimmungen. Alle Daten werden verschlüsselt und sicher in Deutschland gespeichert."
    },
    {
        question: "Kann ich meine bestehenden Kundendaten importieren?",
        answer: "Ja, wir helfen dir beim kostenlosen Umzug deiner Daten. Unser Support-Team unterstützt dich dabei, deine bestehenden Kundendaten sicher zu Treatflow zu übertragen."
    },
    {
        question: "Funktioniert Treatflow auch auf dem Handy?",
        answer: "Ja! Treatflow funktioniert perfekt auf allen Geräten - Computer, Tablet und Smartphone. Du hast überall Zugriff auf deine Kunden- und Termindaten."
    },
    {
        question: "Was passiert mit meinen Daten, wenn ich kündige?",
        answer: "Du behältst die volle Kontrolle über deine Daten. Bei einer Kündigung kannst du alle deine Daten exportieren. Wir löschen deine Daten erst nach einer Übergangsfrist vollständig."
    },
    {
        question: "Brauche ich technische Kenntnisse für Treatflow?",
        answer: "Nein! Treatflow ist so einfach zu bedienen wie WhatsApp. Keine Installation nötig - einfach im Browser anmelden und loslegen. Bei Fragen hilft unser Support-Team gerne."
    },
    {
        question: "Wie funktioniert der Formular-Marketplace?",
        answer: "Im Marketplace findest du professionelle Formulare für alle Beauty-Behandlungen. Du kannst sie direkt verwenden, mit dem KI-Generator anpassen oder mit dem Drag & Drop Editor individualisieren."
    },
    {
        question: "Kann ich unbegrenzt Kunden verwalten?",
        answer: "Ja! Du kannst unbegrenzt viele Kunden verwalten. Das System ist skalierbar und wächst mit deinem Studio. Mit der Import-Funktion kannst du bestehende Kundendaten einfach übertragen."
    }
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <HelpCircle className="h-4 w-4" />
                        Häufige Fragen
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        Noch Fragen?
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Wir haben Antworten!</span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        Hier findest du Antworten auf die häufigsten Fragen zu Treatflow.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl border border-gray-200 hover:border-indigo-200 transition-all duration-300 overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                                    {faq.question}
                                </h3>
                                <ChevronDown
                                    className={`h-5 w-5 text-indigo-600 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''
                                        }`}
                                />
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-8 pb-6">
                                    <p className="text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-8 border border-indigo-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-4">
                            Weitere Fragen?
                        </h3>
                        <p className="text-gray-600 mb-6">
                            Unser Support-Team hilft dir gerne weiter. Schreib uns eine E-Mail oder buche direkt ein Beratungsgespräch.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:hello@treatflow.io"
                                className="bg-white border-2 border-indigo-200 text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
                            >
                                hello@treatflow.io
                            </a>
                            <a
                                href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300"
                            >
                                Beratung buchen
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
