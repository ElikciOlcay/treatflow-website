'use client';

import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, ArrowRight, Share2, Heart, Star, CheckCircle, TrendingUp } from 'lucide-react';


const relatedPosts = [
    {
        slug: 'online-buchungssystem-vorteile',
        title: 'Warum jedes Kosmetikstudio 2024 ein Online-Buchungssystem braucht',
        category: 'Digitalisierung'
    },
    {
        slug: 'zusatzumsatz-kosmetikstudio-produkte',
        title: 'Zusatzumsatz generieren: Der ultimative Guide für Produktverkäufe',
        category: 'Business'
    }
];

export default function BlogPost() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Article Header */}
            <article className="pt-32 pb-20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb */}
                    <nav className="mb-8">
                        <Link href="/blog" className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium">
                            <ArrowLeft className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                            Zurück zum Blog
                        </Link>
                    </nav>

                    {/* Article Meta */}
                    <div className="mb-8">
                        <div className="flex items-center gap-4 mb-6">
                            <span className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-medium">
                                Kundenbindung
                            </span>
                            <div className="flex items-center text-gray-500">
                                <Calendar className="h-4 w-4 mr-2" />
                                15. Dezember 2024
                            </div>
                            <div className="flex items-center text-gray-500">
                                <Clock className="h-4 w-4 mr-2" />
                                8 min Lesezeit
                            </div>
                        </div>

                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                            5 bewährte Strategien für mehr Kundenbindung im Kosmetikstudio
                        </h1>

                        <p className="text-xl text-gray-600 leading-relaxed">
                            Entdecke die wirksamsten Methoden, um Kundinnen langfristig zu binden und die Wiederkehrrate zu erhöhen.
                            Von personalisierten Behandlungen bis zur digitalen Nachbetreuung - diese Strategien funktionieren wirklich.
                        </p>
                    </div>

                    {/* Featured Image */}
                    <div className="mb-12">
                        <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="/images/blog/kundenbindung-strategien.jpg"
                                alt="Kosmetikerin bei einer entspannenden Gesichtsbehandlung - Kundenbindung durch exzellenten Service"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-r-lg mb-8">
                            <h3 className="text-lg font-semibold text-indigo-900 mb-2">📊 Wichtige Statistik</h3>
                            <p className="text-indigo-800 mb-0">
                                <strong>Wusstest du, dass es 5x teurer ist, eine neue Kundin zu gewinnen, als eine bestehende zu halten?</strong>
                                Studios mit hoher Kundenbindung haben bis zu 40% höhere Umsätze. Zeit, deine Strategien zu überdenken!
                            </p>
                        </div>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Als Kosmetikerin weißt du: Eine zufriedene Stammkundin ist Gold wert. Sie kommt regelmäßig, empfiehlt dich weiter
                            und ist bereit, für Qualität zu bezahlen. Doch wie schaffst du es, aus Erstkundinnen treue Stammkundinnen zu machen?
                        </p>

                        <p className="text-gray-700 leading-relaxed mb-8">
                            In diesem Artikel zeige ich dir 5 bewährte Strategien, die in hunderten von Kosmetikstudios erfolgreich eingesetzt werden.
                            Diese Methoden sind praxiserprobt und lassen sich sofort umsetzen.
                        </p>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">1. Personalisierte Behandlungserfahrung schaffen</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Jede Kundin ist einzigartig - und genau so sollte sie sich auch fühlen. Personalisierung beginnt bereits beim ersten Termin
                            und zieht sich durch die gesamte Kundenbeziehung.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">✅ Praktische Umsetzung:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700"><strong>Ausführliche Anamnese:</strong> Notiere dir Hauttyp, Vorlieben, Allergien und persönliche Wünsche</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700"><strong>Behandlungshistorie:</strong> Führe Buch über alle Behandlungen und deren Erfolg</span>
                                </li>
                                <li className="flex items-start">
                                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-700"><strong>Persönliche Details:</strong> Merke dir Geburtstage, Hobbys oder wichtige Ereignisse</span>
                                </li>
                            </ul>
                        </div>

                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
                            <h4 className="text-green-800 font-semibold mb-2">💡 Profi-Tipp</h4>
                            <p className="text-green-800 mb-0">
                                Nutze eine professionelle Software wie Treatflow, um alle Kundendaten zentral zu speichern.
                                So hast du beim nächsten Termin sofort alle wichtigen Informationen zur Hand.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">2. Regelmäßige Nachbetreuung und Follow-Up</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Die Beziehung zu deiner Kundin endet nicht an der Studiotür. Regelmäßiger Kontakt zeigt, dass du dich um ihr Wohlbefinden kümmerst
                            und nicht nur am Verkauf interessiert bist.
                        </p>

                        <div className="bg-gray-50 p-6 rounded-lg mb-6">
                            <h4 className="font-semibold text-gray-900 mb-3">📱 Follow-Up Strategien:</h4>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <TrendingUp className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">24h nach der Behandlung:</strong>
                                        <span className="text-gray-700 block">Kurze WhatsApp oder SMS: "Wie geht es deiner Haut heute?"</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <TrendingUp className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">1 Woche später:</strong>
                                        <span className="text-gray-700 block">Pflegetipps und Nachfrage zum Behandlungserfolg</span>
                                    </div>
                                </li>
                                <li className="flex items-start">
                                    <TrendingUp className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                                    <div>
                                        <strong className="text-gray-900">4 Wochen später:</strong>
                                        <span className="text-gray-700 block">Erinnerung an den nächsten Termin mit persönlicher Note</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">3. Belohnungssystem und Treue-Programme</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Menschen lieben es, belohnt zu werden. Ein durchdachtes Treueprogramm motiviert Kundinnen, regelmäßig zu kommen
                            und mehr Geld auszugeben.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                            <div className="bg-purple-50 p-6 rounded-lg">
                                <Star className="h-8 w-8 text-purple-600 mb-3" />
                                <h4 className="font-semibold text-gray-900 mb-3">Punktesystem</h4>
                                <p className="text-gray-700 text-sm">
                                    Pro ausgegebenen Euro gibt es einen Punkt. Bei 100 Punkten gibt es 10€ Rabatt
                                    auf die nächste Behandlung.
                                </p>
                            </div>
                            <div className="bg-pink-50 p-6 rounded-lg">
                                <Heart className="h-8 w-8 text-pink-600 mb-3" />
                                <h4 className="font-semibold text-gray-900 mb-3">VIP-Status</h4>
                                <p className="text-gray-700 text-sm">
                                    Ab dem 5. Besuch werden Kundinnen zu VIP-Mitgliedern mit exklusiven Vorteilen
                                    und Rabatten.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">4. Exzellenter Kundenservice und Problemlösung</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Probleme und Beschwerden sind Chancen, um zu zeigen, wie sehr du deine Kundinnen schätzt.
                            Eine professionelle Problemlösung kann aus einer unzufriedenen Kundin eine treue Stammkundin machen.
                        </p>

                        <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg mb-8">
                            <h4 className="text-yellow-800 font-semibold mb-2">⚡ Die 24-Stunden-Regel</h4>
                            <p className="text-yellow-800 mb-0">
                                Reagiere innerhalb von 24 Stunden auf jede Beschwerde oder Anfrage. Schnelle Reaktionen zeigen Professionalität
                                und dass du deine Kundinnen ernst nimmst.
                            </p>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">5. Digitale Tools für bessere Kundenbindung nutzen</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Moderne Kundinnen erwarten moderne Lösungen. Online-Buchungen, automatische Erinnerungen und digitale Kundenkarten
                            machen das Leben für beide Seiten einfacher.
                        </p>

                        <div className="bg-indigo-50 p-6 rounded-lg mb-8">
                            <h4 className="font-semibold text-indigo-900 mb-4">🚀 Digitale Kundenbindung mit Treatflow:</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Online-Buchungssystem für 24/7 Terminvereinbarung</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Digitale Kundenkartei mit vollständiger Behandlungshistorie</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Professionelle Behandlungsdokumentation</span>
                                </li>
                                <li className="flex items-center">
                                    <CheckCircle className="h-4 w-4 text-indigo-600 mr-3" />
                                    <span className="text-indigo-800">Formularsystem mit individuellen Anamnesebögen</span>
                                </li>
                            </ul>
                        </div>

                        <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Fazit: Kundenbindung ist ein Marathon, kein Sprint</h2>

                        <p className="text-gray-700 leading-relaxed mb-6">
                            Erfolgreiche Kundenbindung passiert nicht über Nacht. Es ist ein kontinuierlicher Prozess, der Geduld,
                            Aufmerksamkeit und die richtigen Tools erfordert. Die Investition lohnt sich aber: Studios mit hoher
                            Kundenbindung sind nicht nur profitabler, sondern auch erfüllender zu führen.
                        </p>

                        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-8 rounded-2xl mb-12">
                            <h3 className="text-2xl font-bold mb-4">🎯 Dein nächster Schritt</h3>
                            <p className="mb-6 text-indigo-100">
                                Starte heute mit einer dieser Strategien. Wähle die aus, die am besten zu deinem Studio passt,
                                und setze sie konsequent um. Du wirst überrascht sein, wie schnell sich die Ergebnisse zeigen!
                            </p>
                            <Link
                                href="https://app.treatflow.io/"
                                target="_blank"
                                className="inline-flex items-center bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                            >
                                Treatflow kostenlos testen
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>

                    {/* Social Share */}
                    <div className="border-t border-gray-200 pt-8 mb-12">
                        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                            <div>
                                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hat dir der Artikel gefallen?</h3>
                                <p className="text-gray-600">Teile ihn mit anderen Kosmetikerinnen!</p>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        const text = '5 bewährte Strategien für mehr Kundenbindung im Kosmetikstudio - Treatflow Blog';
                                        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`, '_blank');
                                    }}
                                    className="inline-flex items-center bg-blue-500 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-600 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Twitter
                                </button>
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
                                    }}
                                    className="inline-flex items-center bg-blue-700 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-800 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    LinkedIn
                                </button>
                                <button
                                    onClick={() => {
                                        const url = window.location.href;
                                        const text = '5 bewährte Strategien für mehr Kundenbindung im Kosmetikstudio';
                                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`, '_blank');
                                    }}
                                    className="inline-flex items-center bg-blue-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-blue-700 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Facebook
                                </button>
                                <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(window.location.href);
                                        alert('Link in die Zwischenablage kopiert!');
                                    }}
                                    className="inline-flex items-center bg-gray-600 text-white px-3 py-2 sm:px-4 rounded-lg hover:bg-gray-700 transition-colors text-xs sm:text-sm"
                                >
                                    <Share2 className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                                    Kopieren
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related Posts */}
                    <div className="border-t border-gray-200 pt-12">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8">Das könnte dich auch interessieren</h3>
                        <div className="grid md:grid-cols-2 gap-8">
                            {relatedPosts.map((post) => (
                                <article key={post.slug} className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors">
                                    <span className="text-sm text-indigo-600 font-medium">{post.category}</span>
                                    <h4 className="text-lg font-semibold text-gray-900 mt-2 mb-4">{post.title}</h4>
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 font-medium"
                                    >
                                        Weiterlesen
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}
