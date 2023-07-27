  export function getLnkForm() {
    return cy.get("div > div > span");
  }

  export function getPracticeForm() {
    return cy.xpath("//span[contains(text(), 'Practice Form')]")
  }