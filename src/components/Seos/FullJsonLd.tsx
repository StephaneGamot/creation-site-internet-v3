"use client";

import Script from "next/script";
import type { FC } from "react";
import type { JsonLdGraph } from "./jsonLdSchemas";

const FullJsonLd: FC = () => {
  const jsonLd: JsonLdGraph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Pourquoi créer un site internet sur-mesure ?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Un site sur-mesure est conçu selon vos besoins, votre activité et vos objectifs, ce qui le rend bien plus performant qu’un template générique.",
            },
          },
          {
            "@type": "Question",
            name: "Le site est-il optimisé pour le SEO ?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Oui. L’optimisation pour le référencement est intégrée dès la conception : structure, balises, vitesse de chargement, accessibilité, etc.",
            },
          },
          {
            "@type": "Question",
            name: "Combien de temps faut-il pour voir les résultats SEO ?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Les premiers effets apparaissent souvent sous 1 à 3 mois, selon votre secteur et vos concurrents.",
            },
          },
          {
            "@type": "Question",
            name: "Comment se passe le suivi après livraison ?",
            acceptedAnswer: {
              "@type": "Answer",
              text:
                "Je propose un accompagnement personnalisé, avec possibilité d’évolution ou d’optimisation SEO au fil du temps.",
            },
          },
        ],
      },
      {
        "@type": "WebSite",
        name: "Création Site Internet",
        url: "https://www.creation-site-internet.dev",
        potentialAction: {
          "@type": "SearchAction",
          target:
            "https://www.creation-site-internet.dev/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      },
      {
        "@type": "Person",
        name: "Stéphane Gamot",
        url: "https://www.creation-site-internet.dev/stephane-gamot",
        jobTitle: "Développeur web & consultant SEO",
        sameAs: [
          "https://www.linkedin.com/in/stephane-gamot",
          "https://github.com/stephanegamot",
        ],
      },
    ],
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default FullJsonLd;
