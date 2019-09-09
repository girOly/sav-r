exports.up = function(knex) {
  return knex.schema.createTable("budgets", table => {
    table.increments("id").primary();
    table.integer("income");
    table.text("name");
    table.timestamp("start_date").defaultTo(knex.fn.now());
    table.time("end_date");
    table.integer("user_id");
    table
      .foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE");
    table.integer("saving_id");
    table
      .foreign("saving_id")
      .references("savings.id")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("budgets");
};
