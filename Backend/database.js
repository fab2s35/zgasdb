//Importar la libreria mongoose
import mongoose from "mongoose";
//Importo mi archivo config con todas las variables
import { config } from "./src/config.js";

//Guardo en una constante la url de mi base de datos

//1. Configuro la uri o direccion de la base de datos
const uri = "mongodb://localhost:27017/zgasdb"

//2. Conectar la base de datos
mongoose.connect(config.db.URI);


//Comprobar que todo funcione (opcional)

//Creo una contante que es igual a la conexion
const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is connected");
})

connection.on("disconnected", () => {
    console.log("DB is disconnected")
})

connection.on("error", () => {
    console.log("DB error")
})