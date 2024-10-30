describe('Teste da agenda', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('Deve incluir um contato', () => {
        
        cy.get('[type="text"]').type('garibaldo')
        cy.get('[type="email"]').type('garibaldogaribo@gmail.com')
        cy.get('[type="tel"]').type('12312345678')
        cy.get('.adicionar').click()
        cy.screenshot("teste-incluir")
    })

    it('Deve alterar um contato', () => {

        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').clear().type('garibaldo atualizado')
        cy.get('[type="email"]').clear().type('garibaldoatualizado@gmail.com')
        cy.get('[type="tel"]').clear().type('9876543210')
        cy.get('.alterar').click()
        cy.screenshot("teste-alterar")
    })

    it('Deve remover um contato', () => {

        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()
        cy.screenshot("teste-remover")
    })
})
