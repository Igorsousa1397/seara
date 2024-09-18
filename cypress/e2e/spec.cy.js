describe('Simulação de múltiplos cadastros', () => {
  const generateRandomEmail = () => {
    const randomString = Math.random().toString(36).substring(2, 10)
    return `usuario_${randomString}@teste.com`
  }

  const generateRandomName = () => {
    const randomString = Math.random().toString(36).substring(2, 10)
    return `teste_${randomString}`
  }

  // for (let i = 0; i < 5; i++) {
    it('Deve cadastrar um novo usuário', () => {
      const randomEmail = generateRandomEmail()
      const randomName = generateRandomName()
      
      cy.visit('https://www.seara.com.br/agendamento-seara/',  { failOnStatusCode: false })
    
      cy.get('#onetrust-accept-btn-handler', { timeout: 30000 }).should('be.visible').click()
      cy.get('#slick-slide10 > :nth-child(1) > .booking-experience-item > .experience-card > .experience-text > .experience-cta').scrollIntoView({ duration: 1000 })
      cy.get('select[name="selected_day"]').select(1)
      cy.get('select[name="selected_experience"]').first().select(1)
      cy.get('select[name="selected_time"]').first().select(1)

      cy.get('.firstname > input').type('teste')
      cy.get('.lastname > input').type('teste')
      cy.get('.phone > input').type(11945132157)
      cy.get('.cpf > input').type(12345678909)
      cy.get('.birthday > input').type(13121997)
      cy.get('.state > .form-field-select > .input').select(1)
      cy.get('.email > input').type(randomEmail)
      cy.get('.username > input').type(randomName)
      cy.get('.password > input').type('123456')
      cy.get('.rules > .booking-form-label > i').click()
      cy.get('.privacy > .booking-form-label > i').click()
      // cy.get('.booking-form-button').click()
      // cy.wait(15000)
      // cy.get('#tag').should('have.text', 'Pronto!')
    })
  // }
})
