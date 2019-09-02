// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");
const textParser = require("./text-parser");

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: "APIkey.json"
});

const textExtraction = imageUrlObj => {
  // Performs label detection on the image file
  let persistedURL = imageUrlObj;
  return client
    .textDetection(imageUrlObj.image_url)
    .then(results => {
      console.log(results);
      let textBlocksArray = [];
      const textBlocks = results[0].textAnnotations;
      textBlocks.forEach(block => textBlocksArray.push(block.description));
      textBlocksArray.shift();
      values = textParser(textBlocksArray, persistedURL.image_url);
      console.log(values);
      return values;
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
};

module.exports = textExtraction;
