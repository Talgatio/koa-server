const db = require('../connections/pg');

exports.createUser = async (email, password) => {
  try {
    return await db.one('insert into users(email, password) values($1, $2) RETURNING *', [email, password]);
  } catch (err) {
    throw (err);
  }
};

exports.login = async (email) => {
  try {
    return await db.one('select * from users where email=$1', [email]);
  } catch (err) {
    throw (err);
  }
}
