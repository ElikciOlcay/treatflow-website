'use client';

import type { DemoFormField } from '@/lib/demoForms';

type Answers = Record<string, string | string[]>;

type DemoFormFieldsProps = {
  fields: DemoFormField[];
  answers: Answers;
  errors: Record<string, string>;
  onChange: (fieldId: string, value: string | string[]) => void;
  isVisible: (field: DemoFormField) => boolean;
  drawingSkip: string;
  fileSkip: string;
};

const inputClass = (hasError: boolean) =>
  `block w-full rounded-md border px-3 py-2 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 ${
    hasError ? 'border-red-300 bg-red-50' : 'border-gray-300'
  }`;

export default function DemoFormFields({
  fields,
  answers,
  errors,
  onChange,
  isVisible,
  drawingSkip,
  fileSkip,
}: DemoFormFieldsProps) {
  return (
    <div className="space-y-6">
      {fields.map((field) => {
        if (!isVisible(field)) return null;
        const fieldKey = `field_${field.id}`;
        const error = errors[fieldKey];
        const requiredMark = field.required ? <span className="text-red-500">*</span> : null;

        if (field.type === 'heading') {
          return (
            <div key={field.id} className="border-b border-gray-200 pb-3 mb-2">
              <h3 className="text-lg font-medium text-gray-900">{field.label}</h3>
              {field.description && <p className="mt-1 text-sm text-gray-500">{field.description}</p>}
            </div>
          );
        }

        if (field.type === 'paragraph') {
          return (
            <p key={field.id} className="text-sm text-gray-700">
              {field.label}
            </p>
          );
        }

        if (field.type === 'image' && field.imageUrl) {
          return (
            <div key={field.id}>
              {field.label && <p className="text-sm font-medium text-gray-700 mb-2">{field.label}</p>}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={field.imageUrl} alt={field.label || ''} className="max-w-full h-auto rounded-md" />
            </div>
          );
        }

        if (field.type === 'drawing' || field.type === 'file') {
          return (
            <div key={field.id} className="rounded-xl border border-dashed border-gray-300 bg-gray-50 px-4 py-5">
              <p className="text-sm font-medium text-gray-800">{field.label}</p>
              <p className="mt-1 text-sm text-gray-500">
                {field.type === 'drawing' ? drawingSkip : fileSkip}
              </p>
            </div>
          );
        }

        if (field.type === 'textarea') {
          return (
            <div key={field.id}>
              <label htmlFor={fieldKey} className="block text-sm font-medium text-gray-700 mb-1">
                {field.label} {requiredMark}
              </label>
              <textarea
                id={fieldKey}
                rows={4}
                placeholder={field.placeholder}
                value={(answers[fieldKey] as string) || ''}
                onChange={(event) => onChange(fieldKey, event.target.value)}
                className={inputClass(Boolean(error))}
              />
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
          );
        }

        if (field.type === 'select') {
          return (
            <div key={field.id}>
              <label htmlFor={fieldKey} className="block text-sm font-medium text-gray-700 mb-1">
                {field.label} {requiredMark}
              </label>
              <select
                id={fieldKey}
                value={(answers[fieldKey] as string) || ''}
                onChange={(event) => onChange(fieldKey, event.target.value)}
                className={inputClass(Boolean(error))}
              >
                <option value="">Bitte auswählen</option>
                {field.options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </div>
          );
        }

        if (field.type === 'radio') {
          return (
            <fieldset key={field.id}>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                {field.label} {requiredMark}
              </legend>
              <div className="space-y-2">
                {field.options?.map((option) => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name={fieldKey}
                      value={option}
                      checked={answers[fieldKey] === option}
                      onChange={() => onChange(fieldKey, option)}
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <span className="text-sm text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </fieldset>
          );
        }

        if (field.type === 'checkbox') {
          const selected = Array.isArray(answers[fieldKey]) ? (answers[fieldKey] as string[]) : [];
          return (
            <fieldset key={field.id}>
              <legend className="block text-sm font-medium text-gray-700 mb-2">
                {field.label} {requiredMark}
              </legend>
              <div className="space-y-2">
                {field.options?.map((option, index) => {
                  const checked = selected.includes(option);
                  return (
                    <label key={`${option}-${index}`} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={(event) => {
                          const next = event.target.checked
                            ? [...selected, option]
                            : selected.filter((item) => item !== option);
                          onChange(fieldKey, next);
                          onChange(`${fieldKey}_${index}`, event.target.checked ? 'true' : 'false');
                        }}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  );
                })}
              </div>
              {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
            </fieldset>
          );
        }

        const inputType =
          field.type === 'email' || field.type === 'tel' || field.type === 'number' || field.type === 'date'
            ? field.type
            : 'text';

        return (
          <div key={field.id}>
            <label htmlFor={fieldKey} className="block text-sm font-medium text-gray-700 mb-1">
              {field.label} {requiredMark}
            </label>
            <input
              id={fieldKey}
              type={inputType}
              placeholder={field.placeholder}
              value={(answers[fieldKey] as string) || ''}
              onChange={(event) => onChange(fieldKey, event.target.value)}
              className={inputClass(Boolean(error))}
            />
            {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
          </div>
        );
      })}
    </div>
  );
}
