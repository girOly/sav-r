// converts all strings in array to lowercase
const toLowerCase = textArray => {
  let lowercaseArr = [];
  for (string of textArray) {
    lowercaseArr.push(string.toLowerCase());
  }
  return lowercaseArr;
};

// determines if a purchase was made with cash
const paidCash = textArray => {
  if (textArray.includes("cash")) {
    return true;
  } else if (textArray.includes("balance:cad")) {
    return true;
  } else if (textArray.includes("argent")) {
    return true;
  } else {
    return false;
  }
};

// converts dashes to decimals
const dashesToDecimals = textArray => {
  let decimalArr = [];

  for (string of textArray) {
    decimalArr.push(string.replace("-", "."));
  }

  return decimalArr;
};

// converts comas to decimals
const comasToDecimals = textArray => {
  let comalessArr = [];

  for (string of textArray) {
    comalessArr.push(string.replace(",", "."));
  }

  return comalessArr;
};

// Selects all strings which include '.'
const decimalSelector = textArray => {
  let decimalArr = [];
  for (string of textArray) {
    if (string.includes(".")) {
      decimalArr.push(string);
    }
  }

  return decimalArr;
};
// Filters symbols from strings, currently '$'
const filterSymbols = textArray => {
  let symbolessArr = [];
  for (string of textArray) {
    symbolessArr.push(string.replace("$", ""));
  }

  return symbolessArr;
};

// Checks that the position of a decimal will leave a 2 float integer
const decimalPositionCheck = textArray => {
  let verifiedArr = [];
  for (string of textArray) {
    if (string.charAt(string.length - 3) === ".") {
      verifiedArr.push(string);
    }
  }

  return verifiedArr;
};

// Parses floats from strings, returns array of NUMBERS
const extractFloat = textArray => {
  let numbersArray = [];
  for (string of textArray) {
    numbersArray.push(parseFloat(string));
  }

  return numbersArray;
};

//  Removes NaN from arrays, returns array of NUMBERS
const nanFilter = numbersArray => {
  let nanLess = [];
  for (number of numbersArray) {
    if (!isNaN(number)) {
      nanLess.push(number);
    }
  }
  return nanLess;
};

// Returns the largest number in an array of numbers
const returnLargestNum = numbersArray => {
  let sortedNumbersArray = [];

  sortedNumbersArray = numbersArray.sort((a, b) => a - b);

  return sortedNumbersArray[sortedNumbersArray.length - 1];
};

// Returns second largest numbers in array of numbers

const returnSecondLargestNum = numbersArray => {
  let sortedNumbersArray = [];

  sortedNumbersArray = numbersArray.sort((a, b) => a - b);

  return sortedNumbersArray[sortedNumbersArray.length - 2];
};

module.exports = {
  toLowerCase,
  paidCash,
  dashesToDecimals,
  comasToDecimals,
  decimalSelector,
  filterSymbols,
  decimalPositionCheck,
  extractFloat,
  nanFilter,
  returnLargestNum,
  returnSecondLargestNum
};
