describe('Teste cadastro', () => {

    it('Teste', () =>{

        for (let i = 0; i < 5; i++) {
            cy.visit('https://www.seara.com.br/seara-momento-gourmet/', {
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.111 Safari/537.36',
                },
                failOnStatusCode: false
            })
            
            cy.get(':nth-child(1) > .new-newsletter-form-group > .input').type('teste')
            cy.get(':nth-child(2) > .new-newsletter-form-group > .input').type('teste@teste.com')
            cy.get('.input-phone').type('11999999999')
            cy.get('.input-number').type('1997-12-13')
            cy.get('i').click()
            cy.get('.new-newsletter-submit').click()
            cy.wait(5000)
            cy.get('.new-newsletter-success > a').click()
        }
    })
})

