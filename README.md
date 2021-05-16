
# Teste Pmweb

## Instalação e utilização
- Clone o projeto
- Instale as dependências utilizando npm ou yarn
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