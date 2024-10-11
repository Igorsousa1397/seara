describe('Fluxo de Compra', () => {
    
    const email = "yativ26889@scarden.com"
    const password = "Senha@123"

    it('Adicionar produto ao carrinho',() => {
        cy.adicionaProdutoCarrinho()
    })

    it('Remove produto do carrinho',() => {
        cy.removeProdutoCarrinho()
    })

    it.skip('Finaliza compra',() => {
        cy.acessarCarrinho(email, password)
        cy.preencherIdentificacao()
    })

})