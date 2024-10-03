Cypress.Commands.add('loginSucess', (username, password) => {
    cy.visit('https://www.searakitfesta.com.br/')
    cy.wait(2000)
    cy.get('div.relative > .vtex-button > .vtex-button__label').click()
    cy.get(':nth-child(2) > .vtex-login-2-x-button > .vtex-button').click()
    cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type(username)
    cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type(password)
    cy.get('.vtex-button__label > .t-small').click()
    cy.wait(2000)
    cy.get('div.relative > .vtex-button > .vtex-button__label').click()
    cy.get('.vtex-login-2-x-button > .t-action--small').should('have.text', 'Minha conta')
    cy.get('#onetrust-accept-btn-handler').click()      
  })

  Cypress.Commands.add('loginInvalid', (username, password) => {
    cy.visit('https://www.searakitfesta.com.br/')
    cy.wait(2000)
    cy.get('div.relative > .vtex-button > .vtex-button__label').click()
    cy.get(':nth-child(2) > .vtex-login-2-x-button > .vtex-button').click()
    cy.get('.vtex-login-2-x-inputContainerEmail > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type(username)
    cy.get('.relative > .vtex-input > .vtex-input-prefix__group > .vtex-styleguide-9-x-input').type(password)
    cy.get('.vtex-button__label > .t-small').click()
    cy.get('.vtex-login-2-x-formError').should('have.text', 'Usuário e/ou senha incorretos')
         
  })
  