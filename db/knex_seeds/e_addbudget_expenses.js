exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("budget_expenses").del(),
    knex.raw("ALTER SEQUENCE budget_expenses_id_seq RESTART WITH 1"),
    knex("budget_expenses").then(function() {
      // Inserts seed entries
      return knex("budget_expenses").insert([
        {
          total_cents: 500,
          comments: "is that forty bucks or something",
          budget_id: 1,
          category_id: 1
        }
      ]);
    })
  ]);
};
