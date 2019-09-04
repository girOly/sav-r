const totalByCategory = arrayOfExpenseObjs => {
  let catTotals = {
    Groceries: 0,
    Housing: 0,
    Restaurants: 0,
    Medical: 0,
    Transportation: 0,
    Clothing: 0,
    Gifts: 0,
    Entertainment: 0
  };

  for (expenseObject of arrayOfExpenseObjs) {
    // check if catTotals already has the key (name of category) that we are looking for
    catTotals[expenseObject.name] += expenseObject.total_cents;
  }
  return catTotals;
};

module.exports = totalByCategory;
