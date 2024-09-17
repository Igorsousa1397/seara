
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Retorna false para evitar que o Cypress falhe o teste ao encontrar uma exceção não capturada
    return false
  })
  