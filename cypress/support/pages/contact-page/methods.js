const { contactPageEl } = require('../contact-page/elements')
const { homePageEl } = require('../home-page/elements')
const baseUrl = Cypress.config('baseUrl')

class ContactPage {
    openContactPage(){
        cy.get(homePageEl.menuSuperior)
          .contains('Contato')
          .click()

        cy.url().should('include', '/contato')
    }

    fillContactForm(name, email, company, job, phone, subject) {
        cy.get(contactPageEl.contactForm)
          .should('be.visible')
          .within(() => {
            cy.root().find(contactPageEl.inputNameForm).type(name).should('have.value', name)
            cy.root().find(contactPageEl.inputEmailForm).type(email).should('have.value', email)
            cy.root().find(contactPageEl.inputCompanyForm).type(company).should('have.value', company)
            cy.root().find(contactPageEl.inputJobForm).type(job).should('have.value', job)
            cy.root().find(contactPageEl.inputPhoneNumberForm).type(phone).should('have.value', phone)
            cy.root().find(contactPageEl.inputSubjectForm).type(subject).should('have.value', subject)

            cy.get(contactPageEl.checkboxTermsForm)
                .should('contain', 'Li e aceito os termos de uso')
                .children()
                .first()
                .check()
                .should('be.checked')
        })

    }

    submitContactForm() {
        cy.intercept('POST', `${baseUrl}/wp-admin/admin-ajax.php`)
          .as('submitForm')

        cy.get(contactPageEl.submitFormBtn)
          .contains('Enviar')
          .click()
          .wait('@submitForm')
          .then((interception) => {
              expect(interception.response.statusCode).to.equal(200)
            })

        cy.get(contactPageEl.inputNameForm).should('have.value', '')
        cy.get(contactPageEl.inputEmailForm).should('have.value', '')
        cy.get(contactPageEl.inputCompanyForm).should('have.value', '')
        cy.get(contactPageEl.inputJobForm).should('have.value', '')
        cy.get(contactPageEl.inputPhoneNumberForm).should('have.value', '')
        cy.get(contactPageEl.inputSubjectForm).should('have.value', '')

        cy.contains('As suas respostas foram recebidas com sucesso!')
          .should('be.visible')
    }
}

module.exports = {
    contactMethods: ContactPage
}