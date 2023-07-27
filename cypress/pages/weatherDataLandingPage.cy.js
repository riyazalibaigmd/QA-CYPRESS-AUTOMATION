class weatherDataLandingPage {
  getWeatherData() {
    return cy.get("#navbarNav > ul > li > a");
  }

  getRejectCookies() {
    return cy.xpath(
      "//div[@class='row']/button[contains(text(),'Reject optional cookies')]"
    );
  }
}

module.exports = new weatherDataLandingPage();
