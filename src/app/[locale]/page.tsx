import { useTranslations } from "next-intl";
import type { Metadata } from "next";

import Seo from "@/components/Seo";
import HomePageHero from "@/components/Heros/HomePageHero";
import Testimonials from "@/components/Testimonials/Testimonials";
import Gallery from "@/components/Gallery/Gallery";
import Cta from "@/components/cta/HomeCta";
import WhyMe from "@/components/WhyMe";
import Service from "@/components/Service";
import Citation from "@/components/Citations/Citation";
import FaqJsonLd from "@/components/Seos/FaqJsonLd";
import FullJsonLd from "@/components/Seos/FullJsonLd";

type GenerateMetadataProps = {
  params: { locale?: string };
};


export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";
  const siteUrl = "https://www.creation-site-internet.dev";



  return {
    title: {
      fr: "Création de site internet élégant & SEO – Stéphane Gamot",
      en: "Elegant & SEO-Optimized Website Creation – Stéphane Gamot",
      nl: "Elegante & SEO-geoptimaliseerde websitecreatie – Stéphane Gamot",
    }[currentLocale],

    description: {
      fr: "Développeur web & expert SEO, je crée des sites modernes, performants et optimisés pour Google. Création sur-mesure, responsive et orientée conversion.",
      en: "Web developer & SEO expert crafting modern, high-performance websites optimized for Google. Offering bespoke, responsive designs that drive conversions.",
      nl: "Webontwikkelaar & SEO-expert, ik maak moderne, snelle websites geoptimaliseerd voor Google. Maatwerk, responsive en conversiegericht.",
    }[currentLocale],

    alternates: {
      canonical: `${siteUrl}/${currentLocale}`,
      languages: {
        fr: `${siteUrl}/fr`,
        en: `${siteUrl}/en`,
        nl: `${siteUrl}/nl`,
        "x-default": `${siteUrl}/fr`,
      },
    },

    openGraph: {
      title: {
        fr: "Création de site internet élégant & SEO – Stéphane Gamot",
        en: "Elegant & SEO-Optimized Website Creation – Stéphane Gamot",
        nl: "Elegante & SEO-geoptimaliseerde websitecreatie – Stéphane Gamot",
      }[currentLocale],
      description: {
        fr: "Un site pensé pour votre image, votre audience et votre référencement. Ensemble, créons votre vitrine digitale idéale.",
        en: "A website designed around your brand, your audience, and your online visibility. Together, let’s create your ideal digital showcase.",
        nl: "Een site ontworpen voor uw imago, uw doelgroep en uw online vindbaarheid. Laten we samen uw ideale digitale etalage creëren.",
      }[currentLocale],
      url: `${siteUrl}/${currentLocale}`,
      siteName: "Création Site Internet",
      locale: `${currentLocale}_BE`,
      type: "website",
      images: [
        {
          url: `${siteUrl}/Images/OpenGraph/webDevAtWork.webp`,
          secureUrl: `${siteUrl}/Images/OpenGraph/webDevAtWork.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Site web fluide et responsive affiché sur écran",
            en: "A sleek, responsive website displayed on a screen",
            nl: "Een flexibele, responsieve website weergegeven op een scherm",
          }[currentLocale],
          type: "image/webp",
        },
      ],
    },

    twitter: {
      card: "summary_large_image",
      site: "@stephanegamot",
      title: {
        fr: "Création de site internet élégant & SEO – Stéphane Gamot",
        en: "Elegant & SEO-Optimized Website Creation – Stéphane Gamot",
        nl: "Elegante & SEO-geoptimaliseerde websitecreatie – Stéphane Gamot",
      }[currentLocale],
      description: {
        fr: "Un site pensé pour votre image, votre audience et votre référencement. Ensemble, créons votre vitrine digitale idéale.",
        en: "A website designed around your brand, your audience, and your online visibility. Together, let’s create your ideal digital showcase.",
        nl: "Een site ontworpen voor uw imago, uw doelgroep en uw online vindbaarheid. Laten we samen uw ideale digitale etalage creëren.",
      }[currentLocale],
      images: [`${siteUrl}/Images/OpenGraph/webDevAtWork.webp`],
    },
  };
}


export default function HomePage() {
  const t = useTranslations("home");

  return (
    <main id="main-content" className="px-6 md:px-12  space-y-24 bg-gray-100 text-gray-900 font-body">
      <HomePageHero />
      <WhyMe />
      <Gallery />
      <Service />
      <Citation id={1} />
      <Cta />
      <Testimonials ids={[1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 13, 16]} />
      <FullJsonLd />
    </main>
  );
}