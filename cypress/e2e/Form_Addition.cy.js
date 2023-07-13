import dashboardPageCy from "../pages/dashboardPage.cy";
import formPageCy from "../pages/formPage.cy";
import studentRegFormPageCy from "../pages/studentRegFormPage.cy";

describe('Demo QA Page', () => {

    beforeEach(function () {
        cy.fixture('StudentRegForm').then((data) => {
            this.data = data;
        })
    })

    it('Student Registration Form', function () {
        cy.visit("/");
        dashboardPageCy.clickOnForms();
        formPageCy.clickOnPracticeForm();

        studentRegFormPageCy.clearFirstName().type(this.data.firstName);
        studentRegFormPageCy.clearLastName().type(this.data.lastName);
        studentRegFormPageCy.clearUserEmail().type(this.data.userEmail);
        studentRegFormPageCy.clearMobile().type(this.data.userNumber);
        studentRegFormPageCy.clearCurrentAddress().type(this.data.currentAddress);
    })
})  