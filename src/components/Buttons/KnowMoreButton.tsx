"use client"

import Link from "next/link";
import { useTranslations } from "next-intl";
import { useLocale } from 'next-intl';


export default function KnowMoreButton() {
  const t = useTranslations("knowMoreButton");
const locale = useLocale();

  return (
    <Link
      href={`/${locale}/contact`}
      role="button"
      className="inline-block bg-[#43986b] !text-black px-6 py-3 rounded-xl font-semibold shadow hover:bg-opacity-90 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#43986b]"
      aria-label={t("aria")}
    >
      {t("label")}
    </Link>
  );
}
