
exports.up = function(knex) {
  return knex.schema.createTable('records', table => {
    table.increments('id').primary()
    table.string('artist')
    table.string('album')
    table.integer('year')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('records')
};
