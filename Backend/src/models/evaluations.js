/*Fields:
comment
grade
role
idEmployee */

import {Schema, model} from "mongoose";

const evaluationSchema = new Schema(
    {
        comment: {
            type: String,
            require: true
        },
        grade:{
            type: Number,
            requiere: true,
            min: 1
        },
        role:{
            type: String,
            requiere: true
        },
        idEmployee:{
            type: Schema.Types.ObjectId,
            ref: "employees",
            requiere: true
        }
    }, {
        timestamps: true,
        strict: false
    }
)

export default model("Evaluation", evaluationSchema); 
