const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportPageTitle: "Cypress_Automation_Reports",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: false,
    "timestamp":"mmddyyyy_HHMMss"
  },
  e2e: {
    baseUrl: "https://demoqa.com/",
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
    },
    specPattern:'./cypress/e2e/*/*.js',
    chromeWebSecurity: false
  },
});
