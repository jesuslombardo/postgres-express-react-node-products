<pre>

<h1>API: <a href="https://backend-test-p5.herokuapp.com/">https://backend-test-p5.herokuapp.com/</a></h1>


INSTALL
git clone https://github.com/jesuslombardo/postgres-express-react-node-products.git
npm install
export DATABASE_URL=postgres://iqcrcrhp:orGULbLi1BivFYdCWyZc8Brs74cO3ozl@isilo.db.elephantsql.com:5432/iqcrcrhp
npm run start

JSON PRETTY<a href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc">
https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc
</a>

///////// Examples /////////
https://backend-test-p5.herokuapp.com/products
https://backend-test-p5.herokuapp.com/products?categories=Books,Movies
https://backend-test-p5.herokuapp.com/categories


POST https://backend-test-p5.herokuapp.com/categories
	key: name | value: Toys

POST https://backend-test-p5.herokuapp.com/products
	key: name | value: Woody
	key: price | value: 700
	key: description | value: Eres mi alguacil preferido
	key: available | value: true


//////////  CRUD /////////
PRODUCTS
GET /products
GET /products/:id
POST /products
PUT /products/:id
DELETE /products/:id

CATEGORIES
GET /categories
GET /categories/:id
POST /categories
PUT /categories/:id
DELETE /categories/:id



========== EJERCICIO ===========
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
========== EJERCICIO ===========

DEPLOY HEROKU
heroku git:clone -a backend-test-p5 (BACKUP)
heroku login
npm upgrade -g heroku
heroku git:remote -a backend-test-p5

</pre>
