import React from "react";
import Card from "components/ui/card";

describe("<Card />", () => {
  it("renders without crashing", () => {
    cy.mount(<Card />);
  });
});
