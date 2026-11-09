import { BadgeCheck, CreditCard, FileSpreadsheet, Gift, Landmark, Lock, ReceiptText, ShieldCheck, Smartphone, Sparkles } from 'lucide-react';

const ITEMS = [
    { icon: ShieldCheck, label: 'TSE nach KassenSichV' },
    { icon: BadgeCheck, label: 'RKSV-Registrierkasse' },
    { icon: Landmark, label: 'ELSTER-Kassenmeldung' },
    { icon: Lock, label: 'FinanzOnline-Registrierung' },
    { icon: FileSpreadsheet, label: 'DSFinV-K & DEP7' },
    { icon: CreditCard, label: 'SumUp Solo & Air' },
    { icon: Gift, label: 'Gutscheine' },
    { icon: ReceiptText, label: 'Beleg per E-Mail' },
    { icon: Smartphone, label: 'Tablet, Laptop, Handy' },
    { icon: Sparkles, label: 'Made in Austria' },
];

/** Laufband mit den wichtigsten Stichworten; bei reduzierter Bewegung steht es still. */
export default function KasseTrustMarquee() {
    return (
        <section aria-label="Die Treatflow Kasse auf einen Blick" className="border-y border-gray-100 bg-gray-50/70 py-5">
            <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
                <div className="tf-pos-marquee flex w-max gap-3">
                    {[0, 1].map((copy) => (
                        <ul key={copy} className="flex gap-3" aria-hidden={copy === 1 ? true : undefined}>
                            {ITEMS.map(({ icon: Icon, label }) => (
                                <li
                                    key={label}
                                    className="flex items-center gap-2 whitespace-nowrap rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm"
                                >
                                    <Icon className="h-4 w-4 text-indigo-500" />
                                    {label}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
            </div>
        </section>
    );
}
