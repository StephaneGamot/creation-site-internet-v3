"use client"

import React from 'react'
import { useTranslations } from 'next-intl'
import ContactButton from "@/components/Buttons/ContactButton";

export default function Cta() {
  const t = useTranslations('cta');

  return (
    <section aria-labelledby="cta-title" className="text-center my-20">
      <h2 id="cta-title" className="text-3xl font-title font-semibold mb-4">
        {t('title')}
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        {t('text')}
      </p>
      <ContactButton />
    </section>
  );
}
