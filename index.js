import express from "express";
import mongoose from "mongoose";
import likesRouter from "./routes/like.route.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/v1", likesRouter);

app.listen(process.env.PORT, (req, res) => {
  console.log("Server is running at port", process.env.PORT);
});
