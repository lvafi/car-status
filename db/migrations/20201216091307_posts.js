
exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
      table.increments('id');
      table.string('title');
      table.text('content');
      table.string('image_url');
      table.integer('view_count');
      table.timestamp('created_at').defaultTo(knex.fn.now());
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('posts');
  };
