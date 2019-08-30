exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("users").del(),
    knex.raw("ALTER SEQUENCE users_id_seq RESTART WITH 1"),
    knex("users").then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          name: "Jao",
          email: "j@o.com",
          password: "jao"
        }
      ]);
    })
  ]);
};
