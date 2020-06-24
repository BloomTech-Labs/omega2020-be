exports.up = async function (knex) {
	await knex.schema.createTable('puzzles', (tbl) => {
		tbl.increments();
		tbl.string('data', 128);
	});

	await knex.schema.createTable('users', (tbl) => {
		tbl.increments();
		tbl.string('password', 128).notNullable();
		tbl.string('email', 255).notNullable().unique();
	});

	await knex.schema.createTable('user_puzzles', (tbl) => {
		tbl.time('time');
		tbl.string('difficulty', 128);
		tbl.string('original', 128);
		tbl.string('solved', 128);
		tbl.string('data', 128).notNullable();
		tbl.increments();
		tbl
			.integer('user_id')
			.unsigned()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE')
			.onUpdate('CASCADE');

		tbl.integer('puzzleDs');
		tbl.string('email', 128);
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('user_puzzles');
	await knex.schema.dropTableIfExists('users');
	await knex.schema.dropTableIfExists('puzzles');
};

// .createTable('settings', tbl => {
//     tbl.increments();
//     tbl
//     .integer('user_id')
//     .unsigned()
//     .references('id')
//     .inTable('users')
//     .onDelete('RESTRICT')
//     .onUpdate('CASCADE')
//     tbl.string('theme', 255).notNullable();
//     tbl.boolean('text accessibility').notNullable();
//     tbl.boolean('dyslexic accessibility').notNullable();
//     tbl.boolean('sounds').notNullable();
//     tbl.boolean('notes').notNullable();
// })
