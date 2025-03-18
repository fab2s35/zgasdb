const evaluationController = {}
import evaluationModel from "../models/evaluations.js";

//SELECT
evaluationController.getEvaluation = async (req, res) => {
    const evaluations = await evaluationModel.find().populate("idEmployee")
    res.json(evaluations);
};

//INSERT
evaluationController.insertEvaluation = async (req, res) => {
    const { comment, grade, role, idEmployee } = req.body;
    const newEvaluation = new evaluationModel({})
    await newEvaluation.save()
    res.json({message: "evaluation saved"})
}

//DELETE
evaluationController.deleteEvaluations = async (req, res) => {
    await evaluationModel.findByIdAndDelete(req.params.id)
    res.json({messeage: "evaluation deleted"})
}

//UPDATE
evaluationController.updateEvaluations = async (req, res) => {
    const { comment, grade, role, idEmployee  } = req.body;
    await evaluationModel.findByIdAndDelete(req.params.id,
        { comment, grade, role, idEmployee }, {new: true});
        res.json({message:"evaluation updated"})
};

export default evaluationController