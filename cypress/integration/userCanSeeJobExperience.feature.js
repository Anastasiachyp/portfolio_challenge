describe("User can see list of work experience", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
    cy.get("#cv-tab").click();
  });
  it("is expected to see first work experience", () => {
    cy.get("#work-1").within(() => {
      cy.get(".item").should("contain", "OFYR");
      cy.get(".header").should("contain", "Digital Marketing Assistant");
      cy.get(".description").should("contain", "2020-2021");
    });
  });
});