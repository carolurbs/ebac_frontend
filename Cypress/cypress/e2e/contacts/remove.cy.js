// <reference types="cypress" />

describe('Testar página da lista de contato', () => {
  it ('Deve remover um contato',()=>{
    cy.visit('https://agenda-contatos-react.vercel.app')
    cy.get('.sc-gueYoa > .delete').last().click()
  })
})