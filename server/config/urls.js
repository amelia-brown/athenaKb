'use strict'
const DIALECT = 'postgres';
const HOST = process.env.POSTGRES || 'localhost';
const PORT = 5432;
const DB = 'kb';
const DB_USR = require('./dbAuth.js').DB_USR;
const DB_PASS = require('./dbAuth.js').DB_PASS;

module.exports = {
  default: 3003,
  database: `${DIALECT}://${DB_USR}:${DB_PASS}@${HOST}:${PORT}/${DB}`
};
