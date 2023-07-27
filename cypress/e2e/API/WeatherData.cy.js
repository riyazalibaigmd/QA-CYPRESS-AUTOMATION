describe("template spec", () => {
  beforeEach(function () {
    cy.fixture("WeatherData_API").then((data) => {
      this.data = data;
    });
  });

  it("GET request", () => {
    // var token = this.data.access_key;
    cy.request({
      method: "GET",
      url: "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Hyderabad",
        qs:{
            "unitGroup": "metric",
            "key": 'AM5A6CQK78HU5LYRW4NGLCEQY',
            "contentType": "json"
         }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.address).to.eq("Hyderabad");
    });
  });
});
