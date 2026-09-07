'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle, Lock, RotateCcw, Trash2 } from 'lucide-react';
import { APP_REGISTER_BY_MARKET } from '@/app/i18n/market-access';
import {
  DEMO_FORMS_PATH,
  getConfirmationPage,
  getDemoCopy,
  getFillPages,
  getPageSignatureSlots,
  signatureFieldName,
  type DemoFormField,
  type DemoFormTemplate,
  type DemoLocale,
} from '@/lib/demoForms';
import DemoFormFields from './DemoFormFields';
import DemoSignaturePad from './DemoSignaturePad';

type Answers = Record<string, string | string[]>;

type DemoFormPlayerProps = {
  form: DemoFormTemplate;
  locale?: DemoLocale;
};

function isFieldVisible(field: DemoFormField, answers: Answers): boolean {
  if (!field.conditionFieldId || field.conditionValue == null) return true;
  const expected = field.conditionValue;
  const keyed = answers[`field_${field.conditionFieldId}`];
  if (Array.isArray(keyed)) return keyed.includes(expected);
  if (keyed === expected) return true;
  if (expected === 'true' && (answers[`field_${field.conditionFieldId}`] === 'true' || answers[field.conditionFieldId] === 'true')) {
    return true;
  }
  return answers[field.conditionFieldId] === expected;
}

