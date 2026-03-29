Feature: Formulário de contato

    Scenario: Enviar formulário preenchido de contato
        Given que a pagina de contato esteja visível
        When o usuário preencher os campos do formulário
        And selecionar o checkbox dos termos
        And clicar no botão de enviar formulário
        Then o formulário deve ser enviado
        And deve ser mostrado que o formulário foi enviado como um retorno visual  