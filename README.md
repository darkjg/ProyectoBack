# Lista de la compra - Backend

Esta es la parte del backend del proyecto, realizada para manejar las rutas, la base de datos y todo lo necesario para el correcto funcionamiento.

## Tabla de contenidos
- [Lista de la compra - Backend](#lista-de-la-compra---backend)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Instalación 🚀](#instalación-)
  - [Uso](#uso)
  - [Por hacer](#por-hacer)
  - [Construido con 🛠️](#construido-con-️)
  - [Autor ✒️](#autor-️)
  - [Ejemplo](#ejemplo)
## Instalación 🚀
Clona el repositorio y luego ejecuta `npm i` en una terminal para instalar todos los módulos necesarios para el funcionamiento de la aplicación. Una vez hecho esto, debes generar el archivo `.env` con las variables `MONGO_URI` y `PORT` para añadir la ruta de la base de datos y el puerto en el que se pondrá a escuchar el servidor. Una vez realizado esto, utiliza el comando `npm start` para arrancar el servidor.

## Uso 
Una vez inicializado el servidor, mostrará "Servidor levantado", y la URL con el puerto por defecto será http://localhost:3000.

Este servidor se divide en 4 grupos de endpoint:
   - **Nevera:**
     - `GET /nevera/:nevera`: Muestra la información de una nevera por su ID.
     - `POST /nevera/create`: Crea una nueva nevera y la asigna a una cuenta.
     - `PUT /nevera/update/:neveraId`: Permite actualizar el nombre y los productos de una nevera.

   - **Cuenta:**
     - `POST /cuenta/crear`: Permite registrar una cuenta nueva.
     - `POST /cuenta/nevera`: Actualiza la relación de una cuenta con una nevera.
     - `POST /cuenta/login`: Permite hacer login en una cuenta.

   - **Lista:**
     - `POST /lista/crear`: Crea una lista nueva.
     - `PUT /lista/actualizar/:id`: Actualiza una lista existente.
     - `DELETE /lista/eliminar/:id`: Elimina una lista existente.
     - `GET /lista/buscar/:email`: Busca listas asociadas a un email.
     - `GET /lista/:id`: Obtiene una lista por su ID.
     - `POST /lista/completar/:id`: Completa una lista.

   - **Recetas:**
     - `GET /recetas`: Obtiene todas las recetas.
     - `GET /recetas/:id`: Obtiene una receta por su ID.
     - `POST /recetas`: Crea una nueva receta.
     - `PUT /recetas/:id`: Actualiza una receta existente.
     - `DELETE /recetas/:id`: Elimina una receta existente.
     - `POST /recetas/obtener/`: Obtiene recetas por ingredientes.
     - `GET /recetasDisponibles`: Obtiene las recetas disponibles.
     - `GET /recetas/obtener/Top`: Obtiene la mejor receta del mes.
     - `GET /recetas/obtener/:nombreIngrediente`: Obtiene recetas por ingrediente.


## Por hacer 
De momento me gustaría a futuro poder:
- Añadir Productos para mejor busqueda y edicion
- Añadir que al realizar una receta, esta pueda consumir directamente los ingredientes de la nevera.
- En caso de agotar existencias de un producto, que se genere una lista de forma automática y se añadan para ir comprándolo.
- Que se pueda ver distintos precios de diferentes supermercados al hacer click en un producto de una lista.
- Mejoras en la seguridad

## Construido con 🛠️

    bcrypt: v5.1.1
    cors: v2.8.5
    dotenv: v16.4.5
    express: v4.19.2
    express-session: v1.18.0
    jsonwebtoken: v9.0.2
    mongoose: v8.3.1

## Autor ✒️

Jorge González Costa

## Ejemplo 
https://listadelacompra-production.up.railway.app/

