class weatherDataPage {
    elements = {
        txt_PageTitle: () => cy.get("div > h1 > span"),
        txt_Location: () => cy.get("#wxlocation"),
        btn_Search: () => cy.xpath("//div[@class='d-sm-flex']//button[@type='submit'] ")
    };

    getPageTitle() {
        return this.elements.txt_PageTitle();
    }

    getLocationText() {
        return this.elements.txt_Location();
    }

    getSearchBtn() {
        return this.elements.btn_Search();
    }
}

module.exports = new weatherDataPage();
