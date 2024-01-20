const mysql = require('mysql');
const config = require('./db.config');

const connection = mysql.createConnection({
    host: config.HOST,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DB,
});

connection.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = connection;
