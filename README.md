# Lista de la compra-(Back)

Esta es la parte back del proyecto , realizado para poder manejar las rutas, la base de datos y manejar todo lo necesario para el correcto funcionamiento 


## Tabla de contenidos
- [Lista de la compra-(Back)](#lista-de-la-compra-back)
  - [Tabla de contenidos](#tabla-de-contenidos)
  - [Instalación 🚀](#instalación-)
  - [Uso](#uso)


## Instalación 🚀
Clonar el repositorio, luego en una terminal ejecutar `npm i` para instalar todos los módulos necesarios para el funcionamiento de la aplicación. Una vez hecho esto, se tiene que generar el archivo `.env` con `MONGO_URI` y `PORT`   para añadir la ruta de la base de datos y el puerto en el que se pondra a escuchar el servidor .Realizado esto , usaremos el comando `npm start` para arrancar el servidor


## Uso 
Una vez inicializado el servidor , mostara Servidor levantado, y la url con el puerto por defecto sera http://localhost:3000.

Este seridor se divide en 4 grupos de endpoint:
    Controla , todo lo de la nevera
    `-Nevera:`
      ` -GET /nevera/:nevera: Muestra la información de una nevera por su ID.
        -POST /nevera/create: Crea una nueva nevera y la asigna a una cuenta.
        -PUT /nevera/update/:neveraId: Permite actualizar el nombre y los productos de una nevera.`

   `-Cuenta:`
     `  -POST /cuenta/crear: Permite registrar una cuenta nueva.
        -POST /cuenta/nevera: Actualiza la relación de una cuenta con una nevera.
        -POST /cuenta/login: Permite hacer login en una cuenta.`

   ` -Lista: `
      ` - POST /lista/crear: Crea una lista nueva.
       - PUT /lista/actualizar/:id: Actualiza una lista existente.
       - DELETE /lista/eliminar/:id: Elimina una lista existente.
       - GET /lista/buscar/:email: Busca listas asociadas a un email.
       - GET /lista/:id: Obtiene una lista por su ID.
       - POST /lista/completar/:id: Completa una lista. `

  `  - Recetas: `
      ` - GET /recetas: Obtiene todas las recetas.
       - GET /recetas/:id: Obtiene una receta por su ID.
       - POST /recetas: Crea una nueva receta.
       - PUT /recetas/:id: Actualiza una receta existente.
       - DELETE /recetas/:id: Elimina una receta existente.
       - POST /recetas/obtener/: Obtiene recetas por ingredientes.
       - GET /recetasDisponibles: Obtiene las recetas disponibles.
       - GET /recetas/obtener/Top: Obtiene la mejor receta del mes.
       - GET /recetas/obtener/:nombreIngrediente: Obtiene recetas por ingrediente. `



