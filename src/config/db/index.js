const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Thanhtuan0650',
    database: 'travelcore',
});

connection.connect((err) => {
    if (err) {
        console.error(err);
    } else {
        console.log('Connected to the database');
    }
});

module.exports = connection;
