import { DemoGalleryPage, demoGalleryMetadata } from '@/app/components/demo-forms/routes';

export const metadata = demoGalleryMetadata('pl');

export default function TryFormsPage() {
  return <DemoGalleryPage locale="pl" />;
}
