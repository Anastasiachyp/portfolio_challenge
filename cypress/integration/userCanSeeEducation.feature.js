describe("User can see list of education", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
      cy.get("#cv-tab").click();
    });
    it("is expected to see first educational institution", () => {
      cy.get("#edu-1").within(() => {
        cy.get(".item").should("contain", "IULM University");
        cy.get(".header").should(
          "contain",
          "Bachelor's degree, Marketing"
        );
        cy.get(".description").should("contain", "2017-2020");
      });
    });
  
    it("is expected to see second educational institution", () => {
      cy.get("#edu-2").within(() => {
        cy.get(".item").should("contain", "Craft Academy");
        cy.get(".header").should(
          "contain",
          "Certificate of Junior developer"
        );
        cy.get(".description").should("contain", "2022");
      });
    });
  });