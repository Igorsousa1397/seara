  const { defineConfig } = require("cypress")

  module.exports = defineConfig({
    e2e: {
      baseUrl: 'https://www.seara.com.br/agendamento-seara/',
      retries: {
        runMode: 2,   // Tenta reexecutar os testes 2 vezes no modo headless (CI/CD)
        openMode: 1   // Sem retries no modo interativo (local)
      },
      setupNodeEvents(on, config) {
        // implement node event listeners here
      },
      viewportWidth: 1380, // Ajuste conforme o tamanho da sua tela
      viewportHeight: 800,  // Exemplo para uma tela pequena
    },
  })
