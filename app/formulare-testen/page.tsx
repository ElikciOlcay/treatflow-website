import type { Metadata } from 'next';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DemoFormsGallery from '../components/demo-forms/DemoFormsGallery';
import { getDemoCopy } from '@/lib/demoForms';
import { buildHreflangAlternates } from '../i18n/seo';

const copy = getDemoCopy('de');

export const metadata: Metadata = {
  title: copy.meta.galleryTitle,
  description: copy.meta.galleryDescription,
  alternates: {
    canonical: 'https://www.treatflow.io/formulare-testen',
    ...buildHreflangAlternates('try-forms'),
  },
  openGraph: {
    title: `${copy.meta.galleryTitle} | Treatflow`,
    description: copy.meta.galleryDescription,
    url: 'https://www.treatflow.io/formulare-testen',
  },
};

export default function FormulareTestenPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <DemoFormsGallery locale="de" />
      <Footer />
    </div>
  );
}
