import { DemoGalleryPage, demoGalleryMetadata } from '@/app/components/demo-forms/routes';

export const metadata = demoGalleryMetadata('de');

export default function TryFormsPage() {
  return <DemoGalleryPage locale="de" />;
}
