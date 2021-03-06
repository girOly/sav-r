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
        },
        {
          name: "laptop",
          target: 100000,
          progress: 0,
          user_id: 2
        },
        {
          name: "air conditioner",
          target: 500.0,
          progress: 3000,
          user_id: 3
        }
      ]);
    })
  ]);
};
