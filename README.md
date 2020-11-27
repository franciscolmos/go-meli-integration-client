# MeliApp

## Instalación y Setup del Proyecto

* Clonar el proyecto
```
    $ git clone https://github.com/franciscolmos/go-meli-integration-client.git
```

* En caso de no tener Node instalado
    * Instalar Node https://nodejs.org/es/
    * Nuestra versión de Node es: v12.18.3

* Instalar dependencias del proyecto ( requiere tener Node instalado para poder correr npm )
```
    $ npm install
```

* En caso de que no se haya instalado Angular, ejecutar el siguiente comando
```
    $ npm install -g @angular/cli
```

* En caso de tener problemas para correr scrips si estas en un sistema operativo Windows deberás hacer lo siguiente:
    * Abrir el Power Shell como administrador
    * Ejecutar el siguiente comando, por mas consultas revisar el siguiente link ( https://protegermipc.net/2018/11/22/permitir-la-ejecucion-de-scripts-powershell-en-windows-10/ )
    ```
       $ Set-ExecutionPolicy Unrestricted
    ```
    * Volver correr
    ```
        $ npm install
    ```
* Una vez instalado el proyecto y sus dependencias correctamente, corra el siguiente comando para levantar el servidor:
    ```
        $ npm start
    ```

## Modo de uso del Proyecto
* Una vez corriendo el proyecto, colocar en la url:
```
    http://localhost:4200/home
```
* Hacer click en el botón Iniciar con Mercado Libre
* Luego Ingresar con un usuario de test vendedor
```
    USUARIO VENDEDOR
    {
    "id": 651268893,
    "nickname": "TESTM9POOMFL",
    "password": "qatest4000",
    "site_status": "active",
    "email": "test_user_6272567@testuser.com"
    }
```
* Se visualizará un Dashboard con:
    * Items publicados por el vendedor.
    * Ventas realizadas por el mismo.
    * Preguntas sin responder de los items publicados que tengan al menos 1 unidad disponible.
    Items publicados
![Items Publicados](https://github.com/franciscolmos/go-meli-integration-client/blob/master/src/assets/items.png)
    Ventas y Preguntas sin responder
![Ventas y Preguntas](https://github.com/franciscolmos/go-meli-integration-client/blob/master/src/assets/ventasYPreguntas.png)
* Si quiere publicar un item, colocar en la url:
```
    http://localhost:4200/form
```
* Completar los 3 inputs y apretar el botón Aceptar.

* Importante recordar que para obtener el dashboard o publicar un item, es necesario realizar el flujo de OAuth antes. Es decir antes se debe ir al http://localhost:4200/home y apretar el botón Iniciar con Mercado Libre.

