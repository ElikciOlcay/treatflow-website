import { DemoGalleryPage, demoGalleryMetadata } from '@/app/components/demo-forms/routes';

export const metadata = demoGalleryMetadata('en');

export default function TryFormsPage() {
  return <DemoGalleryPage locale="en" />;
}
