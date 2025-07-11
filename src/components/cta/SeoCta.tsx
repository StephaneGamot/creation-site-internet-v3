"use client"

import ContactButton from "../Buttons/ContactButton"
import { useTranslations } from "next-intl"

export default function SeoCta() {
  const t = useTranslations("seoCta");

  return (
    <section className="text-center pb-0">
      <h2 className="text-3xl font-title font-semibold mb-4">
        {t("title")}
      </h2>
      <p className="text-lg text-gray-700 mb-6">
        {t("text")}
      </p>
      <ContactButton />
    </section>
  );
}
