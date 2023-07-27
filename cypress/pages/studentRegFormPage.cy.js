class studentRegFormPage {
  getFirstName() {
    return cy.get("#firstName");
  }

  getLastName() {
    return cy.get("#lastName");
  }

  getUserEmail() {
    return cy.get("#userEmail");
  }

  getMaleGender() {
    return cy.get("#gender-radio-1");
  }

  getMobile() {
    return cy.get("#userNumber");
  }

  getDOB() {
    return cy.get("#dateOfBirthInput");
  }

  getSubjects() {
    return cy.get("#subjectsContainer");
  }

  getHobbies() {
    return cy.get("#hobbies-checkbox-1");
  }

  getCurrentAddress() {
    return cy.get("#currentAddress");
  }
}

module.exports = new studentRegFormPage();
