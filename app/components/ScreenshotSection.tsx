import { Monitor, Smartphone } from "lucide-react";

export default function ScreenshotSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Sieh Treatflow in Aktion
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Entdecke alle Funktionen in unserem Video oder schaue dir die Screenshots an.
          </p>
        </div>

        {/* Video */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/uvQo-X5_w3k"
                  title="Treatflow in 3 Minuten erklärt"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Screenshots Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Desktop Screenshot */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Monitor className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Desktop Version</span>
              </div>
            </div>
            <div className="aspect-video overflow-hidden">
              <img
                src="/images/mockups/desktop-version.png"
                alt="Treatflow Desktop Version - Vollständige Übersicht aller Funktionen auf dem Desktop"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Mobile Screenshot */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Smartphone className="h-5 w-5 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">Mobile App</span>
              </div>
            </div>
            <div className="aspect-video overflow-hidden">
              <img
                src="/images/mockups/mobile-version.png"
                alt="Treatflow Mobile App - Vollständige Funktionalität auch unterwegs auf dem Smartphone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Dokumentation Screenshot */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="bg-gray-100 p-4 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-purple-500 rounded"></div>
                <span className="text-sm font-medium text-gray-700">Dokumentation</span>
              </div>
            </div>
            <div className="aspect-video overflow-hidden">
              <img
                src="/images/mockups/ai-doc.png"
                alt="Treatflow Dokumentation - Intelligente Behandlungsdokumentation für professionelle Aufzeichnungen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-lg text-gray-600 mb-6">
            Bereit für den Test? Probiere Treatflow 14 Tage kostenlos aus.
          </p>
          <a 
            href="https://app.treatflow.io/auth/register"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            Jetzt kostenlos testen
          </a>
        </div>
      </div>
    </section>
  );
}
