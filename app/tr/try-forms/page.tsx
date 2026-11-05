import type { Metadata } from 'next';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import DemoFormsGallery from '../../components/demo-forms/DemoFormsGallery';
import { demoFormHreflangTr, getDemoCopy } from '@/lib/demoForms';

const copy = getDemoCopy('tr');

export const metadata: Metadata = {
  title: copy.meta.galleryTitle,
  description: copy.meta.galleryDescription,
  alternates: demoFormHreflangTr(),
  openGraph: {
    title: `${copy.meta.galleryTitle} | Treatflow`,
    description: copy.meta.galleryDescription,
    url: 'https://www.treatflow.io/tr/try-forms',
    locale: 'tr_TR',
  },
};

export default async function TryFormsPage() {

  return (
    <div className="min-h-screen bg-white">
      <Navigation market="tr" />
      <DemoFormsGallery locale="tr" />
      <Footer market="tr" />
    </div>
  );
}
