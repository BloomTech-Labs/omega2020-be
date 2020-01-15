  const db = require('../database/dbconfig.js');

module.exports = {
    add,
    findBy,
    findById
};

async function add(user) {
  if (process.env.DB_ENV === 'production') {
    console.log('production')
    return db('users').insert(user).returning('id')
    .then(id=> findById(id))
    .catch(error => {
      throw error;
    });
  } else {
    const [id] = await db('users').insert(user)
    return findById(id)
  }
}
function findBy(email) {
    return db('users').where(email);
  }
function findById(id) {
    return db('users')
    .where({'id': id})
    .first();
  }