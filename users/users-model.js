const db = require('../database/dbconfig.js');

module.exports = {
  add,
  findBy,
  findById,
};

async function add(user) {
  if (process.env.DB_ENV === 'production') {
    console.log(db.insert(user).into('users').returning('id'), 'add method');
    return db
      .insert(user)
      .into('users')
      .returning('id')
      .then((ids) => {
        console.log(ids[0]);
        return findById(ids[0]);
      })
      .catch((error) => {
        console.log(error);
        throw error;
      });
  } else {
    console.log(user);
    const [id] = await db('users').insert(user);
    console.log();
    return findById(id);
  }
}

function findBy(email) {
  return db('users').where(email);
}
function findById(id) {
  return db('users')
    .where({ id })
    .first()
    .catch((error) => {
      console.log('Error finding by id');
      throw error;
    });
}

//   const db = require('../database/dbconfig.js');

// module.exports = {
//     add,
//     findBy,
//     findById
// };
// async function add(user) {
//   const [id] = await db('users').insert(user);

//   return findById(id);
// }
// async function add(user) {
//   if (process.env.DB_ENV === 'production') {
//     return db.insert(user).into('users').returning('id')
//     .then(ids=> {
//       console.log(ids[0]);
//       return findById(ids[0]);
//     })
//     .catch(error => {
//       console.log(error);
//       throw error;
//     });
//   } else {
//     const [id] = await db('users').insert(user)
//     return findById(id)
//   }
// }

// function findBy(email) {
//     return db('users').where(email);
//   }
// function findById(id) {
//     return db('users')
//       .where({ id })
//       .first();
//   }
