exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("budget_expenses").del(),
    knex.raw("ALTER SEQUENCE budget_expenses_id_seq RESTART WITH 1"),
    knex("budget_expenses").then(function() {
      // Inserts seed entries
      return knex("budget_expenses").insert([
        {
          total_cents: 3000,
          comments: "dinner with rob",
          budget_id: 1,
          category_id: 6
        },
        {
          total_cents: 10000,
          comments: "housing",
          budget_id: 1,
          category_id: 2
        },
        {
          total_cents: 6000,
          comments: "resto",
          budget_id: 1,
          category_id: 3
        },
        {
          total_cents: 4000,
          comments: "lunch meeting with bob",
          budget_id: 1,
          category_id: 5
        },
        {
          total_cents: 1500,
          comments: "Got a new Shirt",
          budget_id: 1,
          category_id: 7
        },
        {
          total_cents: 2500,
          comments: "New Shoes",
          budget_id: 1,
          category_id: 8
        },
        {
          total_cents: 3000,
          comments: "groceries",
          budget_id: 1,
          category_id: 1
        },
        {
          total_cents: 999,
          comments: "advils",
          budget_id: 1,
          category_id: 4
        }
      ]);
    })
  ]);
};
