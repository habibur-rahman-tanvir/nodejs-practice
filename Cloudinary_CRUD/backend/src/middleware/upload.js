import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "../config/cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "photos",
    allowed_formats: ["jpg", "png", "jpeg", "webp"],
    // public_id: (req, file) => `User: ${Date.now()}`,
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: (req, file, callback) => {
    if (!file.mimetype.startsWith("image/")) {
      callback(new Error("Only images allowed"));
    }
    callback(null, true);
  },
});

export default upload;
