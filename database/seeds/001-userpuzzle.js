
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user_puzzles')
    .then(function () {
      // Inserts seed entries
      return knex('user_puzzles').insert([
     { id: 100, difficulty: '1', data: '88888', user_id: 1, puzzleDs: 10, email: 'omega2021'},
     { id: 101, difficulty: '2', data: '999999', user_id: 2, puzzleDs: 11, email: 'omega2022'},
     { id: 102, difficulty: '3', data: '55555', user_id: 3, puzzleDs: 12, email: 'omega2023'}
      ]);   
    });
};
