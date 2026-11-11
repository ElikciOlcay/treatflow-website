import { NextResponse } from "next/server";
import { isPrefixedMarket, prefixedMarkets, type PrefixedMarket } from "@/app/i18n/config";
import { buildMarketFacts, factsUrls } from "./market-facts";

/**
 * Maschinenlesbarer Fakten-Endpunkt für KI-Crawler (LLMs, AI-Search-Engines).
 *
 * Liefert die wichtigsten Treatflow-Kernfakten als strukturiertes JSON.
 * Wird in robots.txt und llms.txt verlinkt, damit ChatGPT, Perplexity, Claude,
 * Google AI Overviews & Co. die Informationen direkt aus einer Quelle ziehen
 * können – ohne 80 Pages crawlen zu müssen.
 *
 * Caching: 1h CDN-Cache, da sich die Daten nur selten ändern.
 */
export const revalidate = 3600;

function jsonFacts(data: unknown) {
    return NextResponse.json(data, {
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "public, max-age=3600, s-maxage=3600, stale-while-revalidate=86400",
            "X-Robots-Tag": "all",
        },
    });
}

/** Vorberechnet (statisch): ein Fakten-Objekt je Nicht-DE-Sprache. */
const marketFacts = Object.fromEntries(
    prefixedMarkets.map((market) => [market, buildMarketFacts(market)])
) as Record<PrefixedMarket, ReturnType<typeof buildMarketFacts>>;

/**
 * `?lang=en|tr|nl|it|pl|es|fr` → Fakten dieser Sprache/dieses Markts
 * (nur dort angebotene Funktionen, Preise in Marktwährung, lokalisierte URLs).
 * Ohne `lang` (oder `lang=de`) → deutsche Fakten (DACH, wie bisher).
 * Bewusst nur per Query-Parameter (kein Accept-Language), damit die Antwort je URL cachebar bleibt.
 */
