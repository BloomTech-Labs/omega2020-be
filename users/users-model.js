const db = require('../database/dbconfig.js');

module.exports = {
    add,
    findBy,
    findById
};

async function add(user) {
  if (process.env.DB_ENV === 'production') {
    return db.insert(user).into('users').returning('id')
    .then(ids=> {
      console.log(ids[0]);
      return findById(ids[0]);
    })
    .catch(error => {
      console.log(error);
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
    .where({id})
    .first();
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