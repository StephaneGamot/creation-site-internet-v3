// src/app/page.tsx
import { redirect } from 'next/navigation';
import Negotiator from 'negotiator';

const SUPPORTED_LOCALES = ['fr', 'en', 'nl'];
const DEFAULT_LOCALE = 'fr';

export async function generateMetadata() {
    return {
      title: "Redirection...",
      description: "Redirection automatique vers votre langue préférée.",
     alternates: {
    canonical: "https://www.creation-site-internet.dev/",
    languages: {
      fr: "https://www.creation-site-internet.dev/fr",
      en: "https://www.creation-site-internet.dev/en",
      nl: "https://www.creation-site-internet.dev/nl",
    },
  },
  robots: {
    index: false,
    follow: true,
  },
};}
  

export default function Page() {

}
