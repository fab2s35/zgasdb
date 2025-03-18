// importo el archivo app.js
import app from "./app.js";

//imp0orto el archivo de la conexion de la base de datos 
import "./database.js";

//importo el archivo config
import { config } from "./src/config.js";

//Luego creo una funcion que ejecuta el servidor
async function main() {
    app.listen(config.server.port);
    console.log("Server on port" + config.server.port);
}

//Ejecuto la funcion
main();