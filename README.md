Aplicación backend para almacenar una página web con handlebars

Está creada en base:

* NodeJS
* Express
* Typescript
* Handlebars

### Despliegue en Heroku por primera vez

1. Crear una aplicación en Heroku y escoger la opción "Heroku Git"
2. En la raíz del proyecto ejecutar mediante consola ``heroku login``
3. En la raíz del proyecto ejecutar mediante consola  ``heroku git:clone -a web-server-nodejs-express``


### Despliegue de cambios

1. Subir cambios a git
2. En la raíz del proyecto ejecutar mediante consola ``git push heroku hbs:main``git

Seguimientos de logs en Heroku: en la consola ejecutar: ``heroku logs --tail``

https://web-server-nodejs-express.herokuapp.com