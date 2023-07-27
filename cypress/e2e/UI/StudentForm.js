import dashboardPageCy from "../../pages/dashboardPage.cy";
import formPageCy from "../../pages/formPage.cy";
import studentRegFormPageCy from "../../pages/studentRegFormPage.cy";

describe("Demo QA Page", () => {
  beforeEach(function () {
    cy.fixture("StudentRegForm").then((data) => {
      this.data = data;
    });
  });

  it("Student Registration Form", function () {
    cy.visit("/");
    // const txt_links= "div > div > div.card-body > h5";
    // cy.get(txt_links).contains("Forms").click();
    cy.clickText(dashboardPageCy.getLinks(), "Forms");
    formPageCy.getPracticeForm().click();

    studentRegFormPageCy.getFirstName().type(this.data.firstName);
    studentRegFormPageCy.getLastName().type(this.data.lastName);
    studentRegFormPageCy.getUserEmail().type(this.data.userEmail);
    studentRegFormPageCy.getMobile().type(this.data.userNumber);
    studentRegFormPageCy.getCurrentAddress().type(this.data.currentAddress);
  });
});
