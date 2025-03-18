//Importo todo lo de la libreria express
import express from "express";
import productsRoutes from "./src/routes/products.js";
import clientRoutes from "./src/routes/clients.js"
import employeesRoutes from "./src/routes/employees.js"
import reviewRoutes from "./src/routes/reviews.js"
import evaluationRoutes from "./src/routes/evaluations.js"

//Cree una constante que es igual a la libreria
//que acabo de de importar, y la ejecuto
const app = express();

//middleware para que acepte datos json
app.use(express.json());

app.use("/api/products", productsRoutes);
app.use("/api/clients", clientRoutes);
app.use("/api/employees", employeesRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/evaluation", evaluationRoutes);
//exporto esta constante para usar express en todos lados 
export default app;

