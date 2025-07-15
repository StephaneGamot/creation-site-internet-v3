// src/__tests__/components/HomePageHero.test.tsx
import React, { forwardRef } from "react";
import { render, screen } from "@testing-library/react";
import HomePageHero from "@/components/Heros/HomePageHero";
import renderer from "react-test-renderer";
import { axe } from "jest-axe";

// ✅ Mock de next-intl (t)
jest.mock("next-intl", () => ({
  useTranslations: () => {
    const t = (key: string) => {
      if (key === "heroTitle") return "Création de site web impactant";
      if (key === "heroSubtitle") return "Sites modernes, élégants et optimisés SEO.";
      return "";
    };
    return t;
  },
  useLocale: () => "fr",
}));

// ✅ Mock de framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    h1: forwardRef<HTMLHeadingElement, React.HTMLProps<HTMLHeadingElement>>((props, ref) => (
      <h1 ref={ref} {...props} />
    )),
  },
}));

// ✅ Mock du bouton KnowMoreButton
jest.mock("@/components/Buttons/KnowMoreButton", () => () => (
  <a href="/fr/contact">En savoir plus</a>
));


describe("HomePageHero", () => {
  it("affiche le titre, le sous-titre et le bouton", () => {
    render(<HomePageHero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Création de site web impactant");
    expect(screen.getByText("Sites modernes, élégants et optimisés SEO.")).toBeInTheDocument();
    expect(screen.getByText("En savoir plus")).toBeInTheDocument();
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<HomePageHero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const tree = renderer.create(<HomePageHero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
