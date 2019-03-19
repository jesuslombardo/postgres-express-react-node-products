<pre>

<h1>API: <a href="https://backend-test-p5.herokuapp.com/">https://backend-test-p5.herokuapp.com/</a></h1>

<h3>INSTALL</h3>
git clone https://github.com/jesuslombardo/postgres-express-react-node-products.git
npm install
export DATABASE_URL=postgres://iqcrcrhp:orGULbLi1BivFYdCWyZc8Brs74cO3ozl@isilo.db.elephantsql.com:5432/iqcrcrhp
npm run start

<h3>JSON PRETTY</h3>
<a href="https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc">
https://chrome.google.com/webstore/detail/jsonview/chklaanhfefbnpoihckbnefhakgolnmc
</a>

<h3>EXAMPLES</h3>

<a href="https://backend-test-p5.herokuapp.com/products">https://backend-test-p5.herokuapp.com/products</a>
<a href="https://backend-test-p5.herokuapp.com/products/5">https://backend-test-p5.herokuapp.com/products/5</a>
<a href="https://backend-test-p5.herokuapp.com/categories">https://backend-test-p5.herokuapp.com/categories</a>
<a href="https://backend-test-p5.herokuapp.com/categories/3">https://backend-test-p5.herokuapp.com/categories/3</a>
<a href="https://backend-test-p5.herokuapp.com/products?categories=Books,Movies">https://backend-test-p5.herokuapp.com/products?categories=Books,Movies</a>

POST https://backend-test-p5.herokuapp.com/products
	key: name | value: 'Woody' (string)
	key: price | value: 700 (number)
	key: description | value: 'Eres mi alguacil preferido' (string)
	key: available | value: true (boolean)
	key: categoriesArray | value: [11,4] (array)
	

POST https://backend-test-p5.herokuapp.com/categories
	key: name | value: Toys

<h3>CATEGORIES</h3>
Categories List:

id: 1,name: "Cleaning"
id: 2,name: "Electronics"
id: 3,name: "Cloth"
id: 4,name: "BlackFriday"
id: 5,name: "Books"
id: 6,name: "Movies"
id: 20,name: "Antigüedades"
id: 25,name: "Celulares y Accesorios"
id: 26,name: "Coleccionables y Hobbies"
id: 27,name: "Computación"
id: 17,name: "Vehiculos"
id: 31,name: "Servicios"
id: 18,name: "Alimentos y Bebidas"
id: 21,name: "Arte y Artesanías"
id: 19,name: "Animales y Mascotas"
id: 32,name: "Inmuebles"
id: 24,name: "Cámaras y Accesorios"
id: 28,name: "Consola y Videojuegos"
id: 30,name: "Electrodomésticos"
id: 29,name: "Deporte y Fitness"
id: 23,name: "Belleza y Cuidado Personal"
id: 22,name: "Bebés"

<h3>DEPLOY TO HEROKU</h3>
heroku git:clone -a backend-test-p5 (BACKUP)
heroku login
npm upgrade -g heroku
heroku git:remote -a backend-test-p5

<h3>EJERCICIO</h3>
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

</pre>
