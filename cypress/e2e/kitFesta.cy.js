describe('HomePage', () => {
    const username = "igor.sousa@opah.com.br"
    const password = "Senha@123"
    const passwordIvalid = "Incorreta@123"

    it('Login com sucesso',() => {
        cy.loginSucess(username, password)
    })

    it.only('Login invalido',() => {
        cy.loginInvalid(username, passwordIvalid)
    })

})
