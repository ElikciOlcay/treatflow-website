import LeadMagnetLanding, { leadMagnetMetadata } from '../components/LeadMagnetLanding';
import { getLeadMagnet } from '@/lib/leadMagnets';

const magnet = getLeadMagnet('preisliste-vorlage-kosmetikstudio-pdf')!;

export const metadata = leadMagnetMetadata(magnet);

export default function Page() {
    return <LeadMagnetLanding magnet={magnet} />;
}
