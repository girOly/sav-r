const arrSplit = inputObject => {
  let categories = [];
  let expenses = [];

  for (let key in inputObject) {
    categories.push(key);
    expenses.push(inputObject[key]);
  }
  return { categories, expenses };
};
let catTotals = {
  Groceries: 30000,
  Housing: 70000,
  Restaurants: 4000,
  Medical: 0,
  Transportation: 7500,
  Clothing: 3500,
  Gifts: 2000,
  Entertainment: 4000
};

console.log(keyValueArrays(catTotals));
