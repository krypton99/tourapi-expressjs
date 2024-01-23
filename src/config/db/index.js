const mysql = require('mysql');
const config = require('./db.config');

const pool = mysql.createPool({
    connectionLimit: config.CONNECTION_LIMIT,
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB,
});

module.exports = pool;
