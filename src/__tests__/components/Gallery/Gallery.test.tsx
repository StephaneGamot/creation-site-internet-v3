import React from "react";
import { render, screen } from "@testing-library/react";
import Gallery from "@/components/Gallery/Gallery";
import { axe } from "jest-axe";

// ✅ Mock des images statiques
jest.mock("next/image", () => (props: any) => {
  // On force le rendu des balises img classiques
  return <img {...props} />;
});

jest.mock("../../../public/images/IA.webp", () => "/mock/IA.webp");
jest.mock("../../../public/images/IB.webp", () => "/mock/IB.webp");
jest.mock("../../../public/images/IC.webp", () => "/mock/IC.webp");

describe("Gallery", () => {
  it("affiche les trois images avec les bons alt", () => {
    render(<Gallery />);

    expect(screen.getByAltText("Site web créé à propos de l’IA")).toBeInTheDocument();
    expect(screen.getByAltText("Site e-commerce de bien-être")).toBeInTheDocument();
    expect(screen.getByAltText("Site internet de recettes culinaires")).toBeInTheDocument();
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<Gallery />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const { asFragment } = render(<Gallery />);
    expect(asFragment()).toMatchSnapshot();
  });
});
