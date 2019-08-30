exports.up = function(knex) {
  return knex.schema.createTable("receipts", table => {
    table.increments("id").primary();
    table.integer("total_cents");
    table.timestamp("time_stamp").defaultTo(knex.fn.now());
    table.string("image_url");
    table.foreign("store_id").references("stores.id");
    table.foreign("category_id").references("categories.id");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("receipts");
};
