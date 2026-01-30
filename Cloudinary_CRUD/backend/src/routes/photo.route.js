import express from "express";
import upload from "../middleware/upload.js";
import {
  deleteSinglePhoto,
  getAllPhotos,
  updateSinglePhoto,
  uploadSinglePhoto,
} from "../controller/photo.controller.js";

const router = express.Router();

router.get("/", getAllPhotos);
router.post("/", upload.single("profile"), uploadSinglePhoto);
router.put("/:public_id", upload.single("profile"), updateSinglePhoto);
router.delete("/:public_id", deleteSinglePhoto);

export default router;
