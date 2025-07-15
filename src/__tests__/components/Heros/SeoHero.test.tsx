import React from "react";
import { render, screen } from "@testing-library/react";
import SeoHero from "@/components/Heros/SeoHero";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

// ✅ Mock des traductions
jest.mock("next-intl", () => ({
  useTranslations: () => {
    const t = (key: string) => {
      const translations: Record<string, string> = {
        title: "Boostez votre SEO avec un site performant",
        text: "Un bon référencement commence dès la conception.",
        button: "En savoir plus",
        aria: "Accéder à la section Stéphane Gamot",
      };
      return translations[key] || "";
    };
    return t;
  },
  useLocale: () => "fr",
}));

// ✅ Mock de framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    h1: (props: any) => <h1 {...props} />,
  },
  useReducedMotion: () => false,
}));

describe("SeoHero", () => {
  it("affiche le titre, le texte et le bouton", () => {
    render(<SeoHero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
      "Boostez votre SEO avec un site performant"
    );
    expect(
      screen.getByText("Un bon référencement commence dès la conception.")
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent("En savoir plus");
    expect(screen.getByLabelText("Accéder à la section Stéphane Gamot")).toBeInTheDocument();
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<SeoHero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const tree = renderer.create(<SeoHero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
