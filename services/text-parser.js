const parserHelpers = require("../helpers/parser-helpers");

// Finds the total cost of a purchase in a receipt
const totalFinder = textArray => {
  let lowercaseStrings = parserHelpers.toLowerCase(textArray);

  let cash = parserHelpers.paidCash(lowercaseStrings);

  let noCommas = parserHelpers.comasToDecimals(lowercaseStrings);

  let noDashes = parserHelpers.dashesToDecimals(noCommas);

  let decimalSelected = parserHelpers.decimalSelector(noDashes);

  let symbolsRemoved = parserHelpers.filterSymbols(decimalSelected);

  let twoFloatDecimal = parserHelpers.decimalPositionCheck(symbolsRemoved);

  let floatIntergers = parserHelpers.extractFloat(twoFloatDecimal);

  let nanRemoved = parserHelpers.nanFilter(floatIntergers);

  let sortedFloatIntergers = parserHelpers.returnLargestNum(nanRemoved);

  let secondHighest = parserHelpers.returnSecondLargestNum(nanRemoved);

  if (cash) {
    return secondHighest;
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
