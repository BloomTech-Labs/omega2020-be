
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('puzzles').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('puzzles').insert([
        {id: 1, data: "1,2,3,4,5,6,7,8,9,9,8,5,2,1,9,6,3,4,1,7,8,5,2,9,4,5,9,1,3,6,7,8,5,4,6,2,3,1,2"}
      ]);
    });
};
