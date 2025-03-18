const reviewController = {}
import reviewModel from "../models/review.js";

//SELECT
reviewController.getReviews = async (req, res) => {
    const reviews = await reviewModel.find().populate("idClient")
    res.json(reviews);
};

//INSERT
reviewController.insertReview = async (req, res) => {
    const { comment, rating, idClient } = req.body;
    const newReview = new reviewModel({})
    await newReview.save()
    res.json({message: "review saved"})
}

//DELETE
reviewController.deleteReview = async (req, res) => {
    await reviewModel.findByIdAndDelete(req.params.id)
    res.json({messeage: "review deleted"})
}

//UPDATE
reviewController.updateReview = async (req, res) => {
    const {comment, rating, idClient } = req.body;
    await reviewModel.findByIdAndDelete(req.params.id,
        { comment, rating, idClient }, {new: true});
        res.json({message:"review updated"})
};

export default reviewController