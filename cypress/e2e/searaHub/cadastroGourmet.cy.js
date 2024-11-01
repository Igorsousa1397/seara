describe('Teste cadastro', () => {

    it('Teste', () =>{

        for (let i = 0; i < 5; i++) {
            cy.visit('https://www.seara.com.br/seara-momento-gourmet/', { failOnStatusCode: false })
            cy.get(':nth-child(1) > .new-newsletter-form-group > .input', { timeout: 40000 }).type('teste')
            cy.get(':nth-child(2) > .new-newsletter-form-group > .input').type('teste@teste.com')
            cy.get('.input-phone').type('11999999999')
            cy.get('.input-number').type('13-12-1997')
            cy.get('i').click()
            cy.get('.new-newsletter-submit').click()
            cy.wait(3000)
            cy.get('.new-newsletter-success > a').click({force: true})
        }
    })
})

