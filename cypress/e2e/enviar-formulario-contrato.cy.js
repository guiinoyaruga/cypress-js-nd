import { fakerPT_BR as faker } from '@faker-js/faker'

describe('Pagina de contato', () => {
    const randomName = faker.person.fullName()
    const randomEmail = faker.internet.email()
    const randomCompany = faker.person.jobArea()
    const randomJobType = faker.person.jobType()
    const randomNumberPhone = faker.string.numeric(11)
    const randomText = faker.lorem.lines(2)

  beforeEach(() => {
    cy.visit('https://nexdom.tec.br/')
  });

  it('Deve ser possível enviar o formulário', () => {
    cy.get('.elementor-element-ff522e7')
      .should('be.visible')

    cy.get('.elementor-element-07e0cfe')
      .contains('Contato')
      .click()

    cy.url().should('include', '/contato')

    cy.get('.elementor-form-fields-wrapper')
      .should('be.visible')
      .within(()=>{
        cy.root().find('[name="form_fields[name]"]').type(randomName).should('have.value', randomName)
        cy.root().find('[name="form_fields[email]"]').type(randomEmail).should('have.value', randomEmail)
        cy.root().find('[name="form_fields[message]"]').type(randomCompany).should('have.value', randomCompany)
        cy.root().find('[name="form_fields[field_67e0483]"]').type(randomJobType).should('have.value', randomJobType)
        cy.root().find('[name="form_fields[field_5778e7b]"]').type(randomNumberPhone).should('have.value', randomNumberPhone)
        cy.root().find('[name="form_fields[field_f77a763]"]').type(randomText).should('have.value', randomText)

        cy.get('.elementor-field-option')
          .should('contain', 'Li e aceito os termos de uso')
          .children()
          .first()
          .check()
          .should('be.checked')

        cy.intercept('POST', 'https://nexdom.tec.br/wp-admin/admin-ajax.php')
          .as('submitForm')

        cy.get('.elementor-field-type-submit > .elementor-button')
          .contains('Enviar')
          .click()
          .wait('@submitForm')
          .then((interception) => {
            expect(interception.response.statusCode).to.equal(200)
          })
      })
      
      cy.contains('As suas respostas foram recebidas com sucesso!')
  })
})