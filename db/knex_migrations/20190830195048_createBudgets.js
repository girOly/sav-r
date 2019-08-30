exports.up = function(knex) {
  return knex.schema.createTable("budgets", table => {
    table.increments("id").primary();
    table.integer("income");
    ttable.timestamp("start_date").defaultTo(knex.fn.now());
    table.time("end_date");
    table.foreign("user_id").references("users.id");
    table.foreign("saving_id").references("savings.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("budgets");
};
