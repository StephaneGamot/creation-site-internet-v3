import React from "react";
import { render, screen } from "@testing-library/react";
import WebPageHero from "@/components/Heros/WebPageHero";
import { axe } from "jest-axe";
import renderer from "react-test-renderer";

// ✅ Mock de next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => (key: string) => {
    const dict: Record<string, string> = {
      title: "Créons un site web qui vous ressemble",
      text: "Des sites performants, élégants et orientés conversion.",
    };
    return dict[key] || "";
  },
}));

// ✅ Mock de framer-motion
jest.mock("framer-motion", () => ({
  motion: {
    h1: (props: any) => <h1 {...props} />,
  },
}));

// ✅ Mock du bouton LetsTalkButton
jest.mock("@/components/Buttons/LetsTalkButton", () => () => (
  <button>Parlons-en</button>
));

describe("WebPageHero", () => {
  it("affiche le titre, le texte et le bouton", () => {
    render(<WebPageHero />);
    expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent("Créons un site web qui vous ressemble");
    expect(screen.getByText("Des sites performants, élégants et orientés conversion.")).toBeInTheDocument();
    expect(screen.getByRole("button")).toHaveTextContent("Parlons-en");
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<WebPageHero />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const tree = renderer.create(<WebPageHero />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
