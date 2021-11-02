# Backend para prueba de BSale

El link para la implementacion inicial es el siguiente [Link, advertencia, redireccion automatica al frontend](https://bsalejhernandez.herokuapp.com/)

El link para el repositorio en GitHub es [Repositorio de GitHub](https://github.com/Joseda-hg/bsalebackend)

El Backend de esta aplicacion esta realizado con Node, Express, MySQL y restapi

Las dependencias estan especificadas en el archivo package.json para mas especificidad

El punto de entrada es el archivo server.js, el puerto de escucha, se recibe como una variable de entorno otorgada por Heroku

Los datos de acceso a la base de datos se exportan desde el archivo db.config.js

El servidor posee los siguientes endpoints y una redireccion:

- / ; la direccion base, redirecciona al [frontend](https://bsalefrontendjhernandez.herokuapp.com/),
- /api/products/ GET, retorna un json con todos los productos
- /api/products/:id GET, retorna un json con el producto correspondiente a ese id
- /api/categories/ GET, retorna un json con todas las categorias
- /api/categories/:id GET, retorna un json con la categoria correspondiente a ese id
- /api/search/:searchterm GET, retorna un json con todos los objetos que correspondan vagamente al termino

Todas estas rutas estan especificadas en ./routes/product.routes.js; Las rutas que no tienen uso en el frontend fueron verificadas con Postman

Los controladores exhiben las busquedas y los parametros correspondentes a los productos y modelos; asi como los codigos http que de retornan al momento de ejecutar secciones

En db.js se reciben los parametros de configuracion de la base de datos del archivo ./config/db.config.js y con estos se crea y abre una conexion con la base de datos; asi como exportarla para su uso 

 En la carpeta ./models, se crean los constructores para las categorias y productos, asi como se definen las consultas SQL respectivas(queries).

