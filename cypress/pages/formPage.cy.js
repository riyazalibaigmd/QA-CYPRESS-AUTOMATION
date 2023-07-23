class formPage {
  elements = {
    lnk_forms: () => cy.get("div > div:nth-child(2) > span"),
    lnk_practiceForm: () =>
      cy.xpath("//span[contains(text(), 'Practice Form')]"),
  };

  clickOnPracticeForm() {
    this.elements.lnk_forms().click();
    this.elements.lnk_practiceForm().click({ force: true });
  }
}

module.exports = new formPage();
