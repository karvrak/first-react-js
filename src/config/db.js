const mysql = require('mysql');
const db =  mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"magic-app"
})

module.exports = db;