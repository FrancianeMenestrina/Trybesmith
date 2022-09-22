# Project Trybesmith
# Contexto
No projeto de backend da Trybe, Trybesmith, simulamos uma loja de ferreiro medieval no qual através de #CRUDs foram realizadas operações de consulta e criação de produtos, usuários e pedidos, tudo armazenado em SQL. Como padrão de organização de camadas foi utilizado o MSC (Model, Service e Controller), o que contribuiu para a API ser REST.
## Tecnologias usadas
Back-end:
> Desenvolvido usando: NodeJS, Express, Docker, Typescript, SQL e JWT.
## Instalando Dependências
> Backend
```bash
cd Project-Trybesmith
npm install
```
## Executando aplicação em docker
* Para rodar o back-end:
  ```
  docker-compose up -d
  *A aplicação estará rodando na porta 3000: http://localhost:3000/ do navegador e as requisições HTTP podem ser feitas através do Insomnia, Postman ou outro API client.
  ```
  * Para subir o nodemon e poder fazer as requisições:
    ```
    Abra um terminal e rode: docker exec -it trybesmith bash
    Dentro do bash execute: npm run dev
    ```












