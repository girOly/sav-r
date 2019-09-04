exports.up = function(knex) {
  return knex.schema.createTable("stores", table => {
    table.increments("storeID").primary();
    table.string("name");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable("stores");
};
