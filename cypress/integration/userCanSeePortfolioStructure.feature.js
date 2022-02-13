import React from "react";

describe("Portfolio interface", () => {
  it("successfully renders", () => {
    cy.visit("http://localhost:3000");
    cy.get("#header").should("contain", "My Portfolio");
    cy.get("#footer").should("contain", `Made with React ${React.version}`);
    cy.get("#hello").should("contain", "Welcome to my portfolio!");
    cy.get("#about-tab").should("contain", "About Me");
    cy.get("#project-tab").should("contain", "My Projects");
    cy.get("#cv-tab").should("contain", "My CV");
  });
});
