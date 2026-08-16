import LeadMagnetLanding, { leadMagnetMetadata } from '../components/LeadMagnetLanding';
import { getLeadMagnet } from '@/lib/leadMagnets';

const magnet = getLeadMagnet('kundenkartei-vorlage-kosmetikstudio-pdf')!;

export const metadata = leadMagnetMetadata(magnet);

export default function Page() {
    return <LeadMagnetLanding magnet={magnet} />;
}
