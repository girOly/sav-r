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

// Finds the total cost of a purchase in a receipt
const totalFinder = textArray => {
  let lowercaseStrings = toLowerCase(textArray);

  let cash = paidCash(lowercaseStrings);

  let noCommas = comasToDecimals(lowercaseStrings);
  let noDashes = dashesToDecimals(noCommas);
  let decimalSelected = decimalSelector(noDashes);

  let symbolsRemoved = filterSymbols(decimalSelected);

  let twoFloatDecimal = decimalPositionCheck(symbolsRemoved);

  let floatIntergers = extractFloat(twoFloatDecimal);
  let nanRemoved = nanFilter(floatIntergers);
  let sortedFloatIntergers = returnLargestNum(nanRemoved);
  let paidCash = returnSecondLargestNum(nanRemoved);
  if (cash === true) {
    return paidCash;
  } else {
    return sortedFloatIntergers;
  }
};

const textParser = (textArray, image_url) => {
  // add values that need to be returned in the same format as below
  let results = {
    image_url: image_url,
    store: "unknown",
    total: "unknown"
  };

  // provision nameFinder function
  results.store = textArray[0];

  // totalFinder

  results.total = totalFinder(textArray);

  return results;
};

module.exports = textParser;
