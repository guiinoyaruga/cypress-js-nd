const { homePageEl } = require ('../support/pages/home-page/elements')

describe('Página inicial', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('Deve ser possível visualizar a pagina inicial e seus elementos principais', () => {
    //topo da pagina
    cy.get(homePageEl.menuSuperior)
      .should('contain', 'Home')
      .and('contain', 'Sobre nós')
      .and('contain', 'Soluções')
      .and('contain', 'Carreiras')
      .and('contain', 'Contato')
      .and('be.visible')

    cy.get(homePageEl.sectionText)
      .contains('h2','Promovemos inovação e qualidade na gestão de planos de saúde do Sistema Unimed por meio da convergência e integração de tecnologias.')
      .and('be.visible')

    cy.get(homePageEl.findMoreBtn)
      .contains('span','Saiba mais')
      .should('be.visible')

    //big numbers
    cy.get(homePageEl.bigNumbersSection)
      .scrollIntoView()
      .click()

    cy.get(homePageEl.bigNumberSquares)
      .should('contain', '130')
      .and('contain', '6.5')
      .and('contain', '20')
      .and('contain', '26')

    //video a respeita da empresa
    cy.get(homePageEl.videoSection)
      .scrollIntoView()
      .within(()=>{
        cy.get('#widget2')
          .should('have.attr', 'src')
          .and('not.be.empty')
      })

    //Conheça nossas solucoes
    cy.get(homePageEl.solutionsSection)
      .scrollIntoView()
      .contains('Conheça nossas soluções')
      .should('be.visible')
    
    cy.get(homePageEl.manageHealthPlanDiv)
      .contains('Gestão de planos de saúde')
      .should('be.visible')

    cy.get(homePageEl.authorizationAndServiceDiv)
      .contains('Autorização e Atendimento')
      .should('be.visible')

    cy.get(homePageEl.susDiv)
      .contains('Ressarcimento ao SUS')
      .should('be.visible')

    cy.get(homePageEl.companyPortalDiv)
      .contains('Portal da empresa e beneficiário')
      .should('be.visible')

    cy.get(homePageEl.manageRelationshipDiv)
      .contains('Gestão de relacionamento e Ouvidoria')
      .should('be.visible')

    cy.get(homePageEl.businessIntelligenceDiv)
      .contains('Business Intelligence')
      .should('be.visible')

    //diferenciais
    cy.get(homePageEl.differencesSection)
      .scrollIntoView()
      .contains('Ser referência em tecnologia para a gestão da saúde.')
      .should('be.visible')

    //proposito
    cy.get(homePageEl.purposeSection)
      .scrollIntoView()
      .contains('Levamos você ao próximo nível')
      .should('be.visible')

    cy.get(homePageEl.findMoreBtnPurposeSection)
      .should('contain', 'Saiba mais')
      .and('be.visible')

    //footer
    cy.get(homePageEl.footerSection)
      .scrollIntoView()
      .should('be.visible')
  })
})