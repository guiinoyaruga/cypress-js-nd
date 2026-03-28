const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: true,

  env:{
      github_token: "",
      api_url: 'https://api.github.com'
    },

  e2e: {
    baseUrl: 'https://nexdom.tec.br/',
    
    setupNodeEvents(on, config) {
    },
  },
  viewportWidth: 1280,
  viewportHeight: 800,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
});
