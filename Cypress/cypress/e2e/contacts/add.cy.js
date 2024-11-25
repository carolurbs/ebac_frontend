/// <reference types="cypress" />

describe('Testar página da lista de contato', () => {
  it ('Deve adicionar um novo contato', () => {
    cy.visit('https://agenda-contatos-react.vercel.app')
    cy.get('input[type="text"]').type('Carol')
    cy.get('input[type="email"]').type('carol@exemplo.com')
    cy.get('input[type="tel"]').type('(47)9996-9696')
    cy.get('.adicionar').click()
  })
})
