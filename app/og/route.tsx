import { ImageResponse } from 'next/og';
import type { NextRequest } from 'next/server';

export const runtime = 'edge';

type OgContent = {
    eyebrow: string;
    title: string;
    subtitle: string;
};

const SLUG_MAP: Record<string, OgContent> = {
    'image': {
        eyebrow: 'Treatflow',
        title: 'Kosmetikstudio Software',
        subtitle: 'Termine, Kundenkartei, Doku - alles in einer App',
    },
    'kosmetikstudio-software': {
        eyebrow: 'Software',
        title: 'Kosmetikstudio Software',
        subtitle: 'Termine, Kunden und Dokumentation digital',
    },
    'kosmetikstudio-software-kostenlos': {
        eyebrow: 'Software',
        title: 'Kosmetikstudio Software kostenlos testen',
        subtitle: '14 Tage gratis, ohne Kreditkarte',
    },
    'blog': {
        eyebrow: 'Treatflow Blog',
        title: 'Tipps & Trends fuer Beauty-Profis',
        subtitle: 'Praxiswissen fuer dein Kosmetikstudio',
    },
    'shop': {
        eyebrow: 'Marketplace',
        title: 'Vorlagen fuer Anamnese & Einwilligung',
        subtitle: 'Sofort einsetzbar fuer dein Studio',
    },
    'team': {
        eyebrow: 'Ueber uns',
        title: 'Das Team hinter Treatflow',
        subtitle: 'Made in Austria - mit dir entwickelt',
    },
    'kontakt': {
        eyebrow: 'Kontakt',
        title: 'Sprich mit dem Treatflow-Team',
        subtitle: 'Persoenliche Beratung & Support',
    },
    'online-buchungen': {
        eyebrow: 'Funktion',
        title: 'Online-Buchungen 24/7',
        subtitle: 'Buchungslink, Bestaetigungen, weniger No-Shows',
    },
    'sms-erinnerungen': {
        eyebrow: 'Funktion',
        title: 'SMS-Erinnerungen',
        subtitle: 'Bis zu 80% weniger No-Shows automatisch',
    },
    'digitale-anamnese': {
        eyebrow: 'Funktion',
        title: 'Digitale Anamnese',
        subtitle: 'Papierlos, vorab, rechtssicher',
    },
    'anamnesebogen-kosmetikstudio': {
        eyebrow: 'Vorlage',
        title: 'Anamnesebogen Kosmetikstudio',
        subtitle: 'Digital, NiSV-konform, sofort startbar',
    },
    'behandlungsdokumentation-kosmetikstudio': {
        eyebrow: 'Doku',
        title: 'Behandlungsdokumentation',
        subtitle: 'NiSV-konform, mit Foto und Verlauf',
    },
    'hygieneplan-kosmetikstudio': {
        eyebrow: 'Download',
        title: 'Hygieneplan Kosmetikstudio',
        subtitle: 'Kostenlose PDF-Vorlage zum Ausfuellen',
    },
    'website-service': {
        eyebrow: 'Service',
        title: 'Website fuer dein Kosmetikstudio',
        subtitle: 'Individuell, mobil, buchungsstark - ab 1.000 EUR',
    },
    'pmu-software': {
        eyebrow: 'Branche',
        title: 'Permanent Makeup Software',
        subtitle: 'Termine, Einwilligungen, Doku - alles dabei',
    },
    'laser-software': {
        eyebrow: 'Branche',
        title: 'Laser & IPL Software',
        subtitle: 'NiSV-konform dokumentieren und planen',
    },
    'aesthetik-software': {
        eyebrow: 'Branche',
        title: 'Aesthetische Medizin Software',
        subtitle: 'Praxis-, Patienten- und Doku-Management',
    },
    'tattoo-software': {
        eyebrow: 'Branche',
        title: 'Tattoo Studio Software',
        subtitle: 'Einwilligungen, Buchungen, Kundenakte',
    },
    'nagelstudio-software': {
        eyebrow: 'Branche',
        title: 'Nagelstudio Software',
        subtitle: 'Termine und Kundenvorlieben digital',
    },
    'lash-software': {
        eyebrow: 'Branche',
        title: 'Lash Studio Software',
        subtitle: 'Wimpern, Refill-Planung, Kundenkartei',
    },
    'spa-software': {
        eyebrow: 'Branche',
        title: 'Spa & Wellness Software',
        subtitle: 'Gaesteverwaltung, Buchungen, Pakete',
    },
    'massage-software': {
        eyebrow: 'Branche',
        title: 'Massage Software',
        subtitle: 'Termine, Gesundheitsfragebogen, Verlauf',
    },
};

