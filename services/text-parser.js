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

  //   // converts coma into period (.replace)
  //   // returns modified array of text
  return decimalArr;
};

const comasToDecimals = textArray => {
  let comalessArr = [];

  // let removeComa = string => string.forEach.replace(",", ".");

  // comalessArr = removeComa(textArray);
  //   // finds every coma in array of strings
  for (string of textArray) {
    comalessArr.push(string.replace(",", "."));
  }

  //   // converts coma into period (.replace)
  //   // returns modified array of text
  return comalessArr;
};
// Fourth Step
const decimalSelector = textArray => {
  // let decimalArr = textArray.filter(string => {
  //   string.includes(".");
  // });
  let decimalArr = [];
  for (string of textArray) {
    if (string.includes(".")) {
      decimalArr.push(string);
    }
  }
  // .includes(string with a dot)
  // if true?
  // push into the output
  // returns modified array
  return decimalArr;
};
// Fifth Step
const filterSymbols = textArray => {
  let symbolessArr = [];
  for (string of textArray) {
    symbolessArr.push(string.replace("$", ""));
  }
  // Could be a switch case?
  // if position at .this, remove
  // Find and remove symbols from the Data, plug er into the output

  return symbolessArr;
};
// Sixth Step
const decimalPositionCheck = textArray => {
  let verifiedArr = [];
  for (string of textArray) {
    if (string.charAt(string.length - 3) === ".") {
      verifiedArr.push(string);
    }
  }
  // it checks that the decimal is in the right position
  // pushes the true, ignores false
  // outputs the "Number"/String array
  return verifiedArr;
};
// Seventh Step
const extractFloat = textArray => {
  let numbersArray = [];
  for (string of textArray) {
    numbersArray.push(parseFloat(string));
  }
  // Push em all into an array of NUMBERS (not strings)
  // Return array of numbers
  return numbersArray;
};
//  Eighth Step
const nanFilter = numbersArray => {
  let nanLess = [];
  for (number of numbersArray) {
    if (!isNaN(number)) {
      nanLess.push(number);
    }
  }
  return nanLess;
};

// Ninth Step
const returnLargestNum = numbersArray => {
  let sortedNumbersArray = [];

  sortedNumbersArray = numbersArray.sort((a, b) => a - b);

  return sortedNumbersArray[sortedNumbersArray.length - 1];
  // Takes numbersArray
  // Sorts by ascending, takes .length -1 and returns it to the front end
};

// Tenth Step

const returnSecondLargestNum = numbersArray => {
  let sortedNumbersArray = [];

  sortedNumbersArray = numbersArray.sort((a, b) => a - b);

  return sortedNumbersArray[sortedNumbersArray.length - 2];
  // Takes numbersArray
  // Sorts by ascending, takes .length -1 and returns it to the front end
};

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
