describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://nexdom.tec.br/')
  });

  it('Deve ser possível visualizar a pagina inicial e seus elementos principais', () => {
    //topo da pagina
    cy.get('.elementor-element-fe789c4')
      .should('contain', 'Home')
      .and('contain', 'Sobre nós')
      .and('contain', 'Soluções')
      .and('contain', 'Carreiras')
      .and('contain', 'Contato')
      .and('be.visible')

    cy.get('.elementor-element-f43ef10 > .elementor-widget-container > .elementor-heading-title')
      .contains('h2','Promovemos inovação e qualidade na gestão de planos de saúde do Sistema Unimed por meio da convergência e integração de tecnologias.')
      .and('be.visible')

    cy.get('.elementor-element-bdbb258 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .contains('span','Saiba mais')
      .should('be.visible')

    //big numbers
    cy.get('.elementor-element-517b9ff')
      .scrollIntoView()
      .click()

    cy.get('.elementor-element-9d40fa3')
      .should('contain', '130')
      .and('contain', '6.5')
      .and('contain', '20')
      .and('contain', '26')

    //video a respeita da empresa
    cy.get('.elementor-element-85dfd0b')
      .scrollIntoView()
      .within(()=>{
        cy.get('#widget2')
          .should('have.attr', 'src')
          .and('not.be.empty')
      })

    //Conheça nossas solucoes
    cy.get('.elementor-element-d45613e')
      .scrollIntoView()
      .contains('Conheça nossas soluções')
      .should('be.visible')
    
    cy.get('.elementor-element-8837b4c')
      .contains('Gestão de planos de saúde')
      .should('be.visible')

    cy.get('.elementor-element-bdf3c6d')
      .contains('Autorização e Atendimento')
      .should('be.visible')

    cy.get('.elementor-element-f1abbfd')
      .contains('Ressarcimento ao SUS')
      .should('be.visible')

    cy.get('.elementor-element-50b506d')
      .contains('Portal da empresa e beneficiário')
      .should('be.visible')

    cy.get('.elementor-element-281b24e')
      .contains('Gestão de relacionamento e Ouvidoria')
      .should('be.visible')

    cy.get('.elementor-element-d355456')
      .contains('Business Intelligence')
      .should('be.visible')

    //diferenciais
    cy.get('.elementor-element-18459e3')
      .scrollIntoView()
      .contains('Ser referência em tecnologia para a gestão da saúde.')
      .should('be.visible')

    //proposito
    cy.get('.elementor-element-5fde86f')
      .scrollIntoView()
      .contains('Levamos você ao próximo nível')
      .should('be.visible')

    cy.get('.elementor-element-22ee8c0 > .elementor-widget-container > .elementor-button-wrapper > .elementor-button')
      .should('contain', 'Saiba mais')
      .and('be.visible')

    //footer
    cy.get('.elementor-element-166cc7c')
      .scrollIntoView()
      .should('be.visible')
  })
})