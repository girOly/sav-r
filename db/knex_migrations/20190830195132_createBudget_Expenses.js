exports.up = function(knex) {
  return knex.schema.createTable("budget_expenses", table => {
    table.increments("budget_expenseID").primary();
    table.integer("total_cents");
    table.string("comments");
    table.integer("budgetID");
    table
      .foreign("budgetID")
      .references("budgets.budgetID")
      .onDelete("CASCADE");
    table.integer("categoryID");
    table
      .foreign("categoryID")
      .references("categories.categoryID")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("budget_expenses");
};
