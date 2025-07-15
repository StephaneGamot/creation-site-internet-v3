import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import "@testing-library/jest-dom";
import Footer from "@/components/Footer";

// ✅ Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => {
    const t = (key: string) => {
      const translations: Record<string, string> = {
        ariaLabel: "Pied de page du site",
        slogan: "Sites web élégants, performants et bien référencés",
        copyright: "Tous droits réservés",
      };
      return translations[key] || key;
    };
    return t;
  },
}));

describe("Footer component", () => {
  it("affiche les textes traduits", () => {
    render(<Footer />);
    expect(
      screen.getByRole("contentinfo", { name: "Pied de page du site" })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Sites web élégants, performants et bien référencés")
    ).toBeInTheDocument();
    expect(screen.getByText(/Stéphane Gamot/)).toBeInTheDocument();
    expect(screen.getByText(/Tous droits réservés/)).toBeInTheDocument();
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<Footer />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
