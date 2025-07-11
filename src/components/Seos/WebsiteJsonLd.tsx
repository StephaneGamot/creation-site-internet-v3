"use client";

import Script from "next/script";
import type { FC } from "react";
import type { WebsiteSchema } from "./jsonLdSchemas";

const WebsiteJsonLd: FC = () => {
  const jsonLd: WebsiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Création Site Internet",
    url: "https://www.creation-site-internet.dev",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://www.creation-site-internet.dev/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Script
      id="website-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default WebsiteJsonLd;
