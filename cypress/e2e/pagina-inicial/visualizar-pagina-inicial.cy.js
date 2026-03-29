const homePage = require('../../support/pages/home-page/methods');
const homeMethods = new homePage.homeMethods()

describe('Página inicial', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('HP-01 - Deve ser possível visualizar a pagina inicial e seus elementos principais', () => {
    //Verifica a primeira section da página
    homeMethods.viewFirstSection()

    //Verifica a section relacionada aos big numbers
    homeMethods.viewBigNumbersSection()

    //Verifica a section relacionada ao video sobre a empresa
    homeMethods.viewVideoSection()

    //Verifica a section relacionada as soluções da empresa
    homeMethods.viewSolutionsSection()

    //Verifica a section relacionada aos diferenciais da empresa
    homeMethods.viewDifferencesSection()

    //Verifica a section relacionada ao proposito da empresa
    homeMethods.viewPurposeSection()

    //Verifica o rodapé da pagina
    homeMethods.viewFooterSection()
  })
})