  const { defineConfig } = require("cypress")

  module.exports = defineConfig({
    e2e: {
      baseUrl: 'https://www.seara.com.br/agendamento-seara/',
      retries: {
        runMode: 2,   // Tenta reexecutar os testes 2 vezes no modo headless (CI/CD)
        openMode: 0   // Sem retries no modo interativo (local)
      },
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
    },
    
  })
