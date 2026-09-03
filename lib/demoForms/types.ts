export type DemoFieldType =
  | 'text'
  | 'email'
  | 'tel'
  | 'number'
  | 'date'
  | 'textarea'
  | 'select'
  | 'radio'
  | 'checkbox'
  | 'heading'
  | 'paragraph'
  | 'image'
  | 'file'
  | 'drawing'
  | 'signature';

export type DemoFormField = {
  id: string;
  type: DemoFieldType | string;
  label: string;
  required: boolean;
  placeholder?: string;
  options?: string[];
  description?: string;
  imageUrl?: string;
  drawingTemplate?: string;
  conditionFieldId?: string;
  conditionValue?: string;
};

export type DemoSignatureSlot = {
  id: string;
  label: string;
  required?: boolean;
};

export type DemoFormPage = {
  id: string;
  title: string;
  type: 'form' | 'document' | 'confirmation';
  fields: DemoFormField[];
  content?: string;
  signature_required?: boolean;
  signature_text?: string;
  signature_slots?: DemoSignatureSlot[];
};

export type DemoFormTemplate = {
  id: string;
  name: string;
  description: string;
  category: string;
  difficulty: 'einfach' | 'mittel' | 'komplex' | string;
  pages: DemoFormPage[];
  tags?: string[];
};

export type DemoFormMeta = {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: string;
  difficulty: string;
  pageCount: number;
  fieldCount: number;
  featured: boolean;
  accent: string;
  iconBg: string;
  iconColor: string;
};