export default function DemoFormPlayer({ form, locale = 'de' }: DemoFormPlayerProps) {
  const copy = getDemoCopy(locale);
  const galleryHref = DEMO_FORMS_PATH[locale];
  const registerHref =
    locale === 'tr'
      ? APP_REGISTER_BY_MARKET.tr
      : locale === 'en'
        ? APP_REGISTER_BY_MARKET.en
        : APP_REGISTER_BY_MARKET.de;
  const fillPages = useMemo(() => getFillPages(form), [form]);
  const confirmation = useMemo(() => getConfirmationPage(form), [form]);
  const [pageIndex, setPageIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [signatures, setSignatures] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [completed, setCompleted] = useState(false);
  const [signatureResetKey, setSignatureResetKey] = useState<Record<string, number>>({});

  const currentPage = fillPages[pageIndex];
  const isLastFillPage = pageIndex === fillPages.length - 1;
  const signatureSlots = getPageSignatureSlots(currentPage, locale);

  const updateAnswer = (fieldId: string, value: string | string[]) => {
    setAnswers((prev) => ({ ...prev, [fieldId]: value }));
    setErrors((prev) => {
      if (!prev[fieldId]) return prev;
      const next = { ...prev };
      delete next[fieldId];
      return next;
    });
  };

  const validateCurrentPage = () => {
    if (!currentPage) return true;
    const nextErrors: Record<string, string> = {};

    currentPage.fields?.forEach((field) => {
      if (['heading', 'paragraph', 'image', 'drawing', 'file', 'signature'].includes(field.type)) return;
      if (!isFieldVisible(field, answers)) return;
      if (!field.required) return;

      const fieldKey = `field_${field.id}`;
      const value = answers[fieldKey];
      if (field.type === 'checkbox') {
        if (!Array.isArray(value) || value.length === 0) {
          nextErrors[fieldKey] = copy.player.requiredCheckbox;
        }
        return;
      }
      if (!value || (typeof value === 'string' && value.trim() === '')) {
        nextErrors[fieldKey] = copy.player.requiredField;
      }
    });

    signatureSlots.forEach((slot) => {
      if (slot.required === false) return;
      const name = signatureFieldName(currentPage.id, slot.id);
      if (!signatures[name]) {
        nextErrors[name] = copy.player.requiredSignature;
      }
    });

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const goNext = () => {
    if (!validateCurrentPage()) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (isLastFillPage) {
      setCompleted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    setPageIndex((index) => index + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    if (completed) {
      setCompleted(false);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    if (pageIndex === 0) return;
    setPageIndex((index) => index - 1);
    setErrors({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const restart = () => {
    setPageIndex(0);
    setAnswers({});
    setSignatures({});
    setErrors({});
    setCompleted(false);
    setSignatureResetKey({});
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const clearSignature = (name: string) => {
    setSignatures((prev) => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
    setSignatureResetKey((prev) => ({ ...prev, [name]: (prev[name] || 0) + 1 }));
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 min-w-0">
            <Link href={galleryHref} className="text-sm text-indigo-600 hover:text-indigo-700 font-medium shrink-0">
              {copy.player.allTemplates}
            </Link>
            <Link href={locale === 'tr' ? '/tr' : locale === 'en' ? '/en' : '/'} className="hidden sm:block shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logos/treatflow-logo.svg" alt="Treatflow" className="h-7 w-auto" />
            </Link>
          </div>
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Lock className="h-4 w-4" />
            <span>{copy.player.demoBadge}</span>
          </div>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <div className="mb-4 rounded-xl border border-indigo-100 bg-indigo-50 px-4 py-3 text-sm text-indigo-800">
          {copy.player.banner}
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-5 border-b border-gray-200 bg-gradient-to-r from-white to-gray-50">
            <h1 className="text-xl font-bold text-gray-900">{form.name}</h1>
            <p className="mt-1 text-sm text-gray-600">{form.description}</p>
          </div>

          {!completed && fillPages.length > 1 && (
            <div className="px-6 py-3 border-b border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-gray-500">{currentPage?.title}</span>
                <span className="text-xs font-medium text-indigo-600">
                  {pageIndex + 1}/{fillPages.length}
                </span>
              </div>
              <div className="flex w-full mt-1 space-x-1">
                {fillPages.map((page, index) => (
                  <button
                    key={page.id}
                    type="button"
                    title={page.title}
                    onClick={() => {
                      if (index <= pageIndex) {
                        setPageIndex(index);
                        setErrors({});
                      }
                    }}
                    className={`h-1.5 rounded-full flex-1 transition-all duration-300 ${
                      index === pageIndex
                        ? 'bg-indigo-600'
                        : index < pageIndex
                          ? 'bg-indigo-400 hover:bg-indigo-500'
                          : 'bg-gray-200'
                    }`}
                  />
                ))}
              </div>
            </div>
          )}

          <div className="p-6">
            {completed ? (
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-gray-900">
                      {confirmation?.title || copy.player.done}
                    </h2>
                    <p className="text-sm text-gray-500">{copy.player.completedNote}</p>
                  </div>
                </div>
                {confirmation?.content ? (
                  <div
                    className="demo-form-document"
                    dangerouslySetInnerHTML={{ __html: confirmation.content }}
                  />
                ) : (
                  <p className="text-gray-700">{copy.player.completedFallback}</p>
                )}

                <div className="mt-8 rounded-2xl bg-indigo-50 border border-indigo-100 p-5">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{copy.player.doneTitle}</h3>
                  <p className="text-sm text-gray-600 mb-4">{copy.player.doneText}</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href={registerHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-indigo-600 text-white px-5 py-3 rounded-xl font-semibold hover:bg-indigo-700"
                    >
                      {copy.player.trialCta}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                    <Link
                      href={galleryHref}
                      className="inline-flex items-center justify-center border border-gray-200 text-gray-700 px-5 py-3 rounded-xl font-semibold hover:border-indigo-300 hover:text-indigo-600"
                    >
                      {copy.player.moreSamples}
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-medium text-gray-900 mb-4">{currentPage?.title}</h2>
                {currentPage?.type === 'document' ? (
                  <div
                    className="demo-form-document"
                    dangerouslySetInnerHTML={{ __html: currentPage.content || '' }}
                  />
                ) : (
                  <DemoFormFields
                    fields={currentPage?.fields || []}
                    answers={answers}
                    errors={errors}
                    onChange={updateAnswer}
                    isVisible={(field) => isFieldVisible(field, answers)}
                    drawingSkip={copy.player.drawingSkip}
                    fileSkip={copy.player.fileSkip}
                  />
                )}

                {signatureSlots.length > 0 && (
                  <div className="mt-8 space-y-6">
                    {signatureSlots.length > 1 && (
                      <div>
                        <div className="mb-2 h-1 w-10 rounded-full bg-indigo-500" />
                        <h3 className="text-lg font-semibold text-gray-900">{copy.player.signatureSection}</h3>
                      </div>
                    )}
                    {signatureSlots.map((slot) => {
                      const name = signatureFieldName(currentPage.id, slot.id);
                      const hasSignature = Boolean(signatures[name]);
                      return (
                        <div
                          key={name}
                          className={`rounded-xl border overflow-hidden ${errors[name] ? 'border-red-300' : 'border-gray-200'}`}
                        >
                          <div className="flex items-start justify-between gap-3 border-b border-gray-100 bg-gray-50 px-4 py-3">
                            <div>
                              <p className="text-sm font-medium text-gray-900">
                                {slot.label} {slot.required !== false && <span className="text-red-500">*</span>}
                              </p>
                              <p className="mt-0.5 text-xs text-gray-500">{copy.player.signHint}</p>
                            </div>
                            <button
                              type="button"
                              onClick={() => clearSignature(name)}
                              disabled={!hasSignature}
                              className="inline-flex items-center gap-1.5 rounded-md border border-gray-200 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-600 hover:border-red-200 hover:bg-red-50 hover:text-red-600 disabled:opacity-40"
                            >
                              <Trash2 className="h-4 w-4" />
                              {copy.player.clear}
                            </button>
                          </div>
                          <div className="p-4">
                            <div className={`relative overflow-hidden rounded-lg border ${errors[name] ? 'border-red-300' : 'border-gray-200'}`}>
                              {!hasSignature && (
                                <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 px-4 text-center">
                                  <p className="text-sm text-gray-400">{copy.player.signHere}</p>
                                </div>
                              )}
                              <div className="pointer-events-none absolute inset-x-6 bottom-5 border-b border-gray-300" />
                              <DemoSignaturePad
                                key={`${name}-${signatureResetKey[name] || 0}`}
                                value={signatures[name] || ''}
                                onChange={(dataUrl) => {
                                  setSignatures((prev) => ({ ...prev, [name]: dataUrl }));
                                  setErrors((prev) => {
                                    if (!prev[name]) return prev;
                                    const next = { ...prev };
                                    delete next[name];
                                    return next;
                                  });
                                }}
                                error={Boolean(errors[name])}
                              />
                            </div>
                            {errors[name] && <p className="mt-2 text-sm text-red-600">{errors[name]}</p>}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="px-6 py-4 bg-gray-50 flex justify-between items-center gap-3">
            <button
              type="button"
              onClick={completed ? restart : goBack}
              disabled={!completed && pageIndex === 0}
              className={`inline-flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 ${
                !completed && pageIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-white'
              }`}
            >
              {completed ? <RotateCcw className="h-4 w-4 mr-1.5" /> : <ArrowLeft className="h-4 w-4 mr-1.5" />}
              {completed ? copy.player.restart : copy.player.back}
            </button>
            {!completed && (
              <button
                type="button"
                onClick={goNext}
                className="inline-flex items-center bg-indigo-600 text-white px-5 py-2.5 rounded-md text-sm font-semibold hover:bg-indigo-700"
              >
                {isLastFillPage ? copy.player.submit : copy.player.next}
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
