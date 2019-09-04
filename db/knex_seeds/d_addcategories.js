exports.seed = function(knex) {
  // Deletes ALL existing entries
  return Promise.all([
    knex("categories").del(),
    knex.raw("ALTER SEQUENCE categoryID_seq RESTART WITH 1"),
    knex("categories").then(function() {
      // Inserts seed entries
      return knex("categories").insert([
        {
          name: "Grocery"
        },
        {
          name: "Housing"
        },
        {
          name: "Restaurants"
        },
        {
          name: "Medical"
        },
        {
          name: "Transportation"
        },
        {
          name: "Clothing"
        },
        {
          name: "Holiday & Gifts"
        },
        {
          name: "Entertainment"
        }
      ]);
    })
  ]);
};
