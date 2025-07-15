import React from "react";
import { render, screen } from "@testing-library/react";
import { axe } from "jest-axe";
import WebCta from "@/components/cta/WebCta";

// ✅ Mock de next-intl
jest.mock("next-intl", () => ({
  useTranslations: () => {
    return (key: string) => {
      if (key === "title") return "Un site web à votre image";
      if (key === "text") return "Conception sur mesure, performance, SEO... tout y est.";
      if (key === "aria") return "Aller à la page de contact";
      if (key === "label") return "Me contacter";
      return "";
    };
  },
  useLocale: () => "fr",
}));

// ✅ Mock du bouton ContactButton
jest.mock("@/components/Buttons/ContactButton", () => () => (
  <a href="/fr/contact" role="button">Me contacter</a>
));

describe("WebCta", () => {
  it("affiche le titre et le texte", () => {
    render(<WebCta />);
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Un site web à votre image");
    expect(screen.getByText("Conception sur mesure, performance, SEO... tout y est.")).toBeInTheDocument();
  });

  it("affiche le bouton de contact", () => {
    render(<WebCta />);
    const button = screen.getByRole("button", { name: "Me contacter" });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("href", "/fr/contact");
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<WebCta />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const { asFragment } = render(<WebCta />);
    expect(asFragment()).toMatchSnapshot();
  });
});
