import type { Metadata } from 'next';
import { ogLocaleTags } from '@/app/i18n/config';
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
    locale: ogLocaleTags.tr,
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
