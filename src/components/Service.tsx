"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type ServiceItem = {
  title: string;
  description: string;
  link: string;
};

export default function Service() {
  const t = useTranslations('services');
  const services = t.raw('list') as ServiceItem[];

  return (
    <section
      role="region"
      aria-labelledby="services-title"
      className="max-w-6xl mx-auto py-10 my-8"
    >
      <h2
        id="services-title"
        className="text-3xl font-title font-semibold mb-8 text-center"
      >
        {t('title')}
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        {services.map((service, index) => (
          <Link key={index} href={service.link}>
            <motion.div
              tabIndex={0}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="block border border-gray-200 hover:border-[#3451a1] bg-white hover:bg-[#3451a1]/5 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h3 className="text-xl text-center text-[#0d0d0d] font-title font-semibold mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600 text-left font-medium">
                {service.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
