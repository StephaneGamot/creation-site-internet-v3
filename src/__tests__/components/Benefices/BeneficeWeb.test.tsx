import React, { forwardRef } from "react";
import { render, screen } from "@testing-library/react";
import BeneficeWeb from "@/components/Benefices/BeneficeWeb";
import renderer from "react-test-renderer";

// ✅ Mock de next-intl (t et t.raw)
jest.mock("next-intl", () => ({
  useTranslations: () => {
    const t = (key: string) => {
      if (key === "title") return "Les bénéfices d’un site bien conçu";
      return "";
    };

    t.raw = (key: string) => {
      if (key === "list") {
        return [
          { id: 1, title: "Rapide", desc: "Chargement éclair pour vos visiteurs." },
          { id: 2, title: "Optimisé", desc: "Structure SEO-friendly dès le départ." },
        ];
      }
      return [];
    };

    return t;
  },
}));

// ✅ Mock framer-motion typé
jest.mock("framer-motion", () => ({
  motion: {
    div: forwardRef<HTMLDivElement, any>((props, ref) => (
      <div ref={ref} {...props} />
    )),
  },
}));

// ✅ Tests
describe("BeneficeWeb", () => {
  it("rend le titre et les bénéfices", () => {
    render(<BeneficeWeb />);

    // Titre principal
    expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent("Les bénéfices d’un site bien conçu");

    // Bénéfices (titres et descriptions)
    expect(screen.getByText("Rapide")).toBeInTheDocument();
    expect(screen.getByText("Chargement éclair pour vos visiteurs.")).toBeInTheDocument();
    expect(screen.getByText("Optimisé")).toBeInTheDocument();
    expect(screen.getByText("Structure SEO-friendly dès le départ.")).toBeInTheDocument();

    // Nombre de blocs (heading level 3)
    expect(screen.getAllByRole("heading", { level: 3 })).toHaveLength(2);
  });

  it("correspond au snapshot", () => {
  const { container } = render(<BeneficeWeb />);
  expect(container).toMatchSnapshot();
});

});
