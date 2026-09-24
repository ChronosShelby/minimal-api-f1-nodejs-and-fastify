# Minimal API F1 — Node.js e Fastify

Uma API REST desenvolvida com **Node.js, TypeScript e Fastify**, utilizando dados de equipes e pilotos de Fórmula 1.

---

## Sobre o projeto

O **Minimal API F1** é uma aplicação desenvolvida para praticar a criação de APIs utilizando o ecossistema Node.js e o framework Fastify.

A aplicação disponibiliza informações sobre **equipes e pilotos de Fórmula 1**, permitindo consultar os registros disponíveis e realizar buscas específicas através do ID.

Os dados utilizados atualmente são estáticos e estão definidos diretamente no código da aplicação, sem conexão com um banco de dados externo.

---

## Tecnologias utilizadas

* **Node.js** — ambiente de execução da aplicação
* **TypeScript** — linguagem utilizada no desenvolvimento
* **Fastify** — framework utilizado para criação da API

---

## Funcionalidades

A API possui atualmente as seguintes funcionalidades:

* Listagem de todas as equipes de Fórmula 1
* Consulta de uma equipe através do ID
* Listagem de todos os pilotos
* Consulta de um piloto através do ID
* Retorno de erro `404` quando uma equipe ou piloto não é encontrado
* Respostas da API no formato JSON

---

## Endpoints

### Equipes

#### Listar todas as equipes

```http
GET /teams
```

Retorna a lista de equipes cadastradas na aplicação.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "Mercedes",
    "base": "Brackley, United Kingdom"
  },
  {
    "id": 2,
    "name": "Ferrari",
    "base": "Maranello, Italy"
  }
]
```

#### Buscar equipe por ID

```http
GET /teams/:id
```

Exemplo:

```http
GET /teams/1
```

Resposta:

```json
{
  "id": 1,
  "name": "Mercedes",
  "base": "Brackley, United Kingdom"
}
```

Caso o ID informado não corresponda a uma equipe cadastrada, a API retorna:

```json
{
  "error": "Team not found"
}
```

com status HTTP `404`.

---

### Pilotos

#### Listar todos os pilotos

```http
GET /drivers
```

Retorna a lista de pilotos cadastrados na aplicação.

Exemplo de resposta:

```json
[
  {
    "id": 1,
    "name": "George Russell",
    "team": "Mercedes"
  },
  {
    "id": 2,
    "name": "Kimi Antonelli",
    "team": "Mercedes"
  }
]
```

#### Buscar piloto por ID

```http
GET /drivers/:id
```

Exemplo:

```http
GET /drivers/1
```

Resposta:

```json
{
  "id": 1,
  "name": "George Russell",
  "team": "Mercedes"
}
```

Caso o ID informado não corresponda a um piloto cadastrado, a API retorna:

```json
{
  "error": "Driver not found"
}
```

com status HTTP `404`.

---

## Dados da aplicação

Os dados de equipes e pilotos são armazenados atualmente em estruturas de dados diretamente no código da aplicação.

### Equipes

Cada equipe possui as seguintes informações:

```text
id
name
base
```

### Pilotos

Cada piloto possui:

```text
id
name
team
```

Essa abordagem foi utilizada neste projeto com foco no aprendizado dos conceitos fundamentais de criação e consumo de APIs.

---

## Objetivo do projeto

Este projeto foi desenvolvido com foco no aprendizado e na prática de conceitos relacionados ao desenvolvimento de APIs utilizando o ecossistema **Node.js**.

Entre os conceitos praticados estão:

* Criação de um servidor HTTP com Fastify
* Definição de rotas
* Utilização de parâmetros de rota
* Tipagem com TypeScript
* Retorno de dados em JSON
* Tratamento de respostas HTTP
* Tratamento de recursos não encontrados
* Configuração de CORS
* Utilização de ferramentas do ecossistema TypeScript

---

## Autor

**Igor Gabriel Antunes da Silva**

Desenvolvedor em formação com foco em **Tecnologia da Informação e desenvolvimento Full-Stack**.

[![GitHub](https://img.shields.io/badge/GitHub-ChronosShelby-181717?style=for-the-badge\&logo=github)](https://github.com/ChronosShelby)

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Igor%20Antunes-0A66C2?style=for-the-badge\&logo=linkedin)](https://www.linkedin.com/in/igorgbiel/)
