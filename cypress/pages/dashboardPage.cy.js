class dashboardPage {

    elements = {
        txt_elements: () => cy.get("div:nth-child(1) > div > div.card-body > h5"),
        txt_forms: () => cy.get("div:nth-child(2) > div > div.card-body > h5"),
        txt_alerts: () => cy.get("div:nth-child(3) > div > div.card-body > h5"),
        txt_widgets: () => cy.get("div:nth-child(4) > div > div.card-body > h5"),
        txt_interactions: () => cy.get("div:nth-child(5) > div > div.card-body > h5"),
        txt_bookstore: () => cy.get("div:nth-child(6) > div > div.card-body > h5")
    }

    clickOnElements() {
        this.elements.txt_elements().click()
    }

    clickOnForms() {
        this.elements.txt_forms().click();
    }

    clickOnAlerts() {
        this.elements.txt_alerts().click();
    }

    clickOnWidgets() {
        this.elements.txt_widgets().click();
    }

    clickOnInteractions() {
        this.elements.txt_interactions().click();
    } 

    clickOnBookStore() {
        this.elements.txt_bookstore().click();
    }

}

module.exports = new dashboardPage();