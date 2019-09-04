exports.up = function(knex) {
  return knex.schema.createTable("savings", table => {
    table.increments("savingID").primary();
    table.string("name");
    table.integer("target");
    table.integer("progress");
    table.integer("userID");
    table
      .foreign("userID")
      .references("users.userID")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("savings");
};
