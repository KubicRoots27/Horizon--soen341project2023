describe("Authentication", () => {
  it("Check initial light mode", () => {
    cy.visit("http://localhost:3000/");

    cy.get("nav").should("have.css", "background-color", "rgb(241, 241, 241)");
  });

  it("Check dark mode", () => {
    cy.visit("http://localhost:3000/");

    cy.contains("Enable Dark Mode").click();

    cy.get("nav").should("have.css", "background-color", "rgb(169, 169, 169)");
  });

  it("Check return to light mode", () => {
    cy.visit("http://localhost:3000/");
    cy.contains("Enable Dark Mode").click();
    cy.contains("Enable Light Mode").click();

    cy.get("nav").should("have.css", "background-color", "rgb(241, 241, 241)");
  });
});
