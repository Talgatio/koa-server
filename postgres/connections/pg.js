const promise = require('bluebird');
const postgresql = require('pg-promise');

/* configuration */
const config = require('../config');

const pgp = postgresql({ promiseLib: promise });
const connection = {
  host: config.host,
  port: config.port,
  database: config.database,
  user: config.user,
  password: config.password,
};

module.exports = pgp(connection);
