import type { Metadata } from 'next';
import NavigationEn from '../../components/NavigationEn';
import FooterEn from '../../components/FooterEn';
import HtmlLang from '../../components/HtmlLang';
import DemoFormsGallery from '../../components/demo-forms/DemoFormsGallery';
import { demoFormHreflangTr, getDemoCopy } from '@/lib/demoForms';
import { getDictionaryForMarket } from '../../i18n/dictionaries';

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
  const dict = await getDictionaryForMarket('tr');

  return (
    <div className="min-h-screen bg-white">
      <HtmlLang lang="tr" />
      <NavigationEn dict={dict} locale="tr" />
      <DemoFormsGallery locale="tr" />
      <FooterEn dict={dict} locale="tr" />
    </div>
  );
}
