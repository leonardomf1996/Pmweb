
# Teste Pmweb

## Instalação e utilização
- Com o Docker instalado, criar o container: 
	docker run --name postgres_pmweb -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
- Com o DBeaver instalado, criar uma conexão com o BD criado e criar uma base de dados (database) com o nome postgres_pmweb
- Clone o projeto
- Instale as dependências utilizando:
	npm instal ou yarn
- Rode as migrations:
	yarn typeorm migration:run
	ou
	npm typeorm migration:run
- No terminal, digite: yarn dev (ou npm dev)


## Documentação

Rotas: 
GET /order_items

Retorno, em caso de Sucesso:
-> Status code: 200
[
	{ }
]

GET /order_items?startDate={YYYY-MM-DD}&endDate={YYYY-MM-DD}
-> Status code: 200
{
	"success": true,
	"data": {
		"orders": { }
}
}

POST /order_items
{
"order_date": "",
"product_sku": "",
"SIZE": "",
"color": "",
"quantity": "",
"price": ""
}

-> Status code: 201
{ }