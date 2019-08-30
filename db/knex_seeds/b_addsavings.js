exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("savings").del(),
    knex.raw("ALTER SEQUENCE savings_id_seq RESTART WITH 1"),
    knex("savings").then(function() {
      // Inserts seed entries
      return knex("savings").insert([
        {
          name: "car",
          target: 600000,
          progress: 100000,
          user_id: 1
        }
      ]);
    })
  ]);
};
