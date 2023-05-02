require('dotenv').config();
const mysql = require('mysql2/promise');

const database = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
})

database.getConnection()
.then(() => {
    console.log('DB Connected')
})

module.exports = database;