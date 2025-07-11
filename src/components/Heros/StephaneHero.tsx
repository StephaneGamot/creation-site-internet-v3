"use client"

import Image from 'next/image'
import { motion } from 'framer-motion'
import Portrait from "./../../../public/images/stephane.webp"
import { useTranslations } from 'next-intl'

export default function StephaneHero() {
  const t = useTranslations("stephaneHero");
  const lines: string[] = t.raw("lines");

  return (
    <section aria-labelledby="stephane-hero-title" className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={Portrait}
          alt={t("alt")}
          className="rounded-2xl shadow-xl"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 id="stephane-hero-title" className="text-4xl md:text-5xl font-title font-semibold">
          {t("title")}
        </h1>
        {lines.map((line, index) => (
          <p
            key={index}
            className={`text-gray-700 ${index === lines.length - 1 ? 'text-sm' : 'text-lg'} leading-relaxed`}
          >
            {line}
          </p>
        ))}
      </motion.div>
    </section>
  );
}
