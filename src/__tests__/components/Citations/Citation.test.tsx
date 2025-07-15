import React from "react";
import { render, screen } from "@testing-library/react";
import Citation from "@/components/Citations/Citation";
import renderer from "react-test-renderer";
import { axe } from "jest-axe";

// ✅ Mock de next-intl avec .raw()
jest.mock("next-intl", () => ({
  useTranslations: () => {
    const t = () => "";
    t.raw = (key: string) => {
      if (key === "citations") {
        return [
          { id: 1, body: "La simplicité est la sophistication suprême.", author: "Léonard de Vinci" },
          { id: 2, body: "Faire simple est souvent plus difficile que faire compliqué." },
        ];
      }
      return [];
    };
    return t;
  },
}));

describe("Citation", () => {
  it("affiche la citation avec auteur", () => {
    render(<Citation id={1} />);
    expect(screen.getByText("La simplicité est la sophistication suprême.")).toBeInTheDocument();
    expect(screen.getByText("Léonard de Vinci")).toBeInTheDocument();
  });

  it("affiche la citation sans auteur", () => {
    render(<Citation id={2} />);
    expect(screen.getByText("Faire simple est souvent plus difficile que faire compliqué.")).toBeInTheDocument();
    expect(screen.queryByText("Léonard de Vinci")).not.toBeInTheDocument();
  });

  it("ne rend rien si l’id est invalide", () => {
    const { container } = render(<Citation id={999} />);
    expect(container.firstChild).toBeNull();
  });

  it("passe les tests d’accessibilité", async () => {
    const { container } = render(<Citation id={1} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  it("correspond au snapshot", () => {
    const tree = renderer.create(<Citation id={1} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

