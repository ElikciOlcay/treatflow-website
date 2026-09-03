import templatesDe from './templates.json';
import templatesEn from './templates-en.json';
import type { DemoFormPage, DemoFormTemplate, DemoFormMeta } from './types';
import { type DemoLocale, getDemoCopy } from './copy';

export type { DemoFormField, DemoFormPage, DemoFormTemplate, DemoFormMeta, DemoSignatureSlot } from './types';
export type { DemoLocale } from './copy';
export {
  getDemoCopy,
  DEMO_FORMS_PATH,
  DEMO_FORMS_FEATURE_PATH,
  demoFormHreflang,
  demoFormHreflangEn,
} from './copy';

const FEATURED_ORDER = [
  'facial-treatment-1',
  'laser-hair-removal-1',
  'permanent-makeup-1',
  'lash-extension-1',
  'nail-design-1',
  'microneedling-1',
] as const;

const ACCENTS: Record<string, { accent: string; iconBg: string; iconColor: string }> = {
  'facial-treatment-1': {
    accent: 'from-indigo-500 to-violet-500',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  },
  'laser-hair-removal-1': {
    accent: 'from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-100',
    iconColor: 'text-blue-600',
  },
  'permanent-makeup-1': {
    accent: 'from-rose-500 to-pink-500',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
  },
  'lash-extension-1': {
    accent: 'from-violet-500 to-purple-500',
    iconBg: 'bg-violet-100',
    iconColor: 'text-violet-600',
  },
  'nail-design-1': {
    accent: 'from-pink-500 to-rose-500',
    iconBg: 'bg-pink-100',
    iconColor: 'text-pink-600',
  },
  'microneedling-1': {
    accent: 'from-teal-500 to-emerald-500',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
};

const rawByLocale: Record<DemoLocale, DemoFormTemplate[]> = {
  de: templatesDe as DemoFormTemplate[],
  en: templatesEn as DemoFormTemplate[],
};

function countFields(pages: DemoFormPage[]): number {
  return pages.reduce((sum, page) => sum + (page.fields?.length || 0), 0);
}

function toMeta(form: DemoFormTemplate): DemoFormMeta {
  const style = ACCENTS[form.id] ?? {
    accent: 'from-indigo-500 to-violet-500',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
  };

  return {
    id: form.id,
    slug: form.id,
    name: form.name,
    description: form.description,
    category: form.category,
    difficulty: form.difficulty,
    pageCount: form.pages.length,
    fieldCount: countFields(form.pages),
    featured: ['facial-treatment-1', 'laser-hair-removal-1', 'permanent-makeup-1'].includes(form.id),
    ...style,
  };
}

export function getDemoFormTemplates(locale: DemoLocale = 'de'): DemoFormTemplate[] {
  const raw = rawByLocale[locale] ?? rawByLocale.de;
  return FEATURED_ORDER.map((id) => raw.find((form) => form.id === id)).filter(
    (form): form is DemoFormTemplate => Boolean(form)
  );
}

export function getDemoForms(locale: DemoLocale = 'de'): DemoFormMeta[] {
  return getDemoFormTemplates(locale).map(toMeta);
}

export const DEMO_FORM_TEMPLATES = getDemoFormTemplates('de');
export const DEMO_FORMS = getDemoForms('de');

export function getDemoForm(slug: string, locale: DemoLocale = 'de'): DemoFormTemplate | undefined {
  return getDemoFormTemplates(locale).find((form) => form.id === slug);
}

export function getDemoFormMeta(slug: string, locale: DemoLocale = 'de'): DemoFormMeta | undefined {
  return getDemoForms(locale).find((form) => form.slug === slug);
}

export function getFillPages(form: DemoFormTemplate): DemoFormPage[] {
  return form.pages.filter((page) => page.type !== 'confirmation');
}

export function getConfirmationPage(form: DemoFormTemplate): DemoFormPage | undefined {
  return form.pages.find((page) => page.type === 'confirmation');
}

export function getPageSignatureSlots(
  page: DemoFormPage | null | undefined,
  locale: DemoLocale = 'de'
) {
  if (!page) return [];
  if (page.signature_slots && page.signature_slots.length > 0) {
    return page.signature_slots.map((slot) => ({
      ...slot,
      required: slot.required !== false,
    }));
  }
  if (page.signature_required) {
    return [
      {
        id: 'patient',
        label: page.signature_text || getDemoCopy(locale).player.defaultSignature,
        required: true,
      },
    ];
  }
  return [];
}

export function signatureFieldName(pageId: string, slotId: string): string {
  return `page_signature_${pageId}__${slotId}`;
}
