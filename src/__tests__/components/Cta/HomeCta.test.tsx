import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import Cta from "@/components/cta/HomeCta";

// ✅ Mock des traductions
jest.mock("next-intl", () => ({
  useTranslations: () => {
    return (key: string) => {
      if (key === "title") return "Une question ? Envie d’un site à votre image ?";
      if (key === "text") return "Discutons ensemble de votre projet web. Je suis à l’écoute.";
      if (key === "aria") return "Aller à la page de contact";
      if (key === "label") return "Me contacter";
      return "";
    };
  },
  useLocale: () => "fr",
}));

// ✅ Mock du composant ContactButton
jest.mock("@/components/Buttons/ContactButton", () => () => (
  <a href="/fr/contact" role="button">Me contacter</a>
));

describe("HomeCta", () => {
  it("affiche le titre et le texte", () => {
    render(<Cta />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Une question ? Envie d’un site à votre image ?");
    expect(screen.getByText("Discutons ensemble de votre projet web. Je suis à l’écoute.")).toBeInTheDocument();
  });

  it("contient le bouton Me contacter", () => {
    render(<Cta />);
    const button = screen.getByRole("button", { name: "Me contacter" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/fr/contact");
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<Cta />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const { asFragment } = render(<Cta />);
    expect(asFragment()).toMatchSnapshot();
  });
});
