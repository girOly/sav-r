// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: "APIkey.json"
});

const textExtraction = imageUrlObj => {
  // Performs label detection on the image file
  client
    .textDetection(imageUrlObj.image_url)
    .then(results => {
      // console.log("results", results[0].textAnnotations);
      // console.log("results", results[0].textAnnotations);
      console.log("==========================");
      let textBlocksArray = [];
      const textBlocks = results[0].textAnnotations;
      textBlocks.forEach(block => textBlocksArray.push(block.description));
      textBlocksArray.shift();
      console.dir(textBlocksArray, { maxArrayLength: null });
      // const labels = results[0].labelAnnotations;
      // labels.forEach(label => console.log(label.description));
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
};

module.exports = textExtraction;
