  const db = require('../database/dbconfig.js');
  const Users = require('../users/users-model.js');

module.exports = {
    add,
    findBy,
    findById
};
async function add(user) {
  const [id] = await db('users').insert(user);

  return findById(id);
}
function findBy(email) {
    return db('users').where(email);
  }
function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }