describe("Home Page", () => {
  it("displays the welcome message", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Bienvenue").should("exist");
    cy.contains("Bienvenue sur ALTEN SHOP !").should("exist");
  });
});
