export function getWeatherData() {
  return cy.get("#navbarNav > ul > li > a");
}

export function getRejectCookies() {
  return cy.xpath(
    "//div[@class='row']/button[contains(text(),'Reject optional cookies')]"
  );
}
