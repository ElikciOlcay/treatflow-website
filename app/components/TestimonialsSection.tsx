import { Star, ExternalLink } from "lucide-react";

const testimonials = [
    {
        text: 'Seit Dezember 2024 nutzen wir Treatflow mit einem dreiköpfigen Team. Es ist eine große Arbeitserleichterung und spart Zeit, da wir unseren Kundinnen die gesetzlich vorgeschriebenen Formulare vorab zusenden können. Wir arbeiten vollständig digital und erfüllen alle gesetzlichen NiSV-Anforderungen. Klare Empfehlung.',
        name: 'Maren Burmeister',
        studio: 'haarfrei',
        initials: 'MB',
        color: 'bg-teal-600',
    },
    {
        text: 'Ich kann Treatflow wirklich jedem nur ans Herz legen. Die App bietet großartige Möglichkeiten, die sowohl uns als auch unseren Kunden das Leben erleichtern. Ein Must-Have für alle Studios. Für uns eine sehr große Arbeitserleichterung. Kein Papierkram mehr und nichts geht verloren.',
        name: 'Fatma Suna',
        studio: 'Kosmetikstudio',
        initials: 'FS',
        color: 'bg-amber-600',
    },
    {
        text: 'Wir sind mit Treatflow wirklich sehr zufrieden! Besonders hervorzuheben ist, dass auf Wünsche und Vorschläge immer eingegangen wird. Alles wird sofort verständlich erklärt und auch direkt umgesetzt. Man fühlt sich bestens betreut und ernst genommen.',
        name: 'E. B.',
        studio: 'Kosmetikstudio',
        initials: 'EB',
        color: 'bg-rose-500',
    },
    {
        text: 'Ganz toller Service. Herr Elikci ist sehr nett, erklärt alles verständlich und macht sich auch die Mühe bei den einzelnen Formularen zu helfen. Für mich eine Arbeitserleichterung – hab alles für die Kunden griffbereit an einem Ort.',
        name: 'Valeska Weber',
        studio: 'Skin13',
        initials: 'VW',
        color: 'bg-indigo-500',
    },
    {
        text: 'Der Service ist einfach super und meine Kunden sind äußerst zufrieden mit den Online-Formularen. Endlich konnten wir uns von lästigem Papierkram verabschieden. Die Benutzerfreundlichkeit und die effiziente Handhabung machen die gesamte Erfahrung stressfrei.',
        name: 'Mit Liebe zum Detail',
        studio: 'Kosmetikstudio',
        initials: 'ML',
        color: 'bg-pink-500',
    },
    {
        text: 'Ein sehr freundliches, kompetentes, kundenorientiertes und hilfsbereites Team. Das Programm passt perfekt in mein Unternehmen und man kann alles so anpassen, wie man es braucht. Ihr habt mein Unternehmen besser gemacht.',
        name: 'Evangelia Karapouliou',
        studio: 'Adam & Eva Kosmetikstudio',
        initials: 'EK',
        color: 'bg-green-500',
    },
];

export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-1.5 mb-4">
                        <div className="flex text-amber-400">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 fill-current" />
                            ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-900 ml-1">4.9/5 auf Google</span>
                    </div>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Was unsere Kunden sagen
                    </h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Über 500 Kosmetikstudios vertrauen bereits auf Treatflow für ihr Studio-Management.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div key={t.name} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
                            <div className="flex text-amber-400 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-current" />
                                ))}
                                <svg viewBox="0 0 24 24" className="h-4 w-4 ml-auto text-gray-300" fill="currentColor">
                                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
                                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                                </svg>
                            </div>
                            <p className="text-gray-600 text-sm leading-relaxed mb-5">
                                &ldquo;{t.text}&rdquo;
                            </p>
                            <div className="flex items-center">
                                <div className={`w-10 h-10 ${t.color} rounded-full flex items-center justify-center text-white text-sm font-semibold`}>
                                    {t.initials}
                                </div>
                                <div className="ml-3">
                                    <div className="font-semibold text-gray-900 text-sm">{t.name}</div>
                                    <div className="text-xs text-gray-500">{t.studio}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-10">
                    <a
                        href="https://www.google.com/maps/place/Treatflow/@48.2107453,16.3725042,17z/data=!4m8!3m7!1s0x476da81f06e65b73:0x2c72e0f3d985fea7!8m2!3d48.2107453!4d16.3725042!9m1!1b1!16s%2Fg%2F11wfqh4h0b"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-indigo-600 transition-colors"
                    >
                        Alle Bewertungen auf Google ansehen
                        <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                </div>
            </div>
        </section>
    );
}
