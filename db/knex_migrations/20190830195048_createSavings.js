exports.up = function(knex) {
  return knex.schema.createTable("savings", table => {
    table.increments("id").primary();
    table.string("name");
    table.integer("target");
    table.integer("progress");
    table.integer("user_id");
    table
      .foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("savings");
};
