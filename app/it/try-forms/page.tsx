import { DemoGalleryPage, demoGalleryMetadata } from '@/app/components/demo-forms/routes';

export const metadata = demoGalleryMetadata('it');

export default function TryFormsPage() {
  return <DemoGalleryPage locale="it" />;
}
