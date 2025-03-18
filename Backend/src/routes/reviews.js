import express from "express"

const router = express.Router();

import reviewController from "../controllers/reviewsController.js";

router.route("/")
.get(reviewController.getReviews)
.post(reviewController.insertReview);

router.route("/:id")
.put(reviewController.insertReview)
.delete(reviewController.deleteReview);