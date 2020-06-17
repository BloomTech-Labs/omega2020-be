exports.seed = async (knex) => {
  await knex('user_puzzles').insert([
    { id: 100, difficulty: '1', data: '88888', puzzleDs: 10, email: 'omega' }
  ])
}
