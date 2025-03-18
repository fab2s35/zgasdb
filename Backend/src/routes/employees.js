/*Este archivo sirve para definir que metodos del crud va a tener 
mi ruta (/api/products)*/

import express from "express";
import employeesControllers from "../controllers/employeesControllers.js";

const router = express.Router();

router.route("/")
.get(employeesControllers.getEmployees)
.post(employeesControllers.insertEmployees)

router.route("/:id")
.put(employeesControllers.updateEmployees)
.delete(employeesControllers.deleteEmployees)

export default router;