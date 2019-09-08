exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("budgets").del(),
    knex.raw("ALTER SEQUENCE budgets_id_seq RESTART WITH 1"),
    knex("budgets").then(function() {
      // Inserts seed entries
      return knex("budgets").insert([
        {
          income: 140000,
          end_date: null,
          user_id: 1,
          saving_id: 1
        },
        {
          income: 39000,
          end_date: null,
          user_id: 1,
          saving_id: 1
        },
        {
          income: 100,
          end_date: null,
          user_id: 1,
          saving_id: 1
        },
        {
          income: 35000000,
          end_date: null,
          user_id: 2,
          saving_id: 2
        },
        {
          income: 35000000,
          end_date: null,
          user_id: 3,
          saving_id: 3
        }
      ]);
    })
  ]);
};
