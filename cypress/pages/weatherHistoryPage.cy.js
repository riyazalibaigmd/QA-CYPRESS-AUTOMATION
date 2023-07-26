class weatherHistoryPage {
    elements = {
        txt_PageTitle: () => cy.xpath("//h1")
    };

    getPageTitle() {
        return this.elements.txt_PageTitle();
    }
}

module.exports = new weatherHistoryPage();
