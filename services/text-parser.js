const textParser = (textArray, image_url) => {
  let results = { image_url: image_url, store: "unknown", total: "unknown" };
  results.store = textArray[0];
  // ---------------
  let cleanedNumbers = [];
  for (string of textArray) {
    if (string.includes(".")) {
      cleanedNumbers.push(string);
    }
  }
  let validateIsNumber = [];
  for (string of cleanedNumbers) {
    console.log(Number.isInteger(string.charAt[3]));
  }
  // ---------------
  console.log("---");
  console.log(cleanedNumbers);
  console.log("&&&");
  console.log(validateIsNumber);
  console.log("///");
};
module.exports = textParser;
