"use client";

import { useTranslations } from 'next-intl';

type CitationProps = {
  id: number;
};

type Quote = {
  id: number;
  body: string;
  author?: string;
};

export default function Citation({ id }: CitationProps) {
  const t = useTranslations();
  const allCitations = t.raw('citations') as Quote[];
  const quote = allCitations.find((item: Quote) => item.id === id);

  if (!quote) return null;

  return (
    <section className="bg-white py-16 px-8 my-16 text-center max-w-4xl mx-auto rounded-3xl shadow-2xl border border-gray-200">
      <blockquote className="text-xl italic text-gray-800 font-title leading-relaxed whitespace-pre-line">
        {quote.body}
      </blockquote>
      {quote.author && (
        <p className="mt-4 text-sm text-gray-500">{quote.author}</p>
      )}
    </section>
  );
}


