exports.up = function(knex) {
  knex.schema
    .createTable('users', users => {
      users
       .increments();
    
      users
        .string('username', 255)
          .notNullable()
          .unique();
      users
        .string('password', 255)
          .notNullable();
    });
};

exports.down = (knex, Promise) => (
  knex.schema.dropTableIfExists('users');
);
