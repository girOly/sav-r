// Receipt Object example
// {
// "image_url": "https://savr-uploads.s3.us-east-2.amazonaws.com/1567637449375",
// "total": 9.18,
// "comment": "blahblahblah",
// "category_id": 1
// }

const receiptParsing = function(receiptObj) {
  image_url = receiptObj.image_url;
  total_cents = transformTotal(receiptObj.total);
  budget_expenses_id = receiptObj.budget_expenses_id;
  category_id = receiptObj.category_id;

  return { image_url, total_cents, budget_expenses_id, category_id };
};

const expensesParsing = function(receiptObj) {
  total_cents = transformTotal(receiptObj.total);
  comments = receiptObj.comments;
  category_id = receiptObj.category_id;
  budget_id = receiptObj.budget_id;

  return { total_cents, comments, category_id, budget_id };
};

const transformTotal = function(total) {
  transformedTotal = total * 100;
  return transformedTotal;
};

module.exports = { receiptParsing, expensesParsing };
