Feature: Repositório no GitHub

    Scenario: GH-01 - Criar um repositório no GitHub
        Given que haja nome, titulo e descrição definidos para criação do repositório
        And auth token definido no header
        When a requisição for feita passando o path da rota junto do token
        Then o reposítorio deve ser criado com sucesso
        And o status HTTP do retorno deve ser 201

    Scenario: GH-02 - Buscar um repositório já criado no GitHub
        Given que haja o nome do repositório definido no path da requisição
        And auth token definido no header
        When a requisição for feita passando o path da rota junto do token
        Then o response da requisição deve retornar os dados do repositório solicitado
        And o status HTTP do retorno deve ser 200

    Scenario: GH-03 - Criar uma issue em um repositório do GitHub
        Given que haja um repositório de teste criado no github
        And auth token definido no header
        And nome e body definidos no body
        When a requisição for feita passando o nome do repositório como parâmetro
        And o conteúdo do body contendo título e body
        Then o response da requisição deve retornar os dados da issue criada
        And o status HTTP do retorno deve ser 201

    Scenario: GH-04 - Buscar uma issue criada em um reposítorio do GitHub
        Given que haja uma issue criada em um repositório de teste no github
        And auth token definido no header
        And um issue_id
        When a requisição for feita passando issue_id como parâmetro na requisição
        Then deve ser retornado os dados da issue
        And o status HTTP do retorno deve ser 200

    Scenario: GH-05 - Criar um repositório no GitHub
        Given que haja um repositório de teste criado no github
        And auth token definido no header
        When a requisição for feita passando o nome do repositório como parâmetro
        Then o repositório deve ser deletado com sucesso
        And o status HTTP do retorno deve ser 204

    Scenario: GH-06 - Buscar por um repositório ja deletado no GitHub
        Given que haja um auth token definido na header da requisição
        When a requisição for feita passando o path referente a listagem de repos do usuário
        Then a listagem de repos deve ser mostrada no response
        And não deve conter repositório deletados