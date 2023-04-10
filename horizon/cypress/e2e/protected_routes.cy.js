describe("Protected Routes", () => {
  it("Profile Page", () => {
    cy.visit("http://localhost:3000/profile");

    cy.contains("You are not logged in!").should("be.visible");
  });

  it("Job Posting page", () => {
    cy.visit("http://localhost:3000/jobpostings");

    cy.contains("You are not logged in!").should("be.visible");
  });
});
