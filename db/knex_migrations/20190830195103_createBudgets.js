exports.up = function(knex) {
  return knex.schema.createTable("budgets", table => {
    table.increments("budgetID").primary();
    table.integer("income");
    table.timestamp("start_date").defaultTo(knex.fn.now());
    table.time("end_date");
    table.integer("userID");
    table
      .foreign("userID")
      .references("users.userID")
      .onDelete("CASCADE");
    table.integer("savingID");
    table
      .foreign("savingID")
      .references("savings.savingID")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("budgets");
};
