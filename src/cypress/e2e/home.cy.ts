describe("Page d'accueil", () => {
  beforeEach(() => {
    cy.visit("/fr"); // adapte selon ta locale par défaut
  });

  it("affiche les sections principales", () => {
    cy.get("main#main-content").should("exist");

    cy.contains("Pourquoi me choisir ?").should("be.visible");
    cy.contains("Mes services").should("be.visible");
    cy.contains("Contactez-moi").should("be.visible");
    cy.contains("Témoignages").should("be.visible");
  });

  it("vérifie que la page est accessible", () => {
    cy.injectAxe(); // inject axe-core dans la page
    cy.checkA11y(null, null, (violations) => {
      if (violations.length) {
        cy.task("log", `${violations.length} violations d’accessibilité détectées`);
      }
      expect(violations).to.have.length(0);
    });
  });
});
