// Cypress 10+ configuration (e2e testing)
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000',
    specPattern: 'test/cypress/integration/**/*.{js,jsx,ts,tsx}',
    supportFile: 'test/cypress/support/index.js',
    fixturesFolder: 'test/cypress/fixtures',
    screenshotsFolder: 'test/cypress/screenshots',
    videosFolder: 'test/cypress/videos',
    setupNodeEvents(on, config) {
      // Reuse existing plugin for preprocessor (TS + webpack)
      try {
        // Old plugin expects (on), but passing config is harmless
        require('./test/cypress/plugins/index.js')(on, config);
      } catch (e) {
        // ignore if plugin file changes
      }
      return config;
    },
  },
});

