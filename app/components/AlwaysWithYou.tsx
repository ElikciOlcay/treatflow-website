import { Sunrise, Sparkles, Sofa, Smartphone, Tablet, Monitor } from 'lucide-react';

const moments = [
  {
    icon: Sunrise,
    time: 'Morgens im Studio',
    text: 'Tagesübersicht auf einen Blick - wer kommt wann, welche Behandlung steht an.',
  },
  {
    icon: Sparkles,
    time: 'Zwischen Behandlungen',
    text: 'Schnell die nächste Kundin checken, Notizen lesen und vorbereitet sein.',
  },
  {
    icon: Sofa,
    time: 'Abends auf der Couch',
    text: 'Termine für morgen prüfen, neue Buchungen sehen und entspannt planen.',
  },
];

const devices = [
  { icon: Smartphone, label: 'Handy' },
  { icon: Tablet, label: 'Tablet' },
  { icon: Monitor, label: 'Computer' },
];

export default function AlwaysWithYou() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Dein Studio immer im Blick
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              Ob im Studio, unterwegs oder zuhause - Treatflow ist immer an
              deiner Seite. Funktioniert auf jedem Gerät, synchronisiert in
              Echtzeit.
            </p>

            <div className="space-y-6">
              {moments.map((m) => (
                <div key={m.time} className="flex gap-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <m.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 mb-1">
                      {m.time}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {m.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-white rounded-3xl border border-gray-200 shadow-xl p-8 lg:p-10 w-full max-w-md">
              <div className="text-center mb-8">
                <div className="text-sm font-semibold text-indigo-600 mb-2">
                  Funktioniert auf
                </div>
                <div className="text-2xl font-bold text-gray-900">
                  Jedem Gerät
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {devices.map((d) => (
                  <div
                    key={d.label}
                    className="flex flex-col items-center gap-3 bg-gray-50 rounded-2xl p-5 border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                      <d.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <span className="text-sm font-medium text-gray-700">
                      {d.label}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                  Echtzeit-Synchronisation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
