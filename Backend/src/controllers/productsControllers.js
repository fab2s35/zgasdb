/*
Este archivo tiene los metodos del CRUD (select, insert, update, delete)
*/


//Creo un array de funciones
const productsControllers = {};
import products from "../models/products.js"
import productsModel from"../models/products.js"


// SELECT (antes de hacer el select (o cualquiera) voy a models)
productsControllers.getProducts = async (req, res) => {
    // crea una variable que se llame products, esperame que haga el find()
    const products = await productsModel.find()
    //el regreso de la consulta
    res.json(products)
}


//INSERT
//(req, res) = request y respond
productsControllers.insertProducts = async (req, res) =>{
    //
    const {name, description, price, stock} = req.body;
    const newProduct = new productsModel({name, description, price, stock})
    await newProduct.save()
    res.json("Product saved")
}

//DELETE
productsControllers.deleteProducts = async (req, res) => {
    await productsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Products deleted"})
}


//UPDATE
productsControllers.updateProducts = async (req, res) => {
    const {name, description, price, stock} = req.body;
    const updateProducts = await productsModel.findByIdAndUpdate(req.params.id, 
        {name, description, price, stock}, {new: true})
    res.json({message: "product updated successfully"})
}


export default productsControllers;