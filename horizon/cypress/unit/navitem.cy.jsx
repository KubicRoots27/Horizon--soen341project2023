import React from "react";
import NavItem from "components/nav/navitem";

describe("<NavItem />", () => {
  it("renders without crashing", () => {
    cy.mount(<NavItem />);
  });
});
