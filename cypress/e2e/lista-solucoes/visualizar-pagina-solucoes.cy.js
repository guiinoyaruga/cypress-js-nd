const solutionPage = require('../../support/pages/solutions-page/methods');
const solutionsMethod = new solutionPage.solutionMethod()
const homePage = require('../../support/pages/home-page/methods');
const homeMethods = new homePage.homeMethods()

describe('Pagina de soluções', {tags: '@solutions-page'}, () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('SP-01 - Deve ser possível navegar pela página de soluções', () => {
    homeMethods.viewFooterSection()
    
    solutionsMethod.validateNavigateSolutionsPage()
  })
})
