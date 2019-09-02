var express = require("express");
var router = express.Router();
const textExtraction = require("../services/text-extraction");

const upload = require("../services/image-upload");

const singleUpload = upload.single("image");

router.post("/", function(req, res) {
  singleUpload(req, res, function(err) {
    let superObject = { image_url: req.file.location };
    textExtraction(superObject).then(result => {
      return res.json(result);
    });
    // extractedObject.then(result => {
    //   console.log("result", result);
    // });
    // console.log(extractedObject); // <---- this causes promise pending
    // return res.json(extractedObject);
  });
});

module.exports = router;
