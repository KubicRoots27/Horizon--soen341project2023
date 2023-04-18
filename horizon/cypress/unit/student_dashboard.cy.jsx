import React from "react";
import StudentDashboard from "pages/dashboard/student";

describe("<StudentDashboard />", () => {
  it("renders without crashing", () => {
    cy.mount(<StudentDashboard />);
  });
});
