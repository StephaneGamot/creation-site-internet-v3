import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavBar from '@/components/NavBar';
import '@testing-library/jest-dom';

jest.mock('next-intl', () => ({
  useTranslations: () => {
    return (key: string) => {
      const translations: Record<string, string> = {
        'navigation.web': 'Création Web',
        'navigation.seo': 'Référencement',
        'navigation.portfolio': 'Portfolio',
        'navigation.about': 'Qui suis-je ?',
        'navigation.contact': 'Contact',
        'logoTitle': 'Logo Title',
        'logoAlt': 'logoAlt',
        'mainNavigation': 'mainNavigation',
        'menuToggle': 'menuToggle',
        'menuClose': 'Fermer le menu',
        'mobileMenuTitle': 'Menu mobile',
      };
      return translations[key] ?? key;
    };
  },
  useLocale: () => 'fr',
}));

jest.mock('@/components/LangSwitcher', () => () => <div data-testid="lang-switcher" />);

describe('NavBar', () => {
  it('affiche les éléments de navigation desktop', () => {
    render(<NavBar />);
    expect(screen.getByRole('navigation', { name: 'mainNavigation' })).toBeInTheDocument();
    expect(screen.getByAltText('logoAlt')).toBeInTheDocument();
    expect(screen.getByTestId('lang-switcher')).toBeInTheDocument();
  });

  it('ouvre le menu mobile', () => {
    render(<NavBar />);
    const openBtn = screen.getByRole('button', { name: 'menuToggle' });
    fireEvent.click(openBtn);
    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('affiche les liens de navigation', () => {
    render(<NavBar />);
    expect(screen.getByText('Création Web')).toBeInTheDocument();
    expect(screen.getByText('Référencement')).toBeInTheDocument();
    expect(screen.getByText('Portfolio')).toBeInTheDocument();
    expect(screen.getByText('Qui suis-je ?')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});

