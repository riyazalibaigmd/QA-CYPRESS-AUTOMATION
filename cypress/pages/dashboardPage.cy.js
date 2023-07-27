class dashboardPage {
  getLinks() {
    return cy.get("div > div > div.card-body > h5");
  }

  getElements() {
    return cy.get("div:nth-child(1) > div > div.card-body > h5");
  }

  getForms() {
    return cy.get("div:nth-child(2) > div > div.card-body > h5");
  }

  getAlerts() {
    return cy.get("div:nth-child(3) > div > div.card-body > h5");
  }

  getWidgets() {
    return cy.get("div:nth-child(4) > div > div.card-body > h5");
  }

  getInteractions() {
    return cy.get("div:nth-child(5) > div > div.card-body > h5");
  }

  getBookStore() {
    return cy.get("div:nth-child(6) > div > div.card-body > h5");
  }
}

module.exports = new dashboardPage();
