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
          comments: "dinner with rob",
          budget_id: 1,
          category_id: 3
        },
        {
          total_cents: 1000,
          comments: "got advils",
          budget_id: 1,
          category_id: 4
        },
        {
          total_cents: 2000,
          comments: "Got a new soccer ball for jao",
          budget_id: 2,
          category_id: 7
        },
        {
          total_cents: 1000,
          comments: "lunch meeting with bob",
          budget_id: 1,
          category_id: 3
        },
        {
          total_cents: 5000,
          comments: "Got a new Shirt",
          budget_id: 1,
          category_id: 6
        },
        {
          total_cents: 4000,
          comments: "New Shoes",
          budget_id: 1,
          category_id: 6
        }
      ]);
    })
  ]);
};
