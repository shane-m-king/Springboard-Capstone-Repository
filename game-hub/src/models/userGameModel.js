import mongoose from "mongoose";
const { Schema, models, model, Types } = mongoose;

const userGameSchema = new Schema(
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
    status: {
      type: String,
      enum: ["Owned", "Wishlisted", "Unowned", "Blacklisted"],
      required: true,
      default: "Unowned",
    },
    notes: {
      type: String,
      default: "",
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserGame = models.UserGame || model("UserGame", userGameSchema);

export default UserGame;
