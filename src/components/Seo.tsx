"use client";

import { useLocale } from "next-intl";
import Head from "next/head";

type SeoProps = {
  seoTitle: string;
  seoDescription: string;
};

export default function Seo({ seoTitle, seoDescription }: SeoProps) {
  const locale = useLocale();

  return (
    <Head>
      <title>{seoTitle}</title>
      <meta name="description" content={seoDescription} />
      <link rel="canonical" href={`https://www.creation-site-internet.dev/${locale}`} />
      <meta property="og:locale" content={locale} />
    </Head>
  );
}
