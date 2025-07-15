import { render } from '@testing-library/react';
import Seo from '@/components/Seo';
import { useRouter } from 'next/router';

// ✅ Mock de useLocale sans casser next-intl
jest.mock('next-intl', () => ({
  useLocale: () => 'fr',
}));

// ✅ Mock de next/head pour inspecter le contenu du <head>
jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  };
});

describe('Seo', () => {
  it('rend correctement les balises SEO', () => {
    const { getByText, container } = render(
      <Seo seoTitle="Titre SEO" seoDescription="Description SEO" />
    );

    // Vérifie la balise <title>
    expect(document.title).toBe('Titre SEO');

    // Vérifie la balise <meta name="description">
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toHaveAttribute('content', 'Description SEO');

    // Vérifie la balise <link rel="canonical">
    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical).toHaveAttribute(
      'href',
      'https://www.creation-site-internet.dev/fr'
    );

    // Vérifie la balise <meta property="og:locale">
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    expect(ogLocale).toHaveAttribute('content', 'fr');
  });
});
