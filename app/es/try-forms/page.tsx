import { DemoGalleryPage, demoGalleryMetadata } from '@/app/components/demo-forms/routes';

export const metadata = demoGalleryMetadata('es');

export default function TryFormsPage() {
  return <DemoGalleryPage locale="es" />;
}
