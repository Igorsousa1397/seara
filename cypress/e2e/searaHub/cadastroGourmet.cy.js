describe('Teste cadastro', () => {

    before (()=>{
        cy.visit('https://www.seara.com.br/seara-momento-gourmet/', { failOnStatusCode: false })
    })

    it('Teste', () =>{

        for (let i = 0; i < 15; i++) {
            // cy.visit('https://www.seara.com.br/seara-momento-gourmet/', { failOnStatusCode: false })
            // cy.wait(20000)
            cy.get(':nth-child(1) > .new-newsletter-form-group > .input', { timeout: 30000 }).type('teste', { delay: 0 })
            cy.get(':nth-child(2) > .new-newsletter-form-group > .input', { timeout: 30000 }).type('teste@teste.com', { delay: 0 })
            cy.get('.input-phone').type('11999999999', { delay: 0 })
            cy.get('.input-number').type('13-12-1997', { delay: 0 })
            cy.get('i').click()
            cy.get('.new-newsletter-submit').click()
            cy.get('.new-newsletter-success > a').click({force: true})
        }
    })
})

