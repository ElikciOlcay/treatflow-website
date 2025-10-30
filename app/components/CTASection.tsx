export default function CTASection() {
    return (
        <section className="py-20 bg-indigo-600">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl font-bold text-white mb-4">
                    Bereit, dein Studio zu revolutionieren?
                </h2>
                <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
                    Starte noch heute mit deiner kostenlosen 14-Tage Testphase.
                    Keine Kreditkarte erforderlich, keine versteckten Kosten.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a 
                        href="https://app.treatflow.io/auth/register"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                    >
                        Kostenlos testen
                    </a>
                    <a
                        href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
                    >
                        Beratung buchen
                    </a>
                </div>
            </div>
        </section>
    );
}
