const { solutionPageEl } = require('../support/../solutions-page/elements')
const typeSolutions =
    [
        {
            listTitle: 'Gestão de planos de saúde',
            path: '/gestao-de-planos-de-saude',
        },
        {
            listTitle: 'Autorização e Atendimento',
            path: '/autorizacao-e-atendimento',
        },
        {
            listTitle: 'Ressarcimento ao SUS',
            path: '/ressarcimento-ao-sus',
        },
        {
            listTitle: 'Portal da empresa e beneficiário',
            path: '/portal-da-empresa-e-beneficiario',
        },
        {
            listTitle: 'Gestão de relacionamento e ouvidoria',
            path: '/gestao-de-relacionamento-e-ouvidoria',
        },
        {
            listTitle: 'DataHealth',
            path: '/data-health',
        },
        {
            listTitle: 'Gestão de Cartas Negativas',
            path: '/07-gestao-de-cartas-negativas',

            listTitle: 'Declaração de Saúde Online',
            path: '/07-declaracao-de-saude',
        },
    ]

class Solutions {
    validateNavigateSolutionPage() {
        typeSolutions.forEach((type) => {
            cy.wait(500)

            cy.get(solutionPageEl.typeSolutionList)
                .contains(`${type.listTitle}`)
                .should('be.visible')
                .click()
                .url()
                .should('include', `${type.path}`)
        })
    }
}

module.exports ={
    solutionMethod: Solutions
}