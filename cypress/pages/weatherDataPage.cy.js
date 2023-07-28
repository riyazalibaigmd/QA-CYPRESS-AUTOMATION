export function getWeatherDataPageTitle() {
  return cy.get("div > h1 > span");
}

export function getLocationText() {
  return cy.get("#wxlocation");
}

export function getSearchBtn() {
  return cy.xpath("//div[@class='d-sm-flex']//button[@type='submit'] ");
}
