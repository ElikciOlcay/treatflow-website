'use client';

import { useState, type ReactNode } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import Link from 'next/link';
import { DEMO_BOOKING_URL } from '@/app/i18n/market-access';

const faqsDe: { question: string; answer: ReactNode }[] = [
    {
        question: "Wie lange kann ich Treatflow kostenlos testen?",
        answer: "Du kannst Treatflow 14 Tage lang vollkommen kostenlos testen. Keine Kreditkarte erforderlich, keine versteckten Kosten. Nach dem Testzeitraum kannst du entscheiden, ob du weitermachen möchtest."
    },
    {
        question: "Was ist der Unterschied zwischen Basic und Booking?",
        answer: <>Basic (39 Euro/Monat) enthält unbegrenzte <Link href="/kundenverwaltung" className="text-indigo-600 hover:underline">Kundenverwaltung</Link>, Formular-Marketplace, KI-Generator und Shop-Integration. Booking (59 Euro/Monat) hat zusätzlich den professionellen <Link href="/terminkalender" className="text-indigo-600 hover:underline">Buchungskalender</Link> mit Buchungslink und automatische <Link href="/sms-erinnerungen-kosmetikstudio" className="text-indigo-600 hover:underline">Terminerinnerungen</Link>.</>
    },
    {
        question: "Ist Treatflow DSGVO-konform?",
        answer: <>Ja, absolut! Treatflow ist vollständig DSGVO-konform und erfüllt alle deutschen Datenschutzbestimmungen. Alle Daten werden verschlüsselt und sicher in Deutschland gespeichert. Auch die <Link href="/digitale-anamnese-kosmetikstudio" className="text-indigo-600 hover:underline">digitale Anamnese</Link> und <Link href="/behandlungsdokumentation-kosmetikstudio" className="text-indigo-600 hover:underline">Behandlungsdokumentation</Link> sind DSGVO-konform.</>
    },
    {
        question: "Kann ich meine bestehenden Kundendaten importieren?",
        answer: <>Ja, wir helfen dir beim kostenlosen Umzug deiner Daten. Unser Support-Team unterstützt dich dabei, deine bestehenden Kundendaten sicher in die <Link href="/kundenverwaltung" className="text-indigo-600 hover:underline">digitale Kundenkartei</Link> zu übertragen.</>
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
        answer: "Nein! Treatflow ist sehr einfach zu bedienen. Keine Installation nötig - einfach im Browser anmelden und loslegen. Bei Fragen hilft unser Support-Team gerne."
    },
    {
        question: "Wie funktioniert der Formular-Marketplace?",
        answer: <>Im Marketplace findest du professionelle <Link href="/formulare" className="text-indigo-600 hover:underline">Formulare</Link> für alle Beauty-Behandlungen. Du kannst sie direkt verwenden, mit dem KI-Generator anpassen oder mit dem Drag &amp; Drop Editor individualisieren. Auch <Link href="/digitale-anamnese-kosmetikstudio" className="text-indigo-600 hover:underline">digitale Anamnesebögen</Link> sind sofort verfügbar.</>
    },
    {
        question: "Kann ich unbegrenzt Kunden verwalten?",
        answer: "Ja! Du kannst unbegrenzt viele Kunden verwalten. Das System ist skalierbar und wächst mit deinem Studio. Mit der Import-Funktion kannst du bestehende Kundendaten einfach übertragen."
    }
];

const faqsEn: { question: string; answer: ReactNode }[] = [
    {
        question: "How long can I try Treatflow for free?",
        answer: "You can try Treatflow for 14 days, no credit card and no hidden fees. After the trial you decide whether to continue.",
    },
    {
        question: "What is the difference between Basic and Booking?",
        answer: <>Basic (€39/month) includes unlimited <Link href="/en/client-records" className="text-indigo-600 hover:underline">client records</Link>, form templates and the form shop. Booking (€59/month) adds the <Link href="/en/appointment-calendar" className="text-indigo-600 hover:underline">appointment calendar</Link>, online booking without commission and automatic <Link href="/en/messaging" className="text-indigo-600 hover:underline">reminders</Link>.</>,
    },
    {
        question: "Is Treatflow GDPR compliant?",
        answer: <>Treatflow is hosted on EU servers in Frankfurt, uses SSL encryption and daily backups. <Link href="/en/forms" className="text-indigo-600 hover:underline">Consent forms</Link> and <Link href="/en/treatment-documentation" className="text-indigo-600 hover:underline">treatment documentation</Link> sit on the client record.</>,
    },
    {
        question: "Can I import my existing client data?",
        answer: <>Yes. We help you migrate existing clients into the <Link href="/en/client-records" className="text-indigo-600 hover:underline">digital client record</Link> at no extra cost.</>,
    },
    {
        question: "Does Treatflow work on a phone?",
        answer: "Yes. Treatflow runs in the browser on computer, tablet and smartphone. No install required.",
    },
    {
        question: "What happens to my data if I cancel?",
        answer: "You stay in control. You can export your data. We only delete it after a transition period.",
    },
    {
        question: "Do I need technical skills?",
        answer: "No. Sign in in the browser and start. If you get stuck, our support team helps.",
    },
    {
        question: "Does Treatflow charge a booking commission?",
        answer: "No. Treatflow is studio software, not a marketplace. You pay a monthly plan and keep 100% of booking revenue.",
    },
    {
        question: "Can I manage unlimited clients?",
        answer: "Yes. There is no client cap. The system scales from solo studios to teams.",
    },
];

export default function FAQSection({ locale = 'de' }: { locale?: 'de' | 'en' }) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const faqs = locale === 'en' ? faqsEn : faqsDe;
    const isEn = locale === 'en';

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        <HelpCircle className="h-4 w-4" />
                        {isEn ? 'FAQ' : 'Häufige Fragen'}
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                        {isEn ? 'Still have questions?' : 'Noch Fragen?'}
                        <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                            {isEn ? ' We have answers.' : ' Wir haben Antworten!'}
                        </span>
                    </h2>
                    <p className="text-xl text-gray-600">
                        {isEn
                            ? 'The questions studios ask most often before they start.'
                            : 'Hier findest du Antworten auf die häufigsten Fragen zu Treatflow.'}
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
                            {isEn ? 'Need anything else?' : 'Hast du weitere Fragen?'}
                        </h3>
                        <p className="text-gray-600 mb-6">
                            {isEn
                                ? 'Write to us or book a call. We help you get set up.'
                                : 'Unser Support-Team hilft dir gerne weiter. Schreib uns eine E-Mail oder buche direkt ein Beratungsgespräch.'}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="mailto:hello@treatflow.io"
                                className="bg-white border-2 border-indigo-200 text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300"
                            >
                                hello@treatflow.io
                            </a>
                            <a
                                href={DEMO_BOOKING_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all duration-300"
                            >
                                {isEn ? 'Book a demo' : 'Beratung buchen'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
