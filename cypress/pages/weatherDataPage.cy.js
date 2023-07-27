class weatherDataPage {
  getPageTitle() {
    return cy.get("div > h1 > span");
  }

  getLocationText() {
    return cy.get("#wxlocation");
  }

  getSearchBtn() {
    return cy.xpath("//div[@class='d-sm-flex']//button[@type='submit'] ");
  }
}

module.exports = new weatherDataPage();
