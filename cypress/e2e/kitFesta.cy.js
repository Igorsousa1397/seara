describe('HomePage', () => {
    const username = "yativ26889@scarden.com"
    const password = "Senha@123"
    const passwordIvalid = "Incorreta@123"

    it('Login com sucesso',() => {
        cy.loginSucess(username, password)
    })

    it('Login invalido',() => {
        cy.loginInvalid(username, passwordIvalid)
    })

})
