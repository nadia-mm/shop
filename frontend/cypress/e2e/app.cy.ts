/// <reference types="cypress" />

describe("App Navigation", () => {
  it("should display the Home page", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Bienvenue").should("exist");
  });

  it("should navigate to the Product List page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href="/products"]').first().click();
    cy.url().should("include", "/products");
    cy.contains("Liste des produits").should("exist");
  });

  it("should navigate back to the Home page", () => {
    cy.visit("http://localhost:3000/products");
    cy.get('a[href="/"]').first().click();
    cy.url().should("eq", "http://localhost:3000/");
    cy.contains("Bienvenue").should("exist");
  });
});
