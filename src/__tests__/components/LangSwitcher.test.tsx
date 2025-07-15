// src/__tests__/components/LangSwitcher.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LangSwitcher from '@/components/LangSwitcher';
import { usePathname, useRouter } from 'next/navigation';

// Mock de next/navigation
jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
  useRouter: jest.fn(() => ({
    push: jest.fn(),
  })),
}));

// Mock de @/i18n/routing pour éviter l’erreur ESM
jest.mock('@/i18n/routing', () => ({
  routing: {
    locales: ['fr', 'en', 'nl'],
  },
}));

// Simule un viewport mobile ou desktop
const setScreenWidth = (width: number) => {
  Object.defineProperty(window, 'innerWidth', {
    writable: true,
    configurable: true,
    value: width,
  });
  window.dispatchEvent(new Event('resize'));
};

describe('LangSwitcher', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('affiche le sélecteur de langue sur desktop', () => {
    (usePathname as jest.Mock).mockReturnValue('/fr/contact');
    setScreenWidth(1024); // Desktop

    render(<LangSwitcher />);
    expect(screen.getByRole('navigation', { name: /sélecteur de langue/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /FR/i })).toBeInTheDocument();
  });

  it('affiche les options de langue au clic', () => {
    (usePathname as jest.Mock).mockReturnValue('/fr/contact');
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<LangSwitcher />);
    fireEvent.click(screen.getByRole('button', { name: /FR/i }));

    expect(screen.getByRole('menu')).toBeInTheDocument();
    expect(screen.getByRole('menuitem', { name: /EN/i })).toBeInTheDocument();
  });

  it('redirige vers une autre langue au clic', () => {
    (usePathname as jest.Mock).mockReturnValue('/fr/contact');
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });

    render(<LangSwitcher />);
    fireEvent.click(screen.getByRole('button', { name: /FR/i }));
    fireEvent.click(screen.getByRole('menuitem', { name: /EN/i }));

    expect(pushMock).toHaveBeenCalledWith('/en/contact');
  });

  it('affiche le sélecteur mobile si écran < 640px', () => {
    (usePathname as jest.Mock).mockReturnValue('/nl/contact');
    setScreenWidth(500); // Mobile

    render(<LangSwitcher />);
    expect(screen.getByRole('navigation', { name: /choix de la langue/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /NL/i })).toBeInTheDocument();
  });
});
