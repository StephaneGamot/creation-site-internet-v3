import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import SeoCta from "@/components/cta/SeoCta";

// ✅ Mock des traductions
jest.mock("next-intl", () => ({
  useTranslations: () => {
    return (key: string) => {
      if (key === "title") return "Besoin d’un SEO stratégique ?";
      if (key === "text") return "Votre visibilité mérite mieux que des mots-clés aléatoires. Parlons stratégie.";
      if (key === "aria") return "Aller à la page de contact";
      if (key === "label") return "Me contacter";
      return "";
    };
  },
  useLocale: () => "fr",
}));

// ✅ Mock du bouton
jest.mock("@/components/Buttons/ContactButton", () => () => (
  <a href="/fr/contact" role="button">Me contacter</a>
));

describe("SeoCta", () => {
  it("affiche le titre et le texte", () => {
    render(<SeoCta />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Besoin d’un SEO stratégique ?");
    expect(screen.getByText("Votre visibilité mérite mieux que des mots-clés aléatoires. Parlons stratégie.")).toBeInTheDocument();
  });

  it("affiche le bouton Me contacter", () => {
    render(<SeoCta />);
    const button = screen.getByRole("button", { name: "Me contacter" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/fr/contact");
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<SeoCta />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const { asFragment } = render(<SeoCta />);
    expect(asFragment()).toMatchSnapshot();
  });
});
