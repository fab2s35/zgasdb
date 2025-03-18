/*
Este archivo tiene los metodos del CRUD (select, insert, update, delete)
*/


//Creo un array de funciones
const clientsControllers = {};
import clients from "../models/clients.js"
import clientsModel from "../models/clients.js"

// SELECT (antes de hacer el select (o cualquiera) voy a models)
clientsControllers.getClients = async (req, res) => {
     const clients = await clientsModel.find()
     res.json(clients)
}


//INSERT
clientsControllers.insertClients = async (req, res) =>{
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = req.body;
    const newClient = new clientsModel({name, lastName, birthday, email, password, telephone, dui, isVerified})
    await newClient.save()
    res.json("Client saved")
}


//DELETE
clientsControllers.deleteClients = async (req, res) =>{
    await clientsModel.findByIdAndDelete(req.params.id)
    res.json({message: "Client deleted"}) 
}

//UPDATE
clientsControllers.updateClients = async (req, res) =>{
    const {name, lastName, birthday, email, password, telephone, dui, isVerified} = (req.params.id,
        {name, lastName, birthday, email, password, telephone, dui, isVerified}, {new: true})
    res.json({message: "Client updated successfully"})
}

export default clientsControllers;