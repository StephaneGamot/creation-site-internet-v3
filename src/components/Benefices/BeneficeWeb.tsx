"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

type BenefitItem = {
  id: number;
  title: string;
  desc: string;
};

export default function BeneficeWeb() {
  const t = useTranslations("beneficeWeb");
  const items: BenefitItem[] = t.raw("list");

  return (
    <section className="max-w-5xl mx-auto text-center">
      <h2 className="text-3xl font-title font-semibold mb-8">{t("title")}</h2>
      <div className="grid gap-8 md:grid-cols-3 text-left">
        {items.map((item, index) => (
          <motion.div
            key={item.id ?? index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-[#f9f9f9] p-6 rounded-2xl shadow"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
