/**
 * @type {import('express').RequestHandler}
 */
const uploadSinglePhoto = async (req, res) => {
  console.log(JSON.stringify(req.file, null, 3));
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

export { uploadSinglePhoto };
