const { defineConfig } = require("cypress");
const { plugin: cypressGrepPlugin } = require('@cypress/grep/plugin')

module.exports = defineConfig({
  allowCypressEnv: true,

  env:{
      github_token: "",
      api_url: 'https://api.github.com'
    },

  e2e: {
    baseUrl: 'https://nexdom.tec.br/',
    
    setupNodeEvents(on, config) {
      cypressGrepPlugin(config)
      return config
    },
  },
  viewportWidth: 1280,
  viewportHeight: 800,
  watchForFileChanges: false,
  defaultCommandTimeout: 10000,
  video: true,
  videoCompression: true,
  expose: {
    grepFilterSpecs: true
  },
});
