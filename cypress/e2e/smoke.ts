import faker from "@faker-js/faker";

describe("smoke tests", () => {

  it("should render", () => {
    cy.visit("/");
  });
});
