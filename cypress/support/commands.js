// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("loginToApp", (username, password) => {
  cy.get('input[name="user-name"]').type(username);
  cy.get('input[name="password"]').type(password);
  cy.get(".submit-button").click();
});

Cypress.Commands.add(
  "clickText",
  { prevSubject: "element" },
  (subject, options) => {
    cy.get(prevSubject).each(($el, index, $list) => {
      if ($el.text() === subject) {
        cy.wrap($el).click({ force: true });
      }
    });
  }
);
