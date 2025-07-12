// src/__tests__/components/BeneficeSeo.test.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import BeneficeSeo from "@/components/Benefices/BeneficeSeo";

// ✅ Mock complet : t("key") et t.raw("list")
jest.mock("next-intl", () => ({
  useTranslations: () => {
    const t = (key: string) => {
      if (key === "title") return "Les bénéfices d’un SEO bien pensé";
      return "";
    };

    t.raw = (key: string) => {
      if (key === "list") {
        return [
          { id: 1, title: "Titre 1", desc: "Desc 1" },
          { id: 2, title: "Titre 2", desc: "Desc 2" },
        ];
      }
      return [];
    };

    return t;
  },
}));

// ✅ Mock framer-motion pour éviter les erreurs de DOM
jest.mock("framer-motion", () => {
  const React = require("react");
  return {
    motion: {
      div: React.forwardRef((props: any, ref) => {
        return <div ref={ref} {...props} />;
      }),
    },
  };
});

describe("BeneficeSeo", () => {
  it("rend le titre et les bénéfices", () => {
    render(<BeneficeSeo />);

    expect(screen.getByText("Les bénéfices d’un SEO bien pensé")).toBeInTheDocument();
    expect(screen.getByText("Titre 1")).toBeInTheDocument();
    expect(screen.getByText("Desc 1")).toBeInTheDocument();
    expect(screen.getByText("Titre 2")).toBeInTheDocument();
    expect(screen.getByText("Desc 2")).toBeInTheDocument();
  });
});
