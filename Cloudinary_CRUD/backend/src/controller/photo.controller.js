import cloudinary from "../config/cloudinary.js";

/**
 * @type {import('express').RequestHandler}
 */
const getAllPhotos = async (req, res) => {
  let arr = [];
  const query = "q_12";

  const result = await cloudinary.search
    .expression("folder:photos")
    .sort_by("created_at", "desc")
    .max_results(15)
    .execute();

  if (result.resources.length > 0) {
    arr = result.resources.map((item) => {
      const preview_url = item.url.replace(
        /image\/upload\/([^/]+)\//,
        `image/upload/${query}/`,
      );
      return {
        filename: item.filename,
        display_name: item.display_name,
        format: item.format,
        url: item.url,
        preview_url,
        public_id: item.public_id,
      };
    });
  }

  res.json({ total_count: result.total_count, items: arr });
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
