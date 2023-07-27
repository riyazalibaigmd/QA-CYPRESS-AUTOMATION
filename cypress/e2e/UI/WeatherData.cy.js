import {
  getWeatherData,
  getRejectCookies,
} from "../../pages/weatherDataLandingPage.cy";
import {
  getWeatherDataPageTitle,
  getLocationText,
  getSearchBtn,
} from "../../pages/weatherDataPage.cy";
import { getHistoryPageTitle } from "../../pages/weatherHistoryPage.cy";

describe("Weather Data UI Validation", () => {
  beforeEach(function () {
    cy.fixture("WeatherData").then((data) => {
      this.data = data;
    });
  });

  it("Weather Data UI", function () {
    cy.visit("https://www.visualcrossing.com/");
    getRejectCookies().click();
    getWeatherData()
      .first()
      .should("have.text", this.data.weatherDataTxt)
      .click();
    getWeatherDataPageTitle().should("have.text", this.data.weatherDataPageTxt);
    getLocationText().type(this.data.city);
    getSearchBtn().click();
    getHistoryPageTitle().should(
      "have.text",
      this.data.weatherHistoryPageTxt + this.data.city
    );
  });
});
