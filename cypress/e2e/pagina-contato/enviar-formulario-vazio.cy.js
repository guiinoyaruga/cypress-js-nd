const { homePageEl } = require('../../support/pages/home-page/elements')
const { contactPageEl } = require('../../support/pages/contact-page/elements')
const contactPage = require('../../support/pages/contact-page/methods');
const contactMethod = new contactPage.contactMethods()

describe('Pagina de contato', {tags: '@contact-page'}, () => { 

  beforeEach(() => {
    cy.visit('/')
  });

  it('SC-02 - Não deve ser possível enviar o formulário com dados nulos', () => {
    cy.get(homePageEl.inicialSection)
      .should('be.visible')
    
    contactMethod.openContactPage()

    cy.get(contactPageEl.submitFormBtn)
      .should('be.visible')
      .click()

    cy.get('body')
      .should('not.contain', 'As suas respostas foram recebidas com sucesso!')
  })
})