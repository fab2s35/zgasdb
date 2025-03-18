import express from "express"

const router = express.Router();

import evaluationController from "../controllers/evaluationsController.js";

router.route("/")
.get(evaluationController.getEvaluation)
.post(evaluationController.insertEvaluation);

router.route("/:id")
.put(evaluationController.updateEvaluations)
.delete(evaluationController.deleteEvaluations);

export default router;