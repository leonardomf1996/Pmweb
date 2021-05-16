CREATE TABLE ORDER_ITEMS (
	order_id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	order_date TIMESTAMP, /* ou DATE */
	product_sku VARCHAR (100) NOT NULL,
	SIZE CHAR (5) NOT NULL,
	color VARCHAR (50) NOT NULL,
	quantity VARCHAR (5) NOT NULL, 
	price VARCHAR (10) NOT NULL
);

/*
- Grande parte dos campos eu coloquei em varchar pelo seguinte motivo: no arquivo fornecido, os nomes dos campos estavam dentro de aspas ""
*/