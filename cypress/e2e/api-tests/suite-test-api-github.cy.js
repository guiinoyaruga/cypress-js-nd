import { fakerPT_BR as faker } from '@faker-js/faker'

describe('GitHub API', () => {
    const randomNumber = faker.string.numeric(6)
    const randomText = faker.lorem.lines(1)
    const randomTextTitle = faker.lorem.lines(1)
    const randomTextBody = faker.lorem.lines(1)
    let issueId = 0

    it('GH-01 - Deve ser possivel criar um repositorio no Github', () => {
        cy.env(['github_token', 'api_url'])
            .then(({ github_token, api_url }) => {
                cy.request({
                    method: 'POST',
                    url: `${api_url}/user/repos`,
                    headers: {
                        Authorization: `Bearer ${github_token}`,
                        Accept: 'application/vnd.github+json'
                    },
                    body: {
                        name: `repository-${randomNumber}`,
                        description: `${randomText}`,
                        private: false
                    }
                }).then((response) => {
                    expect(response.status).to.equal(201)
                })
            })
    });

    it('GH-02 - Deve ser possivel pesquisar por um repositório já criado no Github', () => {
        cy.env(['github_token', 'api_url'])
            .then(({ github_token, api_url }) => {
                cy.request({
                    method: 'GET',
                    url: `${api_url}/repos/guiinoyaruga/repository-${randomNumber}`,
                    headers: {
                        Authorization: `Bearer ${github_token}`,
                        Accept: 'application/vnd.github+json'
                    },
                }).then((response) => {
                    const repositoryName = response.body.name
                    const repositoryDescription = response.body.description
                    const repositoryisNotPrivate = response.body.private

                    expect(response.status).to.equal(200)
                    expect(repositoryName).to.equal(`repository-${randomNumber}`)
                    expect(repositoryDescription).to.equal(`${randomText}`)
                    expect(repositoryisNotPrivate).to.be.false
                })
            })
    });

    it('GH-03 - Deve ser possivel criar uma issue em um repositório do Github', () => {
        cy.env(['github_token', 'api_url'])
            .then(({ github_token, api_url }) => {
                cy.request({
                    method: 'POST',
                    url: `${api_url}/repos/guiinoyaruga/repository-${randomNumber}/issues`,
                    headers: {
                        Authorization: `Bearer ${github_token}`,
                        Accept: 'application/vnd.github+json'
                    },
                    body: {
                        title: `${randomTextTitle}`,
                        body: `${randomTextBody}`,
                    }
                }).then((response) => {
                    expect(response.status).to.equal(201)
                    issueId = response.body.number
                })
            })
    });

    it('GH-04 - Deve ser possivel buscar por uma issue em um repositório do Github', () => {
        cy.env(['github_token', 'api_url'])
            .then(({ github_token, api_url }) => {
                cy.request({
                    method: 'GET',
                    url: `${api_url}/repos/guiinoyaruga/repository-${randomNumber}/issues/${issueId}`,
                    headers: {
                        Authorization: `Bearer ${github_token}`,
                        Accept: 'application/vnd.github+json'
                    },
                }).then((response) => {
                    const issueTitle = response.body.title
                    const issueBody = response.body.body

                    expect(response.status).to.equal(200)
                    expect(issueTitle).to.equal(`${randomTextTitle}`)
                    expect(issueBody).to.equal(`${randomTextBody}`)
                })
            })
    });

    it('GH-05 - Deve ser possivel deletar um repositório do Github', () => {
        cy.env(['github_token', 'api_url'])
            .then(({ github_token, api_url }) => {
                cy.request({
                    method: 'DELETE',
                    url: `${api_url}/repos/guiinoyaruga/repository-${randomNumber}`,
                    headers: {
                        Authorization: `Bearer ${github_token}`,
                        Accept: 'application/vnd.github+json'
                    },
                }).then((response) => {
                    expect(response.status).to.equal(204)
                })
            })
    });

    it('GH-06 - Não deve ser possivel visualizar o repositório deletado no Github', () => {
        cy.env(['github_token', 'api_url'])
            .then(({ github_token, api_url }) => {
                cy.request({
                    method: 'GET',
                    url: `${api_url}/users/guiinoyaruga/repos`,
                    headers: {
                        Authorization: `Bearer ${github_token}`,
                        Accept: 'application/vnd.github+json'
                    },
                }).then((response) => {
                    const repositoryList = response.body.map(r => r.name)

                    expect(response.status).to.equal(200)
                    expect(repositoryList).not.to.include(`repository-${randomNumber}`)
                })
            })
    });
});