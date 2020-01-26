
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('puzzles')
    .then(function () {
      // Inserts seed entries
      return knex('puzzles').insert([
        {id: 110, data: '.48....7...........732.651.7..4.5...3...7...8...8.3..5.541.736...........1....25.'}
      ]);
    });
};
