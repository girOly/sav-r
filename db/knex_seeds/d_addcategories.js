exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("categories").del(),
    knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"),
    knex("categories").then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        {
          name: "groceries"
        }
      ]);
    })
  ]);
};
