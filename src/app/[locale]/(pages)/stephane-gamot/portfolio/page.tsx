import Image from "next/image";
import Link from "next/link";
import MeContacterButton from "@/components/Buttons/ContactButton";
import { useTranslations } from "next-intl";
import { projects } from "@/components/ProjectsData"; 
import WebIcon from "./../../../../../../public/images/icons/webIcon.webp";
import GitHubIcon from "./../../../../../../public/images/icons/github.svg";
import AngularIcon from "./../../../../../../public/images/icons/angular.svg";
import JavaIcon from "./../../../../../../public/images/icons/java.svg";
import JsIcon from "./../../../../../../public/images/icons/js.svg";
import NextIcon from "./../../../../../../public/images/icons/next.svg";
import ReactIcon from "./../../../../../../public/images/icons/react.svg";
import SpringIcon from "./../../../../../../public/images/icons/spring.svg";
import TailwindIcon from "./../../../../../../public/images/icons/tailwind.svg";
import WordpressIcon from "./../../../../../../public/images/icons/wordpress.svg";
import HtmlIcon from "./../../../../../../public/images/icons/html.svg";
import CssIcon from "./../../../../../../public/images/icons/css.svg";
import TypeScriptIcon from "./../../../../../../public/images/icons/typescript.svg";
import type { Metadata } from "next";
import type { StaticImageData } from "next/image";

