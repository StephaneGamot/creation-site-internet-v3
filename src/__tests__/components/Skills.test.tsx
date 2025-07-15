import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { axe } from 'jest-axe';
import Skills from '@/components/Skills';

// ✅ Mock de useTranslations
jest.mock('next-intl', () => ({
  useTranslations: () => {
    return (key: string) => {
      const translations: Record<string, string> = {
        title: 'Mes compétences'
      };
      return translations[key] || key;
    };
  }
}));

describe('Skills component', () => {
  it('affiche le titre traduit', () => {
    render(<Skills />);
    expect(
      screen.getByRole('heading', { name: /mes compétences/i })
    ).toBeInTheDocument();
  });

  it('affiche toutes les compétences', () => {
    render(<Skills />);
    const skillNames = [
      'HTML', 'CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js',
      'Tailwind CSS', 'Java', 'Spring Boot', 'MySQL', 'WordPress',
      'Joomla', 'Cypress', 'Junit5', 'Jasmine', 'CI/CD', 'SEO',
      'Accessibilité', 'Angular', 'Git', 'UX Design'
    ];

    skillNames.forEach((skill) => {
      expect(screen.getByText(skill)).toBeInTheDocument();
    });
  });

  it('passe les tests d’accessibilité', async () => {
    const { container } = render(<Skills />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
