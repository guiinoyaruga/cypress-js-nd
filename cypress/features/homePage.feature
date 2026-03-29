Feature: Paginal inicial

    Scenario: Visualizar itens e sessões importantes da pagina inicial
        Given que o usuario acessa https://nexdom.tec.br/
        When a pagina carregar totalmente
        Then o usuário deve conseguir visualizar todos os itens importantes da págin