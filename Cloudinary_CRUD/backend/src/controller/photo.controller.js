import cloudinary from "../config/cloudinary.js";

/**
 * @type {import('express').RequestHandler}
 */
const getAllPhotos = async (req, res) => {
  const result = await cloudinary.search
    .expression("folder:photos")
    .sort_by("created_at", "desc")
    .max_results(30)
    .execute();
  res.json(result);
};

/**
 * @type {import('express').RequestHandler}
 */
const uploadSinglePhoto = async (req, res) => {
  try {
    res.status(201).json({
      massage: "Image uploaded",
      url: req.file.path,
      public_id: req.file.filename,
    });
  } catch (err) {
    res.status(500).json({ error: err.massage });
  }
};

/**
 * @type {import('express').RequestHandler}
 */
const updateSinglePhoto = async (req, res) => {
  try {
    const { public_id } = req.params;
    await cloudinary.uploader.destroy(public_id);
    res.json({
      message: "Image updated",
      newImage: {
        url: req.file.path,
        public_id: req.file.filename,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

/**
 * @type {import('express').RequestHandler}
 */
const deleteSinglePhoto = async (req, res) => {
  try {
    const result = await cloudinary.uploader.destroy(req.params.public_id);
    res.json({ message: "Image deleted", result });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export {
  getAllPhotos,
  uploadSinglePhoto,
  updateSinglePhoto,
  deleteSinglePhoto,
};
