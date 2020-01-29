exports.up = function(knex) {
    return knex.schema
    .createTable('puzzles', t => {
        t.increments();
        t.string('data', 128);
    })
    .createTable('users', t => {
        t.increments();
        t.string('password', 128).notNullable();
        t.string('email', 255).notNullable().unique();;
    })
    .createTable('user_puzzles', t => {
        t.time('time');
        t.string('difficulty', 128);
        t.string('data', 128).notNullable();
        t.increments();
        t
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE')

        t.integer('puzzleDs')
        t.string('email', 128)
        t.string('solved', 128)
        })
    };
    
    exports.down = function(knex) {
        return knex.schema
        .dropTableIfExists('user_puzzles')
        .dropTableIfExists('users')
        .dropTableIfExists('puzzles')
    };
            // .createTable('settings', t => {
                //     t.increments();
                //     t
                //     .integer('user_id')
                //     .unsigned()
                //     .references('id')
                //     .inTable('users')
                //     .onDelete('RESTRICT')
                //     .onUpdate('CASCADE')
                //     t.string('theme', 255).notNullable();
                //     t.boolean('text accessibility').notNullable();
                //     t.boolean('dyslexic accessibility').notNullable();
                //     t.boolean('sounds').notNullable();
                //     t.boolean('notes').notNullable();
                // })
                