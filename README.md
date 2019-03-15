==== EJERCICIO ====
Hacer una RESTful API usando Node, Express y Sequelize (Postgres)

Vamos a tener una API de Productos y Categorias. 

Modelo Product {
	name: string
	price: int
	description: string
	available: bool = default true
}

Tambien tiene que tener un getter `truncateDescription` que devuelva la descripción truncada a solo 20 caracteres y termine con ‘…’

Agregar un hook antes de ser creado que se fije en la propiedad currency que fue enviada, si esta en ‘USD’ guardar el precio como vino, si esta en ‘ARS’ cambiar el precio a Dólares.

Modelo Category {
	name
}

Los productos pueden tener varias categorías.

Los endpoints van a ser los siguientes:

GET /products
GET /products/:id
POST /products
PUT /products/:id
DELETE /products/:id

Ademas GET /products puede incluir un query de categorías por ejemplo:

GET /products?categories=books,movies

Debería traer solo los productos que tengan la categoría book o movies


Usar tests para demostrar que los requerimientos funcionan
