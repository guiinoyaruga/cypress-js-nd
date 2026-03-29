const { homePageEl } = require('../support/pages/home-page/elements')
const { contactPageEl } = require('../support/pages/contact-page/elements')
const contactPage = require('../support/pages/contact-page/methods');
const contactMethod = new contactPage.contactMethods()

describe('Pagina de contato', () => { 

  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve ser possível enviar o formulário preenchido com sucesso', () => {
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