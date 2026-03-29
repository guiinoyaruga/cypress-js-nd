Feature: Paginal de soluções

    Scenario: Visualizar todos as opções da lista de solucões
        Given que a pagina inicial esteja visível
        When o usuário passar o mouse por cima da opção "Soluções" do menu superior da página
        And clicar nas opções disponível na  listagem mostrada
        Then o usuário deve ser redirecionado para a página da opção selecionada anteriormente