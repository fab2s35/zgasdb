/*Fields
  name
  lastName
  birthday
  email
  address
  hireDate
  password
  telephone
  dui
  isssNumber
  isVerified (esto es booleano)
*/

import { Schema, model } from "mongoose";

const employeesSchema = new Schema({
    name:{
        type: String,
        require: true
    },

    lastName:{
        type: String,
        require: true
    },

    birthday:{
        type: Date,
        require: true
    },

    email:{
        type:String,
        require: true
    },

    address:{
        type: String,
        require: true
    },

    hireDate:{
        type: Date,
        require: true
    },

    password:{
        type: String,
        require: true
    },

    telephone:{
        type: Numberer,
        require: true
    },

    dui:{
        
    }
})

export default model("Employees", employeesSchema);