import React from "react";
import { render, screen } from "@testing-library/react";
import KnowMoreButton from "@/components/Buttons/KnowMoreButton";
import renderer from "react-test-renderer";
import { axe } from "jest-axe";

// ✅ Mocks typés
jest.mock("next-intl", () => ({
  useLocale: jest.fn(),
  useTranslations: () => {
    const t = (key: string) => {
      const labels = {
        label: "En savoir plus",
        aria: "En savoir plus sur le service",
      };
      return labels[key as keyof typeof labels];
    };
    return t;
  },
}));

describe("KnowMoreButton", () => {
  beforeEach(() => {
    // @ts-ignore
    require("next-intl").useLocale.mockReturnValue("fr");
  });

  it("rend correctement le bouton avec le texte et l’aria-label", () => {
    render(<KnowMoreButton />);

    const button = screen.getByRole("button", { name: "En savoir plus sur le service" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("En savoir plus");
    expect(button).toHaveAttribute("href", "/fr/contact");
  });

  it("respecte l’accessibilité (axe)", async () => {
    const { container } = render(<KnowMoreButton />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const tree = renderer.create(<KnowMoreButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