const FALLBACK: OgContent = {
    eyebrow: 'Treatflow',
    title: 'Software fuer dein Kosmetikstudio',
    subtitle: 'Termine, Kundenkartei, Dokumentation - DSGVO-konform',
};

function resolveSlug(slug: string | null): OgContent {
    if (!slug) return FALLBACK;
    const key = slug.replace(/^og-/, '').replace(/\.jpg$/, '').replace(/\.png$/, '');
    return SLUG_MAP[key] ?? FALLBACK;
}

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);
    const slug = searchParams.get('slug');
    const titleParam = searchParams.get('title');
    const subtitleParam = searchParams.get('subtitle');

    const resolved = resolveSlug(slug);
    const content: OgContent = {
        eyebrow: resolved.eyebrow,
        title: titleParam ?? resolved.title,
        subtitle: subtitleParam ?? resolved.subtitle,
    };

    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: '#ffffff',
                    backgroundImage:
                        'radial-gradient(circle at 85% 15%, rgba(99, 102, 241, 0.18) 0%, rgba(255,255,255,0) 55%), radial-gradient(circle at 10% 90%, rgba(16, 185, 129, 0.12) 0%, rgba(255,255,255,0) 50%)',
                    padding: '72px 80px',
                    fontFamily: 'Inter, sans-serif',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: 56,
                            height: 56,
                            borderRadius: 16,
                            backgroundColor: '#4f46e5',
                            color: '#ffffff',
                            fontSize: 32,
                            fontWeight: 800,
                        }}
                    >
                        T
                    </div>
                    <div
                        style={{
                            fontSize: 30,
                            fontWeight: 700,
                            color: '#0f172a',
                            letterSpacing: -0.5,
                        }}
                    >
                        Treatflow
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 1000 }}>
                    <div
                        style={{
                            display: 'flex',
                            alignSelf: 'flex-start',
                            padding: '8px 18px',
                            borderRadius: 999,
                            backgroundColor: '#eef2ff',
                            color: '#4f46e5',
                            fontSize: 22,
                            fontWeight: 600,
                            letterSpacing: 0.2,
                        }}
                    >
                        {content.eyebrow}
                    </div>
                    <div
                        style={{
                            fontSize: 72,
                            fontWeight: 800,
                            color: '#0f172a',
                            lineHeight: 1.05,
                            letterSpacing: -1,
                        }}
                    >
                        {content.title}
                    </div>
                    <div
                        style={{
                            fontSize: 32,
                            color: '#475569',
                            lineHeight: 1.3,
                            fontWeight: 500,
                        }}
                    >
                        {content.subtitle}
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        fontSize: 22,
                        color: '#64748b',
                        fontWeight: 500,
                    }}
                >
                    <div style={{ display: 'flex', gap: 28 }}>
                        <span>DSGVO-konform</span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span>NiSV-konform</span>
                        <span style={{ color: '#cbd5e1' }}>|</span>
                        <span>Made in Austria</span>
                    </div>
                    <div style={{ color: '#4f46e5', fontWeight: 700 }}>treatflow.io</div>
                </div>
            </div>
        ),
        {
            width: 1200,
            height: 630,
            headers: {
                'Cache-Control': 'public, max-age=31536000, immutable',
            },
        },
    );
}
