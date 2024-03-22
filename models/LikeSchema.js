import mongoose from "mongoose";

const likeSchema = mongoose.Schema(
  {
    likes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

export const Likes = mongoose.model("Likes", likeSchema);
