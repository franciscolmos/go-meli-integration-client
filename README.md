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
    ![Items Publicados](..\src\assets\items.png)
    Ventas y Preguntas sin responder
    ![Ventas y Preguntas](..\src\assets\ventasYPreguntas.png)



## How to solve 'Redirect has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header'?

https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related

