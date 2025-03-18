const employeesControllers = {};
import employees from "../models/employees.js"
import employeesModel from "../models/employees.js"

// SELECT (antes de hacer el select (o cualquiera) voy a models)
employeesControllers.getEmployees = async (req, res) => {
     const employee = await employeesModel.find()
     res.json(employees)
}


//INSERT
employeesControllers.insertEmployees = async (req, res) =>{
    const {name, lastName, birthday, email, address, hireDate, password, telephone, dui} = req.body;
    const newEmployee = new clientsModel({name, lastName, birthday, email, address, hireDate, password, telephone, dui})
    await newEmployee.save()
    res.json("employee saved")
}


//DELETE
employeesControllers.deleteEmployees = async (req, res) =>{
    await employeesModel.findByIdAndDelete(req.params.id)
    res.json({message: "employee deleted"}) 
}

//UPDATE
employeesControllers.updateEmployees = async (req, res) =>{
    const {name, lastName, birthday, email, address, hireDate, password, telephone, dui} = (req.params.id,
        {name, lastName, birthday, email, address, hireDate, password, telephone, dui}, {new: true})
    res.json({message: "employee updated successfully"})
}

export default employeesControllers;