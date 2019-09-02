const textParser = (textArray, image_url) => {
  let results = { image_url: image_url, store: "unknown", total: "unknown" };
  results.store = textArray[0];
  return results;
};
module.exports = textParser;
