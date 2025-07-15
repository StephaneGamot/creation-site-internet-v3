import React from "react";
import { render, screen } from "@testing-library/react";
import LetsTalkButton from "@/components/Buttons/LetsTalkButton";
import renderer from "react-test-renderer";
import { axe } from "jest-axe";

// ✅ Mocks typés
jest.mock("next-intl", () => ({
  useLocale: jest.fn(),
  useTranslations: () => {
    const t = (key: string) => {
      const labels = {
        label: "Discutons ensemble",
        aria: "Aller vers la page de contact",
      };
      return labels[key as keyof typeof labels];
    };
    return t;
  },
}));

describe("LetsTalkButton", () => {
  beforeEach(() => {
    // @ts-ignore
    require("next-intl").useLocale.mockReturnValue("fr");
  });

  it("affiche le texte et le bon aria-label", () => {
    render(<LetsTalkButton />);
    const button = screen.getByRole("button", {
      name: "Aller vers la page de contact",
    });

    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent("Discutons ensemble");
    expect(button).toHaveAttribute("href", "/fr/contact");
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<LetsTalkButton />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const tree = renderer.create(<LetsTalkButton />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
