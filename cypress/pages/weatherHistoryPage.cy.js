class weatherHistoryPage {
  getPageTitle() {
    return cy.xpath("//h1");
  }
}

module.exports = new weatherHistoryPage();
