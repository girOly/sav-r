var express = require("express");
var router = express.Router();

const upload = require("../services/image-upload");

const singleUpload = upload.single("image");

router.post("/image-upload", function(req, res) {
  singleUpload(req, res, function(err) {
    return res.json({ image_url: req.file.location });
  });
});

module.exports = router;
