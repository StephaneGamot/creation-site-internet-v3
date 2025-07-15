import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe } from 'jest-axe';
import WhyMe from '@/components/WhyMe';

// ✅ Mock de Framer Motion (pour éviter les erreurs liées à l’animation dans Jest)
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...rest }: any) => <div {...rest}>{children}</div>,
  },
}));

// ✅ Mock de next-intl
jest.mock('next-intl', () => ({
  useTranslations: () => {
    const translations = {
      title: 'Pourquoi me choisir ?',
      list: [
        {
          title: 'Expertise Full-Stack',
          description: 'Une maîtrise complète du cycle de développement web.',
        },
        {
          title: 'SEO & Performance',
          description: 'Des sites pensés pour Google et ultra rapides.',
        },
        {
          title: 'Design Élégant',
          description: 'Un sens aigu de l’esthétique et de l’expérience utilisateur.',
        },
      ],
    };

    const t = (key: keyof typeof translations) =>
      typeof translations[key] === 'string'
        ? (translations[key] as string)
        : key;

    t.raw = (key: keyof typeof translations) => translations[key];
    return t;
  },
}));

describe('WhyMe component', () => {
  it('affiche le titre traduit', () => {
    render(<WhyMe />);
    expect(
      screen.getByRole('heading', { name: /pourquoi me choisir/i })
    ).toBeInTheDocument();
  });

  it('affiche tous les éléments de la liste', () => {
    render(<WhyMe />);
    expect(screen.getByText('Expertise Full-Stack')).toBeInTheDocument();
    expect(screen.getByText('SEO & Performance')).toBeInTheDocument();
    expect(screen.getByText('Design Élégant')).toBeInTheDocument();
  });

  it('passe les tests d’accessibilité', async () => {
    const { container } = render(<WhyMe />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
