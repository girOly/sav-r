exports.up = function(knex) {
  return knex.schema.createTable("users", table => {
    table.increments("userID").primary();
    table.string("name");
    table.string("email");
    table.string("password");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("users");
};
