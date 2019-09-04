exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("budgets").del(),
    knex.raw("ALTER SEQUENCE budgetID_seq RESTART WITH 1"),
    knex("budgets").then(function() {
      // Inserts seed entries
      return knex("budgets").insert([
        {
          income: 35000000,
          end_date: null,
          userID: 1,
          savingID: 1
        }
      ]);
    })
  ]);
};
