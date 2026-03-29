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
Projeto voltado para testes E2E do site da NEXCOM, contendo testes de UI e de API.

## Visão geral
Algumas características existentes neste projeto:
- Scripts criados em JavaScript.
- Uso da biblioteca <strong>FakerJS</strong> para geração de dados aleatórios
- Separação de testes por tag utilizando GrepTags.

## Instalação
[![npm version](https://badge.fury.io/js/cypress.svg)](https://badge.fury.io/js/cypress)

Após clonar o projeto, utilize o comando abaixo para começar.


```bash
npm install
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
