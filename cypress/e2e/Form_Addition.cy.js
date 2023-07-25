import dashboardPageCy from "../pages/dashboardPage.cy";
import formPageCy from "../pages/formPage.cy";
import studentRegFormPageCy from "../pages/studentRegFormPage.cy";

describe("Demo QA Page", () => {
  beforeEach(function () {
    cy.fixture("StudentRegForm").then((data) => {
      this.data = data;
    });
  });

  it("Student Registration Form", function () {
    cy.visit("/");
    const txt_links= "div > div > div.card-body > h5";
    cy.get(txt_links).contains("Forms").click();
    // cy.clickButton(dashboardPageCy.elements.txt_links, "Forms");
    formPageCy.clickOnPracticeForm();

    studentRegFormPageCy.clearFirstName().type(this.data.firstName);
    studentRegFormPageCy.clearLastName().type(this.data.lastName);
    studentRegFormPageCy.clearUserEmail().type(this.data.userEmail);
    studentRegFormPageCy.clearMobile().type(this.data.userNumber);
    studentRegFormPageCy.clearCurrentAddress().type(this.data.currentAddress);
  });
});
