class formPage {
  getLnkForms() {
    return cy.get("div > div:nth-child(2) > span");
  }

  getPracticeForm() {
    return cy.xpath("//span[contains(text(), 'Practice Form')]")
  }
}

module.exports = new formPage();
