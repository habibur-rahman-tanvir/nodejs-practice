import express from "express";
import { uploadSinglePhoto } from "../controller/photo.controller.js";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post("/", upload.single("profile"), uploadSinglePhoto);

router.get("/", (req, res) => {
  res.send("Photos");
});

export default router;
