import { DemoGalleryPage, demoGalleryMetadata } from '@/app/components/demo-forms/routes';

export const metadata = demoGalleryMetadata('tr');

export default function TryFormsPage() {
  return <DemoGalleryPage locale="tr" />;
}
