import { fakerPT_BR as faker } from '@faker-js/faker'
const { homePageEl } = require('../support/pages/home-page/elements')
const { contactPageEl } = require ('../support/pages/contact-page/elements')
const baseUrl = Cypress.config('baseUrl')

describe('Pagina de contato', () => {
    const randomName = faker.person.fullName()
    const randomEmail = faker.internet.email()
    const randomCompany = faker.person.jobArea()
    const randomJobType = faker.person.jobType()
    const randomNumberPhone = faker.string.numeric(11)
    const randomText = faker.lorem.lines(2)

  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve ser possível enviar o formulário preenchido', () => {
    cy.get(homePageEl.inicialSection)
      .should('be.visible')

    cy.get(homePageEl.menuSuperior)
      .contains('Contato')
      .click()

    cy.url().should('include', '/contato')

    cy.get(contactPageEl.contactForm)
      .should('be.visible')
      .within(() => {
        cy.root().find(contactPageEl.inputNameForm).type(randomName).should('have.value', randomName)
        cy.root().find(contactPageEl.inputEmailForm).type(randomEmail).should('have.value', randomEmail)
        cy.root().find(contactPageEl.inputCompanyForm).type(randomCompany).should('have.value', randomCompany)
        cy.root().find(contactPageEl.inputJobForm).type(randomJobType).should('have.value', randomJobType)
        cy.root().find(contactPageEl.inputPhoneNumberForm).type(randomNumberPhone).should('have.value', randomNumberPhone)
        cy.root().find(contactPageEl.inputSubjectForm).type(randomText).should('have.value', randomText)

        cy.get(contactPageEl.checkboxTermsForm)
          .should('contain', 'Li e aceito os termos de uso')
          .children()
          .first()
          .check()
          .should('be.checked')

        cy.intercept('POST', `${baseUrl}/wp-admin/admin-ajax.php`)
          .as('submitForm')

        cy.get(contactPageEl.submitFormBtn)
          .contains('Enviar')
          .click()
          .wait('@submitForm')
          .then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
          })

        cy.get(contactPageEl.inputNameForm).should('have.value', '' )
        cy.get(contactPageEl.inputEmailForm).should('have.value', '' )
        cy.get(contactPageEl.inputCompanyForm).should('have.value', '')
        cy.get(contactPageEl.inputJobForm).should('have.value', '' )
        cy.get(contactPageEl.inputPhoneNumberForm).should('have.value', '')
        cy.get(contactPageEl.inputSubjectForm).should('have.value', '')
      })
      cy.contains('As suas respostas foram recebidas com sucesso!')
        .should('be.visible')
  })
})