type GenerateMetadataProps = {
  params: { locale?: string };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const { locale } = await Promise.resolve(params);
  const currentLocale = locale ?? "fr";
  const siteUrl = "https://www.creation-site-internet.dev";
  const path = "/stephane-gamot/portfolio";

  return {
    title: {
      fr: "Portfolio – Réalisations sur-mesure & sites performants",
      en: "Portfolio – Custom Projects & High-Performance Websites",
      nl: "Portfolio – Maatwerkprojecten & performante websites",
    }[currentLocale],
    description: {
      fr: "Explorez les projets web de Stéphane Gamot : sites vitrines, SEO, performances, UX et design. Chaque création est unique et adaptée à vos besoins.",
      en: "Discover Stéphane Gamot’s web projects: custom-designed websites focused on SEO, performance, and modern, conversion-oriented design.",
      nl: "Ontdek het werk van Stéphane Gamot: op maat gemaakte websites met focus op SEO, snelheid en modern design dat bezoekers aanspreekt en converteert.",
    }[currentLocale],
    alternates: {
      canonical: `${siteUrl}/${currentLocale}${path}`,
      languages: {
        fr: `${siteUrl}/fr${path}`,
        en: `${siteUrl}/en${path}`,
        nl: `${siteUrl}/nl${path}`,
        "x-default": `${siteUrl}/fr${path}`,
      },
    },
    openGraph: {
      title: {
        fr: "Portfolio – Sites web élégants, performants & durables",
        en: "Portfolio – Elegant, High-Performing & Sustainable Websites",
        nl: "Portfolio – Elegante, performante & duurzame websites",
      }[currentLocale],
      description: {
        fr: "Exemples concrets de projets réalisés pour des clients variés.",
        en: "Concrete examples of websites built for a variety of clients.",
        nl: "Concrete voorbeelden van websites voor diverse klanten.",
      }[currentLocale],
      url: `${siteUrl}/${currentLocale}${path}`,
      type: "article",
      siteName: "Création Site Internet",
      locale: `${currentLocale}_BE`,
      images: [
        {
          url: `${siteUrl}/images/og-portfolio.webp`,
          secureUrl: `${siteUrl}/images/og-portfolio.webp`,
          width: 1200,
          height: 627,
          alt: {
            fr: "Aperçu de sites réalisés – design fluide et sur-mesure",
            en: "Preview of custom-made websites – sleek and responsive",
            nl: "Voorbeeld van op maat gemaakte websites – strak en responsief",
          }[currentLocale],
          type: "image/webp",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "@stephanegamot",
      title: {
        fr: "Portfolio – Stéphane Gamot",
        en: "Portfolio – Stéphane Gamot",
        nl: "Portfolio – Stéphane Gamot",
      }[currentLocale],
      description: {
        fr: "Sites web sur-mesure, pensés pour durer. Performants, élégants, et alignés avec chaque besoin client.",
        en: "Tailor-made websites built to last. Fast, elegant, and aligned with every client’s needs.",
        nl: "Maatwerk websites die blijven presteren. Snel, elegant en afgestemd op elke klantbehoefte.",
      }[currentLocale],
      images: [`${siteUrl}/images/og-portfolio.webp`],
    },
  };
}

export type TechKey =
  | "angular"
  | "react"
  | "nextjs"
  | "tailwind"
  | "js"
  | "java"
  | "spring"
  | "wordpress"
  | "html"
  | "css"
  | "typescript";

export interface Project {
  id: string;
  image: string;
  github: string;
  site: string;
  techStack: TechKey[];
}

export default function Portfolio() {
  const t = useTranslations("portfolio");
  const tp = useTranslations("portfolioProjects");

  const techIcons: Record<TechKey, StaticImageData> = {
    angular: AngularIcon,
    react: ReactIcon,
    nextjs: NextIcon,
    tailwind: TailwindIcon,
    js: JsIcon,
    java: JavaIcon,
    spring: SpringIcon,
    wordpress: WordpressIcon,
    html: HtmlIcon,
    css: CssIcon,
    typescript: TypeScriptIcon,
  };

  return (
    <main className="px-6 md:px-12 py-16 space-y-24 bg-white text-gray-900 font-body">
      {/* Hero Section */}
      <section className="text-center max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-title font-semibold mb-6">
          {t("title")}
        </h1>
        <p className="text-lg md:text-xl text-gray-700">{t("text")}</p>
      </section>

      {/* Projects List */}
      <section className="max-w-6xl mx-auto grid gap-12 md:grid-cols-3">
        {projects.map((project, index) => {
          const p = {
            title: tp(`${project.id}.title`),
            category: tp(`${project.id}.category`),
            description: tp(`${project.id}.description`),
            alt: tp(`${project.id}.alt`),
          };

          return (
            <div
              key={project.id}
              aria-label={`Project: ${p.title}`}
              className="group rounded-xl border border-gray-100 shadow-md hover:shadow-xl transition-shadow duration-300 p-4 bg-white"
            >
              <Image
                src={project.image}
                alt={p.alt}
                width={800}
                height={470}
                loading="lazy"
                className="rounded-xl object-cover mb-4 transition-transform duration-300 md:group-hover:scale-[1.01]"
                aria-describedby={`desc-${index}`}
              />
              <span className="inline-block mb-2 text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {p.category}
              </span>
              <h2 className="text-xl text-center font-title font-semibold text-gray-800 mb-2">
                {p.title}
              </h2>
              <p
                id={`desc-${index}`}
                className="text-sm text-gray-600 leading-relaxed text-center"
              >
                {p.description}
              </p>

              <div className="flex justify-between">
                {/* Optional Links */}
                <div className="mt-4 flex justify-center gap-4">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub project"
                    >
                      <Image
                        src={GitHubIcon}
                        alt="GitHub"
                        width={24}
                        height={24}
                      />
                    </Link>
                  )}
                  {project.site && (
                    <Link
                      href={project.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Website preview"
                    >
                      <Image
                        src={WebIcon}
                        alt="Live site"
                        width={24}
                        height={24}
                      />
                    </Link>
                  )}
                </div>

                {/* Tech stack icons */}
                <div className="mt-2 flex justify-center gap-2">
                  {project.techStack?.map((tech, i) => {
                    if (!techIcons[tech as TechKey]) return null;

                    return (
                      <Image
                        key={i}
                        src={techIcons[tech as TechKey]}
                        alt={tech}
                        width={24}
                        height={24}
                        title={tech}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-title font-semibold mb-4">
          {t("ctaTitle")}
        </h2>
        <p className="text-lg text-gray-700 mb-6">{t("ctaText")}</p>
        <MeContacterButton />
      </section>
    </main>
  );
}
