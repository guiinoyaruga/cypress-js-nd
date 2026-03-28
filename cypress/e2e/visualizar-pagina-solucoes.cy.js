const { homePageEl } = require('../support/pages/home-page/elements');
const solutionPage = require('../support/pages/solutions-page/methods');
const solutionsMethod = new solutionPage.solutionMethod()

describe('Pagina de soluções', () => {

  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve ser possível navegar pela página de soluções', () => {
    cy.get(homePageEl.footerSection)
      .should('be.visible')
      .scrollIntoView({easing: 'linear', duration: 200})
    
    solutionsMethod.validateNavigateSolutionPage()
  })
})
