'use client';

import { CheckCircle, X, Star, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);
  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Star className="h-4 w-4 fill-current" />
            Transparente Preise
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Einfache Preise -
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> keine versteckten Kosten</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Wähle das Paket, das zu deinem Studio passt. 14 Tage kostenlos testen - ohne Risiko.
          </p>
        </div>

        {/* Pricing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 p-1 rounded-xl flex">
            <button
              onClick={() => setIsYearly(false)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 ${!isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Monatlich
            </button>
            <button
              onClick={() => setIsYearly(true)}
              className={`px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 relative ${isYearly
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
                }`}
            >
              Jährlich
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Spare 10%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-indigo-300 hover:shadow-lg transition-all duration-300">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Basic</h3>
              <div className="text-4xl font-bold text-gray-900 mb-1">
                {isYearly ? (
                  <>€421<span className="text-lg text-gray-600">/Jahr</span></>
                ) : (
                  <>€39<span className="text-lg text-gray-600">/Monat</span></>
                )}
              </div>
              {isYearly && (
                <p className="text-sm text-green-600 font-medium">
                  €35/Monat • Spare €47/Jahr
                </p>
              )}
              <p className="text-sm text-gray-500">Perfekt für kleine Studios und Einzelunternehmer.</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Kundenverwaltung</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Formulare</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Dokumentation</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">Vorlagen für Anamnesen</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700 text-sm">E-Mail Support</span>
              </li>
              <li className="flex items-center">
                <X className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Terminverwaltung</span>
              </li>
              <li className="flex items-center">
                <X className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Online-Buchungssystem</span>
              </li>
              <li className="flex items-center">
                <X className="h-4 w-4 text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400 text-sm">Priority Support</span>
              </li>
            </ul>

            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-semibold hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
            >
              14 Tage gratis testen
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>

          {/* Booking Plan - Featured */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white text-indigo-600 text-xs font-bold px-3 py-1 rounded-full">
              Beliebt
            </div>

            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2">Booking</h3>
              <div className="text-4xl font-bold mb-1">
                {isYearly ? (
                  <>€637<span className="text-lg text-indigo-200">/Jahr</span></>
                ) : (
                  <>€59<span className="text-lg text-indigo-200">/Monat</span></>
                )}
              </div>
              {isYearly && (
                <p className="text-sm text-green-300 font-medium">
                  €53/Monat • Spare €71/Jahr
                </p>
              )}
              <p className="text-sm text-indigo-200">Ideal für wachsende Studios mit Online-Buchung.</p>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-300 mr-3 flex-shrink-0" />
                <span className="text-sm">Alles aus Basic</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-300 mr-3 flex-shrink-0" />
                <span className="text-sm">Terminverwaltung</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-300 mr-3 flex-shrink-0" />
                <span className="text-sm">Online-Buchungssystem</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-300 mr-3 flex-shrink-0" />
                <span className="text-sm">Erweiterte Einstellungen</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-300 mr-3 flex-shrink-0" />
                <span className="text-sm">Priority E-Mail &amp; Chat Support</span>
              </li>
            </ul>

            <a
              href="https://app.treatflow.io/auth/register"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-white text-indigo-600 py-3 rounded-xl font-bold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center"
            >
              14 Tage gratis testen
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="text-center mt-12">
          <div className="bg-gray-50 rounded-xl p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              14 Tage kostenlos testen
            </h3>
            <p className="text-gray-600 mb-4 text-sm">
              Keine Kreditkarte erforderlich • Jederzeit kündbar • Kostenloser Datenumzug
            </p>
            <div className="flex justify-center space-x-6 text-xs text-gray-500">
              <span>✓ Keine Setup-Gebühren</span>
              <span>✓ Monatlich kündbar</span>
              <span>✓ DSGVO-konform</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}