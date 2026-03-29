Feature: Formulário de contato

    Scenario: SC-01 - Enviar formulário preenchido de contato
        Given que a pagina de contato esteja visível
        When o usuário preencher os campos do formulário
        And selecionar o checkbox dos termos
        And clicar no botão de enviar formulário
        Then o formulário deve ser enviado
        And deve ser mostrado que o formulário foi enviado como um retorno visual  

    Scenario: SC-02 - Enviar formulário preenchido de contato
        Given que a pagina de contato esteja visível
        When o usuário não preencher os campos do formulario
        And não selecionar o checkbox dos termos
        And clicar no botão de enviar formulário
        Then o formulário não deve ser enviado
        And o primeiro campo vazio do formulário deve informar ao usuário o preenchimento