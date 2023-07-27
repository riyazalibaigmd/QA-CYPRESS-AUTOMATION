export function getFirstName() {
  return cy.get("#firstName");
}

export function getLastName() {
  return cy.get("#lastName");
}

export function getUserEmail() {
  return cy.get("#userEmail");
}

export function getMaleGender() {
  return cy.get("#gender-radio-1");
}

export function getMobile() {
  return cy.get("#userNumber");
}

export function getDOB() {
  return cy.get("#dateOfBirthInput");
}

export function getSubjects() {
  return cy.get("#subjectsContainer");
}

export function getHobbies() {
  return cy.get("#hobbies-checkbox-1");
}

export function getCurrentAddress() {
  return cy.get("#currentAddress");
}
