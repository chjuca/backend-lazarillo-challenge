# backend-lazarillo-challenge

Respositorio donde se publica l codigo referente al API con los endpoints de consulta y creacion de Profesores, usando triggers http

## Ejecucion

1. Si se tiene instalado GIT en el computador se puede bajar el proyecto usando el siguiente comando `git clone https://github.com/chjuca/backend-lazarillo-challenge.git` 
2. Para la ejecucion del proyecto es necesario tener instalado `node.js` para comprobar si su computadora lo tiene instalado puede ejecutar `node -v` lo cual dara como salida la version que tiene instalada, si presenta un mensaje de error, puede instalarlo visitando el siguiente enlace [https://nodejs.org/es/download/](https://nodejs.org/es/download/ "https://nodejs.org/es/download/")
3. Una vez instalado `npm` se debe intalar de forma global FIREBASE-TOOLS, esto se lo puede hacer ejecutando el siguiente comando en el Terminal `npm i -g firebase-tools`
4. Una vez instalado, de procede a reconstruir el archivo `./node_modules` de la siguiente manera:
		- Primero  accedemos a la carpeta "functions" ejecutando en el terminal `cd functions/`
		- Una vez en el directorio ejecutamos el comando `npm install`
		- Cuando tengamos la carpeta `./node_modules` regresamos al archivo raiz usando el comando `cd ..`
5. Copiamos el archivo llamado `service-account-credentials.json` dentro de la carpeta `functions/`
6. Levantamos el proyecto de forma local ejecutando el comando `firebase serve`
7. Se depe presentar en consola un mensaje con la URI donde levantamos el proyecto `http://localhost:5000/lazarillo-challenge-**/**/app´
