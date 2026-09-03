import type { Metadata } from 'next';
import NavigationEn from '../../components/NavigationEn';
import FooterEn from '../../components/FooterEn';
import HtmlLang from '../../components/HtmlLang';
import DemoFormsGallery from '../../components/demo-forms/DemoFormsGallery';
import { demoFormHreflangEn, getDemoCopy } from '@/lib/demoForms';
import { getDictionaryForMarket } from '../../i18n/dictionaries';

const copy = getDemoCopy('en');

export const metadata: Metadata = {
  title: copy.meta.galleryTitle,
  description: copy.meta.galleryDescription,
  alternates: demoFormHreflangEn(),
  openGraph: {
    title: `${copy.meta.galleryTitle} | Treatflow`,
    description: copy.meta.galleryDescription,
    url: 'https://www.treatflow.io/en/try-forms',
    locale: 'en_US',
  },
};

export default async function TryFormsPage() {
  const dict = await getDictionaryForMarket('en');

  return (
    <div className="min-h-screen bg-white">
      <HtmlLang lang="en" />
      <NavigationEn dict={dict} locale="en" />
      <DemoFormsGallery locale="en" />
      <FooterEn dict={dict} locale="en" />
    </div>
  );
}
