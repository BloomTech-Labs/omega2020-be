
exports.up = function(knex) {
    return knex.schema
    .createTable('user_puzzles', t => {
        t.increments();
        t
        .integer('puzzle_id')
        .unsigned()
        .references('id')
        .inTable('puzzles')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        t
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        t.time('time').notNullable();
        t.string('difficulty', 128).notNullable();
    })
    .createTable('users', t => {
        t.increments();
        t.string('password', 128).notNullable();
        t.string('email', 255).notNullable().unique();;
    })
    .createTable('settings', t => {
        t.increments();
        t
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('RESTRICT')
        .onUpdate('CASCADE')
        t.string('theme', 255).notNullable();
        t.boolean('text accessibility').notNullable();
        t.boolean('dyslexic accessibility').notNullable();
        t.boolean('sounds').notNullable();
        t.boolean('notes').notNullable();
    })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('settings')
        .dropTableIfExists('users')
        .dropTableIfExists('user_puzzles')
};
