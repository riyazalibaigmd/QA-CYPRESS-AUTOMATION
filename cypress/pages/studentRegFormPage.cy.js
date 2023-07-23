class studentRegFormPage {
  elements = {
    txt_firstName: () => cy.get("#firstName"),
    txt_lastName: () => cy.get("#lastName"),
    txt_userEmail: () => cy.get("#userEmail"),
    chk_gender: () => cy.get("#gender-radio-1"),
    txt_mobile: () => cy.get("#userNumber"),
    txt_dob: () => cy.get("#dateOfBirthInput"),
    txt_subjects: () => cy.get("#subjectsContainer"),
    chk_hobbies: () => cy.get("#hobbies-checkbox-1"),
    txt_currentAddress: () => cy.get("#currentAddress"),
  };

  clearFirstName() {
    return this.elements.txt_firstName().clear();
  }

  clearLastName() {
    return this.elements.txt_lastName().clear();
  }

  clearUserEmail() {
    return this.elements.txt_userEmail().clear();
  }

  clickOnMaleGender() {
    this.elements.chk_gender().click();
  }

  clearMobile() {
    return this.elements.txt_mobile().clear();
  }

  clickDOB() {
    return this.elements.txt_dob().click();
  }

  clickSubjects() {
    return this.elements.txt_subjects().click();
  }

  clickOnSports() {
    this.elements.chk_hobbies().click();
  }

  clearCurrentAddress() {
    return this.elements.txt_currentAddress().clear();
  }
}

module.exports = new studentRegFormPage();
