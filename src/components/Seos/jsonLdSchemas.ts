export interface Question {
  "@type": "Question";
  name: string;
  acceptedAnswer: {
    "@type": "Answer";
    text: string;
  };
}

export interface FAQPage {
  "@context"?: "https://schema.org"; 
  "@type": "FAQPage";
  mainEntity: Question[];
}

export interface PersonSchema {
  "@context"?: "https://schema.org";
  "@type": "Person";
  name: string;
  url: string;
  jobTitle: string;
  sameAs: string[];
}

export interface SearchAction {
  "@type": "SearchAction";
  target: string;
  "query-input": string;
}

export interface WebsiteSchema {
  "@context"?: "https://schema.org";
  "@type": "WebSite";
  name: string;
  url: string;
  potentialAction: SearchAction;
}

export interface JsonLdGraph {
  "@context": "https://schema.org";
  "@graph": [FAQPage, WebsiteSchema, PersonSchema];
}
