const mysql = require('mysql');
require('dotenv').config();

let conn = mysql.createConnection({
    host: process.env.SQL_HNAME,
    user: process.env.SQL_UNAME,
    database: process.env.DBNAME,
    password: process.env.PWD,
});
conn.connect();

module.exports = {
    db: conn
};