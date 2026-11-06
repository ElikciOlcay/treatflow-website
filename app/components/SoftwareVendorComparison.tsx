import Link from 'next/link';

export type VendorRow = {
    name: string;
    href?: string;
    bestFor: string;
    documentation: string;
    pos: string;
    pricing: string;
    highlight?: boolean;
};

/**
 * Angaben zu Mitbewerbern: Stand November 2026, laut Anbieter-Websites bzw. öffentlich
 * zugänglichen Preisvergleichen. Vor Änderungen am Anbieter prüfen.
 */
export const vendorRows: VendorRow[] = [
    {
        name: 'Treatflow',
        href: '/preise',
        bestFor: 'Kosmetik-, Laser-, PMU- und Ästhetikstudios',
        documentation: 'Anamnese, Einwilligung mit Unterschrift, Behandlungs- und NiSV-Dokumentation, Fotos',
        pos: 'TSE (DE) und RKSV (AT), Add-on 39 €/Monat',
        pricing: 'Festpreis ab 39 €/Monat, keine Provision pro Buchung',
        highlight: true,
    },
    {
        name: 'Shore',
        href: 'https://www.shore.com/en/pricing',
        bestFor: 'Friseure und Dienstleister mit Marketingfokus',
        documentation: 'Kundenkartei, keine spezielle NiSV-Dokumentation beworben',
        pos: 'Eigene POS-Tarife, Cloud-TSE 9 €/Monat',
        pricing: 'Booking ab 39,90 €/Monat im 1. Jahr, danach 49,90 € (jährliche Zahlung)',
    },
    {
        name: 'studiolution',
        href: 'https://www.studiolution.com',
        bestFor: 'Friseur- und Kosmetiksalons mit Kassenfokus',
        documentation: 'Kundenkartei, keine spezielle NiSV-Dokumentation beworben',
        pos: 'Zertifizierte Kasse',
        pricing: 'Monatsabo, Preise beim Anbieter',
    },
    {
        name: 'Planity',
        href: 'https://www.planity.com',
        bestFor: 'Salons, die Neukunden über die Plattform gewinnen wollen',
        documentation: 'Kundenkartei',
        pos: 'Im Paket mit Kasse und Zahlungsterminal',
        pricing: 'Preis auf Anfrage',
    },
    {
        name: 'Salonized',
        href: 'https://www.salonized.com',
        bestFor: 'Kleine bis mittlere Salons',
        documentation: 'Kundenkartei',
        pos: 'Kassenmodul',
        pricing: 'Monatsabo, Preise beim Anbieter',
    },
    {
        name: 'Fresha',
        href: 'https://www.fresha.com',
        bestFor: 'Einzelpersonen mit kleinem Budget',
        documentation: 'Kundenkartei',
        pos: 'Kasse integriert',
        pricing: 'Monatsabo plus 20 % Gebühr auf Neukunden über den Marktplatz',
    },
    {
        name: 'Pabau',
        href: 'https://pabau.com',
        bestFor: 'Ästhetische Kliniken mit mehreren Standorten',
        documentation: 'Elektronische Patientenakte, digitale Einwilligungen',
        pos: 'Siehe Anbieter',
        pricing: 'Preise beim Anbieter',
    },
];

export default function SoftwareVendorComparison({
    rows = vendorRows,
    caption = 'Stand: November 2026. Angaben zu anderen Anbietern laut deren Websites, ohne Gewähr.',
}: {
    rows?: VendorRow[];
    caption?: string;
}) {
    return (
        <div className="overflow-x-auto rounded-2xl border border-gray-200">
            <table className="min-w-full text-left text-sm">
                <caption className="caption-bottom px-4 py-3 text-xs text-gray-500 text-left">{caption}</caption>
                <thead className="bg-gray-50 text-gray-900">
                    <tr>
                        <th scope="col" className="px-4 py-3 font-semibold">Software</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Am besten für</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Dokumentation &amp; Formulare</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Kasse DE / AT</th>
                        <th scope="col" className="px-4 py-3 font-semibold">Preismodell</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {rows.map((row) => (
                        <tr key={row.name} className={row.highlight ? 'bg-indigo-50/60' : 'bg-white'}>
                            <th scope="row" className="px-4 py-4 font-semibold text-gray-900 whitespace-nowrap">
                                {row.href && row.href.startsWith('/') ? (
                                    <Link href={row.href} className="text-indigo-700 hover:underline">{row.name}</Link>
                                ) : row.href ? (
                                    <a href={row.href} target="_blank" rel="noopener noreferrer nofollow" className="hover:underline">
                                        {row.name}
                                    </a>
                                ) : (
                                    row.name
                                )}
                            </th>
                            <td className="px-4 py-4 text-gray-700">{row.bestFor}</td>
                            <td className="px-4 py-4 text-gray-700">{row.documentation}</td>
                            <td className="px-4 py-4 text-gray-700">{row.pos}</td>
                            <td className="px-4 py-4 text-gray-700">{row.pricing}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
