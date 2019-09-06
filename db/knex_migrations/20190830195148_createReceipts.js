exports.up = function(knex) {
  return knex.schema.createTable("receipts", table => {
    table.increments("id").primary();
    table.integer("total_cents");
    table.timestamp("time_stamp").defaultTo(knex.fn.now());
    table.string("image_url");
    table.integer("budget_expenses_id");
    table
      .foreign("budget_expenses_id")
      .references("budget_expenses.id")
      .onDelete("CASCADE");
    table.integer("category_id");
    table
      .foreign("category_id")
      .references("categories.id")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("receipts");
};
