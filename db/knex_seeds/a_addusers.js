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
        },
        {
          name: "Bob",
          email: "bob@gmail.com",
          password: "bob"
        },
        {
          name: "Lauren",
          email: "lauren@gmail.com",
          password: "lauren"
        },
        {
          name: "Jim",
          email: "jim@gmail.com",
          password: "jim"
        }
      ]);
    })
  ]);
};
