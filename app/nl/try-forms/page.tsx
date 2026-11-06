import { DemoGalleryPage, demoGalleryMetadata } from '@/app/components/demo-forms/routes';

export const metadata = demoGalleryMetadata('nl');

export default function TryFormsPage() {
  return <DemoGalleryPage locale="nl" />;
}
