// First Step
const comaConverter = textArray => {
  let comalessArr = [];
  // finds every coma in array of strings
  // converts coma into period (.replace)
  // returns modified array of text
  return comalessArr;
};
// Second Step
const decimalSelector = textArray => {
  let decimalArr = [];
  // .includes(string with a dot)
  // if true?
  // push into the output
  // returns modified array
  return decimalArr;
};
// Third Step
const filterSymbols = textArray => {
  let symbolessArr = [];
  // Could be a switch case?
  // if position at .this, remove
  // Find and remove symbols from the Data, plug er into the output
  return symbolessArr;
};
// Fourth Step
const decimalPositionCheck = textArray => {
  let verifiedArr = [];
  // it checks that the decimal is in the right position
  // pushes the true, ignores false
  // outputs the "Number"/String array
  return verifiedArr;
};
// Fifth Step
const parseInt = textArray => {
  let numbersArray = [];
  // Push em all into an array of NUMBERS (not strings)
  // Return array of numbers
  return numbersArray;
};
// Sixth Step
const returnLargestNum = numbersArray => {
  // Takes numbersArray
  // Sorts by ascending, takes .length -1 and returns it to the front end
};
const cashFilter = tobeDetermined => {
  // If the Word CASH shows up on Receipts
  // Return the Second Largest Number
  // --------------------------------
};
const textParser = (textArray, image_url) => {
  let results = { image_url: image_url, store: "unknown", total: "unknown" };
  results.store = textArray[0];
  // ---------------
  // let cleanedNumbers = [];
  // for (string of textArray) {
  //   if (string.includes(".")) {
  //     cleanedNumbers.push(string);
  //   }
  // }
  // let validateIsNumber = [];
  // for (string of cleanedNumbers) {
  //   // console.log(Number.isInteger(string.charAt[3]));
  //   let noCash = string.replace("$", "");
  //   let noComa = noCash.replace(",", "");
  //   // console.log(noComa);
  //   // console.log(Number.isInteger(noComa));
  //
  //   function isInt(n) {
  //     return n % 1 === 0;
  //   }
  //
  //   function isFloat(n) {
  //     return Number(n) === n && n % 1 !== 0;
  //   }
  //
  //   console.log(isFloat(noComa));
  // }
  // ---------------
  // console.log("---");
  // console.log(cleanedNumbers);
  // console.log("&&&");
  // console.log(validateIsNumber);
  // console.log("///");
  return results;
};
module.exports = textParser;
