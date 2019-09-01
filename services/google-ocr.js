// Imports the Google Cloud client library
const vision = require("@google-cloud/vision");

// Creates a client
const client = new vision.ImageAnnotatorClient({
  keyFilename: "APIkey.json"
});

const textExtraction = imageUrl => {
  // Performs label detection on the image file
  client
    .textDetection(imageUrl.image_url)
    .then(results => {
      // const labels = results[0].labelAnnotations;
      console.log("results", results);
      // labels.forEach(label => console.log(label.description));
    })
    .catch(err => {
      console.error("ERROR:", err);
    });
};

module.exports = textExtraction;
