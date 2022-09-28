# Book Finder APP

Este projeto surgiu baseado em um repositório com vários projetos. O principal foco desse projeto é em filtrar livros por parâmetros da url e passar para o front-end.

- Link para o repositório: https://github.com/florinpop17/app-ideas/blob/master/Projects/2-Intermediate/Book-Finder-App.md

## Como rodar o projeto

Pré Requisitos:

- Ter o PSQL instalado em seu computador
- Ter criado um banco de dados em seu PSQL
- Ter pythom3 instalado em seu computador
- Ter o Node instalado em seu computador

Passo a passo:

- Entre em seu projeto: cd project
- Crie um arquivo .env
- Use de exemplo o arquivo .env.example como base
- Rode: pythom -m venv venv
- Rode: pip install -r requirements.txt
- Rode: flask db upgrade
- Rode: flask run
- Acesse a pasta front_end: cd project/front_end
- Rode: npm install
- Rode npm start

## Rotas

### /books

    Get:
      valid params:
            book_name = book
            writer = writer
            categories = categorie1,categories2...
        Response:
            [
            {
            "id": 21,
            "book_name": "book",
            "writer": "book",
            "synopsis": "book",
            "categories": [
            {
                "id": 12,
                "category_name": "book"
            }
                ]
            }
            ]

    Post:
        Request:
        {
            "categories": ['book1', 'book2'],
            "book_name": "book_name",
            "writer": "writer",
            "synopsis": "synopsis"
        }

        Response:
        {
            "id": 22,
            "book_name": "book_name",
            "writer": "writer",
            "synopsis": "synopsis",
            "categories": [
        {
            "id": 13,
            "category_name": "book1"
        },
        {
            "id": 14,
            "category_name": "book2"
        }
            ]
        }
