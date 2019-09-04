exports.up = function(knex) {
  return knex.schema.createTable("budget_expenses", table => {
    table.increments("id").primary();
    table.integer("total_cents");
    table.string("comments");
    table.integer("budget_id");
    table
      .foreign("budget_id")
      .references("budgets.id")
      .onDelete("CASCADE");
    table.integer("category_id");
    table
      .foreign("category_id")
      .references("categories.id")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("budget_expenses");
};
