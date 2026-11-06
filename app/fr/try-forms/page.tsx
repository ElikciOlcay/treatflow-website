import { DemoGalleryPage, demoGalleryMetadata } from '@/app/components/demo-forms/routes';

export const metadata = demoGalleryMetadata('fr');

export default function TryFormsPage() {
  return <DemoGalleryPage locale="fr" />;
}