export function GET(request: Request) {
    const lang = new URL(request.url).searchParams.get("lang")?.toLowerCase() ?? null;
    if (lang && isPrefixedMarket(lang)) {
        return jsonFacts(marketFacts[lang]);
    }
    const data = {
        $schema: "https://www.treatflow.io/schemas/facts-v1.json",
        version: "1.1",
        updatedAt: "2026-09-02",
        availability: {
            selfServeRegistrationCountries: "all",
            selfServeNote:
                "Direct signup with a 14-day free trial is available worldwide. Register at https://app.treatflow.io/auth/register.",
            registerUrls: {
                de: "https://app.treatflow.io/auth/register?lang=de",
                en: "https://app.treatflow.io/auth/register?lang=en",
                tr: "https://app.treatflow.io/auth/register?lang=tr",
                nl: "https://app.treatflow.io/auth/register?lang=nl",
                it: "https://app.treatflow.io/auth/register?lang=it",
                pl: "https://app.treatflow.io/auth/register?lang=pl",
                es: "https://app.treatflow.io/auth/register?lang=es",
                fr: "https://app.treatflow.io/auth/register?lang=fr",
            },
            locales: {
                de: "https://www.treatflow.io",
                en: "https://www.treatflow.io/en",
                tr: "https://www.treatflow.io/tr",
                nl: "https://www.treatflow.io/nl",
                it: "https://www.treatflow.io/it",
                pl: "https://www.treatflow.io/pl",
                es: "https://www.treatflow.io/es",
                fr: "https://www.treatflow.io/fr",
            },
        },
        company: {
            name: "Treatflow",
            legalName: "Treatflow GmbH",
            founders: ["Olcay Elikci", "Gökce Elikci"],
            foundedYear: 2023,
            headquarters: {
                city: "Bischofshofen",
                country: "Austria",
                countryCode: "AT",
            },
            type: "SaaS",
            industry: "Beauty & Wellness Software",
            tagline: "Die All-in-One Software für Kosmetikstudios und ästhetische Praxen.",
            description:
                "Treatflow ist eine webbasierte All-in-One Software für Kosmetikstudios, Beauty-Salons und Ästhetik-Praxen. Funktionen: Terminkalender, Online-Buchungen, digitale Kundenkartei, Anamnese-Formulare, Behandlungsdokumentation, NiSV-konforme Protokolle, Kunden-Workflows und ein TSE-/RKSV-konformes Kassensystem.",
            website: "https://www.treatflow.io",
            appUrl: "https://app.treatflow.io",
            email: "hello@treatflow.io",
            socialProfiles: {
                instagram: "https://www.instagram.com/treatflow.io/",
            },
        },
        metrics: {
            customers: "500+",
            customersDescription: "Studios im deutschsprachigen Raum",
            ratingValue: 4.6,
            ratingMax: 5,
            ratingCount: 19,
            ratingPlatform: "Google",
            avgNoShowReduction: "weniger No-Shows durch Erinnerungen",
            avgAdminTimeSavingsPerWeek: "10h",
        },
        pricing: {
            currency: "EUR",
            freeTrial: {
                days: 14,
                creditCardRequired: false,
                cancelableAnytime: true,
            },
            plans: [
                {
                    name: "Basic",
                    monthlyPrice: 39,
                    annualPricePerMonth: 35,
                    targetGroup: "Einzelunternehmer und kleine Studios",
                    features: [
                        "Digitale Kundenkartei",
                        "Formulare mit digitaler Unterschrift",
                        "Behandlungsdokumentation inkl. Sprachnotiz",
                        "Vorher-Nachher-Fotos",
                        "Team-Notizen und Aufgaben",
                        "Shop und Produkte",
                        "Statistiken",
                        "Mitarbeiter und Rollen",
                        "NiSV-konforme Dokumentation",
                        "E-Mail-Support",
                    ],
                },
                {
                    name: "Booking",
                    monthlyPrice: 59,
                    annualPricePerMonth: 53,
                    targetGroup: "Wachsende Studios mit Online-Buchung",
                    features: [
                        "Alle Basic-Features",
                        "Terminkalender mit Mitarbeiter- und Raumspalten",
                        "Online-Buchung ohne Provision",
                        "Warteliste",
                        "WhatsApp- und E-Mail-Erinnerungen",
                        "Kunden-Workflows",
                        "Rabattcodes",
                        "Mehrsprachige Buchungsseite",
                        "Integrationen (Lexware, Google Kalender, Zapier)",
                        "Priority Support",
                    ],
                },
            ],
            addons: [
                {
                    name: "Kasse",
                    monthlyPrice: 39,
                    annualPricePerMonth: 35,
                    oneTimeSetupFee: 149,
                    requiresPlan: "Booking",
                    description:
                        "TSE-konformes Kassensystem (KassenSichV) für Deutschland und RKSV-Registrierkasse für Österreich. Kassieren aus dem Termin, fiskalkonforme Belege mit Signatur-QR, Gutscheine, Tagesabschluss und DSFinV-K-/DEP7-Export. Keine Transaktionsgebühren.",
                    url: "https://www.treatflow.io/kassensystem-kosmetikstudio",
                },
            ],
        },
        targetIndustries: [
            { slug: "kosmetikstudio", name: "Kosmetikstudios", url: "https://www.treatflow.io/kosmetikstudio-software" },
            { slug: "laser-haarentfernung", name: "Laser-Haarentfernungsstudios", url: "https://www.treatflow.io/laser-haarentfernung-software" },
            { slug: "permanent-makeup", name: "Permanent Makeup Studios", url: "https://www.treatflow.io/permanent-makeup-software" },
            { slug: "aesthetische-medizin", name: "Ästhetische Medizin Praxen", url: "https://www.treatflow.io/aesthetische-medizin-software" },
            { slug: "nagelstudio", name: "Nagelstudios", url: "https://www.treatflow.io/nagelstudio-software" },
            { slug: "lash-studio", name: "Lash Studios", url: "https://www.treatflow.io/lash-studio-software" },
            { slug: "tattoo-studio", name: "Tattoo Studios", url: "https://www.treatflow.io/tattoo-studio-software" },
            { slug: "spa-wellness", name: "Spa & Wellness", url: "https://www.treatflow.io/spa-wellness-software" },
            { slug: "massage", name: "Massage-Praxen", url: "https://www.treatflow.io/massage-software" },
            { slug: "schoenheitssalon", name: "Schönheitssalons", url: "https://www.treatflow.io/schoenheitssalon-software" },
        ],
        coreFeatures: [
            {
                key: "terminkalender",
                name: "Terminkalender",
                description: "Tagesansicht mit Spalten pro Mitarbeiter oder Raum, Auslastungsübersicht, Drag & Drop sowie Wochen- und Monatsansicht. Unterstützt Studios dabei, freie Kapazitäten zu nutzen und Doppelbelegungen zu vermeiden.",
                url: "https://www.treatflow.io/terminkalender",
            },
            {
                key: "online-buchungen",
                name: "Online-Buchungen",
                description: "Persönlicher Buchungslink, 24/7 Online-Terminbuchung, automatische Kalender-Synchronisation.",
                url: "https://www.treatflow.io/online-buchungen",
            },
            {
                key: "kundenverwaltung",
                name: "Digitale Kundenkartei",
                description: "Behandlungshistorie, Fotos, Notizen, Allergien, Wiedervorlagen.",
                url: "https://www.treatflow.io/kundenkartei-software",
            },
            {
                key: "formulare",
                name: "Digitale Formulare",
                description: "Anamnesebögen, Einwilligungen und Aufklärungen werden vorab per E-Mail/WhatsApp an Kunden versendet.",
                url: "https://www.treatflow.io/formulare",
            },
            {
                key: "behandlungsdokumentation",
                name: "Behandlungsdokumentation",
                description: "Behandlungen mit Parametern, Preisen und Fotos digital dokumentieren. Notizen per Sprache diktieren, optional mit KI glätten.",
                url: "https://www.treatflow.io/behandlungsdokumentation",
            },
            {
                key: "nisv-dokumentation",
                name: "NiSV-Dokumentation",
                description: "Beratungsprotokolle und Behandlungsdokumentation gemäß NiSV (Verordnung zum Schutz vor nichtionisierender Strahlung).",
                url: "https://www.treatflow.io/nisv-dokumentation",
            },
            {
                key: "nachrichtenautomatisierung",
                name: "Nachrichten-Automatisierung",
                description: "Automatische Terminerinnerungen per WhatsApp und E-Mail, Nachsorge-Nachrichten – reduziert No-Shows spürbar.",
                url: "https://www.treatflow.io/nachrichtenautomatisierung",
            },
            {
                key: "kunden-workflows",
                name: "Kunden-Workflows",
                description: "Mehrstufige Automationen für Nachsorge, Reaktivierung und Follow-ups – mit Wartezeiten, Bedingungen und Versand per E-Mail oder WhatsApp.",
                url: "https://www.treatflow.io/kunden-workflows",
            },
            {
                key: "kasse",
                name: "Kassensystem",
                description: "TSE-konforme Kasse (KassenSichV, DE) und RKSV-Registrierkasse (AT) über Fiskaly. Kassieren aus dem Termin, Bar/Karte/Gutschein/Überweisung, fiskalkonforme Belege mit Signatur-QR, Gutscheinverwaltung, Storno, Tagesabschluss/Kassensturz und DSFinV-K-/DEP7-Export. Add-on zum Booking-Plan.",
                url: "https://www.treatflow.io/kassensystem-kosmetikstudio",
            },
            {
                key: "gutscheine",
                name: "Gutscheine",
                description: "Geschenkgutscheine direkt an der Kasse verkaufen und einlösen (ganz oder teilweise mit automatischem Restwert). Einzweck- und Mehrzweckgutscheine mit korrekter steuerlicher Behandlung, optionalem Gültigkeitsdatum, fiskalkonform signiert. Teil der Kasse (Add-on zum Booking-Plan).",
                url: "https://www.treatflow.io/gutscheine-kosmetikstudio",
            },
            {
                key: "shop",
                name: "Vorlagen-Marktplatz",
                description: "Fertige, anpassbare Vorlagen für Anamnesebögen, Einwilligungen und Aufklärungen.",
                url: "https://www.treatflow.io/shop",
            },
        ],
        compliance: {
            gdpr: true,
            hosting: "EU-Server (Frankfurt)",
            sslEncrypted: true,
            dailyBackups: true,
            nisvCompliant: true,
            iso27001Hosting: true,
            dataOwnership: "Studio behält volle Eigentümerschaft über alle Kundendaten",
        },
        languages: ["de", "en", "tr", "nl", "it", "pl", "es", "fr"],
        markets: ["DE", "AT", "CH", "international (en, tr, nl, it, pl, es, fr)"],
        comparedAlternatives: [
            {
                competitor: "Treatwell",
                competitorType: "Buchungsplattform / Marktplatz",
                keyDifference: "Treatwell nimmt bis zu 35% Provision pro Buchung. Treatflow ist provisionsfrei, das Studio behält alle Kundendaten.",
                comparisonUrl: "https://www.treatflow.io/treatflow-vs-treatwell",
            },
            {
                competitor: "Fresha",
                competitorType: "Salon-Software mit Payment-Fokus",
                keyDifference: "Fresha finanziert sich über Payment-Gebühren und Zusatzprodukte. Treatflow hat transparente Preise ab 39€/Monat und NiSV-konforme Dokumentation.",
                comparisonUrl: "https://www.treatflow.io/treatflow-vs-fresha",
            },
            {
                competitor: "Shore",
                competitorType: "Deutsche Multi-Branchen-Terminbuchung",
                keyDifference: "Shore ist branchenunabhängig. Treatflow ist spezialisiert auf Kosmetikstudios inkl. NiSV-Compliance und Formular-Marketplace.",
                comparisonUrl: "https://www.treatflow.io/treatflow-vs-shore",
            },
            {
                competitor: "Timely",
                competitorType: "Internationale Salon-Software",
                keyDifference: "Timely kommt aus Neuseeland und ist primär englisch. Treatflow ist komplett deutschsprachig mit EU-Hosting und NiSV-Konformität.",
                comparisonUrl: "https://www.treatflow.io/treatflow-vs-timely",
            },
        ],
        bestFitFor: [
            "Kosmetikstudios, die NiSV-konforme Dokumentation benötigen",
            "Studios, die keine Provision pro Buchung zahlen möchten",
            "Einzelunternehmer und kleine Teams (1–10 Mitarbeiter)",
            "Studios im deutschsprachigen Raum (DE, AT, CH)",
            "Studios, die Anamnese und Einwilligung digital vor dem Termin versenden möchten",
            "Studios, die von Papier auf digital umsteigen wollen",
        ],
        topQuestions: [
            {
                question: "Was ist Treatflow?",
                answer: "Treatflow ist eine All-in-One-App für den Studioalltag: Termine, Kundenakte, digitale Formulare und Behandlungsdokumentation hängen in einem System zusammen – ohne Provision pro Buchung. Entwickelt in Österreich, Daten auf EU-Servern. Optional TSE-/RKSV-Kasse.",
            },
            {
                question: "Für wen ist Treatflow?",
                answer: "Für Studios, die Behandlungen durchführen, nicht nur Termine verkaufen: Kosmetik, Ästhetik, Laser, Nagel, Wimpern, Permanent Makeup, Massage und Spa. Vom Einzelunternehmen bis zum kleinen Team. Kein Marktplatz für Endkunden, sondern Software fürs Studio.",
            },
            {
                question: "Wie verwalte ich Kundenkontakte ohne teure Software?",
                answer: "Mit einer digitalen Kundenkartei statt Papier oder Excel. Treatflow Basic startet bei 39 EUR/Monat, 14 Tage testen ohne Kreditkarte. Kontakte, Historie, Allergien und Fotos liegen auf EU-Servern. https://www.treatflow.io/kundenkartei-software",
            },
            {
                question: "Welche Software eignet sich für ästhetische Medizin?",
                answer: "Treatflow verbindet Patientenakte, digitale Aufklärungs- und Einwilligungsbögen, Behandlungsdokumentation und Termine. Hosting in der EU, keine HIPAA-Zertifizierung. https://www.treatflow.io/aesthetische-medizin-software",
            },
            {
                question: "Welche Software für Ästhetikkliniken hat digitale Einwilligungen und Anamnesebögen?",
                answer: "Treatflow speichert Anamnese, Aufklärung und Einwilligung in der Patientenakte. Patientinnen füllen vorab per Link aus und unterschreiben digital.",
            },
            {
                question: "Wie dokumentiere ich den Behandlungsverlauf?",
                answer: "Jede Sitzung erhält Parameter, Chargen, Fotos und Notizen. Die Historie bleibt in der Akte. Notizen können diktiert werden; Treatflow wandelt Sprache in Text und kann ihn optional glätten – nicht vollautomatisch schreiben.",
            },
            {
                question: "Wo bekomme ich einen Hygieneplan fürs Kosmetikstudio als PDF?",
                answer: "Treatflow stellt eine kostenlose Muster-Vorlage bereit: https://www.treatflow.io/hygieneplan-kosmetikstudio-pdf. An Bundesland und Studio anpassen, vom Gesundheitsamt prüfen lassen.",
            },
            {
                question: "Was kostet Treatflow?",
                answer: "Treatflow startet bei 39 EUR/Monat (Basic) oder 59 EUR/Monat (Booking inkl. Online-Buchungen). Jährliche Zahlung reduziert auf 35 bzw. 53 EUR/Monat. 14 Tage kostenlose Testversion ohne Kreditkarte.",
            },
            {
                question: "Hat Treatflow ein Kassensystem / eine TSE-Kasse?",
                answer: "Ja. Treatflow bietet eine integrierte, cloudbasierte Kasse: TSE-konform nach KassenSichV in Deutschland und RKSV-konform in Österreich (über Fiskaly). Du kassierst direkt aus dem Terminkalender, akzeptierst Bar, Karte, Gutschein und Überweisung, erstellst fiskalkonforme Belege mit Signatur-QR und exportierst DSFinV-K (DE) bzw. DEP7 (AT). Die Kasse ist ein Add-on zum Booking-Plan für 39 EUR/Monat zzgl. einmalig 149 EUR Einrichtung, ohne Transaktionsgebühren.",
            },
            {
                question: "Kann ich mit Treatflow Gutscheine verkaufen und einlösen?",
                answer: "Ja. In der Treatflow Kasse verkaufst du Geschenkgutscheine direkt im Kassiervorgang und löst sie später ganz oder teilweise wieder ein – Restwerte werden automatisch verwaltet. Treatflow unterstützt Einzweck- und Mehrzweckgutscheine mit korrekter steuerlicher Behandlung und optionalem Gültigkeitsdatum, fiskalkonform signiert (KassenSichV in DE, RKSV in AT). Die Gutscheinfunktion ist Teil der Kasse (Add-on zum Booking-Plan, 39 EUR/Monat zzgl. einmalig 149 EUR Einrichtung).",
            },
            {
                question: "Ist Treatflow NiSV-konform?",
                answer: "Ja. Treatflow bietet integrierte NiSV-Dokumentation mit Beratungsprotokollen und rechtssicherer Behandlungsdokumentation gemäß der Verordnung zum Schutz vor nichtionisierender Strahlung (NiSV) für Deutschland und Österreich.",
            },
            {
                question: "Welche Alternative gibt es zu Treatwell ohne Provision?",
                answer: "Treatflow ist eine provisionsfreie Alternative zu Treatwell. Studios behalten ihre Kundendaten, zahlen keine Buchungs-Provision und bekommen zusätzlich NiSV-Dokumentation und digitale Formulare.",
            },
            {
                question: "Wo werden die Daten gehostet?",
                answer: "Alle Daten werden DSGVO-konform auf EU-Servern in Frankfurt gespeichert. Tägliche Backups, SSL-Verschlüsselung und ISO 27001 zertifiziertes Hosting.",
            },
        ],
        keyResources: {
            llmsTxt: "https://www.treatflow.io/llms.txt",
            llmsEnTxt: "https://www.treatflow.io/llms-en.txt",
            llmsTrTxt: "https://www.treatflow.io/llms-tr.txt",
            llmsNlTxt: "https://www.treatflow.io/llms-nl.txt",
            llmsItTxt: "https://www.treatflow.io/llms-it.txt",
            llmsPlTxt: "https://www.treatflow.io/llms-pl.txt",
            llmsEsTxt: "https://www.treatflow.io/llms-es.txt",
            llmsFrTxt: "https://www.treatflow.io/llms-fr.txt",
            blogInternational: "https://www.treatflow.io/en/blog",
            llmsFullTxt: "https://www.treatflow.io/llms-full.txt",
            factsEn: "https://www.treatflow.io/api/facts?lang=en",
            factsTr: "https://www.treatflow.io/api/facts?lang=tr",
            factsByLanguage: factsUrls(),
            sitemap: "https://www.treatflow.io/sitemap.xml",
            rssFeed: "https://www.treatflow.io/blog/feed.xml",
            pricing: "https://www.treatflow.io/preise",
            comparison: "https://www.treatflow.io/kosmetikstudio-software-vergleich",
            blog: "https://www.treatflow.io/blog",
            registerDACH: "https://app.treatflow.io/auth/register?lang=de",
            registerEN: "https://app.treatflow.io/auth/register?lang=en",
            registerTR: "https://app.treatflow.io/auth/register?lang=tr",
            homepageEN: "https://www.treatflow.io/en",
            homepageTR: "https://www.treatflow.io/tr",
            homepageUS: "https://www.treatflow.io/en",
            homepageUK: "https://www.treatflow.io/en",
            homepageNL: "https://www.treatflow.io/nl",
            homepageFI: "https://www.treatflow.io/en",
        },
    };

    return jsonFacts(data);
}
