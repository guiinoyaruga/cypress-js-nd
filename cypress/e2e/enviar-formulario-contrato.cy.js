import { fakerPT_BR as faker } from '@faker-js/faker'
const { homePageEl } = require('../support/pages/home-page/elements')
const contactPage = require('../support/pages/contact-page/methods');
const contactMethod = new contactPage.contactMethods()

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

  it('Deve ser possível enviar o formulário preenchido com sucesso', () => {
    cy.get(homePageEl.inicialSection)
      .should('be.visible')
    
    contactMethod.openContactPage()

    contactMethod.fillContactForm(randomName, randomEmail, randomCompany, randomJobType, randomNumberPhone, randomText)

    contactMethod.submitContactForm()
  })
})