exports.up = function(knex) {
  return knex.schema.createTable("budget_expenses", table => {
    table.increments("id").primary();
    table.integer("total_cents");
    table.string("comments");
    table.foreign("budget_id").references("budgets.id");
    table.foreign("category_id").references("categories.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("budget_expenses");
};
