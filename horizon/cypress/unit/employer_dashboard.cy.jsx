import React from "react";
import EmployerDashboard from "src/pages/dashboard/employer";

describe("<EmployerDashboard />", () => {
  it("renders without crashing", () => {
    cy.mount(<EmployerDashboard />);
  });
});
