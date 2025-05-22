describe("Product List Page", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/products");
  });

  it("displays the product list title and add button", () => {
    cy.contains("Liste des produits").should("exist");
    cy.contains("Créer produit").should("exist");
  });
});
