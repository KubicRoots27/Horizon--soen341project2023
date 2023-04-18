import React from "react";
import Navbar from "components/nav/navbar";

describe("<Navbar />", () => {
  it("renders without crashing", () => {
    cy.mount(<Navbar />);
  });
});
