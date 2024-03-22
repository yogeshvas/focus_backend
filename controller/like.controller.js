import { Likes } from "../models/LikeSchema.js";

export const LikeVideo = async (req, res) => {
  try {
    // Assume there's only one entry for the whole website
    const websiteLikesEntry = await Likes.findOne();

    if (websiteLikesEntry) {
      // If an entry exists, increment the likes count by one
      websiteLikesEntry.likes += 1;
      await websiteLikesEntry.save();
      return res.status(200).json({
        message: "Like added successfully",
        likes: websiteLikesEntry.likes,
      });
    } else {
      // If no entry exists, create a new entry with the initial like count as 1
      const newLikes = new Likes({ likes: 1 });
      await newLikes.save();
      return res
        .status(200)
        .json({ message: "Like added successfully", likes: 1 });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};

export const getLikes = async (req, res) => {
  try {
    const existingLikes = await Likes.findOne();
    if (existingLikes) {
      return res.status(200).json({ likes: existingLikes.likes });
    } else {
      return res.status(404).json({ message: "Likes not found" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal server error", error: error.message });
  }
};
