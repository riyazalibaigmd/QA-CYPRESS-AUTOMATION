import {getLinks, getForms} from "../../pages/dashboardPage.cy";
import {getLnkForm, getPracticeForm} from "../../pages/formPage.cy";
import {getFirstName, getLastName, getUserEmail, getMobile, getCurrentAddress} from "../../pages/studentRegFormPage.cy";

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
    getPracticeForm().click({force: true});

    getFirstName().type(this.data.firstName);
    getLastName().type(this.data.lastName);
    getUserEmail().type(this.data.userEmail);
    getMobile().type(this.data.userNumber);
    getCurrentAddress().type(this.data.currentAddress);
  });
});
