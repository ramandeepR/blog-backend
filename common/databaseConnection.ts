let mysql = require('mysql');
const res = require('express/lib/response');
let config = require('../config/serverConfig');
let connection;
class db {
    connectDB(){
        return new Promise(async (resolve, reject) => {
            connection = await mysql.createConnection(config);
            console.log('connected to DB')
            return resolve(connection);
        });
    }

    getDatabaseReference(){
        return new Promise(async (resolve, reject) => {
            resolve(connection);
        });
    }
}

module.exports = db;