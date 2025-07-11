"use client";

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type WhyMeItem = {
  title: string;
  description: string;
};

export default function WhyMe() {
  const t = useTranslations('whyMe');
  const whyMeList = t.raw('list') as WhyMeItem[];

  return (
    <section
      role="region"
      aria-labelledby="whyme-title"
      className="max-w-6xl py-10 mx-auto my-8"
    >
      <h2
        id="whyme-title"
        className="text-3xl font-title font-semibold mb-8 text-center"
      >
        {t('title')}
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {whyMeList.map((item, index) => (
          <motion.div
            key={index}
            tabIndex={0}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="block border border-gray-200 hover:border-[#3451a1] bg-white hover:bg-[#3451a1]/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
          >
            <h3 className="text-xl text-center text-[#0d0d0d] font-title font-semibold mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 text-left">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
