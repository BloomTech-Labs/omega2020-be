
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_puzzles')
    .then(function () {
      // Inserts seed entries
      return knex('user_puzzles').insert([
     { id: 100, difficulty: '1', data: '88888', puzzleDs: 10, email: 'omega'}
      ]);   
    });
};
