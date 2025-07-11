import ContactComponent from "@/components/Contact/ContactPage";
import type { Metadata } from "next";

type GenerateMetadataProps = {
  params: { locale?: string };
};

export async function generateMetadata({ params }: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";

  const siteUrl = "https://www.creation-site-internet.dev";

  return {
    title: {
      fr: "Me contacter – Stéphane Gamot, développeur web freelance",
      en: "Contact Me – Stéphane Gamot, Freelance Web Developer",
      nl: "Contact opnemen – Stéphane Gamot, freelance webontwikkelaar",
    }[currentLocale],
    description: {
      fr: "Un projet web ou un besoin d’audit SEO ? Contactez Stéphane Gamot pour une création de site performante, adaptée à votre entreprise.",
      en: "Need a website or SEO audit? Contact Stéphane Gamot for custom web solutions, digital strategy, and performance-optimized development.",
      nl: "Op zoek naar een website, SEO-audit of digitale begeleiding? Neem contact op met Stéphane Gamot voor een oplossing op maat van uw project.",
    }[currentLocale],
    alternates: {
      canonical: `${siteUrl}/${currentLocale}/contact`,
      languages: {
        fr: `${siteUrl}/fr/contact`,
        en: `${siteUrl}/en/contact`,
        nl: `${siteUrl}/nl/contact`,
        "x-default": `${siteUrl}/fr/contact`,
      },
    },
    openGraph: {
      title: {
        fr: "Me contacter – Projet web sur-mesure & accompagnement",
        en: "Contact Me – Custom Web Projects & Support",
        nl: "Contact – Maatwerk webprojecten & begeleiding",
      }[currentLocale],
      description: {
        fr: "Écrivez-moi pour échanger autour de vos idées, besoins techniques ou projets digitaux.",
        en: "Reach out to discuss your ideas, technical needs, or digital projects.",
        nl: "Neem contact op om uw ideeën, technische behoeften of digitale projecten te bespreken.",
      }[currentLocale],
      url: `${siteUrl}/${currentLocale}/contact`,
      type: "article",
      siteName: "Création Site Internet",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: `${siteUrl}/images/og-contact.webp`,
          secureUrl: `${siteUrl}/images/og-contact.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Formulaire de contact de Stéphane Gamot",
            en: "Contact form of Stéphane Gamot",
            nl: "Contactformulier van Stéphane Gamot",
          }[currentLocale],
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@stephanegamot",
      title: {
        fr: "Me contacter – Stéphane Gamot",
        en: "Contact – Stéphane Gamot",
        nl: "Contact – Stéphane Gamot",
      }[currentLocale],
      description: {
        fr: "Une question, un projet ? Contactez-moi facilement via ce formulaire ou par email.",
        en: "A question or project? Contact me easily via this form or by email.",
        nl: "Een vraag of project? Neem eenvoudig contact op via dit formulier of per e-mail.",
      }[currentLocale],
      images: [`${siteUrl}/images/og-contact.webp`],
    },
  };
}

export default function ContactPage() {
  return (
    <main>
      <ContactComponent />
    </main>
  );
}
