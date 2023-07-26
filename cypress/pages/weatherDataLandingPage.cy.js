class weatherDataLandingPage {
  elements = {
    lnk_weatherData: () => cy.get("#navbarNav > ul > li > a"),
    btn_rejectCookies: () => cy.xpath("//div[@class='row']/button[contains(text(),'Reject optional cookies')]")
  };

  getWeatherData() {
    return this.elements.lnk_weatherData();
  }

  getRejectCookies() {
    return this.elements.btn_rejectCookies();
  }
}

module.exports = new weatherDataLandingPage();
