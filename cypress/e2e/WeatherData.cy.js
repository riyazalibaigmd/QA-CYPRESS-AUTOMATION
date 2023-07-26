import weatherDataLandingPageCy from "../pages/weatherDataLandingPage.cy";
import weatherDataPageCy from "../pages/weatherDataPage.cy";
import weatherHistoryPageCy from "../pages/weatherHistoryPage.cy";

describe("Weather Data UI Validation", () => {
  beforeEach(function () {
    cy.fixture("WeatherData").then((data) => {
      this.data = data;
    });
  });

  it("Weather Data UI", function () {
    cy.visit("https://www.visualcrossing.com/");
    weatherDataLandingPageCy.getRejectCookies().click();
    weatherDataLandingPageCy.getWeatherData().first().should("have.text", this.data.weatherDataTxt).click();
    weatherDataPageCy.getPageTitle().should("have.text", this.data.weatherDataPageTxt);
    weatherDataPageCy.getLocationText().type(this.data.city);
    weatherDataPageCy.getSearchBtn().click();
    weatherHistoryPageCy.getPageTitle().should("have.text", this.data.weatherHistoryPageTxt + this.data.city);
  });
});
