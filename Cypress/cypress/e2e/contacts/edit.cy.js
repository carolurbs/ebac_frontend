/// <reference types="cypress" />

describe('Testar página da lista de contato', () => {
  it ('Deve editar um contato',()=>{
    cy.visit('https://agenda-contatos-react.vercel.app')
    cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
    cy.get('input[type="text"]').clear()
    cy.get('input[type="text"]').type('Gian Souza')
    cy.get('input[type="email"]').clear()
    cy.get('input[type="email"]').type('gian@exemplo.com')
    cy.get('input[type="tel"]').clear()
    cy.get('input[type="tel"]').type('(11)91234-5678')
    cy.get('.alterar').click()
  })
})