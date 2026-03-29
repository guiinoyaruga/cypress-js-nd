<p align="center">
  <a href="https://www.cypress.io">
    <picture>
      <source media="(prefers-color-scheme: dark)"  srcset="./assets/cypress-logo-dark.png">
      <img alt="Cypress Logo" src="./assets/cypress-logo-light.png">
    </picture>
  </a>
</p>
<p align="center">
  <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
  <br>
  <img src="https://img.shields.io/badge/Node-v22-green">
  <img src="https://img.shields.io/badge/Cypress-15.13-darkgreen">

</p>

## CYPRESS-JS-ND
Projeto voltado para testes E2E e de API.

## Visão geral
Algumas características existentes neste projeto:
- Scripts criados na linguagem JavaScript.
- Design de código utilizando PageObject.
- Uso da biblioteca <strong>FakerJS</strong> para geração de dados aleatórios.
- Separação de testes por tag utilizando GrepTags.

## Instalação
Após clonar o projeto, utilize o comando abaixo para instalar as dependências do projeto.


```bash
npm install
```

## Preparando o ambiente
Para teste de API, é necessário adicionar o auth token da conta do GitHub. Na pasta raiz do projeto, abra o arquivo cypress.config.js e adicione o token do GitHub na sessão:

```bash
github_token: "seu_token_aqui"
```

## Iniciando o projeto
Para iniciar o projeto, digite o comando abaixo para iniciar o Launchpad do Cypress de acordo com o ambiente que irá testar:

```bash
npx cypress open
```

## Iniciando testes no modo headless
É possível realizar rodada de testes sem que haja a necessidade de iniciar o Cypress usando o Launchpad. Com o modo headless(sem cabeça), é possível realizar os testes somente via terminal, iniciando o teste, visualizando o seu progresso até a sua finalização.

```bash
npx cypress run
```

## Iniciando testes por meio de tags
É possível rodar teste ou um conjunto de teste por meio de tags. Adicione o comando abaixo, adicionando o termo "@tag" referente a tag desejada:

```bash
npx cypress run --expose grepTags="@tag"
```
