import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export const metadata = {
    title: 'Impressum - Treatflow Rechtliche Informationen',
    description: 'Impressum und rechtliche Informationen zu Treatflow. Angaben gemäß § 5 TMG. Kontaktdaten, Handelsregister und Verantwortliche Personen.',
    robots: {
        index: false,
        follow: true,
    },
};

export default function ImpressumPage() {
    return (
        <div className="min-h-screen bg-white">
            <Navigation />

            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-br from-gray-50 to-indigo-50/30">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                            Impressum
                        </h1>
                        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                            Rechtliche Informationen gemäß § 5 TMG
                        </p>
                    </div>
                </div>
            </section>

            {/* Impressum Content */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8">

                        {/* Angaben gemäß § 5 TMG */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Angaben gemäß § 5 TMG
                            </h2>
                            <div className="space-y-2 text-gray-700">
                                <p><strong>Treatflow</strong></p>
                                <p>Gökce Elikci</p>
                                <p>Bahnhofstrasse 17</p>
                                <p>5500 Bischofshofen</p>
                                <p>Österreich</p>
                            </div>
                        </div>

                        {/* Kontakt */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Kontakt
                            </h2>
                            <div className="space-y-2 text-gray-700">
                                <p>
                                    <strong>E-Mail:</strong>{' '}
                                    <a href="mailto:hello@treatflow.io" className="text-indigo-600 hover:text-indigo-700">
                                        hello@treatflow.io
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* EU-Streitschlichtung */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                EU-Streitschlichtung
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
                                <a
                                    href="https://ec.europa.eu/consumers/odr/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 hover:text-indigo-700"
                                >
                                    https://ec.europa.eu/consumers/odr/
                                </a>
                                <br />
                                Unsere E-Mail-Adresse finden Sie oben im Impressum.
                            </p>
                        </div>

                        {/* Verbraucherstreitbeilegung */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Verbraucherstreitbeilegung/Universalschlichtungsstelle
                            </h2>
                            <p className="text-gray-700 leading-relaxed">
                                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                                Verbraucherschlichtungsstelle teilzunehmen.
                            </p>
                        </div>

                        {/* Haftung für Inhalte */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Haftung für Inhalte
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
                                allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
                                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach
                                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
                                Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
                                Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen
                                werden wir diese Inhalte umgehend entfernen.
                            </p>
                        </div>

                        {/* Haftung für Links */}
                        <div className="mb-12">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Haftung für Links
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben.
                                Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
                                Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
                                Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche
                                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                            </p>
                        </div>

                        {/* Urheberrecht */}
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">
                                Urheberrecht
                            </h2>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
                                österreichischen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen
                                Autors bzw. Erstellers.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
                                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter
                                beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
                                Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von
                                Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
