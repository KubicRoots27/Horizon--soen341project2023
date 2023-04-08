describe("Login", () => {
  it("Logs in successfully", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('[name="email"]').type("christina.strutynski@spaceconcordia.ca");
    cy.get('[name="password"]').type("111111");
    cy.get("form").submit();

    cy.url().should("include", "/profile");
  });

  it("Logs out successfully", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('[name="email"]').type("christina.strutynski@spaceconcordia.ca");
    cy.get('[name="password"]').type("111111");
    cy.get("form").submit();

    cy.url().should("include", "/profile");
    cy.contains("Sign Out").click();

    cy.contains("You are not logged in!").should("be.visible");
  });
});
