exports.seed = async (knex) => {
  await knex('users').insert([
    { id: 1, password: 'omega', email: 'omega' }
  ])
};
