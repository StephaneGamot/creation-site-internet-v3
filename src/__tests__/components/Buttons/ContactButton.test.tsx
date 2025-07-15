import React from "react";
import { render, screen } from "@testing-library/react";
import ContactButton from "@/components/Buttons/ContactButton";
import { axe } from 'jest-axe';

// ✅ Mock type-safe des traductions
const labels = {
  fr: { label: "Me contacter", aria: "Accéder à la page de contact" },
  en: { label: "Contact me", aria: "Go to the contact page" },
  nl: { label: "Contacteer mij", aria: "Ga naar de contactpagina" },
} as const;

// 👉 Corrige l'erreur d'indexation de string via "Record"
type Locale = keyof typeof labels;

// ✅ On déclare les mocks avec jest
jest.mock("next-intl", () => ({
  useTranslations: jest.fn(),
  useLocale: jest.fn(),
}));

import { useTranslations, useLocale } from "next-intl";

describe("ContactButton (multi-locales)", () => {
  const locales: Locale[] = ["fr", "en", "nl"];

  locales.forEach((locale) => {
    it(`rend correctement le bouton pour la locale "${locale}"`, () => {
      // @ts-expect-error : override des mocks
      useLocale.mockReturnValue(locale);

      // @ts-expect-error : override des mocks
      useTranslations.mockImplementation(() => {
        return (key: keyof typeof labels[Locale]) => labels[locale][key];
      });

      render(<ContactButton />);

      const button = screen.getByRole("button");

      expect(button).toHaveAttribute("href", `/${locale}/contact`);
      expect(button).toHaveTextContent(labels[locale].label);
      expect(button).toHaveAttribute("aria-label", labels[locale].aria);
    });
    it(`n’a pas de violations d’accessibilité`, async () => {
  // @ts-expect-error : mock
  useLocale.mockReturnValue("fr");

  // @ts-expect-error : mock
  useTranslations.mockImplementation(() => {
    return (key: "label" | "aria") => labels["fr"][key];
  });

  const { container } = render(<ContactButton />);
  const results = await axe(container);

  expect(results).toHaveNoViolations();
});

  });
});
