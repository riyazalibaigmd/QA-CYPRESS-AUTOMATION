import { getLinks } from "../../pages/dashboardPage.cy";
import { getLnkForm, getPracticeForm } from "../../pages/formPage.cy";

describe("Demo QA Page", () => {
  beforeEach(function () {
    cy.fixture("StudentRegForm").then((data) => {
      this.data = data;
    });
  });

  it("Student Registration Form", function () {
    cy.visit("/");
    getLinks().contains("Forms").click();
    getLnkForm().contains("Forms").click();
    getPracticeForm().click({ force: true });

    cy.cssID("firstName").type(this.data.firstName);
    cy.cssID("lastName").type(this.data.lastName);
    cy.cssID("gender-radio-1").click({ force: true });
    cy.cssID("userEmail").type(this.data.userEmail);
    cy.cssID("userNumber").type(this.data.userNumber);
    cy.cssID("hobbies-checkbox-1").click({ force: true });
    cy.cssID("currentAddress").type(this.data.currentAddress);
  });
});
