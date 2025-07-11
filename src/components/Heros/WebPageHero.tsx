"use client";

import { motion } from "framer-motion";
import LetsTalkButton from "@/components/Buttons/LetsTalkButton";
import { useTranslations } from "next-intl";

export default function WebPageHero(){
  const t = useTranslations("webHero");

  return (
    <section className="text-center pt-12 max-w-4xl mx-auto mb-12">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-title font-semibold mb-6"
      >
        {t("title")}
      </motion.h1>
      <p className="text-lg md:text-xl text-gray-700 mb-8">
        {t("text")}
      </p>
      <LetsTalkButton />
    </section>
  );
}
