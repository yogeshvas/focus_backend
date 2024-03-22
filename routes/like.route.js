import express from "express";
import { LikeVideo, getLikes } from "../controller/like.controller.js";

const router = express.Router();

router.post("/addlike", LikeVideo);
router.get("/getlikes", getLikes);

export default router;
