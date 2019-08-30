exports.up = function(knex) {
  return knex.schema.createTable("receipts", table => {
    table.increments("id").primary();
    table.integer("total_cents");
    table.timestamp("time_stamp").defaultTo(knex.fn.now());
    table.string("image_url");
    table.integer("store_id");
    table
      .foreign("store_id")
      .references("stores.id")
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
