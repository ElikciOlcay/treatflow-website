import LeadMagnetLanding, { leadMagnetMetadata } from '../components/LeadMagnetLanding';
import { getLeadMagnet } from '@/lib/leadMagnets';

const magnet = getLeadMagnet('no-show-playbook-kosmetikstudio-pdf')!;

export const metadata = leadMagnetMetadata(magnet);

export default function Page() {
    return <LeadMagnetLanding magnet={magnet} />;
}
