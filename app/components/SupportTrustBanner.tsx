import Image from 'next/image';
import { ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

export default function SupportTrustBanner() {
  return (
    <section className="py-12 bg-white" aria-label="Persönliche Betreuung und Schulungen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 shadow-xl">
          {/* Dekorative Lichtkreise */}
          <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
          <div className="pointer-events-none absolute right-1/4 -bottom-10 h-44 w-44 rounded-full bg-fuchsia-300/20 blur-3xl" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-center p-6 sm:p-8 lg:p-10">
            {/* Text & Inhalte */}
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Persönliche Betreuung
              </div>

              <h2 className="mt-4 text-2xl lg:text-3xl font-bold text-white leading-tight">
                Wir lassen dich nicht allein
              </h2>
              <p className="mt-3 text-base text-white/85 leading-relaxed">
                Von der Einrichtung bis zur Schulung: Unser Team begleitet dich
                persönlich beim Start mit Treatflow – damit du und dein Team vom
                ersten Tag an sicher arbeiten.
              </p>

              <div className="mt-6 flex flex-col sm:flex-row gap-3">
                <a
                  href="https://meetings-eu1.hubspot.com/olcay-elikci/treatflow-beratung?uuid=1193ce3c-32b4-42ff-96c6-bb0b6752719f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-indigo-700 shadow-md transition-all duration-300 hover:bg-indigo-50 hover:shadow-lg hover:-translate-y-0.5"
                >
                  Kostenlose Demo buchen
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://app.treatflow.io/auth/register"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                >
                  14 Tage kostenlos testen
                </a>
              </div>
            </div>

            {/* Portrait */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[260px]">
                <div className="relative aspect-square overflow-hidden rounded-3xl ring-4 ring-white/20 shadow-2xl">
                  <Image
                    src="/images/support-betreuung.png"
                    alt="Persönliche Betreuung und Schulung durch das Treatflow-Team"
                    fill
                    sizes="(max-width: 1024px) 100vw, 30vw"
                    className="object-cover"
                  />
                </div>
                {/* Vertrauens-Badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 text-xs font-semibold text-gray-900 shadow-lg whitespace-nowrap">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-500" />
                  Persönlich. Auf Deutsch. Inklusive.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
