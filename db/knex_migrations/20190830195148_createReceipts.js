exports.up = function(knex) {
  return knex.schema.createTable("receipts", table => {
    table.increments("receiptID").primary();
    table.integer("total_cents");
    table.timestamp("time_stamp").defaultTo(knex.fn.now());
    table.string("image_url");
    table.integer("storeID");
    table
      .foreign("storeID")
      .references("stores.storeID")
      .onDelete("CASCADE");
    table.integer("categoryID");
    table
      .foreign("categoryID")
      .references("categories.categoryID")
      .onDelete("CASCADE");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("receipts");
};
