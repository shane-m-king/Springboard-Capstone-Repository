import mongoose from "mongoose";
const { Schema, models, model, Types } = mongoose;

const reviewSchema = new Schema(
  {
    userId: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    gameId: {
      type: Types.ObjectId,
      ref: "Game",
      required: true,
    },
    rating: {
      type: Number,
      required: [true, "Please provide a rating"],
      min: 0,
      max: 10,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    body: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Review = models.Review || model("Review", reviewSchema);

export default Review;
