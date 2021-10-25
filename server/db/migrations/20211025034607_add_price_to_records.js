
exports.up = function(knex) {
  return knex.schema.alterTable('records', table => {
    table.integer('price')
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('records', table => {
    table.dropColumn('price')
  })
};
