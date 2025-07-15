import React from "react";
import { render, screen } from "@testing-library/react";
import StephaneHero from "@/components/Heros/StephaneHero";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

// ✅ Mock next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => {
    const t = (key: string) => {
      const values: Record<string, string> = {
        title: "Qui suis-je ?",
        alt: "Portrait de Stéphane Gamot",
      };
      return values[key] || "";
    };
    t.raw = (key: string) => {
      if (key === "lines") {
        return [
          "Développeur passionné, créatif et rigoureux.",
          "J’allie technique et esthétique pour des sites performants.",
          "Basé en Belgique, disponible pour vos projets web.",
        ];
      }
      return [];
    };
    return t;
  },
}));

// ✅ Mock framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    div: (props: any) => <div {...props} />,
  },
}));

// ✅ Mock next/image
jest.mock("next/image", () => (props: any) => {
  return <img {...props} alt={props.alt || "mocked image"} />;
});

describe("StephaneHero", () => {
  it("affiche le titre, l’image et les lignes de texte", () => {
    render(<StephaneHero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Qui suis-je ?");
    expect(screen.getByAltText("Portrait de Stéphane Gamot")).toBeInTheDocument();

    expect(screen.getByText("Développeur passionné, créatif et rigoureux.")).toBeInTheDocument();
    expect(screen.getByText("J’allie technique et esthétique pour des sites performants.")).toBeInTheDocument();
    expect(screen.getByText("Basé en Belgique, disponible pour vos projets web.")).toBeInTheDocument();
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<StephaneHero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const tree = renderer.create(<StephaneHero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
